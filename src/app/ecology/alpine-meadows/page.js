import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Alpine Meadows of Khopra Danda | Nepal Trek Guide",
  description: "Explore the alpine meadows of Khopra Danda — high-altitude grasslands shaped by Himalayan wildlife, traditional shepherd culture, and centuries of.",
  alternates: {
    canonical: "https://khopraridgetrek.com/ecology/alpine-meadows",
  },
  openGraph: {
    title: "Alpine Meadows of Khopra Danda: Ecology, Biodiversity & Himalayan Landscapes",
    description:
      "Explore the alpine meadows of Khopra Danda — high-altitude grasslands shaped by Himalayan wildlife, traditional shepherd culture, and centuries of transhumance grazing.",
    url: "https://khopraridgetrek.com/ecology/alpine-meadows",
    type: "article",
  },
};

export default function AlpineMeadowsPage() {
  const quickStats = [
    { label: "Meadow Elevation Band", value: "3,000m – 3,700m" },
    { label: "Treeline Threshold", value: "Chhistibung (~3,000m)" },
    { label: "Local Term for Pasture", value: "Kharka" },
    { label: "Conservation Area", value: "Annapurna Conservation Area (ACAP)" },
  ];

  const meadowZones = [
    { name: "Chhistibung Treeline Transition", elev: "3,000m – 3,300m", desc: "Dense oak and rhododendron forest breaks into patches of open grassland and wind-bent trees." },
    { name: "Bayeli Kharka Pastures", elev: "3,300m – 3,500m", desc: "Expansive summer pasture used by Swanta villagers for transhumance sheep and yak grazing." },
    { name: "Khopra Danda Ridgeline", elev: "3,500m – 3,700m", desc: "Wind-swept alpine grasslands offering panoramic views of Dhaulagiri, Annapurna South, and Nilgiri." },
    { name: "Khayer Lake Alpine Basin", elev: "3,700m – 4,660m", desc: "Extreme alpine meadow and rocky scree surrounding the sacred high-altitude glacial lake." },
  ];

  const vegetationTypes = [
    { plant: "Alpine & Tussock Grasses", adapt: "Forms low mat layers that bind fragile topsoil against monsoon rainfall erosion." },
    { plant: "Dwarf Juniper Shrubs", adapt: "Grows compact and low to the ground to resist constant high-altitude winds." },
    { plant: "Sedges & Damp Pasture Plants", adapt: "Thrives along snowmelt runoff channels around Bayeli Kharka." },
    { plant: "High-Altitude Wildflowers", adapt: "Short, intense summer bloom window with vivid colors to attract alpine pollinators." },
  ];

  const faqs = [
    {
      q: "What are the alpine meadows of Khopra Danda?",
      a: "They are high-altitude grasslands, locally called Kharkas, that begin above the treeline on the Khopra Ridge Trek. They form a transition zone between forest and high mountain terrain within the Annapurna Conservation Area.",
    },
    {
      q: "At what altitude do the meadows begin on the Khopra Ridge Trek?",
      a: "The transition starts around Chhistibung, near 3,000 meters, with the main meadow zones extending up to roughly 3,700 meters around Khopra Danda.",
    },
    {
      q: "What does \"Kharka\" mean in Nepal?",
      a: "Kharka refers to a traditional high-altitude pasture used for seasonal livestock grazing, typically tied to specific villages with long-standing grazing rights.",
    },
    {
      q: "Which animals live in the alpine grasslands of Khopra?",
      a: "The Himalayan monal, Himalayan tahr, and musk deer are among the species associated with this altitude range, alongside various birds of prey and alpine pollinators.",
    },
    {
      q: "When is the best season to see wildflowers in Khopra Danda?",
      a: "Spring, as snow clears, typically brings the strongest wildflower blooms, while summer monsoon months support the most overall plant growth.",
    },
    {
      q: "Do local communities still use the alpine pastures?",
      a: "Yes. Shepherds from villages including Swanta and Paudwar continue to graze sheep, goats, and yaks in these meadows during the summer months, following traditional transhumance patterns.",
    },
    {
      q: "How do alpine plants survive in extreme Himalayan conditions?",
      a: "Most alpine plants grow low and dense to resist wind, form cushion or mat shapes to retain heat, and complete their growth cycle within a short summer window.",
    },
    {
      q: "Are the meadows part of the Annapurna Conservation Area?",
      a: "Yes, Khopra Danda's alpine meadows fall within the Annapurna Conservation Area, which oversees conservation efforts across this part of the Annapurna region.",
    },
    {
      q: "How is climate change affecting Khopra's ecosystem?",
      a: "Shifting snowmelt timing and monsoon patterns are altering growing seasons and grazing cycles, a trend observed across Himalayan alpine zones more broadly.",
    },
    {
      q: "How can trekkers help protect fragile alpine habitats?",
      a: "Staying on marked trails, avoiding disturbance to grazing livestock, carrying out all waste, and not picking wildflowers all help reduce pressure on these sensitive grasslands.",
    },
  ];

  return (
    <div className="w-full flex-1 bg-stone-50">
      {/* Hero Header */}
      <section className="bg-stone-900 py-16 sm:py-20 text-white border-b border-stone-800">
        <div className="mx-auto max-w-7xl px-6">
          <nav className="flex items-center gap-2 text-xs font-semibold text-stone-400 mb-6 uppercase tracking-wider">
            <Link href="/" className="hover:text-emerald-400 transition">Home</Link>
            <span>/</span>
            <Link href="/ecology/annapurna-conservation-area-guide" className="hover:text-emerald-400 transition">Ecology &amp; Forests</Link>
            <span>/</span>
            <span className="text-emerald-400">Alpine Meadows</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              High-Altitude Ecosystem &amp; Pastoral Culture
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Alpine Meadows of Khopra Danda
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Ecology, high-altitude biodiversity, transhumance shepherd culture (Kharkas), and mountain landscapes inside the Annapurna Conservation Area.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {quickStats.map((stat, idx) => (
              <div key={idx} className="rounded-xl bg-stone-800/80 border border-stone-700/60 p-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">{stat.label}</span>
                <p className="mt-1 text-sm sm:text-base font-extrabold text-stone-100">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Body & Sidebar */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Article Main Body */}
          <div className="lg:col-span-3 space-y-12">

            {/* E-E-A-T Operator Verification Banner */}
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
              <div className="rounded-xl bg-emerald-100 p-3 text-emerald-800 font-bold text-xl flex items-center justify-center shrink-0">
                🏔️
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Field Pastoral &amp; Ecological Knowledge</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). Based in Pokhara, our local guides accompany trekkers through the traditional shepherd pastures of Swanta and Khopra.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Somewhere above 3,000 meters on the Khopra Ridge Trek, the forest simply stops. The dense canopy of rhododendron and oak that shelters the trail through Chhistibung thins out, opens, and gives way to something entirely different: rolling grasslands that stretch toward the base of the Himalaya.
              </p>
              <p>
                These are the alpine meadows of Khopra Danda — known locally as <strong>Kharkas</strong> — and they are far more than a scenic backdrop for photographs. They are a living ecosystem shaped by wind, snowmelt, and centuries of seasonal transhumance shepherd traditions.
              </p>
            </div>

            {/* Section 1: What Are Kharkas? */}
            <div id="what-are-kharkas" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                What Are the Kharkas of Khopra Danda?
              </h2>
              
              <div className="space-y-4 text-stone-700 leading-relaxed">
                <p>
                  <strong>Kharka</strong> is the traditional Nepali term for high-altitude pastures used for seasonal livestock grazing. Key meadow zones like <strong>Bayeli Kharka</strong> have been managed by local Magar communities from Swanta and Paudwar for generations.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                    <h4 className="font-bold text-stone-900 text-base">🐑 Transhumance Grazing</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Shepherds drive yaks, sheep, and goats to high pastures during monsoon to feed on nutrient-dense alpine grasses.
                    </p>
                  </div>
                  <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                    <h4 className="font-bold text-stone-900 text-base">🌱 Soil Binding</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Deep root networks of tussock grasses stabilize fragile topsoil, preventing monsoon landslides on steep slopes.
                    </p>
                  </div>
                  <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                    <h4 className="font-bold text-stone-900 text-base">🏔️ Open Mountain Vistas</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Tree-free ridgelines open unbroken panoramas of Dhaulagiri, Annapurna South, Nilgiri, and Machhapuchhre.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Meadow Locations Table */}
            <div id="meadow-locations" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Key Alpine Meadow Zones Along the Route
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Meadow Zone</th>
                      <th className="py-4 px-4 sm:px-6">Elevation</th>
                      <th className="py-4 px-4 sm:px-6">Landscape Character &amp; Use</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {meadowZones.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.name}</td>
                        <td className="py-4 px-4 sm:px-6 font-mono text-emerald-800 text-xs">{row.elev}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 3: Vegetation Adaptations */}
            <div id="vegetation-adaptations" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                High-Altitude Botanical Adaptations
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {vegetationTypes.map((item, idx) => (
                  <div key={idx} className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                    <h4 className="font-bold text-stone-950 text-base">🌿 {item.plant}</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">{item.adapt}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4: Seasonal Changes */}
            <div id="seasonal-changes" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Seasonal Shifts Across the Pastures
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🌸 Spring (March – May)</h4>
                  <p className="text-xs text-stone-600">Snow melts to reveal sprouting alpine grasses and early wildflower bursts.</p>
                </div>
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5 space-y-2">
                  <h4 className="font-bold text-emerald-950">🌧️ Summer / Monsoon (June – August)</h4>
                  <p className="text-xs text-emerald-900 leading-relaxed">Peak green growth and active transhumance grazing by Swanta shepherds.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🍂 Autumn (Sept – Nov)</h4>
                  <p className="text-xs text-stone-600">Golden-brown pastures framed by razor-sharp clear Himalayan mountain views.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">❄️ Winter (Dec – Feb)</h4>
                  <p className="text-xs text-stone-600">Snow covers pastures; livestock retreats to lower villages like Swanta and Paudwar.</p>
                </div>
              </div>
            </div>

            {/* Section 5: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions: Alpine Meadows
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group rounded-2xl border border-stone-200 bg-white p-6 transition [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-4 font-bold text-stone-900 text-base sm:text-lg">
                      <span>{faq.q}</span>
                      <span className="shrink-0 text-stone-400 transition group-open:-rotate-180">
                        ▼
                      </span>
                    </summary>
                    <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed border-t border-stone-100 pt-4">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>

            {/* CTA Banner */}
            <div className="rounded-3xl bg-emerald-950 p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
              <div className="relative z-10 space-y-4 max-w-2xl">
                <span className="px-3 py-1 bg-emerald-800 text-emerald-200 rounded-full text-xs font-bold uppercase tracking-wider">
                  Alpine Eco Treks
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Explore the High Meadows of Khopra Danda
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Experience traditional shepherd culture and high alpine ecology with <strong>EMD Treks</strong> (Nepal Tourism License #8928-091). Guided treks through community lodges supporting Magar mountain villages.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire About High Alpine Treks
                  </Link>
                  <Link
                    href="/ecology/annapurna-conservation-area-guide"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Read ACA Conservation Guide
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* Sticky Sidebar Table of Contents */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-4">
              <h4 className="font-extrabold text-stone-900 text-xs uppercase tracking-widest border-b border-stone-100 pb-3">
                On This Page
              </h4>
              <nav className="space-y-2 text-xs font-semibold text-stone-600">
                <a href="#what-are-kharkas" className="block hover:text-emerald-600 transition">
                  • What Are Kharkas?
                </a>
                <a href="#meadow-locations" className="block hover:text-emerald-600 transition">
                  • Key Meadow Zones
                </a>
                <a href="#vegetation-adaptations" className="block hover:text-emerald-600 transition">
                  • Botanical Adaptations
                </a>
                <a href="#seasonal-changes" className="block hover:text-emerald-600 transition">
                  • Seasonal Shifts
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Ecology Guides</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/ecology/flora-of-khopra" className="hover:text-emerald-700 underline">
                      Flora of Khopra Trail
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecology/wildlife-khopra-trek" className="hover:text-emerald-700 underline">
                      Wildlife of Khopra Trek
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecology/annapurna-conservation-area-guide" className="hover:text-emerald-700 underline">
                      ACA Conservation Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/routes/khopra-ridge-to-khayer-lake" className="hover:text-emerald-700 underline">
                      Khopra to Khayer Lake Route
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
