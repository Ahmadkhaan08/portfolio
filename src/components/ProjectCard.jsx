import { motion } from "motion/react";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

export function ProjectCard({ project, index }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="glass gradient-border group relative overflow-hidden rounded-3xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          loading="lazy"
          width={1200}
          height={800}
          className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80" />
        <div className="absolute left-4 top-4 rounded-full glass-strong px-3 py-1 text-xs font-mono">
          {project.tag}
        </div>
      </div>
      <div className="relative p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-semibold">{project.title}</h3>
          <a
            href={project.demo}
            className="rounded-full border border-white/10 p-2 text-muted-foreground transition hover:border-white/30 hover:text-foreground"
            aria-label="Open project"
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{project.desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full bg-white/5 px-2.5 py-1 text-xs font-mono text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="mt-6 flex gap-3">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-[color:var(--electric)] px-4 py-2 text-sm font-medium text-[color:var(--electric)] transition-all hover:bg-[color:var(--electric)] hover:text-white"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>

          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:border-white/40 hover:bg-white/5 hover:text-foreground"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}
