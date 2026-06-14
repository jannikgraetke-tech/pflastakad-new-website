import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { HeartPulse, HeartHandshake, ShieldPlus, Dog, Baby, Car, Ambulance, ArrowUpRight } from "lucide-react";
import trainingImg from "../assets/training.jpg";
import { VideoScrollHero } from "@/components/video-scroll-hero";
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

function Index() {
  return (
    <>
      {/* Hero — scroll-scaling video */}
      <VideoScrollHero />

      {/* Highlights */}
      <section className="relative z-20 -mt-10 rounded-t-[2.5rem] bg-background">
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
                className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                  <h.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--primary-deep)]">{h.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{h.text}</p>
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
          <motion.div variants={fadeUp} className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Beliebte Kurse</p>
            <h2 className="mt-3 text-3xl font-bold text-[var(--primary-deep)] sm:text-4xl">Für jede Situation der richtige Kurs</h2>
          </motion.div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((c) => (
              <motion.div
                key={c.title}
                variants={cardIn}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <c.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="mt-4 text-xs font-semibold uppercase tracking-wide text-primary">{c.audience}</span>
                <h3 className="mt-1 text-base font-semibold text-[var(--primary-deep)]">{c.title}</h3>
                <span className="mt-3 text-lg font-bold text-foreground">{c.price}</span>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeUp} className="mt-10 text-center">
            <Link
              to="/kurse"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition hover:brightness-110"
            >
              Alle 10 Kurse ansehen <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Über uns Teaser */}
      <section>
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:items-center">
          <motion.img
            src={trainingImg}
            alt="Trainingsgruppe übt Erste Hilfe"
            width={1600}
            height={1067}
            loading="lazy"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, type: "spring", stiffness: 160, damping: 22 }}
            className="rounded-2xl object-cover shadow-[var(--shadow-card)]"
          />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-[var(--primary-deep)] sm:text-4xl">
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
                className="mt-6 inline-flex rounded-full bg-[var(--primary-deep)] px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:brightness-125"
              >
                Unsere Vision
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[var(--primary-deep)]">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
        >
          <motion.h2 variants={fadeUp} className="text-center text-3xl font-bold text-primary-foreground">
            Erfolgsgeschichten unserer Teilnehmer
          </motion.h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <motion.figure
                key={t.name}
                variants={cardIn}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <blockquote className="text-sm leading-relaxed text-primary-foreground/90">„{t.text}"</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-[var(--primary)]">— {t.name}</figcaption>
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
          className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-[var(--primary-deep)] sm:text-4xl">
            Bereit für den Ernstfall?
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Finde den passenden Kurs für dich, dein Team oder deine Familie.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              to="/kontakt"
              className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-[var(--shadow-soft)] hover:brightness-110"
            >
              Jetzt anmelden
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
