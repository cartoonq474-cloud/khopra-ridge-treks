import React from "react";
import Link from "next/link";

export default function Page() {
  const sunriseTips = [
    {
      title: "The Alpenglow Phenomenon",
      desc: "Because the sun rises behind the Annapurna range in the east, Dhaulagiri I (8,167m) to the west is illuminated first. The East Face of Dhaulagiri turns a brilliant, glowing gold, followed by deep orange and pink hues."
    },
    {
      title: "Timing & Preparation",
      desc: "Sunrise occurs between 5:30 AM (spring) and 6:15 AM (autumn/winter). Wake up at least 30 minutes before sunrise. Warm tea is usually available at the community lodge to take outside."
    },
    {
      title: "Extreme Morning Cold",
      desc: "Ridge wind and high altitude mean morning temperatures can drop to -5°C (23°F) even in peak trekking months. Layer up with a down jacket, windproof shell, gloves, thermal beanie, and neck gaiter."
    }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Visual Experience</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Sunrise at Khopra Ridge
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Watch the first golden rays of sun strike the massive peak of Dhaulagiri I (8,167m), directly from your community lodge step.
          </p>
        </div>

        {/* Sunrise details */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">A Magical Himalayan Sunrise</h2>
          <p>Trekking guides across Nepal agree that the sunrise from Khopra Ridge is one of the most visual sights in the entire Annapurna region. While Poon Hill offers beautiful views, it is often crowded with hundreds of trekkers. On Khopra Ridge, you will share the sunrise with only a handful of other guests staying at the community lodge.
          </p>
        </div>

        {/* Tips list */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Sunrise Viewing and Photography Advice</h3>
          <div className="space-y-6">
            {sunriseTips.map((tip, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base">{tip.title}</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
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
            <h3 className="text-2xl font-bold">Plan Your Golden Sunrise Departure</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">Let us handle all the logistics. Our guided trips guarantee warm lodge space, permits, and professional local pacing to ensure a safe, memorable hike.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >Book Guided Trek
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
