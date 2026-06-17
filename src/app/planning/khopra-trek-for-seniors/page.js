import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Khopra Ridge Trek for Seniors: Safety, Difficulty & Planning Guide",
  description: "Planning the Khopra Ridge Trek after 60? Get expert guidance on difficulty, altitude, itinerary, porter support, and safety built for senior trekkers.",
};

export default function Page() {
  const summarySpecs = [
    { label: "Max Altitude", value: "3,660m (4,660m optional)" },
    { label: "Typical Difficulty", value: "Moderate" },
    { label: "Daily Walking", value: "4 to 6 Hours" },
    { label: "Recommended Support", value: "Guide & Porter" }
  ];

  const comparisons = [
    {
      trek: "Khopra Ridge Trek",
      altitude: "~3,660m (4,660m optional)",
      difficulty: "Moderate",
      crowd: "Low",
      suitability: "Excellent"
    },
    {
      trek: "Poon Hill Trek",
      altitude: "~3,210m",
      difficulty: "Easy to Moderate",
      crowd: "High",
      suitability: "Good"
    },
    {
      trek: "Annapurna Base Camp",
      altitude: "~4,130m",
      difficulty: "Moderate to Hard",
      crowd: "High",
      suitability: "Moderate"
    }
  ];

  const faqItems = [
    {
      q: "Is the Khopra Ridge Trek safe for seniors?",
      a: "Yes, with proper pacing, porter support, and a guide who monitors health daily. The trail is non-technical, and the route's moderate altitude makes it a safer high-altitude option than many comparable Annapurna treks."
    },
    {
      q: "Can people over 60 do the Khopra Ridge Trek?",
      a: "Most active seniors over 60 complete this trek comfortably, especially with a slower itinerary spread over nine days instead of the standard six or seven. Medical clearance is recommended for anyone with cardiovascular or joint conditions."
    },
    {
      q: "Can people over 70 trek in Nepal safely?",
      a: "Yes, many trekkers over 70 complete moderate routes like Khopra Ridge each year, provided they're in reasonably good health, train beforehand, and use porter and guide support. A doctor's clearance before departure is strongly advised at this age."
    },
    {
      q: "How difficult is the Khopra Ridge trail?",
      a: "The trail is rated moderate, involving 4 to 6 hours of daily walking over dirt paths, forest trails, and stone staircases. There are no technical climbing sections, but steep stone descents require care and trekking poles."
    },
    {
      q: "What is the altitude of the Khopra Ridge Trek?",
      a: "The main route reaches approximately 3,660 meters at the ridge lodge. An optional side hike to Khayer Lake reaches around 4,660 meters, though most senior trekkers choose to skip this extension."
    },
    {
      q: "Is altitude sickness dangerous for senior trekkers?",
      a: "Altitude sickness can affect trekkers of any age, but Khopra Ridge's gradual ascent profile and moderate maximum altitude reduce the risk compared to higher treks. Daily oxygen monitoring and immediate reporting of symptoms keep the risk well managed."
    },
    {
      q: "Do I need porter support for this trek?",
      a: "Porter support isn't strictly mandatory, but it's strongly recommended for senior trekkers. Carrying only a light daypack instead of a full duffel bag significantly reduces strain on the knees, hips, and back over multiple trekking days."
    },
    {
      q: "Is helicopter rescue available on the Khopra Ridge route?",
      a: "Yes. The Annapurna Conservation Area has an organized emergency evacuation system, including helicopter rescue when medically necessary, coordinated directly with your travel insurance provider."
    },
    {
      q: "Which Nepal trek is best for older travelers?",
      a: "Among popular options, Khopra Ridge offers one of the best balances of genuine mountain scenery, lower crowd levels, and moderate physical demand. It's generally gentler than Annapurna Base Camp and less crowded than Poon Hill."
    },
    {
      q: "How should I prepare physically before trekking in Nepal?",
      a: "Start with regular one- to two-hour walks several weeks before departure, ideally including hills or stairs, and train with the daypack you'll actually carry. A pre-trek medical check is also recommended, especially for anyone managing a chronic health condition."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            👵 Seniors Trekking Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Khopra Ridge Trek for Seniors
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Planning a trip to the Himalayas later in life? Get accurate guidance on trail conditions, altitude acclimatization, physical preparation, and logistics designed for older travelers.
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
            <h3 className="text-xs font-black uppercase text-stone-400 tracking-wider pb-3 border-b border-stone-100">
              Table of Contents
            </h3>
            <nav className="flex flex-col gap-1 text-sm">
              <a href="#overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                1. Overview &amp; Guide
              </a>
              <a href="#suitability" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                2. Suitability Standards
              </a>
              <a href="#difficulty" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                3. Trail Difficulty
              </a>
              <a href="#altitude" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                4. Altitude &amp; Risks
              </a>
              <a href="#route-breakdown" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                5. Route &amp; Distances
              </a>
              <a href="#itinerary" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                6. Recommended Itinerary
              </a>
              <a href="#best-season" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                7. Best Seasons to Hike
              </a>
              <a href="#safety-measures" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                8. Safety &amp; Support
              </a>
              <a href="#preparation" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                9. Physical Preparation
              </a>
              <a href="#packing-list" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                10. Gear &amp; Packing List
              </a>
              <a href="#trek-comparison" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                11. Sibling Comparisons
              </a>
              <a href="#why-khopra" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                12. Why Choose Khopra
              </a>
              <a href="#faq" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                13. Frequently Asked Qs
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
              Khopra Ridge Trek for Seniors: Complete Safety and Planning Guide
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>
                Yes, active seniors can complete the Khopra Ridge Trek safely, and many do it every trekking season. The route reaches a respectable altitude, but the daily distances are short, the trail is non-technical, and <Link href="/planning/community-lodges-khopra-trek" className="text-emerald-700 font-bold hover:underline">community-run lodges</Link> line the way for warm meals and rest. What makes the difference for older trekkers is not fitness alone — it's pacing, preparation, and the right support on the ground.
              </p>
              <p>
                This guide walks through exactly what the Khopra Ridge Trek for seniors involves: how hard the trail really is, what altitude does to an older body, how to structure an itinerary that protects your joints and your energy, and what gear and preparation actually matter. If you're trying to decide whether this trek belongs on your list after 60 or 70, you'll find a straight answer here, not a sales pitch.
              </p>
            </div>
          </article>

          {/* SECTION 2: SUITABILITY STANDARDS */}
          <article id="suitability" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Is the Khopra Ridge Trek Suitable for Seniors?
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>
                In short, yes — with the right approach. The Khopra Ridge Trek sits in a sweet spot among Himalayan routes: high enough to deliver genuine mountain views, but gentle enough in its daily demands that fit seniors regularly complete it without major difficulty.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Why Active Seniors Can Successfully Complete the Trek</h3>
              <p>
                The trail itself has no technical sections — no rope work, no exposed scrambling, no glacier crossings. You're walking on dirt paths, stone steps, and forest trails the entire way. That alone separates Khopra Ridge from more demanding routes in the Annapurna and Everest regions.
              </p>
              <p>
                Daily walking times are also manageable when the itinerary is built correctly. Spread over nine days instead of the standard six or seven, the trek becomes a sequence of moderate walking days rather than a string of long, draining ones. Add in the locally run teahouses along the way, where a hot meal and a real bed are always waiting at the end of the day, and the trek becomes far more forgiving than its altitude profile might suggest.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Which Seniors Should Avoid This Trek</h3>
              <p>
                Honesty matters here. The Khopra Ridge Trek is not the right choice for everyone, regardless of age. Trekkers with uncontrolled high blood pressure, unstable heart conditions, or a recent cardiac event should not attempt this route without explicit medical clearance.
              </p>
              <p>
                The same caution applies to anyone with severe knee or hip issues that make multi-hour walking painful on flat ground, since the trail includes sustained stone staircases and steep descents. If you're managing a chronic condition, the right move is a conversation with your doctor before booking — not after you've already committed to flights and dates.
              </p>
            </div>
          </article>

          {/* SECTION 3: TRAIL DIFFICULTY */}
          <article id="difficulty" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How Difficult Is the Khopra Ridge Trek for Older Travelers?
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>
                &ldquo;Moderate&rdquo; is the most accurate way to describe this trek's difficulty, but that word means little without specifics. Here's what moderate actually looks like on the ground.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Daily Walking Hours and Physical Effort Required</h3>
              <p>
                Most days on the trail involve four to six hours of walking, including rest breaks. That's noticeably shorter than the seven-to-eight-hour days common on busier Annapurna routes. The terrain rolls rather than climbs continuously — expect a mix of uphill stretches, gentle ridgeline walking, and descents, rather than one long grind to altitude.
              </p>
              <p>
                The cumulative effect matters more than any single day. Walking moderately for several consecutive days asks more of your stamina than one hard day followed by rest. This is exactly why pacing — not raw fitness — tends to determine how comfortable the trek feels for older trekkers.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Understanding Trail Conditions on the Khopra Ridge Trail</h3>
              <p>
                The Khopra Ridge trail moves through several distinct terrain types. Lower sections wind through rhododendron and oak forest on packed dirt paths, often shaded and pleasant underfoot. Higher up, especially near the ridge itself, the trail opens onto exposed ground with longer views and cooler air.
              </p>
              <p>
                The most physically demanding stretches are the stone staircases, particularly the steep descent from Khopra Ridge down toward Swanta village. Stone steps are harder on the knees than dirt trail, especially going down, which is exactly where trekking poles and a slower pace make the biggest difference. Wet weather can also make these stone sections slippery, so trail conditions deserve real attention when planning your trekking season.
              </p>
            </div>
          </article>

          {/* SECTION 4: ALTITUDE & RISKS */}
          <article id="altitude" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Understanding the Khopra Ridge Altitude and Acclimatization Risks
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>
                Altitude is usually the first concern senior trekkers raise, and it deserves a clear, honest answer rather than reassurance for its own sake.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Maximum Altitude Reached During the Trek</h3>
              <p>
                The highest point most trekkers reach on the core Khopra Ridge route is the ridge lodge itself, sitting at approximately 3,660 meters. That's high enough to require sensible acclimatization, but well below the altitudes — typically above 4,500 to 5,000 meters — where altitude sickness risk rises sharply for most travelers.
              </p>
              <p>
                For context, this puts Khopra Ridge in a more moderate altitude bracket than treks like Annapurna Base Camp or Everest Base Camp, which is one reason it's often recommended as a gentler high-altitude option for older trekkers who still want genuine Himalayan scenery.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Preventing Altitude Sickness on the Trek</h3>
              <p>
                Acute Mountain Sickness (AMS) can affect trekkers of any age, and its early symptoms — headache, nausea, fatigue, and disturbed sleep — are worth watching for closely. The Khopra Ridge route's gradual ascent profile already works in your favor, since the trail climbs steadily rather than gaining altitude in sudden jumps.
              </p>
              <p>
                Beyond pacing, a few habits make a real difference: drink more water than you think you need, avoid alcohol during the trek, and report any symptoms to your guide immediately rather than pushing through them. Reputable guides on this route carry pulse oximeters and check oxygen saturation daily, which gives an objective way to track how well your body is acclimatizing.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Is the Optional Khayer Lake Hike Recommended for Seniors?</h3>
              <p>
                <Link href="/guides/khayer-lake-ultimate-guide" className="text-emerald-700 font-bold hover:underline">Khayer Lake</Link> sits at roughly 4,660 meters, nearly 1,000 meters above the ridge lodge, and reaching it requires a long, demanding round-trip hike in a single day. For most senior trekkers, this side trip is optional for good reason.
              </p>
              <p>
                Unless you're feeling strong, well-acclimatized, and have built extra rest into your schedule beforehand, skipping Khayer Lake is the more comfortable choice. The ridge lodge itself already offers sweeping 360-degree mountain views, which means you don't have to chase the extra altitude to feel like the trek delivered on its promise.
              </p>
            </div>
          </article>

          {/* SECTION 5: ROUTE & DISTANCES */}
          <article id="route-breakdown" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Ridge Trek Route and Walking Distance Breakdown
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <h3 className="text-lg font-bold text-stone-900">Typical Trek Route From Pokhara to Khopra Ridge</h3>
              <p>
                Most itineraries begin with a drive from Pokhara to a trailhead village, then proceed on foot through a sequence of settlements: <Link href="/nodes/ghandruk-village-guide" className="text-emerald-700 font-bold hover:underline">Ghandruk</Link>, <Link href="/nodes/tadapani-guide" className="text-emerald-700 font-bold hover:underline">Tadapani</Link>, <Link href="/nodes/dobato-guide" className="text-emerald-700 font-bold hover:underline">Dobato</Link>, and Chistibung or <Link href="/nodes/bayeli-kharka-guide" className="text-emerald-700 font-bold hover:underline">Bayeli Kharka</Link> before reaching Khopra Ridge itself. From the ridge, the descending route typically passes through <Link href="/nodes/swanta-village-guide" className="text-emerald-700 font-bold hover:underline">Swanta village</Link> before exiting back toward the road and on to Pokhara.
              </p>
              <p>
                Each stop along this route has its own lodges, so the journey is broken into digestible daily segments rather than long, isolated stretches between accommodation.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Total Trek Distance and Average Daily Walking Distance</h3>
              <p>
                The full Khopra Ridge route covers a moderate overall distance for a multi-day Himalayan trek, but the figure that matters most for senior trekkers is the daily breakdown, not the total. A senior-paced itinerary typically targets shorter daily distances — often in the range of 8 to 10 kilometers per day — compared to the 12 to 15 kilometers some standard itineraries push through on a single day.
              </p>
              <p>
                That difference might look small on paper, but over several consecutive days at altitude, it's often the single biggest factor in how fresh you feel each morning.
              </p>
            </div>
          </article>

          {/* SECTION 6: RECOMMENDED ITINERARY */}
          <article id="itinerary" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Recommended Senior-Friendly Khopra Ridge Itinerary
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>
                A good itinerary is the most powerful tool for making this trek comfortable, and it costs nothing extra to plan it well.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Why a 9-Day Itinerary Works Best for Seniors</h3>
              <p>
                Standard Khopra Ridge itineraries run six to seven days. Stretching the same route across nine days doesn't add distance — it simply spreads the same walking over more, shorter days. The result is lower daily exertion, better natural acclimatization, and more energy left over to actually enjoy the lodges and the views.
              </p>
              
              <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-4">
                <h4 className="text-base font-extrabold text-stone-900">Representative 9-Day Senior Itinerary Structure:</h4>
                <ol className="space-y-3 pl-4 border-l-2 border-emerald-500 text-xs">
                  <li className="relative pl-2">
                    <strong className="text-stone-900">Day 1:</strong> Arrive in Pokhara; rest and final preparations.
                  </li>
                  <li className="relative pl-2">
                    <strong className="text-stone-900">Day 2:</strong> Drive to trailhead and trek to Ghandruk village.
                  </li>
                  <li className="relative pl-2">
                    <strong className="text-stone-900">Day 3:</strong> Trek from Ghandruk to Tadapani.
                  </li>
                  <li className="relative pl-2">
                    <strong className="text-stone-900">Day 4:</strong> Trek from Tadapani to Dobato.
                  </li>
                  <li className="relative pl-2">
                    <strong className="text-stone-900">Day 5:</strong> Trek from Dobato to Khopra Ridge (built-in acclimatization stops).
                  </li>
                  <li className="relative pl-2">
                    <strong className="text-stone-900">Day 6:</strong> Rest day at Khopra Ridge, or short viewpoint exploration walk.
                  </li>
                  <li className="relative pl-2">
                    <strong className="text-stone-900">Day 7:</strong> Descend from Khopra Ridge to Swanta village.
                  </li>
                  <li className="relative pl-2">
                    <strong className="text-stone-900">Day 8:</strong> Trek from Swanta back to the road head and drive to Pokhara.
                  </li>
                  <li className="relative pl-2">
                    <strong className="text-stone-900">Day 9:</strong> Buffer day in Pokhara for rest, weather contingency, or onward travel.
                  </li>
                </ol>
              </div>

              <h3 className="text-lg font-bold text-stone-900">Building Extra Rest Days Into the Trek Plan</h3>
              <p>
                The single most useful addition to any senior itinerary is a buffer day — ideally placed around the highest point of the trek or right before the descent. A buffer day absorbs bad weather, an off day physically, or simply the desire to rest before tackling the steeper sections.
              </p>
              <p>
                This kind of flexibility is exactly why we recommend booking a guided trek with an itinerary that can shift by a day if conditions or energy levels call for it, rather than a fixed schedule that pushes forward regardless.
              </p>
            </div>
          </article>

          {/* SECTION 7: BEST SEASON */}
          <article id="best-season" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Time of Year for Seniors to Trek in Nepal
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>
                Season affects trail conditions, temperature, and visibility — all of which matter more for senior comfort than for younger trekkers chasing a faster pace.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Why Spring and Autumn Offer the Best Conditions</h3>
              <p>
                Spring, roughly March through May, brings blooming rhododendron forests and moderate daytime temperatures, making the walking itself more pleasant. Autumn, from September through November, is generally considered the most reliable season, with clearer skies, stable weather, and the best mountain visibility of the year.
              </p>
              <p>
                Both seasons offer daytime temperatures that are comfortable for walking while still requiring warm layers at higher elevations and in the evenings.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Why Winter and Monsoon Require Extra Caution</h3>
              <p>
                Winter trekking is possible but comes with real trade-offs: colder temperatures at altitude, occasional snow on the higher sections of the ridge, and icy patches on stone steps that increase fall risk. Monsoon season, from roughly June through August, brings frequent rain, slippery trail surfaces, leeches in the lower forest sections, and clouds that often obscure the views.
              </p>
              <p>
                For senior trekkers prioritizing comfort and safety over flexibility, spring or autumn departures are almost always the better choice.
              </p>
            </div>
          </article>

          {/* SECTION 8: SAFETY & SUPPORT */}
          <article id="safety-measures" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Safety Measures We Recommend for Senior Trekkers
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>
                Trail difficulty is only part of the safety picture. Support systems matter just as much, especially for older trekkers managing energy and joint strain over several days.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Why Porter Support Makes the Trek Much Easier</h3>
              <p>
                A porter typically carries your main duffel bag, up to around 12.5 kilograms per trekker, leaving you to carry only a light daypack with water, snacks, medication, and an extra layer. This single arrangement removes one of the biggest physical burdens of multi-day trekking and noticeably reduces strain on the knees, hips, and lower back over consecutive days.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Why Guided Trekking Is Strongly Recommended</h3>
              <p>
                A local guide brings more than route knowledge. On a senior-paced trek, a good guide actively manages pacing, watches for early signs of fatigue or altitude symptoms, and communicates with lodges ahead to make sure rooms and meals are ready when you arrive tired. Daily health checks, including oxygen saturation monitoring, give an extra layer of objective safety that's hard to replicate trekking independently.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Emergency Rescue and Evacuation Options</h3>
              <p>
                The Annapurna Conservation Area, where the Khopra Ridge Trek takes place, has a well-organized emergency evacuation infrastructure, including helicopter rescue when medically necessary. Guides on this route typically carry communication equipment and first-aid kits, and they coordinate directly with your travel insurance provider if evacuation becomes necessary.
              </p>
              <p>
                This is also why travel insurance covering high-altitude medical evacuation — ideally up to at least 5,000 meters — isn't optional for this trek. It's a basic requirement.
              </p>
            </div>
          </article>

          {/* SECTION 9: PHYSICAL PREPARATION */}
          <article id="preparation" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How to Prepare Physically Before Trekking After 60 or 70
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>
                Preparation in the weeks before departure does more for trek comfort than almost anything you can do once you're on the trail.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Walking and Stair Training Before the Trek</h3>
              <p>
                Start building toward sustained one- to two-hour walks several weeks before departure, ideally on varied terrain that includes hills or stairs. Training with your actual daypack helps your body adjust to carrying weight, which matters even when a porter handles your main bag.
              </p>
              <p>
                Consistency matters more than intensity here. Three or four moderate walks a week in the month before your trek will do more for your endurance than one exhausting hike the weekend before you fly.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Health Checks and Medical Preparation Before Arrival</h3>
              <p>
                A pre-trek consultation with your doctor is worth the appointment, especially if you have any cardiovascular, joint, or respiratory condition. This is the right time to discuss how your specific medications interact with altitude, confirm your blood pressure is well controlled, and get an honest assessment of your joint health for sustained descents.
              </p>
              <p>
                Bring a clearly labeled supply of any prescription medications, along with a basic written summary of your medical history that your guide can access in an emergency.
              </p>
            </div>
          </article>

          {/* SECTION 10: GEAR & PACKING LIST */}
          <article id="packing-list" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Essential Packing List for Senior Trekkers
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>
                The right gear reduces physical strain in ways that matter far more at 60 or 70 than they did at 30. Check out our comprehensive <Link href="/planning/packing-checklist" className="text-emerald-700 font-bold hover:underline">Interactive Packing Checklist</Link> for seasonal gear specifications.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Gear That Reduces Physical Strain on the Trail</h3>
              <ul className="list-disc pl-5 space-y-1 text-xs text-stone-500">
                <li><strong>Trekking poles:</strong> These reduce impact on the knees and hips during descents, particularly on the steep stone sections between Khopra Ridge and Swanta.</li>
                <li><strong>A lightweight daypack:</strong> Large enough for water, snacks, and a layer, but light enough not to add unnecessary load.</li>
                <li>Well broken-in hiking boots with good ankle support.</li>
                <li>A knee brace or support sleeve, if you have any history of joint discomfort.</li>
              </ul>
              <h3 className="text-lg font-bold text-stone-900">Clothing and Health Essentials for Mountain Comfort</h3>
              <ul className="list-disc pl-5 space-y-1 text-xs text-stone-500">
                <li>Layered thermal base layers for cold mornings and evenings.</li>
                <li>A quality down jacket for the ridge lodge, where temperatures drop quickly after sunset.</li>
                <li>A sleeping bag rated to around -10&deg;C for warmth in unheated lodge rooms.</li>
                <li>Sun protection, including a hat and sunscreen, since UV exposure increases with altitude.</li>
                <li>A basic first-aid kit and any personal medications, clearly labeled and easily accessible.</li>
              </ul>
            </div>
          </article>

          {/* SECTION 11: SIBLING COMPARISONS */}
          <article id="trek-comparison" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Is Khopra Ridge Better Than Other Nepal Treks for Seniors?
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              For senior travelers weighing options, here is how Khopra Ridge stacks up against two of the most commonly compared alternatives:
            </p>

            {/* Trek Comparison Table */}
            <div className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-stone-100 text-stone-700 uppercase font-black tracking-wider border-b border-stone-200">
                      <th className="p-4">Trek Route</th>
                      <th className="p-4">Max Altitude</th>
                      <th className="p-4">Typical Difficulty</th>
                      <th className="p-4">Crowd Levels</th>
                      <th className="p-4">Senior Suitability</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 font-medium text-stone-600">
                    {comparisons.map((c, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50 transition">
                        <td className="p-4 font-bold text-stone-900">{c.trek}</td>
                        <td className="p-4 text-xs text-stone-500">{c.altitude}</td>
                        <td className="p-4 text-xs text-stone-500">{c.difficulty}</td>
                        <td className="p-4 text-xs font-bold text-emerald-600">{c.crowd}</td>
                        <td className="p-4 text-xs font-bold text-stone-900">{c.suitability}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="text-stone-600 leading-relaxed text-sm space-y-4 mt-6">
              <h3 className="text-lg font-bold text-stone-900">Comparing Khopra Ridge vs Poon Hill Trek</h3>
              <p>
                Poon Hill is shorter and slightly easier, which makes it a reasonable choice for seniors with limited time or more conservative fitness levels. The trade-off is crowding — Poon Hill is one of the most popular short treks in the Annapurna region, especially around sunrise viewpoints.
              </p>
              <p>
                Khopra Ridge asks slightly more of you physically, but delivers comparable, arguably more expansive, mountain views with a fraction of the foot traffic. For seniors who want a quieter, more immersive experience without the trek becoming significantly harder, Khopra Ridge is usually the better trade.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Comparing Khopra Ridge vs Annapurna Base Camp Trek</h3>
              <p>
                Annapurna Base Camp reaches a notably higher altitude, around 4,130 meters, and typically demands more consecutive long walking days. That combination raises both the physical demand and the altitude-related risk for older trekkers compared to Khopra Ridge.
              </p>
              <p>
                If your goal is genuine Himalayan scenery without pushing into the altitude range where acclimatization becomes more difficult to manage, Khopra Ridge offers a meaningfully gentler version of a similar experience. Learn more in our <Link href="/guides/which-annapurna-trek-to-choose" className="text-emerald-700 font-bold hover:underline">Annapurna Route Decision Guide</Link>.
              </p>
            </div>
          </article>

          {/* SECTION 12: WHY CHOOSE KHOPRA */}
          <article id="why-khopra" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why We Recommend Khopra Ridge as a Senior-Friendly Trekking Experience
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <h3 className="text-lg font-bold text-stone-900">How Our Guides Support Older Trekkers</h3>
              <p>
                We build itineraries specifically around custom pacing rather than fixed daily targets, which means walking speed and rest stops adjust to how you're actually feeling, not a printed schedule. Daily health monitoring, flexible day-by-day planning, and guides who know this specific route well are the difference between a trek that feels rushed and one that feels manageable.
              </p>
              <p>
                There's also a community dimension worth knowing about: lodge accommodation along this route is community-owned, and profits go directly toward funding local schools and clinics in Magar villages along the trail — meaning your trek also supports the communities you're walking through.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Building a Comfortable Trek Designed Around Your Pace</h3>
              <p>
                A senior-friendly trek isn't a stripped-down version of a standard itinerary — it's a deliberately built one, with extra rest days, dedicated porter support, and a guide whose job includes watching your pacing as closely as the trail itself. If you want that kind of itinerary, the planning conversation is worth having before you book flights.
              </p>
            </div>
          </article>

          {/* SECTION 13: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 mt-6">
              {faqItems.map((faq, idx) => (
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

          {/* CONCLUSION */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-955 font-sans">Conclusion</h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              The Khopra Ridge Trek is one of the more realistic high-altitude trekking options for active seniors — not because it's easy, but because its difficulty is manageable when the itinerary, support, and preparation are built around an older trekker's needs rather than a standard, one-size-fits-all schedule. Moderate daily distances, a non-technical trail, a sensible maximum altitude, and reliable porter and guide support all work in your favor here.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              The trekkers who enjoy this route most aren't necessarily the fittest ones — they're the ones who pace themselves, train beforehand, and choose support that actually adjusts to how they're feeling each day. With the right planning, the views from Khopra Ridge are well within reach.
            </p>
          </article>

          {/* CTA SECTION */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Plan a Comfortable Mountain Trek</h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Plan a comfortable, senior-friendly Khopra Ridge itinerary built around your pace. Contact us to customize a 9-day trek with extra rest days, dedicated porter support, and experienced guides who monitor your health every step of the way.
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
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Tour:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/planning/khopra-trek-permits" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    📝 Check trekking permit requirements (ACAP &amp; TIMS)
                  </Link>
                  <Link href="/planning/pokhara-to-ghandruk" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    🚙 View Pokhara to Ghandruk Transportation Guide
                  </Link>
                  <Link href="/planning/packing-checklist" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    🎒 Get the interactive packing checklist for your gear
                  </Link>
                  <Link href="/weather/best-time-to-trek" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    ☀️ Check seasonal weather conditions before you go
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* EEAT Author Verification Banner */}
          <div className="p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
            <span className="text-2xl mt-0.5">🏔️</span>
            <div>
              <h4 className="font-bold text-stone-900 text-sm font-sans">Reviewed by Trail Experts</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                Our senior trekking safety programs, pacing models, and health monitoring checklists are compiled in cooperation with medical wilderness experts and regional rescue teams.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
