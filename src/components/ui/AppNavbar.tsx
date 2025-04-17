"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import { clerkAppearance } from "@/lib/clerkAppearance";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

export default function AppNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const visibleSectionsRef = useRef<Set<string>>(new Set());

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Effect to ensure proper initial section detection
  useEffect(() => {
    // This runs once on mount to determine initially active section
    // based on scroll position when page loads
    const determineInitialActiveSection = () => {
      const viewportHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      
      // Check hero section first
      const heroSection = document.querySelector("section:first-of-type");
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        if (heroRect.top <= 150 && heroRect.bottom >= 150) {
          setActiveSection(null);
          return;
        }
      }
      
      // Check other sections in navigation order
      for (const item of navItems) {
        const sectionId = item.link.replace('#', '');
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      
      // If no section is found to be active, don't highlight anything
      setActiveSection(null);
    };
    
    determineInitialActiveSection();
  }, [navItems]);
  
  // Set up intersection observer for each section
  useEffect(() => {
    // Add hero section to the observation list
    const heroSection = document.querySelector("section:first-of-type");
    const sections = [
      // Use a special ID for the hero section since it doesn't have an ID
      // In this case it's the first section on the page
      { id: "hero", element: heroSection },
      ...navItems.map(item => ({
        id: item.link.replace('#', ''),
        element: document.getElementById(item.link.replace('#', ''))
      }))
    ].filter(section => section.element);
    
    // Clear visibility set initially
    visibleSectionsRef.current.clear();
    
    // Set initial visibility state - important for first page load
    if (heroSection && heroSection.getBoundingClientRect().top <= 150) {
      visibleSectionsRef.current.add('hero');
    }

    const observerOptions = {
      // Negative top margin to trigger sections earlier when scrolling down
      // Negative bottom margin to avoid sections triggering too early when scrolling up
      rootMargin: "-80px 0px -400px 0px", 
      threshold: [0.0, 0.2, 0.4] // Multiple thresholds for better detection
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      // Update our set of visible sections based on the entries that changed
      entries.forEach(entry => {
        // For the hero section which might not have an ID, use our special ID
        const sectionId = entry.target.id || 
          (entry.target === heroSection ? 'hero' : entry.target.id);
            
        if (entry.isIntersecting) {
          visibleSectionsRef.current.add(sectionId);
        } else {
          visibleSectionsRef.current.delete(sectionId);
        }
      });
      
      // Determine the active section based on all currently visible sections
      if (visibleSectionsRef.current.has('hero')) {
        setActiveSection(null); // Hero section has priority - no highlight
      } else {
        // Look for the first visible section according to nav order
        let foundActive = false;
        for (const item of navItems) {
          const sectionId = item.link.replace('#', '');
          if (visibleSectionsRef.current.has(sectionId)) {
            setActiveSection(sectionId);
            foundActive = true;
            break;
          }
        }
        
        // If no sections are visible, clear the active state
        if (!foundActive) {
          setActiveSection(null);
        }
      }
    };

    // Create observer
    observerRef.current = new IntersectionObserver(callback, observerOptions);
    
    // Start observing all sections
    sections.forEach(section => {
      if (section.element) {
        observerRef.current?.observe(section.element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Handle manual navigation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    // Allow default behavior to navigate first
    // After navigating, we'll clear the hash but keep the sections visible according to scroll position
    
    // Reset URL hash after navigation without changing scroll position
    setTimeout(() => {
      const scrollPos = window.scrollY;
      window.history.replaceState({}, document.title, window.location.pathname);
      // Ensure scroll position is maintained
      window.scrollTo(0, scrollPos);
    }, 500);
  };

  return (
    <motion.header
      initial={{ y: 0, opacity: 1 }}
      animate={{ 
        y: 0,
        opacity: 1,
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        backgroundColor: isScrolled ? "rgba(0,0,0,0.7)" : "transparent" 
      }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3 transition-all"
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center z-10">
          <div className="relative">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 0 0 rgba(124, 58, 237, 0)",
                  "0 0 0 8px rgba(124, 58, 237, 0.3)",
                  "0 0 0 0 rgba(124, 58, 237, 0)"
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="absolute inset-0 rounded-full"
            />
            <div className="rounded-full bg-black/40 backdrop-blur-sm border border-gray-800 p-1.5 md:p-2 relative overflow-hidden">
              <Image
                src="/removedbg.png"
                alt="Logo"
                width={36}
                height={36}
                className="h-7 w-7 md:h-9 md:w-9 relative z-10"
              />
              <motion.div 
                className="absolute inset-0 bg-purple-600/20"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <nav className="flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                onClick={(e) => handleNavClick(e, item.link.replace('#', ''))}
                className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 focus:bg-red/10 relative ${
                  activeSection === item.link.replace('#', '') 
                    ? 'text-purple-400' 
                    : 'text-white'
                }`}
              >
                {item.name}
                {activeSection === item.link.replace('#', '') && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 h-0.5 w-full bg-purple-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="ml-4">
            <SignedOut>
              <SignInButton mode="modal" appearance={clerkAppearance}>
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full">
                  Login
                </Button>
              </SignInButton>
            </SignedOut>
            
            <SignedIn>
              <UserButton afterSignOutUrl="/" appearance={clerkAppearance} />
            </SignedIn>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <SignedOut>
            <SignInButton mode="modal" appearance={clerkAppearance}>
              <Button size="sm" className="bg-primary text-white rounded-full">
                Login
              </Button>
            </SignInButton>
          </SignedOut>
          
          <SignedIn>
            <UserButton afterSignOutUrl="/" appearance={clerkAppearance} />
          </SignedIn>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black/90 border-gray-800">
              <SheetHeader className="border-b border-gray-800 pb-4">
                <SheetTitle className="text-white">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.name}>
                    <Link
                      href={item.link}
                      onClick={(e) => handleNavClick(e, item.link.replace('#', ''))}
                      className={`text-lg font-medium px-2 py-2 rounded-md hover:bg-white/10 transition-colors ${
                        activeSection === item.link.replace('#', '') 
                          ? 'text-purple-400 bg-white/5' 
                          : 'text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}