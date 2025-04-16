"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import Image from "next/image";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      // Navbar is now fixed at the top with higher z-index and full width
      className={cn("fixed inset-x-0 top-0 z-50 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "none" : "none",
        boxShadow: visible
          ? "0 4px 24px rgba(115, 16, 122, 0.4), 0 1px 1px rgba(0, 0, 0, 0.08), 0 0 0 1.5px rgba(34, 42, 53, 0.08), 0 0 4px rgba(34, 42, 53, 0.12), 0 16px 68px rgba(47, 48, 55, 0.08), 0 1px 0 rgba(255, 255, 255, 0.12) inset"
          : "none",
        width: visible ? "40%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "min(800px, 95%)", // Changed to be responsive
      }}
      className={cn(
        "relative z-[60] mx-auto w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent backdrop-blur-md border border-white/20 dark:border-neutral-800/60 px-6 py-3 hidden md:flex", // Changed from xl:flex to md:flex
        visible && "bg-black/60 backdrop-blur-md border border-white/20 dark:bg-neutral-950/80 dark:border-neutral-800/60",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-base font-bold text-zinc-700 dark:text-zinc-200 transition-colors duration-200 hover:text-primary md:flex md:space-x-1 lg:space-x-2", // Added responsive spacing
        className,
      )}
    >
      {items.map((item, idx) => (
        <Link
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-2 md:px-3 lg:px-5 py-2 rounded-lg transition-colors duration-200 text-white dark:text-neutral-200 font-semibold hover:bg- dark:hover:bg-white/10 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary text-sm md:text-base" // Added responsive padding and text size
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-lg bg-black/10 dark:bg-white/10"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </Link>
      ))}
    </motion.div>
  );
};

// Update MobileNav to be fixed at top
export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(16px)" : "none",
        boxShadow: visible
          ? "0 4px 24px rgba(34, 42, 53, 0.10), 0 1px 1px rgba(0, 0, 0, 0.08), 0 0 0 1.5px rgba(34, 42, 53, 0.08), 0 0 4px rgba(34, 42, 53, 0.12), 0 16px 68px rgba(47, 48, 55, 0.08), 0 1px 0 rgba(255, 255, 255, 0.12) inset"
          : "none",
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex w-full items-center justify-between bg-transparent px-4 py-2 md:hidden",
        visible && "bg-black/60 backdrop-blur-md",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

// Update MobileNavHeader to ensure proper spacing with fixed nav
export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between px-2 h-14",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          />
          
          {/* Menu Content */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={cn(
              "fixed inset-x-0 top-0 z-50 min-h-screen flex flex-col items-center justify-center bg-black/90 px-4 py-8",
              className
            )}
          >
            <div className="absolute top-4 right-4">
              <NavbarButton
                onClick={onClose}
                className="!bg-transparent hover:!bg-white/10"
              >
                <IconX className="h-6 w-6 text-white" />
              </NavbarButton>
            </div>
            
            {/* Center the menu items */}
            <div className="flex flex-col items-center justify-center gap-6 text-center">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Remove MobileNavToggle as we won't need it anymore

export const NavbarLogo = () => {
  return (
    <Link
      href="#"
      aria-label="Home"
      className="relative z-20 flex items-center space-x-3 py-1 text-lg font-extrabold tracking-tight text-black dark:text-white"
    >
      <Image
        src="/removedbg.png"
        alt="Site Logo"
        width={40} // Reduced size for mobile
        height={40} // Reduced size for mobile
        className="md:w-[100px] md:h-[120px]" // Responsive sizing
        priority
      />
    </Link>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient" | "lit-border";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-4 py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none dark:text-white",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
    "lit-border": "p-[3px] relative bg-transparent group/button",
  };

  if (variant === "lit-border") {
    return (
      <Tag
        href={href || undefined}
        className={cn("p-[3px] relative group/button", className)}
        {...props}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg pointer-events-none" />
        <div className="px-8 py-2 bg-black rounded-[6px] relative z-10 transition duration-200 text-white hover:bg-transparent group-hover/button:bg-transparent">
          {children}
        </div>
      </Tag>
    );
  }

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
