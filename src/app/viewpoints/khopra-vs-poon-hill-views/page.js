import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/viewpoints/khopra-vs-poon-hill-views",
  },
  title: "Khopra Ridge vs Poon Hill Views: Which Annapurna Viewpoint Offers the Better Experience?",
  description: "Khopra Ridge vs Poon Hill views compared — sunrise, mountain panoramas, crowds, cost, and difficulty — so you can choose the best Annapurna viewpoint for your trek.",
};

export default function Page() {
  const comparisonData = [
    { factor: "Elevation", khopra: "~3,660 m (12,007 ft)", poon: "3,210 m (10,531 ft)" },
    { factor: "Trek duration", khopra: "6–8 days", poon: "3–5 days" },
    { factor: "Difficulty", khopra: "Moderate to challenging", poon: "Easy to moderate" },
    { factor: "Crowds", khopra: "Low (10–20 guests)", poon: "High (300–500+ hikers)" },
    { factor: "Mountain views", khopra: "Wide, close, sustained panorama", poon: "Broad, classic single lookout" },
    { factor: "Sunrise experience", khopra: "Quiet, open ridgeline from lodge", poon: "Iconic, but busy viewing tower" },
    { factor: "Photography", khopra: "Excellent, uncrowded, raw sky", poon: "Good, but crowded foregrounds" },
    { factor: "Accommodation", khopra: "Community eco-lodges, authentic", poon: "Established commercial teahouses" },
    { factor: "Cost", khopra: "Moderate-higher (longer itinerary)", poon: "Lower (shorter itinerary)" },
    { factor: "Best for", khopra: "Photographers, solitude seekers, fit trekkers", poon: "Beginners, families, short trips" }
  ];

  const visibilityMonths = [
    { months: "March–April", status: "Strong visibility, rhododendrons in full bloom" },
    { months: "May", status: "Good visibility, warming temperatures with afternoon haze risk" },
    { months: "September", status: "Post-monsoon clarity begins, crisp blue skies" },
    { months: "October–November", status: "Peak visibility, crystal-clear mountain definition, peak crowds" },
    { months: "December–February", status: "Clear but cold, sharp snow-capped peak views" },
    { months: "June–August", status: "Avoid if mountain views are main priority (heavy monsoon rain & cloud)" }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          {/* Breadcrumbs */}
          <div className="mb-6 flex items-center gap-2 text-xs text-stone-400 font-semibold">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/viewpoints/khopra-ridge-viewpoint" className="hover:text-emerald-400 transition-colors">Viewpoints</Link>
            <span>/</span>
            <span className="text-emerald-400">Khopra vs Poon Hill Views</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Viewpoint Face-Off
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Khopra Ridge vs Poon Hill Views: Which Annapurna Viewpoint Offers the Better Experience?
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Poon Hill and <Link href="/guides/khopra-ridge-ultimate-guide" className="text-emerald-400 underline hover:text-emerald-300 font-semibold">Khopra Ridge</Link> are the two viewpoints every Annapurna-bound trekker eventually has to choose between. Both promise sweeping Himalayan panoramas, but they deliver that experience in fundamentally different ways.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Khopra Altitude</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">3,660m</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Up to 4,660m at Khayer Lake</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Poon Hill Altitude</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">3,210m</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Classic sunrise viewpoint</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Khopra Crowds</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Very Low</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Serene, quiet mornings</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Poon Hill Crowds</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Very High</span>
              <span className="text-[10px] text-emerald-400 font-semibold block mt-0.5">300–500+ hikers at peak</span>
            </div>
          </div>
        </div>
      </section>

      {/* DYNAMIC TWO COLUMN LAYOUT */}
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12 w-full flex-1">
        {/* STICKY TABLE OF CONTENTS SIDEBAR */}
        <aside className="lg:col-span-1">
          <div className="sticky top-8 bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-4 max-h-[85vh] overflow-y-auto hidden lg:block">
            <h3 className="text-xs font-black uppercase text-stone-400 tracking-wider pb-3 border-b border-stone-100">
              Table of Contents
            </h3>
            <nav className="flex flex-col gap-1 text-sm">
              <a href="#quick-verdict" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Quick Verdict
              </a>
              <a href="#comparison-table" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Side-by-Side Matrix
              </a>
              <a href="#understanding" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Understanding Both
              </a>
              <a href="#mountain-views" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Mountain Scenery
              </a>
              <a href="#sunrise" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Sunrise Experience
              </a>
              <a href="#photography" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Photography Comparison
              </a>
              <a href="#crowd-levels" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Crowds &amp; Atmosphere
              </a>
              <a href="#difficulty" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Difficulty &amp; Duration
              </a>
              <a href="#accommodation-comfort" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Lodges &amp; Comfort
              </a>
              <a href="#cost-comparison" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Cost &amp; Budget Value
              </a>
              <a href="#best-time" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Best Time to Visit
              </a>
              <a href="#by-traveler" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                By Traveler Type
              </a>
              <a href="#combine" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Can You Visit Both?
              </a>
              <a href="#sustainability" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Community Tourism
              </a>
              <a href="#final-verdict" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Final Recommendation
              </a>
              <a href="#faq" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Frequently Asked Qs
              </a>
            </nav>
            <div className="pt-4 border-t border-stone-100">
              <Link 
                href="/contact"
                className="w-full text-center block bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider py-3 rounded-2xl shadow-sm transition duration-200"
              >
                Inquire Guided Trek
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Ridge vs Poon Hill Views: Which Annapurna Viewpoint Offers the Better Experience?
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Poon Hill and Khopra Ridge are the two viewpoints every Annapurna-bound trekker eventually has to choose between. Both promise sweeping Himalayan panoramas, but they deliver that experience in very different ways — and the right choice depends far more on who you are as a trekker than on which mountain looks slightly bigger from which angle.
              </p>
              <p>
                We&apos;ve guided trekkers up both routes for years, and the question we hear most often isn&apos;t &quot;which one has better views.&quot; It&apos;s &quot;which one is right for me.&quot; That&apos;s the question this guide actually answers.
              </p>
              <p>
                In short: Poon Hill is the faster, easier, more social sunrise viewpoint — ideal if you have limited time or are trekking with family. Khopra Ridge is the quieter, higher, more immersive alternative — better suited to trekkers who want fewer crowds, stronger photography, and a deeper connection to the mountains and the communities who live among them.
              </p>
            </div>
          </article>

          {/* SECTION 1: QUICK VERDICT */}
          <article id="quick-verdict" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Quick Verdict: Which Annapurna Viewpoint Should You Choose?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-emerald-50/60 border border-emerald-200 rounded-3xl p-6 space-y-3">
                <h3 className="font-extrabold text-emerald-950 text-base">Choose Khopra Ridge If...</h3>
                <ul className="space-y-2 text-xs text-stone-700 leading-relaxed list-disc pl-4">
                  <li>You want a quieter, less crowded trekking experience</li>
                  <li>Photography is a priority, especially wide, uninterrupted panoramas</li>
                  <li>You have 6–8 days available rather than 3–4 days</li>
                  <li>You&apos;re interested in community-run lodges supporting local Magar villages directly</li>
                  <li>You want a higher (3,660m), more immersive ridge-top experience rather than a single lookout stop</li>
                  <li>You&apos;re comfortable with a longer, more remote trail</li>
                </ul>
              </div>

              <div className="bg-stone-100/80 border border-stone-200 rounded-3xl p-6 space-y-3">
                <h3 className="font-extrabold text-stone-950 text-base">Choose Poon Hill If...</h3>
                <ul className="space-y-2 text-xs text-stone-700 leading-relaxed list-disc pl-4">
                  <li>You have limited time — as little as 3–4 days total from Pokhara</li>
                  <li>This is your first Himalayan trek and you want a gentler introduction</li>
                  <li>You&apos;re trekking with children, older family members, or a mixed-fitness group</li>
                  <li>You want the classic, famous Annapurna sunrise experience with minimal logistics</li>
                  <li>Budget and simplicity matter more than solitude</li>
                </ul>
              </div>
            </div>
          </article>

          {/* SECTION 2: COMPARISON TABLE */}
          <article id="comparison-table" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Side-by-Side Comparison Table
            </h2>
            <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">Factor</th>
                    <th className="px-6 py-4">Khopra Ridge</th>
                    <th className="px-6 py-4">Poon Hill</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-600">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/50">
                      <td className="px-6 py-4 font-bold text-stone-900">{row.factor}</td>
                      <td className="px-6 py-4 text-emerald-700 font-semibold">{row.khopra}</td>
                      <td className="px-6 py-4">{row.poon}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          {/* SECTION 3: UNDERSTANDING BOTH */}
          <article id="understanding" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Understanding the Two Viewpoints
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>What Makes Khopra Ridge Unique?</strong> <Link href="/viewpoints/khopra-ridge-viewpoint" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Khopra Ridge Viewpoint</Link> (3,660m) is a broad alpine ridgeline positioned directly above Kali Gandaki Gorge. Instead of being a brief 30-minute sunrise stop, the mountain panorama stays with you for your entire overnight stay at the community eco-lodge.
              </p>
              <p>
                <strong>What Makes Poon Hill Unique?</strong> Poon Hill (3,210m) is accessed from Ghorepani. Its paved viewing platform provides a classic, accessible 180-degree sunrise panorama that has introduced generations of trekkers to Nepal.
              </p>
            </div>
          </article>

          {/* SECTION 4: MOUNTAIN VIEWS */}
          <article id="mountain-views" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Mountain Views Comparison: Which Viewpoint Offers Better Himalayan Scenery?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Dhaulagiri Views:</strong> Dhaulagiri I (8,167m) dominates the western sky from both locations. However, Khopra Ridge sits significantly closer to Dhaulagiri across the Kali Gandaki Valley, presenting its massive East Face in much greater detail.
              </p>
              <p>
                <strong>Annapurna South &amp; Annapurna I:</strong> <Link href="/mountains/annapurna-south-views" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Annapurna South (7,219m)</Link> rises directly behind Khopra Ridge, creating a close-up wall effect. Poon Hill provides a wider, more distant framing of the full Annapurna arc.
              </p>
              <p>
                <strong>Machhapuchhre, Nilgiri &amp; Tukuche Peak:</strong> Machhapuchhre (Fishtail) is visible from both lookouts. Khopra Ridge adds clear close-up views of Nilgiri North/Central/South and Tukuche Peak.
              </p>
            </div>
          </article>

          {/* SECTION 5: SUNRISE */}
          <article id="sunrise" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Sunrise Experience Compared
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Sunrise at Poon Hill:</strong> Iconic, but crowded. 300–500+ trekkers queue up at the viewing tower at 5:00 AM.
              </p>
              <p>
                <strong>Sunrise at Khopra Ridge:</strong> Quiet, serene, and unhurried. Read our complete guide to <Link href="/viewpoints/sunrise-at-khopra-ridge" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Sunrise at Khopra Ridge</Link> for details on the pre-dawn alpenglow sequence.
              </p>
            </div>
          </article>

          {/* SECTION 6: PHOTOGRAPHY */}
          <article id="photography" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Photography Comparison
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Khopra Ridge is significantly better for photography. Photographers have space to position tripods along the ridgeline without tourist crowds blocking the foreground. Read our <Link href="/viewpoints/best-photography-spots" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Best Photography Spots on the Khopra Trek</Link> guide for lens advice.
              </p>
            </div>
          </article>

          {/* SECTION 7: CROWD LEVELS */}
          <article id="crowd-levels" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Crowds, Atmosphere &amp; Overall Experience
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Poon Hill sees heavy commercial foot traffic. Khopra Ridge offers peaceful solitude where you share the morning with only 15–30 fellow eco-lodge guests.
              </p>
            </div>
          </article>

          {/* SECTION 8: DIFFICULTY */}
          <article id="difficulty" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Trek Difficulty, Accessibility &amp; Fitness Requirements
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Poon Hill takes 3–5 days with paved stair trails. Khopra Ridge takes 6–8 days with higher elevation (3,660m) and sustained walking, making it moderate to challenging.
              </p>
            </div>
          </article>

          {/* SECTION 9: ACCOMMODATION & COMFORT */}
          <article id="accommodation-comfort" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Accommodation, Food &amp; Trekking Comfort
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Poon Hill features well-established commercial teahouses with attached bathrooms and broader menus. Khopra Ridge utilizes community-owned eco-lodges with basic, clean twin rooms where 100% of profits support local Magar village schools and health clinics.
              </p>
            </div>
          </article>

          {/* SECTION 10: COST COMPARISON */}
          <article id="cost-comparison" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Cost Comparison: Which Viewpoint Offers Better Value?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Poon Hill is lower cost overall due to its short 3–4 day itinerary. Khopra Ridge costs more in total due to 6–8 trekking days, though daily food and permit costs are similar. Read our <Link href="/planning/khopra-trek-cost" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Khopra Trek Cost Breakdown</Link>.
              </p>
            </div>
          </article>

          {/* SECTION 11: BEST TIME */}
          <article id="best-time" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Time to Visit Both Viewpoints
            </h2>
            <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">Months</th>
                    <th className="px-6 py-4">Mountain Visibility &amp; Trail Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-600">
                  {visibilityMonths.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/50">
                      <td className="px-6 py-4 font-bold text-stone-900">{row.months}</td>
                      <td className="px-6 py-4">{row.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          {/* SECTION 12: BY TRAVELER TYPE */}
          <article id="by-traveler" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Which Viewpoint Is Best for Different Types of Travelers?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>First-Time Trekkers &amp; Families:</strong> Poon Hill (gentle introduction, short duration).</li>
                <li><strong>Photographers &amp; Solitude Seekers:</strong> Khopra Ridge (uncrowded, high ridge exposure).</li>
                <li><strong>Experienced Trekkers:</strong> Khopra Ridge (extended circuit with option for <Link href="/guides/khayer-lake-ultimate-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Sacred Khayer Lake at 4,660m</Link>).</li>
              </ul>
            </div>
          </article>

          {/* SECTION 13: CAN YOU VISIT BOTH? */}
          <article id="combine" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Can You Visit Khopra Ridge and Poon Hill on the Same Trek?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Yes! A combined 9–12 day itinerary starts in Ghorepani for Poon Hill sunrise, then continues east via Tadapani, Dobato (<Link href="/viewpoints/muldai-viewpoint-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Muldai Viewpoint</Link>), Chhistibung, and up to Khopra Ridge.
              </p>
            </div>
          </article>

          {/* SECTION 14: SUSTAINABILITY */}
          <article id="sustainability" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Community Tourism &amp; Sustainability
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Khopra Ridge is a pioneer in community eco-tourism. Choosing Khopra Ridge ensures your accommodation spending funds village health posts and Magar primary schools in Swanta and Narchi.
              </p>
            </div>
          </article>

          {/* SECTION 15: FINAL VERDICT */}
          <article id="final-verdict" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Final Verdict: Khopra Ridge vs Poon Hill Views
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                As a licensed Nepal trekking operator (NTO License #8928-091), our advice is clear: choose Poon Hill if you have under 5 days or are hiking with kids; choose Khopra Ridge if you want an uncrowded, high-altitude mountain immersion.
              </p>
            </div>
          </article>

          {/* SECTION 16: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Khopra vs Poon Hill
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Is Khopra Ridge better than Poon Hill?",
                  a: "Neither is universally better. Khopra Ridge offers a quieter, higher (3,660m) experience, while Poon Hill is shorter (3-4 days) and more accessible."
                },
                {
                  q: "Which viewpoint has better mountain views?",
                  a: "Khopra Ridge offers closer views of Dhaulagiri I across Kali Gandaki and a sustained 360-degree ridge panorama."
                },
                {
                  q: "Which sunrise is more beautiful?",
                  a: "Poon Hill is classic and wide, but Khopra Ridge is serene, uncrowded, and right outside your lodge step."
                },
                {
                  q: "Which trek is easier?",
                  a: "Poon Hill is significantly easier with shorter walking days and lower altitude."
                },
                {
                  q: "Is Khopra Ridge suitable for beginners?",
                  a: "Yes, provided beginners have good general fitness for multi-day walking and proper pacing."
                },
                {
                  q: "Which viewpoint is less crowded?",
                  a: "Khopra Ridge sees only 15–30 guests daily compared to 300–500+ hikers on Poon Hill."
                },
                {
                  q: "Can I combine both viewpoints in one trek?",
                  a: "Yes! A combined 9–12 day loop includes Ghorepani, Poon Hill, Muldai, and Khopra Ridge."
                },
                {
                  q: "Which viewpoint is better for photography?",
                  a: "Khopra Ridge provides uncrowded foregrounds, cloud inversions, and ideal conditions for landscape photography."
                },
                {
                  q: "What is the best season for both viewpoints?",
                  a: "Autumn (September–November) and Spring (March–May) deliver the clearest visibility."
                },
                {
                  q: "Is Khopra Ridge worth the extra trekking days?",
                  a: "For trekkers wanting solitude, community lodge impact, and big mountain panoramas, absolutely yes."
                }
              ].map((faq, idx) => (
                <details 
                  key={idx} 
                  className="group bg-white border border-stone-200 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer select-none transition-all duration-200 hover:border-emerald-500/30"
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

          {/* SECTION: CONCLUSION */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-955">Conclusion</h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              Whether you choose the quick classic charm of Poon Hill or the high, serene ridgelines of Khopra Ridge, both promise unforgettable Himalayan memories.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section id="booking" className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Ready to Plan Your Annapurna Trek?
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Still unsure which viewpoint fits your itinerary, fitness level, and travel style? As a licensed Nepal trekking operator (NTO License #8928-091) based in Pokhara, we can help you build a personalized trekking plan — whether that means Khopra Ridge, Poon Hill, or a combined route.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Contact Local Trek Specialists &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Trek:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/viewpoints/khopra-ridge-viewpoint" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read Khopra Ridge Viewpoint Guide
                  </Link>
                  <Link href="/viewpoints/muldai-viewpoint-guide" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read Muldai Viewpoint Guide
                  </Link>
                  <Link href="/viewpoints/best-photography-spots" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read Best Photography Spots Guide
                  </Link>
                  <Link href="/planning/teahouse-locator" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Use our interactive Teahouse Finder tool
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* EEAT Author Verification Banner */}
          <div className="p-6 rounded-3xl bg-stone-100 border border-stone-200 flex items-start gap-4">
            <span className="text-2xl mt-0.5">🏔️</span>
            <div>
              <h4 className="font-bold text-stone-900 text-sm font-sans font-medium">Reviewed by Local Guides</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                This viewpoint comparison guide is maintained by our licensed local trekking guides operating out of Kathmandu and Pokhara. Nepal Tourism Operator License #8928-091. Email: <a href="mailto:khopraridge51@gmail.com" className="text-emerald-700 font-semibold hover:underline">khopraridge51@gmail.com</a>.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
