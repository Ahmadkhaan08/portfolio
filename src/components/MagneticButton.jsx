import { useRef, useState } from "react";
import { motion } from "motion/react";

export function MagneticButton({ children, href, variant = "primary", onClick }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setOffset({ x: (e.clientX - r.left - r.width / 2) * 0.25, y: (e.clientY - r.top - r.height / 2) * 0.25 });
  };
  const reset = () => setOffset({ x: 0, y: 0 });

  const base = "relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";
  const styles = variant === "primary"
    ? "bg-[image:var(--gradient-primary)] text-white shadow-[0_10px_40px_-10px_rgba(79,140,255,0.6)] hover:shadow-[0_10px_60px_-10px_rgba(123,97,255,0.8)]"
    : "glass hover:border-white/20";

  const Inner = (
    <motion.span
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={`${base} ${styles}`}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className="inline-block"
      >{Inner}</a>
    );
  }
  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="inline-block"
    >{Inner}</button>
  );
}
