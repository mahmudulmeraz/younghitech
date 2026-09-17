import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { ProductItem } from '../types';
import { DynamicIcon } from '../components/DynamicIcon';
import { TechnicalHotspotViewer } from '../components/TechnicalHotspotViewer';
import { LogoMarquee } from '../components/LogoMarquee';
import {
  ArrowRight,
  ShieldCheck,
  Factory,
  Layers,
  Clock,
  ChevronRight,
  Sparkles,
  Award,
  CheckCircle2,
  Cpu,
  Droplets,
  ExternalLink,
  UploadCloud,
  FileCheck,
  Check,
  Leaf
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (pageId: string) => void;
  onOpenQuote: (defaultCategory?: string) => void;
  onSelectProduct: (product: ProductItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenQuote,
  onSelectProduct,
}) => {
  // Direct Home Page Quick RFQ Form state (matching the conversion form from the reference image)
  const [inlineInquirySubmitted, setInlineInquirySubmitted] = useState(false);
  const [inlineInquiryData, setInlineInquiryData] = useState({
    fullName: '',
    companyName: '',
    whatsapp: '',
    email: '',
    productCategory: 'Technical 3L Hard Shells',
    estimatedMoq: '1,000 pcs',
    agreeTerms: true,
  });

  const handleInlineInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInlineInquirySubmitted(true);
  };

  return (
    <div className="w-full">
      {/* =========================================================================
          SECTION 01 — FULLSCREEN HERO
          ========================================================================= */}
      <section
        id="home-hero-section"
        className="relative min-h-[92vh] lg:min-h-screen bg-[#031827] text-white flex items-center pt-24 pb-16 overflow-hidden"
      >
        {/* Cinematic Background Gradient and Subtle Industrial Grid */}
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#2B5D78]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#06233A]/40 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Eyebrow, Big Headline, Value Prop & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#06233A] border border-[#2B5D78]/50 text-xs font-mono uppercase tracking-widest text-sky-200">
                <span className="w-2 h-2 rounded-full bg-[#D94A4A] animate-ping" />
                <span>Technical Wear Manufacturing</span>
              </div>

              {/* Large Headline */}
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-white">
                Engineered Apparel. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-slate-400">
                  Built for Global Brands.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                {siteConfig.company.heroSubheadline}
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  id="hero-request-quote-cta"
                  onClick={() => onOpenQuote()}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#D94A4A] hover:bg-[#E84D4D] text-white font-semibold text-sm uppercase tracking-wider transition-all duration-200 shadow-xl shadow-[#D94A4A]/30 hover:shadow-2xl hover:shadow-[#D94A4A]/50 active:scale-98 cursor-pointer"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
                </button>

                <button
                  id="hero-explore-capabilities-cta"
                  onClick={() => onNavigate('capabilities')}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#06233A]/80 hover:bg-[#2B5D78]/40 border border-[#2B5D78]/60 text-white font-semibold text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer"
                >
                  <span>Explore Capabilities</span>
                  <ChevronRight className="w-4 h-4 text-sky-300" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-[#2B5D78]/30 flex flex-wrap items-center gap-5 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-sky-400" />
                  <span>German & China Machinery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-amber-400" />
                  <span>100% Imported Raw Materials</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D94A4A]" />
                  <span>AQL 1.5 Certified QA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>{siteConfig.company.factorySpecs.sampleLeadTime} Samples</span>
                </div>
              </div>
            </div>

            {/* Right Column: Cinematic Hero Factory Image with Floating UI Badge */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#2B5D78]/50 shadow-2xl bg-[#06233A] aspect-[4/3] sm:aspect-[16/12] lg:aspect-[4/5] group">
                <img
                  src={siteConfig.heroAssets.factoryImage}
                  alt="Young Hi Tech Cleanroom Garment Production Facility"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/factory.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#031827]/90 via-[#031827]/20 to-transparent pointer-events-none" />

                {/* Floating Technical Precision Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#06233A]/90 backdrop-blur-md border border-[#2B5D78]/60 shadow-xl text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-[#D94A4A] font-bold">
                        Production Precision
                      </p>
                      <h4 className="text-white font-display font-bold text-sm sm:text-base mt-0.5">
                        High-Tech Cleanroom Assembly
                      </h4>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Automated CNC laser cutting & robotic ultrasonic bonding
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-[#2B5D78]/40 border border-[#2B5D78] flex items-center justify-center text-sky-300 font-mono font-bold text-xs">
                      99.2%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03 — HIGH-CONTRAST METRICS STRIP
          (Directly inspired by the high-impact stats ribbon in reference)
          ========================================================================= */}
      <section id="metrics-strip-section" className="bg-[#06233A] border-y border-[#2B5D78]/40 py-10 text-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {siteConfig.metrics.map((metric) => (
              <div
                key={metric.id}
                className="p-5 rounded-xl bg-[#031827]/60 border border-[#2B5D78]/30 hover:border-[#D94A4A]/60 transition-colors text-left"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-sky-300 font-semibold">
                    {metric.suffix}
                  </span>
                  <DynamicIcon name={metric.iconName} className="w-5 h-5 text-[#D94A4A]" />
                </div>
                <div className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                  {metric.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {metric.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02 — TRUST / COMPANY INTRO
          ========================================================================= */}
      <section id="company-intro-section" className="py-20 bg-[#F2F8FB] text-[#10212E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Statement */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <span className="text-xs font-mono uppercase tracking-widest text-[#2B5D78] font-bold">
                About Our Enterprise
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#10212E] tracking-tight leading-tight">
                Technical apparel manufacturing, with precision at every stage.
              </h2>
              <div className="w-16 h-1 bg-[#D94A4A] rounded-full" />
              <p className="text-sm sm:text-base text-[#5F7180] leading-relaxed pt-2">
                Young Hi Tech Technical Wear Ltd. was established to solve the engineering bottleneck faced by modern performance apparel brands. We bridge the gap between high-end design aesthetics and certified industrial scale.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#06233A] hover:text-[#D94A4A] transition-colors"
                >
                  <span>Read Full Corporate Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: 3 Core Pillars (Inspired by the 3 checkmark cards in reference image) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-[#2B5D78]/15 shadow-sm hover:shadow-md transition-shadow text-left">
                <div className="w-12 h-12 rounded-xl bg-[#E5F0F5] border border-[#2B5D78]/20 flex items-center justify-center text-[#06233A] mb-4">
                  <ShieldCheck className="w-6 h-6 text-[#D94A4A]" />
                </div>
                <h3 className="font-display font-bold text-lg text-[#10212E]">
                  Certified Quality
                </h3>
                <p className="text-xs text-[#5F7180] mt-2 leading-relaxed">
                  100% hydrostatic seam water testing and 4-tier AQL 1.5/2.5 inline audits before packaging.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#2B5D78]/15 shadow-sm hover:shadow-md transition-shadow text-left">
                <div className="w-12 h-12 rounded-xl bg-[#E5F0F5] border border-[#2B5D78]/20 flex items-center justify-center text-[#06233A] mb-4">
                  <Factory className="w-6 h-6 text-[#2B5D78]" />
                </div>
                <h3 className="font-display font-bold text-lg text-[#10212E]">
                  Consistent Output
                </h3>
                <p className="text-xs text-[#5F7180] mt-2 leading-relaxed">
                  Automated CNC pattern cutting and dedicated cleanroom lines guaranteeing spec repeatability.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#2B5D78]/15 shadow-sm hover:shadow-md transition-shadow text-left">
                <div className="w-12 h-12 rounded-xl bg-[#E5F0F5] border border-[#2B5D78]/20 flex items-center justify-center text-[#06233A] mb-4">
                  <Leaf className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-display font-bold text-lg text-[#10212E]">
                  Sustainable Future
                </h3>
                <p className="text-xs text-[#5F7180] mt-2 leading-relaxed">
                  GRS recycled textiles, rooftop solar arrays, PFC-free DWR, and responsible chemical handling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04 — PRODUCT CATEGORIES & ASYMMETRIC SHOWCASE
          ========================================================================= */}
      <section id="products-showcase-section" className="py-20 bg-white text-[#10212E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="text-left space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#2B5D78] font-bold">
                Apparel Architecture
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#10212E]">
                Technical Silhouettes Engineered for Bulk OEM
              </h2>
              <p className="text-sm text-[#5F7180] max-w-xl">
                Every silhouette is designed with production-ready tolerances, optimized marker efficiency, and validated waterproof construction.
              </p>
            </div>
            <button
              onClick={() => onNavigate('products')}
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-[#D94A4A] hover:text-[#E84D4D] transition-colors"
            >
              <span>View Full Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.products.map((product) => (
              <div
                key={product.id}
                className="group rounded-2xl overflow-hidden bg-[#F2F8FB] border border-[#2B5D78]/20 hover:border-[#D94A4A] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between text-left"
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
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="font-display font-bold text-xl text-[#10212E] group-hover:text-[#06233A] transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-xs text-[#5F7180] line-clamp-2 leading-relaxed">
                      {product.shortDescription}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {product.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-white border border-[#2B5D78]/20 text-[11px] font-mono text-[#2B5D78]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-[#2B5D78]/10 mt-4">
                  <div className="text-[11px] font-mono text-[#5F7180]">
                    MOQ: <span className="font-bold text-[#10212E]">{product.specs.moq}</span>
                  </div>
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D94A4A] group-hover:translate-x-1 transition-transform"
                  >
                    <span>Inspect Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05 — TECHNICAL WEAR SHOWCASE WITH INTERACTIVE HOTSPOTS
          ========================================================================= */}
      <section id="interactive-hotspot-showcase" className="py-20 bg-[#06233A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D94A4A] font-bold">
              Engineering Deep-Dive
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              Anatomy of a High-Performance Technical Garment
            </h2>
            <p className="text-sm text-slate-300">
              Click on the active numeric feature hotspots below to inspect our laser-bonded construction, taped micro-seams, and weatherproof hardware integration.
            </p>
          </div>

          <TechnicalHotspotViewer
            imageSrc={siteConfig.heroAssets.modelLookbookImage}
            hotspots={siteConfig.hotspots}
          />
        </div>
      </section>

      {/* =========================================================================
          SECTION 07 — FABRICS & MATERIALS SWATCH LIBRARY
          (Directly inspired by the fabric cards row in reference image)
          ========================================================================= */}
      <section id="materials-swatch-section" className="py-20 bg-[#F2F8FB] text-[#10212E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="text-left space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#2B5D78] font-bold">
                Textile Engineering
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#10212E]">
                Certified Technical Material Library
              </h2>
              <p className="text-sm text-[#5F7180] max-w-xl">
                Tactile macro textures and technical performance data sheets. Sourced from certified partner mills and rigorously tested in our in-house lab.
              </p>
            </div>
            <button
              onClick={() => onNavigate('materials')}
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-[#06233A] hover:text-[#D94A4A] transition-colors"
            >
              <span>Explore All 24+ Materials</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Grid of Fabric Swatches */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {siteConfig.materials.map((mat) => (
              <div
                key={mat.id}
                className="group rounded-xl overflow-hidden bg-white border border-[#2B5D78]/20 hover:border-[#D94A4A] transition-all duration-300 shadow-sm hover:shadow-md text-left flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-square overflow-hidden bg-[#031827] relative">
                    <img
                      src={mat.textureImage}
                      alt={mat.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/macro-detail.jpg';
                      }}
                    />
                    <div className="absolute bottom-2 left-2">
                      <span className="px-1.5 py-0.5 rounded bg-[#031827]/80 text-[10px] font-mono text-white">
                        {mat.weightGsm}
                      </span>
                    </div>
                  </div>
                  <div className="p-3">
                    <h4 className="font-display font-bold text-xs text-[#10212E] line-clamp-1 group-hover:text-[#D94A4A]">
                      {mat.name}
                    </h4>
                    <p className="text-[10px] font-mono text-[#5F7180] mt-0.5">
                      {mat.code}
                    </p>
                  </div>
                </div>

                <div className="p-3 pt-0 text-[10px] text-slate-500 border-t border-slate-100 mt-2">
                  <span className="text-emerald-700 font-medium line-clamp-1">
                    {mat.waterproofMmh2o || 'Engineered Breathable'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 06 — MANUFACTURING PROCESS TIMELINE
          ========================================================================= */}
      <section id="manufacturing-process-section" className="py-20 bg-white text-[#10212E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#2B5D78] font-bold">
              Production Workflow
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#10212E]">
              From Technical Brief to Container Departure
            </h2>
            <p className="text-sm text-[#5F7180]">
              Our standardized 8-phase garment manufacturing cycle engineered for predictable timelines and zero surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.processSteps.map((step) => (
              <div
                key={step.stepNumber}
                className="p-6 rounded-2xl bg-[#F2F8FB] border border-[#2B5D78]/20 hover:border-[#D94A4A] transition-colors relative text-left"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display font-extrabold text-2xl text-[#D94A4A]">
                    {step.stepNumber}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white text-[10px] font-mono uppercase font-bold text-[#2B5D78] border border-[#2B5D78]/20">
                    {step.duration}
                  </span>
                </div>
                <h3 className="font-display font-bold text-base text-[#10212E]">
                  {step.title}
                </h3>
                <p className="text-xs text-[#5F7180] mt-2 leading-relaxed">
                  {step.description}
                </p>
                <div className="mt-4 pt-3 border-t border-[#2B5D78]/10 text-[11px] font-mono text-[#06233A]">
                  <span className="text-[#D94A4A] font-bold mr-1">✓</span>
                  {step.deliverables[0]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 08 — QUALITY CONTROL & TESTING LAB (Dark Navy Section)
          ========================================================================= */}
      <section id="quality-control-section" className="py-20 bg-[#031827] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6 space-y-4 text-left">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D94A4A] font-bold">
                Zero-Tolerance Assurance
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
                Quality is engineered into every seam, not inspected at the end.
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Operating dedicated hydrostatic pressure chambers, computerized tensile testers, and full-conveyor needle detection to guarantee international compliance.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('quality')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2B5D78] hover:bg-[#2B5D78]/80 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <span>View Lab Testing Protocol</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-[#2B5D78]/50 shadow-2xl aspect-[16/10] bg-[#06233A]">
                <img
                  src={siteConfig.heroAssets.qualityLabImage}
                  alt="Young Hi Tech Textile Testing Lab"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/quality-lab.jpg';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Quality Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {siteConfig.qualityStandards.slice(0, 3).map((std) => (
              <div
                key={std.id}
                className="p-6 rounded-2xl bg-[#06233A] border border-[#2B5D78]/40 hover:border-[#D94A4A] transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <DynamicIcon name={std.iconName} className="w-6 h-6 text-[#D94A4A]" />
                  <span className="text-[10px] font-mono text-sky-300 bg-[#031827] px-2 py-0.5 rounded border border-[#2B5D78]/40">
                    {std.standardCode}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-white">
                  {std.title}
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {std.description}
                </p>
                <div className="mt-4 pt-3 border-t border-[#2B5D78]/30 text-[11px] font-mono text-slate-400">
                  Apparatus: {std.inspectionMethod}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 09 — CLIENT LOGO MARQUEE (60fps Continuous Right-to-Left)
          ========================================================================= */}
      <LogoMarquee />

      {/* =========================================================================
          SECTION 10 — WHY PARTNER WITH US
          ========================================================================= */}
      <section id="why-partner-section" className="py-20 bg-white text-[#10212E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#2B5D78] font-bold">
              The Manufacturer Advantage
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#10212E]">
              Why Global Performance Brands Choose Us
            </h2>
            <p className="text-sm text-[#5F7180]">
              Engineered reliability, transparent pricing, and direct collaboration with skilled apparel pattern makers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {siteConfig.whyPartner.map((item) => (
              <div
                key={item.number}
                className="p-7 rounded-2xl bg-[#F2F8FB] border border-[#2B5D78]/20 hover:border-[#D94A4A] transition-all hover:-translate-y-1 shadow-sm"
              >
                <span className="font-display font-black text-2xl text-[#2B5D78]/60 block mb-3">
                  {item.number}
                </span>
                <h3 className="font-display font-bold text-lg text-[#10212E]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5F7180] mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 13 — LARGE EDITORIAL IMAGE STORY
          ("From concept to finished garment")
          ========================================================================= */}
      <section id="editorial-story-section" className="py-24 bg-[#06233A] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#2B5D78]/50 shadow-2xl aspect-[4/3] bg-[#031827]">
                <img
                  src={siteConfig.heroAssets.garmentMacroImage}
                  alt="Precision Laser Taped Seams"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/macro-detail.jpg';
                  }}
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D94A4A] font-bold">
                Editorial Craftsmanship
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                From technical sketch to sealed bulk delivery.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Technical garment production requires a level of tolerance closer to precision engineering than conventional fashion. A single microscopic needle puncture without proper adhesive tape sealing causes immediate membrane failure.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                At Young Hi Tech Technical Wear Ltd., our specialized cleanroom operators and hot-air taping technicians treat every millimeter of seam with rigorous consistency.
              </p>

              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => onOpenQuote()}
                  className="px-6 py-3 rounded-xl bg-[#D94A4A] hover:bg-[#E84D4D] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg"
                >
                  Start Sourcing Discussion
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3 rounded-xl bg-[#031827] border border-[#2B5D78]/60 text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#2B5D78]/30 transition-colors"
                >
                  Book Factory Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 14 — CONVERSION INQUIRY SECTION
          (Faithfully inspired by the dark navy conversion form in the reference image)
          ========================================================================= */}
      <section id="inquiry-distributor-section" className="py-20 bg-[#031827] text-white border-t border-[#2B5D78]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#D94A4A] font-bold">
                  B2B Sourcing Inquiry
                </span>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-2">
                  Have a technical apparel project in mind?
                </h2>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  Submit your preliminary specifications below. Our technical merchandising team will review feasibility, calculate target MOQ, and provide an initial quotation within 24 business hours.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-[#06233A] border border-[#2B5D78]/50 flex items-center justify-center text-sky-400">
                    <CheckCircle2 className="w-4 h-4 text-[#D94A4A]" />
                  </div>
                  <span>Instant MOQ & Lead-time Guidance</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-[#06233A] border border-[#2B5D78]/50 flex items-center justify-center text-sky-400">
                    <CheckCircle2 className="w-4 h-4 text-[#D94A4A]" />
                  </div>
                  <span>Custom Silhouette & Trim Branding</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-[#06233A] border border-[#2B5D78]/50 flex items-center justify-center text-sky-400">
                    <CheckCircle2 className="w-4 h-4 text-[#D94A4A]" />
                  </div>
                  <span>Strict NDA & Bilateral IP Protection</span>
                </div>
              </div>
            </div>

            {/* Right Form Column (Directly matching the clean input layout from the reference image) */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#06233A] border border-[#2B5D78]/50 shadow-2xl">
                {inlineInquirySubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-white">
                      Inquiry Dispatched to Factory Merchandising
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
                      Thank you for contacting Young Hi Tech Technical Wear Ltd. A senior merchandising manager will respond directly with our company introduction kit and sample catalogue.
                    </p>
                    <button
                      onClick={() => setInlineInquirySubmitted(false)}
                      className="px-6 py-2.5 rounded-lg bg-[#2B5D78] hover:bg-[#2B5D78]/80 text-xs font-semibold uppercase tracking-wider text-white"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleInlineInquiry} className="space-y-4 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Johnathan Davis"
                          value={inlineInquiryData.fullName}
                          onChange={(e) => setInlineInquiryData({ ...inlineInquiryData, fullName: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-[#031827] border border-[#2B5D78]/60 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#D94A4A]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Brand / Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Peak Velocity Apparel"
                          value={inlineInquiryData.companyName}
                          onChange={(e) => setInlineInquiryData({ ...inlineInquiryData, companyName: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-[#031827] border border-[#2B5D78]/60 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#D94A4A]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          WhatsApp / Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+1 555 019 2831"
                          value={inlineInquiryData.whatsapp}
                          onChange={(e) => setInlineInquiryData({ ...inlineInquiryData, whatsapp: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-[#031827] border border-[#2B5D78]/60 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#D94A4A]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Corporate Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="procurement@company.com"
                          value={inlineInquiryData.email}
                          onChange={(e) => setInlineInquiryData({ ...inlineInquiryData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-[#031827] border border-[#2B5D78]/60 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#D94A4A]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Product Category of Interest
                        </label>
                        <select
                          value={inlineInquiryData.productCategory}
                          onChange={(e) => setInlineInquiryData({ ...inlineInquiryData, productCategory: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-[#031827] border border-[#2B5D78]/60 text-white text-sm focus:outline-none focus:border-[#D94A4A]"
                        >
                          <option value="Technical 3L Hard Shells">Technical 3L Hard Shells</option>
                          <option value="Hydrophobic Down & Insulated Parkas">Hydrophobic Down & Insulated Parkas</option>
                          <option value="4-Way Stretch Mountain Pants">4-Way Stretch Mountain Pants</option>
                          <option value="Ultralight Packable Windwear">Ultralight Packable Windwear</option>
                          <option value="Merino Performance Base Layers">Merino Performance Base Layers</option>
                          <option value="High Visibility Certified Workwear">High Visibility Certified Workwear</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Estimated Order MOQ / Quantity
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 500 pcs per color"
                          value={inlineInquiryData.estimatedMoq}
                          onChange={(e) => setInlineInquiryData({ ...inlineInquiryData, estimatedMoq: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-[#031827] border border-[#2B5D78]/60 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#D94A4A]"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                      <input
                        type="checkbox"
                        id="agree-terms"
                        checked={inlineInquiryData.agreeTerms}
                        onChange={(e) => setInlineInquiryData({ ...inlineInquiryData, agreeTerms: e.target.checked })}
                        className="rounded accent-[#D94A4A] w-4 h-4 cursor-pointer"
                      />
                      <label htmlFor="agree-terms" className="text-xs text-slate-300 cursor-pointer">
                        I authorize Young Hi Tech Technical Wear Ltd. to contact our sourcing team regarding this RFQ under mutual NDA.
                      </label>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-4 rounded-xl bg-[#D94A4A] hover:bg-[#E84D4D] text-white font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#D94A4A]/30 transition-colors cursor-pointer"
                      >
                        <span>Submit Factory Inquiry</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
