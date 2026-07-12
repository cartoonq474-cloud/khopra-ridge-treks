import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/nodes/birethanti-guide",
  },
  title: "Birethanti Village & Checkpoint Guide: Annapurna Trek Entry, Permits & Route Split",
  description: "Everything you need to know about Birethanti — the official entry gateway for Annapurna trekking. Learn how the ACAP and TIMS checkpoint works, how to reach it from Pokhara, and which trekking routes split here.",
};

export default function Page() {
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
            <Link href="/nodes" className="hover:text-emerald-400 transition-colors">Nodes</Link>
            <span>/</span>
            <span className="text-emerald-400">Birethanti Checkpoint</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Official Trek entry Gateway
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Birethanti Village &amp; Checkpoint Guide
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Annapurna trek entry, permit verification desks, travel options from Pokhara, and trail route splits.
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
              <a href="#gateway" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trek Entry Gateway
              </a>
              <a href="#checkpoint-process" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Checkpoint Process
              </a>
              <a href="#permits-required" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Permits &amp; Fees
              </a>
              <a href="#how-to-reach" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Pokhara to Birethanti
              </a>
              <a href="#route-options" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trekking Route Splits
              </a>
              <a href="#facilities" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Shops &amp; Environment
              </a>
              <a href="#safety-registration" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Safety Database
              </a>
              <a href="#field-insights" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Guide Field Insights
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
                Inquire with Planners
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Birethanti Village &amp; Checkpoint Guide: Annapurna Trek Entry, Permits &amp; Route Split
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Before any trail in the Annapurna region begins, every trekker passes through one single point: Birethanti. This is where your permits are inspected, your name is entered into the national trekker registry, and your route officially begins. It is not simply a village you pass through — it is the operational gateway into one of the world&apos;s most celebrated trekking regions.
              </p>
              <p>
                Whether you are heading toward Ghorepani and Poon Hill, looping through Ghandruk, or pushing further into the Annapurna Conservation Area, the journey starts at Birethanti&apos;s suspension bridges and government checkpoints. This guide explains exactly what happens when you arrive, what documents you need, how the permit process works, and which routes open up the moment you cross that bridge.
              </p>
            </div>
          </article>

          {/* SECTION: GATEWAY */}
          <article id="gateway" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Birethanti as the Entry Gateway to Annapurna Treks
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Birethanti sits at 1,025 metres (3,362 feet) above sea level, a modest elevation that gives little hint of the dramatic mountain terrain waiting beyond it. What makes it significant is not its altitude — it is its position. This village is where everything converges before the serious trekking begins.
              </p>
              <p>
                <strong>Location at the Confluence of Modi Khola and Bhurungdi Khola:</strong> Birethanti is built at the meeting point of two rivers: the Modi Khola and the Bhurungdi Khola. The roaring sound of water is your first impression as you arrive. The village is physically split by this river system, connected by iron suspension bridges that all trekkers must cross to reach the checkpoint.
              </p>
              <p>
                This confluence is not just scenic — it is the reason the settlement exists at all. River junctions in the Himalayas have historically been natural gathering and transit points, and Birethanti evolved from that geographic logic into the administrative and trekking hub it is today.
              </p>
              <p>
                <strong>Why Every Annapurna Trek Passes Through Birethanti:</strong> Birethanti marks the official boundary of the Annapurna Conservation Area. No trekker is permitted to enter the trails beyond this point without presenting valid permits and completing formal registration at the government checkpoint.
              </p>
              <p>
                This applies to every trekking route in the western Annapurna region — Ghorepani, Ghandruk, Khopra Ridge, Annapurna Base Camp approach routes, and all others. There is no alternate entry path. Every trekker, whether walking independently or with a licensed guide, stops here.
              </p>
              <p>
                <strong>Connection from Pokhara and Nayapul:</strong> The standard route from Pokhara follows a road of approximately 42 kilometres to Nayapul, the last point accessible by motorised vehicle. From Nayapul, it is a short 20–30 minute walk along a dirt track to reach Birethanti village and the checkpoint.
              </p>
              <p>
                Most trekkers travel this section by private jeep arranged from Pokhara, or by shared local transport. Some operators drive directly to Birethanti itself if road conditions allow. Either way, Birethanti is the definitive end of the road — beyond it, everything continues on foot.
              </p>
            </div>
          </article>

          {/* SECTION: CHECKPOINT PROCESS */}
          <article id="checkpoint-process" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Step-by-Step Birethanti Checkpoint Process
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                This is the section most trekkers search for and rarely find answered clearly. What actually happens when you arrive at Birethanti? Here is the real sequence, drawn from active trail operations.
              </p>
              <p>
                <strong>Arrival at Birethanti Bridge and Entry Flow:</strong> You arrive at Birethanti from the Nayapul side and cross the main suspension bridge over the Modi Khola. The checkpoint offices are positioned immediately after the bridge crossing — you cannot miss them. Officers are present during daylight trekking hours, and all trekkers are required to stop regardless of whether they have a guide managing the process.
              </p>
              <p>
                If you are trekking with a licensed guide, they will typically lead you directly to the registration desks. If you are trekking independently, follow the signs and join the queue at the ACAP inspection point first.
              </p>
              <p>
                <strong>ACAP Permit Inspection Process:</strong> The first desk you reach is the Annapurna Conservation Area Project (ACAP) permit checkpoint. The officer will:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
                <li>Ask to see your ACAP permit card</li>
                <li>Verify your name, nationality, and permit number against the document</li>
                <li>Log your entry date, trekking route, and permit reference number into the government logbook</li>
                <li>Stamp your permit as confirmation of entry</li>
              </ul>
              <p>
                Your ACAP permit must have been purchased before arriving at Birethanti — either in Pokhara (at the Nepal Tourism Board office in Damside or Lakeside) or in Kathmandu. The checkpoint issues no new ACAP permits at the standard rate.
              </p>
              <p>
                <strong>TIMS Card Registration and Tracking:</strong> The second step is TIMS registration. The Tourist Information Management System (TIMS) is Nepal&apos;s national trekker database, operated by the Nepal Tourism Board to track the movement of all trekkers across major routes. At the TIMS desk, officers will:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
                <li>Scan your TIMS card barcode to verify it is authentic</li>
                <li>Confirm your registered route matches your stated intention</li>
                <li>Record your group details and expected exit date</li>
                <li>Update the national trekker database in real time</li>
              </ul>
              <p>
                This registration is not bureaucratic procedure for its own sake. If you do not return from the trail, this database is what search and rescue teams use to identify your last known location, route, and travel companions. It is a genuine safety system.
              </p>
              <p>
                <strong>What Trekkers Actually Experience at the Checkpoint:</strong> For a well-prepared trekker with both documents ready, the entire checkpoint process typically takes between 10 and 20 minutes during normal conditions. During peak trekking seasons (October–November and March–May), queues can extend this to 30–45 minutes.
              </p>
              <p>
                Officers are professional and accustomed to international visitors. The process is orderly. Having your permits easily accessible in a document pouch rather than buried in your pack will save time and avoid unnecessary delays.
              </p>
            </div>
          </article>

          {/* SECTION: PERMITS REQUIRED */}
          <article id="permits-required" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Trekking Permits Required at Birethanti
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Arriving at Birethanti without the correct permits creates a significant problem — not a minor inconvenience. Understanding what is required before you travel is essential.
              </p>
              <p>
                <strong>What the ACAP Permit Covers:</strong> The ACAP permit is issued by the Annapurna Conservation Area Project, the government body responsible for managing the Annapurna Conservation Area — one of Nepal&apos;s largest protected natural regions. The permit funds conservation efforts, trail maintenance, wildlife protection, and community development programs across the area.
              </p>
              <p>
                As of current regulations, the ACAP permit fee for foreign nationals is NPR 3,000 (approximately USD 22–24). SAARC nationals pay a reduced rate. The permit must be purchased at authorised offices before reaching Birethanti — not at the checkpoint itself.
              </p>
              <p>
                <strong>What the TIMS System Does:</strong> The TIMS card is separate from the ACAP permit and serves a different purpose. Where the ACAP permit is an environmental entry pass, the TIMS card is a personal safety registration document.
              </p>
              <p>
                TIMS registration ensures that the Nepal Tourism Board has a record of every trekker&apos;s identity, nationality, emergency contact, route plan, and expected return date. It is the backbone of Nepal&apos;s trekker search and rescue coordination system.
              </p>
              <p>
                There are two categories of TIMS card: the Green Card for group trekkers travelling with a registered agency, and the Red Card for independent (free individual trekker) trekkers. Fees differ between the two categories.
              </p>
              <p>
                <strong>Common Permit Mistakes Trekkers Make:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Arriving without ACAP permit:</strong> The checkpoint cannot issue standard ACAP permits. Trekkers caught without one face a double-penalty fee — currently NPR 6,000 — and significant processing delays.</li>
                <li><strong>Forgotten TIMS card:</strong> The barcode on the TIMS card is required for digital scanning at the checkpoint. A verbal confirmation or a photo on your phone is not accepted.</li>
                <li><strong>Route mismatch:</strong> If your TIMS card lists one route (e.g. Ghorepani) but you intend to trek a different route (e.g. Ghandruk), this creates complications at the checkpoint and at subsequent checkpoints along the trail.</li>
                <li><strong>Expired or invalid permits:</strong> Permits have validity dates. Trekkers sometimes purchase permits weeks in advance and arrive at Birethanti before or after the valid window.</li>
              </ul>
              <p>
                <strong>Why Permit Verification Is Mandatory:</strong> The permit system at Birethanti exists to fulfil two distinct obligations: conservation enforcement and trekker safety. The Annapurna Conservation Area is a protected zone under Nepalese law, and entry without an ACAP permit is a legal violation — not simply an administrative oversight.
              </p>
              <p>
                Beyond compliance, the TIMS registration creates the safety record that matters in emergencies. In a region where trail conditions can change rapidly due to weather, landslides, or altitude-related illness, having a verifiable official record of your location and route is genuinely important.
              </p>
            </div>
          </article>

          {/* SECTION: HOW TO REACH */}
          <article id="how-to-reach" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How to Reach Birethanti from Pokhara
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Birethanti is logistically straightforward to reach from Pokhara, but the journey involves several steps that are worth understanding before departure.
              </p>
              <p>
                <strong>Pokhara to Nayapul Route Overview:</strong> The road from Pokhara to Nayapul covers approximately 42 kilometres and passes through the foothills south of the Annapurna range. The journey takes between 1.5 and 2.5 hours depending on vehicle type, driver pace, and road conditions.
              </p>
              <p>
                Nayapul is the last named road terminus used by most trekkers as their vehicle drop-off point. From Nayapul, the remaining distance to Birethanti is a 20–30 minute walk following a straightforward trail.
              </p>
              <p>
                <strong>Jeep and Shared Transport Options:</strong> Several transport options connect Pokhara with Nayapul and Birethanti:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Private jeep:</strong> The most common option for trekking groups, arranged directly through a trekking agency or hotel in Pokhara. Comfortable and direct, with the option to drop trekkers at Birethanti village itself when road conditions permit.</li>
                <li><strong>Shared local jeep:</strong> Departures from Pokhara&apos;s Baglung bus park throughout the morning. Lower cost, but operates on a full-vehicle departure basis, which can mean waiting.</li>
                <li><strong>Local bus:</strong> Available from the same bus park but significantly slower. Recommended only for budget travellers with flexible timing.</li>
              </ul>
              <p>
                From Birethanti, shared local jeeps also operate upward on the Ghorepani side toward Tikhedhunga and Ulleri, and on the Ghandruk side toward Syauli Bazaar and Kimche, for trekkers who want to shorten the early flat sections of those routes.
              </p>
              <p>
                <strong>Road Conditions and Travel Experience:</strong> The road from Pokhara to Nayapul is a mixed-surface route — partly sealed, partly rough dirt track. It passes through small settlements and tea villages, offering pleasant hill scenery before the actual trekking begins.
              </p>
              <p>
                During monsoon season (June–September), sections of the road can become muddy or temporarily impassable after heavy rain. During peak trekking season, traffic on this route is consistent and transport is readily available without pre-booking.
              </p>
            </div>
          </article>

          {/* SECTION: ROUTE OPTIONS */}
          <article id="route-options" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Trekking Route Options After Birethanti
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Birethanti is the point at which the Annapurna trekking network splits. The route you choose here defines the entire character of your trek: difficulty, duration, scenery type, and the villages you will pass through.
              </p>
              <p>
                <strong>Ghorepani – Poon Hill Route via Tikhedhunga and Ulleri:</strong> The most popular trekking direction from Birethanti leads northeast toward Ghorepani and the famous Poon Hill viewpoint. This route is the backbone of Nepal&apos;s classic Annapurna foothills circuit and draws the highest volume of trekkers throughout the year.
              </p>
              <p>
                From Birethanti, the trail follows the Bhurungdi Khola valley before ascending sharply through the stone-stepped climb to Ulleri — one of the most demanding single-day ascents in the region. From Ulleri, the trail continues to Banthanti, Nayathanti, and eventually Ghorepani, where sunrise views of Dhaulagiri, Annapurna South, and Machhapuchhre are among the most photographed in Nepal.
              </p>
              <p>
                This route is best suited for trekkers prioritising high-altitude panoramic views and classic Himalayan tea house trekking. Most complete the Ghorepani–Poon Hill circuit in 4–5 days.
              </p>
              <p>
                <strong>Ghandruk Route via Syauli Bazaar and Kimche:</strong> The alternative route from Birethanti heads toward Ghandruk, one of Nepal&apos;s largest and best-preserved Gurung villages. This route is less steep in its early stages and offers a deeply cultural trekking experience through terraced fields, traditional architecture, and active farming communities.
              </p>
              <p>
                From Birethanti, trekkers follow the Modi Khola valley southeast to Syauli Bazaar, then climb toward Kimche before reaching Ghandruk village itself. Some trekkers travel this initial section by jeep and begin walking from Kimche, reducing the first day to a shorter ascent.
              </p>
              <p>
                Ghandruk connects onward to Tadapani, Chhomrong, and — for those with appropriate permits and planning — the approach to Annapurna Base Camp. The Ghandruk route is ideal for trekkers who want village immersion, cultural depth, and flexibility in duration.
              </p>
              <p>
                <strong>How Trekkers Decide Their Route After Checkpoint:</strong> The decision between Ghorepani and Ghandruk (and routes beyond) typically comes down to three factors:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
                <li><strong>Available time:</strong> Ghorepani–Poon Hill can be completed in 4–5 days; Ghandruk–Tadapani in 5–7 days; extensions to Khopra Ridge or Annapurna Base Camp add additional days.</li>
                <li><strong>Physical preference:</strong> Ghorepani involves a more demanding single-day climb; Ghandruk offers more gradual elevation gain.</li>
                <li><strong>Experience priority:</strong> Panoramic viewpoints and classic tea house culture (Ghorepani side) versus village life, cultural immersion, and longer trail options (Ghandruk side).</li>
              </ul>
              <p>
                Licensed guides at Birethanti checkpoint, including those operating with us, are well-placed to discuss route options based on your fitness level, time frame, and trekking goals.
              </p>
            </div>
          </article>

          {/* SECTION: FACILITIES */}
          <article id="facilities" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Facilities and Environment in Birethanti
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                While Birethanti is primarily a checkpoint and transit point, it offers a functional set of facilities for trekkers completing final preparations before the trail begins.
              </p>
              <p>
                <strong>Suspension Bridges and River Confluence Landscape:</strong> The suspension bridges spanning the Modi Khola and Bhurungdi Khola are among the first physical experiences of trekking infrastructure in the Annapurna system. Crossing them marks the transition from road travel to trail travel — a threshold that experienced trekkers recognise as the real beginning of the journey.
              </p>
              <p>
                The river confluence creates a dramatic acoustic backdrop: rushing water on both sides, mountain walls closing in, and the first views of forested ridges rising above the village. This is genuinely the beginning of Himalayan trekking territory.
              </p>
              <p>
                <strong>Shops, Tea Houses, and Last Supplies Stop:</strong> Birethanti has a modest but useful line of small shops and tea houses along the main trail corridor. Trekkers can purchase:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
                <li>Basic snacks and energy foods</li>
                <li>Water and electrolyte drinks</li>
                <li>Trekking poles (basic models)</li>
                <li>Light trekking accessories and gloves</li>
                <li>Instant noodles, biscuits, and packaged goods</li>
              </ul>
              <p>
                Prices are reasonable by trekking region standards. If you have forgotten a minor item of gear or need a last bite before the first steep climb, Birethanti is your final opportunity before resupply options become more limited and significantly more expensive.
              </p>
              <p>
                <strong>Role as Final Preparation Zone Before Trek Begins:</strong> Beyond supplies, Birethanti functions as a psychological and logistical pause point. Trekkers stop to organise documents, confirm route directions with guides, adjust pack weight, and take a moment before the uphill work begins. For groups, it is often the place where pace, rest day plans, and daily targets are confirmed.
              </p>
              <p>
                Spending 15–20 minutes here intentionally — rather than rushing through — is consistently reported by experienced trekkers as a worthwhile habit.
              </p>
            </div>
          </article>

          {/* SECTION: SAFETY REGISTRATION */}
          <article id="safety-registration" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Logistics, Safety, and Registration Importance
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The checkpoint at Birethanti is part of a broader safety infrastructure that operates across all major Himalayan trekking routes in Nepal. Understanding why it exists helps trekkers engage with it seriously rather than treating it as a bureaucratic hurdle.
              </p>
              <p>
                <strong>Why Trekker Registration Matters for Safety:</strong> Nepal&apos;s mountain trekking environment carries genuine risk: altitude sickness, trail disorientation, sudden weather changes, and medical emergencies are all real possibilities even on well-trafficked routes. The TIMS registration system was designed specifically to address these risks at a national level.
              </p>
              <p>
                When a trekker fails to return from a registered route, the system provides search and rescue coordinators with precise starting information: entry date, route, travel party, and emergency contact. Without this record, rescue operations begin blind.
              </p>
              <p>
                <strong>Seasonal Variations in Trekking Flow:</strong> The volume of trekkers passing through Birethanti changes significantly across the year:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>October–November (peak):</strong> Highest traffic, clear weather, vibrant trekking atmosphere. Checkpoint queues are longest but move efficiently.</li>
                <li><strong>March–May (spring peak):</strong> Second busiest period, rhododendron blooms on the trail, comfortable temperatures. Similar queue patterns to autumn.</li>
                <li><strong>December–February (winter):</strong> Significantly reduced traffic. Checkpoint processing is faster. Higher elevation routes (Ghorepani, Poon Hill) may have snow above 2,800m.</li>
                <li><strong>June–September (monsoon):</strong> Trail conditions vary significantly. Birethanti itself remains accessible, but landslide risk and trail degradation on higher routes must be assessed before departure.</li>
              </ul>
              <p>
                <strong>Role of Local Guides at the Checkpoint:</strong> For trekkers travelling with a licensed guide, the checkpoint process at Birethanti is handled almost entirely by the guide. They carry the group&apos;s permit documentation, manage logbook registration, and communicate route plans to the checkpoint officers.
              </p>
              <p>
                This is one of the practical values of hiring a licensed local guide — not just for safety on the trail, but for navigating the administrative systems at entry points like Birethanti efficiently and correctly.
              </p>
            </div>
          </article>

          {/* SECTION: FIELD INSIGHTS */}
          <article id="field-insights" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Expert Field Insight from Local Trek Operations
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                We operate licensed trekking routes out of Pokhara, with guides active on Annapurna trails throughout the trekking year. The following insights come directly from field operations rather than from secondary research.
              </p>
              <p>
                <strong>Real-World Checkpoint Operations Perspective:</strong> The Birethanti checkpoint operates professionally and predictably. Officers are accustomed to international visitors and manage a high volume of trekkers during peak periods without significant disruption. The most common operational delays we observe are caused by trekkers arriving without pre-purchased permits, or with documentation that does not match their stated route.
              </p>
              <p>
                For groups travelling with our guides, all ACAP and TIMS documentation is arranged in Pokhara before departure, and checkpoint registration is managed by the guide on arrival. Trekkers in our groups typically clear Birethanti checkpoint in under 15 minutes.
              </p>
              <p>
                <strong>Trail Updates and Route Conditions from Birethanti:</strong> Trail conditions from Birethanti onward are monitored through our active guide operations and updated seasonally. The key variables affecting the post-Birethanti sections include:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Tikhedhunga–Ulleri stone staircase condition:</strong> Generally stable, but can become slippery after rain. Trekking poles strongly recommended.</li>
                <li><strong>Modi Khola valley section toward Ghandruk:</strong> Affected by seasonal flooding during monsoon. Check conditions with Pokhara-based operators before departure.</li>
                <li><strong>Checkpoint officer availability:</strong> Officers operate during daylight trekking hours. Arriving at Birethanti after late afternoon is not recommended if you intend to clear the checkpoint and begin the trail the same day.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              FAQ: Common Questions About Birethanti Checkpoint
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "What happens at Birethanti trekking checkpoint?",
                  a: "At Birethanti, two separate registration processes take place. First, your ACAP (Annapurna Conservation Area Project) permit is inspected and stamped at the ACAP desk. Second, your TIMS card is scanned and your trekking details are entered into Nepal's national trekker database. Both processes must be completed before you continue onto the trail. The entire procedure typically takes 10–20 minutes for a prepared trekker."
                },
                {
                  q: "Do I need ACAP and TIMS permits before arriving at Birethanti?",
                  a: "Yes — both permits must be purchased before you reach Birethanti. ACAP permits and TIMS cards are available at Nepal Tourism Board offices in Pokhara (Lakeside and Damside areas) and in Kathmandu. Arriving at Birethanti without pre-purchased permits results in a double-penalty fee for ACAP (currently NPR 6,000) and significant delays to your departure."
                },
                {
                  q: "Can I pass Birethanti without stopping at the checkpoint?",
                  a: "No. The checkpoint is positioned immediately after the main suspension bridge crossing, and all trekkers entering the Annapurna Conservation Area are required to stop and register. There is no alternative entry route. Attempting to bypass the checkpoint is a violation of Annapurna Conservation Area regulations."
                },
                {
                  q: "How far is Birethanti from Pokhara?",
                  a: "Birethanti is approximately 42 kilometres from Pokhara by road, with travel time ranging from 1.5 to 2.5 hours depending on vehicle and conditions. Most trekkers travel via private jeep or shared local transport to Nayapul, then walk 20–30 minutes to Birethanti."
                },
                {
                  q: "Which trekking routes start from Birethanti?",
                  a: "The two primary routes from Birethanti are the Ghorepani–Poon Hill trail (heading northeast via Tikhedhunga and Ulleri) and the Ghandruk route (heading toward Syauli Bazaar and Kimche). From Ghandruk, routes extend further to Tadapani, Chhomrong, Khopra Ridge, and the Annapurna Base Camp approach. Birethanti is the common starting point for all of these routes."
                },
                {
                  q: "How long does checkpoint registration take?",
                  a: "For a trekker with all documents prepared and accessible, checkpoint processing at Birethanti takes approximately 10–20 minutes under normal conditions. During peak trekking season (October–November and March–May), queues may extend this to 30–45 minutes. Travelling with a licensed guide who manages documentation typically speeds up the process significantly."
                },
                {
                  q: "Is Birethanti the only entry point for Annapurna treks on the western side?",
                  a: "Birethanti is the primary and most-used official checkpoint for treks entering the western Annapurna Conservation Area. Other checkpoints exist further along individual trail routes, but Birethanti is the first and most comprehensive registration point for the Ghorepani, Ghandruk, Khopra Ridge, and related western Annapurna routes."
                },
                {
                  q: "Do I need a guide at Birethanti checkpoint?",
                  a: "You are not legally required to have a guide to complete the checkpoint process at Birethanti. Independent trekkers can complete ACAP and TIMS registration themselves. However, a licensed local guide handles all documentation, logbook entries, and route confirmation on behalf of the group — removing the administrative burden from trekkers and ensuring accuracy across all registrations."
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
              Birethanti is not a stopover. It is the point where your Annapurna trek officially and legally begins. Every permit is verified here, every trekker is registered here, and every major western Annapurna route branches outward from here. Understanding how this gateway works — and arriving fully prepared — means you clear the checkpoint smoothly and start your first trail day focused on the mountains ahead, not on administrative problems behind you.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              Arrive with your ACAP permit and TIMS card already purchased. Know which route you are taking before the checkpoint, not after. And if you want the entire logistics process managed before you leave Pokhara — permits, documentation, registration, and route planning — that is exactly what we do.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Ready to Trek Without the Permit Hassle?
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                We handle all ACAP and TIMS permits in advance and manage every checkpoint registration at Birethanti on your behalf. Our licensed local guides operate daily on Annapurna trails, with current route conditions updated throughout the trekking year.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Inquire Now to Plan Your Trek with Full Logistics Support &rarr;
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
                This Birethanti entry portal directory is maintained and reviewed by our licensed local trekking guides operating out of Pokhara. We regularly inspect bridge safety clearances, government log registries, and permit compliance rules. Nepal Tourism Operator License #8928-091.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
