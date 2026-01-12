# Oraciones por los estudios

Sitio web católico dedicado a oraciones para estudiantes, exámenes y momentos de estudio con fe, calma y confianza en Dios.

## Características

- **25 oraciones originales** sobre temas académicos y estudios
- **Arquitectura robusta**: Next.js 16 + TypeScript + Tailwind CSS
- **SEO optimizado**: Metadata completa, canonical URLs, sitemap, robots.txt
- **Diseño premium**: Tipografía (Fraunces + Inter), colores armoniosos, responsive
- **Páginas legales**: Aviso Legal y Política de Privacidad
- **CTA permanente**: Enlaces a jesuscontigo.org en header, footer y páginas

## Estructura

```
oracion-estudios-site/
├── app/
│   ├── layout.tsx          # Layout raíz con metadata
│   ├── page.tsx            # Homepage (servidor)
│   ├── [slug]/page.tsx     # Páginas dinámicas con metadata
│   ├── sitemap.ts          # Generación de sitemap.xml
│   └── robots.ts           # Configuración robots.txt
├── components/
│   ├── Header.tsx          # Navegación + CTA
│   ├── Footer.tsx          # Links legales + CTA
│   ├── HomeClient.tsx      # Lógica cliente (búsqueda, filtros)
│   └── ui/                 # Componentes reutilizables
├── content/pages/          # 25 oraciones + 2 legales (MDX)
└── lib/
    ├── content.ts          # Funciones para leer MDX
    └── config.ts           # Configuración de secciones curadas
```

## Desarrollo

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Build de producción
npm run build

# Servir build
npm start
```

## Contenido

### Oraciones principales (25)

Temas: estudiar bien, exámenes, concentración, memoria, ansiedad académica, éxito académico, disciplina, estudiantes universitarios, aprobar exámenes, claridad mental, confianza, perseverancia, y más.

### Secciones homepage

1. **Hero**: CTA principal a oración destacada
2. **Comienza aquí**: 6 oraciones esenciales para estudiantes
3. **Destacadas**: 6 oraciones poderosas para exámenes y aprendizaje
4. **Búsqueda y filtros**: Todas las oraciones (estudios only)
5. **Footer**: Enlaces legales + CTA

### Páginas legales (categoría: "legal")

- Aviso Legal
- Política de Privacidad

*Excluidas de Featured, Grids, Search y Filtros. Visibles solo vía footer.*

## SEO

- Title y description únicos por página
- Keywords específicos por contenido
- Canonical URLs automáticos
- Open Graph y Twitter Cards
- Sitemap.xml dinámico
- Robots.txt configurado

## Deployment

1. Push a GitHub
2. Conectar con Vercel
3. Configurar variable de entorno:
   ```
   NEXT_PUBLIC_SITE_URL=https://tu-dominio.vercel.app
   ```
4. Deploy automático

## Tecnologías

- **Next.js 16.1.1** (App Router + Turbopack)
- **React 19.2.3**
- **TypeScript 5**
- **Tailwind CSS 3.4.17**
- **gray-matter 4.0.3** (parsing MDX)

## Calidad

✅ Build sin errores TypeScript
✅ Sin warnings de React keys
✅ MDX con frontmatter válido
✅ Sin crashes de runtime
✅ Diseño responsive y moderno
✅ Legal pages funcionando correctamente
✅ Disclaimer en páginas de oración

## Licencia

Contenido original © 2026. Uso personal permitido. Uso comercial requiere autorización.

---

**Sitio principal**: [Jesús Contigo](https://www.jesuscontigo.org/)
