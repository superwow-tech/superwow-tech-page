"use client";

import { Zap, Shield, Code2, Users, Plus } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

export function WhyChooseUs() {
  const { t } = useLanguage();

  const differentiators = [
    {
      icon: Zap,
      title: t.whyChooseUs.speed.title,
      desc: t.whyChooseUs.speed.desc,
      type: "speed"
    },
    {
      icon: Shield,
      title: t.whyChooseUs.ready.title,
      desc: t.whyChooseUs.ready.desc,
      type: "shield"
    },
    {
      icon: Code2,
      title: t.whyChooseUs.modern.title,
      desc: t.whyChooseUs.modern.desc,
      type: "code",
      extra: ["Next.js", "React", "Tailwind", "Supabase"]
    },
    {
      icon: Users,
      title: t.whyChooseUs.direct.title,
      desc: t.whyChooseUs.direct.desc,
      type: "users"
    },
  ];

  return (
    <section id="why-us" className="border-b border-gray-800 relative overflow-hidden">
      {/* Radar Sweep Animation */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-20 bg-[linear-gradient(90deg,transparent,rgba(0,255,148,0.1),transparent)] animate-radar-sweep" />

      <div className="grid grid-cols-1 md:grid-cols-2 relative z-10">
        {differentiators.map((item, i) => (
          <div 
            key={item.title}
            className={`
              group p-8 sm:p-12 
              border-gray-800
              border-b md:border-b
              md:border-r
              relative
              
              ${/* Remove right border for 2nd column items (indices 1, 3...) */ ''}
              ${i % 2 === 1 ? 'md:border-r-0' : ''}

              ${/* Remove bottom border for last row items (indices 2, 3) */ ''}
              ${i >= 2 ? 'md:border-b-0' : ''}
              
              last:border-b-0
              bg-black hover:bg-[#111] transition-colors duration-300
            `}
          >
            {/* Intersection Accents */}
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-gray-800 hidden md:block">
              <Plus size={12} />
            </div>
            {i % 2 === 1 && (
              <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-gray-800 hidden md:block">
                <Plus size={12} />
              </div>
            )}
            <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-gray-800 hidden md:block">
              <Plus size={12} />
            </div>
            
            {/* Content */}
            <div className="mb-6 relative">
              <item.icon className={`w-8 h-8 text-[var(--color-electric)] group-hover:scale-110 group-hover:text-white transition-all duration-300
                ${item.type === 'speed' ? 'group-hover:animate-pulse' : ''}
                ${item.type === 'shield' ? 'group-hover:animate-shimmer' : ''}
              `} />
            </div>
            
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-3 text-white group-hover:text-[var(--color-electric)] transition-colors">
              {item.title}
            </h3>
            
            <p className="text-gray-400 group-hover:text-gray-300 text-lg leading-relaxed max-w-sm">
              {item.desc}
            </p>

            {/* Data Viz for Modern Stack */}
            {item.type === 'code' && (
              <div className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {item.extra?.map(tech => (
                  <span key={tech} className="text-[10px] font-mono border border-gray-700 px-1.5 py-0.5 rounded text-gray-500">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes radar-sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-radar-sweep {
          animation: radar-sweep 8s linear infinite;
        }
        @keyframes shimmer {
          0% { opacity: 1; }
          50% { opacity: 0.7; }
          100% { opacity: 1; }
        }
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
