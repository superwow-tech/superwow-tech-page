"use client";

import { motion, useMotionValue, useSpring, AnimatePresence, Variants } from "framer-motion";
import { ArrowDownRight, Plus } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

interface HeroProps {
  mousePosition?: { x: number; y: number };
  onMouseMove?: (e: React.MouseEvent<HTMLElement>) => void;
}

const letterVariants: Variants = {
  hidden: { y: "100%" },
  visible: (i: number) => ({
    y: "0%",
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1],
      delay: i * 0.05,
    },
  }),
  exit: (i: number) => ({
    y: "-100%",
    transition: {
      duration: 0.5,
      ease: [0.25, 1, 0.5, 1],
      delay: i * 0.05,
    },
  }),
  hover: {
    x: [0, -2, 2, -1, 1, 0],
    color: ["#000000", "#00FF94", "#000000"],
    transition: {
      duration: 0.3,
      times: [0, 0.2, 0.4, 0.6, 0.8, 1],
    },
  },
};

export function Hero({ mousePosition, onMouseMove }: HeroProps) {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const titles = t.hero.titles;

  // Magnetic Button Logic
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMagneticMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set((e.clientX - centerX) * 0.2);
      y.set((e.clientY - centerY) * 0.2);
    }
  };

  const handleMagneticLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  const titleText = titles[index];
  const words = titleText.split(" ");
  let globalCharIndex = 0;

  return (
    <section 
      className="pt-14 sm:pt-16 min-h-[60vh] md:min-h-[100dvh] grid grid-cols-1 md:grid-cols-12 grid-rows-[auto_auto] md:grid-rows-[60fr_40fr] relative overflow-hidden bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
      onMouseMove={onMouseMove}
    >
      {/* Interactive Grid Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Vertical Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gray-100 hidden md:block" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-gray-100 hidden md:block" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gray-100 hidden md:block" />
        
        {/* Crosshairs */}
        <div className="absolute top-24 left-6 text-gray-300"><Plus className="w-4 h-4" /></div>
        <div className="absolute top-24 right-6 text-gray-300"><Plus className="w-4 h-4" /></div>
        <div className="absolute bottom-6 left-6 text-gray-300"><Plus className="w-4 h-4" /></div>
        <div className="absolute bottom-6 right-6 text-gray-300"><Plus className="w-4 h-4" /></div>

        {/* Floating Specs */}
        <div className="absolute top-32 right-12 font-mono text-[10px] text-gray-400 tracking-widest hidden md:block text-right">
          <div>{t.hero.status_online} <span className="animate-pulse text-[var(--color-electric)]">█</span></div>
          <div>{t.hero.lat}: 54.6872° N</div>
          <div>{t.hero.lon}: 25.2797° E</div>
        </div>
      </div>

      {/* Main Title Area */}
      <div className="col-span-1 md:col-span-12 border-b-0 md:border-b border-gray-200 px-4 sm:px-10 md:px-20 pt-12 pb-8 md:py-20 flex flex-col justify-center items-start overflow-hidden relative z-10">
        <div className="relative w-full">
          <h1 className="heading-massive text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.85] uppercase flex flex-wrap gap-x-[0.2em] gap-y-0 hyphens-auto w-full break-words font-black tracking-tighter">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-wrap gap-x-[0.3em] gap-y-0 w-full"
              >
                {words.map((word, wordIndex) => (
                  <span key={`${index}-${wordIndex}`} className="inline-block whitespace-nowrap">
                    {word.split("").map((char, charIndex) => {
                      const i = globalCharIndex++;
                      return (
                        <span key={`${index}-${wordIndex}-${charIndex}`} className="inline-block overflow-hidden align-bottom">
                          <motion.span
                            className="inline-block will-change-transform"
                            variants={letterVariants}
                            custom={i}
                            whileHover="hover"
                          >
                            {char}
                          </motion.span>
                        </span>
                      );
                    })}
                  </span>
                ))}
              </motion.div>
            </AnimatePresence>
          </h1>
        </div>
      </div>

      {/* Bottom Left: Copy with Highlighted Keywords */}
      <div className="col-span-1 md:col-span-8 border-b md:border-b-0 md:border-r border-gray-200 px-6 sm:px-10 md:px-20 pt-2 pb-12 md:py-10 flex flex-col justify-start relative z-10 bg-white/80 backdrop-blur-sm min-h-[200px] md:min-h-[300px]">
        <div className="max-w-2xl mt-8 md:mt-12">
          <h2 className="text-2xl md:text-4xl font-normal leading-tight tracking-tight mb-4 text-gray-900">
            {t.hero.subheadline} <span className="text-black font-black">{t.hero.product}</span>. <br className="hidden md:block" />
            <span className="text-black font-black">{t.hero.faster}</span>, <span className="text-black font-black">{t.hero.smarter}</span>, {t.hero.subheadline_2.replace('Faster, Smarter, ', '')} <span className="text-[var(--color-electric)]">AI</span>.
          </h2>
        </div>
      </div>

      {/* Bottom Right: "The Void" / Interactive Zone */}
      <div className="col-span-1 md:col-span-4 p-0 relative z-10 group border-b border-gray-200 md:border-b-0 bg-gray-50 overflow-hidden h-auto min-h-[120px] md:min-h-[300px]">
        {/* Interactive "Void" Effect Layer */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-200 via-transparent to-transparent" />
        
        <motion.div 
          ref={ref}
          className="w-full h-full p-6 md:p-10 flex flex-col justify-between cursor-pointer relative z-20 hover:bg-black hover:text-white transition-colors duration-300"
          onMouseMove={handleMagneticMove}
          onMouseLeave={handleMagneticLeave}
          style={{ x: springX, y: springY }}
        >
          <div className="flex justify-between items-start w-full">
            <span className="label-mono text-gray-500 group-hover:text-[var(--color-electric)]">
              {t.hero.est}
            </span>
          </div>
          
          <div className="mt-8 md:mt-auto flex items-end justify-between w-full">
            <div className="pl-12 md:pl-0 relative z-10">
              <span className="block font-mono text-xs mb-1 text-gray-500 group-hover:text-gray-400 hidden md:block">{t.hero.action}</span>
              <span className="text-xl md:text-3xl font-black tracking-tight group-hover:text-white uppercase block max-w-[200px] md:max-w-none">{t.hero.explore}</span>
            </div>
            
            <motion.div
              className="hidden md:block"
              whileHover={{ scale: 1.1, rotate: -45 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
               <ArrowDownRight className="w-16 h-16 md:w-24 md:h-24 group-hover:text-[var(--color-electric)] animate-bounce" strokeWidth={1} />
            </motion.div>
             <ArrowDownRight className="w-12 h-12 md:hidden group-hover:text-[var(--color-electric)] animate-bounce" strokeWidth={1} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
