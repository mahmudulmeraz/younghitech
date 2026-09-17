import React from 'react';
import { siteConfig } from '../data/siteConfig';
import {
  Factory,
  ShieldCheck,
  Award,
  Globe,
  Users,
  Compass,
  CheckCircle,
  ArrowRight,
  Layers
} from 'lucide-react';

interface AboutPageProps {
  onOpenQuote: () => void;
  onNavigate: (pageId: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuote, onNavigate }) => {
  return (
    <div className="pt-24 pb-20 bg-[#F2F8FB] text-[#10212E]">
      {/* Editorial Header */}
      <section className="bg-[#031827] text-white py-20 border-b border-[#2B5D78]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D94A4A] font-bold">
            Corporate Identity & Heritage
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mt-2 max-w-3xl leading-tight">
            Engineering the Future of High-Performance Apparel.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mt-4 leading-relaxed">
            Young Hi Tech Technical Wear Ltd. operates at the intersection of precision textile engineering, specialized cleanroom garment construction, and global export scalability.
          </p>
        </div>
      </section>

      {/* Main Story & Factory Visuals */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5 text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#2B5D78] font-bold">
              Our Manufacturing Philosophy
            </span>
            <h2 className="font-display font-bold text-3xl text-[#10212E]">
              Why Technical Apparel Requires A Different Mindset
            </h2>
            <p className="text-sm text-[#5F7180] leading-relaxed">
              Conventional garment manufacturing relies on rapid speed and decorative aesthetic standards. Technical outerwear, however, protects human lives in sub-zero alpine blizzards, offshore industrial storms, and high-altitude mountain expeditions.
            </p>
            <p className="text-sm text-[#5F7180] leading-relaxed">
              Every seam must withstand immense hydrostatic water pressure; every zipper must operate under icy conditions without jamming; and every fabric layer must breathe efficiently while remaining impenetrable to driving rain.
            </p>
            <div className="pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#2B5D78]/20 shadow-sm space-y-2">
                <div className="text-xs font-mono font-bold text-[#06233A] uppercase">
                  Core Engineering Mandate
                </div>
                <p className="text-xs text-[#5F7180] italic">
                  "Zero defects in seam tape adhesion; zero compromises on membrane breathability; 100% adherence to agreed delivery windows."
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#2B5D78]/30 bg-[#06233A] aspect-[4/3]">
              <img
                src={siteConfig.heroAssets.factoryImage}
                alt="Factory Floor and Assembly Lines"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/factory.jpg';
                }}
              />
            </div>
          </div>
        </div>

        {/* Manufacturing Footprint Stats */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#06233A] text-white border border-[#2B5D78]/40 shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            <div>
              <div className="font-mono text-xs text-[#D94A4A] uppercase font-bold">Dedicated Lines</div>
              <div className="font-display font-bold text-3xl sm:text-4xl text-white mt-1">18 Lines</div>
              <p className="text-xs text-slate-400 mt-1">Specialized technical & cleanroom cells</p>
            </div>
            <div>
              <div className="font-mono text-xs text-[#D94A4A] uppercase font-bold">Monthly Output</div>
              <div className="font-display font-bold text-3xl sm:text-4xl text-white mt-1">85,000 Pcs</div>
              <p className="text-xs text-slate-400 mt-1">Waterproof shells & performance parkas</p>
            </div>
            <div>
              <div className="font-mono text-xs text-[#D94A4A] uppercase font-bold">Sample Lab</div>
              <div className="font-display font-bold text-3xl sm:text-4xl text-white mt-1">7-10 Days</div>
              <p className="text-xs text-slate-400 mt-1">Fast-track physical prototyping</p>
            </div>
            <div>
              <div className="font-mono text-xs text-[#D94A4A] uppercase font-bold">Quality Standard</div>
              <div className="font-display font-bold text-3xl sm:text-4xl text-white mt-1">AQL 1.5</div>
              <p className="text-xs text-slate-400 mt-1">Zero-needle fragment clearance</p>
            </div>
          </div>
        </div>

        {/* Four Manufacturing Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <div className="p-6 rounded-2xl bg-white border border-[#2B5D78]/20 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#E5F0F5] flex items-center justify-center text-[#06233A]">
              <Factory className="w-6 h-6 text-[#2B5D78]" />
            </div>
            <h3 className="font-display font-bold text-lg text-[#10212E]">German & China Machinery</h3>
            <p className="text-xs text-[#5F7180] leading-relaxed">
              Precision German Ardmel hot-air seam tapers and Pfaff ultrasonic welders paired with Chinese automated CNC laser cutters and pneumatic down vacuum injection units.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#2B5D78]/20 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#E5F0F5] flex items-center justify-center text-[#06233A]">
              <Layers className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="font-display font-bold text-lg text-[#10212E]">100% Imported Raw Materials</h3>
            <p className="text-xs text-[#5F7180] leading-relaxed">
              We import all technical membranes, 3L fabrics, YKK waterproof zippers, RDS down, and Cordura trims from Japan, Germany, Korea, Taiwan & China, performing precision in-house assembly.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#2B5D78]/20 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#E5F0F5] flex items-center justify-center text-[#06233A]">
              <Users className="w-6 h-6 text-[#D94A4A]" />
            </div>
            <h3 className="font-display font-bold text-lg text-[#10212E]">Skilled Technical Workforce</h3>
            <p className="text-xs text-[#5F7180] leading-relaxed">
              Master pattern technicians and certified seam sealers trained extensively in micro-taping, curved raglan welding, and hydrophobic membrane handling.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#2B5D78]/20 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#E5F0F5] flex items-center justify-center text-[#06233A]">
              <Globe className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="font-display font-bold text-lg text-[#10212E]">Direct Global Logistics</h3>
            <p className="text-xs text-[#5F7180] leading-relaxed">
              Direct ocean container stuffing on-site with humidity-controlled packaging, expedited customs clearance, and strategic routes to North America and Europe.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-10 rounded-2xl bg-[#06233A] text-white flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div>
            <h3 className="font-display font-bold text-2xl text-white">
              Ready to schedule an executive facility review?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Visit our factory floor in person or request a virtual live video tour with our production engineers.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenQuote}
              className="px-6 py-3 rounded-xl bg-[#D94A4A] hover:bg-[#E84D4D] text-white font-semibold text-xs uppercase tracking-wider shadow-lg transition-colors"
            >
              Request Sourcing Call
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-xl bg-[#031827] border border-[#2B5D78]/60 text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#2B5D78]/30 transition-colors"
            >
              Contact HQ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
