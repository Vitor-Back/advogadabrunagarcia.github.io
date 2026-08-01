import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Alessandra Dias",
    text: "Excelente profissional! Minha experiência com a Dra. Bruna foi impecável do início ao fim. Sempre atenciosa, comprometida e transparente em todas as etapas do processo. Me senti segura e bem orientada o tempo todo. Com certeza recomendo para quem busca uma advogada competente e humana.",
    focus: "Profissionalismo",
  },
  {
    name: "Ingrid Dias",
    text: "Profissional excelente! A Dra. Bruna foi essencial na resolução do meu caso. Sempre muito clara nas orientações, ágil nas respostas e com uma postura firme e ética. Dá pra ver que ama o que faz e se dedica de verdade aos clientes. Recomendo de olhos fechados!",
    focus: "Resultados",
  },
  {
    name: "Marina Zanoni",
    text: "Bruna é muito ágil e responsável, me auxiliou de forma prática e eficiente em todas as questões. Além de ser extremamente ética com todo processo! Obrigada Bruna.",
    focus: "Confiança",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className="fill-muted-foreground/60 text-muted-foreground/60" />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-24 md:py-32 bg-background">
      <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-primary/10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <p className="font-body text-xs tracking-[0.35em] uppercase text-primary mb-4">Depoimentos Reais</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight">
            A Palavra de Quem <span className="italic font-semibold">Confiou</span>
          </h2>
          <p className="font-body text-sm text-muted-foreground mt-4">
            Avaliação 5.0 ★ no Google — mais de 25 avaliações
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative p-8 rounded-sm border border-primary/15 bg-card/30 backdrop-blur-sm"
            >
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary mb-6">{review.focus}</p>
              <Stars />
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8 italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-display text-xs font-semibold text-primary">{review.name[0]}</span>
                </div>
                <p className="font-body text-sm font-medium text-foreground">{review.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}