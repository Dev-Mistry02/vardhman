import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import {
  Phone,
  PhoneCall,
  Copy,
  Check,
  Sparkles,
  Layers,
  Search,
  X,
  Plus,
  ArrowRight,
  ArrowUpRight,
  Calculator,
  MapPin,
  Clock,
  MessageCircle,
  ShoppingBag,
  Sun,
  Lamp,
  Eye,
  Send,
  ShieldCheck,
  Award,
  Trash2,
  Droplets,
  Gem,
  LayoutGrid,
  CheckCircle2,
  Sliders,
  Home,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Compass,
  Maximize2,
} from 'lucide-react';

// ============================================================================
// BUSINESS INFORMATION & VERIFIED FALLBACK PHOTOGRAPHY
// ============================================================================

export const CONTACT_INFO = {
  brand: 'VARDHMAN',
  tagline: 'Ceramic • Granite • Sanitaryware',
  primaryPhoneDisplay: '+91 99987 03342',
  primaryPhoneRaw: '+9199987033342',
  wholesalePhoneDisplay: '+91 99987 03342',
  wholesalePhoneRaw: '+9199987033342',
  whatsappNumber: '9199987033342',
  address: 'Vardhman Granite & Ceramic, Chikhli - Vansda Rd, Anmol Society, Thala, Chikhli, Gujarat 396521',
  timings: 'Mon – Sat: 9:30 AM – 8:00 PM',
  sundayNote: 'Sunday: Private Showroom Appointments',
};

export const FALLBACK_IMAGES = [
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1547052178-7f2c5a20c332?auto=format&fit=crop&w=900&q=80',
];

// ============================================================================
// CATEGORY-WISE CURATED PRODUCT CATALOG (25 PRODUCTS, ZERO PRICES)
// ============================================================================

