import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// Store user consent preferences
export async function PUT(request: Request) {
  const { userId } = auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  
  try {
    const data = await request.json();
    const { essential, functional, analytics, marketing, timestamp } = data;
    
    // Store consent in database
    await prisma.userConsent.upsert({
      where: { userId },
      update: {
        essential,
        functional,
        analytics,
        marketing,
        updatedAt: new Date(timestamp)
      },
      create: {
        userId,
        essential,
        functional,
        analytics,
        marketing,
        createdAt: new Date(timestamp),
        updatedAt: new Date(timestamp)
      }
    });
    
    // Store consent history for GDPR compliance
    await prisma.userConsentHistory.create({
      data: {
        userId,
        essential,
        functional,
        analytics,
        marketing,
        timestamp: new Date(timestamp)
      }
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to save consent preferences:", error);
    return NextResponse.json(
      { error: "Failed to save consent preferences" },
      { status: 500 }
    );
  }
}

// Get user consent preferences
export async function GET() {
  const { userId } = auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  
  try {
    const consent = await prisma.userConsent.findUnique({
      where: { userId }
    });
    
    return NextResponse.json(consent || {
      essential: true,
      functional: false,
      analytics: false,
      marketing: false
    });
  } catch (error) {
    console.error("Failed to get consent preferences:", error);
    return NextResponse.json(
      { error: "Failed to get consent preferences" },
      { status: 500 }
    );
  }
}
