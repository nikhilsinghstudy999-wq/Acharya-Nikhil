'use client';
import { useEffect } from 'react';

export default function ContactPage() {
  useEffect(() => {
    // WhatsApp URL with pre‑filled message
    window.location.href = 'https://wa.me/919876369136?text=Hello%20Acharya%20Nikhil%20Shastri%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center cosmic-gradient">
      <div className="text-center glass-card p-8">
        <p className="text-xl text-gray-700">Redirecting you to WhatsApp...</p>
        <p className="text-gray-500 mt-2">
          If you are not redirected,{' '}
          <a
            href="https://wa.me/919876369136"
            className="text-orange-600 underline"
          >
            click here
          </a>.
        </p>
      </div>
    </div>
  );
}
