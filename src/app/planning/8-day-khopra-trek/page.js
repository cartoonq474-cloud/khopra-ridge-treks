import React from "react";
import Link from "next/link";

export default function Page() {
  const itinerary = [
    { day: "Day 1", path: "Pokhara to Ghandruk", elev: "1,940m", details: "Drive from Pokhara to Kimche (3 hrs), climb stone steps to Ghandruk (1 hr). Visit Gurung cultural museum." },
    { day: "Day 2", path: "Ghandruk to Tadapani", elev: "2,630m", details: "Short hike climbing through oak forests (4 hrs). Excellent sunrise view of Machhapuchhre." },
    { day: "Day 3", path: "Tadapani to Dobato", elev: "3,420m", details: "Climb through rhodo forests (5 hrs). Visit Muldai Viewpoint for sunset." },
    { day: "Day 4", path: "Dobato to Chhistibung", elev: "2,975m", details: "Descend into the valley clearing, watching for pheasants and deer (4 hrs)." },
    { day: "Day 5", path: "Chhistibung to Khopra Ridge", elev: "3,660m", details: "Steep 1,000m climb on exposed grassy ridges (5 hrs). Direct view of Dhaulagiri." },
    { day: "Day 6", path: "Khopra to Khayer Lake & Return", elev: "3,660m", details: "Strenuous day hike to the sacred alpine lake (4,660m) and back (8-9 hrs)." },
    { day: "Day 7", path: "Khopra Ridge to Swanta", elev: "2,214m", details: "Descend steeply through alpine meadows and bamboo forests to Swanta Magar village (5 hrs)." },
    { day: "Day 8", path: "Swanta to Ghorepani & Pokhara", elev: "820m", details: "Hike to Ghorepani, descend stone steps to Nayapul (6 hrs), drive to Pokhara (1.5 hrs)." }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Route Planning</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            8-Day Khopra Trek Itinerary
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">An intermediate, highly balanced route pacing. Ideal for trekkers who want comfortable daily hiking limits (4-5 hours) while maintaining standard safety margins.
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

        {/* E-E-A-T Footnote */}
        <div className="mt-12 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5"></span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">First-Hand Expert Insight</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">This guide is maintained and reviewed by our licensed local trekking guides operating out of Pokhara. We regularly update routes, weather advisories, and community lodge statuses based on active trail checks.
            </p>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="mt-16 rounded-3xl bg-emerald-950 p-8 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl font-bold">Book Your 8-Day Departure</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">Join our intermediate guided departure. We handle all transfers, permit approvals, and lodge bed allocations.
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
