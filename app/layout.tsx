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
  title: "Oraciones por el matrimonio - Oraciones para fortalecer la relación de pareja",
  description: "Oraciones originales para fortalecer la relación, sanar heridas, recuperar la confianza y vivir el amor con Dios en el centro.",
  keywords: ["oraciones por el matrimonio", "oraciones por mi esposo", "oraciones por mi esposa", "oraciones católicas para parejas", "oraciones para fortalecer el matrimonio"],
  openGraph: {
    title: "Oraciones por el matrimonio",
    description: "Oraciones originales para fortalecer la relación, sanar heridas, recuperar la confianza y vivir el amor con Dios en el centro.",
    url: baseUrl,
    siteName: "Oraciones por el matrimonio",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oraciones por el matrimonio",
    description: "Oraciones originales para fortalecer la relación, sanar heridas, recuperar la confianza y vivir el amor con Dios en el centro.",
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
