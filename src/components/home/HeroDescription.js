"use client";

import React, { useState } from "react";

export default function HeroDescription() {
  const [isHeroExpanded, setIsHeroExpanded] = useState(false);

  return (
    <div className="mt-6 text-base sm:text-lg text-stone-300 leading-relaxed max-w-3xl mx-auto text-center">
      <div>
        <span>
          Discovering the uncrowded wonders of the Annapurna region on this 9-day Kathmandu-to-Kathmandu trek, climbing to the 3,660 m (12,008 ft) viewpoint of Khopra Ridge. A serene, visually stunning journey featuring sacred alpine lakes, community-run lodges, and dramatic 360-degree views of Dhaulagiri and Annapurna South,{" "}
        </span>
        {!isHeroExpanded && (
          <button
            type="button"
            onClick={() => setIsHeroExpanded(true)}
            className="text-emerald-400 hover:text-emerald-300 font-bold underline transition inline-flex items-center cursor-pointer"
          >
            See More →
          </button>
        )}
        <span className={isHeroExpanded ? "animate-fade-in inline transition-opacity duration-300" : "hidden"}>
          this wilderness trail winds through pristine rhododendron forests, traditional Magar and Gurung villages, and high-alpine pastures, offering a rare opportunity to support local communities directly while avoiding the mainstream trekking crowds. It's a peaceful alternative to busier routes like the Annapurna Circuit, Annapurna Base Camp, or Ghorepani Poon Hill, ideal for trekkers seeking moderate-difficulty mountain adventure, genuine cultural immersion, or acclimatization practice before attempting a higher route.
        </span>
      </div>
      
      {/* 
        SSR SEO ARCHITECTURE:
        This container is permanently rendered in the HTML DOM tree during Server-Side Rendering (SSR).
        Search engine crawlers (Googlebot) read and index 100% of the keywords inside this markup.
        CSS controls visual visibility for client-side users while valid HTML nesting ensures clean React hydration.
      */}
      <div className={isHeroExpanded ? "space-y-4 mt-4 block transition-all duration-300 opacity-100 animate-fade-in" : "hidden"}>
        <p>
          A scenic mountain flight between Kathmandu and Pokhara connects you to the trailhead near Ghandruk, offering aerial views of Nepal's hills, river valleys, and the Himalayan range before the climb begins. From there, the trail moves through Tadapani and Dobato before reaching the spectacular ridge itself, where trekkers are rewarded with unparalleled views of Annapurna I, Annapurna South, Dhaulagiri, Nilgiri, the iconic fishtail peak of Machhapuchhre, and the rim of the world's deepest gorge.
        </p>
        <p>
          The high point of the journey is the side trip to Khayer Lake, a sacred alpine pilgrimage site held in reverence by Hindu pilgrims. From here, the route descends through Swanta Village, Ghorepani, and Poon Hill back toward Pokhara, closing the loop through some of the most authentic mountain villages in the Annapurna region, with community-owned lodges supporting local families directly at every stage of the journey.
        </p>
        <p>
          For those seeking outstanding mountain scenery, genuine cultural encounters, and a meaningful journey to a sacred pilgrimage site, all while staying off the beaten path, the Khopra Ridge Trek delivers one of the most rewarding trekking experiences in the Annapurna region, with the Kathmandu-Pokhara flight adding a memorable Himalayan aerial view to the start and end of the journey.
        </p>
        <div className="pt-1">
          <button
            type="button"
            onClick={() => setIsHeroExpanded(false)}
            className="text-emerald-400 hover:text-emerald-300 font-bold underline transition inline-flex items-center cursor-pointer"
          >
            See Less
          </button>
        </div>
      </div>
    </div>
  );
}
