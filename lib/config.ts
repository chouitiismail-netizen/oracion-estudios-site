// Curated content configuration for homepage sections

export const START_HERE_SLUGS = [
  'oraciones-por-los-estudios',
  'oracion-para-estudiar-bien',
  'oracion-antes-de-un-examen',
  'oracion-para-aprobar-un-examen',
  'oracion-para-concentrarse-al-estudiar',
  'oracion-para-estudiantes',
];

export const FEATURED_SLUGS = [
  'oracion-para-la-memoria-y-concentracion',
  'oracion-para-los-examenes-finales',
  'oracion-para-estudiar-sin-ansiedad',
  'oracion-para-confiar-antes-de-un-examen',
  'oracion-para-aprender-mejor',
  'oracion-para-rendir-bien-en-clase',
];

// Primary prayer for main CTA
export const PRIMARY_PRAYER_SLUG = 'oraciones-por-los-estudios';

// Quick action categories with icons and slugs
export interface QuickAction {
  id: string;
  label: string;
  icon: 'anxiety' | 'gratitude' | 'protection' | 'family' | 'trust';
  slug: string;
}

export const QUICK_ACTIONS: QuickAction[] = [
  { id: 'examen', label: 'Antes examen', icon: 'trust', slug: 'oracion-antes-de-un-examen' },
  { id: 'concentracion', label: 'Concentración', icon: 'gratitude', slug: 'oracion-para-concentrarse-al-estudiar' },
  { id: 'ansiedad', label: 'Sin ansiedad', icon: 'anxiety', slug: 'oracion-para-estudiar-sin-ansiedad' },
  { id: 'memoria', label: 'Memoria', icon: 'protection', slug: 'oracion-para-la-memoria-y-concentracion' },
  { id: 'confianza', label: 'Confianza', icon: 'family', slug: 'oracion-para-confiar-antes-de-un-examen' },
];

// Daily verse for spiritual inspiration
export const DAILY_VERSES = [
  { text: 'Si alguno de vosotros tiene falta de sabiduría, pídala a Dios, el cual da a todos abundantemente y sin reproche, y le será dada.', reference: 'Santiago 1:5' },
  { text: 'Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él.', reference: 'Proverbios 22:6' },
  { text: 'Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis.', reference: 'Jeremías 29:11' },
  { text: 'Todo lo puedo en Cristo que me fortalece.', reference: 'Filipenses 4:13' },
  { text: 'Confía en Jehová de todo tu corazón, y no te apoyes en tu propia prudencia.', reference: 'Proverbios 3:5' },
];

export function getDailyVerse() {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  return DAILY_VERSES[dayOfYear % DAILY_VERSES.length];
}
