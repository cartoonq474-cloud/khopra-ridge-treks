"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const images = [
    { src: "/khopra-ridge-view.png", alt: "Sunset over Dhaulagiri I from the ridge lodge", label: "Sunset over Dhaulagiri" },
    { src: "/khayer-lake.png", alt: "Sacred temple situated directly next to Khayer Lake", label: "Sacred Khayer Lake Temple" },
    { src: "/forest-trail.png", alt: "Trekking pathway through rhododendron trees", label: "Rhododendron Forest Trail" },
    { src: "/ghandruk-village.png", alt: "Traditional stone houses in Ghandruk village", label: "Ghandruk Stone Village" },
    { src: "/swanta-village.png", alt: "Terraced farming fields surrounding Swanta village", label: "Swanta Valley Fields" },
    { src: "/poon-hill-sunrise.png", alt: "Sunrise views over the Annapurna range from Poon Hill", label: "Poon Hill Gold Sunrise" }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Traveler Advocacy</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Trek Photographer Showcase
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium max-w-lg mx-auto">
            Experience the visual grandeur of the trail through the lenses of real travelers and guides. No stock photos—just pure, unedited mountain beauty.
          </p>
        </div>

        {/* Visual Showcase Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {images.map((img, i) => (
            <div 
              key={i} 
              className="group rounded-3xl bg-white border border-stone-200 overflow-hidden hover:border-emerald-500 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-48 bg-stone-100 overflow-hidden">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="font-extrabold text-stone-950 text-xs">{img.label}</h4>
                <p className="text-[10px] text-stone-400 mt-1 leading-snug">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Advocacy guidelines */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4 text-center">
          <h3 className="text-lg font-bold">Submit Your Trail Photography</h3>
          <p className="text-xs leading-relaxed max-w-md mx-auto">
            Did you take a stunning photo of alpenglow over Nilgiri or a local child in Swanta village? Share it with the community. We showcase verified clients' photographs on this board.
          </p>
          <div className="pt-2">
            <Link
              href="/review-submission"
              className="inline-block rounded-full bg-emerald-600 px-6 py-2.5 text-xs font-bold text-white hover:bg-emerald-500 transition-all"
            >
              Submit Photo &amp; Review
            </Link>
          </div>
        </div>

      </main>
    </div>
  );
}
