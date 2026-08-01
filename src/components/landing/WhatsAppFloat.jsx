import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5567981626148"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30 hover:scale-110 transition-transform duration-300"
    >
      <MessageCircle size={24} className="text-primary-foreground" />
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" style={{ animationDuration: "2.5s" }} />
    </a>
  );
}