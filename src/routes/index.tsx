import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  HeartPulse, HeartHandshake, ShieldPlus, Dog, Baby, Car, Ambulance, ArrowUpRight, Star, Quote,
} from "lucide-react";
import trainingImg from "../assets/training.jpg";
import { Hero } from "@/components/hero";
import { fadeUp, cardIn, stagger, viewportOnce } from "@/lib/motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pflaster Akademie – Erste-Hilfe-Kurse in Schkeuditz" },
      { name: "description", content: "Praxisnahe Erste-Hilfe-Kurse für Privat, Betrieb, Fahrschüler und Eltern. Qualifizierte Trainer, persönliche Atmosphäre." },
      { property: "og:title", content: "Pflaster Akademie – Erste-Hilfe-Kurse" },
      { property: "og:description", content: "Wissen rettet Leben – wir zeigen dir wie." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const highlights = [
  { icon: HeartPulse, title: "Praxisnah", text: "Echte Szenarien statt trockener Theorie – du übst, was im Ernstfall zählt." },
  { icon: HeartHandshake, title: "Auf Augenhöhe", text: "Kleine Gruppen, viele Fragen erlaubt. Lernen ohne Druck, mit Herz." },
  { icon: ShieldPlus, title: "Zertifiziert nach BG/DGUV", text: "Anerkannt – auch als betriebliche Ersthelfer-Ausbildung, abrechenbar über die BG." },
];

const featured = [
  { icon: Dog, title: "Erste Hilfe am Hund", price: "40 €", audience: "Für Hundebesitzer" },
  { icon: Car, title: "Erste Hilfe für Fahrschüler", price: "45 €", audience: "Führerschein" },
  { icon: Baby, title: "Erste Hilfe für Eltern", price: "60 €", audience: "Säugling & Kind" },
  { icon: Ambulance, title: "Notfalltraining", price: "Individuell", audience: "Praxen & Pflege" },
];

const testimonials = [
  { name: "Frida Meier", text: "Durch die Kurse fühle ich mich jetzt viel sicherer, in Notsituationen richtig zu handeln. Sehr empfehlenswert!" },
  { name: "Lukas Schmidt", text: "Der Kurs für betriebliche Ersthelfer hat mir geholfen, im Ernstfall ruhig und effektiv zu agieren." },
  { name: "Carina Weber", text: "Die Schulung Erste Hilfe am Kind war äußerst informativ und praxisnah. Klare Empfehlung!" },
];

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <motion.div variants={fadeUp} className="text-center">
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{kicker}</span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--primary-deep)] sm:text-4xl">{title}</h2>
    </motion.div>
  );
}

function Index() {
  return (
    <>
      <Hero />

      {/* Highlights */}
      <section className="brand-wash relative z-20 -mt-12 rounded-t-[2.5rem] bg-background">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
        >
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((h) => (
              <motion.div
                key={h.title}
                variants={cardIn}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-soft)]"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-80" />
                <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[oklch(0.5_0.13_230)] text-primary-foreground shadow-sm">
                  <h.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="relative mt-5 text-lg font-semibold text-[var(--primary-deep)]">{h.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured courses */}
      <section className="bg-secondary/40">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
        >
          <SectionHeading kicker="Beliebte Kurse" title="Für jede Situation der richtige Kurs" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((c) => (
              <motion.div
                key={c.title}
                variants={cardIn}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group flex flex-col rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:border-primary/40 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <c.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <span className="mt-5 text-xs font-semibold uppercase tracking-wide text-primary">{c.audience}</span>
                <h3 className="mt-1 text-base font-semibold text-[var(--primary-deep)]">{c.title}</h3>
                <span className="mt-3 text-lg font-bold text-foreground">{c.price}</span>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeUp} className="mt-10 text-center">
            <Link
              to="/kurse"
              className="group inline-flex items-center gap-1.5 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition hover:brightness-110"
            >
              Alle 10 Kurse ansehen
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Über uns Teaser */}
      <section>
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, type: "spring", stiffness: 160, damping: 22 }}
            className="relative"
          >
            <img
              src={trainingImg}
              alt="Trainingsgruppe übt Erste Hilfe"
              width={1600}
              height={1067}
              loading="lazy"
              className="rounded-3xl object-cover shadow-[var(--shadow-soft)]"
            />
            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-[var(--primary-deep)] px-5 py-4 text-primary-foreground shadow-xl">
              <p className="font-serif text-xl font-bold">Schkeuditz-Dölzig</p>
              <p className="text-xs text-primary-foreground/70">Westringstr. 43</p>
            </div>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <motion.span variants={fadeUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Über uns
            </motion.span>
            <motion.h2 variants={fadeUp} className="mt-3 text-3xl font-bold tracking-tight text-[var(--primary-deep)] sm:text-4xl">
              Erste Hilfe rettet Leben – und jeder kann sie leisten.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-muted-foreground">
              Unser Team aus erfahrenen Ausbilderinnen und Ausbildern bringt medizinisches Know-how,
              pädagogische Qualifikation und ganz viel Herzblut mit. Wir machen Erste Hilfe für jeden
              verständlich – im Alltag, im Beruf oder auf der Rennstrecke.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                to="/info"
                className="mt-6 inline-flex rounded-full bg-[var(--primary-deep)] px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-125"
              >
                Unsere Vision
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative overflow-hidden bg-[var(--primary-deep)]">
        <div className="hero-mesh absolute inset-0 opacity-40" />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6"
        >
          <motion.div variants={fadeUp} className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Erfolgsgeschichten</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Sicherheit, die in Erinnerung bleibt
            </h2>
          </motion.div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <motion.figure
                key={t.name}
                variants={cardIn}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="glass flex flex-col rounded-3xl p-7"
              >
                <Quote className="h-8 w-8 text-cyan-300" aria-hidden="true" />
                <div className="mt-3 flex gap-0.5" aria-label="5 von 5 Sternen">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-cyan-300 text-cyan-300" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-primary-foreground/90">„{t.text}"</blockquote>
                <figcaption className="mt-5 border-t border-white/10 pt-4 text-sm font-semibold text-primary-foreground">
                  {t.name}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-5xl px-4 py-20 sm:px-6"
        >
          <div className="brand-wash relative overflow-hidden rounded-[2rem] border border-border bg-card px-6 py-16 text-center shadow-[var(--shadow-soft)]">
            <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-[var(--primary-deep)] sm:text-5xl">
              Bereit für den Ernstfall?
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Finde den passenden Kurs für dich, dein Team oder deine Familie.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                to="/kontakt"
                className="mt-8 inline-flex rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition hover:brightness-110"
              >
                Jetzt anmelden
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
