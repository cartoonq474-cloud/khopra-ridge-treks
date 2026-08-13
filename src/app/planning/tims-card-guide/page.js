import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/planning/tims-card-guide",
  },
  title: "TIMS Card Guide for Nepal Trekking",
  description: "Planning a trek in Nepal? Our complete TIMS Card Guide covers permit fees, required documents, application steps, office locations, and everything you need.",
};

export default function Page() {
  const timsRequirements = [
    { label: "Card Name", value: "Trekkers' Information Management System (TIMS) Card" },
    { label: "Foreigner Fee", value: "NPR 2,000 (~$15 USD) per person" },
    { label: "SAARC National Fee", value: "NPR 1,000 (~$8 USD) per person" },
    { label: "Where to Obtain", value: "TAAN office or Nepal Tourism Board in Kathmandu / Pokhara" },
    { label: "Photos Required", value: "2 Passport-sized photos" }
  ];

  const comparisonTable = [
    { category: "Foreign (non-SAARC) trekker", fee: "NPR 2,000", usd: "~USD 15" },
    { category: "SAARC national trekker", fee: "NPR 1,000", usd: "~USD 8" }
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
            <span className="text-emerald-400">TIMS Card</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Trekker Registration &amp; Safety Database
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            TIMS Card Guide for Nepal Trekking
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Fees, requirements, and application process. Last Updated: January 2026 | Verified by Licensed Local Trekking Guides, Pokhara, Nepal.
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
              <a href="#what-is-tims" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                What is a TIMS Card?
              </a>
              <a href="#why-required" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why is it Required?
              </a>
              <a href="#who-needs" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Who Needs a Card?
              </a>
              <a href="#cost-breakdown" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Updated Cost Breakdown
              </a>
              <a href="#requirements" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Documents Needed
              </a>
              <a href="#how-apply" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                How to Apply
              </a>
              <a href="#where-get" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Office Locations
              </a>
              <a href="#processing-time" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Processing Timeline
              </a>
              <a href="#tims-vs-others" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                TIMS vs ACAP &amp; Parks
              </a>
              <a href="#trekking-rules" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Important Checkpoint Rules
              </a>
              <a href="#avoid-mistakes" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Common Mistakes
              </a>
              <a href="#recent-updates" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                2026 Regulation Updates
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
                Inquire Permit Assistance
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              TIMS Card Guide for Nepal Trekking: Fees, Requirements and Application Process
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                If you are planning a trek in Nepal, the TIMS card is one of the first permits you need to understand. Before you book your flights or pack your boots, this permit needs to be on your checklist — and getting it wrong can delay or even cancel your trek before it begins.
              </p>
              <p>
                The Trekkers&apos; Information Management System, commonly known as the TIMS card, is a mandatory registration permit that Nepal requires for nearly all trekking activities across the country. It is not a formality. It is part of a broader safety and rescue system that protects trekkers in some of the world&apos;s most remote mountain terrain.
              </p>
              <p>
                In this guide, we cover everything you need to know: what the TIMS card is, why it exists, who needs it, how much it costs, what documents are required, and exactly how to apply — whether you are trekking independently or joining a guided group. We also explain how TIMS fits alongside other trekking permits like the ACAP and national park entry passes, so you arrive fully prepared.
              </p>
            </div>
          </article>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 rounded-2xl border border-stone-200 bg-white p-6 sm:grid-cols-4 shadow-sm">
            {timsRequirements.map((stat, i) => (
              <div key={i} className="first:col-span-2">
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{stat.label}</span>
                <p className="mt-1 text-sm font-bold text-stone-900 leading-snug">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* SECTION: WHAT IS TIMS */}
          <article id="what-is-tims" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What Is a TIMS Card in Nepal?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Before diving into fees and application steps, it helps to understand what this permit actually is and why Nepal built the system in the first place.
              </p>
              <p>
                <strong>What Does TIMS Stand For?</strong> TIMS stands for Trekkers&apos; Information Management System. It is a permit and registration system that collects key information about every trekker entering Nepal&apos;s mountain trails — including your identity, planned route, emergency contacts, and entry and exit dates.
              </p>
              <p>
                When you register for a TIMS card, your details are entered into a centralized national database. That database becomes the operational record used by search and rescue teams if anything goes wrong during your trek.
              </p>
              <p>
                <strong>Who Manages the TIMS Card System?</strong> The TIMS system is co-managed by two authoritative bodies: the Nepal Tourism Board (NTB) and the Trekking Agencies&apos; Association of Nepal (TAAN). Both organizations work together to maintain the registration database, issue permits, and coordinate with rescue authorities when trekkers go missing or face emergencies on the trail.
              </p>
              <p>
                <strong>Why Was the TIMS Permit System Introduced?</strong> Nepal introduced the TIMS system in 2002 primarily to address the growing number of trekkers disappearing on remote routes without any formal trail record. Before TIMS, there was no systematic way to track who was on which trail, where they were headed, or how to reach their emergency contacts.
              </p>
            </div>
          </article>

          {/* SECTION: WHY REQUIRED */}
          <article id="why-required" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Is a TIMS Card Required for Trekking in Nepal?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Many trekkers assume the TIMS card is just another bureaucratic permit designed to generate tourism revenue. That assumption is wrong. The system was specifically designed around trekker safety:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Trekker Safety Monitoring System:</strong> Every TIMS card registration creates a trail record. When you check in at official trekking checkpoints along your route, your permit is verified and your position on the trail is logged.</li>
                <li><strong>Emergency Rescue Coordination:</strong> When a trekker goes missing in Nepal&apos;s mountains, the TIMS database is the first tool rescue coordinators consult. Your registration record shows your planned route, your expected exit date, your emergency contact information, and the details of any trekking agency operating your trip.</li>
                <li><strong>Government Trekking Regulation and Compliance:</strong> TIMS registration is also how Nepal monitors and regulates trekking activity across its protected conservation areas. Trekkers without valid TIMS documentation can be turned back at these checkpoints, which means your trek ends before it begins.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: WHO NEEDS */}
          <article id="who-needs" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Who Needs a TIMS Card in Nepal?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                For almost everyone trekking outside Kathmandu Valley, a TIMS card is required:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Foreign Trekkers:</strong> Any international traveler trekking on registered trekking routes in Nepal needs a TIMS card. This applies whether you are trekking independently as a solo backpacker or joining an organized group with a guide.</li>
                <li><strong>SAARC Nationals:</strong> Citizens of SAARC member countries pay a reduced fee, but follow the same registration process.</li>
                <li><strong>Nepali Trekkers:</strong> Domestic trekkers are also covered under the TIMS system, though the fee structure and registration process may differ. Confirm current requirements with TAAN or NTB.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: COST BREAKDOWN */}
          <article id="cost-breakdown" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              TIMS Card Fee in Nepal (Updated Cost Breakdown)
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Permit fees are subject to periodic revision by the Nepal Tourism Board and TAAN. Always confirm current fees at the time of your application:
              </p>

              {/* TABLE: Cost Breakdown */}
              <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="px-6 py-4">Trekker Category</th>
                      <th className="px-6 py-4">TIMS Card Fee (NPR)</th>
                      <th className="px-6 py-4">Approx. USD</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    {comparisonTable.map((item, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50">
                        <td className="px-6 py-4 font-bold text-stone-900">{item.category}</td>
                        <td className="px-6 py-4 text-stone-600">{item.fee}</td>
                        <td className="px-6 py-4 font-semibold text-emerald-600">{item.usd}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          {/* SECTION: REQUIREMENTS */}
          <article id="requirements" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              TIMS Card Requirements and Documents Needed
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Passport and Visa:</strong> You must present your original passport and a photocopy of its ID page. Your Nepal entry visa must be valid at the time of application.</li>
                <li><strong>Passport-Sized Photos:</strong> Bring two recent front-facing passport photographs (standard 35mm x 45mm). Offices do not typically provide photography services on site.</li>
                <li><strong>Trekking Route and Itinerary Information:</strong> You will be asked to declare your planned route, entry/exit points, and destination.</li>
                <li><strong>Emergency Contact Details:</strong> Provide the name, relationship, phone number, and address of a contact person outside Nepal.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: HOW APPLY */}
          <article id="how-apply" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How to Apply for a TIMS Card in Nepal
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Trekkers can register for a TIMS card through three main channels:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Apply Through the TAAN Office:</strong> Walk into the TAAN registration office in Kathmandu, complete the form, pay the fee, and receive your card.</li>
                <li><strong>Apply Through the Nepal Tourism Board Office:</strong> NTB issues TIMS cards at its permit offices in Kathmandu and Pokhara. The counter process is identical.</li>
                <li><strong>Apply Through a Licensed Trekking Agency:</strong> When you book a guided trek, the agency collects your passport scans and photos and processes the registration on your behalf, so your permits are ready before departure.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: WHERE GET */}
          <article id="where-get" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Where to Get a TIMS Card in Nepal
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                TIMS cards must be processed in person at official offices in Kathmandu or Pokhara:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Kathmandu:</strong> Nepal Tourism Board (NTB) office in Bhrikuti Mandap, or the TAAN office in Maligaon, Kathmandu.</li>
                <li><strong>Pokhara:</strong> TAAN office in Pokhara&apos;s tourist district. Highly convenient for Annapurna, Poon Hill, or Khopra Ridge loops.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: PROCESSING TIME */}
          <article id="processing-time" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How Long Does TIMS Card Processing Take?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Standard Same-Day Processing:</strong> If you apply in person, the process typically takes between 30 minutes and 2 hours, provided your documentation is complete.
              </p>
              <p>
                <strong>Peak Season Delays:</strong> During October-November and March-May, queue times can extend considerably. Plan your permit visit for early morning and allow half a day if you also need to obtain conservation area permits.
              </p>
            </div>
          </article>

          {/* SECTION: TIMS VS OTHERS */}
          <article id="tims-vs-others" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              TIMS Card vs Other Trekking Permits in Nepal
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Do not assume one permit substitutes for another:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>TIMS Card vs ACAP Permit:</strong> The TIMS card registers your safety profile in the national tracking database. The <Link href="/planning/acap-permit-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">ACAP Permit</Link> is a protected area entry ticket issued by the NTNC to enter the Annapurna region. Both are required for the Khopra Ridge Trek.</li>
                <li><strong>TIMS Card vs National Park Permits:</strong> National park entry permits (e.g. Sagarmatha National Park permit for Everest) are separate documents with their own fee structures, verified independently at park boundaries.</li>
                <li><strong>TIMS Card vs Restricted Area Permits:</strong> Destinations like Mustang, Dolpo, and Manaslu require a Restricted Area Permit (RAP) issued through the Department of Immigration, alongside standard safety documentation.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: TREKKING RULES */}
          <article id="trekking-rules" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Important Trekking Rules Related to TIMS Card
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Carry Your Physical Permit:</strong> You must carry the physical original card at all times. Digital copies on phones are not accepted.</li>
                <li><strong>Checkpoint Verification:</strong> On major trails, checkpoints verify cards and log trekker detail entry in tracking ledgers.</li>
                <li><strong>Penalties:</strong> Trekking without valid TIMS registration can result in being turned back at checkpoints, fines, or delayed rescue dispatch.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: AVOID MISTAKES */}
          <article id="avoid-mistakes" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Common TIMS Card Mistakes Trekkers Should Avoid
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Incomplete Paperwork:</strong> Arriving at the office without photocopy documents or printed passport photos will delay your application.</li>
                <li><strong>Permit Confusion:</strong> Assuming the TIMS card replaces area-specific conservation permits. Double-check your permit stack.</li>
                <li><strong>Applying Too Late:</strong> Leaving application queues until the morning of your trek departure. Apply at least one day prior.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: RECENT UPDATES */}
          <article id="recent-updates" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Recent TIMS Permit Rules and Policy Updates
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Current Trekking Permit Regulations:</strong> The TIMS card remains mandatory for all major routes. Under guidelines introduced in 2023, foreign trekkers on selected routes are required to hire a licensed guide.
              </p>
              <p>
                <strong>Check Rules Before Departure:</strong> Permit regulations and guide requirements can shift between seasons. Verify requirements with a registered local operator or the Nepal Tourism Board in the months leading up to your trip.
              </p>
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About the TIMS Card
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "What is a TIMS card in Nepal?",
                  a: "A TIMS card — Trekkers' Information Management System card — is a mandatory permit that registers trekkers in a national safety database before they begin trekking in Nepal. It records your identity, planned route, and emergency contact information, which rescue coordinators use during missing person searches and emergency evacuations."
                },
                {
                  q: "Is TIMS card mandatory for trekking in Nepal?",
                  a: "Yes. The TIMS card is required for trekking on all major routes in Nepal, including the Annapurna, Everest, and Langtang regions. Trekkers found without a valid TIMS card at trail checkpoints can be turned back and required to return to a permit office before continuing."
                },
                {
                  q: "How much does a TIMS card cost?",
                  a: "Foreign (non-SAARC) trekkers pay NPR 2,000 (approximately USD 15) per person. SAARC national trekkers pay NPR 1,000 (approximately USD 8) per person. Fees are subject to change by the Nepal Tourism Board and TAAN."
                },
                {
                  q: "Can foreigners apply for a TIMS card independently?",
                  a: "Yes. International trekkers can apply directly at the TAAN or Nepal Tourism Board offices in Kathmandu or Pokhara. You will need your passport, a passport photocopy, valid Nepal visa, two passport-sized photographs, and your planned trekking route details."
                },
                {
                  q: "Where can I get a TIMS card in Kathmandu?",
                  a: "In Kathmandu, TIMS cards are available at the Nepal Tourism Board office in Bhrikuti Mandap, Pradarshani Marg, and at the TAAN office in Maligaon. Both offices process applications during standard government working hours."
                },
                {
                  q: "Can I get a TIMS card in Pokhara?",
                  a: "Yes. Trekkers departing from Pokhara can obtain TIMS cards at the local TAAN office in Pokhara's tourist district. This is convenient for trekkers heading directly to Annapurna region routes including Poon Hill, the Annapurna Circuit, and the Khopra Ridge Trek."
                },
                {
                  q: "Do I need both a TIMS card and an ACAP permit?",
                  a: "Yes — if you are trekking in the Annapurna Conservation Area. The TIMS card and ACAP permit serve different purposes and are verified separately at trail checkpoints. The TIMS card registers you in the national trekker safety database; the ACAP permit authorizes your entry into the protected conservation zone."
                },
                {
                  q: "How long does TIMS card approval take?",
                  a: "In most cases, TIMS cards are issued on the same day. With all correct documents, the process typically takes between 30 minutes and 2 hours at the permit office. During peak trekking season (October–November and March–May), queue times may be longer. Trekking agencies can arrange permits in advance, eliminating office wait times entirely."
                },
                {
                  q: "Is TIMS card required for the Everest Base Camp Trek?",
                  a: "Yes. The Everest Base Camp Trek requires a TIMS card along with a Sagarmatha National Park entry permit. Both permits are verified at Lukla and at checkpoints along the Khumbu trail. Neither permit substitutes for the other."
                },
                {
                  q: "Can a trekking agency arrange my TIMS permit for me?",
                  a: "Yes. Any licensed trekking operator registered with TAAN can arrange TIMS card registration on your behalf. When you book a guided trek, your agency collects your passport details and photographs in advance and processes the permit before your arrival or upon check-in — saving you time at permit offices."
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
              The TIMS card is one of the most important permits a trekker needs before setting foot on Nepal&apos;s trails. It is not a bureaucratic obstacle — it is a safety system that connects your trail presence to an emergency response network covering some of the world&apos;s most challenging mountain terrain.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              Arrive with the right documents, apply at least one day before your trek, and carry your permit at every checkpoint. This simple preparation prevents permit-related issues and ensures your safety database logs are complete.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Planning a Trek in Nepal? Let Us Handle the Permits.
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Our local team at KhopraRidgeTrek.com arranges TIMS cards, ACAP permits, and all required documentation for trekkers joining our guided packages in the Annapurna Conservation Area. Licensed under Nepal Tourism Operator License #8928-091, we have been processing permits for trekkers from across the world — and we can have yours ready before you land.
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
                This TIMS database guide is compiled seasonally in coordination with the Trekking Agencies&apos; Association of Nepal (TAAN). Licensed Nepal Tourism Operator EMD Treks #8928-091. Pokhara &amp; Swanta, Nepal. Email: <a href="mailto:info@khopraridgetrek.com" className="text-emerald-700 font-semibold hover:underline">info@khopraridgetrek.com</a>.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
