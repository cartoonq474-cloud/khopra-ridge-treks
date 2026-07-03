import React from "react";
import Link from "next/link";

export default function Page() {
  const stats = [
    { label: "Peak Name", value: "Annapurna South" },
    { label: "Altitude", value: "7,219 m (23,684 ft)" },
    { label: "Visual Proximity", value: "Towers directly behind Khopra Ridge to the East" },
    { label: "Best Viewing Hours", value: "Sunset alpenglow illuminates the West-facing slopes" }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Mountain Profiles</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Annapurna South from Khopra Ridge
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Annapurna South (7,219m) stands as a giant wall right behind the Khopra Ridge lodges, offering a spectacular, close-up look at its glaciers and snowfields.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-stone-200 bg-white p-6 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i}>
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{stat.label}</span>
              <p className="mt-1 text-sm font-bold text-stone-900 leading-snug">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Details */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">The Giant Wall of Khopra</h2>
          <p>While Dhaulagiri dominates the western horizon across the Kali Gandaki Valley, Annapurna South (7,219m) dominates the eastern horizon. The mountain rises steeply from the forests of Chhistibung and Swanta, culminating in a jagged, snow-draped ridge that sits right behind the community eco-lodge.
          </p>
          <p>During the afternoon, you can watch clouds form and sweep across the rock ridges of Annapurna South, while in the evening, the setting sun casts a warm, golden-orange alpenglow across its massive southwest face.
          </p>
        </div>

        {/* E-E-A-T Footnote */}
        <div className="mt-12 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5"></span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">First-Hand Expert Insight</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">This guide is maintained and reviewed by our licensed local trekking guides operating out of Kathmandu. We regularly update routes, weather advisories, and community lodge statuses based on active trail checks.
            </p>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="mt-16 rounded-3xl bg-emerald-950 p-8 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl font-bold">Experience the Annapurna Massif</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">Book our guided community lodge trek. Explore quiet forest trails and enjoy front-row views of Annapurna South and Dhaulagiri.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >Inquire Now
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export const metadata = {
  alternates: {
    canonical: '/mountains/annapurna-south-views',
  },
};
