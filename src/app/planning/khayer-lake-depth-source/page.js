import React from "react";
import Link from "next/link";

export default function Page() {
  const specs = [
    { label: "Glacial Feed Source", value: "Primary runoff from the massive Annapurna South (7,219m) glacier and surrounding high-altitude snowfields." },
    { label: "Water Temperature", value: "Averages 1°C to 4°C during autumn/spring. Completely frozen solid during winter (December to February)." },
    { label: "Geographic Location", value: "Myagdi District, Gandaki Province, Nepal. Sitting inside a high-altitude cirque basin directly beneath Annapurna South's south wall." },
    { label: "Lakeside Altitude", value: "4,660 meters (15,288 feet) above sea level." }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center gap-2 text-xs text-stone-500 font-semibold">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/guides/khayer-lake-ultimate-guide" className="hover:text-emerald-600 transition-colors">Khayer Lake Hub</Link>
          <span>/</span>
          <span className="text-stone-800">Depth & Source</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Geographical Data</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Khayer Lake: Glacial Source & Depth Guide
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Understand the geography. A scientific breakdown of the glacial feed source, water temperature cycles, and geographic dimensions of this alpine body of water.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">A Glacial Cirque Basin</h2>
          <p>Khayer Lake is a classic glacial lake situated inside a steep, high-elevation cirque basin. Formed by thousands of years of glacial carving at the base of the massive Annapurna massif, the lake holds immense scientific interest in terms of glacial melting patterns and hydrological flows in the Myagdi river system.
          </p>
        </div>

        {/* Specs Table */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Hydrological Specifications</h3>
          <div className="overflow-x-auto rounded-3xl border border-stone-200 bg-white">
            <div className="divide-y divide-stone-100 text-xs">
              {specs.map((spec, i) => (
                <div key={i} className="p-6 flex flex-col sm:flex-row gap-2 sm:gap-6">
                  <div className="sm:w-1/3 font-bold text-stone-950 uppercase tracking-wider">{spec.label}</div>
                  <div className="sm:w-2/3 text-stone-500 leading-relaxed">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lake Depth and Dimensions */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h3 className="text-xl font-bold text-stone-950">Lakeside Depth & Safety Warning</h3>
          <p>While detailed, professional bathymetric surveys (depth mapping) of Khayer Lake are limited, local estimates place the maximum depth in the center of the lake at approximately **12 to 18 meters (40 to 60 feet)**.
          </p>
          <p>Due to the extreme cold of the glacial runoff (averaging just above freezing point), **swimming or bathing in the lake is strictly prohibited** for safety reasons (hypothermia can occur in under 2 minutes). Trekkers who wish to perform religious washing rituals should only sprinkle lake water on their head from the shoreline.
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
            <h3 className="text-2xl font-bold">Explore Himalayan Geography</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">Our guides are knowledgeable in the geology, glaciers, and ecology of the Annapurna conservation area, enriching your hike with rich information.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >Book guided trek
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export const metadata = {
  alternates: {
    canonical: '/planning/khayer-lake-depth-source',
  },
};
