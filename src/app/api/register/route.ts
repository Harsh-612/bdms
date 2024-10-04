import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";
import { z } from "zod";

const prisma = new PrismaClient();

const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
});

export async function POST(req: NextRequest) {
  try {
    const { email, password, firstName, lastName } = await req.json()

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: "Email already in use" }, { status: 400 });
    }
    const user = await prisma.user.create({
      data: {
        email,
        password,
        firstName,
        lastName,
      }
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    
    console.error("Registration error:", error);
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}