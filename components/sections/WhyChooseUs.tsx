"use client";

import { motion } from "framer-motion";
import { CenteredCard } from "../ui/CenteredCard";
import { useTranslation } from "../../contexts/LanguageContext";
import { Zap, Shield, Code2, Users } from "lucide-react";

const differentiators = [
  {
    icon: Zap,
    title: "AI-Powered Speed",
    desc: "We use AI tools to ship faster than traditional agencies.",
    color: "from-purple-500/30 to-purple-500/10",
    borderColor: "border-purple-500/40",
    iconColor: "text-purple-400",
  },
  {
    icon: Shield,
    title: "Production-Ready",
    desc: "No prototypes. We ship code that's ready for real users.",
    color: "from-cyan-500/30 to-cyan-500/10",
    borderColor: "border-cyan-500/40",
    iconColor: "text-cyan-400",
  },
  {
    icon: Code2,
    title: "Modern Stack",
    desc: "Next.js, TypeScript, AI APIs. We use tools that scale, not legacy tech debt.",
    color: "from-purple-500/30 to-cyan-500/10",
    borderColor: "border-purple-500/40",
    iconColor: "text-purple-400",
  },
  {
    icon: Users,
    title: "Direct Communication",
    desc: "Work directly with founders. No account managers, no bureaucracy—just results.",
    color: "from-magenta-500/30 to-purple-500/10",
    borderColor: "border-magenta-500/40",
    iconColor: "text-magenta-400",
  },
];

export function WhyChooseUs() {
  const { t } = useTranslation();

  return (
    <section id="why-us" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[200px]" />
      
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full border-2 border-purple-500/40 bg-purple-500/10 backdrop-blur-sm text-xs uppercase tracking-[2px] font-semibold text-purple-300">
              {t.whyChooseUs?.tagline || "Why Superwow"}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              {t.whyChooseUs?.title || "Why Choose Us"}
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            {t.whyChooseUs?.subtitle || "We're not another agency. We're a product studio that ships fast, scales better, and costs less."}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {differentiators.map((item, i) => (
            <CenteredCard
              key={item.title}
              delay={i * 0.1}
              className={`group relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-black/60 to-black/30 border-2 ${item.borderColor} backdrop-blur-xl transition-all duration-500`}
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
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`h-12 w-12 sm:h-14 sm:w-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.color} border-2 ${item.borderColor} grid place-items-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <item.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${item.iconColor}`} />
                </div>
                
                <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                  {item.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </CenteredCard>
          ))}
        </div>
      </div>
    </section>
  );
}

