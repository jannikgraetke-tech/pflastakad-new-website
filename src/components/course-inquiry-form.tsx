import { useState, type FormEvent } from "react";
import { Check, Send, Loader2 } from "lucide-react";
import { sendInquiry } from "@/lib/send-inquiry";

type Props = {
  courseTitle: string;
  compact?: boolean;
};

type Status = "idle" | "sending" | "sent" | "mailto" | "error";

export function CourseInquiryForm({ courseTitle, compact = false }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const done = status === "sent" || status === "mailto";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "")
      .trim()
      .slice(0, 120);
    const email = String(data.get("email") ?? "")
      .trim()
      .slice(0, 200);
    const phone = String(data.get("phone") ?? "")
      .trim()
      .slice(0, 60);
    const participants = String(data.get("participants") ?? "")
      .trim()
      .slice(0, 20);
    const message = String(data.get("message") ?? "")
      .trim()
      .slice(0, 2000);

    setStatus("sending");
    try {
      const result = await sendInquiry({
        subject: `Kursanfrage: ${courseTitle}`,
        kurs: courseTitle,
        name,
        email,
        phone,
        participants,
        message,
      });
      setStatus(result);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={
        compact
          ? "grid gap-3"
          : "grid gap-4 rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8"
      }
    >
      {!compact && (
        <div>
          <h3 className="text-xl font-bold text-[var(--primary-deep)]">{courseTitle} anfragen</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Unverbindlich – wir melden uns meist innerhalb eines Werktags mit passenden Terminen
            zurück.
          </p>
        </div>
      )}

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1 text-sm">
          <span className="font-medium text-foreground">Name</span>
          <input
            required
            name="name"
            maxLength={120}
            autoComplete="name"
            className="rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="font-medium text-foreground">E-Mail</span>
          <input
            required
            type="email"
            name="email"
            maxLength={200}
            autoComplete="email"
            className="rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="font-medium text-foreground">Telefon (optional)</span>
          <input
            name="phone"
            type="tel"
            maxLength={60}
            autoComplete="tel"
            className="rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="font-medium text-foreground">Teilnehmer (optional)</span>
          <input
            name="participants"
            inputMode="numeric"
            maxLength={20}
            placeholder="z. B. 1 oder 10"
            className="rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
          />
        </label>
      </div>

      <label className="grid gap-1 text-sm">
        <span className="font-medium text-foreground">Nachricht / Wunschtermin</span>
        <textarea
          name="message"
          rows={4}
          maxLength={2000}
          placeholder="z. B. Wunschtermin, Firma, besondere Anforderungen…"
          className="rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending" || done}
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:bg-emerald-600 disabled:opacity-100"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Wird gesendet …
          </>
        ) : done ? (
          <>
            <Check className="h-4 w-4" />{" "}
            {status === "sent" ? "Anfrage gesendet" : "E-Mail geöffnet"}
          </>
        ) : (
          <>
            Jetzt anfragen <Send className="h-4 w-4" />
          </>
        )}
      </button>
      <p aria-live="polite" className="text-xs text-muted-foreground">
        {status === "sent"
          ? "Danke! Deine Anfrage ist bei uns eingegangen – wir melden uns meist innerhalb eines Werktags."
          : status === "mailto"
            ? "Dein E-Mail-Programm hat sich geöffnet – schick die vorbereitete Nachricht einfach ab."
            : status === "error"
              ? "Senden hat leider nicht geklappt. Bitte schreib uns direkt an info@pflastakad.com."
              : "Unverbindlich – wir melden uns meist innerhalb eines Werktags an info@pflastakad.com."}
      </p>
    </form>
  );
}
