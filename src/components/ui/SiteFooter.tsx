import Link from "next/link";
import { CONTACT, SOCIAL, LEBENSLAUF } from "@/lib/site";

export default function SiteFooter() {
  const jahr = new Date().getFullYear();

  return (
    <footer className="border-t border-linie bg-papier-tief py-14">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="schrift-serif text-xl text-tinte">Jan Stenk</p>
            <p className="mt-2 text-[0.9375rem] text-tinte-leise">
              Softwareentwickler &amp; Automatisierung
            </p>
            <p className="mt-1 text-sm text-tinte-still">
              {CONTACT.location} · {CONTACT.locationNote}
            </p>
          </div>

          <nav className="flex flex-col gap-2 text-[0.9375rem] sm:items-end">
            <a href={`mailto:${CONTACT.email}`} className="textlink">
              {CONTACT.email}
            </a>
            <a
              href={SOCIAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="textlink"
            >
              GitHub
            </a>
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="textlink"
            >
              LinkedIn
            </a>
            <a
              href={LEBENSLAUF.href}
              target="_blank"
              rel="noopener noreferrer"
              className="textlink"
            >
              {LEBENSLAUF.label}
            </a>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-linie pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-tinte-still">© {jahr} Jan Stenk</p>
          <nav className="flex items-center gap-6 text-sm">
            <Link
              href="/impressum"
              className="text-tinte-leise transition-colors hover:text-tinte"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-tinte-leise transition-colors hover:text-tinte"
            >
              Datenschutz
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
