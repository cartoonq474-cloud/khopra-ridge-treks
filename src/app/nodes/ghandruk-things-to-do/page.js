import React from "react";
import Link from "next/link";

export default function Page() {
  const activities = [
    {
      title: "Visit the Old Gurung Museum",
      desc: "Explore a traditional Gurung stone house filled with antique farming equipment, historical tools, clothing, and weaponry. It is a fantastic window into the lifestyle of the Annapurna region's most prominent ethnic group."
    },
    {
      title: "Dress in Traditional Gurung Attire",
      desc: "Many local shops and homestays allow you to rent traditional Gurung clothing (including the Ghalek and Gunyo Cholo) for photo shoots. Pose against the backdrop of Annapurna South and Machhapuchhre."
    },
    {
      title: "Walk the Stone-Paved Streets",
      desc: "Ghandruk is famous for its clean, slate-tiled walkways, decorative stone houses, and colorful flowers. Take a slow walk through the old town to appreciate the unique architectural heritage of the village."
    },
    {
      title: "Dine on Scenic Balconies",
      desc: "Sit at one of the village's many terrace cafes and enjoy a plate of hot momos or a fresh cup of organic Himalayan coffee while staring directly at the massive wall of Annapurna South."
    }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center gap-2 text-xs text-stone-500 font-semibold">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/nodes" className="hover:text-emerald-600 transition-colors">Nodes</Link>
          <span>/</span>
          <span className="text-stone-800">Ghandruk Things To Do</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Local Guide</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Top Things to Do in Ghandruk
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Cultural immersion and scenic exploration. Discover how to spend your rest or acclimatization day in the cultural capital of the Annapurna range.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">Make the Most of Your Ghandruk Stay</h2>
          <p>Often, trekkers view Ghandruk merely as a brief transit stop on their way to higher elevations. However, this historic Gurung village is rich in heritage and offers several rewarding activities that deserve at least a half-day of dedicated exploration.
          </p>
        </div>

        {/* Activities List */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Must-Try Experiences in the Village</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {activities.map((act, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <span className="text-2xl"></span>
                <h4 className="font-extrabold text-stone-950 text-base mt-2">{act.title}</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">{act.desc}</p>
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
            <h3 className="text-2xl font-bold">Experience Ghandruk With Us</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">All our guided itineraries include a dedicated afternoon walking tour of the old Ghandruk village led by a resident Gurung guide.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >Inquire About Guided Treks
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
