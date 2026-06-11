'use client';
import { Share2 } from 'lucide-react';

export default function ShareButton({ title, text }: { title: string; text: string }) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title, text: text.slice(0, 100), url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href).then(() => alert('Link copied!'));
    }
  };

  return (
    <button onClick={handleShare} className="mt-6 inline-flex items-center text-orange-500 hover:text-orange-700 gap-2">
      <Share2 className="w-4 h-4" /> Share
    </button>
  );
}
