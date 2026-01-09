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

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://REPLACE_AFTER_VERCEL.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Oraciones de protección - Oraciones para pedir protección a Dios",
  description: "Oraciones originales para pedir protección para el hogar, la familia, los viajes y el descanso, confiando en Dios cada día.",
  keywords: ["oraciones de protección", "oraciones católicas", "protección divina", "oraciones para la familia", "protección espiritual"],
  openGraph: {
    title: "Oraciones de protección",
    description: "Oraciones originales para pedir protección para el hogar, la familia, los viajes y el descanso, confiando en Dios cada día.",
    url: baseUrl,
    siteName: "Oraciones de protección",
    locale: "es_ES",
    type: "website",
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
