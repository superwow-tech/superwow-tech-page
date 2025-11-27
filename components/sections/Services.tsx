"use client";

import { useState } from "react";
import { ArrowUpRight, Layout, Server, Bot, Zap, Code, Lock, Blocks, Database, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

// Visual assets mapping - placeholders for now, but set up for images/videos
const visuals = {
  "01": { type: "icon", Icon: Layout },
  "02": { type: "icon", Icon: Server },
  "03": { type: "icon", Icon: Bot },
};

export function Services() {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<string | null>(null);

  const capabilities = [
    {
      id: "01",
      title: t.services.items["01"].title,
      desc: t.services.items["01"].desc,
      tags: [
        { name: "UI/UX Optimization", icon: Layout },
        { name: "Responsive Design", icon: Zap },
        { name: "SEO Basics", icon: Blocks },
      ],
    },
    {
      id: "02",
      title: t.services.items["02"].title,
      desc: t.services.items["02"].desc,
      tags: [
        { name: "Full-Stack Development", icon: Database },
        { name: "Cloud Architecture", icon: Server },
        { name: "Auth Systems", icon: Lock }
      ],
    },
    {
      id: "03",
      title: t.services.items["03"].title,
      desc: t.services.items["03"].desc,
      tags: [
        { name: "AI Agent Development", icon: Bot },
        { name: "LLM Integrations", icon: Blocks },
        { name: "Workflow Automation", icon: Terminal },
      ],
    },
  ];

  return (
    <section id="services" className="bg-white text-black border-b border-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[600px]">
        
        {/* Left Column: Sticky Title & Teleporting Visuals */}
        <div className="col-span-1 p-6 lg:p-10 border-b lg:border-b-0 lg:border-r border-gray-200 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between overflow-hidden">
          <div className="relative z-10">
            <span className="label-mono block mb-2 text-gray-500">{t.services.label}</span>
            <h2 className="text-4xl font-bold tracking-tighter leading-none uppercase mb-12">
              {t.services.title.split(" ").map((word, i) => <span key={i} className="block">{word}</span>)}
            </h2>
          </div>

          {/* Teleporting Visual Container */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10 lg:opacity-100 transition-opacity duration-500">
            <AnimatePresence mode="wait">
              {activeId && (
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="w-full h-full max-w-[300px] max-h-[300px] flex items-center justify-center"
                >
                  {/* 
                    In production, swap this with <img /> or <video />.
                    Using Lucide icons as placeholders for "Teleporting Visuals".
                  */}
                  {(() => {
                    const VisualIcon = visuals[activeId as keyof typeof visuals].Icon;
                    return (
                      <div className="text-[var(--color-electric)]">
                        <VisualIcon size={200} strokeWidth={0.5} />
                      </div>
                    );
                  })()}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column: Interactive List */}
        <div className="col-span-1 lg:col-span-3">
          {capabilities.map((cap) => (
            <div
              key={cap.id}
              className="group relative border-b border-gray-200 last:border-b-0 transition-all duration-500 hover:bg-black hover:text-white cursor-pointer overflow-hidden"
              onMouseEnter={() => setActiveId(cap.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              {/* Background Sweep Animation */}
              <div className="absolute inset-0 bg-black transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[0.23,1,0.32,1] z-0" />

              <div className="relative z-10 p-6 lg:p-12 flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 w-full">
                  {/* Enhanced Number Typography */}
                  <span className="text-6xl sm:text-8xl font-black tracking-tighter text-transparent stroke-text group-hover:stroke-text-white opacity-20 group-hover:opacity-100 transition-all duration-500 select-none">
                    {cap.id}
                  </span>
                  
                  <div className="max-w-2xl pt-2">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase mb-6 group-hover:translate-x-2 transition-transform duration-300">
                      {cap.title}
                    </h3>
                    <p className="text-gray-500 group-hover:text-gray-300 text-lg leading-relaxed max-w-lg mb-8 transition-colors duration-300">
                      {cap.desc}
                    </p>
                    
                    {/* Upgraded Tech Chips */}
                    <div className="flex flex-wrap gap-3">
                      {cap.tags.map((tag) => (
                        <span 
                          key={tag.name} 
                          className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 group-hover:border-[var(--color-electric)] group-hover:text-[var(--color-electric)] text-xs font-mono uppercase tracking-wide rounded-full transition-all duration-300 bg-transparent"
                        >
                          <tag.icon size={12} className="opacity-70" />
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hidden sm:block">
                  <ArrowUpRight className="w-10 h-10 text-gray-300 group-hover:text-[var(--color-electric)] transition-all duration-300 transform group-hover:translate-x-2 group-hover:-translate-y-2" />
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx global>{`
        .stroke-text {
          -webkit-text-stroke: 2px #000;
        }
        .group:hover .stroke-text-white {
          -webkit-text-stroke: 2px #fff;
        }
      `}</style>
    </section>
  );
}
