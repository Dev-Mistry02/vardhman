import { useMemo, useState } from 'react';
import { ArrowRight, Calculator, Gem, MessageCircle } from 'lucide-react';
import { Reveal } from './Hero.jsx';

export default function AreaEstimator({ onAttachToForm }) {
  const [length, setLength] = useState(14);
  const [width, setWidth] = useState(12);
  const [lengthInput, setLengthInput] = useState('14');
  const [widthInput, setWidthInput] = useState('12');
  const [format, setFormat] = useState('2x4');
  const normalizeDimension = (value) => Math.min(60, Math.max(1, Number(value) || 1));
  const updateLength = (value) => {
    setLengthInput(String(value));
    setLength(normalizeDimension(value));
  };
  const updateWidth = (value) => {
    setWidthInput(String(value));
    setWidth(normalizeDimension(value));
  };
  const estimate = useMemo(() => {
    const l = Math.max(1, Number(length) || 0);
    const w = Math.max(1, Number(width) || 0);
    const netSqFt = l * w;
    const recommendedSqFt = Math.ceil(netSqFt * 1.1);
    if (format === '2x2') return { netSqFt, recommendedSqFt, units: Math.ceil(recommendedSqFt / 16), unitLabel: 'Tile Boxes (2×2 ft • 4 pcs/box)', formatName: '2 × 2 ft Porcelain Tiles' };
    if (format === '2x4') return { netSqFt, recommendedSqFt, units: Math.ceil(recommendedSqFt / 16), unitLabel: 'Tile Boxes (2×4 ft • 2 slabs/box)', formatName: '2 × 4 ft Vitrified Slabs' };
    return { netSqFt, recommendedSqFt, units: Math.max(1, Math.ceil(recommendedSqFt / 32)), unitLabel: 'Large Slabs (4×8 ft • 32 sq.ft/slab)', formatName: '4 × 8 ft Large Architectural Slabs' };
  }, [length, width, format]);
  const whatsappUrl = `https://wa.me/9199987033342?text=${encodeURIComponent(`Hello VARDHMAN Showroom, here are my room measurements:\n• Room Size: ${length} ft × ${width} ft\n• Net Area: ${estimate.netSqFt} sq.ft\n• Recommended Area (+10% Wastage): ${estimate.recommendedSqFt} sq.ft\n• Format: ${estimate.formatName}\n• Estimated Quantity: ${estimate.units} ${estimate.unitLabel}`)}`;
  return (
    <section id="estimator" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      <Reveal><div className="glass-white rounded-[36px] p-6 sm:p-10 relative overflow-hidden"><div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#F5E6D3]/70 blur-3xl" /><div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        <div className="lg:col-span-7 space-y-6"><div><div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#9A7245] mb-2"><Calculator className="w-3.5 h-3.5" />Architectural Area Planner</div><h2 className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900">Tile &amp; Granite <span className="font-serif-accent italic font-medium text-[#9A7245]">Area Estimator</span></h2><p className="text-slate-500 text-sm mt-2">Enter or slide your room dimensions to calculate exact surface area, recommended +10% cutting wastage, and required tile boxes or slabs.</p></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Room Length', value: length, inputValue: lengthInput, setInput: setLengthInput, setter: updateLength, id: 'room-length' },
              { label: 'Room Width', value: width, inputValue: widthInput, setInput: setWidthInput, setter: updateWidth, id: 'room-width' },
            ].map((dimension) => (
              <div key={dimension.id} className="glass-pill-light rounded-3xl p-4 sm:p-5">
                <div className="flex items-center justify-between mb-2.5">
                  <label htmlFor={`${dimension.id}-range`} className="text-xs font-semibold uppercase tracking-wider text-slate-500">{dimension.label}</label>
                  <div className="flex items-center gap-1 font-display font-extrabold text-lg text-slate-900">
                    <input
                      id={`${dimension.id}-input`}
                      type="number"
                      min="1"
                      max="60"
                      step="0.5"
                      value={dimension.inputValue}
                      onChange={(event) => {
                        dimension.setInput(event.target.value);
                        if (event.target.value !== '') dimension.setter(event.target.value);
                      }}
                      onBlur={(event) => {
                        if (event.target.value === '') dimension.setter(1);
                        else dimension.setter(event.target.value);
                      }}
                      className="w-16 rounded-lg border border-slate-200 bg-white px-2 py-1 text-right text-lg text-slate-900 outline-none focus:border-[#B48A5A] focus:ring-2 focus:ring-[#B48A5A]/20"
                      aria-label={`Enter ${dimension.label.toLowerCase()}`}
                    />
                    <span className="text-xs text-[#9A7245]">ft</span>
                  </div>
                </div>
                <input
                  id={`${dimension.id}-range`}
                  type="range"
                  min="1"
                  max="60"
                  step="0.5"
                  value={dimension.value}
                  onChange={(event) => dimension.setter(normalizeDimension(event.target.value))}
                  className="w-full accent-[#9A7245] cursor-pointer"
                  aria-label={`Slide ${dimension.label.toLowerCase()}`}
                />
              </div>
            ))}
          </div>
          <div><span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2.5">Select Tile or Slab Size</span><div className="grid grid-cols-3 gap-2.5">{[{ id: '2x2', title: '2 × 2 ft', sub: 'Porcelain Tile' }, { id: '2x4', title: '2 × 4 ft', sub: 'Vitrified Slab' }, { id: '4x8', title: '4 × 8 ft', sub: 'Large Slab' }].map((option) => <button key={option.id} type="button" onClick={() => setFormat(option.id)} className={`p-3.5 rounded-2xl border text-left ${format === option.id ? 'bg-white border-[#B48A5A]' : 'bg-white/55 border-white/90'}`}><div className="font-display font-bold text-sm sm:text-base text-slate-900">{option.title}</div><div className="text-[11px] text-slate-500">{option.sub}</div></button>)}</div></div>
        </div>
        <div className="lg:col-span-5"><div className="glass-white-strong rounded-[28px] p-6 space-y-5"><div className="flex items-center justify-between border-b border-slate-200/75 pb-4"><span className="text-xs font-bold uppercase tracking-widest text-slate-500">Calculated Quantity</span><span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold">+10% Wastage Included</span></div><div className="grid grid-cols-2 gap-3.5"><div className="p-4 rounded-2xl bg-[#FAFAF9] border border-slate-200/70"><span className="text-[11px] font-semibold text-slate-500 block">Net Floor Area</span><span className="font-display font-extrabold text-2xl text-slate-900">{estimate.netSqFt}</span><span className="text-xs font-semibold text-[#9A7245] ml-1">sq.ft</span></div><div className="p-4 rounded-2xl bg-[#FAFAF9] border border-slate-200/70"><span className="text-[11px] font-semibold text-slate-500 block">With +10% Wastage</span><span className="font-display font-extrabold text-2xl text-slate-900">{estimate.recommendedSqFt}</span><span className="text-xs font-semibold text-[#9A7245] ml-1">sq.ft</span></div></div><div className="p-4 rounded-2xl bg-gradient-to-r from-[#F6EFE6] via-white to-[#EEF2F6] border border-[#E5D5C0] flex items-center justify-between gap-3"><div><span className="text-[11px] font-bold uppercase tracking-wider text-[#9A7245] block">Estimated Requirement</span><span className="font-display font-extrabold text-2xl text-slate-900">{estimate.units} <span className="text-xs font-sans font-semibold text-slate-600">{estimate.unitLabel}</span></span></div><Gem className="w-6 h-6 text-[#B48A5A]" /></div><div className="space-y-2.5"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full py-3.5 px-5 rounded-full bg-emerald-600 text-white font-bold text-sm flex items-center justify-center gap-2"><MessageCircle className="w-4 h-4" />Send on WhatsApp</a><button type="button" onClick={() => onAttachToForm({ length, width, format, estimate })} className="w-full py-3 px-5 rounded-full glass-pill-light text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5">Attach to Showroom Inquiry Form<ArrowRight className="w-3.5 h-3.5 text-[#9A7245]" /></button></div></div></div>
      </div></div></Reveal>
    </section>
  );
}
