import { createFileRoute } from "@tanstack/react-router";

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
  title: string;
  audience: string;
  price: string;
  description: string;
  cta: string;
  href: string;
};

const courses: Course[] = [
  {
    title: "Erste Hilfe am Hund",
    audience: "Für Hundebesitzer",
    price: "40 €",
    description: "Sicherheit für deinen vierbeinigen Begleiter – von Verletzungen bis Notfall.",
    cta: "Kurs ansehen",
    href: "https://www.pflastakad.com/service-page/erste-hilfe-am-hund",
  },
  {
    title: "Auffrischung Erste Hilfe",
    audience: "Für Jung oder Alt",
    price: "50 €",
    description: "Frisch dein Wissen auf – kompakt, praxisnah und alltagstauglich.",
    cta: "Kurs ansehen",
    href: "https://www.pflastakad.com/service-page/auffrischung-erste-hilfe",
  },
  {
    title: "Betrieblicher Ersthelfer Grundkurs",
    audience: "Für Privat und Firmen",
    price: "Individueller Preis",
    description: "Anerkannte Ausbildung für betriebliche Ersthelfer nach DGUV.",
    cta: "Kurs ansehen",
    href: "https://www.pflastakad.com/service-page/betrieblicher-ersthelfer-grundkurs",
  },
  {
    title: "Betrieblicher Ersthelfer Fortbildung",
    audience: "Für Privat und Firmen",
    price: "Individueller Preis",
    description: "Pflicht-Fortbildung alle zwei Jahre – wir machen sie lebendig.",
    cta: "Kurs ansehen",
    href: "https://www.pflastakad.com/service-page/betrieblicher-ersthelfer-fortbildung",
  },
  {
    title: "Erste Hilfe für Fahrschüler",
    audience: "Für Führerscheinanwärter",
    price: "45 €",
    description: "Der Pflichtkurs für deinen Führerschein – locker und entspannt.",
    cta: "Buchen",
    href: "https://www.pflastakad.com/booking-calendar/erste-hilfe-f%C3%BCr-fahrsch%C3%BCler",
  },
  {
    title: "Erste Hilfe für Eltern/Großeltern",
    audience: "Säugling & Kind",
    price: "60 €",
    description: "Spezielle Inhalte rund um Notfälle bei Babys und Kleinkindern.",
    cta: "Buchen",
    href: "https://www.pflastakad.com/booking-calendar/erste-hilfe-f%C3%BCr-eltern-gro%C3%9Feltern",
  },
  {
    title: "Erste Hilfe Spezial",
    audience: "Individuelle Themen",
    price: "Individueller Preis",
    description: "Maßgeschneiderter Kurs für deine besonderen Anforderungen.",
    cta: "Kurs ansehen",
    href: "https://www.pflastakad.com/service-page/erste-hilfe-spezial",
  },
  {
    title: "Notfalltraining",
    audience: "Arztpraxen, Pflege, Rettungsdienst",
    price: "Individueller Preis",
    description: "Praxisorientiertes Training für medizinisches Fachpersonal.",
    cta: "Kurs ansehen",
    href: "https://www.pflastakad.com/service-page/notfalltraining",
  },
  {
    title: "Erste Hilfe Beratung",
    audience: "Individuelle Beratung für Firmen",
    price: "Individueller Preis",
    description: "Beratung rund um Erste-Hilfe-Material, Schulungen und Konzepte.",
    cta: "Buchung anfragen",
    href: "https://www.pflastakad.com/booking-calendar/erste-hilfe-beratung-1",
  },
  {
    title: "Injektions- und Medikamententraining",
    audience: "Arztpraxen, Pflege, Rettungsdienst",
    price: "135 €",
    description: "Sicher injizieren und Medikamente korrekt anwenden – mit viel Praxis.",
    cta: "Buchen",
    href: "https://www.pflastakad.com/booking-calendar/injektions-und-medikamententraining",
  },
];

function KursePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <header className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Kursangebote</p>
        <h1 className="mt-3 text-4xl font-bold text-[var(--primary-deep)] sm:text-5xl">
          Finde deinen Kurs
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Von Erste Hilfe am Hund bis zum Notfalltraining für Profis – wir haben das passende
          Format für dich.
        </p>
      </header>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <article
            key={c.title}
            className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-primary">
              {c.audience}
            </span>
            <h2 className="mt-2 text-xl font-semibold text-[var(--primary-deep)]">{c.title}</h2>
            <p className="mt-3 flex-1 text-sm text-muted-foreground">{c.description}</p>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-base font-semibold text-foreground">{c.price}</span>
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:brightness-110"
              >
                {c.cta}
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}