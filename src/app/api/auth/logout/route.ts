import { NextResponse } from "next/server";

export async function POST() {
  // Clear the token cookie by setting it to empty and expired
  const response = NextResponse.json({ message: "Logged out successfully" });

  response.cookies.set("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 0, // expire immediately
  });

  return response;
}
