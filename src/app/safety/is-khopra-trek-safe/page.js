import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/safety/is-khopra-trek-safe",
  },
  title: "Is the Khopra Ridge Trek Safe? Complete Risk & Beginner Safety Guide (2026)",
  description: "Is the Khopra Ridge Trek safe? Get an honest breakdown of altitude risks, seasonal hazards, solo trekking safety, emergency rescue realities, and beginner suitability — all in one expert guide.",
};

export default function Page() {
  const safetyMetrics = [
    {
      title: "Wilderness Security & Low Theft Rates",
      desc: "Local Magar communities run the lodges collectively. Theft is extremely rare on this route. You can feel safe traveling with cameras and personal electronics."
    },
    {
      title: "Certified Mountain Guides",
      desc: "Nepal's NTB mandates hiring a licensed guide inside the ACAP. Guides are crucial for forest navigation, altitude pacing, and managing checkpost logistics."
    },
    {
      title: "Cellular Signal and Communication",
      desc: "Nepal Telecom (NTC) and Ncell have spotty signals in the forest valleys. However, mobile network reception is generally available on the Khopra Ridge itself."
    },
    {
      title: "Emergency Evacuation",
      desc: "For severe illness or injury, helicopter rescue is the standard response. Ensure your travel insurance covers rescue up to 5,000m."
    }
  ];

  const riskOverview = {
    low: [
      {
        title: "Established teahouse network",
        desc: "The circuit has reliable lodge accommodation at Ghorepani, Tadapani, Chistibung, Bayeli Kharka, Swanta, and Khopra Ridge itself. You are never far from shelter and a hot meal."
      },
      {
        title: "No technical climbing",
        desc: "The entire route follows walking trails. No technical gear, ropes, or ice axes are needed on the standard circuit."
      },
      {
        title: "Community-managed lodges",
        desc: "The Khopra Danda Community Lodge system is run collectively by local Magar villages. Theft is extremely rare. Personal safety within the lodges is not a concern."
      },
      {
        title: "No mass-crowd hazard",
        desc: "Unlike Everest Base Camp in peak season, Khopra Ridge does not have overcrowded trails that create their own safety risks."
      }
    ],
    moderate: [
      {
        title: "Altitude gain toward Khayer Lake",
        desc: "The climb to the sacred Khayer Lake at approximately 4,900 metres is where altitude becomes a genuine concern. Trekkers who ascend too quickly are at risk."
      },
      {
        title: "Remote village spacing",
        desc: "The distance between settlements means that if something goes wrong between lodges, help is not immediately available."
      },
      {
        title: "Weather variability",
        desc: "Conditions on the exposed ridge can change within hours. Morning sun can give way to afternoon mist, rain, or cold winds — especially outside peak season."
      }
    ],
    high: [
      {
        title: "Acute Mountain Sickness (AMS)",
        desc: "This is the most serious risk on the entire route. AMS can strike unexpectedly, and the high-altitude sections toward Khayer Lake leave limited margin for delay in descent."
      },
      {
        title: "Monsoon trail hazards",
        desc: "During June to September, the lower forest sections between Ghandruk and Tadapani become slippery, prone to leeches, and occasionally affected by landslides."
      },
      {
        title: "Winter snow blockage",
        desc: "In December and January, snow can close the upper ridge trail completely, isolating trekkers or making high-altitude sections impassable without proper gear."
      }
    ]
  };

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
            <Link href="/safety/is-khopra-trek-safe" className="hover:text-emerald-400 transition-colors">Safety</Link>
            <span>/</span>
            <span className="text-emerald-400">Trek Safety Guide</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Safety Briefing &amp; Risk Mitigation
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Is the Khopra Ridge Trek Safe?
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Get an honest breakdown of altitude risks, seasonal hazards, solo safety rules, emergency rescue realities, and beginner suitability.
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
              <a href="#quick-verdict" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Quick Verdict
              </a>
              <a href="#risk-overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Risk Overview
              </a>
              <a href="#altitude-risks" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Altitude &amp; AMS Risks
              </a>
              <a href="#weather-seasonal" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Weather &amp; Seasons
              </a>
              <a href="#difficulty-terrain" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trek Difficulty
              </a>
              <a href="#remoteness-navigation" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Remoteness &amp; Navigation
              </a>
              <a href="#beginner-suitability" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Beginner Suitability
              </a>
              <a href="#solo-trekking" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Solo Trekking Risks
              </a>
              <a href="#emergency-evacuation" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Evacuation &amp; Insurance
              </a>
              <a href="#expert-tips" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Safety Checklist
              </a>
              <a href="#guide-required" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Do I Need a Guide?
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
                Get Safety Consultation
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Is the Khopra Ridge Trek Safe? (Complete Risk &amp; Beginner Safety Guide)
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Here is the short answer: yes, the Khopra Ridge Trek is safe — but only if you understand what you are walking into.
              </p>
              <p>
                This is not a casual day hike. At its highest point near Khayer Lake, the trail reaches above 4,900 metres. The route passes through remote forest sections, isolated highland villages, and exposed ridgelines where weather can shift quickly. That combination demands genuine preparation, not just enthusiasm.
              </p>
              <p>
                What this guide gives you is an honest safety breakdown — altitude risks, seasonal hazards, terrain realities, and the truth about solo trekking and emergency rescue on this route. Whether you are a first-time trekker or a returning Himalayan walker, this page will help you make a confident, well-informed decision.
              </p>
            </div>
          </article>

          {/* SECTION: QUICK VERDICT */}
          <article id="quick-verdict" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Is the Khopra Ridge Trek Safe? Quick Verdict for Trekkers
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                For most physically prepared trekkers — including fit beginners — the Khopra Ridge Trek is a safe and deeply rewarding experience. It is not a technical mountaineering route. There is no glacier crossing, no rope work, and no vertical scrambling. The teahouse network is reliable, the trail is well-established across most of its length, and the local lodge communities are exceptionally welcoming.
              </p>
              <p>
                That said, it is a more remote and altitude-sensitive route than the Ghorepani Poon Hill Trek. It receives far fewer trekkers than Annapurna Base Camp, which means thinner safety infrastructure on the trail itself. Problems can escalate more quickly here if you are poorly prepared.
              </p>
              <p>
                <strong>Who it is safe for:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1 text-stone-600">
                <li>Fit adults with basic hiking experience and a reasonable fitness base.</li>
                <li>First-time Himalayan trekkers travelling with a licensed guide.</li>
                <li>Trekkers going during the spring (March–May) or autumn (September–November) seasons.</li>
              </ul>
              <p>
                <strong>Who should approach with extra caution:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1 text-stone-600">
                <li>Solo trekkers with no prior high-altitude experience.</li>
                <li>Trekkers with pre-existing heart, lung, or respiratory conditions.</li>
                <li>Anyone attempting this route without travel insurance covering rescue above 5,000 metres.</li>
                <li>Trekkers planning to go unguided during monsoon or winter.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: RISK OVERVIEW */}
          <article id="risk-overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Ridge Trek Risk Overview (At a Glance)
            </h2>
            <div className="space-y-6 text-sm text-stone-600 leading-relaxed">
              <p>
                Before we go deep on each factor, here is a structured overview of the risk profile across the most common safety categories:
              </p>

              {/* Low Risks */}
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-2">Low Risk Factors</span>
                <div className="grid gap-4 md:grid-cols-2">
                  {riskOverview.low.map((risk, idx) => (
                    <div key={idx} className="p-5 bg-white border border-stone-200 rounded-3xl shadow-sm">
                      <h4 className="font-extrabold text-stone-900 text-xs">{risk.title}</h4>
                      <p className="mt-1 text-[11px] text-stone-500 leading-relaxed">{risk.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Moderate Risks */}
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-2">Moderate Risk Factors</span>
                <div className="grid gap-4 md:grid-cols-3">
                  {riskOverview.moderate.map((risk, idx) => (
                    <div key={idx} className="p-5 bg-white border border-stone-200 rounded-3xl shadow-sm">
                      <h4 className="font-extrabold text-stone-900 text-xs">{risk.title}</h4>
                      <p className="mt-1 text-[11px] text-stone-500 leading-relaxed">{risk.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* High Risks */}
              <div>
                <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block mb-2">High Risk Factors</span>
                <div className="grid gap-4 md:grid-cols-3">
                  {riskOverview.high.map((risk, idx) => (
                    <div key={idx} className="p-5 bg-white border border-stone-200 rounded-3xl shadow-sm">
                      <h4 className="font-extrabold text-stone-900 text-xs">{risk.title}</h4>
                      <p className="mt-1 text-[11px] text-stone-500 leading-relaxed">{risk.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* SECTION: ALTITUDE RISKS */}
          <article id="altitude-risks" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Altitude Risk on Khopra Ridge Trek
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Of all the risks on this route, altitude sickness is the one that deserves the most serious attention. Everything else is manageable with basic preparation. AMS is not.
              </p>
              <p>
                <strong>Maximum Elevation and Why It Matters:</strong> The Khopra Ridge viewpoint itself sits at approximately 3,660 metres. However, if you include the sacred Khayer Lake day hike — one of the most important stops on the circuit — you reach close to 4,900 metres.
              </p>
              <p>
                At that elevation, the air contains roughly 40–50% less oxygen than at sea level. Your body can adapt, but it needs time. Trekkers who push up quickly from lower altitudes — particularly those arriving directly from Pokhara at around 820 metres — put themselves at risk. For context, the Annapurna Base Camp Trek reaches 4,130 metres. Khayer Lake sits higher than ABC&apos;s high point.
              </p>
              <p>
                <strong>Acute Mountain Sickness (AMS):</strong> AMS typically begins with symptoms that resemble a bad hangover: persistent headache, nausea, fatigue, dizziness, and disrupted sleep. Most trekkers experience mild symptoms above 3,000 metres. Those symptoms are a signal from your body to stop ascending until they pass.
              </p>
              <p>
                On the Khopra circuit, the most vulnerable transition is the push from Chistibung (~2,980 metres) to Bayeli Kharka (~3,630 metres) and then up to the ridge. Trekkers who rush this section are most at risk. If AMS progresses to HAPE (fluid in lungs) or HACE (fluid in brain), the situation becomes a medical emergency. The only effective treatment is immediate descent.
              </p>
              <p>
                <strong>Prevention Strategies:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
                <li>Ascend no more than 400–500 metres per day once above 2,500 metres.</li>
                <li>Build one full rest day into the itinerary — the Khopra Ridge summit night is ideal.</li>
                <li>Drink three to four litres of water daily to prevent dehydration.</li>
                <li>Avoid alcohol and sleeping tablets above 3,000 metres — both suppress breathing.</li>
                <li>Know the warning signs and commit to descending if symptoms do not resolve overnight.</li>
                <li>Consult a doctor about Diamox (acetazolamide) before your trip.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: WEATHER AND SEASONS */}
          <article id="weather-seasonal" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Weather and Seasonal Safety Risks
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Seasonality is one of the biggest factors in Khopra Ridge Trek safety. The right season reduces almost every risk category simultaneously.
              </p>
              <p>
                <strong>Monsoon Season (June–September):</strong> Nepal&apos;s monsoon transforms the lower trail sections. Forest paths between Ghandruk and Tadapani become slippery. Leeches are common. Visibility on the ridge drops significantly, meaning the mountain views disappear. Certain sections of trail are prone to minor landslides during sustained rain. Monsoon trekking demands extra caution, waterproof gear, and a local guide who knows trail variants.
              </p>
              <p>
                <strong>Winter Season (December–February):</strong> Winter brings ice and snow. The upper trail — particularly the approach to Khopra Ridge camp and the Khayer Lake day hike — can be snow-covered and icy from late December onwards. Temperatures at the ridge camp regularly drop below zero at night. Cold exposure is a risk for trekkers who underestimate what winter means at 3,500–4,900 metres. A winter trek is possible but not suitable for beginners.
              </p>
              <p>
                <strong>Best and Safest Trekking Seasons:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li>
                  <strong>Autumn (September–November):</strong> Safest and most popular. Post-monsoon skies are clear, temperatures comfortable, and the trail dry and well-maintained. Annapurna South, Nilgiri, and Dhaulagiri are typically visible. Best for beginners.
                </li>
                <li>
                  <strong>Spring (March–May):</strong> Second-best window. Days are warm, rhododendrons in bloom, and altitude conditions stable. Highly suitable for first-timers.
                </li>
              </ul>
            </div>
          </article>

          {/* SECTION: TREK DIFFICULTY */}
          <article id="difficulty-terrain" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How Difficult Is the Khopra Ridge Trek Really?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The Khopra Ridge Trek is often described as a &quot;moderate&quot; trek. That label is accurate, but it hides important nuance. Moderate does not mean easy — particularly for trekkers who have not built up their hiking fitness.
              </p>
              <p>
                <strong>Physical Difficulty:</strong> On a typical itinerary, you walk between five and eight hours per day. Daily elevation gain ranges from 400 to 900 metres. The longest and most demanding day is usually the ascent from Chistibung to Bayeli Kharka and then up to Khopra Ridge camp. Cumulative fatigue plays a role; by day four or five, legs begin to feel the weight of previous days&apos; effort.
              </p>
              <p>
                <strong>Trail Terrain and Challenge Zones:</strong> Lower sections involve classic stone step paths through dense forest. These steps are uneven and slippery when wet. Upper sections transition into open grassland and ridge terrain. The trail is generally clear, but the elevation and exposure demand a steady, conservative pace.
              </p>
              <p>
                <strong>Why Beginners Underestimate This Trek:</strong> The Khopra Ridge Trek sits outside the main Annapurna trekking circuit, so it has less brand recognition than Annapurna Base Camp or Poon Hill. This leads some to assume it is a lesser challenge. The combination of remote trails, altitude reaching nearly 5,000 metres at Khayer Lake, and multi-day cumulative effort makes it a meaningful physical undertaking.
              </p>
            </div>
          </article>

          {/* SECTION: REMOTENESS */}
          <article id="remoteness-navigation" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Route Safety and Remoteness
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The Khopra Ridge circuit is one of the less-travelled routes in the Annapurna Conservation Area. That is part of its appeal, but it means safety infrastructure differs from the busiest trekking highways.
              </p>
              <p>
                <strong>Village Spacing and Isolation Factor:</strong> Unlike the main Annapurna trails where teahouses appear every hour, some sections of the Khopra circuit involve longer stretches between settlements. The segment from Bayeli Kharka toward the Khopra Ridge camp is one area where isolation is a factor. If a trekker becomes ill or injured, response time for help is measured in hours.
              </p>
              <p>
                <strong>Trail Marking and Navigation:</strong> On the main trail segments, route marking is adequate. However, in dense forest sections — particularly approaching Tadapani and Chistibung — the trail can fork without clear signage. In poor visibility or after snowfall, navigation becomes harder.
              </p>
              <p>
                <strong>Communication and Connectivity Limits:</strong> NTC and Ncell both have coverage gaps. Lower valleys around Swanta and forest approach sections often have no signal. The Khopra Ridge itself typically has better connectivity. Do not rely on mobile data; offline maps (Maps.me, Gaia GPS) are essential.
              </p>
            </div>
          </article>

          {/* SECTION: BEGINNER SUITABILITY */}
          <article id="beginner-suitability" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Is the Khopra Ridge Trek Safe for Beginners?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Yes, with the right preparation and support, fit beginners can complete the Khopra Ridge Trek safely.
              </p>
              <p>
                <strong>Who Can Safely Do This Trek:</strong> A fit adult who walks or hikes regularly can handle this route successfully. What matters most is consistent cardiovascular fitness, a sensible pace, and willingness to listen to acclimatisation advice.
              </p>
              <p>
                <strong>Minimum Fitness Requirements:</strong> You should be comfortable walking uphill for four to six hours without significant distress. In the weeks before your trek, we recommend:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
                <li>Two to three uphill walks per week of at least 90 minutes each.</li>
                <li>Building from flat walks to inclined terrain over four to six weeks.</li>
                <li>Wearing your trekking boots on training walks to break them in.</li>
                <li>Carrying a daypack of six to eight kilograms on training walks.</li>
              </ul>
              <p>
                <strong>Common Beginner Mistakes:</strong> Walking too fast on the first two days (leading to early overexertion), ignoring early altitude symptoms (headache above 3,000m), under-packing layers, and skipping proper acclimatisation loops.
              </p>
            </div>
          </article>

          {/* SECTION: SOLO TREKKING */}
          <article id="solo-trekking" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Solo Trekking Safety on Khopra Ridge
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Solo trekking is legal in Nepal, but the risk profile on Khopra Ridge is higher than on busier trails. If you twist an ankle between Bayeli Kharka and the ridge in late afternoon, you may wait hours before another trekker passes.
              </p>
              <p>
                <strong>Real Risks of Solo Trekking:</strong> Delayed emergency response, navigation errors in forest sections in low visibility, difficulty deciding to descend under cognitive load from AMS, and lack of objective altitude monitoring.
              </p>

              {/* TABLE */}
              <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm overflow-x-auto my-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="py-3 px-2">Factor</th>
                      <th className="py-3 px-2">Solo Trekking</th>
                      <th className="py-3 px-2">With Licensed Guide</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-stone-100 hover:bg-stone-50/50">
                      <td className="py-3 px-2 font-bold text-stone-900">AMS monitoring</td>
                      <td className="py-3 px-2 text-stone-600">Self-managed</td>
                      <td className="py-3 px-2 text-emerald-600 font-semibold">Continuous professional monitoring</td>
                    </tr>
                    <tr className="border-b border-stone-100 hover:bg-stone-50/50">
                      <td className="py-3 px-2 font-bold text-stone-900">Navigation</td>
                      <td className="py-3 px-2 text-stone-600">Map + experience</td>
                      <td className="py-3 px-2 text-emerald-600 font-semibold">Local knowledge, all conditions</td>
                    </tr>
                    <tr className="border-b border-stone-100 hover:bg-stone-50/50">
                      <td className="py-3 px-2 font-bold text-stone-900">Emergency response</td>
                      <td className="py-3 px-2 text-stone-600">Self-initiated</td>
                      <td className="py-3 px-2 text-emerald-600 font-semibold">Immediate, coordinated</td>
                    </tr>
                    <tr className="border-b border-stone-100 hover:bg-stone-50/50">
                      <td className="py-3 px-2 font-bold text-stone-900">Satellite communication</td>
                      <td className="py-3 px-2 text-stone-600">Not standard</td>
                      <td className="py-3 px-2 text-emerald-600 font-semibold">Carried by our guides</td>
                    </tr>
                    <tr className="border-b border-stone-100 hover:bg-stone-50/50">
                      <td className="py-3 px-2 font-bold text-stone-900">Decision-making</td>
                      <td className="py-3 px-2 text-stone-600">Alone</td>
                      <td className="py-3 px-2 text-emerald-600 font-semibold">Supported and professional</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          {/* SECTION: EVACUATION & INSURANCE */}
          <article id="emergency-evacuation" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Emergency Rescue and Medical Safety
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Nepal has a well-established helicopter evacuation system. Rescue helicopters operate out of Pokhara and can reach most points within 30 to 90 minutes — weather permitting.
              </p>
              <p>
                <strong>Weather Constraints:</strong> Helicopters cannot fly in low cloud, heavy rain, or snowfall. In monsoon or winter, waiting periods of 24 to 48 hours for a rescue window are not uncommon.
              </p>
              <p>
                <strong>Travel Insurance Requirements:</strong> Non-negotiable. You must have travel insurance that explicitly covers helicopter rescue above 5,000 metres before departure. Evacuations cost between USD 3,000 and USD 6,000 or more. Standard travel policies often cap at 4,000 metres; you need coverage above 5,000 metres for the Khayer Lake section.
              </p>
            </div>
          </article>

          {/* SECTION: SAFETY CHECKLIST */}
          <article id="expert-tips" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Trek Safety Tips (Expert-Approved Checklist)
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-3 text-stone-600">
                <li>
                  <strong>Acclimatisation Pacing:</strong> Never gain more than 400–500 metres of sleeping altitude per day above 2,500m. If you feel off, take a rest day.
                </li>
                <li>
                  <strong>Hydration &amp; Nutrition:</strong> Drink three to four litres of water daily. Avoid alcohol above 3,000 metres. Eat warm meals even if appetite is low.
                </li>
                <li>
                  <strong>Gear Essentials:</strong> Down jacket, waterproof shell, trekking poles, headlamp with spare batteries, sunscreen, and offline maps.
                </li>
                <li>
                  <strong>Weather Response:</strong> Start walking early (6:00–7:00 AM) to reach lodges before afternoon clouds build. Never attempt Khayer Lake if morning skies are closed.
                </li>
                <li>
                  <strong>When to Turn Back:</strong> A worsening headache, loss of coordination, or confusion at altitude means descend immediately. No summit is worth risking HAPE or HACE.
                </li>
              </ul>
            </div>
          </article>

          {/* SECTION: GUIDE REQUIRED */}
          <article id="guide-required" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Do You Need a Guide for Khopra Ridge Trek?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The Annapurna Conservation Area (ACAP) requires trekkers to hold valid ACAP and TIMS permits. While solo trekking is not explicitly banned for all nationalities, NTB strongly recommends licensed guide use inside ACAP — and on a remote route like Khopra Ridge, that recommendation carries real weight.
              </p>
              <p>
                Our guides hold Nepal Tourism Board certification and are trained in altitude medicine, first aid, and emergency response coordination. They know the circuit intimately — which forest junctions confuse first-timers, which sections become difficult in wet conditions, and where mobile signals exist.
              </p>
              <p>
                A licensed local guide opens up cultural and ecological dimensions of the trek, from Swanta&apos;s Magar community to ACA forest wildlife.
              </p>
            </div>
          </article>

          {/* SECTION: KEY SAFETY METRICS CARDS */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-955">Key Safety Factors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {safetyMetrics.map((item, idx) => (
                <div key={idx} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                  <h4 className="font-extrabold text-stone-955 text-sm">{item.title}</h4>
                  <p className="mt-2 text-xs text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Safety
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Is the Khopra Ridge Trek safe for beginners?",
                  a: "Yes, the Khopra Ridge Trek is safe for fit beginners who travel with a licensed guide, trek in autumn or spring, and allow proper acclimatisation time. It is not suitable for those with no hiking background or no fitness preparation."
                },
                {
                  q: "How dangerous is Khopra Ridge Trek really?",
                  a: "It is not a dangerous trek in terms of technical hazards. The primary risks — altitude sickness, weather, and trail isolation — are manageable with the right preparation. The biggest danger is underestimating these risks."
                },
                {
                  q: "What is the biggest risk on the Khopra Ridge Trek?",
                  a: "Acute Mountain Sickness (AMS) is the most serious risk, especially during climbs to Khopra Ridge camp or Khayer Lake. Severe weather in monsoon and winter is the second biggest risk, potentially blocking trails and preventing helicopter rescues."
                },
                {
                  q: "Is altitude sickness common on this trek?",
                  a: "Mild altitude symptoms (headache, fatigue, disrupted sleep) are common above 3,000 metres. Serious AMS requiring descent is less common but occurs when trekkers rush or ignore early signs."
                },
                {
                  q: "Can I do the Khopra Trek solo safely?",
                  a: "Experienced trekkers with high-altitude experience and strong navigation skills can complete this route solo. For first-timers, solo trekking is not recommended due to trail isolation and lack of altitude monitoring support."
                },
                {
                  q: "Is the Khopra Ridge Trek safe in winter or monsoon?",
                  a: "Both seasons carry elevated risk. Monsoon (June–September) brings slippery trails, leeches, and landslide potential. Winter (December–February) brings snow, cold exposure, and limited lodge services. Autumn and spring are much safer."
                },
                {
                  q: "How remote is emergency help on the trek?",
                  a: "In ideal weather, helicopter rescue from the Annapurna region takes 90 minutes to three hours from the time of a confirmed call. In poor weather, waits of 24 to 48 hours are realistic, making guide support critical."
                },
                {
                  q: "Is the Khopra Ridge Trek harder than the Annapurna Base Camp Trek?",
                  a: "Khopra Ridge with the Khayer Lake extension reaches approximately 4,900 metres — higher than ABC (4,130m). ABC has better lodge infrastructure, making Khopra Ridge more remote and altitude-sensitive, though terrain difficulty is comparable."
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
              The Khopra Ridge Trek is safe — genuinely and consistently — for trekkers who approach it with the respect it deserves.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              This is not a route that punishes you for going. It rewards you with uninterrupted panoramas, Magar village hospitality, and a sense of wilderness. But those rewards belong to trekkers who prepare, pace themselves, and go with the right support.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Trek Safely with Local Experts
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                We are a Nepal Tourism Board licensed trekking operator based in Pokhara (License #8928-091). Our guides hold NTB certification and are trained in altitude medicine, carrying satellite oximeters and medical kits.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Inquire About Guided Khopra Ridge Trek Packages &rarr;
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-6 py-4 rounded-2xl border border-white/25 shadow-md transition duration-200"
                >
                  Talk to a Local Trekking Expert
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
                This safety review is updated seasonally based on local checkpost bulletins and ACA forest patrol updates. Guides carry wilderness trauma kits and coordinates check oximeters daily. Nepal Tourism Operator License #8928-091.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
