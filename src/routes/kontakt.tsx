import { createFileRoute } from "@tanstack/react-router";
import { courses, courseBySlug } from "@/data/courses";

type KontaktSearch = { kurs?: string };

export const Route = createFileRoute("/kontakt")({
  validateSearch: (search: Record<string, unknown>): KontaktSearch => ({
    kurs: typeof search.kurs === "string" ? search.kurs : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Kontakt – Pflaster Akademie" },
      { name: "description", content: "Kontaktiere die Pflaster Akademie in Schkeuditz – per E-Mail oder über das Kontaktformular. Wähle direkt den passenden Kurs." },
      { property: "og:title", content: "Kontakt – Pflaster Akademie" },
      { property: "og:description", content: "Wir freuen uns auf deine Nachricht." },
      { property: "og:url", content: "/kontakt" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  const { kurs } = Route.useSearch();
  const preselected = kurs && courseBySlug(kurs) ? courseBySlug(kurs)!.title : "";

  return (
    <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <header className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Kontakt</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--primary-deep)] sm:text-5xl">
          Schreib uns
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Fragen zu Kursen, Terminen oder einem maßgeschneiderten Angebot? Wähle deinen Wunschkurs
          und wir melden uns schnell zurück.
        </p>
      </header>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl bg-secondary/60 p-8">
          <h2 className="text-xl font-semibold text-[var(--primary-deep)]">Pflaster Akademie</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            Westringstr. 43<br />
            04435 Schkeuditz OT Dölzig<br />
            Deutschland
          </p>
          <p className="mt-4 text-sm">
            <a
              href="mailto:info@pflastakad.com"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              info@pflastakad.com
            </a>
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            Tipp: Über jede Kursseite kannst du auch direkt den passenden Kurs anfragen – wir
            haben dann sofort alle Infos.
          </p>
        </div>

        <form
          className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]"
          action="mailto:info@pflastakad.com"
          method="post"
          encType="text/plain"
        >
          <div className="grid gap-4">
            <label className="grid gap-1 text-sm">
              <span className="font-medium text-foreground">Kurs</span>
              <select
                name="kurs"
                defaultValue={preselected}
                className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-primary"
              >
                <option value="">Allgemeine Anfrage</option>
                {courses.map((c) => (
                  <option key={c.slug} value={c.title}>{c.title}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-1 text-sm">
              <span className="font-medium text-foreground">Name</span>
              <input
                required
                name="name"
                className="rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
              />
            </label>
            <label className="grid gap-1 text-sm">
              <span className="font-medium text-foreground">E-Mail</span>
              <input
                required
                type="email"
                name="email"
                className="rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
              />
            </label>
            <label className="grid gap-1 text-sm">
              <span className="font-medium text-foreground">Nachricht</span>
              <textarea
                required
                name="message"
                rows={5}
                className="rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
              />
            </label>
            <button
              type="submit"
              className="mt-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:brightness-110"
            >
              Nachricht senden
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
