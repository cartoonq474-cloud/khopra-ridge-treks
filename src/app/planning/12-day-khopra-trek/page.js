import React from "react";
import Link from "next/link";

export default function Page() {
  const itinerary = [
    { day: "Day 1", path: "Pokhara to Banskharka", elev: "1,525m", details: "Drive to Galeshwor (3 hrs), hike to Banskharka Magar homestay village (3 hrs). First community homestay sleep." },
    { day: "Day 2", path: "Banskharka to Nangi", elev: "2,320m", details: "Hike through forests and local paper-making paper projects to Nangi (5 hrs)." },
    { day: "Day 3", path: "Nangi to Mohare Danda", elev: "3,300m", details: "Climb through oak forests to Mohare Danda ridge (6 hrs). Unobstructed sunset views." },
    { day: "Day 4", path: "Mohare Danda to Ghorepani", elev: "2,860m", details: "Walk along the ridge crest through rhododendrons to Ghorepani village (5 hrs)." },
    { day: "Day 5", path: "Ghorepani to Swanta", elev: "2,214m", details: "Hike to Poon Hill for sunrise, descend to Swanta Magar village (5 hrs)." },
    { day: "Day 6", path: "Swanta to Chhistibung", elev: "2,975m", details: "Climb through river gorges and thick forests to Chhistibung lodge (4 hrs)." },
    { day: "Day 7", path: "Chhistibung to Khopra Ridge", elev: "3,660m", details: "Steep 1,000m climb on exposed ridges (5 hrs). Close-up view of Dhaulagiri." },
    { day: "Day 8", path: "Khopra to Khayer Lake & Return", elev: "3,660m", details: "Strenuous day hike to the sacred alpine lake (4,660m) and back (8-9 hrs)." },
    { day: "Day 9", path: "Khopra Ridge to Bayeli Kharka", elev: "3,432m", details: "Trek along the high pasture trails to the remote Bayeli clearing (5 hrs)." },
    { day: "Day 10", path: "Bayeli to Dobato", elev: "3,420m", details: "Short ridge hike to Dobato (3 hrs). Climb Muldai Viewpoint for sunset." },
    { day: "Day 11", path: "Dobato to Ghandruk", elev: "1,940m", details: "Descend through forest trails to Ghandruk Gurung village (5 hrs)." },
    { day: "Day 12", path: "Ghandruk to Pokhara", elev: "820m", details: "Hike to Kimche (1 hr), drive to Pokhara Lakeside (3 hrs). Celebrate trek completion." }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Route Planning</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            12-Day Khopra Trek Itinerary
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            The ultimate community lodge and eco-tourism circuit. Combine the Mohare Danda homestays, Ghorepani Poon Hill, and the high Khopra Ridge into a single, comprehensive adventure.
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
            <h3 className="text-2xl font-bold">Book the Ultimate Circuit</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">
              Experience the best of homestay hospitality and high altitude wilderness. Book our 12-day guided package today.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >
              Inquire Now
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
