import React from "react";
import Link from "next/link";

export default function Page() {
  const itinerary = [
    { day: "Day 1", path: "Pokhara to Ghandruk", elev: "1,940m", details: "Drive from Pokhara to Kimche (3 hrs), climb stone steps to Ghandruk (1 hr). Evening Gurung village exploration." },
    { day: "Day 2", path: "Ghandruk to Bayeli Kharka", elev: "3,432m", details: "Steep forest trek climbing through rhododendrons (6-7 hrs). First high sleeping camp." },
    { day: "Day 3", path: "Bayeli to Khopra Ridge", elev: "3,660m", details: "Trek to Chhistibung, then make the steep 1,000m climb to Khopra Ridge (5-6 hrs). Stunning sunset." },
    { day: "Day 4", path: "Khopra to Khayer Lake & Return", elev: "4,660m", details: "Strenuous day hike to the sacred lake (4,660m) and back to the ridge (8-9 hrs)." },
    { day: "Day 5", path: "Khopra Ridge to Swanta", elev: "2,214m", details: "Descend steeply through alpine meadows and bamboo forests to Swanta Magar village (5 hrs)." },
    { day: "Day 6", path: "Swanta to Ghorepani & Pokhara", elev: "2,860m / 820m", details: "Hike to Ghorepani (3 hrs), descend to Nayapul (3 hrs), drive back to Pokhara Lakeside (1.5 hrs)." }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Route Planning</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            6-Day Khopra Trek Itinerary
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">A rapid, high-intensity route layout. Best for fit, experienced trekkers with limited holiday time who want to experience the sacred lake and high ridge panorama.
          </p>
        </div>

        {/* Itinerary timeline */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Daily Route Profile</h2>
          <div className="space-y-6">
            {itinerary.map((item, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm flex flex-col md:flex-row gap-4 items-start justify-between">
                <div className="md:w-1/4">
                  <span className="text-sm font-extrabold text-stone-950 block">{item.day}</span>
                  <span className="text-xs font-bold text-emerald-600 mt-1 block uppercase tracking-wider">{item.path}</span>
                  <span className="text-xs text-stone-400 mt-0.5 block">Sleep Elev: {item.elev}</span>
                </div>
                <div className="md:w-3/4 text-xs text-stone-500 leading-relaxed">
                  {item.details}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rapid pacing warnings */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Important: High Physical Demand</h3>
          <p className="text-xs leading-relaxed font-medium">The 6-Day itinerary requires walking 6 to 9 hours daily. By skipping dedicated rest days at Dobato or Swanta, you climb to high altitude quickly. This route is only recommended for trekkers with prior high-altitude experience and excellent cardiovascular conditioning. If you want a more gradual climb, opt for our 9-Day or 10-Day packages.
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
            <h3 className="text-2xl font-bold">Book a Rapid Departure</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">Have limited holiday time? Book our guided 6-day package. We arrange private transfers, guides, and pre-booked permits to maximize trail time.
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
    canonical: '/planning/6-day-khopra-trek',
  },
};
