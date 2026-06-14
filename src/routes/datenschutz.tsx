import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz – Pflaster Akademie" },
      { name: "description", content: "Datenschutzerklärung der Pflaster Akademie gemäß DSGVO – Informationen zur Verarbeitung Ihrer Daten bei Kontakt und Kursbuchung." },
      { property: "og:title", content: "Datenschutz – Pflaster Akademie" },
      { property: "og:url", content: "/datenschutz" },
    ],
    links: [{ rel: "canonical", href: "/datenschutz" }],
  }),
  component: DatenschutzPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="text-lg font-semibold text-[var(--primary-deep)]">{title}</h2>
      <div className="mt-2 space-y-3 text-sm leading-relaxed text-foreground/90">{children}</div>
    </section>
  );
}

function DatenschutzPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="text-4xl font-bold tracking-tight text-[var(--primary-deep)]">Datenschutzerklärung</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        Der Schutz deiner personenbezogenen Daten ist uns wichtig. Nachfolgend informieren wir
        dich über die Verarbeitung deiner Daten gemäß der Datenschutz-Grundverordnung (DSGVO).
      </p>

      <Section title="1. Verantwortliche Stelle">
        <p>
          Pflaster Akademie<br />
          Inhaberin: Lia Chiara Daum<br />
          Westringstraße 43, 04435 Schkeuditz OT Dölzig<br />
          E-Mail: <a href="mailto:info@pflastakad.com" className="text-primary hover:underline">info@pflastakad.com</a>
        </p>
      </Section>

      <Section title="2. Erhebung und Verarbeitung personenbezogener Daten">
        <p>
          Personenbezogene Daten werden nur erhoben, wenn du sie uns aktiv mitteilst – etwa über
          das Kontakt- oder Kursanfrageformular oder per E-Mail. Dazu gehören Name, E-Mail-Adresse,
          ggf. Telefonnummer, der gewünschte Kurs sowie der Inhalt deiner Nachricht.
        </p>
      </Section>

      <Section title="3. Zweck und Rechtsgrundlage">
        <p>
          Wir verarbeiten deine Daten ausschließlich zur Bearbeitung deiner Anfrage, zur
          Organisation und Durchführung von Kursen sowie zur Kommunikation mit dir. Rechtsgrundlage
          ist Art. 6 Abs. 1 lit. b DSGVO (Anbahnung bzw. Erfüllung eines Vertrags) sowie Art. 6
          Abs. 1 lit. a DSGVO (Einwilligung), soweit du uns diese erteilt hast.
        </p>
      </Section>

      <Section title="4. Kursbuchung und Terminvergabe">
        <p>
          Für die Buchung von Kursterminen kann ein externer Buchungs- bzw. Kalenderdienst
          eingesetzt werden. Dabei werden die zur Terminvereinbarung notwendigen Daten an den
          jeweiligen Anbieter übermittelt. Abrechnungspflichtige BG-Kurse werden in Kooperation mit
          der Sesacon GmbH durchgeführt und abgerechnet; hierfür notwendige Daten werden an diese
          weitergegeben.
        </p>
      </Section>

      <Section title="5. Speicherdauer">
        <p>
          Wir speichern deine Daten nur so lange, wie es für die genannten Zwecke erforderlich ist
          oder gesetzliche Aufbewahrungsfristen (z. B. handels- und steuerrechtlich) dies vorsehen.
          Anschließend werden die Daten gelöscht.
        </p>
      </Section>

      <Section title="6. Weitergabe an Dritte">
        <p>
          Eine Weitergabe deiner Daten erfolgt nur, soweit dies zur Vertragserfüllung erforderlich
          ist, du eingewilligt hast oder wir gesetzlich dazu verpflichtet sind. Ein Verkauf deiner
          Daten findet nicht statt.
        </p>
      </Section>

      <Section title="7. Deine Rechte">
        <p>
          Du hast jederzeit das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung
          (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) sowie
          Widerspruch (Art. 21 DSGVO). Eine erteilte Einwilligung kannst du jederzeit mit Wirkung
          für die Zukunft widerrufen. Zudem steht dir ein Beschwerderecht bei einer
          Datenschutz-Aufsichtsbehörde zu.
        </p>
      </Section>

      <Section title="8. Kontakt in Datenschutzfragen">
        <p>
          Bei Fragen zum Datenschutz oder zur Ausübung deiner Rechte wende dich bitte an:{" "}
          <a href="mailto:info@pflastakad.com" className="text-primary hover:underline">info@pflastakad.com</a>.
        </p>
      </Section>

      <p className="mt-10 text-xs text-muted-foreground">
        Hinweis: Diese Datenschutzerklärung ist eine allgemeine Vorlage und sollte vor
        Veröffentlichung an die konkret eingesetzten Dienste (z. B. Hosting, Buchungssystem,
        Analyse-Tools) angepasst und rechtlich geprüft werden.
      </p>
    </article>
  );
}
