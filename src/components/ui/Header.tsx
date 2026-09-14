"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { SOCIAL } from "@/lib/site";

const navigation = [
  { name: "Arbeit", href: "#projekte" },
  { name: "Arbeitsweise", href: "#arbeitsweise" },
  { name: "Konditionen", href: "#konditionen" },
  { name: "Kontakt", href: "#kontakt" },
];

export default function Header() {
  const [menuOffen, setMenuOffen] = useState(false);
  const [gescrollt, setGescrollt] = useState(false);

  useEffect(() => {
    const beiScroll = () => setGescrollt(window.scrollY > 12);
    beiScroll();
    window.addEventListener("scroll", beiScroll, { passive: true });
    return () => window.removeEventListener("scroll", beiScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        gescrollt || menuOffen
          ? "bg-papier/90 backdrop-blur-md border-b border-linie"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="#start"
            className="schrift-serif text-xl text-tinte hover:text-akzent transition-colors"
          >
            Jan Stenk
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navigation.map((eintrag) => (
              <Link
                key={eintrag.name}
                href={eintrag.href}
                className="text-[0.9375rem] text-tinte-leise hover:text-tinte transition-colors"
              >
                {eintrag.name}
              </Link>
            ))}
            <a
              href={SOCIAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.9375rem] text-tinte-leise hover:text-tinte transition-colors"
            >
              GitHub
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOffen((offen) => !offen)}
            className="md:hidden -mr-2 p-2 text-tinte"
            aria-expanded={menuOffen}
            aria-label={menuOffen ? "Menü schließen" : "Menü öffnen"}
          >
            {menuOffen ? (
              <X className="h-5 w-5" strokeWidth={1.5} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            )}
          </button>
        </div>

        {menuOffen && (
          <div className="md:hidden border-t border-linie py-4">
            <div className="flex flex-col">
              {navigation.map((eintrag) => (
                <Link
                  key={eintrag.name}
                  href={eintrag.href}
                  onClick={() => setMenuOffen(false)}
                  className="py-3 text-tinte-leise hover:text-tinte transition-colors"
                >
                  {eintrag.name}
                </Link>
              ))}
              <a
                href={SOCIAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 text-tinte-leise hover:text-tinte transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
