import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SiLeetcode } from "react-icons/si";
import { ArrowUp, Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <footer className="relative border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="h-6 w-6 rounded-md bg-[image:var(--gradient-primary)]" />
          © {new Date().getFullYear()} Ahmad Ismail. Built with passion, precision, and purpose.
        </div>
        <div className="flex items-center gap-4">
          {[
              { Icon: Github, href: "https://github.com/Ahmadkhaan08" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/mr-ahmad-ismail-b77664288/" },
              { Icon: SiLeetcode, href: "https://leetcode.com/u/M_Ahmad_Khan/" },
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
        </div>
      </div>

      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-24 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-[image:var(--gradient-primary)] text-white shadow-[0_10px_40px_-10px_rgba(79,140,255,0.6)] transition hover:scale-110"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
