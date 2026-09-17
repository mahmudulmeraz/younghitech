import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { ArrowRight, Menu, X, Phone, Mail, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  activePage: string;
  onNavigate: (pageId: string) => void;
  onOpenQuote: (defaultCategory?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate, onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#06233A]/95 backdrop-blur-md shadow-lg border-b border-[#2B5D78]/30 py-3.5'
            : 'bg-gradient-to-b from-[#031827]/90 via-[#06233A]/70 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="group flex items-center gap-3 text-left focus:outline-none focus:ring-2 focus:ring-[#D94A4A] rounded p-1"
          >
            <img
              src={siteConfig.company.logoUrl || '/images/logo.png'}
              alt={siteConfig.company.name}
              referrerPolicy="no-referrer"
              className="h-10 sm:h-11 w-auto object-contain max-w-[220px] transition-transform duration-200 group-hover:scale-102"
              onError={(e) => {
                // Fallback in case png is unavailable
                e.currentTarget.style.display = 'none';
                const sibling = e.currentTarget.nextElementSibling as HTMLElement;
                if (sibling) sibling.style.display = 'flex';
              }}
            />
            {/* Fallback container if custom image is not found */}
            <div className="hidden items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#06233A] border border-[#2B5D78]/50 flex items-center justify-center text-white font-display font-bold text-xl shadow-md">
                <span className="text-[#D94A4A]">Y</span>H
              </div>
              <div>
                <span className="text-white font-display font-bold text-lg tracking-tight leading-none block">
                  {siteConfig.company.shortName || siteConfig.company.name}
                </span>
                <span className="text-[11px] text-slate-400 font-mono tracking-wider uppercase">
                  Technical Wear Ltd.
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2 text-sm font-medium">
            {siteConfig.navigation.map((item) => {
              const isActive = activePage === item.href;
              return (
                <button
                  key={item.href}
                  id={`nav-link-${item.href}`}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-3 py-2 rounded-md transition-all duration-200 relative whitespace-nowrap ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#D94A4A] rounded-full animate-pulse" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Request a Quote (Warm Red/Coral Accent as in reference) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="header-quote-cta"
              onClick={() => onOpenQuote()}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#D94A4A] hover:bg-[#E84D4D] text-white text-xs font-semibold tracking-wider uppercase transition-all duration-200 shadow-md shadow-[#D94A4A]/25 hover:shadow-lg hover:shadow-[#D94A4A]/40 active:scale-95 cursor-pointer"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              id="mobile-quote-cta"
              onClick={() => onOpenQuote()}
              className="sm:hidden px-3 py-1.5 rounded-md bg-[#D94A4A] text-white text-xs font-semibold uppercase tracking-wider"
            >
              Quote
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#D94A4A]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-0 z-40 bg-[#031827]/98 backdrop-blur-xl xl:hidden pt-24 px-6 pb-8 overflow-y-auto flex flex-col justify-between animate-in fade-in duration-200"
        >
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase text-[#2B5D78] tracking-widest px-3 mb-2">
              Corporate Directory
            </div>
            {siteConfig.navigation.map((item) => {
              const isActive = activePage === item.href;
              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-[#06233A] text-white font-bold border-l-4 border-[#D94A4A]'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{item.name}</span>
                  <ArrowRight className={`w-4 h-4 ${isActive ? 'text-[#D94A4A]' : 'text-slate-500'}`} />
                </button>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-[#2B5D78]/30 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3.5 rounded-lg bg-[#D94A4A] text-white font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#D94A4A]/30"
            >
              <span>Submit RFQ / Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-xs text-slate-400 space-y-2 px-2">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#2B5D78]" />
                <span>{siteConfig.company.salesEmail}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#2B5D78]" />
                <span>{siteConfig.company.phone}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
