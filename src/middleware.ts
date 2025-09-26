import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret"; // ⚠️ replace with env var

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  const { pathname } = req.nextUrl;

  // Only protect dashboard routes
  if (pathname.startsWith("/user/dashboard") || pathname.startsWith("/admin/dashboard")) {
    if (!token) {
      // No token → redirect to login
      return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
      // Verify token
      const decoded = jwt.verify(token, JWT_SECRET) as {
        role: string;
        id: string;
        email: string;
      };

      // Role-based protection
      if (pathname.startsWith("/admin") && decoded.role !== "ADMIN") {
        return NextResponse.redirect(new URL("/user/dashboard", req.url));
      }
      if (pathname.startsWith("/user") && decoded.role !== "USER") {
        return NextResponse.redirect(new URL("/admin/dashboard", req.url));
      }

      // ✅ Allow request
      return NextResponse.next();
    } catch (err) {
      console.error("Invalid token:", err);
      // Bad token → force login
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // Default allow
  return NextResponse.next();
}

// Config: apply middleware only on these paths
export const config = {
  matcher: ["/user/dashboard/:path*", "/admin/dashboard/:path*"],
};
