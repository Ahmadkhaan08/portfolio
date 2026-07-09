import { useMouse } from "@/hooks/useMouse";

export function MouseGlow() {
  const { x, y } = useMouse();
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 opacity-70 transition-opacity"
      style={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(79,140,255,0.12), transparent 40%)`,
      }}
    />
  );
}
