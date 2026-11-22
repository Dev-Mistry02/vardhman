import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Copy, MessageCircle, PhoneCall, Sparkles } from 'lucide-react';
import { CATEGORY_LANES, CONTACT_INFO, FALLBACK_IMAGES } from '../data.js';

export function SafeProductImage({ src, alt, className = '', fallbackIndex = 0 }) {
  const [imgSrc, setImgSrc] = useState(src);
  const [fallbackStep, setFallbackStep] = useState(0);
  useEffect(() => { setImgSrc(src); setFallbackStep(0); }, [src]);
  const handleError = () => {
    if (fallbackStep >= FALLBACK_IMAGES.length) return;
    setImgSrc(FALLBACK_IMAGES[(fallbackIndex + fallbackStep) % FALLBACK_IMAGES.length]);
    setFallbackStep((step) => step + 1);
  };
  return <img src={imgSrc} alt={alt} loading="lazy" onError={handleError} className={className} />;
}

export function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.unobserve(node); }
    }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${className}`}>{children}</div>;
}

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let started = false;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return;
      started = true;
      const startTime = performance.now();
      const tick = (now) => {
        const p = Math.min((now - startTime) / 1200, 1);
        setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.35 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

function PearlTiltCard({ children, className = '', tilt = 7, onClick }) {
  const ref = useRef(null);
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)');
  const [spot, setSpot] = useState({ x: 50, y: 50, opacity: 0 });
  const onMouseMove = (event) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setTransform(`perspective(1000px) rotateX(${(-((y - rect.height / 2) / (rect.height / 2)) * tilt).toFixed(2)}deg) rotateY(${(((x - rect.width / 2) / (rect.width / 2)) * tilt).toFixed(2)}deg) scale3d(1.015,1.015,1.015)`);
    setSpot({ x: (x / rect.width) * 100, y: (y / rect.height) * 100, opacity: 1 });
  };
  return (
    <div ref={ref} onMouseMove={onMouseMove} onMouseLeave={() => { setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'); setSpot((s) => ({ ...s, opacity: 0 })); }} onClick={onClick} style={{ transform }} className={`glass-white relative overflow-hidden transition-transform duration-300 ease-out will-change-transform ${className}`}>
      <div className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10" style={{ opacity: spot.opacity, background: `radial-gradient(320px circle at ${spot.x}% ${spot.y}%, rgba(180,138,90,0.14), rgba(255,255,255,0.45) 45%, transparent 72%)` }} />
      <div className="relative z-20 h-full">{children}</div>
    </div>
  );
}

export default function Hero({ getWhatsAppShortlistUrl, onCopyPhone, onQuickView, onOfferingClick }) {
  const [offeringSlide, setOfferingSlide] = useState(0);
  const [offeringDirection, setOfferingDirection] = useState(1);
  const offeringPointerStart = useRef(null);
  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2400&q=95',
      alt: 'Luxury marble bathroom interior',
    },
    {
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=95',
      alt: 'Modern luxury living room interior',
    },
    {
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=95',
      alt: 'Premium designer kitchen interior',
    },
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=95',
      alt: 'Contemporary architectural residence',
    },
  ];
  const [heroSlide, setHeroSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((current) => (current + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const showPreviousSlide = () => {
    setHeroSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length);
  };
  const showNextSlide = () => {
    setHeroSlide((current) => (current + 1) % heroSlides.length);
  };

  const offerings = [
    { lane: 1, categoryId: 'tiles', title: 'Explore Tiles', image: '/images/tile.png' },
    { lane: 2, categoryId: 'basins', title: 'Explore Bathware', image: '/images/bathware.png' },
    { lane: 0, categoryId: 'granite', title: 'Explore Surfaces', image: '/images/surface.png' },
    { lane: 3, categoryId: 'kota', title: 'Explore kota', image: '/images/kota.png' },
  ];

  const changeOfferingSlide = (nextSlide, direction) => {
    setOfferingDirection(direction);
    setOfferingSlide((nextSlide + offerings.length) % offerings.length);
  };

  const showPreviousOffering = () => {
    changeOfferingSlide(offeringSlide - 1, -1);
  };

  const showNextOffering = () => {
    changeOfferingSlide(offeringSlide + 1, 1);
  };

  const handleOfferingPointerDown = (event) => {
    offeringPointerStart.current = event.clientX;
  };

  const handleOfferingPointerUp = (event) => {
    if (offeringPointerStart.current === null) return;
    const distance = event.clientX - offeringPointerStart.current;
    offeringPointerStart.current = null;
    if (Math.abs(distance) < 45) return;
    if (distance > 0) showPreviousOffering();
    else showNextOffering();
  };

  return (
    <>
      <section id="home" className="relative z-10 px-4 sm:px-6 pt-20 sm:pt-28 pb-10 max-w-[1500px] mx-auto">
        <div className="relative min-h-[620px] sm:min-h-[720px] lg:min-h-[760px] rounded-[28px] sm:rounded-[42px] overflow-hidden bg-slate-900">
          {heroSlides.map((slide, index) => (
            <img
              key={slide.image}
              src={slide.image}
              alt={slide.alt}
              loading={index === 0 ? 'eager' : 'lazy'}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                heroSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.015]'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/45 to-slate-900/5" />
          <div className="absolute right-5 sm:right-8 bottom-5 sm:bottom-8 z-20 flex items-center gap-2">
            <button
              type="button"
              onClick={showPreviousSlide}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/45 bg-white/10 backdrop-blur-xl text-white flex items-center justify-center hover:bg-white/20 transition"
              aria-label="Previous featured room"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={showNextSlide}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/45 bg-white/10 backdrop-blur-xl text-white flex items-center justify-center hover:bg-white/20 transition"
              aria-label="Next featured room"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="absolute right-5 sm:right-8 bottom-[70px] sm:bottom-[78px] z-20 flex items-center gap-1.5">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.alt}
                type="button"
                onClick={() => setHeroSlide(index)}
                className={`h-1.5 rounded-full transition-all ${
                  heroSlide === index ? 'w-8 bg-white' : 'w-1.5 bg-white/50'
                }`}
                aria-label={`Show featured room ${index + 1}`}
              />
            ))}
          </div>
          <div className="relative z-10 h-full min-h-[620px] sm:min-h-[720px] lg:min-h-[760px] px-6 sm:px-12 lg:px-16 py-10 sm:py-14 flex flex-col justify-between">
            {/* <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-full bg-white/90 text-slate-950 flex items-center justify-center font-display font-black text-xl">V</div>
              <button type="button" onClick={onCopyPhone} className="rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-4 py-2.5 text-white text-xs sm:text-sm font-semibold flex items-center gap-2"><Copy className="w-4 h-4" />Contact</button>
            </div> */}
            <div className="max-w-3xl text-white pb-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-md px-4 py-2 text-[11px] sm:text-xs uppercase tracking-[0.18em] mb-5"><Sparkles className="w-3.5 h-3.5" />Architectural surfaces</div>
              <h1 className="font-display text-[44px] sm:text-[68px] lg:text-[88px] leading-[0.94] tracking-[-0.055em] uppercase">Where spaces become <span className="block text-[#D9C2A5]">Timeless</span></h1>
              <p className="mt-6 max-w-xl text-sm sm:text-lg text-white/80 leading-relaxed">Natural granite, designer tiles, bathware and ceramic creations curated for homes and landmark spaces.</p>
              <div className="mt-7 flex items-center gap-2.5">
                <a href={getWhatsAppShortlistUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-4 sm:px-5 py-3 text-sm font-bold text-slate-950 whitespace-nowrap"><MessageCircle className="w-4 h-4" />Explore Collection</a>
                <a href={`tel:${CONTACT_INFO.primaryPhoneRaw}`} className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 backdrop-blur-md px-4 sm:px-5 py-3 text-sm font-bold text-white whitespace-nowrap"><PhoneCall className="w-4 h-4" />{CONTACT_INFO.primaryPhoneDisplay}</a>
              </div>
              <div className="mt-10 grid grid-cols-3 max-w-xl gap-2 sm:gap-5 border-t border-white/20 pt-5">
                {[{ num: 500, suffix: '+', label: 'Designs' }, { num: 120, suffix: '+', label: 'Granite Slabs' }, { num: 15, suffix: '+', label: 'Years' }].map((stat) => <div key={stat.label}><div className="font-display text-2xl sm:text-4xl font-bold"><AnimatedCounter target={stat.num} suffix={stat.suffix} /></div><div className="mt-1 text-[10px] sm:text-xs uppercase tracking-wider text-white/65">{stat.label}</div></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 sm:px-6 pt-16 pb-8 max-w-[1500px] mx-auto">
        <div className="mb-8">
          <h2 className="font-display text-4xl sm:text-6xl tracking-[-0.04em] text-slate-950">Our Offerings</h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-lg text-slate-600">Discover enduring surfaces and inspired spaces with our range of tiles, bathware and building solutions.</p>
        </div>
        <div className="relative overflow-hidden rounded-[34px] bg-[#F5F3EF] px-3 sm:px-8 py-10 sm:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(180,138,90,0.12)_0%,_transparent_58%)]" />
          <div
            className={`relative h-[360px] sm:h-[470px] flex items-center justify-center overflow-hidden offer-card-stage offer-card-slide-${offeringDirection === 1 ? 'next' : 'previous'} touch-pan-y`}
            onPointerDown={handleOfferingPointerDown}
            onPointerUp={handleOfferingPointerUp}
            onPointerCancel={() => { offeringPointerStart.current = null; }}
          >
            {offerings.map((offering, index) => {
              let offset = (index - offeringSlide + offerings.length) % offerings.length;
              if (offset > offerings.length / 2) offset -= offerings.length;
              const isActive = offset === 0;
              const isLeft = offset === -1 || (offerings.length === 4 && offset === -1);
              const isRight = offset === 1;
              const isVisible = isActive || isLeft || isRight;
              const positionClass = isActive
                ? 'offer-card-active z-[30] h-[340px] sm:h-[420px] w-[58vw] max-w-[380px] scale-100 opacity-100'
                : isLeft
                  ? 'offer-card-left z-[10] h-[300px] sm:h-[360px] w-[31vw] max-w-[270px] scale-[0.82] sm:scale-[0.92] opacity-55'
                  : isRight
                    ? 'offer-card-right z-[10] h-[300px] sm:h-[360px] w-[31vw] max-w-[270px] scale-[0.82] sm:scale-[0.92] opacity-55'
                    : 'offer-card-hidden z-0 h-[300px] w-[31vw] max-w-[270px] scale-75 opacity-0';
              return (
                <button
                  key={offering.categoryId}
                  type="button"
                  onClick={() => isActive ? onOfferingClick(offering.categoryId) : changeOfferingSlide(index, index > offeringSlide ? 1 : -1)}
                  className={`absolute overflow-hidden rounded-[18px] border border-white/70 text-left transition-all duration-700 ease-[cubic-bezier(.22,.61,.36,1)] ${
                    isActive
                      ? 'shadow-[0_28px_70px_rgba(15,23,42,0.22)]'
                      : 'shadow-[0_14px_38px_rgba(15,23,42,0.10)]'
                  } ${positionClass}`}
                  style={{ transformOrigin: 'center', pointerEvents: isVisible ? 'auto' : 'none' }}
                >
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
                  <SafeProductImage
                    src={offering.image}
                    alt={offering.title}
                    fallbackIndex={index}
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${isActive ? 'scale-100 offer-card-image-active' : 'scale-[1.08]'}`}
                  />
                  <div className={`absolute inset-0 transition-opacity duration-700 ${isActive ? 'bg-gradient-to-t from-slate-950/75 via-transparent to-transparent opacity-100' : 'bg-slate-950/25 opacity-100'}`} />
                  <h3 className={`absolute left-4 right-4 bottom-4 font-serif-accent italic text-white transition-all duration-700 ${isActive ? 'text-xl sm:text-3xl' : 'text-lg sm:text-xl'}`}>{offering.title}</h3>
                </button>
              );
            })}
          </div>
          <div className="relative text-center text-slate-900">
            <p className="text-[11px] sm:text-xs text-slate-500">Explore VARDHMAN</p>
            <h3 key={offerings[offeringSlide].categoryId} className={`mt-2 font-serif-accent italic text-2xl sm:text-3xl offer-card-title-${offeringDirection === 1 ? 'next' : 'previous'}`}>{offerings[offeringSlide].title}</h3>
            <p className="mt-2 max-w-md mx-auto text-xs sm:text-sm leading-relaxed text-slate-500">Discover refined surfaces and architectural solutions for every modern space.</p>
            <div className="mt-5 flex items-center justify-center gap-2">
              <span className="text-[10px] text-slate-500 mr-1">{String(offeringSlide + 1).padStart(2, '0')} / {String(offerings.length).padStart(2, '0')}</span>
              <button type="button" onClick={showPreviousOffering} className="w-10 h-10 rounded-full border border-slate-300/80 bg-white/70 text-slate-900 flex items-center justify-center transition hover:scale-105" aria-label="Previous offering"><ArrowLeft className="w-4 h-4" /></button>
              <button type="button" onClick={showNextOffering} className="w-10 h-10 rounded-full border border-slate-300/80 bg-white/70 text-slate-900 flex items-center justify-center transition hover:scale-105" aria-label="Next offering"><ArrowRight className="w-4 h-4" /></button>
              <button type="button" onClick={() => onOfferingClick(offerings[offeringSlide].categoryId)} className="ml-2 px-5 py-2.5 rounded-full bg-[#D8C1A0] text-slate-950 text-xs sm:text-sm font-bold">Explore now</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
