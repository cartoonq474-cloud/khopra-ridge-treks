import React from "react";
import Link from "next/link";

export default function Page() {
  const stats = [
    { label: "Peak Name", value: "Tukuche Peak" },
    { label: "Altitude", value: "6,920 m (22,703 ft)" },
    { label: "Proximity", value: "Sits immediately adjacent to Dhaulagiri I to the North" },
    { label: "Visual Profile", value: "Broad, snow-covered dome peak framing the Northwest skyline" }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Mountain Profiles</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Tukuche Peak Views from Khopra Ridge
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Tukuche Peak (6,920m) sits right next to Dhaulagiri I, forming the northern section of the giant Dhaulagiri massif that walls the Kali Gandaki Gorge.
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
          <h2 className="text-2xl font-bold text-stone-950">Dhaulagiri&apos;s White Sentinel</h2>
          <p>Tukuche Peak (6,920m) is a massive, rounded snow dome that sits north of Dhaulagiri. Because Dhaulagiri I (8,167m) is so dominant, Tukuche Peak is often overlooked by casual tourists, but its massive snow fields are a key part of the panoramic skyline.
          </p>
          <p>From the open viewpoint of Khopra Ridge, Tukuche Peak is clearly visible looking northwest. You can see the deep snow saddle that separates it from the main Dhaulagiri ridge, and the steep slopes that drop into the Mustang region.
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
            <h3 className="text-2xl font-bold">Discover the Kali Gandaki Corridor</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">Book our guided community trek today. Let our local guides lead you through traditional Gurung villages and show you the ultimate viewing spots.
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
    canonical: '/mountains/tukuche-peak-views',
  },
};
