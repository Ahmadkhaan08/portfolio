import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 15, suffix: "+", label: "Projects Built" },
  { value: 8, suffix: "+", label: "Technologies" },
  { value: 3, suffix: "", label: "Major Products" }, // ChaloBhai, Student Portal, CSR Audit
  { value: 100, suffix: "%", label: "Commitment" },
];

function Stat({ value, suffix, label }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (es) => {
        if (es[0].isIntersecting) {
          let start = null;
          const dur = 1400;

          const step = (t) => {
            if (start === null) start = t;
            const p = Math.min(1, (t - start) / dur);
            setN(Math.floor(p * value));
            if (p < 1) requestAnimationFrame(step);
          };

          requestAnimationFrame(step);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="glass gradient-border rounded-3xl p-6">
      <div className="text-4xl font-bold gradient-text md:text-5xl">
        {n}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="reveal">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[color:var(--electric)]">
              01 · About
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Building software
              <br />
              <span className="gradient-text">that solves real problems.</span>
            </h2>
          </div>

          <div className="reveal space-y-5 text-lg text-muted-foreground">
            <p>
              I'm Ahmad Ismail, a MERN Stack Developer passionate about creating
              modern web applications, SaaS products, and AI-powered solutions.
              I enjoy turning ideas into scalable, user-friendly applications
              that deliver real value.
            </p>

            <p>
              My expertise includes React, Next.js, Node.js, Express, MongoDB,
              Supabase, and REST APIs. Currently, I'm expanding my skills into
              DevOps by learning Docker, CI/CD, AWS, and cloud infrastructure to
              build and deploy production-ready applications.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "MERN Stack",
                "React & Next.js",
                "Node.js",
                "DevOps",
                "Docker",
                "AWS",
                "AI Automation",
                "Supabase",
                "MongoDB",
                "System Design",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="reveal mt-20 grid grid-cols-2 gap-4 md:grid-cols-4">
          {STATS.map((s, i) => (
            <Stat key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}