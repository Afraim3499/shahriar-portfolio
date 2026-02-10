import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SchemaData } from "@/components/layout/SchemaData";
import { CookieConsent } from "@/components/ui/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://shahriar-kabir.com'),
  title: {
    default: "Shahriar Kabir | Process Architect",
    template: "%s | Shahriar Kabir"
  },
  description: "Director of Operations & Process Architect specializing in building and operating global teams at scale. Based in Dhaka.",
  keywords: ["Process Architect", "Operations Strategy", "Global Teams", "PrimeSync AI", "AI Operations", "Dhaka Tech", "BPO Strategy"],
  authors: [{ name: "Shahriar Kabir" }],
  creator: "Shahriar Kabir",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shahriar-kabir.com",
    title: "Shahriar Kabir | Process Architect",
    description: "Building and Operating Global Teams at Scale. Director of Operations at PrimeSync AI.",
    siteName: "Shahriar Kabir",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Shahriar Kabir - Process Architect"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahriar Kabir | Process Architect",
    description: "Director of Operations at PrimeSync AI. Building global teams.",
    site: "@shahriarhisham",
    creator: "@shahriarhisham",
    images: ["/og-image.jpg"]
  },
  appleWebApp: {
    title: "Shahriar Kabir",
    statusBarStyle: "default",
    capable: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <SchemaData />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary selection:text-white",
          inter.variable,
          fraunces.variable,
          jetbrains.variable
        )}
      >
        <header>
          <Navigation />
        </header>
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CookieConsent />
        <Script
          src="//www.instagram.com/embed.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
