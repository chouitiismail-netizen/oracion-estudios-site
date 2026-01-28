import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oracion-estudios-site.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Oraciones por los estudios - Fe, calma y confianza en tu camino académico",
  description: "Oraciones y reflexiones para estudiantes, exámenes y momentos de estudio con fe, calma y confianza.",
  keywords: ["oraciones por los estudios", "oración para estudiar bien", "oración antes de un examen", "oración para aprobar un examen", "oración para estudiantes"],
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "Oraciones por los estudios",
    description: "Oraciones y reflexiones para estudiantes, exámenes y momentos de estudio con fe, calma y confianza.",
    url: baseUrl,
    siteName: "Oraciones por los estudios",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oraciones por los estudios",
    description: "Oraciones y reflexiones para estudiantes, exámenes y momentos de estudio con fe, calma y confianza.",
  },
  other: {
    'theme-color': '#d17b27',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${fraunces.variable} ${inter.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
