"use client";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative w-9 h-9 rounded-full"
      aria-label="Toggle theme"
    >
      <div className="relative w-full h-full">
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-yellow-400 dark:text-transparent"
          initial={{ opacity: theme === "light" ? 1 : 0, rotate: theme === "light" ? 0 : 90 }}
          animate={{ opacity: theme === "light" ? 1 : 0, rotate: theme === "light" ? 0 : 90 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Sun className="w-5 h-5" />
        </motion.div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center text-transparent dark:text-blue-400"
          initial={{ opacity: theme === "dark" ? 1 : 0, rotate: theme === "dark" ? 0 : -90 }}
          animate={{ opacity: theme === "dark" ? 1 : 0, rotate: theme === "dark" ? 0 : -90 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Moon className="w-5 h-5" />
        </motion.div>
      </div>
    </Button>
  );
}
