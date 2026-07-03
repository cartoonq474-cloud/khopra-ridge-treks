import React from "react";
import Link from "next/link";

export default function Page() {
  const guidelines = [
    {
      title: "Eliminate Single-Use Plastic",
      desc: "Carry reusable water bottles and purification systems (UV purifiers or chlorine/iodine tablets). Avoid purchasing single-use plastic mineral water bottles, as there are no recycling facilities along the ridge."
    },
    {
      title: "Pack Out Non-Biodegradable Waste",
      desc: "Follow the 'Leave No Trace' principles. Pack out all wrappers, batteries, and cosmetics. Dispose of trash at official waste checkposts in lower towns like Ghandruk or Pokhara."
    },
    {
      title: "Conserve Fuel & Power",
      desc: "High altitude lodges rely on solar power and firewood. Conserve electricity by charging devices only when necessary, and limit hot showers (which require gas or wood heating) to minimize deforestation."
    },
    {
      title: "Stay on Marked Trails",
      desc: "Avoid walking off the trail to prevent soil erosion and land slippage, especially on high ridge flanks. This helps protect the fragile alpine meadow root systems."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Sustainable Travel</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Sustainable Trekking in Nepal
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Learn how to trek responsibly. Discover critical guidelines for waste disposal, water sanitation, energy conservation, and cultural sensitivity.
          </p>
        </div>

        {/* Responsible Tourism */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Leaving a Positive Trail Footprint</h2>
          <p className="text-stone-600 leading-relaxed">As trekking routes inside the Annapurna Conservation Area (ACA) become more popular, the impact on fragile high-altitude ecosystems has increased. The Khopra Ridge loop passes through pristine rhododendron forests and sensitive alpine meadows. Keeping these trails clean requires conscious effort from every trekker.
          </p>
          <p className="text-stone-600 leading-relaxed">Responsible travel is not just about environmental conservation; it also involves social accountability. By respecting local Gurung and Magar traditions, paying fair lodge fees, and hiring local staff, you ensure your visit leaves a positive footprint.
          </p>
        </div>

        {/* Guidelines List */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Sustainability Checkpoints</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {guidelines.map((guide, idx) => (
              <div key={idx} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base mb-2">{guide.title}</h4>
                <p className="text-xs text-stone-500 leading-relaxed">{guide.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5"></span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">We operate strictly under the guidelines set by the Annapurna Conservation Area Project (ACAP). We conduct regular trail cleanups and support local waste initiatives.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Book a Certified Eco-Trek</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">Support sustainable travel by booking with our team. We guarantee plastic-free hydration guides and prioritize community cooperative lodges.
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

export const metadata = {
  alternates: {
    canonical: '/community/sustainable-trekking-in-nepal',
  },
};
