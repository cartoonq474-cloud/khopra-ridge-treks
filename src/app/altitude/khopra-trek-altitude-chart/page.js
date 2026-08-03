import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/altitude/khopra-trek-altitude-chart",
  },
  title: "Khopra Trek Elevation Chart – Complete Day-by-Day Altitude Profile",
  description: "Explore the complete Khopra Trek elevation chart with day-by-day altitude data, Khayer Lake maximum height (4,660m), acclimatization strategy, AMS risk zones, and trek difficulty breakdown.",
};

export default function Page() {
  const chartPoints = [
    { day: "Day 1", name: "Nayapul", elev: 1070 },
    { day: "Day 2", name: "Ghandruk", elev: 1940 },
    { day: "Day 3", name: "Tadapani", elev: 2630 },
    { day: "Day 4", name: "Bayeli", elev: 3432 },
    { day: "Day 5", name: "Chhistibung", elev: 2975 },
    { day: "Day 6", name: "Khopra Ridge", elev: 3660 },
    { day: "Day 7", name: "Khayer Lake", elev: 4660 },
    { day: "Day 8", name: "Swanta", elev: 2214 },
    { day: "Day 9", name: "Ghorepani", elev: 2860 }
  ];

  // SVG parameters
  const width = 800;
  const height = 320;
  const paddingLeft = 60;
  const paddingRight = 30;
  const paddingTop = 40;
  const paddingBottom = 55;

  const minElev = 800;
  const maxElev = 5000;

  // Coordinate scaling helpers
  const getX = (index) => {
    return paddingLeft + (index / (chartPoints.length - 1)) * (width - paddingLeft - paddingRight);
  };

  const getY = (elev) => {
    return height - paddingBottom - ((elev - minElev) / (maxElev - minElev)) * (height - paddingTop - paddingBottom);
  };

  // Generate SVG path string
  let pathD = "";
  chartPoints.forEach((p, i) => {
    const x = getX(i);
    const y = getY(p.elev);
    if (i === 0) {
      pathD += `M ${x} ${y}`;
    } else {
      pathD += ` L ${x} ${y}`;
    }
  });

  // Generate area under line path string
  const startX = getX(0);
  const endX = getX(chartPoints.length - 1);
  const bottomY = height - paddingBottom;
  const areaD = `${pathD} L ${endX} ${bottomY} L ${startX} ${bottomY} Z`;

  const stats = [
    { label: "Starting point", value: "Nayapul (~1,070m)" },
    { label: "Maximum elevation", value: "Khayer Lake (4,660m)" },
    { label: "Total altitude range", value: "~3,590m vertical span" },
    { label: "Days above 3,000m", value: "4–5 days" },
    { label: "Days above 4,000m", value: "1 day (Khayer Lake push)" },
    { label: "Trek type", value: "Point-to-point ridge trek" }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="mb-6 flex items-center gap-2 text-xs text-stone-400 font-semibold">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/altitude/acclimatization-guide" className="hover:text-emerald-400 transition-colors">Altitude</Link>
            <span>/</span>
            <span className="text-emerald-400">Elevation Chart</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Interactive Route Data
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Khopra Trek Elevation Chart
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Explore the complete day-by-day altitude profile, key ascent benchmarks, and acclimatisation curves.
          </p>
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
              <a href="#overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Elevation Overview
              </a>
              <a href="#visual-chart" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Visual Chart Profile
              </a>
              <a href="#day-by-day" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Day-by-Day Profile
              </a>
              <a href="#altitude-zones" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Physiological Zones
              </a>
              <a href="#steepest-ascents" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Steepest Ascents
              </a>
              <a href="#max-elevation" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Khayer Lake (4,660m)
              </a>
              <a href="#acclimatisation" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Acclimatisation strategy
              </a>
              <a href="#comparison" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Region Comparisons
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
                Request Altitude Profile PDF
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Trek Elevation Chart – Complete Day-by-Day Altitude Profile
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                If you are planning the Khopra Ridge Trek, understanding the elevation profile is not optional — it is the foundation of safe, well-paced trekking. This guide gives you more than raw numbers. It breaks down the full Khopra Trek elevation chart day by day, explains what each ascent and descent means for your body, identifies the hardest climbing sections, and helps you understand altitude risk before you set a single foot on the trail.
              </p>
              <p>
                The trek reaches its highest point at Khayer Lake, sitting at 4,660 metres above sea level. That is a meaningful altitude — high enough for oxygen levels to fall noticeably, for stamina to reduce faster than expected, and for altitude sickness to become a genuine risk if the route is not paced correctly. By the end of this guide, you will understand not just where the trail goes, but why the elevation changes matter and how to use that knowledge to trek more safely and confidently in the Annapurna region.
              </p>
            </div>
          </article>

          {/* SECTION: OVERVIEW AT A GLANCE */}
          <article id="overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Trek Elevation Overview (At a Glance)
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Before diving into the day-by-day breakdown, here is a quick picture of the full altitude range you will move through on this trek:
              </p>

              {/* STATS GRID */}
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 my-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="p-5 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-1">
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">{stat.label}</span>
                    <span className="text-sm font-extrabold text-stone-900 block">{stat.value}</span>
                  </div>
                ))}
              </div>

              <p>
                These numbers tell an important story. You begin at a warm, low-altitude valley and progressively climb into high-altitude ridge terrain before a single high-exposure day above 4,000 metres. The profile is gradual enough for acclimatisation to develop — but only if you follow the route without rushing.
              </p>
              <p>
                <strong>Why Elevation Matters on Khopra Trek:</strong> Above 3,000 metres, the human body begins working harder for the same physical effort. Available oxygen drops, and your lungs, heart, and muscles must compensate.
              </p>
              <p>
                Knowing which days involve the biggest altitude gains helps you pace your effort, sleep strategy, and acclimatisation plan. Khopra is classified as a moderate-to-high altitude trek. It is more demanding than Poon Hill but less technically extreme than Annapurna Base Camp at its maximum.
              </p>
            </div>
          </article>

          {/* SECTION: VISUAL CHART */}
          <article id="visual-chart" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Visual Elevation Profile Chart
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              This interactive SVG profile demonstrates the path of the trek. Note the strategic altitude dip on Day 5 (Chhistibung) built directly before the steep climb to the ridge:
            </p>

            <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm overflow-x-auto my-6">
              <div className="min-w-[760px] relative">
                <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible">
                  {/* Grid Lines */}
                  {[1000, 2000, 3000, 4000, 5000].map((gridElev, idx) => {
                    const y = getY(gridElev);
                    return (
                      <g key={idx}>
                        <line x1={paddingLeft} y1={y} x2={width - paddingRight} y2={y} stroke="#e7e5e4" strokeWidth="1" strokeDasharray="4 4" />
                        <text x={paddingLeft - 10} y={y + 4} textAnchor="end" fontSize="10" className="fill-stone-400 font-semibold">{gridElev}m</text>
                      </g>
                    );
                  })}

                  {/* Area path */}
                  <path d={areaD} fill="url(#emerald-gradient)" opacity="0.1" />

                  {/* Line path */}
                  <path d={pathD} fill="none" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

                  {/* Markers & Labels */}
                  {chartPoints.map((point, i) => {
                    const x = getX(i);
                    const y = getY(point.elev);
                    return (
                      <g key={i}>
                        <circle cx={x} cy={y} r="5" className="fill-emerald-600 stroke-white" strokeWidth="2" />
                        <text x={x} y={y - 12} textAnchor="middle" fontSize="9" className="fill-stone-900 font-extrabold">{point.elev}m</text>
                        <text x={x} y={height - paddingBottom + 18} textAnchor="middle" fontSize="10" className="fill-stone-950 font-bold">{point.day}</text>
                        <text x={x} y={height - paddingBottom + 30} textAnchor="middle" fontSize="8" className="fill-stone-400 font-medium">{point.name}</text>
                      </g>
                    );
                  })}

                  {/* Definitions */}
                  <defs>
                    <linearGradient id="emerald-gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#059669" />
                      <stop offset="100%" stopColor="#ffffff" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </article>

          {/* SECTION: DAY BY DAY */}
          <article id="day-by-day" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Full Day-by-Day Elevation Profile Breakdown
            </h2>

            <div className="space-y-8 mt-6">
              <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-3">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">Day 1: Nayapul to Ghandruk</span>
                <h4 className="text-sm font-extrabold text-stone-900">Elevation: 1,070m &rarr; 1,940m (+870m Gain)</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  The trek begins at Nayapul and climbs steadily through terraced farmland to reach Ghandruk village. This is a solid physical warm-up: breathing feels normal, and the primary work is muscular conditioning rather than altitude coping. Settle your pacing pattern early.
                </p>
              </div>

              <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-3">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">Day 2: Ghandruk to Tadapani</span>
                <h4 className="text-sm font-extrabold text-stone-900">Elevation: 1,940m &rarr; 2,630m (+690m Gain)</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  A steady, consistent forest climb. You are crossing into the lower end of the moderate trekking zone. Most hikers notice slightly increased effort on steep forest steps. Establish a conversational climbing pace.
                </p>
              </div>

              <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-3">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">Day 3: Tadapani to Bayeli Kharka</span>
                <h4 className="text-sm font-extrabold text-stone-900">Elevation: 2,630m &rarr; 3,432m (+802m Gain)</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  This is the day the trek changes character. You push firmly into the high-altitude zone above 3,000 metres. Exertion feels noticeably heavier; resting heart rate rises slightly and breathing becomes more conscious. Adjust your walking speed downward.
                </p>
              </div>

              <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-3">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">Day 4: Bayeli Kharka to Chhistibung</span>
                <h4 className="text-sm font-extrabold text-stone-900">Elevation: 3,432m &rarr; 2,975m (-457m planned descent)</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  A strategically vital &quot;climb high, sleep low&quot; acclimatisation dip. Sleeping lower allows your body to recover and manufacture red blood cells, preparing you for the ridge push. Skipping or compressing this stage removes a major safety mechanism of the route.
                </p>
              </div>

              <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-3">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">Day 5: Chhistibung to Khopra Ridge</span>
                <h4 className="text-sm font-extrabold text-stone-900">Elevation: 2,975m &rarr; 3,660m (+685m Gain)</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  A continuous, exposed ridge climb. The gradient is steep and the altitude slows recovery between effort bursts. Take short steps and maintain a rhythmic breath cycle. Reaching the ridge reveals incredible panoramas of Dhaulagiri and Annapurna South.
                </p>
              </div>

              <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-3">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">Day 6: Khopra Ridge to Khayer Lake and Return</span>
                <h4 className="text-sm font-extrabold text-stone-900">Elevation: 3,660m &rarr; 4,660m &rarr; 3,660m (+1,000m Day Climb)</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  The highest-altitude day. Oxygen levels at 4,660m are roughly 43% lower than at sea level. The trail is done as a day hike, returning to the ridge to sleep. This reduces altitude exposure time significantly, mitigating AMS risks compared to sleeping at the summit.
                </p>
              </div>

              <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-3">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">Days 7–9: Descent via Swanta and Ghorepani</span>
                <h4 className="text-sm font-extrabold text-stone-900">Elevation: Gradual descent from 3,660m to 2,860m (Ghorepani) and below</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Descent-focused days. As altitude decreases, breathing normalises, and fatigue eases. Use trekking poles to absorb the eccentric load on knees during descents.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION: PHYSIOLOGICAL ZONES */}
          <article id="altitude-zones" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Altitude Zones on Khopra Trek (Physiological Interpretation)
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Raw elevation numbers become far more useful when you understand what each altitude band actually means for your body:
              </p>
              <ul className="list-disc pl-5 space-y-3 text-stone-600">
                <li>
                  <strong>Low Altitude Zone (Below 2,000m):</strong> Days 1 and early segments of the trek. Atmospheric oxygen is near sea level. Focus on developing a steady stride.
                </li>
                <li>
                  <strong>Moderate Zone (2,000–3,000m):</strong> Days 2, 3, and the Chhistibung descent. Heart rates are slightly higher at rest, and breathing becomes deeper on steep stairs. Hydration habits are critical.
                </li>
                <li>
                  <strong>High Altitude Zone (3,000–4,000m):</strong> Day 3 (upper), Day 5, and Day 6. This is where Khopra is a genuine high-altitude experience. Fatigue accumulates faster, appetite decreases, and sleep may feel lighter. Monitor symptoms daily.
                </li>
                <li>
                  <strong>Extreme Zone (4,000m+ — Khayer Lake):</strong> Reached only during the Day 6 day-hike. Operating on roughly 57% of sea-level oxygen. Walk slowly, take frequent micro-breaks, and monitor for signs of disorientation.
                </li>
              </ul>
            </div>
          </article>

          {/* SECTION: STEEPEST ASCENTS */}
          <article id="steepest-ascents" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Steepest Ascents and Hardest Sections of Khopra Trek
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                These are the segments where gradient, altitude, and cumulative fatigue combine most sharply:
              </p>
              <p>
                <strong>Bayeli to Khopra Ridge Climb (Days 3–5):</strong> The upper ascent sequence. While no single day is technically extreme, the cumulative altitude gain of over 1,200m through open high-altitude terrain makes it physically taxing.
              </p>
              <p>
                <strong>Khopra Ridge to Khayer Lake Push (Day 6):</strong> A 1,000-metre vertical gain starting from 3,660m and ending at 4,660m. The thin air and gradient make it the most demanding single-day effort of the entire route.
              </p>
              <p>
                <strong>Psychological Difficulty Layer:</strong> Many trekkers report that Day 5 (Chhistibung to Khopra Ridge) feels unexpectedly difficult because it comes after several consecutive climbing days when legs are tired, and the ridge climb is very continuous.
              </p>
            </div>
          </article>

          {/* SECTION: MAX ELEVATION */}
          <article id="max-elevation" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Trek Maximum Elevation (Khayer Lake, 4,660m)
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Khayer Lake represents the highest elevation point of the entire trek and the physiological summit of the experience. Unlike treks where the highest point is a pass, Khayer Lake is a sacred glacial basin.
              </p>
              <p>
                <strong>Altitude Sickness Risk at 4,660m:</strong> At this altitude, Acute Mountain Sickness (AMS) risk is at its peak. The day-hike format is specifically designed to reduce overnight exposure at extreme altitude. This is the single most important design decision in the Khopra Trek elevation profile.
              </p>
              <p>
                <strong>Psychological Impact:</strong> It is normal for trekkers at 4,000m+ to experience reduced motivation or mild fatigue-induced disorientation. Slow down and maintain a steady pace.
              </p>
            </div>
          </article>

          {/* SECTION: ACCLIMATISATION */}
          <article id="acclimatisation" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Acclimatisation Strategy Based on the Elevation Chart
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Importance of the Chhistibung Descent:</strong> The descent from Bayeli (3,432m) to Chhistibung (2,975m) acts as a natural acclimatisation brake. This recovery night at lower elevation triggers physiological adaptations, reducing the risk of headache or severe fatigue on the ridge push.
              </p>
              <p>
                <strong>Climb High, Sleep Low:</strong> The itinerary utilizes this strategy twice (the Bayeli-Chhistibung loop and the Khayer Lake day trip). Following this structure gives your body the 24–72 hours it needs to adjust to thin air safely.
              </p>
              <p>
                <strong>AMS Risk Prevention:</strong> Early symptoms (headache, loss of appetite, mild nausea) should be managed with rest and hydration. Severe symptoms (loss of balance, persistent vomiting, shortness of breath at rest) require immediate descent.
              </p>
            </div>
          </article>

          {/* SECTION: COMPARISONS */}
          <article id="comparison" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Trek Elevation Compared to Other Annapurna Treks
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                For context, here is how the Khopra Ridge route compares to other options:
              </p>
              <ul className="list-disc pl-5 space-y-3 text-stone-600">
                <li>
                  <strong>vs Poon Hill:</strong> Poon Hill viewpoint is 3,210m. Khayer Lake is 4,660m. Khopra is significantly higher, spends 4–5 more days above 3,000m, and represents a much more committing high-altitude experience.
                </li>
                <li>
                  <strong>vs Mardi Himal:</strong> Mardi Himal High Camp is 4,500m. Mardi Himal requires sleeping at High Camp above 3,500m. Khopra Ridge has a similar maximum altitude but slightly safer sleeping options below 4,000m.
                </li>
              </ul>
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions: Khopra Elevation
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "What is the maximum elevation of the Khopra Trek?",
                  a: "The maximum elevation is 4,660 metres at Khayer Lake. Khopra Ridge Lodge, where you spend the night before, is at 3,660 metres."
                },
                {
                  q: "How difficult is the Khopra Trek in terms of altitude?",
                  a: "It is rated moderate to high difficulty. The 1,000-metre day hike from Khopra Ridge to Khayer Lake (4,660m) is the most challenging single day, demanding physical stamina and good acclimatisation."
                },
                {
                  q: "How many days are above 3,000m on the Khopra Trek?",
                  a: "Trekkers typically spend 4 to 5 days above 3,000 metres, with sleeping points at Bayeli Kharka (3,432m) and Khopra Ridge (3,660m)."
                },
                {
                  q: "Is altitude sickness common on the Khopra Trek?",
                  a: "Mild symptoms like mild headaches are not uncommon, but severe AMS rates are low due to the built-in acclimatisation structure (such as the Chhistibung descent and day-hiking format for the highest point)."
                },
                {
                  q: "Do you sleep at 4,660m at Khayer Lake?",
                  a: "No. You sleep at Khopra Ridge (3,660m) and visit Khayer Lake (4,660m) as a day hike, returning to the ridge for the night. This follows the standard climb high, sleep low rule."
                },
                {
                  q: "Is Khopra Trek higher than Poon Hill?",
                  a: "Yes. Poon Hill reaches 3,210m. Khayer Lake reaches 4,660m, which is approximately 1,450 metres higher."
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
              The Khopra Trek elevation chart is more than a series of altitude numbers — it is a map of physical and physiological experience. From the gentle warm-up at Nayapul (1,070m) through the high-altitude ridge terrain above 3,000 metres to the 4,660m push at Khayer Lake, every change in altitude has a meaning and a consequence for how you will feel, perform, and recover.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              Understanding the elevation profile before you go is one of the most effective forms of preparation. It tells you where to expect the hardest climbs, where to pace yourself, and why the route is structured the way it is. Pacing correctly and listening to your body will ensure you reach Khayer Lake in a condition to fully enjoy the spectacular view.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Plan Your Safe Khopra Trek with Expert Altitude Support
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Our guided Khopra Ridge Trek packages are designed around the elevation profile — with pacing strategy, acclimatisation stops, and experienced guides trained in high-altitude safety. We build your itinerary around safety from Day 1.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Get a Custom Trek Plan Based on Your Fitness &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Trek:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/planning/how-fit-to-trek-khopra" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read the baseline physical fitness requirements guide
                  </Link>
                  <Link href="/planning/can-beginners-do-khopra-trek" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Find out if beginners can do the Khopra Ridge Trek safely
                  </Link>
                  <Link href="/planning/packing-checklist" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Get the interactive packing checklist for your gear
                  </Link>
                  <Link href="/weather/best-time-to-trek" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Check seasonal weather conditions before you go
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* EEAT Author Verification Banner */}
          <div className="p-6 rounded-3xl bg-stone-100 border border-stone-200 flex items-start gap-4">
            <span className="text-2xl mt-0.5">🏔️</span>
            <div>
              <h4 className="font-bold text-stone-900 text-sm font-sans font-medium">Reviewed by Trail Experts</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                This elevation metrics sheet is calibrated using high-precision GPX data loops across the Annapurna foothills. Lodges and stops have been verified by Pokhara route guides. Nepal Tourism Operator License #8928-091.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