export const CATEGORY_LANES = [
  {
    id: 'granite',
    label: 'Granite Slabs',
    shortLabel: 'Granite',
    subtitle: 'Hand-selected natural stone slabs with bookmatch polish & architectural thickness',
    direction: 'left',
    speed: 0.55,
    accent: 'from-amber-100/90 to-stone-100/90',
    items: [
      {
        id: 'gr-1',
        name: 'Bianco Carrara White Granite',
        category: 'Granite Slabs',
        categoryId: 'granite',
        finish: 'Mirror Crystal Polish',
        dimensions: '10 × 6 ft • 18mm Slab',
        availability: 'In Showroom',
        grade: 'Export Quarry Grade A',
        image: '/images/granite/Granite1.jpg',
        description:
          'Luminous pearl-white natural stone slab laced with delicate silver-dove mineral veining. Engineered for seamless kitchen islands and bright sculptural lobbies.',
        specs: {
          Size: '10 × 6 ft Natural Slab (18mm / 20mm)',
          Finish: 'High-Gloss Mirror / Satin Honed',
          Material: '100% Natural Crystalline Granite',
          Application: 'Kitchen Islands, Countertops, Feature Walls',
        },
        variants: ['Mirror Polish', 'Satin Honed', 'Leather Finish'],
      },
      {
        id: 'gr-2',
        name: 'Sierra Charcoal Natural Granite',
        category: 'Granite Slabs',
        categoryId: 'granite',
        finish: 'Honed Architectural Matte',
        dimensions: '9.5 × 5.5 ft • 20mm Slab',
        availability: 'Ready Stock',
        grade: 'South Quarry Reserve',
        image: '/images/granite/Granite2.jpg',
        description:
          'Dense igneous granite featuring organic mineral quartz flecks and raw tectonic texture. Delivers extraordinary thermal shock resistance and enduring beauty.',
        specs: {
          Size: '9.5 × 5.5 ft Slab (20mm)',
          Finish: 'Architectural Honed / Flamed',
          Material: 'High-Density Natural Granite',
          Application: 'Staircases, Counters, Facade Cladding',
        },
        variants: ['Honed Matte', 'Mirror Gloss', 'Flamed Grip'],
      },
      {
        id: 'gr-3',
        name: 'Calacatta Pearl Island Slab',
        category: 'Granite Slabs',
        categoryId: 'granite',
        finish: 'Silk Bookmatch Polish',
        dimensions: '10 × 6 ft • 18mm Slab',
        availability: 'In Showroom',
        grade: 'Signature Selection',
        image: '/images/granite/Granite3.jpg',
        description:
          'Refined bright stone surface tailored for minimalist gourmet kitchens and monolithic waterfall counters, offering effortless stain and heat resistance.',
        specs: {
          Size: '10 × 6 ft Bookmatch Slab',
          Finish: 'Silk Mirror / Nano Sealed',
          Material: 'Premium Composite Stone & Granite',
          Application: 'Kitchen Countertops, Dining Islands, Bars',
        },
        variants: ['Silk Mirror', 'Nano Satin', 'Beveled Edge'],
      },
      {
        id: 'gr-4',
        name: 'Alabaster Sand Countertop Stone',
        category: 'Granite Slabs',
        categoryId: 'granite',
        finish: 'Velvet Lappato',
        dimensions: '9 × 5 ft • 18mm Slab',
        availability: 'Ready Stock',
        grade: 'Architectural Grade',
        image: '/images/granite/Granite4.jpg',
        description:
          'Warm ivory and soft travertine-toned natural granite slab that elevates sun-drenched kitchens and serene spa-inspired vanity tops.',
        specs: {
          Size: '9 × 5 ft Slab (18mm)',
          Finish: 'Velvet Lappato / Polished',
          Material: 'Natural Quarry Granite',
          Application: 'Vanity Tops, Kitchens, Wall Backsplashes',
        },
        variants: ['Velvet Lappato', 'High Gloss', 'Brushed'],
      },
      {
        id: 'gr-5',
        name: 'Arctic Frost Quartz-Granite Slab',
        category: 'Granite Slabs',
        categoryId: 'granite',
        finish: 'Ultra-Bright Polish',
        dimensions: '10 × 5.5 ft • 20mm Slab',
        availability: 'Custom Cut Available',
        grade: 'Luxury Reserve',
        image: '/images/granite/granite5.jpg',
        description:
          'Crisp alabaster granite with translucent quartz micro-crystals that bounce natural daylight across contemporary open-plan interiors.',
        specs: {
          Size: '10 × 5.5 ft Slab (20mm)',
          Finish: 'Ultra-Bright Crystal Polish',
          Material: 'Crystalline White Granite',
          Application: 'Modular Kitchens, Reception Desks, Baths',
        },
        variants: ['Crystal Polish', 'Satin Matte', 'Soft Leather'],
      },
    ],
  },
  {
    id: 'tiles',
    label: 'Designer Tiles',
    shortLabel: 'Tiles',
    subtitle: 'Large-format vitrified slabs, tactile carving porcelain & seamless architectural flooring',
    direction: 'right',
    speed: 0.5,
    accent: 'from-sky-100/80 to-slate-100/90',
    items: [
      {
        id: 'tl-1',
        name: 'Statuario Pearl Vitrified Slab',
        category: 'Designer Tiles',
        categoryId: 'tiles',
        finish: 'High-Gloss Nano PGVT',
        dimensions: '1200 × 2400 mm (4×8 ft)',
        availability: 'In Showroom',
        grade: 'PEI 4 • <0.05% Absorption',
        image: '/images/tiles/tile1.webp',
        description:
          'Expansive Italian-inspired porcelain slab with razor-sharp rectified edges for near-invisible grout joints and luminous mirror reflection.',
        specs: {
          Size: '600×1200 mm / 1200×2400 mm',
          Finish: 'Nano Mirror Glaze / Bookmatch',
          Material: 'Glazed Vitrified Porcelain (PGVT)',
          Application: 'Living Rooms, Double-Height Foyers, Showrooms',
        },
        variants: ['Mirror Glaze', 'Gold Veined', 'Silk Satin'],
      },
      {
        id: 'tl-2',
        name: 'Carving Travertine Matte Tile',
        category: 'Designer Tiles',
        categoryId: 'tiles',
        finish: 'Tactile Micro-Carving',
        dimensions: '800 × 1600 mm',
        availability: 'Ready Stock',
        grade: 'R10 Anti-Skid Rated',
        image: '/images/tiles/tile2.webp',
        description:
          'Delicately recessed vein-carving porcelain tiles that shimmer subtly under grazing sunlight while preserving calm architectural minimalism.',
        specs: {
          Size: '600×1200 mm / 800×1600 mm',
          Finish: 'Carving Matte / Soft Satin',
          Material: 'Full-Vitrified Porcelain Body',
          Application: 'Bedrooms, Spa Baths, Accent Feature Walls',
        },
        variants: ['Carving Matte', 'Soft Satin', 'Warm Limestone'],
      },
      {
        id: 'tl-3',
        name: 'Monolith Full-Body Porcelain Tile',
        category: 'Designer Tiles',
        categoryId: 'tiles',
        finish: 'Architectural Granular Matte',
        dimensions: '600 × 1200 mm (2×4 ft)',
        availability: 'Bulk Stock Ready',
        grade: 'Heavy Commercial 12mm',
        image: '/images/tiles/tile3.webp',
        description:
          'Uniform mineral composition throughout the full tile thickness for exceptional abrasion resilience in luxury villas and commercial galleries.',
        specs: {
          Size: '600×600 mm / 600×1200 mm',
          Finish: 'Full Body Matte / Anti-Skid',
          Material: '12mm Heavy-Duty Full Body Vitrified',
          Application: 'Terraces, Courtyards, Commercial Lobbies',
        },
        variants: ['Warm Stone', 'Mist Grey', 'Sandstone Grip'],
      },
      {
        id: 'tl-4',
        name: 'Nordic Limestone Floor Series',
        category: 'Designer Tiles',
        categoryId: 'tiles',
        finish: 'Satin Velvet Glaze',
        dimensions: '600 × 1200 mm (2×4 ft)',
        availability: 'In Showroom',
        grade: 'Rectified Seamless Edge',
        image: '/images/tiles/tile4.webp',
        description:
          'Airy chalk-white and pale limestone floor tiles engineered to visually expand contemporary living areas with serene gallery continuity.',
        specs: {
          Size: '600×1200 mm / 800×800 mm',
          Finish: 'Satin Velvet / Natural Honed',
          Material: 'High-Density Porcelain',
          Application: 'Open-Plan Homes, Lounges, Galleries',
        },
        variants: ['Chalk White', 'Soft Beige', 'Ice Grey'],
      },
      {
        id: 'tl-5',
        name: 'Artisan Terracotta & Glaze Wall Tile',
        category: 'Designer Tiles',
        categoryId: 'tiles',
        finish: 'Handcrafted Glazed Relief',
        dimensions: '300 × 600 mm (1×2 ft)',
        availability: 'Designer Favorite',
        grade: 'Thermal & UV Resistant',
        image: '/images/tiles/tile5.webp',
        description:
          'Warm architectural elevation and patio tiles featuring tactile glaze variations that celebrate natural light and Mediterranean craftsmanship.',
        specs: {
          Size: '300×600 mm / Custom Elevation',
          Finish: 'Natural Matte / Glazed Ceramic',
          Material: 'Kiln-Fired Architectural Ceramic',
          Application: 'Facades, Courtyards, Feature Walls',
        },
        variants: ['Natural Clay', 'Alabaster Glaze', 'Sand Fluted'],
      },
    ],
  },
  {
    id: 'basins',
    label: 'Wash Basins',
    shortLabel: 'Wash Basins',
    subtitle: 'Ultra-thin rim vitreous china vessel basins, sculpted vanity sinks & powder-room centerpieces',
    direction: 'left',
    speed: 0.52,
    accent: 'from-stone-100/90 to-amber-50/90',
    items: [
      {
        id: 'wb-1',
        name: 'Aura Thin-Rim Vessel Basin',
        category: 'Wash Basins',
        categoryId: 'basins',
        finish: '5mm Ultra-Slim Gloss Glaze',
        dimensions: '600 × 400 × 145 mm',
        availability: 'In Showroom',
        grade: '1280°C Vitreous China',
        image: '/images/Washbasins/basin1.jpg',
        description:
          'Precision-cast countertop ceramic basin with razor-thin architectural walls and nano anti-bacterial glaze that stays effortlessly luminous.',
        specs: {
          Size: '600 × 400 × 145 mm',
          Finish: 'Alpine White Gloss / Matte Ivory',
          Material: 'High-Fired Vitreous Porcelain',
          Application: 'Granite & Wood Vanity Countertops',
        },
        variants: ['Alpine White', 'Matte Ivory', 'Champagne Rim'],
      },
      {
        id: 'wb-2',
        name: 'Solstice Integrated Vanity Basin',
        category: 'Wash Basins',
        categoryId: 'basins',
        finish: 'Silky Anti-Stain Porcelain',
        dimensions: '750 × 460 × 160 mm',
        availability: 'Ready Stock',
        grade: 'Hydrophobic Nano Coat',
        image: '/images/Washbasins/basin2.jpg',
        description:
          'Generously proportioned architectural vanity sink paired for backlit mirrors and brass wall-mounted mixers in serene master suites.',
        specs: {
          Size: '750 × 460 × 160 mm',
          Finish: 'Gloss Porcelain / Silk Matte',
          Material: 'Grade-A Sanitary Ceramic',
          Application: 'Master Bathrooms, Boutique Hotels',
        },
        variants: ['Gloss Porcelain', 'Silk Matte White', 'Pearl Sand'],
      },
      {
        id: 'wb-3',
        name: 'Carrara Suite Sculpted Basin',
        category: 'Wash Basins',
        categoryId: 'basins',
        finish: 'Mirror Ceramic Luster',
        dimensions: '540 × 380 × 135 mm',
        availability: 'In Showroom',
        grade: 'Non-Yellowing Glaze',
        image: '/images/Washbasins/basin3.jpg',
        description:
          'Softly contoured oval wash basin crafted to pair effortlessly with marble-veined walls and brushed gold architectural hardware.',
        specs: {
          Size: '540 × 380 × 135 mm',
          Finish: 'High-Luster Ceramic Glaze',
          Material: 'Vitreous Sanitaryware',
          Application: 'Powder Rooms, Luxury Suites',
        },
        variants: ['Pure White', 'Soft Biscuit', 'Travertine Matte'],
      },
      {
        id: 'wb-4',
        name: 'Minimalist Floating Counter Sink',
        category: 'Wash Basins',
        categoryId: 'basins',
        finish: 'Velvet Matte Porcelain',
        dimensions: '500 × 390 × 125 mm',
        availability: 'Ready Stock',
        grade: 'Zero-Splash Geometry',
        image: '/images/Washbasins/basin4.jpg',        
        description:
          'Clean geometric tabletop basin with concealed ceramic pop-up waste cap and crisp architectural proportions for compact modern baths.',
        specs: {
          Size: '500 × 390 × 125 mm',
          Finish: 'Velvet Matte / High Gloss',
          Material: 'Fine Fireclay Ceramic',
          Application: 'Guest Baths, Urban Apartments',
        },
        variants: ['Velvet Matte', 'Pure Gloss', 'Warm Mist'],
      },
      {
        id: 'wb-5',
        name: 'Atelier Pedestal & Counter Series',
        category: 'Wash Basins',
        categoryId: 'basins',
        finish: 'Sculpted Satin Ceramic',
        dimensions: '480 × 480 × 840 mm',
        availability: 'Showroom Exclusive',
        grade: 'Single-Piece Cast',
        image: '/images/Washbasins/basin5.jpg',        
        description:
          'Gallery-inspired freestanding and vanity wash basin silhouettes designed to become the architectural centerpiece of refined powder rooms.',
        specs: {
          Size: '480 × 480 × 840 mm / Table-Top',
          Finish: 'Satin Ceramic / Gloss Bowl',
          Material: 'Monolithic Vitreous China',
          Application: 'Foyer Powder Rooms, Villas',
        },
        variants: ['Alabaster Satin', 'Porcelain Gloss', 'Pebble Stone'],
      },
    ],
  },
  {
    id: 'toilets',
    label: 'Toilet Seats',
    shortLabel: 'Toilet Seats',
    subtitle: 'Rimless vortex-flush wall-hung closets, seamless one-piece WCs & soft-close ergonomic hygiene',
    direction: 'right',
    speed: 0.48,
    accent: 'from-cyan-50/90 to-slate-100/90',
    items: [
      {
        id: 'ts-1',
        name: 'Aero Rimless Wall-Hung Closet',
        category: 'Toilet Seats & Sanitaryware',
        categoryId: 'toilets',
        finish: 'Antibacterial Mirror Glaze',
        dimensions: '540 × 360 × 355 mm',
        availability: 'In Showroom',
        grade: '360° Tornado Rimless',
        image: '/images/toilet/toilet1.jpg',
        description:
          'Suspended architectural wall-hung WC featuring hidden mounting brackets, whisper-quiet UF soft-close lid, and hygienic rimless cyclone flushing.',
        specs: {
          Size: '540 × 360 × 355 mm (Wall-Hung)',
          Finish: 'Anti-Microbial Pure White Glaze',
          Material: '1280°C Vitreous China • 400kg Rated',
          Application: 'Concealed Cistern Modern Bathrooms',
        },
        variants: ['Gloss White', 'Matte White', 'Warm Ivory'],
      },
      {
        id: 'ts-2',
        name: 'Serene One-Piece Siphonic WC',
        category: 'Toilet Seats & Sanitaryware',
        categoryId: 'toilets',
        finish: 'Hydro-Shield Porcelain',
        dimensions: '680 × 375 × 735 mm',
        availability: 'Ready Stock',
        grade: 'Dual Eco-Flush 3L / 4.8L',
        image: '/images/toilet/toilet2.jpg',
        description:
          'Seamless skirted one-piece ceramic water closet with effortless wipe-clean contours and ultra-quiet dual siphonic jet flush.',
        specs: {
          Size: '680 × 375 × 735 mm (S-Trap / P-Trap)',
          Finish: 'Hydro-Shield Gloss Ceramic',
          Material: 'Seamless One-Piece Vitreous China',
          Application: 'Master & Family Bathrooms',
        },
        variants: ['Pearl White', 'Soft Ivory', 'Slim Seat Edition'],
      },
      {
        id: 'ts-3',
        name: 'Veloce Concealed Suite Sanitary Set',
        category: 'Toilet Seats & Sanitaryware',
        categoryId: 'toilets',
        finish: 'Ultra-Smooth Nano Glaze',
        dimensions: '525 × 360 × 360 mm',
        availability: 'In Showroom',
        grade: 'Quick-Release UF Seat',
        image: '/images/toilet/toilet3.jpg',
        description:
          'Coordinated minimalist toilet and concealed flush plate architecture crafted to keep modern bathroom floors completely unobstructed.',
        specs: {
          Size: '525 × 360 × 360 mm',
          Finish: 'Nano Self-Clean Ceramic Glaze',
          Material: 'Grade-A Sanitary Porcelain',
          Application: 'Luxury Apartments & Hospitality',
        },
        variants: ['Pure White', 'Champagne Plate', 'Brushed Chrome'],
      },
      {
        id: 'ts-4',
        name: 'Lumia Smart Comfort Ceramic Closet',
        category: 'Toilet Seats & Sanitaryware',
        categoryId: 'toilets',
        finish: 'Ionized Self-Clean Glaze',
        dimensions: '660 × 390 × 505 mm',
        availability: 'Showroom Demo Live',
        grade: 'Ergonomic Soft-Close Tech',
        image: '/images/toilet/toilet4.jpg',
        description:
          'Contemporary low-profile tankless silhouette combining ergonomic seating comfort, gentle rimless rinse, and refined hotel-suite aesthetics.',
        specs: {
          Size: '660 × 390 × 505 mm',
          Finish: 'Ionized Porcelain Gloss',
          Material: 'High-Fired Ceramic + UF Slim Cover',
          Application: 'Penthouses, Signature Villas',
        },
        variants: ['Pure Porcelain', 'Warm Pearl', 'Smart Bidet Ready'],
      },
      {
        id: 'ts-5',
        name: 'Nordic Compact Wall-Mounted WC',
        category: 'Toilet Seats & Sanitaryware',
        categoryId: 'toilets',
        finish: 'Satin Ceramic Shield',
        dimensions: '495 × 355 × 350 mm',
        availability: 'Ready Stock',
        grade: 'Short-Projection Design',
        image: '/images/toilet/toilet5.jpg',
        description:
          'Space-smart short-projection ceramic toilet engineered for powder rooms without compromising full-size seating ergonomics or flush power.',
        specs: {
          Size: '495 × 355 × 350 mm (Compact)',
          Finish: 'Gloss / Velvet Satin Ceramic',
          Material: 'Vitreous China • Rimless Wash',
          Application: 'Powder Rooms, Boutique Suites',
        },
        variants: ['Gloss White', 'Satin White', 'Matte Sand'],
      },
    ],
  },
  {
    id: 'ceramics',
    label: 'Sanitaryware',
    shortLabel: 'More Ceramics',
    subtitle: 'Sculpted soaking tubs, artisan ceramic bath accessories, designer planters & architectural vessels',
    direction: 'left',
    speed: 0.54,
    accent: 'from-emerald-50/80 to-stone-100/90',
    items: [
      {
        id: 'mc-1',
        name: 'Fluted Artisan Ceramic Vessels',
        category: 'More Ceramic Creations',
        categoryId: 'ceramics',
        finish: 'Kiln-Fired Matte Bisque',
        dimensions: 'Assorted Gallery Heights',
        availability: 'In Showroom',
        grade: 'Hand-Finished Stoneware',
        image: ' /images/Sanitaryware/nal1.jpg',
        description:
          'Tactile hand-finished matte white ceramic vessels and vanity styling jars that bring organic gallery warmth to marble countertops.',
        specs: {
          Size: '180 mm – 360 mm Curated Set',
          Finish: 'Matte Bisque / Glazed Interior',
          Material: 'Artisanal Stoneware Ceramic',
          Application: 'Vanity Styling, Foyers, Living Consoles',
        },
        variants: ['Chalk Matte', 'Warm Sand', 'Raw Linen'],
      },
      {
        id: 'mc-2',
        name: 'Sculptural Freestanding Ceramic Tub',
        category: 'More Ceramic Creations',
        categoryId: 'ceramics',
        finish: 'Silk Porcelain Enamel',
        dimensions: '1700 × 800 × 580 mm',
        availability: 'Made to Order',
        grade: 'Thermal-Retention Body',
        image: ' /images/Sanitaryware/nal2.jpg',
        description:
          'Deep monolithic oval soaking tub sculpted with graceful ergonomic backrest angles and lustrous warmth-retaining porcelain-stone finish.',
        specs: {
          Size: '1700 × 800 × 580 mm',
          Finish: 'Silk Gloss / Matte Alabaster',
          Material: 'Reinforced Ceramic-Stone Composite',
          Application: 'Spa Bathrooms, Luxury Master Suites',
        },
        variants: ['Alabaster Gloss', 'Velvet Matte', 'Champagne Drain'],
      },
      {
        id: 'mc-3',
        name: 'Minimalist Ceramic Bath & Vanity Set',
        category: 'More Ceramic Creations',
        categoryId: 'ceramics',
        finish: 'Speckled Satin Glaze',
        dimensions: '4-Piece Coordinated Ensemble',
        availability: 'Ready Stock',
        grade: 'Chip-Resistant Kiln Ware',
        image: ' /images/Sanitaryware/nal3.jpg',
        description:
          'Coordinated ceramic soap dispenser, fluted tumbler, oval soap dish, and matching stone tray designed to complete luxury vanity counters.',
        specs: {
          Size: '4-Piece Vanity Accessory Set',
          Finish: 'Speckled Ivory / Satin Pearl',
          Material: 'High-Fired Glazed Ceramic',
          Application: 'Wash Basin Styling & Boutique Hospitality',
        },
        variants: ['Speckled Ivory', 'Pure White', 'Sandstone'],
      },
      {
        id: 'mc-4',
        name: 'Gallery Ceramic Planters & Urns',
        category: 'More Ceramic Creations',
        categoryId: 'ceramics',
        finish: 'Soft Alabaster Glaze',
        dimensions: '320 × 320 × 420 mm',
        availability: 'In Showroom',
        grade: 'Weatherproof Glazed Body',
        image: ' /images/Sanitaryware/nal4.jpg',
        description:
          'Architectural floor-standing ceramic planters and sculptural vessels crafted to pair with large-format stone flooring and indoor greenery.',
        specs: {
          Size: 'Medium & Tall Floor Silhouettes',
          Finish: 'Alabaster Satin / Ribbed Clay',
          Material: 'Frost & Moisture Proof Ceramic',
          Application: 'Entrances, Verandas, Living Corners',
        },
        variants: ['Alabaster', 'Oatmeal Ribbed', 'Pearl Gloss'],
      },
      {
        id: 'mc-5',
        name: 'Chef Fireclay Ceramic Kitchen Sink',
        category: 'More Ceramic Creations',
        categoryId: 'ceramics',
        finish: 'Heavy-Duty Armor Glaze',
        dimensions: '760 × 460 × 230 mm',
        availability: 'Ready Stock',
        grade: 'Thermal & Scratch Proof',
        image: ' /images/Sanitaryware/nal5.jpg',
        description:
          'Thick-walled kiln-fired ceramic culinary sink and matching ceramic organizers engineered to withstand hot cookware and daily kitchen artistry.',
        specs: {
          Size: '760 × 460 × 230 mm Deep Bowl',
          Finish: 'Non-Porous High-Gloss Armor',
          Material: 'Solid Fireclay Ceramic',
          Application: 'Granite & Quartz Kitchen Islands',
        },
        variants: ['Classic White', 'Warm Biscuit', 'Satin Pearl'],
      },
    ],
  },
];

export const ALL_PRODUCTS = CATEGORY_LANES.flatMap((lane) => lane.items);

