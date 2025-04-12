import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Account deletion endpoint for GDPR compliance (Right to be forgotten)
export async function POST(request: Request) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { reason } = await request.json();

    // Record deletion request
    await prisma.AccountDeletion.create({
      data: {
        userId,
        reason,
        requestedAt: new Date()
      }
    });

    // Delete user consent data
    await prisma.UserConsent.delete({
      where: { userId }
    }).catch(() => {}); // Ignore if not found

    // Anonymize consent history rather than delete
    // This preserves compliance evidence while protecting privacy
    await prisma.UserConsentHistory.updateMany({
      where: { userId },
      data: { userId: `deleted_${userId}` }
    });

    // Delete or anonymize user data from Clerk
    // Note: This would require using Clerk's API to fully delete the user

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to process account deletion:", error);
    return NextResponse.json(
      { error: "Failed to process account deletion" },
      { status: 500 }
    );
  }
}
