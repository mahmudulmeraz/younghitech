import React from 'react';
import { ProductItem } from '../types';
import { X, Check, ShieldCheck, ArrowRight, Layers, Clock, Award } from 'lucide-react';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onOpenQuote: (productTitle: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenQuote,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#06233A] border border-[#2B5D78]/60 rounded-2xl shadow-2xl overflow-hidden text-white my-8">
        {/* Header */}
        <div className="bg-[#031827] px-6 py-4 border-b border-[#2B5D78]/30 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 rounded bg-[#D94A4A] text-white text-[10px] font-mono uppercase font-bold tracking-wider">
              {product.categoryLabel}
            </span>
            <span className="text-xs font-mono text-sky-300">
              OEM Silhouette Spec Sheet
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image & Tags */}
            <div>
              <div className="rounded-xl overflow-hidden bg-[#031827] border border-[#2B5D78]/40 aspect-[4/3] sm:aspect-square relative group">
                <img
                  src={product.image}
                  alt={product.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/macro-detail.jpg';
                  }}
                />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-[#031827] border border-[#2B5D78]/50 text-xs text-sky-200 font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="space-y-5">
              <div>
                <h3 className="font-display font-bold text-2xl text-white">
                  {product.title}
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              {/* Technical Spec Matrix */}
              <div className="p-4 rounded-xl bg-[#031827] border border-[#2B5D78]/40 space-y-2.5 text-xs">
                <h4 className="font-mono uppercase text-sky-400 font-semibold tracking-wider text-[11px] mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#D94A4A]" />
                  Verified Engineering Metrics
                </h4>

                {product.specs.waterproofRating && (
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Waterproof Rating:</span>
                    <span className="font-mono font-medium text-white">{product.specs.waterproofRating}</span>
                  </div>
                )}
                {product.specs.breathability && (
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Vapor Permeability:</span>
                    <span className="font-mono font-medium text-white">{product.specs.breathability}</span>
                  </div>
                )}
                {product.specs.weight && (
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Garment Weight:</span>
                    <span className="font-mono font-medium text-white">{product.specs.weight}</span>
                  </div>
                )}
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Seam & Construction:</span>
                  <span className="font-medium text-white text-right max-w-[200px]">{product.specs.construction}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Base Textile:</span>
                  <span className="font-medium text-white text-right max-w-[200px]">{product.specs.recommendedFabric}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Standard Production MOQ:</span>
                  <span className="font-mono font-bold text-[#D94A4A]">{product.specs.moq}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Bulk Lead Time:</span>
                  <span className="font-mono text-emerald-300">{product.specs.leadTime}</span>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-300 font-semibold tracking-wider mb-2">
                  Standard Factory Inclusions:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#D94A4A] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    onClose();
                    onOpenQuote(product.title);
                  }}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#D94A4A] hover:bg-[#E84D4D] text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#D94A4A]/25 transition-colors cursor-pointer"
                >
                  <span>Request RFQ For This Style</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onClose}
                  className="py-3 px-5 rounded-xl bg-[#031827] hover:bg-[#2B5D78]/40 border border-[#2B5D78]/50 text-xs font-semibold uppercase tracking-wider text-slate-300 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
