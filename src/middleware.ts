import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import * as jose from "jose";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "supersecret");

type JwtPayloadType = {
  id: string;
  email: string;
  role: string;
};

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const { pathname } = req.nextUrl;

  // Protect dashboard routes
  if (pathname.startsWith("/user/dashboard") || pathname.startsWith("/admin/dashboard")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
      // ✅ Verify JWT using jose
      const { payload } = await jose.jwtVerify(token, JWT_SECRET);

      const decoded = payload as JwtPayloadType;

      // Role-based protection
      if (pathname.startsWith("/admin") && decoded.role !== "ADMIN") {
        return NextResponse.redirect(new URL("/user/dashboard", req.url));
      }
      if (pathname.startsWith("/user") && decoded.role !== "USER") {
        return NextResponse.redirect(new URL("/login", req.url));
      }

      // ✅ Allow request
      return NextResponse.next();
    } catch (err) {
      console.error("Invalid token:", err);
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

// Apply middleware only to dashboard paths
export const config = {
  matcher: ["/user/dashboard/:path*", "/admin/dashboard/:path*"],
};
