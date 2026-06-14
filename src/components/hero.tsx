import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Star, ChevronDown, Dog } from "lucide-react";

const chips = [
  { icon: ShieldCheck, label: "Zertifiziert nach BG/DGUV" },
  { icon: Star, label: "4,9 / 5 Bewertung" },
  { icon: Dog, label: "Auch Erste Hilfe am Hund" },
];

export function Hero() {
  return (
    <section className="relative isolate flex min-h-dvh items-center overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/brand/hero-poster.jpg"
        className="absolute inset-0 -z-30 h-full w-full object-cover"
      >
        <source src="/brand/hero.mp4" type="video/mp4" />
      </video>
      {/* Scrim + brand mesh for contrast */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-tr from-[#0b1024]/95 via-[#0b1024]/72 to-[#0b1024]/35" />
      <div className="hero-mesh absolute inset-0 -z-10 opacity-90" />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 pt-28 pb-24 sm:px-6 lg:grid-cols-[1.5fr_1fr]">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            Gemeinsam sicher handeln
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Wissen rettet Leben.
            <span className="mt-1 block bg-gradient-to-r from-cyan-300 via-sky-200 to-cyan-300 bg-clip-text text-transparent">
              Wir zeigen dir wie.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/80 sm:text-xl">
            Praxisnahe Erste-Hilfe-Kurse für Privat, Betrieb und Familie – von erfahrenen Trainern,
            in entspannter Atmosphäre in Schkeuditz-Dölzig.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/kontakt"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition hover:brightness-110"
            >
              Jetzt anmelden
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/kurse"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Alle 10 Kurse
            </Link>
          </div>

          {/* Trust chips */}
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {chips.map((c) => (
              <span key={c.label} className="inline-flex items-center gap-2 text-sm text-white/75">
                <c.icon className="h-4 w-4 text-cyan-300" aria-hidden="true" />
                {c.label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Floating glass stat card (desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glass hidden rounded-3xl p-7 text-white shadow-2xl lg:block"
        >
          <p className="text-sm text-white/70">Erste Hilfe für …</p>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <p className="bg-gradient-to-r from-cyan-300 to-sky-200 bg-clip-text font-serif text-4xl font-bold text-transparent">10</p>
              <p className="mt-1 text-xs text-white/70">Kursarten</p>
            </div>
            <div>
              <p className="bg-gradient-to-r from-cyan-300 to-sky-200 bg-clip-text font-serif text-4xl font-bold text-transparent">ab&nbsp;40&nbsp;€</p>
              <p className="mt-1 text-xs text-white/70">pro Kurs</p>
            </div>
          </div>
          <div className="mt-6 h-px bg-white/15" />
          <p className="mt-5 text-sm leading-relaxed text-white/80">
            Privat · Betrieb · Fahrschüler · Eltern · Praxen — und sogar dein Hund.
          </p>
          <Link
            to="/kurse"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-200 hover:text-white"
          >
            Kurse entdecken <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-white/55">
        <ChevronDown className="h-6 w-6 animate-bounce" aria-hidden="true" />
      </div>
    </section>
  );
}
