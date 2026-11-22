import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Calculator, Copy, Home, LayoutGrid, Phone, ShoppingBag, Sliders } from 'lucide-react';
import { CONTACT_INFO } from '../data.js';

export default function NavbarDock({ activeNav, setActiveNav, shortlistCount, onOpenShortlist, onCopyPhone }) {
  const navItems = useMemo(
    () => [
      { id: 'home', label: 'Home', icon: Home },
      { id: 'collection', label: 'Collection', icon: LayoutGrid },
      // { id: 'studio', label: 'Studio', icon: Sliders },
      { id: 'estimator', label: 'Estimator', icon: Calculator },
      { id: 'contact', label: 'Contact', icon: Phone },
    ],
    []
  );
  const desktopNavRef = useRef(null);
  const desktopBtnRefs = useRef({});
  const [dockPill, setDockPill] = useState({ left: 0, width: 0, opacity: 0 });

  const updateDockPill = useCallback(() => {
    const activeBtn = desktopBtnRefs.current[activeNav];
    if (activeBtn && desktopNavRef.current) {
      setDockPill({ left: activeBtn.offsetLeft, width: activeBtn.offsetWidth, opacity: 1 });
    }
  }, [activeNav]);

  useEffect(() => {
    updateDockPill();
    window.addEventListener('resize', updateDockPill);
    return () => window.removeEventListener('resize', updateDockPill);
  }, [updateDockPill]);

  useEffect(() => {
    const sections = ['home', 'collection', 'estimator', 'contact'];
    const handleScroll = () => {
      const scrollY = window.scrollY + 240;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveNav(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveNav]);

  const scrollToSection = (id) => {
    setActiveNav(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header className="hidden lg:flex fixed top-5 inset-x-0 z-40 justify-center px-6 pointer-events-none">
        <nav aria-label="Primary Navigation" className="pointer-events-auto ios-dock rounded-full p-2 pl-3 pr-2.5 flex items-center gap-3 xl:gap-5 max-w-[1140px]">
          <button type="button" onClick={() => scrollToSection('home')} className="flex items-center gap-2.5 pr-2 group cursor-pointer shrink-0">
              {/* <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#F6EFE6] via-white to-[#EAE2D6] border border-[#D4B896]/60 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                <span className="font-display font-extrabold text-sm text-[#9A7245]">V</span>
              </div> */}
            <div className="text-left leading-none">
              <span className="block font-display font-extrabold tracking-[0.18em] text-sm text-slate-900">{CONTACT_INFO.brand}</span>
              <span className="block text-[9px] uppercase tracking-[0.16em] text-[#9A7245] font-semibold mt-0.5">Ceramic &amp; Granite</span>
            </div>
          </button>
          <div className="h-6 w-px bg-slate-200/80 shrink-0" />
          <div ref={desktopNavRef} className="relative flex items-center gap-0.5 p-1 rounded-full bg-slate-100/75 border border-white/90">
            <div className="absolute top-1 bottom-1 rounded-full bg-white shadow-[0_3px_12px_rgba(15,23,42,0.09)] border border-slate-200/60 transition-all duration-300 ease-out pointer-events-none" style={dockPill} />
            {navItems.map((item) => (
              <button key={item.id} ref={(el) => { desktopBtnRefs.current[item.id] = el; }} type="button" onClick={() => scrollToSection(item.id)} className={`relative z-10 px-4 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap ${activeNav === item.id ? 'text-slate-950' : 'text-slate-500 hover:text-slate-800'}`}>
                {item.label}
              </button>
            ))}
          </div>
          <div className="h-6 w-px bg-slate-200/80 shrink-0" />
          <div className="flex items-center gap-2 shrink-0">
            <button type="button" onClick={onOpenShortlist} className="relative rounded-full px-3.5 py-2 bg-white/85 border border-slate-200/75 text-xs font-semibold text-slate-800 flex items-center gap-1.5 shadow-sm" aria-label="Open Shortlist Drawer">
              <ShoppingBag className="w-3.5 h-3.5 text-[#9A7245]" /><span>Shortlist</span>
              {shortlistCount > 0 && <span className="min-w-5 h-5 px-1 rounded-full bg-[#9A7245] text-white text-[10px] font-bold flex items-center justify-center">{shortlistCount}</span>}
            </button>
            <div className="flex items-center rounded-full bg-gradient-to-r from-[#B48A5A] to-[#9A7245] p-1 pl-3.5 shadow-[0_8px_24px_rgba(154,114,69,0.32)]">
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse mr-2" />
              <a href={`tel:${CONTACT_INFO.primaryPhoneRaw}`} className="text-xs font-bold text-white tracking-wide pr-2.5 whitespace-nowrap">{CONTACT_INFO.primaryPhoneDisplay}</a>
              <button type="button" onClick={onCopyPhone} className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center" aria-label="Copy Showroom Number"><Copy className="w-3.5 h-3.5" /></button>
            </div>
          </div>
        </nav>
      </header>

      <header className="lg:hidden fixed top-3 inset-x-3 z-40 flex justify-center pointer-events-none">
        <div className="pointer-events-auto ios-dock rounded-full px-3 py-2 flex items-center justify-between gap-2 w-full max-w-md">
          <button type="button" onClick={() => scrollToSection('home')} className="flex items-center gap-2 pl-1">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F6EFE6] to-white border border-[#D4B896]/60 flex items-center justify-center"><span className="font-display font-extrabold text-xs text-[#9A7245]">V</span></div>
            <div className="text-left leading-none"><span className="block font-display font-extrabold tracking-[0.16em] text-xs text-slate-900">{CONTACT_INFO.brand}</span><span className="block text-[9px] uppercase tracking-wider text-[#9A7245] font-semibold">Ceramic &amp; Granite</span></div>
          </button>
          <div className="flex items-center gap-1.5">
            <button type="button" onClick={onOpenShortlist} className="relative w-9 h-9 rounded-full bg-white border border-slate-200/80 flex items-center justify-center text-slate-700" aria-label="Open Shortlist"><ShoppingBag className="w-4 h-4 text-[#9A7245]" />{shortlistCount > 0 && <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#9A7245] text-white text-[9px] font-bold flex items-center justify-center">{shortlistCount}</span>}</button>
            <a href={`tel:${CONTACT_INFO.primaryPhoneRaw}`} className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-gradient-to-r from-[#B48A5A] to-[#9A7245] text-white text-xs font-bold"><Phone className="w-3.5 h-3.5" />Call</a>
          </div>
        </div>
      </header>

      <nav aria-label="Mobile Navigation Dock" className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-40 ios-dock rounded-full p-1.5 flex items-center gap-1 shadow-[0_14px_45px_rgba(15,23,42,0.14)]">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeNav === item.id;
          return <button key={item.id} type="button" onClick={() => scrollToSection(item.id)} className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-full transition-all duration-300 cursor-pointer ${isActive ? 'bg-white text-slate-950 shadow-[0_4px_14px_rgba(15,23,42,0.1)] border border-slate-200/70' : 'text-slate-500 hover:text-slate-900'}`} aria-label={item.label}><Icon className={`w-4 h-4 ${isActive ? 'text-[#9A7245]' : ''}`} />{isActive && <span className="text-[11px] font-bold tracking-tight whitespace-nowrap">{item.label}</span>}</button>;
        })}
      </nav>
    </>
  );
}
