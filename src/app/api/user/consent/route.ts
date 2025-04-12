import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Store user consent preferences
export async function PUT(request: Request) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const data = await request.json();
    const { essential, functional, analytics, marketing, timestamp } = data;

    // Store consent in database
    await prisma.UserConsent.upsert({
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
    await prisma.UserConsentHistory.create({
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
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const consent = await prisma.UserConsent.findUnique({
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

// Handle initial consent from registration
export async function POST(request: Request) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const data = await request.json();
    const { marketing, analytics, consentTimestamp } = data;

    // Store consent in database
    await prisma.UserConsent.create({
      data: {
        userId,
        essential: true, // Always required
        functional: false,
        analytics: analytics || false,
        marketing: marketing || false,
        createdAt: new Date(consentTimestamp),
        updatedAt: new Date(consentTimestamp)
      }
    });

    // Store consent history for GDPR compliance
    await prisma.UserConsentHistory.create({
      data: {
        userId,
        essential: true,
        functional: false,
        analytics: analytics || false,
        marketing: marketing || false,
        timestamp: new Date(consentTimestamp)
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to save initial consent:", error);
    return NextResponse.json(
      { error: "Failed to save initial consent" },
      { status: 500 }
    );
  }
}
