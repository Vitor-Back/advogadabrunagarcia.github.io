import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Início", href: "#hero" },
    { label: "Atuação", href: "#areas" },
    { label: "Avaliações", href: "#reviews" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center h-20 relative">
        {/* Logo — esquerda */}
        <a href="#hero" className="flex items-center z-10">
          <img
            src="https://media.base44.com/images/public/6a30709d4330dbc5dd0e8ca7/3eb9be423_Designsemnome1.png"
            alt="Bruna Garcia Advocacia Criminal"
            className="h-14 w-auto object-contain block"
            style={{}}
          />
        </a>

        {/* Links — centro absoluto */}
        <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Botão — direita */}
        <a
          href="https://wa.me/5567981626148"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block ml-auto z-10 px-6 py-2.5 bg-primary text-primary-foreground font-body text-xs tracking-widest uppercase rounded-sm hover:bg-primary/80 transition-all duration-300"
        >
          Fale Agora
        </a>

        <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border">
          <div className="flex flex-col px-6 py-8 gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/5567981626148"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-primary-foreground font-body text-xs tracking-widest uppercase text-center rounded-sm"
            >
              Fale Agora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}