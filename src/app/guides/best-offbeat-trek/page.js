import React from "react";
import Link from "next/link";

export default function Page() {
  const offbeatTreks = [
    {
      name: "Khopra Ridge Community Trek",
      region: "Annapurna",
      maxAlt: "4,660m (Khayer Lake)",
      duration: "6 - 9 Days",
      highlights: "Direct sightlines of Dhaulagiri, sacred high-altitude pilgrimage lake, community lodge cooperative network, zero mass commercialization."
    },
    {
      name: "Manaslu Circuit Trek",
      region: "Manaslu",
      maxAlt: "5,106m (Larkya La Pass)",
      duration: "12 - 14 Days",
      highlights: "Restricted area trekking, ancient Tibetan culture, challenging high-mountain pass crossings, dramatically deep river gorges."
    },
    {
      name: "Upper Mustang Trek",
      region: "Mustang",
      maxAlt: "3,820m (Lo Manthang)",
      duration: "10 - 12 Days",
      highlights: "High-altitude cold desert, ancient walled cities, caves, Buddhist monasteries, restricted area permit requirements."
    },
    {
      name: "Kanchenjunga Base Camp Trek",
      region: "Eastern Nepal",
      maxAlt: "5,143m (Pangpema)",
      duration: "18 - 22 Days",
      highlights: "Ultimate wilderness solitude, massive glaciers, wild rhododendron valleys, demanding physical challenge."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Decision Guides</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Best Offbeat Trek in Nepal: Avoid the Crowds
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Escape the tourist highway. Read our curated evaluation of the best alternative, low-crowd offbeat trekking routes in the Himalayas.
          </p>
        </div>

        {/* Intro */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Seeking Seclusion in the Himalayas</h2>
          <p className="text-stone-600 leading-relaxed">As classic routes like the Annapurna Circuit and Everest Base Camp become increasingly commercialized and busy, many hikers are searching for offbeat alternatives. An offbeat trek offers the chance to experience pristine nature, authentic village culture, and silent pathways, without constant strings of pack animals and tourist groups.
          </p>
        </div>

        {/* Offbeat list */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Top Alternative Trails</h3>
          <div className="space-y-6">
            {offbeatTreks.map((trek, idx) => (
              <div key={idx} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-100 pb-3 gap-2">
                  <h4 className="font-extrabold text-stone-950 text-base">{trek.name}</h4>
                  <span className="text-xs font-bold text-emerald-600 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 shrink-0">Max Alt: {trek.maxAlt}
                  </span>
                </div>
                <div className="mt-4 space-y-2 text-xs text-stone-500 leading-relaxed">
                  <p><strong>Region:</strong> {trek.region}</p>
                  <p><strong>Duration:</strong> {trek.duration}</p>
                  <p><strong>Highlights:</strong> {trek.highlights}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5"></span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">We monitor trail density indexes across all Himalayan routes. We recommend offbeat trails based on lodge safety standards and cultural integrity.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Book Your Offbeat Adventure</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">Want to skip the busy pathways? Secure your permit-inclusive booking packages with our local team.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/#book"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-all"
              >Inquire Now
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
