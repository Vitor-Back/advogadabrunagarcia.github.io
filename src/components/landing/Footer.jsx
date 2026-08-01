import React from "react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <img
              src="https://media.base44.com/images/public/6a30709d4330dbc5dd0e8ca7/3eb9be423_Designsemnome1.png"
              alt="Bruna Garcia Advocacia Criminal"
              className="h-16 w-auto object-contain block"
              style={{}}
            />
            <div>
              <p className="text-xl tracking-wider text-foreground mb-1" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                Dra Bruna Garcia
              </p>
              <p className="text-sm text-muted-foreground tracking-wider text-center" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                OAB/MS 25.346
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex items-center gap-6">
              <a
                href="https://www.instagram.com/advogadabrunagarcia"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://wa.me/5567981626148"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                WhatsApp
              </a>
            </div>
            <p className="font-body text-[10px] text-muted-foreground/50 mt-4 tracking-wider">
              © {new Date().getFullYear()} Bruna Garcia Advocacia Criminal. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}