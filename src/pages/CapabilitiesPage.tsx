import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { DynamicIcon } from '../components/DynamicIcon';
import { ArrowRight, CheckCircle2, ShieldCheck, Cpu, Factory } from 'lucide-react';

interface CapabilitiesPageProps {
  onOpenQuote: () => void;
}

export const CapabilitiesPage: React.FC<CapabilitiesPageProps> = ({ onOpenQuote }) => {
  return (
    <div className="pt-24 pb-20 bg-[#F2F8FB] text-[#10212E]">
      {/* Header */}
      <section className="bg-[#031827] text-white py-16 border-b border-[#2B5D78]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D94A4A] font-bold">
            Industrial Infrastructure & Machinery
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mt-2">
            Advanced Technical Manufacturing Capabilities
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mt-2 leading-relaxed">
            State-of-the-art automated equipment for waterproof membrane sealing, ultrasonic seam welding, pneumatic down chambering, and CNC laser micro-ventilation.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.capabilities.map((cap) => (
            <div
              key={cap.id}
              className="p-8 rounded-2xl bg-white border border-[#2B5D78]/20 hover:border-[#D94A4A] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between text-left group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E5F0F5] group-hover:bg-[#06233A] text-[#06233A] group-hover:text-white flex items-center justify-center transition-colors">
                    <DynamicIcon name={cap.iconName} className="w-6 h-6" />
                  </div>
                  <span className="font-display font-extrabold text-2xl text-[#2B5D78]/50 group-hover:text-[#D94A4A] transition-colors">
                    {cap.number}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-[#10212E]">
                  {cap.title}
                </h3>
                <p className="text-xs text-[#5F7180] mt-2 leading-relaxed">
                  {cap.detailedDesc}
                </p>

                <div className="mt-5 space-y-1.5">
                  <div className="text-[11px] font-mono font-bold uppercase text-[#06233A] tracking-wider mb-2">
                    Key Specifications:
                  </div>
                  {cap.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#5F7180]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D94A4A] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="text-[11px] font-mono text-[#2B5D78]">
                  <span className="font-semibold text-[#10212E]">Equipment:</span> {cap.equipment.join(' • ')}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cleanroom Standard Banner */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#06233A] text-white border border-[#2B5D78]/40 shadow-xl text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#D94A4A] font-bold">
                Controlled Cleanroom Environment
              </span>
              <h3 className="font-display font-bold text-2xl text-white">
                Classified Seam Sealing & Membrane Assembly Lines
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Hydrophobic membrane bonding and down chamber filling take place inside temperature and humidity-controlled cleanrooms. This prevents airborne particulates from contaminating molten adhesive tapes and maintains optimal hot-air seam bonding viscosity.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={onOpenQuote}
                className="px-7 py-3.5 rounded-xl bg-[#D94A4A] hover:bg-[#E84D4D] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg"
              >
                Inquire About Machinery Specs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
