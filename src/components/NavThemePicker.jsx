import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Paintbrush } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { THEMES } from "@/data/testimonials";

export function NavThemePicker() {
  const [theme, setTheme] = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);
  const current = THEMES.find((t) => t.id === theme) ?? THEMES[0];
  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Change theme"
        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium hover:bg-white/10 transition"
      >
        <span className="h-4 w-4 rounded-full ring-1 ring-white/25" style={{ background: current.swatch }} />
        <Paintbrush className="h-4 w-4 opacity-70" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="glass-strong absolute right-0 top-12 w-64 rounded-2xl p-3 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)]"
          >
            <div className="mb-2 px-2 pt-1 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              Choose theme
            </div>
            <div className="space-y-1">
              {THEMES.map((t) => (
                <button
                  key={t.id}
                  onClick={() => { setTheme(t.id); setOpen(false); }}
                  className={`flex w-full items-center gap-3 rounded-xl px-2.5 py-2 text-left text-sm transition ${
                    theme === t.id ? "bg-white/10" : "hover:bg-white/5"
                  }`}
                >
                  <span className="h-6 w-6 shrink-0 rounded-full ring-1 ring-white/20" style={{ background: t.swatch }} />
                  <span className="flex-1 truncate">{t.label}</span>
                  {theme === t.id && <Check className="h-4 w-4 text-[color:var(--electric)]" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
