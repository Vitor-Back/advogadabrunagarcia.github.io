import React from "react";
import { motion } from "framer-motion";
import { MapPin, MessageCircle } from "lucide-react";

const WA = "5567981626148";

const PHOTO_2 = "https://media.base44.com/images/public/6a30709d4330dbc5dd0e8ca7/598f84190_WhatsAppImage2026-06-15at213712.jpg";

export default function NationwideReach() {
  return (
    <section className="relative py-24 md:py-32 bg-card overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "linear-gradient(hsl(0 100% 13% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(0 100% 13% / 0.3) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="md:w-5/12 relative"
          >
            <div className="absolute -inset-4 bg-primary/5 rounded-sm blur-2xl" />
            <div className="relative w-full max-w-md mx-auto rounded-sm shadow-2xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <img
                src={PHOTO_2}
                alt="Dra. Bruna Garcia em atuação profissional"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-sm" style={{ background: "linear-gradient(to bottom, rgba(80,8,30,0.35) 0%, rgba(40,3,15,0.55) 100%)" }} />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="md:w-7/12"
          >
            <p className="font-body text-xs tracking-[0.35em] uppercase text-primary mb-4">Presença Nacional</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight leading-tight">
              Atuação Estratégica em{" "}
              <span className="italic font-semibold">Todo o Território Nacional</span>
            </h2>

            <div className="w-full h-px bg-primary mt-8 mb-8" />

            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Com escritório em Campo Grande/MS e atuação em todo o Brasil, a Dra. Bruna Garcia 
              leva sua defesa criminal estratégica onde quer que seu cliente precise — sem limites geográficos, 
              com a mesma excelência e dedicação.
            </p>

            <div className="flex items-start gap-4 p-6 border border-border rounded-sm bg-background/50 mb-8">
              <MapPin size={22} className="text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <div>
                <p className="font-body text-sm font-medium text-foreground mb-1">Escritório Principal</p>
                <p className="font-body text-sm text-muted-foreground">
                  R. João Pedro de Souza, 255 — Jardim Monte Líbano
                  <br />
                  Campo Grande — MS, 79680-004
                </p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${WA}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-xs font-body font-bold tracking-wide transition-transform hover:scale-105"
              style={{ background: "#25D366" }}
            >
              <span className="absolute inset-0 rounded-full animate-ping" style={{ background: "rgba(37,211,102,0.4)", animationDuration: "2s" }} />
              <MessageCircle size={16} className="relative z-10" />
              <span className="relative z-10">Falar pelo WhatsApp</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}