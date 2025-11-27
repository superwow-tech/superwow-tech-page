"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

// Helper component for Vilnius Time
const VilniusTime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Europe/Vilnius",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };
      setTime(now.toLocaleTimeString("en-US", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return <span>{time}</span>;
};

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-white">
      {/* Status Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center py-6 px-6 md:px-10 gap-4 border-t border-gray-800">
        {/* Left: Company Name */}
        <div className="text-xs font-bold tracking-widest uppercase">
          SUPERWOW TECH
        </div>

        {/* Right: Status */}
        <div className="flex items-center gap-3 text-xs font-mono text-gray-500 uppercase tracking-wide">
          <span>VILNIUS <VilniusTime /></span>
          <span className="text-gray-800">•</span>
          <span className="flex items-center gap-2 text-white">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            {t.footer.status}
          </span>
        </div>
      </div>
    </footer>
  );
}
