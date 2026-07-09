import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useMouse } from "@/hooks/useMouse";

export function CustomCursor() {
  const { x, y } = useMouse();
  const [hover, setHover] = useState(false);
  useEffect(() => {
    const targets = document.querySelectorAll("a, button, [data-cursor]");
    const on = () => setHover(true);
    const off = () => setHover(false);
    targets.forEach((t) => { t.addEventListener("mouseenter", on); t.addEventListener("mouseleave", off); });
    return () => targets.forEach((t) => { t.removeEventListener("mouseenter", on); t.removeEventListener("mouseleave", off); });
  });
  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[100] hidden h-3 w-3 rounded-full bg-white mix-blend-difference md:block"
        animate={{ x: x - 6, y: y - 6, scale: hover ? 0 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.3 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[100] hidden h-10 w-10 rounded-full border border-white/50 mix-blend-difference md:block"
        animate={{ x: x - 20, y: y - 20, scale: hover ? 1.6 : 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.6 }}
      />
    </>
  );
}
