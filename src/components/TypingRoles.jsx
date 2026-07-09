import { useEffect, useState } from "react";

export function TypingRoles() {
  const roles = ["Full Stack Developer", "MERN Stack Developer", "DevOps Engineer", "Cloud Enthusiast"];
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const current = roles[i];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDel(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") { setDel(false); setI((v) => (v + 1) % roles.length); }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);
  return (
    <span className="text-foreground">
      {text}
      <span className="ml-0.5 inline-block h-5 w-[2px] animate-pulse bg-[color:var(--electric)] align-middle" />
    </span>
  );
}
