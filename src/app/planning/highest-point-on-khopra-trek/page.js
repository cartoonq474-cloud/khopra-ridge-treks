import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/planning/highest-point-on-khopra-trek",
  },
  title: "Highest Point on the Khopra Trek: Maximum Altitude, Elevation & Safety Guide",
  description: "Discover the highest point on the Khopra Trek (4,660m at Khayer Lake), how it compares to Khopra Ridge's 3,660m sleeping altitude, and how to prepare safely for high-altitude trekking.",
};

export default function Page() {
  const dailyProgression = [
    { stage: "Pokhara to Ghandruk", notes: "Trek begins at a relatively low, forested elevation. Focus is on rhythm, not altitude." },
    { stage: "Ghandruk to Tadapani", notes: "Steady, moderate elevation gain through dense rhododendron forest." },
    { stage: "Tadapani to Dobato", notes: "Noticeable climb. Serves as a key acclimatization stop." },
    { stage: "Dobato to Khopra Ridge", notes: "Significant elevation gain to the highest sleeping point (3,660m)." },
    { stage: "Khopra Ridge to Khayer Lake", notes: "Steep day hike to maximum elevation (4,660m), then return to Khopra Ridge to sleep." }
  ];

  const compares = [
    { name: "Poon Hill Trek", altitude: "3,210m", level: "Easy/Moderate" },
    { name: "Annapurna Base Camp", altitude: "4,130m", level: "Moderate" },
    { name: "Mardi Himal Base Camp", altitude: "4,500m", level: "Moderate/Strenuous" },
    { name: "Khopra Ridge Trek (Khayer Lake)", altitude: "4,660m", level: "Moderate/Strenuous" },
    { name: "Everest Base Camp", altitude: "5,364m", level: "Strenuous" }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Altitude Intelligence
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Highest Point on the Khopra Trek: Altitude &amp; Safety Guide
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Learn the difference between your highest sleeping altitude (3,660m) and the true trail summit at Khayer Lake (4,660m) to plan your safety protocols correctly.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 max-w-xl">
            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
              <span className="text-[10px] text-stone-400 uppercase font-bold tracking-widest block">Highest Sleeping Point</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">3,660m / 12,007ft</span>
              <span className="text-xs text-stone-300 block mt-1">Khopra Ridge / Danda</span>
            </div>
            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
              <span className="text-[10px] text-stone-400 uppercase font-bold tracking-widest block">Highest Point Reached</span>
              <span className="text-xl md:text-2xl font-black text-rose-400 mt-1 block">4,660m / 15,288ft</span>
              <span className="text-xs text-stone-300 block mt-1">Sacred Khayer Lake</span>
            </div>
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
                Overview &amp; Summit
              </a>
              <a href="#ridge-vs-lake" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Ridge vs Lake
              </a>
              <a href="#climb-sleep" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Climb High, Sleep Low
              </a>
              <a href="#progression" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Daily Elevation Steps
              </a>
              <a href="#effects" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Altitude Effects
              </a>
              <a href="#ams" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Altitude Sickness (AMS)
              </a>
              <a href="#acclimatize" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Acclimatization Rules
              </a>
              <a href="#difficulty" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Elevation Difficulty
              </a>
              <a href="#compares" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trek Comparisons
              </a>
              <a href="#beginners" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Beginner Safety
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
                Trek With Planners
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* SECTION 1: OVERVIEW */}
          <article id="overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What Is the Highest Point on the Khopra Trek?
            </h2>
            
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                If you are planning the Khopra Ridge Trek, the first question worth answering honestly is: how high does this trek actually go, and what does that mean for you on the trail? The highest point on the Khopra Trek is 4,660 meters (15,288 feet), reached at the sacred alpine site of Khayer Lake. You won&apos;t sleep at that altitude, though — your highest overnight stop is Khopra Ridge, at 3,660 meters (12,007 feet).
              </p>
              <p>
                That gap between sleeping altitude and maximum altitude is not a technicality. It is the entire reason this trek is manageable for prepared trekkers, including many first-timers. Reaching the high lake and returning to the ridge the same day is the backbone of how altitude risk is minimized.
              </p>
              
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>It is the absolute maximum elevation reached on the route.</li>
                <li>It is a sacred pilgrimage site for both Hindu and Buddhist devotees.</li>
                <li>Most groups start the hike to Khayer Lake before sunrise to secure clear weather and calm visibility.</li>
                <li>Trekkers descend immediately to Khopra Ridge to sleep, rather than camping at the lake.</li>
              </ul>
            </div>
          </article>

          {/* SECTION 2: RIDGE VS LAKE */}
          <article id="ridge-vs-lake" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Ridge Altitude vs. Khayer Lake Altitude
            </h2>
            <div className="grid gap-6 md:grid-cols-2 text-stone-600 text-sm">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Khopra Ridge Elevation (3,660m)</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  The highest overnight stop on the trek. Sitting at 3,660m, it requires proper forest-level acclimatization beforehand. It serves as your base camp for the lake excursion.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900">Khayer Lake Elevation (4,660m)</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  The true altitude ceiling of the route. The air is thin, the trail is exposed, and the round-trip requires a long, demanding walk. There are no lodges or teahouses at the lake itself.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 3: CLIMB HIGH SLEEP LOW */}
          <article id="climb-sleep" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Sleeping Lower Reduces Altitude Risk
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The separation between Khopra Ridge (sleeping) and Khayer Lake (day hike) reflects a well-established high-altitude principle: <strong>climb high, sleep low</strong>. Pushing your body to a higher elevation during the day, then returning to a lower elevation to rest, helps your system adjust gradually rather than forcing it to cope with reduced oxygen for an extended period.
              </p>
              <p>
                This is part of why the Khopra Trek, despite reaching nearly 4,700 meters, has a comparatively manageable safety profile when approached correctly. The route is essentially designed around this principle rather than working against it.
              </p>
            </div>
          </article>

          {/* MID ARTICLE CTA */}
          <section className="bg-emerald-950 border border-emerald-800 p-6 rounded-3xl text-white my-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="font-bold text-base">Planning to trek above 4,600 meters safely?</h4>
                <p className="text-xs text-emerald-200/80">Our experienced local guides help trekkers acclimatize properly and complete the journey to Khayer Lake with confidence.</p>
              </div>
              <Link 
                href="/contact"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-sm transition duration-200 shrink-0 text-center"
              >
                Inquire with our experts &rarr;
              </Link>
            </div>
          </section>

          {/* SECTION 4: PROGRESSION */}
          <article id="progression" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Day-by-Day Elevation Progression
            </h2>
            <div className="space-y-4">
              {dailyProgression.map((item, idx) => (
                <div key={idx} className="bg-white border border-stone-200 p-5 rounded-3xl shadow-sm flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-stone-600">
                  <div className="sm:w-1/3 font-bold text-stone-900">{item.stage}</div>
                  <div className="sm:w-2/3 text-xs text-stone-500 leading-relaxed">{item.notes}</div>
                </div>
              ))}
            </div>
          </article>

          {/* SECTION 5: EFFECTS */}
          <article id="effects" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How Does 4,660 Meters Affect Your Body?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                At 4,660 meters, the effective oxygen level is roughly 57% of what you would experience at sea level. Your body responds to this in several noticeable ways:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Breathing changes:</strong> You will naturally breathe faster and deeper as your body tries to compensate for lower oxygen.</li>
                <li><strong>Fatigue sets in faster:</strong> Tasks that feel routine at lower elevations require noticeably more effort.</li>
                <li><strong>Endurance drops:</strong> Stamina decreases the higher you climb, which is why a slow, steady pace matters.</li>
                <li><strong>Dehydration accelerates:</strong> Higher altitude and dry mountain air both speed up fluid loss. Hydration is a massive priority.</li>
              </ul>
            </div>
          </article>

          {/* SECTION 6: AMS */}
          <article id="ams" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Can You Get Altitude Sickness on the Khopra Trek?
            </h2>
            <div className="space-y-6 text-sm text-stone-600 leading-relaxed">
              <p>
                Yes, altitude sickness is a real possibility on any trek that reaches 4,660 meters, and Khopra is no exception. Acute Mountain Sickness (AMS) is well understood and manageable if recognized early.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                  <h4 className="font-bold text-stone-900 text-sm">Early Symptoms of AMS</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Common and usually resolved with rest, hydration, and slower pacing. Watch for: mild headaches, slight dizziness, reduced appetite, and difficulty sleeping.
                  </p>
                </div>

                <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                  <h4 className="font-bold text-stone-900 text-sm text-rose-600">Serious AMS Warning Signs</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Require immediate attention: severe, persistent headache, repeated vomiting, confusion, ataxia (loss of coordination/balance).
                  </p>
                </div>
              </div>

              <div className="bg-stone-900 border border-stone-850 p-6 rounded-3xl text-stone-300 text-xs">
                <strong>When Immediate Descent Is Necessary:</strong> If any serious warning signs appear, you must descend immediately. The trail to Khayer Lake has no lodges or shelter, so turning back promptly is the only safety option. Experienced guides can coordinate a manual stretcher descent or helicopter rescue.
              </div>
            </div>
          </article>

          {/* SECTION 7: ACCLIMITIZATION */}
          <article id="acclimatize" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How to Acclimatize Properly Before Reaching 4,660m
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Acclimatization starts well before you reach Khopra Ridge. A few critical habits include:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Sleep at intermediate altitudes:</strong> Overnighting at Dobato (3,432m) or Bayeli (3,432m) on the nights prior allows your body to adjust gradually.</li>
                <li><strong>Hydrate consistently:</strong> Aim for 4 to 5 liters of water daily. Dehydration mimics and accelerates AMS symptoms.</li>
                <li><strong>Move slowly:</strong> Locally termed &quot;Bistari, Bistari&quot; (slowly, slowly). Rushing uphill at altitude is highly risky.</li>
                <li><strong>Avoid alcohol and sleeping pills:</strong> Both interfere with your body&apos;s adaptation process and can mask early AMS symptoms.</li>
              </ul>
            </div>
          </article>

          {/* SECTION 8: DIFFICULTY */}
          <article id="difficulty" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Is the Khopra Trek Difficult Because of Altitude?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The honest answer is: altitude is the main source of difficulty on this trek, more so than distance or terrain. The trails themselves are not technically demanding — there is no climbing equipment or technical skill required — but the elevation changes mean your cardiovascular system works harder.
              </p>
              <p>
                The uphill sections between Dobato and Khopra Ridge, and especially Khopra Ridge to Khayer Lake, are physically the hardest parts of the entire route. Trekkers who pace themselves and acclimatize properly handle it comfortably; those who underestimate the elevation struggle.
              </p>
            </div>
          </article>

          {/* SECTION 9: COMPARISONS */}
          <article id="compares" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How Khopra Trek Altitude Compares to Other Nepal Treks
            </h2>
            <div className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm">
              <table className="w-full border-collapse text-left text-xs">
                <thead className="bg-stone-50 text-stone-700 font-bold uppercase border-b border-stone-200">
                  <tr>
                    <th className="px-6 py-4">Trek Route</th>
                    <th className="px-6 py-4">Highest Point Elevation</th>
                    <th className="px-6 py-4 text-right">Relative Altitude Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-600 font-medium">
                  {compares.map((c, idx) => (
                    <tr key={idx} className="hover:bg-stone-50">
                      <td className="px-6 py-4 font-bold text-stone-900">{c.name}</td>
                      <td className="px-6 py-4 text-emerald-600 font-bold">{c.altitude}</td>
                      <td className="px-6 py-4 text-right text-stone-500">{c.level}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid gap-6 md:grid-cols-2 text-stone-650 text-xs leading-relaxed mt-6">
              <div>
                <strong>vs. Poon Hill:</strong> Poon Hill tops out at roughly 3,210 meters, making it significantly lower and easier from an altitude standpoint than Khopra.
              </div>
              <div>
                <strong>vs. Mardi Himal:</strong> Mardi Himal reaches close to 4,500 meters, placing it in a similar altitude range. Both demand comparable acclimatization discipline.
              </div>
              <div>
                <strong>vs. Annapurna Base Camp:</strong> ABC sits around 4,130 meters — lower than Khopra&apos;s highest point at Khayer Lake, but still a high-altitude trek.
              </div>
              <div>
                <strong>vs. Everest Base Camp:</strong> EBC, at roughly 5,364 meters, goes notably higher and typically demands a longer acclimatization schedule.
              </div>
            </div>
          </article>

          {/* SECTION 10: BEGINNERS */}
          <article id="beginners" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Can Beginners Safely Complete the Khopra Trek?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Yes — beginners regularly complete the Khopra Ridge Trek safely, provided they take the altitude seriously rather than treating it as a casual hike. The elevation gain is gradual across multiple days, and the climb-high-sleep-low structure around Khayer Lake is designed to reduce risk.
              </p>
              <p>
                Beginners benefit significantly from trekking with experienced local guides who can monitor adaptation, enforce sensible pacing, and make the call to descend if needed.
              </p>
              <div className="bg-stone-100 border border-stone-200 p-6 rounded-3xl text-stone-850 text-xs space-y-2">
                <h4 className="font-bold text-stone-900">Expert Trail Insights for Khayer Lake:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Mountain weather changes quickly. Carry layers for sudden wind/cold.</li>
                  <li>Carry more water than you think you need. There are no resupply points on the excursion route.</li>
                  <li>Start early (pre-dawn) to ensure clear mountain visibility and adequate daylight.</li>
                </ul>
              </div>
            </div>
          </article>

          {/* SECTION 11: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About the Highest Point
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "What is the highest point on the Khopra Trek?",
                  a: "The highest point on the Khopra Trek is Khayer Lake, at 4,660 meters (15,288 feet). It's reached as a single-day side trip from Khopra Ridge."
                },
                {
                  q: "How high is Khayer Lake?",
                  a: "Khayer Lake sits at 4,660 meters (15,288 feet) above sea level, making it the maximum elevation reached anywhere on the Khopra Trek route."
                },
                {
                  q: "What is the altitude of Khopra Ridge?",
                  a: "Khopra Ridge, also called Khopra Danda, is at 3,660 meters (12,007 feet). It's the highest point where trekkers actually spend the night."
                },
                {
                  q: "Is Khopra Trek considered a high-altitude trek?",
                  a: "Yes. Reaching 4,660 meters at Khayer Lake puts the trek firmly in high-altitude territory, where proper acclimatization and pacing are necessary."
                },
                {
                  q: "Can beginners complete the Khopra Trek safely?",
                  a: "Yes, most beginners can complete it safely with moderate fitness, a slow and steady pace, and proper acclimatization — ideally with the support of experienced local guides."
                },
                {
                  q: "Is altitude sickness common on the Khopra Trek?",
                  a: "Mild AMS symptoms like headaches or reduced appetite are fairly common at altitude, but severe AMS is uncommon among trekkers who acclimatize properly and pace themselves sensibly."
                },
                {
                  q: "How difficult is the Khayer Lake hike?",
                  a: "The hike from Khopra Ridge to Khayer Lake is the most physically demanding section of the trek, involving a steep ascent of roughly 1,000 meters in a single day before returning to Khopra Ridge."
                },
                {
                  q: "Do I need acclimatization days for the Khopra Trek?",
                  a: "Yes. Overnighting at intermediate stops like Dobato or Bayeli before reaching Khopra Ridge helps your body adjust gradually and significantly reduces altitude-related risk."
                },
                {
                  q: "How does Khopra Trek compare with Annapurna Base Camp altitude?",
                  a: "Khopra Trek's highest point (4,660m at Khayer Lake) is higher than Annapurna Base Camp's roughly 4,130 meters, though both require comparable acclimatization discipline."
                },
                {
                  q: "Is a guide recommended for trekking to Khayer Lake?",
                  a: "Yes. Experienced local guides help monitor altitude adaptation, enforce safe pacing, and respond quickly if AMS symptoms or weather conditions require a change of plan."
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
              The highest point on the Khopra Trek is Khayer Lake at 4,660 meters, while the highest point you will actually sleep at is Khopra Ridge, 1,000 meters below that summit. That gap is the key to why this trek — despite reaching nearly 4,700 meters — remains achievable for well-prepared trekkers, including many completing their first high-altitude journey.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              Altitude here isn&apos;t something to fear, but it does deserve respect. Gradual elevation gain, proper acclimatization, steady pacing, and attentiveness to how your body responds are what separate a manageable trek from a difficult one.
            </p>
          </article>

          {/* SECTION 13: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Ready to experience the Khopra Ridge Trek safely with expert local guidance?
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Contact our team and start planning your high-altitude trek today. Our licensed guides based in Pokhara and Kathmandu specialize in safety management, custom itineraries, and community-based trekking protocols.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Inquire with experts &rarr;
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
