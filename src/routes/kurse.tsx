import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Dog, RefreshCw, Building2, GraduationCap, Car, Baby, Sparkles, Ambulance, MessageCircle, Syringe, ArrowUpRight,
} from "lucide-react";
import { fadeUp, cardIn, stagger, viewportOnce } from "@/lib/motion";

export const Route = createFileRoute("/kurse")({
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
  component: KursePage,
});

type Course = {
  icon: typeof Dog;
  title: string;
  audience: string;
  price: string;
  description: string;
  cta: string;
  href: string;
  image: string;
};

const courses: Course[] = [
  { icon: Dog, title: "Erste Hilfe am Hund", audience: "Für Hundebesitzer", price: "40 €", description: "Sicherheit für deinen vierbeinigen Begleiter – von Verletzungen bis Notfall.", cta: "Kurs ansehen", href: "https://www.pflastakad.com/service-page/erste-hilfe-am-hund", image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=900&q=80&auto=format&fit=crop" },
  { icon: RefreshCw, title: "Auffrischung Erste Hilfe", audience: "Für Jung oder Alt", price: "50 €", description: "Frisch dein Wissen auf – kompakt, praxisnah und alltagstauglich.", cta: "Kurs ansehen", href: "https://www.pflastakad.com/service-page/auffrischung-erste-hilfe", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80&auto=format&fit=crop" },
  { icon: Building2, title: "Betrieblicher Ersthelfer Grundkurs", audience: "Für Privat und Firmen", price: "Individueller Preis", description: "Anerkannte Ausbildung für betriebliche Ersthelfer nach DGUV.", cta: "Kurs ansehen", href: "https://www.pflastakad.com/service-page/betrieblicher-ersthelfer-grundkurs", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80&auto=format&fit=crop" },
  { icon: GraduationCap, title: "Betrieblicher Ersthelfer Fortbildung", audience: "Für Privat und Firmen", price: "Individueller Preis", description: "Pflicht-Fortbildung alle zwei Jahre – wir machen sie lebendig.", cta: "Kurs ansehen", href: "https://www.pflastakad.com/service-page/betrieblicher-ersthelfer-fortbildung", image: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=900&q=80&auto=format&fit=crop" },
  { icon: Car, title: "Erste Hilfe für Fahrschüler", audience: "Für Führerscheinanwärter", price: "45 €", description: "Der Pflichtkurs für deinen Führerschein – locker und entspannt.", cta: "Buchen", href: "https://www.pflastakad.com/booking-calendar/erste-hilfe-f%C3%BCr-fahrsch%C3%BCler", image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=900&q=80&auto=format&fit=crop" },
  { icon: Baby, title: "Erste Hilfe für Eltern/Großeltern", audience: "Säugling & Kind", price: "60 €", description: "Spezielle Inhalte rund um Notfälle bei Babys und Kleinkindern.", cta: "Buchen", href: "https://www.pflastakad.com/booking-calendar/erste-hilfe-f%C3%BCr-eltern-gro%C3%9Feltern", image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&q=80&auto=format&fit=crop" },
  { icon: Sparkles, title: "Erste Hilfe Spezial", audience: "Individuelle Themen", price: "Individueller Preis", description: "Maßgeschneiderter Kurs für deine besonderen Anforderungen.", cta: "Kurs ansehen", href: "https://www.pflastakad.com/service-page/erste-hilfe-spezial", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=900&q=80&auto=format&fit=crop" },
  { icon: Ambulance, title: "Notfalltraining", audience: "Arztpraxen, Pflege, Rettungsdienst", price: "Individueller Preis", description: "Praxisorientiertes Training für medizinisches Fachpersonal.", cta: "Kurs ansehen", href: "https://www.pflastakad.com/service-page/notfalltraining", image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=900&q=80&auto=format&fit=crop" },
  { icon: MessageCircle, title: "Erste Hilfe Beratung", audience: "Individuelle Beratung für Firmen", price: "Individueller Preis", description: "Beratung rund um Erste-Hilfe-Material, Schulungen und Konzepte.", cta: "Buchung anfragen", href: "https://www.pflastakad.com/booking-calendar/erste-hilfe-beratung-1", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&q=80&auto=format&fit=crop" },
  { icon: Syringe, title: "Injektions- und Medikamententraining", audience: "Arztpraxen, Pflege, Rettungsdienst", price: "135 €", description: "Sicher injizieren und Medikamente korrekt anwenden – mit viel Praxis.", cta: "Buchen", href: "https://www.pflastakad.com/booking-calendar/injektions-und-medikamententraining", image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=900&q=80&auto=format&fit=crop" },
];

function KursePage() {
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
        <motion.h1 variants={fadeUp} className="mt-3 text-4xl font-bold text-[var(--primary-deep)] sm:text-5xl">Finde deinen Kurs</motion.h1>
        <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Von Erste Hilfe am Hund bis zum Notfalltraining für Profis – wir haben das passende Format für dich.
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
          <motion.article
            key={c.title}
            variants={cardIn}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-soft)]"
          >
            <div className="relative h-36 overflow-hidden">
              <img
                src={c.image}
                alt={`${c.title} — Kursvorschau`}
                width={900}
                height={600}
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
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{c.description}</p>
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-1 self-start rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
              >
                {c.cta} <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}
