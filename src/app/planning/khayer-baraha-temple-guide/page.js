import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Khayer Baraha Temple Guide: History, Pilgrimage, Rituals & Visitor Information",
  description:
    "A complete guide to Khayer Baraha Temple near Khayer Lake — its mythology, pilgrimage traditions, Janai Purnima festival, visitor etiquette, and how to reach this sacred Himalayan shrine.",
  alternates: {
    canonical: "https://khopraridgetrek.com/planning/khayer-baraha-temple-guide",
  },
  openGraph: {
    title: "Khayer Baraha Temple Guide: History, Pilgrimage, Rituals & Visitor Information",
    description:
      "A complete guide to Khayer Baraha Temple near Khayer Lake — its mythology, pilgrimage traditions, Janai Purnima festival, visitor etiquette, and how to reach this sacred Himalayan shrine.",
    url: "https://khopraridgetrek.com/planning/khayer-baraha-temple-guide",
    type: "article",
  },
};

export default function KhayerBarahaTempleGuidePage() {
  const stats = [
    { label: "Shrine Elevation", value: "4,660 m (15,288 ft)" },
    { label: "Dedicated Deity", value: "Baraha Bhagwan (Lord Vishnu)" },
    { label: "Major Festival", value: "Janai Purnima (August)" },
    { label: "Local Communities", value: "Magar & Gurung Devotees" },
  ];

  const templeOverview = [
    { label: "Shrine Location", value: "Khayer Lake shore, Myagdi District, Gandaki Province, Nepal" },
    { label: "Deity Identification", value: "Baraha Bhagwan (Varaha - Vishnu's Boar Avatar)" },
    { label: "Sacred Water Association", value: "Purifying glacial waters of Khayer Lake (4,660m)" },
    { label: "Architectural Style", value: "High-alpine slate stone shrine with prayer flags & altars" },
    { label: "Cultural Integration", value: "Syncretic blend of Vedic Hinduism, Buddhism, & Mountain Shamanism" },
    { label: "Peak Pilgrimage Window", value: "Shrawan Full Moon (Late July / August Janai Purnima)" },
    { label: "Visitor Etiquette Requirement", value: "Remove shoes at altar, no lake swimming, pack out all waste" },
  ];

  const etiquetteRules = [
    { rule: "Remove Footwear Before Shrine", desc: "Take off boots before stepping into the immediate stone altar worship space." },
    { rule: "Respectful Ritual Photography", desc: "Landscape photography is welcome; ask permission before photographing active pilgrims or rituals." },
    { rule: "Protect Sacred Water Purity", desc: "Do not enter the lake with soap, sunscreen, or boots. Ritual water sprinkling is done from the shoreline." },
    { rule: "Quiet Demeanor Near Altar", desc: "Maintain low noise levels around praying pilgrims and priests." },
    { rule: "Leave No Trace Principles", desc: "Pack out all plastic, food wrappers, and trash. There is no waste disposal at 4,660m." },
  ];

  const faqs = [
    {
      q: "Where is Khayer Baraha Temple located?",
      a: "Khayer Baraha Temple is located beside Khayer Lake in the Khopra Danda region of Myagdi District, Gandaki Province, Nepal, inside the Annapurna Conservation Area.",
    },
    {
      q: "Why is Khayer Baraha Temple considered sacred?",
      a: "The temple is dedicated to Baraha Bhagwan (Lord Vishnu's boar avatar) and is linked in local belief to the sacred, purifying waters of Khayer Lake.",
    },
    {
      q: "Who is Lord Baraha in Hindu mythology?",
      a: "Lord Baraha (Varaha) is the third avatar of Lord Vishnu in Hindu tradition, taking the form of a wild boar to rescue Bhudevi (Earth) from cosmic waters and restore balance.",
    },
    {
      q: "Can foreign trekkers visit Khayer Baraha Temple?",
      a: "Yes! Foreign trekkers are welcome to visit respectfully, observe rituals from a polite distance, and take in the sacred atmosphere during the Khopra Ridge Trek.",
    },
    {
      q: "What happens during Janai Purnima at Khayer Lake?",
      a: "During August's Janai Purnima full moon, thousands of Gurung and Magar pilgrims hike to the lake for ritual bathing, priest blessings, and sacred thread renewals.",
    },
    {
      q: "Is photography allowed at Khayer Baraha Temple?",
      a: "Landscape photography of the lake and temple is permitted. Always ask before photographing pilgrims engaged in prayer or ritual ceremonies.",
    },
    {
      q: "How difficult is the hike to Khayer Baraha Temple?",
      a: "It is a demanding 16km round-trip day hike from Khopra Ridge (3,660m) gaining 1,000m of elevation to reach 4,660m. Proper acclimatization is required.",
    },
    {
      q: "What offerings are brought to the temple?",
      a: "Pilgrims offer vermillion powder (sindoor), flowers, coins, incense, prayer flags, and occasionally traditional animal sacrifices during festival windows.",
    },
    {
      q: "What is the altitude of Khayer Baraha Temple?",
      a: "The temple sits at 4,660 meters (15,288 feet) above sea level, well above the tree line directly beneath Annapurna South.",
    },
    {
      q: "When is the best time to visit the temple?",
      a: "Spring (March–May) and Autumn (October–November) offer the clearest trekking weather. Late July/August is ideal if you want to witness the Janai Purnima pilgrimage.",
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
            <Link href="/guides/khayer-lake-ultimate-guide" className="hover:text-emerald-400 transition">Khayer Lake Hub</Link>
            <span>/</span>
            <span className="text-emerald-400">Temple Guide</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Sacred Heritage &amp; Pilgrimage Guide
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Khayer Baraha Temple Guide
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              History, mythology, Janai Purnima festival rituals, cultural etiquette, and visitor guide for the high-altitude shrine at Khayer Lake (4,660m).
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat, idx) => (
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
                <h4 className="font-bold text-stone-900 text-base">Direct Cultural Insight from Local Guides</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). Based in Pokhara, our local Magar and Gurung guides share authentic cultural traditions and pilgrimage history with our trekkers.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                High above the forested ridgelines of the Annapurna Conservation Area, where the trail to Khopra Ridge meets the still waters of a glacial lake, sits one of Nepal&apos;s most quietly significant pilgrimage sites: <strong>Khayer Baraha Temple</strong>. For most trekkers, it appears unexpectedly — a modest stone shrine beside a high-altitude lake, prayer flags moving in thin mountain air.
              </p>
              <p>
                This guide presents Khayer Baraha as what it truly is: a living sacred site with its own ancient mythology, its own community of devotees, and a vital place in the religious life of the Myagdi region.
              </p>
            </div>

            {/* Section 1: Overview Table */}
            <div id="temple-overview" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Khayer Baraha Temple Overview
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Temple Aspect</th>
                      <th className="py-4 px-4 sm:px-6">Detail / Cultural Significance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {templeOverview.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.label}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 2: Mythology & Deity Origins */}
            <div id="mythology-deity" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                The Mythology of Lord Baraha (Varaha)
              </h2>
              
              <div className="space-y-4 text-stone-700 leading-relaxed">
                <h3 className="text-xl font-bold text-stone-900">Who Is Lord Baraha?</h3>
                <p>
                  Baraha (Varaha) is the third avatar of Lord Vishnu in Hindu mythology, taking the form of a wild boar to rescue the earth goddess Bhudevi from the cosmic ocean and restore world balance. Because Varaha represents divine protection of land and water, shrines are built near natural water sources.
                </p>

                <h3 className="text-xl font-bold text-stone-900 mt-6">Local Legends &amp; Syncretic Worship</h3>
                <p>
                  For the Gurung and Magar inhabitants of Swanta, Ghandruk, and Narchyang, Khayer Baraha is also revered as a protective mountain deity. The lake water is believed to grant wishes for health, prosperity, and fertility.
                </p>
              </div>
            </div>

            {/* Section 3: Janai Purnima Festival */}
            <div id="janai-purnima" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Janai Purnima Pilgrimage Festival (August)
              </h2>

              <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-4 shadow-sm">
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  During the full moon of the Nepali month of Shrawan (late July or August), thousands of pilgrims make the multi-day trek to Khayer Lake for <strong>Janai Purnima</strong>.
                </p>
                <ul className="list-disc pl-5 text-xs sm:text-sm text-stone-700 space-y-2">
                  <li><strong>Ritual Purification:</strong> Devotees perform ritual baths in the icy glacial waters of Khayer Lake before praying at the shrine.</li>
                  <li><strong>Shamanic Chanting (Jhakris):</strong> Local shamans (Jhakris) perform traditional drum rituals alongside Vedic Hindu priests.</li>
                  <li><strong>Sacred Offerings:</strong> Pilgrims present vermillion, flowers, coins, and traditional vows (bhakal) to the deity.</li>
                </ul>
              </div>
            </div>

            {/* Section 4: Visitor Etiquette & Responsible Tourism */}
            <div id="visitor-etiquette" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Visitor Etiquette &amp; Respectful Practices
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {etiquetteRules.map((item, idx) => (
                  <div key={idx} className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                    <h4 className="font-bold text-stone-900 text-base">{item.rule}</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 5: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions: Khayer Baraha Temple
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
                  Book Guided Pilgrimage
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Trek to Khayer Baraha Temple with Local Guides
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Experience the spiritual heritage of the Annapurna region with <strong>EMD Treks</strong> (Nepal Tourism License #8928-091). Our local guides share cultural history, legends, and route safety.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire About Guided Treks
                  </Link>
                  <Link
                    href="/planning/khayer-lake-day-hike"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Read Day Hike Guide
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
                <a href="#temple-overview" className="block hover:text-emerald-600 transition">
                  • Temple Overview Table
                </a>
                <a href="#mythology-deity" className="block hover:text-emerald-600 transition">
                  • Mythology of Lord Baraha
                </a>
                <a href="#janai-purnima" className="block hover:text-emerald-600 transition">
                  • Janai Purnima Festival
                </a>
                <a href="#visitor-etiquette" className="block hover:text-emerald-600 transition">
                  • Visitor Etiquette &amp; Respect
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Cultural Guides</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/community/magar-culture" className="hover:text-emerald-700 underline">
                      Magar Culture &amp; Heritage
                    </Link>
                  </li>
                  <li>
                    <Link href="/community/gurung-culture" className="hover:text-emerald-700 underline">
                      Gurung Culture &amp; Traditions
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khayer-lake-depth-source" className="hover:text-emerald-700 underline">
                      Khayer Lake Geography
                    </Link>
                  </li>
                  <li>
                    <Link href="/community/local-festivals" className="hover:text-emerald-700 underline">
                      Local Mountain Festivals
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
