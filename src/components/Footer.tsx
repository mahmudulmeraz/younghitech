import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Mail, Phone, MapPin, ArrowRight, Globe, Shield, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (pageId: string) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-[#031827] text-white border-t border-[#2B5D78]/30 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle background industrial grid */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-[#2B5D78]/25">
          {/* Column 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={siteConfig.company.logoUrl || '/images/logo.png'}
                alt={siteConfig.company.name}
                referrerPolicy="no-referrer"
                className="h-10 sm:h-12 w-auto object-contain max-w-[240px]"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = document.getElementById('footer-fallback-logo');
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div id="footer-fallback-logo" className="hidden items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#2B5D78] border border-[#2B5D78]/50 flex items-center justify-center font-display font-bold text-white">
                  <span className="text-[#D94A4A]">Y</span>H
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white leading-tight">
                    {siteConfig.company.name}
                  </h3>
                  <p className="text-xs font-mono uppercase text-[#2B5D78] tracking-widest">
                    Technical Wear Manufacturer
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-300 max-w-md leading-relaxed">
              Engineered garment assembly for international performance brands using German & Chinese machine technology and imported raw materials. Specializing in skiwear, ride technical jackets, sub-zero down parkas, technical rainwear, and heavy industrial workwear.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#06233A] border border-[#2B5D78]/50 text-[11px] font-mono text-sky-200">
                <Shield className="w-3 h-3 text-[#D94A4A]" />
                ISO & AQL 1.5/2.5 Certified Process
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#06233A] border border-[#2B5D78]/50 text-[11px] font-mono text-sky-200">
                <Globe className="w-3 h-3 text-[#2B5D78]" />
                Direct Global Export
              </span>
            </div>
          </div>

          {/* Column 2: Navigation & Company */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-200 border-b border-[#2B5D78]/30 pb-2">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                >
                  About Our Facility
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('capabilities')}
                  className="hover:text-white transition-colors"
                >
                  Manufacturing Capabilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('quality')}
                  className="hover:text-white transition-colors"
                >
                  Quality & Lab Testing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sustainability')}
                  className="hover:text-white transition-colors"
                >
                  Sustainability & GRS
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('partners')}
                  className="hover:text-white transition-colors"
                >
                  Global OEM Partners
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-white transition-colors"
                >
                  Sourcing FAQ & Terms
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Technical Apparel Categories */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-200 border-b border-[#2B5D78]/30 pb-2">
              Apparel Categories
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors flex items-center justify-between w-full text-left"
                >
                  <span>Alpine 3L Hard Shells</span>
                  <span className="text-[10px] text-sky-400 font-mono">28k WP</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors flex items-center justify-between w-full text-left"
                >
                  <span>Hydrophobic Down Parkas</span>
                  <span className="text-[10px] text-sky-400 font-mono">800 FP</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors flex items-center justify-between w-full text-left"
                >
                  <span>4-Way Mountain Pants</span>
                  <span className="text-[10px] text-sky-400 font-mono">Cordura®</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors flex items-center justify-between w-full text-left"
                >
                  <span>Ultralight Wind Anoraks</span>
                  <span className="text-[10px] text-sky-400 font-mono">15D Ripstop</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors flex items-center justify-between w-full text-left"
                >
                  <span>Certified EN 20471 Workwear</span>
                  <span className="text-[10px] text-sky-400 font-mono">Class 3</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('materials')}
                  className="hover:text-white transition-colors text-[#D94A4A] font-medium"
                >
                  Explore Fabric Library →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Factory Location */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-200 border-b border-[#2B5D78]/30 pb-2">
              Factory & Sales HQ
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D94A4A] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {siteConfig.company.address.street}, {siteConfig.company.address.district}, {siteConfig.company.address.city}, {siteConfig.company.address.country}
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#2B5D78] shrink-0" />
                <a href={`mailto:${siteConfig.company.salesEmail}`} className="hover:text-white">
                  {siteConfig.company.salesEmail}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#2B5D78] shrink-0" />
                <span>{siteConfig.company.phone}</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenQuote}
                  className="w-full py-2 px-3 rounded bg-[#06233A] hover:bg-[#2B5D78]/40 border border-[#2B5D78]/60 text-xs font-semibold uppercase tracking-wider text-center text-white transition-colors"
                >
                  Direct RFQ Form
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Dynamic Year */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {siteConfig.company.name}. All rights reserved. Registered Export Manufacturer.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-slate-300 transition-colors"
            >
              Factory Visit Scheduling
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate('quality')}
              className="hover:text-slate-300 transition-colors"
            >
              NDA & IP Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate('faq')}
              className="hover:text-slate-300 transition-colors"
            >
              Terms of Supply
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
