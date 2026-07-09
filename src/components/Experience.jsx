import { motion } from "motion/react";
import { EXPERIENCE } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="reveal mb-16 text-center">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[color:var(--electric)]">04 · Experience</p>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl"> Building, learning, and growing.</h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[color:var(--electric)] via-[color:var(--purple)] to-transparent md:left-1/2" />
          <div className="space-y-12">
            {EXPERIENCE.map((it, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}
              >
                <div className="absolute left-2 top-2 h-4 w-4 rounded-full bg-[image:var(--gradient-primary)] shadow-[0_0_20px_rgba(79,140,255,0.8)] md:left-1/2 md:-translate-x-1/2" />
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left md:[direction:ltr]"}`}>
                  <div className="glass gradient-border rounded-2xl p-6 [direction:ltr]">
                    <div className="font-mono text-xs text-[color:var(--electric)]">{it.year}</div>
                    <div className="mt-2 text-lg font-semibold">{it.role}</div>
                    <div className="text-sm text-muted-foreground">{it.company}</div>
                    <p className="mt-3 text-sm text-muted-foreground">{it.desc}</p>
                  </div>
                </div>
                <div className="hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
