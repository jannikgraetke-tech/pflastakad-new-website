import { useState } from "react";
import { Check, Send, Mail, Phone } from "lucide-react";

export function CourseInquiryForm({ courseTitle }: { courseTitle: string }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `Kursanfrage: ${courseTitle}`;
    const body =
      `Kurs: ${courseTitle}\n` +
      `Name: ${form.name}\n` +
      `E-Mail: ${form.email}\n` +
      `Telefon: ${form.phone}\n\n` +
      `${form.message}`;
    // Open the visitor's mail client with everything pre-filled
    window.location.href = `mailto:info@pflastakad.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)]">
      <div className="grid md:grid-cols-[1fr_1.2fr]">
        {/* Reassurance panel */}
        <div className="bg-[var(--primary-deep)] p-8 text-primary-foreground">
          <h3 className="font-serif text-2xl font-bold">Diesen Kurs anfragen</h3>
          <p className="mt-3 text-sm text-primary-foreground/80">
            Unverbindlich &amp; kostenlos. Wir melden uns mit den nächsten freien Terminen –
            für dich, deine Familie oder dein Team.
          </p>
          <div className="mt-6 inline-flex rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium text-cyan-200 ring-1 ring-white/15">
            {courseTitle}
          </div>
          <div className="mt-8 space-y-3 text-sm text-primary-foreground/85">
            <a href="mailto:info@pflastakad.com" className="flex items-center gap-2 hover:text-white">
              <Mail className="h-4 w-4 text-cyan-300" /> info@pflastakad.com
            </a>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-cyan-300" /> Antwort meist innerhalb von 48 Stunden
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8">
          <div className="grid gap-4">
            <label className="grid gap-1.5 text-sm">
              <span className="font-medium text-foreground">Name</span>
              <input
                required
                value={form.name}
                onChange={update("name")}
                autoComplete="name"
                disabled={sent}
                className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60"
              />
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium text-foreground">E-Mail</span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  autoComplete="email"
                  disabled={sent}
                  className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60"
                />
              </label>
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium text-foreground">Telefon <span className="text-muted-foreground">(optional)</span></span>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  autoComplete="tel"
                  disabled={sent}
                  className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60"
                />
              </label>
            </div>
            <label className="grid gap-1.5 text-sm">
              <span className="font-medium text-foreground">Nachricht <span className="text-muted-foreground">(optional)</span></span>
              <textarea
                value={form.message}
                onChange={update("message")}
                rows={3}
                placeholder="Wunschtermin, Gruppengröße, Fragen …"
                disabled={sent}
                className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60"
              />
            </label>
            <button
              type="submit"
              disabled={sent}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition hover:brightness-110 disabled:bg-emerald-600"
            >
              {sent ? (
                <>
                  <Check className="h-5 w-5" /> Anfrage gesendet
                </>
              ) : (
                <>
                  Anfrage senden <Send className="h-4 w-4" />
                </>
              )}
            </button>
            <p aria-live="polite" className="text-center text-sm text-muted-foreground">
              {sent
                ? "Danke! Dein Mailprogramm hat sich geöffnet – schick die Anfrage einfach ab, wir melden uns schnell zurück."
                : "Mit dem Absenden öffnet sich dein Mailprogramm mit vorausgefüllter Anfrage."}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
