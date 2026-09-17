import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { ShieldCheck, Globe2 } from 'lucide-react';

export const LogoMarquee: React.FC = () => {
  // Multiply items to guarantee infinite seamless right-to-left stream across all screen widths
  const marqueeItems = [
    ...siteConfig.clients,
    ...siteConfig.clients,
    ...siteConfig.clients,
    ...siteConfig.clients,
  ];

  return (
    <div id="partner-marquee-section" className="py-12 bg-[#06233A] border-y border-[#2B5D78]/30 overflow-hidden relative">
      {/* Background subtle gradient masks to fade the edges smoothly */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#06233A] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#06233A] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#031827] border border-[#2B5D78]/50 text-xs font-mono text-sky-200 uppercase tracking-widest mb-2">
          <Globe2 className="w-3.5 h-3.5 text-[#D94A4A]" />
          Global Production Footprint
        </div>
        <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
          Trusted Sourcing Partner for Performance Brands
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl mx-auto">
          Delivering sealed skiwear, moto ride jackets, sub-zero down parkas, technical rainwear, and certified industrial workwear across North America, Europe, and Asia-Pacific.
        </p>
      </div>

      {/* Infinite 60fps Right-to-Left Continuous Marquee Track */}
      <div className="overflow-hidden w-full py-3">
        <div className="animate-marquee-rtl flex items-center gap-6 sm:gap-10 select-none">
          {marqueeItems.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#031827]/80 border border-[#2B5D78]/40 hover:border-[#D94A4A] transition-all duration-200 group cursor-default shrink-0 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#2B5D78]/30 border border-[#2B5D78]/50 flex items-center justify-center text-xs font-bold font-mono text-sky-300 group-hover:text-[#D94A4A] transition-colors">
                  {client.logoText.slice(0, 2)}
                </div>
                <div>
                  <div className="font-display font-bold text-sm tracking-wider text-slate-200 group-hover:text-white uppercase whitespace-nowrap">
                    {client.name}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 flex items-center gap-1.5 whitespace-nowrap">
                    <span>{client.region}</span>
                    <span>•</span>
                    <span className="text-sky-400">{client.specialization}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
