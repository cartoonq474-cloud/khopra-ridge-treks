import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/planning/khopra-trek-via-ghorepani",
  },
  title: "Khopra Trek via Ghorepani | Nepal Trek Guide",
  description: "Planning the Khopra Trek via Ghorepani? Get the full route breakdown, day-by-day itinerary, difficulty level, permits, cost, and Khayer Lake extension guide.",
};

export default function Page() {
  const summarySpecs = [
    { label: "Duration", value: "8 - 10 Days" },
    { label: "Max Altitude", value: "3,660m (4,660m with Lake)" },
    { label: "Difficulty Grade", value: "Moderate - Challenging" },
    { label: "Lodging Style", value: "Teahouses & Community" }
  ];

  const advantages = [
    {
      title: "Famous Poon Hill Sunrise",
      desc: "Watch the sunrise over Dhaulagiri and Annapurna South from the iconic 3,210m Poon Hill watchtower before heading off the beaten track."
    },
    {
      title: "Less Crowded Annapurna Trail",
      desc: "Turn off the busy teahouse loop toward Swanta and Chhistibung to experience peaceful, empty forest trails and serene alpine pasture environments."
    },
    {
      title: "Community Lodge Cooperative",
      desc: "Stay in community-owned cooperative lodges where your accommodation and dining fees directly fund local schools, health posts, and village infrastructure."
    },
    {
      title: "Poon Hill & Khopra Combo",
      desc: "Combine the best classic viewpoints with raw wilderness and the sacred high-altitude pilgrimage site of Khayer Lake (4,660m)."
    }
  ];

  const itinerary = [
    {
      day: 1,
      title: "Pokhara – Nayapul – Ulleri",
      elev: "2,050m",
      time: "5 - 6 hours",
      desc: "Start with a 1-hour drive from Pokhara to Nayapul, then climb the Modi Khola valley, finishing with the steep 3,000 stone steps up to Ulleri. Overnight in Ulleri."
    },
    {
      day: 2,
      title: "Ulleri – Ghorepani",
      elev: "2,874m",
      time: "4 - 5 hours",
      desc: "Ascend steadily through dense oak and rhododendron forest canopy, which bursts with color in spring. Arrive at the prominent village of Ghorepani."
    },
    {
      day: 3,
      title: "Poon Hill sunrise – Ghorepani – Swanta",
      elev: "2,214m (Poon Hill: 3,210m)",
      time: "6 - 7 hours",
      desc: "Wake early for a 45-min sunrise climb to Poon Hill (3,210m). Descend for breakfast, then branch off the main loop, dropping into the forest to Swanta village."
    },
    {
      day: 4,
      title: "Swanta – Chhistibung",
      elev: "3,002m",
      time: "5 - 6 hours",
      desc: "A demanding day climbing over 800m of elevation. Hike up steep forest tracks and open hillsides to the quiet settlement of Chhistibung."
    },
    {
      day: 5,
      title: "Chhistibung – Khopra Ridge",
      elev: "3,660m",
      time: "4 - 5 hours",
      desc: "Ascend past the tree line into open alpine pastures. Climb steadily to the spectacular crest of Khopra Ridge. Catch sunset over the massive wall of Dhaulagiri."
    },
    {
      day: 6,
      title: "Optional Khayer Lake Excursion (return)",
      elev: "4,660m",
      time: "7 - 8 hours",
      desc: "A long, high-altitude day hike up to the sacred Khayer Lake (4,660m) under the face of Annapurna South, then return to sleep at Khopra Ridge."
    },
    {
      day: 7,
      title: "Khopra Ridge – Swanta (return)",
      elev: "2,214m",
      time: "6 - 7 hours",
      desc: "Begin your descent down the steep ridge path, passing back through Chhistibung and returning to the Magar community of Swanta village."
    },
    {
      day: 8,
      title: "Swanta – Ghorepani – Tikhedhunga",
      elev: "1,540m",
      time: "6 - 7 hours",
      desc: "Hike back up toward the Ghorepani ridge before dropping down the long stone steps towards Tikhedhunga. Overnight in a local teahouse."
    },
    {
      day: 9,
      title: "Tikhedhunga – Nayapul – Pokhara",
      elev: "Descent to Pokhara",
      time: "3 - 4 hours + drive",
      desc: "Complete the final, gentle hiking section back down to Nayapul. Board your private jeep or bus transfer back to lakeside Pokhara."
    }
  ];

  const elevationData = [
    { loc: "Nayapul", elev: "1,070m" },
    { loc: "Ulleri", elev: "2,050m" },
    { loc: "Ghorepani", elev: "2,874m" },
    { loc: "Poon Hill", elev: "3,210m" },
    { loc: "Swanta Village", elev: "2,214m" },
    { loc: "Chhistibung", elev: "3,002m" },
    { loc: "Bayeli Kharka", elev: "3,180m" },
    { loc: "Khopra Ridge", elev: "3,660m" },
    { loc: "Khayer Lake", elev: "4,660m" }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Poon Hill Combo Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Khopra Trek via Ghorepani: Complete Route Planning Guide
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            If you want to watch the sunrise from Poon Hill and still end your trip somewhere most trekkers never reach, the Khopra Trek via Ghorepani is the route that lets you do both.
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
                What Is The Trek?
              </a>
              <a href="#why-ghorepani" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why Start via Ghorepani?
              </a>
              <a href="#route-nodes" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Route Overview
              </a>
              <a href="#itinerary" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Day-by-Day Itinerary
              </a>
              <a href="#difficulty" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Difficulty &amp; Fitness
              </a>
              <a href="#altitude" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Altitude Profile
              </a>
              <a href="#khayer-lake" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Khayer Lake Hike
              </a>
              <a href="#accommodation" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Accommodation &amp; Food
              </a>
              <a href="#permits" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Permits Required
              </a>
              <a href="#costs" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Cost Breakdown
              </a>
              <a href="#seasons" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Best Seasons to Go
              </a>
              <a href="#packing" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Packing Checklist
              </a>
              <a href="#comparisons" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Route Comparisons
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
          {/* SECTION 1: OVERVIEW */}
          <article id="overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What Is the Khopra Trek via Ghorepani?
            </h2>
            
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <h3 className="text-lg font-bold text-stone-900">Overview of the Ghorepani to Khopra Ridge Route</h3>
              <p>
                The Khopra Trek via Ghorepani is a route variation of the broader Khopra Ridge Trek. Instead of approaching Khopra directly from Ghandruk or Tadapani, you start the classic Poon Hill trail from Nayapul, climb through Ulleri to Ghorepani, and continue north past the standard loop. From Ghorepani, the trail drops into a forested valley toward Swanta village, then climbs steadily through Chhistibung and Bayeli Kharka up to the open ridge at Khopra, roughly 3,660 meters above sea level.
              </p>
              <p>
                The trek typically takes 8 to 10 days round trip from Pokhara, depending on your pace and whether you add the Khayer Lake extension. It&apos;s a teahouse trek throughout, meaning you sleep in local lodges rather than camping, and most of the route falls inside the Annapurna Conservation Area.
              </p>
              
              <h3 className="text-lg font-bold text-stone-900 mt-6">Why Trekkers Choose This Route Variation</h3>
              <p>
                Most visitors to the Annapurna region only do the Poon Hill trek, a short 3-4 day loop that&apos;s become one of the busiest trails in Nepal during peak season. The Ghorepani entry to Khopra gives you that same iconic sunrise experience, then takes you somewhere the crowds don&apos;t follow. After Ghorepani, the trail volume drops sharply — Swanta and Chhistibung see a fraction of the foot traffic that Ghorepani does.
              </p>
              <p>
                This changes the feel of the trek entirely, from a busy teahouse circuit to a quiet community trail through Magar villages. It also means lodge availability is more relaxed past Ghorepani, even in high season, since the route hasn&apos;t been overrun.
              </p>

              <h3 className="text-lg font-bold text-stone-900 mt-6">Who This Trek Is Best For</h3>
              <p>
                This route suits trekkers who:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-stone-500 font-medium">
                <li>Want the Poon Hill sunrise without skipping a genuinely offbeat trekking experience.</li>
                <li>Have moderate trekking fitness and at least one previous multi-day hike under their belt.</li>
                <li>Prefer community-run lodges and authentic village interaction over busy teahouse strips.</li>
                <li>Have 8-10 days available, including buffer days for weather or altitude pacing.</li>
              </ul>
              <p className="text-xs font-semibold text-emerald-700 mt-2">
                If you only have 3-4 days, the standard Poon Hill loop alone makes more sense. If you have already done Poon Hill and want a longer, quieter alpine trek, entering Khopra from Ghandruk is also worth comparing.
              </p>
            </div>
          </article>

          {/* SECTION 2: WHY GHAREPANI */}
          <article id="why-ghorepani" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Choose the Ghorepani Route Instead of the Standard Khopra Trek?
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

          {/* SECTION 3: ROUTE NODES */}
          <article id="route-nodes" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Complete Khopra Trek Route via Ghorepani
            </h2>
            <div className="space-y-6 text-sm text-stone-600">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Nayapul to Ulleri</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  The trek begins at Nayapul (1,070m), about an hour&apos;s drive from Pokhara. From here, the trail follows the Modi Khola river through Birethanti before climbing toward Ulleri. The final stretch into Ulleri (2,050m) is the famous stone staircase — roughly 3,000 steps cut into the hillside, gaining nearly 1,000 meters over a few hours. Expect 5-6 hours of walking on this first day.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Ulleri to Ghorepani</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  From Ulleri, the trail eases into dense rhododendron and oak forest as it climbs toward Ghorepani (2,874m). In spring, this forest section turns red and pink with blooming rhododendron, Nepal&apos;s national flower. The walk takes around 4-5 hours and is steady rather than punishing.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Sunrise Hike to Poon Hill</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  From Ghorepani, most trekkers wake before dawn — typically around 4:30 AM — for the 45-minute climb to Poon Hill at 3,210 meters. The watchtower at the summit gives a 360-degree view of the Annapurna and Dhaulagiri ranges as the sun rises. After taking in the view, you descend back to Ghorepani for breakfast.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Ghorepani to Swanta Village</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  This is where the route diverges from the standard Poon Hill loop. Instead of heading back toward Tadapani, the trail drops steeply through forest into the valley below, losing significant elevation before reaching Swanta village at 2,214 meters. The descent takes 5-6 hours and serves as a natural breathing break.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Swanta Village to Chhistibung</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  From Swanta, the trail turns upward again, climbing steadily through forest and open hillside toward Chhistibung. This is one of the more demanding days on the trek — a sustained uphill push that gains over 1,000 meters in elevation across 5-6 hours of walking.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Chhistibung to Bayeli Kharka to Khopra Ridge</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  The final approach continues climbing through Bayeli Kharka and onto the exposed ridge at Khopra (3,660m). The forest thins out as you gain altitude, giving way to open alpine terrain with sweeping views of Dhaulagiri, Annapurna South, and the Nilgiri range. This section typically takes 4-5 hours.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 4: ITINERARY */}
          <article id="itinerary" className="scroll-mt-12 space-y-8">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Detailed Khopra Trek via Ghorepani Itinerary
            </h2>

            <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-3xl text-emerald-950 text-xs">
              <strong>9-Day Balanced Itinerary:</strong> The 9-day version is the one we recommend for most trekkers. It builds in a single buffer night at Khopra Ridge, giving you a full day to explore the ridge, take photos in better light, or simply rest. We also cover an 8-day compressed version and a 10-day option for the Khayer Lake day hike.
            </div>

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

          {/* SECTION 5: DIFFICULTY & FITNESS */}
          <article id="difficulty" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Trek Difficulty and Fitness Level
            </h2>
            <div className="space-y-6 text-sm text-stone-600">
              <p>
                This route sits in the moderate-to-challenging range. It&apos;s more demanding than the standard 3-4 day Poon Hill loop because of the extended distance, the steep descent and re-ascent between Ghorepani and Khopra Ridge, and the altitude gain above 3,600 meters.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                  <h4 className="font-bold text-stone-900">The Ulleri Stone Stairs</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    The Ulleri staircase on day one is often the part trekkers remember most — not because it&apos;s dangerous, but because it&apos;s relentless. Nearly 1,000 meters of elevation gain on stone steps in a single afternoon tests your legs and lungs early.
                  </p>
                </div>

                <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                  <h4 className="font-bold text-stone-900">The Climb to Khopra Ridge</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    The Swanta-to-Chhistibung-to-Khopra stretch is the toughest section of the entire route. You&apos;re climbing over 1,400 meters across two days, often on narrow forest trail, after already losing significant elevation on the descent from Ghorepani.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Can Beginners Do This Trek?</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  A complete beginner with no hiking background will find this trek difficult, though not impossible with the right preparation. If you&apos;ve done at least one multi-day hike before and have reasonable cardiovascular fitness, you should manage it comfortably with a sensible pace. We generally recommend some hiking experience before attempting this specific route.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 6: ALTITUDE PROFILE */}
          <article id="altitude" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Altitude Profile and Acclimatization Guide
            </h2>
            <div className="space-y-6 text-sm text-stone-600">
              <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm overflow-x-auto">
                <table className="min-w-full divide-y divide-stone-200 text-xs text-left">
                  <thead>
                    <tr className="text-stone-400 font-bold uppercase tracking-wider">
                      <th className="pb-3">Location</th>
                      <th className="pb-3 text-right">Elevation</th>
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

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Where Altitude Sickness Can Become a Concern</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Altitude sickness risk on this route is moderate rather than severe, since the trek stays below 4,000 meters except for the optional Khayer Lake extension. That said, the jump from Ghorepani down to Swanta and back up to Khopra Ridge means your body experiences real elevation swings in a short period, which can still trigger mild symptoms.
                </p>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">
                  <strong>Acclimatization Tips:</strong> Drink more water than feels necessary — dehydration mimics and worsens altitude symptoms. Walk at a pace where you can hold a conversation, and if you&apos;re adding the Khayer Lake extension, treat that day as a true high-altitude push requiring an early start.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 7: KHAYER LAKE */}
          <article id="khayer-lake" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Optional Side Trip to Khayer Lake
            </h2>
            <div className="space-y-6 text-sm text-stone-600 leading-relaxed">
              <p>
                Khayer Lake (also called Khayer Baraha Lake) sits at roughly 4,660 meters above Khopra Ridge and holds religious significance for both Hindu and Buddhist communities in the region.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                  <h4 className="font-bold text-stone-900">Difficulty of the Day Hike</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    This is a genuine high-altitude day hike, gaining roughly 1,000 meters from Khopra Ridge and covering 6-7 hours round trip on rocky, exposed terrain. It should only be attempted by trekkers who feel strong and symptom-free at Khopra Ridge.
                  </p>
                </div>

                <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                  <h4 className="font-bold text-stone-900">Is the Extension Worth It?</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    If your schedule and fitness allow it, yes. The views from near the lake rival or exceed those from Khopra Ridge itself, with a more complete panorama of Dhaulagiri. If you are short on time, skipping it doesn&apos;t diminish the core trek.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* SECTION 8: ACCOMMODATION & FOOD */}
          <article id="accommodation" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Accommodation and Food During the Trek
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-stone-650 text-sm">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">Community Lodges</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Past Ghorepani, many of the lodges — particularly Swanta and Khopra Ridge — operate under community cooperative ownership models. Profits from accommodation fund local schools and clinics.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">Teahouse Setup</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Rooms are simple twin beds with shared bathrooms down the hall. Dining rooms have wood stoves. Bring a sleeping bag rated for sub-zero temperatures, especially for the high ridge nights.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">Meals &amp; Water</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Dal Bhat is the classic high-energy staple. Menus also offer basic noodle soups, fried rice, porridge, and eggs. Avoid plastic waste by filtering or treating your own drinking water.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 9: PERMITS */}
          <article id="permits" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Permits Required for Khopra Trek via Ghorepani
            </h2>
            <div className="grid gap-6 md:grid-cols-2 text-sm text-stone-600 leading-relaxed">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">ACAP Permit</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  The entire route falls within the Annapurna Conservation Area, so the ACAP permit is mandatory for every trekker. This funds conservation work and community development across the region.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">TIMS Card</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  The Trekkers&apos; Information Management System (TIMS) card is also required and exists primarily for trekker safety and tracking purposes. Expect checkpoints like the one near Birethanti.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 10: COSTS */}
          <article id="costs" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Trek Cost Breakdown
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-stone-600 text-sm">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Independent</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Budget roughly USD 25-35 per day for accommodation, meals, plus government permit fees and ground transport to and from Nayapul.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Guided Package</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Guided packages add guide/porter fees, permit handling, accommodation pre-booking, and private transport, greatly simplifying logistics.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Lodging System</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Teahouses charge very little for rooms but make margins on meals. Carry cash in Nepalese Rupees as cards are not accepted on trail.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 11: SEASONS */}
          <article id="seasons" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Time to Do the Khopra Trek via Ghorepani
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-500/10 uppercase">Spring (Mar - May)</span>
                <h4 className="font-bold text-stone-900">Spring</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Spring is prized for the rhododendron forests blooming red and pink along the Ulleri-to-Ghorepani section. Daytime temperatures are pleasant for walking.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-500/10 uppercase">Autumn (Sep - Nov)</span>
                <h4 className="font-bold text-stone-900">Autumn</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Autumn is generally considered the best season for mountain visibility, with clear skies and stable weather following the monsoon.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-500/10 uppercase">Winter (Dec - Feb)</span>
                <h4 className="font-bold text-stone-900">Winter</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Winter brings cold temperatures, especially at Khopra Ridge and above, with occasional snowfall. Visibility is crisp but trails can be icy.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-500/10 uppercase">Monsoon (Jun - Aug)</span>
                <h4 className="font-bold text-stone-900">Monsoon</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Monsoon is the most challenging season, with frequent rain, slippery trail sections, leeches in the forest, and clouds that obscure mountain views.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 12: PACKING */}
          <article id="packing" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Packing List for the Khopra Trek
            </h2>
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
              <div className="grid gap-6 md:grid-cols-3 text-xs text-stone-650">
                <div>
                  <h5 className="font-bold text-stone-900 uppercase tracking-wider mb-2">Clothing Layers</h5>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Moisture-wicking base layers</li>
                    <li>Warm fleece or mid-layer (down)</li>
                    <li>Waterproof/windproof outer shell</li>
                    <li>Warm hat &amp; gloves for elevation</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-stone-900 uppercase tracking-wider mb-2">Trekking Gear</h5>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Sturdy, broken-in trekking boots</li>
                    <li>Adjustable trekking poles</li>
                    <li>Headlamp (essential for Poon Hill)</li>
                    <li>Sub-zero rated sleeping bag</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-stone-900 uppercase tracking-wider mb-2">Health &amp; Safety</h5>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>First-aid kit &amp; blister plasters</li>
                    <li>Water purification filter or tablets</li>
                    <li>Sun protection (strong alpine UV)</li>
                    <li>High-altitude travel insurance copy</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          {/* SECTION 13: COMPARISONS */}
          <article id="comparisons" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Trek via Ghorepani vs Standard Khopra Trek Route
            </h2>
            <div className="grid gap-6 md:grid-cols-2 text-stone-600 text-sm leading-relaxed">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Route &amp; Scenic Comparison</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  The Ghorepani entry adds extra distance and elevation change since you are combining two route systems. However, it wins on variety — you get the iconic wide sunrise panorama from Poon Hill plus the empty, high alpine ridge views from Khopra.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Crowd Level Comparison</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Both routes converge past Chhistibung, but the Ghorepani approach means spending the first two days on the busier Poon Hill circuit. If avoiding crowds from day one is your top priority, the direct Ghandruk entry skips the busy section entirely.
                </p>
              </div>
            </div>

            <div className="bg-stone-100 border border-stone-200 p-6 rounded-3xl text-stone-800 text-xs">
              <strong>Emergency Planning:</strong> Travel insurance that explicitly covers trekking at altitudes above 3,000 meters, including helicopter evacuation, is essential. Confirm your policy covers Khayer Lake (4,660m) if you plan that extension.
            </div>
          </article>

          {/* SECTION 14: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Ghorepani Route
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "How many days does the Khopra Trek via Ghorepani take?",
                  a: "Most itineraries run 8 to 10 days round trip from Pokhara, depending on your pace and whether you add the Khayer Lake extension. The 9-day version, with one buffer day at Khopra Ridge, suits most trekkers best."
                },
                {
                  q: "Can I combine Poon Hill with Khopra Trek?",
                  a: "Yes — that's exactly what this route does. You hike the standard Poon Hill trail through Ulleri and Ghorepani first, then continue past the usual loop toward Swanta and up to Khopra Ridge instead of returning to Nayapul early."
                },
                {
                  q: "Is Khopra Trek suitable for beginners?",
                  a: "It's manageable for beginners with reasonable fitness and at least one prior multi-day hike, but it's more demanding than the short Poon Hill loop alone. The steep stairs to Ulleri and the climb from Swanta to Khopra Ridge are the two sections that test trekkers most."
                },
                {
                  q: "How difficult is the Swanta to Khopra climb?",
                  a: "This is the toughest stretch of the trek, gaining over 1,400 meters across two days on steady uphill trail. Pacing yourself and staying hydrated matters more here than anywhere else on the route."
                },
                {
                  q: "How much does the trek cost?",
                  a: "Independent trekkers typically spend roughly USD 300-450 over 8-9 days, covering teahouse accommodation, meals, and permits. Guided trek costs vary by operator and group size, and add guide and porter fees on top of those base expenses."
                },
                {
                  q: "Do I need a guide for Khopra Trek?",
                  a: "A guide isn't legally mandatory for this specific route, but it's strongly recommended given how much quieter and less marked the trail becomes past Ghorepani. A local guide also simplifies permit logistics and lodge bookings along the community-run sections."
                },
                {
                  q: "Is Khayer Lake worth visiting?",
                  a: "Yes, if your fitness and schedule allow the extra day — the views near the lake rival those from Khopra Ridge itself. It's a genuine high-altitude push at 4,660 meters, so it's best attempted only if you're feeling strong and symptom-free."
                },
                {
                  q: "Which is better, direct Khopra Trek or Ghorepani route?",
                  a: "The Ghorepani route is better if you want the Poon Hill sunrise included; the direct Ghandruk or Tadapani entry is better if you've already done Poon Hill or want a fully quiet trek from day one. Both converge on the same trail past Chhistibung."
                },
                {
                  q: "What permits are required for Khopra Trek?",
                  a: "You need an Annapurna Conservation Area Project (ACAP) permit and a TIMS card, both checked at a checkpoint near Birethanti early in the trek. Carry physical copies of both throughout the journey."
                },
                {
                  q: "What is the best month to do the trek?",
                  a: "October and November offer the clearest mountain visibility, while March to May brings blooming rhododendron forests along the lower trail. Both are considered peak seasons; winter is colder but quieter, and monsoon is best avoided due to rain and limited visibility."
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

          {/* SECTION 15: CONCLUSION */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-955">Conclusion</h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              The Khopra Trek via Ghorepani gives you something genuinely rare in the Annapurna region: the classic Poon Hill sunrise and a real offbeat trekking experience in the same trip. You get the bucket-list viewpoint everyone talks about, then you leave the crowds behind for community-run lodges, Magar villages, and an alpine ridge that most visitors to Nepal never see.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              This isn&apos;t a trek to wing. The route demands moderate-to-good fitness, careful pacing through the Swanta-to-Khopra climb, and proper preparation around permits, altitude, and gear. Done right, with 8-10 days set aside and a sensible itinerary, it delivers one of the most complete and rewarding routes in the entire Annapurna trekking system.
            </p>
          </article>

          {/* SECTION 16: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Plan Your Khopra Trek via Ghorepani with Local Experts
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Our guides are based in Pokhara and walk this exact route year-round, so we can tell you current trail and lodge conditions, help you choose between the 8, 9, or 10-day itinerary, and handle your ACAP and TIMS permits before you arrive.
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
              <h4 className="font-bold text-stone-900 text-sm font-sans">Reviewed by Trail Experts</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                This Ghorepani-entry route and itinerary is reviewed by our licensed local Annapurna mountain guides. Acclimatization guidelines and transport logistics are updated monthly to ensure safe transitions above the tree line.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
