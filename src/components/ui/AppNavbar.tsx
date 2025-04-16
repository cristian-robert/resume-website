"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { useState } from "react";
import { clerkAppearance } from "@/lib/clerkAppearance";

export default function AppNavbar() {
  const navItems = [
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "Skills", link: "#skills" },
    { name: "Contact", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation (xl and up) */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <SignedOut>
              <SignInButton mode="modal" appearance={clerkAppearance}>
                <NavbarButton className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-md text-sm">
                  Login
                </NavbarButton>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" appearance={clerkAppearance} />
            </SignedIn>
          </div>
        </NavBody>

        {/* Mobile and Medium Screen Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex items-center gap-3">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(true)}
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-md text-sm"
              >
                Menu
              </NavbarButton>
              <SignedOut>
                <SignInButton mode="modal" appearance={clerkAppearance}>
                  <NavbarButton className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-md text-sm">
                    Login
                  </NavbarButton>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl="/" appearance={clerkAppearance} />
              </SignedIn>
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="min-h-[100vh] md:min-h-[50vh]" // Adjusted height for medium screens
          >
            <div className="flex flex-col items-center justify-center gap-8 w-full">
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl md:text-2xl font-semibold text-white hover:text-purple-400 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
