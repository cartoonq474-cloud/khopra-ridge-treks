import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/planning/khopra-trek-from-pokhara",
  },
  title: "Starting the Khopra Trek from Pokhara | Nepal Trek Guide",
  description: "Planning to start the Khopra Trek from Pokhara? Get the full breakdown of transport options, trailheads, permits, costs, and packing tips from local guides.",
};

export default function Page() {
  const summarySpecs = [
    { label: "Main Gateway", value: "Pokhara Lakeside" },
    { label: "Transit Time", value: "3 - 6 Hours" },
    { label: "Trailheads", value: "Kimche / Nayapul" },
    { label: "Permit Hub", value: "Tourism Board Pokhara" }
  ];

  const transportModes = [
    {
      mode: "Private Jeep (Recommended)",
      time: "3 - 3.5 hours",
      cost: "$90 - $120 USD (per vehicle)",
      pros: "Direct departure from your Pokhara hotel, flexible photo stops, handles dirt roads smoothly, fits up to 7 passengers."
    },
    {
      mode: "Shared Jeep",
      time: "4 - 5 hours",
      cost: "$10 - $15 USD (per person)",
      pros: "Leaves from Hari Chowk in Pokhara. Departs only when completely full, which can mean waiting times for solo travelers."
    },
    {
      mode: "Local Bus",
      time: "5 - 6 hours",
      cost: "$4 - $6 USD (per person)",
      pros: "Most budget-friendly option. Leaves on fixed schedules, but is crowded, slow, and follows bumpy dirt-road routes."
    }
  ];

  const trailheads = [
    {
      name: "Starting via Ghandruk (Most Popular)",
      desc: "Drive from Pokhara past Nayapul up to Kimche, then hike for 1 hour on stone steps to Ghandruk village. This is a gentle, scenic start with comfortable teahouses.",
      suitability: "Beginners, families, and anyone wanting a relaxed day one."
    },
    {
      name: "Starting via Nayapul (Longer Walk-in)",
      desc: "Get off at Nayapul or Syauli Bazaar and walk along the Modi Khola riverbed path before climbing up to Ghandruk. Adds extra hiking hours and elevation gain to day one.",
      suitability: "Experienced trekkers wanting to front-load walking miles."
    },
    {
      name: "Starting via Ulleri & Ghorepani (Loop Choice)",
      desc: "Start from Tikhedhunga or Ulleri (climbing the famous 3,200 stone steps) to reach Ghorepani. Loops toward Khopra Ridge in a counter-clockwise direction.",
      suitability: "Trekkers wanting to combine the Poon Hill sunrise early in the loop."
    }
  ];

  const elevationData = [
    { loc: "Pokhara Gateway", elev: "820 m" },
    { loc: "Ghandruk Village", elev: "1,940 m" },
    { loc: "Tadapani Forest Ridge", elev: "2,630 m" },
    { loc: "Chhistibung Meadow", elev: "2,950 m" },
    { loc: "Khopra Ridge Base", elev: "3,660 m" },
    { loc: "Khayer Lake Peak", elev: "4,660 m" }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Transit &amp; Route Logistics
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Starting the Khopra Trek from Pokhara
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Pokhara is where every Khopra Ridge Trek really begins. Set up your transport, secure your ACAP and TIMS permits, check your gear, and start with confidence.
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
                Why Pokhara Gateway?
              </a>
              <a href="#transport" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Transport Options
              </a>
              <a href="#trailheads" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Choosing a Trailhead
              </a>
              <a href="#progression" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Route Progression
              </a>
              <a href="#permits" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Required Permits
              </a>
              <a href="#difficulty" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Difficulty Rating
              </a>
              <a href="#costs" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Estimated Costs
              </a>
              <a href="#seasons" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Best Seasons to Go
              </a>
              <a href="#packing" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Packing Checklist
              </a>
              <a href="#guides" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Solo vs. Guided
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
                Request Quote
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* SECTION 1: OVERVIEW */}
          <article id="overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Pokhara Is the Main Gateway for the Khopra Ridge Trek
            </h2>
            
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Pokhara isn&apos;t just the nearest big town to the Annapurna foothills — it is set up specifically to handle trekkers. You&apos;ll find gear shops along Lakeside selling everything from down jackets to trekking poles, agencies that can arrange guides and permits, and ATMs that are far more reliable than anything on the trail.
              </p>
              <p>
                Most trekkers spend at least one night in Pokhara before departure. This gives you time to confirm your itinerary, double-check your permits, and get genuine rest at low altitude (820 meters) before the climbing starts.
              </p>
              <p>
                <strong>Easy Access:</strong> Unlike the Everest region, where Lukla flights are routinely delayed by weather, the Khopra Ridge Trek is entirely road-accessible from Pokhara. There is no flight to coordinate, no risk of losing trekking days to cancelled departures, and jeep transfers cost a fraction of a mountain flight.
              </p>
            </div>
          </article>

          {/* SECTION 2: TRANSPORT OPTIONS */}
          <article id="transport" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Transport Options from Pokhara to the Trailhead
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-stone-600 text-sm">
              {transportModes.map((item, idx) => (
                <div key={idx} className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-3">
                  <h4 className="font-bold text-stone-900 text-sm">{item.mode}</h4>
                  <div className="space-y-1">
                    <span className="block text-xs text-stone-400 font-semibold uppercase tracking-wider">Duration: {item.time}</span>
                    <span className="block text-xs text-emerald-600 font-bold">Cost: {item.cost}</span>
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed pt-2 border-t border-stone-100">
                    {item.pros}
                  </p>
                </div>
              ))}
            </div>
          </article>

          {/* SECTION 3: TRAILHEADS */}
          <article id="trailheads" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Choosing the Best Starting Point / Trailhead
            </h2>
            <div className="space-y-6">
              {trailheads.map((trail, idx) => (
                <div key={idx} className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-3">
                  <h4 className="font-extrabold text-stone-900 text-base">{trail.name}</h4>
                  <p className="text-stone-600 text-xs leading-relaxed">{trail.desc}</p>
                  <span className="block text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-500/10 px-2 py-1 rounded-md max-w-fit">
                    <strong>Best For:</strong> {trail.suitability}
                  </span>
                </div>
              ))}
            </div>
          </article>

          {/* SECTION 4: ROUTE PROGRESSION */}
          <article id="progression" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Trek Route Progression &amp; Elevation
            </h2>
            <div className="grid gap-6 md:grid-cols-2 text-stone-600 text-sm leading-relaxed">
              <div className="space-y-4">
                <p>
                  Once you leave Pokhara, the typical route progression clockwise is:
                </p>
                <p className="font-bold text-stone-850">
                  Pokhara &rarr; Nayapul &rarr; Ghandruk &rarr; Tadapani &rarr; Bayeli Kharka &rarr; Chhistibung &rarr; Khopra Ridge &rarr; Khayer Lake
                </p>
                <p>
                  Because the trek is a loop, entry and exit points can differ depending on whether you start via Ghandruk or Ulleri/Ghorepani.
                </p>
              </div>

              <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
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
            </div>
          </article>

          {/* SECTION 5: PERMITS */}
          <article id="permits" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Permits Required Before Leaving Pokhara
            </h2>
            <div className="grid gap-6 md:grid-cols-2 text-sm text-stone-600 leading-relaxed">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">ACAP Permit</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  The Annapurna Conservation Area Permit is mandatory. It costs around USD 30 and funds local conservation and community infrastructure.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">TIMS Card</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  The Trekkers&apos; Information Management System card is required for safety tracking. Processing both cards in Pokhara before departure is strongly recommended.
                </p>
              </div>
            </div>
            <div className="bg-stone-100 border border-stone-200 p-6 rounded-3xl text-stone-800 text-xs">
              <strong>Permits Checklist:</strong> Original passport + photocopies, 2-4 passport-sized photos, printed TIMS card and ACAP permit, travel insurance details with altitude coverage, and emergency contact details.
            </div>
          </article>

          {/* SECTION 6: DIFFICULTY */}
          <article id="difficulty" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How Difficult Is the Khopra Ridge Trek?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Most days on the Khopra Trek involve 5 to 7 hours of walking at a moderate pace, with regular breaks. It is a sustained daily effort, but no technical climbing skills are required.
              </p>
              <p>
                <strong>Altitude Profile:</strong> The highest point, Khopra Ridge, sits at 3,660m, and the optional Khayer Lake extension is 4,660m. Altitude gain is spread across multiple days, reducing risk. Beginners with moderate fitness generally manage the route without difficulty, though physical training (cardio/hikes) beforehand is recommended.
              </p>
            </div>
          </article>

          {/* SECTION 7: COSTS */}
          <article id="costs" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Estimated Khopra Trek Cost from Pokhara
            </h2>
            <div className="space-y-6 text-sm text-stone-650">
              <p>
                Lodging is inexpensive, while food prices rise with altitude due to supply carry-in costs. Budgeting more for meals than lodging is normal.
              </p>

              <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm overflow-x-auto">
                <table className="min-w-full divide-y divide-stone-200 text-xs text-left">
                  <thead>
                    <tr className="text-stone-400 font-bold uppercase tracking-wider">
                      <th className="pb-3">Cost Category</th>
                      <th className="pb-3">Independent Trekking</th>
                      <th className="pb-3 text-right font-bold text-stone-900">Guided Trekking</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 font-medium">
                    <tr>
                      <td className="py-2 text-stone-900 font-bold">Transport</td>
                      <td className="py-2 text-stone-500">Self-arranged ($4–$15/person)</td>
                      <td className="py-2 text-right text-emerald-600">Included or Arranged</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-stone-900 font-bold">Permits</td>
                      <td className="py-2 text-stone-500">Self-processed at Tourism Board</td>
                      <td className="py-2 text-right text-emerald-600">Usually Handled by Agency</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-stone-900 font-bold">Guide / Porter</td>
                      <td className="py-2 text-stone-500">Not Included</td>
                      <td className="py-2 text-right text-emerald-600">Included in Package</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-stone-900 font-bold">Planning Effort</td>
                      <td className="py-2 text-stone-500">High (lodging, transit, maps)</td>
                      <td className="py-2 text-right text-emerald-600">Low (logistics handled)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          {/* SECTION 8: SEASONS */}
          <article id="seasons" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Time of Year to Start the Khopra Trek
            </h2>
            <div className="grid gap-6 md:grid-cols-4 text-xs text-stone-650">
              <div className="bg-white border border-stone-200 p-5 rounded-3xl shadow-sm space-y-2">
                <span className="text-emerald-600 font-black block">Autumn (Oct-Nov)</span>
                <p className="text-[10px] text-stone-500 leading-relaxed">
                  Best visibility. Post-monsoon skies are clear, providing the sharpest mountain views of Dhaulagiri and Annapurna South. Highly recommended.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-5 rounded-3xl shadow-sm space-y-2">
                <span className="text-emerald-600 font-black block">Spring (Mar-Apr)</span>
                <p className="text-[10px] text-stone-500 leading-relaxed">
                  Rhododendron forests in bloom, turning hillsides pink and red. Mild hiking temperatures, though slightly hazier skies. Recommended.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-5 rounded-3xl shadow-sm space-y-2">
                <span className="text-emerald-600 font-black block">Winter (Dec-Feb)</span>
                <p className="text-[10px] text-stone-500 leading-relaxed">
                  Cold temperatures, possible snow blocking high sections. Some lodges operate on reduced basis. Doable with preparation.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-5 rounded-3xl shadow-sm space-y-2">
                <span className="text-emerald-600 font-black block">Monsoon (Jun-Aug)</span>
                <p className="text-[10px] text-stone-500 leading-relaxed">
                  Heavy rain, muddy trails, low visibility, and leeches in the forested zones. Least recommended season.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 9: PACKING */}
          <article id="packing" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Essential Packing Checklist Before Leaving Pokhara
            </h2>
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
              <div className="grid gap-6 md:grid-cols-3 text-xs text-stone-650">
                <div>
                  <h5 className="font-bold text-stone-900 uppercase tracking-wider mb-2">Clothing Layers</h5>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Insulated warm down jacket</li>
                    <li>Waterproof/windproof shell jacket</li>
                    <li>Moisture-wicking base layers</li>
                    <li>Warm beanie &amp; gloves</li>
                    <li>Broken-in trekking boots</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-stone-900 uppercase tracking-wider mb-2">Trekking Equipment</h5>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Trekking poles (for stone steps)</li>
                    <li>Headlamp with extra batteries</li>
                    <li>Reusable water flask/bladder</li>
                    <li>Daypack with rain cover</li>
                    <li>First-aid kit</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-stone-900 uppercase tracking-wider mb-2">Cash &amp; Documents</h5>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Passport and permit cards</li>
                    <li>Sufficient NPR cash (no trail ATMs)</li>
                    <li>Travel insurance documents</li>
                    <li>Emergency contact list</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-stone-100 border border-stone-200 p-6 rounded-3xl text-stone-850 text-xs">
              <strong>Tip:</strong> Leave any excess luggage at your Pokhara Lakeside hotel. Most hotels will store your bags for free until you return, keeping your trekking pack lighter.
            </div>
          </article>

          {/* SECTION 10: SOLO VS GUIDED */}
          <article id="guides" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Can You Do the Khopra Trek Without a Guide?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Independent trekking is possible, though guide regulations in Nepal can change. Trail signage is reasonably clear through major villages, but high altitude sections near Bayeli Kharka are quieter and less populated.
              </p>
              <p>
                <strong>Who should hire a guide:</strong> First-time visitors, solo trekkers, and anyone traveling outside the peak autumn season. Guides provide invaluable safety margins, weather insight, and local community connections.
              </p>
            </div>
          </article>

          {/* SECTION 11: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Starting from Pokhara
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Where does the Khopra Ridge Trek start from Pokhara?",
                  a: "The trek typically starts after a 3 to 6 hour road journey from Pokhara to a trailhead near Nayapul or Kimche, depending on your chosen route. From there, you walk to Ghandruk to begin the trek proper."
                },
                {
                  q: "How long does it take to reach the Khopra Trek trailhead from Pokhara?",
                  a: "By private jeep, around 3 to 3.5 hours. A shared jeep takes 4 to 5 hours, and the local bus takes 5 to 6 hours."
                },
                {
                  q: "What permits are required for Khopra Trek?",
                  a: "You need an Annapurna Conservation Area Permit (ACAP) and a TIMS card, both of which can be arranged in Pokhara before departure."
                },
                {
                  q: "Can beginners do the Khopra Ridge Trek?",
                  a: "Yes. With moderate fitness and some preparation, beginners generally manage the trek well, since the altitude gain is spread gradually across several days."
                },
                {
                  q: "How much does Khopra Trek cost from Pokhara?",
                  a: "Costs vary based on transport choice, guide hire, and accommodation standard, but budget trekkers can manage the route more cheaply than guided groups, who pay more for the added convenience and support."
                },
                {
                  q: "Is Khopra Trek harder than Poon Hill Trek?",
                  a: "Khopra Trek generally involves more trekking days and reaches a higher maximum altitude than the standard Poon Hill trek, making it a step up in both duration and difficulty, though still manageable for moderately fit trekkers."
                },
                {
                  q: "Can I do Khopra Trek without a guide?",
                  a: "Independent trekking is possible, though guide and permit regulations can change. It's worth confirming current requirements with a Pokhara-based agency before finalizing an independent plan."
                },
                {
                  q: "What is the best season for Khopra Trek?",
                  a: "Autumn (October–November) offers the clearest views, while spring (March–April) brings blooming rhododendron forests. Both are strong choices."
                },
                {
                  q: "How many days does the Khopra Trek usually take?",
                  a: "Most itineraries run between 7 and 9 days round trip from Pokhara, depending on the starting route and whether you add the Khayer Lake extension."
                },
                {
                  q: "Is Khayer Lake worth adding to the trek?",
                  a: "For trekkers who are acclimatizing well, yes — it adds significant scenic and cultural value for one extra day. Those struggling with altitude at Khopra Ridge may want to skip it."
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
              Starting the Khopra Trek from Pokhara comes down to a handful of decisions: how you get to the trailhead, which route you start from, whether you trek independently or with a guide, and how thoroughly you prepare before leaving Lakeside. Get your permits sorted, your cash withdrawn, and your gear checked in Pokhara, and the rest of the trek becomes far less about logistics and far more about the walk itself.
            </p>
          </article>

          {/* SECTION 13: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Ready to plan your Khopra Trek from Pokhara?
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Our local team can arrange private jeep transfers with hotel pickup, pre-processed ACAP and TIMS permits, and experienced local guides — so you can focus on the trek instead of the logistics.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Request custom plan &rarr;
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
