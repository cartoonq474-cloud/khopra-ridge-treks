import React from "react";
import Link from "next/link";

export default function Page() {
  const ecoActions = [
    {
      title: "1. Waste Management & Plastic Reduction",
      desc: "Water filtration systems are set up at all community lodges. Trekkers are provided with purification tablets and encouraged to carry reusable bottles, significantly reducing single-use plastic waste in the ACA."
    },
    {
      title: "2. Locally Sourced Organic Agriculture",
      desc: "We support Magar and Gurung local farms. Almost all food served at community lodges (such as potatoes, spinach, Dal Bhat, and yak milk cheese) is produced locally, reducing carbon emissions from transportation."
    },
    {
      title: "3. Direct Village Reinvestment",
      desc: "Net profits are redirected into public school teacher salaries in Swanta and medical health clinics in Nangi village, ensuring that tourism directly benefits mountain children."
    },
    {
      title: "4. Carbon Offset via Porter Protection",
      desc: "Porers are hired from the exact valleys where the trek occurs, keeping employment local. Porter loads are strictly capped at 20kg per porter, with fair wages and medical insurance provided."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Eco Silos</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Sustainable Tourism on the Khopra Ridge Trail
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Trek with a purpose. Learn how eco-tourism practices on the Khopra Ridge circuit protect fragile mountain ecosystems and empower remote indigenous communities.
          </p>
        </div>

        {/* Intro */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Leaving a Positive Footprint</h2>
          <p className="text-stone-600 leading-relaxed">
            The **Annapurna Conservation Area (ACA)** is a biodiverse mountain region that requires conscious conservation. While massive tourism has led to trail degradation and plastic waste in other sections of the Himalayas, the offbeat Khopra Ridge route is a shining example of ecological and social sustainability.
          </p>
        </div>

        {/* Eco Actions Grid */}
        <div className="mt-12 space-y-8">
          <h2 className="text-2xl font-bold text-stone-950">Our Four Eco-Tourism Actions</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {ecoActions.map((act, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-3">
                <h4 className="font-extrabold text-stone-950 text-sm">{act.title}</h4>
                <p className="text-xs text-stone-500 leading-relaxed">{act.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Guidelines for travelers */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">How You Can Help as a Hiker</h3>
          <ul className="space-y-2 text-xs leading-relaxed list-disc pl-5">
            <li>Carry water purification tablets (such as chlorine dioxide) or a UV sterilizer to avoid buying bottled mineral water.</li>
            <li>Stick strictly to the marked trails to avoid accelerating soil erosion on steep slopes.</li>
            <li>Pack out all personal synthetic waste (like energy bar wrappers and batteries) to Pokhara/Kathmandu, which have better waste management options.</li>
            <li>Choose local mountain dishes (like Dal Bhat) rather than imported food options.</li>
          </ul>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              This sustainable guide is verified by Annapurna Conservation Area Project coordinators. We audit all lodge operations monthly for environmental safety compliance.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Support Local Communities Directly</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Book our 9-Day Khopra Ridge itinerary. Your booking directly funds school teacher salaries in Swanta and support staffs on the trail.
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
