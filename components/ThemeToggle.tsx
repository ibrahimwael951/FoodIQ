"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Button from "./ui/Button";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const nextTheme = resolvedTheme === "dark" ? "light" : "dark";

  return (
    <Button onClick={() => setTheme(nextTheme)} changeColor className="h-12">
      {resolvedTheme === "dark" ? <FaSun /> : <FaMoon />}
    </Button>
  );
}
