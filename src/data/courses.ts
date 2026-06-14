import type { LucideIcon } from "lucide-react";
import {
  Dog, RefreshCw, Building2, GraduationCap, Car, Baby, Sparkles, Ambulance, MessageCircle, Syringe,
} from "lucide-react";

export type Course = {
  slug: string;
  icon: LucideIcon;
  title: string;
  audience: string;
  price: string;
  duration: string;
  tagline: string;
  description: string;
  learnings: string[];
  forWhom: string;
  certificate: string;
  bookingUrl: string;
  bookingCta: string;
  image: string;
  review: string;
};

export const courses: Course[] = [
  {
    slug: "erste-hilfe-am-hund",
    icon: Dog,
    title: "Erste Hilfe am Hund",
    audience: "Für Hundebesitzer",
    price: "40 €",
    duration: "ca. 4 Stunden · 1 Termin",
    tagline: "Im Notfall für deinen besten Freund da sein.",
    description:
      "Ein Verschlucken, eine Vergiftung, eine Verletzung auf dem Spaziergang – als Hundebesitzer bist du oft die erste Hilfe. In diesem Kurs lernst du, ruhig und richtig zu handeln, bis der Tierarzt übernimmt.",
    learnings: [
      "Notfälle früh erkennen und richtig einschätzen",
      "Wunden versorgen und korrekt verbinden",
      "Verhalten bei Vergiftungen und Verschlucken",
      "Stabile Lagerung und sicherer Transport",
      "Wiederbelebung beim Hund (Herzdruckmassage & Beatmung)",
    ],
    forWhom: "Hundebesitzer, Züchter, Gassi-Services und alle, die viel mit Hunden zu tun haben.",
    certificate: "Teilnahmebescheinigung",
    bookingUrl: "https://www.pflastakad.com/service-page/erste-hilfe-am-hund",
    bookingCta: "Kurs ansehen",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200&q=80&auto=format&fit=crop",
    review: "Endlich weiß ich, wie ich meinem Hund im Ernstfall helfen kann – super praxisnah erklärt.",
  },
  {
    slug: "auffrischung-erste-hilfe",
    icon: RefreshCw,
    title: "Auffrischung Erste Hilfe",
    audience: "Für Jung oder Alt",
    price: "50 €",
    duration: "ca. 9 UE · 1 Tag",
    tagline: "Dein Wissen wieder auf den neuesten Stand.",
    description:
      "Erste Hilfe verlernt man schnell, wenn man sie nicht braucht. In der Auffrischung holst du dein Wissen kompakt zurück – nach den aktuellen Leitlinien und mit viel praktischer Übung.",
    learnings: [
      "Herz-Lungen-Wiederbelebung & Umgang mit dem AED",
      "Stabile Seitenlage sicher anwenden",
      "Wundversorgung und Umgang mit starken Blutungen",
      "Richtig absetzen: der Notruf 112",
      "Aktuelle Erste-Hilfe-Leitlinien im Überblick",
    ],
    forWhom: "Alle, die ihren Erste-Hilfe-Kurs auffrischen oder ihr Wissen sicher halten möchten.",
    certificate: "Teilnahmebescheinigung",
    bookingUrl: "https://www.pflastakad.com/service-page/auffrischung-erste-hilfe",
    bookingCta: "Kurs ansehen",
    image: "https://images.unsplash.com/photo-1622115297822-a3798fdbe1f6?w=1200&q=80&auto=format&fit=crop",
    review: "Nach Jahren ohne Übung saß plötzlich wieder alles. Kompakt, locker und ohne erhobenen Zeigefinger.",
  },
  {
    slug: "betrieblicher-ersthelfer-grundkurs",
    icon: Building2,
    title: "Betrieblicher Ersthelfer – Grundkurs",
    audience: "Für Privat und Firmen",
    price: "Individueller Preis",
    duration: "9 UE · 1 Tag",
    tagline: "Die anerkannte Ausbildung für Ihre Ersthelfer.",
    description:
      "Jeder Betrieb braucht ausgebildete Ersthelfer. Unser DGUV-anerkannter Grundkurs macht Ihre Mitarbeitenden fit für den Ernstfall – praxisnah, lebendig und über die Berufsgenossenschaft abrechenbar.",
    learnings: [
      "Lebensrettende Sofortmaßnahmen sicher durchführen",
      "Herz-Lungen-Wiederbelebung & Defibrillator (AED)",
      "Versorgung von Wunden, Knochenbrüchen und Verbrennungen",
      "Richtiges Verhalten am Unfallort im Betrieb",
      "Dokumentation und Verbandbuch",
    ],
    forWhom: "Betriebe, Vereine und Einrichtungen, die Ersthelfer nach DGUV-Vorgabe ausbilden müssen.",
    certificate: "DGUV-anerkannt · BG-abrechenbar",
    bookingUrl: "https://www.pflastakad.com/service-page/betrieblicher-ersthelfer-grundkurs",
    bookingCta: "Kurs ansehen",
    image: "https://images.unsplash.com/photo-1624638760852-8ede1666ab07?w=1200&q=80&auto=format&fit=crop",
    review: "Unser ganzes Team fühlt sich jetzt sicher. Die Ausbildung war kurzweilig und absolut praxisnah.",
  },
  {
    slug: "betrieblicher-ersthelfer-fortbildung",
    icon: GraduationCap,
    title: "Betrieblicher Ersthelfer – Fortbildung",
    audience: "Für Privat und Firmen",
    price: "Individueller Preis",
    duration: "9 UE · 1 Tag",
    tagline: "Pflicht-Auffrischung, die wirklich Spaß macht.",
    description:
      "Betriebliche Ersthelfer müssen alle zwei Jahre fortgebildet werden. Wir machen aus der Pflicht ein lebendiges Training mit vielen Fallbeispielen – damit im Ernstfall jeder Griff sitzt.",
    learnings: [
      "Auffrischung aller lebensrettenden Sofortmaßnahmen",
      "Reanimation & AED im realistischen Szenario",
      "Aktuelle Fallbeispiele aus dem Betriebsalltag",
      "Sicherer Umgang mit Erste-Hilfe-Material",
      "Fragen aus der Praxis der Teilnehmenden",
    ],
    forWhom: "Bereits ausgebildete betriebliche Ersthelfer, deren Fortbildung ansteht.",
    certificate: "DGUV-anerkannt · BG-abrechenbar",
    bookingUrl: "https://www.pflastakad.com/service-page/betrieblicher-ersthelfer-fortbildung",
    bookingCta: "Kurs ansehen",
    image: "https://images.unsplash.com/photo-1564144573017-8dc932e0039e?w=1200&q=80&auto=format&fit=crop",
    review: "Eine Pflicht-Fortbildung, die wirklich Spaß gemacht hat – viele echte Fallbeispiele statt trockener Theorie.",
  },
  {
    slug: "erste-hilfe-fuer-fahrschueler",
    icon: Car,
    title: "Erste Hilfe für Fahrschüler",
    audience: "Für Führerscheinanwärter",
    price: "45 €",
    duration: "9 UE · 1 Tag",
    tagline: "Der Pflichtkurs für deinen Führerschein – entspannt erledigt.",
    description:
      "Ohne Erste-Hilfe-Nachweis kein Führerschein. Bei uns hakst du den Pflichtkurs an einem Tag ab – locker, praxisnah und für alle Führerscheinklassen anerkannt.",
    learnings: [
      "Sofortmaßnahmen am Unfallort",
      "Verhalten am Verkehrsunfall & Absicherung der Unfallstelle",
      "Helmabnahme und Retten aus dem Fahrzeug",
      "Herz-Lungen-Wiederbelebung & stabile Seitenlage",
      "Notruf richtig absetzen",
    ],
    forWhom: "Führerscheinanwärter aller Klassen (Auto, Motorrad, LKW u. v. m.).",
    certificate: "Anerkannt für alle Führerscheinklassen",
    bookingUrl: "https://www.pflastakad.com/booking-calendar/erste-hilfe-f%C3%BCr-fahrsch%C3%BCler",
    bookingCta: "Termin buchen",
    image: "https://images.unsplash.com/photo-1618737739013-aed8938604fb?w=1200&q=80&auto=format&fit=crop",
    review: "In einem Tag erledigt und total entspannt erklärt. Hat sich überhaupt nicht wie Pflicht angefühlt.",
  },
  {
    slug: "erste-hilfe-fuer-eltern-grosseltern",
    icon: Baby,
    title: "Erste Hilfe für Eltern / Großeltern",
    audience: "Säugling & Kind",
    price: "60 €",
    duration: "ca. 9 UE · 1 Tag",
    tagline: "Sicherheit für die Kleinsten – damit du ruhig bleibst.",
    description:
      "Notfälle bei Babys und Kleinkindern brauchen besonderes Wissen. In diesem Kurs lernst du genau die Handgriffe, die im Ernstfall den Unterschied machen – speziell für Säuglinge und Kinder.",
    learnings: [
      "Wiederbelebung bei Säuglingen und Kindern",
      "Richtiges Handeln beim Verschlucken",
      "Fieberkrampf, Pseudokrupp und Atemnot",
      "Verbrennungen, Stürze und Vergiftungen",
      "Notfallapotheke und Vorbeugung zu Hause",
    ],
    forWhom: "Eltern, Großeltern, Tageseltern und alle, die Kinder betreuen.",
    certificate: "Teilnahmebescheinigung",
    bookingUrl: "https://www.pflastakad.com/booking-calendar/erste-hilfe-f%C3%BCr-eltern-gro%C3%9Feltern",
    bookingCta: "Termin buchen",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&q=80&auto=format&fit=crop",
    review: "Als Mama war ich danach viel ruhiger. Die Inhalte zu Säuglingen und Kindern waren genau richtig.",
  },
  {
    slug: "erste-hilfe-spezial",
    icon: Sparkles,
    title: "Erste Hilfe Spezial",
    audience: "Individuelle Themen",
    price: "Individueller Preis",
    duration: "nach Absprache",
    tagline: "Dein Wunschthema – maßgeschneidert geschult.",
    description:
      "Du hast ein spezielles Thema im Kopf? Wir stellen einen Kurs genau nach deinen Anforderungen zusammen – ob Verein, Schule oder besonderes Einsatzgebiet.",
    learnings: [
      "Individuell auf dein Thema zugeschnittene Inhalte",
      "Praxisnahe Szenarien aus deinem Umfeld",
      "Flexible Dauer und Gruppengröße",
      "Auf Wunsch bei dir vor Ort",
    ],
    forWhom: "Gruppen, Vereine, Schulen und Unternehmen mit speziellem Schulungsbedarf.",
    certificate: "Teilnahmebescheinigung",
    bookingUrl: "https://www.pflastakad.com/service-page/erste-hilfe-spezial",
    bookingCta: "Kurs ansehen",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1200&q=80&auto=format&fit=crop",
    review: "Genau auf unser Thema zugeschnitten – man merkt, dass hier richtig mitgedacht wird.",
  },
  {
    slug: "notfalltraining",
    icon: Ambulance,
    title: "Notfalltraining",
    audience: "Arztpraxen, Pflege, Rettungsdienst",
    price: "Individueller Preis",
    duration: "nach Absprache",
    tagline: "Wenn jede Sekunde zählt – trainiert, bis es sitzt.",
    description:
      "Für medizinisches Fachpersonal: praxisorientiertes Notfalltraining mit realistischen Simulationen. Wir trainieren Abläufe im Team, damit im Ernstfall jeder Handgriff und jede Rolle klar ist.",
    learnings: [
      "Strukturierte Notfallabläufe im Team (z. B. ABCDE)",
      "Reanimation & AED auf professionellem Niveau",
      "Notfallmedikamente sicher anwenden",
      "Realistische Simulationen und Debriefing",
      "Kommunikation und Rollen im Notfall",
    ],
    forWhom: "Arztpraxen, Pflegeeinrichtungen, MVZ und Rettungsdienst-Teams.",
    certificate: "Teilnahmebescheinigung · auf Wunsch Inhouse",
    bookingUrl: "https://www.pflastakad.com/service-page/notfalltraining",
    bookingCta: "Kurs ansehen",
    image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=1200&q=80&auto=format&fit=crop",
    review: "Realistische Szenarien und ehrliches Feedback. Unser Praxisteam geht jetzt viel strukturierter in Notfälle.",
  },
  {
    slug: "erste-hilfe-beratung",
    icon: MessageCircle,
    title: "Erste-Hilfe-Beratung",
    audience: "Individuelle Beratung für Firmen",
    price: "Individueller Preis",
    duration: "nach Absprache",
    tagline: "Erste Hilfe im Betrieb – sicher aufgestellt.",
    description:
      "Wie viele Ersthelfer braucht Ihr Betrieb? Welches Material gehört in den Verbandkasten? Wir beraten Sie unabhängig zu Schulungen, Material und gesetzlichen Vorgaben.",
    learnings: [
      "Gesetzliche Vorgaben für Ihren Betrieb",
      "Bedarf an Ersthelfern und Schulungen",
      "Erste-Hilfe-Material und Verbandkästen",
      "Maßgeschneidertes Schulungskonzept",
    ],
    forWhom: "Unternehmen und Einrichtungen, die ihre Erste-Hilfe-Organisation aufbauen oder prüfen wollen.",
    certificate: "Individuelles Beratungsprotokoll",
    bookingUrl: "https://www.pflastakad.com/booking-calendar/erste-hilfe-beratung-1",
    bookingCta: "Beratung anfragen",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80&auto=format&fit=crop",
    review: "Kompetente, unabhängige Beratung – wir wissen jetzt genau, was unser Betrieb wirklich braucht.",
  },
  {
    slug: "injektions-und-medikamententraining",
    icon: Syringe,
    title: "Injektions- & Medikamententraining",
    audience: "Arztpraxen, Pflege, Rettungsdienst",
    price: "135 €",
    duration: "nach Absprache",
    tagline: "Sicher injizieren, korrekt dokumentieren.",
    description:
      "Praxisintensives Training für medizinisches Fachpersonal: sichere Injektionstechniken, Hygiene und der korrekte Umgang mit Medikamenten – mit viel praktischer Übung.",
    learnings: [
      "Subkutane und intramuskuläre Injektionstechniken",
      "Hygiene und sicheres Arbeiten",
      "Medikamentengabe und Dosierung",
      "Dokumentation und rechtliche Grundlagen",
      "Umgang mit Komplikationen",
    ],
    forWhom: "Medizinische Fachangestellte, Pflegekräfte und Rettungsdienstpersonal.",
    certificate: "Teilnahmebescheinigung",
    bookingUrl: "https://www.pflastakad.com/booking-calendar/injektions-und-medikamententraining",
    bookingCta: "Termin buchen",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1200&q=80&auto=format&fit=crop",
    review: "Viel Übung und klare Erklärungen. Beim Injizieren fühle ich mich jetzt deutlich sicherer.",
  },
];

export const courseBySlug = (slug: string) => courses.find((c) => c.slug === slug);
