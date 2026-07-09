import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Paintbrush } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { THEMES } from "@/data/testimonials";

export function ThemeSwitcher() {
  const [theme, setTheme] = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="glass-strong absolute bottom-14 left-0 w-64 rounded-2xl p-3 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)]"
          >
            <div className="mb-2 px-2 pt-1 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              Theme
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
      <motion.button
        whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.94 }}
        onClick={() => setOpen((v) => !v)}
        aria-label="Change theme"
        className="grid h-12 w-12 place-items-center rounded-full glass-strong text-foreground shadow-[0_10px_30px_-8px_rgba(0,0,0,0.5)] transition hover:border-white/30"
      >
        <Paintbrush className="h-5 w-5" />
      </motion.button>
    </div>
  );
}
