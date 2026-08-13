import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Conservation Efforts in the Annapurna Area | Khopra Ridge Tr",
  description: "Discover how conservation efforts in the Annapurna area protect wildlife, forests, and Himalayan communities — and how ACAP and responsible trekking work.",
  alternates: {
    canonical: "https://khopraridgetrek.com/ecology/conservation-efforts",
  },
  openGraph: {
    title: "Conservation Efforts in the Annapurna Area: Wildlife, Communities, and Sustainable Tourism",
    description:
      "Discover how conservation efforts in the Annapurna area protect wildlife, forests, and Himalayan communities — and how ACAP and responsible trekking work together.",
    url: "https://khopraridgetrek.com/ecology/conservation-efforts",
    type: "article",
  },
};

export default function ConservationEffortsPage() {
  const quickStats = [
    { label: "Established Year", value: "1986 (Nepal's 1st Protected Area)" },
    { label: "Management Model", value: "Community-Based (ACAP & NTNC)" },
    { label: "Key Protected Species", value: "Red Panda, Snow Leopard, Danphe" },
    { label: "Eco-Policy Spotlight", value: "Plastic Bottle Ban & Centralized Stoves" },
  ];

  const protectedSpecies = [
    { name: "Red Panda (Ailurus fulgens)", status: "Endangered", habitat: "High-altitude bamboo & rhododendron forests near Chhistibung & Dobato" },
    { name: "Snow Leopard (Panthera uncia)", status: "Vulnerable", habitat: "High alpine scree & rocky ridgelines near Khayer Lake (4,000m+)" },
    { name: "Himalayan Tahr & Musk Deer", status: "Protected", habitat: "Steep alpine cliffs & upper treeline sanctuary zones" },
    { name: "Himalayan Monal (Danphe)", status: "National Bird", habitat: "Subalpine forest edges & alpine pasture borders" },
  ];

  const ecoPolicies = [
    { title: "Single-Use Plastic Water Bottle Ban", desc: "Banned beyond Ghandruk and Ghorepani; community lodges provide boiled and UV-filtered water refill stations." },
    { title: "High-Altitude Centralized Fuelwood Policy", desc: "Lodges above 3,000m (Bayeli, Chhistibung, Khopra) are prohibited from using wood for private rooms, centralizing heating to a single dining stove." },
    { title: "Community Anti-Poaching Patrols", desc: "Local village committees organize seasonal patrols to monitor wildlife corridors and protect musk deer and red pandas." },
    { title: "Trekking Permit Revenue Recycling", desc: "100% of ACAP entry fee revenues are reinvested into local village schools, health posts, trail maintenance, and forest conservation." },
  ];

  const faqs = [
    {
      q: "What is the Annapurna Conservation Area Project (ACAP)?",
      a: "ACAP is a community-based conservation program established in 1986 that manages the Annapurna Conservation Area, Nepal's largest protected region. Rather than enforcing conservation through a traditional national park model, it works directly with local villages to manage natural resources while supporting community development.",
    },
    {
      q: "Why is the Annapurna region protected?",
      a: "The region was protected to stop unmanaged deforestation, overgrazing, and unregulated tourism growth from degrading its forests and water sources. Conservation status allowed a structured system of resource management to develop instead.",
    },
    {
      q: "What animals are protected in the Annapurna Conservation Area?",
      a: "Protected species include the snow leopard, red panda, Himalayan tahr, musk deer, Himalayan black bear, blue sheep, and the Himalayan monal, among other native mammals and birds.",
    },
    {
      q: "How does tourism support conservation in Annapurna?",
      a: "Trekking permits, lodge stays, and guide fees generate revenue that funds trail maintenance, waste management systems, and community infrastructure like schools and clinics, directly linking tourism income to conservation outcomes.",
    },
    {
      q: "How are local communities involved in conservation?",
      a: "Village committees manage local forest resources, organize anti-poaching patrols, set lodge and waste-management rules, and receive a share of tourism revenue to reinvest in their communities.",
    },
    {
      q: "What conservation rules must trekkers follow?",
      a: "Key rules include carrying out non-biodegradable waste, avoiding single-use plastic bottles beyond certain points on the trail, not feeding wildlife, staying on marked paths, and respecting firewood restrictions in high-altitude lodges.",
    },
    {
      q: "How does climate change affect Annapurna?",
      a: "Rising temperatures and shifting precipitation are altering the elevation ranges where plants and animals can survive, while also increasing pressure on water sources and trail conditions already affected by tourism growth.",
    },
    {
      q: "Are plastic bottles banned in parts of Annapurna?",
      a: "Yes. Community lodge committees have banned the sale of single-use plastic mineral water bottles beyond points like Ghandruk and Ghorepani, replacing them with boiled and UV-filtered water stations.",
    },
    {
      q: "What makes Annapurna different from a national park?",
      a: "Unlike a traditional national park, the Annapurna Conservation Area allows residents to continue living, farming, and operating lodges within its boundaries, with conservation rules managed locally rather than through centralized park enforcement.",
    },
    {
      q: "How can travelers contribute to conservation efforts?",
      a: "Travelers can choose community-run lodges and local guides, carry out their own waste, avoid single-use plastics, stay on marked trails, and support trekking operators that follow Leave No Trace principles.",
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
            <span className="text-emerald-400">Conservation Efforts</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Community Environmental Protection
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Conservation Efforts in Annapurna
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              How ACAP, local village committees, and responsible trekkers work together to protect wildlife, old-growth forests, and Himalayan mountain communities.
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
                🌿
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Community Eco-Tourism Operator Commitment</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). We follow strict Leave No Trace principles, support ACAP plastic bans, and channel 100% of lodge revenue to local Magar community funds.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Walk the trail between Ghandruk and Khopra Ridge and you&apos;ll notice something most trekkers don&apos;t expect: the forests are thick, the rivers run clean, and red pandas and Himalayan tahr still move through habitat that hasn&apos;t been carved up by roads or resorts.
              </p>
              <p>
                That isn&apos;t an accident. It is the result of nearly four decades of conservation efforts in the Annapurna area, built on a model managed by the <strong>National Trust for Nature Conservation (NTNC)</strong> that puts local communities at the center of land protection.
              </p>
            </div>

            {/* Section 1: The ACAP Framework */}
            <div id="acap-framework" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                The ACAP Model: People &amp; Parks in Harmony
              </h2>
              
              <div className="space-y-4 text-stone-700 leading-relaxed">
                <p>
                  Established in 1986, the <strong>Annapurna Conservation Area Project (ACAP)</strong> rejected the traditional national park model of excluding human inhabitants. Instead, local Magar and Gurung villages serve as primary stewards of their surrounding forests.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                    <h4 className="font-bold text-stone-900 text-base">🏘️ Local Committees</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Village Development Committees enforce forest harvesting limits, trail maintenance, and lodge waste rules.
                    </p>
                  </div>
                  <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                    <h4 className="font-bold text-stone-900 text-base">💰 Revenue Recycling</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Trekking permit fees directly fund community schools, health clinics, water pipelines, and micro-hydro projects.
                    </p>
                  </div>
                  <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                    <h4 className="font-bold text-stone-900 text-base">🛡️ Watershed Protection</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Forest canopy conservation ensures clean drinking water for downstream villages like Swanta and Ghandruk.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Protected Wildlife Species Table */}
            <div id="protected-species" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Protected Himalayan Wildlife Species
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Species</th>
                      <th className="py-4 px-4 sm:px-6">Conservation Status</th>
                      <th className="py-4 px-4 sm:px-6">Primary Trail Habitat Zone</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {protectedSpecies.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.name}</td>
                        <td className="py-4 px-4 sm:px-6 text-emerald-800 font-semibold">{row.status}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.habitat}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 3: Eco-Policies on the Trail */}
            <div id="eco-policies" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Key Trailside Conservation Policies
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ecoPolicies.map((policy, idx) => (
                  <div key={idx} className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                    <h4 className="font-bold text-stone-950 text-base">✅ {policy.title}</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">{policy.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4: Responsible Trekking Practices */}
            <div id="responsible-trekking" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Responsible Trekking: Leave No Trace Guidelines
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🚯 Pack Out Non-Biodegradables</h4>
                  <p className="text-xs text-stone-600">Carry back battery waste, wet wipes, and plastic packaging to Pokhara or Kathmandu for proper processing.</p>
                </div>
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5 space-y-2">
                  <h4 className="font-bold text-emerald-950">💧 Use Refill Stations</h4>
                  <p className="text-xs text-emerald-900 leading-relaxed">Bring a reusable thermal flask and refill using boiled/UV stations at community lodges instead of bottled water.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🥾 Stay on Marked Trails</h4>
                  <p className="text-xs text-stone-600">Avoid cutting switchbacks on alpine slopes to prevent topsoil erosion and monsoon mudslides.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🏡 Support Community Lodges</h4>
                  <p className="text-xs text-stone-600">Choose community-owned teahouses where profits directly support local Magar schools and clinics.</p>
                </div>
              </div>
            </div>

            {/* Section 5: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions: Conservation in Annapurna
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
                  Sustainable Eco Treks
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Trek Responsibly with Certified Local Guides
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Join a community-first trek with <strong>EMD Treks</strong> (Nepal Tourism License #8928-091). We provide reusable water containers, support local Magar lodges, and follow Leave No Trace principles across Khopra Ridge.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire About Responsible Treks
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
                <a href="#acap-framework" className="block hover:text-emerald-600 transition">
                  • The ACAP Model
                </a>
                <a href="#protected-species" className="block hover:text-emerald-600 transition">
                  • Protected Wildlife Species
                </a>
                <a href="#eco-policies" className="block hover:text-emerald-600 transition">
                  • Trailside Eco-Policies
                </a>
                <a href="#responsible-trekking" className="block hover:text-emerald-600 transition">
                  • Leave No Trace Guidelines
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
                      ACA Conservation Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecology/red-pandas-on-khopra" className="hover:text-emerald-700 underline">
                      Red Pandas on Khopra
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecology/wildlife-khopra-trek" className="hover:text-emerald-700 underline">
                      Wildlife of Khopra Trek
                    </Link>
                  </li>
                  <li>
                    <Link href="/community/community-tourism-khopra" className="hover:text-emerald-700 underline">
                      Community Tourism Model
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
