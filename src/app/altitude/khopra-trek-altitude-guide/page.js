import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/altitude/khopra-trek-altitude-guide",
  },
  title: "Khopra Ridge Altitude & Elevation Guide | Nepal Trek Guide",
  description: "Understand Khopra Ridge altitude, daily elevation gain, oxygen levels, and AMS risk with this complete trekking safety guide — covering the full route from.",
};

export default function Page() {
  const routesData = [
    { day: "Day 1", route: "Pokhara → Nayapul → Tikhedhunga", altitude: "~1,540m", gainLoss: "+400m" },
    { day: "Day 2", route: "Tikhedhunga → Ghandruk", altitude: "~1,940m", gainLoss: "+400m" },
    { day: "Day 3", route: "Ghandruk → Tadapani", altitude: "~2,630m", gainLoss: "+690m" },
    { day: "Day 4", route: "Ghandruk → Tadapani → Dobato", altitude: "~3,100m", gainLoss: "+470m" },
    { day: "Day 5", route: "Dobato → Bayeli Kharka", altitude: "~3,450m", gainLoss: "+350m" },
    { day: "Day 6", route: "Bayeli Kharka → Chhistibung", altitude: "~2,980m", gainLoss: "-470m (descent)" },
    { day: "Day 7", route: "Chhistibung → Khopra Ridge", altitude: "~3,660m", gainLoss: "+680m" },
    { day: "Day 8", route: "Khopra Ridge → Khayer Lake → Khopra Ridge", altitude: "~4,660m (day high)", gainLoss: "+1,000m (return)" },
    { day: "Day 9", route: "Khopra Ridge → Ghandruk", altitude: "~1,940m", gainLoss: "-1,720m" }
  ];

  const oxygenData = [
    { altitude: "Sea level", pct: "100%", location: "Starting point" },
    { altitude: "1,500m", pct: "~85%", location: "Nayapul / start zone" },
    { altitude: "2,500m", pct: "~76%", location: "Tadapani entry" },
    { altitude: "3,000m", pct: "~71%", location: "Dobato area" },
    { altitude: "3,660m", pct: "~65%", location: "Khopra Ridge" },
    { altitude: "4,000m", pct: "~60%", location: "Approaching Khayer Lake" },
    { altitude: "4,660m", pct: "~57%", location: "Khayer Lake summit" }
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
            <span className="text-emerald-400">Altitude Guide</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Altitude &amp; Safety Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Khopra Ridge Altitude &amp; Elevation Guide
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Trek height profiles, atmospheric oxygen drops, and strategic acclimatisation frameworks for Annapurna trekkers.
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
              <a href="#altitude-overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Altitude Overview
              </a>
              <a href="#altitude-zones" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Altitude Zones
              </a>
              <a href="#elevation-gain" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Daily Elevation Gain
              </a>
              <a href="#oxygen-levels" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Oxygen Levels drop
              </a>
              <a href="#khayer-lake" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Khayer Lake (4,660m)
              </a>
              <a href="#experience-curve" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Experience Curve
              </a>
              <a href="#ams-risk" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                AMS Risk &amp; Prevention
              </a>
              <a href="#acclimatisation" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Acclimatisation Strategy
              </a>
              <a href="#comparisons" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trek Comparisons
              </a>
              <a href="#checklist" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Altitude Safety Checklist
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
                Inquire About Safety Plan
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Altitude Guide &amp; Safety Breakdown
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Most trekkers who research Khopra Ridge focus on the view. They should be focusing on the altitude.
              </p>
              <p>
                Khopra Ridge sits at 3,660 metres above sea level — a height where oxygen levels have already dropped noticeably and the body is working harder with every uphill step. The highest point of the trek, Khayer Lake, reaches 4,660 metres, placing it firmly in high-altitude territory and well above Everest Base Camp in terms of single-day exposure risk.
              </p>
              <p>
                This guide exists to do something most altitude pages don&apos;t: translate those numbers into real trekking experience. You&apos;ll find the complete day-by-day elevation breakdown, a simplified explanation of how oxygen levels change as you climb, and a practical acclimatisation strategy that licensed guides on this route actually use.
              </p>
              <p>
                Understanding altitude isn&apos;t just a safety exercise. It&apos;s how you plan a trek you can actually complete.
              </p>
            </div>
          </article>

          {/* SECTION: OVERVIEW */}
          <article id="altitude-overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Ridge Altitude Overview
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Khopra Ridge is best described as a moderate-to-high altitude trek with a sharp high-point exposure. The majority of the route is walked between 2,000m and 3,660m — an elevation band that challenges the body without entering the danger zone. The exception is the Khayer Lake day, which lifts trekkers to 4,660m for a high-altitude summit experience before descending back to safety.
              </p>
              <p>
                Understanding that distinction — the everyday trekking range versus the peak exposure point — is the foundation of planning this route safely.
              </p>
              <p>
                <strong>Khopra Ridge Elevation in Trekking Terms:</strong> The Khopra Danda ridge itself stands at 3,660 metres. In trekking classification, this falls in the upper end of the &quot;moderate altitude&quot; band, where most healthy adults can acclimatise with proper pacing and a sensible itinerary.
              </p>
              <p>
                For context: this is higher than the top of Poon Hill (3,210m), higher than the highest point of the Ghorepani loop, and comparable to the entry altitude of some Everest region treks. It is not a casual hill walk. But with the right preparation, it is genuinely within reach of first-time high-altitude trekkers.
              </p>
              <p>
                <strong>Sleeping Altitude vs Hiking Altitude:</strong> One of the most important — and most overlooked — concepts on any Himalayan trek is the difference between where you walk and where you sleep.
              </p>
              <p>
                Your body acclimatises during rest, not during movement. So it is the elevation of your lodge at night — your sleeping altitude — that determines how well your system adjusts before the next day&apos;s climb.
              </p>
              <p>
                On the Khopra Ridge route, sleeping altitudes are carefully staged. Trekkers sleep progressively higher each night, with one intentional descent built into the itinerary (at Chhistibung) to aid acclimatisation before the final push to the ridge. This is not accidental itinerary design — it is deliberate altitude management.
              </p>
            </div>
          </article>

          {/* SECTION: ALTITUDE ZONES */}
          <article id="altitude-zones" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Altitude Zones on the Khopra Trek (Critical Safety Framework)
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The Khopra Ridge route passes through three distinct altitude zones. Each zone affects the body differently, and recognising which zone you&apos;re in helps you pace yourself, watch for symptoms, and understand what your body is adapting to:
              </p>
              <p>
                <strong>Low Altitude Zone (Below 2,500m):</strong> The first days of the trek — through Nayapul and up toward Ghandruk — take place below 2,500 metres. At this altitude, oxygen levels are comfortable and the body requires minimal adjustment. Trekkers typically feel strong, breathe easily, and establish their base pacing rhythm.
              </p>
              <p>
                <strong>Moderate Altitude Zone (2,500m–3,500m):</strong> Between 2,500 and 3,500 metres, the body begins to notice the reduced oxygen in the air. Most trekkers start experiencing mild breathlessness on steep sections, slightly elevated heart rate, and slower recovery. This is where early acclimatisation happens. The body responds to lower oxygen by producing more red blood cells and increasing breathing rates. The section from Tadapani to Dobato is the primary transition.
              </p>
              <p>
                <strong>High Altitude Zone (3,500m+):</strong> Above 3,500 metres, the oxygen drop becomes genuinely significant. At Khopra Ridge itself (3,660m), trekkers are breathing air that contains around 65% of the oxygen available at sea level. Physical effort takes more out of you, sleep quality drops, and headaches may appear. Trekkers spending nights at this altitude need to have acclimatised properly through the lower zones.
              </p>
            </div>
          </article>

          {/* SECTION: ELEVATION GAIN */}
          <article id="elevation-gain" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Daily Elevation Gain &amp; Trek Route Profile
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The Khopra Ridge route is not a straight upward climb. It follows a pattern of ascent, partial descent, and re-ascent that is typical of Himalayan acclimatisation design — each stage building altitude exposure while allowing partial recovery.
              </p>

              {/* TABLE */}
              <div className="overflow-x-auto my-6 border border-stone-200 rounded-3xl">
                <table className="min-w-full divide-y divide-stone-200 text-left text-xs">
                  <thead className="bg-stone-100 font-bold text-stone-900">
                    <tr>
                      <th className="px-4 py-3">Day</th>
                      <th className="px-4 py-3">Route Segment</th>
                      <th className="px-4 py-3">Approximate Altitude</th>
                      <th className="px-4 py-3">Net Gain/Loss</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-600 bg-white">
                    {routesData.map((item, idx) => (
                      <tr key={idx} className={idx % 2 === 1 ? "bg-emerald-50/10" : ""}>
                        <td className="px-4 py-3 font-semibold text-stone-900">{item.day}</td>
                        <td className="px-4 py-3">{item.route}</td>
                        <td className="px-4 py-3 font-medium text-stone-900">{item.altitude}</td>
                        <td className="px-4 py-3 text-emerald-700 font-semibold">{item.gainLoss}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                <strong>Key Steep Ascent Sections:</strong> Two sections of the route stand out for their elevation gain. The climb from Ghandruk to Tadapani gains nearly 700 metres over a single day. The Khopra Ridge to Khayer Lake day is the single hardest physical effort: a 1,000-metre ascent to 4,660m and a full return descent back to the ridge.
              </p>
              <p>
                <strong>Why the Chhistibung Descent Matters:</strong> Day 6 includes a descent to Chhistibung at approximately 2,980 metres — nearly 500 metres lower than the previous night. This descent follows the trekking principle of &quot;climb high, sleep low&quot; — a core acclimatisation strategy. By sleeping lower before the final ridge push, the body gets a recovery night at a safer altitude, improving red blood cell adaptation and significantly reducing AMS risk on the approach to Khopra Ridge.
              </p>
            </div>
          </article>

          {/* SECTION: OXYGEN LEVELS */}
          <article id="oxygen-levels" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Oxygen Levels and High Altitude Physiology
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Altitude affects trekkers not because the percentage of oxygen in the air changes — it remains constant at around 21% everywhere on Earth — but because air pressure drops as altitude increases. With lower pressure, each breath delivers fewer oxygen molecules to your lungs, and the body has to work harder.
              </p>

              {/* OXYGEN DROP TABLE */}
              <div className="overflow-x-auto my-6 border border-stone-200 rounded-3xl max-w-xl">
                <table className="min-w-full divide-y divide-stone-200 text-left text-xs">
                  <thead className="bg-stone-100 font-bold text-stone-900">
                    <tr>
                      <th className="px-4 py-3">Altitude</th>
                      <th className="px-4 py-3">Available Oxygen (vs Sea Level)</th>
                      <th className="px-4 py-3">Typical Location on Trek</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-600 bg-white">
                    {oxygenData.map((item, idx) => (
                      <tr key={idx} className={item.altitude === "3,660m" || item.altitude === "4,660m" ? "bg-emerald-50/20 font-semibold" : ""}>
                        <td className="px-4 py-3 text-stone-900 font-medium">{item.altitude}</td>
                        <td className="px-4 py-3 text-emerald-700 font-bold">{item.pct}</td>
                        <td className="px-4 py-3">{item.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                <strong>What Reduced Oxygen Actually Feels Like:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
                <li><strong>At Tadapani (2,630m):</strong> Most trekkers notice breathlessness only on steep climbs. At rest, breathing feels normal.</li>
                <li><strong>At Khopra Ridge (3,660m):</strong> Trekkers typically experience slower recovery after effort, a slightly elevated resting heart rate, and lighter sleep patterns.</li>
                <li><strong>At Khayer Lake (4,660m):</strong> Flat walking requires deliberate, measured breathing. Steps become shorter and rest breaks become more frequent.</li>
              </ul>
              <p>
                <strong>SpO2 Monitoring on Trek:</strong> Experienced guides carry pulse oximeters to measure blood oxygen saturation (SpO2) and heart rate. A healthy SpO2 reading at sea level is 95–99%. At altitude, values drop; anything consistently below 80% at rest is a warning sign that warrants descent consideration.
              </p>
            </div>
          </article>

          {/* SECTION: KHAYER LAKE */}
          <article id="khayer-lake" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khayer Lake — Highest Point of the Trek (4,660m)
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Khayer Lake is a sacred glacial lake nestled at 4,660 metres in the upper Annapurna Conservation Area. Reaching it is the single most demanding day of the Khopra Ridge Trek — and the most rewarding.
              </p>
              <p>
                <strong>Why Khayer Lake is the Hardest Day:</strong> The challenge is the rate of ascent. From Khopra Ridge lodge (3,660m), trekkers gain 1,000 metres in a single morning, reaching 4,660m before descending the same distance back to the ridge.
              </p>
              <p>
                This rapid ascent means the body does not have time to acclimatise to Khayer Lake&apos;s altitude. The strategy instead relies on the acclimatisation already built during the preceding days, and on limiting the time spent above 4,000 metres to a single day-trip rather than a sleeping altitude. Starting early — typically 4:00–5:00 AM — is standard practice to avoid cloud buildup and allow recovery time.
              </p>
              <p>
                <strong>Oxygen and Fatigue at 4,660m:</strong> Breathing requires conscious effort, and uphill sections demand short steps. The critical safety distinction is between normal altitude fatigue (which resolves on descent) and Acute Mountain Sickness (which does not, and requires immediate descent).
              </p>
            </div>
          </article>

          {/* SECTION: EXPERIENCE CURVE */}
          <article id="experience-curve" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Altitude Difficulty Progression (The Experience Curve)
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Elevation tables show numbers. The experience curve shows what those numbers feel like across the days of the trek:
              </p>
              <p>
                <strong>Early Trek Phase — Comfort Zone (Below 2,500m):</strong> Days one and two feel like a mountain hike. The trail is steep in places but the body performs at near full capacity. The most common mistake here is moving too fast. Early fatigue compounds as altitude increases.
              </p>
              <p>
                <strong>Adjustment Phase (2,500m–3,500m):</strong> From Tadapani onward, the experience shifts. Uphill sections feel heavier and recovery takes longer. Slowing down by 20–30% compared to lower altitude pace is not optional — it is the primary tool for acclimatisation.
              </p>
              <p>
                <strong>High Altitude Stress Phase (3,500m+):</strong> From Khopra Ridge onward, the physical challenge is consistent. Walking across camp requires conscious effort. Appetite often decreases, sleep depth reduces, and energy levels run lower. It is normal human physiology at altitude.
              </p>
            </div>
          </article>

          {/* SECTION: AMS RISK */}
          <article id="ams-risk" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              AMS (Acute Mountain Sickness) Risk on Khopra Trek
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Acute Mountain Sickness is the body&apos;s response to insufficient acclimatisation at high altitude. On the Khopra route, AMS is a genuine risk — but a manageable one with the right approach.
              </p>
              <p>
                <strong>When AMS Symptoms Typically Start:</strong> Symptoms typically appear 6–12 hours after reaching a new altitude (above 3,000m), which means they often emerge at night or during early morning — not during the climb itself.
              </p>
              <p>
                <strong>Early Warning Signs:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
                <li>Persistent headache that does not resolve with hydration or rest</li>
                <li>Mild nausea or loss of appetite</li>
                <li>Fatigue disproportionate to physical exertion</li>
                <li>Difficulty sleeping despite exhaustion</li>
                <li>Light-headedness on standing</li>
              </ul>
              <p>
                These symptoms alone do not require descent, but they do require rest, hydration, and no further altitude gain until they fully resolve. Ascending with active AMS symptoms is extremely dangerous.
              </p>
              <p>
                <strong>Who Is Most at Risk:</strong> AMS does not reliably follow fitness level, age, or experience. Highly fit trekkers can develop AMS. Certain factors increase risk: ascending too quickly, poor hydration, alcohol consumption (which suppresses breathing rate during sleep), and prior AMS history.
              </p>
            </div>
          </article>

          {/* SECTION: ACCLIMATISATION */}
          <article id="acclimatisation" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Acclimatisation Strategy Used on This Route
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The Khopra Ridge Trek itinerary is not random. Every stage, every rest day, and every descent is calibrated to help the body adapt safely:
              </p>
              <p>
                <strong>The 500-Metre Elevation Gain Rule:</strong> Above 3,000 metres, gain no more than 500 metres of sleeping altitude per day. The Khopra route follows this principle, and stage climbs that exceed this are balanced with shorter walking times or descents.
              </p>
              <p>
                <strong>Sleeping Altitude Control:</strong> Sleeping altitudes increase by controlled increments, reaching a maximum of 3,660m at the ridge. The lake (4,660m) is only visited as a day trip, keeping the overnight exposure risk under 4,000m.
              </p>
              <p>
                <strong>The Role of the Chhistibung Descent:</strong> The descent to Chhistibung (2,980m) on Day 6 is a crucial overnight recovery stop. Sleeping lower before the final ridge push dramatically improves comfort and adaptation rates compared to compressed schedules that skip this step.
              </p>
            </div>
          </article>

          {/* SECTION: COMPARISONS */}
          <article id="comparisons" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Ridge vs Other Popular Treks
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                For trekkers comparing altitude difficulty across the Annapurna region, context matters:
              </p>
              
              <div className="grid gap-6 md:grid-cols-3 mt-6">
                <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-2">
                  <span className="text-xs font-bold text-emerald-600 uppercase block">vs Poon Hill</span>
                  <h4 className="font-bold text-stone-900 text-sm">Lower Sleeping Altitudes</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Poon Hill has a max altitude of 3,210m and sleeping altitude of 2,855m. Khopra is significantly higher (3,660m sleeping / 4,660m lake) and requires more altitude preparation.
                  </p>
                </div>
                <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-2">
                  <span className="text-xs font-bold text-emerald-600 uppercase block">vs Annapurna Base Camp</span>
                  <h4 className="font-bold text-stone-900 text-sm">Lower Sleeping Altitudes</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    ABC trekkers sleep at 4,130m, whereas Khopra Ridge trekkers sleep at 3,660m max. Khopra has a higher day trip point (4,660m) but lower sleeping exposure, making its risk profile slightly more forgiving.
                  </p>
                </div>
                <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-2">
                  <span className="text-xs font-bold text-emerald-600 uppercase block">vs Mardi Himal</span>
                  <h4 className="font-bold text-stone-900 text-sm">Lower Sleeping Altitudes</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Mardi Himal reaches 4,500m and requires sleeping at High Camp above 3,500m. Khopra Ridge has a safer altitude scaling curve, allowing better recovery before the summit push.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* SECTION: CHECKLIST */}
          <article id="checklist" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Altitude Safety Checklist for Trekkers
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-3 text-stone-600">
                <li><strong>Hydration and Nutrition:</strong> Drink 3–4 litres of water per day while trekking above 3,000m. Eat carbohydrate-dense meals like Dal Bhat (lentil soup and rice), which provides excellent slow-burn fuel and recovery hydration.</li>
                <li><strong>Pacing and Speed Control:</strong> Keep your climbing speed low. If you cannot hold a normal conversation without pausing for breath, you are moving too fast. Use the &quot;rest-step&quot; technique on steep climbs.</li>
                <li><strong>Avoid Alcohol above 2,500m:</strong> Alcohol suppresses breathing during sleep, causing overnight blood oxygen saturation levels to drop. Avoid it completely from Tadapani onward.</li>
                <li><strong>Monitor and Report Symptoms Honestly:</strong> Never hide a persistent headache or nausea. Early reporting allows simple pacing adjustments or rest, whereas hiding symptoms can lead to severe complications.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Khopra Altitude
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "What is the altitude of the Khopra Ridge Trek?",
                  a: "The Khopra Ridge Trek reaches a maximum altitude of 4,660 metres at Khayer Lake. Khopra Ridge itself — where trekkers spend one or two nights — sits at 3,660 metres. The majority of the route is walked between 1,500m and 3,660m."
                },
                {
                  q: "How high is Khayer Lake?",
                  a: "Khayer Lake is located at 4,660 metres above sea level in the upper Annapurna Conservation Area. EBC is higher at 5,364m, but Khayer Lake exceeds the standard Annapurna Base Camp (4,130m). The lake is visited as a day trip from Khopra Ridge Lodge, not as an overnight sleeping point."
                },
                {
                  q: "Is Khopra Ridge suitable for beginners?",
                  a: "Yes, for fit and prepared beginners. The route does not require technical climbing skills or ropes. However, the altitude — particularly the Khayer Lake day at 4,660m — demands good physical preparation and honest symptom monitoring."
                },
                {
                  q: "How hard is the Khopra Trek due to altitude?",
                  a: "Altitude makes the Khopra Trek moderately challenging. The most physically demanding day is the Khopra Ridge to Khayer Lake return hike (1,000m vertical climb and descent in a single day above 3,600m). Proper pacing and preparation make it very achievable."
                },
                {
                  q: "What is the highest sleeping altitude on the Khopra Trek?",
                  a: "The highest sleeping altitude on the standard Khopra Ridge itinerary is 3,660 metres at Khopra Ridge Lodge. Keeping the overnight sleeping points below 4,000m helps lower serious AMS risks compared to other high-altitude routes."
                },
                {
                  q: "Can you get altitude sickness on Khopra Ridge?",
                  a: "Yes, AMS is a risk above 3,000m. However, the route is designed to mitigate this risk through gradual scaling and the strategic descent overnight to Chhistibung (2,980m) before pushing to the ridge."
                },
                {
                  q: "How does Khopra Ridge compare to Annapurna Base Camp in difficulty?",
                  a: "Both treks have similar durations. The main difference is sleeping altitude: ABC trekkers sleep at 4,130m, while Khopra trekkers sleep at 3,660m max. Khopra has a higher day-trip altitude (4,660m vs 4,130m) but lower sleeping exposure, making its risk profile slightly more forgiving."
                },
                {
                  q: "What is the oxygen level at Khopra Ridge (3,660m)?",
                  a: "Available oxygen is approximately 65% of sea level. This is due to lower air pressure rather than a change in the air mix. Breathing becomes heavier on climbs. At the Khayer Lake summit (4,660m), available oxygen drops to approximately 57%."
                },
                {
                  q: "How many days are needed to acclimatise properly on Khopra Trek?",
                  a: "The standard 8–10 day itinerary has acclimatisation stages built directly into the route. Attempting compressed routes increases AMS risk. Do not skip the Chhistibung descent stage."
                },
                {
                  q: "Is Khopra Ridge harder than Everest Base Camp in terms of altitude?",
                  a: "No. Everest Base Camp (5,364m) is considerably higher. EBC requires multiple sleeping nights above 4,000m and spends more cumulative time in thin air. Khopra Ridge is a meaningful high-altitude experience, but less extreme."
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
              Khopra Ridge is not a trek you choose despite the altitude. Once you understand the elevation profile properly, it becomes a trek you choose because of how the altitude has been designed into the route.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              The Khayer Lake day at 4,660m is a genuine high-altitude summit experience — rare among Annapurna region treks of this length and difficulty level. And yet the sleeping altitude stays below 4,000m throughout, the acclimatisation stages are built into the itinerary, and the professional guide system on this route is equipped with the tools and experience to manage altitude health actively.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              What makes the difference between trekkers who struggle at altitude and those who complete this route confidently is almost never fitness. It is understanding: knowing what altitude does to the body, knowing the warning signs, knowing when to slow down, and having an itinerary built around acclimatisation rather than convenience.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Plan a Safe Khopra Ridge Trek with Expert Guide Support
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Khopra Ridge Trek is a licensed, Pokhara-based trekking operator specialising in guided Annapurna Conservation Area treks. Our guides carry pulse oximeters, follow acclimatisation-first itineraries, and have led hundreds of trekkers safely to Khayer Lake and back.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Book a Guided Khopra Ridge Trek &rarr;
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-6 py-4 rounded-2xl border border-white/25 shadow-md transition duration-200"
                >
                  View Full Itinerary &amp; Altitude Plan
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
                This altitude guidelines sheet is designed by Pokhara safety coordinators. All guides carry standard portable oxygen support and pulse monitoring kits. Nepal Tourism Operator License #8928-091.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
