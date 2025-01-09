import { NextRequest, NextResponse } from "next/server";

const ipRequestCounts = new Map<string, { count: number; timestamp: number }>();
const WINDOW_SIZE = 3600000;
const MAX_REQUESTS = 5;

export function rateLimit(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") ?? "anonymous";
  const now = Date.now();
  const windowData = ipRequestCounts.get(ip) ?? { count: 0, timestamp: now };

  // Reset if outside window
  if (now - windowData.timestamp > WINDOW_SIZE) {
    windowData.count = 0;
    windowData.timestamp = now;
  }

  if (windowData.count >= MAX_REQUESTS) {
    return NextResponse.json(
      { error: "Rate limit exceeded. Try again later." },
      { status: 429 }
    );
  }

  windowData.count++;
  ipRequestCounts.set(ip, windowData);
  return null;
}
