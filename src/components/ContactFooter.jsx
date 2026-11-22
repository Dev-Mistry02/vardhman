import { useState } from 'react';
import { Award, CheckCircle2, Copy, Droplets, MapPin, Clock, Mail, MessageCircle, Phone, PhoneCall, Send, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data.js';
import { Reveal } from './Hero.jsx';

export default function ContactFooter({ shortlistCount, getWhatsAppUrl, onCopyPhone, onLoadShortlist }) {
  const [formData, setFormData] = useState({ name: '', phone: '', interest: 'Granite Slabs & Designer Tiles', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const submit = (event) => { event.preventDefault(); if (!formData.name.trim() || !formData.phone.trim()) return; setSubmitted(true); };
  return (
    <>
      <section className="relative z-10 py-8 px-4 sm:px-6 max-w-7xl mx-auto"><div className="grid grid-cols-1 md:grid-cols-3 gap-5">{[
        { icon: ShieldCheck, title: 'Direct Quarry & Kiln Standards', desc: 'Hand-selected natural granite blocks and 1280°C high-fired vitreous ceramic sanitaryware.' },
        { icon: Droplets, title: 'Nano Anti-Stain Surface Glaze', desc: 'Hydrophobic glazed wash basins and rimless toilet closets built for effortless daily sheen.' },
        { icon: Award, title: 'Homeowners, Architects & Builders', desc: 'Curated material guidance, bulk availability, and live showroom walkthroughs.' },
      ].map((item) => { const Icon = item.icon; return <Reveal key={item.title}><div className="glass-white rounded-[28px] p-6 flex items-start gap-4 h-full"><div className="w-11 h-11 rounded-2xl bg-[#F6EFE6] border border-[#E6D5BE] flex items-center justify-center shrink-0"><Icon className="w-5 h-5 text-[#9A7245]" /></div><div><h3 className="font-display font-bold text-base text-slate-900">{item.title}</h3><p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">{item.desc}</p></div></div></Reveal>; })}</div></section>
      <section id="contact" className="relative z-10 py-20 sm:py-28 px-4 sm:px-6 max-w-7xl mx-auto">
        <Reveal><div className="text-center max-w-2xl mx-auto mb-12"><div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#9A7245] mb-2"><PhoneCall className="w-3.5 h-3.5" />Direct Showroom Desk</div><h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900">Connect With <span className="font-serif-accent italic font-medium text-[#9A7245]">Vardhman</span></h2><p className="text-slate-500 text-sm sm:text-base mt-3">Call our showroom desk for live slab availability, sample viewing, or personalized ceramic &amp; sanitaryware recommendations.</p></div></Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
          <Reveal className="lg:col-span-5 flex"><div className="glass-white rounded-[34px] p-6 sm:p-8 flex flex-col justify-between w-full space-y-6"><div className="space-y-5"><div className="p-5 rounded-[26px] bg-gradient-to-br from-[#FBF7F2] via-white to-[#F3ECE2] border border-[#E5D4BE]"><div className="flex items-center justify-between mb-2"><span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#9A7245]">Showroom Desk</span><span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700"><span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />Available Now</span></div><a href={`tel:${CONTACT_INFO.primaryPhoneRaw}`} className="block whitespace-nowrap font-display font-extrabold text-lg sm:text-xl lg:text-2xl text-slate-900 hover:text-[#9A7245]">{CONTACT_INFO.primaryPhoneDisplay}</a><div className="flex flex-wrap gap-2.5 mt-4"><a href={`tel:${CONTACT_INFO.primaryPhoneRaw}`} className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#B48A5A] to-[#9A7245] text-white font-bold text-xs sm:text-sm"><Phone className="w-4 h-4" />Call Now</a><button type="button" onClick={onCopyPhone} className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm"><Copy className="w-4 h-4 text-[#9A7245]" />Copy</button></div></div>
          <div className="glass-pill-light rounded-2xl p-4 flex items-center justify-between gap-3"><div><span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">Wholesale &amp; Architect Desk</span><a href={`tel:${CONTACT_INFO.wholesalePhoneRaw}`} className="text-base font-bold text-slate-900">{CONTACT_INFO.wholesalePhoneDisplay}</a></div><div className="flex items-center gap-1.5"><button type="button" onClick={() => onCopyPhone(CONTACT_INFO.wholesalePhoneDisplay)} className="p-2.5 rounded-full bg-white border border-slate-200" title="Copy Wholesale Number"><Copy className="w-4 h-4" /></button><a href={`tel:${CONTACT_INFO.wholesalePhoneRaw}`} className="p-2.5 rounded-full bg-[#F6EFE6] border border-[#E5D4BE] text-[#9A7245]"><Phone className="w-4 h-4" /></a></div></div>
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-sm"><MessageCircle className="w-5 h-5 text-emerald-600" />Chat on WhatsApp{shortlistCount > 0 && <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[11px]">{shortlistCount} items</span>}</a>
          <div className="space-y-3 pt-3 border-t border-slate-200/75 text-sm text-slate-600"><div className="flex items-start gap-3"><MapPin className="w-4 h-4 text-[#9A7245] mt-1" /><span>{CONTACT_INFO.address}</span></div><div className="flex items-start gap-3"><Clock className="w-4 h-4 text-[#9A7245] mt-1" /><div><div className="font-medium text-slate-800">{CONTACT_INFO.timings}</div><div className="text-xs text-slate-500">{CONTACT_INFO.sundayNote}</div></div></div></div></div></div></Reveal>
          <Reveal delay={100} className="lg:col-span-7 flex">
            <div className="glass-white rounded-[34px] p-4 sm:p-5 w-full flex flex-col">
              <div className="flex items-center justify-between gap-3 px-2 pb-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#9A7245]">Visit Our Showroom</span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 mt-1">Find VARDHMAN</h3>
                </div>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Vardhman+Granite+%26+Ceramic,+Chikhli+-+Vansda+Rd,+Anmol+Society,+Thala,+Chikhli,+Gujarat+396521"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#B48A5A] to-[#9A7245] text-white text-xs sm:text-sm font-bold"
                >
                  Get Directions
                </a>
              </div>
              <div className="relative flex-1 min-h-[360px] rounded-[26px] overflow-hidden border border-slate-200/80 bg-slate-100">
                <iframe
                  title="VARDHMAN Showroom Location"
                  src="https://www.google.com/maps?q=Vardhman+Granite+%26+Ceramic,+Chikhli+-+Vansda+Rd,+Anmol+Society,+Thala,+Chikhli,+Gujarat+396521&output=embed"
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="mt-4 px-2 flex items-start gap-3 text-sm text-slate-600">
                <MapPin className="w-4 h-4 text-[#9A7245] mt-1 shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <footer className="relative z-10 border-t border-slate-200/80 bg-white/75 backdrop-blur-2xl py-10 px-4 sm:px-6 pb-28 lg:pb-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div>
            <div className="font-display font-extrabold tracking-[0.2em] text-lg text-slate-900">{CONTACT_INFO.brand}</div>
            <div className="text-xs text-slate-500 mt-1">
              {CONTACT_INFO.tagline}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 text-xs">
            <a href={`tel:${CONTACT_INFO.primaryPhoneRaw}`} className="inline-flex items-center gap-2 text-slate-600 hover:text-[#9A7245]">
              <Phone className="w-3.5 h-3.5 text-[#9A7245]" />
              <span className="font-bold">{CONTACT_INFO.primaryPhoneDisplay}</span>
            </a>
            <a href="mailto:vardhmangranite22@gmail.com" className="inline-flex items-center gap-2 text-slate-600 hover:text-[#9A7245]">
              <Mail className="w-3.5 h-3.5 text-[#9A7245]" />
              <span>vardhmangranite22@gmail.com</span>
            </a>
          </div>
          <div className="text-xs text-slate-400">
            © {new Date().getFullYear()} VARDHMAN Ceramic &amp; Granite
          </div>
        </div>
      </footer>
    </>
  );
}
