import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { Mail, Phone, MapPin, CheckCircle, UploadCloud, ArrowRight, ShieldCheck, Clock, ExternalLink } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [rfqRef, setRfqRef] = useState('');
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    businessEmail: '',
    whatsapp: '',
    country: 'United States',
    productCategory: 'Technical 3L Hard Shells',
    estimatedQty: 1000,
    targetDelivery: '45-60 Days',
    message: '',
  });

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRfqRef(`YHT-${Math.floor(100000 + Math.random() * 900000)}`);
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 bg-[#F2F8FB] text-[#10212E]">
      {/* Header */}
      <section className="bg-[#031827] text-white py-16 border-b border-[#2B5D78]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D94A4A] font-bold">
            Factory Sales & Technical Merchandising
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mt-2">
            Contact & Request Quotation (RFQ)
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mt-2 leading-relaxed">
            Connect directly with our engineering and merchandising division. Submit your garment tech pack, schedule a facility inspection, or request fabric swatch cards.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact & Factory Info */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#2B5D78] font-bold">
                Direct Communication Channels
              </span>
              <h2 className="font-display font-bold text-2xl text-[#10212E] mt-1">
                Headquarters & Export Facility
              </h2>
              <p className="text-xs text-[#5F7180] mt-2 leading-relaxed">
                Located in the high-tech export processing zone with direct customs clearance and direct expressway access to international sea and air freight terminals.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-white border border-[#2B5D78]/20 shadow-sm flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#D94A4A] shrink-0 mt-1" />
                <div className="text-xs">
                  <span className="font-bold text-[#10212E] block text-sm">Factory Physical Address:</span>
                  <p className="text-[#5F7180] mt-1 leading-relaxed">
                    {siteConfig.company.address.street}, {siteConfig.company.address.district}, {siteConfig.company.address.city} - {siteConfig.company.address.postalCode}, {siteConfig.company.address.country}
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#2B5D78]/20 shadow-sm flex items-start gap-4">
                <Mail className="w-5 h-5 text-[#2B5D78] shrink-0 mt-1" />
                <div className="text-xs">
                  <span className="font-bold text-[#10212E] block text-sm">Commercial Inquiries:</span>
                  <a href={`mailto:${siteConfig.company.salesEmail}`} className="text-[#2B5D78] hover:text-[#D94A4A] mt-1 block font-mono font-medium">
                    {siteConfig.company.salesEmail}
                  </a>
                  <a href={`mailto:${siteConfig.company.email}`} className="text-slate-400 hover:text-slate-600 block font-mono mt-0.5">
                    {siteConfig.company.email}
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#2B5D78]/20 shadow-sm flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#2B5D78] shrink-0 mt-1" />
                <div className="text-xs">
                  <span className="font-bold text-[#10212E] block text-sm">Telephone & WhatsApp Direct:</span>
                  <p className="text-[#10212E] mt-1 font-mono font-medium">
                    Phone: {siteConfig.company.phone}
                  </p>
                  <p className="text-emerald-700 font-mono font-medium mt-0.5">
                    WhatsApp: {siteConfig.company.whatsapp} (24/7 Sourcing Desk)
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="p-6 rounded-2xl bg-[#06233A] text-white border border-[#2B5D78]/40 shadow-md space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-300">
                <Clock className="w-4 h-4 text-[#D94A4A]" />
                <span>Operating Hours (GMT +6)</span>
              </div>
              <h4 className="font-display font-bold text-base text-white">
                Factory Floor: Monday – Saturday (08:00 – 19:00)
              </h4>
              <p className="text-xs text-slate-300">
                Commercial Merchandising & RFQ Response Team monitors international buyer inquiries 24/7 across US, European, and Asian time zones.
              </p>
            </div>
          </div>

          {/* Right Column: Full RFQ Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-white border border-[#2B5D78]/20 shadow-xl text-left">
              {submitted ? (
                <div className="text-center py-12 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center">
                    <CheckCircle className="w-9 h-9" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-[#10212E]">
                    RFQ Successfully Dispatched
                  </h3>
                  <p className="text-sm text-[#5F7180] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-[#10212E]">{formData.fullName}</span>. Your dossier has been logged under reference{' '}
                    <span className="font-mono font-bold text-[#D94A4A]">{rfqRef}</span>. Our merchandising lead will contact you within 24 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-lg bg-[#06233A] text-white text-xs font-semibold uppercase tracking-wider"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="font-display font-bold text-xl text-[#10212E]">
                      Submit Technical Apparel Inquiry
                    </h3>
                    <p className="text-xs text-[#5F7180] mt-1">
                      Fill out the details below to receive a formal preliminary cost sheet and lead-time schedule.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#10212E] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. David Sterling"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-[#F2F8FB] border border-[#2B5D78]/20 text-[#10212E] text-xs focus:outline-none focus:border-[#D94A4A]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#10212E] mb-1">
                        Company / Brand Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Northline Apparel Ltd."
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-[#F2F8FB] border border-[#2B5D78]/20 text-[#10212E] text-xs focus:outline-none focus:border-[#D94A4A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#10212E] mb-1">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="d.sterling@northline.com"
                        value={formData.businessEmail}
                        onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-[#F2F8FB] border border-[#2B5D78]/20 text-[#10212E] text-xs focus:outline-none focus:border-[#D94A4A]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#10212E] mb-1">
                        WhatsApp / Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+44 20 7946 0912"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-[#F2F8FB] border border-[#2B5D78]/20 text-[#10212E] text-xs focus:outline-none focus:border-[#D94A4A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#10212E] mb-1">
                        Target Product Category *
                      </label>
                      <select
                        value={formData.productCategory}
                        onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-[#F2F8FB] border border-[#2B5D78]/20 text-[#10212E] text-xs focus:outline-none focus:border-[#D94A4A]"
                      >
                        <option value="Technical 3L Hard Shells">Technical 3L Hard Shells</option>
                        <option value="Hydrophobic Down & Insulated Parkas">Hydrophobic Down & Insulated Parkas</option>
                        <option value="4-Way Stretch Mountain Pants">4-Way Stretch Mountain Pants</option>
                        <option value="Ultralight Packable Windwear">Ultralight Packable Windwear</option>
                        <option value="Merino & Technical Base Layers">Merino & Technical Base Layers</option>
                        <option value="Certified Hi-Vis EN Workwear">Certified Hi-Vis EN Workwear</option>
                        <option value="Custom OEM Silhouette">Custom OEM Silhouette</option>
                      </select>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <label className="text-xs font-medium text-[#10212E]">
                          Target Order Volume (MOQ)
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
                    </div>
                  </div>

                  {/* File Upload Box */}
                  <div>
                    <label className="block text-xs font-medium text-[#10212E] mb-1">
                      Attach Tech Pack / Measurement Chart / CAD Pattern (Optional)
                    </label>
                    <div className="relative border-2 border-dashed border-[#2B5D78]/30 rounded-xl p-4 text-center hover:border-[#D94A4A] transition-colors bg-[#F2F8FB]">
                      <input
                        type="file"
                        onChange={handleFile}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        accept=".pdf,.zip,.ai,.dxf,.png,.jpg,.xlsx"
                      />
                      <div className="flex flex-col items-center justify-center gap-1.5 pointer-events-none">
                        <UploadCloud className="w-6 h-6 text-[#2B5D78]" />
                        {uploadedFile ? (
                          <p className="text-xs text-emerald-600 font-mono font-bold">
                            ✓ Ready to upload: {uploadedFile}
                          </p>
                        ) : (
                          <>
                            <p className="text-xs text-[#10212E] font-medium">
                              Click or drag tech pack to attach
                            </p>
                            <p className="text-[10px] text-[#5F7180] font-mono">
                              PDF, AI, DXF, ZIP (Max 30MB)
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-[#10212E] mb-1">
                      Project Notes / Specific Fabric or Seam Requirements
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify required waterproof rating (e.g. 20,000 mm), target FOB price, target delivery port (e.g. Rotterdam, Hamburg, LA)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#F2F8FB] border border-[#2B5D78]/20 text-[#10212E] text-xs focus:outline-none focus:border-[#D94A4A]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#D94A4A] hover:bg-[#E84D4D] text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#D94A4A]/25 transition-colors cursor-pointer"
                    >
                      <span>Submit Official RFQ Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
