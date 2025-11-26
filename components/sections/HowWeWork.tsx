"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CenteredCard } from "../ui/CenteredCard";
import { useTranslation } from "../../contexts/LanguageContext";
import { CheckCircle2 } from "lucide-react";
import { caseStudies } from "../../lib/constants/case-studies";

export function HowWeWork() {
  const { t } = useTranslation();

  const caseStudyItems = [
    { ...caseStudies[0], ...t.caseStudies.items.motion },
    { ...caseStudies[1], ...t.caseStudies.items.saas },
    { ...caseStudies[2], ...t.caseStudies.items.ai },
  ];

  return (
    <section id="work" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[200px]" />
      
      <div className="relative">
        {/* Header */}
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                {t.caseStudies.title}
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
              {t.caseStudies.subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

          {/* Work Examples Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {caseStudyItems.map((c, i) => (
              <CenteredCard
                key={c.name}
                delay={i * 0.1}
                className="group relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-black/60 to-black/30 border-2 border-purple-500/20 hover:border-purple-500/60 backdrop-blur-xl overflow-hidden transition-all duration-500"
                baseStyle={{
                  boxShadow: "0 0 0 rgba(138, 43, 226, 0)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 20px 60px rgba(138, 43, 226, 0.2)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 0 rgba(138, 43, 226, 0)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/0 via-transparent to-cyan-500/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border-2 border-purple-500/40 mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <span className="text-2xl sm:text-3xl">{c.logo}</span>
                  </div>
                  
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                    {c.name}
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6 font-medium uppercase tracking-wider">
                    {c.role}
                  </p>
                  
                  <ul className="space-y-3">
                    {c.impact.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 text-purple-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CenteredCard>
            ))}
          </div>
      </div>
    </section>
  );
}
