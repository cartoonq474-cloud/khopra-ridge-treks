import React from "react";
import Link from "next/link";

export default function Page() {
  const insuranceClauses = [
    {
      clause: "1. Altitude Limit: Up to 5,000 Meters",
      desc: "Standard policies cap coverage at 3,000m. Because the Khopra Trek goes to Khayer Lake (4,660m), you must ensure your policy specifically covers trekking up to 5,000m."
    },
    {
      clause: "2. Emergency Helicopter Evacuation",
      desc: "If you suffer from severe AMS, HAPE, or a broken ankle, helicopter rescue is the only way out. Verify that your policy includes immediate hospital-to-pilot payment guarantees."
    },
    {
      clause: "3. Adventure Sports Rider",
      desc: "Make sure 'hiking' or 'trekking' is not classified as an excluded extreme sport. Check the fine print for definitions of guided versus unguided trekking."
    },
    {
      clause: "4. Medical Fees and Hospitalization",
      desc: "Covers medical costs at specialized travel clinics (such as the CIWEC Clinic in Kathmandu or Pokhara) and ambulance transfers."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Travel Planning</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Travel Insurance for Trekking in Nepal
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Do not hike without coverage. A comprehensive checklist of required policy clauses, altitude riders, and helicopter evacuation terms for the Khopra circuit.
          </p>
        </div>

        {/* Why insurance is required */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Why Trekking Insurance is Mandatory</h2>
          <p className="text-stone-600 leading-relaxed">
            While we manage all trail logistics and safety plans, we cannot cover emergency hospital or evacuation fees. Himalayan helicopter rescues are highly efficient but expensive, averaging between **$2,500 and $5,000 per flying hour**. 
          </p>
          <p className="text-stone-600 leading-relaxed">
            Helicopter pilots in Nepal will not launch unless they receive a direct guarantee of payment from an insurance coordinator or a cash deposit. Having a certified trekking policy ensures you receive immediate rescue if an emergency happens.
          </p>
        </div>

        {/* Insurance Clauses */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Required Policy Clauses</h2>
          <div className="space-y-6">
            {insuranceClauses.map((item, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base">{item.clause}</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Validation Checklist */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Preparation & Documentation Checklist</h3>
          <ul className="space-y-2 text-xs leading-relaxed list-disc pl-5">
            <li><strong>Print Your Policy:</strong> Keep a physical printed copy of your insurance certificate in your daypack. Mobile phones can freeze or lose charge in the cold.</li>
            <li><strong>Note the Emergency Hotline:</strong> Write down the international emergency phone number of your insurance company and give it to your guide.</li>
            <li><strong>Share Details:</strong> Email a copy of your passport and policy details to our check-in coordinator before starting the trek.</li>
          </ul>
        </div>

        {/* E-E-A-T Badge */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              We check insurance validation copies for all clients before departure. If your policy lacks helicopter rescue terms, we can recommend local supplementary riders.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Plan Your Safety Today</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Book our guided departure to get access to pre-departure safety briefings, certified guides, and guaranteed lodge space.
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
