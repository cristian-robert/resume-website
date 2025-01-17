"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Get all sections
      const sections = document.querySelectorAll("section[id]");

      // Find the current section
      let current = "";
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute("id") || "";
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "aboutMe", label: "About Me" },
    { href: "skills", label: "Skills" },
    { href: "experience", label: "Experience" },
    { href: "projects", label: "Projects" },
    { href: "contact", label: "Contact" },
  ];

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);

    // Find the element to scroll to
    const element = document.getElementById(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${
        isScrolled
          ? "bg-[#0B1221]/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "about")}
              className="text-xl font-bold text-white hover:text-blue-400 transition-colors"
            >
              Cristian-Robert Iosef
            </a>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={`#${item.href}`}
                  onClick={(e) => handleScroll(e, item.href)}
                  className={`text-sm font-medium transition-colors
                    ${
                      activeSection === item.href
                        ? "text-blue-400"
                        : "text-gray-300 hover:text-white"
                    }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex md:hidden items-center justify-center p-2 rounded-md text-gray-300 
                hover:text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#151E2E] rounded-lg mt-2 shadow-lg">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={`#${item.href}`}
                  onClick={(e) => handleScroll(e, item.href)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors
                    ${
                      activeSection === item.href
                        ? "text-blue-400"
                        : "text-gray-300 hover:text-white"
                    }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
