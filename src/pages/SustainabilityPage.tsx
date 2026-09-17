import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { DynamicIcon } from '../components/DynamicIcon';
import { Leaf, Sun, Recycle, ShieldCheck, ArrowRight } from 'lucide-react';

interface SustainabilityPageProps {
  onOpenQuote: () => void;
}

export const SustainabilityPage: React.FC<SustainabilityPageProps> = ({ onOpenQuote }) => {
  return (
    <div className="pt-24 pb-20 bg-[#F2F8FB] text-[#10212E]">
      {/* Header */}
      <section className="bg-[#031827] text-white py-16 border-b border-[#2B5D78]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
            Environmental Responsibility & Green Factory
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mt-2">
            Engineered for Low-Impact Performance
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mt-2 leading-relaxed">
            From GRS-certified recycled membranes to rooftop solar generation and PFC-free DWR treatments, we support international brands in meeting science-based climate targets.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {siteConfig.sustainability.map((pillar) => (
            <div
              key={pillar.id}
              className="p-8 rounded-2xl bg-white border border-[#2B5D78]/20 hover:border-emerald-500 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <DynamicIcon name={pillar.iconName} className="w-6 h-6" />
                </div>
                <div className="text-[11px] font-mono font-bold text-emerald-600 uppercase tracking-wider">
                  {pillar.targetOrStatus}
                </div>
                <h3 className="font-display font-bold text-xl text-[#10212E] mt-1">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#5F7180] mt-2 leading-relaxed">
                  {pillar.description}
                </p>

                <div className="mt-5 space-y-2">
                  <span className="text-[11px] font-mono text-[#06233A] uppercase font-bold block">
                    Active Factory Initiatives:
                  </span>
                  {pillar.initiatives.map((init, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#5F7180]">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>{init}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Environmental Facts & Target Banner */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#06233A] text-white border border-[#2B5D78]/40 shadow-xl text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
                Circular Technical Economy
              </span>
              <h3 className="font-display font-bold text-2xl text-white">
                PFC-Free C0 Durable Water Repellency
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We have transitioned 85% of our waterproof outerwear coatings to non-fluorinated plant and bio-based C0 water repellent formulations that break down harmlessly in natural ecosystems while delivering 80/20 spray ratings after 20 washes.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={onOpenQuote}
                className="px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg"
              >
                Request Eco-Material Catalog
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
