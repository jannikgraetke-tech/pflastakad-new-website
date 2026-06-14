import { createFileRoute, Link } from "@tanstack/react-router";
import { HeartPulse, HeartHandshake, ShieldPlus } from "lucide-react";
import founderImg from "../assets/founder.jpg";

export const Route = createFileRoute("/info")({
  head: () => ({
    meta: [
      { title: "Über uns – Pflaster Akademie" },
      { name: "description", content: "Hinter der Pflaster Akademie steht Lia Chiara Daum. Erfahre, warum sie die Akademie gegründet hat – Erste Hilfe mit Herz, Kompetenz und auf Augenhöhe." },
      { property: "og:title", content: "Über uns – Pflaster Akademie" },
      { property: "og:description", content: "Die Geschichte und Mission hinter der Pflaster Akademie." },
      { property: "og:url", content: "/info" },
    ],
    links: [{ rel: "canonical", href: "/info" }],
  }),
  component: InfoPage,
});

const values = [
  { icon: HeartPulse, title: "Praxis zuerst", text: "Echte Szenarien, echtes Material – du übst, bis du dich sicher fühlst." },
  { icon: HeartHandshake, title: "Auf Augenhöhe", text: "Kleine Gruppen, keine dummen Fragen. Lernen ohne Druck, mit Geduld." },
  { icon: ShieldPlus, title: "Anerkannt & verlässlich", text: "Zertifiziert nach BG/DGUV – auch für betriebliche Ersthelfer." },
];

function InfoPage() {
  return (
    <div>
      {/* Hero — die Gründerin */}
      <section className="brand-wash border-b border-border bg-secondary/30">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Die Gründerin</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-[var(--primary-deep)] sm:text-5xl">
              Hinter der Pflaster Akademie steht eine Überzeugung.
            </h1>
            <p className="mt-6 text-lg text-foreground/90">
              „Erste Hilfe rettet Leben – und jeder kann sie leisten. Diese Überzeugung hat mich
              dazu gebracht, die Pflaster Akademie zu gründen."
            </p>
            <p className="mt-4 font-serif text-lg text-[var(--primary-deep)]">— Lia Chiara Daum, Gründerin</p>
          </div>
          <div className="relative">
            <img
              src={founderImg}
              alt="Lia Chiara Daum, Gründerin der Pflaster Akademie, mit Notfallrucksack"
              width={1600}
              height={1137}
              className="w-full rounded-3xl object-cover shadow-[var(--shadow-soft)]"
            />
            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-[var(--primary-deep)] px-5 py-4 text-primary-foreground shadow-xl">
              <p className="font-serif text-lg font-bold">Lia Chiara Daum</p>
              <p className="text-xs text-primary-foreground/70">Gründerin · Pflaster Akademie</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meine Geschichte */}
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-bold tracking-tight text-[var(--primary-deep)]">Warum ich gegründet habe</h2>
        <div className="mt-5 space-y-5 leading-relaxed text-foreground/90">
          <p>
            In Notfällen habe ich immer wieder dasselbe erlebt: Menschen wollen helfen, trauen sich
            aber nicht – aus Angst, etwas falsch zu machen. Dabei ist der größte Fehler, gar nichts
            zu tun. Genau hier wollte ich ansetzen.
          </p>
          <p>
            Mit der Pflaster Akademie vermittle ich Erste Hilfe so, dass sie wirklich hängen bleibt:
            praxisnah, ruhig erklärt und in einer Atmosphäre, in der jede Frage erlaubt ist. Kein
            trockener Frontalunterricht, sondern echtes Üben an echten Situationen – vom
            Führerschein über die Familie bis zur Arztpraxis. Und ja, sogar Erste Hilfe am Hund.
          </p>
          <p>
            Mein Ziel ist einfach: Ich möchte, dass du im entscheidenden Moment ruhig bleibst und
            handelst. Denn Wissen rettet Leben – und ich zeige dir wie.
          </p>
        </div>

        <p className="mt-8 font-serif text-xl text-[var(--primary-deep)]">— Lia Chiara Daum</p>
      </article>

      {/* Werte */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[oklch(0.5_0.13_230)] text-primary-foreground">
                  <v.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[var(--primary-deep)]">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--primary-deep)] sm:text-4xl">
            Lust, gemeinsam sicher zu handeln?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Finde den passenden Kurs für dich, deine Familie oder dein Team.
          </p>
          <Link
            to="/kurse"
            className="mt-8 inline-flex rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition hover:brightness-110"
          >
            Kurse ansehen
          </Link>
        </div>
      </section>
    </div>
  );
}
