import React from "react";
import Link from "next/link";

export default function Page() {
  const policies = [
    {
      title: "1. Waste Management & Plastic Bottle Ban",
      desc: "To keep the trails pristine, the community lodge committees have banned the sale of single-use plastic mineral water bottles beyond Ghandruk and Ghorepani. Lodges provide boiled and UV-filtered water stations."
    },
    {
      title: "2. Wildlife Protection & Anti-Poaching Patrols",
      desc: "Local village committees organize community anti-poaching patrols to protect endangered species (like the red panda and musk deer) from poaching and habitat encroachment."
    },
    {
      title: "3. Forest Conservation & Fuel Wood Restrictions",
      desc: "Teahouses in the high nodes (Bayeli, Chhistibung, Khopra) are prohibited from using wood for cooking or heating water, restricting firewood to the single dining hall stove to prevent deforestation."
    }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center gap-2 text-xs text-stone-500 font-semibold">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/ecology/annapurna-conservation-area-guide" className="hover:text-emerald-600 transition-colors">Ecology</Link>
          <span>/</span>
          <span className="text-stone-800">Conservation</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Environmental Protection</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Conservation Efforts in the Annapurna Area
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Tread lightly. Learn about the ACAP preservation policies, community-led anti-poaching initiatives, and tourist waste guidelines along the trail.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">Protecting the Sanctuary</h2>
          <p>The Khopra Ridge circuit sits inside the Annapurna Conservation Area Project (ACAP)—the largest protected area in Nepal. Established in 1986, ACAP operates on a community-based conservation model, where local communities are the direct stewards and beneficiaries of natural resource management.
          </p>
          <p>By combining sustainable tourism with environmental management, the local villages have successfully preserved the rich biodiversity of the region while improving local livelihoods.
          </p>
        </div>

        {/* Policies list */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Key Conservation Regulations</h3>
          <div className="space-y-6">
            {policies.map((pol, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base">{pol.title}</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">{pol.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leave No Trace rules */}
        <div className="mt-12 p-8 bg-stone-900 border border-stone-850 rounded-3xl text-stone-300 space-y-4">
          <h3 className="text-lg font-bold text-white">Leave No Trace Guidelines for Trekkers</h3>
          <ul className="list-disc pl-6 text-xs leading-relaxed text-stone-400 space-y-2.5">
            <li><strong>Pack It In, Pack It Out:</strong>Carry all non-biodegradable waste (wrappers, batteries, wet wipes) back to Pokhara or Kathmandu. Do not burn or bury trash on the trail.</li>
            <li><strong>Keep Wildlife Wild:</strong>Do not feed or attempt to approach langur monkeys, birds, or deer. This disrupts their natural foraging habits.</li>
            <li><strong>Stick to the Path:</strong>Avoid walking off-trail on fragile alpine slopes. Pacing off-trail accelerates soil erosion and triggers mudslides.</li>
          </ul>
        </div>

        {/* EEAT Footnote */}
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
            <h3 className="text-2xl font-bold">Support Sustainable Tourism</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">Our guided packages strictly adhere to Leave No Trace principles. We supply reusable water containers and handle all waste responsibly.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >Request booking
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export const metadata = {
  alternates: {
    canonical: '/ecology/conservation-efforts',
  },
};
