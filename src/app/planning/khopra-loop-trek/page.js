import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/planning/khopra-loop-trek",
  },
  title: "Khopra Loop Trek | Nepal Trek Guide",
  description: "Plan the full Khopra Loop Trek with our complete circuit guide. Explore the route, day-by-day itinerary, difficulty, permits, cost breakdown, and why this is.",
};

export default function Page() {
  const summarySpecs = [
    { label: "Duration", value: "9 Days" },
    { label: "Max Altitude", value: "3,660m (4,660m with Lake)" },
    { label: "Difficulty Grade", value: "Moderate to Challenging" },
    { label: "Lodging Style", value: "Community Teahouses" }
  ];

  const advantages = [
    {
      title: "Closed-Loop Pure Circuit",
      desc: "Every day of walking brings entirely new terrain, new villages, and new perspectives. You begin and end in different places without retracing a single step."
    },
    {
      title: "Crowd-Free Annapurna Experience",
      desc: "Shares some early terrain with ABC but quickly branches off onto trails that see only a fraction of the foot traffic. Walk in peaceful silence."
    },
    {
      title: "Deep Gurung & Magar Village Culture",
      desc: "Transition from the stone-paved Gurung lanes of Ghandruk to the quiet Magar agricultural settlements of Swanta, experiencing distinct customs."
    },
    {
      title: "100% Cooperative Tourism",
      desc: "Lodges are completely community-run. Accommodation and dining fees directly pay schoolteacher salaries and fund local medical clinics."
    }
  ];

  const itinerary = [
    {
      day: 1,
      title: "Pokhara to Kimche to Ghandruk",
      elev: "1,940m",
      time: "2 hr drive + 3 - 4 hours hike",
      desc: "Drive from Pokhara to the Kimche trailhead. Climb steadily through forests and terraced farms to Ghandruk Gurung village, which commands views of Annapurna South and Hiunchuli."
    },
    {
      day: 2,
      title: "Ghandruk to Tadapani",
      elev: "2,630m",
      time: "4 - 5 hours hike",
      desc: "Hike up through deep, mossy oak and rhododendron forest trails. In spring, the forest turns red, pink, and white. Reach the ridge-top settlement of Tadapani."
    },
    {
      day: 3,
      title: "Tadapani to Dobato",
      elev: "3,000m",
      time: "4 - 5 hours hike",
      desc: "Follow the quieter trail branching away from the main thoroughfare. Climb through pine forests to reach Dobato on an open ridgeline. Enjoy direct mountain sunset views."
    },
    {
      day: 4,
      title: "Dobato to Bayeli Kharka",
      elev: "3,432m",
      time: "3 - 4 hours hike",
      desc: "Trek across the high alpine meadows of the Bayeli region above the tree line. The short walking distance makes this a good, natural acclimatization day before the high ridge."
    },
    {
      day: 5,
      title: "Bayeli Kharka to Chhistibung to Khopra Ridge",
      elev: "3,660m (Chhistibung: 2,975m)",
      time: "5 - 7 hours hike",
      desc: "The most physically demanding day. Descend into a forested valley to Chhistibung, then climb steeply to the crest of Khopra Ridge. Catch sunset over Dhaulagiri."
    },
    {
      day: 6,
      title: "Optional Excursion to Sacred Khayer Lake",
      elev: "4,660m",
      time: "6 - 8 hours round trip",
      desc: "Climb steeply through boulder fields and alpine meadows to the sacred glacial lake at the foot of Annapurna South. Return to sleep at the community lodge on Khopra Ridge."
    },
    {
      day: 7,
      title: "Khopra Ridge to Swanta",
      elev: "2,200m",
      time: "4 - 5 hours hike",
      desc: "Descend steeply over 1,400m of altitude. Move from the high alpine ridge back into the terraced farmland and traditional Magar lifestyle of Swanta village."
    },
    {
      day: 8,
      title: "Swanta to Ghorepani",
      elev: "2,860m",
      time: "5 - 6 hours hike",
      desc: "Climb gradually through forested ridges and small settlements to rejoin the main trekking trail network at Ghorepani. Prepare for the early sunrise climb."
    },
    {
      day: 9,
      title: "Sunrise at Poon Hill and Descent to Nayapul",
      elev: "1,070m (Poon Hill: 3,210m)",
      time: "6 - 7 hours hike + drive",
      desc: "Hike up to Poon Hill (3,210m) for sunrise. Return to Ghorepani for breakfast, then complete the long descent to Nayapul. Drive back to Pokhara. Loop complete."
    }
  ];

  const elevationData = [
    { loc: "Pokhara", elev: "822m" },
    { loc: "Kimche (Trailhead)", elev: "1,640m" },
    { loc: "Ghandruk", elev: "1,940m" },
    { loc: "Tadapani", elev: "2,630m" },
    { loc: "Dobato", elev: "3,000m" },
    { loc: "Bayeli Kharka", elev: "3,432m" },
    { loc: "Chhistibung", elev: "2,975m" },
    { loc: "Khopra Danda / Ridge", elev: "3,660m" },
    { loc: "Khayer Lake", elev: "4,660m" },
    { loc: "Swanta", elev: "2,200m" },
    { loc: "Ghorepani", elev: "2,860m" },
    { loc: "Poon Hill", elev: "3,210m" },
    { loc: "Nayapul", elev: "1,070m" }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Closed-Loop Circuit
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Khopra Loop Trek: The Complete Circuit Guide
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            A true closed-loop circuit through the least-visited corners of the Annapurna Conservation Area, where you never repeat a single step of the trail.
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
                What Is The Loop?
              </a>
              <a href="#why-loop" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why Choose This Route?
              </a>
              <a href="#route-overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Route Direction &amp; Flow
              </a>
              <a href="#itinerary" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                9-Day Itinerary
              </a>
              <a href="#difficulty" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Difficulty &amp; Altitude
              </a>
              <a href="#accommodation" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Lodges &amp; Teahouses
              </a>
              <a href="#costs" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Cost Breakdown
              </a>
              <a href="#comparisons" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Khopra vs ABC Trek
              </a>
              <a href="#sustainability" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Cooperative Tourism
              </a>
              <a href="#packing" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Packing Checklist
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
                Inquire &amp; Book Tour
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* SECTION 1: WHAT IS THE LOOP */}
          <article id="overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What Is the Khopra Loop Trek?
            </h2>
            
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <h3 className="text-lg font-bold text-stone-900">Understanding the Complete Khopra Loop Circuit</h3>
              <p>
                The Khopra Loop Trek is a multi-day trekking circuit in the Annapurna region of western Nepal. Unlike an out-and-back route, this is a genuine closed loop — you begin and end in different places, and every single day of walking brings entirely new terrain, new villages, and new perspectives on the Annapurna and Dhaulagiri mountain ranges.
              </p>
              <p>
                The circuit covers roughly 80–90 kilometres of trail over 9 days. It moves through a remarkable series of landscapes: oak and rhododendron forests, high-altitude meadows, a sacred glacial lake, deep river gorges, and the terraced agricultural villages of both Gurung and Magar communities. No trail is repeated.
              </p>
              
              <h3 className="text-lg font-bold text-stone-900 mt-6">Where Is the Trek Located?</h3>
              <p>
                The trek sits within the Annapurna Conservation Area (ACAP), Nepal&apos;s largest protected area, southwest of the Annapurna Sanctuary. The closest gateway city is Pokhara. The trek typically begins with a short drive to Kimche and concludes with a return drive from Nayapul.
              </p>

              <h3 className="text-lg font-bold text-stone-900 mt-6">An Annapurna Hidden Gem</h3>
              <p>
                The Annapurna region attracts over 70,000 trekkers every year, but the vast majority follow two or three primary routes. The Khopra Loop sits just beyond the edge of that mainstream circuit — close enough to classic trailheads to be logistically easy, but far enough off the standard path to remain genuinely quiet.
              </p>
            </div>
          </article>

          {/* SECTION 2: WHY CHOOSE THE LOOP */}
          <article id="why-loop" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Choose the Khopra Loop Over Popular Nepal Treks?
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {advantages.map((item, i) => (
                <div key={i} className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                  <h4 className="font-extrabold text-stone-900 text-base">{item.title}</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </article>

          {/* SECTION 3: ROUTE DIRECTION & FLOW */}
          <article id="route-overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Complete Route Direction &amp; Flow
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The trek begins at Kimche and concludes at Nayapul. This point-to-point structure means you never repeat a section of trail.
              </p>
              <h3 className="text-base font-bold text-stone-900">Clockwise vs. Anti-Clockwise Route Options</h3>
              <p>
                We consistently recommend the <strong>clockwise direction</strong>. Walking clockwise means you begin with the ascent through Ghandruk and forest ridges to Dobato before reaching Bayeli Kharka and Khopra Ridge. This structure gives you a gradual, well-paced acclimatization profile.
              </p>
              <p>
                The anti-clockwise direction reverses this logic, causing you to gain altitude much more quickly, which increases the risk of altitude sickness early on.
              </p>
            </div>
          </article>

          {/* SECTION 4: ITINERARY */}
          <article id="itinerary" className="scroll-mt-12 space-y-8">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Complete 9-Day Khopra Loop Trek Itinerary
            </h2>

            <div className="space-y-6">
              {itinerary.map((d) => (
                <div key={d.day} className="flex gap-4 items-start relative pl-8 border-l border-stone-200 ml-4">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-emerald-100 rounded-full -left-4 ring-8 ring-white text-emerald-800 font-black text-xs shadow-sm">
                    {d.day}
                  </span>
                  <div className="w-full bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-extrabold text-stone-955 text-base">Day {d.day} – {d.title}</h3>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-500/10">
                        {d.elev}
                      </span>
                    </div>
                    <span className="block text-xs font-semibold text-stone-400 uppercase tracking-wider">Estimated Time: {d.time}</span>
                    <p className="text-stone-600 text-sm leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* SECTION 5: DIFFICULTY & ALTITUDE */}
          <article id="difficulty" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Trek Difficulty, Altitude &amp; Acclimatization
            </h2>
            <div className="space-y-6 text-sm text-stone-600">
              <p>
                The Khopra Loop Trek is rated moderate to challenging overall. Daily walking times range from 3 to 8 hours. The terrain includes forest trails, rocky ridgelines, and steep ascents.
              </p>

              <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm overflow-x-auto">
                <table className="min-w-full divide-y divide-stone-200 text-xs text-left">
                  <thead>
                    <tr className="text-stone-400 font-bold uppercase tracking-wider">
                      <th className="pb-3">Location</th>
                      <th className="pb-3 text-right">Altitude</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 font-medium">
                    {elevationData.map((item, idx) => (
                      <tr key={idx}>
                        <td className="py-2 text-stone-900 font-bold">{item.loc}</td>
                        <td className="py-2 text-right text-emerald-600">{item.elev}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                  <h4 className="font-bold text-stone-900">Highest Altitude Reached</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    If you complete the optional excursion to Khayer Lake, the highest point is 4,660 metres, where oxygen is reduced. If you skip the lake, the highest point is 3,660 metres at Khopra Ridge.
                  </p>
                </div>

                <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                  <h4 className="font-bold text-stone-900">Acclimatization Flow</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    The clockwise route structure naturally provides good pacing. Your body has several days of gradual gain before you reach the highest sections of the route.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* SECTION 6: LODGES & TEAHOUSE EXPERIENCE */}
          <article id="accommodation" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Accommodation, Food, and Teahouse Experience
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-stone-650 text-sm">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">Teahouse Setup</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Rooms are typically twin-share with basic foam mattresses and blankets. Shared bathroom facilities are standard across most of the route. Bring a sleeping bag liner.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">Hearty Meals</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Dal Bhat is the primary staple dish. Other items include noodle soups, fried rice, porridge, chapati, and eggs. Menus simplify as you gain altitude.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">Connectivity</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  WiFi is available in Ghandruk and Ghorepani. Charging is solar-powered (often for a fee). Cell service becomes limited or absent from Dobato onward.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 7: COSTS */}
          <article id="costs" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Loop Trek Cost Breakdown
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-stone-600 text-sm">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Independent Budget</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Budget approximately USD 25–40 per day on the trail for food and basic lodging. Over 9 days, expect USD 320–500 total (excluding flights &amp; gear).
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Guided Package</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Fully guided serviced packages range from USD 750 to USD 1,200 per person. This removes the logistical burden of booking rooms and permits.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Transport &amp; Permits</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Pokhara-Kimche jeep costs USD 20–40. Nayapul-Pokhara returns are USD 10–20. ACAP Permit costs USD 30. Ensure your insurance covers helicopter rescue.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 8: KHOPRA VS ABC TREK */}
          <article id="comparisons" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Loop Trek vs. Annapurna Base Camp Trek
            </h2>
            <div className="grid gap-6 md:grid-cols-2 text-stone-600 text-sm leading-relaxed">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Scenic Value &amp; Views</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  ABC places you inside a giant mountain sanctuary amphitheatre. Khopra Ridge offers wide-open panoramic sweeps of both the Dhaulagiri and Annapurna massifs simultaneously.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Crowd Level &amp; Culture</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  ABC is heavily crowded during peak months. The Khopra Loop sees a tiny fraction of that traffic. Additionally, Khopra integrates authentic Magar village homestays and community cooperative lodge stays.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 9: SUSTAINABILITY */}
          <article id="sustainability" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Is the Khopra Trek a Sustainable Community Trek?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Every teahouse on the loop is community-owned. Revenue is pooled and used to fund teacher salaries, local clinics, and school infrastructure. It directly supports local Gurung and Magar village economies.
              </p>
              <p>
                Choosing the Khopra Loop is a direct way to support responsible mountain eco-tourism that invests in the preservation of the Annapurna foothills.
              </p>
            </div>
          </article>

          {/* SECTION 10: PACKING */}
          <article id="packing" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Essential Packing List for Khopra Loop Trek
            </h2>
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
              <div className="grid gap-6 md:grid-cols-3 text-xs text-stone-650">
                <div>
                  <h5 className="font-bold text-stone-900 uppercase tracking-wider mb-2">Clothing Layers</h5>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Moisture-wicking base layers</li>
                    <li>Insulating down jacket/fleece</li>
                    <li>Waterproof/windproof outer shell</li>
                    <li>Warm beanie &amp; gloves</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-stone-900 uppercase tracking-wider mb-2">Trekking Equipment</h5>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Broken-in boots with ankle support</li>
                    <li>Adjustable trekking poles</li>
                    <li>Sleeping bag liner</li>
                    <li>Headlamp with spare batteries</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-stone-900 uppercase tracking-wider mb-2">Health &amp; Safety</h5>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Water purification tablets/filter</li>
                    <li>First-aid kit &amp; blister care</li>
                    <li>Diamox (consult a doctor)</li>
                    <li>Sunscreen &amp; lip balm</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          {/* SECTION 11: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About the Khopra Loop Trek
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "How difficult is the Khopra Loop Trek?",
                  a: "The Khopra Loop Trek is rated moderate to challenging. Daily hiking times range from 3 to 7 hours. The most demanding day is Day 5, with a significant ascent to the Khopra Ridge at 3,660 metres. The optional Khayer Lake excursion is strenuous. Fit hikers with prior experience will manage well; complete beginners should undertake preparation training."
                },
                {
                  q: "How many days does the Khopra Loop Trek take?",
                  a: "The standard itinerary is 9 days including the Khayer Lake excursion day. A shorter 7-day version is possible by combining some stages. Extending to 10 or 11 days allows for a more relaxed pace, particularly useful for acclimatization."
                },
                {
                  q: "Can beginners do the Khopra Loop Trek?",
                  a: "The trek is achievable for motivated beginners, but not without preparation. A minimum of 6–8 weeks of regular cardio and hiking training is strongly recommended. Booking with a licensed local guide also significantly improves safety and enjoyment for those without prior Himalayan experience."
                },
                {
                  q: "Is Khayer Lake included in the standard itinerary?",
                  a: "Khayer Lake is offered as an optional excursion on Day 6 of the standard 9-day itinerary. It is a strenuous full-day return hike from the Khopra Ridge to 4,660 metres. We strongly recommend completing it if weather and fitness allow — the sacred lake and surrounding views are genuinely exceptional."
                },
                {
                  q: "How much does the Khopra Loop Trek cost?",
                  a: "Independent trekkers can expect to spend approximately USD 320–500 for the full 9-day circuit, excluding flights to Nepal. A fully guided all-inclusive package including guide, permits, accommodation, and meals typically ranges from USD 750 to USD 1,200 per person."
                },
                {
                  q: "Can I do the Khopra Trek without a guide?",
                  a: "Independent trekking is technically possible, but the route is less clearly marked than the main Annapurna trails, and sections above Dobato can be difficult to navigate without local knowledge, particularly in poor visibility or early spring snow. A licensed local guide adds safety, cultural context, and meaningful support — and their fee goes directly into the local economy."
                },
                {
                  q: "Which season is best for the Khopra Loop Trek?",
                  a: "October and November (autumn) and March to early April (spring) are the two best seasons. Autumn offers the clearest mountain views. Spring adds the extraordinary rhododendron bloom along the lower route. Both seasons are excellent. Winter is possible but cold. Monsoon season is not recommended."
                },
                {
                  q: "Is the Khopra Loop better than the Annapurna Base Camp Trek?",
                  a: "These are different experiences suited to different preferences. If you want an immersive inside-the-sanctuary experience and do not mind a busier trail, ABC is outstanding. If you prefer a quieter, complete loop with diverse cultural encounters, broader mountain panoramas, and a sustainable tourism model, the Khopra circuit is the stronger choice. We think Khopra is significantly underrated."
                },
                {
                  q: "What is the highest altitude on the Khopra Loop Trek?",
                  a: "The highest mandatory point is the Khopra Danda ridge at 3,660 metres. With the optional Khayer Lake excursion, the highest point reached is 4,660 metres."
                },
                {
                  q: "Is the Khopra Loop Trek crowded?",
                  a: "No. The Khopra circuit sees a fraction of the foot traffic of the Annapurna Base Camp or Poon Hill routes. Once beyond Tadapani, you are unlikely to encounter large groups of trekkers. The higher sections — Bayeli Kharka, the Khopra Ridge, and the Swanta descent — are genuinely remote and quiet even at peak season."
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

          {/* SECTION 12: CONCLUSION */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-955">Conclusion</h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              The Khopra Loop Trek earns its place among Nepal&apos;s finest trekking experiences not because it is famous, but because it is genuine. It is a complete circuit that takes you through the full range of what the Annapurna foothills have to offer — forest, ridge, high alpine terrain, sacred lake, cultural villages, and the iconic Poon Hill sunrise — all without a single repeated trail or landscape.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              If you are looking for an Annapurna trekking experience that goes beyond the expected, the Khopra Loop circuit is one of the best answers Nepal has to offer.
            </p>
          </article>

          {/* SECTION 13: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Ready to Trek the Khopra Loop?
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                We operate fully guided Khopra Loop Trek packages with licensed local guides, all permits arranged, community teahouse accommodation throughout, and complete logistics from Pokhara and back.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Inquire Now &rarr;
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
                Licensed Nepal Tourism Operator | info@khopraridgetrek.com | Pokhara &amp; Swanta, Nepal. This circuit guide is reviewed and kept active by mountain guides with deep expertise in the Gurung and Magar village loop.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
