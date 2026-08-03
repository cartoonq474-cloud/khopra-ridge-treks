import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/planning/khopra-trek-via-mohare-danda",
  },
  title: "Khopra Trek via Mohare Danda: Complete Route, Itinerary, Cost & Eco Trek Guide",
  description: "Plan your Khopra Trek via Mohare Danda with our complete guide covering the 12-day route, day-by-day itinerary, trek cost, permits and accommodation.",
};

export default function Page() {
  const summarySpecs = [
    { label: "Duration", value: "12 Days" },
    { label: "Max Altitude", value: "3,660m (4,500m at Lake)" },
    { label: "Difficulty Grade", value: "Moderate to Challenging" },
    { label: "Lodging Style", value: "Homestays & Community Lodges" }
  ];

  const advantages = [
    {
      title: "Less Crowded Trail Alternative",
      desc: "Mohare Danda is one of the least-visited trekking trails in the Annapurna foothills, offering quiet trails where you might pass a handful of trekkers on a good day."
    },
    {
      title: "100% Community-Owned Lodging",
      desc: "Every lodge is owned and managed by the local community. Accommodation and dining fees are pooled to fund village schools, clinics, and organic farming projects."
    },
    {
      title: "Sustainable Eco Trekking",
      desc: "Designed from the beginning with sustainability as a core principle. Lodges prioritise locally sourced food, solar energy, and minimise waste to protect the environment."
    },
    {
      title: "Double Ridgeline Panorama",
      desc: "Experience two separate high-altitude ridgelines: Mohare Danda at 3,300m and Khopra Ridge at 3,660m, yielding peerless, crowd-free views of Dhaulagiri and Annapurna South."
    }
  ];

  const itinerary = [
    {
      day: 1,
      title: "Pokhara to Galeshwor (Drive)",
      elev: "approx. 950m",
      time: "4 - 5 hours drive",
      desc: "Depart Pokhara by private jeep or local bus, travelling west along the Kali Gandaki highway to Galeshwor. Settle into a basic community lodge and prepare for the trail. Travel day, no trekking."
    },
    {
      day: 2,
      title: "Galeshwor to Banskharka",
      elev: "approx. 2,150m",
      time: "4 - 5 hours hike",
      desc: "Begin ascending through subtropical forest and terraced farmland. Banskharka is a traditional Magar village with community lodge accommodation and organic orchard farms."
    },
    {
      day: 3,
      title: "Banskharka to Nangi Village",
      elev: "approx. 2,300m",
      time: "4 - 5 hours hike",
      desc: "Ascend through mixed forest to reach Nangi, birthplace of the Nepal Wireless Networking Project founded by local hero Mahabir Pun. Experience local orchards and community innovation."
    },
    {
      day: 4,
      title: "Nangi Village to Mohare Danda",
      elev: "3,300m",
      time: "4 - 5 hours hike",
      desc: "Climb through dense rhododendron and oak forest before breaking out above the tree line at Mohare Danda (3,300m). Enjoy a spectacular 360-degree panorama at sunset."
    },
    {
      day: 5,
      title: "Mohare Danda to Ghorepani",
      elev: "2,860m",
      time: "5 - 6 hours hike",
      desc: "Descend through thick rhododendron forest toward Ghorepani, the route connection point between the Mohare Danda trail and the Khopra Ridge circuit."
    },
    {
      day: 6,
      title: "Ghorepani to Swanta Village",
      elev: "approx. 2,000m",
      time: "5 - 6 hours hike",
      desc: "Leave the busy Poon Hill corridor behind and descend south through mixed forest toward the Swanta Valley, entering the community-run lodge system again."
    },
    {
      day: 7,
      title: "Swanta to Chhistibung",
      elev: "approx. 3,000m",
      time: "5 - 6 hours hike",
      desc: "Ascend steadily through high-altitude meadows and pastureland. Chhistibung is a small, remote settlement marking the transition into genuine alpine terrain."
    },
    {
      day: 8,
      title: "Chhistibung to Khopra Ridge",
      elev: "3,660m",
      time: "4 - 5 hours hike",
      desc: "The most physically demanding day of the trek, with a significant elevation gain through open terrain to reach the spectacular viewpoint of Khopra Ridge."
    },
    {
      day: 9,
      title: "Sacred Khayer Lake Excursion",
      elev: "4,500m",
      time: "5 - 6 hours round trip",
      desc: "The highest point of the trek. Hike to the glacially formed alpine lake under the face of Annapurna South, sacred in Hindu and Buddhist traditions, then return to Khopra Ridge."
    },
    {
      day: 10,
      title: "Khopra Ridge to Bayeli Kharka",
      elev: "approx. 3,100m",
      time: "3 - 4 hours hike",
      desc: "Begin your descent from Khopra Ridge through open pastureland to Bayeli Kharka, a high grazing meadow used by local herders. Enjoy a relatively gentle walk."
    },
    {
      day: 11,
      title: "Bayeli Kharka to Ghandruk village",
      elev: "approx. 1,940m",
      time: "5 - 6 hours hike",
      desc: "Descend through forest to Ghandruk, one of the largest and most famous Gurung cultural villages in the Annapurna region, featuring stone cottages and museums."
    },
    {
      day: 12,
      title: "Ghandruk to Pokhara",
      elev: "Descent to Pokhara",
      time: "1 - 2 hours walk + 2 - 3 hours drive",
      desc: "Complete the final walk down from Ghandruk to Kimche or Nayapul, where a vehicle transfer returns you to Pokhara. Trek concluded."
    }
  ];

  const elevationData = [
    { stop: "Galeshwor (Trailhead)", elev: "~950m" },
    { stop: "Mohare Danda", elev: "3,300m" },
    { stop: "Ghorepani", elev: "2,860m" },
    { stop: "Khopra Ridge", elev: "3,660m" },
    { stop: "Khayer Lake", elev: "4,500m" }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Eco-Tourism Integration
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Khopra Trek via Mohare Danda: 12-Day Eco-Guide
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            This route combines two of Nepal&apos;s finest community-managed trekking circuits into a single, immersive journey through Magar villages, rhododendron forests, and two stunning high-altitude ridgelines.
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
              <a href="#why-choose" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why Choose This Route?
              </a>
              <a href="#route-overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Route Overview
              </a>
              <a href="#itinerary" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                12-Day Itinerary
              </a>
              <a href="#difficulty" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trek Difficulty &amp; Fitness
              </a>
              <a href="#accommodation" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Accommodation &amp; Food
              </a>
              <a href="#costs" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Cost Breakdown
              </a>
              <a href="#permits" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Permits Required
              </a>
              <a href="#seasons" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Best Time to Trek
              </a>
              <a href="#views" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Mountain Views
              </a>
              <a href="#community" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Community Impact
              </a>
              <a href="#comparisons" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Standard vs Mohare
              </a>
              <a href="#guides" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Should You Hire a Guide?
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
          {/* SECTION 1: WHAT IS THE TREK */}
          <article id="overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What Is the Khopra Trek via Mohare Danda?
            </h2>
            
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <h3 className="text-lg font-bold text-stone-900">Combining Two Unique Community Trekking Routes</h3>
              <p>
                The Khopra Trek via Mohare Danda is an extended trekking circuit in the Annapurna Conservation Area of western Nepal. It links two independently managed community trekking trails — the Mohare Danda eco-community route and the Khopra Ridge community circuit — into a single continuous journey.
              </p>
              <p>
                The Mohare Danda trail begins near Galeshwor in the Modi Khola valley and ascends through a series of traditional Magar villages before reaching the Mohare Danda viewpoint at 3,300 metres. From there, the route connects through Ghorepani to join the Khopra Ridge trail, which climbs to 3,660 metres and includes an optional excursion to the sacred Khayer Lake at 4,500 metres.
              </p>
              
              <h3 className="text-lg font-bold text-stone-900 mt-6">Why This Trek Is Different From Standard Routes</h3>
              <p>
                The mainstream Annapurna trekking routes — Poon Hill, Annapurna Base Camp, and the Annapurna Circuit — are world-class experiences, but they can be heavily trafficked. The Mohare Danda to Khopra Trek takes an entirely different approach. Large sections of this route pass through villages that see very few international trekkers. The lodge system is community-owned, which means profits stay local rather than flowing to outside operators.
              </p>

              <h3 className="text-lg font-bold text-stone-900 mt-6">Who Should Choose This Trek</h3>
              <p>
                This trek is ideal for:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-stone-500 font-medium">
                <li>Eco-conscious travellers who want their spending to directly support mountain communities.</li>
                <li>Experienced trekkers seeking a less crowded Annapurna alternative with genuine cultural depth.</li>
                <li>Adventure travellers ready for a 12-day committed route with significant daily elevation changes.</li>
                <li>Cultural trekkers interested in traditional Magar village life, organic farming, and community development projects.</li>
                <li>Photographers and nature lovers drawn to rhododendron forests, ridgeline views, and sunrise panoramas.</li>
              </ul>
            </div>
          </article>

          {/* SECTION 2: WHY CHOOSE */}
          <article id="why-choose" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Choose the Khopra Trek via Mohare Danda?
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

          {/* SECTION 3: ROUTE OVERVIEW */}
          <article id="route-overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Complete Route Overview From Pokhara
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The trek begins in Pokhara, the main trekking hub of western Nepal. Trekkers take a private jeep or local bus to the trailhead at Galeshwor, a journey of approximately 4 to 5 hours.
              </p>
              <p>
                <strong>Major Villages and Route Stops:</strong> Galeshwor (trailhead), Banskharka (Magar village), Nangi Village (wireless network hub), Mohare Danda viewpoint, Ghorepani, Swanta, Chhistibung, Bayeli Kharka, Khopra Ridge, Khayer Lake, and Ghandruk descent village.
              </p>
              <p>
                This loop structure ensures that you are rarely walking the same trail twice, adding considerable variety to the daily trekking experience.
              </p>
            </div>
          </article>

          {/* SECTION 4: ITINERARY */}
          <article id="itinerary" className="scroll-mt-12 space-y-8">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Detailed 12-Day Mohare Danda to Khopra Trek Itinerary
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
              Trek Distance, Elevation and Route Difficulty
            </h2>
            <div className="space-y-6 text-sm text-stone-600">
              <p>
                The full 12-day route covers approximately 110 to 130 kilometres of total trail distance. Daily walking distances range from 8 to 14 kilometres, requiring 4 to 6 hours of active trekking.
              </p>

              <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm overflow-x-auto">
                <table className="min-w-full divide-y divide-stone-200 text-xs text-left">
                  <thead>
                    <tr className="text-stone-400 font-bold uppercase tracking-wider">
                      <th className="pb-3">Point</th>
                      <th className="pb-3 text-right">Altitude</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 font-medium">
                    {elevationData.map((item, idx) => (
                      <tr key={idx}>
                        <td className="py-2 text-stone-900 font-bold">{item.stop}</td>
                        <td className="py-2 text-right text-emerald-600">{item.elev}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Is This Trek Suitable for Beginners?</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  This trek is rated moderate to challenging. The combination of route length (12 days), daily elevation changes, and maximum altitude of 4,500 metres means it is not suitable for complete beginners who have no trekking experience at all. However, fit trekkers who prepare adequately can complete it successfully.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Understanding Altitude Sickness (AMS) Risks</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Altitude sickness becomes a consideration above 3,000 metres. Key precautions: ascend slowly, stay well hydrated (aim for 3 to 4 litres of water daily), eat light meals, know the symptoms, descend immediately if symptoms worsen, and consult a doctor about carrying Diamox.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 6: ACCOMMODATION & FOOD */}
          <article id="accommodation" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Accommodation and Food on the Trail
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-stone-650 text-sm">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">Community Lodges</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Lodges on this route are collectively owned and operated by local village communities. Accommodation is basic but clean and well-maintained with twin-sharing rooms.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">Village Homestays</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  In lower sections (Banskharka, Nangi), village homestays allow you to sleep in a family home, eat farm-fresh meals, and experience genuine Magar culture.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">Hearty Meals &amp; Water</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Dal Bhat is the classic staple. Menus also include vegetable curries, noodle soups, chapati, and organic farming produce. Carry a power bank and water filter pen.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 7: COSTS */}
          <article id="costs" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Trek via Mohare Danda Cost Breakdown
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-stone-600 text-sm">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Independent Budget</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Expect to spend USD 35–60 per day on the trail for lodging, meals, and water. Total budget for 12 days is approx. USD 260–500 (excluding permits &amp; transport).
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Guided Packages</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  A fully supported 12-day package typically ranges from USD 800 to 1,400 per person depending on group size, covering guides, porters, permits, and private jeeps.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Guide &amp; Porter Fees</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Daily rates are approx. USD 25–35 for a licensed trekking guide and USD 15–20 for a porter (up to 20kg). Booking through community operators keeps funds local.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 8: PERMITS */}
          <article id="permits" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Permits Required for the Trek
            </h2>
            <div className="grid gap-6 md:grid-cols-2 text-sm text-stone-600 leading-relaxed">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">ACAP Permit</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Required for every trekker entering the Annapurna Conservation Area. Costs NPR 3,000 (approx. USD 22) for foreign nationals and contributes directly to environmental conservation.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">TIMS Card</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  The Trekkers&apos; Information Management System card is required for safety tracking. Costs USD 20 for solo trekkers or USD 10 through a registered agency.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 9: SEASONS */}
          <article id="seasons" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Time to Do the Khopra Trek via Mohare Danda
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-500/10 uppercase">Spring (Mar - May)</span>
                <h4 className="font-bold text-stone-900">Spring for Rhododendrons</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Brings warmer temperatures, longer daylight hours, and the spectacular bloom of giant rhododendron forests in pink, red, and white along the entire Mohare Danda section.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-500/10 uppercase">Autumn (Sep - Nov)</span>
                <h4 className="font-bold text-stone-900">Autumn for Clear Skies</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Post-monsoon skies are exceptionally clear, delivering the sharpest mountain visibility of the year. Sunrise from Khopra Ridge in October is an absolute highlight.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-500/10 uppercase">Winter (Dec - Feb)</span>
                <h4 className="font-bold text-stone-900">Winter Conditions</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Temperatures drop significantly above 3,000m, and snowfall can close the trail. Recommended only for experienced cold-weather trekkers with proper gear.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-500/10 uppercase">Monsoon (Jun - Aug)</span>
                <h4 className="font-bold text-stone-900">Monsoon Challenges</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Heavy rainfall causes slippery trails, leeches in the forest, and blocks mountain views. The trek is not recommended during this period.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 10: MOUNTAIN VIEWS */}
          <article id="views" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Mountain Views and Scenic Highlights on the Trek
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Mohare Danda Sunrise:</strong> At 3,300 metres, you get a 360-degree look at Dhaulagiri, Annapurna South, Annapurna I, Hiunchuli, Nilgiri, Machhapuchhre, and Mardi Himal, enjoyed in near-total silence.
              </p>
              <p>
                <strong>Khopra Ridge Panorama:</strong> Sitting perfect between Dhaulagiri and the Annapurnas, you have an unbroken 180-degree vista right from your lodge crest.
              </p>
              <p>
                The combined route provides sustained close-range views of some of the world&apos;s highest and most beautiful peaks.
              </p>
            </div>
          </article>

          {/* SECTION 11: COMMUNITY IMPACT */}
          <article id="community" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How Community Tourism Makes This Trek Unique
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Every lodge along this path operates on a 100% community-owned cooperative model. Income from accommodation and dining is pooled and used to fund teacher salaries, supply medical clinics, and maintain the local network infrastructure.
              </p>
              <p>
                <strong>The Legacy of Mahabir Pun:</strong> In 2001, Pun launched the Nepal Wireless Networking Project from Nangi Village, bringing internet connectivity to remote villages. Walking through Nangi today means visiting the living history of community-driven innovation.
              </p>
            </div>
          </article>

          {/* SECTION 12: COMPARISONS */}
          <article id="comparisons" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Trek via Mohare Danda vs Standard Khopra Trek
            </h2>
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm overflow-x-auto">
              <table className="min-w-full divide-y divide-stone-200 text-xs text-left">
                <thead>
                  <tr className="text-stone-400 font-bold uppercase tracking-wider">
                    <th className="pb-3">Feature</th>
                    <th className="pb-3">Standard Route</th>
                    <th className="pb-3">Mohare Danda Route</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 font-medium">
                  <tr>
                    <td className="py-2 font-bold text-stone-900">Duration</td>
                    <td className="py-2 text-stone-500">7 - 8 days</td>
                    <td className="py-2 text-emerald-600">12 days</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-bold text-stone-900">Trekking Crowds</td>
                    <td className="py-2 text-stone-500">Low to Moderate</td>
                    <td className="py-2 text-emerald-600">Very Low</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-bold text-stone-900">Ridgelines</td>
                    <td className="py-2 text-stone-500">1 (Khopra)</td>
                    <td className="py-2 text-emerald-600">2 (Mohare + Khopra)</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-bold text-stone-900">Community Impact</td>
                    <td className="py-2 text-stone-500">High</td>
                    <td className="py-2 text-emerald-600">Very High (Homestays)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          {/* SECTION 13: SHIELD GUIDE */}
          <article id="guides" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Should You Hire a Guide for This Trek?
            </h2>
            <div className="grid gap-6 md:grid-cols-2 text-stone-600 text-sm leading-relaxed">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Benefits of a Local Guide</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Provides navigating safety, translates Magar dialects in local homestays, provides rich local history, and handles lodge bookings. Using a guide also supports employment in mountain communities.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Trekking Independently</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Possible for experienced trekkers with strong navigation skills, but note that trail marking is sparse in the Mohare section and lodge staff may speak limited English.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 14: PACKING */}
          <article id="packing" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Essential Packing List for This Trek
            </h2>
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
              <div className="grid gap-6 md:grid-cols-3 text-xs text-stone-650">
                <div>
                  <h5 className="font-bold text-stone-900 uppercase tracking-wider mb-2">Clothing Layers</h5>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Moisture-wicking base layers</li>
                    <li>Mid-layer fleece/down jacket</li>
                    <li>Waterproof/windproof shell</li>
                    <li>Hat, thermal gloves &amp; neck gaiter</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-stone-900 uppercase tracking-wider mb-2">Trekking Equipment</h5>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Broken-in boots with ankle support</li>
                    <li>Adjustable trekking poles</li>
                    <li>50 - 65L backpack</li>
                    <li>Sub-zero sleeping bag &amp; liner</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-stone-900 uppercase tracking-wider mb-2">Health &amp; Safety</h5>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>First-aid kit &amp; blister care</li>
                    <li>Diamox (consult your doctor)</li>
                    <li>Sunscreen SPF 50+ &amp; insect repellent</li>
                    <li>Water purification filter/tablets</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          {/* SECTION 15: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Mohare Route
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "How many days does Khopra Trek via Mohare Danda take?",
                  a: "The standard itinerary for the combined Khopra Trek via Mohare Danda is 12 days. This includes the drive from Pokhara on Day 1, the ascent through Mohare Danda villages on Days 2–4, the route connection through Ghorepani on Days 5–6, the Khopra Ridge circuit on Days 7–9, and the descent through Ghandruk and return to Pokhara on Days 10–12."
                },
                {
                  q: "Is this trek suitable for beginners?",
                  a: "This trek is rated moderate to challenging and is best suited to trekkers with some prior hiking or trekking experience. Complete beginners can attempt this route if they dedicate 6 to 8 weeks to physical preparation beforehand and trek with a licensed guide. The absence of technical terrain keeps it accessible, but 12 days of daily mountain walking with elevation gain requires a reasonable fitness baseline."
                },
                {
                  q: "How difficult is Khopra Ridge Trek via Mohare Danda?",
                  a: "The difficulty is moderate to challenging. Daily trekking hours average 4 to 6 hours. The maximum altitude reached is 4,500 metres at Khayer Lake. The most demanding days are the ascent to Khopra Ridge (Day 8) and the Khayer Lake excursion (Day 9). Fit trekkers with proper preparation find the route manageable. Altitude is the primary challenge rather than technical difficulty."
                },
                {
                  q: "What permits are required for the trek?",
                  a: "Two permits are required: the Annapurna Conservation Area Permit (ACAP), which costs NPR 3,000 (approximately $22 USD) for foreign nationals, and the TIMS card, which costs $20 USD for independent trekkers or $10 USD when booked through a registered trekking agency. Both can be obtained at Nepal Tourism Board offices in Pokhara or Kathmandu."
                },
                {
                  q: "How much does Khopra Trek via Mohare Danda cost?",
                  a: "Independent trekkers should budget approximately $35 to $60 USD per day on the trail for accommodation and food, plus $40+ for permits and transport costs. A fully guided 12-day package including guide, porter, accommodation, meals, permits, and Pokhara transport typically costs $800 to $1,400 USD. Total trip budget including Pokhara accommodation and flights from Kathmandu falls between $1,200 and $2,000 USD for most international trekkers."
                },
                {
                  q: "Can I do this trek without a guide?",
                  a: "Yes, independent trekking is possible on this route. However, due to limited trail signage on sections of the Mohare Danda trail and the remote nature of higher sections near Khopra Ridge, previous Himalayan trekking experience and strong navigation skills are strongly recommended. Hiring a licensed local guide significantly improves safety, adds cultural depth, and supports the local economy the community trek model is built on."
                },
                {
                  q: "Are community lodges available throughout the route?",
                  a: "Yes. Community lodges and village homestays are available at all major stops along the route, including Banskharka, Nangi, Mohare Danda, Ghorepani, Swanta, Chhistibung, Bayeli Kharka, Khopra Ridge, and Ghandruk. In peak season (March–May and September–November), advance notification through your guide or operator is recommended for the more remote sections."
                },
                {
                  q: "When is the best time to do this trek?",
                  a: "The two best trekking windows are spring (March to May) and autumn (September to November). Spring offers rhododendron blooms and warmer temperatures at lower altitudes. Autumn delivers the clearest mountain views and optimal trekking weather. October is widely regarded as the single best month. Winter (December–February) is possible for experienced cold-weather trekkers. Monsoon season (June–August) is not recommended."
                },
                {
                  q: "Is Khayer Lake included in this route?",
                  a: "Yes. The Khayer Lake excursion at 4,500 metres is included as Day 9 of the standard 12-day itinerary. The lake is considered sacred in both Hindu and Buddhist traditions and sits in a dramatic alpine setting below the high peaks. The round trip from Khopra Ridge takes 5 to 6 hours. This is the highest point of the entire trek."
                },
                {
                  q: "Is this better than the standard Khopra Ridge Trek?",
                  a: "For trekkers with 12 days available who want a deeper cultural and ecological experience, the combined Khopra Trek via Mohare Danda is the superior choice. It delivers two high-altitude ridgeline viewpoints, greater village cultural immersion, the fascinating history of Nangi and the Nepal Wireless Project, and a more complete eco-trekking circuit. For trekkers with only 7 to 8 days available, the standard Khopra Ridge Trek remains an excellent option that should not be underestimated."
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

          {/* SECTION 16: CONCLUSION */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-955">Conclusion: Nepal&apos;s Most Complete Sustainable Community Trek</h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              The Khopra Trek via Mohare Danda is not simply a longer version of a standard Annapurna trek. It is a fundamentally different kind of trekking experience — one built around community ownership, ecological responsibility, cultural depth, and genuine off-the-beaten-path adventure.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              For eco-conscious travellers, adventure trekkers, and anyone who has ever wanted to experience Nepal beyond the guidebook routes, this combined circuit is one of the most rewarding trekking experiences available in the Himalaya.
            </p>
          </article>

          {/* SECTION 17: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Plan Your Khopra Trek via Mohare Danda with Local Experts
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                We are a licensed trekking operator based in Pokhara, operating guided treks on both the Mohare Danda and Khopra Ridge circuits. Our local guides know every section of this trail and are part of the communities your trek will support.
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
                This guide is maintained and regularly updated by licensed local trekking guides operating out of Pokhara with active trail knowledge of both the Mohare Danda and Khopra Ridge circuits. Last updated: 2026 trekking season.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
