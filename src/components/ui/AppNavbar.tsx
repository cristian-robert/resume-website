"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
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
        {/* Desktop Navigation */}
        <NavBody className="py-2">
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <SignedOut>
              <SignInButton
                mode="modal"
                appearance={clerkAppearance}
              >
                <NavbarButton
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-md text-sm"
                >
                  Login
                </NavbarButton>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" appearance={clerkAppearance} />
            </SignedIn>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <SignedOut>
                <SignInButton
                  mode="modal"
                  appearance={clerkAppearance}
                >
                  <NavbarButton
                    className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-md text-sm w-full"
                  >
                    Login
                  </NavbarButton>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl="/" appearance={clerkAppearance} />
              </SignedIn>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
