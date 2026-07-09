import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState("midnight");
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "midnight";
    setTheme(saved);
  }, []);
  useEffect(() => {
    const el = document.documentElement;
    if (theme === "midnight") el.removeAttribute("data-theme");
    else el.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return [theme, setTheme];
}
