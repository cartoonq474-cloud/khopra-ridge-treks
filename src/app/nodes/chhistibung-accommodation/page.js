import React from "react";
import Link from "next/link";

export default function Page() {
  const wildlife = [
    { name: "Himalayan Monal (Danphe)", type: "National Bird of Nepal", desc: "Featuring metallic multi-colored plumage, these stunning pheasants are commonly spotted foraging in the clearings around Chhistibung in the early morning." },
    { name: "Nepal Gray Langur", type: "Primate", desc: "Families of long-tailed gray langurs leap through the rhododendron canopy above the trail. They are typically shy and pose no danger to trekkers." },
    { name: "Himalayan Musk Deer", type: "Mammal", desc: "Though rare and nocturnal, these miniature deer are occasionally spotted drinking from forest streams near the trail junctions." }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center gap-2 text-xs text-stone-500 font-semibold">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/nodes" className="hover:text-emerald-600 transition-colors">Nodes</Link>
          <span>/</span>
          <span className="text-stone-800">Chhistibung Accommodation</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Trail Directory</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Chhistibung Accommodation & Wildlife Guide
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">A sanctuary in the trees. Discover the community lodge standards and rich biodiversity of the forest settlement of Chhistibung.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">The Forest Shelter Below the Ridge</h2>
          <p>Chhistibung (2,975m / 9,760ft) is a quiet clearing in the middle of a dense oak and rhododendron forest. Hosting only a single community-run lodge, it serves as the final rest stop before the steep, exposed 1,000-meter climb up to Khopra Ridge.
          </p>
          <p>Because of its quiet location and dense tree cover, Chhistibung is a hotspot for Himalayan wildlife. Trekkers who take slow, quiet walks along the forested paths are often rewarded with close-up sightings of rare birds and mammals.
          </p>
        </div>

        {/* Wildlife Spotlights */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Wildlife of the Chhistibung Forests</h3>
          <div className="space-y-6">
            {wildlife.map((w, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">{w.type}</span>
                <h4 className="font-extrabold text-stone-950 text-base mt-1">{w.name}</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Accommodation and Facilities */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h3 className="text-xl font-bold text-stone-950">Lodge Standards & Services</h3>
          <p>The community lodge in Chhistibung provides basic, clean plywood twin rooms. Blankets are provided, but carrying a lightweight sleeping bag is advised during winter. Bathrooms are shared squat structures, and bucket hot showers can be purchased for NPR 300. Wi-Fi is generally unavailable, and cellular reception is weak, making this a true digital detox stop.
          </p>
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
            <h3 className="text-2xl font-bold">Plan a Forest Walk</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">Our guides are trained in local flora and fauna. We lead early morning bird-watching walks around the Chhistibung clearings.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >Inquire now
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export const metadata = {
  alternates: {
    canonical: '/nodes/chhistibung-accommodation',
  },
};
