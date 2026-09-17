import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { X, CheckCircle, UploadCloud, ArrowRight, Shield, FileText, Clock, HelpCircle } from 'lucide-react';

interface QuickQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

export const QuickQuoteModal: React.FC<QuickQuoteModalProps> = ({
  isOpen,
  onClose,
  defaultCategory,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [rfqNumber, setRfqNumber] = useState('');
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    businessEmail: '',
    phoneWhatsapp: '',
    country: 'United States',
    productCategory: defaultCategory || 'Technical 3L Hard Shells',
    estimatedQty: 1000,
    targetDelivery: '45-60 Days (Standard Bulk)',
    message: '',
    agreeNda: true,
  });

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomId = `YHT-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setRfqNumber(randomId);
    setSubmitted(true);
  };

  const resetModal = () => {
    setSubmitted(false);
    setUploadedFile(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#06233A] border border-[#2B5D78]/50 rounded-2xl shadow-2xl overflow-hidden text-white my-8">
        {/* Top Gradient Header */}
        <div className="bg-gradient-to-r from-[#031827] via-[#06233A] to-[#2B5D78]/40 p-6 border-b border-[#2B5D78]/30 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D94A4A] animate-ping" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-sky-300">
                Direct B2B Sourcing Channel
              </span>
            </div>
            <h3 className="font-display font-bold text-xl text-white mt-1">
              Request Technical Garment Quotation (RFQ)
            </h3>
          </div>
          <button
            onClick={resetModal}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-5 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle className="w-9 h-9" />
              </div>
              <div>
                <h4 className="font-display text-2xl font-bold text-white">
                  Quotation Request Received
                </h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto mt-2 leading-relaxed">
                  Thank you, <span className="font-semibold text-white">{formData.fullName}</span> from{' '}
                  <span className="font-semibold text-white">{formData.companyName}</span>. Your RFQ dossier has been routed to our technical merchandising team.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#031827] border border-[#2B5D78]/40 text-left max-w-md mx-auto space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">RFQ Reference:</span>
                  <span className="font-mono font-bold text-[#D94A4A]">{rfqNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Product Category:</span>
                  <span className="font-medium text-white">{formData.productCategory}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Target Volume:</span>
                  <span className="font-medium text-white">{formData.estimatedQty} pcs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Response SLA:</span>
                  <span className="font-medium text-emerald-300">Within 24 Business Hours</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={resetModal}
                  className="px-6 py-2.5 rounded-lg bg-[#D94A4A] hover:bg-[#E84D4D] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1: Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Marcus Vance"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#031827] border border-[#2B5D78]/50 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#D94A4A] focus:ring-1 focus:ring-[#D94A4A]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Brand / Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Outdoor Wear Inc."
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#031827] border border-[#2B5D78]/50 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#D94A4A] focus:ring-1 focus:ring-[#D94A4A]"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone / WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sourcing@brand.com"
                    value={formData.businessEmail}
                    onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#031827] border border-[#2B5D78]/50 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#D94A4A] focus:ring-1 focus:ring-[#D94A4A]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 019-2831"
                    value={formData.phoneWhatsapp}
                    onChange={(e) => setFormData({ ...formData, phoneWhatsapp: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#031827] border border-[#2B5D78]/50 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#D94A4A] focus:ring-1 focus:ring-[#D94A4A]"
                  />
                </div>
              </div>

              {/* Row 3: Product Category & Quantity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Product Category *
                  </label>
                  <select
                    value={formData.productCategory}
                    onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#031827] border border-[#2B5D78]/50 text-white text-sm focus:outline-none focus:border-[#D94A4A]"
                  >
                    <option value="Technical 3L Hard Shells">Technical 3L Hard Shells</option>
                    <option value="Hydrophobic Down & Insulated Parkas">Hydrophobic Down & Insulated Parkas</option>
                    <option value="4-Way Stretch Mountain Pants">4-Way Stretch Mountain Pants</option>
                    <option value="Ultralight Packable Windwear">Ultralight Packable Windwear</option>
                    <option value="Merino & Technical Base Layers">Merino & Technical Base Layers</option>
                    <option value="Certified EN Hi-Vis Workwear">Certified EN Hi-Vis Workwear</option>
                    <option value="Custom OEM/ODM Technical Silhouette">Custom OEM/ODM Technical Silhouette</option>
                  </select>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-medium text-slate-300">
                      Estimated Production Quantity
                    </label>
                    <span className="text-xs font-mono font-bold text-[#D94A4A]">
                      {formData.estimatedQty} pcs
                    </span>
                  </div>
                  <input
                    type="range"
                    min="300"
                    max="10000"
                    step="100"
                    value={formData.estimatedQty}
                    onChange={(e) => setFormData({ ...formData, estimatedQty: parseInt(e.target.value) })}
                    className="w-full accent-[#D94A4A] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                    <span>Min MOQ: 300</span>
                    <span>Standard: 1,000+</span>
                    <span>High Volume: 5,000+</span>
                  </div>
                </div>
              </div>

              {/* Tech Pack / Spec Sheet Upload Simulation */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Upload Tech Pack / Spec Sheet / CAD Sketch (Optional)
                </label>
                <div className="relative border-2 border-dashed border-[#2B5D78]/60 rounded-xl p-4 text-center hover:border-[#D94A4A] transition-colors bg-[#031827]/60">
                  <input
                    type="file"
                    id="tech-pack-file"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept=".pdf,.zip,.ai,.dxf,.png,.jpg,.xlsx"
                  />
                  <div className="flex flex-col items-center justify-center gap-1.5 pointer-events-none">
                    <UploadCloud className="w-6 h-6 text-sky-400" />
                    {uploadedFile ? (
                      <p className="text-xs text-emerald-400 font-mono font-medium">
                        ✓ Attached: {uploadedFile}
                      </p>
                    ) : (
                      <>
                        <p className="text-xs text-slate-300 font-medium">
                          Click to upload or drag & drop tech pack
                        </p>
                        <p className="text-[10px] text-slate-400 font-mono">
                          Supports PDF, AI, DXF, ZIP, XLSX (Max 30MB)
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Message / Specifications */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Project Brief & Material Preferences
                </label>
                <textarea
                  rows={3}
                  placeholder="Include target waterproof rating (e.g., 20k mm), fabric preferences, target FOB pricing, or target delivery window..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#031827] border border-[#2B5D78]/50 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#D94A4A]"
                />
              </div>

              {/* NDA Protection Note */}
              <div className="flex items-start gap-2.5 pt-1 text-xs text-slate-400">
                <Shield className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  All submitted tech-packs and inquiries are strictly governed under Young Hi Tech's bilateral Non-Disclosure Agreement (NDA). Your designs remain 100% proprietary.
                </span>
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#D94A4A] hover:bg-[#E84D4D] text-white font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#D94A4A]/30 transition-all duration-200 cursor-pointer"
                >
                  <span>Submit RFQ Dossier</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
