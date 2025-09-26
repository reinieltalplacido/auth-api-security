// src/app/api/auth/signup/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { Prisma } from "@prisma/client";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, password, confirmPassword } = body ?? {};

    // basic validation
    if (!fullName || !email || !password || !confirmPassword) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }
    if (password !== confirmPassword) {
      return NextResponse.json({ error: "Passwords do not match" }, { status: 400 });
    }

    // check existing email
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json({ error: "Email already registered" }, { status: 409 });
    }

    // hash and create
    const hashed = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name: fullName,
        email,
        password: hashed,
        // use the enum value expected by Prisma schema; string "USER" is safe
        role: "USER",
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });

    return NextResponse.json({ message: "User created successfully", user }, { status: 201 });
  } catch (err) {
    console.error("SIGNUP ERROR:", err);

    // Prisma unique constraint
    if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2002") {
      return NextResponse.json({ error: "Unique constraint failed" }, { status: 409 });
    }

    // enum mismatch / other Prisma issues will show up in the server logs — return 500 to client
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
