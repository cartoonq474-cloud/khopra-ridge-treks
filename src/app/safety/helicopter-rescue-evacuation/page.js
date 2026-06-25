import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Helicopter Rescue & Safety Protocols for Trekking Emergencies",
  description: "Get the facts on helicopter rescue, safety protocols, and insurance requirements during trekking emergencies on the Khopra Ridge Trek and in the Annapurna region.",
};

export default function Page() {
  const summarySpecs = [
    { label: "Response Time", value: "30 to 45 Mins" },
    { label: "Launch Base", value: "Pokhara Airport" },
    { label: "Required Coverage", value: "Up to 5,000m" },
    { label: "Communications", value: "Satellite/Radio" }
  ];

  const faqItems = [
    {
      q: "How does helicopter rescue work during trekking emergencies?",
      a: "A guide assesses the emergency and begins basic first aid, then contacts the support office by satellite phone or radio with the patient's condition, location, and the current weather. The office verifies insurance coverage and contacts a helicopter operator in Pokhara, who dispatches a flight once authorization and weather conditions allow."
    },
    {
      q: "How long does helicopter evacuation usually take?",
      a: "From the initial call to landing on the trail, the process typically takes around forty-five minutes to an hour in good weather, including coordination time and flight time from Pokhara. Poor weather conditions can extend this significantly."
    },
    {
      q: "Is helicopter rescue covered by travel insurance?",
      a: "Only if the policy specifically includes high-altitude trekking coverage and emergency medical evacuation. Many standard travel policies exclude trekking above certain altitudes, so this needs to be confirmed before departure, not after an emergency occurs."
    },
    {
      q: "Can helicopters rescue trekkers above 4,000 meters?",
      a: "Yes, helicopters regularly operate above 4,000 meters in the Annapurna region, though performance limits mean less weight can be carried at higher elevations, and a wider range of weather conditions can restrict flights at these altitudes."
    },
    {
      q: "What weather conditions can delay helicopter rescue?",
      a: "Heavy cloud cover, low visibility, strong or unpredictable winds, and active storms are the most common reasons a flight is delayed. Night flying in mountain terrain is generally avoided regardless of urgency."
    },
    {
      q: "What medical emergencies require evacuation?",
      a: "Acute Mountain Sickness that fails to improve with descent, HAPE, HACE, serious falls or fractures, head injuries, and any rapid deterioration in a trekker's condition are the most common triggers for evacuation."
    },
    {
      q: "Is helicopter rescue safe in mountain regions?",
      a: "It's safe when standard protocols are followed, including pre-flight inspections, weather assessment, and proper landing zone preparation. These steps exist specifically because mountain flying carries real risks that careful procedure is designed to manage."
    },
    {
      q: "Which hospitals receive evacuated trekkers?",
      a: "Most cases go first to private hospitals in Pokhara that specialize in high-altitude medicine and trauma care, with more serious cases transferred onward to specialist facilities in Kathmandu."
    },
    {
      q: "What happens if rescue cannot fly because of bad weather?",
      a: "The ground team continues stabilizing the patient and, where possible, moves them toward a lower-altitude or more accessible point while waiting for conditions to improve enough for a safe flight."
    },
    {
      q: "Do all trekking companies provide emergency evacuation support?",
      a: "Not to the same standard. Licensing, guide training, communication equipment, and established relationships with helicopter operators vary significantly between companies, which is worth asking about directly before booking any high-altitude trek."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">Helicopter Rescue &amp; Safety
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">Helicopter Rescue &amp; Safety Protocols
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">Trekking safely in the Annapurna region. Understand the emergency triggers, flight dispatch timelines, landing protocols, and high-altitude insurance requirements before you set foot on the trail.
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
                1. Overview &amp; Criticality
              </a>
              <a href="#altitude-medical" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                2. Medical Emergencies
              </a>
              <a href="#trail-injuries" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                3. Trail Injuries
              </a>
              <a href="#environmental" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                4. Environmental Alerts
              </a>
              <a href="#trigger-situations" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                5. Evacuation Triggers
              </a>
              <a href="#evacuation-procedures" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                6. Step-by-Step Procedure
              </a>
              <a href="#weather-assessment" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                7. Weather Risks
              </a>
              <a href="#landing-zones" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                8. Landing Zone Safety
              </a>
              <a href="#loading-boarding" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                9. Safe Boarding Protocols
              </a>
              <a href="#pilot-safety" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                10. Pilot Standards
              </a>
              <a href="#insurance-reqs" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                11. Insurance Guide
              </a>
              <a href="#hospital-transfer" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                12. Staging &amp; Hospital Care
              </a>
              <a href="#our-safety-network" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                13. Our Safety Network
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
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">Helicopter Rescue &amp; Safety Protocols for Trekking Emergencies
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>Trekking through the Annapurna foothills rewards you with some of the most dramatic mountain scenery in Nepal, but altitude, terrain, and weather can turn a routine day into a medical emergency within hours. Acute mountain sickness, a bad fall on a scree slope, or a sudden whiteout can leave a trekker stranded a full day's walk from the nearest road. This is exactly why helicopter rescue and safety protocols matter, not as an abstract line in an insurance policy, but as the actual chain of people, equipment, and decisions that gets an injured trekker off the mountain and into proper medical care.
              </p>
              <p>This guide walks through how helicopter rescue operations actually unfold on a trek like <Link href="/planning/khopra-trek-route-overview" className="text-emerald-700 font-bold hover:underline">Khopra Ridge</Link>, from the moment a guide first recognizes a problem on the trail to the moment a patient is handed over to a hospital team in Pokhara or Kathmandu. We cover the medical and weather triggers for evacuation, how pilots and ground crews communicate, what happens at the landing zone, and the insurance coverage you genuinely need before setting foot on the trail. If you're planning a high-altitude trek, this is the information that should shape how you prepare for it.
              </p>
              <p>Remote mountain trails don't have ambulances, urgent care clinics, or paved access roads. Once you're a day or two into a route like Khopra Ridge, <Link href="/planning/khopra-trek-via-mohare-danda" className="text-emerald-700 font-bold hover:underline">Mohare Danda</Link>, or the trail to <Link href="/guides/khayer-lake-ultimate-guide" className="text-emerald-700 font-bold hover:underline">Khayer Lake</Link>, the nearest hospital capable of treating a serious medical event is usually reachable only by air. That single fact shapes almost every safety decision a trekking team makes, long before anyone actually needs help.
              </p>
            </div>
          </article>

          {/* SECTION 2: ALTITUDE MEDICAL */}
          <article id="altitude-medical" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">Medical Emergencies That Can Occur at High Altitude
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>Altitude-related illness is the most common reason trekkers need emergency evacuation in the Annapurna region. <Link href="/altitude/ams-on-khopra-trek" className="text-emerald-700 font-bold hover:underline">Acute Mountain Sickness (AMS)</Link>can develop within hours of gaining elevation too quickly, starting as a headache and nausea but sometimes progressing into something far more dangerous.
              </p>
              <p>High Altitude Pulmonary Edema (HAPE) causes fluid to build up in the lungs, making breathing difficult even at rest, while High Altitude Cerebral Edema (HACE) affects brain function and can lead to confusion, loss of coordination, and unconsciousness if not treated quickly.
              </p>
              <p>Severe dehydration and hypothermia are also common at elevation, especially when trekkers underestimate how quickly temperatures drop after sunset. Respiratory distress, whether from altitude, infection, or pre-existing conditions, is another frequent trigger for evacuation, particularly on multi-day routes where oxygen levels stay reduced for days at a time.
              </p>
            </div>
          </article>

          {/* SECTION 3: TRAIL INJURIES */}
          <article id="trail-injuries" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">Trail Injuries That Require Immediate Evacuation
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>Not every emergency is medical in the illness sense. Steep, uneven terrain on stone steps and exposed ridgelines makes falls one of the most common reasons for evacuation requests. Broken bones, severe ankle sprains that prevent walking, and falls on scree or icy sections can immediately end a trekker's ability to continue on foot.
              </p>
              <p>More serious incidents, including head injuries, loss of consciousness, or suspected internal injuries, are treated as time-critical. In these cases, a guide will not wait to see if symptoms improve. The decision to request evacuation is made immediately, because delay at altitude can turn a manageable injury into a life-threatening one.
              </p>
            </div>
          </article>

          {/* SECTION 4: ENVIRONMENTAL */}
          <article id="environmental" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">Environmental and Natural Emergencies
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>Sometimes the trigger for evacuation has nothing to do with an individual trekker's health. <Link href="/safety/landslide-risks" className="text-emerald-700 font-bold hover:underline">Landslides</Link>, sudden snowstorms, and trail blockages can strand a group well past their planned arrival point, particularly during the shoulder seasons when weather shifts quickly. Falling rock on narrow sections, especially after rain, is a recognized hazard on several stretches of trail in this region.
              </p>
              <p>When natural hazards block forward or backward movement and a group cannot safely reach the next teahouse or village, helicopter support may be needed for the entire group, not just an injured individual. This is rare, but it's part of why local <Link href="/safety/weather-hazards" className="text-emerald-700 font-bold hover:underline">weather monitoring</Link>and communication systems matter just as much as medical readiness.
              </p>
            </div>
          </article>

          {/* SECTION 5: EVACUATION TRIGGERS */}
          <article id="trigger-situations" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">Situations That Trigger Emergency Helicopter Rescue Operations
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <h3 className="text-lg font-bold text-stone-900">When Guides Determine Immediate Evacuation Is Necessary</h3>
              <p>A guide's assessment usually starts with basic questions: how quickly did the symptoms appear, is the trekker able to walk unassisted, and is their condition improving or worsening with rest. Failed acclimatization, dropping oxygen saturation readings, loss of mobility, and any sign of confusion or disorientation are all considered immediate red flags.
              </p>
              <p>If a trekker's condition deteriorates rapidly, or if basic interventions like oxygen and descent don't produce improvement within a reasonable window, the guide moves directly into the evacuation process rather than waiting and reassessing later.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Decision Criteria Used Before Requesting Rescue</h3>
              <p>Beyond the medical picture, guides weigh several practical factors before formally requesting a helicopter. These include:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-stone-500">
                <li><strong>Medical urgency:</strong>How quickly the condition is likely to worsen if evacuation is delayed.</li>
                <li><strong>Terrain accessibility:</strong>Whether the patient can be walked or carried to a more accessible point, or whether a landing zone is needed exactly where they are.</li>
                <li><strong>Risk of waiting:</strong>Whether attempting to descend on foot is safer or more dangerous than waiting for air support.</li>
                <li><strong>Weather conditions:</strong>Whether flying is currently possible, or whether the team needs to manage the situation on the ground until conditions improve.</li>
                <li><strong>Distance from the nearest health post:</strong>Whether a shorter walk to a lower-altitude clinic could resolve the issue without a helicopter.</li>
              </ul>
              <p>This isn't a rigid checklist applied mechanically. It's a judgment call made by an experienced guide who is trained to weigh urgency against the practical realities of mountain terrain.
              </p>
            </div>
          </article>

          {/* SECTION 6: STEP-BY-STEP PROCEDURE */}
          <article id="evacuation-procedures" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">Step-by-Step Helicopter Evacuation Procedures
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <h3 className="text-lg font-bold text-stone-900">Emergency Assessment and Initial Stabilization</h3>
              <p>Before any call for rescue goes out, the guide performs a basic medical assessment and begins immediate first aid. This might include administering supplemental oxygen, treating visible wounds, monitoring vital signs, and keeping the patient warm and as comfortable as possible. The goal at this stage is simple: stabilize the patient enough that their condition doesn't worsen significantly while waiting for the helicopter to arrive.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Communication Protocols Used to Request Rescue</h3>
              <p>With the patient stabilized, the guide initiates contact with the support office, typically using a satellite phone or two-way radio, since cellular coverage disappears quickly once you're off the main valley routes. This call includes the patient's condition, exact GPS coordinates, current weather at the location, and any terrain hazards near the proposed landing point.
              </p>
              <p>The office then relays this information to the helicopter operator and begins the insurance verification process in parallel, so that authorization and dispatch aren't held up later by paperwork.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Rescue Authorization and Helicopter Dispatch</h3>
              <p>Authorization depends on confirming that the trekker's travel insurance covers helicopter evacuation, since operators generally require a guarantee of payment before launching a flight. Once that's confirmed, the helicopter is dispatched, typically from Pokhara Airport for treks in the Annapurna region.
              </p>

              <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-4">
                <h4 className="text-base font-extrabold text-stone-900">Timeline of a Typical Dispatch Protocol:</h4>
                <ol className="space-y-3 pl-4 border-l-2 border-emerald-500 text-xs">
                  <li className="relative pl-2">
                    <strong className="text-stone-900">1. Incident occurs:</strong>The guide begins immediate assessment and first aid protocols.
                  </li>
                  <li className="relative pl-2">
                    <strong className="text-stone-900">2. Office Contact (Within Minutes):</strong>Guide contacts the local office using a satellite phone or radio.
                  </li>
                  <li className="relative pl-2">
                    <strong className="text-stone-900">3. Insurance &amp; Operator Coordination (10 - 15 Mins):</strong>Office verifies the insurance policy and contacts helicopter operators.
                  </li>
                  <li className="relative pl-2">
                    <strong className="text-stone-900">4. Helicopter Dispatch:</strong>Once guarantee of payment is established, flight launches from Pokhara Airport.
                  </li>
                  <li className="relative pl-2">
                    <strong className="text-stone-900">5. Flight Arrival (30 - 45 Mins):</strong>Aircraft reaches the trail landing point (highly dependent on weather).
                  </li>
                </ol>
              </div>
            </div>
          </article>

          {/* SECTION 7: WEATHER RISKS */}
          <article id="weather-assessment" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">Weather Risk Assessment Before Helicopter Deployment
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>Helicopter rescue in mountain terrain is just as dependent on weather as it is on medical urgency. A pilot's decision to fly is never based on emergency severity alone.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Weather Conditions Pilots Must Evaluate</h3>
              <p>Before committing to a flight, pilots assess cloud cover and ceiling height, visibility range along the intended route, wind speed and direction near the landing site, and any signs of approaching storms or rainfall. Mountain weather changes quickly, so conditions are checked again immediately before takeoff, not just at the time the rescue request comes in.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Terrain and Altitude Safety Assessment</h3>
              <p>High-altitude flying introduces its own set of constraints. Helicopters lose performance capacity as elevation increases, which limits how much weight they can safely carry and how steep an approach they can manage. Narrow valley approaches, unpredictable wind patterns around ridgelines, and limited visibility at exact landing surfaces all factor into whether a specific site is considered safe to attempt.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Situations When Rescue Flights May Be Delayed</h3>
              <p>There are conditions under which even a critical rescue request cannot be flown immediately. Severe storms, heavy fog, dangerous crosswinds, and landing zones with poor visibility are the most common reasons for delay. Night flying in mountain terrain is generally avoided altogether due to the added risk of navigating unfamiliar, unlit terrain.
              </p>
              <p>When a flight is delayed, the ground team's job shifts toward continued stabilization and, where possible, moving the patient toward a more accessible or lower-altitude point while waiting for conditions to improve. This is an uncomfortable reality of mountain rescue, but it's one that responsible operators are upfront about.
              </p>
            </div>
          </article>

          {/* SECTION 8: LANDING ZONE SAFETY */}
          <article id="landing-zones" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">Landing Zone Safety Protocols on Mountain Terrain
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>Most trekking trails don't have a built helipad. Landing zones are selected and prepared on the spot, which makes this one of the more technical parts of the entire rescue process.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Selecting a Safe Landing Zone</h3>
              <p>A usable landing zone needs a reasonably flat, stable surface with enough clear space around it, ideally well away from cliff edges, loose rock, and steep drop-offs. Pilots and ground teams look for terraced fields, wide sections of trail, or open ground near a village whenever possible, since these tend to offer the most predictable surface conditions.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Clearing the Touchdown Zone Before Arrival</h3>
              <p>Before the helicopter arrives, the guide and any other trekkers present clear loose debris, secure backpacks and loose equipment, and move well back from the intended touchdown point. Rotor wash from a helicopter can throw light objects and dust with surprising force, so anything not secured becomes a hazard the moment the aircraft gets close.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Ground Team Coordination During Landing</h3>
              <p>As the helicopter approaches, the guide communicates with the pilot, either by radio or through clear visual signals, to confirm wind direction and any last-minute hazards. Maintaining a clear perimeter and keeping bystanders at a safe distance is treated as a priority during this phase, since the highest-risk moments of any rescue tend to occur during the actual approach and touchdown.
              </p>
            </div>
          </article>

          {/* SECTION 9: LOADING BOARDING */}
          <article id="loading-boarding" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">Safe Boarding and Stretcher Loading Procedures
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <h3 className="text-lg font-bold text-stone-900">Passenger Boarding Safety Procedures</h3>
              <p>Trekkers and crew approach the aircraft only after receiving a clear signal from the pilot or crew member, never before. Approaching from the side, staying low, and avoiding the rear rotor area entirely are standard practice, since the tail rotor is far less visible and considerably more dangerous than the main rotor blades.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Emergency Patient Loading Procedures</h3>
              <p>For an injured trekker, the stretcher is prepared and the patient stabilized as much as possible before any attempt is made to move them toward the aircraft. Crew members guide the stretcher into the cabin carefully, securing the patient's position before the doors close. This sequence is followed even under time pressure, because a poorly secured patient during a short flight creates unnecessary additional risk.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Safety Risks Around Rotorcraft</h3>
              <p>A few hazards come up consistently around helicopters on uneven terrain: loose clothing or scarves catching in moving parts, unsecured backpacks shifting in rotor wash, and bystanders underestimating how far the rotor disc actually extends. Guides brief everyone present, even those not being evacuated, on staying clear of these zones before the helicopter lands.
              </p>
            </div>
          </article>

          {/* SECTION 10: PILOT SAFETY */}
          <article id="pilot-safety" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">Pilot Safety Protocols and Pre-Flight Safety Inspection
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>Behind every rescue flight is a set of aviation safety standards that apply regardless of how urgent the situation on the ground feels.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Pre-Flight Safety Inspection Checklist</h3>
              <p>Before any flight, including emergency rescue flights, pilots and ground crew run through a standard inspection that typically includes:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-stone-500">
                <li>Rotor blade and tail rotor condition check</li>
                <li>Fuel system and fuel quantity verification</li>
                <li>Engine performance and instrument readings</li>
                <li>Hydraulic and mechanical system checks</li>
                <li>Confirmation of emergency and backup systems on board</li>
              </ul>
              <p>Skipping this sequence isn't an option, even when a patient's condition is serious, because a mechanical failure mid-flight would turn one emergency into two.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Load Management and Aircraft Balance</h3>
              <p>Helicopters have strict weight and balance limits that become even more restrictive at higher altitudes, where thinner air reduces lift capacity. Pilots calculate fuel load, passenger weight, and any equipment being carried to make sure the aircraft stays within safe operating limits for the specific altitude and terrain of the rescue site.
              </p>
              <h3 className="text-lg font-bold text-stone-900">In-Flight Safety Procedures</h3>
              <p>During the flight itself, the crew monitors the patient's condition, maintains communication with both the pilot and the receiving hospital, and stays prepared to divert or adjust the route if weather conditions change unexpectedly. Pilots continuously reassess the safest route back, rather than committing to a single fixed flight path regardless of conditions.
              </p>
            </div>
          </article>

          {/* SECTION 11: INSURANCE REQS */}
          <article id="insurance-reqs" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">Travel Insurance Requirements for Emergency Medical Evacuation
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>None of the procedures above matter much if a trekker doesn't have the right insurance coverage in place before the trip begins. This is one of the most overlooked parts of trip preparation, and one of the most consequential.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Required High-Altitude Insurance Coverage</h3>
              <p>A standard travel insurance policy frequently excludes high-altitude activity, which means a policy that looks comprehensive on paper may not actually cover a helicopter evacuation from above 4,000 or 5,000 meters. Trekkers need a policy that explicitly states coverage for trekking up to the maximum altitude on their specific route, along with emergency medical evacuation and hospital treatment costs. Review our detailed <Link href="/safety/travel-insurance-nepal-trek" className="text-emerald-700 font-bold hover:underline">Travel Insurance Checklist</Link>for additional details.
              </p>
              <p>We require a printed copy of this policy, along with an emergency contact number, before departure from Kathmandu. This isn't a formality. It's the document that allows us to guarantee payment to a helicopter operator immediately, rather than losing critical time confirming coverage after an emergency has already begun.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Insurance Verification Before Rescue Operations</h3>
              <p>When a rescue request goes out, our office contacts the insurance provider in parallel with contacting the helicopter operator. Confirming the policy number, coverage limits, and emergency authorization process ahead of time means this step takes minutes rather than hours during an actual emergency.
              </p>
              <p>If you're booking a high-altitude trek with any operator, confirming that your insurance specifically covers helicopter evacuation at your trek's maximum altitude should be one of the first things you check, well before you start packing.
              </p>
            </div>
          </article>

          {/* SECTION 12: HOSPITAL TRANSFER */}
          <article id="hospital-transfer" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">Hospital Transfer and Medical Care After Evacuation
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>Getting a patient off the mountain is only half the process. What happens after landing determines the actual medical outcome.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Hospital Transfer to Pokhara Medical Facilities</h3>
              <p>Most evacuations from the Annapurna region land first in Pokhara, where private hospitals experienced in high-altitude medicine and trauma care provide initial assessment, stabilization, and treatment. For many conditions, including moderate AMS or straightforward injuries, this is the only stop needed before recovery.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Critical Care Transfer to Kathmandu Hospitals</h3>
              <p>More serious cases, particularly those involving HAPE, HACE, or significant trauma, are transferred onward to specialist facilities in Kathmandu, where intensive care units and broader specialist coverage are available. This second transfer happens quickly when needed, coordinated directly between the receiving hospital teams.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Medical Coordination With Insurance Providers</h3>
              <p>Throughout hospital admission and treatment, our office stays in contact with the trekker's insurance provider to manage paperwork, confirm coverage for ongoing treatment, and communicate with family members back home. The goal is to keep the trekker and their family focused on recovery rather than navigating unfamiliar hospital administration.
              </p>
            </div>
          </article>

          {/* SECTION 13: OUR SAFETY NETWORK */}
          <article id="our-safety-network" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">Our Emergency Safety Network and Trekking Safety Standards
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>A helicopter rescue system is only as good as the people and equipment supporting it on the ground, long before any emergency occurs.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Licensed and Certified Trekking Guides</h3>
              <p>Our guides are licensed and trained specifically for high-altitude emergency response, including first-aid certification and direct experience coordinating rescue operations. We operate under licensing from TAAN and the Nepal Tourism Board, which sets baseline standards for guide training and operational safety across the industry.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Communication and Monitoring Equipment We Carry</h3>
              <p>Every trekking group carries satellite communication equipment, two-way radios, emergency oxygen, and a basic first-aid kit suited to high-altitude conditions. GPS tracking allows the office to know a group's exact location at all times, which removes guesswork from any rescue request.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Our Rescue Coordination System</h3>
              <p>We maintain working relationships with helicopter operators based in Pokhara, along with access to real-time weather monitoring from meteorological stations within the Annapurna Conservation Area. This combination of local partnerships, equipment, and monitoring is what allows a rescue request to move from phone call to flight dispatch in minutes rather than hours.
              </p>
            </div>
          </article>

          {/* SECTION 14: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">Frequently Asked Questions About Helicopter Rescue
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
            <p className="text-stone-600 leading-relaxed text-sm">Mountain trekking always carries some level of risk, and no amount of preparation removes that entirely. What a professional rescue system does is shrink the time between an emergency occurring and a trekker receiving proper medical care, while keeping everyone involved, from the patient to the pilot to the ground crew, as safe as possible throughout that process.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">Before joining any high-altitude trek, confirm that your travel insurance explicitly covers helicopter evacuation at your route's maximum altitude, and ask your trekking operator directly how their emergency communication and rescue coordination actually works. The answers to those two questions will tell you more about your real safety on the trail than almost anything else in the planning process.
            </p>
          </article>

          {/* CTA SECTION */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Trek Safely With Local Experts</h3>
              <p className="text-stone-300 text-sm leading-relaxed">If you're preparing for a trek in the Annapurna region and want to understand exactly how our emergency rescue and safety systems work before you book, get in touch with our team. We're happy to walk you through our insurance requirements, communication equipment, and rescue partnerships in detail.
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
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Tour:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/planning/khopra-trek-permits" className="hover:text-emerald-400 flex items-center gap-1.5 transition">Check trekking permit requirements (ACAP &amp; TIMS)
                  </Link>
                  <Link href="/planning/pokhara-to-ghandruk" className="hover:text-emerald-400 flex items-center gap-1.5 transition">View Pokhara to Ghandruk Transportation Guide
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
              <h4 className="font-bold text-stone-900 text-sm font-sans">Reviewed by Safety Teams</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">Inquire About Safety and Book With Confidence — our local team is fully registered, licensed by TAAN and NTB, and carries comprehensive safety equipment on all mountain departures.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
