import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/planning/trekking-regulations-explained",
  },
  title: "Trekking Regulations Explained | Nepal Trek Guide",
  description: "Understand every Nepal trekking regulation before you go. This complete guide covers TIMS card rules, permit requirements, solo trekking restrictions, guide.",
};

export default function Page() {
  const regulations = [
    {
      rule: "1. The Licensed Guide Requirement",
      desc: "Foreign trekkers must hire a licensed local guide registered under TAAN and NTB. Independent solo trekking is prohibited inside conservation areas."
    },
    {
      rule: "2. Registration & Checkposts",
      desc: "You must present and register your ACAP permit and TIMS card at checkposts like Nayapul and Birethanti. Trekking without permits results in double-fee penalties."
    },
    {
      rule: "3. Drone Flight Restrictions",
      desc: "Flying drones in Nepal is strictly regulated. You must obtain pre-approval permits from the Civil Aviation Authority of Nepal (CAAN) and the Department of Tourism. Unauthorized flying can lead to device confiscation."
    },
    {
      rule: "4. Leave No Trace & Waste Management",
      desc: "The ACAP operates under strict zero-waste guidelines. Trekkers are required to pack out all plastic waste and batteries, and use filtered water instead of buying plastic bottles."
    }
  ];

  const permitCosts = [
    { name: "TIMS Card (Agency Trek)", fee: "USD 10", authority: "Nepal Tourism Board" },
    { name: "TIMS Card (Independent)", fee: "USD 20", authority: "Nepal Tourism Board" },
    { name: "ACAP Permit", fee: "NPR 3,000 (~USD 22)", authority: "National Trust for Nature Conservation" },
    { name: "Sagarmatha National Park", fee: "NPR 3,000 (~USD 22)", authority: "Dept. of National Parks" },
    { name: "Langtang National Park", fee: "NPR 3,000 (~USD 22)", authority: "Dept. of National Parks" }
  ];

  const restrictedAreaCosts = [
    { name: "Upper Mustang", fee: "USD 500 (first 10 days), USD 50/day thereafter" },
    { name: "Upper Dolpo", fee: "USD 500 (first 10 days), USD 50/day thereafter" },
    { name: "Manaslu Circuit", fee: "USD 70–100 per week (seasonal variation)" },
    { name: "Kanchenjunga", fee: "USD 10 per week" },
    { name: "Nar Phu Valley", fee: "USD 90 per week" }
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
            <Link href="/planning/khopra-trek-cost" className="hover:text-emerald-400 transition-colors">Planning</Link>
            <span>/</span>
            <span className="text-emerald-400">Regulations Explained</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Nepal Government Regulations &amp; Rules
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Trekking Regulations Explained
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Complete Nepal Trekking Rules, Permits &amp; Legal Requirements Guide. Verified by Licensed Local Trekking Guides, Pokhara, Nepal.
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
              <a href="#understanding-rules" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why Nepal Regulates Treks
              </a>
              <a href="#authorities" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Governing Authorities
              </a>
              <a href="#permit-stack" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Required Trekking Permits
              </a>
              <a href="#costs" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Permit Fee Breakdowns
              </a>
              <a href="#guide-mandate" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Mandatory Guide Rules
              </a>
              <a href="#solo-trekking" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Solo Trekking Restrictions
              </a>
              <a href="#restricted-areas" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Restricted Area Rules
              </a>
              <a href="#park-rules" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                National Park Guidelines
              </a>
              <a href="#checkpoints" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Checkpoint Registration
              </a>
              <a href="#drones" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Drone Approval Laws
              </a>
              <a href="#environmental" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Environmental &amp; Waste
              </a>
              <a href="#safety-insurance" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Safety &amp; Helicopter Rescue
              </a>
              <a href="#visas" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Visas &amp; Documentation
              </a>
              <a href="#penalties" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Fines &amp; Legal Penalties
              </a>
              <a href="#step-by-step" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                How to Trek Legally
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
                Inquire Compliance Help
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Nepal Trekking Regulations: Rules, Permits &amp; Legal Requirements Guide
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Nepal is one of the world&apos;s most rewarding trekking destinations — but it is also one of the most regulated. Before you lace up your boots and step onto a Himalayan trail, there is a framework of legal requirements, permit systems, and conservation rules that every foreign trekker must understand.
              </p>
              <p>
                This is not optional reading. Nepal&apos;s trekking regulations have become increasingly strict in recent years. Trekking without proper permits, bypassing checkposts, hiring unlicensed guides, or flying drones without authorization can result in fines, confiscation of equipment, forced removal from a trail, or denied entry into an entire trekking region.
              </p>
              <p>
                We have put together this complete guide to make sure that does not happen to you. Our licensed local team, operating under Nepal Tourism Operator License #8928-091, works with these regulations every day. What follows is the most detailed and practical breakdown of Nepal&apos;s trekking rules available — covering permits, guide requirements, solo trekking restrictions, restricted areas, checkpoint procedures, drone rules, environmental laws, safety compliance, and legal penalties.
              </p>
            </div>
          </article>

          {/* Core Regulations Grid */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-stone-955">Core Mountain Rules</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {regulations.map((item, i) => (
                <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                  <h4 className="font-extrabold text-stone-950 text-sm sm:text-base">{item.rule}</h4>
                  <p className="mt-2 text-xs text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION: UNDERSTANDING RULES */}
          <article id="understanding-rules" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Understanding Trekking Regulations in Nepal
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Why Nepal Regulates Trekking Routes:</strong> Nepal introduced its formal trekking regulation system for reasons that go well beyond bureaucracy. The Himalayan trail network passes through some of the world&apos;s most ecologically sensitive terrain, including national parks, protected conservation areas, glacial watersheds, and high-altitude ecosystems that are vulnerable to even light human impact.
              </p>
              <p>
                Without regulation, unrestricted trekker numbers would cause serious environmental damage. More practically, remote trail systems require tracking mechanisms so that search and rescue teams can locate trekkers in emergencies. Every year, hikers go missing or require helicopter evacuation in areas with no mobile signal and limited access. The permit and registration system exists, in part, to create a record of who is on the trail and where they should be.
              </p>
              <p>
                There is also an economic dimension. Conservation permit fees fund the Nepal Tourism Board, the Department of Tourism, and the management systems that maintain trails, staff ranger checkposts, and operate trekking zone infrastructure.
              </p>
            </div>
          </article>

          {/* SECTION: AUTHORITIES */}
          <article id="authorities" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Which Authorities Manage Trekking Regulations
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Several government bodies share oversight of Nepal&apos;s trekking regulation system:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>The Nepal Tourism Board (NTB):</strong> The primary body responsible for promoting and managing tourism in Nepal. It oversees the TIMS card system and establishes broad tourism policy.</li>
                <li><strong>The Department of Tourism:</strong> Under the Ministry of Culture, Tourism and Civil Aviation, this department issues trekking licenses, registers trekking agencies, and handles permit compliance.</li>
                <li><strong>The Trekking Agencies&apos; Association of Nepal (TAAN):</strong> The official body governing trekking operators and licensed guides. It maintains the guide registration system and works with the Department of Tourism to enforce guide requirements.</li>
                <li><strong>The Civil Aviation Authority of Nepal (CAAN):</strong> Governs all airspace, including drone flights. No drone may be flown over Nepal&apos;s trekking regions without prior CAAN approval.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: PERMIT STACK */}
          <article id="permit-stack" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Trekking Permit Requirements for Foreign Trekkers
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>TIMS Card Requirement:</strong> The Trekkers&apos; Information Management System card — universally known as the TIMS card — is one of the two most important documents a foreign trekker must carry. It is a registration document, not simply a permit. Its primary purpose is trekker tracking: the card creates a national record of your identity, your planned route, and your emergency contacts.
              </p>
              <p>
                TIMS cards are issued through the Nepal Tourism Board offices in Kathmandu and Pokhara, and through registered trekking agencies. You will need your passport, passport-size photographs, and your intended trekking route.
              </p>
              <p>
                <strong>Conservation Area and National Park Permits:</strong> Beyond the TIMS card, most trekking routes require at least one additional entry permit specific to the protected zone you are entering.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>ACAP Permit (Annapurna Conservation Area Permit):</strong> Required for the Annapurna region, including the Annapurna Circuit, Base Camp, Poon Hill, and <Link href="/planning/acap-permit-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Khopra Ridge Trek</Link>. It is managed by the National Trust for Nature Conservation (NTNC).</li>
                <li><strong>Sagarmatha National Park Permit:</strong> Required for the Everest region, in addition to local government entry registration cards.</li>
                <li><strong>Other Parks:</strong> Langtang, Manaslu, Rara, and Makalu-Barun all issue their own entry permits.</li>
              </ul>
              <p>
                <strong>Restricted Area Trekking Permits:</strong> Some of Nepal&apos;s border regions are classified as restricted areas (e.g. Upper Mustang, Upper Dolpo, Manaslu, Nar Phu). These permits are issued jointly by the Department of Tourism and the Department of Immigration, must be arranged through a licensed agency, and require a minimum of two trekkers plus a guide.
              </p>
            </div>
          </article>

          {/* SECTION: COSTS */}
          <article id="costs" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Trekking Permit Cost Breakdown in Nepal
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Understanding standard permit fees helps you budget accurately:
              </p>

              {/* TABLE: Standard Permit Costs */}
              <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="px-6 py-4">Permit</th>
                      <th className="px-6 py-4">Fee (Foreign National)</th>
                      <th className="px-6 py-4">Issuing Authority</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    {permitCosts.map((item, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50">
                        <td className="px-6 py-4 font-bold text-stone-900">{item.name}</td>
                        <td className="px-6 py-4 text-stone-600">{item.fee}</td>
                        <td className="px-6 py-4 font-semibold text-emerald-600">{item.authority}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                <strong>Restricted Area Permit Pricing:</strong>
              </p>

              {/* TABLE: Restricted Area Permit Pricing */}
              <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="px-6 py-4">Restricted Zone</th>
                      <th className="px-6 py-4">Permit Fee (Approx. Per Week)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    {restrictedAreaCosts.map((item, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50">
                        <td className="px-6 py-4 font-bold text-stone-900">{item.name}</td>
                        <td className="px-6 py-4 font-semibold text-emerald-600">{item.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          {/* SECTION: GUIDE MANDATE */}
          <article id="guide-mandate" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              New Guide Requirement for Trekking in Nepal
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Are Licensed Guides Mandatory for Foreign Trekkers?</strong> Yes, in most trekking regions, foreign trekkers must be accompanied by a licensed guide.
              </p>
              <p>
                Nepal&apos;s government has been progressively tightening guide requirements since 2023. The Department of Tourism now mandates that foreign trekkers in designated trekking zones hire a guide registered with the Trekking Agencies&apos; Association of Nepal and the Nepal Tourism Board. This applies across the Annapurna region, Everest region, Langtang region, and the majority of Nepal&apos;s regulated trekking corridors.
              </p>
              <p>
                A licensed guide is not just a companion — they are a legally registered professional with verified route knowledge, first aid training, altitude emergency procedures, and accountability to the official trekking agency system.
              </p>
              <p>
                <strong>Why Nepal Introduced Mandatory Guide Rules:</strong> A significant number of independent trekkers were getting lost, requiring expensive helicopter rescues, or dying in areas where no one had a record of their location. The guide requirement policy also serves to support local livelihoods, ensuring that tourism dollars directly benefit mountain communities.
              </p>
            </div>
          </article>

          {/* SECTION: SOLO TREKKING */}
          <article id="solo-trekking" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Solo Trekking Regulations in Nepal
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Can Foreigners Trek Alone in Nepal?</strong> Under the current regulatory framework, independent solo trekking is prohibited inside designated conservation areas and restricted trekking zones for foreign nationals. This includes the Annapurna Conservation Area, which covers the Khopra Ridge route.
              </p>
              <p>
                Having a TIMS card and an ACAP permit does not authorize you to trek without a guide in zones where guides are mandatory. Checkpost officers are authorized to verify both your permits and your guide arrangements.
              </p>
              <p>
                <strong>What Happens If You Ignore Solo Rules:</strong> If stopped at a checkpost or by a ranger patrol, you may be denied further access to the route, escorted off the trail, and required to pay penalty fees before being allowed to proceed with a guide. In restricted areas, cases can be referred to the Department of Immigration.
              </p>
            </div>
          </article>

          {/* SECTION: RESTRICTED AREAS */}
          <article id="restricted-areas" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Restricted Area Trekking Rules You Must Know
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Access to restricted zones requires a special restricted area permit in addition to standard trekking documents:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Upper Mustang &amp; Upper Dolpo:</strong> Closed to foreigners until 1992, these high-altitude regions bordering Tibet remain tightly controlled with mandatory guides and a 2-person minimum.</li>
                <li><strong>Manaslu Circuit:</strong> Groups must travel with licensed guides and through registered agencies under seasonal permit parameters.</li>
                <li><strong>Kanchenjunga Region:</strong> Remote border approaches make independent access completely impossible.</li>
                <li><strong>Nar Phu Valley:</strong> An off-route side valley in the Annapurna region with its own restricted permit system.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: PARK RULES */}
          <article id="park-rules" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              National Park and Conservation Area Trekking Rules
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Rules Inside Conservation Areas:</strong> Inside the Annapurna Conservation Area, trekkers are required to follow waste management protocols. All non-biodegradable waste must be carried out. Cutting trees or collecting firewood from protected forests is prohibited. The use of plastic bags is banned in many zones, and campsites must be used only in designated areas.
              </p>
              <p>
                <strong>National Park Entry Compliance:</strong> Ranger patrols in Sagarmatha (Everest) and other national parks conduct document checks. Trail access may be subject to seasonal closures. Hunting, plant collection, cultural artifact removal, and open fires outside designated cooking zones are strictly prohibited.
              </p>
            </div>
          </article>

          {/* SECTION: CHECKPOINTS */}
          <article id="checkpoints" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Trekking Checkpoint Registration Process
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Why Checkpoint Registration Is Mandatory:</strong> Registrations create a real-time record of trekker movements, allowing rescue teams to identify last-known positions in an emergency. Checkpost officers also verify TIMS cards, ACAP permits, passports, and guide credentials against government registries.
              </p>
              <p>
                <strong>Documents You Must Show at Checkpoints:</strong> Ensure your passport, TIMS card, ACAP/conservation permit, and your guide&apos;s TAAN-licensed credentials are easily accessible. For Annapurna routes, Birethanti serves as the primary entry registration checkpost.
              </p>
            </div>
          </article>

          {/* SECTION: DRONES */}
          <article id="drones" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Drone Regulations for Trekkers in Nepal
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Do You Need a Permit to Fly Drones?</strong> Yes. Flying a drone without authorization is a legal offense. Drones cause disturbances to wildlife, create noise pollution, and raise security concerns near border zones. Rangers are authorized to ground and confiscate equipment.
              </p>
              <p>
                <strong>How Drone Approval Works in Nepal:</strong> Securing legal permission requires authorization from both the Civil Aviation Authority of Nepal (CAAN) and the Department of Tourism. The process takes two to four weeks and requires passport scans, drone specifications, and planned flight schedules. If you plan to bring a drone on the Khopra Ridge circuit, please contact our Pokhara office at least 4 weeks in advance to coordinate your application.
              </p>
              <p>
                <strong>Penalties for Unauthorized Drones:</strong> Unauthorized drone use results in equipment confiscation, fines under the Civil Aviation Act, and potential referral to immigration authorities.
              </p>
            </div>
          </article>

          {/* SECTION: ENVIRONMENTAL */}
          <article id="environmental" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Environmental and Waste Management Rules
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Leave No Trace Policy:</strong> The Annapurna Conservation Area operates under strict protection rules. Every item of waste you bring in must be packed out. Open wood-burning fires are prohibited; trekkers are expected to stay in solar- or gas-powered community lodges.
              </p>
              <p>
                <strong>Waste Disposal &amp; Plastics:</strong> Single-use plastic bottles are banned in sections of the Annapurna zone. Carry refillable bottles with filtration systems. Used batteries must be carried back to Pokhara or Kathmandu for proper recycling. Our guides carry trash bags and enforce a zero-waste policy on all routes.
              </p>
            </div>
          </article>

          {/* SECTION: SAFETY INSURANCE */}
          <article id="safety-insurance" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Trekking Safety Regulations and Emergency Compliance
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Safety Rules:</strong> Trekkers must follow weather advisories issued by the Nepal Meteorological Forecasting Division. Guides are legally empowered to halt ascents during storms or when clients show signs of Acute Mountain Sickness (AMS).
              </p>
              <p>
                <strong>Helicopter Rescue and Insurance Requirements:</strong> Emergency evacuations can cost between USD 3,000 and USD 10,000 depending on location and altitude. Nepal does not provide free medical rescue. We require all trekkers booking with our team to hold comprehensive travel insurance covering high-altitude helicopter rescue.
              </p>
            </div>
          </article>

          {/* SECTION: VISAS */}
          <article id="visas" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Visa and Documentation Rules Before Trekking
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Nepal Tourist Visas:</strong> Tourist visas are available on arrival at Tribhuvan International Airport in Kathmandu (15, 30, or 90-day durations). Ensure your visa validity spans your entire trekking itinerary plus buffer days.Extensions are only available through immigration offices.
              </p>
              <p>
                <strong>Required Documents:</strong> You will need your original passport (valid for 6 months), visa stamps, and passport photos. For restricted areas, agency registration and licensed guide assignments must be pre-arranged in writing.
              </p>
            </div>
          </article>

          {/* SECTION: PENALTIES */}
          <article id="penalties" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Penalties for Violating Trekking Regulations in Nepal
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Trekking Without TIMS Card:</strong> Double-fee penalty charged on the spot at trail checkpoints.</li>
                <li><strong>No Conservation/National Park Permit:</strong> Denied access at checkpoints; required return to regional offices to buy permits.</li>
                <li><strong>Restricted Area Violations:</strong> Severe fines, potential deportation, and immigration blacklisting.</li>
                <li><strong>Illegal Drone Flying:</strong> Immediate drone confiscation, civil aviation fines, and legal referral.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: STEP-BY-STEP */}
          <article id="step-by-step" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Step-by-Step Process to Trek Legally in Nepal
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Pre-Trek Compliance Checklist:</strong>
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-stone-600">
                <li>Obtain your Nepal tourist visa (on arrival or online e-visa).</li>
                <li>Confirm permit requirements for your specific route (ACAP, TIMS, or restricted zone RAPs).</li>
                <li>Hire a licensed guide through a registered agency (EMD Treks, License #8928-091).</li>
                <li>Apply for all required permits (finalized in Kathmandu or Pokhara).</li>
                <li>Submit drone permit requests to CAAN 4 weeks in advance (if bringing a drone).</li>
                <li>Confirm altitude-rated helicopter rescue travel insurance.</li>
                <li>Carry physical permit originals in a waterproof sleeve.</li>
              </ol>
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Nepal Trekking Rules
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Do foreigners need a guide for trekking in Nepal?",
                  a: "Yes, under current Nepal government regulations, foreign trekkers are required to hire a licensed guide registered with TAAN and the Nepal Tourism Board when trekking inside conservation areas and restricted zones. This applies to the Annapurna region, Everest region, Langtang, and most other regulated trekking corridors."
                },
                {
                  q: "Is solo trekking allowed in Nepal?",
                  a: "Solo trekking without a licensed guide is prohibited inside designated conservation areas and all restricted trekking zones for foreign nationals. Some lower-altitude or non-regulated routes may still permit independent trekking, but the major Himalayan routes all now require guide accompaniment."
                },
                {
                  q: "Is a TIMS card mandatory for trekking?",
                  a: "Yes. The TIMS card is mandatory for all foreign trekkers on regulated trekking routes in Nepal. It serves as the primary registration document for Nepal's trekker tracking system and is checked at entry checkposts. Trekking without a TIMS card results in a double-fee penalty charged on the spot."
                },
                {
                  q: "How much do trekking permits cost in Nepal?",
                  a: "Standard permit costs include: TIMS card (USD 10 through an agency, USD 20 independently), ACAP permit (approximately USD 22), and Sagarmatha National Park entry (approximately USD 22). Restricted area permits are significantly more expensive — Upper Mustang and Upper Dolpo cost USD 500 for the first 10 days."
                },
                {
                  q: "Can tourists trek without permits in Nepal?",
                  a: "No. All foreign trekkers on regulated routes must hold the correct permits before entering the trail. Trekking without permits is a violation of Nepal's trekking regulations and results in immediate penalties at checkposts."
                },
                {
                  q: "Which trekking areas require restricted permits?",
                  a: "Nepal's main restricted trekking zones are Upper Mustang, Upper Dolpo, Manaslu Circuit, Kanchenjunga region, and Nar Phu Valley. These areas require special restricted area permits issued by the Department of Tourism, mandatory licensed guide arrangements, and booking through a registered trekking agency."
                },
                {
                  q: "Can I buy trekking permits online in Nepal?",
                  a: "Some permits are available through online or advance application processes, but the in-person verification and issuance requirements for TIMS and ACAP mean that most permits are finalized in Kathmandu or Pokhara. Restricted area permits cannot be self-arranged online."
                },
                {
                  q: "Can tourists fly drones while trekking in Nepal?",
                  a: "Only with prior authorization. Drone operation in Nepal requires approval from the Civil Aviation Authority of Nepal and the Department of Tourism before the drone is brought into the country. The approval process takes two to four weeks. Unauthorized drone use can result in equipment confiscation and fines."
                },
                {
                  q: "What documents are needed for trekking permits?",
                  a: "You will need your original passport (with at least six months of remaining validity), passport-size photographs, your Nepal tourist visa, and in some cases confirmation of licensed guide arrangements."
                },
                {
                  q: "What happens if I trek without permits?",
                  a: "Consequences vary by violation type: trekking without a TIMS card results in double-fee payment at the next checkpost; trekking without a conservation area permit results in denied access and required return to the issuing office; unauthorized entry into restricted areas can result in fines, deportation, and immigration record complications."
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
            <h2 className="text-2xl font-bold text-stone-955 font-sans font-medium">Conclusion</h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              Nepal&apos;s trekking regulation system exists for good reasons. It protects the environment that makes the Himalayan trail experience exceptional. It protects trekkers by maintaining accountability and rescue coordination on remote routes. It protects local communities by ensuring that tourism spending flows through a structured system that funds trail maintenance, conservation work, and local employment.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              For foreign trekkers, understanding and complying with these regulations is not a burden — it is the foundation of a responsible and well-prepared trek. The regulations have become more detailed and more strictly enforced in recent years, and the days of simply arriving in Nepal and walking into the mountains with no documents are effectively over.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Ready to Trek Without the Paperwork?
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Our licensed local guides handle every permit, every registration, every checkpost requirement, and every compliance procedure — from your TIMS card and ACAP permit to restricted area authorizations and drone approvals — so that you can focus entirely on the experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Contact Our Team &rarr;
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
                This legal and permit briefing is compiled in compliance with the Ministry of Culture, Tourism and Civil Aviation and CAAN 2026 codes. Licensed Nepal Tourism Operator EMD Treks #8928-091. Pokhara &amp; Swanta, Nepal. Email: <a href="mailto:info@khopraridgetrek.com" className="text-emerald-700 font-semibold hover:underline">info@khopraridgetrek.com</a>.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
