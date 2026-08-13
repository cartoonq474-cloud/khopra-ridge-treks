import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/safety/travel-insurance-nepal-trek",
  },
  title: "Travel Insurance for Trekking in Nepal",
  description: "Planning a trek in Nepal? Learn exactly what travel insurance you need — from helicopter rescue coverage to altitude limits, policy exclusions, and how to.",
};

export default function Page() {
  const insuranceClauses = [
    {
      clause: "1. Altitude Limit: Up to 5,000 Meters",
      desc: "Standard policies cap coverage at 3,000m. Because the Khopra Trek goes to Khayer Lake (4,660m), you must ensure your policy specifically covers trekking up to 5,000m."
    },
    {
      clause: "2. Emergency Helicopter Evacuation",
      desc: "If you suffer from severe AMS, HAPE, or a broken ankle, helicopter rescue is the only way out. Verify that your policy includes immediate hospital-to-pilot payment guarantees."
    },
    {
      clause: "3. Adventure Sports Rider",
      desc: "Make sure 'hiking' or 'trekking' is not classified as an excluded extreme sport. Check the fine print for definitions of guided versus unguided trekking."
    },
    {
      clause: "4. Medical Fees and Hospitalization",
      desc: "Covers medical costs at specialized travel clinics (such as the CIWEC Clinic in Kathmandu or Pokhara) and ambulance transfers."
    }
  ];

  const providerComparison = [
    {
      provider: "World Nomads Explorer",
      altitude: "6,000m",
      helicopter: "Included",
      medical: "$100,000+",
      sports: "Included",
      emergency: "Yes",
      direct: "Yes"
    },
    {
      provider: "SafetyWing Nomad",
      altitude: "Verify directly",
      helicopter: "Included",
      medical: "$250,000",
      sports: "Verify",
      emergency: "Yes",
      direct: "Verify"
    },
    {
      provider: "Allianz Adventure",
      altitude: "Varies by plan",
      helicopter: "Included",
      medical: "$50,000–$500,000",
      sports: "Rider required",
      emergency: "Yes",
      direct: "Verify"
    },
    {
      provider: "IMG iTrekking",
      altitude: "6,000m+",
      helicopter: "Included",
      medical: "$500,000",
      sports: "Included",
      emergency: "Yes",
      direct: "Yes"
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
            <span className="text-emerald-400">Travel Insurance</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Travel Planning &amp; Rescue Coordination
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Travel Insurance for Trekking in Nepal
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Learn exactly what travel insurance you need — from helicopter rescue coverage to altitude limits, policy exclusions, and how to avoid denied claims in the Himalayas.
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
              <a href="#is-required" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Is Insurance Required?
              </a>
              <a href="#why-essential" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why It Matters
              </a>
              <a href="#what-must-cover" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Required Coverage Clauses
              </a>
              <a href="#medical-emergencies" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Common Medical Emergencies
              </a>
              <a href="#rescue-logistics" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                How Helicopter Rescue Works
              </a>
              <a href="#denial-reasons" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why Claims Get Denied
              </a>
              <a href="#providers-comparison" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Providers Side-by-Side
              </a>
              <a href="#documents-to-carry" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Documents to Carry
              </a>
              <a href="#pre-trek-checklist" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Insurance Checklist
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
                Inquire Safety Protocols
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Travel Insurance for Trekking in Nepal: Complete Guide for Safe Himalayan Adventures
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Most people who come to Nepal to trek are prepared for the physical challenge. They train, they pack carefully, and they research their route. But one thing many trekkers overlook until it&apos;s too late is whether their travel insurance actually covers them when something goes wrong in the mountains.
              </p>
              <p>
                And things do go wrong.
              </p>
              <p>
                A twisted ankle on a steep descent above Tadapani. A sudden case of severe altitude sickness on the way up to Khayer Lake. A storm that grounds all ground transport and leaves the only option being a helicopter evacuation from a remote ridge. These are not rare scenarios — they are routine realities of trekking in the Himalayas.
              </p>
              <p>
                What separates a manageable emergency from a financially devastating one is almost always the insurance policy sitting in your bag — or the absence of one.
              </p>
              <p>
                Travel insurance for trekking in Nepal is not the same as standard travel insurance. The altitude is higher, the terrain is more remote, the medical facilities are fewer, and the cost of emergency evacuation can run into thousands of dollars. Choosing the wrong policy — or skipping insurance altogether — is one of the most expensive mistakes a trekker can make.
              </p>
              <p>
                This guide covers everything you need to know: what policies must include, how helicopter rescue actually works in Nepal, which providers are worth considering, what gets claims denied, and how to leave for the mountains with your safety properly covered.
              </p>
            </div>
          </article>

          {/* SECTION: IS INSURANCE REQUIRED */}
          <article id="is-required" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Is Travel Insurance Required for Trekking in Nepal?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Is Travel Insurance Legally Mandatory in Nepal?</strong> Nepal does not currently have a national law that legally mandates travel insurance for all trekkers. You can enter the country, obtain your trekking permits, and set off on a trail without showing proof of insurance to any government official.
              </p>
              <p>
                However, that legal gap does not mean insurance is optional in any meaningful practical sense.
              </p>
              <p>
                The Annapurna Conservation Area Project permit and the TIMS card — the two standard documents required for trekking in the Annapurna region — do not include insurance checks. But the absence of a mandatory requirement is not the same as insurance being unnecessary. It simply means the responsibility falls entirely on you.
              </p>
              <p>
                <strong>Why Most Trekking Operators Require Insurance Before Departure:</strong> Responsible licensed trekking operators in Nepal require trekkers to carry valid insurance before departure — and we are no exception. At EMD Treks (Nepal Tourism Operator License #8928-091), we verify insurance documents before any guided trek begins.
              </p>
              <p>
                This is not a bureaucratic formality. It is a safety requirement.
              </p>
              <p>
                If a trekker develops a serious case of high-altitude pulmonary edema above Khopra Ridge and requires immediate helicopter evacuation, the rescue cannot wait for financial arrangements to be sorted out on a mountainside. The insurance policy and policy number need to be confirmed, the emergency hotline needs to be contactable, and the insurance company needs to issue a payment guarantee before a helicopter is dispatched.
              </p>
              <p>
                Without confirmed insurance, that process either stalls or falls entirely on the trekker — and by then, hours of critical time can be lost.
              </p>
              <p>
                <strong>What Happens If You Trek in Nepal Without Insurance:</strong> Trekking without insurance in Nepal means carrying the full financial weight of any emergency yourself.
              </p>
              <p>
                A helicopter evacuation from the Annapurna region can cost between $2,500 and $4,500. Treatment at a private hospital in Kathmandu or Pokhara adds to that. Emergency medical flights to your home country, if needed, can run into tens of thousands of dollars.
              </p>
              <p>
                Beyond the financial risk, trekking without insurance creates rescue delays. Operators and guides cannot simply order a helicopter without a payment guarantee. If a trekker cannot immediately confirm insurance coverage or a form of financial guarantee, evacuation logistics become significantly more complicated during an already high-stress emergency.
              </p>
            </div>
          </article>

          {/* SECTION: WHY ESSENTIAL */}
          <article id="why-essential" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Trekking Insurance Is Essential in Nepal&apos;s Himalayas
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Remote Mountain Trails Mean Limited Access to Medical Care:</strong> The trekking routes across the Annapurna region pass through some of the most spectacular and remote landscapes on earth. That remoteness is part of the appeal. It is also what makes medical emergencies so serious.
              </p>
              <p>
                Villages along the Khopra Ridge Trek and other high-altitude routes have basic health posts, not hospitals. If a trekker suffers a serious injury or acute illness at altitude, the nearest facility capable of proper treatment may be hours away by ground — if ground transport is even possible given the trail conditions and terrain.
              </p>
              <p>
                This is not a system where an ambulance arrives in fifteen minutes. Medical response in the mountains operates on a completely different timeline.
              </p>
              <p>
                <strong>High-Altitude Trekking Increases Medical Emergency Risk:</strong> The risk profile of trekking in Nepal changes significantly as elevation increases. Above 3,000 meters, the body begins dealing with reduced oxygen levels. Above 4,000 meters, the margin for error narrows considerably. Routes like the Khopra Ridge Trek reach elevations above 3,600 meters, with Khayer Lake sitting at approximately 4,500 meters — well within the altitude range where medical emergencies become a realistic possibility for any trekker, regardless of fitness level.
              </p>
              <p>
                Altitude sickness does not discriminate based on experience or physical condition. Fit, experienced hikers develop severe altitude illness just as unprepared beginners do.
              </p>
              <p>
                <strong>Emergency Rescue in Nepal Can Cost Thousands of Dollars:</strong> The cost of a trekking emergency in Nepal is not a rumour — it is a documented reality that catches many trekkers completely unprepared.
              </p>
              <p>
                Helicopter rescue from the Annapurna region typically costs between $2,500 and $4,500 depending on the pick-up location and conditions. Rescues from higher elevations on routes like the Everest region can reach $4,000 to $7,000 or more. These costs do not include hospital treatment, extended care, or repatriation.
              </p>
              <p>
                For most people, paying this out of pocket without warning is not a realistic option. The right insurance policy converts that potential financial catastrophe into a manageable process.
              </p>
            </div>
          </article>

          {/* SECTION: WHAT MUST COVER */}
          <article id="what-must-cover" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What Your Nepal Trekking Insurance Policy Must Cover
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Not all travel insurance policies are created equal — and in the context of Himalayan trekking, the differences between a strong policy and an inadequate one can be enormous. Before you book any policy, verify that it includes all of the following:
              </p>
              <ul className="list-disc pl-5 space-y-3 text-stone-600">
                <li>
                  <strong>High-Altitude Coverage Above 4,000–5,000 Meters:</strong> This is the single most important clause to check. Many standard travel insurance policies include trekking as a covered activity — but cap that coverage at 2,000 or 3,000 meters. If your policy does not explicitly cover trekking above 4,500 to 5,000 meters, it will not cover the most critical section of your route.
                </li>
                <li>
                  <strong>Emergency Helicopter Evacuation Coverage:</strong> Your policy must include helicopter evacuation as a covered expense — not just ground transport or standard emergency transportation. Verify if direct payment to the rescue provider applies, rather than reimbursement after the fact.
                </li>
                <li>
                  <strong>Medical Treatment and Hospitalization Coverage:</strong> Hospital admission in Kathmandu or Pokhara, emergency care, diagnostic tests, and specialist consultations all carry significant costs. Coverage of at least $100,000 in medical expenses is a commonly recommended minimum for Nepal trekking.
                </li>
                <li>
                  <strong>Adventure Sports or Trekking Activity Coverage:</strong> In the eyes of many insurance underwriters, trekking at high altitude is classified as an adventure sport. Always confirm explicitly that high-altitude trekking is listed as a covered activity under your policy.
                </li>
              </ul>
            </div>
          </article>

          {/* SECTION: MEDICAL EMERGENCIES */}
          <article id="medical-emergencies" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Common Medical Emergencies That Happen During Trekking in Nepal
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Understanding what can go wrong on the trail is not meant to frighten you — it is meant to help you choose a policy that actually covers the risks you face:
              </p>
              <ul className="list-disc pl-5 space-y-3 text-stone-600">
                <li>
                  <strong>Acute Mountain Sickness (AMS):</strong> AMS is the most common altitude-related condition trekkers experience. Symptoms include headache, nausea, dizziness, fatigue, and difficulty sleeping. In moderate to severe cases, descent and medical treatment become urgent.
                </li>
                <li>
                  <strong>HAPE and HACE at Higher Elevations:</strong> High-Altitude Pulmonary Edema (HAPE) and High-Altitude Cerebral Edema (HACE) are life-threatening conditions. Both conditions require immediate descent combined with emergency evacuation. This is exactly where helicopter rescue becomes life-saving.
                </li>
                <li>
                  <strong>Trekking Injuries, Hypothermia, and Dehydration:</strong> Falls on steep or slippery trail sections can cause fractures. Hypothermia is a risk during unexpected weather shifts. Severe dehydration and gastrointestinal illness can weaken a trekker to the point where they cannot continue.
                </li>
              </ul>
            </div>
          </article>

          {/* SECTION: RESCUE LOGISTICS */}
          <article id="rescue-logistics" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How Helicopter Rescue Works During a Trekking Emergency in Nepal
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Step-by-Step Rescue Approval Process:</strong>
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-stone-600">
                <li>The trekker or guide identifies a medical emergency and determines evacuation is necessary.</li>
                <li>The guide contacts the trek operator&apos;s emergency line or the rescue coordination service directly.</li>
                <li>The rescue company requests confirmation of the trekker&apos;s insurance policy details.</li>
                <li>The insurance company&apos;s emergency assistance team is contacted to request a payment guarantee.</li>
                <li>Once the payment guarantee is issued, the helicopter is dispatched.</li>
                <li>The trekker is evacuated to the nearest appropriate medical facility.</li>
              </ol>
              <p>
                Without a payment guarantee from the insurance company, most rescue services will not dispatch a helicopter. This is why having your policy number and your insurer&apos;s emergency contact number accessible at all times during your trek is essential.
              </p>
              <p>
                <strong>Typical Helicopter Rescue Costs in Nepal:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
                <li>Annapurna Region (including Khopra Ridge, Ghorepani, Tadapani area): $2,500 – $4,500</li>
                <li>Everest Region (Namche Bazaar and above): $4,000 – $7,000</li>
                <li>Remote high-altitude locations: costs can exceed $7,000 depending on conditions and altitude.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: DENIAL REASONS */}
          <article id="denial-reasons" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Common Reasons Insurance Claims Get Denied
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Having insurance is not the same as having insurance that will pay. Common reasons trekking insurance claims in Nepal get denied include:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Altitude Cap Exceeded:</strong> Trekking above the covered elevation without realizing the policy had a limit.</li>
                <li><strong>Adventure Sports Exclusions:</strong> High-altitude trekking being classified as an excluded activity due to lack of a rider.</li>
                <li><strong>Independent Trekking Restrictions:</strong> Some policies explicitly require trekking with a licensed guide or operator.</li>
                <li><strong>Alcohol Use or Pre-Existing Conditions:</strong> Incidents arising from intoxication or pre-existing medical conditions contributing to emergencies.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: PROVIDERS SIDE-BY-SIDE */}
          <article id="providers-comparison" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Travel Insurance Providers for Trekking in Nepal
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The following providers are frequently used by trekkers visiting Nepal and are generally considered reliable for high-altitude adventure coverage. Verify current policy details directly before purchasing:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>World Nomads:</strong> Explorer plan covers trekking up to 6,000 meters and includes emergency evacuation.</li>
                <li><strong>SafetyWing:</strong> Popular with long-term travellers. Verify high-altitude parameters directly.</li>
                <li><strong>Allianz Travel:</strong> Solid general travel insurance; adventure riders may vary.</li>
                <li><strong>IMG Global:</strong> Patriot Adventure or iTrekking plans offer strong high-altitude limits.</li>
              </ul>

              {/* TABLE */}
              <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm overflow-x-auto my-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="py-3 px-2">Feature</th>
                      <th className="py-3 px-2">World Nomads Explorer</th>
                      <th className="py-3 px-2">SafetyWing Nomad</th>
                      <th className="py-3 px-2">Allianz Adventure</th>
                      <th className="py-3 px-2">IMG iTrekking</th>
                    </tr>
                  </thead>
                  <tbody>
                    {providerComparison.map((item, idx) => (
                      <tr key={idx} className="border-b border-stone-100 hover:bg-stone-50/50">
                        <td className="py-3 px-2 font-bold text-stone-900">{item.provider}</td>
                        <td className="py-3 px-2 text-stone-600">Max Alt: {item.altitude}</td>
                        <td className="py-3 px-2 text-stone-600">Heli: {item.helicopter}</td>
                        <td className="py-3 px-2 text-stone-600">Med Limit: {item.medical}</td>
                        <td className="py-3 px-2 text-stone-600">Sports: {item.sports}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone-400 italic">
                * This comparison is a general reference only. Always verify current terms directly with each provider before purchasing.
              </p>
            </div>
          </article>

          {/* SECTION: DOCUMENTS TO CARRY */}
          <article id="documents-to-carry" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Insurance Documents You Should Carry During the Trek
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Keep a Printed Insurance Certificate:</strong> Mobile signal and internet access are unreliable across trekking routes. Carry a printed copy of your insurance certificate in your daypack, including name, policy number, insurer name, and emergency hotline.
              </p>
              <p>
                <strong>Save Emergency Contact and Policy Numbers:</strong> Share your policy details with your guide. Write your policy number and emergency contact on a card and give a copy to your guide at the start of the trek.
              </p>
              <p>
                <strong>Share Details With Trusted Contacts:</strong> Share your insurance details with a trusted contact at home who can coordinate on your behalf if you are incapacitated.
              </p>
            </div>
          </article>

          {/* SECTION: PRE-TREK CHECKLIST */}
          <article id="pre-trek-checklist" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Nepal Trekking Insurance Checklist Before Departure
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li>✓ Trekking listed as a covered activity</li>
                <li>✓ Altitude coverage explicitly stated at 5,000m or above</li>
                <li>✓ Helicopter evacuation included</li>
                <li>✓ Medical evacuation and emergency transport covered</li>
                <li>✓ Hospital treatment and inpatient care covered</li>
                <li>✓ Medical expense limit of $100,000 or higher</li>
                <li>✓ Adventure sports rider included or not required</li>
                <li>✓ 24/7 emergency assistance hotline confirmed</li>
                <li>✓ Printed copy of policy certificate packed</li>
                <li>✓ Policy number and emergency number shared with guide</li>
              </ul>
            </div>
          </article>

          {/* SECTION: INSURANCE CLAUSES DETAILS */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-955">Required Policy Clauses</h2>
            <div className="space-y-6">
              {insuranceClauses.map((item, idx) => (
                <div key={idx} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                  <h4 className="font-extrabold text-stone-955 text-sm">{item.clause}</h4>
                  <p className="mt-2 text-xs text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Travel Insurance
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Is travel insurance mandatory for trekking in Nepal?",
                  a: "Nepal does not legally require travel insurance to issue trekking permits. However, responsible trekking operators — including licensed operators in the Annapurna region — require confirmed insurance before any guided departure. Given that helicopter evacuation can cost $2,500 to $7,000 or more, insurance is effectively essential."
                },
                {
                  q: "Does travel insurance cover helicopter rescue in Nepal?",
                  a: "Yes — if your policy specifically includes helicopter evacuation coverage. Standard travel insurance policies often exclude this. You must confirm that helicopter rescue is listed as a covered expense under your policy and that the insurer can issue a direct payment guarantee."
                },
                {
                  q: "What is the best insurance for trekking in Nepal?",
                  a: "World Nomads Explorer and IMG Global's adventure plans are frequently recommended by trekkers and operators for their altitude coverage limits and evacuation inclusion. The best policy depends on your route, altitude, budget, and medical history."
                },
                {
                  q: "Does insurance cover altitude sickness treatment?",
                  a: "It depends on your policy. If your policy covers high-altitude trekking and includes medical expenses, treatment for altitude sickness — including AMS, HAPE, and HACE — should be covered."
                },
                {
                  q: "Can I trek in Nepal without insurance?",
                  a: "You can obtain permits without insurance, but trekking without coverage in Nepal's high-altitude terrain carries serious financial risk. A single helicopter evacuation can cost more than the entire trip. We strongly advise against trekking without valid insurance."
                },
                {
                  q: "What insurance covers trekking above 5,000 meters?",
                  a: "Policies that include high-altitude trekking as a covered activity with altitude limits of 5,000m or higher. World Nomads Explorer, IMG iTrekking, and similar adventure-focused plans typically meet this standard."
                },
                {
                  q: "How expensive is helicopter evacuation in Nepal?",
                  a: "Helicopter rescue in the Annapurna region typically costs between $2,500 and $4,500. In the Everest region, costs range from $4,000 to $7,000 or more. Costs vary depending on pick-up location, altitude, weather conditions, and the rescue company."
                },
                {
                  q: "Does insurance cover Everest Base Camp trekking?",
                  a: "Yes, if your policy covers trekking up to at least 5,400 meters — the altitude of Everest Base Camp. Many adventure travel insurance plans, including World Nomads Explorer and IMG iTrekking, cover this altitude range."
                },
                {
                  q: "Does insurance cover Annapurna trekking routes?",
                  a: "It should, provided your policy includes high-altitude trekking coverage. Routes in the Annapurna region reach elevations from 3,000 to over 5,400 meters depending on the trail. Confirm your policy covers the maximum altitude of your route."
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
              Trekking in Nepal rewards preparation. The trails through the Annapurna region, along the Khopra Ridge, up to Khayer Lake, and across the high passes of the Himalayas offer experiences that are genuinely difficult to find anywhere else on earth. But those same mountains demand respect — and part of that respect is making sure you are properly protected before you set out.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              Travel insurance for trekking in Nepal is not a formality. It is the financial safety net that determines whether a serious emergency becomes a story you tell later or a crisis that follows you home for years. The cheapest policy is almost never the right policy in the mountains. Choose coverage that matches the terrain.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Plan Your Trek With a Team That Takes Safety Seriously
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                At EMD Treks (Nepal Tourism Operator License #8928-091), safety preparation is part of every guided departure. We verify insurance documents before any trek begins, brief trekkers on emergency procedures, and ensure our guides carry the information they need to coordinate rescues efficiently.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Plan Your Guided Adventure &rarr;
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
                This insurance advisory is updated by the safety operations coordinators at EMD Treks. Licensed Nepal Tourism Board Operator #8928-091. Pokhara &amp; Kathmandu.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
