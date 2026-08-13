import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Gurung Culture in the Annapurna Foothills | Khopra Ridge Tre",
  description: "Discover Gurung culture in the Annapurna foothills — Tamu history, Ghandruk village life, Rodhi traditions, festivals, and how to experience it on the Khopra.",
  alternates: {
    canonical: "https://khopraridgetrek.com/community/gurung-culture",
  },
  openGraph: {
    title: "Gurung Culture in the Annapurna Foothills: Traditions, Villages, and Living Heritage",
    description:
      "Discover Gurung culture in the Annapurna foothills — Tamu history, Ghandruk village life, Rodhi traditions, festivals, and how to experience it on the Khopra Ridge Trek.",
    url: "https://khopraridgetrek.com/community/gurung-culture",
    type: "article",
  },
};

export default function GurungCulturePage() {
  const quickStats = [
    { label: "Ethnic Identity", value: "Tamu (Tibeto-Burman Heritage)" },
    { label: "Cultural Capital", value: "Ghandruk Village (1,940m)" },
    { label: "Primary Religion", value: "Buddhism, Bon Shamanism & Hindu" },
    { label: "Key Festival", value: "Tamu Lhosar (Mid-to-Late Dec)" },
  ];

  const culturalPillars = [
    {
      title: "🏘️ Stone Architecture & Slate Roofs",
      desc: "Tightly packed grey-and-white stone houses with heavy slate tile roofs built to withstand monsoon rains and regulate mountain cold.",
    },
    {
      title: "🎵 Rodhi Ghar Courtship & Song",
      desc: "Traditional social gathering houses where youth met for call-and-response folk singing, wool spinning, and communal matchmaking.",
    },
    {
      title: "🧙‍♂️ Ghyabre & Poju Bon Shamans",
      desc: "Ancient shamanic ritual specialists who perform protective chants, spirit appeasement, and elaborate multi-day Pae funeral rites.",
    },
    {
      title: "🎖️ Illustrious Gurkha Military Service",
      desc: "Centuries of distinguished service in British & Indian Army Gurkha regiments, funding village schools, lodges, and infrastructure.",
    },
  ];

  const faqs = [
    {
      q: "Who are the Gurung people of Nepal?",
      a: "The Gurung, who call themselves Tamu, are an indigenous ethnic group native to Nepal's mid-hill regions around the Annapurna Massif. They maintain a distinct Tibeto-Burman language, spiritual traditions blending Buddhism, Bon shamanism, and Hindu practices, and a world-famous Gurkha military history.",
    },
    {
      q: "What does 'Tamu' mean?",
      a: "Tamu is the native name the Gurung community uses for itself, signifying their identity as the indigenous people of this specific Himalayan homeland, distinct from the exonym 'Gurung' used in Nepali and English.",
    },
    {
      q: "Which villages in Annapurna are predominantly Gurung?",
      a: "Ghandruk is the primary cultural capital on the Khopra Ridge and Annapurna circuits. Landruk, Tadapani, and surrounding settlements along the Modi Khola valley also maintain strong Gurung populations and slate-roof architecture.",
    },
    {
      q: "What religion do Gurung people follow?",
      a: "Gurung spiritual practice uniquely layers Tibetan Buddhism, the ancient shamanic Bon tradition, and Hindu customs, often observing rituals from all three depending on the life event or festival.",
    },
    {
      q: "What is Rodhi Ghar?",
      a: "Rodhi Ghar was a traditional gathering house where unmarried Gurung youth met in the evenings after farm work to spin wool, sing improvised folk songs, tell stories, and socialize under informal community supervision.",
    },
    {
      q: "When is Tamu Lhosar celebrated?",
      a: "Tamu Lhosar, the Gurung New Year, falls on 15 Poush in the Nepali calendar (mid-to-late December), marked by community feasting, traditional gunyo-cholo dress, and cultural dance performances.",
    },
    {
      q: "What are the Ghatu and Sorathi dances?",
      a: "Ghatu is a sacred, trance-like semi-ritual dance performed by young women on specific seasonal occasions, while Sorathi is a lively folk dance used for community storytelling and festival entertainment.",
    },
    {
      q: "Why are Gurung people famous as Gurkhas?",
      a: "Gurung men have served with distinction in British and Indian Army Gurkha regiments since the early 19th century, earning international renown for discipline and bravery while bringing pensions that modernized village economies.",
    },
    {
      q: "Can tourists experience authentic Gurung culture on Khopra Trek?",
      a: "Yes. Trekkers can visit the Gurung Museum in Ghandruk, stay in family-run community lodges, witness traditional dance showcases, and sample authentic dhindo and local tea hospitality.",
    },
    {
      q: "How does tourism support Gurung communities?",
      a: "Community-based tourism provides lodge employment, local farming markets, and direct lodge funds that support village schools and health clinics, giving youth viable reasons to preserve their mountain heritage.",
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
            <Link href="/community/community-tourism-khopra" className="hover:text-emerald-400 transition">Community Hub</Link>
            <span>/</span>
            <span className="text-emerald-400">Gurung Culture</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Annapurna Indigenous Heritage
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Gurung Culture in the Annapurna Foothills
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Discover Tamu history, slate-roofed villages like Ghandruk, Rodhi traditions, Bon shamanism, Gurkha military legacy, and living mountain heritage.
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
                <h4 className="font-bold text-stone-900 text-base">Local Cultural Guide Verification</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). Our local guides are native to Ghandruk and the Annapurna foothills, ensuring authentic cultural interpretation and respectful community engagement.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                When most trekkers picture the Annapurna foothills, they imagine snow ridgelines, rhododendron forests, and Machhapuchhre against a pink dawn sky. But the valleys beneath those peaks hold something just as remarkable: living Gurung culture, shaped over centuries by the Gurung, or Tamu, people.
              </p>
              <p>
                Walk through Ghandruk, Landruk, Tadapani, or the villages along the Khopra Ridge route, and you are walking through slate-roofed settlements where courtship songs were once sung in Rodhi houses and families served in Gurkha regiments on three continents.
              </p>
            </div>

            {/* Section 1: Who Are the Gurung (Tamu) People? */}
            <div id="tamu-identity" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Who Are the Gurung People? The Meaning of &quot;Tamu&quot;
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h3 className="font-bold text-stone-950 text-lg">⛰️ Ancestral Tibetan Migration</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Oral histories trace Gurung ancestry to Tibetan plateau migrations moving south into the Himalayan foothills centuries ago, adapting to mid-hill terrace agriculture and pastoralism beneath Annapurna South.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h3 className="font-bold text-stone-950 text-lg">🗣️ Tibeto-Burman Language</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    The Tamu language belongs to the Tibeto-Burman family, spoken proudly alongside Nepali and English across Gandaki Province (Kaski, Lamjung, and Manang districts).
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Key Gurung Villages & Architecture */}
            <div id="gurung-villages" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Main Gurung Villages &amp; Traditional Architecture
              </h2>

              <div className="space-y-4">
                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-lg">🏛️ Ghandruk — The Cultural Capital</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Ghandruk (1,940m) is the largest and most famous Gurung settlement on the Khopra circuit. Dense slate-roofed stone houses face Annapurna South and Fishtail, hosting the renowned Gurung Museum.
                  </p>
                  <div className="pt-2 text-xs font-semibold text-emerald-800">
                    <Link href="/nodes/ghandruk-village-guide" className="hover:underline">
                      Explore Ghandruk Village Guide →
                    </Link>
                  </div>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-lg">🏡 Landruk, Tadapani &amp; High-Altitude Settlements</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Across the valley, Landruk offers peaceful agricultural terraces. Higher up in Tadapani, stone construction adapts to cold ridge conditions with thicker walls and insulated courtyards.
                  </p>
                </div>
              </div>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mt-6">
                {culturalPillars.map((pillar, idx) => (
                  <div key={idx} className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                    <h4 className="font-bold text-stone-900">{pillar.title}</h4>
                    <p className="text-xs text-stone-600">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Spiritual Beliefs & Bon Shamans */}
            <div id="spiritual-beliefs" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Religion &amp; Spiritual Life: Layered Buddhism &amp; Bon Shamanism
              </h2>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6 space-y-4">
                <h3 className="font-bold text-emerald-950 text-xl">The Role of Ghyabre &amp; Poju Shamans</h3>
                <p className="text-sm text-emerald-900 leading-relaxed">
                  Gurung spiritual life uniquely combines Tibetan Buddhism with ancient Bon shamanic practices. While Buddhist lamas lead routine blessings, Ghyabre and Poju shamans are summoned for complex protective rituals, spirit appease ceremonies, and multi-day <em>Pae</em> funeral ancestor rites.
                </p>
              </div>
            </div>

            {/* Section 4: Rodhi Ghar & Festivals */}
            <div id="rodhi-and-festivals" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Rodhi Traditions, Tamu Lhosar &amp; Cultural Dances
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🎉 Tamu Lhosar (New Year)</h4>
                  <p className="text-xs text-stone-600">Celebrated in late December (15 Poush). Villages erupt in traditional dress, feasting, and community performances.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">💃 Ghatu Ritual Dance</h4>
                  <p className="text-xs text-stone-600">A sacred, trance-like semi-ritual dance performed by young women, recounting mythological and historical epics.</p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2 shadow-sm">
                  <h4 className="font-bold text-stone-900">🥁 Sorathi Folk Dance</h4>
                  <p className="text-xs text-stone-600">Lively storytelling dance accompanied by madal drums, highlighting village history and festive celebrations.</p>
                </div>
              </div>
            </div>

            {/* Section 5: Gurkha Military Legacy */}
            <div id="gurkha-legacy" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                The Gurkha Legacy &amp; Village Transformations
              </h2>

              <div className="prose prose-stone max-w-none space-y-4 text-stone-700 leading-relaxed text-sm">
                <p>
                  Gurung men have served in British and Indian Army Gurkha regiments since the 1800s. Remittances and pensions from Gurkha service modernized Annapurna villages, funding stone lodges, Ghandruk school infrastructure, and medical care.
                </p>
                <p>
                  Today, community-based tourism complements this military heritage, allowing younger generations to earn sustainable livelihoods in their ancestral homeland.
                </p>
              </div>
            </div>

            {/* Section 6: FAQ Accordion */}
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
                  Authentic Cultural Trekking
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Experience Gurung Culture on the Khopra Ridge Trek
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Book your trek with licensed operator <strong>EMD Treks</strong> (NTB License #8928-091). Guided village stays in Ghandruk, visits to the Gurung Museum, and community lodge stays native to the Annapurna region.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire About Cultural Treks
                  </Link>
                  <Link
                    href="/nodes/ghandruk-village-guide"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Ghandruk Village Guide
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
                <a href="#tamu-identity" className="block hover:text-emerald-600 transition">
                  • Who Are the Gurung (Tamu)?
                </a>
                <a href="#gurung-villages" className="block hover:text-emerald-600 transition">
                  • Ghandruk &amp; Stone Architecture
                </a>
                <a href="#spiritual-beliefs" className="block hover:text-emerald-600 transition">
                  • Buddhism &amp; Bon Shamans
                </a>
                <a href="#rodhi-and-festivals" className="block hover:text-emerald-600 transition">
                  • Rodhi &amp; Tamu Lhosar
                </a>
                <a href="#gurkha-legacy" className="block hover:text-emerald-600 transition">
                  • Gurkha Military Legacy
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
                      Magar Cultural Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/nodes/ghandruk-village-guide" className="hover:text-emerald-700 underline">
                      Ghandruk Village Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/community/community-tourism-khopra" className="hover:text-emerald-700 underline">
                      Community Tourism Hub
                    </Link>
                  </li>
                  <li>
                    <Link href="/community/what-is-community-lodge" className="hover:text-emerald-700 underline">
                      What is a Community Lodge?
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
