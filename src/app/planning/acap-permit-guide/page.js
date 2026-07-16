import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/planning/acap-permit-guide",
  },
  title: "ACAP Permit Guide (2026 Rules): Fees, Application Process & Annapurna Trek Requirements",
  description: "Planning an Annapurna trek in 2026? Our complete ACAP permit guide covers updated fees, required documents, permit offices in Kathmandu and Pokhara, online vs counter application, and which treks need the permit. Built by local trekking operators.",
};

export default function Page() {
  const permitRequirements = [
    { label: "Permit Name", value: "Annapurna Conservation Area Project (ACAP) Permit" },
    { label: "Foreigner Fee", value: "NPR 3,000 (~$23 USD) per person" },
    { label: "SAARC National Fee", value: "NPR 1,000 (~$8 USD) per person" },
    { label: "Documents Needed", value: "Copy of passport, 2 passport-sized photos, cash in NPR" },
    { label: "Validity", value: "Single entry, valid for the duration of the trek" }
  ];

  const comparisonTable = [
    { category: "Foreign nationals", fee: "NPR 3,000", usd: "~USD 23" },
    { category: "SAARC nationals", fee: "NPR 1,000", usd: "~USD 8" },
    { category: "Nepali citizens", fee: "Exempt", usd: "—" },
    { category: "Children under 10", fee: "Generally exempt", usd: "—" }
  ];

  const onlineVsCounter = [
    { factor: "Convenience", online: "Higher for initial registration", counter: "Direct, all-in-one visit" },
    { factor: "Document submission", online: "Physical submission still usually required", counter: "In-person at permit office" },
    { factor: "Processing time", online: "Varies", counter: "Same day, 30–60 minutes" },
    { factor: "Availability", online: "Partial — check current status", counter: "Always available" }
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
            <span className="text-emerald-400">ACAP Guide</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Environmental Permits &amp; Checkpoints
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            ACAP Permit Guide (2026 Rules)
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Fees, application process, and Annapurna trek requirements. Last Updated: January 2026 | Verified by Licensed Local Trekking Guides, Pokhara, Nepal.
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
              <a href="#quick-reference" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Quick Reference Summary
              </a>
              <a href="#what-is-acap" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                What is the ACAP Permit?
              </a>
              <a href="#why-required" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why is it Required?
              </a>
              <a href="#permit-fees" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                ACAP Fees &amp; Payments
              </a>
              <a href="#who-needs" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Who Needs a Permit?
              </a>
              <a href="#how-to-get" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                How to Apply
              </a>
              <a href="#where-buy" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Permit Office Locations
              </a>
              <a href="#apply-online" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Online vs Counter Process
              </a>
              <a href="#which-treks" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Treks Requiring Permits
              </a>
              <a href="#checkpoints" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Key Checkpoint Locations
              </a>
              <a href="#acap-vs-tims" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                ACAP vs TIMS Card
              </a>
              <a href="#validity-rules" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Validity &amp; Expiry Rules
              </a>
              <a href="#trekking-without" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Fines &amp; Penalties
              </a>
              <a href="#mistakes" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Common Pitfalls
              </a>
              <a href="#agency-support" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Agency Service Booking
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
                Inquire Guided Packages
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              ACAP Permit Guide (2026 Rules): Complete Annapurna Trek Permit Guide
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                If you are planning to trek anywhere in the Annapurna region of Nepal, you need an ACAP permit before you set foot on the trail. This is not optional — it is a legal requirement enforced at multiple checkpoints throughout the conservation area.
              </p>
              <p>
                The ACAP permit (Annapurna Conservation Area Permit) is your official authorization to enter and trek within the Annapurna Conservation Area, the largest protected area in Nepal. Whether you are doing the Annapurna Circuit, heading to Annapurna Base Camp, or trekking the quieter Khopra Ridge route, this permit is the first piece of paperwork you need to sort out.
              </p>
              <p>
                This guide covers everything you need to know for 2026: updated fees, required documents, where to buy the permit, how the application works, which treks need it, and what happens if you show up without one.
              </p>
            </div>
          </article>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 rounded-2xl border border-stone-200 bg-white p-6 sm:grid-cols-4 shadow-sm">
            {permitRequirements.map((stat, i) => (
              <div key={i} className="first:col-span-2">
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{stat.label}</span>
                <p className="mt-1 text-sm font-bold text-stone-900 leading-snug">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* SECTION: QUICK REFERENCE */}
          <article id="quick-reference" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              ACAP Permit Quick Reference Summary
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Permit Name:</strong> Annapurna Conservation Area Permit (ACAP)</li>
                <li><strong>Managed By:</strong> National Trust for Nature Conservation (NTNC)</li>
                <li><strong>Foreigner Fee:</strong> NPR 3,000 (~USD 23) per person</li>
                <li><strong>SAARC National Fee:</strong> NPR 1,000 (~USD 8) per person</li>
                <li><strong>Documents Required:</strong> Passport copy, 2 passport-sized photos, cash in NPR</li>
                <li><strong>Validity:</strong> Single entry, valid for the duration of the trek</li>
                <li><strong>Where to Buy:</strong> Nepal Tourism Board offices — Kathmandu or Pokhara</li>
                <li><strong>Online Option:</strong> Partial pre-registration is available, but physical checkout is required.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: WHAT IS ACAP */}
          <article id="what-is-acap" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What Is the ACAP Permit?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The ACAP permit is the entry authorization required to trek inside the Annapurna Conservation Area (ACA) in central Nepal. It is one of the two most commonly required trekking permits in the Annapurna region.
              </p>
              <p>
                <strong>ACAP Stand For:</strong> ACAP stands for Annapurna Conservation Area Project — the conservation initiative that manages and protects the entire Annapurna region. The full permit name is the Annapurna Conservation Area Permit, often shortened simply to ACAP permit.
              </p>
              <p>
                The Annapurna Conservation Area spans 7,629 square kilometers of mountain terrain, including forests, rivers, glaciers, and high-altitude grasslands across the Gandaki Province of Nepal. It was established in 1986 and remains the largest protected area in the country.
              </p>
              <p>
                <strong>Who Manages the ACAP Permit System?</strong> The ACAP permit is managed by the National Trust for Nature Conservation (NTNC), a government-affiliated autonomous organization responsible for nature conservation in Nepal. The Nepal Tourism Board handles permit distribution at its offices in Kathmandu and Pokhara. Together, NTNC and Nepal Tourism Board ensure that every trekker entering the conservation area is registered, and that permit revenues are channeled back into the protection of the region.
              </p>
              <p>
                <strong>Which Areas Does the Permit Cover?</strong> Your ACAP permit gives you legal access to the entire Annapurna Conservation Area. This covers all the major trekking routes that fall within the ACA boundary, including:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
                <li>Annapurna Circuit Trek</li>
                <li>Annapurna Base Camp Trek (Annapurna Sanctuary)</li>
                <li>Mardi Himal Trek</li>
                <li>Ghorepani Poon Hill Trek</li>
                <li>Khopra Ridge Trek</li>
                <li>Mohare Danda Trek</li>
              </ul>
            </div>
          </article>

          {/* SECTION: WHY REQUIRED */}
          <article id="why-required" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Is an ACAP Permit Required for Trekking?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The ACAP permit exists for reasons that go well beyond bureaucracy. The fees collected directly fund the conservation, safety infrastructure, and community systems that make responsible trekking possible in this region.
              </p>
              <p>
                <strong>Environmental Conservation Funding:</strong> The Annapurna Conservation Area receives several hundred thousand trekkers annually. Without active management, that kind of foot traffic would cause serious environmental degradation. Permit revenues fund trail maintenance, forest conservation efforts, waste management programs, and the restoration of high-altitude ecosystems.
              </p>
              <p>
                <strong>Trekker Registration and Safety Monitoring:</strong> Every ACAP checkpoint along the trail records your permit number, name, and nationality. This creates a live tracking system that conservation area administrators and rescue teams can use if a trekker goes missing or requires emergency assistance in a remote area.
              </p>
              <p>
                <strong>Local Community Development:</strong> A meaningful share of ACAP permit revenue is allocated directly to local community development projects within the conservation area. This includes funding for mountain village schools, primary health clinics, infrastructure improvements, and community training programs.
              </p>
            </div>
          </article>

          {/* SECTION: PERMIT FEES */}
          <article id="permit-fees" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              ACAP Permit Fees in 2026
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Understanding the fee structure before you arrive avoids confusion at the permit office. Fees are charged per person, not per group, and must be paid in Nepalese Rupees (NPR).
              </p>

              {/* TABLE: Permit Fees */}
              <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="px-6 py-4">Traveler Category</th>
                      <th className="px-6 py-4">Fee (NPR)</th>
                      <th className="px-6 py-4">Approximate USD</th>
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

              <p>
                <strong>Do Children Need an ACAP Permit?</strong> Children under the age of 10 are generally not required to obtain an ACAP permit. Children aged 10 and above are typically subject to the same permit fee as adults, depending on their nationality.
              </p>
              <p>
                <strong>Payment Note:</strong> Fees must be paid in Nepalese Rupees (NPR) cash at the permit office counter. Foreign currency is not accepted. Make sure to withdraw NPR from an ATM in Kathmandu or Pokhara before visiting the permit office.
              </p>
            </div>
          </article>

          {/* SECTION: WHO NEEDS */}
          <article id="who-needs" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Who Needs an ACAP Permit in Nepal?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Any person — regardless of age, nationality, or trekking style — who enters the Annapurna Conservation Area is legally required to hold a valid ACAP permit. There are no exemptions based on trek length or purpose.
              </p>
              <p>
                <strong>Independent Trekkers:</strong> If you are trekking without a guide or as part of a self-organized trip, obtaining your ACAP permit is entirely your responsibility. You must visit the Nepal Tourism Board permit office in Kathmandu or Pokhara and complete the application yourself before your trek begins.
              </p>
              <p>
                <strong>Guided Trek Participants:</strong> If you have booked a trek through a registered trekking operator, your agency will typically arrange the ACAP permit as part of your package.
              </p>
            </div>
          </article>

          {/* SECTION: HOW TO GET */}
          <article id="how-to-get" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How to Get an ACAP Permit in Nepal
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The ACAP permit application process is straightforward when you know what to bring and where to go. Most travelers complete the process within 30 to 60 minutes at the permit office.
              </p>
              <p>
                <strong>Step-by-Step ACAP Permit Application Process:</strong>
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-stone-600">
                <li><strong>Prepare your documents:</strong> Gather your passport copy (data page), two passport-sized photographs, and your Nepal visa copy.</li>
                <li><strong>Withdraw NPR cash:</strong> Go to an ATM and withdraw the required fee amount in Nepalese Rupees cash.</li>
                <li><strong>Visit the Nepal Tourism Board permit office:</strong> Go to either the Kathmandu or Pokhara office during working hours.</li>
                <li><strong>Complete the form:</strong> Fill in your personal details, trekking route, and entry date.</li>
                <li><strong>Submit and pay:</strong> Hand your completed form, passport copy, photos, and NPR cash to the counter staff.</li>
                <li><strong>Receive your permit:</strong> Permits are typically issued on the same day, often within 30 minutes of submission.</li>
                <li><strong>Store safely:</strong> Keep it in a waterproof document pouch. You will need to show it at multiple checkpoints during your trek.</li>
              </ol>
            </div>
          </article>

          {/* SECTION: WHERE BUY */}
          <article id="where-buy" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Where Can You Buy an ACAP Permit?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                ACAP permits are issued by the Nepal Tourism Board at two main locations. You cannot purchase a valid permit at trailheads, guesthouses, or from private vendors.
              </p>
              <p>
                <strong>ACAP Permit Office in Kathmandu:</strong> Nepal Tourism Board Office, Bhrikutimandap, Kathmandu, Nepal. (Near the Tourist Service Center, accessible from Thamel).
              </p>
              <p>
                <strong>ACAP Permit Office in Pokhara:</strong> Nepal Tourism Board Office, Damside (Pardi), Pokhara, Nepal. (Near Phewa Lake waterfront area). We recommend this office for trekkers starting Annapurna-area treks from Pokhara.
              </p>
              <p>
                <strong>Permit Office Opening Hours:</strong> Both permit offices operate Sunday to Friday from 9:00 AM to 5:00 PM (Closed on Saturdays and Nepali public holidays).
              </p>
            </div>
          </article>

          {/* SECTION: APPLY ONLINE */}
          <article id="apply-online" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Can You Apply for an ACAP Permit Online?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                As of 2026, partial online functionality exists through the Nepal Tourism Board&apos;s digital portal, but end-to-end paperless processing is not fully operational. Physical checkout and printing are still required at NTB offices in most cases.
              </p>

              {/* TABLE: Online vs Counter */}
              <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="px-6 py-4">Factor</th>
                      <th className="px-6 py-4">Online Process</th>
                      <th className="px-6 py-4">Counter Application</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    {onlineVsCounter.map((item, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50">
                        <td className="px-6 py-4 font-bold text-stone-900">{item.factor}</td>
                        <td className="px-6 py-4 text-stone-600">{item.online}</td>
                        <td className="px-6 py-4 font-semibold text-emerald-600">{item.counter}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          {/* SECTION: WHICH TREKS */}
          <article id="which-treks" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Which Treks Require an ACAP Permit?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Any trekking route that passes through the Annapurna Conservation Area requires a valid ACAP permit:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Annapurna Circuit Trek:</strong> Enforced at checkpoints throughout the 12 to 21-day route.</li>
                <li><strong>Annapurna Base Camp Trek:</strong> Enforced at Ghandruk and Chhomrong checkpoints before entering the Sanctuary.</li>
                <li><strong>Mardi Himal Trek:</strong> Required for the ridge ascent.</li>
                <li><strong>Khopra Ridge Trek:</strong> Mandatory without exception. Runs through Ghorepani, Swanta, and Khayer Lake (4,500m). We manage this as a community-owned eco-trek and arrange permits as part of all package itineraries.</li>
                <li><strong>Poon Hill Trek:</strong> Enforced at Birethanti checkpoint before beginning the ascent toward Ghorepani.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: CHECKPOINTS */}
          <article id="checkpoints" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              ACAP Permit Checkpoints on Annapurna Trails
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Your permit will be verified and registered at several checking stations along the trail to ensure trekker safety:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Birethanti Checkpost (Trail Entry):</strong> The first place your permit is checked and registered.</li>
                <li><strong>Ghandruk Verification Checkpoint:</strong> Located in Ghandruk village, a major route junction.</li>
                <li><strong>Ghorepani Exit Checkpoint:</strong> Serves as the checkpoint for Poon Hill and Khopra Ridge routes.</li>
              </ul>
              <p>
                <strong>Carry Your Permit at All Times:</strong> Keep your permit in a waterproof pouch carried on your person, not buried deep in your backpack, to prevent delays at checkpoints.
              </p>
            </div>
          </article>

          {/* SECTION: ACAP VS TIMS */}
          <article id="acap-vs-tims" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              ACAP Permit vs TIMS Card in 2026
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The ACAP permit is a conservation area entry permit issued by the NTNC. The TIMS card (Trekkers&apos; Information Management System card) was historically a separate identification and tracking card.
              </p>
              <p>
                <strong>Important 2026 Update:</strong> Under recent government rules consolidating trekking permits, the ACAP permit functions as the primary registration document for most Annapurna routes, and a separate TIMS card is often no longer required for group-guided packages. Independent trekkers should confirm current dual-permit rules for their specific route with the Nepal Tourism Board or their operator before departure.
              </p>
            </div>
          </article>

          {/* SECTION: VALIDITY RULES */}
          <article id="validity-rules" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Permit Validity, Renewal, and Important Rules
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Validity:</strong> The ACAP permit is a single-entry permit valid for the duration of your trek within the conservation area. If you exit the conservation area and wish to re-enter later, a new permit must be purchased.
              </p>
              <p>
                <strong>Non-Transferable:</strong> Permits are issued in your name and tied to your passport details. Using another person&apos;s permit is a serious violation and will result in confiscation.
              </p>
            </div>
          </article>

          {/* SECTION: TREKKING WITHOUT */}
          <article id="trekking-without" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What Happens If You Trek Without an ACAP Permit?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Trekking without a valid permit is a significant mistake. If you arrive at checkpoints without one, you will be turned back to the nearest permit office, or forced to pay a double fee penalty. There is no financial benefit to attempting the trek without a valid permit.
              </p>
            </div>
          </article>

          {/* SECTION: MISTAKES */}
          <article id="mistakes" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Common ACAP Permit Mistakes Trekkers Make
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Forgetting Passport Copies:</strong> Bring printed photocopies of your passport data page and visa. NTB offices do not have walk-in photocopiers.</li>
                <li><strong>Carrying Only Foreign Currency:</strong> The permit counter only accepts Nepalese Rupees (NPR) cash. Exchanging or withdrawing NPR before arrival is essential.</li>
                <li><strong>Losing the Permit:</strong> Keep your permit in a waterproof sleeve to prevent damage from rain or river crossings.</li>
                <li><strong>Expecting Trailhead Purchase:</strong> Permits cannot be purchased at trailheads. They must be obtained in Kathmandu or Pokhara.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: AGENCY SUPPORT */}
          <article id="agency-support" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Can Trekking Agencies Arrange an ACAP Permit for You?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Guided Operators:</strong> Registered operators handle ACAP permit and TIMS registration logistics before you depart. This is highly recommended for first-time visitors or anyone with limited time.
              </p>
              <p>
                We arrange all permit logistics as part of our Annapurna packages, ensuring your paperwork is cleared in Pokhara before departure.
              </p>
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About ACAP Permits
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Is the ACAP permit mandatory for Annapurna trekking?",
                  a: "Yes. The ACAP permit is legally required for all trekkers entering the Annapurna Conservation Area, regardless of nationality, trek length, or whether you are trekking independently or with a guide."
                },
                {
                  q: "How much does the ACAP permit cost in 2026?",
                  a: "The ACAP permit costs NPR 3,000 (approximately USD 23) for foreign nationals and NPR 1,000 (approximately USD 8) for citizens of SAARC member countries. Nepali citizens are exempt. Fees must be paid in Nepalese Rupees cash."
                },
                {
                  q: "Can I buy an ACAP permit in Pokhara?",
                  a: "Yes. The Nepal Tourism Board office in Damside (Pardi), Pokhara, issues ACAP permits and is the most convenient option for trekkers starting Annapurna-area treks. The office is open Sunday to Friday, 9:00 AM to 5:00 PM."
                },
                {
                  q: "Can I apply for an ACAP permit online?",
                  a: "Partial online functionality exists as of 2026, but end-to-end online permit issuance is not yet fully operational. Most trekkers should plan for a physical visit to the permit office."
                },
                {
                  q: "Do children need an ACAP permit?",
                  a: "Children under 10 years of age are generally exempt from the ACAP permit requirement. Children aged 10 and above are subject to the standard fee based on their nationality."
                },
                {
                  q: "Is the TIMS card still required in 2026?",
                  a: "The TIMS card requirement has been restructured. In most cases, the ACAP permit serves as sufficient documentation in the Annapurna region. Confirm current dual-permit requirements with your operator before departure."
                },
                {
                  q: "Which Annapurna treks require an ACAP permit?",
                  a: "All major Annapurna region treks require an ACAP permit, including the Annapurna Circuit Trek, Annapurna Base Camp Trek, Mardi Himal Trek, Khopra Ridge Trek, and Ghorepani Poon Hill Trek."
                },
                {
                  q: "Can a trekking agency arrange an ACAP permit for me?",
                  a: "Yes. Licensed Nepal trekking operators can arrange your ACAP permit as part of your trekking package, which removes the administrative burden completely."
                },
                {
                  q: "How long is the ACAP permit valid?",
                  a: "The ACAP permit is a single-entry permit valid for the full duration of your trek within the Annapurna Conservation Area. If you leave the conservation area and wish to re-enter, a new permit is required."
                },
                {
                  q: "What happens if I trek without an ACAP permit?",
                  a: "Trekking without a valid ACAP permit can result in being turned back at checkpoints, paying penalty fees significantly higher than the original permit cost, or having fraudulent documents confiscated."
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
              The ACAP permit is a straightforward, affordable, and mandatory requirement for trekking in the Annapurna region of Nepal. For 2026, the fee remains NPR 3,000 for foreign nationals and NPR 1,000 for SAARC nationals — some of the most reasonable protected area entry fees of any major trekking destination in the world.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              Obtain your permit before the trek begins, carry it in a waterproof holder, and present it at every checkpoint along the trail. The Annapurna Conservation Area is one of the most extraordinary trekking environments in the world, and this permit is a practical step that directly funds its protection.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Planning an Annapurna Trek? We Can Handle the Permit Logistics for You.
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                If you are organizing an Annapurna trek and want to skip the permit paperwork entirely, we manage ACAP permits, TIMS registration, guide arrangements, community lodge bookings, and all trekking logistics for every trip we operate from Pokhara.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Inquire About Our Guided Annapurna Treks &rarr;
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
                This permit information is compiled in compliance with the National Trust for Nature Conservation (NTNC) 2026 regulations. Licensed Nepal Tourism Operator EMD Treks #8928-091. Pokhara &amp; Swanta, Nepal. Email: <a href="mailto:info@khopraridgetrek.com" className="text-emerald-700 font-semibold hover:underline">info@khopraridgetrek.com</a>.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
