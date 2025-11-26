"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { COMPANY, menu } from "../../lib/constants/company";
import { useTranslation } from "../../contexts/LanguageContext";
import { LanguageToggle } from "../ui/LanguageToggle";

export function Header() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "services", label: t.nav.services },
    { id: "work", label: t.nav.work },
    { id: "why-us", label: t.nav.whyUs || "Why Us" },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/60 border-b-2 border-purple-500/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        <motion.a 
          href="#" 
          className="flex items-center group"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center gap-2">
            <Image src="/icon.ico" alt={COMPANY.name} width={32} height={32} className="sm:w-[38px] sm:h-[38px]" />
            <span className="text-sm sm:text-base font-semibold tracking-tight text-white">{COMPANY.name}</span>
          </div>
        </motion.a>
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm">
          {navItems.map((m) => (
            <motion.a
              key={m.id}
              href={`#${m.id}`}
              className="relative text-gray-300 hover:text-white transition-colors group"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {m.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
          <AnimatePresence mode="wait">
            <motion.a
              key={t.nav.getQuote}
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 lg:px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-xs lg:text-sm font-semibold shadow-lg shadow-purple-500/40 hover:shadow-purple-500/60 hover:scale-105 transition-all"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {t.nav.getQuote}
            </motion.a>
          </AnimatePresence>
          <LanguageToggle />
        </nav>
        <div className="md:hidden flex items-center gap-3">
          <LanguageToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b-2 border-purple-500/20"
            >
              <div className="px-4 py-4 space-y-3">
                {navItems.map((m) => (
                  <a
                    key={m.id}
                    href={`#${m.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-gray-300 hover:text-white py-2 transition-colors"
                  >
                    {m.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full mt-4 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-sm font-semibold text-center"
                >
                  {t.nav.getQuote}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
