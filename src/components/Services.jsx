import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[color:var(--electric)]">05 · Services</p>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">How I can help.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass gradient-border group relative overflow-hidden rounded-3xl p-8 transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_-10px_rgba(123,97,255,0.35)]"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[image:var(--gradient-primary)] text-white shadow-[0_10px_30px_-10px_rgba(79,140,255,0.6)]">
                <s.Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-6 inline-flex items-center gap-1 text-sm text-[color:var(--electric)] opacity-0 transition-opacity group-hover:opacity-100">
                Learn more <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
