"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '../locales/en.json';
import lt from '../locales/lt.json';

type Locale = 'en' | 'lt';
type Translations = typeof en;

interface LanguageContextType {
  language: Locale;
  setLanguage: (lang: Locale) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Locale>('en');
  const [t, setT] = useState<Translations>(en);

  useEffect(() => {
    setT(language === 'en' ? en : lt);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

