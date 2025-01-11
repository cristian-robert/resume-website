import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";
import { rateLimit } from "@/lib/rateLimit";

export async function POST(request: NextRequest) {
  // Check rate limit
  const rateLimitResult = rateLimit(request);
  if (rateLimitResult) return rateLimitResult;

  try {
    const data = await request.json();

    // Validate input
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Length limits
    if (data.message.length > 1000 || data.name.length > 100) {
      return NextResponse.json(
        { error: "Message or name too long" },
        { status: 400 }
      );
    }

    await sendEmail(data);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
