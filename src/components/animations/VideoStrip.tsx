'use client';

export default function VideoStrip() {
  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-3xl shadow-2xl">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/cosmic-loop.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-yellow-500/30 flex items-center justify-center">
        <p className="text-white text-3xl md:text-5xl font-serif font-bold drop-shadow-lg">Cosmic Energy Flow</p>
      </div>
    </div>
  );
}
