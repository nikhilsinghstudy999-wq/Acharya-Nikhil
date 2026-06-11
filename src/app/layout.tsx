import '@/styles/globals.css';
import { siteConfig } from '@/lib/seo-constants';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.name, template: `%s | ${siteConfig.shortName}` },
  description: siteConfig.description,
  keywords: ['astrology','horoscope','vedic','daily horoscope','kundli','tarot'],
  authors: [{ name: siteConfig.author }],
  openGraph: {
    type:'website', locale:'en_IN', url: siteConfig.url,
    title: siteConfig.name, description: siteConfig.description,
    siteName: siteConfig.shortName,
    images: [{ url: siteConfig.ogImage, width:1200, height:630 }]
  },
  twitter: { card:'summary_large_image', title: siteConfig.name, description: siteConfig.description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-cosmic-900 text-white">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
