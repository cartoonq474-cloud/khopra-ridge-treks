import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/safety/landslide-risks",
  },
  title: "Landslide & Rockfall Risks on the Khopra Trail: Complete Safety Guide for Trekkers",
  description: "Discover the real landslide and rockfall risks on the Khopra Trail. Learn which sections are most dangerous, how seasonal conditions affect safety, and how to trek Khopra Ridge with confidence.",
};

export default function Page() {
  const landslideZones = [
    {
      zone: "Swanta River Gorge & Bridge",
      terrain: "Loose shale and steep river flanks.",
      risk: "Active landslide debris and rockfalls can block the path to Chhistibung after pre-monsoon storms. Guides often inspect this path before groups cross."
    },
    {
      zone: "Tadapani to Dobato Forest Trail",
      terrain: "Damp soil, rotting trees, and steep clay banks.",
      risk: "Heavy rains can wash away trail shoulders or bring down dead tree branches. Watch your footing on slippery clay climbs."
    },
    {
      zone: "Chhistibung to Ridge Ascent Flanks",
      terrain: "Alpine grass cliffs and scree fields.",
      risk: "While the main path is grassy, secondary grazing paths are crumbly and can trigger slides. Stick to the marked trail."
    }
  ];

  const quickRiskAssessment = [
    {
      section: "Swanta River Gorge",
      hazard: "Rockfall, debris flow",
      level: "High",
      levelClass: "text-rose-600 font-bold"
    },
    {
      section: "Ghandruk to Tadapani Forest",
      hazard: "Slippery slope, trail edge collapse",
      level: "Medium",
      levelClass: "text-amber-600 font-bold"
    },
    {
      section: "Tadapani to Dobato",
      hazard: "Trail washout, landslide",
      level: "Medium-High",
      levelClass: "text-amber-600 font-bold"
    },
    {
      section: "Chhistibung to Khopra Ridge",
      hazard: "Rockfall, scree slopes",
      level: "Medium-High",
      levelClass: "text-amber-600 font-bold"
    },
    {
      section: "Khayer Lake Side Route",
      hazard: "Exposed ridge, loose rock",
      level: "Medium-High",
      levelClass: "text-amber-600 font-bold"
    },
    {
      section: "Village-to-village lower sections",
      hazard: "Trail erosion",
      level: "Low-Medium",
      levelClass: "text-emerald-600 font-bold"
    }
  ];

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
            <span className="text-emerald-400">Landslide Risks</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Terrain Hazards &amp; Geological Stability
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Landslide &amp; Rockfall Risks on the Khopra Trail
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Understand geological vulnerabilities, active scree slope hazards, mudslide indicators, and standard safety protocols for Annapurna mountain travel.
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
              <a href="#overall-safety" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Is Khopra Dangerous?
              </a>
              <a href="#himalayan-geology" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why Landslides Happen
              </a>
              <a href="#dangerous-sections" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Dangerous Route Sections
              </a>
              <a href="#seasonal-hazards" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Seasonal Hazard Profile
              </a>
              <a href="#warning-signs" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Terrain Warning Signs
              </a>
              <a href="#safe-crossing" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Crossing Hazard Slopes
              </a>
              <a href="#active-landslides" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Active Slide Response
              </a>
              <a href="#guide-comparison" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Guide vs Independent
              </a>
              <a href="#pre-trek-checklist" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Safety Checklist
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
                Inquire Route Detours
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Landslide &amp; Rockfall Risks on the Khopra Trail
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                The Khopra Ridge Trek is one of the most rewarding off-the-beaten-path routes in the Annapurna Conservation Area. The trails are quieter than Poon Hill, the mountain views are exceptional, and the sense of wilderness is real. For most trekkers, the journey passes without serious incident.
              </p>
              <p>
                But the Khopra Trail is a mountain route, and mountain routes carry natural hazards. Certain sections of the trail are exposed to landslides and rockfall, particularly during and after periods of heavy rainfall. Terrain instability is a genuine factor on this route — not a reason to stay home, but a reason to be well informed before you go.
              </p>
              <p>
                This guide explains where landslide and rockfall risks exist on the Khopra Trail, why those hazards occur, how risk changes across seasons, and what you should do to stay safe. Whether you are planning an independent trek or considering a guided trip, understanding the terrain before you arrive is one of the most important preparations you can make.
              </p>
            </div>
          </article>

          {/* SECTION: IS KHOPRA Dangerous */}
          <article id="overall-safety" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Is the Khopra Trek Dangerous?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Overall Safety Level:</strong> The Khopra Ridge Trek is considered a moderate trekking route. It is not technically extreme, does not require climbing equipment, and is completed successfully by thousands of trekkers each year. For the vast majority of people who trek outside monsoon season with reasonable preparation, the route is safe.
              </p>
              <p>
                That said, the word &quot;safe&quot; on any Himalayan trail must be understood in context. The terrain is rugged. Elevation gain is significant. Sections of the trail pass through steep forested slopes, exposed ridgelines, and narrow gorge sections where slope conditions can change after rainfall. These are reasons to approach it with awareness.
              </p>
              <p>
                <strong>What Natural Hazards Trekkers Should Be Aware Of:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
                <li><strong>Landslides:</strong> Sections of slope that become destabilized by rainfall or erosion, sending soil, rock, and debris across the trail.</li>
                <li><strong>Rockfall:</strong> Individual rocks or clusters dislodged from upper slopes, cliffs, or unstable terrain above the trail.</li>
                <li><strong>Trail washouts:</strong> Sections where heavy rain has eroded the trail surface, narrowed the path, or removed it entirely.</li>
                <li><strong>Unstable slope edges:</strong> Particularly on exposed ridgeline sections where the trail narrows and the drop is significant.</li>
              </ul>
              <p>
                <strong>How Khopra Compares to Other Nepal Treks for Safety:</strong> Among Nepal&apos;s popular trekking routes, Khopra Ridge sits at moderate risk. It is significantly less exposed than high-altitude routes like the Annapurna Circuit with Thorong La Pass or the Three Passes Trek in the Everest region. The Poon Hill circuit is shorter and lower, making it generally safer for absolute beginners.
              </p>
              <p>
                Khopra is more remote than Poon Hill, however. If a trail section closes due to a landslide, alternative route planning becomes more important. Rescue access is also slower on the upper sections of the route, which makes early risk awareness more valuable here than on busier trekking corridors.
              </p>
            </div>
          </article>

          {/* SECTION: WHY LANDSLIDES HAPPEN */}
          <article id="himalayan-geology" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Landslides and Rockfalls Happen in the Annapurna Region
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Young Himalayan Geology:</strong> The Himalayas are geologically young mountains. By geological standards, they are still rising, still settling, and still highly active. The rock that forms these mountains is fractured and less consolidated than older mountain ranges. This means slopes are naturally prone to movement.
              </p>
              <p>
                <strong>Mountain Erosion and Trail Degradation:</strong> Erosion is constant. Rain carves channels through soft soil, loosens shale layers, and undermines trail edges and slope shoulders. Over years, erosion reshapes sections of trail and creates new hazard zones where stable ground once existed. Steep forested slopes and narrow gorges are most affected.
              </p>
              <p>
                <strong>The Impact of Rainfall:</strong> Water is the primary trigger for landslides. Saturated mountain soil loses cohesion once it reaches a critical water content, sending mud slides and rock debris down. Debris flows tend to follow existing drainage lines and are highest not during rain alone, but in the hours immediately after a heavy rain event.
              </p>
            </div>
          </article>

          {/* SECTION: DANGEROUS SECTIONS */}
          <article id="dangerous-sections" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Dangerous Sections of the Khopra Trail
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The route has several areas where landslide and rockfall exposure is higher than average:
              </p>
              <ul className="list-disc pl-5 space-y-3 text-stone-600">
                <li>
                  <strong>Swanta River Gorge Landslide Zone:</strong> Gorge terrain concentrates both water flow and rock movement. Slopes above the trail are steep and carry loose rock debris. The combination of river erosion at the base and slope instability above makes rockfall common.
                </li>
                <li>
                  <strong>Ghandruk to Tadapani Forest Trail Hazards:</strong> Heavy clay soil becomes extremely slippery after rain. Trail edges soften and can collapse. Roots help hold the soil, but fallen trees during storms can dislodge material.
                </li>
                <li>
                  <strong>Tadapani to Dobato Terrain Instability:</strong> Includes steep open sections with thin soil cover. Rerouting is occasionally required due to trail erosion and minor landslides. Dobato approach tracks show historic slide scars.
                </li>
                <li>
                  <strong>Chhistibung to Khopra Ridge Scree Slopes:</strong> Loose gravel and scree slopes where the trail is unstable. Rockfall from above is dislodged by thermal warming in mornings and livestock traffic.
                </li>
                <li>
                  <strong>Khayer Lake Side Trails:</strong> Significant drop-offs, loose rock, and remote exposure. The trail should not be attempted in poor visibility or active rainfall.
                </li>
              </ul>
            </div>
          </article>

          {/* SECTION: SEASONAL HAZARDS */}
          <article id="seasonal-hazards" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Seasonal Landslide Risk on the Khopra Trek
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Spring (March to May):</strong> Moderate risk. Rainfall exists but is less intense than monsoon. Residual monsoon damage from previous seasons may affect trails. Late spring (May) brings pre-monsoon storm systems with heavier rainfall.
              </p>
              <p>
                <strong>Monsoon Season: Highest Danger Period (June to September):</strong> Rainfall is sustained, heavy, and capable of saturating slopes within hours. Trail washouts, debris flows, and active landslides are all significantly more likely. Several sections of the trail may close temporarily, and local lodges report more frequent rerouting decisions. Trekking is not recommended.
              </p>
              <p>
                <strong>Autumn (September to November):</strong> Safest trekking window. Monsoon has ended, slopes have stabilized, and trail surfaces have recovered. Clear skies allow trekkers to monitor terrain above the trail. Mid-October is the most stable period.
              </p>
              <p>
                <strong>Winter Conditions and Freeze-Thaw Rockfall:</strong> Freeze-thaw cycles dislodge material from rock faces. Morning rockfalls on exposed cliff sections are common, particularly above Chhistibung. Trek exposed sections after mid-morning once temperatures stabilize.
              </p>
            </div>
          </article>

          {/* SECTION: RISK TABLE METRICS */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-955">Quick Risk Assessment: Khopra Trail Sections</h2>
            <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm overflow-x-auto my-6">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-stone-200 text-stone-400 font-bold uppercase tracking-wider">
                    <th className="py-3 px-2">Trail Section</th>
                    <th className="py-3 px-2">Primary Hazard</th>
                    <th className="py-3 px-2">Risk Level</th>
                  </tr>
                </thead>
                <tbody>
                  {quickRiskAssessment.map((item, idx) => (
                    <tr key={idx} className="border-b border-stone-100 hover:bg-stone-50/50">
                      <td className="py-3 px-2 font-bold text-stone-900">{item.section}</td>
                      <td className="py-3 px-2 text-stone-600">{item.hazard}</td>
                      <td className={`py-3 px-2 ${item.levelClass}`}>{item.level}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          {/* SECTION: WARNING SIGNS */}
          <article id="warning-signs" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Warning Signs of Landslide or Rockfall Danger While Trekking
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-3 text-stone-600">
                <li>
                  <strong>Fresh Soil Cracks or Ground Movement:</strong> Cracks running parallel to a slope edge indicate the ground is beginning to separate. If you see fresh cracking near the trail, move quickly through the area.
                </li>
                <li>
                  <strong>Small Falling Rocks from Upper Slopes:</strong> Individual falling rocks often precede larger slides. If you hear or see falling rock, move immediately out of the path. Do not look up while running.
                </li>
                <li>
                  <strong>Sudden Changes in Water Flow:</strong> If a stream suddenly becomes muddy and carries debris, or if water appears on a slope that was dry, slope saturation may be occurring. Treat sudden turbid water as a warning to increase pace.
                </li>
                <li>
                  <strong>Sounds of Moving Debris:</strong> A low rumbling or irregular cracking sound from a slope indicates active debris movement. Retreat to a clear area away from the slope base.
                </li>
              </ul>
            </div>
          </article>

          {/* SECTION: SAFE CROSSING */}
          <article id="safe-crossing" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How to Cross Hazardous Trail Sections Safely
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-3 text-stone-600">
                <li>
                  <strong>Cross One Person at a Time:</strong> Reduces the weight load on unstable trails and ensures that if someone triggers a slide, others are not caught in it.
                </li>
                <li>
                  <strong>Never Stop Inside Active Hazard Zones:</strong> Identify the hazard zone, move through it purposefully, and stop to rest or take photos only once you are clear.
                </li>
                <li>
                  <strong>Watch the Slope Above, Not the Trail Below:</strong> Scan the slope above you. Most rockfall gives a brief visual warning before reaching trail level.
                </li>
                <li>
                  <strong>Maintain Distance Between Trekkers:</strong> Keep two to three trekker lengths of space between group members.
                </li>
                <li>
                  <strong>Avoid Photography or Gear Adjustments in Risk Areas:</strong> Save these stops for stable, sheltered ground.
                </li>
              </ul>
            </div>
          </article>

          {/* SECTION: ACTIVE LANDSLIDES */}
          <article id="active-landslides" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What To Do If You Encounter an Active Landslide
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Stop and Assess:</strong> If the trail shows signs of active landslide, stop immediately. Move back to the last stable ground.
              </p>
              <p>
                <strong>Never Cross:</strong> Active slide terrain carries the risk of secondary collapse. Crossing an active slide zone is extremely dangerous.
              </p>
              <p>
                <strong>Retreat:</strong> Retreat to the last safe position, ideally the last teahouse or village. Do not attempt to find a detour through off-trail terrain without local guidance.
              </p>
              <p>
                <strong>Contact Support:</strong> Every teahouse on the Khopra route maintains contact with neighboring lodges. The lodge network is the fastest way to receive updated route information.
              </p>
            </div>
          </article>

          {/* SECTION: GUIDE COMPARISON */}
          <article id="guide-comparison" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Independent Trekking vs Guided Trekking Safety
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Why Independent Trekkers Face Higher Risk:</strong> Independent trekkers carry full responsibility for route assessment. Without local knowledge of recent slides or unstable streams, they must make decisions with incomplete information.
              </p>
              <p>
                <strong>How Local Guides Monitor Daily Conditions:</strong> Local guides communicate with lodge owners, porters, and other guides along the trail. This network provides real-time updates about recent debris movement.
              </p>
              <p>
                <strong>Alternative Detour Routes:</strong> When a trail is blocked, detour routing is sometimes possible but requires knowledge of local trails not appearing on standard trekking maps.
              </p>
              <p>
                <strong>Emergency Response Speed:</strong> Guides carry communication tools, maintain contact with lodge networks, and know the nearest evacuation access points.
              </p>
            </div>
          </article>

          {/* SECTION: PRE-TREK CHECKLIST */}
          <article id="pre-trek-checklist" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Safety Checklist Before Starting the Khopra Trek
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-3 text-stone-600">
                <li>
                  <strong>Check Weather Forecasts:</strong> Review reliable mountain forecasts each morning. Local lodge operators are excellent first sources of conditions.
                </li>
                <li>
                  <strong>Avoid Walking During or After Heavy Rain:</strong> Wait two to three hours after heavy rain stops before crossing known hazard sections to allow slope drainage.
                </li>
                <li>
                  <strong>Carry Emergency Communication:</strong> Bring a fully charged mobile phone or satellite communicator.
                </li>
                <li>
                  <strong>Ask Local Lodges About Trail Status:</strong> Ask the teahouse owner about current trail conditions before departing each morning.
                </li>
              </ul>
            </div>
          </article>

          {/* SECTION: IDENTIFIED ZONES DETAILS */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-955">Identified Risk Zones</h2>
            <div className="space-y-6">
              {landslideZones.map((item, idx) => (
                <div key={idx} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                  <span className="text-xs font-extrabold text-stone-400 block uppercase tracking-wider">{item.zone}</span>
                  <span className="text-xs font-bold text-emerald-600 block mt-1">Terrain Type: {item.terrain}</span>
                  <p className="mt-3 text-xs text-stone-600 leading-relaxed">{item.risk}</p>
                </div>
              ))}
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions: Landslide &amp; Rockfall Safety
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Is the Khopra Trek dangerous for beginners?",
                  a: "The Khopra Trek is suitable for fit beginners trekking outside monsoon season with proper preparation. The route does not require technical climbing skills. Hazards are manageable with awareness and correct behaviour."
                },
                {
                  q: "Which part of the Khopra Trek has the highest landslide risk?",
                  a: "The Swanta River Gorge section carries the highest overall risk due to gorge terrain and river erosion. Tadapani to Dobato and the Chhistibung to Khopra Ridge approach are also elevated-risk zones, particularly after rain."
                },
                {
                  q: "Is the Khopra Trek safe during monsoon season?",
                  a: "Monsoon season (June to September) is the highest-risk period. Heavy sustained rainfall saturates slopes rapidly, making landslides and washouts frequent. Trekking is not recommended."
                },
                {
                  q: "Are rockfalls common on Khopra Ridge?",
                  a: "Rockfalls occur periodically, particularly in sections above Chhistibung and on the upper ridge approach. They are more frequent during monsoon and in winter mornings due to freeze-thaw cycles."
                },
                {
                  q: "Can I do the Khopra Trek without a guide?",
                  a: "Yes, independent trekking is permitted and completed regularly. However, independent trekkers carry greater responsibility for route assessment and must rely on their own navigation skills if a trail is blocked."
                },
                {
                  q: "What happens if a landslide blocks the trail?",
                  a: "If you encounter a blocked section, retreat to the last safe ground and do not attempt to cross active slide terrain. Contact the nearest lodge or your guide for alternative routes."
                },
                {
                  q: "Which season is safest for trekking Khopra Ridge?",
                  a: "Autumn — particularly mid-October through November — is widely considered the safest and most stable season. Monsoon has ended, slopes have stabilized, and trail surfaces are reliable."
                },
                {
                  q: "How do local guides monitor dangerous trail conditions?",
                  a: "Local guides maintain daily communication with other guides, lodge owners, porters, and village contacts along the route. This network provides real-time information about changing terrain conditions."
                },
                {
                  q: "Is the Khayer Lake route more dangerous than the main Khopra trail?",
                  a: "The side route to Khayer Lake involves more exposed ridge terrain and loose rock, with slower emergency access. It should only be attempted in good weather conditions."
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
              The Khopra Ridge Trek is a genuinely excellent trekking route. The mountains are spectacular, the trail is remote without being inaccessible, and the experience of reaching the ridge is one that stays with trekkers for a long time. Natural hazards are part of any serious mountain environment, and the Khopra Trail is no exception.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              What this guide has laid out is not a warning to avoid the trek. It is an accurate picture of where terrain hazards exist, when they increase, and what practical actions reduce your risk. Landslide and rockfall risks on the Khopra Trail are real but manageable. Preparation, seasonal awareness, and local expertise are the three factors that make the difference.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Trek the Khopra Ridge with an experienced local team
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Our guides walk this route throughout the season, maintain daily contact with lodge networks along the trail, monitor weather conditions before each day&apos;s departure, and know every section where terrain demands extra care.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Plan Your Guided Khopra Ridge Trek &rarr;
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
                This landslide and geological hazards review is updated seasonally based on checkpost reports and ACA forest patrol updates. Nepal Tourism Board Licensed Operator #8928-091. Pokhara &amp; Swanta, Nepal.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
