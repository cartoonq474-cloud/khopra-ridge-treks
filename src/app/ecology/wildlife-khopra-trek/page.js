import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Wildlife of the Khopra Ridge Trail: Animals, Birds & Himalayan Biodiversity Guide",
  description:
    "Discover the wildlife of the Khopra Ridge Trail — mammals, birds, ecosystems, and conservation inside the Annapurna Conservation Area. A complete field guide for trekkers.",
  alternates: {
    canonical: "https://khopraridgetrek.com/ecology/wildlife-khopra-trek",
  },
  openGraph: {
    title: "Wildlife of the Khopra Ridge Trail: Animals, Birds & Himalayan Biodiversity Guide",
    description:
      "Discover the wildlife of the Khopra Ridge Trail — mammals, birds, ecosystems, and conservation inside the Annapurna Conservation Area. A complete field guide for trekkers.",
    url: "https://khopraridgetrek.com/ecology/wildlife-khopra-trek",
    type: "article",
  },
};

export default function WildlifeKhopraTrekPage() {
  const quickStats = [
    { label: "Protected Area", value: "Annapurna Conservation Area (ACAP)" },
    { label: "National Bird", value: "Danphe (Himalayan Monal)" },
    { label: "Common Primates", value: "Nepal Grey Langur Troops" },
    { label: "High Alpine Ungulates", value: "Himalayan Tahr & Musk Deer" },
  ];

  const elevationWildlifeTable = [
    { elev: "1,700–2,300 m", habitat: "Temperate oak forest", mammals: "Nepal Grey Langur, small forest mammals", birds: "Forest thrushes, woodpeckers" },
    { elev: "2,300–3,000 m", habitat: "Rhododendron & mixed forest", mammals: "Himalayan Musk Deer, Barking Deer", birds: "Himalayan Monal, Blood Pheasant" },
    { elev: "3,000–3,600 m", habitat: "Bamboo & subalpine scrub", mammals: "Himalayan Tahr, Yellow-throated Marten", birds: "Pheasants, songbirds" },
    { elev: "3,600 m and above", habitat: "Alpine meadow & rocky terrain", mammals: "Himalayan Tahr, occasional Snow Leopard sign", birds: "Lammergeier, Himalayan Griffon, Golden Eagle" },
  ];

  const mammalProbabilityTable = [
    { species: "Nepal Grey Langur", habitat: "Temperate forest", likelihood: "High" },
    { species: "Himalayan Tahr", habitat: "Alpine / rocky terrain", likelihood: "Moderate to High" },
    { species: "Himalayan Musk Deer", habitat: "Bamboo / subalpine forest", likelihood: "Low (signs common)" },
    { species: "Barking Deer", habitat: "Mixed forest", likelihood: "Low" },
    { species: "Yellow-throated Marten", habitat: "Forest edges", likelihood: "Low" },
    { species: "Himalayan Black Bear", habitat: "Dense forest", likelihood: "Very Low" },
    { species: "Snow Leopard", habitat: "High alpine terrain", likelihood: "Very Rare (signs only)" },
  ];

  const hotspots = [
    { spot: "Tadapani & Lower Forest", desc: "Dense shaded oak-rhododendron forest; ideal for Nepal Grey Langur troops and forest songbirds." },
    { spot: "Dobato Transition Zone", desc: "Border between oak forest and subalpine thicket; peak bird diversity and musk deer browse tracks." },
    { spot: "Bayeli Kharka Meadows", desc: "Open subalpine pastures where Himalayan Tahr frequently graze on surrounding slopes." },
    { spot: "Chhistibung Ridgeline", desc: "Exposed ridge offering thermal updrafts for high-flying raptors like Lammergeier and Griffon." },
    { spot: "Khayer Lake Alpine Basin", desc: "Extreme alpine habitat (4,660m) for tahr, high-altitude eagles, and winter snow leopard tracks." },
  ];

  const faqs = [
    {
      q: "What wildlife can you see on the Khopra Ridge Trek?",
      a: "Trekkers regularly see Nepal Grey Langurs and Himalayan Tahr, along with pheasant species like the Himalayan Monal and Blood Pheasant, and raptors such as the Lammergeier and Himalayan Griffon. Rarer species, including musk deer and black bear, are present but seen less often.",
    },
    {
      q: "Is Khopra Ridge good for birdwatching?",
      a: "Yes. The trail crosses temperate forest, bamboo belt, and alpine terrain in a relatively short distance, which supports a wide range of bird species from forest thrushes to high-altitude raptors, making it one of the stronger birdwatching routes in the Annapurna region.",
    },
    {
      q: "Can you see snow leopards on Khopra Ridge?",
      a: "Direct sightings are extremely rare, since snow leopards are among the most elusive predators in the world. Trekkers occasionally find tracks or other signs in the high alpine zone near Khayer Lake, particularly outside peak season, but a confirmed sighting shouldn't be the expectation.",
    },
    {
      q: "Which mammals are most common on the trek?",
      a: "The Nepal Grey Langur and Himalayan Tahr are the two mammals trekkers see most consistently, with langurs common in the lower forest zones and Tahr more visible on the open, rocky ground above the treeline.",
    },
    {
      q: "Are there bears on the Khopra Ridge Trail?",
      a: "Himalayan Black Bears live within the Annapurna Conservation Area, but they tend to avoid trekking trails and are most active in early morning or evening in dense forest, so sightings on the Khopra route are uncommon.",
    },
    {
      q: "What is the best season to see wildlife in Annapurna?",
      a: "Spring (March to May) offers the strongest overall wildlife activity due to breeding season and new plant growth, while autumn (September to November) combines clear skies with good animal movement and is generally the most practical season for trekking.",
    },
    {
      q: "How many bird species can be seen in the Annapurna Conservation Area?",
      a: "The Annapurna Conservation Area supports several hundred recorded bird species across its full elevation range, and the Khopra Ridge Trail's mix of forest and alpine habitat gives trekkers realistic access to a meaningful cross-section of that diversity.",
    },
    {
      q: "Is Khopra Ridge better than Poon Hill for wildlife spotting?",
      a: "Generally, yes. Poon Hill's higher trekker volume pushes wildlife away from the trail, while Khopra's quieter path and longer stretches of intact forest give animals less reason to avoid the route.",
    },
    {
      q: "What camera equipment should I bring for wildlife photography?",
      a: "A telephoto lens in the 300–400mm range is useful for both birds and mammals, since most wildlife keeps its distance. A lightweight pair of binoculars is often more valuable than the camera itself for actually locating animals in the first place.",
    },
    {
      q: "Do I need a guide for wildlife and birdwatching on this trek?",
      a: "A guide isn't strictly required for identifying every bird, but local guides know the specific stretches of trail, times of day, and seasonal patterns where sightings are most likely, which meaningfully improves your odds compared to trekking without local knowledge.",
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
            <Link href="/ecology/annapurna-conservation-area-guide" className="hover:text-emerald-400 transition">Ecology &amp; Wildlife</Link>
            <span>/</span>
            <span className="text-emerald-400">Khopra Wildlife Guide</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Himalayan Biodiversity &amp; Field Guide
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Wildlife of the Khopra Ridge Trail
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Complete field guide to mammals, birds, altitude ecosystems, and conservation inside the Annapurna Conservation Area.
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
                <h4 className="font-bold text-stone-900 text-base">Field Operational Insights from Local Guides</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). Based in Pokhara, our licensed guides lead wildlife enthusiasts and birdwatchers along quiet Annapurna corridors.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Most people come to the Khopra Ridge Trek for one reason: the mountain panoramas. Annapurna South, Dhaulagiri, Nilgiri, Machhapuchhre, and Hiunchuli rise around the ridge in an unbroken wall of ice and rock. But somewhere between the rhododendron forests of Tadapani and the alpine silence of Khayer Lake, most trekkers notice something else — movement in the canopy, a pheasant crossing the trail, a raptor circling on a thermal above the ridge.
              </p>
              <p>
                That is the wildlife of the Khopra Ridge Trail, and it&apos;s a bigger part of the experience than most commercial guides admit. This is an honest field guide to what animals live here, where to look, and how ecosystem zones change with altitude.
              </p>
            </div>

            {/* Section 1: Wildlife Corridors & Low Traffic */}
            <div id="wildlife-corridors" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Why Khopra Ridge Is a Rich Wildlife Corridor
              </h2>
              
              <div className="space-y-4 text-stone-700 leading-relaxed">
                <p>
                  The Khopra Ridge Trail sits entirely inside the <strong>Annapurna Conservation Area (ACA)</strong>. Unlike crowded highway trails, Khopra sees a fraction of the foot traffic. Reduced noise and intact community forests between Ghandruk, Tadapani, Dobato, and Swanta allow animal populations to thrive near the trail.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                    <h4 className="font-bold text-stone-900 text-base">🌲 Forest Protection &amp; ACAP</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Regulated logging and hunting bans enforced by local community forestry groups have enabled species like the Himalayan Monal and Langur monkeys to flourish.
                    </p>
                  </div>
                  <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                    <h4 className="font-bold text-stone-900 text-base">🔇 Quiet Trail Advantage</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Fewer trekkers mean animals do not flee deep into the wilderness. Patient hikers often spot wildlife directly from the main walking path during dawn.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Altitude Zones & Wildlife Table */}
            <div id="altitude-zones" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Altitude Zones &amp; Species Distribution
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Elevation Band</th>
                      <th className="py-4 px-4 sm:px-6">Habitat Type</th>
                      <th className="py-4 px-4 sm:px-6">Common Mammals</th>
                      <th className="py-4 px-4 sm:px-6">Common Birds</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {elevationWildlifeTable.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.elev}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.habitat}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-700 font-medium">{row.mammals}</td>
                        <td className="py-4 px-4 sm:px-6 text-emerald-700 font-semibold">{row.birds}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 3: Mammals Table */}
            <div id="mammals" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Mammals of the Khopra Ridge Trail
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Mammal Species</th>
                      <th className="py-4 px-4 sm:px-6">Primary Habitat</th>
                      <th className="py-4 px-4 sm:px-6">Sighting Likelihood</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {mammalProbabilityTable.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.species}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.habitat}</td>
                        <td className="py-4 px-4 sm:px-6 font-extrabold text-emerald-700">{row.likelihood}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 4: Birdwatching & Raptors */}
            <div id="birdwatching" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Birdwatching &amp; Himalayan Raptors
              </h2>

              <div className="space-y-4 text-stone-700 leading-relaxed">
                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h3 className="font-bold text-stone-950 text-lg">🦚 The Himalayan Monal (Danphe)</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Nepal&apos;s iridescent national bird is a primary target for birdwatchers. Males feature copper, green, blue, and violet plumage. They forage in the rhododendron forests between 2,300m and 3,300m, particularly in early morning near Dobato and Bayeli.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h3 className="font-bold text-stone-950 text-lg">🦅 High-Altitude Raptors</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Above 3,000m, keep your eyes on thermal winds. The massive <strong>Lammergeier (Bearded Vulture)</strong> with a 2.5m wingspan, Himalayan Griffon, and Golden Eagle regularly circle the open ridges around Chhistibung and Khopra.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5: Wildlife Hotspots */}
            <div id="hotspots" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Top 5 Wildlife Hotspots Along the Trail
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hotspots.map((h, idx) => (
                  <div key={idx} className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                    <h4 className="font-bold text-stone-950 text-base">📍 {h.spot}</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">{h.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 6: Seasonal Wildlife Breakdown */}
            <div id="seasonal-guide" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Seasonal Wildlife Calendar
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5 space-y-2">
                  <h4 className="font-bold text-emerald-950">🌸 Spring (March – May)</h4>
                  <p className="text-xs text-emerald-900 leading-relaxed">Peak bird activity and displaying male pheasants. Rhododendron blooms attract insects and active forest mammals.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🍂 Autumn (Sept – Nov)</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">Clear skies and crisp morning air offer optimal raptor thermal watching and active Himalayan Tahr grazing.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">❄️ Winter (Dec – Feb)</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">Snow compresses animal ranges down to lower forest belts. Fresh snow yields high-altitude animal track tracking.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🌧️ Monsoon (June – Aug)</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">Lush vegetation growth provides dense cover. Sighting visibility is reduced due to rain fog and dense canopy.</p>
                </div>
              </div>
            </div>

            {/* Section 7: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions: Wildlife of Khopra Ridge
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
                  Wildlife &amp; Nature Guided Treks
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Trek Khopra Ridge with Certified Local Field Guides
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Experience the rich Himalayan flora, fauna, and birdlife with <strong>EMD Treks</strong> (Nepal Tourism License #8928-091). Our local guides know the exact trail stretches and early morning windows for optimal wildlife sightings.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire About Nature Treks
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
                <a href="#wildlife-corridors" className="block hover:text-emerald-600 transition">
                  • Wildlife Corridor Overview
                </a>
                <a href="#altitude-zones" className="block hover:text-emerald-600 transition">
                  • Altitude &amp; Habitat Zones
                </a>
                <a href="#mammals" className="block hover:text-emerald-600 transition">
                  • Mammals Sighting Matrix
                </a>
                <a href="#birdwatching" className="block hover:text-emerald-600 transition">
                  • Birdwatching &amp; Raptors
                </a>
                <a href="#hotspots" className="block hover:text-emerald-600 transition">
                  • Top 5 Wildlife Hotspots
                </a>
                <a href="#seasonal-guide" className="block hover:text-emerald-600 transition">
                  • Seasonal Wildlife Calendar
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Ecology Guides</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/ecology/annapurna-conservation-area-guide" className="hover:text-emerald-700 underline">
                      Annapurna Conservation Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecology/birds-of-annapurna" className="hover:text-emerald-700 underline">
                      Birds of Annapurna Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecology/rhododendron-forests" className="hover:text-emerald-700 underline">
                      Rhododendron Forests
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
