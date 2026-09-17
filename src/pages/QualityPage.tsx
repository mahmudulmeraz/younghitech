import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { DynamicIcon } from '../components/DynamicIcon';
import { ShieldCheck, CheckCircle2, Award, FileText, ArrowRight } from 'lucide-react';

interface QualityPageProps {
  onOpenQuote: () => void;
}

export const QualityPage: React.FC<QualityPageProps> = ({ onOpenQuote }) => {
  return (
    <div className="pt-24 pb-20 bg-[#F2F8FB] text-[#10212E]">
      {/* Header */}
      <section className="bg-[#031827] text-white py-16 border-b border-[#2B5D78]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D94A4A] font-bold">
            Certified Quality Assurance
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mt-2">
            Zero-Defect Quality Engineering
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mt-2 leading-relaxed">
            Technical garments fail when seams fail. We implement 100% hydrostatic testing on all taped outerwear, computerized needle detection, and ISO 2859-1 (AQL 1.5) inspection.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        {/* Lab Overview & Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4 text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#2B5D78] font-bold">
              In-House Testing Facility
            </span>
            <h2 className="font-display font-bold text-3xl text-[#10212E]">
              Calibrated Physical Testing Before Any Carton Leaves
            </h2>
            <p className="text-sm text-[#5F7180] leading-relaxed">
              Our factory houses a climate-conditioned physical textile lab equipped with Suter hydrostatic test heads, Martindale multi-head abrasion machines, Instron tensile meters, and light boxes conforming to D65, TL84, and CWF illuminants.
            </p>
            <div className="p-4 rounded-xl bg-white border border-[#2B5D78]/20 space-y-2">
              <div className="text-xs font-mono font-bold text-[#06233A] uppercase">
                Third-Party Auditing Friendly
              </div>
              <p className="text-xs text-[#5F7180]">
                We maintain dedicated on-site audit suites with high-speed internet and inspection tables for visiting SGS, Intertek, Bureau Veritas, or brand-appointed QA inspectors.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-[#2B5D78]/30 shadow-xl aspect-[16/10] bg-[#06233A]">
              <img
                src={siteConfig.heroAssets.qualityLabImage}
                alt="Quality Testing Lab Apparatus"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/quality-lab.jpg';
                }}
              />
            </div>
          </div>
        </div>

        {/* 6 Quality Standards Cards */}
        <div>
          <h3 className="font-display font-bold text-2xl text-[#10212E] mb-8 text-left">
            Standard Operating Laboratory Protocols
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {siteConfig.qualityStandards.map((std) => (
              <div
                key={std.id}
                className="p-6 rounded-2xl bg-white border border-[#2B5D78]/20 hover:border-[#D94A4A] transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-3">
                  <DynamicIcon name={std.iconName} className="w-6 h-6 text-[#D94A4A]" />
                  <span className="text-[10px] font-mono text-[#2B5D78] bg-[#F2F8FB] px-2 py-0.5 rounded border border-[#2B5D78]/20 font-bold">
                    {std.standardCode}
                  </span>
                </div>
                <h4 className="font-display font-bold text-base text-[#10212E]">
                  {std.title}
                </h4>
                <p className="text-xs text-[#5F7180] mt-2 leading-relaxed">
                  {std.description}
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-[#06233A]">
                  <span className="text-slate-400">Apparatus:</span> {std.inspectionMethod}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Tier Inspection Flow */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#06233A] text-white border border-[#2B5D78]/40 shadow-xl text-left">
          <h3 className="font-display font-bold text-2xl text-white mb-6">
            4-Tier Inline & Final Quality Inspection Protocol
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-xl bg-[#031827] border border-[#2B5D78]/40 space-y-2">
              <span className="text-xs font-mono font-bold text-[#D94A4A]">TIER 1</span>
              <h4 className="font-display font-bold text-sm text-white">Incoming Raw Material</h4>
              <p className="text-xs text-slate-300">
                100% 4-point fabric inspection roll checking for shading, barré, holes, and waterproof coating uniformity.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#031827] border border-[#2B5D78]/40 space-y-2">
              <span className="text-xs font-mono font-bold text-[#D94A4A]">TIER 2</span>
              <h4 className="font-display font-bold text-sm text-white">Cutting & Numbering</h4>
              <p className="text-xs text-slate-300">
                Laser measurement audits verifying cut tolerance to +/- 0.5mm against approved CAD nested master patterns.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#031827] border border-[#2B5D78]/40 space-y-2">
              <span className="text-xs font-mono font-bold text-[#D94A4A]">TIER 3</span>
              <h4 className="font-display font-bold text-sm text-white">Inline Seam Taping</h4>
              <p className="text-xs text-slate-300">
                Continuous hourly peel testing on hot-air seamers and water column spot tests every 50 completed jackets.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#031827] border border-[#2B5D78]/40 space-y-2">
              <span className="text-xs font-mono font-bold text-[#D94A4A]">TIER 4</span>
              <h4 className="font-display font-bold text-sm text-white">Final AQL & Needle Scan</h4>
              <p className="text-xs text-slate-300">
                Dual-head conveyor metal detection scanning 100% of finished cartons + ISO 2859-1 random sampling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
