import { useEffect } from "react";

export function useReveal(ready = true) {
  useEffect(() => {
    if (!ready) return;

    // Small delay to ensure DOM has been painted after state change
    const raf = requestAnimationFrame(() => {
      const els = document.querySelectorAll(".reveal:not(.in-view)");
      if (els.length === 0) return;

      const io = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in-view");
              io.unobserve(e.target);
            }
          }),
        { threshold: 0.12 }
      );
      els.forEach((el) => io.observe(el));

      // Store for cleanup
      raf._io = io;
    });

    return () => {
      cancelAnimationFrame(raf);
      if (raf._io) raf._io.disconnect();
    };
  }, [ready]);
}
