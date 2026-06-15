import React from "react";
import Link from "next/link";

export default function Page() {
  const soloTips = [
    {
      title: "1. Navigation and Trail Seclusion",
      desc: "Unlike the busy Annapurna Sanctuary loop, the Khopra trail is quieter and has fewer signs. Hiking alone without a guide makes navigation tricky, especially in forested zones between Ghandruk and Bayeli. We recommend a guide to stay on the correct path."
    },
    {
      title: "2. The Communal Lodge Vibe",
      desc: "For solo travelers, meeting people is easy. Community lodges feature large, central dining halls warmed by wood-fired stoves in the evening. Trekkers and guides gather here to share stories, plan routes, and eat dinners collectively."
    },
    {
      title: "3. Single Room Logistics",
      desc: "Lodge capacities are limited. During peak seasons (Oct-Nov, Mar-Apr), securing a private single room is difficult as lodges prioritize twin-sharing rooms. Solo travelers may occasionally share rooms with other trekkers of the same gender."
    },
    {
      title: "4. Emergency Protocols",
      desc: "At higher altitudes like Khopra (3,660m) and Khayer Lake (4,660m), altitude sickness or sprains can happen. Solo travelers must ensure they have a localized emergency plan and reliable communication, which a local guide directly provides."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Solo Trekking Guide</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Solo Trekking to Khopra Ridge
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Thinking of hiking the community lodge circuit alone? Review the safety rules, social dynamics, and guide requirements for solo travelers in the Annapurnas.
          </p>
        </div>

        {/* Solo Traveler Guide */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Is Solo Trekking Allowed & Safe?</h2>
          <p className="text-stone-600 leading-relaxed">
            The short answer is **yes, but regulations require support**. The Nepal Tourism Board officially mandates that all foreign trekkers hire a licensed guide when hiking in conservation areas like the Annapurna Conservation Area (ACAP) for safety and rescue coordination.
          </p>
          <p className="text-stone-600 leading-relaxed">
            From a safety standpoint, the Khopra Ridge trail is remote. It receives a fraction of the foot traffic of Poon Hill. If you get injured, it could be hours before another trekker passes by. Having a certified guide or booking an organized solo tour ensures your safety, maps out your logistics, and supports local mountain communities.
          </p>
        </div>

        {/* Key Logistics for Solos */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Essential Solo Trekking Advice</h2>
          <div className="space-y-6">
            {soloTips.map((tip, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base">{tip.title}</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Community Benefits */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Why Booking an Organized Solo Package Makes Sense</h3>
          <p className="text-xs leading-relaxed">
            Traveling solo doesn't mean you have to figure out everything alone. Booking a guided solo tour handles all required paperwork (TIMS, ACAP permits), secures your regional flights, guarantees your bed spaces in the crowded community lodges, and pairs you with a local guide who acts as your cultural bridge.
          </p>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              We coordinate solo traveler departures and safety plans every season. Our guides monitor safety regulations to ensure compliance and hassle-free transit.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Embark on Your Solo Adventure Safely</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Book our 9-day solo traveler package to get a certified local guide, pre-arranged permits, and guaranteed lodge space along the trail.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/#book"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-all"
              >
                Inquire Now
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
