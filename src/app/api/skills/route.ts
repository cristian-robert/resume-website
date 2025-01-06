import { NextResponse } from "next/server";
import prisma from "@/lib/db/prisma";

export async function GET() {
  try {
    const skills = await prisma.skills.findMany();
    return NextResponse.json(skills);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch skills" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const skill = await prisma.skills.create({ data });
    return NextResponse.json(skill);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create skill" },
      { status: 500 }
    );
  }
}
