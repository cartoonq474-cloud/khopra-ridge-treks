import React from "react";
import Link from "next/link";

export default function Page() {
  const stats = [
    { label: "Elevation", value: "3,660 m (12,007 ft)" },
    { label: "Key Peaks Visible", value: "Dhaulagiri I, Annapurna South, Nilgiri, Machhapuchhre" },
    { label: "Best Viewing Hours", value: "5:30 AM to 7:00 AM (Sunrise)" },
    { label: "Visual Exposure", value: "360-degree high alpine panoramic exposure" }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Viewpoint Hub</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Khopra Ridge Viewpoint Guide
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Khopra Ridge (3,660m) is one of the most stunning viewpoints in Nepal, offering a 360-degree panorama of the Dhaulagiri and Annapurna massifs without the crowds.
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
          <h2 className="text-2xl font-bold text-stone-950">A 360-Degree Mountain Panorama</h2>
          <p>Located high above the Kali Gandaki Gorge (the deepest gorge in the world), the Khopra Ridge viewpoint offers a dramatic front-row seat to the massive peak wall of Dhaulagiri I (8,167m) to the west and the vertical face of Annapurna South (7,219m) towering directly behind the lodge to the east.
          </p>
          <p>Unlike Poon Hill, which requires a pre-dawn climb up stone steps from your lodge, the Khopra Ridge viewpoint is located right outside your bedroom door. You can step out of the community eco-lodge directly onto the grassy ridge to watch the sun rise and set over the Himalayan giants.
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
            <h3 className="text-2xl font-bold">Ready to Experience Khopra Ridge?</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">Skip the crowded paths. Let our local guides lead you through the community lodge circuit to sacred Khayer Lake. Book our 9-Day all-inclusive package today.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >Inquire &amp; Customize Itinerary
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
