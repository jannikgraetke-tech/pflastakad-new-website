import { createFileRoute, Link } from "@tanstack/react-router";
import trainingImg from "../assets/training.jpg";

export const Route = createFileRoute("/info")({
  head: () => ({
    meta: [
      { title: "Über uns – Pflaster Akademie" },
      { name: "description", content: "Unsere Vision: Erste Hilfe für alle verständlich machen. Erfahre mehr über das Team der Pflaster Akademie." },
      { property: "og:title", content: "Über uns – Pflaster Akademie" },
      { property: "og:description", content: "Erfahrene Ausbilder, medizinisches Know-how und Herzblut für deine Sicherheit." },
      { property: "og:url", content: "/info" },
    ],
    links: [{ rel: "canonical", href: "/info" }],
  }),
  component: InfoPage,
});

function InfoPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Über uns</p>
      <h1 className="mt-3 text-4xl font-bold text-[var(--primary-deep)] sm:text-5xl">Unsere Vision</h1>
      <p className="mt-6 text-lg text-foreground/90">
        Wir sind überzeugt: Erste Hilfe rettet Leben – und jeder kann sie leisten!
      </p>

      <img
        src={trainingImg}
        alt="Trainingsraum der Pflaster Akademie"
        width={1600}
        height={1067}
        loading="lazy"
        className="mt-10 rounded-2xl object-cover shadow-[var(--shadow-card)]"
      />

      <div className="prose prose-slate mt-10 max-w-none space-y-6 text-foreground/90">
        <p>
          Unser Team besteht aus erfahrenen Ausbilderinnen und Ausbildern mit medizinischem
          Hintergrund, pädagogischer Qualifikation und ganz viel Herzblut. Wir bringen das nötige
          Wissen, praktische Erfahrung und vor allem Begeisterung mit, um Erste Hilfe für jeden
          verständlich und greifbar zu machen – ganz gleich ob im Alltag, im Straßenverkehr oder
          auf der Rennstrecke.
        </p>
        <p>
          Unser Ziel ist es, mehr Sicherheit in den Alltag zu bringen – durch praxisnahe
          Schulungen, moderne Ausbildungsmethoden und einen respektvollen Umgang auf Augenhöhe.
          Dabei legen wir großen Wert auf eine angenehme Lernatmosphäre, in der keine Frage zu
          viel und kein Fehler ein Problem ist. Denn nur wer sich traut, kann im Ernstfall helfen.
        </p>
        <p>
          Ob Unternehmen, Vereine, Schulen oder Privatpersonen – wir passen unsere Kurse
          individuell an deine Bedürfnisse an. Mit Engagement, Kompetenz und einem klaren Ziel:
          Menschen stark zu machen, wenn es darauf ankommt.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-secondary/60 p-8 text-center">
        <h2 className="text-xl font-semibold text-[var(--primary-deep)]">Kursangebot und Anmeldung</h2>
        <p className="mt-2 text-muted-foreground">
          Erfahre mehr über unsere Kurse und melde dich noch heute an.
        </p>
        <Link
          to="/kurse"
          className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110"
        >
          Jetzt anmelden
        </Link>
      </div>
    </article>
  );
}