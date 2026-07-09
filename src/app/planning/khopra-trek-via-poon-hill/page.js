import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/planning/khopra-trek-via-poon-hill",
  },
  title: "Khopra Trek via Poon Hill: Complete Route & Itinerary Guide",
  description: "Planning a Khopra Trek via Poon Hill? Get the full route breakdown, day-by-day itinerary, sunrise tips, permits, and a clear answer on whether to add Poon Hill.",
};

export default function Page() {
  const summarySpecs = [
    { label: "Duration", value: "8 - 10 Days" },
    { label: "Max Altitude", value: "3,660m (4,660m with Lake)" },
    { label: "Difficulty Grade", value: "Moderate" },
    { label: "Lodging Style", value: "Teahouses & Community" }
  ];

  const advantages = [
    {
      title: "Sunrise Crowds vs. Alpine Silence",
      desc: "Watch the postcard sunrise from 3,210m Poon Hill alongside other trekkers, then escape to the completely quiet pastures and local lodges of Khopra Ridge."
    },
    {
      title: "Unique Route Integration",
      desc: "Ghorepani acts as the direct trail hinge. Connect the famous viewpoint to the offbeat community trail without any backtracking or long road transfers."
    },
    {
      title: "Gentler Acclimatization",
      desc: "Starting with a lower-elevation viewpoint early in the trip provides a natural acclimatization step before pushing above 3,500m at the ridge."
    },
    {
      title: "Dual Perspective Panorama",
      desc: "Enjoy two distinct viewpoint angles: a Dhaulagiri-facing vista from Poon Hill and a closer, dramatic Annapurna South look from Khopra Ridge."
    }
  ];

  const itinerary = [
    {
      day: 1,
      title: "Pokhara to Ulleri Ascent",
      elev: "2,050m",
      time: "1 hr drive + 5 - 6 hr hike",
      desc: "Drive from Pokhara to Nayapul. Follow the Modi Khola river valley and climb the steep, famous stone staircase up to Ulleri village. Overnight in Ulleri."
    },
    {
      day: 2,
      title: "Ulleri to Ghorepani",
      elev: "2,874m",
      time: "4 - 5 hours",
      desc: "Climb steadily through ancient rhododendron and oak forest cover. Arrive at the prominent village of Ghorepani to rest before the sunrise climb."
    },
    {
      day: 3,
      title: "Poon Hill Sunrise & Descent to Swanta",
      elev: "2,214m (Poon Hill: 3,210m)",
      time: "6 - 7 hours",
      desc: "Ascend 45 minutes in the dark to catch sunrise from the Poon Hill summit. Return to Ghorepani for breakfast, then drop steeply down into the forest to Swanta village."
    },
    {
      day: 4,
      title: "Swanta to Bayeli Kharka",
      elev: "3,432m",
      time: "5 - 6 hours",
      desc: "Climb past the tree line toward the quiet ridges of Bayeli Kharka. Experience your first clear, unobstructed look at the Dhaulagiri massif."
    },
    {
      day: 5,
      title: "Bayeli Kharka to Khopra Danda",
      elev: "3,660m",
      time: "4 - 5 hours",
      desc: "Hike along high alpine pastures to reach Khopra Danda. Stand on the edge of the deep Kali Gandaki valley with a massive wall of peaks directly opposite."
    },
    {
      day: 6,
      title: "Optional Khayer Lake Excursion",
      elev: "4,660m",
      time: "7 - 8 hours roundtrip",
      desc: "Take a challenging day hike up to the sacred high-altitude Khayer Lake at the foot of Annapurna South, then return to sleep at Khopra Danda."
    },
    {
      day: 7,
      title: "Khopra Danda to Swanta (Return)",
      elev: "2,214m",
      time: "5 - 6 hours",
      desc: "Descend the steep ridge trail, returning to the Magar community of Swanta village. Sample the local community-produced cheese."
    },
    {
      day: 8,
      title: "Swanta to Ghandruk village",
      elev: "1,940m",
      time: "6 - 7 hours",
      desc: "Cross the valley and climb through Tadapani to Ghandruk, a famous Gurung cultural capital featuring traditional stone architecture and museums."
    },
    {
      day: 9,
      title: "Ghandruk to Nayapul to Pokhara",
      elev: "Descent to Pokhara",
      time: "3 - 4 hours + drive",
      desc: "Descend the stone steps out of Ghandruk to the road trailhead. Board your private jeep transfer back to lakeside Pokhara."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Poon Hill Integration Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Khopra Trek via Poon Hill: Route &amp; Itinerary Guide
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Combine the iconic sunrise of Poon Hill with the quiet community trails and high-altitude wilderness of Khopra Ridge in one well-paced Himalayan loop.
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
                Why Combine Them?
              </a>
              <a href="#decision-guide" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Add or Skip Poon Hill?
              </a>
              <a href="#route-options" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Route Configuration Options
              </a>
              <a href="#itinerary" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Day-by-Day Itinerary
              </a>
              <a href="#sunrise-experience" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Poon Hill Sunrise Hike
              </a>
              <a href="#khopra-highlights" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Khopra Ridge Highlights
              </a>
              <a href="#poon-vs-muldai" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Poon Hill vs Muldai
              </a>
              <a href="#difficulty" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Difficulty &amp; Altitude
              </a>
              <a href="#permits" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Permits &amp; Logistics
              </a>
              <a href="#packing" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Gear Checklist
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
          {/* SECTION 1: WHY COMBINE */}
          <article id="overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Combine Khopra Trek and Poon Hill?
            </h2>
            
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                If you&apos;re researching the Khopra Ridge Trek, you&apos;ve probably noticed that Poon Hill keeps coming up — sometimes as an add-on, sometimes as a separate trek entirely, and rarely with a clear explanation of how the two actually fit together. That confusion is the reason this guide exists.
              </p>
              <p>
                Khopra Danda and Poon Hill sit in the same corner of the Annapurna region, close enough that combining them into one trip is not only possible but, for most trekkers, the smarter way to experience this part of Nepal. Poon Hill gives you one of the most accessible sunrise viewpoints in the Himalayas. Khopra Ridge gives you days of quiet trail, alpine lakes, and a 360-degree mountain panorama without the crowds.
              </p>
              
              <h3 className="text-lg font-bold text-stone-900 mt-6">The Contrast: Sunrise Crowds vs. Remote Ridge</h3>
              <p>
                Poon Hill is one of the most visited viewpoints in the Annapurna region. At 3,210 meters, it delivers a wide sunrise panorama with minimal physical effort — which is precisely why dozens of trekkers gather there most mornings during peak season. It&apos;s busy, but it&apos;s busy for a reason: the view is genuinely worth it.
              </p>
              <p>
                Khopra Ridge is the opposite kind of experience. The trail sees a fraction of Poon Hill&apos;s foot traffic, the lodges are smaller and family-run, and the mountain views unfold gradually over several days rather than in one sunrise window. Trekkers who go on to Khopra after Poon Hill often describe it as the moment the trip stops feeling like a tourist circuit and starts feeling like an expedition.
              </p>
              
              <h3 className="text-lg font-bold text-stone-900 mt-6">What Makes This Combo Unique</h3>
              <p>
                Most Annapurna itineraries ask you to choose: iconic and social, or remote and quiet. The Khopra Trek via Poon Hill route lets you have both in sequence. You get the postcard sunrise first, then trade it for days of solitude on ridgelines most visitors never see.
              </p>
              <p>
                Geographically, this works because Ghorepani — the village just below Poon Hill — sits directly on the trail network that connects to Swanta and onward to Khopra Danda. There&apos;s no backtracking or long road transfer required to link them.
              </p>
            </div>
          </article>

          {/* SECTION 2: DECISION GUIDE */}
          <article id="decision-guide" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Should You Add Poon Hill or Skip It?
            </h2>
            <div className="grid gap-6 md:grid-cols-2 text-stone-600 text-sm">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-extrabold text-stone-900">Choose Poon Hill If:</h4>
                <ul className="list-disc pl-4 space-y-1 text-xs text-stone-500">
                  <li>This is your first trek in the Annapurna region and you want the classic sunrise experience.</li>
                  <li>You are traveling with a group that includes less experienced trekkers who benefit from gradual pacing.</li>
                  <li>Photography is a priority, and you want both a wide, classic Himalayan panorama and Khopra&apos;s secluded angles.</li>
                  <li>You have an extra day built into your schedule already.</li>
                </ul>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-extrabold text-stone-900">Skip Poon Hill If:</h4>
                <ul className="list-disc pl-4 space-y-1 text-xs text-stone-500">
                  <li>You have already visited Poon Hill on a previous Annapurna trek.</li>
                  <li>Your priority is minimizing crowds for the entire trip, not just part of it.</li>
                  <li>You are working with a tight schedule and cannot add an extra day.</li>
                  <li>You are an experienced trekker who doesn&apos;t need an easy warm-up stop.</li>
                </ul>
              </div>
            </div>
          </article>

          {/* SECTION 3: ROUTE OPTIONS */}
          <article id="route-options" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Trek via Poon Hill Route Options Explained
            </h2>
            <div className="space-y-4 text-sm text-stone-600">
              <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Option 1 – Ghorepani → Poon Hill first → Khopra Ridge (Classic)</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  This is the most common structure. You trek up through Ulleri to Ghorepani, climb Poon Hill for sunrise the next morning, then continue toward Swanta and Khopra Danda. It front-loads the well-trodden, well-supported section of the trail and saves the quieter Khopra section for the back half of the trip, which works well for acclimatization.
                </p>
              </div>

              <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Option 2 – Khopra Trek first → add Poon Hill on descent</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  In this version, you head toward Khopra Danda first via an alternate approach, then route back through Ghorepani and climb Poon Hill on your way out. This flow is worth considering if you want Khopra&apos;s solitude while you&apos;re freshest, saving the more social Poon Hill sunrise as a celebratory finish rather than an opening warm-up.
                </p>
              </div>

              <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Option 3 – Direct Khopra Ridge Trek (no Poon Hill)</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  If you have decided to skip Poon Hill based on the decision guide above, you can trek directly toward Khopra Danda via Tikhedhunga and Ghorepani without the early-morning detour, shaving roughly a day off the total itinerary.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 4: ITINERARY */}
          <article id="itinerary" className="scroll-mt-12 space-y-8">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Sample 9-Day Khopra Trek Itinerary via Poon Hill
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

          {/* SECTION 5: SUNRISE EXPERIENCE */}
          <article id="sunrise-experience" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Poon Hill Sunrise Experience (Ghorepani Highlight)
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Since the Poon Hill sunrise is the single most time-sensitive part of this itinerary, here is what to expect:
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                  <h4 className="font-bold text-stone-900">Early Morning Climb</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Most lodges in Ghorepani wake trekkers around 4:30 AM. The climb to the Poon Hill viewpoint takes 45 minutes to an hour at a steady pace on a well-maintained stone trail. Headlamps are essential since you will be climbing in darkness.
                  </p>
                </div>

                <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                  <h4 className="font-bold text-stone-900">Spectacular Panoramas</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    From the viewpoint, the panorama spans Annapurna South, the massive Dhaulagiri range to the west, and the unmistakable fishtail silhouette of Machhapuchhre. As the sun rises, the light moves across the peaks in sequence.
                  </p>
                </div>
              </div>

              <div className="bg-stone-100 border border-stone-200 p-6 rounded-3xl text-stone-800 text-xs">
                <strong>Photography Tips:</strong> Peak season mornings (Oct–Nov, Mar–Apr) can bring sizable crowds. Arriving 15–20 minutes earlier than the recommended departure time, or positioning yourself slightly off the main platform, gives you more room to shoot without other trekkers in the frame. A wide-angle lens captures the full range sweep, but it&apos;s worth bringing a longer lens too.
              </div>
            </div>
          </article>

          {/* SECTION 6: KHOPRA HIGHLIGHTS */}
          <article id="khopra-highlights" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Ridge Trek Highlights (Off-the-Beaten-Path)
            </h2>
            <div className="grid gap-6 md:grid-cols-2 text-stone-600 text-sm">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Khopra Danda Viewpoint</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Offers a genuinely wide-angle Himalayan panorama without another trekking group in sight. Where Poon Hill concentrates everyone into one viewing window, Khopra spreads the experience across an entire ridge.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Khayer Lake optional side trek</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Sits above the tree line and holds religious significance for local communities. The walk up is steep but rewarding, and the lake itself, framed by surrounding peaks, is a fantastic detour.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Rhododendron Forest Trails</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Large stretches of the route between Swanta and Khopra pass through dense rhododendron forests (spectacular in spring bloom). Solitude on the trail allows for quiet, reflective walking.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Community Lodges</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Lodges in the Khopra section are run by local families and offer simpler facilities than Ghorepani. Meals are home-cooked, and conversations with lodge owners give a clear picture of local life.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 7: POON VS MULDAI */}
          <article id="poon-vs-muldai" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Poon Hill vs Muldai Viewpoint (Which Is Better for You?)
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Muldai Viewpoint, at 3,637 meters, is frequently mentioned as an alternative or addition near the Khopra route. Here is a direct comparison:
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-white border border-stone-200 p-5 rounded-3xl shadow-sm">
                  <h4 className="font-bold text-stone-900 text-sm">View Scale</h4>
                  <p className="mt-2 text-[10px] text-stone-500 leading-relaxed">
                    Muldai sits over 400 meters higher than Poon Hill. This added elevation gives Muldai a broader view of the Annapurna range, with Annapurna I visible in a way it often isn&apos;t from Poon Hill.
                  </p>
                </div>

                <div className="bg-white border border-stone-200 p-5 rounded-3xl shadow-sm">
                  <h4 className="font-bold text-stone-900 text-sm">Atmosphere</h4>
                  <p className="mt-2 text-[10px] text-stone-500 leading-relaxed">
                    Poon Hill draws a steady stream of trekkers nearly every clear morning. Muldai, by contrast, sees a small fraction of that traffic, partly because it requires a longer, steeper approach detour.
                  </p>
                </div>

                <div className="bg-white border border-stone-200 p-5 rounded-3xl shadow-sm">
                  <h4 className="font-bold text-stone-900 text-sm">Our Verdict</h4>
                  <p className="mt-2 text-[10px] text-stone-500 leading-relaxed">
                    If convenience and a guaranteed classic sunrise are key, Poon Hill is the choice. If you have the extra fitness and solitude matters more, Muldai is worth considering.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* SECTION 8: DIFFICULTY & ALTITUDE */}
          <article id="difficulty" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Difficulty, Altitude &amp; Best Time to Trek
            </h2>
            <div className="grid gap-6 md:grid-cols-2 text-stone-600 text-sm">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Fitness &amp; Acclimatization</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Requires moderate fitness. The Ulleri staircase is the most physically demanding stretch early on. Because the Poon Hill detour sits at a lower, easier elevation early, it functions as a natural acclimatization step.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Best Seasons to Go</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Pre-monsoon (March–May) and post-monsoon (late September–November) are the peak windows. Spring brings blooming forests; autumn offers the clearest skies for mountain visibility.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 9: PERMITS */}
          <article id="permits" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Permits, Guides &amp; Trek Logistics
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Make sure you have arranged all necessary permits in Pokhara or Kathmandu before starting:
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                  <h4 className="font-bold text-stone-900">ACAP &amp; TIMS Requirements</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Both the ACAP (Annapurna Conservation Area Project) permit and the TIMS (Trekkers&apos; Information Management System) card are required. Checkpoints near Birethanti will verify both original physical documents.
                  </p>
                </div>

                <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                  <h4 className="font-bold text-stone-900">Do You Need a Guide?</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    The Ghorepani-Poon Hill corridor is heavily trafficked and well-marked. The Khopra Ridge section, however, is far less developed, with fewer signposts and longer gaps between lodges. A guide is strongly recommended for this stretch.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* SECTION 10: PACKING */}
          <article id="packing" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Gear Checklist for Poon Hill Sunrise &amp; Khopra Ridge Trek
            </h2>
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
              <div className="grid gap-6 md:grid-cols-3 text-xs text-stone-650">
                <div>
                  <h5 className="font-bold text-stone-900 uppercase tracking-wider mb-2">Clothing Layers</h5>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Moisture-wicking base layers</li>
                    <li>Insulating mid-layer (fleece/down)</li>
                    <li>Windproof/waterproof shell jacket</li>
                    <li>Beanie &amp; thermal gloves</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-stone-900 uppercase tracking-wider mb-2">Sunrise Climb Gear</h5>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Reliable headlamp (with spare batteries)</li>
                    <li>Sturdy trekking boots (broken-in)</li>
                    <li>Adjustable trekking poles</li>
                    <li>30 - 40L daypack &amp; rain cover</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-stone-900 uppercase tracking-wider mb-2">Teahouse Essentials</h5>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Sub-zero rated sleeping bag</li>
                    <li>Water purification filter/tablets</li>
                    <li>Power bank for device charging</li>
                    <li>Basic first-aid kit</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          {/* SECTION 11: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Poon Hill Route
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Can I combine Khopra Trek with Poon Hill?",
                  a: "Yes. The two routes connect through Ghorepani, and most trekkers add Poon Hill as either the opening or closing segment of a Khopra Ridge itinerary without major detours."
                },
                {
                  q: "Is Poon Hill included in Khopra Trek itinerary?",
                  a: "Not automatically — Poon Hill is an optional add-on rather than a default stop on the standard Khopra Ridge route. It needs to be built into your itinerary deliberately."
                },
                {
                  q: "How many days does Khopra Trek via Poon Hill take?",
                  a: "Most itineraries run 8–10 days including the Poon Hill detour. A shorter 6–7 day version is possible by compressing the Khopra section, though it sacrifices some acclimatization comfort."
                },
                {
                  q: "Is Khopra Trek difficult for beginners?",
                  a: "The route suits trekkers with moderate fitness rather than complete beginners. The Ulleri ascent and the longer Khopra Danda days are the most physically demanding sections; the rest of the trail is manageable for trekkers with some prior hiking experience."
                },
                {
                  q: "Which is better: Poon Hill or Muldai Viewpoint?",
                  a: "Poon Hill is more accessible and reliably crowded; Muldai offers a higher, quieter, broader panorama for trekkers willing to add a steeper detour. Neither is strictly \"better\" — it depends on whether you prioritize convenience or solitude."
                },
                {
                  q: "Do I need a guide for this trek?",
                  a: "A guide isn't strictly required for the Ghorepani–Poon Hill section, but is strongly recommended for the Khopra Ridge portion, where trails are less marked and lodges more spread out."
                },
                {
                  q: "What is the best season for Khopra Ridge Trek?",
                  a: "Pre-monsoon (March–May) and post-monsoon (late September–November) offer the clearest visibility and most stable trail conditions for both the Poon Hill and Khopra sections."
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
              The Khopra Trek via Poon Hill isn&apos;t two separate trips stitched together — it&apos;s a single, well-structured route that uses each section to its strength. Poon Hill delivers the classic, easily accessible sunrise that the Annapurna region is famous for. Khopra Ridge delivers the quieter, more immersive Himalayan experience that&apos;s harder to find on more heavily trafficked routes.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              Whether you build your itinerary around Option 1, Option 2, or skip Poon Hill entirely, the key is planning the route intentionally rather than treating Poon Hill as an afterthought. Get the sequencing right, and you walk away with both the iconic photo and the kind of trail memories that don&apos;t show up in everyone else&apos;s gallery.
            </p>
          </article>

          {/* SECTION 13: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Plan Your Khopra Trek via Poon Hill with Local Experts
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                If you&apos;re ready to turn this itinerary into a confirmed trip, our local trekking team can help you fine-tune the route, arrange your ACAP and TIMS permits, and match you with an experienced guide for the Khopra Ridge section.
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
                This combined route and itinerary is reviewed by our licensed local Annapurna mountain guides. Acclimatization guidelines and transport logistics are updated monthly to ensure safe transitions above the tree line.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
