import { clerkMiddleware } from '@clerk/nextjs/server';
 
export default clerkMiddleware({
  publicRoutes: [
    "/",
    "/about",
    "/#experience", 
    "/#skills", 
    "/#contact",
    "/api/public(.*)",
    "/api/auth/(.*)"
  ],
});
 
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
