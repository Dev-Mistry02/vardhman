import { useState } from 'react';
import { Check, MessageCircle, Phone, Plus, X } from 'lucide-react';
import { CONTACT_INFO } from '../data.js';
import { SafeProductImage } from './Hero.jsx';

export default function ProductModal({ product, isItemInShortlist, onToggleShortlist, onClose }) {
  const [variant, setVariant] = useState(0);
  if (!product) return null;
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello VARDHMAN Showroom, I am interested in "${product.name}" (${product.category})\n• Preferred Finish: ${product.variants[variant]}\n• Dimensions: ${product.dimensions}\n\nPlease share availability & showroom details.`)}`;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/25 backdrop-blur-md" onClick={onClose}><div className="glass-white-strong rounded-[34px] max-w-4xl w-full p-4 sm:p-5 relative max-h-[92vh] overflow-y-auto" onClick={(event) => event.stopPropagation()}>
      <button type="button" onClick={onClose} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 border border-slate-200 flex items-center justify-center text-slate-600 z-20" aria-label="Close Quick View"><X className="w-5 h-5" /></button>
      <div className="grid grid-cols-1 gap-4">
        <div className="relative h-[55vh] min-h-[420px] max-h-[620px] rounded-[26px] overflow-hidden bg-stone-100 border border-white">
          <SafeProductImage src={product.image} alt={product.name} className="w-full h-full object-cover" />
          <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/85 backdrop-blur-xl text-[11px] font-bold text-slate-800">{product.availability}</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-2.5">
          <button type="button" onClick={() => onToggleShortlist(product)} className={`py-3.5 px-5 rounded-full text-sm font-bold flex items-center justify-center gap-2 ${isItemInShortlist(product.id) ? 'bg-emerald-50 border border-emerald-300 text-emerald-700' : 'bg-gradient-to-r from-[#B48A5A] to-[#9A7245] text-white'}`}>{isItemInShortlist(product.id) ? <><Check className="w-4 h-4" />Shortlisted</> : <><Plus className="w-4 h-4" />Add to Shortlist</>}</button>
          <a href={`tel:${CONTACT_INFO.primaryPhoneRaw}`} className="py-3.5 px-6 rounded-full glass-pill-light text-slate-800 text-sm font-bold flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-[#9A7245]" />Call</a>
        </div>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full py-3.5 px-5 rounded-full bg-emerald-600 text-white text-sm font-bold flex items-center justify-center gap-2"><MessageCircle className="w-4 h-4" />Inquire on WhatsApp</a>
      </div>
    </div></div>
  );
}
