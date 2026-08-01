import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Shield, MessageCircle } from "lucide-react";

const WA_NUMBER = "5567981626148";

const guarantees = [
  { icon: Shield, title: "Sigilo Absoluto", desc: "Todas as informações compartilhadas são tratadas com total confidencialidade e ética profissional." },
  { icon: Clock, title: "Atendimento 24h", desc: "Disponível a qualquer hora do dia ou da noite, inclusive em finais de semana e feriados." },
  { icon: MapPin, title: "Atuação Nacional", desc: "Atendimentos presenciais em Campo Grande/MS e atuação remota em todo o território brasileiro." },
  { icon: Phone, title: "Resposta Ágil", desc: "Retorno rápido para situações urgentes — porque em Direito Criminal, cada hora conta." },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20 text-center"
        >
          <p className="font-body text-xs tracking-[0.35em] uppercase text-primary mb-4">Por que nos escolher</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight">
            Compromisso com <span className="italic font-semibold">sua defesa</span>
          </h2>
          <p className="font-body text-sm text-muted-foreground mt-4 max-w-xl mx-auto">
            A Dra. Bruna Garcia une técnica jurídica de alto nível com atendimento humano e dedicado.
          </p>
        </motion.div>

        {/* Guarantee cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {guarantees.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 border border-border rounded-sm bg-background/50 text-center"
            >
              <g.icon size={32} className="text-primary mx-auto mb-4" strokeWidth={1.2} />
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">{g.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{g.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA + contact info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12 border border-primary/20 rounded-sm bg-background/30"
        >
          <div>
            <p className="font-body text-xs tracking-[0.25em] uppercase text-primary mb-2">Contato direto</p>
            <div className="flex flex-col sm:flex-row gap-6 mt-3">
              <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer"
                className="font-body text-base text-foreground hover:text-primary transition-colors flex items-center gap-2">
                <Phone size={16} className="text-primary" /> (67) 98162-6148
              </a>
              <p className="font-body text-sm text-muted-foreground flex items-center gap-2">
                <MapPin size={16} className="text-primary flex-shrink-0" />
                R. João Pedro de Souza, 255 — Campo Grande/MS
              </p>
            </div>
          </div>
          <a
            href={`https://wa.me/${WA_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-xs font-body font-bold tracking-wide transition-transform hover:scale-105"
            style={{ background: "#25D366" }}
          >
            <span className="absolute inset-0 rounded-full animate-ping" style={{ background: "rgba(37,211,102,0.4)", animationDuration: "2s" }} />
            <MessageCircle size={16} className="relative z-10" />
            <span className="relative z-10">Falar pelo WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}