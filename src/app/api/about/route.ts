import { NextResponse } from "next/server";
import prisma from "@/lib/db/prisma";

export async function GET() {
  try {
    const about = await prisma.about.findFirst();
    return NextResponse.json(about);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch about data" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const about = await prisma.about.create({ data });
    return NextResponse.json(about);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create about data" },
      { status: 500 }
    );
  }
}
