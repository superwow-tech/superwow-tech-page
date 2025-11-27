"use client";

import { motion } from "framer-motion";
import { Frame, LayoutTemplate, Cpu } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

const ICONS = {
  motion: Frame,
  saas: LayoutTemplate,
  ai: Cpu,
};

export function HowWeWork() {
  const { t } = useLanguage();

  const divisions = [
    {
      id: "motion",
      name: t.howWeWork.divisions.motion.name,
      role: t.howWeWork.divisions.motion.role,
      impact: t.howWeWork.divisions.motion.impact,
    },
    {
      id: "saas",
      name: t.howWeWork.divisions.saas.name,
      role: t.howWeWork.divisions.saas.role,
      impact: t.howWeWork.divisions.saas.impact,
    },
    {
      id: "ai",
      name: t.howWeWork.divisions.ai.name,
      role: t.howWeWork.divisions.ai.role,
      impact: t.howWeWork.divisions.ai.impact,
    },
  ];

  return (
    <section id="work" className="bg-white text-black border-b border-gray-200">
      {/* Section Header */}
      <div className="p-6 md:p-12 border-b border-gray-200">
        <span className="label-mono block mb-4 text-gray-500">{t.howWeWork.label}</span>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase max-w-4xl">
          {t.howWeWork.title}
        </h2>
      </div>

      {/* Brutalist Grid Layout */}
      <div className="border-gray-200">
        {divisions.map((division) => {
          const Icon = ICONS[division.id as keyof typeof ICONS];
          
          return (
            <div
              key={division.id}
              className="group relative border-b border-gray-200 last:border-b-0 cursor-pointer transition-colors duration-300 hover:bg-black hover:text-white overflow-hidden"
            >
              {/* Desktop Grid: Icon (15%) | Title (35%) | Services (50%) */}
              <div className="flex flex-col lg:flex-row lg:h-48">
                
                {/* Col 1: Icon */}
                <div className="p-6 lg:p-10 lg:w-[15%] border-b lg:border-b-0 lg:border-r border-gray-200 group-hover:border-gray-800 flex items-start lg:items-center justify-start lg:justify-center">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-black group-hover:text-[var(--color-electric)] transition-colors" strokeWidth={1.5} />
                </div>

                {/* Col 2: Title & Role */}
                <div className="p-6 lg:p-10 lg:w-[35%] border-b lg:border-b-0 lg:border-r border-gray-200 group-hover:border-gray-800 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight leading-none mb-2">
                    {division.name}
                  </h3>
                  <span className="font-mono text-xs text-gray-500 group-hover:text-gray-400 uppercase tracking-widest">
                    {division.role}
                  </span>
                </div>

                {/* Col 3: Capabilities (Chips) */}
                <div className="p-6 lg:p-10 lg:w-[50%] group-hover:border-gray-800 flex items-center">
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {division.impact.map((item) => (
                      <span 
                        key={item} 
                        className="px-3 py-1.5 border border-gray-200 group-hover:border-[var(--color-electric)] rounded-full text-xs md:text-sm font-mono uppercase tracking-wide text-gray-600 group-hover:text-[var(--color-electric)] bg-gray-50 group-hover:bg-transparent transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
