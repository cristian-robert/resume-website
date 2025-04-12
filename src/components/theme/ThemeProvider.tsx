"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: "light",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // Check for system preference first
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem("theme") as Theme;

    // Use saved theme or system preference
    const themeToSet = savedTheme || (systemPrefersDark ? "dark" : "light");
    setTheme(themeToSet);

    // Remove both classes first to ensure clean state
    document.documentElement.classList.remove("light", "dark");
    // Add the appropriate class
    document.documentElement.classList.add(themeToSet);

    // If no saved theme, save the system preference
    if (!savedTheme) {
      localStorage.setItem("theme", themeToSet);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    // Remove both classes first to ensure clean state
    document.documentElement.classList.remove("light", "dark");
    // Add the appropriate class
    document.documentElement.classList.add(newTheme);

    // Force a re-render of the page to ensure all styles are applied
    document.body.style.colorScheme = newTheme;
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
