import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "../assets/hero.jpg";
import trainingImg from "../assets/training.jpg";

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
  { title: "Praxisnah", text: "Echte Szenarien statt trockener Theorie – du übst, was im Ernstfall zählt." },
  { title: "Auf Augenhöhe", text: "Kleine Gruppen, viele Fragen erlaubt. Lernen ohne Druck, mit Herz." },
  { title: "Zertifiziert", text: "Anerkannt von BG/DGUV. Auch für betriebliche Ersthelfer geeignet." },
];

const testimonials = [
  { name: "Frida Meier", text: "Durch die Kurse fühle ich mich jetzt viel sicherer, in Notsituationen richtig zu handeln. Sehr empfehlenswert!" },
  { name: "Lukas Schmidt", text: "Der Kurs für betriebliche Ersthelfer hat mir geholfen, im Ernstfall ruhig und effektiv zu agieren." },
  { name: "Carina Weber", text: "Die Schulung Erste Hilfe am Kind war äußerst informativ und praxisnah. Klare Empfehlung!" },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Erste-Hilfe-Training an einer Übungspuppe"
          width={1920}
          height={1280}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="mx-auto max-w-6xl px-4 py-28 sm:px-6 sm:py-40">
          <div className="max-w-2xl text-primary-foreground">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">
              Erste Hilfe lernen
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-6xl">
              Wissen rettet Leben. Wir zeigen dir wie.
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/90 sm:text-xl">
              Praxisnahe Erste-Hilfe-Kurse für Privatpersonen, Betriebe und Familien –
              mit erfahrenen Trainern und in angenehmer Lernatmosphäre.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/kurse"
                className="rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition hover:brightness-110"
              >
                Jetzt anmelden
              </Link>
              <Link
                to="/info"
                className="rounded-full border border-primary-foreground/40 px-6 py-3 text-base font-semibold text-primary-foreground transition hover:bg-primary-foreground/10"
              >
                Mehr erfahren
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary">
                <span className="h-2.5 w-2.5 rounded-full bg-primary" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--primary-deep)]">{h.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Über uns Teaser */}
      <section className="bg-secondary/50">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:items-center">
          <img
            src={trainingImg}
            alt="Trainingsgruppe übt Erste Hilfe"
            width={1600}
            height={1067}
            loading="lazy"
            className="rounded-2xl object-cover shadow-[var(--shadow-card)]"
          />
          <div>
            <h2 className="text-3xl font-bold text-[var(--primary-deep)] sm:text-4xl">
              Erste Hilfe rettet Leben – und jeder kann sie leisten.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Unser Team aus erfahrenen Ausbilderinnen und Ausbildern bringt medizinisches
              Know-how, pädagogische Qualifikation und ganz viel Herzblut mit. Wir machen
              Erste Hilfe für jeden verständlich – im Alltag, im Beruf oder auf der Rennstrecke.
            </p>
            <Link
              to="/info"
              className="mt-6 inline-flex rounded-full bg-[var(--primary-deep)] px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:brightness-125"
            >
              Unsere Vision
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-[var(--primary-deep)]">
          Erfolgsgeschichten unserer Teilnehmer
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <blockquote className="text-sm leading-relaxed text-foreground/90">
                „{t.text}"
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-primary">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--primary-deep)]">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
            Bereit für den Ernstfall?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Finde den passenden Kurs für dich, dein Team oder deine Familie.
          </p>
          <Link
            to="/kurse"
            className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-[var(--shadow-soft)] hover:brightness-110"
          >
            Kurse ansehen
          </Link>
        </div>
      </section>
    </>
  );
}
