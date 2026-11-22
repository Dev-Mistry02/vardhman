import { useCallback, useEffect, useMemo, useState } from 'react';
import { Check, MessageCircle, Phone } from 'lucide-react';
import NavbarDock from './components/NavbarDock.jsx';
import Hero from './components/Hero.jsx';
import Collection from './components/Collection.jsx';
// import MaterialStudio from './components/MaterialStudio.jsx';
import AreaEstimator from './components/AreaEstimator.jsx';
import ProductModal from './components/ProductModal.jsx';
import ShortlistDrawer from './components/ShortlistDrawer.jsx';
import ContactFooter from './components/ContactFooter.jsx';
import { CONTACT_INFO } from './data.js';

export default function App() {
  const [activeNav, setActiveNav] = useState('home');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [shortlist, setShortlist] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = useCallback((title, subtitle = '') => setToast({ id: Date.now(), title, subtitle }), []);
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 3200);
    return () => clearTimeout(timer);
  }, [toast]);

  const copyText = (text, title, subtitle) => {
    try { if (navigator.clipboard?.writeText) navigator.clipboard.writeText(text); } catch {}
    showToast(title, subtitle);
  };
  const handleCopyPhone = (phone = CONTACT_INFO.primaryPhoneDisplay) => copyText(phone, 'Contact Number Copied', `${phone} — VARDHMAN Showroom`);
  const isItemInShortlist = (id) => shortlist.some((item) => item.id === id);
  const toggleShortlist = (item) => {
    setShortlist((previous) => {
      const exists = previous.some((entry) => entry.id === item.id);
      showToast(exists ? 'Removed from Shortlist' : 'Added to Shortlist', item.name);
      return exists ? previous.filter((entry) => entry.id !== item.id) : [...previous, item];
    });
  };
  const saveStudioPairing = (granite, finish, light) => {
    const id = `studio-${granite.id}-${finish.id}`;
    if (isItemInShortlist(id)) { showToast('Already Shortlisted', 'Open Shortlist Drawer to send inquiry.'); return; }
    setShortlist((previous) => [...previous, { id, name: `Studio Pairing: ${granite.name} × ${finish.name}`, category: 'Material Studio', finish: `${light.name} Light`, dimensions: granite.tag, image: finish.image }]);
    showToast('Studio Pairing Shortlisted', `${granite.name} + ${finish.name}`);
  };
  const getWhatsAppShortlistUrl = () => {
    const body = shortlist.length
      ? `Hello VARDHMAN Showroom, I would like catalog details and availability for my shortlisted items:\n\n${shortlist.map((item, index) => `${index + 1}. ${item.name} (${item.finish || item.category} • ${item.dimensions || ''})`).join('\n')}\n\nPlease share more information.`
      : 'Hello VARDHMAN Showroom, I would like to inquire about your Ceramic, Granite, Tiles, Wash Basins & Sanitaryware collection.';
    return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(body)}`;
  };
  const handleCopyShortlist = () => copyText(shortlist.map((item, index) => `${index + 1}. ${item.name} — ${item.finish || item.category}`).join('\n'), 'Shortlist Copied', `${shortlist.length} architectural items copied`);
  const handleLoadShortlist = () => {
    setDrawerOpen(false);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    showToast('Shortlist Attached', 'Complete your contact details below.');
  };
  const handleAttachEstimate = ({ length, width, format, estimate }) => {
    setActiveNav('contact');
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    showToast('Measurements Attached', `${length} ft × ${width} ft | ${estimate.recommendedSqFt} sq.ft | ${estimate.formatName}`);
  };
  const handleOfferingClick = (categoryId) => {
    setSelectedCategoryFilter(categoryId);
    setActiveNav('collection');
    document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-slate-900 selection:bg-[#B48A5A]/20 selection:text-slate-950 overflow-x-hidden relative font-sans">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#FAFAF9]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#FFFFFF_0%,#FAFAF9_55%,#F4F4F5_100%)]" />
        <div className="absolute inset-0 bg-pearl-grid opacity-70" />
        <div className="animate-blob-1 absolute -top-28 -left-24 w-[520px] h-[520px] rounded-full blur-[110px] opacity-80" style={{ background: 'radial-gradient(circle, #F5E6D3 0%, #F5F0EB 55%, transparent 78%)' }} />
        <div className="animate-blob-2 absolute top-[28%] -right-28 w-[540px] h-[540px] rounded-full blur-[115px] opacity-85" style={{ background: 'radial-gradient(circle, #E2EEF9 0%, #EEF2F6 55%, transparent 78%)' }} />
        <div className="animate-blob-3 absolute bottom-[-100px] left-[22%] w-[520px] h-[520px] rounded-full blur-[115px] opacity-75" style={{ background: 'radial-gradient(circle, #F3ECE2 0%, #EAF2EF 55%, transparent 78%)' }} />
      </div>

      <NavbarDock activeNav={activeNav} setActiveNav={setActiveNav} shortlistCount={shortlist.length} onOpenShortlist={() => setDrawerOpen(true)} onCopyPhone={() => handleCopyPhone()} />
      <Hero getWhatsAppShortlistUrl={getWhatsAppShortlistUrl} onCopyPhone={() => handleCopyPhone()} onQuickView={(product) => setQuickViewProduct(product)} onOfferingClick={handleOfferingClick} />

      <div className="relative z-10 border-y border-slate-200/70 bg-white/65 backdrop-blur-xl py-4 overflow-hidden">
        <div className="animate-ticker flex items-center gap-8">{[0, 1].map((dup) => <div key={dup} className="flex items-center gap-8 shrink-0">{['NATURAL GRANITE SLABS', 'LARGE-FORMAT VITRIFIED TILES', 'SCULPTED WASH BASINS', 'RIMLESS WALL-HUNG TOILETS', 'ARTISAN CERAMIC CREATIONS', `SHOWROOM HOTLINE: ${CONTACT_INFO.primaryPhoneDisplay}`].map((label, index) => <div key={`${dup}-${index}`} className="flex items-center gap-8"><span className="font-display font-bold tracking-[0.22em] text-xs sm:text-sm text-slate-700 whitespace-nowrap">{label}</span><span className="w-1.5 h-1.5 rotate-45 bg-[#B48A5A]" /></div>)}</div>)}</div>
      </div>

      <Collection selectedCategoryFilter={selectedCategoryFilter} setSelectedCategoryFilter={setSelectedCategoryFilter} searchQuery={searchQuery} setSearchQuery={setSearchQuery} isItemInShortlist={isItemInShortlist} onToggleShortlist={toggleShortlist} onQuickView={(product) => setQuickViewProduct(product)} />
      {/* <MaterialStudio onSavePairing={saveStudioPairing} /> */}
      <AreaEstimator onAttachToForm={handleAttachEstimate} />
      <ContactFooter shortlistCount={shortlist.length} getWhatsAppUrl={getWhatsAppShortlistUrl} onCopyPhone={handleCopyPhone} onLoadShortlist={handleLoadShortlist} />

      <div className="fixed bottom-24 lg:bottom-5 right-4 lg:right-5 z-30 flex flex-col items-center gap-3">
        <a
          href={getWhatsAppShortlistUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-[0_10px_28px_rgba(15,23,42,0.16)]"
          title="WhatsApp Vardhman Showroom"
          aria-label="WhatsApp Vardhman Showroom"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
        <a
          href={`tel:${CONTACT_INFO.primaryPhoneRaw}`}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-[#B48A5A] to-[#9A7245] text-white flex items-center justify-center shadow-[0_10px_28px_rgba(15,23,42,0.16)]"
          aria-label="Call Vardhman Showroom"
        >
          <Phone className="w-4 h-4" />
        </a>
      </div>

      <ProductModal product={quickViewProduct} isItemInShortlist={isItemInShortlist} onToggleShortlist={toggleShortlist} onClose={() => setQuickViewProduct(null)} />
      <ShortlistDrawer open={drawerOpen} shortlist={shortlist} onClose={() => setDrawerOpen(false)} onToggleShortlist={toggleShortlist} onLoadForm={handleLoadShortlist} onCopy={handleCopyShortlist} getWhatsAppUrl={getWhatsAppShortlistUrl} />

      {toast && <div className="fixed top-20 lg:top-24 right-4 sm:right-6 z-50 max-w-xs w-full ios-dock rounded-2xl p-3.5 flex items-start gap-3"><div className="w-8 h-8 rounded-full bg-[#F6EFE6] border border-[#E5D4BE] flex items-center justify-center shrink-0"><Check className="w-4 h-4 text-[#9A7245]" /></div><div className="min-w-0"><div className="text-sm font-bold text-slate-900">{toast.title}</div>{toast.subtitle && <div className="text-xs text-slate-500 mt-0.5 truncate">{toast.subtitle}</div>}</div></div>}
    </div>
  );
}
