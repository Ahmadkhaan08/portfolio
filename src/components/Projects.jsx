import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { PROJECTS, PROJECT_TAGS } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.tag === filter);

  return (
    <section id="work" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-wrap items-center justify-center gap-6">
          <div className="text-center">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[color:var(--electric)]">03 · Selected Work</p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Recent products.</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {PROJECT_TAGS.map((t) => (
              <button key={t} onClick={() => setFilter(t)}
                className={`rounded-full border px-4 py-1.5 text-sm transition ${
                  filter === t ? "border-[color:var(--electric)] bg-[color:var(--electric)]/10 text-foreground" : "border-white/10 bg-white/5 text-muted-foreground hover:border-white/20"
                }`}
              >{t}</button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
