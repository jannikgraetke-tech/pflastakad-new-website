import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { MapPin, Mail, Clock, Check, Send, ShieldCheck, Loader2 } from "lucide-react";
import { courses, courseBySlug } from "@/data/courses";
import { sendInquiry } from "@/lib/send-inquiry";

type Status = "idle" | "sending" | "sent" | "mailto" | "error";

export const Route = createFileRoute("/kontakt")({
  validateSearch: z.object({ kurs: z.string().optional() }),
  head: () => ({
    meta: [
      { title: "Kontakt – Pflaster Akademie" },
      { name: "description", content: "Kontaktiere die Pflaster Akademie in Schkeuditz – wähle deinen Kurs und sende uns deine Anfrage. Schnelle, persönliche Rückmeldung." },
      { property: "og:title", content: "Kontakt – Pflaster Akademie" },
      { property: "og:description", content: "Wir freuen uns auf deine Nachricht." },
      { property: "og:url", content: "/kontakt" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: KontaktPage,
});

const trust = [
  { icon: Clock, label: "Antwort meist innerhalb eines Werktags" },
  { icon: ShieldCheck, label: "Zertifiziert nach BG/DGUV" },
  { icon: Check, label: "Unverbindlich – persönliche Rückmeldung, kein Bot" },
];

function KontaktPage() {
  const { kurs } = Route.useSearch();
  const preselected = (kurs && courseBySlug(kurs)?.title) || "";
  const [status, setStatus] = useState<Status>("idle");
  const sent = status === "sent" || status === "mailto";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const kursWahl = get("kurs") || "Allgemeine Anfrage";

    setStatus("sending");
    try {
      const result = await sendInquiry({
        subject: `Anfrage: ${kursWahl}`,
        kurs: kursWahl,
        name: get("name"),
        email: get("email"),
        phone: get("phone"),
        participants: get("participants"),
        date: get("date"),
        message: get("message"),
      });
      setStatus(result);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <header className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Kontakt</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--primary-deep)] sm:text-5xl">
          Sag uns, wie wir helfen können
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Wähle deinen Wunschkurs und schick uns ein paar Eckdaten – wir melden uns schnell mit
          passenden Terminen zurück.
        </p>
      </header>

      <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Info panel */}
        <div className="flex flex-col rounded-3xl bg-[var(--primary-deep)] p-8 text-primary-foreground">
          <h2 className="font-serif text-2xl font-bold">Pflaster Akademie</h2>
          <p className="mt-4 flex items-start gap-3 text-sm text-primary-foreground/85">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" />
            <span>Westringstr. 43<br />04435 Schkeuditz OT Dölzig<br />Deutschland</span>
          </p>
          <a href="mailto:info@pflastakad.com" className="mt-4 inline-flex items-center gap-3 text-sm font-medium hover:text-cyan-300">
            <Mail className="h-5 w-5 text-cyan-300" aria-hidden="true" /> info@pflastakad.com
          </a>
          <ul className="mt-8 space-y-3 border-t border-white/10 pt-6">
            {trust.map((t) => (
              <li key={t.label} className="flex items-start gap-3 text-sm text-primary-foreground/85">
                <t.icon className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" /> {t.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Interactive form */}
        <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <div className="grid gap-4">
            <label className="grid gap-1.5 text-sm">
              <span className="font-medium text-foreground">Welcher Kurs interessiert dich?</span>
              <select
                name="kurs"
                defaultValue={preselected}
                className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none transition focus:border-primary focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Allgemeine Anfrage</option>
                {courses.map((c) => (
                  <option key={c.slug} value={c.title}>{c.title}</option>
                ))}
              </select>
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium text-foreground">Name *</span>
                <input
                  required
                  name="name"
                  autoComplete="name"
                  disabled={sent}
                  className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none transition focus:border-primary focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60"
                />
              </label>
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium text-foreground">E-Mail *</span>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  disabled={sent}
                  className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none transition focus:border-primary focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60"
                />
              </label>
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium text-foreground">Telefon <span className="text-muted-foreground">(optional)</span></span>
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  disabled={sent}
                  className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none transition focus:border-primary focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60"
                />
              </label>
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium text-foreground">Teilnehmer <span className="text-muted-foreground">(optional)</span></span>
                <input
                  name="participants"
                  inputMode="numeric"
                  placeholder="z. B. 1 oder 10"
                  disabled={sent}
                  className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none transition focus:border-primary focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60"
                />
              </label>
            </div>

            <label className="grid gap-1.5 text-sm">
              <span className="font-medium text-foreground">Wunschtermin <span className="text-muted-foreground">(optional)</span></span>
              <input
                name="date"
                placeholder="z. B. KW 30, ein Samstag oder flexibel"
                disabled={sent}
                className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none transition focus:border-primary focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60"
              />
            </label>

            <label className="grid gap-1.5 text-sm">
              <span className="font-medium text-foreground">Nachricht <span className="text-muted-foreground">(optional)</span></span>
              <textarea
                name="message"
                rows={3}
                placeholder="Firma, besondere Wünsche oder Fragen …"
                disabled={sent}
                className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none transition focus:border-primary focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60"
              />
            </label>

            <button
              type="submit"
              disabled={status === "sending" || sent}
              className="mt-1 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition hover:brightness-110 disabled:opacity-100 disabled:bg-emerald-600"
            >
              {status === "sending" ? (
                <><Loader2 className="h-5 w-5 animate-spin" /> Wird gesendet …</>
              ) : sent ? (
                <><Check className="h-5 w-5" /> {status === "sent" ? "Anfrage gesendet" : "E-Mail geöffnet"}</>
              ) : (
                <>Anfrage senden <Send className="h-4 w-4" /></>
              )}
            </button>
            <p aria-live="polite" className="text-center text-xs text-muted-foreground">
              {status === "sent"
                ? "Danke! Deine Anfrage ist bei uns eingegangen – wir melden uns meist innerhalb eines Werktags zurück."
                : status === "mailto"
                  ? "Dein E-Mail-Programm hat sich geöffnet – schick die vorbereitete Anfrage einfach ab."
                  : status === "error"
                    ? "Senden hat leider nicht geklappt. Bitte schreib uns direkt an info@pflastakad.com."
                    : "Mit dem Absenden geht deine Anfrage direkt an info@pflastakad.com."}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