// ============================================================================
// MATERIAL & FINISH LIGHT STUDIO CONFIGURATIONS (PURE WHITE GALLERY)
// ============================================================================

export const STUDIO_GRANITES = [
  {
    id: 'carrara-white',
    name: 'Bianco Carrara',
    origin: 'Pearl Veined Stone',
    swatch: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 55%, #cbd5e1 100%)',
    image: 'https://images.unsplash.com/photo-1547052178-7f2c5a20c332?auto=format&fit=crop&w=900&q=80',
    tag: '18mm Bookmatch',
  },
  {
    id: 'sierra-granite',
    name: 'Sierra Natural',
    origin: 'Crystalline Quarry',
    swatch: 'linear-gradient(135deg, #d6d3d1 0%, #a8a29e 50%, #78716c 100%)',
    image: 'https://images.unsplash.com/photo-1562826586-66f0dd5c3a66?auto=format&fit=crop&w=900&q=80',
    tag: '20mm Honed',
  },
  {
    id: 'alabaster-sand',
    name: 'Alabaster Sand',
    origin: 'Warm Travertine Cut',
    swatch: 'linear-gradient(135deg, #f5efe6 0%, #e5d5c0 55%, #c7b093 100%)',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80',
    tag: '18mm Velvet',
  },
  {
    id: 'arctic-frost',
    name: 'Arctic Quartz',
    origin: 'Ultra-Bright Slab',
    swatch: 'linear-gradient(135deg, #ffffff 0%, #eef2f6 60%, #dbeafe 100%)',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',
    tag: '20mm Crystal',
  },
];

export const STUDIO_FINISHES = [
  {
    id: 'alpine-gloss',
    name: 'Alpine Mirror Glaze',
    desc: 'High-luster porcelain reflection',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80',
    chipBg: '#FFFFFF',
    sheenOpacity: 0.55,
  },
  {
    id: 'velvet-matte',
    name: 'Velvet Satin Matte',
    desc: 'Soft tactile architectural ceramic',
    image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=900&q=80',
    chipBg: '#F1F5F9',
    sheenOpacity: 0.22,
  },
  {
    id: 'carving-relief',
    name: 'Carving Porcelain',
    desc: 'Micro-vein sculpted surface depth',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
    chipBg: '#F5EFE6',
    sheenOpacity: 0.35,
  },
  {
    id: 'artisan-bisque',
    name: 'Artisan Ceramic Suite',
    desc: 'Warm kiln-fired gallery harmony',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80',
    chipBg: '#FAF5EE',
    sheenOpacity: 0.42,
  },
];

export const STUDIO_LIGHTS = [
  {
    id: 'daylight',
    name: 'Natural Daylight',
    kelvin: '5500K',
    icon: Sun,
    overlay: 'linear-gradient(125deg, rgba(255,255,255,0.45) 0%, rgba(224,242,254,0.16) 45%, rgba(255,255,255,0.04) 100%)',
    filter: 'brightness(1.04) contrast(1.02) saturate(1.02)',
  },
  {
    id: 'warm-gallery',
    name: 'Warm Gallery Glow',
    kelvin: '3000K',
    icon: Lamp,
    overlay: 'linear-gradient(135deg, rgba(254,243,199,0.42) 0%, rgba(217,168,108,0.14) 50%, rgba(255,255,255,0.08) 100%)',
    filter: 'brightness(1.02) sepia(0.11) saturate(1.08)',
  },
  {
    id: 'crisp-studio',
    name: 'Crisp Architectural',
    kelvin: '4500K',
    icon: Sparkles,
    overlay: 'linear-gradient(110deg, rgba(255,255,255,0.58) 0%, rgba(241,245,249,0.12) 48%, rgba(186,230,253,0.14) 100%)',
    filter: 'brightness(1.06) contrast(1.06) saturate(0.96)',
  },
];

// ============================================================================
// REUSABLE COMPONENTS: SAFE IMAGE, REVEAL, 3D LIGHT TILT, AUTO-SCROLL LANE
// ============================================================================

/**
 * High-resolution photographic image component with multi-step fallback protection.
 */
