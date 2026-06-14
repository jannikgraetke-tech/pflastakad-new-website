import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, Clock, Users, Award, ShieldCheck, ArrowRight, ChevronLeft, Star } from "lucide-react";
import { courseBySlug } from "@/data/courses";
import { fadeUp, cardIn, stagger, viewportOnce } from "@/lib/motion";
import { CourseInquiryForm } from "@/components/course-inquiry-form";

export const Route = createFileRoute("/kurse/$slug")({
  loader: ({ params }) => {
    const c = courseBySlug(params.slug);
    if (!c) throw notFound();
    return { title: c.title, description: c.tagline };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Kurs"} – Pflaster Akademie` },
      { name: "description", content: loaderData?.description ?? "Erste-Hilfe-Kurs bei der Pflaster Akademie." },
      { property: "og:title", content: `${loaderData?.title ?? "Kurs"} – Pflaster Akademie` },
      { property: "og:description", content: loaderData?.description ?? "" },
    ],
  }),
  component: CourseDetail,
});

const trust = [
  { icon: ShieldCheck, label: "Zertifiziert nach BG/DGUV" },
  { icon: Users, label: "Kleine Gruppen, viel Praxis" },
  { icon: Star, label: "4,9 / 5 Teilnehmerbewertung" },
];

function CourseDetail() {
  const { slug } = Route.useParams();
  const course = courseBySlug(slug);
  if (!course) return null;
  const Icon = course.icon;

  return (
    <div>
      {/* Hero */}
      <section className="brand-wash border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <Link to="/kurse" className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            <ChevronLeft className="h-4 w-4" /> Alle Kurse
          </Link>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                <Icon className="h-4 w-4" aria-hidden="true" /> {course.audience}
              </span>
              <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[var(--primary-deep)] sm:text-5xl">
                {course.title}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">{course.tagline}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm font-semibold text-foreground">
                  {course.price}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 text-primary" /> {course.duration}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground">
                  <Award className="h-4 w-4 text-primary" /> {course.certificate}
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#anfragen"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition hover:brightness-110"
                >
                  Jetzt anfragen
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <Link
                  to="/kontakt"
                  search={{ kurs: course.slug }}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-base font-semibold text-foreground transition hover:bg-secondary"
                >
                  Frage stellen
                </Link>
              </div>
            </motion.div>

            <motion.img
              src={course.image}
              alt={course.title}
              width={1200}
              height={800}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 160, damping: 22 }}
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[var(--shadow-soft)]"
            />
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          {/* Main */}
          <div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce}>
              <motion.h2 variants={fadeUp} className="text-2xl font-bold tracking-tight text-[var(--primary-deep)]">
                Darum geht es
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-3 leading-relaxed text-muted-foreground">
                {course.description}
              </motion.p>

              <motion.h3 variants={fadeUp} className="mt-10 text-xl font-bold text-[var(--primary-deep)]">
                Das lernst du
              </motion.h3>
              <motion.ul variants={stagger} className="mt-5 grid gap-3 sm:grid-cols-2">
                {course.learnings.map((l) => (
                  <motion.li key={l} variants={fadeUp} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <span className="text-sm text-foreground">{l}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Trust */}
            <div className="mt-10 grid gap-4 rounded-2xl border border-border bg-secondary/40 p-6 sm:grid-cols-3">
              {trust.map((t) => (
                <div key={t.label} className="flex items-center gap-3">
                  <t.icon className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-sm font-medium text-foreground">{t.label}</span>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <figure className="mt-10 rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
              <div className="flex gap-0.5" aria-label="5 von 5 Sternen">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-3 text-lg leading-relaxed text-foreground/90">
                „{course.review}"
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-primary">— Teilnehmer der Pflaster Akademie</figcaption>
            </figure>
          </div>

          {/* Sticky booking card */}
          <aside className="lg:pl-2">
            <div className="lg:sticky lg:top-24">
              <motion.div
                variants={cardIn}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)]"
              >
                <div className="bg-[var(--primary-deep)] p-6 text-primary-foreground">
                  <p className="text-sm text-primary-foreground/70">{course.audience}</p>
                  <p className="mt-1 font-serif text-3xl font-bold">{course.price}</p>
                </div>
                <div className="space-y-3 p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary" /> {course.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4 text-primary" /> {course.forWhom}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Award className="h-4 w-4 text-primary" /> {course.certificate}
                  </div>
                  <a
                    href="#anfragen"
                    className="group mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition hover:brightness-110"
                  >
                    Kurs anfragen
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href="mailto:info@pflastakad.com"
                    className="flex w-full items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
                  >
                    Direkt per E-Mail
                  </a>
                </div>
              </motion.div>
            </div>
          </aside>
        </div>
      </div>

      {/* Final CTA */}
      <section id="anfragen" className="brand-wash border-t border-border bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {course.title} buchen
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--primary-deep)] sm:text-4xl">
              Platz sichern – ganz unkompliziert.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Schreib uns kurz, was du brauchst – Wunschtermin, Teilnehmerzahl oder offene Fragen.
              Wir melden uns meist innerhalb eines Werktags mit konkreten Terminen zurück.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-foreground/90">
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> Unverbindliche Anfrage</li>
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> Persönliche Rückmeldung – kein Bot</li>
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> Auch Inhouse / Gruppentermine möglich</li>
            </ul>
          </div>
          <CourseInquiryForm courseTitle={course.title} />
        </div>
      </section>

      <section className="bg-[var(--primary-deep)]">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Sichere dir deinen Platz im {course.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
            Wissen rettet Leben – wir zeigen dir wie. Melde dich jetzt an oder stelle uns deine Fragen.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#anfragen"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition hover:brightness-110"
            >
              Jetzt anfragen <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/kontakt"
              search={{ kurs: course.slug }}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-base font-semibold text-primary-foreground backdrop-blur transition hover:bg-white/20"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
