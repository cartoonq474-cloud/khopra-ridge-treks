import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/planning/permit-fees-explained",
  },
  title: "Permit Fees & Double-Fee Warnings for Nepal Trekking (2026 Complete Guide)",
  description: "Learn official Nepal trekking permit fees, ACAP and TIMS costs, SAARC discounts, and how to avoid expensive double-fee penalties at trail checkpoints before starting Khopra Ridge Trek.",
};

export default function Page() {
  const feeCards = [
    {
      item: "ACAP Permit (Foreigners)",
      cost: "NPR 3,000 (~$23 USD)",
      details: "Standard entry fee for foreign nationals. Must be obtained in Kathmandu or Pokhara before reaching the trailhead."
    },
    {
      item: "TIMS Card (Foreigners)",
      cost: "NPR 2,000 (~$15 USD)",
      details: "Mandatory tracking registration database card recording identity, route, and emergency contact details."
    },
    {
      item: "SAARC Nationals (ACAP)",
      cost: "NPR 1,000 (~$8 USD)",
      details: "Discounted entry fee for citizens of SAARC member countries (India, Bangladesh, Bhutan, Sri Lanka, Nepal neighbors)."
    },
    {
      item: "SAARC Nationals (TIMS)",
      cost: "NPR 1,000 (~$8 USD)",
      details: "Discounted tracking card registration for SAARC passport holders."
    },
    {
      item: "Trailhead Double-Fee Penalty",
      cost: "NPR 6,000 (~$46 USD)",
      details: "Charged if you arrive at Birethanti checkpoint without purchasing your ACAP permit in advance. A 100% surcharge penalty."
    }
  ];

  const comparisonTable = [
    { permit: "ACAP Permit", foreign: "NPR 3,000 (~USD 23)", saarc: "NPR 1,000 (~USD 8)" },
    { permit: "TIMS Card", foreign: "NPR 2,000 (~USD 15)", saarc: "NPR 1,000 (~USD 8)" },
    { permit: "Combined Total", foreign: "NPR 5,000 (~USD 38)", saarc: "NPR 2,000 (~USD 15)" }
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
            <span className="text-emerald-400">Permit Fees &amp; Warnings</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Nepal Government Permit Rules &amp; Penalties (2026)
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Permit Fees &amp; Double-Fee Warnings for Nepal Trekking
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Learn official Nepal trekking permit fees, ACAP and TIMS costs, SAARC discounts, and how to avoid expensive double-fee penalties at trail checkpoints before starting your trek.
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
              <a href="#why-mandatory" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why Permits Are Mandatory
              </a>
              <a href="#required-permits" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Required Permits on Khopra
              </a>
              <a href="#official-fees" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Official Fee Rates
              </a>
              <a href="#fee-table" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Permit Fee Table
              </a>
              <a href="#double-fee-warning" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Double-Fee Penalty Warning
              </a>
              <a href="#birethanti-warning" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Birethanti Checkpoint Risk
              </a>
              <a href="#where-to-buy" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Where To Buy Permits
              </a>
              <a href="#required-documents" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Required Documents
              </a>
              <a href="#avoid-problems" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                How To Avoid Problems
              </a>
              <a href="#guided-treks" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Guide Permit Logistics
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
              Permit Fees &amp; Double-Fee Warnings for Nepal Trekking
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Every year, trekkers arrive at Nepal&apos;s trail checkpoints confident that permits can be sorted out along the way. Most of them are wrong — and the financial penalty for that assumption is immediate.
              </p>
              <p>
                Trekking in the Annapurna region requires mandatory government permits that must be obtained before you reach the trailhead. If you arrive at a checkpoint without them, government rangers are legally authorized to charge you double the standard permit fee on the spot. No negotiation. No exceptions.
              </p>
              <p>
                This guide covers everything you need to know about trekking permit fees for Khopra Ridge Trek — including official costs for foreign nationals and SAARC travelers, the government&apos;s double-fee penalty system, where to buy your permits, and how to avoid the compliance mistakes that catch hundreds of trekkers off guard each year.
              </p>
            </div>
          </article>

          {/* Quick Fee Cards Grid */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-stone-955">Quick Fee Breakdown</h3>
            <div className="space-y-4">
              {feeCards.map((item, i) => (
                <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center">
                  <div className="sm:w-1/3">
                    <span className="text-sm font-extrabold text-stone-950 block">{item.item}</span>
                    <span className="text-xs font-bold text-emerald-600 mt-1 block">{item.cost}</span>
                  </div>
                  <div className="sm:w-2/3 text-xs text-stone-500 leading-relaxed">
                    {item.details}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION: WHY MANDATORY */}
          <article id="why-mandatory" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Trekking Permits Are Mandatory in Nepal
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Nepal does not allow unrestricted access to its trekking regions. The government regulates who enters protected areas, tracks how many trekkers move through each route, and collects fees that fund conservation, trail infrastructure, and local community development.
              </p>
              <p>
                This is not bureaucratic paperwork. It is a structured system that protects the ecological integrity of the Annapurna Conservation Area while giving the government accurate data on trekker safety and movement. Permits are a legal entry requirement, and enforcement at checkpoints is active.
              </p>
              <p>
                <strong>How Nepal Regulates Trekking Access:</strong> The Department of Tourism Nepal oversees trekking access through a permit-based entry system. For the Khopra Ridge Trek route, this means passing through checkpoints where officials inspect permits, record details, and flag any trekker who cannot produce valid documentation.
              </p>
              <p>
                <strong>Why Permit Fees Support Conservation:</strong> A portion of every ACAP permit fee goes directly toward managing and protecting the Annapurna Conservation Area. This includes trail maintenance, environmental monitoring, anti-poaching efforts, and the upkeep of rest stations along major trekking routes.
              </p>
              <p>
                <strong>Safety &amp; Tracking:</strong> Beyond conservation, trekking permits serve a safety function. The Nepal Tourism Board uses permit registration data to monitor active trekker numbers. In emergencies, registration records help authorities locate affected trekkers and coordinate rescue operations.
              </p>
            </div>
          </article>

          {/* SECTION: REQUIRED PERMITS */}
          <article id="required-permits" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Which Permits Are Required for Khopra Ridge Trek
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Khopra Ridge Trek passes through the Annapurna Conservation Area, one of Nepal&apos;s most protected natural regions. Entry into this area is regulated, and two separate permits are required before you start walking. Carrying one and not the other is still a compliance violation.
              </p>
              <ul className="list-disc pl-5 space-y-3 text-stone-600">
                <li>
                  <strong>ACAP Permit (Annapurna Conservation Area Permit):</strong> The official entry document issued by the National Trust for Nature Conservation (NTNC) / NTB allowing foreign and SAARC nationals to legally enter the Annapurna Conservation Area. Must be purchased before reaching the boundary. For more details, read our dedicated <Link href="/planning/acap-permit-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">ACAP Permit Guide</Link>.
                </li>
                <li>
                  <strong>TIMS Card (Trekkers&apos; Information Management System):</strong> A government-issued trekker registration card that records personal details, planned route, and emergency contact information in the national database. Read our dedicated <Link href="/planning/tims-card-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">TIMS Card Guide</Link> for details.
                </li>
              </ul>
              <p>
                <strong>Who Must Carry Trekking Permits in Nepal:</strong> All foreign nationals — regardless of nationality — must carry both the ACAP Permit and the TIMS Card. SAARC nationals (India, Bangladesh, Bhutan, Sri Lanka, Pakistan, Maldives, Afghanistan) are required to carry the same documents but pay a reduced rate.
              </p>
            </div>
          </article>

          {/* SECTION: OFFICIAL FEES */}
          <article id="official-fees" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Official Trekking Permit Fees for Foreigners and SAARC Travelers
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Permit fees in Nepal are set by the government and are non-negotiable:
              </p>
              <p>
                <strong>ACAP Permit Fee for International Trekkers:</strong> Foreign nationals pay <strong>NPR 3,000 (approximately USD 23)</strong> for the ACAP Permit. The permit is issued as a physical document with your photo and details. You must carry the original.
              </p>
              <p>
                <strong>TIMS Card Fee for International Trekkers:</strong> The TIMS Card costs <strong>NPR 2,000 (approximately USD 15)</strong> for foreign nationals. This is a flat registration fee covering entry into the trekker tracking database.
              </p>
              <p>
                <strong>Discounted Permit Fees for SAARC Nationals:</strong> Citizens of SAARC member countries pay a reduced rate: <strong>NPR 1,000 for ACAP</strong> and <strong>NPR 1,000 for TIMS</strong> — a combined saving of NPR 3,000 compared to the foreign national rate. A valid SAARC-country passport must be presented at the counter.
              </p>
            </div>
          </article>

          {/* SECTION: FEE TABLE */}
          <article id="fee-table" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Quick Permit Fee Comparison Table
            </h2>
            <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">Permit</th>
                    <th className="px-6 py-4">Foreign Nationals</th>
                    <th className="px-6 py-4">SAARC Nationals</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-600">
                  {comparisonTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/50">
                      <td className="px-6 py-4 font-bold text-stone-900">{row.permit}</td>
                      <td className="px-6 py-4 font-semibold text-stone-700">{row.foreign}</td>
                      <td className="px-6 py-4 font-semibold text-emerald-600">{row.saarc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-stone-500 italic">
              Note: USD conversions are approximate and subject to exchange rate fluctuations. Fees are set by the Nepal Tourism Board.
            </p>
          </article>

          {/* SECTION: DOUBLE FEE WARNING */}
          <article id="double-fee-warning" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Understanding Double-Fee Warnings and Penalty Charges
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                This is the section most permit guides leave out — and it is the one that costs trekkers the most money.
              </p>
              <p>
                Nepal&apos;s government has a formal penalty system for trekkers who attempt to purchase ACAP permits at trail checkpoints rather than at official permit offices in Kathmandu or Pokhara. The penalty is not a small surcharge. It is exactly double the standard fee, enforced by government rangers at the point of entry.
              </p>
              <p>
                <strong>What Is the Double Permit Fee Penalty?</strong> If you arrive at a trail checkpoint without a previously purchased ACAP Permit, you will be required to pay <strong>NPR 6,000 instead of the standard NPR 3,000</strong>. This 100% penalty charge is the government&apos;s enforcement mechanism for discouraging last-minute or on-route permit purchases.
              </p>
              <p>
                <strong>Why Trekkers Accidentally Pay Double Fees:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li>Relying on outdated information suggesting permits can be bought at checkpoints without penalty.</li>
                <li>Running out of time in Kathmandu or Pokhara and assuming checkpoints act as a convenient fallback.</li>
                <li>Receiving incorrect advice from informal drivers or guesthouses unfamiliar with active NTB regulations.</li>
              </ul>
              <p>
                <strong>Real Cost Example:</strong> A foreign couple arriving at Birethanti without ACAP permits will pay NPR 12,000 combined instead of NPR 6,000 — an unnecessary overpayment of NPR 6,000 (~USD 46) before taking their first steps on the trail.
              </p>
            </div>
          </article>

          {/* SECTION: BIRETHANTI WARNING */}
          <article id="birethanti-warning" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Birethanti Checkpoint Warning Every Trekker Should Know
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Birethanti is the first major permit inspection checkpoint on the Khopra Ridge Trek route. It sits at the start of the Annapurna trail system, shortly after the Nayapul trailhead, and it is where permit compliance is first formally verified.
              </p>
              <p>
                Every trekker — guided or independent — is required to stop at Birethanti checkpoint and present their ACAP Permit and TIMS Card for inspection. Rangers are stationed there specifically to enforce compliance.
              </p>
              <p>
                <strong>What Happens If You Arrive Without a Permit?</strong> If your permits are missing or incomplete when you reach Birethanti, rangers will require you to either:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-stone-600">
                <li>Pay the 100% double-fee penalty on the spot (NPR 6,000) to receive an on-site permit.</li>
                <li>Turn back to Pokhara to obtain the proper permit at an official office (wasting a full day of travel and transport costs).</li>
              </ol>
            </div>
          </article>

          {/* SECTION: WHERE TO BUY */}
          <article id="where-to-buy" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Where To Buy Trekking Permits Before Starting the Trek
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Trekking permits for Khopra Ridge Trek must be purchased at official Nepal Tourism Board offices before you begin your journey:
              </p>
              <ul className="list-disc pl-5 space-y-3 text-stone-600">
                <li>
                  <strong>Buying Permits in Kathmandu:</strong> The Nepal Tourism Board office in Bhrikutimandip, Kathmandu, handles both ACAP Permit and TIMS Card registration. Allow a few hours for processing during peak seasons.
                </li>
                <li>
                  <strong>Buying Permits in Pokhara:</strong> For trekkers traveling directly to Pokhara, permits can be obtained at the NTB office in Damside, Pokhara. We recommend visiting in the morning on the day before your trek begins.
                </li>
              </ul>
              <p>
                Do not rely on informal intermediaries unless they are arranging permits on your behalf through the official system with valid NTB stamps and photos attached.
              </p>
            </div>
          </article>

          {/* SECTION: REQUIRED DOCUMENTS */}
          <article id="required-documents" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Documents Required for Trekking Permit Registration
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Bring the following to the permit office counter:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li>Original passport (valid for the duration of your trek).</li>
                <li>Nepal tourist visa (valid stamp in passport).</li>
                <li>Passport-sized photographs (minimum two printed copies).</li>
                <li>SAARC travelers: Proof of SAARC nationality (passport) for discounted rates.</li>
                <li>Cash in NPR for counter payments.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: AVOID PROBLEMS */}
          <article id="avoid-problems" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How To Avoid Trekking Permit Compliance Problems
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ol className="list-decimal pl-5 space-y-2 text-stone-600">
                <li><strong>Purchase All Permits Before Leaving the City:</strong> Make permit collection a fixed task on your itinerary in Kathmandu or Pokhara the day before departure.</li>
                <li><strong>Carry Physical Printed Originals:</strong> Keep original permit cards in a waterproof document sleeve in your daypack. Keep photocopies in your main luggage.</li>
                <li><strong>Verify Current Rules:</strong> Regulations and fees can change between seasons. Always verify with official sources or licensed operators.</li>
              </ol>
            </div>
          </article>

          {/* SECTION: GUIDED TREKS */}
          <article id="guided-treks" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Many Trekkers Let Local Guides Handle Permit Logistics
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Permit logistics are manageable if you plan carefully. But trekkers who choose guided treks find the permit process handled entirely before they arrive at the trailhead — no office visits, no queues, no checkpoint surprises.
              </p>
              <p>
                When you book a guided Khopra Ridge Trek with us (EMD Treks, License #8928-091), our team obtains your ACAP Permit and TIMS Card at the official permit offices in Pokhara or Kathmandu, verifies all paperwork, and ensures full checkpoint compliance. You arrive at the trailhead ready to walk.
              </p>
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Permit Fees &amp; Double-Fee Penalties
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "How much does the ACAP permit cost in Nepal?",
                  a: "The ACAP Permit costs NPR 3,000 (approximately USD 23) for foreign nationals. SAARC nationals pay a reduced rate of NPR 1,000. The permit must be purchased at an official Nepal Tourism Board office in Kathmandu or Pokhara before entering the Annapurna Conservation Area."
                },
                {
                  q: "Is the TIMS Card mandatory for Khopra Ridge Trek?",
                  a: "Yes. The TIMS Card is mandatory for all trekkers on Khopra Ridge Trek. It costs NPR 2,000 for foreign nationals and NPR 1,000 for SAARC nationals. Both the TIMS Card and the ACAP Permit must be carried at all times during the trek."
                },
                {
                  q: "Can I buy trekking permits at Birethanti checkpoint?",
                  a: "Technically, rangers can process permits at Birethanti, but doing so triggers a 100% penalty charge. Instead of paying NPR 3,000 for an ACAP Permit, you will be charged NPR 6,000. Always purchase permits in Kathmandu or Pokhara to avoid this penalty."
                },
                {
                  q: "Why do trekkers pay double permit fees in Nepal?",
                  a: "The double fee penalty is a government enforcement mechanism applied when trekkers arrive at trail checkpoints without permits purchased in advance. The penalty equals 100% of the standard permit fee — NPR 6,000 instead of NPR 3,000 for the ACAP Permit."
                },
                {
                  q: "What happens if I trek without a permit in Nepal?",
                  a: "Trekking without a permit is a violation of Nepal government trekking regulations. At permit inspection checkpoints, rangers will either require you to pay the double-fee penalty on the spot or turn you back to obtain your permits from an official office."
                },
                {
                  q: "Do SAARC travelers pay lower trekking permit fees?",
                  a: "Yes. Citizens of SAARC member countries — India, Bangladesh, Bhutan, Sri Lanka, Pakistan, Maldives, and Afghanistan — pay NPR 1,000 for each permit (ACAP and TIMS), compared to NPR 3,000 and NPR 2,000 respectively for foreign nationals."
                },
                {
                  q: "Where can I buy trekking permits in Pokhara?",
                  a: "Trekking permits can be purchased at the Nepal Tourism Board office in Pokhara (Damside). The office handles both ACAP Permit and TIMS Card registration. We recommend visiting in the morning on the day before your trek begins."
                },
                {
                  q: "What documents are required for Nepal trekking permit registration?",
                  a: "You will need your original passport, a valid Nepal visa, and at least two passport-sized photographs. SAARC nationals should carry proof of nationality for the discounted rate."
                },
                {
                  q: "Can permit fees change without notice?",
                  a: "Permit fees are set by the Nepal government and can be revised periodically. Changes are not always announced far in advance. We recommend confirming current rates directly with the Nepal Tourism Board or a licensed trekking operator before your visit."
                },
                {
                  q: "Can a trekking agency arrange permits for me?",
                  a: "Yes. Licensed Nepal trekking operators can arrange both your ACAP Permit and TIMS Card as part of a guided trek booking. Our team handles permit registration directly through the official permit offices in Kathmandu and Pokhara."
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
              Nepal trekking permits are not optional, and the consequences of skipping them — or leaving them too late — are immediate and measurable. The double-fee penalty at Birethanti checkpoint is not a threat used to scare trekkers into compliance. It is a government enforcement mechanism that has cost hundreds of trekkers thousands of rupees that they simply did not need to spend.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              The process itself is straightforward: two permits, two offices, a handful of documents, and a few hours of your time in Kathmandu or Pokhara. Buy your ACAP Permit and TIMS Card before leaving the city to ensure a smooth, worry-free trek.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Ready to Trek Without the Paperwork Stress?
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Our local team manages all permit registration, checkpoint documentation, and trekking logistics for every guided Khopra Ridge Trek we operate. You arrive prepared. We handle the rest.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Inquire About Our Guided Khopra Trek &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Trek:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/planning/acap-permit-guide" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read the complete ACAP permit rules &amp; fee guide
                  </Link>
                  <Link href="/planning/tims-card-guide" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Check TIMS card rules, costs, &amp; registration offices
                  </Link>
                  <Link href="/planning/trekking-regulations-explained" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Review all official Nepal government trekking laws
                  </Link>
                  <Link href="/planning/hidden-costs-khopra-trek" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Discover unexpected daily expenses on the trail
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
                This permit fee briefing and checkpoint penalty advisory is maintained seasonally in coordination with NTB Kathmandu and NTB Pokhara counters. Licensed Nepal Tourism Operator EMD Treks #8928-091. Pokhara &amp; Swanta, Nepal. Email: <a href="mailto:info@khopraridgetrek.com" className="text-emerald-700 font-semibold hover:underline">info@khopraridgetrek.com</a>.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
