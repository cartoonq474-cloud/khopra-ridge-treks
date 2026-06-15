import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Persona Guides</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Khopra Ridge Trek for Families
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Plan a family-friendly trekking adventure. Read about trail safety, age guidelines, porter support, and custom pacing for children.
          </p>
        </div>

        {/* Intro */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">A Safe and Rewarding Family Trek</h2>
          <p className="text-stone-600 leading-relaxed">
            Taking your family trekking in Nepal is an incredible educational and bonding experience. While the classic Annapurna Circuit might be too long and high for young children, and Poon Hill too crowded, the **Khopra Ridge circuit** offers a beautiful, secluded alternative.
          </p>
          <p className="text-stone-600 leading-relaxed">
            However, because the trek reaches 3,660m at the ridge and includes steep trail sections (particularly Chhistibung to Khopra), families must adjust their pacing, hire professional porter support, and plan shorter daily segments to prevent altitude sickness and fatigue.
          </p>
        </div>

        {/* Family safety guidelines */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Key Guidelines for Families</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
              <h4 className="font-extrabold text-stone-950 text-base mb-2">Pacing and Stages</h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                Break up the climb to Khopra Ridge by spending extra nights at Dobato (3,432m) or Chhistibung (3,000m). Keep daily hiking times under 4 to 5 hours.
              </p>
            </div>
            <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
              <h4 className="font-extrabold text-stone-950 text-base mb-2">Porter and Guide Support</h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                Hiring local porters is essential when trekking with children. Porters can carry main gear packs, allowing parents to focus entirely on trail safety and children&apos;s pacing.
              </p>
            </div>
            <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
              <h4 className="font-extrabold text-stone-950 text-base mb-2">Water and Food Safety</h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                Ensure children only drink purified water (chlorine/UV treated or boiled). Stick to fresh, cooked vegetarian dishes (like garlic soup and Dal Bhat) to avoid food-borne illnesses.
              </p>
            </div>
            <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
              <h4 className="font-extrabold text-stone-950 text-base mb-2">Altitude Monitoring</h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                Watch children closely for early signs of AMS (headache, loss of appetite, fatigue). Ensure they remain hydrated and descend immediately if symptoms persist.
              </p>
            </div>
          </div>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              We customize family trekking packages with certified guides, first aid kits, pulse oximeters, and flexible, slow-paced daily schedules.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Book a Customized Family Trek</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Want to customize a safe, slow-paced itinerary suitable for your family? Get in touch with our local team.
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
