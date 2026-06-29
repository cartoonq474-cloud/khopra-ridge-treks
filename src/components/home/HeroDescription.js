"use client";

import React, { useState } from "react";

export default function HeroDescription() {
  const [isHeroExpanded, setIsHeroExpanded] = useState(false);

  return (
    <div className="mt-6 text-base sm:text-lg text-stone-300 leading-relaxed max-w-3xl mx-auto space-y-4 text-center">
      <p>
        Discover the uncrowded wonders of the Annapurna region. A serene, visually stunning journey featuring sacred alpine lakes, community lodges, and the most dramatic 360-degree views of Dhaulagiri and Annapurna South. This wilderness trail winds through pristine rhododendron forests, authentic Magar villages, and high-alpine pastures, offering a rare opportunity to support local communities directly.
        {!isHeroExpanded && (
          <button
            type="button"
            onClick={() => setIsHeroExpanded(true)}
            className="text-emerald-400 hover:text-emerald-300 font-bold underline transition ml-1 inline-flex items-center cursor-pointer"
          >
            See More →
          </button>
        )}
      </p>
      
      {/* 
        SSR SEO ARCHITECTURE:
        This container is permanently rendered in the HTML DOM tree during Server-Side Rendering (SSR).
        Search engine crawlers (Googlebot) read and index 100% of the keywords inside this markup.
        CSS controls visual visibility for client-side users.
      */}
      <div className={isHeroExpanded ? "space-y-4 mt-4 block transition-all duration-300 opacity-100 animate-fade-in" : "hidden"}>
        <p>
          From the high vantage point of Khopra Ridge, experience unparalleled vistas of the world's deepest gorge and majestic 8,000m peaks, all while avoiding the mainstream trekking crowds.
        </p>
        <p>
          The Khopra Ridge Trek is a scenic Kathmandu-to-Kathmandu trekking adventure that showcases the quieter side of the Annapurna region. Combining breathtaking Himalayan panoramas, authentic cultural encounters, community-run lodges, and the sacred alpine waters of Khayer Lake, this off-the-beaten-path trek offers an enriching alternative to Nepal's busier trekking routes. A scenic road journey by tourist bus between Kathmandu and Pokhara connects you directly to the trailhead, allowing you to experience the diverse landscapes of Nepal's river valleys.
        </p>
        <p>
          This lesser-known trail winds through pristine rhododendron forests, traditional Magar villages, and high-alpine pastures before reaching the spectacular viewpoint of Khopra Ridge (Khopra Danda). Along the way, trekkers enjoy dramatic views of Annapurna South, Dhaulagiri, Nilgiri, Machhapuchhre (Fishtail), and the world's deepest gorge, while directly supporting local communities through a network of community-owned lodges. For those seeking outstanding mountain scenery, cultural immersion, and a rewarding journey to the sacred pilgrimage site of Khayer Lake, the Khopra Ridge Trek delivers one of the most memorable trekking experiences in the Annapurna region.
          <button
            type="button"
            onClick={() => setIsHeroExpanded(false)}
            className="text-emerald-400 hover:text-emerald-300 font-bold underline transition ml-1 inline-flex items-center cursor-pointer"
          >
            See Less
          </button>
        </p>
      </div>
    </div>
  );
}
