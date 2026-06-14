import { useState, type FormEvent } from "react";
import { Check, Send } from "lucide-react";

type Props = {
  courseTitle: string;
  compact?: boolean;
};

export function CourseInquiryForm({ courseTitle, compact = false }: Props) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim().slice(0, 120);
    const email = String(data.get("email") ?? "").trim().slice(0, 200);
    const phone = String(data.get("phone") ?? "").trim().slice(0, 60);
    const participants = String(data.get("participants") ?? "").trim().slice(0, 20);
    const message = String(data.get("message") ?? "").trim().slice(0, 2000);

    const subject = `Kursanfrage: ${courseTitle}`;
    const body =
      `Kurs: ${courseTitle}\n` +
      `Name: ${name}\n` +
      `E-Mail: ${email}\n` +
      `Telefon: ${phone}\n` +
      `Teilnehmer: ${participants}\n\n` +
      `Nachricht:\n${message}\n`;

    window.location.href =
      `mailto:info@pflastakad.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
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
          <h3 className="text-xl font-bold text-[var(--primary-deep)]">
            {courseTitle} anfragen
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Unverbindlich – wir melden uns meist innerhalb eines Werktags mit passenden Terminen zurück.
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
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition hover:brightness-110"
      >
        {sent ? (
          <>
            <Check className="h-4 w-4" /> E-Mail geöffnet
          </>
        ) : (
          <>
            Jetzt anfragen <Send className="h-4 w-4" />
          </>
        )}
      </button>
      <p className="text-xs text-muted-foreground">
        Mit dem Absenden öffnet sich dein E-Mail-Programm mit einer vorbereiteten Nachricht an
        info@pflastakad.com.
      </p>
    </form>
  );
}