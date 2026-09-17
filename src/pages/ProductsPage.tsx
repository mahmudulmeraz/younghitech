import React, { useState, useMemo } from 'react';
import { siteConfig } from '../data/siteConfig';
import { ProductItem } from '../types';
import { Search, Filter, ArrowRight, ShieldCheck, Layers, Clock, Sparkles } from 'lucide-react';

interface ProductsPageProps {
  onOpenQuote: (category?: string) => void;
  onSelectProduct: (product: ProductItem) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onOpenQuote,
  onSelectProduct,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Silhouettes' },
    { id: 'ski', label: 'Ski Wear' },
    { id: 'ride', label: 'Ride & Moto' },
    { id: 'minus-temp', label: 'Minus Temp Jacket' },
    { id: 'rainwear', label: 'Technical Rainwear' },
    { id: 'industrial', label: 'Industrial Heavy' },
  ];

  const filteredProducts = useMemo(() => {
    return siteConfig.products.filter((p) => {
      const matchCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const matchSearch =
        searchQuery === '' ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="pt-24 pb-20 bg-[#F2F8FB] text-[#10212E]">
      {/* Header */}
      <section className="bg-[#031827] text-white py-16 border-b border-[#2B5D78]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D94A4A] font-bold">
            OEM & ODM Manufacturing Catalog
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mt-2">
            Technical Apparel Silhouettes
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mt-2 leading-relaxed">
            Engineered base patterns with proven factory grading, customizable fabric compositions, branded trims, and certified waterproof taped seams.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#06233A] text-white font-bold shadow-md border border-[#06233A]'
                    : 'bg-white text-[#5F7180] border border-[#2B5D78]/20 hover:text-[#10212E]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by fabric, rating, tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#2B5D78]/20 text-xs text-[#10212E] placeholder:text-slate-400 focus:outline-none focus:border-[#D94A4A]"
            />
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group rounded-2xl overflow-hidden bg-white border border-[#2B5D78]/20 hover:border-[#D94A4A] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between text-left"
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden bg-[#031827]">
                  <img
                    src={product.image}
                    alt={product.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/macro-detail.jpg';
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded bg-[#06233A]/90 backdrop-blur-sm border border-[#2B5D78]/50 text-white text-[10px] font-mono uppercase font-bold tracking-wider">
                      {product.categoryLabel}
                    </span>
                  </div>
                  {product.specs.waterproofRating && (
                    <div className="absolute bottom-3 left-3">
                      <span className="px-2 py-0.5 rounded bg-black/75 backdrop-blur-sm text-[11px] font-mono text-sky-300">
                        {product.specs.waterproofRating.split(' ')[0]} WP
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-display font-bold text-xl text-[#10212E] group-hover:text-[#06233A] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-xs text-[#5F7180] line-clamp-3 leading-relaxed">
                    {product.shortDescription}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-[#F2F8FB] border border-[#2B5D78]/20 text-[10px] font-mono text-[#2B5D78]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                <div className="text-[11px] font-mono text-[#5F7180]">
                  MOQ: <span className="font-bold text-[#10212E]">{product.specs.moq}</span>
                </div>

                <button
                  onClick={() => onSelectProduct(product)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#06233A] hover:bg-[#D94A4A] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>Specs & RFQ</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Development Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-[#06233A] text-white border border-[#2B5D78]/40 flex flex-col md:flex-row items-center justify-between gap-6 text-left shadow-xl">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#D94A4A] font-bold">
              Proprietary ODM Development
            </span>
            <h3 className="font-display font-bold text-2xl text-white mt-1">
              Have your own tech pack or proprietary silhouette?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              We specialize in custom technical apparel. Send your CAD patterns, tech packs, or physical samples for full feasibility review and BOM pricing.
            </p>
          </div>
          <button
            onClick={() => onOpenQuote('Custom Silhouette')}
            className="px-7 py-3.5 rounded-xl bg-[#D94A4A] hover:bg-[#E84D4D] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg shrink-0"
          >
            Submit Custom Tech Pack
          </button>
        </div>
      </div>
    </div>
  );
};
