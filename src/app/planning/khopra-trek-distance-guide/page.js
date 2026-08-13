import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/planning/khopra-trek-distance-guide",
  },
  title: "Khopra Ridge Trek Distance & Pacing Guide | Nepal Trek Guide",
  description: "The complete Khopra Ridge Trek distance and pacing guide: total route length, day-by-day walking hours, elevation gain, and fitness tips to plan your trek.",
};

export default function Page() {
  const summarySpecs = [
    { label: "Total Loop Length", value: "68 km (42.2 mi)" },
    { label: "Daily Average", value: "7 - 8 km" },
    { label: "Hiking Hours / Day", value: "3 - 6 Hours" },
    { label: "Khayer Lake Side Trip", value: "16 km (RT)" }
  ];

  const dailyBreakdowns = [
    {
      day: 1,
      segment: "Pokhara to Ghandruk",
      dist: "4.5 km / 2.8 mi",
      time: "1.5 hours",
      elev: "+300m",
      desc: "Drive from Pokhara to Kimche roadhead, followed by a short trekking stretch on stone steps through terraced fields to Ghandruk village."
    },
    {
      day: 2,
      segment: "Ghandruk to Tadapani",
      dist: "9.2 km / 5.7 mi",
      time: "4 - 5 hours",
      elev: "+760m",
      desc: "Steady climbing through dense oak, moss, and rhododendron forests. Shaded, cool, but sustained vertical ascent."
    },
    {
      day: 3,
      segment: "Tadapani to Dobato",
      dist: "6.8 km / 4.2 mi",
      time: "3 - 4 hours",
      elev: "+732m",
      desc: "Leaves the main tour trails for quiet forest and ridge paths, entering high meadows with similar vertical gain packed into less distance."
    },
    {
      day: 4,
      segment: "Dobato to Chhistibung",
      dist: "4.5 km / 2.8 mi",
      time: "2 - 3 hours",
      elev: "-432m",
      desc: "Dropping through pine and rhododendron forest down to a mountain stream before the trail starts rising again. A gentle recovery day."
    },
    {
      day: 5,
      segment: "Chhistibung to Khopra Ridge",
      dist: "5.5 km / 3.4 mi",
      time: "3.5 - 4.5 hours",
      elev: "+660m",
      desc: "Steep alpine climb along open ridgelines. Fully exposed to wind and sun. The thinner air makes this short stage physically demanding."
    },
    {
      day: 6,
      segment: "Khopra Ridge to Khayer Lake (Round Trip)",
      dist: "16.0 km / 9.9 mi",
      time: "8 - 10 hours",
      elev: "+1,000m / -1,000m",
      desc: "Longest day by far. Crosses shale, scree, and exposed alpine slopes to reach the sacred glacial lake at 4,660m before returning to the ridge."
    },
    {
      day: 7,
      segment: "Khopra Ridge to Swanta",
      dist: "9.2 km / 5.7 mi",
      time: "4 hours",
      elev: "-1,446m",
      desc: "Massive descent. Jarring on the knees as the trail drops through bamboo groves, pastures, and farms to the cozy Magar village of Swanta."
    },
    {
      day: 8,
      segment: "Swanta to Ghorepani",
      dist: "7.0 km / 4.3 mi",
      time: "3.5 hours",
      elev: "+646m",
      desc: "Descend to a suspension bridge, then climb steeply back up to join the primary Poon Hill trekking route at Ghorepani village."
    }
  ];

  const trainingTips = [
    {
      title: "Stair Climbing",
      desc: "Closely mirrors the steep, sustained stone steps you will climb on Days 2, 3, and 8. Build quadriceps and calf strength."
    },
    {
      title: "Incline Hikes / Treadmill",
      desc: "Builds cardiovascular endurance and conditions your heart rate for long uphill pushes. Train with 8-15% incline targets."
    },
    {
      title: "Consecutive Day Training",
      desc: "Do back-to-back long hikes on weekends. Trains your body to perform on tired legs, which is crucial for a multi-day loop."
    },
    {
      title: "Weighted Pack Steps",
      desc: "Practice walking with the exact daypack weight you plan to carry on the trail. Helps adjust straps and prevents shoulder strain."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Pacing &amp; Mileage Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Khopra Ridge Trek Distance &amp; Daily Pacing Guide
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Kilometer count alone won&apos;t tell you how hard a day is. Learn to pace your vertical climbing hours and altitude progression like an expert.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl">
            {summarySpecs.map((spec, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
                <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">{spec.label}</span>
                <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">{spec.value}</span>
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
            <h3 className="text-xs font-black uppercase text-stone-400 tracking-wider pb-3 border-b border-stone-100">
              Table of Contents
            </h3>
            <nav className="flex flex-col gap-1 text-sm">
              <a href="#overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Distance Overview
              </a>
              <a href="#breakdown" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Daily Breakdown
              </a>
              <a href="#elevation" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Elevation Profile
              </a>
              <a href="#pacing" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Pacing Expectations
              </a>
              <a href="#hardest-days" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Hardest Sections
              </a>
              <a href="#khayer-lake" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Khayer Lake Leg
              </a>
              <a href="#fitness" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Fitness &amp; Training
              </a>
              <a href="#acclimatization" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Acclimatization Tips
              </a>
              <a href="#seasons" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Seasonal Pace Factors
              </a>
              <a href="#itineraries" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Itinerary Choices
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
                Request Custom Plan
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* SECTION 1: OVERVIEW */}
          <article id="overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Ridge Trek Distance Overview
            </h2>
            
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                The standard Khopra Ridge Trek loop covers approximately 68 km (42.2 miles), measured from the trailhead at Kimche through Ghandruk, Tadapani, Dobato, Chhistibung, Khopra Ridge, Swanta, and back to Ghorepani. That figure does not include the Khayer Lake side trip, which adds another 16 km round-trip if you choose to do it.
              </p>
              <p>
                This places Khopra Ridge in the mid-range among Annapurna treks — longer than the classic Poon Hill loop, but considerably shorter than Annapurna Base Camp or the Annapurna Circuit. The relatively modest distance is part of why the trek appeals to people with limited vacation time who still want a genuine high-altitude experience.
              </p>
              <p>
                Most itineraries run 7 to 9 days, including the drive from Pokhara and the return to Ghorepani or Nayapul. A standard pace covers the loop in 7 days. On a standard itinerary, you will average around 7-8 km per trekking day, with hiking time ranging from 1.5 hours on the shortest day to 8-10 hours on the Khayer Lake side trip.
              </p>
            </div>
          </article>

          {/* SECTION 2: DAILY BREAKDOWN */}
          <article id="breakdown" className="scroll-mt-12 space-y-8">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Complete Day-by-Day Distance Breakdown
            </h2>

            <div className="space-y-6">
              {dailyBreakdowns.map((d) => (
                <div key={d.day} className="flex gap-4 items-start relative pl-8 border-l border-stone-200 ml-4">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-emerald-100 rounded-full -left-4 ring-8 ring-white text-emerald-800 font-black text-xs shadow-sm">
                    {d.day}
                  </span>
                  <div className="w-full bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-extrabold text-stone-955 text-base">Day {d.day} – {d.segment}</h3>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-500/10">
                        {d.elev}
                      </span>
                    </div>
                    <div className="flex gap-4 text-xs font-semibold text-stone-400 uppercase tracking-wider">
                      <span>Distance: {d.dist}</span>
                      <span>•</span>
                      <span>Time: {d.time}</span>
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* SECTION 3: ELEVATION */}
          <article id="elevation" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Elevation Profile &amp; Daily Altitude Gain
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Distance tells you how far you are walking. Elevation tells you how hard that walking actually is. On Khopra Ridge, the two numbers often disagree with each other.
              </p>
              <p>
                Across the eight stages, elevation changes range from a gentle +300m on Day 1 to a steep +1,000m climb on the Khayer Lake day. The biggest single-day gains happen on Day 2 (+760m), Day 3 (+732m), and Day 5 (+660m) — three climbing days that, combined, account for over 2,100m of ascent in roughly 21 km of trail.
              </p>
              <p>
                <strong>Vertical Climbing Principle:</strong> A 9 km day with 760m of climbing is harder than a 16 km day on flat ground. Walking uphill at altitude burns significantly more energy per kilometer, and the body&apos;s oxygen demand increases as the climb gets steeper.
              </p>
            </div>
          </article>

          {/* SECTION 4: PACING */}
          <article id="pacing" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Daily Walking Hours &amp; Pacing Expectations
            </h2>
            <div className="grid gap-6 md:grid-cols-2 text-stone-600 text-sm leading-relaxed">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Pace for Beginners</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Plan on the slower end of every time estimate listed in this guide. Shorter, more frequent breaks work better than fewer long ones. Starting early, before the afternoon heat or cloud build-up, gives you a buffer.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Pace for Experienced Hikers</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Trekkers with prior high-altitude experience can generally trek toward the faster end of the time ranges. However, slow down on Day 5 and Day 6 — altitude affects pace regardless of fitness level.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 5: HARDEST DAYS */}
          <article id="hardest-days" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Which Day of the Khopra Ridge Trek Is the Hardest?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Two days compete for the title of hardest day on the route, for different reasons:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Chhistibung to Khopra Ridge (Day 5):</strong> Just 5.5 km, but a sustained, exposed climb up open ridgeline with minimal flat ground to recover on. Combine that steep grade with thinning air, and you get a day that consistently surprises trekkers.
                </li>
                <li>
                  <strong>The Khayer Lake Day (Day 6):</strong> Wins on sheer duration and altitude. An 8 to 10 hour round trip across loose scree and shale at the highest elevation of the trek. Wind and cold are far more noticeable here than lower on the route.
                </li>
              </ul>
            </div>
          </article>

          {/* SECTION 6: KHAYER LAKE */}
          <article id="khayer-lake" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khayer Lake Side Trip Distance &amp; Hiking Time
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The round-trip distance from Khopra Ridge to Khayer Lake and back is 16 km (9.9 miles), with roughly 1,000m of elevation gain on the way up and the same in descent on the return. Expect 8 to 10 hours for the full round trip, including time at the lake.
              </p>
              <p>
                <strong>Is it worth it?</strong> Yes. It is the scenic high point of the trip, with mountain views that the lower stages do not offer. However, it is optional, and trekkers short on time or recovering from a hard previous day can skip it.
              </p>
            </div>
          </article>

          {/* SECTION 7: FITNESS */}
          <article id="fitness" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Fitness Requirements &amp; Training Guide
            </h2>
            <div className="grid gap-6 md:grid-cols-2 text-stone-650 text-sm">
              {trainingTips.map((tip, idx) => (
                <div key={idx} className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                  <h4 className="font-bold text-stone-900 text-sm">{tip.title}</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              ))}
            </div>
          </article>

          {/* SECTION 8: ACCLIMATIZATION */}
          <article id="acclimatization" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Acclimatization and Altitude Considerations
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Mild symptoms — headache, fatigue, slight breathlessness on climbs — are fairly common above Khopra Ridge given the elevation reached on Days 5 and 6.
              </p>
              <p>
                The standard 7-day itinerary works for most fit trekkers, but anyone who is altitude-sensitive, traveling from sea level, or simply prefers a more comfortable pace should consider extending to 8 or 9 days. Adding a buffer day before the Khopra Ridge climb or the Khayer Lake push gives your body extra time to adjust.
              </p>
            </div>
          </article>

          {/* SECTION 9: SEASONS */}
          <article id="seasons" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How Weather Conditions Affect Daily Pacing
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-stone-600 text-sm">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">Autumn &amp; Spring</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  predictable trail conditions, dry underfoot, clear ridge views, and walking times that track closely with standard estimates.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">Winter (Dec-Feb)</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Brings cold temperatures and snow to higher sections, slowing pace considerably and occasionally closing the side trip.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">Monsoon (Jun-Aug)</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Wet, slippery, muddy trails. Leeches in the lower forest stages and poor visibility. Walking times run longer.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 10: ITINERARIES */}
          <article id="itineraries" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Itinerary Choices Based on Stamina
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-stone-600 text-sm">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">Fast 5-Day Version</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Suited to experienced, fit trekkers comfortable with long days. Combines several climbing stages. Highly demanding.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">Standard 7-Day Version</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  The most common option. Balances trekking time with reasonable rest. Works well for trekkers with moderate fitness.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">Relaxed 9-Day Version</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Built for beginners or altitude-sensitive trekkers. Splits the longer stages into more comfortable segments and adds buffer.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 11: COMPARISONS */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-955">How Khopra Ridge Trek Compares With Other Annapurna Treks</h2>
            <div className="grid gap-6 md:grid-cols-2 text-stone-600 text-sm leading-relaxed">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">vs. Poon Hill Trek</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Poon Hill is a 3-5 day trek with lower maximum altitude and gentler terrain. Khopra covers more total distance/elevation and includes the demanding Khayer Lake side trip.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">vs. Annapurna Base Camp Trek</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  ABC is longer (7-12 days) and reaches a higher final altitude, with comparable daily walking hours but longer cumulative distance. Khopra offers high altitude wilderness in a shorter timeframe.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 12: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Distance &amp; Pacing
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "How long is the Khopra Ridge Trek in total?",
                  a: "The standard loop covers approximately 68 km (42.2 miles), typically completed over 7 to 9 days depending on pace and rest days."
                },
                {
                  q: "How many kilometers do you walk each day on Khopra Trek?",
                  a: "Daily distances range from 4.5 km on the shortest stages to 16 km on the Khayer Lake side trip, averaging roughly 7-8 km per trekking day."
                },
                {
                  q: "What is the hardest day on Khopra Trek?",
                  a: "Most trekkers find Day 5 (Chhistibung to Khopra Ridge) and Day 6 (the Khayer Lake side trip) the most demanding, due to steep, exposed climbing and high-altitude terrain."
                },
                {
                  q: "How far is Khayer Lake from Khopra Ridge?",
                  a: "The round-trip distance is 16 km (9.9 miles), with about 1,000m of elevation gain and an 8 to 10 hour hiking time."
                },
                {
                  q: "Can beginners do the Khopra Ridge Trek?",
                  a: "Yes, with reasonable fitness and some hiking experience. Beginners are best suited to the 9-day relaxed itinerary, which spreads out the steeper stages and builds in extra rest time."
                },
                {
                  q: "Is altitude sickness common on this trek?",
                  a: "Mild symptoms are fairly common above Khopra Ridge given the elevation reached, though severe altitude sickness is less common than on higher routes. Pacing steadily and staying hydrated reduce the risk significantly."
                },
                {
                  q: "How fit should I be for Khopra Trek?",
                  a: "A baseline of cardiovascular fitness and comfort with 4-5 hour hikes on hilly terrain is a good starting point. Stair climbing and incline training in the weeks beforehand make a noticeable difference."
                },
                {
                  q: "How many hours do you hike per day?",
                  a: "Most days run 3 to 5 hours, with the shortest day at 1.5 hours and the Khayer Lake side trip running 8 to 10 hours."
                },
                {
                  q: "Is Khopra Trek harder than Poon Hill?",
                  a: "Yes. Khopra Ridge covers more distance and elevation gain, reaches a higher maximum altitude, and includes the demanding Khayer Lake side trip, making it a step up in difficulty from the shorter Poon Hill route."
                },
                {
                  q: "Do I need acclimatization days for Khopra Trek?",
                  a: "They're not strictly required on the standard 7-day itinerary, but adding a rest day before the Khopra Ridge climb or Khayer Lake push is recommended for altitude-sensitive trekkers or anyone coming from sea level."
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

          {/* SECTION 13: CONCLUSION */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-955">Conclusion</h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              The Khopra Ridge Trek&apos;s 68 km loop and 7-9 day duration make it a manageable commitment on paper, but the real story is in the elevation profile — steep ridge climbs, a high-altitude side trip to Khayer Lake, and one of the steeper descents in the Annapurna region all packed into a relatively compact distance.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              Understanding daily hiking hours and elevation gain behind each stage, rather than the kilometer count alone, is what actually prepares you for the trail.
            </p>
          </article>

          {/* SECTION 14: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Want a trekking schedule built around your fitness level?
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Consult a guide — we can shorten daily distances, add rest days, or restructure the route to match your pace and travel dates.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Consult our planners &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Trek:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/planning/khopra-trek-permits" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Check trekking permit requirements (ACAP &amp; TIMS)
                  </Link>
                  <Link href="/planning/khopra-trek-cost" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Estimate your trip costs with our cost calculator
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
                This guide is created and kept active by our team of local guides and travel planners based in Pokhara Lakeside and Swanta. We regularly check trail accessibility, jeep track conditions, and local permit regulations.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
