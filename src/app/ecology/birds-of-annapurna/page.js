import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Birds of the Annapurna: The Ultimate Khopra Ridge Bird Guide",
  description:
    "Discover the birds of Khopra Ridge in the Annapurna Conservation Area — habitats, seasons, top species like the Himalayan Monal, and expert birdwatching tips.",
  alternates: {
    canonical: "https://khopraridgetrek.com/ecology/birds-of-annapurna",
  },
  openGraph: {
    title: "Birds of the Annapurna: The Ultimate Khopra Ridge Bird Guide",
    description:
      "Discover the birds of Khopra Ridge in the Annapurna Conservation Area — habitats, seasons, top species like the Himalayan Monal, and expert birdwatching tips.",
    url: "https://khopraridgetrek.com/ecology/birds-of-annapurna",
    type: "article",
  },
};

export default function BirdsOfAnnapurnaPage() {
  const quickStats = [
    { label: "Protected Reserve", value: "Annapurna Conservation Area" },
    { label: "National Bird", value: "Danphe (Himalayan Monal)" },
    { label: "Top Raptor Species", value: "Himalayan Griffon & Lammergeier" },
    { label: "Peak Birding Window", value: "Spring (March – May)" },
  ];

  const habitatBreakdown = [
    { elev: "1,700–2,400 m", habitat: "Lower Montane Forest (Ghandruk to Tadapani)", species: "Kalij Pheasant, Laughingthrushes, Flycatchers, Warblers" },
    { elev: "2,400–3,000 m", habitat: "Rhododendron & Oak Canopy (Tadapani to Dobato)", species: "Himalayan Monal (Danphe), Sunbirds, Woodpeckers" },
    { elev: "3,000–3,500 m", habitat: "Subalpine Conifer & Scrub (Bayeli & Chhistibung)", species: "Blood Pheasant, High-altitude passerines, Finches" },
    { elev: "3,500–4,660 m", habitat: "Alpine Meadows & Ridges (Khopra & Khayer Lake)", species: "Himalayan Griffon, Lammergeier, Golden Eagle, Red-billed Chough" },
  ];

  const featuredBirds = [
    { name: "Himalayan Monal (Danphe)", scientific: "Lophophorus impejanus", details: "Nepal's national bird. Iridescent copper, blue, and green plumage. Most active at early morning in rhododendron forests near Dobato." },
    { name: "Kalij Pheasant", scientific: "Lophura leucomelanos", details: "Glossy blue-black plumage on males with bright red facial patches. Common in lower shaded forests near Ghandruk." },
    { name: "Blood Pheasant", scientific: "Ithaginis cruentus", details: "Crimson-flecked breast and face markings. Found foraging in small coveys in subalpine scrub around Bayeli Kharka." },
    { name: "Himalayan Griffon Vulture", scientific: "Gyps himalayensis", details: "Massive raptor with a wingspan near 3 meters. Rides morning thermal updrafts along Khopra Danda." },
    { name: "Lammergeier (Bearded Vulture)", scientific: "Gypaetus barbatus", details: "Distinctive bone-dropping raptor soaring along high cliffs and open ridges near Khayer Lake." },
  ];

  const hotspots = [
    { spot: "Ghandruk to Tadapani", desc: "Dense lower forest; high insect biomass drawing flycatchers, warblers, and Kalij pheasants." },
    { spot: "Tadapani to Dobato", desc: "Prime rhododendron-oak habitat; best overall stretch for early morning Himalayan Monal sightings." },
    { spot: "Bayeli Kharka & Chhistibung", desc: "Subalpine transition zone; reliable for Blood Pheasants and early raptor thermal sightings." },
    { spot: "Khopra Ridge & Khayer Lake", desc: "Alpine ridgelines offering eye-level soaring views of Himalayan Griffons, Golden Eagles, and Lammergeiers." },
    { spot: "Muldai Viewpoint", desc: "360-degree panorama point perfect for spotting raptors catching the day's first thermal currents." },
  ];

  const faqs = [
    {
      q: "Is Khopra Ridge good for birdwatching?",
      a: "Yes. Its combination of quiet trails, varied elevation, and intact forest habitat makes it one of the better birdwatching routes in the Annapurna Conservation Area, with strong chances of seeing pheasants, raptors, and forest songbirds.",
    },
    {
      q: "Can you see the Himalayan Monal on the Khopra trek?",
      a: "Sightings are reasonably common in the rhododendron and oak forest between Tadapani and Dobato, especially in the early morning during spring and autumn.",
    },
    {
      q: "What birds live in the Annapurna Conservation Area?",
      a: "The area supports pheasants such as the Himalayan Monal, Kalij, and Blood Pheasant, raptors including the Himalayan Griffon, Golden Eagle, and Lammergeier, and numerous forest songbirds like laughingthrushes, flycatchers, and finches.",
    },
    {
      q: "What is the best season for birdwatching in Nepal?",
      a: "Spring (March to May) is generally considered the strongest season, thanks to breeding activity, rhododendron blooms, and clear ridge visibility, though autumn is a close second.",
    },
    {
      q: "Which section of the Khopra trek has the most bird species?",
      a: "The forested stretch between Tadapani and Dobato tends to offer the widest variety, spanning rhododendron forest favored by pheasants and songbirds alike.",
    },
    {
      q: "Are there rare birds near Khayer Lake?",
      a: "The open ridge near Khayer Lake is one of the better spots on the route for raptors, including occasional Lammergeier sightings, though sightings of any specific species can't be guaranteed.",
    },
    {
      q: "Do I need binoculars for birdwatching in Annapurna?",
      a: "Binoculars are strongly recommended, particularly for spotting raptors on the open ridge and pheasants moving through dense forest cover.",
    },
    {
      q: "Can beginners enjoy birdwatching on the Khopra trek?",
      a: "Yes. The route's habitat variety means even without prior birding experience, trekkers are likely to encounter distinctive species like pheasants and large raptors without needing specialized skills.",
    },
    {
      q: "Are guided birdwatching tours available?",
      a: "Local trekking guides with birding knowledge are available for the Khopra route and can significantly improve sightings compared to trekking without local expertise.",
    },
    {
      q: "What camera equipment is best for Himalayan bird photography?",
      a: "A telephoto lens in the 300–400mm range offers a practical balance of reach and weight for a multi-day trek, paired with lightweight binoculars for spotting birds before photographing them.",
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
            <span className="text-emerald-400">Birds of Annapurna</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Avian Ecology &amp; Field Guide
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Birds of the Annapurna
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              The ultimate Khopra Ridge bird guide — habitats, seasonal windows, top species like the Himalayan Monal, and expert birdwatching advice.
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
                🦅
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Field Birdwatching Expertise</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). Based in Pokhara, our guides lead specialized birdwatching treks through the Annapurna Conservation Area.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Somewhere between the terraced fields of Ghandruk and the wind-scoured ridgeline of Khopra Danda, the forest changes character every few hundred meters — and so does the birdlife. This is what makes the Khopra Ridge trek one of the most rewarding birdwatching routes in the Annapurna Conservation Area.
              </p>
              <p>
                Most trekkers come here for the mountain views: Annapurna South, Dhaulagiri, and Nilgiri rising above Khayer Lake. Few realize they are also walking through one of the richest bird habitats in the Nepal Himalayas, home to pheasants, raptors, and forest songbirds.
              </p>
            </div>

            {/* Section 1: Why Khopra is a Birding Haven */}
            <div id="birding-haven" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Why Khopra Ridge Is an Exceptional Birdwatching Destination
              </h2>
              
              <div className="space-y-4 text-stone-700 leading-relaxed">
                <p>
                  The Annapurna Conservation Area packs an extraordinary range of elevation zones — from 1,000m to 4,660m — into a short distance.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                    <h4 className="font-bold text-stone-900 text-base">🏔️ Compressed Habitats</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Move from oak forest to rhododendron woodland, subalpine conifer, and alpine meadow in less than a week.
                    </p>
                  </div>
                  <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                    <h4 className="font-bold text-stone-900 text-base">🔇 Quiet Trail Buffer</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Lower trekker traffic reduces noise, encouraging shy pheasants and laughingthrushes to forage close to the path.
                    </p>
                  </div>
                  <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                    <h4 className="font-bold text-stone-900 text-base">🦅 Eye-Level Raptors</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Exposed ridgelines at Khopra Danda allow birders to watch Himalayan Griffons and Golden Eagles soaring on thermal updrafts at eye level.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Habitat Breakdown Table */}
            <div id="habitats" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Bird Habitats Along the Trail
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Elevation Band</th>
                      <th className="py-4 px-4 sm:px-6">Habitat Type</th>
                      <th className="py-4 px-4 sm:px-6">Resident Key Species</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {habitatBreakdown.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.elev}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600 font-medium">{row.habitat}</td>
                        <td className="py-4 px-4 sm:px-6 text-emerald-700 font-semibold">{row.species}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 3: Iconic Birds Profile */}
            <div id="iconic-birds" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Iconic Avian Species of Khopra Ridge
              </h2>

              <div className="space-y-4">
                {featuredBirds.map((bird, idx) => (
                  <div key={idx} className="rounded-2xl border border-stone-200 bg-white p-6 space-y-2 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="font-bold text-stone-950 text-lg">{bird.name}</h3>
                      <span className="text-xs font-mono text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 w-fit">
                        {bird.scientific}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pt-1">{bird.details}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4: Birdwatching Hotspots */}
            <div id="hotspots" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Top 5 Birdwatching Hotspots on Route
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

            {/* Section 5: Seasonal Windows */}
            <div id="seasons" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Best Seasons for Birdwatching
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5 space-y-2">
                  <h4 className="font-bold text-emerald-950">🌸 Spring (March – May) [Best]</h4>
                  <p className="text-xs text-emerald-900 leading-relaxed">Breeding displays, territorial calls, and peak rhododendron nectar bloom draw Monals, sunbirds, and flycatchers.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🍂 Autumn (Sept – Nov)</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">Crisp skies offer ideal conditions for observing soaring raptors like Griffons and Eagles along the ridge thermals.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">❄️ Winter (Dec – Feb)</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">Birds concentrate at lower forest elevations. High thermal clear mornings reveal distant soaring vultures.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🌧️ Monsoon (June – Aug)</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">Heavy insect activity supports warblers and flycatchers in lower forests between rain showers.</p>
                </div>
              </div>
            </div>

            {/* Section 6: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions: Birds of Annapurna
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
                  Guided Birdwatching Treks
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Trek Khopra Ridge with Certified Local Bird Guides
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Experience the rich avian diversity of Annapurna with <strong>EMD Treks</strong> (Nepal Tourism License #8928-091). Our local guides bring deep knowledge of bird calls, seasonal windows, and quiet forest hotspots.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire About Birding Treks
                  </Link>
                  <Link
                    href="/ecology/wildlife-khopra-trek"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Read Khopra Wildlife Guide
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
                <a href="#birding-haven" className="block hover:text-emerald-600 transition">
                  • Why Khopra is Ideal for Birding
                </a>
                <a href="#habitats" className="block hover:text-emerald-600 transition">
                  • Elevation Habitat Table
                </a>
                <a href="#iconic-birds" className="block hover:text-emerald-600 transition">
                  • Iconic Avian Species
                </a>
                <a href="#hotspots" className="block hover:text-emerald-600 transition">
                  • Top 5 Birding Hotspots
                </a>
                <a href="#seasons" className="block hover:text-emerald-600 transition">
                  • Best Seasonal Windows
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Ecology Guides</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/ecology/wildlife-khopra-trek" className="hover:text-emerald-700 underline">
                      Wildlife of Khopra Trek
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecology/rhododendron-forests" className="hover:text-emerald-700 underline">
                      Rhododendron Forests
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecology/annapurna-conservation-area-guide" className="hover:text-emerald-700 underline">
                      ACA Conservation Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecology/flora-of-khopra" className="hover:text-emerald-700 underline">
                      Flora of Khopra Trail
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
