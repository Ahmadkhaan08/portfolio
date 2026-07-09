import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[color:var(--electric)]">06 · Kind words</p>
        <h2 className="mb-12 text-4xl font-bold tracking-tight md:text-5xl">What people say.</h2>

        <div className="glass gradient-border relative min-h-[280px] rounded-3xl p-10">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4 flex justify-center gap-1">
                {Array.from({ length: TESTIMONIALS[i].stars }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-[color:var(--electric)] text-[color:var(--electric)]" />
                ))}
              </div>
              <p className="text-xl italic text-foreground/90 md:text-2xl">"{TESTIMONIALS[i].quote}"</p>
              <footer className="mt-6">
                <div className="font-semibold">{TESTIMONIALS[i].name}</div>
                <div className="text-sm text-muted-foreground">{TESTIMONIALS[i].role}</div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {TESTIMONIALS.map((_, k) => (
            <button key={k} onClick={() => setI(k)}
              className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-[image:var(--gradient-primary)]" : "w-1.5 bg-white/20"}`}
              aria-label={`Show testimonial ${k + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
