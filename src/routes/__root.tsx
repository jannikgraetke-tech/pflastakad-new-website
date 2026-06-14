import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import logo from "../assets/logo.png";
import logoMark from "../assets/logo-trim.png";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Pflaster Akademie – Erste-Hilfe-Kurse in Schkeuditz" },
      { name: "description", content: "Praxisnahe Erste-Hilfe-Kurse für Privatpersonen, Betriebe, Fahrschüler und Eltern. Wissen rettet Leben – wir zeigen dir wie." },
      { name: "author", content: "Pflaster Akademie" },
      { property: "og:title", content: "Pflaster Akademie – Erste-Hilfe-Kurse in Schkeuditz" },
      { property: "og:description", content: "Praxisnahe Erste-Hilfe-Kurse für Privatpersonen, Betriebe, Fahrschüler und Eltern. Wissen rettet Leben – wir zeigen dir wie." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Pflaster Akademie" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Pflaster Akademie – Erste-Hilfe-Kurse in Schkeuditz" },
      { name: "twitter:description", content: "Praxisnahe Erste-Hilfe-Kurse für Privatpersonen, Betriebe, Fahrschüler und Eltern. Wissen rettet Leben – wir zeigen dir wie." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/46dc58b0-2dbc-48f0-b740-3def1abbdbce/id-preview-fe5da87b--774d298e-1e7f-481e-be50-e4dfaca2b61e.lovable.app-1781434558211.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/46dc58b0-2dbc-48f0-b740-3def1abbdbce/id-preview-fe5da87b--774d298e-1e7f-481e-be50-e4dfaca2b61e.lovable.app-1781434558211.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", type: "image/png", href: logo },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}

const navLinks = [
  { to: "/", label: "Start" },
  { to: "/info", label: "Über uns" },
  { to: "/kurse", label: "Kurse" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 py-2 sm:px-6">
        <Link to="/" className="flex items-center" aria-label="Pflaster Akademie – Startseite">
          <img src={logoMark} alt="Pflaster Akademie" className="h-11 w-auto object-contain" />
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "rounded-full px-3 py-2 text-sm font-semibold text-primary bg-secondary" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/kontakt"
            className="ml-1 hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition hover:brightness-110 sm:inline-flex"
          >
            Jetzt anmelden
          </Link>
        </nav>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[var(--primary-deep)] text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-10 w-10 object-contain" />
            <span className="text-lg font-semibold">Pflaster Akademie</span>
          </div>
          <p className="mt-3 text-sm text-primary-foreground/80">
            Wissen rettet Leben – wir zeigen dir wie.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-primary-foreground/70">Kontakt</h3>
          <p className="mt-3 text-sm text-primary-foreground/90">
            Westringstr. 43<br />
            04435 Schkeuditz OT Dölzig<br />
            <a href="mailto:info@pflastakad.com" className="underline-offset-4 hover:underline">info@pflastakad.com</a>
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-primary-foreground/70">Mehr</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/kurse" className="hover:underline">Kursangebote</Link></li>
            <li><Link to="/info" className="hover:underline">Über uns</Link></li>
            <li><Link to="/impressum" className="hover:underline">Impressum</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-4 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Pflaster Akademie · Lia Chiara Daum
      </div>
    </footer>
  );
}
