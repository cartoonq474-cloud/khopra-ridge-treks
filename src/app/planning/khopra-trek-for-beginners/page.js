import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/planning/khopra-trek-for-beginners",
  },
  title: "Khopra Ridge Trek for Beginners: Complete Difficulty, Cost & Preparation Guide",
  description: "Wondering if the Khopra Ridge Trek is right for a beginner? Get the full picture on difficulty, altitude, cost, fitness, itinerary options, and expert preparation tips.",
};

export default function Page() {
  const summarySpecs = [
    { label: "Difficulty Grade", value: "Moderate (Novice Friendly)" },
    { label: "Daily Walking", value: "5 to 7 Hours" },
    { label: "Max Elevation", value: "3,660m (Trek) / 4,660m (Lake)" },
    { label: "Best Time to Visit", value: "Autumn & Spring" }
  ];

  const trainingRoutine = [
    { week: "Weeks 1–4 (Cardio Foundation)", focus: "Stair Climbing & Fast Walking", desc: "Build cardiovascular baseline. Hike local hills or use a stairmaster for 45 minutes, three times a week, while carrying a light 5kg backpack to start adapting your body to load-bearing movement." },
    { week: "Weeks 5–8 (Strength & Endurance)", focus: "Leg Strength & Carrying Load", desc: "Increase your training pack weight to 8kg and add squats, lunges, and calf raises to build the leg strength that protects your knees on long descents. Take longer weekend hikes of four to six hours during this phase." },
    { week: "Weeks 9–10 (Trek Simulation & Recovery)", focus: "HIIT Intervals & Joint Rest", desc: "Incorporate high-intensity interval training to improve lung capacity and practice slow, rhythmic breathing. Stretch your core joints daily, and run one back-to-back weekend hike simulation." }
  ];

  const packingEssentials = [
    {
      category: " Layered Clothing",
      items: [
        "Moisture-wicking synthetic base layers",
        "Insulating fleece mid-layers",
        "Warm down jacket (rated to -10°C)",
        "Waterproof and windproof outer shell",
        "Insulated gloves and warm winter beanie"
      ]
    },
    {
      category: " Footwear & Gear",
      items: [
        "Well broken-in hiking boots (min 30-40km)",
        "Trekking poles (reduces joint strain)",
        "Lightweight daypack (25-35 liters)",
        "Headlamp with spare lithium batteries"
      ]
    },
    {
      category: " Health & Accessories",
      items: [
        "High UV protection sunglasses & SPF 50+",
        "Water purification tablets or filter bottles",
        "Blister care tape and moleskin patches",
        "High-capacity portable USB power bank"
      ]
    }
  ];

  const comparisons = [
    { name: "Poon Hill", duration: "2-4 Days", maxAlt: "3,210m", crowd: "Very High", difficulty: "Easy" },
    { name: "Mardi Himal", duration: "5-6 Days", maxAlt: "4,500m", crowd: "Moderate", difficulty: "Moderate" },
    { name: "Khopra Ridge", duration: "7-9 Days", maxAlt: "3,660m / 4,660m", crowd: "Low", difficulty: "Moderate" }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">Planning Directory
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">Khopra Ridge Trek for Beginners
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">Thinking of taking on the Himalayas for the first time? Our complete guide breaks down difficulty ratings, altitude profiles, packing tips, budget calculations, and training timelines to ensure your first trek is safe and memorable.
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
              <a href="#overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                1. Planning Guide Overview
              </a>
              <a href="#suitability" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                2. Suitability for Beginners
              </a>
              <a href="#difficulty" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                3. Overall Difficulty
              </a>
              <a href="#altitude" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                4. Altitude &amp; AMS Risk
              </a>
              <a href="#route-overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                5. Route &amp; Lodging
              </a>
              <a href="#itineraries" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                6. Beginner Itineraries
              </a>
              <a href="#fitness" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                7. Fitness &amp; Training Plan
              </a>
              <a href="#costs" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                8. Trip Costs Explained
              </a>
              <a href="#season" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                9. Best Season to Go
              </a>
              <a href="#guide-vs-solo" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                10. Guided vs Independent
              </a>
              <a href="#packing" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                11. Essential Packing List
              </a>
              <a href="#safety" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                12. Safety Rules &amp; Mistakes
              </a>
              <a href="#comparison" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                13. Comparative Matrix
              </a>
              <a href="#faq" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                14. Frequently Asked Qs
              </a>
            </nav>
            <div className="pt-4 border-t border-stone-100">
              <Link 
                href="/contact"
                className="w-full text-center block bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider py-3 rounded-2xl shadow-sm transition duration-200"
              >Inquire &amp; Book Tour
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* SECTION 1: OVERVIEW */}
          <article id="overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Khopra Ridge Trek for Beginners: Complete Planning &amp; Preparation Guide
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>If this is your first time looking at a Himalayan trek, the <Link href="/" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Khopra Ridge Trek</Link> probably came up because someone told you it&apos;s &quot;beginner-friendly&quot; — and then you started wondering if that&apos;s actually true, or just something people say to sell a trip. It&apos;s a fair question. The trail climbs from around 1,400m to over 3,660m, and the optional side trip to Khayer Lake pushes past 4,660m. Those numbers can sound intimidating if you&apos;ve never trekked above sea level before.
              </p>
              <p>Here&apos;s the short version: yes, most reasonably active beginners can complete the Khopra Ridge Trek, provided they prepare properly and walk at the right pace. It doesn&apos;t require ropes, crampons, or any technical climbing skill. What it does require is a realistic understanding of the daily walking hours, the altitude, the costs, and the kind of physical preparation that makes the difference between an enjoyable trek and a miserable one.
              </p>
            </div>
          </article>

          {/* SECTION 2: SUITABILITY */}
          <article id="suitability" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Is the Khopra Ridge Trek Suitable for Beginners?
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>The Khopra Ridge Trek sits in an unusual sweet spot. It&apos;s demanding enough to feel like a real Himalayan adventure, but accessible enough that someone with no mountaineering background can realistically finish it. The trail is a walking route — stone steps, forest paths, and open ridgeline — not a climbing route. There&apos;s no technical gear involved at any point on the standard itinerary.
              </p>
              <h3 className="text-lg font-bold text-stone-900">What Makes Khopra Ridge Beginner Friendly</h3>
              <p>The trail itself is well-established and easy to follow, with stone staircases and dirt paths maintained by the local Magar and Gurung communities. You&apos;re never navigating unmarked terrain or scrambling over loose rock. Teahouses and community lodges appear at regular intervals, so you&apos;re rarely more than a few hours from a hot meal, a bed, and basic facilities.
              </p>
              <p>The daily distances are also manageable. Most days involve five to seven hours of walking, which is enough to feel like a genuine trekking day without pushing into the kind of marathon stages found on longer expedition routes. Because the trek follows a single ridge corridor rather than crossing multiple high passes, the elevation profile is more predictable.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Challenges First-Time Trekkers Should Expect</h3>
              <p>That said, &quot;beginner-friendly&quot; doesn&apos;t mean easy. Expect long, sustained uphill climbs, particularly on the approach from Tadapani toward Dobato, where the trail gains significant elevation through dense rhododendron forest. Stone steps are common, and they&apos;re harder on the knees during descent than most people anticipate. You&apos;ll also be walking multiple consecutive days without a rest day built in on the shorter itineraries.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Who Should Consider This Trek (and Who May Struggle)</h3>
              <p>This route suits active travelers who exercise somewhat regularly, even if they&apos;ve never hiked at altitude before. It works well for solo travelers, couples, or small groups who want a quieter alternative to the busier Annapurna trails. If you&apos;re completely sedentary and rarely walk for more than 20–30 minutes at a stretch, the trek will feel significantly harder than expected. Anyone hoping to &quot;wing it&quot; with zero preparation time is taking on unnecessary risk.
              </p>
            </div>
          </article>

          {/* SECTION 3: DIFFICULTY */}
          <article id="difficulty" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">How Difficult Is the Khopra Ridge Trek?
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>Compared to a true beginner trek like Poon Hill, which is typically completed in two to four days at lower elevations, Khopra Ridge is noticeably harder — longer days, higher altitude, and more sustained climbing. Compared to demanding treks like Annapurna Base Camp or the Annapurna Circuit, Khopra Ridge is easier, with no high-altitude pass crossings and a shorter overall timeline.
              </p>
              <p>Most trekking days on Khopra Ridge run five to seven hours, including breaks. Elevation gain per day varies, but the stretch from Ghandruk toward Tadapani and onward to Dobato involves some of the steepest sustained climbing on the route, often gaining 700–900 meters across a single day. The push from Tadapani to Dobato is widely considered the hardest single stretch.
              </p>
            </div>
          </article>

          {/* SECTION 4: ALTITUDE */}
          <article id="altitude" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Understanding the Khopra Ridge Trek Altitude
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>The main Khopra Ridge trail tops out at approximately 3,660 meters, with most overnight stays in the 2,000–3,500m range as the trek progresses. This is high enough that altitude effects are noticeable but well below the elevations where altitude sickness becomes a serious medical concern.
              </p>
              <p>The optional day hike to Khayer Lake reaches around 4,660 meters, making it the highest point most beginners will encounter on this trip. Because it&apos;s a there-and-back day hike rather than an overnight stay at that elevation, the exposure to extreme altitude is brief, which significantly reduces risk compared to sleeping at similar heights.
              </p>
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs leading-relaxed text-emerald-800">
                <strong>Altitude Sickness Prevention Tip:</strong>Walk slowly, drink plenty of water (around 4 liters daily), eat enough calories, and avoid alcohol. If symptoms of Acute Mountain Sickness (headache, nausea, dizziness) worsen, you must descend immediately.
              </div>
            </div>
          </article>

          {/* SECTION 5: ROUTE OVERVIEW */}
          <article id="route-overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">Khopra Ridge Trek Route Overview
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>Most Khopra Ridge itineraries begin with a drive from Pokhara to a starting village such as Nayapul or Kimche, typically taking one and a half to two hours by local jeep or private vehicle. From there, the walking begins, usually climbing through Ghandruk, Tadapani, Dobato, and onward to the Khopra Ridge community lodge area.
              </p>
              <p>Accommodation along the way ranges from standard teahouses to the community-run lodges that define the upper stretches of the trek. Rooms are simple — usually twin beds, shared bathrooms in most locations, and basic blankets — but they&apos;re warm, clean, and fed by genuinely good home-style Nepali cooking.
              </p>
            </div>
          </article>

          {/* SECTION 6: ITINERARIES */}
          <article id="itineraries" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Recommended Khopra Ridge Trek Itineraries
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <h3 className="text-lg font-bold text-stone-900">7-Day vs 9-Day Options</h3>
              <p>A standard 7-day version typically includes one day of driving, four to five days of trekking, and a return descent. Stretching the same route over 9 days adds buffer for slower pacing, an extra acclimatization day, and more flexibility if weather or fatigue slows progress. For first-time Himalayan trekkers, the 9-day version is usually the better choice.
              </p>
              <p>Adding the Khayer Lake side trip typically extends the itinerary by one additional day. Beginners who feel strong by that point in the trek can manage it, but it&apos;s worth treating as optional rather than mandatory.
              </p>
            </div>
          </article>

          {/* SECTION 7: FITNESS */}
          <article id="fitness" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">How Fit Do You Need to Be?
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>A realistic baseline is the ability to walk continuously for four to six hours on uneven terrain, climb several flights of stairs without significant breathlessness, and carry a daypack of 5–8kg comfortably.
              </p>

              {/* Training Routine Cards */}
              <div className="space-y-4 mt-6">
                <h3 className="text-lg font-bold text-stone-900">10-Week Training Routine for Beginners</h3>
                <div className="grid gap-6 md:grid-cols-3">
                  {trainingRoutine.map((tr, i) => (
                    <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-3">
                      <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">{tr.week}</span>
                      <h4 className="font-extrabold text-stone-950 text-sm">{tr.focus}</h4>
                      <p className="text-xs text-stone-500 leading-relaxed">{tr.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* SECTION 8: COSTS */}
          <article id="costs" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">What Does the Khopra Ridge Trek Cost?
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>Independent trekking means covering permits, teahouse accommodation, meals, and local transportation yourself. Guided packages bundle a licensed guide, permits, accommodation, and often meals into a single price.
              </p>
              <p>Hiring a porter to carry your main duffle bag is one of the most beginner-friendly decisions you can make. Porters let you walk with only a light daypack containing water, snacks, and layers. For first-timers, this small added cost often makes the difference between an enjoyable trek and an exhausting one.
              </p>
            </div>
          </article>

          {/* SECTION 9: BEST SEASON */}
          <article id="season" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Best Time for Beginners to Trek Khopra Ridge
            </h2>
            <div className="grid gap-6 md:grid-cols-2 text-stone-600 text-sm">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">Spring (March–May)</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Brings blooming rhododendron forests, moderate temperatures, and generally stable weather. Visibility is usually good, though afternoon haze can occasionally soften mountain views.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-955 text-sm">Autumn (September–November)</h4>
                <p className="text-xs text-stone-500 leading-relaxed font-medium">Widely considered the best overall season, with the clearest mountain views (up to 98% visibility), stable weather, and comfortable daytime temperatures.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 10: GUIDE VS SOLO */}
          <article id="guide-vs-solo" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">Guided Trek vs Independent Trek for Beginners
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>A licensed guide provides navigation support, manages pacing to suit your fitness level, communicates with teahouse owners, and recognizes early signs of altitude sickness. For a first Himalayan trek, this local knowledge is invaluable. Complete beginners with no high-altitude hiking background are almost always better served by a guided trek with porter support.
              </p>
            </div>
          </article>

          {/* SECTION 11: PACKING */}
          <article id="packing" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">Essential Packing List for First-Time Trekkers
            </h2>
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
              <div className="grid gap-6 md:grid-cols-3 text-xs text-stone-650">
                {packingEssentials.map((cat, i) => (
                  <div key={i}>
                    <h5 className="font-bold text-stone-900 uppercase tracking-wider mb-3">{cat.category}</h5>
                    <ul className="list-disc pl-4 space-y-1">
                      {cat.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* SECTION 12: SAFETY */}
          <article id="safety" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">Beginner Safety Tips and Common Mistakes
            </h2>
            <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
              <h3 className="text-lg font-bold">The Three Golden Rules of Himalayan Trekking</h3>
              <ul className="space-y-3 text-xs leading-relaxed list-disc pl-5">
                <li>
                  <strong>Walk &quot;Bistari, Bistari&quot; (Slowly, Slowly):</strong>Himalayan trekking is not a race. Walking at a slow, conversational pace is the single best way to prevent altitude sickness and save energy.
                </li>
                <li>
                  <strong>Hydrate Frequently:</strong>Your body loses water rapidly in dry, cold mountain air. Drink 4 liters of purified water daily (even when you don&apos;t feel thirsty).
                </li>
                <li>
                  <strong>Break In Your Boots:</strong>Never wear brand new hiking boots on the trail. Wear them on your training hikes for at least 30-40km to avoid painful blisters in remote valleys.
                </li>
              </ul>
            </div>
          </article>

          {/* SECTION 13: COMPARATIVE */}
          <article id="comparison" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">Khopra Ridge vs Other Beginner Treks in Nepal
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">Compare Khopra Ridge side-by-side with other popular beginner choices in the Annapurna Region:
            </p>

            {/* Comparison Table */}
            <div className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-stone-100 text-stone-700 uppercase font-black tracking-wider border-b border-stone-200">
                      <th className="p-4">Trek Name</th>
                      <th className="p-4">Duration</th>
                      <th className="p-4">Max Altitude</th>
                      <th className="p-4">Crowd Density</th>
                      <th className="p-4">Difficulty</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 font-medium text-stone-600">
                    {comparisons.map((item, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50 transition">
                        <td className="p-4 font-bold text-stone-900">{item.name}</td>
                        <td className="p-4 text-xs text-stone-500">{item.duration}</td>
                        <td className="p-4 text-xs text-stone-500">{item.maxAlt}</td>
                        <td className="p-4 text-xs text-stone-500">{item.crowd}</td>
                        <td className="p-4 font-bold text-emerald-600">{item.difficulty}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          {/* SECTION 14: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">Frequently Asked Questions About the Trek for Beginners
            </h2>
            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Is the Khopra Ridge Trek good for beginners?",
                  a: "Yes. The trail requires no technical climbing skills and follows established stone steps and forest paths, making it accessible to beginners who prepare with basic cardio and strength training beforehand."
                },
                {
                  q: "How difficult is the Khopra Ridge Trek?",
                  a: "It's rated moderate — harder than introductory treks like Poon Hill due to longer days and higher altitude, but easier than high-altitude expeditions since it involves no pass crossings or technical terrain."
                },
                {
                  q: "How many days does the Khopra Ridge Trek take?",
                  a: "Most itineraries run 7 to 9 days, including the drive from Pokhara and the return journey. Adding the Khayer Lake extension typically adds one more day."
                },
                {
                  q: "What is the highest altitude reached on the Khopra Ridge Trek?",
                  a: "The main trek reaches approximately 3,660 meters, while the optional Khayer Lake side trip climbs to around 4,660 meters."
                },
                {
                  q: "Can beginners visit Khayer Lake?",
                  a: "Most beginners who feel strong partway through the main trek can manage the Khayer Lake day hike, though it's the most physically demanding single day of the trip and should be treated as optional rather than mandatory."
                },
                {
                  q: "How much does the Khopra Ridge Trek cost?",
                  a: "Costs depend on whether you trek independently or with a guide and porter. Guided packages cost more upfront but include permits, accommodation coordination, and safety support, which many beginners find worthwhile."
                },
                {
                  q: "Do I need a guide for the Khopra Ridge Trek?",
                  a: "A guide isn't legally mandatory for this route, but for beginners, a local guide significantly improves safety, pacing, and overall trip enjoyment, especially around altitude awareness."
                },
                {
                  q: "What is the best month to trek Khopra Ridge?",
                  a: "Autumn (September–November) and spring (March–May) offer the most stable weather and clearest mountain views, making them the best windows for a first Himalayan trek."
                },
                {
                  q: "Is Khopra Ridge harder than Mardi Himal?",
                  a: "The two treks are broadly comparable in difficulty and altitude, though Khopra Ridge generally has a more gradual elevation profile and more developed lodge infrastructure along the way."
                },
                {
                  q: "How fit do I need to be for the Khopra Ridge Trek?",
                  a: "You should be able to walk continuously for four to six hours on uneven terrain and carry a light daypack comfortably. A 10-week training plan focused on cardio and leg strength is strongly recommended for anyone without recent hiking experience."
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

          {/* SECTION 15: CONCLUSION */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-955 font-sans">Conclusion</h2>
            <p className="text-stone-600 leading-relaxed text-sm">The Khopra Ridge Trek occupies a rare middle ground: challenging enough to feel like a genuine Himalayan accomplishment, yet realistic for a well-prepared beginner with no prior mountain trekking experience. The altitude, daily distances, and consecutive trekking days are real factors to respect, but none of them are barriers for someone who trains consistently, paces themselves on the trail, and makes sensible choices around guide and porter support.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">If you take one thing from this guide, let it be this: preparation matters more than natural athleticism on a trek like this. A moderately fit beginner who trains for ten weeks and walks slowly will have a better experience than a stronger hiker who shows up untrained and rushes the pace. Start your training timeline early, choose the itinerary length that gives your body room to adjust, and treat altitude with the respect it deserves.
            </p>
          </article>

          {/* SECTION 16: CTA & BOOKING */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Plan Your First Khopra Ridge Trek With Local Experts</h3>
              <p className="text-stone-300 text-sm leading-relaxed">Want to trek Khopra Ridge with certified guides who prioritize safety, sensible pacing, and porter support for first-timers? We&apos;ve guided hundreds of beginner hikers through this exact route, and our itineraries are built specifically to prevent fatigue and support safe acclimatization. Speak to us today to plan a personalized itinerary for your first Himalayan adventure.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >Inquire Now &rarr;
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
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">Our beginner training plans and difficulty ratings have been checked and verified by certified wilderness first-aid coordinators and licensed ACA guides.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
