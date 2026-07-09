import { motion } from "motion/react";
import { TiltCard } from "./TiltCard";

export function SkillCard({ Icon, title, items, index }) {
  return (
    <TiltCard index={index}>
      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[image:var(--gradient-primary)]/20 text-[color:var(--electric)]">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-4 text-xl font-semibold">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((it) => (
          <span key={it} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-muted-foreground">
            {it}
          </span>
        ))}
      </div>
      <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }} whileInView={{ width: `${85 + (index * 2) % 15}%` }}
          viewport={{ once: true }} transition={{ duration: 1.2, delay: index * 0.1 }}
          className="h-full bg-[image:var(--gradient-primary)]"
        />
      </div>
    </TiltCard>
  );
}
