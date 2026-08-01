import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const PHOTO_DESK = "https://media.base44.com/images/public/6a30709d4330dbc5dd0e8ca7/339bfbafc_WhatsAppImage2026-06-14at2326361.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">

      {/* Background overlay */}
      <div className="absolute inset-0" style={{ background: "hsl(345 55% 12%)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(40,3,15,0.97) 0%, rgba(40,3,15,0.85) 50%, rgba(40,3,15,0.2) 100%)" }} />

      {/* Foto da Dra. — lado direito, ocupa metade da tela */}
      <div className="absolute inset-y-0 right-0 w-full md:w-1/2">
        <img
          src={PHOTO_DESK}
          alt="Dra. Bruna Garcia"
          className="w-full h-full object-cover object-top" />
        
        {/* Gradient da foto para o fundo */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, hsl(345 55% 12%) 0%, transparent 40%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 60%, hsl(345 55% 12%) 100%)" }} />
      </div>

      {/* Conteúdo — lado esquerdo */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-0 md:min-h-screen flex items-center">
        <div className="md:w-1/2 flex flex-col items-center text-center">

          {/* Logo centralizada */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6">
            <img
              src="https://media.base44.com/images/public/6a30709d4330dbc5dd0e8ca7/3eb9be423_Designsemnome1.png"
              alt="Bruna Garcia"
              className="h-40 w-auto object-contain block" />
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold text-white leading-tight tracking-wide mb-4 w-full"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              textShadow: "0 2px 40px rgba(0,0,0,0.8)"
            }}>
            ADVOGADA CRIMINALISTA
          </motion.h1>

          {/* Golden divider — largura total do título */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="h-0.5 w-full mb-6"
            style={{ background: "hsl(45 95% 58%)", transformOrigin: "left" }} />

          {/* Tagline centralizada */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.9 }}
            className="font-body text-xs tracking-[0.35em] uppercase mb-8 font-semibold"
            style={{ color: "hsl(45 95% 65%)", textShadow: "0 2px 12px rgba(0,0,0,0.95), 0 0 20px rgba(0,0,0,0.8)" }}>
            SUA LIBERDADE NÃO PODE ESPERAR
          </motion.p>

          {/* CTA button centralizado */}
          <motion.a
            href="https://wa.me/5567981626148"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-body font-bold text-sm tracking-wide text-white shadow-2xl"
            style={{ background: "#25D366", boxShadow: "0 0 30px rgba(37,211,102,0.45)" }}>
            <MessageCircle size={20} />
            Fale com a Dra. Bruna
          </motion.a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
      style={{ background: "linear-gradient(to bottom, transparent, hsl(345 55% 12%))" }} />
    </section>);

}