function SafeProductImage({ src, alt, className = '', fallbackIndex = 0 }) {
  const [imgSrc, setImgSrc] = useState(src);
  const [fallbackStep, setFallbackStep] = useState(0);

  useEffect(() => {
    setImgSrc(src);
    setFallbackStep(0);
  }, [src]);

  const handleError = () => {
    const nextIdx = (fallbackIndex + fallbackStep) % FALLBACK_IMAGES.length;
    if (fallbackStep < FALLBACK_IMAGES.length) {
      setImgSrc(FALLBACK_IMAGES[nextIdx]);
      setFallbackStep((s) => s + 1);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      loading="lazy"
      onError={handleError}
      className={className}
    />
  );
}

/**
 * Smooth viewport scroll-reveal wrapper.
 */
function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Animated stat counter.
 */
function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1200;
          const startTime = performance.now();
          const tick = (now) => {
            const p = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setCount(Math.floor(eased * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/**
 * Light-mode 3D tilt frosted pearl glass card with iridescent cursor sheen.
 */
function PearlTiltCard({ children, className = '', tilt = 7, onClick }) {
  const ref = useRef(null);
  const [transform, setTransform] = useState(
    'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
  );
  const [spot, setSpot] = useState({ x: 50, y: 50, opacity: 0 });

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = -((y - rect.height / 2) / (rect.height / 2)) * tilt;
    const ry = ((x - rect.width / 2) / (rect.width / 2)) * tilt;
    setTransform(`perspective(1000px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) scale3d(1.015,1.015,1.015)`);
    setSpot({ x: (x / rect.width) * 100, y: (y / rect.height) * 100, opacity: 1 });
  };

  const onMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)');
    setSpot((s) => ({ ...s, opacity: 0 }));
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      style={{ transform }}
      className={`glass-white relative overflow-hidden transition-transform duration-300 ease-out will-change-transform ${className}`}
    >
      {/* Pearl iridescent radial spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
        style={{
          opacity: spot.opacity,
          background: `radial-gradient(320px circle at ${spot.x}% ${spot.y}%, rgba(180,138,90,0.14), rgba(255,255,255,0.45) 45%, transparent 72%)`,
        }}
      />
      <div className="relative z-20 h-full">{children}</div>
    </div>
  );
}

/**
 * Category-Wise Auto-Animated Horizontal Scrollable Showcase Lane
 * Uses requestAnimationFrame on a seamlessly duplicated track so it auto-glides
 * infinitely in alternating directions, pauses gracefully on hover/touch, and
 * supports smooth manual left/right glass arrow buttons + native horizontal swipe!
 */
function CategoryShowcaseLane({
  lane,
  items,
  isItemInShortlist,
  onToggleShortlist,
  onQuickView,
}) {
  const scrollerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const floatPosRef = useRef(null);

  // Duplicate items twice for seamless infinite auto-scroll marquee loop when >= 2 items
  const shouldLoop = items.length >= 2;
  const displayItems = useMemo(
    () => (shouldLoop ? [...items, ...items] : items),
    [items, shouldLoop]
  );

  // Initialize reverse-direction lanes at the midpoint so scrolling right feels seamless from frame 1
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el || !shouldLoop) return;
    const initScroll = () => {
      const half = el.scrollWidth / 2;
      if (lane.direction === 'right' && el.scrollLeft === 0 && half > 0) {
        el.scrollLeft = half;
        floatPosRef.current = half;
      } else {
        floatPosRef.current = el.scrollLeft;
      }
    };
    const timer = setTimeout(initScroll, 60);
    return () => clearTimeout(timer);
  }, [lane.direction, shouldLoop, items.length]);

  // Continuous silky requestAnimationFrame horizontal auto-glide
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el || !shouldLoop || !isPlaying || isHovered || isTouched) return;

    let rafId;
    if (floatPosRef.current === null) {
      floatPosRef.current = el.scrollLeft;
    }

    const animate = () => {
      const half = el.scrollWidth / 2;
      if (half > 0) {
        // Keep internal float synced if user manually scrolled via arrows or drag
        if (Math.abs(el.scrollLeft - floatPosRef.current) > 4) {
          floatPosRef.current = el.scrollLeft;
        }
        const delta = lane.direction === 'left' ? lane.speed : -lane.speed;
        floatPosRef.current += delta;

        if (floatPosRef.current >= half) {
          floatPosRef.current -= half;
        } else if (floatPosRef.current <= 0) {
          floatPosRef.current += half;
        }
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
    const step = 330;
    const half = el.scrollWidth / 2;
    let target = el.scrollLeft + (dir === 'next' ? step : -step);
    if (shouldLoop && half > 0) {
      if (target < 0) {
        el.scrollLeft += half;
        target = el.scrollLeft - step;
      } else if (target > half * 1.65) {
        el.scrollLeft -= half;
        target = el.scrollLeft + step;
      }
    }
    el.scrollTo({ left: target, behavior: 'smooth' });
    floatPosRef.current = target;
  };

  if (items.length === 0) return null;

  return (
    <div className="space-y-4">
      {/* Sleek Glass Category Lane Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 px-1">
        <div className="space-y-1">
          <div className="flex items-center gap-2.5 flex-wrap">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              {lane.label}
            </h3>
            <span className="glass-pill-light rounded-full px-3 py-0.5 text-xs font-semibold text-[#9A7245]">
              {items.length} Designs
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isPlaying && !isHovered ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'
                }`}
              />
              {isPlaying && !isHovered ? 'Auto-Gliding' : isHovered ? 'Paused on Inspect' : 'Paused'}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl">{lane.subtitle}</p>
        </div>

        {/* Play/Pause & Manual Left/Right Glass Arrow Controls */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          {shouldLoop && (
            <button
              type="button"
              onClick={() => setIsPlaying((p) => !p)}
              className="glass-pill-light rounded-full px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-slate-950 hover:bg-white transition flex items-center gap-1.5 cursor-pointer"
              aria-label={isPlaying ? `Pause ${lane.label} auto-scroll` : `Play ${lane.label} auto-scroll`}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#9A7245]" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Auto</span>
                </>
              )}
            </button>
          )}
          <button
            type="button"
            onClick={() => handleArrowScroll('prev')}
            className="w-9 h-9 rounded-full glass-pill-light flex items-center justify-center text-slate-700 hover:text-slate-950 hover:bg-white transition cursor-pointer"
            aria-label={`Scroll ${lane.label} left`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => handleArrowScroll('next')}
            className="w-9 h-9 rounded-full glass-pill-light flex items-center justify-center text-slate-700 hover:text-slate-950 hover:bg-white transition cursor-pointer"
            aria-label={`Scroll ${lane.label} right`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Auto-Animated Showcase Track with Luminous White Edge Masks */}
      <div
        className="relative group/lane"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsTouched(true)}
        onTouchEnd={() => {
          setTimeout(() => setIsTouched(false), 1800);
        }}
      >
        {/* Left White Frosted Fade Edge Mask */}
        <div className="pointer-events-none hidden sm:block absolute inset-y-0 left-0 w-16 z-20 bg-gradient-to-r from-[#FAFAF9] via-[#FAFAF9]/80 to-transparent" />
        {/* Right White Frosted Fade Edge Mask */}
        <div className="pointer-events-none hidden sm:block absolute inset-y-0 right-0 w-16 z-20 bg-gradient-to-l from-[#FAFAF9] via-[#FAFAF9]/80 to-transparent" />

        <div
          ref={scrollerRef}
          className="flex gap-5 overflow-x-auto no-scrollbar py-3 px-1 sm:px-4 select-none"
        >
          {displayItems.map((product, idx) => {
            const added = isItemInShortlist(product.id);
            return (
              <div
                key={`${product.id}-${idx}`}
                className="w-[290px] sm:w-[325px] shrink-0"
              >
                <div className="glass-white rounded-[28px] p-3.5 h-full flex flex-col group hover:shadow-[0_22px_55px_rgba(15,23,42,0.1)] hover:-translate-y-1 transition-all duration-500">
                  {/* Real Architectural Photographic Showcase */}
                  <div
                    onClick={() => onQuickView(product)}
                    className="relative h-56 rounded-[22px] overflow-hidden bg-stone-100 cursor-pointer"
                  >
                    <SafeProductImage
                      src={product.image}
                      alt={product.name}
                      fallbackIndex={idx}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Subtle glass reflection sheen sweep on hover */}
                    <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-18deg]" />

                    {/* Top Floating Frosted Spec Pills */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-xl border border-white/95 text-[10px] font-bold uppercase tracking-wider text-slate-800 shadow-sm">
                        {product.availability}
                      </span>
                      <span className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-xl border border-white/95 flex items-center justify-center text-slate-700 group-hover:bg-white group-hover:text-[#9A7245] transition shadow-sm">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    {/* Bottom Floating Dimensions Glass Bar */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/82 backdrop-blur-xl border border-white/95 text-[11px] font-semibold text-slate-700 shadow-sm max-w-full truncate">
                        <Layers className="w-3 h-3 text-[#B48A5A] shrink-0" />
                        <span className="truncate">{product.dimensions}</span>
                      </div>
                    </div>
                  </div>

                  {/* Product Card Body (STRICTLY ZERO PRICES) */}
                  <div className="pt-4 px-1 flex-1 flex flex-col">
                    <div className="flex items-center justify-between gap-2 text-[11px] font-semibold uppercase tracking-wider text-[#9A7245]">
                      <span className="truncate">{product.finish}</span>
                    </div>

                    <h4
                      onClick={() => onQuickView(product)}
                      className="font-display font-bold text-lg text-slate-900 mt-1 leading-snug cursor-pointer hover:text-[#9A7245] transition-colors"
                    >
                      {product.name}
                    </h4>

                    <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Architectural Grade Pill + Actions */}
                    <div className="mt-auto pt-4 flex items-center justify-between gap-2 border-t border-slate-200/70">
                      <span className="text-[11px] font-medium text-slate-500 truncate">
                        {product.grade}
                      </span>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          type="button"
                          onClick={() => onQuickView(product)}
                          className="p-2 rounded-full glass-pill-light text-slate-600 hover:text-slate-950 hover:bg-white transition cursor-pointer"
                          title="View Specifications"
                          aria-label={`Quick view ${product.name}`}
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => onToggleShortlist(product)}
                          className={`px-3.5 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 transition cursor-pointer ${
                            added
                              ? 'bg-emerald-50 border border-emerald-300 text-emerald-700'
                              : 'bg-gradient-to-r from-[#B48A5A] to-[#9A7245] text-white shadow-[0_6px_18px_rgba(154,114,69,0.28)] hover:brightness-105'
                          }`}
                        >
                          {added ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              Shortlisted
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5" />
                              Shortlist
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// MAIN APPLICATION COMPONENT
// ============================================================================

export default function App() {
  // Active section for iPhone-style floating oval dock segmented indicator
  const [activeNav, setActiveNav] = useState('home');

  // Collection filter & search
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Quick View Modal state
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [quickViewVariant, setQuickViewVariant] = useState(0);

  // Inquiry Shortlist Drawer state
  const [shortlist, setShortlist] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Toast state
  const [toast, setToast] = useState(null);

  // Interactive White Gallery Material & Finish Studio state
  const [studioGranite, setStudioGranite] = useState(STUDIO_GRANITES[0]);
  const [studioFinish, setStudioFinish] = useState(STUDIO_FINISHES[0]);
  const [studioLight, setStudioLight] = useState(STUDIO_LIGHTS[0]);

  // Tile & Granite Area Estimator state (ZERO PRICES)
  const [estLength, setEstLength] = useState(14);
  const [estWidth, setEstWidth] = useState(12);
  const [estFormat, setEstFormat] = useState('2x4'); // '2x2' | '2x4' | '4x8'

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: 'Granite Slabs & Designer Tiles',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // iPhone-style Desktop Dock active sliding pill measurement
  const navItems = useMemo(
    () => [
      { id: 'home', label: 'Home', icon: Home },
      { id: 'collection', label: 'Collection', icon: LayoutGrid },
      { id: 'studio', label: 'Studio', icon: Sliders },
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
      setDockPill({
        left: activeBtn.offsetLeft,
        width: activeBtn.offsetWidth,
        opacity: 1,
      });
    }
  }, [activeNav]);

  useEffect(() => {
    updateDockPill();
    window.addEventListener('resize', updateDockPill);
    return () => window.removeEventListener('resize', updateDockPill);
  }, [updateDockPill]);

  // Auto-sync active dock pill with scroll position
  useEffect(() => {
    const sections = ['home', 'collection', 'studio', 'estimator', 'contact'];
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
  }, []);

  const scrollToSection = (id) => {
    setActiveNav(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Toast helper
  const showToast = (title, subtitle = '') => {
    setToast({ id: Date.now(), title, subtitle });
  };

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 3200);
    return () => clearTimeout(timer);
  }, [toast]);

  // Copy helper
  const copyText = (text, title, subtitle) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text);
      }
    } catch {
      // Fallback ignored safely
    }
    showToast(title, subtitle);
  };

  const handleCopyPhone = (phoneDisplay = CONTACT_INFO.primaryPhoneDisplay) => {
    copyText(phoneDisplay, 'Contact Number Copied', `${phoneDisplay} — VARDHMAN Showroom`);
  };

  // Shortlist helpers
  const isItemInShortlist = (id) => shortlist.some((item) => item.id === id);

  const toggleShortlist = (item) => {
    setShortlist((prev) => {
      const exists = prev.some((i) => i.id === item.id);
      if (exists) {
        showToast('Removed from Shortlist', item.name);
        return prev.filter((i) => i.id !== item.id);
      }
      showToast('Added to Shortlist', item.name);
      return [...prev, item];
    });
  };

  const handleSaveStudioPairing = () => {
    const id = `studio-${studioGranite.id}-${studioFinish.id}`;
    const pairingItem = {
      id,
      name: `Studio Pairing: ${studioGranite.name} × ${studioFinish.name}`,
      category: 'Material Studio',
      finish: `${studioLight.name} Light`,
      dimensions: studioGranite.tag,
      image: studioFinish.image,
    };
    if (!isItemInShortlist(id)) {
      setShortlist((prev) => [...prev, pairingItem]);
      showToast('Studio Pairing Shortlisted', `${studioGranite.name} + ${studioFinish.name}`);
    } else {
      showToast('Already Shortlisted', 'Open Shortlist Drawer to send inquiry.');
    }
  };

  // Filtered category lanes for "The Vardhman Collection"
  const visibleLanes = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return CATEGORY_LANES.filter(
      (lane) => selectedCategoryFilter === 'all' || lane.id === selectedCategoryFilter
    )
      .map((lane) => ({
        ...lane,
        filteredItems: lane.items.filter(
          (item) =>
            !q ||
            item.name.toLowerCase().includes(q) ||
            item.category.toLowerCase().includes(q) ||
            item.finish.toLowerCase().includes(q) ||
            item.dimensions.toLowerCase().includes(q) ||
            item.description.toLowerCase().includes(q)
        ),
      }))
      .filter((lane) => lane.filteredItems.length > 0);
  }, [selectedCategoryFilter, searchQuery]);

  // Tile & Granite Area Estimator calculations (STRICTLY ZERO PRICES)
  const estimate = useMemo(() => {
    const l = Math.max(1, Number(estLength) || 0);
    const w = Math.max(1, Number(estWidth) || 0);
    const netSqFt = l * w;
    const recommendedSqFt = Math.ceil(netSqFt * 1.1);

    if (estFormat === '2x2') {
      const boxes = Math.ceil(recommendedSqFt / 16); // 4 tiles = 16 sq.ft / box
      return {
        netSqFt,
        recommendedSqFt,
        wastageSqFt: recommendedSqFt - netSqFt,
        units: boxes,
        unitLabel: 'Tile Boxes (2×2 ft • 4 pcs/box)',
        formatName: '2 × 2 ft Porcelain Tiles',
      };
    }
    if (estFormat === '2x4') {
      const boxes = Math.ceil(recommendedSqFt / 16); // 2 slabs = 16 sq.ft / box
      return {
        netSqFt,
        recommendedSqFt,
        wastageSqFt: recommendedSqFt - netSqFt,
        units: boxes,
        unitLabel: 'Tile Boxes (2×4 ft • 2 slabs/box)',
        formatName: '2 × 4 ft Vitrified Slabs',
      };
    }
    // 4x8 ft large format slab = 32 sq.ft per slab
    const slabs = Math.max(1, Math.ceil(recommendedSqFt / 32));
    return {
      netSqFt,
      recommendedSqFt,
      wastageSqFt: recommendedSqFt - netSqFt,
      units: slabs,
      unitLabel: 'Large Slabs (4×8 ft • 32 sq.ft/slab)',
      formatName: '4 × 8 ft Large Architectural Slabs',
    };
  }, [estLength, estWidth, estFormat]);

  // WhatsApp URL Builders (Zero prices)
  const getWhatsAppShortlistUrl = () => {
    const body =
      shortlist.length > 0
        ? `Hello VARDHMAN Showroom, I would like catalog details and availability for my shortlisted items:\n\n${shortlist
            .map((item, idx) => `${idx + 1}. ${item.name} (${item.finish || item.category} • ${item.dimensions || ''})`)
            .join('\n')}\n\nPlease share more information.`
        : `Hello VARDHMAN Showroom, I would like to inquire about your Ceramic, Granite, Tiles, Wash Basins & Sanitaryware collection.`;
    return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(body)}`;
  };

  const getWhatsAppProductUrl = (product, variantLabel) => {
    const body = `Hello VARDHMAN Showroom, I am interested in "${product.name}" (${product.category})\n• Preferred Finish: ${variantLabel}\n• Dimensions: ${product.dimensions}\n\nPlease share availability & showroom details.`;
    return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(body)}`;
  };

  const getWhatsAppEstimatorUrl = () => {
    const body = `Hello VARDHMAN Showroom, here are my room measurements from the Area Estimator:\n• Room Size: ${estLength} ft × ${estWidth} ft\n• Net Area: ${estimate.netSqFt} sq.ft\n• Recommended Area (+10% Wastage): ${estimate.recommendedSqFt} sq.ft\n• Format: ${estimate.formatName}\n• Estimated Quantity: ${estimate.units} ${estimate.unitLabel}\n\nPlease recommend suitable options.`;
    return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(body)}`;
  };

  const handleCopyShortlist = () => {
    const formatted = shortlist
      .map((item, i) => `${i + 1}. ${item.name} — ${item.finish || item.category}`)
      .join('\n');
    copyText(formatted, 'Shortlist Copied', `${shortlist.length} architectural items copied`);
  };

  const handleLoadShortlistIntoForm = () => {
    const formatted = shortlist
      .map((item, i) => `${i + 1}. ${item.name} (${item.dimensions || item.category})`)
      .join('\n');
    setFormData((prev) => ({
      ...prev,
      message: `Shortlisted Items from VARDHMAN:\n${formatted}`,
    }));
    setDrawerOpen(false);
    scrollToSection('contact');
    showToast('Shortlist Attached', 'Complete your contact details below.');
  };

  const handleAttachEstimateToForm = () => {
    const note = `Room Measurement Estimate: ${estLength} ft × ${estWidth} ft | Total Area w/ 10% Wastage: ${estimate.recommendedSqFt} sq.ft | Format: ${estimate.formatName} (${estimate.units} ${estimate.unitLabel})`;
    setFormData((prev) => ({
      ...prev,
      interest: estFormat === '4x8' ? 'Granite Slabs & Large Slabs' : 'Designer Tiles',
      message: prev.message ? `${prev.message}\n${note}` : note,
    }));
    scrollToSection('contact');
    showToast('Measurements Attached', 'Ready to send to Vardhman Showroom.');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      showToast('Required Details', 'Please provide your name and mobile number.');
      return;
    }
    setFormSubmitted(true);
    showToast('Inquiry Submitted!', 'Vardhman specialist will call you shortly.');
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-slate-900 selection:bg-[#B48A5A]/20 selection:text-slate-950 overflow-x-hidden relative font-sans">
      {/* =====================================================================
          LUMINOUS WHITE GLASSMORPHISM DESIGN TOKENS & KEYFRAME ANIMATIONS
         ===================================================================== */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;1,500&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Syne:wght@600;700;800&display=swap');

        :root {
          --font-display: 'Syne', sans-serif;
          --font-serif: 'Playfair Display', serif;
          --font-sans: 'Plus Jakarta Sans', sans-serif;
        }

        body {
          font-family: var(--font-sans);
          background-color: #FAFAF9;
          color: #111827;
          scroll-behavior: smooth;
        }

        .font-display { font-family: var(--font-display); }
        .font-serif-accent { font-family: var(--font-serif); }

        /* Pure Bright Luminous Frosted White Glass Panels */
        .glass-white {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.84) 0%, rgba(255, 255, 255, 0.62) 100%);
          backdrop-filter: blur(26px);
          -webkit-backdrop-filter: blur(26px);
          border: 1px solid rgba(255, 255, 255, 0.94);
          box-shadow: 0 12px 40px rgba(15, 23, 42, 0.06), inset 0 1px 0 rgba(255, 255, 255, 1);
        }

        .glass-white-strong {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.92) 0%, rgba(250, 250, 249, 0.84) 100%);
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.98);
          box-shadow: 0 18px 50px rgba(15, 23, 42, 0.09), inset 0 1px 0 rgba(255, 255, 255, 1);
        }

        /* iPhone-Style Oval Floating Glass Dock */
        .ios-dock {
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.86) 0%, rgba(255, 255, 255, 0.72) 100%);
          backdrop-filter: blur(28px) saturate(180%);
          -webkit-backdrop-filter: blur(28px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.96);
          box-shadow: 0 12px 42px rgba(15, 23, 42, 0.09), 0 2px 10px rgba(15, 23, 42, 0.04), inset 0 1px 0 rgba(255, 255, 255, 1);
        }

        .glass-pill-light {
          background: rgba(255, 255, 255, 0.74);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border: 1px solid rgba(255, 255, 255, 0.95);
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.045), inset 0 1px 0 rgba(255, 255, 255, 1);
        }

        /* Hide scrollbars cleanly inside horizontal lanes */
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        /* Ambient Soft Pastel Architectural Blobs */
        @keyframes pearlBlob1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(55px, -35px) scale(1.08); }
          66% { transform: translate(-35px, 40px) scale(0.95); }
        }
        @keyframes pearlBlob2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-65px, -40px) scale(1.1); }
        }
        @keyframes pearlBlob3 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(45px, 50px) scale(0.94); }
        }
        .animate-blob-1 { animation: pearlBlob1 20s ease-in-out infinite; }
        .animate-blob-2 { animation: pearlBlob2 24s ease-in-out infinite; }
        .animate-blob-3 { animation: pearlBlob3 26s ease-in-out infinite; }

        /* Floating gentle hero cards */
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .float-slow { animation: heroFloat 6.2s ease-in-out infinite; }
        .float-delayed { animation: heroFloat 7.4s ease-in-out 1.4s infinite; }

        /* Subtle bronze & pearl kinetic gradient text */
        @keyframes bronzeShimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .text-bronze-shimmer {
          background: linear-gradient(90deg, #1E293B 0%, #9A7245 30%, #C69C6D 55%, #64748B 80%, #1E293B 100%);
          background-size: 220% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: bronzeShimmer 7s linear infinite;
        }

        /* Architectural light dot pattern */
        .bg-pearl-grid {
          background-image: radial-gradient(rgba(15, 23, 42, 0.06) 1px, transparent 1px);
          background-size: 28px 28px;
        }

        /* Editorial Marquee Ticker */
        @keyframes tickerGlide {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          display: flex;
          width: max-content;
          animation: tickerGlide 34s linear infinite;
        }
        .animate-ticker:hover { animation-play-state: paused; }
      `}</style>

      {/* =====================================================================
          LUMINOUS WHITE AMBIENT BACKGROUND WITH SOFT CHAMPAGNE & ICE-MIST BLOBS
         ===================================================================== */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#FAFAF9]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#FFFFFF_0%,#FAFAF9_55%,#F4F4F5_100%)]" />
        <div className="absolute inset-0 bg-pearl-grid opacity-70" />

        {/* Warm Champagne & Sand Pastel Blob */}
        <div
          className="animate-blob-1 absolute -top-28 -left-24 w-[520px] h-[520px] rounded-full blur-[110px] opacity-80"
          style={{ background: 'radial-gradient(circle, #F5E6D3 0%, #F5F0EB 55%, transparent 78%)' }}
        />
        {/* Soft Ice-Mist Porcelain Blob */}
        <div
          className="animate-blob-2 absolute top-[28%] -right-28 w-[540px] h-[540px] rounded-full blur-[115px] opacity-85"
          style={{ background: 'radial-gradient(circle, #E2EEF9 0%, #EEF2F6 55%, transparent 78%)' }}
        />
        {/* Pale Pearl Travertine Blob */}
        <div
          className="animate-blob-3 absolute bottom-[-100px] left-[22%] w-[520px] h-[520px] rounded-full blur-[115px] opacity-75"
          style={{ background: 'radial-gradient(circle, #F3ECE2 0%, #EAF2EF 55%, transparent 78%)' }}
        />
      </div>

      {/* =====================================================================
          1. IPHONE-STYLE FLOATING OVAL DOCK NAVBAR (DESKTOP + MOBILE)
         ===================================================================== */}

      {/* DESKTOP: Centered iPhone-Style Floating Oval Glass Pill Dock */}
      <header className="hidden lg:flex fixed top-5 inset-x-0 z-40 justify-center px-6 pointer-events-none">
        <nav
          aria-label="Primary Navigation"
          className="pointer-events-auto ios-dock rounded-full p-2 pl-3 pr-2.5 flex items-center gap-3 xl:gap-5 max-w-[1140px]"
        >
          {/* Compact VARDHMAN Brand Emblem */}
          <button
            type="button"
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2.5 pr-2 group cursor-pointer shrink-0"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#F6EFE6] via-white to-[#EAE2D6] border border-[#D4B896]/60 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <span className="font-display font-extrabold text-sm text-[#9A7245]">V</span>
            </div>
            <div className="text-left leading-none">
              <span className="block font-display font-extrabold tracking-[0.18em] text-sm text-slate-900">
                {CONTACT_INFO.brand}
              </span>
              <span className="block text-[9px] uppercase tracking-[0.16em] text-[#9A7245] font-semibold mt-0.5">
                Ceramic &amp; Granite
              </span>
            </div>
          </button>

          {/* Vertical Hairline Divider */}
          <div className="h-6 w-px bg-slate-200/80 shrink-0" />

          {/* iOS Segmented Control Navigation Links with Animated Active Pill */}
          <div
            ref={desktopNavRef}
            className="relative flex items-center gap-0.5 p-1 rounded-full bg-slate-100/75 border border-white/90"
          >
            {/* Gliding Active Pill Indicator */}
            <div
              className="absolute top-1 bottom-1 rounded-full bg-white shadow-[0_3px_12px_rgba(15,23,42,0.09)] border border-slate-200/60 transition-all duration-300 ease-out pointer-events-none"
              style={{
                left: dockPill.left,
                width: dockPill.width,
                opacity: dockPill.opacity,
              }}
            />
            {navItems.map((item) => {
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  ref={(el) => {
                    desktopBtnRefs.current[item.id] = el;
                  }}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`relative z-10 px-4 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    isActive ? 'text-slate-950' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Vertical Hairline Divider */}
          <div className="h-6 w-px bg-slate-200/80 shrink-0" />

          {/* Right Actions: Shortlist Counter Pill + Glowing Call Now Pill */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="relative rounded-full px-3.5 py-2 bg-white/85 hover:bg-white border border-slate-200/75 text-xs font-semibold text-slate-800 flex items-center gap-1.5 shadow-sm transition cursor-pointer"
              aria-label="Open Shortlist Drawer"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#9A7245]" />
              <span>Shortlist</span>
              {shortlist.length > 0 && (
                <span className="min-w-5 h-5 px-1 rounded-full bg-[#9A7245] text-white text-[10px] font-bold flex items-center justify-center">
                  {shortlist.length}
                </span>
              )}
            </button>

            <div className="flex items-center rounded-full bg-gradient-to-r from-[#B48A5A] to-[#9A7245] p-1 pl-3.5 shadow-[0_8px_24px_rgba(154,114,69,0.32)]">
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse mr-2" />
              <a
                href={`tel:${CONTACT_INFO.primaryPhoneRaw}`}
                className="text-xs font-bold text-white tracking-wide pr-2.5 whitespace-nowrap hover:opacity-90"
              >
                {CONTACT_INFO.primaryPhoneDisplay}
              </a>
              <button
                type="button"
                onClick={() => handleCopyPhone()}
                className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition cursor-pointer"
                title="Copy Showroom Number"
                aria-label="Copy Showroom Number"
              >
                <Copy className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* MOBILE TOP: Minimal Floating Oval Brand & Call Pill */}
      <header className="lg:hidden fixed top-3 inset-x-3 z-40 flex justify-center pointer-events-none">
        <div className="pointer-events-auto ios-dock rounded-full px-3 py-2 flex items-center justify-between gap-2 w-full max-w-md">
          <button
            type="button"
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 pl-1"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F6EFE6] to-white border border-[#D4B896]/60 flex items-center justify-center">
              <span className="font-display font-extrabold text-xs text-[#9A7245]">V</span>
            </div>
            <div className="text-left leading-none">
              <span className="block font-display font-extrabold tracking-[0.16em] text-xs text-slate-900">
                {CONTACT_INFO.brand}
              </span>
              <span className="block text-[9px] uppercase tracking-wider text-[#9A7245] font-semibold">
                Ceramic &amp; Granite
              </span>
            </div>
          </button>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="relative w-9 h-9 rounded-full bg-white border border-slate-200/80 flex items-center justify-center text-slate-700 shadow-sm"
              aria-label="Open Shortlist"
            >
              <ShoppingBag className="w-4 h-4 text-[#9A7245]" />
              {shortlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#9A7245] text-white text-[9px] font-bold flex items-center justify-center">
                  {shortlist.length}
                </span>
              )}
            </button>
            <a
              href={`tel:${CONTACT_INFO.primaryPhoneRaw}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-gradient-to-r from-[#B48A5A] to-[#9A7245] text-white text-xs font-bold shadow-md"
            >
              <Phone className="w-3.5 h-3.5" />
              Call
            </a>
          </div>
        </div>
      </header>

      {/* MOBILE BOTTOM: iPhone-Style Floating Oval Tab Dock */}
      <nav
        aria-label="Mobile Navigation Dock"
        className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-40 ios-dock rounded-full p-1.5 flex items-center gap-1 shadow-[0_14px_45px_rgba(15,23,42,0.14)]"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeNav === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-white text-slate-950 shadow-[0_4px_14px_rgba(15,23,42,0.1)] border border-slate-200/70'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
              aria-label={item.label}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-[#9A7245]' : ''}`} />
              {isActive && (
                <span className="text-[11px] font-bold tracking-tight whitespace-nowrap">
                  {item.label}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* =====================================================================
          2. BRIGHT ARCHITECTURAL GALLERY HERO SECTION
         ===================================================================== */}
      <section
        id="home"
        className="relative z-10 pt-24 sm:pt-32 lg:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Editorial Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 glass-pill-light rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#9A7245]">
              <Sparkles className="w-3.5 h-3.5 text-[#B48A5A]" />
              Luminous Architectural Showroom
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl xl:text-[58px] leading-[1.06] tracking-tight text-slate-900">
              VARDHMAN{' '}
              <span className="block font-serif-accent italic font-medium text-bronze-shimmer mt-1">
                Ceramic &amp; Granite
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
              Step into a bright gallery of bookmatched{' '}
              <strong className="text-slate-900 font-semibold">Natural Granite Slabs</strong>,
              large-format <strong className="text-slate-900 font-semibold">Designer Tiles</strong>,
              sculpted <strong className="text-slate-900 font-semibold">Wash Basins</strong>,
              rimless <strong className="text-slate-900 font-semibold">Toilet Seats</strong>, and
              artisanal ceramic collections.
            </p>

            {/* Floating Stone & Ceramic Highlight Chips */}
            <div className="flex flex-wrap gap-2">
              {['Granite Slabs', 'Vitrified Tiles', 'Wash Basins', 'Rimless WCs', 'Ceramic Decor'].map(
                (chip) => (
                  <span
                    key={chip}
                    className="glass-pill-light rounded-full px-3.5 py-1.5 text-xs font-semibold text-slate-700"
                  >
                    {chip}
                  </span>
                )
              )}
            </div>

            {/* Immediate Showroom Contact & WhatsApp Catalog CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`tel:${CONTACT_INFO.primaryPhoneRaw}`}
                className="group inline-flex items-center gap-3 px-5 py-3.5 rounded-full bg-gradient-to-r from-[#B48A5A] to-[#9A7245] text-white font-bold text-sm sm:text-base shadow-[0_12px_32px_rgba(154,114,69,0.32)] hover:shadow-[0_16px_40px_rgba(154,114,69,0.44)] hover:-translate-y-0.5 transition-all"
              >
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <PhoneCall className="w-4 h-4 text-white" />
                </span>
                <span className="text-left leading-tight pr-1">
                  <span className="block text-[10px] uppercase tracking-wider text-white/80 font-medium">
                    Call Showroom
                  </span>
                  <span>{CONTACT_INFO.primaryPhoneDisplay}</span>
                </span>
              </a>

              <a
                href={getWhatsAppShortlistUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full glass-white text-slate-900 font-bold text-sm sm:text-base hover:bg-white hover:-translate-y-0.5 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                WhatsApp Catalog
              </a>

              <button
                type="button"
                onClick={() => handleCopyPhone()}
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-full glass-pill-light text-slate-700 hover:text-slate-950 hover:bg-white text-xs sm:text-sm font-semibold transition cursor-pointer"
                title="Copy Showroom Number"
              >
                <Copy className="w-3.5 h-3.5 text-[#9A7245]" />
                Copy No.
              </button>
            </div>

            {/* Bright Frosted Glass Stat Counters */}
            <div className="grid grid-cols-3 gap-3 pt-3 max-w-lg">
              {[
                { num: 500, suffix: '+', label: 'Ceramic Designs' },
                { num: 120, suffix: '+', label: 'Granite Slabs' },
                { num: 15, suffix: '+', label: 'Years Legacy' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass-white rounded-3xl p-3.5 sm:p-4 text-center sm:text-left"
                >
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900">
                    <AnimatedCounter target={stat.num} suffix={stat.suffix} />
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Floating 3D-Tilting White Frosted Glass Photo Bento */}
          <div className="lg:col-span-6 relative">
            <div className="pointer-events-none absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-[#F5E6D3]/60 via-white/50 to-[#E2EEF9]/60 blur-2xl" />

            <div className="relative grid grid-cols-2 gap-4">
              {/* Hero Card 1: Granite */}
              <div className="float-slow">
                <PearlTiltCard
                  className="rounded-[28px] p-2.5 cursor-pointer"
                  onClick={() => {
                    setQuickViewProduct(CATEGORY_LANES[0].items[0]);
                    setQuickViewVariant(0);
                  }}
                >
                  <div className="h-36 sm:h-44 rounded-[20px] overflow-hidden bg-stone-100">
                    <SafeProductImage
                      src={CATEGORY_LANES[0].items[0].image}
                      alt="Bianco Carrara White Granite"
                      fallbackIndex={0}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="pt-3 px-1.5 pb-1 flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <span className="text-[10px] uppercase tracking-widest text-[#9A7245] font-bold block">
                        Granite Slab
                      </span>
                      <h3 className="text-sm font-bold text-slate-900 truncate">
                        Bianco Carrara
                      </h3>
                    </div>
                    <span className="w-7 h-7 rounded-full bg-white border border-slate-200/80 flex items-center justify-center text-slate-700 shrink-0 shadow-sm">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </PearlTiltCard>
              </div>

              {/* Hero Card 2: Wash Basin */}
              <div className="float-delayed sm:mt-8">
                <PearlTiltCard
                  className="rounded-[28px] p-2.5 cursor-pointer"
                  onClick={() => {
                    setQuickViewProduct(CATEGORY_LANES[2].items[0]);
                    setQuickViewVariant(0);
                  }}
                >
                  <div className="h-36 sm:h-44 rounded-[20px] overflow-hidden bg-stone-100">
                    <SafeProductImage
                      src={CATEGORY_LANES[2].items[0].image}
                      alt="Aura Thin-Rim Vessel Basin"
                      fallbackIndex={1}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="pt-3 px-1.5 pb-1 flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <span className="text-[10px] uppercase tracking-widest text-[#9A7245] font-bold block">
                        Wash Basin
                      </span>
                      <h3 className="text-sm font-bold text-slate-900 truncate">
                        Aura Vessel Basin
                      </h3>
                    </div>
                    <span className="w-7 h-7 rounded-full bg-white border border-slate-200/80 flex items-center justify-center text-slate-700 shrink-0 shadow-sm">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </PearlTiltCard>
              </div>

              {/* Hero Card 3: Designer Tiles */}
              <div className="float-delayed sm:-mt-6">
                <PearlTiltCard
                  className="rounded-[28px] p-2.5 cursor-pointer"
                  onClick={() => {
                    setQuickViewProduct(CATEGORY_LANES[1].items[0]);
                    setQuickViewVariant(0);
                  }}
                >
                  <div className="h-36 sm:h-44 rounded-[20px] overflow-hidden bg-stone-100">
                    <SafeProductImage
                      src={CATEGORY_LANES[1].items[0].image}
                      alt="Statuario Pearl Vitrified Slab"
                      fallbackIndex={2}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="pt-3 px-1.5 pb-1 flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <span className="text-[10px] uppercase tracking-widest text-[#9A7245] font-bold block">
                        Vitrified Tile
                      </span>
                      <h3 className="text-sm font-bold text-slate-900 truncate">
                        Statuario Pearl 4×8
                      </h3>
                    </div>
                    <span className="w-7 h-7 rounded-full bg-white border border-slate-200/80 flex items-center justify-center text-slate-700 shrink-0 shadow-sm">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </PearlTiltCard>
              </div>

              {/* Hero Card 4: Wall-Hung Toilet */}
              <div className="float-slow">
                <PearlTiltCard
                  className="rounded-[28px] p-2.5 cursor-pointer"
                  onClick={() => {
                    setQuickViewProduct(CATEGORY_LANES[3].items[0]);
                    setQuickViewVariant(0);
                  }}
                >
                  <div className="h-36 sm:h-44 rounded-[20px] overflow-hidden bg-stone-100">
                    <SafeProductImage
                      src={CATEGORY_LANES[3].items[0].image}
                      alt="Aero Rimless Wall-Hung Closet"
                      fallbackIndex={3}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="pt-3 px-1.5 pb-1 flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <span className="text-[10px] uppercase tracking-widest text-[#9A7245] font-bold block">
                        Sanitaryware
                      </span>
                      <h3 className="text-sm font-bold text-slate-900 truncate">
                        Aero Rimless WC
                      </h3>
                    </div>
                    <span className="w-7 h-7 rounded-full bg-white border border-slate-200/80 flex items-center justify-center text-slate-700 shrink-0 shadow-sm">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </PearlTiltCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          LUMINOUS WHITE GLASS MARQUEE RIBBON
         ===================================================================== */}
      <div className="relative z-10 border-y border-slate-200/70 bg-white/65 backdrop-blur-xl py-4 overflow-hidden">
        <div className="animate-ticker flex items-center gap-8">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-8 shrink-0">
              {[
                'NATURAL GRANITE SLABS',
                'LARGE-FORMAT VITRIFIED TILES',
                'SCULPTED WASH BASINS',
                'RIMLESS WALL-HUNG TOILETS',
                'ARTISAN CERAMIC CREATIONS',
                `SHOWROOM HOTLINE: ${CONTACT_INFO.primaryPhoneDisplay}`,
              ].map((label, idx) => (
                <div key={`${dup}-${idx}`} className="flex items-center gap-8">
                  <span className="font-display font-bold tracking-[0.22em] text-xs sm:text-sm text-slate-700 whitespace-nowrap">
                    {label}
                  </span>
                  <span className="w-1.5 h-1.5 rotate-45 bg-[#B48A5A]" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================================
          3. REDESIGNED "THE VARDHMAN COLLECTION"
             CATEGORY-WISE AUTO-ANIMATED SCROLLABLE PRODUCT SHOWCASE
         ===================================================================== */}
      <section
        id="collection"
        className="relative z-10 py-20 sm:py-28 px-4 sm:px-6 max-w-7xl mx-auto"
      >
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#9A7245] mb-2">
                <Compass className="w-3.5 h-3.5" />
                Auto-Animated Category Galleries
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight">
                The Vardhman{' '}
                <span className="font-serif-accent italic font-medium text-[#9A7245]">
                  Collection
                </span>
              </h2>
              <p className="text-slate-500 text-sm sm:text-base mt-2 max-w-2xl">
                Explore five dedicated auto-gliding architectural showcases. Hover or touch any lane
                to pause, inspect specs, or add items to your showroom shortlist.
              </p>
            </div>

            {/* Frosted White Glass Live Search Bar */}
            <div className="relative w-full lg:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search granite, tiles, basins, WC..."
                className="w-full glass-white rounded-full pl-11 pr-10 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#B48A5A]/40 transition"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-800 cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </Reveal>

        {/* Quick-Jump Glass Category Pill Filter Bar */}
        <div className="mb-12 overflow-x-auto no-scrollbar pb-2">
          <div className="inline-flex items-center gap-1.5 p-1.5 glass-white rounded-full min-w-max">
            {[
              { id: 'all', label: 'All Categories' },
              { id: 'granite', label: 'Granite' },
              { id: 'tiles', label: 'Tiles' },
              { id: 'basins', label: 'Wash Basins' },
              { id: 'toilets', label: 'Toilet Seats' },
              { id: 'ceramics', label: 'More Ceramics' },
            ].map((pill) => {
              const active = selectedCategoryFilter === pill.id;
              return (
                <button
                  key={pill.id}
                  type="button"
                  onClick={() => setSelectedCategoryFilter(pill.id)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    active
                      ? 'bg-gradient-to-r from-[#B48A5A] to-[#9A7245] text-white shadow-[0_6px_18px_rgba(154,114,69,0.28)]'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-white/80'
                  }`}
                >
                  {pill.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 5 Dedicated Auto-Animated Category Showcase Lanes */}
        {visibleLanes.length === 0 ? (
          <div className="glass-white rounded-[32px] p-12 text-center space-y-3">
            <p className="text-slate-700 font-semibold text-lg">
              No matching ceramic or granite items found for &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategoryFilter('all');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#B48A5A] to-[#9A7245] text-white text-sm font-bold cursor-pointer"
            >
              Show All 5 Category Galleries
            </button>
          </div>
        ) : (
          <div className="space-y-14 sm:space-y-16">
            {visibleLanes.map((lane) => (
              <Reveal key={lane.id}>
                <CategoryShowcaseLane
                  lane={lane}
                  items={lane.filteredItems}
                  isItemInShortlist={isItemInShortlist}
                  onToggleShortlist={toggleShortlist}
                  onQuickView={(product) => {
                    setQuickViewProduct(product);
                    setQuickViewVariant(0);
                  }}
                />
              </Reveal>
            ))}
          </div>
        )}
      </section>

      {/* =====================================================================
          4. INTERACTIVE MATERIAL & FINISH LIGHT STUDIO (WHITE GALLERY EDITION)
         ===================================================================== */}
      <section
        id="studio"
        className="relative z-10 py-18 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto"
      >
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#9A7245] mb-2">
                <Sliders className="w-3.5 h-3.5" />
                White Gallery Pairing Studio
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900">
                Material &amp; Finish{' '}
                <span className="font-serif-accent italic font-medium text-[#9A7245]">
                  Light Studio
                </span>
              </h2>
            </div>
            <p className="text-slate-500 text-sm sm:text-base max-w-md">
              Pair natural granite slabs with sculpted ceramic finishes and preview how showroom
              daylight and warm gallery lighting transform their luster.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="glass-white rounded-[36px] p-5 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Live Bright Photographic Split-Board Material Composition */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="relative flex-1 min-h-[340px] sm:min-h-[420px] rounded-[28px] overflow-hidden border border-white/95 bg-stone-100 shadow-[inset_0_2px_20px_rgba(15,23,42,0.06)]">
                {/* Architectural Split Composition: Background Granite Slab + Elevated Ceramic Showcase */}
                <div
                  className="absolute inset-0 transition-all duration-700"
                  style={{ filter: studioLight.filter }}
                >
                  {/* Full-Bleed Natural Stone / Granite Backdrop */}
                  <SafeProductImage
                    src={studioGranite.image}
                    alt={studioGranite.name}
                    fallbackIndex={0}
                    className="w-full h-full object-cover scale-105 transition-all duration-700"
                  />

                  {/* Centered Elevated Frosted Frame Displaying Selected Ceramic Finish */}
                  <div className="absolute inset-6 sm:inset-10 flex items-center justify-center">
                    <div className="w-full max-w-sm rounded-[26px] p-2.5 bg-white/80 backdrop-blur-2xl border border-white shadow-[0_24px_60px_rgba(15,23,42,0.16)] transition-all duration-500">
                      <div className="relative h-48 sm:h-56 rounded-[20px] overflow-hidden">
                        <SafeProductImage
                          src={studioFinish.image}
                          alt={studioFinish.name}
                          fallbackIndex={2}
                          className="w-full h-full object-cover transition-all duration-700"
                        />
                        {/* Dynamic Ceramic Glaze Specular Sheen */}
                        <div
                          className="pointer-events-none absolute inset-0 transition-opacity duration-500"
                          style={{
                            opacity: studioFinish.sheenOpacity,
                            background:
                              'linear-gradient(125deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.08) 42%, transparent 65%)',
                          }}
                        />
                      </div>
                      <div className="pt-2.5 px-2 pb-1 flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-900">{studioFinish.name}</span>
                        <span className="text-[#9A7245] font-semibold">× {studioGranite.name}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Live Showroom Lighting Overlay Shift */}
                <div
                  className="pointer-events-none absolute inset-0 transition-all duration-700"
                  style={{ background: studioLight.overlay }}
                />

                {/* Top Floating Pairing Pills */}
                <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-xl border border-white text-xs font-semibold text-slate-800 shadow-sm">
                    Slab: <strong className="text-[#9A7245]">{studioGranite.name}</strong> ({studioGranite.tag})
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-white/85 backdrop-blur-xl border border-white text-[11px] font-bold text-slate-700 shadow-sm">
                    {studioLight.kelvin} Light
                  </span>
                </div>

                {/* Bottom Bright Lighting Mood Switcher Pill */}
                <div className="absolute bottom-4 inset-x-4 flex justify-center sm:justify-start">
                  <div className="ios-dock rounded-full p-1 flex items-center gap-1">
                    {STUDIO_LIGHTS.map((light) => {
                      const Icon = light.icon;
                      const active = studioLight.id === light.id;
                      return (
                        <button
                          key={light.id}
                          type="button"
                          onClick={() => setStudioLight(light)}
                          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer ${
                            active
                              ? 'bg-gradient-to-r from-[#B48A5A] to-[#9A7245] text-white shadow-sm'
                              : 'text-slate-600 hover:text-slate-950 hover:bg-white/80'
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">{light.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Control Column: Granite + Ceramic Finish Pickers */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              {/* Step 1: Granite Stone Selector */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#9A7245]">
                    01. Natural Granite Surface
                  </span>
                  <span className="text-xs text-slate-500">{studioGranite.origin}</span>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {STUDIO_GRANITES.map((stone) => {
                    const active = studioGranite.id === stone.id;
                    return (
                      <button
                        key={stone.id}
                        type="button"
                        onClick={() => setStudioGranite(stone)}
                        className={`flex items-center gap-3 p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                          active
                            ? 'bg-white border-[#B48A5A] shadow-[0_8px_24px_rgba(180,138,90,0.16)]'
                            : 'bg-white/55 border-white/90 hover:bg-white'
                        }`}
                      >
                        <span
                          className="w-9 h-9 rounded-xl shrink-0 border border-slate-200/80 shadow-inner"
                          style={{ background: stone.swatch }}
                        />
                        <div className="min-w-0">
                          <div className="text-sm font-bold text-slate-900 truncate">
                            {stone.name}
                          </div>
                          <div className="text-[11px] text-slate-500">{stone.tag}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Ceramic Finish Selector */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-700">
                    02. Ceramic Glaze &amp; Finish
                  </span>
                  <span className="text-xs text-slate-500">{studioFinish.name}</span>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {STUDIO_FINISHES.map((fin) => {
                    const active = studioFinish.id === fin.id;
                    return (
                      <button
                        key={fin.id}
                        type="button"
                        onClick={() => setStudioFinish(fin)}
                        className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                          active
                            ? 'bg-white border-[#B48A5A] shadow-[0_8px_24px_rgba(180,138,90,0.16)]'
                            : 'bg-white/55 border-white/90 hover:bg-white'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-sm font-bold text-slate-900 truncate">
                            {fin.name}
                          </span>
                          <span
                            className="w-4 h-4 rounded-full border border-slate-300 shrink-0"
                            style={{ backgroundColor: fin.chipBg }}
                          />
                        </div>
                        <p className="text-[11px] text-slate-500 leading-snug">{fin.desc}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action Row */}
              <div className="pt-1 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="button"
                  onClick={handleSaveStudioPairing}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-gradient-to-r from-[#B48A5A] to-[#9A7245] text-white font-bold text-sm shadow-[0_10px_25px_rgba(154,114,69,0.28)] hover:brightness-105 transition cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  Shortlist This Pairing
                </button>
                <a
                  href={`tel:${CONTACT_INFO.primaryPhoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full glass-pill-light text-slate-800 hover:bg-white text-sm font-bold transition"
                >
                  <Phone className="w-4 h-4 text-[#9A7245]" />
                  Ask Specialist
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =====================================================================
          5. TILE & GRANITE AREA ESTIMATOR (ZERO PRICES / ZERO CURRENCY)
         ===================================================================== */}
      <section
        id="estimator"
        className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto"
      >
        <Reveal>
          <div className="glass-white rounded-[36px] p-6 sm:p-10 relative overflow-hidden">
            <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#F5E6D3]/70 blur-3xl" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left Interactive Room Controls */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#9A7245] mb-2">
                    <Calculator className="w-3.5 h-3.5" />
                    Architectural Area Planner
                  </div>
                  <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900">
                    Tile &amp; Granite{' '}
                    <span className="font-serif-accent italic font-medium text-[#9A7245]">
                      Area Estimator
                    </span>
                  </h2>
                  <p className="text-slate-500 text-sm mt-2">
                    Slide your room dimensions to calculate exact surface area, recommended +10%
                    cutting wastage, and required tile boxes or slabs.
                  </p>
                </div>

                {/* Length & Width Sliders */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="glass-pill-light rounded-3xl p-4 sm:p-5">
                    <div className="flex items-center justify-between mb-2.5">
                      <label
                        htmlFor="room-length"
                        className="text-xs font-semibold uppercase tracking-wider text-slate-500"
                      >
                        Room Length
                      </label>
                      <span className="font-display font-extrabold text-lg text-slate-900">
                        {estLength} <span className="text-xs font-semibold text-[#9A7245]">ft</span>
                      </span>
                    </div>
                    <input
                      id="room-length"
                      type="range"
                      min="4"
                      max="60"
                      value={estLength}
                      onChange={(e) => setEstLength(Number(e.target.value))}
                      className="w-full accent-[#9A7245] cursor-pointer"
                    />
                  </div>

                  <div className="glass-pill-light rounded-3xl p-4 sm:p-5">
                    <div className="flex items-center justify-between mb-2.5">
                      <label
                        htmlFor="room-width"
                        className="text-xs font-semibold uppercase tracking-wider text-slate-500"
                      >
                        Room Width
                      </label>
                      <span className="font-display font-extrabold text-lg text-slate-900">
                        {estWidth} <span className="text-xs font-semibold text-[#9A7245]">ft</span>
                      </span>
                    </div>
                    <input
                      id="room-width"
                      type="range"
                      min="4"
                      max="60"
                      value={estWidth}
                      onChange={(e) => setEstWidth(Number(e.target.value))}
                      className="w-full accent-[#9A7245] cursor-pointer"
                    />
                  </div>
                </div>

                {/* Selectable Tile / Slab Size Format */}
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2.5">
                    Select Tile or Slab Size
                  </span>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { id: '2x2', title: '2 × 2 ft', sub: 'Porcelain Tile' },
                      { id: '2x4', title: '2 × 4 ft', sub: 'Vitrified Slab' },
                      { id: '4x8', title: '4 × 8 ft', sub: 'Large Slab' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setEstFormat(opt.id)}
                        className={`p-3.5 rounded-2xl border text-left transition cursor-pointer ${
                          estFormat === opt.id
                            ? 'bg-white border-[#B48A5A] shadow-[0_8px_22px_rgba(180,138,90,0.16)]'
                            : 'bg-white/55 border-white/90 hover:bg-white'
                        }`}
                      >
                        <div className="font-display font-bold text-sm sm:text-base text-slate-900">
                          {opt.title}
                        </div>
                        <div className="text-[11px] text-slate-500">{opt.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Output Summary Frosted Card (STRICTLY NO PRICES) */}
              <div className="lg:col-span-5">
                <div className="glass-white-strong rounded-[28px] p-6 space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-200/75 pb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                      Calculated Quantity
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold">
                      +10% Wastage Included
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3.5">
                    <div className="p-4 rounded-2xl bg-[#FAFAF9] border border-slate-200/70">
                      <span className="text-[11px] font-semibold text-slate-500 block">
                        Net Floor Area
                      </span>
                      <span className="font-display font-extrabold text-2xl text-slate-900">
                        {estimate.netSqFt}
                      </span>
                      <span className="text-xs font-semibold text-[#9A7245] ml-1">sq.ft</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#FAFAF9] border border-slate-200/70">
                      <span className="text-[11px] font-semibold text-slate-500 block">
                        With +10% Wastage
                      </span>
                      <span className="font-display font-extrabold text-2xl text-slate-900">
                        {estimate.recommendedSqFt}
                      </span>
                      <span className="text-xs font-semibold text-[#9A7245] ml-1">sq.ft</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-gradient-to-r from-[#F6EFE6] via-white to-[#EEF2F6] border border-[#E5D5C0] flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#9A7245] block">
                        Estimated Requirement
                      </span>
                      <span className="font-display font-extrabold text-2xl text-slate-900">
                        {estimate.units}{' '}
                        <span className="text-xs font-sans font-semibold text-slate-600">
                          {estimate.unitLabel}
                        </span>
                      </span>
                    </div>
                    <Gem className="w-6 h-6 text-[#B48A5A] shrink-0" />
                  </div>

                  <div className="space-y-2.5">
                    <a
                      href={getWhatsAppEstimatorUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-[0_10px_25px_rgba(5,150,105,0.25)] transition"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Send Measurements via WhatsApp
                    </a>
                    <button
                      type="button"
                      onClick={handleAttachEstimateToForm}
                      className="w-full py-3 px-5 rounded-full glass-pill-light hover:bg-white text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer"
                    >
                      Attach to Showroom Inquiry Form
                      <ArrowRight className="w-3.5 h-3.5 text-[#9A7245]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =====================================================================
          WHY VARDHMAN — BRIGHT ARCHITECTURAL ASSURANCE STRIP
         ===================================================================== */}
      <section className="relative z-10 py-8 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              icon: ShieldCheck,
              title: 'Direct Quarry & Kiln Standards',
              desc: 'Hand-selected natural granite blocks and 1280°C high-fired vitreous ceramic sanitaryware.',
            },
            {
              icon: Droplets,
              title: 'Nano Anti-Stain Surface Glaze',
              desc: 'Hydrophobic glazed wash basins and rimless toilet closets built for effortless daily sheen.',
            },
            {
              icon: Award,
              title: 'Homeowners, Architects & Builders',
              desc: 'Curated material guidance, bulk availability, and live showroom walkthroughs.',
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title}>
                <div className="glass-white rounded-[28px] p-6 flex items-start gap-4 h-full">
                  <div className="w-11 h-11 rounded-2xl bg-[#F6EFE6] border border-[#E6D5BE] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#9A7245]" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-slate-900">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* =====================================================================
          6. CONTACT HUB & PROMINENT SHOWROOM NUMBERS (PURE WHITE GLASS)
         ===================================================================== */}
      <section
        id="contact"
        className="relative z-10 py-20 sm:py-28 px-4 sm:px-6 max-w-7xl mx-auto"
      >
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#9A7245] mb-2">
              <PhoneCall className="w-3.5 h-3.5" />
              Direct Showroom Desk
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900">
              Connect With{' '}
              <span className="font-serif-accent italic font-medium text-[#9A7245]">Vardhman</span>
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-3">
              Call our showroom desk for live slab availability, sample viewing, or personalized
              ceramic &amp; sanitaryware recommendations.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
          {/* Left Luminous White Frosted Contact Card */}
          <Reveal className="lg:col-span-5 flex">
            <div className="glass-white rounded-[34px] p-6 sm:p-8 flex flex-col justify-between w-full space-y-6">
              <div className="space-y-5">
                {/* Primary Showroom Hotline Spotlight */}
                <div className="p-5 rounded-[26px] bg-gradient-to-br from-[#FBF7F2] via-white to-[#F3ECE2] border border-[#E5D4BE] shadow-[0_10px_30px_rgba(154,114,69,0.08)]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#9A7245]">
                      Showroom Desk
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Available Now
                    </span>
                  </div>

                  <a
                    href={`tel:${CONTACT_INFO.primaryPhoneRaw}`}
                    className="block font-display font-extrabold text-2xl sm:text-3xl text-slate-900 hover:text-[#9A7245] transition tracking-wide"
                  >
                    {CONTACT_INFO.primaryPhoneDisplay}
                  </a>

                  <div className="flex flex-wrap gap-2.5 mt-4">
                    <a
                      href={`tel:${CONTACT_INFO.primaryPhoneRaw}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#B48A5A] to-[#9A7245] text-white font-bold text-xs sm:text-sm shadow-md hover:brightness-105 transition"
                    >
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopyPhone(CONTACT_INFO.primaryPhoneDisplay)}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 font-semibold text-xs sm:text-sm transition cursor-pointer"
                    >
                      <Copy className="w-4 h-4 text-[#9A7245]" />
                      Copy
                    </button>
                  </div>
                </div>

                {/* Wholesale & Architect Desk */}
                <div className="glass-pill-light rounded-2xl p-4 flex items-center justify-between gap-3">
                  <div>
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Wholesale &amp; Architect Desk
                    </span>
                    <a
                      href={`tel:${CONTACT_INFO.wholesalePhoneRaw}`}
                      className="text-base font-bold text-slate-900 hover:text-[#9A7245] transition"
                    >
                      {CONTACT_INFO.wholesalePhoneDisplay}
                    </a>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => handleCopyPhone(CONTACT_INFO.wholesalePhoneDisplay)}
                      className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#9A7245] transition cursor-pointer"
                      title="Copy Wholesale Number"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                    <a
                      href={`tel:${CONTACT_INFO.wholesalePhoneRaw}`}
                      className="p-2.5 rounded-full bg-[#F6EFE6] border border-[#E5D4BE] text-[#9A7245] hover:bg-[#EFE4D6] transition"
                      title="Call Wholesale Desk"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* WhatsApp Chat Button */}
                <a
                  href={getWhatsAppShortlistUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 font-bold text-sm transition"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-600" />
                  Chat on WhatsApp
                  {shortlist.length > 0 && (
                    <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[11px] font-bold">
                      {shortlist.length} items
                    </span>
                  )}
                </a>

                {/* Showroom Location & Hours */}
                <div className="space-y-3 pt-3 border-t border-slate-200/75 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#9A7245] mt-1 shrink-0" />
                    <span>{CONTACT_INFO.address}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#9A7245] mt-1 shrink-0" />
                    <div>
                      <div className="font-medium text-slate-800">{CONTACT_INFO.timings}</div>
                      <div className="text-xs text-slate-500">{CONTACT_INFO.sundayNote}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Inquiry & Callback White Glass Form */}
          <Reveal delay={100} className="lg:col-span-7 flex">
            <div className="glass-white rounded-[34px] p-6 sm:p-8 w-full flex flex-col justify-center">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9 text-emerald-600" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-slate-900">
                    Inquiry Received!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. A
                    VARDHMAN ceramic &amp; granite consultant will reach out on{' '}
                    <strong className="text-[#9A7245]">{formData.phone}</strong> shortly.
                  </p>
                  <div className="pt-3 flex flex-wrap justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          interest: 'Granite Slabs & Designer Tiles',
                          message: '',
                        });
                      }}
                      className="px-5 py-2.5 rounded-full glass-pill-light text-sm font-bold text-slate-800 hover:bg-white cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                    <a
                      href={`tel:${CONTACT_INFO.primaryPhoneRaw}`}
                      className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#B48A5A] to-[#9A7245] text-white text-sm font-bold"
                    >
                      Call {CONTACT_INFO.primaryPhoneDisplay}
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
                        Request Showroom Callback
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                        Share your requirements or shortlisted items and our desk will connect with
                        catalog options.
                      </p>
                    </div>
                    {shortlist.length > 0 && (
                      <button
                        type="button"
                        onClick={handleLoadShortlistIntoForm}
                        className="text-xs px-3.5 py-1.5 rounded-full bg-[#F6EFE6] border border-[#E5D4BE] text-[#9A7245] font-bold hover:bg-[#EFE3D2] transition cursor-pointer"
                      >
                        Load {shortlist.length} Shortlisted Items
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="c-name"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2"
                      >
                        Your Name *
                      </label>
                      <input
                        id="c-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g., Aarav Mehta"
                        className="w-full rounded-2xl bg-white/85 border border-slate-200/90 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#B48A5A]/40"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="c-phone"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2"
                      >
                        Mobile Number *
                      </label>
                      <input
                        id="c-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98XXX XXXXX"
                        className="w-full rounded-2xl bg-white/85 border border-slate-200/90 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#B48A5A]/40"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="c-interest"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2"
                    >
                      Category of Interest
                    </label>
                    <select
                      id="c-interest"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full rounded-2xl bg-white/90 border border-slate-200/90 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B48A5A]/40"
                    >
                      <option value="Granite Slabs & Designer Tiles">
                        Granite Slabs &amp; Designer Tiles
                      </option>
                      <option value="Wash Basins">Designer Wash Basins</option>
                      <option value="Toilet Seats & Sanitaryware">
                        Toilet Seats &amp; Sanitaryware
                      </option>
                      <option value="More Ceramic Creations">
                        More Ceramic Creations &amp; Soaking Tubs
                      </option>
                      <option value="Complete Architectural Project">
                        Complete Home / Commercial Project
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="c-message"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2"
                    >
                      Project Details / Shortlisted Designs
                    </label>
                    <textarea
                      id="c-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Mention preferred granite textures, tile sizes, wash basin styles, or showroom visit date..."
                      className="w-full rounded-2xl bg-white/85 border border-slate-200/90 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#B48A5A]/40 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-[#B48A5A] to-[#9A7245] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-[0_12px_32px_rgba(154,114,69,0.3)] hover:brightness-105 transition cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    Send Inquiry to VARDHMAN
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================================
          LUMINOUS WHITE GLASS FOOTER
         ===================================================================== */}
      <footer className="relative z-10 border-t border-slate-200/80 bg-white/75 backdrop-blur-2xl py-10 px-4 sm:px-6 pb-28 lg:pb-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="font-display font-extrabold tracking-[0.2em] text-lg text-slate-900">
              {CONTACT_INFO.brand}
            </div>
            <div className="text-xs text-slate-500 mt-1">
              {CONTACT_INFO.tagline} • Showroom Desk:{' '}
              <a
                href={`tel:${CONTACT_INFO.primaryPhoneRaw}`}
                className="text-[#9A7245] font-bold hover:underline"
              >
                {CONTACT_INFO.primaryPhoneDisplay}
              </a>
            </div>
          </div>
          <div className="text-xs text-slate-400">
            © {new Date().getFullYear()} VARDHMAN Ceramic &amp; Granite. Pure Architectural Surfaces.
          </div>
        </div>
      </footer>

      {/* =====================================================================
          FLOATING WHITE GLASS QUICK-CALL & WHATSAPP PILL (NON-COLLIDING)
         ===================================================================== */}
      <div className="fixed bottom-24 lg:bottom-5 right-4 lg:right-5 z-30">
        <div className="ios-dock rounded-full p-1.5 flex items-center gap-1.5 shadow-[0_12px_36px_rgba(15,23,42,0.12)]">
          <a
            href={getWhatsAppShortlistUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-sm transition"
            title="WhatsApp Vardhman Showroom"
            aria-label="WhatsApp Vardhman Showroom"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <a
            href={`tel:${CONTACT_INFO.primaryPhoneRaw}`}
            className="hidden sm:inline-flex items-center gap-2 pl-2 pr-3.5 py-2 rounded-full bg-white hover:bg-[#FAF6F1] text-slate-900 font-bold text-xs border border-slate-200/80 transition"
          >
            <Phone className="w-3.5 h-3.5 text-[#9A7245]" />
            <span>{CONTACT_INFO.primaryPhoneDisplay}</span>
          </a>
          <a
            href={`tel:${CONTACT_INFO.primaryPhoneRaw}`}
            className="sm:hidden w-10 h-10 rounded-full bg-gradient-to-r from-[#B48A5A] to-[#9A7245] text-white flex items-center justify-center shadow-sm"
            aria-label="Call Vardhman Showroom"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* =====================================================================
          WHITE FROSTED GLASS QUICK VIEW MODAL (ZERO PRICES)
         ===================================================================== */}
      {quickViewProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/25 backdrop-blur-md"
          onClick={() => setQuickViewProduct(null)}
        >
          <div
            className="glass-white-strong rounded-[34px] max-w-3xl w-full p-5 sm:p-8 relative max-h-[90vh] overflow-y-auto shadow-[0_30px_90px_rgba(15,23,42,0.18)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-950 transition cursor-pointer shadow-sm"
              aria-label="Close Quick View"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* High-Res Photo + Finish Variant Selector */}
              <div className="md:col-span-6 space-y-4">
                <div className="relative h-64 sm:h-72 rounded-[24px] overflow-hidden bg-stone-100 border border-white shadow-sm">
                  <SafeProductImage
                    src={quickViewProduct.image}
                    alt={quickViewProduct.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/85 backdrop-blur-xl text-[11px] font-bold text-slate-800 shadow-sm">
                    {quickViewProduct.availability}
                  </span>
                </div>

                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                    Select Surface Finish
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {quickViewProduct.variants.map((variant, idx) => (
                      <button
                        key={variant}
                        type="button"
                        onClick={() => setQuickViewVariant(idx)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition cursor-pointer ${
                          quickViewVariant === idx
                            ? 'bg-gradient-to-r from-[#B48A5A] to-[#9A7245] border-transparent text-white shadow-sm'
                            : 'bg-white/80 border-slate-200 text-slate-700 hover:bg-white'
                        }`}
                      >
                        {variant}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Architectural Specifications & Inquiry Actions (ZERO PRICES) */}
              <div className="md:col-span-6 space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#9A7245]">
                    {quickViewProduct.category} • {quickViewProduct.grade}
                  </span>
                  <h3 className="font-display font-extrabold text-2xl text-slate-900 mt-1 leading-tight">
                    {quickViewProduct.name}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {quickViewProduct.description}
                </p>

                {/* Technical Specification List */}
                <div className="space-y-2 pt-2 border-t border-slate-200/80 text-xs">
                  {Object.entries(quickViewProduct.specs).map(([key, val]) => (
                    <div
                      key={key}
                      className="flex items-start justify-between gap-4 py-1.5 border-b border-slate-100"
                    >
                      <span className="uppercase tracking-wider text-slate-400 font-semibold">
                        {key}
                      </span>
                      <span className="text-slate-800 font-semibold text-right">{val}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex gap-2.5">
                    <button
                      type="button"
                      onClick={() => toggleShortlist(quickViewProduct)}
                      className={`flex-1 py-3 px-4 rounded-full text-sm font-bold flex items-center justify-center gap-2 transition cursor-pointer ${
                        isItemInShortlist(quickViewProduct.id)
                          ? 'bg-emerald-50 border border-emerald-300 text-emerald-700'
                          : 'bg-gradient-to-r from-[#B48A5A] to-[#9A7245] text-white shadow-md'
                      }`}
                    >
                      {isItemInShortlist(quickViewProduct.id) ? (
                        <>
                          <Check className="w-4 h-4" /> Shortlisted
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" /> Add to Shortlist
                        </>
                      )}
                    </button>
                    <a
                      href={`tel:${CONTACT_INFO.primaryPhoneRaw}`}
                      className="py-3 px-4 rounded-full glass-pill-light text-slate-800 hover:bg-white text-sm font-bold flex items-center justify-center gap-1.5"
                    >
                      <Phone className="w-4 h-4 text-[#9A7245]" />
                      Call
                    </a>
                  </div>

                  <a
                    href={getWhatsAppProductUrl(
                      quickViewProduct,
                      quickViewProduct.variants[quickViewVariant]
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold flex items-center justify-center gap-2 transition shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Inquire on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          SLIDE-OVER WHITE GLASS INQUIRY SHORTLIST DRAWER (ZERO PRICES)
         ===================================================================== */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-slate-900/20 backdrop-blur-sm"
          onClick={() => setDrawerOpen(false)}
        >
          <div
            className="glass-white-strong w-full max-w-md h-full p-6 flex flex-col justify-between border-l border-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/80">
                <div className="flex items-center gap-2.5">
                  <ShoppingBag className="w-5 h-5 text-[#9A7245]" />
                  <h3 className="font-display font-bold text-lg text-slate-900">
                    Inquiry Shortlist ({shortlist.length})
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-950 cursor-pointer"
                  aria-label="Close Shortlist"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {shortlist.length === 0 ? (
                <div className="py-16 text-center space-y-3">
                  <Layers className="w-10 h-10 text-slate-300 mx-auto" />
                  <p className="text-slate-700 text-sm font-semibold">
                    Your Vardhman shortlist is empty.
                  </p>
                  <p className="text-slate-500 text-xs max-w-xs mx-auto">
                    Tap &ldquo;+ Shortlist&rdquo; on any Granite slab, Tile, Wash Basin, or Toilet
                    Seat to send a combined showroom inquiry.
                  </p>
                </div>
              ) : (
                <div className="mt-4 space-y-3 max-h-[58vh] overflow-y-auto pr-1">
                  {shortlist.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-2xl bg-white/85 border border-slate-200/80 p-3 flex items-center gap-3 shadow-sm"
                    >
                      {item.image && (
                        <SafeProductImage
                          src={item.image}
                          alt={item.name}
                          className="w-14 h-14 rounded-xl object-cover shrink-0 border border-slate-100"
                        />
                      )}
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#9A7245]">
                          {item.category}
                        </span>
                        <div className="text-sm font-bold text-slate-900 truncate">{item.name}</div>
                        <div className="text-[11px] text-slate-500 truncate">
                          {item.dimensions || item.finish}
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => toggleShortlist(item)}
                        className="p-2 rounded-full bg-slate-50 hover:bg-red-50 text-slate-400 hover:text-red-500 transition cursor-pointer shrink-0"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-200/80 space-y-2.5">
              <a
                href={getWhatsAppShortlistUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition"
              >
                <MessageCircle className="w-4 h-4" />
                Send Shortlist on WhatsApp
              </a>

              {shortlist.length > 0 && (
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={handleLoadShortlistIntoForm}
                    className="py-2.5 px-3 rounded-full bg-gradient-to-r from-[#B48A5A] to-[#9A7245] text-white font-bold text-xs flex items-center justify-center gap-1 cursor-pointer"
                  >
                    Fill Quote Form
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleCopyShortlist}
                    className="py-2.5 px-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5 text-[#9A7245]" />
                    Copy List
                  </button>
                </div>
              )}

              <a
                href={`tel:${CONTACT_INFO.primaryPhoneRaw}`}
                className="w-full py-2.5 rounded-full glass-pill-light text-slate-800 font-bold text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#9A7245]" />
                Call Showroom: {CONTACT_INFO.primaryPhoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          LUMINOUS WHITE GLASS TOAST NOTIFICATION
         ===================================================================== */}
      {toast && (
        <div className="fixed top-20 lg:top-24 right-4 sm:right-6 z-50 max-w-xs w-full ios-dock rounded-2xl p-3.5 flex items-start gap-3 shadow-[0_18px_45px_rgba(15,23,42,0.14)]">
          <div className="w-8 h-8 rounded-full bg-[#F6EFE6] border border-[#E5D4BE] flex items-center justify-center shrink-0">
            <Check className="w-4 h-4 text-[#9A7245]" />
          </div>
          <div className="min-w-0">
            <div className="text-sm font-bold text-slate-900">{toast.title}</div>
            {toast.subtitle && (
              <div className="text-xs text-slate-500 mt-0.5 truncate">{toast.subtitle}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}