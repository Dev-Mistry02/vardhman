export {
  CONTACT_INFO,
  FALLBACK_IMAGES,
  CATEGORY_LANES,
  ALL_PRODUCTS,
  STUDIO_GRANITES,
  STUDIO_FINISHES,
  STUDIO_LIGHTS,
} from '../vardhmanShowroom.tsx';

export const buildWhatsAppUrl = (phoneNumber, body) =>
  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(body)}`;
