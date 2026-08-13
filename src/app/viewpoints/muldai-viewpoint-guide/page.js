import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/viewpoints/muldai-viewpoint-guide",
  },
  title: "Muldai Viewpoint Guide | Khopra Ridge Trek Guide",
  description: "Planning a trek to Muldai Viewpoint? Get the full route, sunrise timing, cost breakdown, permits, itineraries, and expert tips for this quiet Annapurna gem.",
};

export default function Page() {
  const quickFacts = [
    { label: "Elevation", detail: "Approximately 3,637 m (11,932 ft)" },
    { label: "Trek duration", detail: "4–7 days (varies by route and extensions)" },
    { label: "Difficulty", detail: "Moderate" },
    { label: "Best season", detail: "Autumn (Sep–Nov) and Spring (Mar–May)" },
    { label: "Starting point", detail: "Pokhara, via Nayapul or Ghandruk" },
    { label: "Nearest overnight stop", detail: "Dobato" },
    { label: "Permits required", detail: "ACAP (Annapurna Conservation Area Permit) & TIMS card" },
    { label: "Region", detail: "Annapurna Conservation Area, western Nepal" }
  ];

  const visibilityBySeason = [
    { season: "Autumn (Sep–Nov)", visibility: "Excellent", notes: "Clearest skies, sharpest views" },
    { season: "Winter (Dec–Feb)", visibility: "Good", notes: "Cold but often crisp and clear" },
    { season: "Spring (Mar–May)", visibility: "Good, with haze risk", notes: "Rhododendrons in bloom, occasional afternoon haze" },
    { season: "Monsoon (Jun–Aug)", visibility: "Poor", notes: "Cloud cover frequently blocks views" }
  ];

  const routeSegments = [
    { segment: "Nayapul to Ghandruk", distance: "10 km", time: "5–6 hours" },
    { segment: "Ghandruk to Tadapani", distance: "10 km", time: "5–6 hours" },
    { segment: "Tadapani to Dobato", distance: "8 km", time: "5–6 hours" },
    { segment: "Dobato to Muldai Viewpoint", distance: "2 km", time: "45 min–1 hour" },
    { segment: "Muldai back to Dobato", distance: "2 km", time: "30–45 min" }
  ];

  const monthlyWeather = [
    { month: "Jan–Feb", weather: "Cold, dry", visibility: "Good", rec: "Suitable for experienced winter trekkers" },
    { month: "Mar–Apr", weather: "Mild, blooming", visibility: "Good", rec: "Excellent choice" },
    { month: "May", weather: "Warm, some haze", visibility: "Moderate–Good", rec: "Good, book early season" },
    { month: "Jun–Aug", weather: "Wet, humid", visibility: "Poor", rec: "Avoid if possible" },
    { month: "Sep–Oct", weather: "Clear, cool", visibility: "Excellent", rec: "Peak season" },
    { month: "Nov", weather: "Cold, clear", visibility: "Excellent", rec: "Highly recommended" },
    { month: "Dec", weather: "Very cold", visibility: "Good", rec: "Possible with proper gear" }
  ];

  const budgetBreakdown = [
    { item: "Accommodation", ind: "USD 20–30", guided: "Included in package" },
    { item: "Food & Hot Drinks", ind: "USD 60–90", guided: "Included in package" },
    { item: "ACAP & TIMS Permits", ind: "USD 45–50", guided: "USD 45–50" },
    { item: "Guide & Porter Service", ind: "—", guided: "USD 100–160" },
    { item: "Transport (Pokhara–Trailhead)", ind: "USD 20–40", guided: "USD 20–40" },
    { item: "Estimated Total (4 Days)", ind: "USD 145–210", guided: "USD 250–350" }
  ];

  const muldaiVsPoonhill = [
    { factor: "Crowd levels", muldai: "Low (10–20 people)", poonhill: "High (300+ people in peak season)" },
    { factor: "Elevation", muldai: "3,637 m (11,932 ft)", poonhill: "3,210 m (10,531 ft)" },
    { factor: "Trek Difficulty", muldai: "Moderate", poonhill: "Easy–Moderate" },
    { factor: "Access & Distance", muldai: "Requires extra trekking day to Dobato", poonhill: "Very accessible from Ghorepani" },
    { factor: "Best For", muldai: "Trekkers wanting solitude & photographers", poonhill: "First-time or time-limited trekkers" }
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
            <span className="text-emerald-400">Muldai Viewpoint Guide</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Expert Viewpoint Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Muldai Viewpoint Guide: Complete Trek Route, Sunrise Views &amp; Travel Information
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            While Poon Hill draws hundreds of trekkers every morning for its famous sunrise, Muldai Viewpoint sits quietly at 3,637 metres above Dobato, offering closer mountain views, cleaner air, and absolute stillness.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Elevation</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">3,637m</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">11,932 feet above sea level</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Trek Difficulty</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Moderate</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Suitable for fit trekkers</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Nearest Node</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Dobato</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">45–60 min morning hike</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Crowd Level</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Very Low</span>
              <span className="text-[10px] text-emerald-400 font-semibold block mt-0.5">Off the beaten path</span>
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
              <a href="#quick-facts" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Quick Facts
              </a>
              <a href="#what-is" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                What is Muldai Viewpoint?
              </a>
              <a href="#why-visit" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why Visit Muldai?
              </a>
              <a href="#mountains-visible" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Mountains Visible
              </a>
              <a href="#how-to-reach" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                How to Reach It
              </a>
              <a href="#route-explained" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Route &amp; Distance
              </a>
              <a href="#itineraries" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Recommended Itineraries
              </a>
              <a href="#best-time" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Best Seasons &amp; Months
              </a>
              <a href="#sunrise-experience" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Sunrise Experience
              </a>
              <a href="#accommodation-food" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Dobato Lodges &amp; Food
              </a>
              <a href="#difficulty-fitness" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trek Difficulty &amp; Fitness
              </a>
              <a href="#cost-budget" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trek Cost &amp; Budget
              </a>
              <a href="#permits" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Permits &amp; Regulations
              </a>
              <a href="#packing-list" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Packing List
              </a>
              <a href="#flora-culture" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Flora, Fauna &amp; Culture
              </a>
              <a href="#vs-poonhill" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Muldai vs. Poon Hill
              </a>
              <a href="#photography" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Photography Tips
              </a>
              <a href="#practical-tips" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Practical Tips
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
                Inquire Custom Trek
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Muldai Viewpoint Guide: Complete Trek Route, Sunrise Views &amp; Travel Information
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Most trekkers heading into the Annapurna region have heard of Poon Hill. Far fewer have heard of Muldai Viewpoint — and that&apos;s exactly why it&apos;s worth your attention.
              </p>
              <p>
                Muldai sits on a high ridge above Dobato, offering the same jaw-dropping Himalayan sunrise as Poon Hill, but with a fraction of the crowds. Where Poon Hill can feel like a viewing platform shared with a few hundred other trekkers, Muldai often gives you a quiet ridge, open sky, and an unobstructed line of sight to some of Nepal&apos;s most famous peaks.
              </p>
              <p>
                This guide is built for one purpose: to answer every question you have before you commit to the Muldai Viewpoint trek. We&apos;ll walk through the route, the sunrise experience, realistic costs, permits, difficulty, accommodation, and how it compares to Poon Hill — so you can plan with confidence instead of piecing information together from five different blogs.
              </p>
            </div>
          </article>

          {/* SECTION 1: QUICK FACTS */}
          <article id="quick-facts" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Quick Facts: Muldai Viewpoint
            </h2>
            <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">Detail</th>
                    <th className="px-6 py-4">Information</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-600">
                  {quickFacts.map((fact, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/50">
                      <td className="px-6 py-4 font-bold text-stone-900">{fact.label}</td>
                      <td className="px-6 py-4">{fact.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          {/* SECTION 2: WHAT IS MULDAI */}
          <article id="what-is" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What Is Muldai Viewpoint?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Location:</strong> Muldai Viewpoint sits inside the Annapurna Conservation Area, on a ridgeline directly above <Link href="/nodes/dobato-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Dobato Village</Link>. It is connected to the trekking network linking Ghandruk, Tadapani, and Ghorepani.
              </p>
              <p>
                <strong>Elevation &amp; Geography:</strong> At roughly 3,637 meters (11,932 ft), Muldai is 427 meters higher than Poon Hill (3,210 m). The approach climbs through thick rhododendron and oak forest before opening onto exposed alpine ridge terrain near the top.
              </p>
              <p>
                <strong>Rising Popularity:</strong> More independent trekkers and small guided groups choose Muldai as a peaceful alternative to commercialized sunrise lookouts.
              </p>
            </div>
          </article>

          {/* SECTION 3: WHY VISIT MULDAI */}
          <article id="why-visit" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Visit Muldai Viewpoint?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Uncrowded 360° Panorama:</strong> Enjoy a peaceful mountain sunrise with only 10–20 fellow trekkers instead of jockeying for tripod space among 300+ people.
              </p>
              <p>
                <strong>Photographer &amp; Nature Lover Haven:</strong> High ridge exposure, shifting morning clouds, and changing forest canopies make Muldai one of the best photography spots on the <Link href="/guides/khopra-ridge-ultimate-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Khopra Ridge Trek</Link>.
              </p>
            </div>
          </article>

          {/* SECTION 4: MOUNTAINS VISIBLE */}
          <article id="mountains-visible" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Mountains Visible from Muldai Viewpoint
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Annapurna Massif:</strong> <Link href="/mountains/annapurna-south-views" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Annapurna South (7,219m)</Link> dominates the eastern skyline, with Annapurna I visible on clear days.
              </p>
              <p>
                <strong>Dhaulagiri Range:</strong> Dhaulagiri I (8,167m) provides a dramatic western counterpoint across the valley.
              </p>
              <p>
                <strong>Machhapuchhre &amp; Surrounding Peaks:</strong> Machhapuchhre (Fishtail, 6,993m), Hiunchuli, and Nilgiri summits.
              </p>

              {/* Visibility table */}
              <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="px-6 py-4">Season</th>
                      <th className="px-6 py-4">Mountain Visibility</th>
                      <th className="px-6 py-4">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    {visibilityBySeason.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50">
                        <td className="px-6 py-4 font-bold text-stone-900">{row.season}</td>
                        <td className="px-6 py-4 font-semibold text-emerald-600">{row.visibility}</td>
                        <td className="px-6 py-4">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          {/* SECTION 5: HOW TO REACH IT */}
          <article id="how-to-reach" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How to Reach Muldai Viewpoint
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Trailhead from Pokhara:</strong> Travel by jeep/bus from Pokhara to Nayapul (1.5–2 hrs) or directly to <Link href="/nodes/ghandruk-village-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Ghandruk Village</Link> (2–3 hrs).
              </p>
              <p>
                <strong>Route via Ghandruk &amp; Tadapani:</strong> Ghandruk &rarr; Tadapani &rarr; Dobato (overnight stop).
              </p>
              <p>
                <strong>Final Sunrise Hike from Dobato:</strong> A steady 45-minute to 1-hour pre-dawn headlamp climb (2 km, ~217m elevation gain).
              </p>
            </div>
          </article>

          {/* SECTION 6: ROUTE & DISTANCE */}
          <article id="route-explained" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Muldai Viewpoint Trek Route Explained
            </h2>
            <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">Segment</th>
                    <th className="px-6 py-4">Approx. Distance</th>
                    <th className="px-6 py-4">Walking Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-600">
                  {routeSegments.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/50">
                      <td className="px-6 py-4 font-bold text-stone-900">{row.segment}</td>
                      <td className="px-6 py-4">{row.distance}</td>
                      <td className="px-6 py-4">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          {/* SECTION 7: RECOMMENDED ITINERARIES */}
          <article id="itineraries" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Recommended Trek Itineraries
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>3–4 Day Muldai Trek:</strong> Pokhara &rarr; Ghandruk &rarr; Tadapani &rarr; Dobato (Muldai Sunrise) &rarr; Ghorepani / Nayapul &rarr; Pokhara.
              </p>
              <p>
                <strong>5–7 Day Foothills Loop:</strong> Combines Muldai Viewpoint with Ghorepani and Poon Hill to compare both sunrise lookouts.
              </p>
              <p>
                <strong>Khopra Ridge Extension:</strong> Extend from Dobato to Chhistibung and <Link href="/nodes/khopra-ridge-lodge-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Khopra Ridge Lodge</Link> (3,660m) and <Link href="/guides/khayer-lake-ultimate-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Sacred Khayer Lake</Link> (4,660m).
              </p>
            </div>
          </article>

          {/* SECTION 8: BEST SEASONS & MONTHS */}
          <article id="best-time" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Time to Visit Muldai Viewpoint
            </h2>
            <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">Month</th>
                    <th className="px-6 py-4">Weather</th>
                    <th className="px-6 py-4">Visibility</th>
                    <th className="px-6 py-4">Recommendation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-600">
                  {monthlyWeather.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/50">
                      <td className="px-6 py-4 font-bold text-stone-900">{row.month}</td>
                      <td className="px-6 py-4">{row.weather}</td>
                      <td className="px-6 py-4 font-semibold text-emerald-600">{row.visibility}</td>
                      <td className="px-6 py-4">{row.rec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          {/* SECTION 9: SUNRISE EXPERIENCE */}
          <article id="sunrise-experience" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Sunrise Experience at Muldai Viewpoint
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Leave Dobato between 4:30 AM and 5:15 AM with headlamps. The sky moves through deep blue hour to vivid pink-orange alpenglow hitting Annapurna South and Machhapuchhre.
              </p>
            </div>
          </article>

          {/* SECTION 10: LODGES & FOOD */}
          <article id="accommodation-food" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Accommodation, Food, and Facilities in Dobato
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Dobato features cozy community-run teahouses offering twin rooms, warm dining halls heated by wood stoves, fresh Dal Bhat, boiled water refilling, solar charging, and NTC mobile coverage.
              </p>
            </div>
          </article>

          {/* SECTION 11: DIFFICULTY & FITNESS */}
          <article id="difficulty-fitness" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Trek Difficulty, Fitness, and Altitude
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Muldai is rated <strong>Moderate</strong>. Daily walking averages 5–6 hours on stone steps and forest trails. At 3,637 meters, proper hydration and steady pacing prevent mild altitude headache.
              </p>
            </div>
          </article>

          {/* SECTION 12: COST & BUDGET */}
          <article id="cost-budget" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Muldai Viewpoint Trek Cost &amp; Budget Breakdown
            </h2>
            <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">Expense Category</th>
                    <th className="px-6 py-4">Independent Trekker</th>
                    <th className="px-6 py-4">Guided Trekker</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-600">
                  {budgetBreakdown.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/50">
                      <td className="px-6 py-4 font-bold text-stone-900">{row.item}</td>
                      <td className="px-6 py-4">{row.ind}</td>
                      <td className="px-6 py-4 font-semibold text-emerald-600">{row.guided}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          {/* SECTION 13: PERMITS & REGULATIONS */}
          <article id="permits" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Permits and Entry Requirements
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Trekkers require an <Link href="/planning/acap-permit-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">ACAP Permit</Link> (NPR 3,000 / ~USD 23) and a <Link href="/planning/tims-card-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">TIMS Card</Link> (NPR 2,000 / ~USD 15).
              </p>
            </div>
          </article>

          {/* SECTION 14: PACKING LIST */}
          <article id="packing-list" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Packing List for Muldai Viewpoint
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Essential clothing layers (thermal base, fleece/down jacket, windproof shell), headlamp with extra batteries, broken-in hiking boots, trekking poles, water purification, and cash in NPR.
              </p>
            </div>
          </article>

          {/* SECTION 15: FLORA, FAUNA & CULTURE */}
          <article id="flora-culture" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Wildlife, Flora, and Local Culture
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Old-growth rhododendron &amp; oak forests, national bird Himalayan Monal (Danfe), and warm Gurung hospitality in Ghandruk.
              </p>
            </div>
          </article>

          {/* SECTION 16: MULDAI VS POON HILL */}
          <article id="vs-poonhill" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Muldai Viewpoint vs Poon Hill
            </h2>
            <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">Comparison Factor</th>
                    <th className="px-6 py-4">Muldai Viewpoint</th>
                    <th className="px-6 py-4">Poon Hill</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-600">
                  {muldaiVsPoonhill.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/50">
                      <td className="px-6 py-4 font-bold text-stone-900">{row.factor}</td>
                      <td className="px-6 py-4 text-emerald-700 font-semibold">{row.muldai}</td>
                      <td className="px-6 py-4">{row.poonhill}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          {/* SECTION 17: PHOTOGRAPHY TIPS */}
          <article id="photography" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Photography Guide for Muldai Viewpoint
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Read our full <Link href="/viewpoints/best-photography-spots" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Best Photography Spots on the Khopra Trek</Link> guide for lens settings and pre-dawn exposure framing.
              </p>
            </div>
          </article>

          {/* SECTION 18: PRACTICAL TIPS */}
          <article id="practical-tips" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Practical Trekking Tips
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Check estimated sunrise times with your teahouse host the evening prior. Carry a thermos of hot tea up to the viewpoint, as morning temperatures drop below freezing.
              </p>
            </div>
          </article>

          {/* SECTION 19: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Muldai Viewpoint
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Is Muldai Viewpoint worth visiting?",
                  a: "Yes! It offers an uncrowded 360-degree Himalayan sunrise panorama at 3,637m elevation."
                },
                {
                  q: "How difficult is the Muldai Viewpoint trek?",
                  a: "It is a moderate trek, manageable for anyone with reasonable hiking fitness."
                },
                {
                  q: "How long is the hike from Dobato to Muldai Viewpoint?",
                  a: "The morning hike takes 45 minutes to 1 hour at a steady pace."
                },
                {
                  q: "Is Muldai better than Poon Hill?",
                  a: "Muldai is 427m higher, offers closer Dhaulagiri views, and hosts only 10–20 people compared to 300+ on Poon Hill."
                },
                {
                  q: "Can beginners complete the Muldai Viewpoint trek?",
                  a: "Yes, provided beginners follow a 4-day-or-longer itinerary for gradual pacing."
                },
                {
                  q: "Do I need a guide for Muldai Viewpoint?",
                  a: "While independent trekking is allowed, hiring a local guide ensures safe pre-dawn navigation and permit support."
                },
                {
                  q: "Which permits are required for Muldai Viewpoint?",
                  a: "You need an ACAP Permit and a TIMS Card."
                },
                {
                  q: "How much does the Muldai Viewpoint trek cost?",
                  a: "Independent trekkers spend USD 25–35 per day; guided treks cost USD 40–60 per day."
                },
                {
                  q: "What mountains can I see from Muldai Viewpoint?",
                  a: "Annapurna South, Dhaulagiri I, Machhapuchhre (Fishtail), Hiunchuli, and Nilgiri."
                },
                {
                  q: "Is accommodation available in Dobato?",
                  a: "Yes, Dobato has cozy teahouses offering twin rooms, warm dining halls, and hearty meals."
                },
                {
                  q: "Is there mobile network coverage near Muldai Viewpoint?",
                  a: "NTC offers signal along the trail, though coverage weakens at the summit itself."
                },
                {
                  q: "What is the best month to visit Muldai Viewpoint?",
                  a: "October and November offer the clearest skies, while April brings blooming rhododendrons."
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
              Muldai Viewpoint delivers what modern trekkers seek: an uncrowded, high-altitude Himalayan sunrise. Plan your trek today and experience the quiet magic of the Annapurnas!
            </p>
          </article>

          {/* SECTION: CTA */}
          <section id="booking" className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Plan Your Muldai Viewpoint Trek with Local Experts
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Get a custom itinerary, permit assistance, and route guidance built around your travel dates and fitness level. Whether you want a quick 4-day Muldai trek or a longer Khopra Ridge extension, our local trekking specialists can help you plan it from start to finish.
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
                  <Link href="/viewpoints/best-viewpoints-khopra" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read Best Viewpoints Comparison Guide
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
                This Muldai Viewpoint guide is maintained by our licensed local trekking guides operating out of Kathmandu and Pokhara. Nepal Tourism Operator License #8928-091. Email: <a href="mailto:khopraridge51@gmail.com" className="text-emerald-700 font-semibold hover:underline">khopraridge51@gmail.com</a>.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
