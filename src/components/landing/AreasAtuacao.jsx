import React from "react";
import { motion } from "framer-motion";
import { Shield, Scale, FileText, Users, Lock, Gavel, MessageCircle, AlertTriangle } from "lucide-react";

const WA = "5567981626148";

const areas = [
  { icon: FileText, title: "Crime Sexual", desc: "Defesa técnica e sigilosa em processos de crime sexual e estupro de vulnerável." },
  { icon: Lock, title: "Tráfico de Drogas", desc: "Defesa especializada em tráfico, soltura em flagrante e redução de pena." },
  { icon: Shield, title: "Violência Doméstica", desc: "Defesa técnica em casos de violência doméstica, com atuação estratégica em todas as fases do processo." },
  { icon: Users, title: "Tribunal do Júri", desc: "Defesa em crimes dolosos contra a vida — homicídio, latrocínio e conexos — perante o Júri." },
  { icon: Scale, title: "Execução Penal", desc: "Progressão de regime, saída temporária, livramento condicional e remição de pena." },
  { icon: AlertTriangle, title: "Prisão em Flagrante", desc: "Atuação imediata no momento da prisão em flagrante, com análise técnica para relaxamento ou liberdade provisória." },
  { icon: Gavel, title: "Defesa Criminal", desc: "Representação estratégica em homicídios, crimes sexuais, tráfico de drogas e demais crimes." },
];

export default function AreasAtuacao() {
  return (
    <section id="areas" className="relative py-24 md:py-32 bg-background">
      <div className="absolute right-6 md:right-12 top-0 bottom-0 w-px bg-primary/10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <p className="font-body text-xs tracking-[0.35em] uppercase text-primary mb-4">Expertise</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight">
            Áreas de <span className="italic font-semibold">Atuação</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-8 border border-border rounded-sm bg-card/50 hover:border-primary/40 transition-all duration-500 flex flex-col"
            >
              <area.icon size={28} className="text-primary mb-6" strokeWidth={1.2} />
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{area.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{area.desc}</p>

              {/* WhatsApp pulsing button */}
              <a
                href={`https://wa.me/${WA}?text=${encodeURIComponent(`Olá, Dra. Bruna! Preciso de ajuda com: ${area.title}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 self-start px-5 py-2.5 rounded-full text-white text-xs font-body font-bold tracking-wide transition-transform hover:scale-105"
                style={{ background: "#25D366" }}
              >
                {/* Pulse ring */}
                <span
                  className="absolute inset-0 rounded-full animate-ping"
                  style={{ background: "rgba(37,211,102,0.4)", animationDuration: "2s" }}
                />
                <MessageCircle size={14} className="relative z-10" />
                <span className="relative z-10">Falar pelo WhatsApp</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}