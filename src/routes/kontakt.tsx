import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { courses, courseBySlug } from "@/data/courses";
import { CourseInquiryForm } from "@/components/course-inquiry-form";

export const Route = createFileRoute("/kontakt")({
  validateSearch: z.object({ kurs: z.string().optional() }),
  head: () => ({
    meta: [
      { title: "Kontakt – Pflaster Akademie" },
      { name: "description", content: "Kontaktiere die Pflaster Akademie in Schkeuditz – per E-Mail oder über das Kontaktformular." },
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
  const selected = kurs ? courseBySlug(kurs) : undefined;
  const courseTitle = selected?.title ?? "Allgemeine Anfrage";

  return (
    <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <header className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Kontakt</p>
        <h1 className="mt-3 text-4xl font-bold text-[var(--primary-deep)] sm:text-5xl">
          {selected ? `Anfrage: ${selected.title}` : "Schreib uns"}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          {selected
            ? "Sag uns kurz Bescheid, was du brauchst – wir melden uns mit passenden Terminen zurück."
            : "Hast du Fragen zu Kursen, Terminen oder einem maßgeschneiderten Angebot? Wir melden uns schnell zurück."}
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

          <div className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
              Direkt zum Kurs
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm">
              {courses.map((c) => (
                <li key={c.slug}>
                  <a
                    href={`/kontakt?kurs=${c.slug}`}
                    className={
                      c.slug === kurs
                        ? "font-semibold text-primary"
                        : "text-foreground/80 hover:text-primary"
                    }
                  >
                    {c.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <CourseInquiryForm key={courseTitle} courseTitle={courseTitle} />
      </div>
    </div>
  );
}