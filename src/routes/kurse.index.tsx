import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { courses } from "@/data/courses";
import { fadeUp, cardIn, stagger, viewportOnce } from "@/lib/motion";

export const Route = createFileRoute("/kurse/")({
  head: () => ({
    meta: [
      { title: "Kurse – Pflaster Akademie" },
      { name: "description", content: "Erste-Hilfe-Kurse für Hund, Fahrschüler, Eltern, Betriebe und mehr – jetzt buchen bei der Pflaster Akademie." },
      { property: "og:title", content: "Kursangebote – Pflaster Akademie" },
      { property: "og:description", content: "Vom Erste-Hilfe-Grundkurs bis zum Notfalltraining für Arztpraxen." },
      { property: "og:url", content: "/kurse" },
    ],
    links: [{ rel: "canonical", href: "/kurse" }],
  }),
  component: KurseIndex,
});

function KurseIndex() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <motion.header
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="text-center"
      >
        <motion.p variants={fadeUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Kursangebote</motion.p>
        <motion.h1 variants={fadeUp} className="mt-3 text-4xl font-bold tracking-tight text-[var(--primary-deep)] sm:text-5xl">Finde deinen Kurs</motion.h1>
        <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Von Erste Hilfe am Hund bis zum Notfalltraining für Profis – wähle deinen Kurs und sieh dir alle Details an.
        </motion.p>
      </motion.header>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {courses.map((c) => (
          <motion.div
            key={c.slug}
            variants={cardIn}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
          >
            <Link
              to="/kurse/$slug"
              params={{ slug: c.slug }}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)] transition-all hover:border-primary/40 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={c.image}
                  alt={`${c.title} — Kursvorschau`}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-deep)]/70 to-transparent" />
                <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
                  <c.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="absolute right-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-xs font-bold text-primary shadow-sm backdrop-blur">
                  {c.price}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold uppercase tracking-wide text-primary">{c.audience}</span>
                <h2 className="mt-2 text-lg font-semibold text-[var(--primary-deep)]">{c.title}</h2>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{c.tagline}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Details ansehen
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
