import { SKILL_CATEGORIES } from "@/data/skills";
import { SkillCard } from "./SkillCard";

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 flex items-center justify-center gap-8">
          <div className="text-center">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[color:var(--electric)]">02 · Skills</p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl"> Technologies I work with.</h2>
            {/* <p className="hidden max-w-sm text-muted-foreground md:block p-2 mt-3">
            I build full-stack web applications using the MERN stack while expanding my expertise in DevOps, cloud technologies, and AI-powered automation.
          </p> */}
          </div>
          
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((c, i) => (
            <SkillCard key={c.title} Icon={c.Icon} title={c.title} items={c.items} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
