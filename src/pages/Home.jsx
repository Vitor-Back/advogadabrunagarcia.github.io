import React from "react";
import Hero from "@/components/landing/Hero";
import AreasAtuacao from "@/components/landing/AreasAtuacao";
import NationwideReach from "@/components/landing/NationwideReach";
import Reviews from "@/components/landing/Reviews";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import WhatsAppFloat from "@/components/landing/WhatsAppFloat";

export default function Home() {
  return (
    <div id="top" className="bg-background text-foreground min-h-screen">
      <Hero />
      <AreasAtuacao />
      <NationwideReach />
      <Reviews />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}