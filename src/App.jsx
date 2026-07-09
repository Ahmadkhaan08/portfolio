import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { Toaster } from "sonner";
import { useReveal } from "@/hooks/useReveal";
import { Loader } from "@/components/Loader";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CustomCursor } from "@/components/CustomCursor";
import { MouseGlow } from "@/components/MouseGlow";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  useReveal(loaded);

  return (
    <>
      <Toaster />
      <AnimatePresence mode="wait">
        {!loaded && <Loader onDone={() => setLoaded(true)} />}
      </AnimatePresence>

      {loaded && (
        <>
          <ScrollProgress />
          <CustomCursor />
          <MouseGlow />
          <Navbar />
          <Hero />
          <MarqueeStrip />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Services />
          <Testimonials />
          <Contact />
          <Footer />
          <ThemeSwitcher />
        </>
      )}
    </>
  );
}
