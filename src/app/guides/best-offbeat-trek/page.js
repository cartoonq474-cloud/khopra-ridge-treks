import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Best Offbeat Treks in Nepal: Hidden Himalayan Trails Away From the Crowds",
  description:
    "Escape the crowded trails. We compare Nepal's 12 best offbeat treks — from Khopra Ridge to Lower Dolpo — so you can choose the right hidden route for you.",
  alternates: {
    canonical: "https://khopraridgetrek.com/guides/best-offbeat-trek",
  },
  openGraph: {
    title: "Best Offbeat Treks in Nepal: Hidden Himalayan Trails Away From the Crowds",
    description:
      "Escape the crowded trails. We compare Nepal's 12 best offbeat treks — from Khopra Ridge to Lower Dolpo — so you can choose the right hidden route for you.",
    url: "https://khopraridgetrek.com/guides/best-offbeat-trek",
    type: "article",
  },
};

export default function BestOffbeatTrekPage() {
  const quickStats = [
    { label: "Offbeat Treks Evaluated", value: "12 Hidden Routes Compared" },
    { label: "Top Balanced Choice", value: "Khopra Ridge Trek (6–9 Days)" },
    { label: "Shortest Offbeat", value: "Mohare Danda / Pikey Peak (5–7 Days)" },
    { label: "Wilderness Expeditions", value: "Lower Dolpo / Kanchenjunga" },
  ];

  const comparisonRows = [
    { name: "Khopra Ridge Trek", region: "Annapurna", duration: "6–9 days", altitude: "4,660m (Khayer Lake)", difficulty: "Moderate", crowds: "Low", season: "Mar–May, Sep–Nov", highlight: "Dhaulagiri sightline, sacred lake, village co-op lodges" },
    { name: "Mohare Danda Trek", region: "Annapurna", duration: "5–7 days", altitude: "3,300m", difficulty: "Easy–Moderate", crowds: "Low", season: "Mar–May, Sep–Dec", highlight: "Community eco-homestays, gentle ridge pacing" },
    { name: "Nar Phu Valley Trek", region: "Annapurna (Restricted)", duration: "12–14 days", altitude: "5,320m (Kang La Pass)", difficulty: "Challenging", crowds: "Very Low", season: "Mar–May, Sep–Nov", highlight: "Preserved Tibetan villages, stone chortens" },
    { name: "Tsum Valley Trek", region: "Manaslu (Restricted)", duration: "14–18 days", altitude: "5,093m", difficulty: "Mod–Challenging", crowds: "Very Low", season: "Mar–May, Sep–Nov", highlight: "Sacred Buddhist monasteries, spiritual valley" },
    { name: "Pikey Peak Trek", region: "Everest (Solukhumbu)", duration: "5–7 days", altitude: "4,065m", difficulty: "Easy–Moderate", crowds: "Low", season: "Oct–Dec, Mar–May", highlight: "Sweeping Everest panorama without EBC crowds" },
    { name: "Panch Pokhari Trek", region: "Central Nepal", duration: "8–10 days", altitude: "4,100m", difficulty: "Moderate", crowds: "Very Low", season: "Mar–May, Sep–Nov", highlight: "Five sacred alpine lakes, zero tourist footprint" },
    { name: "Ruby Valley Trek", region: "Ganesh Himal", duration: "8–10 days", altitude: "3,700m", difficulty: "Moderate", crowds: "Very Low", season: "Oct–Dec, Mar–May", highlight: "Deep Tamang & Gurung cultural homestays" },
    { name: "Dudh Kunda Trek", region: "Everest (Solukhumbu)", duration: "16–18 days", altitude: "4,600m", difficulty: "Challenging", crowds: "Very Low", season: "Sep–Nov", highlight: "Sacred milky lake beneath Numbur peak" },
    { name: "Ganesh Himal Trek", region: "Central Nepal", duration: "10–12 days", altitude: "5,000m", difficulty: "Challenging", crowds: "Very Low", season: "Mar–May, Sep–Nov", highlight: "Unspoiled wilderness, minimal infrastructure" },
    { name: "Rolwaling Valley Trek", region: "Rolwaling", duration: "14–16 days", altitude: "5,755m (Tashi Lapcha)", difficulty: "Very Challenging", crowds: "Very Low", season: "Mar–May, Oct–Nov", highlight: "Glacial pass crossing, high technical adventure" },
    { name: "Lower Dolpo Trek", region: "Dolpo (Restricted)", duration: "16–20 days", altitude: "5,190m", difficulty: "Challenging", crowds: "Very Low", season: "May–Oct", highlight: "Trans-Himalayan rain-shadow, Bon culture" },
    { name: "Kanchenjunga Base Camp", region: "Eastern Nepal", duration: "18–22 days", altitude: "5,143m (Pangpema)", difficulty: "Very Challenging", crowds: "Very Low", season: "Mar–May, Sep–Nov", highlight: "Remote 3rd highest peak, vast rhododendron forests" },
  ];

  const categoryProfiles = [
    { category: "Best for First-Time Offbeat Trekkers", winner: "Khopra Ridge Trek (6–9 Days)", reason: "Balanced moderate difficulty, road access from Pokhara, comfortable village co-op lodges." },
    { category: "Best Short Offbeat Trek", winner: "Mohare Danda or Pikey Peak (5–7 Days)", reason: "Big mountain panoramas on a 1-week timeline without high altitude risks." },
    { category: "Best Cultural Immersion", winner: "Tsum Valley or Ruby Valley Trek", reason: "Preserved Buddhist monastics, stone villages, and authentic family homestays." },
    { category: "Best Remote Wilderness Expeditions", winner: "Lower Dolpo or Kanchenjunga Base Camp", reason: "Weeks of uninterrupted solitude in Nepal's least-visited trans-Himalayan corners." },
  ];

  const faqs = [
    {
      q: "What is the best offbeat trek in Nepal?",
      a: "Khopra Ridge Trek is our top overall pick for most trekkers because it balances strong mountain views (Dhaulagiri & Annapurna South), genuine village co-op tourism, and moderate difficulty in a manageable 6–9 day window.",
    },
    {
      q: "Which trek in Nepal has the fewest tourists?",
      a: "Restricted-area treks like Nar Phu Valley, Tsum Valley, Lower Dolpo, and Kanchenjunga Base Camp see the fewest foreign trekkers, largely due to special permit requirements and remote logistics.",
    },
    {
      q: "Are offbeat treks in Nepal suitable for beginners?",
      a: "Yes, several are. Khopra Ridge, Mohare Danda, and Pikey Peak are all approachable for fit first-time trekkers, with moderate altitude profiles and established lodge networks.",
    },
    {
      q: "Is Khopra Ridge less crowded than Poon Hill?",
      a: "Yes, significantly. Khopra Ridge delivers a comparable or superior mountain panorama with 90% fewer hikers than Poon Hill's crowded viewing platform.",
    },
    {
      q: "Do hidden trekking routes require a guide?",
      a: "Restricted-area treks legally require a licensed guide from a registered agency. For open-area offbeat treks like Khopra Ridge and Mohare Danda, a guide is strongly recommended due to patchy trail markers.",
    },
    {
      q: "Which offbeat trek offers the best mountain views?",
      a: "Khopra Ridge and Pikey Peak are both renowned for views — Khopra Ridge for direct eye-level sightlines to Dhaulagiri I and Annapurna South, and Pikey Peak for its broad Everest-region sweep.",
    },
    {
      q: "What permits do remote treks in Nepal require?",
      a: "Most open routes require an ACAP permit (Annapurna) or TIMS card. Restricted routes (Nar Phu, Tsum, Dolpo, Kanchenjunga) require special permits issued through the Nepal Tourism Board.",
    },
    {
      q: "When is the best season for peaceful trekking in Nepal?",
      a: "Spring (March–May) for blooming rhododendrons and Autumn (September–November) for clear post-monsoon mountain skies are ideal. Winter works well for lower-altitude offbeat routes like Mohare Danda.",
    },
    {
      q: "Are community lodge treks cheaper than regular teahouse treks?",
      a: "Daily lodging and meal costs are broadly similar, but community lodges on routes like Khopra Ridge deliver higher value because profits directly fund village primary schools and health clinics.",
    },
    {
      q: "Which hidden trek is closest to Kathmandu or Pokhara?",
      a: "Panch Pokhari and Ganesh Himal are closest to Kathmandu by road. Khopra Ridge and Mohare Danda are most easily reached via a 2-3 hour jeep drive from Pokhara.",
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
            <Link href="/guides/khopra-ridge-ultimate-guide" className="hover:text-emerald-400 transition">Guides Hub</Link>
            <span>/</span>
            <span className="text-emerald-400">Best Offbeat Treks in Nepal</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Quiet &amp; Alternative Trails Guide
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Best Offbeat Treks in Nepal
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Escape the crowded tourist trails. We compare Nepal&apos;s 12 best offbeat treks — from Khopra Ridge to Lower Dolpo — to help you choose the perfect hidden route.
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
                <h4 className="font-bold text-stone-900 text-base">Offbeat &amp; Community Trail Experts</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). We specialize in non-commercial community circuits across Khopra, Mohare, and restricted-area routes.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Everest Base Camp and the Annapurna Circuit put Nepal on every trekker&apos;s list for good reason. But that popularity has a cost. On peak trekking days, crowded trails and busy lodges can take away from the quiet wilderness experience you came for.
              </p>
              <p>
                That is why more travelers each season are looking for the best offbeat trek in Nepal — quieter trails, genuine village life, and mountain views without foot traffic. In this guide, we compare 12 of Nepal&apos;s best hidden routes side-by-side.
              </p>
            </div>

            {/* Section 1: Comparison Table */}
            <div id="comparison-table" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Nepal&apos;s 12 Best Offbeat Treks at a Glance
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Trek Name</th>
                      <th className="py-4 px-4 sm:px-6">Region</th>
                      <th className="py-4 px-4 sm:px-6">Duration</th>
                      <th className="py-4 px-4 sm:px-6">Max Altitude</th>
                      <th className="py-4 px-4 sm:px-6">Difficulty</th>
                      <th className="py-4 px-4 sm:px-6">Key Highlight</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {comparisonRows.map((row, idx) => (
                      <tr key={idx} className={`hover:bg-stone-50 transition ${row.name.includes("Khopra") ? "bg-emerald-50/40" : ""}`}>
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.name}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.region}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.duration}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.altitude}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.difficulty}</td>
                        <td className="py-4 px-4 sm:px-6 font-medium text-stone-900">{row.highlight}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 2: Traveler Category Selection */}
            <div id="selection-guide" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Quick Selection Guide by Travel Goals
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                {categoryProfiles.map((item, idx) => (
                  <div key={idx} className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">{item.category}</span>
                    <h3 className="font-bold text-stone-950 text-lg">{item.winner}</h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{item.reason}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Deep Dives into Top Offbeat Treks */}
            <div id="top-offbeat" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Spotlight: Top Recommended Offbeat Routes
              </h2>

              <div className="space-y-6 text-sm sm:text-base text-stone-700 leading-relaxed">
                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                  <h3 className="font-bold text-stone-950 text-xl text-emerald-800">1. Khopra Ridge Trek (6–9 Days) — Best Overall Balance</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Khopra Ridge is the best-balanced offbeat trek in Nepal — remote enough to avoid crowds, but road-accessible from Pokhara. It climbs to 3,660m (with an optional 4,660m hike to sacred Khayer Lake) facing Dhaulagiri I (8,167m). Stay in 100% community-owned village lodges that fund Magar primary schools in Swanta.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                  <h3 className="font-bold text-stone-950 text-xl">2. Mohare Danda Eco Trek (5–7 Days) — Accessible Eco-Homestays</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Mohare Danda (3,300m) offers a low-altitude, gentler alternative to Poon Hill. Anchored in Nangi Village, this trail features village homestays and community lodges built around sustainable wireless projects pioneered by Mahabir Pun.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                  <h3 className="font-bold text-stone-950 text-xl">3. Nar Phu Valley Trek (12–14 Days) — Preserved Tibetan Culture</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Tucked behind a restricted-area permit in the Annapurna range, Nar Phu features stone-walled villages, medieval chortens, and ancient Buddhist monasteries under the 5,320m Kang La Pass, away from Annapurna Circuit crowds.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                  <h3 className="font-bold text-stone-950 text-xl">4. Pikey Peak Trek (5–7 Days) — Solukhumbu Everest Panorama</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Pikey Peak (4,065m) delivers sweeping vistas of Mount Everest, Lhotse, and Makalu on a 1-week timeline, offering an uncrowded alternative to the standard Everest Base Camp highway.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions
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
                  Licensed Offbeat Trek Specialists
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Trek Beyond the Tourist Crowds
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Not sure which hidden trail fits your trip? Contact local specialists <strong>EMD Treks</strong> (NTB License #8928-091) for personalized guidance, restricted-area permits, and custom offbeat itineraries.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Plan an Offbeat Trek
                  </Link>
                  <Link
                    href="/tours/khayer-lake-trek"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    View Sacred Khayer Lake Tour
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
                <a href="#comparison-table" className="block hover:text-emerald-600 transition">
                  • 12 Offbeat Treks Table
                </a>
                <a href="#selection-guide" className="block hover:text-emerald-600 transition">
                  • Travel Goals Framework
                </a>
                <a href="#top-offbeat" className="block hover:text-emerald-600 transition">
                  • Spotlighted Routes
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Offbeat Guides</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/guides/why-khopra-is-less-crowded" className="hover:text-emerald-700 underline">
                      Why Khopra Is Less Crowded
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/best-short-trek" className="hover:text-emerald-700 underline">
                      Best Short Treks in Nepal
                    </Link>
                  </li>
                  <li>
                    <Link href="/community/community-tourism-khopra" className="hover:text-emerald-700 underline">
                      Community Tourism Impact
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/hidden-gems" className="hover:text-emerald-700 underline">
                      Annapurna Hidden Gems
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
