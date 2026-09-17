import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuickQuoteModal } from './components/QuickQuoteModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { CapabilitiesPage } from './pages/CapabilitiesPage';
import { MaterialsPage } from './pages/MaterialsPage';
import { QualityPage } from './pages/QualityPage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { PartnersPage } from './pages/PartnersPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { ProductItem } from './types';

export default function App() {
  const [activePage, setActivePage] = useState<string>('home');
  const [isQuoteOpen, setIsQuoteOpen] = useState<boolean>(false);
  const [quoteCategory, setQuoteCategory] = useState<string | undefined>(undefined);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  // Scroll to top whenever activePage changes
  const handleNavigate = (pageId: string) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (category?: string) => {
    setQuoteCategory(category);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
    setQuoteCategory(undefined);
  };

  const handleSelectProduct = (product: ProductItem) => {
    setSelectedProduct(product);
  };

  const handleCloseProductModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F2F8FB] text-[#10212E] selection:bg-[#D94A4A] selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenQuote={handleOpenQuote}
      />

      {/* Main Page Routing Container */}
      <main className="flex-1 w-full">
        {activePage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenQuote={handleOpenQuote}
            onSelectProduct={handleSelectProduct}
          />
        )}
        {activePage === 'about' && (
          <AboutPage
            onOpenQuote={handleOpenQuote}
            onNavigate={handleNavigate}
          />
        )}
        {activePage === 'products' && (
          <ProductsPage
            onOpenQuote={handleOpenQuote}
            onSelectProduct={handleSelectProduct}
          />
        )}
        {activePage === 'capabilities' && (
          <CapabilitiesPage
            onOpenQuote={handleOpenQuote}
          />
        )}
        {activePage === 'materials' && (
          <MaterialsPage
            onOpenQuote={handleOpenQuote}
          />
        )}
        {activePage === 'quality' && (
          <QualityPage
            onOpenQuote={handleOpenQuote}
          />
        )}
        {activePage === 'sustainability' && (
          <SustainabilityPage
            onOpenQuote={handleOpenQuote}
          />
        )}
        {activePage === 'partners' && (
          <PartnersPage
            onOpenQuote={handleOpenQuote}
          />
        )}
        {activePage === 'contact' && (
          <ContactPage />
        )}
        {activePage === 'faq' && (
          <FAQPage
            onOpenQuote={handleOpenQuote}
          />
        )}
      </main>

      {/* Global Multi-Column Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuote={handleOpenQuote}
      />

      {/* Interactive B2B Request a Quote / RFQ Modal */}
      <QuickQuoteModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        defaultCategory={quoteCategory}
      />

      {/* Technical Garment Spec Sheet Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={handleCloseProductModal}
        onOpenQuote={handleOpenQuote}
      />

      {/* Bottom-Left Go To Top Icon (Appears when scrolled > 100px) */}
      <ScrollToTop />
    </div>
  );
}
