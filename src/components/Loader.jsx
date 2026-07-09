import { useEffect } from "react";
import { motion } from "motion/react";

export function Loader({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1400);
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <motion.div
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[200] grid place-items-center bg-background"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative h-20 w-20">
          <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-transparent border-t-[color:var(--electric)] border-r-[color:var(--purple)]" />
          <div className="absolute inset-2 animate-pulse-glow rounded-full bg-[image:var(--gradient-primary)]" />
        </div>
        <div className="font-mono text-xs tracking-widest text-muted-foreground">
          <motion.span
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
          >LOADING EXPERIENCE</motion.span>
        </div>
      </div>
    </motion.div>
  );
}
