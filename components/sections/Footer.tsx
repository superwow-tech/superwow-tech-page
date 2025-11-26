"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { COMPANY } from "../../lib/constants/company";
import { useTranslation } from "../../contexts/LanguageContext";

export function Footer() {
  const { t } = useTranslation();

  const navItems = [
    { id: "services", label: t.nav.services },
    { id: "work", label: t.nav.work },
    { id: "why-us", label: t.nav.whyUs || "Why Us" },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <footer className="relative border-t border-purple-500/10 bg-black/20 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            className="flex items-center group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-2">
              <Image src="/icon.ico" alt={COMPANY.name} width={40} height={40} className="sm:w-12 sm:h-12" />
              <div>
                <span className="font-bold text-white block">{COMPANY.name}</span>
                <AnimatePresence mode="wait">
                  <span key={t.footer.tagline} className="text-xs text-gray-500 block">
                    {t.footer.tagline}
                  </span>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {navItems.map((m) => (
                <a
                  key={m.id}
                  href={`#${m.id}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {m.label}
                </a>
              ))}
            </div>
            <div className="h-px w-full md:h-4 md:w-px md:max-w-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
            <AnimatePresence mode="wait">
              <p key={t.footer.copyright} className="text-gray-500 text-center md:text-left text-xs sm:text-sm">
                © {new Date().getFullYear()} {COMPANY.name}, MB. {t.footer.copyright}
              </p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </footer>
  );
}
