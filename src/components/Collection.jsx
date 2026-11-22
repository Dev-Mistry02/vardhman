import { useEffect, useMemo, useRef, useState } from 'react';
import { Check, ChevronLeft, ChevronRight, Compass, Eye, Layers, Maximize2, Pause, Play, Plus, Search, X } from 'lucide-react';
import { CATEGORY_LANES } from '../data.js';
import { Reveal, SafeProductImage } from './Hero.jsx';

function CategoryLane({ lane, items, isItemInShortlist, onToggleShortlist, onQuickView }) {
  const scrollerRef = useRef(null);
  const floatPosRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const shouldLoop = items.length >= 2;
  const displayItems = useMemo(() => shouldLoop ? [...items, ...items] : items, [items, shouldLoop]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el || !shouldLoop) return;
    const timer = setTimeout(() => {
      const half = el.scrollWidth / 2;
      if (lane.direction === 'right' && half > 0) { el.scrollLeft = half; floatPosRef.current = half; } else floatPosRef.current = el.scrollLeft;
    }, 60);
    return () => clearTimeout(timer);
  }, [lane.direction, shouldLoop, items.length]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el || !shouldLoop || !isPlaying || isHovered || isTouched) return;
    if (floatPosRef.current === null) floatPosRef.current = el.scrollLeft;
    let rafId;
    const animate = () => {
      const half = el.scrollWidth / 2;
      if (half > 0) {
        if (Math.abs(el.scrollLeft - floatPosRef.current) > 4) floatPosRef.current = el.scrollLeft;
        floatPosRef.current += lane.direction === 'left' ? lane.speed : -lane.speed;
        if (floatPosRef.current >= half) floatPosRef.current -= half;
        else if (floatPosRef.current <= 0) floatPosRef.current += half;
        el.scrollLeft = floatPosRef.current;
      }
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isPlaying, isHovered, isTouched, shouldLoop, lane.direction, lane.speed]);

  const handleArrowScroll = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const half = el.scrollWidth / 2;
    let target = el.scrollLeft + (dir === 'next' ? 330 : -330);
    if (shouldLoop && half > 0) {
      if (target < 0) { el.scrollLeft += half; target = el.scrollLeft - 330; }
      else if (target > half * 1.65) { el.scrollLeft -= half; target = el.scrollLeft + 330; }
    }
    el.scrollTo({ left: target, behavior: 'smooth' });
    floatPosRef.current = target;
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 px-1">
        <div className="space-y-1"><div className="flex items-center gap-2.5 flex-wrap"><h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight">{lane.label}</h3><span className="glass-pill-light rounded-full px-3 py-0.5 text-xs font-semibold text-[#9A7245]">{items.length} Designs</span></div><p className="text-xs sm:text-sm text-slate-500 max-w-2xl">{lane.subtitle}</p></div>
        <div className="flex items-center gap-2 self-start sm:self-auto">
          {shouldLoop && <button type="button" onClick={() => setIsPlaying((value) => !value)} className="glass-pill-light rounded-full px-3.5 py-2 text-xs font-semibold text-slate-700 flex items-center gap-1.5">{isPlaying ? <Pause className="w-3.5 h-3.5 text-[#9A7245]" /> : <Play className="w-3.5 h-3.5 text-emerald-600" />}<span>{isPlaying ? 'Pause' : 'Auto'}</span></button>}
          <button type="button" onClick={() => handleArrowScroll('prev')} className="w-9 h-9 rounded-full glass-pill-light flex items-center justify-center" aria-label={`Scroll ${lane.label} left`}><ChevronLeft className="w-4 h-4" /></button>
          <button type="button" onClick={() => handleArrowScroll('next')} className="w-9 h-9 rounded-full glass-pill-light flex items-center justify-center" aria-label={`Scroll ${lane.label} right`}><ChevronRight className="w-4 h-4" /></button>
        </div>
      </div>
      <div className="relative group/lane" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onTouchStart={() => setIsTouched(true)} onTouchEnd={() => setTimeout(() => setIsTouched(false), 1800)}>
        <div className="pointer-events-none hidden sm:block absolute inset-y-0 left-0 w-16 z-20 bg-gradient-to-r from-[#FAFAF9] via-[#FAFAF9]/80 to-transparent" />
        <div className="pointer-events-none hidden sm:block absolute inset-y-0 right-0 w-16 z-20 bg-gradient-to-l from-[#FAFAF9] via-[#FAFAF9]/80 to-transparent" />
        <div ref={scrollerRef} className="flex gap-5 overflow-x-auto no-scrollbar py-3 px-1 sm:px-4 select-none">
          {displayItems.map((product, index) => {
            const added = isItemInShortlist(product.id);
            return <div key={`${product.id}-${index}`} className="w-[290px] sm:w-[325px] shrink-0"><div className="shiny-grey-card relative rounded-[28px] p-3 h-full flex flex-col group hover:shadow-[0_22px_55px_rgba(15,23,42,0.16)] hover:-translate-y-1 transition-all duration-500">
              <div onClick={() => onQuickView(product)} className="relative h-72 rounded-[22px] overflow-hidden bg-stone-100 cursor-pointer"><SafeProductImage src={product.image} alt={product.name} fallbackIndex={index} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" /><div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-18deg]" /></div>
              <div className="pt-3 flex items-center justify-end">
                <div className="flex items-center gap-1.5 shrink-0">
                  <button type="button" onClick={() => onQuickView(product)} className="p-2 rounded-full glass-pill-light text-slate-600" title="View Specifications" aria-label={`Quick view ${product.name}`}><Eye className="w-4 h-4" /></button>
                  <button type="button" onClick={() => onToggleShortlist(product)} className={`px-3.5 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 ${added ? 'bg-emerald-50 border border-emerald-300 text-emerald-700' : 'bg-gradient-to-r from-[#B48A5A] to-[#9A7245] text-white'}`}>{added ? <><Check className="w-3.5 h-3.5" />Shortlisted</> : <><Plus className="w-3.5 h-3.5" />Shortlist</>}</button>
                </div>
              </div>
            </div></div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default function Collection({ selectedCategoryFilter, setSelectedCategoryFilter, searchQuery, setSearchQuery, isItemInShortlist, onToggleShortlist, onQuickView }) {
  const visibleLanes = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return CATEGORY_LANES.filter((lane) => selectedCategoryFilter === 'all' || lane.id === selectedCategoryFilter).map((lane) => ({ ...lane, filteredItems: lane.items.filter((item) => !q || [item.name, item.category, item.finish, item.dimensions, item.description].some((value) => value.toLowerCase().includes(q))) })).filter((lane) => lane.filteredItems.length > 0);
  }, [selectedCategoryFilter, searchQuery]);
  return (
    <section id="collection" className="relative z-10 py-20 sm:py-28 px-4 sm:px-6 max-w-7xl mx-auto">
      <Reveal><div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8"><div><div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#9A7245] mb-2"><Compass className="w-3.5 h-3.5" />Category Galleries</div><h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight">The Vardhman <span className="font-serif-accent italic font-medium text-[#9A7245]">Collection</span></h2><p className="text-slate-500 text-sm sm:text-base mt-2 max-w-2xl">Explore five dedicated auto-gliding architectural showcases. Hover or touch any lane to pause, inspect specs, or add items to your showroom shortlist.</p></div><div className="relative w-full lg:w-80"><Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" /><input type="text" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Search granite, tiles, basins, WC..." className="w-full glass-white rounded-full pl-11 pr-10 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#B48A5A]/40" />{searchQuery && <button type="button" onClick={() => setSearchQuery('')} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" aria-label="Clear search"><X className="w-4 h-4" /></button>}</div></div></Reveal>
      <div className="mb-12 overflow-x-auto no-scrollbar pb-2"><div className="inline-flex items-center gap-1.5 p-1.5 glass-white rounded-full min-w-max">{[{ id: 'all', label: 'All Categories' }, { id: 'granite', label: 'Granite' }, { id: 'tiles', label: 'Tiles' }, { id: 'basins', label: 'Wash Basins' }, { id: 'toilets', label: 'Toilet Seats' }, { id: 'ceramics', label: 'More Ceramics' }].map((pill) => <button key={pill.id} type="button" onClick={() => setSelectedCategoryFilter(pill.id)} className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap ${selectedCategoryFilter === pill.id ? 'bg-gradient-to-r from-[#B48A5A] to-[#9A7245] text-white' : 'text-slate-600 hover:bg-white/80'}`}>{pill.label}</button>)}</div></div>
      {visibleLanes.length === 0 ? <div className="glass-white rounded-[32px] p-12 text-center space-y-3"><p className="text-slate-700 font-semibold text-lg">No matching ceramic or granite items found for &ldquo;{searchQuery}&rdquo;.</p><button type="button" onClick={() => { setSelectedCategoryFilter('all'); setSearchQuery(''); }} className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#B48A5A] to-[#9A7245] text-white text-sm font-bold">Show All 5 Category Galleries</button></div> : <div className="space-y-14 sm:space-y-16">{visibleLanes.map((lane) => <Reveal key={lane.id}><CategoryLane lane={lane} items={lane.filteredItems} isItemInShortlist={isItemInShortlist} onToggleShortlist={onToggleShortlist} onQuickView={onQuickView} /></Reveal>)}</div>}
    </section>
  );
}
