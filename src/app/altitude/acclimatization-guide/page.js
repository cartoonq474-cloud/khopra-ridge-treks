import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/altitude/acclimatization-guide",
  },
  title: "Acclimatization Principles for High Altitudes: Complete Trekking Safety Guide",
  description: "Learn how high altitude acclimatization works, how your body adapts to reduced oxygen, how to prevent altitude sickness, and the essential safety principles every trekker needs before heading above 3,000 meters.",
};

export default function Page() {
  const steps = [
    {
      title: "1. The 'Climb High, Sleep Low' Method",
      desc: "During the day hike to Khayer Lake, you climb to 4,660m but return to sleep at 3,660m (Khopra Ridge). This exposes your body to thinner air to stimulate red blood cell production, while letting you recover at a lower sleeping altitude."
    },
    {
      title: "2. Limit Sleeping Elevation Gain",
      desc: "Avoid climbing more than 500 meters per night above 3,000m. The Khopra itinerary fits this by having you sleep at Bayeli (3,432m) before descending to Chhistibung (2,975m) and then moving to Khopra (3,660m)."
    },
    {
      title: "3. Slow Pace & Low Intensity",
      desc: "Walk at a pace where you can easily speak in complete sentences. Overexerting yourself drains your energy and slows down your body's natural acclimatisation process."
    },
    {
      title: "4. Trail Nutrition & Fueling",
      desc: "Your body burns more energy at high altitude. Eat carbohydrate-rich meals like Dal Bhat, garlic soup (believed to improve circulation), and complex starches to maintain energy levels."
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
            <span className="text-emerald-400">Acclimatization Guide</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Altitude Medicine &amp; Physiology
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Acclimatization Principles for High Altitudes
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Learn the physiological science of altitude adaptation, safe climbing strategies, and how to support your body.
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
              <a href="#what-is-it" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                What is Acclimatization?
              </a>
              <a href="#air-pressure" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Reduced Air Pressure
              </a>
              <a href="#body-adapts" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                How the Body Adapts
              </a>
              <a href="#ams-causes" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Altitude Sickness
              </a>
              <a href="#altitude-zones" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Altitude Risk Zones
              </a>
              <a href="#core-principles" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Core Safety Principles
              </a>
              <a href="#climb-high" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Climb High, Sleep Low
              </a>
              <a href="#rest-days" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Rest &amp; Recovery
              </a>
              <a href="#hydration" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Hydration &amp; Diet
              </a>
              <a href="#pacing" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trekking Pace
              </a>
              <a href="#severe-illness" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                HAPE &amp; HACE Risks
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
                Inquire About Safe Planning
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Acclimatization Principles for High Altitudes
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Every year, thousands of trekkers arrive in mountain environments full of excitement — and some return early because they pushed too hard, too fast. The mountains do not care how fit you are, how experienced you feel, or how much you have prepared. At high altitude, one factor determines your safety and success more than any other: acclimatization.
              </p>
              <p>
                High altitude acclimatization is not a luxury or a minor inconvenience to work around. It is a biological process that your body must complete on its own schedule. Understanding how that process works — and how to support it — is what separates trekkers who summit with energy to spare from those who turn back with throbbing headaches at 3,500 meters.
              </p>
              <p>
                This guide explains the science of altitude adaptation, the core principles of safe acclimatization, and the practical strategies that experienced Himalayan trekkers use to manage the process from the first day on the trail.
              </p>
            </div>
          </article>

          {/* SECTION: WHAT IS IT */}
          <article id="what-is-it" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What Is Acclimatization and Why Does It Matter?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>What Acclimatization Actually Means:</strong> Acclimatization is the process by which your body gradually adapts to lower oxygen availability at higher elevations. When you travel from a lower elevation to a higher one, the air around you contains the same percentage of oxygen — roughly 21 percent — but the atmospheric pressure is lower. That lower pressure means each breath delivers less usable oxygen to your lungs and bloodstream.
              </p>
              <p>
                Your body must compensate through physiological changes that take time to develop fully.
              </p>
              <p>
                <strong>Why Altitude Changes Oxygen Availability:</strong> At sea level, atmospheric pressure pushes oxygen efficiently into your lungs. As you ascend, that pressure drops. At 3,500 meters, you are breathing air at roughly 65 percent of sea-level pressure. At 5,000 meters, it drops to around 53 percent.
              </p>
              <p>
                This does not mean the air contains less oxygen by percentage. It means your respiratory system has to work much harder to extract the same amount of usable oxygen from each breath. For most people, this difference becomes physically noticeable somewhere between 2,500 and 3,000 meters.
              </p>
              <p>
                <strong>Why Acclimatization Determines Trekking Safety:</strong> When your body adapts slower than expected, or when you push your elevation gain beyond what your adaptation allows, the result is altitude sickness. Proper acclimatization is not just about comfort. It is the difference between a successful trek and a medical evacuation. Every safety decision you make — your ascent pace, your sleep elevation, your rest days — is a decision about giving your body the time it needs to adapt.
              </p>
            </div>
          </article>

          {/* SECTION: AIR PRESSURE */}
          <article id="air-pressure" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How High Altitude Changes the Air You Breathe
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Understanding Reduced Air Pressure:</strong> Barometric pressure decreases steadily as altitude increases. At sea level, the standard barometric pressure is approximately 1,013 millibars. By the time you reach 3,660 meters — the elevation of Khopra Ridge in the Annapurna Conservation Area — that pressure has dropped to roughly 640 millibars. The air is physically thinner, and each breath contains a smaller quantity of oxygen molecules. This is why altitude affects everyone, regardless of fitness level.
              </p>
              <p>
                <strong>Why Oxygen is Harder to Use:</strong> Even though the percentage of oxygen in mountain air remains the same as at sea level, the partial pressure — the force with which oxygen molecules press across lung membranes into the blood — falls significantly.
              </p>
              <p>
                Your body relies on that pressure differential to transfer oxygen from your lungs into your red blood cells. When pressure drops, oxygen transfer becomes less efficient. Your cells begin to receive less oxygen than they need for normal function. This state is called hypoxia.
              </p>
            </div>
          </article>

          {/* SECTION: BODY ADAPTS */}
          <article id="body-adapts" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How the Human Body Adapts During the Acclimatization Process
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Your body does not adapt to altitude in a single step. It moves through a sequence of physiological responses:
              </p>
              <p>
                <strong>Increased Breathing Rate and Hyperventilation:</strong> The first response is immediate. Within hours, your breathing rate increases. This hyperventilation response is your respiratory system&apos;s attempt to pull more oxygen into your lungs. The side effect is that you exhale more carbon dioxide than usual, which shifts blood pH to alkaline and can cause disrupted sleep and mild dizziness.
              </p>
              <p>
                <strong>Increased Heart Rate:</strong> Alongside faster breathing, your heart rate increases to move blood more quickly. Simple tasks — walking uphill, putting on a pack — feel disproportionately tiring in the first day or two.
              </p>
              <p>
                <strong>Increased Red Blood Cell Production:</strong> Over several days, your body begins producing more red blood cells to carry oxygen using hemoglobin. Initial red blood cell increases begin within 24 to 48 hours, but meaningful increases take several days. This is why gradual itineraries are critical.
              </p>
              <p>
                <strong>Kidney Regulation:</strong> As breathing rate increases, the kidneys excrete bicarbonate into the urine to restore blood pH balance, allowing the respiratory drive to continue functioning. This is why you urinate more frequently at altitude, and why staying hydrated is so important.
              </p>
            </div>
          </article>

          {/* SECTION: ALTITUDE SICKNESS */}
          <article id="ams-causes" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Understanding Altitude Sickness and Why It Happens
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>What is Acute Mountain Sickness (AMS):</strong> AMS is the most common altitude-related illness, occurring when the body ascends faster than it can adapt. The resulting oxygen deficit causes a persistent headache combined with at least one other symptom (nausea, fatigue, dizziness, or difficulty sleeping).
              </p>
              <p>
                <strong>Early Warning Symptoms:</strong> Symptoms typically begin within 6 to 12 hours of arriving at a new sleeping elevation. Watch for:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-stone-600">
                <li>Headache, described as pressure across the forehead or behind the eyes</li>
                <li>Unusual fatigue that rest does not relieve</li>
                <li>Loss of appetite or mild nausea</li>
                <li>Dizziness when standing or moving</li>
                <li>Difficulty sleeping despite physical tiredness</li>
              </ul>
              <p>
                Treat any persistent headache above 2,500 meters as a potential AMS symptom. Do not dismiss it and push on.
              </p>
            </div>
          </article>

          {/* SECTION: ALTITUDE ZONES */}
          <article id="altitude-zones" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Altitude Zones and Risk Levels
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The risk profile changes meaningfully as you ascend:
              </p>
              <ul className="list-disc pl-5 space-y-3 text-stone-600">
                <li>
                  <strong>Moderate Altitude (1,500–2,500m):</strong> Physiological changes are minimal. Serious altitude illness is rare. Departure points like Nayapul (~1,070m) fall below this range.
                </li>
                <li>
                  <strong>High Altitude (2,500–3,500m):</strong> Symptoms of AMS commonly begin in this range. Villages such as Ghorepani (2,860m), Tadapani (2,630m), and Ghandruk (1,940m) sit within or approach this band.
                </li>
                <li>
                  <strong>Very High Altitude (3,500–5,500m):</strong> Khopra Ridge sits at 3,660m. Higher destinations like Annapurna Base Camp (4,130m) or Everest Base Camp (5,364m) fall in the upper portion of this band. Acclimatisation is non-negotiable.
                </li>
                <li>
                  <strong>Extreme Altitude (Above 5,500m):</strong> The human body cannot fully acclimatise, and deterioration begins regardless of pace. This zone is relevant only for mountaineering.
                </li>
              </ul>
            </div>
          </article>

          {/* SECTION: CORE PRINCIPLES */}
          <article id="core-principles" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Core Principles of Safe High Altitude Acclimatization
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                These principles form the framework that experienced guides use to protect groups:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Follow Gradual Ascent:</strong> Go slowly. Moving through elevation bands gradually gives your physiology time to respond.</li>
                <li><strong>Respect Safe Daily Gains:</strong> Above 3,000 meters, limit sleeping elevation gain to no more than 300 to 500 meters per night.</li>
                <li><strong>Avoid Early Overexertion:</strong> Trekkers who push hard in the first two days are consistently the most vulnerable to AMS later. Walk at a conversational pace.</li>
                <li><strong>Monitor Your Body:</strong> Check in with yourself continuously. Note your headache level, appetite, energy, and sleep quality daily.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: CLIMB HIGH SLEEP LOW */}
          <article id="climb-high" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why the 'Climb High, Sleep Low' Strategy Works
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Temporary Exposure:</strong> When you hike to a higher elevation and then descend to sleep lower, your body receives the physiological stimulus to adapt without staying at that elevation long enough to be compromised overnight.
              </p>
              <p>
                <strong>Recovery and Repair:</strong> Sleeping lower gives your body the oxygen it needs to repair, consolidate adaptations, and recover overnight, preventing irregular breathing and oxygen saturation drops.
              </p>
              <p>
                <strong>Real Trekking Example:</strong> On the Khopra Ridge Trek, the hike to Khayer Lake is a perfect application. Trekkers climb from Khopra Ridge (3,660m) to Khayer Lake (4,660m) — gaining 1,000m during the day — and return to sleep at 3,660m. The body gets the altitude stimulus without the prolonged overnight sleep stress.
              </p>
            </div>
          </article>

          {/* SECTION: REST DAYS */}
          <article id="rest-days" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Rest Days Are Essential During Acclimatization
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                A rest day at altitude is not a wasted day. While resting, your body is actively building the red blood cells and blood chemistry adjustments needed for the higher elevations ahead.
              </p>
              <p>
                <strong>Recommended Schedule:</strong> Above 3,000 meters, schedule one rest or acclimatisation day for every 600 to 1,000 meters of sleeping elevation gain. Typically, this translates to an adjustment stop every two to three trekking days.
              </p>
              <p>
                <strong>Signs You Need Extra Recovery:</strong> If you experience more than mild symptoms (persistent headache, significant nausea, or noticeable fatigue) upon arrival at a new lodge, take an additional recovery day before moving upward.
              </p>
            </div>
          </article>

          {/* SECTION: HYDRATION & DIET */}
          <article id="hydration" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Hydration and Nutrition Strategies at High Altitude
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Why Dehydration Amplifies AMS:</strong> Dry mountain air and hyperventilation accelerate moisture loss. Aim for 3 to 4 liters of water per day above 3,000 meters. Check that urine remains pale yellow.
              </p>
              <p>
                <strong>Carbohydrate-Rich Energy:</strong> At high altitude, your body metabolises carbohydrates more efficiently than fats or proteins because carbs require less oxygen per calorie produced. Dal Bhat (rice and lentil soup) is an ideal high-altitude food for this reason.
              </p>
              <p>
                <strong>Electrolyte Balance:</strong> Urinary excretion from kidney adaptation flushes out minerals. Carry electrolyte powder or tablets to maintain sodium and potassium balance on long climbs.
              </p>
              <p>
                <strong>Garlic Soup:</strong> Known locally as <em>Lasun ko Soup</em>, garlic soup is a beloved local remedy. It is warm, salty, and hydrating — providing a helpful source of warmth and sodium, though it is not a clinical substitute for safe pacing.
              </p>
            </div>
          </article>

          {/* SECTION: PACING */}
          <article id="pacing" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Proper Trekking Pace and Energy Management
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Slow and Steady:</strong> Pace is a safety variable. Overexertion raises your heart rate, depletes oxygen reserves, and can trigger AMS. Slow down and let your body manage energy output.
              </p>
              <p>
                <strong>The Conversation Test:</strong> You should be able to speak a complete sentence without pausing to catch your breath. If you are too breathless to hold a brief conversation, slow down immediately.
              </p>
              <p>
                <strong>How Overexertion Stalls Adaptation:</strong> Heavy physical effort redirects blood flow and oxygen to working muscles, reducing the oxygen available for the adaptive processes happening in your bone marrow, kidneys, and lungs.
              </p>
            </div>
          </article>

          {/* SECTION: SEVERE ILLNESS */}
          <article id="severe-illness" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Serious Altitude Illnesses That Require Immediate Descent
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                If symptoms are ignored and ascent continues, two life-threatening conditions can develop:
              </p>
              <p>
                <strong>High Altitude Pulmonary Edema (HAPE):</strong> Fluid accumulation in the lungs. Symptoms include extreme breathlessness at rest, a wet cough producing pink/frothy fluid, and rapid fatigue. HAPE is a medical emergency requiring immediate descent.
              </p>
              <p>
                <strong>High Altitude Cerebral Edema (HACE):</strong> Fluid accumulation in the brain. Symptoms present as severe headache, confusion, loss of coordination (inability to walk heel-to-toe in a straight line), and lethargy.
              </p>
              <p>
                <strong>Descent is the Treatment:</strong> Never wait to see if these symptoms improve at altitude. Descend immediately on foot or arrange helicopter evacuation if the patient is immobile. Ensure you have comprehensive evacuation insurance.
              </p>
            </div>
          </article>

          {/* SECTION: ACClIMATISATION GUIDELINES LIST */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-955">Essential Acclimatization Guidelines</h2>
            <div className="space-y-4">
              {steps.map((step, idx) => (
                <div key={idx} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                  <h4 className="font-extrabold text-stone-955 text-sm">{step.title}</h4>
                  <p className="mt-2 text-xs text-stone-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Acclimatization
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "How long does acclimatization take at high altitude?",
                  a: "Initial adaptation begins within 24 to 48 hours of arriving at a new elevation. Meaningful physiological changes — particularly increased red blood cell production — take several days to two weeks to develop."
                },
                {
                  q: "At what altitude does altitude sickness usually begin?",
                  a: "Most people begin to feel altitude effects above 2,500 meters, with AMS most commonly developing above 3,000 meters. Individual susceptibility varies."
                },
                {
                  q: "How fast should you ascend above 3,000 meters?",
                  a: "The widely accepted guideline is to limit sleeping elevation gain to 300 to 500 meters per night above 3,000 meters, with a rest day for every 600 to 1,000 meters of total elevation gained."
                },
                {
                  q: "Can physically fit people still get altitude sickness?",
                  a: "Yes. Physical fitness does not prevent altitude sickness. Acclimatisation is governed by time and physiological adaptation, not aerobic capacity."
                },
                {
                  q: "Does drinking more water prevent altitude sickness?",
                  a: "Staying hydrated supports kidney adaptation and blood volume, reducing symptom overlap with dehydration. However, hydration alone does not prevent AMS caused by ascending too quickly."
                },
                {
                  q: "What does climb high sleep low mean?",
                  a: "Climb high sleep low means hiking to a higher elevation during the day to stimulate altitude adaptation, then descending to a lower elevation to sleep. The higher elevation provides the stimulus; the lower sleeping elevation allows recovery."
                },
                {
                  q: "Can I prevent acute mountain sickness completely?",
                  a: "There is no guaranteed prevention, but following acclimatisation principles (gradual ascent, proper rest days, adequate hydration, pacing) dramatically reduces your risk."
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
              Acclimatization is not a strategy you implement once and forget. It is an ongoing relationship between your body and the mountain — one that requires patience, attention, and respect for the process.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              Give the acclimatisation process the time it needs, and the mountains will reward you with one of the most extraordinary experiences in the world.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Plan Your Trek With Safety-Oriented Local Guides
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                If you are planning a high-altitude trek in the Annapurna Conservation Area, the itinerary you follow matters as much as the preparation you do at home. We design our routes with built-in acclimatisation stops.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Inquire About a Guided Khopra Ridge Trek &rarr;
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
                Our guides are certified by Keep Friendly Nepal and receive annual wilderness medicine training covering pacing, oxygen tracking, and evacuation safety. Nepal Tourism Operator License #8928-091.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
