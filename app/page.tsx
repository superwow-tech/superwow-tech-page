"use client";

import { useState } from "react";
import { Header } from "../components/sections/Header";
import { Hero } from "../components/sections/Hero";
import { TechStack } from "../components/sections/TechStack";
import { Services } from "../components/sections/Services";
import { HowWeWork } from "../components/sections/HowWeWork";
import { WhyChooseUs } from "../components/sections/WhyChooseUs";
import { Contact } from "../components/sections/Contact";
import { Footer } from "../components/sections/Footer";

export default function Home() {
  // Keeping mouse position logic for potential reuse, though new Hero might be self-contained
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePosition({ x, y });
  };

  return (
    <main className="min-h-screen bg-white text-black selection:bg-[var(--color-electric)] selection:text-black">
      <Header />
      <Hero mousePosition={mousePosition} onMouseMove={handleMouseMove} />
      <TechStack />
      <Services />
      <HowWeWork />
      
      {/* Dark Footer Section */}
      <div className="bg-black text-white border-t border-gray-800">
        <WhyChooseUs />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
