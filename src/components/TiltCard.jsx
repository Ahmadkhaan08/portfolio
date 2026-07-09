import { useRef, useState } from "react";
import { motion } from "motion/react";

export function TiltCard({ children, index }) {
  const ref = useRef(null);
  const [t, setT] = useState({ rx: 0, ry: 0 });
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <div
        ref={ref}
        onMouseMove={(e) => {
          const el = ref.current;
          const r = el.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          setT({ rx: -y * 8, ry: x * 8 });
        }}
        onMouseLeave={() => setT({ rx: 0, ry: 0 })}
        style={{ transform: `perspective(1000px) rotateX(${t.rx}deg) rotateY(${t.ry}deg)` }}
        className="glass gradient-border group relative h-full overflow-hidden rounded-3xl p-8 transition-shadow duration-300 hover:shadow-[0_20px_60px_-10px_rgba(79,140,255,0.35)]"
      >
        <div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity group-hover:opacity-100"
          style={{ background: "radial-gradient(400px circle at var(--mx,50%) var(--my,50%), rgba(79,140,255,0.15), transparent 40%)" }} />
        {children}
      </div>
    </motion.div>
  );
}
