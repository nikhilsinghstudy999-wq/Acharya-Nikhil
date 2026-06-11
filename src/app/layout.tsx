import '@/styles/globals.css';
import type { Metadata } from 'next';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
  title: 'Acharya Nikhil Shastri – India\'s Most Viewed Astrology Expert',
  description: 'Daily horoscopes, tarot, and premium kundli by Acharya Nikhil Shastri.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-gradient-to-br from-orange-50 to-yellow-50">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
