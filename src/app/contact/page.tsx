'use client';
import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    window.location.href = 'https://wa.me/919876369136?text=Hello%20Acharya%20Nikhil%20Shastri';
  }, []);
  return <div className="min-h-screen flex items-center justify-center"><p>Redirecting to WhatsApp...</p></div>;
}
