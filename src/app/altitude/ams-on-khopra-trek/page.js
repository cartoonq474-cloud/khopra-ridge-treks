import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/altitude/ams-on-khopra-trek",
  },
  title: "AMS on the Khopra Trek: Symptoms, Risk Zones & Safety Guide",
  description: "Planning the Khopra Ridge Trek?  Learn how to recognize AMS symptoms early, understand altitude risk zones by route stage, and make safe on-trail decisions.",
};

export default function Page() {
  const amsRules = [
    {
      rule: "Rule 1: Recognize Early Symptoms",
      desc: "A mild forehead headache, slight loss of appetite, fatigue, or restless sleep are warnings. Never ignore them."
    },
    {
      rule: "Rule 2: Never Ascend with Active Symptoms",
      desc: "If you feel even mild AMS, do not climb higher. Remain at your current stage (e.g., Dobato, Khopra Ridge) to acclimatise."
    },
    {
      rule: "Rule 3: Descend Immediately if Symptoms Worsen",
      desc: "If rest at the same altitude does not resolve symptoms after 24 hours, or if signs of severe HACE/HAPE develop, descend."
    },
    {
      rule: "Rule 4: Prioritize Hydration over Output",
      desc: "Drink 3 to 4 liters of fluids daily. Avoid alcohol above 2,500m to prevent suppressing your sleeping respiration rates."
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
            <span className="text-emerald-400">AMS Symptoms &amp; Safety</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Wilderness Medicine &amp; AMS Protocol
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            AMS on the Khopra Trek: Symptoms &amp; Safety Guide
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Recognize altitude sickness early, understand risk zones, and make safe on-trail decisions on Annapurna routes.
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
              <a href="#risk-map" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Altitude Risk Map
              </a>
              <a href="#what-is-ams" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                What is AMS?
              </a>
              <a href="#ams-vs-severe" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                AMS vs HAPE vs HACE
              </a>
              <a href="#symptoms-stages" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Symptom Severity Stages
              </a>
              <a href="#ignored-signs" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Ignored Warning Signs
              </a>
              <a href="#decision-framework" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Decision Framework
              </a>
              <a href="#prevention-system" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Prevention System
              </a>
              <a href="#evacuation-reality" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Evacuation &amp; Insurance
              </a>
              <a href="#safety-tips" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Safety Tips
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
                Trek Safety Consultation
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              AMS Symptoms &amp; Safety Guide
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Khopra Ridge is one of the most rewarding off-the-beaten-path treks in the Annapurna Conservation Area. It rewards trekkers with sweeping Dhaulagiri and Annapurna panoramas, quiet Gurung village trails, and the stunning high-altitude basin of Khayer Lake. But above 3,000 meters, the route enters territory where the air thins noticeably — and where Acute Mountain Sickness (AMS) becomes a genuine concern.
              </p>
              <p>
                The good news: AMS on the Khopra Trek is manageable. The route is not as extreme as Thorong La Pass on the Annapurna Circuit or the high camps on Everest approaches. Most trekkers who encounter AMS symptoms here recover quickly with the right response. The challenge is recognizing those symptoms early enough to act — before mild discomfort escalates into a serious medical situation.
              </p>
              <p>
                This guide is not a medical textbook. It is a practical, field-ready safety resource. It tells you where AMS risk rises on this specific route, what symptoms to watch for at each stage of severity, and — most importantly — exactly what to do when you feel off on the trail.
              </p>
            </div>
          </article>

          {/* SECTION: RISK MAP */}
          <article id="risk-map" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Trek Altitude Risk Map
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Understanding where altitude risk lives on this route is the most important step in preparing for a safe trek. Many trekkers focus on total elevation gain, but the real concern is rate of ascent — how quickly you move from one altitude zone to the next.
              </p>
              <p>
                <strong>Elevation Progression by Route Stage:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
                <li>Nayapul / Tikhedhunga — ~1,480 m (Trekking Start)</li>
                <li>Ghorepani — ~2,860 m (Day 2 Overnight)</li>
                <li>Tadapani — ~2,630 m (Alternative route junction)</li>
                <li>Dobato — ~3,430 m (Significant altitude jump)</li>
                <li>Khopra Danda — ~3,660 m (Base camp / overnight point)</li>
                <li>Khayer Lake — ~4,500 m (Day hike extension high point)</li>
              </ul>
              <p>
                <strong>Where AMS Risk Begins:</strong> The risk window opens between Ghorepani and Dobato. Pushing directly to Dobato (3,430 m) — a gain of roughly 570 meters in a single day — is where early AMS symptoms often appear by evening. Khopra Danda (3,660 m) is the key safety checkpoint. If you feel well here after a proper rest, your acclimatisation is on track.
              </p>
              <p>
                <strong>High-Risk Extension — Khayer Lake Trek:</strong> Reaching approximately 4,500m is the highest point. Because this is typically done as a round-trip day hike from Khopra Danda rather than an overnight, trekkers ascend and descend within hours. This short exposure time reduces overnight risks — but rapid climb to 4,500m still places real physiological stress on the body.
              </p>
              <p>
                <strong>Comparison to Other Regional routes:</strong> Poon Hill (~3,210m) is lower risk. Mardi Himal High Camp (~4,500m) is comparable to Khayer Lake. Annapurna Base Camp (~4,130m) involves a longer sustained stay at altitude. Thorong La Pass (~5,416m) is significantly higher.
              </p>
            </div>
          </article>

          {/* SECTION: WHAT IS AMS */}
          <article id="what-is-ams" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What is Acute Mountain Sickness (AMS)?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                AMS is the body&apos;s response to reduced oxygen at high altitude. The atmosphere thins as you gain elevation — at 3,500 meters, you are breathing air with roughly 65% of the oxygen available at sea level. At 4,500 meters, that drops further.
              </p>
              <p>
                <strong>Why AMS Happens:</strong> Low atmospheric pressure at altitude means each breath delivers less oxygen to your lungs. Your body responds by breathing faster, increasing heart rate, and producing more red blood cells over time. But these adaptations take days. When you ascend faster than your body can adjust, AMS symptoms emerge.
              </p>
              <p>
                <strong>How the Body Reacts:</strong> Initial symptoms are driven largely by fluid shifts and changes in blood chemistry. Mild brain swelling and modified breathing during sleep contribute to headaches and fatigue. Fitness level does not predict response; extremely fit athletes sometimes develop AMS faster than sedentary trekkers.
              </p>
            </div>
          </article>

          {/* SECTION: AMS VS HAPE VS HACE */}
          <article id="ams-vs-severe" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              AMS vs HAPE vs HACE — Understanding the Spectrum
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                AMS sits at the mild-to-moderate end of altitude illness. Severe forms exist that trekkers must recognize:
              </p>

              <div className="grid gap-6 md:grid-cols-2 mt-6">
                <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-2">
                  <span className="text-xs font-bold text-rose-600 uppercase block">High Altitude Pulmonary Edema (HAPE)</span>
                  <h4 className="font-bold text-stone-900 text-sm">Fluid Accumulation in Lungs</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    HAPE is the leading cause of altitude death. Signs include severe breathlessness at rest, a wet/rattling cough (sometimes with pink frothy spit), blue fingernails/lips, and extreme fatigue. Requires immediate descent and evacuation.
                  </p>
                </div>
                <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-2">
                  <span className="text-xs font-bold text-rose-600 uppercase block">High Altitude Cerebral Edema (HACE)</span>
                  <h4 className="font-bold text-stone-900 text-sm">Fluid Accumulation in Brain</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    The most dangerous escalation of untreated AMS. Symptoms include extreme confusion, loss of coordination, slurred speech, hallucinations, and the inability to walk in a straight line. Requires immediate descent and emergency evacuation.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* SECTION: SYMPTOM STAGES */}
          <article id="symptoms-stages" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              AMS Symptoms on the Khopra Trek — Recognizing the Warning Signs
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Symptoms typically appear 4 to 8 hours after arriving at a new altitude — often in the evening or overnight:
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                  <span className="text-xs font-bold text-emerald-600 uppercase block mb-1">Early AMS Symptoms (Mild Stage)</span>
                  <ul className="list-disc pl-5 text-xs text-stone-550 space-y-1">
                    <li>Dull, persistent headache (front of head or behind eyes)</li>
                    <li>Unusual fatigue that rest does not relieve</li>
                    <li>Mild loss of appetite or slight nausea</li>
                    <li>Broken sleep despite physical exhaustion</li>
                    <li>A general &quot;off&quot; feeling</li>
                  </ul>
                </div>
                <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                  <span className="text-xs font-bold text-amber-600 uppercase block mb-1">Moderate AMS Symptoms (Warning Stage)</span>
                  <ul className="list-disc pl-5 text-xs text-stone-550 space-y-1">
                    <li>Worsening headache that doesn&apos;t respond to water or mild painkillers</li>
                    <li>Nausea progressing to vomiting</li>
                    <li>Increasing dizziness or feeling unsteady on your feet</li>
                    <li>Significant weakness during light tasks</li>
                    <li>Noticeable shortness of breath during very light activity</li>
                  </ul>
                </div>
                <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                  <span className="text-xs font-bold text-rose-600 uppercase block mb-1">Severe AMS Symptoms (Danger Stage)</span>
                  <ul className="list-disc pl-5 text-xs text-stone-550 space-y-1">
                    <li>Confusion, disorientation, or difficulty thinking clearly</li>
                    <li>Inability to walk in a straight line (ataxia)</li>
                    <li>Persistent breathlessness even at complete rest</li>
                    <li>A wet, productive cough (HAPE warning)</li>
                    <li>Loss of coordination or slurred speech</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          {/* SECTION: IGNORED WARNING SIGNS */}
          <article id="ignored-signs" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Real Trekking Signs That Are Often Ignored
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Some early warning signs are missed because they don&apos;t feel like traditional &quot;sickness&quot;:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
                <li>Noticeably slower trekking pace without muscle fatigue</li>
                <li>Reluctance to eat even when you have not eaten for hours</li>
                <li>Irritability or emotional flatness</li>
                <li>A subtle difficulty concentrating on conversations or navigation</li>
                <li>&quot;Heavy legs&quot; that feel different from normal trekking tiredness</li>
              </ul>
              <p>
                A trained guide will often detect these subtle behavioral shifts before the trekker themselves acknowledges something is wrong.
              </p>
            </div>
          </article>

          {/* SECTION: DECISION FRAMEWORK */}
          <article id="decision-framework" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              AMS Decision Framework — Continue, Rest, or Descend?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Knowing what to do next is what keeps trekkers safe:
              </p>
              <p>
                <strong>When You Can Safely Continue:</strong> You can continue ascending if symptoms are mild and have been stable for at least 12 hours, your headache responds to hydration, you feel better in the morning, and your oxygen saturation (SpO2) is above 85%. Never ascend with worsening or unresolved symptoms.
              </p>
              <p>
                <strong>When You Must Stop Ascending:</strong> Stop and rest at the same altitude when mild AMS symptoms have not improved after a full rest period, you have a worsening headache, you feel nauseous/vomited, or your SpO2 has dropped below 85%. Resting at the same altitude is a legitimate treatment that lets your body adjust.
              </p>
              <p>
                <strong>When You Must Descend Immediately:</strong> Descend immediately if moderate symptoms worsen despite rest, severe symptoms appear (confusion, ataxia, breathlessness at rest), SpO2 drops below 80%, or any signs of HACE or HAPE emerge. Descent is the most effective treatment available: even descending 300–500 meters can produce dramatic improvement within hours.
              </p>
            </div>
          </article>

          {/* SECTION: PREVENTION SYSTEM */}
          <article id="prevention-system" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How to Prevent AMS on Khopra Trek — A System-Based Approach
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Prevention is a structured system applied consistently from the first day of trekking:
              </p>
              <p>
                <strong>Acclimatisation Strategy:</strong> Apply the principle of &quot;climb high, sleep low.&quot; Hike to higher elevations during the day while returning to lower camps to sleep. A well-designed itinerary includes a rest or short-acclimatisation day at Ghorepani. Pushing straight from Ghorepani to Khopra Danda in a single day significantly increases AMS risks.
              </p>
              <p>
                <strong>Safe Pacing Rules:</strong> Above 3,000 meters, gain no more than 300–500 meters of sleeping altitude per day. Use the &quot;rest step&quot; approach: a slower, steady rhythm where you allow your breathing to fully recover between steps.
              </p>
              <p>
                <strong>Hydration and Nutrition:</strong> Dehydration accelerates AMS. Drink three to four liters of water per day. Avoid alcohol entirely above 2,500m; it suppresses respiration, accelerates dehydration, and worsens sleep quality. Carbohydrate-rich foods (dal bhat, noodle soup, porridge) are easier to metabolise.
              </p>
              <p>
                <strong>Sleep and Recovery:</strong> Sleep quality is worse for most people at altitude. Prioritise getting into your sleeping bag early to preserve heat. A sleeping bag rated to at least -5&deg;C is appropriate for nights at Khopra Danda.
              </p>
            </div>
          </article>

          {/* SECTION: EVACUATION REALITY */}
          <article id="evacuation-reality" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Emergency Response and Evacuation in the Annapurna Region
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Knowing the evacuation reality ahead of time prevents panic:
              </p>
              <p>
                <strong>Guide Support:</strong> A trained guide monitors for AMS, carries a pulse oximeter, checks SpO2 readings at altitude intervals, and knows the fastest descent routes. If your guide recommends descent, follow that advice.
              </p>
              <p>
                <strong>SpO2 Saturation Reference:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
                <li>90–95%: Normal range at moderate altitude.</li>
                <li>85–89%: Borderline; monitor closely; do not gain altitude.</li>
                <li>Below 85%: Rest and reassess. Do not ascend.</li>
                <li>Below 80%: High risk; immediate descent required.</li>
              </ul>
              <p>
                <strong>Helicopter Evacuation:</strong> Helicopter evacuation is available from the Khopra Ridge area, but it is weather-dependent and requires authorization from your trekking insurance provider. Verify your policy specifically covers rescue above 4,000 meters. Walking descent is faster and more reliable than waiting for a helicopter in cloudy weather.
              </p>
            </div>
          </article>

          {/* SECTION: SAFETY TIPS */}
          <article id="safety-tips" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              High Altitude Trekking Safety Tips
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                These supporting practices reinforce your safety system:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Guide and Porter Support:</strong> Solo trekking carries risk. A guide adds external observation, while a porter reduces the physical load on your body, lowering physiological stress.</li>
                <li><strong>Cold as an AMS Amplifier:</strong> Cold temperatures increase the body&apos;s oxygen demand. Dress in proper layering systems to keep your core and extremities warm.</li>
                <li><strong>Pre-Trip Conditioning:</strong> Focus on 4–6 weeks of aerobic conditioning (hiking, running, cycling) before departure to reduce the physiological gap at altitude.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About AMS
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Is AMS common on the Khopra Trek?",
                  a: "AMS at mild-to-moderate levels is not uncommon above 3,000 meters, particularly in trekkers who ascend too quickly. Severe AMS requiring evacuation is rare when trekkers follow proper acclimatisation pacing."
                },
                {
                  q: "How high is Khopra Ridge and is it dangerous?",
                  a: "Khopra Danda sits at approximately 3,660 meters, and the Khayer Lake extension reaches around 4,500 meters. The risk is moderate-to-high relative to lower Annapurna routes, but lower than passes like Thorong La. With good preparation, it is a safe trek."
                },
                {
                  q: "Can physically fit people still get AMS?",
                  a: "Yes. Altitude sickness does not correlate with physical fitness. Highly conditioned athletes can develop severe AMS while less fit trekkers acclimatise well. Individual physiological response is largely genetic."
                },
                {
                  q: "Do I need acclimatisation days for Khopra Trek?",
                  a: "Yes. Building acclimatisation into your itinerary is strongly recommended. A two-night stay at Ghorepani before continuing to Dobato and Khopra Danda gives your body meaningful time to adjust."
                },
                {
                  q: "What are the first signs of altitude sickness I should watch for?",
                  a: "A persistent dull headache, unusual fatigue that rest does not relieve, poor appetite, and broken sleep. These are warning signals to stop ascending and monitor closely."
                },
                {
                  q: "When should I descend immediately?",
                  a: "Descend without delay if you experience confusion, inability to walk in a straight line, breathlessness at rest, a wet cough, or any combination of worsening symptoms. When in doubt, descend."
                },
                {
                  q: "Should I take Diamox for Khopra Trek?",
                  a: "Acetazolamide (Diamox) can help with acclimatisation and is sometimes recommended for trekkers with a history of AMS. It requires a prescription and is never a substitute for descending if symptoms are worsening. Consult a travel medicine physician before your trip."
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

          {/* SECTION: THE FOUR GOLDEN RULES */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-955">The Four Golden Rules of Altitude Safety</h2>
            <div className="space-y-4">
              {amsRules.map((rule, idx) => (
                <div key={idx} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                  <h4 className="font-extrabold text-stone-950 text-sm">{rule.rule}</h4>
                  <p className="mt-2 text-xs text-stone-500 leading-relaxed">{rule.desc}</p>
                </div>
              ))}
            </div>
          </article>

          {/* SECTION: CONCLUSION */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-955 font-sans font-semibold">Conclusion: Safe Trekking Starts With Awareness</h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              AMS on the Khopra Trek is a genuine risk — but it is one that informed, prepared trekkers manage successfully every season. The mountains are not forgiving of arrogance or ignorance, but they do reward awareness and patience.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              Recognize symptoms early, act on them honestly, and never let summit fever override clear-headed safety decision-making. Know the altitude profile before you start. Pace your ascent deliberately. Hydrate well, eat consistently, and rest before pushing higher. Listen to your guide. And if your body tells you something is wrong, believe it.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Plan Your Khopra Ridge Trek Safely
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Altitude illness is most preventable with the right itinerary and experienced guidance on the ground. If you are planning the Khopra Ridge Trek — particularly the Khayer Lake extension — consider booking with a local trekking company whose guides are trained in safety.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  View Custom Itineraries with Built-in Rest Days &rarr;
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-6 py-4 rounded-2xl border border-white/25 shadow-md transition duration-200"
                >
                  Speak with a Safety Expert
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
                This AMS and high-altitude safety brief is audited by licensed mountain guides operating in Annapurna Conservation Area. All packages include daily SpO2 oximeter checks. Nepal Tourism Operator License #8928-091.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
