import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when user scrolls more than 100px down
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial scroll state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      id="scroll-to-top-btn"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Scroll back to top"
      className="fixed bottom-6 left-6 z-50 p-3.5 rounded-xl bg-[#06233A] hover:bg-[#D94A4A] text-white shadow-2xl border border-[#2B5D78]/60 hover:border-[#D94A4A] transition-all duration-300 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center group cursor-pointer"
    >
      <ArrowUp className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
      <span className="sr-only">Go to top</span>
    </button>
  );
};
