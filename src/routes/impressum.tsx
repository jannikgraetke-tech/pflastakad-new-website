import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – Pflaster Akademie" },
      { name: "description", content: "Angaben gemäß § 5 TMG für die Pflaster Akademie, Lia Chiara Daum, Schkeuditz." },
      { property: "og:title", content: "Impressum – Pflaster Akademie" },
      { property: "og:description", content: "Rechtliche Informationen der Pflaster Akademie." },
      { property: "og:url", content: "/impressum" },
    ],
    links: [{ rel: "canonical", href: "/impressum" }],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="text-4xl font-bold text-[var(--primary-deep)]">Impressum</h1>

      <section className="mt-10 space-y-1 text-foreground/90">
        <h2 className="text-lg font-semibold text-[var(--primary-deep)]">Angaben gemäß § 5 TMG</h2>
        <p className="mt-2">Pflaster Akademie</p>
        <p>Inhaberin: Lia Chiara Daum</p>
        <p>Einzelunternehmen</p>
        <p>Westringstraße 43</p>
        <p>04435 Schkeuditz OT Dölzig</p>
        <p>Deutschland</p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-[var(--primary-deep)]">Kontakt</h2>
        <p className="mt-2">
          E-Mail: <a href="mailto:info@pflastakad.com" className="text-primary hover:underline">info@pflastakad.com</a>
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-[var(--primary-deep)]">Steuerliche Angaben</h2>
        <p className="mt-2">Steuernummer: 232/212/07475</p>
      </section>

      <section className="mt-8 space-y-3 text-sm leading-relaxed text-foreground/90">
        <h2 className="text-lg font-semibold text-[var(--primary-deep)]">Berufsrechtliche Angaben</h2>
        <p>
          Die Inhaberin verfügt über die erforderlichen Qualifikationen und ist bei der DGUV
          (Deutsche Gesetzliche Unfallversicherung) sowie der VBG (Verwaltungs-Berufsgenossenschaft)
          registriert. Die Durchführung und fachliche Vertretung der Lehrinhalte erfolgt unter
          ärztlicher Aufsicht von Herrn Marcus Köhler.
        </p>
        <p>
          Abrechnungspflichtige Kurse für Berufsgenossenschaften (BG-Kurse) werden in Kooperation
          mit der Sesacon GmbH durchgeführt. Die Abrechnung gegenüber den zuständigen
          Berufsgenossenschaften erfolgt über die Sesacon GmbH.
        </p>
        <p>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV: Lia Chiara Daum, Westringstraße 43, 04435 Schkeuditz OT Dölzig.</p>
      </section>

      <section className="mt-8 space-y-3 text-sm leading-relaxed text-foreground/90">
        <h2 className="text-lg font-semibold text-[var(--primary-deep)]">Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieterin bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
          nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als
          Diensteanbieterin jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
          Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen. Bei Bekanntwerden von Rechtsverletzungen werde ich diese Inhalte
          umgehend entfernen.
        </p>

        <h2 className="text-lg font-semibold text-[var(--primary-deep)]">Haftung für Links</h2>
        <p>
          Diese Website enthält ggf. Links zu externen Websites Dritter, auf deren Inhalte ich
          keinen Einfluss habe. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
          Anbieter oder Betreiber der Seiten verantwortlich. Bei Bekanntwerden von
          Rechtsverletzungen werde ich derartige Links umgehend entfernen.
        </p>

        <h2 className="text-lg font-semibold text-[var(--primary-deep)]">Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf diesen Seiten
          unterliegen dem deutschen Urheberrecht. Downloads und Kopien dieser Seite sind nur für
          den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>

        <h2 className="text-lg font-semibold text-[var(--primary-deep)]">Online-Streitbeilegung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit. Ich
          bin nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>
    </article>
  );
}