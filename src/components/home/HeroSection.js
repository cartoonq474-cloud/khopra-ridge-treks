import React from "react";
import Image from "next/image";
import HeroDescription from "./HeroDescription";

export default function HeroSection() {

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-white py-24 bg-stone-950">
      <Image
        src="/khopra-hero-bg.webp"
        alt="Khopra Ridge Trek Background"
        fill
        priority
        quality={40}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-stone-950/70 z-10" />
      <div className="mx-auto max-w-7xl px-6 relative z-20 w-full flex flex-col justify-center">
        {/* Google Reviews Trust Badge */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-4 rounded-xl bg-stone-950/60 px-5 py-2.5 border border-white/10 backdrop-blur-md">
            <div className="flex flex-col items-center border-r border-white/15 pr-4">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
              </svg>
              <span className="text-[7px] font-bold text-stone-400 uppercase tracking-widest mt-1">Reviews</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[11px] text-stone-200 font-semibold">Excellent <strong className="text-emerald-400">4.9</strong> out of 5</span>
              <div className="flex text-emerald-400 text-[10px]">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow badge */}
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-bold text-emerald-400 border border-emerald-500/20 uppercase tracking-widest">
            The Ultimate Himalayan Adventure
          </span>
          {/* Main Headline */}
          <h1 className="mt-6 text-5xl font-black tracking-tight sm:text-7xl lg:text-8xl leading-[1.05]">
            Khopra Ridge Trek
          </h1>
          {/* Description */}
          <HeroDescription />

          {/* Bottom Info Row */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-8 border-t border-white/10 pt-8 max-w-2xl mx-auto">
            {/* Trust Proof */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                ].map((url, i) => (
                  <div key={i} className="relative h-8 w-8 rounded-full border-2 border-stone-950 overflow-hidden flex-shrink-0">
                    <Image fill src={url} sizes="32px" alt="User Avatar" className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start">
                <div className="flex text-emerald-400 text-[10px]">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <span className="text-[10px] font-bold text-stone-300 mt-0.5">Trusted by 14.8k+ trekkers</span>
              </div>
            </div>

            {/* Separator */}
            <div className="hidden sm:block h-6 w-px bg-white/15" />

            {/* Video Card */}
            <div className="flex items-center gap-3 rounded-2xl bg-stone-950/40 border border-white/10 p-2 pr-4 backdrop-blur-sm">
              <div className="relative h-10 w-16 rounded-xl overflow-hidden bg-emerald-900 flex items-center justify-center">
                <Image src="/khopra-hero-bg.png" fill sizes="64px" className="object-cover opacity-60" alt="Video Thumbnail" />
                <span className="relative z-10 h-5 w-5 rounded-full bg-white/95 flex items-center justify-center shadow-md">
                  <span className="border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[5px] border-l-stone-900 ml-0.5" />
                </span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[8px] font-extrabold text-emerald-400 uppercase tracking-widest">Trek Reel</span>
                <span className="text-[11px] font-bold text-white mt-0.5">2026 Trail Preview</span>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="#itinerary"
              className="rounded-full bg-emerald-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-950/20 hover:bg-emerald-500 transition-all hover:scale-105 hover-lift glow-btn"
            >
              Explore Trek
            </a>
            <a
              href="#book"
              className="rounded-full bg-transparent px-8 py-3.5 text-sm font-bold text-stone-200 border border-white/20 hover:bg-white/10 transition-all hover:scale-105"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
