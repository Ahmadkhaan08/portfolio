import { motion } from "motion/react";
import { SiLeetcode } from "react-icons/si";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowUpRight,
  Download,
} from "lucide-react";
import heroOrb from "@/assets/hero-orb.png";
import { useMouse } from "@/hooks/useMouse";
import { Particles } from "./Particles";
import { MagneticButton } from "./MagneticButton";
import { TypingRoles } from "./TypingRoles";

export function Hero() {
  const { x, y } = useMouse();
  const px = x / (typeof window !== "undefined" ? window.innerWidth : 1) - 0.5;
  const py = y / (typeof window !== "undefined" ? window.innerHeight : 1) - 0.5;

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-32 md:pt-40"
    >
      <div
        aria-hidden
        className="absolute inset-0 [background:var(--gradient-hero)]"
      />
      <div
        aria-hidden
        className="absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-[color:var(--electric)]/25 blur-[120px] animate-blob"
      />
      <div
        aria-hidden
        className="absolute -right-40 top-80 h-[500px] w-[500px] rounded-full bg-[color:var(--purple)]/25 blur-[120px] animate-blob"
        style={{ animationDelay: "3s" }}
      />

      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <Particles />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to Full Stack & DevOps Opportunities
          </motion.div>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-[5.25rem]">
            <span className="block text-2xl font-medium text-muted-foreground md:text-3xl">
              Hello, I am
            </span>
            <span className="mt-2 block">
              {"Ahmad Ismail".split("").map((c, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 + i * 0.03,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block gradient-text animate-gradient-shift bg-[length:200%_200%] bg-[image:linear-gradient(90deg,var(--electric),var(--purple),var(--electric))]"
                >
                  {c === " " ? "\u00A0" : c}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-6 flex items-center gap-2 font-mono text-lg md:text-xl"
          >
            <span className="text-[color:var(--electric)]">&gt;</span>
            <TypingRoles />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-8 max-w-xl text-lg text-muted-foreground"
          >
            I am a MERN Stack Developer passionate about building scalable web
            applications, AI-powered solutions, and modern digital experiences.
            Currently expanding my expertise into DevOps with Docker, CI/CD,
            AWS, and cloud technologies while contributing to open-source
            projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#work">
              Explore My Work <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton
              variant="ghost"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Ahmad_Ismail_Resume.pdf";
                link.setAttribute("download", "Ahmad_Ismail_Resume.pdf");
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <Download className="h-4 w-4" />
              Download Resume
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              <Mail className="h-4 w-4" /> Contact Me
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-10 flex items-center gap-5"
          >
            {[
              { Icon: Github, href: "https://github.com/Ahmadkhaan08" },
              {
                Icon: Linkedin,
                href: "https://www.linkedin.com/in/mr-ahmad-ismail-b77664288/",
              },
              {
                Icon: SiLeetcode,
                href: "https://leetcode.com/u/M_Ahmad_Khan/",
              },
              { Icon: Twitter, href: "https://twitter.com/ahmadismail" },
              { Icon: Mail, href: "mailto:mrahmadismail13@gmail.com" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-2.5 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-white/30 hover:text-foreground"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative mx-auto aspect-square w-full max-w-lg"
          style={{ transform: `translate3d(${px * -20}px, ${py * -20}px, 0)` }}
        >
          <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-white/10" />
          <div
            className="absolute inset-8 animate-spin-slow rounded-full border border-dashed border-white/5"
            style={{ animationDirection: "reverse", animationDuration: "30s" }}
          />
          <motion.img
            src={heroOrb}
            alt="Futuristic glowing orb representing digital craftsmanship"
            width={1024}
            height={1024}
            className="relative animate-float drop-shadow-[0_0_60px_rgba(123,97,255,0.4)]"
            style={{ transform: `translate3d(${px * 30}px, ${py * 30}px, 0)` }}
          />
          {[
            { label: "TypeScript", top: "10%", left: "-5%", delay: 0 },
            { label: "React", top: "80%", left: "10%", delay: 1 },
            { label: "Node.js", top: "20%", right: "-5%", delay: 2 },
            { label: "AWS", top: "75%", right: "0%", delay: 1.5 },
          ].map((t) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + t.delay * 0.2 }}
              className="absolute animate-float"
              style={{
                top: t.top,
                left: t.left,
                right: t.right,
                animationDelay: `${t.delay}s`,
              }}
            >
              <div className="glass rounded-full px-3 py-1.5 text-xs font-mono">
                {t.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
