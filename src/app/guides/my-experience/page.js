import React from "react";
import Link from "next/link";

export const metadata = {
  title: "My Experience: A Personal Khopra Ridge Journal | Khopra Ridge Trek",
  description:
    "A personal Khopra Ridge trek journal — real trail moments, community lodge nights, and the hike to Khayer Lake, told from someone who walked every step.",
  alternates: {
    canonical: "https://khopraridgetrek.com/guides/my-experience",
  },
  openGraph: {
    title: "My Experience: A Personal Khopra Ridge Journal | Khopra Ridge Trek",
    description:
      "A personal Khopra Ridge trek journal — real trail moments, community lodge nights, and the hike to Khayer Lake, told from someone who walked every step.",
    url: "https://khopraridgetrek.com/guides/my-experience",
    type: "article",
  },
};

export default function MyExperiencePage() {
  const summarySpecs = [
    { label: "Max Elevation", value: "4,660m (Sacred Khayer Lake)" },
    { label: "Solitude Rating", value: "10 / 10 (Far From Crowds)" },
    { label: "Lodge Style", value: "Community-Owned Eco Lodges" },
    { label: "Best Memory", value: "Golden Sunset Over Dhaulagiri" },
  ];

  const journalMilestones = [
    {
      phase: "Phase 1: Leaving the Crowds Behind",
      location: "Ghandruk → Tadapani → Dobato",
      elevation: "1,940m to 3,420m",
      experience: "Leaving the main Annapurna corridor. Ancient mossy oak canopy, solitude, and a sudden fishtail view of Machhapuchhre at dusk.",
    },
    {
      phase: "Phase 2: Ridge Ascent & Community Hospitality",
      location: "Dobato → Chhistibung → Khopra Ridge",
      elevation: "3,420m to 3,660m",
      experience: "Steep climb out of Chhistibung. Arriving at the ridge lodge high above Kali Gandaki Gorge as sunset painted Dhaulagiri gold.",
    },
    {
      phase: "Phase 3: Pre-Dawn High Altitude Push",
      location: "Khopra Ridge → Sacred Khayer Lake",
      elevation: "3,660m to 4,660m",
      experience: "Pre-dawn headlamp hike in sub-zero cold. Reaching the quiet, glacial turquoise waters of Khayer Baraha shrine under Annapurna South.",
    },
    {
      phase: "Phase 4: Peaceful Valley Descent",
      location: "Khopra Ridge → Swanta → Pokhara",
      elevation: "3,660m to 2,200m",
      experience: "Descending through quiet Magar farmland in Swanta. Fresh apple pies, warm community smiles, and returning to Pokhara.",
    },
  ];

  const faqs = [
    {
      q: "What was your Khopra Ridge trek experience like?",
      a: "It was quieter and more personal than expected — long stretches of peaceful solitude, warm community lodge stays, and a ridge-top sunset that far outclassed the crowded viewpoints on mainstream routes.",
    },
    {
      q: "Is the Khopra Ridge Trek worth doing?",
      a: "Based on walking every step of the route, yes. The combination of rhododendron forests, community-run lodges, ridge views of Dhaulagiri and Annapurna South, and the Khayer Lake side trip made it immensely rewarding.",
    },
    {
      q: "How difficult is the Khopra Ridge Trek?",
      a: "It is moderately challenging. The steepest sections are between Chhistibung and Khopra Ridge (+685m push), and on the early-morning high-altitude hike to Khayer Lake (4,660m).",
    },
    {
      q: "Is Khayer Lake worth the extra hike?",
      a: "Absolutely. Though it was the hardest stretch of the entire trek due to altitude, reaching the sacred glacial lake and Khayer Baraha shrine made every difficult step worth it.",
    },
    {
      q: "What makes Khopra Ridge different from Poon Hill?",
      a: "Far fewer trekkers, community-owned lodges instead of commercial teahouses, and an optional side trip to 4,660m Khayer Lake that Poon Hill simply does not offer.",
    },
    {
      q: "What was the community lodge experience like?",
      a: "Simple, warm, and genuinely local. Shared dining halls heated by stoves, steaming pots of dal bhat and garlic soup, and hosts who speak about the trail with authentic pride.",
    },
    {
      q: "Can beginners complete the Khopra Ridge Trek?",
      a: "Reasonably fit beginners can complete it with a sensible pace. The optional Khayer Lake hike requires extra acclimatization and physical preparation.",
    },
    {
      q: "Is Khopra Ridge suitable for solo trekkers?",
      a: "Yes. The community lodges foster a welcoming environment where it is easy to meet fellow travelers each evening, even if walking in peaceful solitude during the day.",
    },
    {
      q: "What was the single best moment of the trek?",
      a: "Watching the sunset light shift across Dhaulagiri, Nilgiri, and Annapurna South from Khopra Ridge lodge while sipping warm ginger tea.",
    },
    {
      q: "When is the best time to visit Khopra Ridge?",
      a: "Autumn (September–November) for crisp mountain clarity and Spring (March–May) for blooming rhododendron forests.",
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
            <Link href="/guides/khopra-ridge-ultimate-guide" className="hover:text-emerald-400 transition">Guides</Link>
            <span>/</span>
            <span className="text-emerald-400">My Experience</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              First-Hand Trek Journal
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              My Experience: A Personal Khopra Ridge Journal
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Real trail moments, community lodge nights, and the pre-dawn hike to sacred Khayer Lake, told by someone who walked every step.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {summarySpecs.map((stat, idx) => (
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
                📖
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Authentic Trail Narrative</h4>
                <p>
                  Maintained and verified by licensed Pokhara operator <strong>EMD Treks</strong> (License #8928-091). Written from a personal trekker perspective to give you an unfiltered look at what this remote circuit feels like underfoot.
                </p>
              </div>
            </div>

            {/* Introduction / Personal Prologue */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                I did not plan to fall in love with a trail. I planned to walk it, take some photos, and move on to the next item on a Nepal itinerary that felt, at the time, like a checklist. Khopra Ridge changed that.
              </p>
              <p>
                This is my Khopra Ridge trek experience, written the way I actually lived it — the ancient oak forests, the community lodges, the ridge at sunset, and the long pre-dawn climb to Khayer Lake that I still think about more than a year later.
              </p>
            </div>

            {/* Section 1: Journal Milestones Table */}
            <div id="journal-milestones" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Trek Journal Summary &amp; Key Milestones
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Journal Stage</th>
                      <th className="py-4 px-4 sm:px-6">Trail Location</th>
                      <th className="py-4 px-4 sm:px-6">Elevation Range</th>
                      <th className="py-4 px-4 sm:px-6">Personal Highlights</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {journalMilestones.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.phase}</td>
                        <td className="py-4 px-4 sm:px-6 font-semibold text-emerald-800">{row.location}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.elevation}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.experience}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 2: Narrative Deep Dive */}
            <div id="narrative-highlights" className="scroll-mt-24 space-y-8 border-t border-stone-200 pt-8 text-stone-700 leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Living the Trail: The Moments That Stayed
              </h2>

              <div className="space-y-4 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900">1. Leaving the Main Corridor After Tadapani</h3>
                <p className="text-sm sm:text-base">
                  Past Tadapani, the trail thins out instantly. Walking through ancient rhododendron and oak canopy between Tadapani and Dobato, I went nearly two hours without seeing another trekker — only birdsong, rustling leaves, and the distant chime of mule bells. The forest breaks open at Dobato to reveal Machhapuchhre (Fishtail) catching the last golden light.
                </p>
              </div>

              <div className="space-y-4 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900">2. Life Inside the Community Eco-Lodges</h3>
                <p className="text-sm sm:text-base">
                  The lodges at Dobato and Chhistibung are simple, timber-framed, and community-owned. Profits stay directly within local Magar and Gurung villages to fund local schoolteachers and health clinics. Evenings meant gathering around the central dining stove for steaming plates of refillable dal bhat, garlic soup, and shared stories across countries.
                </p>
              </div>

              <div className="space-y-4 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900">3. Sunset Above the World&apos;s Deepest Gorge</h3>
                <p className="text-sm sm:text-base">
                  The climb from Chhistibung to Khopra Ridge (+685m elevation gain) tested my legs, but walking onto the open ridge at 3,660 meters took my breath away. Standing directly above the Kali Gandaki Gorge, watching Dhaulagiri I (8,167m) and Annapurna South turn from blazing orange to deep violet, was the single most magnificent sunset I have witnessed.
                </p>
              </div>

              <div className="space-y-4 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900">4. The Sacred Waters of Khayer Lake (4,660m)</h3>
                <p className="text-sm sm:text-base">
                  Starting at 5:00 AM under a blanket of stars, headlamps illuminated the frosty high-alpine trail. The air grew noticeably thin past 4,000 meters. Reaching the still, glacial turquoise waters of Khayer Baraha shrine — surrounded by sheer rock faces of Annapurna South — felt like stepping into a sacred sanctuary.
                </p>
              </div>
            </div>

            {/* Section 3: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions About My Experience
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
                  Ready to Start Your Journey?
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Write Your Own Khopra Ridge Story
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Start planning your personal Himalayan trek. Contact Pokhara local operator <strong>EMD Treks</strong> (NTB License #8928-091) for expert guide bookings, community lodge arrangements, and custom itineraries.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire About Trips
                  </Link>
                  <Link
                    href="/guides/khopra-ridge-ultimate-guide"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Read Ultimate Trek Guide
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
                <a href="#journal-milestones" className="block hover:text-emerald-600 transition">
                  • Journal Milestones
                </a>
                <a href="#narrative-highlights" className="block hover:text-emerald-600 transition">
                  • Trail Narrative Deep-Dive
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Journal Guides</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/guides/khayer-lake-ultimate-guide" className="hover:text-emerald-700 underline">
                      Sacred Khayer Lake Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/why-khopra-is-less-crowded" className="hover:text-emerald-700 underline">
                      Why Khopra is Less Crowded
                    </Link>
                  </li>
                  <li>
                    <Link href="/community/magar-culture" className="hover:text-emerald-700 underline">
                      Magar Culture &amp; Heritage
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/is-khopra-ridge-worth-it" className="hover:text-emerald-700 underline">
                      Is Khopra Ridge Worth It?
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
