import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { NAV } from "@/data/nav";
import { NavThemePicker } from "./NavThemePicker";
import myPhoto from "@/assets/my-photo.png"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean);
      const y = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= y) { setActive(sections[i].id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className={`fixed left-1/2 top-4 z-50 w-[min(1100px,95%)] -translate-x-1/2 rounded-full transition-all duration-500 ${
          scrolled ? "glass-strong py-2 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]" : "py-3"
        }`}
      >
        <div className="flex items-center justify-between px-4 md:px-6">
          <a href="#home" className="flex items-center gap-3 font-bold tracking-tight">
            <div className="h-9 w-9 shrink-0 overflow-hidden rounded-xl shadow-[0_0_20px_color-mix(in_oklab,var(--electric)_60%,transparent)]">
  <img
    src={myPhoto} 
    alt="Ahmad Ismail"
    className="h-full w-full object-contain"
  />
</div>
            <div className="leading-tight">
              <div className="text-sm">Ahmad Ismail</div>
              <div className="text-[10px] font-normal font-mono uppercase tracking-widest text-muted-foreground">Full Stack Developer</div>
            </div>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                data-active={active === n.id}
                className="nav-link text-sm text-muted-foreground data-[active=true]:text-foreground hover:text-foreground transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <NavThemePicker />
            <a
              href="#contact"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10 transition"
            >
              Let's talk
            </a>
          </div>
          <div className="md:hidden flex items-center gap-1">
            <NavThemePicker />
            <button
              className="rounded-full p-2 hover:bg-white/10"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] md:hidden"
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" onClick={() => setOpen(false)} />
            <motion.nav
              initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto mt-24 flex w-[92%] flex-col gap-2 rounded-3xl glass-strong p-6"
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="absolute right-4 top-4 rounded-full p-2 hover:bg-white/10"
              ><X className="h-5 w-5" /></button>
              {NAV.map((n, i) => (
                <motion.a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i }}
                  className="rounded-2xl px-4 py-3 text-lg font-medium hover:bg-white/5"
                >
                  {n.label}
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
