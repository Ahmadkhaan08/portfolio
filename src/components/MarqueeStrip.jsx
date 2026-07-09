import { MARQUEE_ITEMS } from "@/data/skills";

export function MarqueeStrip() {
  return (
    <section className="relative border-y border-white/5 py-6">
      <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex shrink-0 animate-marquee gap-16 px-8">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((it, i) => (
            <span key={i} className="whitespace-nowrap font-mono text-lg text-muted-foreground/60">
              ✦ {it}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
