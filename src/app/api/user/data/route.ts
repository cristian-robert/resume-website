import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// Data export endpoint for GDPR compliance
export async function GET() {
  const { userId } = auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  
  try {
    // Get user data from Clerk (this requires Clerk's backend API)
    const clerkUser = await prisma.clerkUser.findUnique({
      where: { id: userId }
    });
    
    // Get consent data
    const consent = await prisma.userConsent.findUnique({
      where: { userId }
    });
    
    // Get consent history
    const consentHistory = await prisma.userConsentHistory.findMany({
      where: { userId },
      orderBy: { timestamp: 'desc' }
    });
    
    // Combine all user-related data
    const userData = {
      user: clerkUser,
      consent,
      consentHistory
    };
    
    // Return data as downloadable JSON
    return new NextResponse(JSON.stringify(userData, null, 2), {
      headers: {
        'Content-Type': 'application/json',
        'Content-Disposition': `attachment; filename="user-data-${userId}.json"`
      }
    });
  } catch (error) {
    console.error("Failed to export user data:", error);
    return NextResponse.json(
      { error: "Failed to export user data" },
      { status: 500 }
    );
  }
}
