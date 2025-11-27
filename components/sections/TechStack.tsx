"use client";

import { stack } from "../../lib/constants/tech-stack";

export function TechStack() {
  // Duplicate the stack to ensure seamless looping
  const duplicatedStack = [...stack, ...stack, ...stack, ...stack];

  return (
    <section className="h-14 flex items-center border-y border-white bg-black overflow-hidden w-full -mx-0 md:mx-0">
      <div className="flex whitespace-nowrap overflow-hidden w-full px-0">
        <div className="flex animate-marquee hover:[animation-play-state:paused] items-center">
          {duplicatedStack.map((tech, i) => (
            <div key={`${tech}-${i}`} className="flex items-center gap-8 mr-8">
              <span className="text-xl md:text-2xl font-mono font-bold tracking-widest text-white uppercase">
                {tech}
              </span>
              <span className="text-xl md:text-2xl text-[var(--color-electric)]">/</span>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
