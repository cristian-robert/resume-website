"use client";

import { UserProfile, OrganizationSwitcher, OrganizationProfile, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { clerkAppearance } from "@/lib/clerkAppearance";

export default function UserProfilePage() {

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-8 px-4">
      <SignedIn>
        <div className="mb-8">
          <OrganizationSwitcher appearance={clerkAppearance} />
        </div>
        <div className="mb-8 w-full max-w-xl">
          <UserProfile appearance={clerkAppearance} />
        </div>
        <div className="w-full max-w-xl">
          <OrganizationProfile appearance={clerkAppearance} />
        </div>
      </SignedIn>
      <SignedOut>
        <div className="text-center">
          <p>You must be signed in to view your profile.</p>
          <SignInButton mode="modal" appearance={clerkAppearance}>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
              Sign In
            </button>
          </SignInButton>
        </div>
      </SignedOut>
    </main>
  );
}