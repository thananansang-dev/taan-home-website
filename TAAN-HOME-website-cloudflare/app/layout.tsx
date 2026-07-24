import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MetaPixel from "./MetaPixel";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://taanhome.com"),
  title: "TAAN HOME | Modern Luxury Furniture",
  description:
    "Discover modern luxury furniture for considered living. Visit the TAAN HOME showroom in Bangkok.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TAAN HOME | Modern Luxury Furniture",
    description:
      "Discover modern luxury furniture for considered living. Visit the TAAN HOME showroom in Bangkok.",
    url: "/",
    siteName: "TAAN HOME",
    type: "website",
    images: [{ url: "/images/taan-hero.webp", alt: "TAAN HOME modern luxury furniture" }],
  },
  other: {
    "codex-preview": "development",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <MetaPixel />
      </body>
    </html>
  );
}
