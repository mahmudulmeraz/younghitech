import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { HelpCircle, ChevronDown, ArrowRight, MessageSquare } from 'lucide-react';

interface FAQPageProps {
  onOpenQuote: () => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onOpenQuote }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-24 pb-20 bg-[#F2F8FB] text-[#10212E]">
      {/* Header */}
      <section className="bg-[#031827] text-white py-16 border-b border-[#2B5D78]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D94A4A] font-bold">
            Buyer & Sourcing Knowledge Base
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mt-2">
            Frequently Asked Sourcing Questions
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mt-2 leading-relaxed">
            Clear guidelines on Minimum Order Quantities (MOQ), sample turnarounds, commercial payment terms, and international export delivery.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-4">
        {siteConfig.faq.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-[#2B5D78]/20 overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#F2F8FB]/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#E5F0F5] text-[#2B5D78] font-bold uppercase">
                    {item.category}
                  </span>
                  <span className="font-display font-bold text-base text-[#10212E]">
                    {item.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#2B5D78] transition-transform duration-200 shrink-0 ml-4 ${
                    isOpen ? 'rotate-180 text-[#D94A4A]' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-[#5F7180] leading-relaxed border-t border-slate-100 bg-[#F2F8FB]/30 text-left">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}

        {/* Bottom Banner */}
        <div className="mt-12 p-8 rounded-2xl bg-[#06233A] text-white flex flex-col sm:flex-row items-center justify-between gap-6 text-left shadow-lg">
          <div>
            <h3 className="font-display font-bold text-xl text-white">
              Have a question not listed here?
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Our merchandising team can answer specific queries regarding fabric nominations, customs tariffs, or specialized testing apparatus.
            </p>
          </div>
          <button
            onClick={onOpenQuote}
            className="px-6 py-3 rounded-xl bg-[#D94A4A] hover:bg-[#E84D4D] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-md shrink-0"
          >
            Speak With Merchandiser
          </button>
        </div>
      </div>
    </div>
  );
};
