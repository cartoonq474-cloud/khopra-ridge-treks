import React from "react";
import Link from "next/link";
import ElevationProfile from "@/components/ElevationProfile";

export const metadata = {
  alternates: {
    canonical: "/altitude/khopra-ridge-elevation",
  },
  title: "Khopra Ridge Elevation Chart & Profile | Nepal Trek Guide",
  description: "See the full Khopra Ridge elevation chart with day-by-day altitude data, Khayer Lake's 4,660m profile, elevation gain figures, and acclimatization tips.",
};

export default function Page() {
  const chartData = [
    { day: "Day 1", village: "Tadapani", elev: 2630 },
    { day: "Day 2", village: "Bayeli Kharka", elev: 3425 },
    { day: "Day 3", village: "Chhistibung", elev: 2975 },
    { day: "Day 4", village: "Khopra Ridge", elev: 3660 },
    { day: "Day 5", village: "Khayer Lake Side-hike", elev: 4660 },
    { day: "Day 6", village: "Swanta Village", elev: 2200 },
    { day: "Day 7", village: "Ghorepani Village", elev: 2860 }
  ];

  const summarySpecs = [
    { label: "Starting Elevation", value: "2,630m / 8,628ft" },
    { label: "Max Sleep Altitude", value: "3,660m / 12,008ft" },
    { label: "Max Hike Altitude", value: "4,660m / 15,289ft" },
    { label: "Total Altitude Gain", value: "~2,800m - 3,000m" }
  ];

  const comparisons = [
    { name: "Poon Hill", alt: "3,210m", diff: "Easier", notes: "Lower altitude, suitable for short 2-3 day hikes." },
    { name: "Khopra Ridge (Sleep)", alt: "3,660m", diff: "Moderate", notes: "Highest overnight stay on this trail." },
    { name: "Annapurna Base Camp", alt: "4,130m", diff: "Moderate", notes: "Lower peak but more sustained days near 4,000m." },
    { name: "Mardi Himal Base Camp", alt: "4,500m", diff: "Moderate-Challenging", notes: "More direct and steeper climb path." },
    { name: "Khayer Lake (Day Hike)", alt: "4,660m", diff: "Moderate-Challenging", notes: "Trek's highest point; returned to 3,660m same day." }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">Elevation &amp; Route Profile
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">Khopra Ridge Elevation Chart &amp; Profile
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">How high does this trek actually go, and can your body handle it? Explore the complete day-by-day altitude progression chart, elevation gains, and critical acclimatization profiles.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl">
            {summarySpecs.map((spec, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
                <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">{spec.label}</span>
                <span className="text-lg sm:text-xl md:text-2xl font-black text-emerald-400 mt-1 block">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DYNAMIC TWO COLUMN LAYOUT */}
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12 w-full flex-1">
        {/* STICKY TABLE OF CONTENTS SIDEBAR */}
        <aside className="lg:col-span-1">
          <div className="sticky top-8 bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-4 max-h-[85vh] overflow-y-auto hidden lg:block">
            <h3 className="text-xs font-black uppercase text-stone-400 tracking-wider pb-3 border-b border-stone-100">Table of Contents
            </h3>
            <nav className="flex flex-col gap-1 text-sm">
              <a href="#overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Elevation Overview
              </a>
              <a href="#interactive-chart" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Interactive Profile Chart
              </a>
              <a href="#breakdown" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Day-by-Day Breakdown
              </a>
              <a href="#gain-loss" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Gain &amp; Route Analysis
              </a>
              <a href="#khayer-lake" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Khayer Lake Altitude
              </a>
              <a href="#acclimatization" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Altitude Sickness &amp; AMS
              </a>
              <a href="#suitability" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Is it for Beginners?
              </a>
              <a href="#comparison" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Trek Altitude Comparisons
              </a>
              <a href="#faq" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">Frequently Asked Qs
              </a>
            </nav>
            <div className="pt-4 border-t border-stone-100">
              <Link 
                href="/contact"
                className="w-full text-center block bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider py-3 rounded-2xl shadow-sm transition duration-200"
              >Inquire &amp; Build Custom Plan
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* SECTION 1: OVERVIEW */}
          <article id="overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Khopra Ridge Trek Elevation Overview
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>The route climbs from around 2,630m at Tadapani to a high point of 4,660m at Khayer Lake, with several overnight stops in between that gradually condition your body for the altitude. With a sensible pace and proper acclimatization, this altitude profile is manageable for most reasonably fit trekkers, including many first-timers.
              </p>
              <p>
                <strong>What Is the Highest Point on the <Link href="/" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Khopra Ridge Trek</Link>?</strong>The highest point on the route is Khayer Lake, at 4,660m, reached as a side hike from Khopra Ridge itself. This is different from the highest place you will actually sleep, which is Khopra Danda at 3,660m.
              </p>
              <p>That distinction matters more than most trekkers realize. Sleeping altitude is what your body has to recover and rest at overnight, while a day-hike altitude like Khayer Lake is a shorter exposure you pass through and then descend from. Trekking up to 4,660m for a few hours is a very different physiological experience than trying to sleep there.
              </p>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-emerald-950 text-xs leading-relaxed">
              <strong>Why Altitude Sickness (AMS) Matters:</strong>Above roughly 3,000m, the air contains noticeably less oxygen than at sea level. By 4,660m, oxygen availability drops to around 60% of what you are used to breathing at home. Your body responds by breathing faster and working your heart harder during exertion. A route built for gradual adaptation reduces risk regardless of your fitness background.
            </div>
          </article>

          {/* SECTION 2: INTERACTIVE CHART */}
          <article id="interactive-chart" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Interactive Elevation Profile Chart
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">The chart below maps the full altitude profile across all days, showing where the trail climbs, where it drops, and where you gain the most height in a single push.
            </p>
            
            {/* Elevation SVG Profile Widget */}
            <ElevationProfile />

            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-4 mt-6">
              <h4 className="font-bold text-stone-950 text-sm sm:text-base">Key Chart Insights</h4>
              <ul className="list-disc pl-5 text-xs text-stone-500 space-y-2 font-medium">
                <li><strong>Ascent is Staged:</strong>Climbs are followed by smaller gains or partial descents, which supports natural acclimatization.</li>
                <li><strong>There-and-Back Day:</strong>The single biggest altitude exposure is the Khayer Lake side hike, which does not introduce a new sleeping altitude.</li>
                <li><strong>Steep Descent:</strong>After Khayer Lake, the route drops over 1,400m by the time you reach Swanta Village.</li>
              </ul>
            </div>
          </article>

          {/* SECTION 3: BREAKDOWN */}
          <article id="breakdown" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">Day-by-Day Elevation Summary
            </h2>
            
            {/* Daily Elevation Table */}
            <div className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-stone-100 text-stone-700 uppercase font-black tracking-wider border-b border-stone-200">
                      <th className="p-4">Day</th>
                      <th className="p-4">Location</th>
                      <th className="p-4">Elevation (m)</th>
                      <th className="p-4">Elevation (ft)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 font-medium text-stone-600">
                    {chartData.map((d, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50 transition duration-150">
                        <td className="p-4 font-bold text-stone-900">{d.day}</td>
                        <td className="p-4">{d.village}</td>
                        <td className="p-4 font-bold text-emerald-600">{d.elev}m</td>
                        <td className="p-4 text-stone-400">{Math.round(d.elev * 3.28084)} ft</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Detailed Day-by-Day Explanations */}
            <div className="space-y-6 mt-6">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-900 text-sm">Day 1: Tadapani (2,630m)</h4>
                <p className="text-xs text-stone-500 mt-2 leading-relaxed">Most itineraries begin walking toward Tadapani after arriving from Ghandruk or Pokhara, putting you at a starting altitude of 2,630m. At this height, altitude effects are minimal for almost everyone, and this day functions as a baseline.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-900 text-sm">Day 2: Bayeli Kharka (3,425m)</h4>
                <p className="text-xs text-stone-500 mt-2 leading-relaxed">This is one of the larger single-day gains on the trek, climbing roughly 800m. You will likely notice your breathing rate pick up on this stretch, especially on the steeper switchbacks through rhododendron forest.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-900 text-sm">Day 3: Chhistibung (2,975m)</h4>
                <p className="text-xs text-stone-500 mt-2 leading-relaxed">Day 3 drops you back down to 2,975m, a loss of around 450m. Descending after a high push is one of the most effective natural acclimatization techniques, giving your body a recovery window.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-900 text-sm">Day 4: Khopra Ridge (3,660m)</h4>
                <p className="text-xs text-stone-500 mt-2 leading-relaxed">From Chhistibung, the trail climbs back up to Khopra Danda at 3,660m, the highest sleeping point on this trek. Expect colder nights here and possibly some mild symptoms like a slight headache, which are common and usually manageable with hydration.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-900 text-sm">Day 5: Khayer Lake Side Hike (4,660m)</h4>
                <p className="text-xs text-stone-500 mt-2 leading-relaxed">This is the trek&apos;s altitude high point. You hike up to the lake and return to Khopra Ridge to sleep. The round trip typically takes most of the day; an early start matters to avoid afternoon weather swings.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-900 text-sm">Day 6: Swanta Village (2,200m)</h4>
                <p className="text-xs text-stone-500 mt-2 leading-relaxed">After the high point, the route descends sharply to Swanta Village at 2,200m — a drop of around 1,460m. Your knees will feel this descent more than your lungs will; trekking poles are highly recommended.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-900 text-sm">Day 7: Ghorepani (2,860m)</h4>
                <p className="text-xs text-stone-500 mt-2 leading-relaxed">The final leg climbs back up slightly to Ghorepani at 2,860m. By this point, your body has adapted to much higher elevations, so the climb feels considerably easier than it did on Day 2.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 4: GAIN & ROUTE ANALYSIS */}
          <article id="gain-loss" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Khopra Ridge Elevation Gain and Route Profile Analysis
            </h2>
            <div className="space-y-4 text-stone-600 text-sm leading-relaxed">
              <p>
                <strong>Where the Steepest Elevation Gain Occurs:</strong>The climb from Tadapani to Bayeli Kharka on Day 2 is the steepest sustained ascent, gaining roughly 800m. This is the day most trekkers feel the altitude shift for the first time, and it is worth pacing slowly.
              </p>
              <p>
                <strong>Where the Largest Descent Occurs:</strong>The drop from Khopra Ridge to Swanta Village on Day 6 is the largest single-day descent, losing close to 1,460m. This puts more strain on joints than on lungs, so use trekking poles and maintain a steady pace.
              </p>
              <p>
                <strong>Why the Route Naturally Supports Acclimatization:</strong>The Khopra Ridge itinerary follows a loose version of the &quot;climb high, sleep lower&quot; principle. You gain height on Day 2, lose it on Day 3, then climb again on Day 4 — a pattern that gives your body repeated exposure-and-recovery cycles instead of one continuous push upward.
              </p>
            </div>
          </article>

          {/* SECTION 5: KHAYER LAKE */}
          <article id="khayer-lake" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Khayer Lake Altitude Explained
            </h2>
            <div className="space-y-4 text-stone-600 text-sm leading-relaxed">
              <h3 className="text-lg font-bold text-stone-950">What 4,660 Meters Feels Like</h3>
              <p>At 4,660m, oxygen levels are layout-effectively around 60% of sea-level baseline pressure. Trekkers can expect faster breathing on any uphill section and a noticeably slower walking pace. Mild headaches are common but typically ease once you begin descending.
              </p>
              <h3 className="text-lg font-bold text-stone-950">Why Khayer Lake Is the Most Challenging Day</h3>
              <p>This day combines the highest absolute altitude on the trek with a long round-trip distance and limited shelter along the way. Unlike the overnight stops, there is no village infrastructure at the lake itself, so weather exposure is a real factor.
              </p>
            </div>
          </article>

          {/* SECTION 6: ACCLIMATIZATION & AMS */}
          <article id="acclimatization" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">Acclimatization and Altitude Sickness Guide
            </h2>
            <div className="space-y-4 text-stone-600 text-sm leading-relaxed">
              <p>
                <strong>Understanding Acute Mountain Sickness (AMS):</strong>AMS is your body&apos;s reaction to reduced oxygen at elevation. It can affect trekkers regardless of age or fitness level. Mild symptoms include headache, fatigue, loss of appetite, and difficulty sleeping.
              </p>
              
              <h3 className="text-lg font-bold text-stone-950">How to Reduce Altitude Risks</h3>
              <ul className="list-disc pl-5 space-y-1 text-xs text-stone-500">
                <li>Drink at least 3–4 liters of water daily to prevent dehydration (which worsens AMS).</li>
                <li>Eat enough carbohydrates, even if appetite drops at altitude.</li>
                <li>Avoid alcohol and sleeping pills above 3,000m, as both can mask symptoms.</li>
                <li>Walk at a conversational pace rather than racing other trekkers.</li>
                <li>Get a full night&apos;s sleep where possible.</li>
              </ul>

              <div className="bg-red-50 border border-red-200 p-5 rounded-2xl text-red-950 text-xs leading-relaxed font-semibold">Warning Signs That Should Never Be Ignored: Confusion or loss of coordination, shortness of breath at rest, a persistent cough with fluid sounds, or a headache that worsens despite rest and hydration. These warrant descending to a lower altitude immediately.
              </div>
            </div>
          </article>

          {/* SECTION 7: SUITABILITY */}
          <article id="suitability" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Is the Khopra Ridge Trek Suitable for Beginners?
            </h2>
            <div className="space-y-4 text-stone-600 text-sm leading-relaxed">
              <p>
                <strong>The honest answer:</strong>Yes, for most people, with the right preparation. You do not need technical mountaineering experience, but you should be comfortable walking 5–7 hours a day on uneven terrain with a daypack.
              </p>
              <p>
                <strong>Guided vs Independent Trekking:</strong>A guide adds real value on this trek for altitude monitoring. Experienced local guides recognize early AMS symptoms faster than first-time trekkers, and they know the conservative pacing that works best.
              </p>
            </div>
          </article>

          {/* SECTION 8: COMPARISONS */}
          <article id="comparison" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Khopra Ridge Elevation Compared to Other Popular Nepal Treks
            </h2>
            
            {/* Trek Comparisons Table */}
            <div className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-stone-100 text-stone-700 uppercase font-black tracking-wider border-b border-stone-200">
                      <th className="p-4">Trek</th>
                      <th className="p-4">Highest Point</th>
                      <th className="p-4">Relative Difficulty</th>
                      <th className="p-4">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 font-medium text-stone-600">
                    {comparisons.map((item, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50 transition">
                        <td className="p-4 font-bold text-stone-900">{item.name}</td>
                        <td className="p-4 font-bold text-emerald-600">{item.alt}</td>
                        <td className="p-4 font-semibold">{item.diff}</td>
                        <td className="p-4 text-xs text-stone-500">{item.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          {/* SECTION 9: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">Frequently Asked Questions About Khopra Ridge Elevation
            </h2>
            <div className="space-y-4 mt-6">
              {[
                {
                  q: "How high is the Khopra Ridge Trek?",
                  a: "The trek reaches a maximum altitude of 4,660m at Khayer Lake, while the highest point you actually sleep at is Khopra Ridge itself, at 3,660m."
                },
                {
                  q: "What is the altitude of Khayer Lake?",
                  a: "Khayer Lake sits at 4,660m and is reached as a day hike from Khopra Ridge, with trekkers returning to a lower altitude the same night."
                },
                {
                  q: "What is the highest sleeping altitude on the trek?",
                  a: "The highest overnight stop is Khopra Danda (Khopra Ridge) at 3,660m, reached on Day 4 of most standard itineraries."
                },
                {
                  q: "Is altitude sickness common on the Khopra Ridge Trek?",
                  a: "Mild AMS symptoms like headache or fatigue are fairly common above 3,000m, but serious AMS is uncommon when trekkers pace themselves and follow the route's built-in acclimatization days."
                },
                {
                  q: "How much elevation gain does the trek involve?",
                  a: "Across the full seven-day route, total elevation gain is approximately 2,800m to 3,000m, including a significant single-day climb of around 800m on Day 2."
                },
                {
                  q: "Is Khopra Ridge higher than Poon Hill?",
                  a: "Yes. Poon Hill tops out at 3,210m, while Khopra Ridge's sleeping altitude reaches 3,660m and its Khayer Lake side hike goes as high as 4,660m."
                },
                {
                  q: "Do I need acclimatization days for Khopra Ridge?",
                  a: "The standard itinerary already builds acclimatization into its structure through alternating climbs and descents, so dedicated rest days aren't strictly required, though adding one is a sensible option for cautious trekkers."
                },
                {
                  q: "Can beginners safely trek to Khayer Lake?",
                  a: "Yes, most reasonably fit beginners can complete the Khayer Lake side hike safely, provided they pace themselves, hydrate well, and ideally trek with a guide who can monitor for altitude symptoms."
                }
              ].map((faq, idx) => (
                <details 
                  key={idx} 
                  className="group bg-white border border-stone-200 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden cursor-pointer select-none transition-all duration-200 hover:border-emerald-500/30"
                >
                  <summary className="flex items-center justify-between font-bold text-stone-900 text-sm sm:text-base list-none">
                    <span>{faq.q}</span>
                    <span className="text-stone-400 group-open:rotate-180 transition-transform duration-200 text-lg">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </article>

          {/* SECTION 10: CONCLUSION */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-955 font-sans">Conclusion</h2>
            <p className="text-stone-600 leading-relaxed text-sm">The Khopra Ridge Trek&apos;s altitude profile climbs from 2,630m at Tadapani to a high point of 4,660m at Khayer Lake, with a highest sleeping altitude of 3,660m along the way. The route&apos;s staged ascent pattern, alternating climbs with partial descents, gives your body real opportunities to acclimatize rather than forcing a single relentless push upward. For most reasonably fit trekkers, this altitude profile is manageable with sensible pacing, proper hydration, and attention to early AMS symptoms.
            </p>
          </article>

          {/* SECTION 11: CTA & BOOKING */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Have Questions About Altitude Safety?</h3>
              <p className="text-stone-300 text-sm leading-relaxed">Speak with our local trek experts — they can walk you through pacing, route variations, and what to expect based on your fitness and experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >Consult an Altitude Expert &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Trek:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/planning/khopra-trek-permits" className="hover:text-emerald-400 flex items-center gap-1.5 transition">Check trekking permit requirements (ACAP &amp; TIMS)
                  </Link>
                  <Link href="/planning/khopra-trek-cost" className="hover:text-emerald-400 flex items-center gap-1.5 transition">Estimate your trip costs with our cost calculator
                  </Link>
                  <Link href="/planning/packing-checklist" className="hover:text-emerald-400 flex items-center gap-1.5 transition">Get the interactive packing checklist for your gear
                  </Link>
                  <Link href="/weather/best-time-to-trek" className="hover:text-emerald-400 flex items-center gap-1.5 transition">Check seasonal weather conditions before you go
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* EEAT Author Verification Banner */}
          <div className="p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
            <span className="text-2xl mt-0.5"></span>
            <div>
              <h4 className="font-bold text-stone-900 text-sm font-sans">Reviewed by Trail Experts</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">Acclimatization graphs are updated yearly based on checkpost logs. We recommend spending at least two nights at Khopra Ridge prior to attempting the Sacred Lake summit.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
