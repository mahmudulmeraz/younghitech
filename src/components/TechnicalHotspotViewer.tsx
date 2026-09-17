import React, { useState } from 'react';
import { HotspotItem } from '../types';
import { Sparkles, Shield, Check, Info } from 'lucide-react';

interface TechnicalHotspotViewerProps {
  imageSrc: string;
  hotspots: HotspotItem[];
}

export const TechnicalHotspotViewer: React.FC<TechnicalHotspotViewerProps> = ({
  imageSrc,
  hotspots,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<HotspotItem>(hotspots[1] || hotspots[0]);

  return (
    <div className="relative rounded-2xl overflow-hidden bg-[#031827] border border-[#2B5D78]/40 shadow-2xl">
      {/* Garment Image Canvas */}
      <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[16/10] w-full overflow-hidden">
        <img
          src={imageSrc}
          alt="Technical Apparel Engineering Architecture"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/images/model.jpg';
          }}
        />

        {/* Dark subtle vignette overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#031827]/90 via-transparent to-black/30 pointer-events-none" />

        {/* Interactive Hotspot Pins */}
        {hotspots.map((spot, index) => {
          const isSelected = activeHotspot.id === spot.id;
          return (
            <div
              key={spot.id}
              style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
            >
              <button
                id={`hotspot-btn-${spot.id}`}
                onClick={() => setActiveHotspot(spot)}
                className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isSelected
                    ? 'bg-[#D94A4A] text-white scale-125 shadow-lg shadow-[#D94A4A]/50 ring-4 ring-[#D94A4A]/30'
                    : 'bg-[#06233A]/90 text-sky-200 border border-[#2B5D78] hover:bg-[#D94A4A] hover:text-white hover:scale-110'
                }`}
                aria-label={spot.title}
              >
                {/* Pulsing radar ripple ring */}
                <span className="absolute inset-0 rounded-full bg-[#D94A4A]/40 animate-ping pointer-events-none" />
                <span className="text-xs font-mono font-bold leading-none">
                  {index + 1}
                </span>
              </button>
            </div>
          );
        })}

        {/* Mobile / Floating Hotspot Callout Card directly overlaid */}
        <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-30">
          <div className="p-4 sm:p-5 rounded-xl bg-[#06233A]/95 backdrop-blur-md border border-[#2B5D78]/60 shadow-2xl text-white transition-all duration-300">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2 py-0.5 rounded bg-[#D94A4A] text-white text-[10px] font-mono uppercase font-bold tracking-wider">
                Feature Point
              </span>
              <span className="text-[11px] font-mono text-sky-300">
                {activeHotspot.techSpec}
              </span>
            </div>
            <h4 className="font-display font-bold text-base sm:text-lg text-white">
              {activeHotspot.title}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
              {activeHotspot.description}
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Hotspot Selector Bar Below */}
      <div className="bg-[#06233A] p-3 sm:p-4 border-t border-[#2B5D78]/40 grid grid-cols-2 sm:grid-cols-5 gap-2 text-left">
        {hotspots.map((spot, idx) => (
          <button
            key={spot.id}
            onClick={() => setActiveHotspot(spot)}
            className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
              activeHotspot.id === spot.id
                ? 'bg-[#2B5D78] text-white shadow font-semibold'
                : 'bg-[#031827]/60 text-slate-400 hover:text-slate-200 hover:bg-[#031827]'
            }`}
          >
            <span className="font-mono text-[#D94A4A] mr-1.5 font-bold">0{idx + 1}</span>
            <span className="truncate block">{spot.title.split(' ')[0]} {spot.title.split(' ')[1]}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
