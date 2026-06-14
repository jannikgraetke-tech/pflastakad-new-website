import { useRef, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoScrollHeroProps {
  videoSrc?: string;
  posterSrc?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  enableAnimations?: boolean;
  className?: string;
  startScale?: number;
}

export function VideoScrollHero({
  videoSrc = "/brand/hero.mp4",
  posterSrc = "/brand/hero-poster.jpg",
  eyebrow = "Gemeinsam sicher handeln",
  title = "Wissen rettet Leben.",
  subtitle = "Wir zeigen dir wie. Praxisnahe Erste-Hilfe-Kurse für Privat, Betrieb und Familie – mit erfahrenen Trainern.",
  enableAnimations = true,
  className = "",
  startScale = 0.25,
}: VideoScrollHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [scrollScale, setScrollScale] = useState(startScale);

  useEffect(() => {
    if (!enableAnimations || shouldReduceMotion) return;

    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        ticking = false;
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const containerHeight = containerRef.current.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrolled = Math.max(0, -rect.top);
        const maxScroll = containerHeight - windowHeight;
        const progress = Math.min(scrolled / maxScroll, 1);
        setScrollScale(startScale + progress * (1 - startScale));
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enableAnimations, shouldReduceMotion, startScale]);

  const shouldAnimate = enableAnimations && !shouldReduceMotion;

  return (
    <div className={cn("relative", className)}>
      <div ref={containerRef} className="relative h-[200vh] bg-background">
        <div className="sticky top-0 z-10 flex h-screen w-full items-center justify-center overflow-hidden">
          <div
            className="relative flex items-center justify-center will-change-transform"
            style={{
              transform: shouldAnimate ? `scale(${scrollScale})` : "scale(1)",
              transformOrigin: "center center",
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              poster={posterSrc}
              className="h-[60vh] w-[80vw] max-w-5xl rounded-2xl object-cover shadow-2xl"
            >
              <source src={videoSrc} type="video/mp4" />
              Ihr Browser unterstützt das Video-Tag nicht.
            </video>

            <motion.div
              className="absolute inset-0 flex items-center justify-center rounded-2xl bg-gradient-to-t from-black/75 via-black/50 to-black/45"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="px-6 text-center text-white">
                <motion.span
                  className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 md:text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.7 }}
                >
                  {eyebrow}
                </motion.span>
                <motion.h1
                  className="mb-4 text-3xl font-bold drop-shadow-lg md:text-5xl lg:text-7xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8, type: "spring", stiffness: 200, damping: 25 }}
                >
                  {title}
                </motion.h1>
                <motion.p
                  className="mx-auto max-w-2xl text-sm text-white/85 md:text-lg lg:text-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.8, type: "spring", stiffness: 200, damping: 25 }}
                >
                  {subtitle}
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="pointer-events-none fixed bottom-8 left-1/2 z-20 -translate-x-1/2 text-foreground/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: shouldAnimate && scrollScale < 0.9 ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <ChevronDown className="h-6 w-6 animate-bounce" aria-hidden="true" />
        </motion.div>
      </div>
    </div>
  );
}
