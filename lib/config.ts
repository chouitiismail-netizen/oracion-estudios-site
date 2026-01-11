// Curated content configuration for homepage sections

export const START_HERE_SLUGS = [
  'oraciones-por-el-matrimonio',
  'oracion-por-mi-matrimonio',
  'oracion-por-mi-esposo',
  'oracion-por-mi-esposa',
  'oracion-para-fortalecer-el-matrimonio',
  'oracion-por-el-amor-en-el-matrimonio',
];

export const FEATURED_SLUGS = [
  'oracion-para-salvar-el-matrimonio',
  'oracion-por-crisis-matrimonial',
  'oracion-para-reconciliacion-en-el-matrimonio',
  'oracion-para-sanar-heridas-de-pareja',
  'oracion-para-restaurar-la-confianza',
  'oracion-por-la-paz-en-el-hogar',
];

// Primary prayer for main CTA
export const PRIMARY_PRAYER_SLUG = 'oraciones-por-el-matrimonio';

// Quick action categories with icons and slugs
export interface QuickAction {
  id: string;
  label: string;
  icon: 'anxiety' | 'gratitude' | 'protection' | 'family' | 'trust';
  slug: string;
}

export const QUICK_ACTIONS: QuickAction[] = [
  { id: 'fortalecer', label: 'Fortalecer', icon: 'protection', slug: 'oracion-para-fortalecer-el-matrimonio' },
  { id: 'comunicacion', label: 'Comunicación', icon: 'family', slug: 'oracion-para-la-comunicacion-en-pareja' },
  { id: 'perdon', label: 'Perdón', icon: 'gratitude', slug: 'oracion-para-perdonar-en-el-matrimonio' },
  { id: 'paz', label: 'Paz', icon: 'trust', slug: 'oracion-por-la-paz-en-el-hogar' },
  { id: 'unidad', label: 'Unidad', icon: 'anxiety', slug: 'oracion-por-unidad-matrimonial' },
];

// Daily verse for "Santo del día" equivalent
export const DAILY_VERSES = [
  { text: 'Lo que Dios unió, que no lo separe el hombre.', reference: 'Marcos 10:9' },
  { text: 'El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso ni orgulloso.', reference: '1 Corintios 13:4' },
  { text: 'Sobre todo, ámense los unos a los otros profundamente, porque el amor cubre multitud de pecados.', reference: '1 Pedro 4:8' },
  { text: 'Maridos, amen a sus esposas, así como Cristo amó a la iglesia y se entregó por ella.', reference: 'Efesios 5:25' },
  { text: 'Más valen dos que uno, porque obtienen más fruto de su esfuerzo.', reference: 'Eclesiastés 4:9' },
];

export function getDailyVerse() {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  return DAILY_VERSES[dayOfYear % DAILY_VERSES.length];
}
