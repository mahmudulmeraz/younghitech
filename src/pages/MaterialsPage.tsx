import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { MaterialItem } from '../types';
import { Layers, ShieldCheck, Download, Sparkles, Check, ArrowRight } from 'lucide-react';

interface MaterialsPageProps {
  onOpenQuote: (fabricName?: string) => void;
}

export const MaterialsPage: React.FC<MaterialsPageProps> = ({ onOpenQuote }) => {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialItem>(siteConfig.materials[0]);
  const [sampleRequested, setSampleRequested] = useState<string | null>(null);

  const handleRequestSample = (matName: string) => {
    setSampleRequested(matName);
    setTimeout(() => {
      onOpenQuote(`Fabric Swatch Request: ${matName}`);
    }, 600);
  };

  return (
    <div className="pt-24 pb-20 bg-[#F2F8FB] text-[#10212E]">
      {/* Header */}
      <section className="bg-[#031827] text-white py-16 border-b border-[#2B5D78]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D94A4A] font-bold">
            Textile Engineering Laboratory
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mt-2">
            Certified Technical Fabrics & Membranes
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mt-2 leading-relaxed">
            Every textile in our library undergoes hydrostatic pressure rating, Martindale abrasion, and wash-delamination testing before approval for production.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        {/* Selected Featured Material Deep-Dive */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#06233A] text-white border border-[#2B5D78]/40 shadow-xl text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden aspect-square bg-[#031827] border border-[#2B5D78]/50 relative group">
                <img
                  src={selectedMaterial.textureImage}
                  alt={selectedMaterial.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/macro-detail.jpg';
                  }}
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded bg-[#031827]/90 text-xs font-mono text-sky-300">
                    {selectedMaterial.code}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#D94A4A] font-bold">
                  Active Swatch Inspector
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mt-1">
                  {selectedMaterial.name}
                </h3>
                <p className="text-xs font-mono text-slate-300 mt-1">
                  Composition: {selectedMaterial.composition}
                </p>
              </div>

              {/* Technical Metrics Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-lg bg-[#031827] border border-[#2B5D78]/40">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Weight</span>
                  <span className="font-mono font-bold text-sm text-white">{selectedMaterial.weightGsm}</span>
                </div>
                {selectedMaterial.waterproofMmh2o && (
                  <div className="p-3 rounded-lg bg-[#031827] border border-[#2B5D78]/40">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Waterproof</span>
                    <span className="font-mono font-bold text-sm text-sky-300">{selectedMaterial.waterproofMmh2o}</span>
                  </div>
                )}
                {selectedMaterial.breathabilityMvp && (
                  <div className="p-3 rounded-lg bg-[#031827] border border-[#2B5D78]/40">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Breathability</span>
                    <span className="font-mono font-bold text-sm text-sky-300">{selectedMaterial.breathabilityMvp}</span>
                  </div>
                )}
              </div>

              {/* Characteristics Checklist */}
              <div>
                <span className="text-xs font-mono uppercase text-slate-300 font-semibold tracking-wider block mb-2">
                  Key Technical Attributes:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedMaterial.characteristics.map((c, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-[#2B5D78]/30 border border-[#2B5D78]/60 text-xs text-sky-100 font-mono"
                    >
                      ✓ {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-xs text-slate-300">
                <span className="font-semibold text-white">Recommended Garments:</span> {selectedMaterial.bestFor}
              </div>

              {selectedMaterial.ecoCredential && (
                <div className="text-xs text-emerald-300 font-mono flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Certification: {selectedMaterial.ecoCredential}</span>
                </div>
              )}

              <div className="pt-2 flex gap-3">
                <button
                  onClick={() => handleRequestSample(selectedMaterial.name)}
                  className="px-6 py-3 rounded-xl bg-[#D94A4A] hover:bg-[#E84D4D] text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-lg flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Swatch Hanger Card</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* All Material Swatches Grid */}
        <div>
          <h3 className="font-display font-bold text-2xl text-[#10212E] mb-6 text-left">
            Select Swatch to Inspect Specifications
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.materials.map((mat) => {
              const isCurrent = selectedMaterial.id === mat.id;
              return (
                <button
                  key={mat.id}
                  onClick={() => setSelectedMaterial(mat)}
                  className={`p-5 rounded-2xl border transition-all text-left flex gap-4 items-center cursor-pointer ${
                    isCurrent
                      ? 'bg-white border-[#D94A4A] ring-2 ring-[#D94A4A]/20 shadow-md'
                      : 'bg-white border-[#2B5D78]/20 hover:border-[#2B5D78]/50'
                  }`}
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-[#031827]">
                    <img
                      src={mat.textureImage}
                      alt={mat.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/macro-detail.jpg';
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-mono text-[#2B5D78] block font-semibold">
                      {mat.code} • {mat.weightGsm}
                    </span>
                    <h4 className="font-display font-bold text-sm text-[#10212E] truncate mt-0.5">
                      {mat.name}
                    </h4>
                    <p className="text-[11px] text-[#5F7180] truncate mt-0.5">
                      {mat.waterproofMmh2o || 'Engineered Breathable'}
                    </p>
                    <span className="text-[10px] text-[#D94A4A] font-bold mt-1 inline-block">
                      {isCurrent ? '● Active Spec' : 'Click to View →'}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
