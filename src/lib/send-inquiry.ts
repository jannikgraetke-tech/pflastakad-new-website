/**
 * Versendet eine Anfrage als E-Mail an info@pflastakad.com.
 *
 * Es wird der Dienst Web3Forms genutzt (kein eigener Server nötig, funktioniert
 * auch auf Lovable). Lege dafür einen kostenlosen Access-Key an:
 *   1. https://web3forms.com  → "Create Access Key"
 *   2. als Ziel-E-Mail  info@pflastakad.com  eintragen
 *   3. den Key unten in ACCESS_KEY einsetzen ODER als Umgebungsvariable
 *      VITE_WEB3FORMS_ACCESS_KEY in Lovable/Vite hinterlegen.
 *
 * Solange kein Key gesetzt ist, öffnet sich als Fallback automatisch das
 * E-Mail-Programm mit einer vorausgefüllten Nachricht an info@pflastakad.com.
 */
const ACCESS_KEY =
  ((import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined) ?? "").trim() ||
  "325f2ac4-2d1f-400f-ab71-a17eee5c72f2"; // Web3Forms key (Ziel: info@pflastakad.com) – Env-Var hat Vorrang

const INFO_MAIL = "info@pflastakad.com";

export type InquiryFields = {
  subject: string;
  kurs?: string;
  name: string;
  email: string;
  phone?: string;
  participants?: string;
  date?: string;
  message?: string;
};

function buildBody(f: InquiryFields) {
  return (
    `Kurs: ${f.kurs || "Allgemeine Anfrage"}\n` +
    `Name: ${f.name}\n` +
    `E-Mail: ${f.email}\n` +
    `Telefon: ${f.phone || "-"}\n` +
    `Teilnehmer: ${f.participants || "-"}\n` +
    `Wunschtermin(e): ${f.date || "-"}\n\n` +
    `Nachricht:\n${f.message || "-"}\n`
  );
}

/** "sent" = per E-Mail an info@ verschickt · "mailto" = Mailprogramm geöffnet (kein Key gesetzt). */
export async function sendInquiry(f: InquiryFields): Promise<"sent" | "mailto"> {
  if (!ACCESS_KEY) {
    window.location.href = `mailto:${INFO_MAIL}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(buildBody(f))}`;
    return "mailto";
  }

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: ACCESS_KEY,
      subject: f.subject,
      from_name: "Pflaster Akademie Website",
      replyto: f.email,
      Kurs: f.kurs || "Allgemeine Anfrage",
      Name: f.name,
      "E-Mail": f.email,
      Telefon: f.phone || "",
      Teilnehmer: f.participants || "",
      "Wunschtermin(e)": f.date || "",
      Nachricht: f.message || "",
    }),
  });

  const data = (await res.json().catch(() => ({ success: false }))) as {
    success?: boolean;
    message?: string;
  };
  if (!data.success) throw new Error(data.message || "Senden fehlgeschlagen");
  return "sent";
}
