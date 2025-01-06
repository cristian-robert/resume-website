import { NextResponse } from "next/server";
import prisma from "@/lib/db/prisma";

export async function GET() {
  try {
    const experiences = await prisma.experience.findMany({
      orderBy: { id: "desc" },
    });
    return NextResponse.json(experiences);
  } catch (error: unknown) {
    console.error("Failed to fetch experiences:", error);
    return NextResponse.json(
      { error: "Failed to fetch experiences" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const experience = await prisma.experience.create({ data });
    return NextResponse.json(experience);
  } catch (error: unknown) {
    console.error("Failed to create experience:", error);
    return NextResponse.json(
      { error: "Failed to create experience" },
      { status: 500 }
    );
  }
}
