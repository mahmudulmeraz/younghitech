import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { LogoMarquee } from '../components/LogoMarquee';
import { ShieldCheck, Globe2, Briefcase, Lock, ArrowRight } from 'lucide-react';

interface PartnersPageProps {
  onOpenQuote: () => void;
}

export const PartnersPage: React.FC<PartnersPageProps> = ({ onOpenQuote }) => {
  return (
    <div className="pt-24 pb-20 bg-[#F2F8FB] text-[#10212E]">
      {/* Header */}
      <section className="bg-[#031827] text-white py-16 border-b border-[#2B5D78]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D94A4A] font-bold">
            International Supply Chain Alliances
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mt-2">
            Trusted by Performance Brands Worldwide
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mt-2 leading-relaxed">
            From emerging technical apparel startups to multi-million unit international outdoor distributors, we build multi-year OEM partnerships based on trust and engineering consistency.
          </p>
        </div>
      </section>

      {/* Marquee */}
      <LogoMarquee />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Partnership Tiers */}
        <div className="text-left space-y-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#2B5D78] font-bold">
              Collaboration Models
            </span>
            <h2 className="font-display font-bold text-3xl text-[#10212E] mt-1">
              Structured B2B Partnership Tiers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-[#2B5D78]/20 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#E5F0F5] text-[#06233A] flex items-center justify-center font-bold font-mono">
                01
              </div>
              <h3 className="font-display font-bold text-xl text-[#10212E]">
                Full Turnkey OEM
              </h3>
              <p className="text-xs text-[#5F7180] leading-relaxed">
                You provide the CAD patterns, spec sheets, and tech-packs. We handle complete raw material procurement, lab dips, laser cutting, seam sealing, and export packaging.
              </p>
              <div className="pt-2 text-xs font-mono text-[#2B5D78]">
                Best for established apparel brands with dedicated design teams.
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#2B5D78]/20 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#E5F0F5] text-[#06233A] flex items-center justify-center font-bold font-mono">
                02
              </div>
              <h3 className="font-display font-bold text-xl text-[#10212E]">
                Collaborative ODM
              </h3>
              <p className="text-xs text-[#5F7180] leading-relaxed">
                Choose from our library of validated alpine and technical silhouettes. Modify fit, customize trims, add brand badges, and select from certified membrane options.
              </p>
              <div className="pt-2 text-xs font-mono text-[#2B5D78]">
                Ideal for fast-growth brands seeking fast time-to-market.
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#2B5D78]/20 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#E5F0F5] text-[#06233A] flex items-center justify-center font-bold font-mono">
                03
              </div>
              <h3 className="font-display font-bold text-xl text-[#10212E]">
                Specialized Pilot Runs
              </h3>
              <p className="text-xs text-[#5F7180] leading-relaxed">
                Low-volume production cells dedicated to limited edition runs, expedition pro-athlete prototypes, and new technical fabric trial collections.
              </p>
              <div className="pt-2 text-xs font-mono text-[#2B5D78]">
                Tailored for capsule drops and extreme alpine validations.
              </div>
            </div>
          </div>
        </div>

        {/* NDA & IP Protection Security Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#06233A] text-white border border-[#2B5D78]/40 shadow-xl text-left">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#D94A4A]/20 border border-[#D94A4A]/40 text-[#D94A4A] flex items-center justify-center shrink-0">
              <Lock className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="font-display font-bold text-xl text-white">
                Strict Intellectual Property & Confidentiality Guarantee
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                We understand that your tech packs, proprietary pattern grading, and customized membrane combinations represent your core competitive moat. We execute bilateral non-disclosure agreements before reviewing CAD files, restrict factory floor photo access, and never share buyer silhouettes with third parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
