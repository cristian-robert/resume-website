import { clerkMiddleware } from '@clerk/nextjs/server';

// Make all routes public for now, protection will be added later as needed.
export default clerkMiddleware();

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
