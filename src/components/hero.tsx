import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-dvh items-center justify-center overflow-hidden">
      {/* Full-bleed background video */}
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

      {/* Legibility scrim + subtle brand mesh */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#0b1024]/85 via-[#0b1024]/55 to-[#0b1024]/90" />
      <div className="hero-mesh absolute inset-0 -z-10 opacity-70" />

      {/* Centered content — CSS entrance so it stays visible even without JS */}
      <div className="animate-rise mx-auto max-w-4xl px-4 pt-24 pb-20 text-center sm:px-6">
        <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
          </span>
          Gemeinsam sicher handeln
        </span>

        <h1 className="mx-auto mt-7 max-w-3xl text-balance text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Wissen rettet Leben.{" "}
          <span className="inline-block bg-gradient-to-r from-cyan-300 via-sky-200 to-cyan-300 bg-clip-text pb-2 leading-[1.2] text-transparent">
            Wir zeigen dir wie.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85 sm:text-xl">
          Praxisnahe Erste-Hilfe-Kurse für Privat, Betrieb und Familie – von erfahrenen Trainern,
          in entspannter Atmosphäre in Schkeuditz-Dölzig.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/kontakt"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition hover:brightness-110"
          >
            Jetzt anmelden
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/kurse"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            Alle 10 Kurse ansehen
          </Link>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-white/55">
        <ChevronDown className="h-6 w-6 animate-bounce" aria-hidden="true" />
      </div>
    </section>
  );
}
