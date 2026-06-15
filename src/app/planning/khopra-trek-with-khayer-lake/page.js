import React from "react";
import Link from "next/link";

export default function Page() {
  const lakeHighlights = [
    {
      title: "Sacred Pilgrimage Value",
      desc: "Khayer Lake (4,660m) is a holy alpine site where Hindu and Buddhist pilgrims gather during the Janai Purnima festival (August) to seek blessings and offer prayers at the temple of Khayer Baraha."
    },
    {
      title: "Dramatic Vertical Profile",
      desc: "Hiking from Khopra Ridge (3,660m) to Khayer Lake (4,660m) involves a steep 1,000-meter elevation gain over a round-trip distance of 16 kilometers, taking 8 to 10 hours of rigorous walking."
    },
    {
      title: "Wilderness Solitude",
      desc: "Unlike the busier Poon Hill loops, the trail to Khayer Lake is pristine and quiet, offering uninterrupted views of Annapurna South, Nilgiri, and the deep valley below."
    }
  ];

  const dailySchedule = [
    { day: "Day 1", segment: "Drive Pokhara to Kimche, Trek to Ghandruk", elev: "1,940m", desc: "Start with a scenic drive and a short uphill trek to the beautiful Gurung village of Ghandruk." },
    { day: "Day 2", segment: "Ghandruk to Tadapani to Dobato", elev: "3,432m", desc: "Climb through dense forests to Tadapani and ascend further to the high meadow lodges of Dobato." },
    { day: "Day 3", segment: "Dobato to Chhistibung to Khopra Ridge", elev: "3,660m", desc: "Walk along the ridge pasture, drop to Chhistibung, and climb steeply up to the community lodge on Khopra Ridge." },
    { day: "Day 4", segment: "Khopra Ridge to Khayer Lake & Return", elev: "4,660m", desc: "The ultimate objective. A full-day acclimatization hike up to the sacred lake at the foot of Annapurna South, returning to Khopra Ridge for the night." },
    { day: "Day 5", segment: "Khopra Ridge to Swanta", elev: "2,214m", desc: "Descend the steep ridge through bamboo jungles to the cozy Magar village of Swanta." },
    { day: "Day 6", segment: "Swanta to Ghorepani", elev: "2,860m", desc: "Hike down to the river suspension bridge and climb back up to join the primary Poon Hill route at Ghorepani." },
    { day: "Day 7", segment: "Ghorepani to Poon Hill to Nayapul to Pokhara", elev: "3,210m / 820m", desc: "Sunrise at Poon Hill, trek down to Nayapul, and catch a private vehicle back to Pokhara Lakeside." }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center gap-2 text-xs text-stone-500 font-semibold">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/planning/khopra-trek-itinerary" className="hover:text-emerald-600 transition-colors">Itineraries</Link>
          <span>/</span>
          <span className="text-stone-800">With Khayer Lake</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Route Configurations</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Khopra Ridge Trek with Khayer Lake
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Discover the complete guide to incorporating the ultimate objective of this route—the sacred alpine waters of Khayer Lake (4,660m)—into your trekking plans.
          </p>
        </div>

        {/* Introduction */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">The Ultimate Side-Trip Destination</h2>
          <p>
            While some rapid routes skip it to save time, hiking the Khopra Trek without visiting {"Khayer Lake"} means missing the core visual and spiritual highlight of the entire journey. Located directly beneath the massive south face of Annapurna South, this turquoise glacial lake offers an experience of wilderness solitude that is unmatched anywhere else in the Annapurna Conservation Area.
          </p>
          <p>
            The trek up is physically demanding and requires proper preparation, a clear weather window, and an early start. Below is a detailed analysis of what makes this route variation unique and how to tackle it safely.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Key Features of the Khayer Lake Route</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {lakeHighlights.map((item, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base mb-2">{item.title}</h4>
                <p className="text-xs text-stone-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Pacing Itinerary */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Recommended 7-Day Core Itinerary Loop</h3>
          <div className="space-y-4">
            {dailySchedule.map((item, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm flex flex-col md:flex-row gap-4 items-start justify-between">
                <div className="md:w-1/4 shrink-0">
                  <span className="text-sm font-extrabold text-stone-950 block">{item.day}</span>
                  <span className="text-xs font-bold text-emerald-600 mt-1 block uppercase tracking-wider">{item.segment}</span>
                  <span className="text-xs text-stone-400 mt-0.5 block">Elevation: {item.elev}</span>
                </div>
                <div className="md:w-3/4 text-xs text-stone-500 leading-relaxed md:pt-1">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Khayer Lake Silo Links */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Khayer Lake Planning Resources</h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 text-xs font-semibold text-stone-600">
            <Link href="/planning/khayer-lake-route-guide" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between">
              <span>Trail Route Guide</span>
              <span>→</span>
            </Link>
            <Link href="/planning/khayer-lake-day-hike" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between">
              <span>Day Hike Strategy</span>
              <span>→</span>
            </Link>
            <Link href="/planning/khayer-lake-weather" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between">
              <span>Weather & Conditions</span>
              <span>→</span>
            </Link>
            <Link href="/planning/khayer-lake-packing-list" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between">
              <span>Specific Packing Checklist</span>
              <span>→</span>
            </Link>
            <Link href="/planning/khayer-lake-photography-guide" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between">
              <span>Photography & Viewpoints</span>
              <span>→</span>
            </Link>
            <Link href="/planning/khayer-baraha-temple-guide" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between">
              <span>Pilgrimage & Sacred History</span>
              <span>→</span>
            </Link>
            <Link href="/planning/is-khayer-lake-worth-it" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between">
              <span>Is Khayer Lake Worth It?</span>
              <span>→</span>
            </Link>
            <Link href="/planning/khayer-lake-depth-source" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between">
              <span>Lake Depth & Scientific Source</span>
              <span>→</span>
            </Link>
            <Link href="/planning/khayer-lake-vs-tilicho-lake" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between">
              <span>Khayer vs Tilicho Lake</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Safety Warning */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Altitude & Safety Information</h3>
          <p className="text-xs leading-relaxed font-medium">
            Climbing 1,000 meters in a single day is a major physical endeavor. There are no tea houses or shelters between Khopra Ridge and Khayer Lake. You must carry sufficient water (at least 3 liters), high-energy snacks, windproof and waterproof layers, and a headlamp. Trekking with a licensed guide is highly recommended on this section, as trails can become obscured by fog and snow.
          </p>
        </div>

        {/* EEAT Footnote */}
        <div className="mt-12 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">First-Hand Expert Insight</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              This guide is maintained and reviewed by our licensed local trekking guides operating out of Pokhara. We regularly update routes, weather advisories, and community lodge statuses based on active trail checks.
            </p>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="mt-16 rounded-3xl bg-emerald-950 p-8 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl font-bold">Book the Ultimate Khayer Lake Route</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">
              Our guides carry pulse oximeters, emergency satellite communicators, and custom gear bags to ensure a safe and successful ascent to Khayer Lake.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >
              Book guided trek
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
