import React from "react";
import Link from "next/link";

export default function Page() {
  const details = [
    {
      title: "Seasonal Transhumance Grazing",
      desc: "During the summer monsoon (June to August), local shepherds drive thousands of sheep, goats, and yaks up from Swanta and Paudwar to graze on the nutrient-rich grasses of the high pastures of Khopra Danda."
    },
    {
      title: "Botanical Adaptation",
      desc: "Vegetation at 3,600m+ is dwarf and stunted. Alpine grasses, sedges, dwarf junipers, and wild flowers are adapted to survive extreme winds, freezing nights, and low atmospheric pressure."
    },
    {
      title: "Soil Conservation",
      desc: "The root networks of the alpine grasses hold the fragile topsoil together. Overgrazing or trail erosion poses a severe risk of triggering landslides during the monsoon rainfalls."
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
          <span className="text-stone-800">Alpine Meadows</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">High Altitude Ecology</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Alpine Meadows of Khopra Danda
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Explore the high pastures. Learn about the sheep grazing cycles, soil ecosystems, and dwarf flora adaptations on the ridge.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">The Fragile Grasslands of the Sky</h2>
          <p>As you ascend past the tree line at Chhistibung (approx. 3,000m), the dense oak canopy gives way to open, rolling grasslands. Known locally as **Kharkas**, these high-altitude alpine meadows form a vital ecological bridge between the dense forests below and the bare rock of the high peaks.
          </p>
          <p>These grasslands have supported traditional grazing practices for generations and represent an essential asset for the regional farming economy.
          </p>
        </div>

        {/* Details list */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Ecology of the High Kharkas</h3>
          <div className="space-y-6">
            {details.map((dt, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base">{dt.title}</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">{dt.desc}</p>
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
            <h3 className="text-2xl font-bold">Experience the High Pastures</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">Trek with us to learn about traditional shepherd culture, local wildlife habitats, and alpine geography firsthand.
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
