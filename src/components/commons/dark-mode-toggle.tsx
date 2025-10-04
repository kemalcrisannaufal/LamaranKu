"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="secondary"
        className="w-10 h-10 rounded-full flex items-center justify-center"
      />
    );
  }

  return (
    <Button
      variant="secondary"
      className="w-10 h-10 rounded-full flex items-center justify-center relative"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-300 
          ${theme === "light" ? "rotate-0 scale-100" : "-rotate-90 scale-0"}`}
      />
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all duration-300 
          ${theme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"}`}
      />
    </Button>
  );
}
