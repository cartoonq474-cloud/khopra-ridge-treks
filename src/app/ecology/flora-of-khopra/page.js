import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Flora of the Khopra Ridge Trail | Nepal Trek Guide",
  description: "Explore the flora of the Khopra Ridge Trail, from rhododendron forests and oak woodlands to alpine meadows near Khayer Lake in the Annapurna Conservation Area.",
  alternates: {
    canonical: "https://khopraridgetrek.com/ecology/flora-of-khopra",
  },
  openGraph: {
    title: "Flora of the Khopra Ridge Trail: A Complete Guide to Himalayan Plant Life",
    description:
      "Explore the flora of the Khopra Ridge Trail, from rhododendron forests and oak woodlands to alpine meadows near Khayer Lake in the Annapurna Conservation Area.",
    url: "https://khopraridgetrek.com/ecology/flora-of-khopra",
    type: "article",
  },
};

export default function FloraOfKhopraPage() {
  const quickStats = [
    { label: "Vertical Elevation Gain", value: "1,025m to 4,660m" },
    { label: "Tree Line Threshold", value: "3,500m – 3,800m" },
    { label: "National Flower", value: "Lali Gurans (R. arboreum)" },
    { label: "Protected Area", value: "Annapurna Conservation Area (ACAP)" },
  ];

  const vegetationZonesTable = [
    { zone: "Subtropical (1,000–2,000m)", trees: "Alnus nepalensis (Utis), Bamboo groves, Terraced crops", Understory: "Ferns, epiphytic orchids, climbing vines" },
    { zone: "Temperate (2,000–2,800m)", trees: "Himalayan Oak (Quercus), Blue Pine (Pinus wallichiana)", Understory: "Mosses, ferns, shade-tolerant forest litter" },
    { zone: "Sub-alpine (2,800–3,500m)", trees: "Rhododendron arboreum, Himalayan Birch, Fir (Abies)", Understory: "Dense flower canopy, paperbark birch" },
    { zone: "Alpine (3,500–4,660m)", trees: "Dwarf Juniper, Alpine Grasses, Cushion Flora", Understory: "Lichens, Primula, Meconopsis (Blue Poppy)" },
  ];

  const medicinalPlants = [
    { plant: "Daphne bholua (Lokta)", use: "Fibrous bark harvested for traditional Nepali handmade paper." },
    { plant: "Urtica dioica (Stinging Nettle)", use: "Gathered for traditional soups and herbal remedies." },
    { plant: "Paris polyphylla (Satuwa)", use: "Valued in traditional medicine; protected from overharvesting." },
    { plant: "Nardostachys jatamansi (Jatamansi)", use: "High-altitude aromatic root used in traditional healing oils." },
  ];

  const faqs = [
    {
      q: "What plants grow along the Khopra Ridge Trek?",
      a: "The trail passes through several vegetation zones, including subtropical forest with bamboo and ferns, temperate oak and pine forest, sub-alpine rhododendron and fir forest, and alpine meadows with junipers, grasses, mosses, and lichens above the tree line.",
    },
    {
      q: "When do rhododendrons bloom on Khopra Ridge?",
      a: "Rhododendron season typically runs from late March through April, with lower-elevation forests often blooming slightly earlier than higher stands near Tadapani and Dobato.",
    },
    {
      q: "Which forests can trekkers see between Ghandruk and Khopra Ridge?",
      a: "Trekkers pass through subtropical valley forest near Ghandruk, temperate oak and pine forest at mid-elevation, and dense sub-alpine rhododendron and fir forest as the trail climbs toward Tadapani and Dobato.",
    },
    {
      q: "What flowers grow near Khayer Lake?",
      a: "The alpine zone around Khayer Lake supports hardy summer wildflowers, including Primula and Meconopsis (Himalayan blue poppy), alongside dwarf juniper and alpine grasses that dominate the landscape for most of the year.",
    },
    {
      q: "Are there medicinal plants on the Khopra Ridge Trail?",
      a: "Yes. Species such as Daphne bholua, Urtica dioica, Paris polyphylla, and Nardostachys jatamansi have traditional uses in the region, though some are subject to conservation concerns due to overharvesting.",
    },
    {
      q: "How does vegetation change with altitude in the Annapurna region?",
      a: "Vegetation shifts from subtropical forest at lower elevations, to temperate oak and pine forest, to sub-alpine rhododendron and fir forest, and finally to alpine scrub and meadow above the tree line at roughly 3,500 to 3,800 meters.",
    },
    {
      q: "What is the national flower of Nepal found on Khopra Ridge?",
      a: "Rhododendron arboreum, known locally as lali gurans, is Nepal's national flower and the dominant species in the trail's sub-alpine forest zone.",
    },
    {
      q: "Is Khopra Ridge part of the Annapurna Conservation Area?",
      a: "Yes, the entire route lies within the Annapurna Conservation Area, Nepal's largest protected area, which helps preserve the forest cover and biodiversity found along the trail.",
    },
    {
      q: "What is the best season to see Himalayan flora on this trek?",
      a: "Spring is best for rhododendron blooms, while early to mid-summer offers the best chance of seeing alpine wildflowers near Khayer Lake. Autumn provides clearer views but fewer blooms.",
    },
    {
      q: "Can trekkers identify plants without a guide?",
      a: "It's possible with a field guide and some knowledge of elevation zones, but a local guide offers far more insight, including traditional uses and species that are easy to overlook on your own.",
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
            <span className="text-emerald-400">Flora of Khopra</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Himalayan Botanical Field Guide
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Flora of the Khopra Ridge Trail
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              A complete guide to Himalayan plant life — from river valley bamboo and oak forests to sub-alpine rhododendrons and high-altitude alpine meadows.
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
                🇳🇵
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Botanical Insights from Licensed Local Guides</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). Based in Pokhara, our team guides plant enthusiasts and nature lovers across Annapurna&apos;s distinct botanical belts.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Few treks in Nepal compress as much ecological change into a single route as the Khopra Ridge Trail. Starting in warm river valleys around 1,025 meters and climbing to alpine terrain near 4,660 meters, the trail moves through nearly every major vegetation belt the central Himalayas have to offer.
              </p>
              <p>
                In a matter of days, trekkers walk from bamboo groves and terraced farmland into oak and pine forest, then through rhododendron woodland, and finally out onto wind-scoured alpine meadows below Khayer Lake.
              </p>
            </div>

            {/* Section 1: Diverse Botanical Corridor */}
            <div id="botanical-corridor" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Why Khopra Ridge Is a Diverse Botanical Corridor
              </h2>
              
              <div className="space-y-4 text-stone-700 leading-relaxed">
                <p>
                  Gaining close to 3,600 vertical meters, the Khopra Ridge Trek traverses several distinct microclimates shaped by elevation, slope aspect, and ACAP forest conservation protections.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                    <h4 className="font-bold text-stone-900 text-base">⛰️ Elevation Shift</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Temperature drops and growing seasons shorten with altitude, setting a sharp tree line at 3,500m–3,800m.
                    </p>
                  </div>
                  <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                    <h4 className="font-bold text-stone-900 text-base">🛡️ ACAP Protection</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Strict logging restrictions within ACAP maintain intact oak and rhododendron canopies around Dobato and Tadapani.
                    </p>
                  </div>
                  <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                    <h4 className="font-bold text-stone-900 text-base">🌿 Microclimates</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      North-facing moist slopes nourish mosses and epiphytic orchids, while south-facing slopes favor hardy blue pines.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Vegetation Zones Table */}
            <div id="vegetation-zones" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Vegetation Zones Along the Trek
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Vegetation Zone</th>
                      <th className="py-4 px-4 sm:px-6">Dominant Tree Species</th>
                      <th className="py-4 px-4 sm:px-6">Understory &amp; Floor Vegetation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {vegetationZonesTable.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.zone}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-700 font-medium">{row.trees}</td>
                        <td className="py-4 px-4 sm:px-6 text-emerald-700 font-semibold">{row.Understory}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 3: Medicinal & Cultural Plants */}
            <div id="medicinal-plants" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Medicinal &amp; Culturally Important Plants
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {medicinalPlants.map((m, idx) => (
                  <div key={idx} className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                    <h4 className="font-bold text-stone-950 text-base">🌱 {m.plant}</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">{m.use}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4: High Altitude Alpine Flora */}
            <div id="alpine-flora" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Flora Around Khayer Lake (3,500m – 4,660m)
              </h2>

              <div className="space-y-4 text-stone-700 leading-relaxed">
                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h3 className="font-bold text-stone-950 text-lg">🌾 Alpine Grasses &amp; Dwarf Junipers</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Above the tree line, dwarf junipers hug the ground to withstand icy high-altitude winds. Low mat-forming grasses stabilize the rocky cirque surrounding sacred Khayer Lake.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h3 className="font-bold text-stone-950 text-lg">🪷 Himalayan Blue Poppy (Meconopsis) &amp; Primula</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    During the brief summer window (June–August), alpine meadows burst into bloom with high-altitude specialists like <em>Primula</em> and the rare <em>Meconopsis</em> (Himalayan blue poppy).
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5: Seasonal Shift */}
            <div id="seasonal-shifts" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Seasonal Botanical Transformations
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5 space-y-2">
                  <h4 className="font-bold text-emerald-950">🌸 Spring (March – April)</h4>
                  <p className="text-xs text-emerald-900 leading-relaxed">Peak blooming season for sub-alpine rhododendron forests around Tadapani and Dobato.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">☀️ Summer / Monsoon (June – August)</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">Lush green canopy growth in lower forests; peak wildflower blooms in alpine meadows.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🍂 Autumn (Sept – Nov)</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">Crisp clear mountain air; forest canopy transitions toward winter dormancy.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">❄️ Winter (Dec – Feb)</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">Snow covers alpine pastures; lower oak forests remain green while high flora sleeps.</p>
                </div>
              </div>
            </div>

            {/* Section 6: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions: Flora of Khopra Ridge
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
                  Nature &amp; Botanical Treks
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Trek Khopra Ridge with Local Field Guides
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Discover the diverse Himalayan flora with <strong>EMD Treks</strong> (Nepal Tourism License #8928-091). Our local guides know the exact trail stretches for peak forest blooms and alpine wildflowers.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire About Botanical Treks
                  </Link>
                  <Link
                    href="/ecology/rhododendron-forests"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Read Rhododendron Forest Guide
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
                <a href="#botanical-corridor" className="block hover:text-emerald-600 transition">
                  • Botanical Corridor Overview
                </a>
                <a href="#vegetation-zones" className="block hover:text-emerald-600 transition">
                  • Elevation Vegetation Zones
                </a>
                <a href="#medicinal-plants" className="block hover:text-emerald-600 transition">
                  • Medicinal &amp; Cultural Plants
                </a>
                <a href="#alpine-flora" className="block hover:text-emerald-600 transition">
                  • Alpine Flora near Khayer Lake
                </a>
                <a href="#seasonal-shifts" className="block hover:text-emerald-600 transition">
                  • Seasonal Transformations
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Ecology Guides</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/ecology/rhododendron-forests" className="hover:text-emerald-700 underline">
                      Rhododendron Forests Guide
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
                    <Link href="/ecology/red-pandas-on-khopra" className="hover:text-emerald-700 underline">
                      Red Pandas on Khopra
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
