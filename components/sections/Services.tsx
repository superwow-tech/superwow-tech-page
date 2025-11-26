"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CenteredCard } from "../ui/CenteredCard";
import { useTranslation } from "../../contexts/LanguageContext";
import { services } from "../../lib/constants/services";

export function Services() {
  const { t } = useTranslation();

  const serviceItems = [
    { ...services[0], ...t.services.items.design },
    { ...services[1], ...t.services.items.custom },
    { ...services[2], ...t.services.items.ai },
  ];

  return (
    <section id="services" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
      <AnimatePresence mode="wait">
        <motion.div
          key={t.services.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              {t.services.title}
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            {t.services.subtitle}
          </p>
        </motion.div>
      </AnimatePresence>
      
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {serviceItems.map((s, i) => {
          const isLarge = i === 1; // Middle card spans 2 columns on large screens
          return (
            <CenteredCard
              key={s.title}
              delay={i * 0.1}
              className="group relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-black/60 to-black/30 border-2 border-purple-500/20 hover:border-purple-500/60 backdrop-blur-xl transition-all duration-500"
              baseStyle={{
                boxShadow: "0 0 0 rgba(138, 43, 226, 0)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 20px 60px rgba(138, 43, 226, 0.3)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 0 rgba(138, 43, 226, 0)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* High-contrast gradient overlay */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-500/0 via-transparent to-cyan-500/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon with high-contrast background */}
                <div className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500/30 to-cyan-500/30 border-2 border-purple-500/50 grid place-items-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <s.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                </div>
                
                <h3 className="font-bold text-xl sm:text-2xl mb-3 sm:mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                  {s.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6">
                  {s.desc}
                </p>
                
                {/* Includes list */}
                {s.includes && (
                  <ul className="space-y-2 mt-4 sm:mt-6">
                    {s.includes.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </CenteredCard>
          );
        })}
      </div>
    </section>
  );
}
