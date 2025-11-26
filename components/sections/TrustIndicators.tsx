"use client";

import { motion } from "framer-motion";
import { useTranslation } from "../../contexts/LanguageContext";
import { CheckCircle2, Shield, Code2, FileText } from "lucide-react";

const indicators = [
  {
    icon: FileText,
    title: "Full Documentation",
    desc: "Complete docs, code comments, and handoff materials included",
    color: "text-cyan-400",
  },
  {
    icon: Shield,
    title: "Production-Ready",
    desc: "No prototypes. We ship code that's ready for real users",
    color: "text-purple-400",
  },
  {
    icon: Code2,
    title: "Modern Stack",
    desc: "Latest technologies, best practices, scalable architecture",
    color: "text-magenta-400",
  },
  {
    icon: CheckCircle2,
    title: "Post-Launch Support",
    desc: "We fix issues, you focus on growth",
    color: "text-cyan-400",
  },
];

export function TrustIndicators() {
  const { t } = useTranslation();

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-full blur-[200px]" />
      
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              {t.trustIndicators?.title || "Our Commitments"}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t.trustIndicators?.subtitle || "What you can expect when working with us"}
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {indicators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative rounded-3xl p-6 bg-gradient-to-br from-black/60 to-black/30 border-2 border-purple-500/20 hover:border-purple-500/50 backdrop-blur-xl transition-all duration-500"
              style={{
                boxShadow: "0 0 0 rgba(138, 43, 226, 0)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 20px 60px rgba(138, 43, 226, 0.15)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 0 rgba(138, 43, 226, 0)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/0 via-transparent to-cyan-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border-2 border-purple-500/40 mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                
                <h3 className="font-bold text-lg mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                  {item.title}
                </h3>
                
                <p className="text-sm text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

