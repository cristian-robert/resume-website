"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "../theme/ThemeToggle";
import { Menu, User, Briefcase, Code, Mail, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { SignInButton, SignUpButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { FloatingNav } from "@/components/ui/floating-navbar";

type Section = "hero" | "about" | "experience" | "skills" | "contact";

export default function Header() {
  const [activeSection, setActiveSection] = useState<Section>("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll and determine active section
  useEffect(() => {
    const handleScroll = () => {
      // Set header style based on scroll position
      setIsScrolled(window.scrollY > 10);

      // Get all sections
      const sections = [
        { id: "hero", element: document.querySelector("section:first-of-type") },
        { id: "about", element: document.getElementById("about") },
        { id: "experience", element: document.getElementById("experience") },
        { id: "skills", element: document.getElementById("skills") },
        { id: "contact", element: document.getElementById("contact") },
      ];

      // Find the section that is currently in view
      const currentSection = sections.find((section) => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id as Section);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define floating nav items with icons
  const floatingNavItems = [
    {
      name: "Home",
      link: "/",
      icon: <Home className="h-4 w-4" />
    },
    {
      name: "About",
      link: "#about",
      icon: <User className="h-4 w-4" />
    },
    {
      name: "Experience",
      link: "#experience",
      icon: <Briefcase className="h-4 w-4" />
    },
    {
      name: "Skills",
      link: "#skills",
      icon: <Code className="h-4 w-4" />
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <Mail className="h-4 w-4" />
    },
  ];

  // Original nav items for mobile menu
  const navItems = [
    { href: "#about", label: "About", id: "about" },
    { href: "#experience", label: "Experience", id: "experience" },
    { href: "#skills", label: "Skills", id: "skills" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  return (
    <>
      {/* Floating Navbar for Desktop */}
      <div className="hidden md:block">
        <FloatingNav navItems={floatingNavItems} />
      </div>

      {/* Traditional Header with Logo and Auth - Only visible at the top */}
      <motion.header
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${isScrolled ? "opacity-0 pointer-events-none" : "bg-background/70 backdrop-blur-md"}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-foreground">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Cristian-Robert Iosef
            </motion.span>
          </Link>

          {/* Desktop - Only Auth Buttons and Theme Toggle */}
          <div className="hidden md:flex items-center gap-2">
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="ghost" size="sm">
                  Log in
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button variant="outline" size="sm">
                  Sign up
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <span className="sr-only">Log in</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3" />
                  </svg>
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${activeSection === item.id ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-accent"}`}
                    >
                      {item.label}
                    </Link>
                  ))}

                  {/* Mobile auth button (only SignUp shows in sheet) */}
                  <SignedOut>
                    <SignUpButton mode="modal">
                      <Button className="w-full mt-2">
                        Create account
                      </Button>
                    </SignUpButton>
                  </SignedOut>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Floating Action Button for Navigation */}
      <div className="md:hidden fixed bottom-4 right-4 z-50">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: isScrolled ? 1 : 0, opacity: isScrolled ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="bg-primary text-primary-foreground rounded-full p-3 shadow-lg"
        >
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10 p-0 text-primary-foreground" aria-label="Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="rounded-t-xl">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-4">
                <Link href="/" className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-accent">
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </Link>
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${activeSection === item.id ? "text-primary bg-primary/10" : "hover:bg-accent"}`}
                  >
                    {item.id === "about" && <User className="h-5 w-5" />}
                    {item.id === "experience" && <Briefcase className="h-5 w-5" />}
                    {item.id === "skills" && <Code className="h-5 w-5" />}
                    {item.id === "contact" && <Mail className="h-5 w-5" />}
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </motion.div>
      </div>
    </>
  );
}
