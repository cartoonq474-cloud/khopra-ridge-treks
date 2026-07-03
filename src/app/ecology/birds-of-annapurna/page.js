import React from "react";
import Link from "next/link";

export default function Page() {
  const birds = [
    {
      name: "Himalayan Monal (Danphe)",
      scientific: "Lophophorus impejanus",
      habitats: "Oak-rhododendron forest clearings and sub-alpine pastures between 3,000m and 4,000m.",
      details: "Nepal&apos;s national bird. Celebrated for its brilliant, iridescent multi-colored feathers. They are most active during early morning and late afternoon foraging sessions."
    },
    {
      name: "Kalij Pheasant",
      scientific: "Lophura leucomelanos",
      habitats: "Dense undergrowth and moist forests at lower elevations (1,200m - 2,500m).",
      details: "Commonly seen running across the trail steps between Ghandruk and Tadapani. The males feature glossy blue-black plumage and a distinct red facial patch."
    },
    {
      name: "Himalayan Griffon Vulture",
      scientific: "Gyps himalayensis",
      habitats: "High ridges, thermal air currents, and nesting cliffs above 3,500m.",
      details: "A massive vulture with a wingspan up to 3 meters. You will frequently see them soaring effortlessly along the thermal updrafts of Khopra Ridge."
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
          <span className="text-stone-800">Birds</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Avian Ecology</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Birds of the Annapurna: Khopra Bird Guide
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Explore the canopies. A detailed guide to spotting the national bird (Danphe), forest pheasants, and giant mountain raptors along the trail.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">A Paradise for Bird Watchers</h2>
          <p>The Annapurna Conservation Area is home to over **450 species of birds**, representing one of the richest avian habitats in the Himalayas. Because the Khopra Ridge circuit traverses undisturbed, quiet oak forests and alpine zones (unlike busier tourist routes), it offers an exceptional playground for bird-watching enthusiasts.
          </p>
        </div>

        {/* Birds list */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Key Bird Species to Look For</h3>
          <div className="space-y-6">
            {birds.map((bird, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <div className="border-b border-stone-100 pb-3">
                  <h4 className="font-extrabold text-stone-950 text-base">{bird.name}</h4>
                  <span className="text-xs italic text-stone-400 mt-0.5 block">{bird.scientific}</span>
                </div>
                <div className="mt-4 space-y-2 text-xs text-stone-500 leading-relaxed">
                  <p><strong>Primary Habitat:</strong> {bird.habitats}</p>
                  <p><strong>Field Markings & Behavior:</strong> {bird.details}</p>
                </div>
              </div>
            ))}
          </div>
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
            <h3 className="text-2xl font-bold">Join Our Bird Watching Treks</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">We compile specialized itineraries with resident bird-watching guides who carry binoculars and spot maps to help you check off rare species.
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
    canonical: '/ecology/birds-of-annapurna',
  },
};
