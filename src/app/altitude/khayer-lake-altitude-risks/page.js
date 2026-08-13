import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/altitude/khayer-lake-altitude-risks",
  },
  title: "Khayer Lake Altitude Risks & Safety Guide (4,660m Trek",
  description: "Planning to hike to Khayer Lake at 4,660m? Learn the real altitude risks, AMS symptoms, weather dangers, acclimatization strategies, and expert safety tips.",
};

export default function Page() {
  const lakeRisks = [
    {
      title: "1. Rapid 1,000-Meter Ascent",
      desc: "Climbing from Khopra Ridge (3,660m) to Khayer Lake (4,660m) in a single morning violates the standard 500m per day recommendation. While you sleep back at the Ridge, this rapid ascent can cause sudden headache or nausea."
    },
    {
      title: "2. Freezing Temperatures and Wind Chill",
      desc: "At 4,660m, temperatures are significantly colder. Even in spring or autumn, morning temperatures at the lake can drop below freezing, with strong winds sweeping off the Annapurna South face."
    },
    {
      title: "3. Extremely Remote Terrain",
      desc: "There are no permanent teahouses, lodges, or shops along the trail from the Ridge to the Lake. You must carry all your water, food, and layers. A rescue from this zone must be done manually or via helicopter."
    },
    {
      title: "4. Rapid Oxygen Desaturation",
      desc: "With effective oxygen levels dropping to 57%, your muscles will feel heavy and breathing will be labored. Pacing is critical to prevent exhaustion."
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
            <Link href="/altitude/acclimatization-guide" className="hover:text-emerald-400 transition-colors">Altitude</Link>
            <span>/</span>
            <span className="text-emerald-400">Khayer Lake Safety</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Sacred Summit &amp; High-Altitude Safety
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Khayer Lake Altitude Risks &amp; Safety Guide
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Learn the real altitude challenges, AMS symptoms, acclimatisation strategies, and turnaround rules at 4,660m.
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
              <a href="#how-high" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                How High is Khayer Lake?
              </a>
              <a href="#body-reactions" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Body at 4,660m Altitude
              </a>
              <a href="#ams-risks" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Altitude Sickness Risks
              </a>
              <a href="#major-risks" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Major Trail Risks
              </a>
              <a href="#weather-safety" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Weather &amp; Cold Hazards
              </a>
              <a href="#acclimatisation" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Acclimatisation Strategy
              </a>
              <a href="#best-practices" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Gear &amp; Best Practices
              </a>
              <a href="#when-to-descend" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                When to Turn Back
              </a>
              <a href="#difficulty-suitability" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trek Difficulty &amp; Fitness
              </a>
              <a href="#guided-advantages" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why Hire a Guide?
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
                Inquire About Lake Guided Trips
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khayer Lake Altitude Risks &amp; Safety Guide
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Khayer Lake sits at 4,660 metres (15,288 feet) above sea level — a sacred body of water tucked into the high ridgeline above Khopra Ridge in Nepal&apos;s Annapurna Conservation Area. It is one of the most spiritually significant destinations on the Khopra Ridge trek, and for many trekkers, reaching it is the emotional highlight of the whole journey.
              </p>
              <p>
                But the altitude is no small matter. At 4,660m, you are standing at the same elevation as some of the highest helicopter landing zones in the Himalayas. The oxygen available to your lungs is roughly 57% of what you breathe at sea level. Your body must work harder for every step, every breath, and every kilometre of trail.
              </p>
              <p>
                Understanding Khayer Lake altitude risks and safety is not optional — it is the single most important preparation you can make before attempting this hike. This guide explains exactly what happens to the human body at this elevation, what warning signs to watch for, and how to give yourself the best chance of reaching the lake safely and returning without incident.
              </p>
              <p>
                Whether you are an experienced trekker or approaching Himalayan altitude for the first time, this page will give you the knowledge you need to make a safe decision.
              </p>
            </div>
          </article>

          {/* SECTION: HOW HIGH IS KHAYER LAKE */}
          <article id="how-high" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How High Is Khayer Lake and Why It Matters
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Exact Elevation: 4,660m / 15,288 ft:</strong> Khayer Lake stands at 4,660 metres, placing it firmly in the category that altitude medicine professionals classify as very high altitude — a zone that begins at approximately 3,500 metres and extends to around 5,500 metres. This classification exists because the reduction in available oxygen becomes medically significant for most people, regardless of fitness level.
              </p>
              <p>
                To give you a precise reference point: the hike to Khayer Lake begins at Khopra Ridge at 3,660 metres and climbs a full 1,000 vertical metres to reach the lake. That is a single-day ascent that far exceeds the general guideline of gaining no more than 300–500 metres per day above 3,000 metres.
              </p>

              {/* TABLE */}
              <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm overflow-x-auto my-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="py-3 px-2">Destination</th>
                      <th className="py-3 px-2">Altitude</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-stone-100 hover:bg-stone-50/50">
                      <td className="py-3 px-2 font-bold text-stone-900">Khayer Lake</td>
                      <td className="py-3 px-2 text-emerald-600 font-bold">4,660m / 15,288 ft</td>
                    </tr>
                    <tr className="border-b border-stone-100 hover:bg-stone-50/50">
                      <td className="py-3 px-2 font-bold text-stone-900">Annapurna Base Camp</td>
                      <td className="py-3 px-2 text-stone-700">4,130m / 13,550 ft</td>
                    </tr>
                    <tr className="border-b border-stone-100 hover:bg-stone-50/50">
                      <td className="py-3 px-2 font-bold text-stone-900">Everest Base Camp</td>
                      <td className="py-3 px-2 text-stone-700">5,364m / 17,598 ft</td>
                    </tr>
                    <tr className="border-b border-stone-100 hover:bg-stone-50/50">
                      <td className="py-3 px-2 font-bold text-stone-900">Gokyo Ri</td>
                      <td className="py-3 px-2 text-stone-700">5,357m / 17,575 ft</td>
                    </tr>
                    <tr className="border-b border-stone-100 hover:bg-stone-50/50">
                      <td className="py-3 px-2 font-bold text-stone-900">Poon Hill</td>
                      <td className="py-3 px-2 text-stone-700">3,210m / 10,531 ft</td>
                    </tr>
                    <tr className="border-b border-stone-100 hover:bg-stone-50/50">
                      <td className="py-3 px-2 font-bold text-stone-900">Khopra Ridge</td>
                      <td className="py-3 px-2 text-emerald-600">3,660m / 12,008 ft</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                Khayer Lake sits higher than Annapurna Base Camp. Trekkers heading to ABC spend days in gradual ascent before reaching that elevation. On the Khopra Ridge itinerary, Khayer Lake is typically reached in a single long day hike from the Ridge, which makes acclimatisation management especially important.
              </p>
              <p>
                <strong>Why Altitude Above 3,000m is Significant:</strong> The atmosphere does not change its composition — the air always contains approximately 21% oxygen. What changes is air pressure. At 4,660m, the atmospheric pressure is roughly 57% of sea-level pressure. Your lungs, heart, and muscles must compensate for reduced oxygen delivery. This is why altitude-related illness can affect even highly fit individuals.
              </p>
            </div>
          </article>

          {/* SECTION: WHAT HAPPENS TO YOUR BODY */}
          <article id="body-reactions" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What Happens to Your Body at Khayer Lake Altitude
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Hypoxia at 4,660m:</strong> Hypoxia — insufficient oxygen reaching tissues — begins well before you reach 4,660m. As you climb from Khopra Ridge, your body compensates immediately: your breathing rate increases, your heart beats faster, and your blood vessels dilate to maintain oxygen delivery.
              </p>
              <p>
                At the lake&apos;s elevation, your haemoglobin works at reduced efficiency. Muscles receive less oxygen than needed, and your brain — which is highly sensitive to oxygen deprivation — begins to experience subtle changes in judgement. This is not a failure of fitness; it is basic physiology.
              </p>
              <p>
                <strong>Common Physical Reactions During Ascent:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
                <li>Shortness of breath even during slow, steady walking</li>
                <li>Increased heart rate, particularly on steep sections</li>
                <li>Leg heaviness and muscle fatigue that feels disproportionate</li>
                <li>Mild headache developing in the upper section of the trail</li>
                <li>Reduced appetite or slight nausea</li>
              </ul>
              <p>
                <strong>Why the Body Struggles During Rapid Ascent:</strong> The body can adapt, but it needs time. Climbing 1,000 vertical metres in a single morning does not allow your physiology to produce the additional red blood cells or recalibrate kidney function that proper acclimatisation requires. This is the core challenge: you are visiting 4,660m for a few hours before descending. Pacing is not optional.
              </p>
            </div>
          </article>

          {/* SECTION: CAN YOU GET ALTITUDE SICKNESS */}
          <article id="ams-risks" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Can You Get Altitude Sickness at Khayer Lake?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Yes. Acute Mountain Sickness (AMS) is a genuine risk at Khayer Lake. It is not caused by poor fitness; it can affect experienced athletes readily. The primary risk factors are the speed of ascent and individual physiological susceptibility.
              </p>
              <p>
                <strong>Early Warning Symptoms:</strong> Often mistaken for general fatigue or dehydration:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
                <li>Persistent headache, particularly at the temples or back of the head</li>
                <li>Fatigue that does not improve with rest</li>
                <li>Loss of appetite or a general feeling of being unwell</li>
                <li>Mild nausea without vomiting</li>
                <li>Dizziness when standing or moving</li>
              </ul>

              <p>
                <strong>Moderate and Severe Symptoms (HAPE &amp; HACE):</strong>
              </p>
              <div className="grid gap-6 md:grid-cols-3 mt-6">
                <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                  <span className="text-xs font-bold text-amber-600 uppercase block mb-1">Moderate AMS</span>
                  <ul className="text-xs text-stone-500 space-y-1 list-disc pl-4">
                    <li>Worsening headache</li>
                    <li>Vomiting (not just nausea)</li>
                    <li>Extreme weakness</li>
                    <li>Difficulty breathing at rest</li>
                  </ul>
                </div>
                <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                  <span className="text-xs font-bold text-rose-600 uppercase block mb-1">HACE (Cerebral)</span>
                  <ul className="text-xs text-stone-500 space-y-1 list-disc pl-4">
                    <li>Extreme confusion</li>
                    <li>Loss of coordination (ataxia)</li>
                    <li>Slurred speech</li>
                    <li>Severe drowsiness</li>
                  </ul>
                </div>
                <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                  <span className="text-xs font-bold text-rose-600 uppercase block mb-1">HAPE (Pulmonary)</span>
                  <ul className="text-xs text-stone-500 space-y-1 list-disc pl-4">
                    <li>Breathlessness at rest</li>
                    <li>Persistent wet cough</li>
                    <li>Frothy/pink spit</li>
                    <li>Chest gurgling sounds</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          {/* SECTION: MAJOR RISKS */}
          <article id="major-risks" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Major Risks on the Khayer Lake Trek
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Altitude sickness is the primary concern, but the Khayer Lake hike carries other safety risks:
              </p>
              <ul className="list-disc pl-5 space-y-3 text-stone-600">
                <li>
                  <strong>Rapid Altitude Gain:</strong> The vertical gain from Khopra Ridge (3,660m) to Khayer Lake (4,660m) in a single morning session is the most significant structural risk. Walk slowly and monitor your body constantly.
                </li>
                <li>
                  <strong>Extreme Cold and Wind:</strong> Temperatures can drop well below freezing. Wind chill from the Annapurna South face can produce effective temperatures of -15&deg;C or colder. Insulating layers and wind shells are mandatory.
                </li>
                <li>
                  <strong>Remote Terrain with No Facilities:</strong> There are no permanent teahouses, medical posts, or lodges between Khopra Ridge and the lake. You carry everything you need.
                </li>
                <li>
                  <strong>Physical Exhaustion:</strong> The round trip takes 8 to 10 hours on steep, rocky terrain. Exhaustion reduces your body&apos;s ability to manage hypoxia and impairs decision-making.
                </li>
              </ul>
            </div>
          </article>

          {/* SECTION: WEATHER SAFETY */}
          <article id="weather-safety" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Weather and Environmental Safety at Khayer Lake
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Sudden Weather Changes:</strong> Clear skies can give way to heavy cloud, fog, and snow by early afternoon. Fog reduces visibility to near zero, making navigation difficult on unmarked terrain. This is why we enforce a strict <strong>1:00 PM turnaround rule</strong>.
              </p>
              <p>
                <strong>Cold Temperature Risk:</strong> Pre-dawn starts mean you will leave Khopra Ridge in temperatures that may already be below freezing. Carry more insulation than you think you need.
              </p>
              <p>
                <strong>Wind Chill:</strong> The ridge trail approaching the lake is exposed to westerly winds that affect walking stability. A wind-resistant shell jacket is non-negotiable.
              </p>
            </div>
          </article>

          {/* SECTION: ACCLIMATIZATION */}
          <article id="acclimatisation" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khayer Lake Acclimatization Strategy
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Stay at Khopra Ridge:</strong> Spending at least one or two nights at Khopra Ridge (3,660m) before the hike is a critical acclimatisation step. Spending time sleeping at 3,660m allows your body to begin the adaptation process. Rushing this sequence increases AMS risks.
              </p>
              <p>
                <strong>Hydration and Energy:</strong> Dehydration at altitude worsens AMS symptoms. Drink at least 3–4 litres of water on the day of the hike. Begin hydrating the evening before. Carry a filter or water purification tablets. Avoid alcohol and excessive caffeine. Dal Bhat is an excellent energy source for breakfast.
              </p>
              <p>
                <strong>Walking Pace:</strong> Your pace is your most important tool above 4,000 metres. bistari bistari (slowly, slowly) allows your heart rate to settle. Use trekking poles to distribute effort.
              </p>
              <p>
                <strong>Rest and Recovery:</strong> Prioritise sleep at Khopra Ridge. Avoid strenuous activity the afternoon before the hike, and aim for an early night.
              </p>
            </div>
          </article>

          {/* SECTION: BEST PRACTICES */}
          <article id="best-practices" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Safety Rules and Trekking Best Practices
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Essential Gear:</strong> Top thermal base layers (not cotton), down jacket, waterproof shell, warm hat, insulated gloves, trekking poles, ankle-support boots, UV protection sunglasses, and headlamp.
              </p>
              <p>
                <strong>Monitoring Body Signals:</strong> Check in with yourself regularly (headache, nausea, weakness, breathing, or mental confusion). Communicate with your guide or partner immediately if symptoms worsen.
              </p>
              <p>
                <strong>The 1:00 PM Turnaround Rule:</strong> A non-negotiable safety rule. Returning to Khopra Ridge in freezing fog or snow after a full day of altitude exertion is a high risk. If you have not reached the lake by 1:00 PM, you must turn around.
              </p>
            </div>
          </article>

          {/* SECTION: WHEN TO DESCEND */}
          <article id="when-to-descend" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              When to Stop or Descend Immediately
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The following symptoms require immediate cessation of the ascent and a return to lower altitude:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Severe AMS Signs:</strong> Loss of coordination (inability to walk heel-to-toe), disorientation, or alterered consciousness.</li>
                <li><strong>Persistent Vomiting or Worsening Headache:</strong> Active vomiting is a clear signal that AMS is progressing.</li>
                <li><strong>Breathing Difficulty at Rest:</strong> Persistent breathlessness at rest may indicate High Altitude Pulmonary Edema (HAPE).</li>
              </ul>
              <p>
                <strong>Descent Priority:</strong> Descend immediately. Even a descent of 300–500 metres can produce a dramatic improvement in symptoms. The nearest evacuation point is Khopra Ridge.
              </p>
            </div>
          </article>

          {/* SECTION: DIFFICULTY */}
          <article id="difficulty-suitability" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Trek Difficulty Level and Suitability
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Physical Difficulty:</strong> Rated strenuous to very strenuous. The round trip takes 8–10 hours on steep rocky trails, loose stone sections, and exposed ridgelines at 3,660m–4,660m.
              </p>
              <p>
                <strong>Is It Suitable for Beginners?</strong> Achievable for motivated beginners, but only if they have spent at least 2 nights at Khopra Ridge before the push, are trekking with a licensed guide, and have no pre-existing cardiovascular conditions.
              </p>
              <p>
                <strong>Fitness Recommendations:</strong> 4–6 weeks of aerobic conditioning (hiking, running, cycling) and practice carrying a loaded day pack before departure will improve safety.
              </p>
            </div>
          </article>

          {/* SECTION: WHY A GUIDE */}
          <article id="guided-advantages" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why a Guided Trek Improves Safety at Khayer Lake
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Local Weather Judgment:</strong> Experienced guides understand subtle indicators of deteriorating weather — specific cloud formations over Annapurna South or wind shifts that app forecasts miss.
              </p>
              <p>
                <strong>Emergency Response &amp; Navigation:</strong> Guided groups carry communications devices to coordinate with Pokhara helicopter operators. Guides are trained in first-aid and help navigate trails in poor visibility.
              </p>
              <p>
                <strong>Objective Decision-Making:</strong> Hypoxia impairs judgement. A guide provides the objective external perspective to enforce safe turnaround decisions when trekkers are reluctant to stop.
              </p>
            </div>
          </article>

          {/* SECTION: CORE RISKS CARD DETAILS */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-955">Core Risk Factors to Manage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {lakeRisks.map((risk, idx) => (
                <div key={idx} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                  <h4 className="font-extrabold text-stone-955 text-sm">{risk.title}</h4>
                  <p className="mt-2 text-xs text-stone-500 leading-relaxed">{risk.desc}</p>
                </div>
              ))}
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions: Khayer Lake Safety
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "How high is Khayer Lake in Nepal?",
                  a: "Khayer Lake sits at 4,660 metres (15,288 feet) above sea level. It is located in the Annapurna Conservation Area above Khopra Ridge and is classified as a very high altitude destination."
                },
                {
                  q: "Can you get altitude sickness at Khayer Lake?",
                  a: "Yes. Acute Mountain Sickness is a genuine risk at Khayer Lake. The combination of very high elevation (4,660m) and rapid ascent from Khopra Ridge (3,660m) in a single morning creates conditions where AMS can develop in trekkers of any fitness level."
                },
                {
                  q: "Is Khayer Lake dangerous for beginners?",
                  a: "It is achievable for beginners but requires careful preparation. Spending at least two nights at Khopra Ridge before attempting the lake hike is essential. Beginners should always hike with an experienced guide and must be willing to turn back if symptoms develop."
                },
                {
                  q: "How difficult is the Khayer Lake trek?",
                  a: "The day hike from Khopra Ridge to Khayer Lake is rated strenuous to very strenuous. It involves 8–10 hours of round-trip walking, a 1,000-metre vertical ascent on steep and rocky terrain, and exposure to high-altitude cold and wind."
                },
                {
                  q: "How long is the hike from Khopra Ridge to Khayer Lake?",
                  a: "The round trip takes approximately 8–10 hours depending on pace and conditions. Most guided groups depart the Ridge before dawn and aim to reach the lake between 9:00 and 11:00 AM, beginning the descent by 1:00 PM at the latest."
                },
                {
                  q: "What temperature can I expect at Khayer Lake?",
                  a: "Morning temperatures at the lake can drop well below freezing. Wind chill from the Annapurna South face can make effective temperatures significantly colder. Trekkers should dress for sub-zero conditions."
                },
                {
                  q: "How do I prevent altitude sickness on this trek?",
                  a: "Acclimatize properly at Khopra Ridge; ascend slowly (bistari bistari); maintain consistent hydration (3–4 litres of water); avoid alcohol; eat well; and descend immediately if symptoms develop."
                },
                {
                  q: "Do I need a guide for the Khayer Lake trek?",
                  a: "A licensed local guide is strongly recommended. The trail becomes less defined, weather can deteriorate rapidly, and emergency coordination from this remote terrain requires experience and communication equipment."
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
              Khayer Lake is one of the most extraordinary destinations in the Annapurna region — a high-altitude sacred lake ringed by Himalayan giants, reached only by those willing to put in the effort and take the preparation seriously. At 4,660 metres, the altitude is the defining challenge of this hike. It is the factor that makes it memorable, and the factor that demands your full respect.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              The greatest risk is not the altitude itself. It is underestimating it. Prepare carefully, listen to your body, follow the turnaround rule, and make the journey with people who know the mountain.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Plan a Safe Khayer Lake Trek with Expert Local Guides
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Trekking to 4,660 metres requires more than determination — it requires local knowledge, proper acclimatization planning, and a guide who knows when to push forward and when to turn back. Our team has guided trekkers to Khayer Lake across all seasons.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Inquire About Our Guided Khopra Ridge Trek &rarr;
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
                This altitude risks report is compiled by guides trained in Wilderness First Responder and mountain safety operations. All client departures carry daily pulse-oximeters and satellite response links. Nepal Tourism Operator License #8928-091.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
