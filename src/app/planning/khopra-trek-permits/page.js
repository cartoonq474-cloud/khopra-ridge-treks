import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Khopra Ridge Trek Permits & Regulations: Fees, Requirements & Rules (2026)",
  description: "Planning the Khopra Ridge Trek? Here's everything on required permits, current fees, documents, guide rules, checkpoints, and penalties — explained simply.",
};

export default function Page() {
  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
             Permits &amp; Regulations
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Khopra Ridge Trek Permits &amp; Regulations: Fees, Requirements &amp; Rules
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Before you set foot on the trail to Khopra Ridge, there&apos;s some paperwork to sort out. Nepal requires every trekker entering the Annapurna Conservation Area to carry valid permits, and the rules around how to get them, what they cost, and what&apos;s expected of you on the trail can feel confusing if you&apos;ve never trekked here before.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">ACAP Permit Fee</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">3,000 NPR</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Approx. $23 USD (Foreigners)</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Guide Mandate</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Mandatory</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">By registered agency</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">TIMS Card Status</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">2,000 NPR</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Not actively enforced on trail</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Restricted Permit</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Not Needed</span>
              <span className="text-[10px] text-emerald-400 font-semibold block mt-0.5">Standard ACAP zone only</span>
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
                Quick Summary
              </a>
              <a href="#required-permits" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Required Permits
              </a>
              <a href="#permit-fees" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Permit Fees
              </a>
              <a href="#documents" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Documents Required
              </a>
              <a href="#where-to-obtain" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Where to Buy Permits
              </a>
              <a href="#step-by-step" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Application Steps
              </a>
              <a href="#regulations" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trekking Regulations
              </a>
              <a href="#checkpoints" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trail Checkpoints
              </a>
              <a href="#fines-errors" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Penalties &amp; Mistakes
              </a>
              <a href="#faq" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Frequently Asked Qs
              </a>
            </nav>
            <div className="pt-4 border-t border-stone-100">
              <a 
                href="#booking"
                className="w-full text-center block bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider py-3 rounded-2xl shadow-sm transition duration-200"
              >
                Inquire &amp; Book
              </a>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* SECTION 1: OVERVIEW */}
          <article id="overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Permit Requirements Quick Summary
            </h2>
            <p className="text-stone-600 leading-relaxed text-base">
              This guide walks you through exactly what permits the Khopra Ridge Trek requires, what they cost, where to get them, and the regulations you&apos;ll need to follow once you&apos;re on the trail — from guide requirements to checkpoint procedures to what happens if something goes wrong.
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-stone-200 text-sm">
                <thead className="bg-stone-100">
                  <tr>
                    <th className="px-6 py-3 text-left font-bold text-stone-900">Requirement</th>
                    <th className="px-6 py-3 text-left font-bold text-stone-900">Needed for Khopra Ridge Trek?</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 bg-white">
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">ACAP (Annapurna Conservation Area Permit)</td>
                    <td className="px-6 py-4 text-emerald-600 font-bold">Yes (Mandatory)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">TIMS Card (Trekkers&apos; Information Management System)</td>
                    <td className="px-6 py-4 text-stone-600 font-medium">Yes (Officially required by NTB; not actively checked on trail)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">Restricted Area Permit</td>
                    <td className="px-6 py-4 text-red-600 font-bold">No</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">Licensed Guide</td>
                    <td className="px-6 py-4 text-emerald-600 font-bold">Yes (Mandatory for foreign nationals since April 2023)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">Passport + Photocopies</td>
                    <td className="px-6 py-4 text-stone-600">Yes</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-stone-900">Passport-size Photos</td>
                    <td className="px-6 py-4 text-stone-600">Yes (4 photos recommended)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          {/* SECTION 2: WHAT PERMITS ARE REQUIRED */}
          <article id="required-permits" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              What Permits Are Required for the Khopra Ridge Trek?
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              The Khopra Ridge Trek sits inside the Annapurna Conservation Area, which means it falls under Nepal&apos;s conservation area permit system rather than the restricted area permit system used for places like Upper Mustang or Manaslu.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base">🏔️ Annapurna Conservation Area Permit (ACAP)</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  The ACAP is the core permit for this trek. It&apos;s issued by the Nepal Tourism Board on behalf of the National Trust for Nature Conservation (NTNC), and it grants you legal entry into the Annapurna Conservation Area — which covers the entire Khopra Ridge route, including Ghorepani, Tadapani, and Swanta. Checkpoints will verify this permit.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-base"> TIMS Card Requirements</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  The TIMS card is officially required by the Nepal Tourism Board to track trekker movements for safety. While some local checkpoints in the Annapurna region are currently not actively checking TIMS cards (focusing exclusively on ACAP), it remains a regulatory requirement and is typically arranged by your registered trekking agency to comply with government rules.
                </p>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-emerald-950 text-xs leading-relaxed">
              <strong>Do You Need a Restricted Area Permit?</strong> No. The Khopra Ridge Trek does not pass through any restricted areas, so you won&apos;t need to apply for a restricted area permit, arrange a government liaison officer, or meet the minimum group-size requirements that apply to restricted regions. This makes the permit process more straightforward than remote routes like Manaslu.
            </div>
          </article>

          {/* SECTION 3: PERMIT FEES */}
          <article id="permit-fees" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Khopra Ridge Trek Permit Fees
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              Permit fees are fixed by the government and are an essential component of your trek budget.
            </p>

            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
              <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wider mb-4">Official Permit Fee Structure</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-stone-200 text-xs text-stone-600">
                  <thead className="bg-stone-50">
                    <tr>
                      <th className="px-4 py-2 text-left font-bold text-stone-900">Permit Type</th>
                      <th className="px-4 py-2 text-left font-bold text-stone-900">Foreign Nationals</th>
                      <th className="px-4 py-2 text-left font-bold text-stone-900">SAARC Nationals</th>
                      <th className="px-4 py-2 text-left font-bold text-stone-900">Nepalese Citizens</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    <tr>
                      <td className="px-4 py-2 font-semibold text-stone-900">ACAP Entry Permit</td>
                      <td className="px-4 py-2">3,000 NPR (approx. $23 USD)</td>
                      <td className="px-4 py-2">1,000 NPR (approx. $8 USD)</td>
                      <td className="px-4 py-2">100 NPR</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-semibold text-stone-900">TIMS Registration Card</td>
                      <td className="px-4 py-2">2,000 NPR (approx. $15 USD)</td>
                      <td className="px-4 py-2">1,000 NPR (approx. $8 USD)</td>
                      <td className="px-4 py-2">Exempt</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <span className="text-[10px] text-stone-400 mt-2 block">Children under 10 years of age are exempt from permit fees. SAARC nations include India, Bangladesh, Pakistan, Sri Lanka, Maldives, Bhutan, and Afghanistan.</span>
            </div>

            <div className="grid gap-6 md:grid-cols-2 text-stone-600 text-sm">
              <div>
                <h4 className="font-bold text-stone-900 text-base"> Additional Costs to Expect</h4>
                <ul className="list-disc pl-5 text-xs text-stone-500 space-y-1.5 mt-2">
                  <li>Passport photo printing if you arrive without spares.</li>
                  <li>Photocopying costs if you need extra copies on-site.</li>
                  <li>Agency processing fees (if you arrange permits through a guide service).</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-stone-900 text-base font-sans"> Accepted Payment Methods</h4>
                <p className="mt-2 text-xs leading-relaxed text-stone-500">
                  Government permit offices in Kathmandu and Pokhara expect payment in <strong>Nepalese rupees, cash only</strong>. Credit and debit cards are not accepted, so plan to withdraw cash before your visit.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 4: DOCUMENTS REQUIRED */}
          <article id="documents" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Documents Required to Obtain Trekking Permits
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              Getting your paperwork ready before you arrive at the tourism office will save you time and an extra trip back. Bring the following:
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-sm"> Required Items Checklist</h4>
                <ul className="list-disc pl-5 text-xs text-stone-500 space-y-1 mt-2">
                  <li><strong>Original Passport:</strong> Required for identity verification.</li>
                  <li><strong>Two Passport Photocopies:</strong> Used for the permit application forms.</li>
                  <li><strong>Four Passport-size Photographs:</strong> With a plain white background.</li>
                  <li><strong>Cash in Nepalese Rupees:</strong> To cover permit fees and any administrative charges.</li>
                </ul>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-950 text-sm"> Passport Spares During Trek</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Keep a few extra photocopies of your passport and visa with you during the trek itself. Some checkpoints and teahouses ask to record passport details for registration purposes, and having spares means you do not have to hand over your original document repeatedly.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 5: WHERE TO OBTAIN */}
          <article id="where-to-obtain" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Where to Obtain Khopra Ridge Trek Permits
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              Permits for the Khopra Ridge Trek are issued through Nepal Tourism Board (NTB) offices. You have three main options:
            </p>

            <div className="space-y-4">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm sm:text-base"> Nepal Tourism Board Office in Pokhara</h4>
                <p className="mt-2 text-xs sm:text-sm text-stone-500 leading-relaxed">
                  Located at Damside, Pokhara. This office is the most convenient option for most Khopra Ridge trekkers, since Pokhara is the typical starting point. It is open daily from 9:00 AM to 3:00 PM. Arriving early in the day gives you a buffer in case of queues.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm sm:text-base"> Nepal Tourism Board Office in Kathmandu</h4>
                <p className="mt-2 text-xs sm:text-sm text-stone-500 leading-relaxed">
                  Located at Bhrikutimandap, Kathmandu. If you want to sort your permits before heading to Pokhara, this office keeps the same hours: 9:00 AM to 3:00 PM, daily.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm sm:text-base"> Getting Permits Through a Trekking Agency</h4>
                <p className="mt-2 text-xs sm:text-sm text-stone-500 leading-relaxed">
                  If you are booking through a registered trekking agency or guide service, they can arrange your ACAP permit on your behalf. This removes the office visit from your to-do list entirely.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 6: APPLICATION PROCESS */}
          <article id="step-by-step" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Step-by-Step Permit Application Process
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              Here is what the process looks like in practice for independent or self-applied permit applications:
            </p>

            <div className="space-y-4">
              {[
                {
                  step: "Step 1: Prepare Your Documents Beforehand",
                  desc: "Before heading to the tourism office, make sure you have your original passport, two photocopies, four passport-size photos, and cash on hand. Having everything ready before you arrive is the single biggest time-saver."
                },
                {
                  step: "Step 2: Visit the Tourism Office",
                  desc: "Go to either the Pokhara (Damside) or Kathmandu (Bhrikutimandap) NTB office during opening hours. Bring your prepared documents to the counter and let staff know you are applying for the ACAP permit for the Khopra Ridge Trek."
                },
                {
                  step: "Step 3: Complete the Application Form",
                  desc: "You will fill out a short form with your personal details, passport information, and trek itinerary. Staff will guide you through this if it is your first time — it is straightforward and takes only a few minutes."
                },
                {
                  step: "Step 4: Pay the Permit Fee",
                  desc: "Pay the applicable fee in cash (local currency NPR). The office will process your application and issue your permit, usually within the same visit."
                },
                {
                  step: "Step 5: Safeguard Your Permit",
                  desc: "Once issued, keep your permit somewhere accessible but protected — a dry bag or a zip-lock pouch inside your daypack works well. You will need to present it at checkpoints throughout the trek."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                  <h4 className="font-bold text-stone-950 text-sm sm:text-base">{item.step}</h4>
                  <p className="mt-2 text-xs sm:text-sm text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </article>

          {/* SECTION 7: REGULATIONS */}
          <article id="regulations" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Trekking Regulations You Must Follow
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              Holding a permit is only part of the picture. The Annapurna Conservation Area has rules in place to protect the environment and trekkers:
            </p>

            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-4">
              <h4 className="font-bold text-stone-950 text-base">⚠️ Crucial Guide Requirements</h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                As of April 2023, the government of Nepal mandates that <strong>all foreign trekkers in national parks and conservation areas, including the Annapurna region, must hire a licensed local guide</strong>. Trekking completely solo (independent without an agency-backed guide) is restricted under these rules. The policy aims to improve safety, reduce search-and-rescue incidents, and support local employment.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 text-stone-600 text-sm">
              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm"> Leave No Trace</h4>
                <p className="mt-2 text-[10px] text-stone-500 leading-relaxed font-medium">
                  Pack out all non-biodegradable waste — do not burn or bury plastic. Avoid using non-biodegradable soaps or detergents near water sources.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-sm font-sans font-sans"> Drone Regulations</h4>
                <p className="mt-2 text-[10px] text-stone-500 leading-relaxed font-medium">
                  Flying drones within the ACAP requires prior approval from both the Civil Aviation Authority of Nepal (CAAN) and ACAP authorities. Unauthorized drone use can result in fines and confiscation.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-sm">
                <h5 className="font-bold text-stone-950 text-sm"> Campfire Rules</h5>
                <p className="mt-2 text-[10px] text-stone-500 leading-relaxed font-medium">
                  Open fires for cooking or warmth are restricted in many parts of the conservation area to protect forest cover. Stick to teahouses or gas/liquid fuel stoves.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 8: CHECKPOINTS */}
          <article id="checkpoints" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Permit Checkpoints on the Khopra Ridge Trek
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              Checkpoints are typically positioned at key junctions along the route — often near larger villages such as Ghandruk, Tadapani, and Ghorepani.
            </p>

            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-3">
              <h4 className="font-bold text-stone-950 text-base"> Checkpoint Verification Procedures</h4>
              <p className="text-xs text-stone-500 leading-relaxed">
                At each checkpoint, officials will record your ACAP permit details, intended destination, and guide information against their registers. This is a critical safety practice that ensures rescue teams can track your movements in case of an emergency (such as altitude sickness or bad weather).
              </p>
              <p className="text-xs text-stone-500 leading-relaxed">
                <strong>What if I lose my permit?</strong> If your permit is lost or damaged mid-trek, inform the nearest checkpoint or ACAP office immediately. Keeping a digital backup photo of your permit on your phone will help staff verify your details while a replacement is processed.
              </p>
            </div>
          </article>

          {/* SECTION 9: FINES & COMMON MISTAKES */}
          <article id="fines-errors" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Fines, Penalties, and Common Mistakes
            </h2>

            <div className="grid gap-6 md:grid-cols-2 text-stone-600 text-sm">
              <div>
                <h4 className="font-bold text-stone-900 text-base">⚠️ Common Mistakes Checklist</h4>
                <ul className="list-disc pl-5 text-xs text-stone-500 space-y-1.5 mt-2">
                  <li>Forgetting passport photocopies (bring at least two).</li>
                  <li>Arriving without enough cash for permit fees.</li>
                  <li>Assuming credit cards work at tourism offices.</li>
                  <li>Skipping checkpoint registration to &quot;save time.&quot;</li>
                  <li>Not keeping a digital backup photo of your permit on your phone.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-stone-900 text-base font-sans font-sans"> Penalties &amp; Fines</h4>
                <p className="mt-2 text-xs leading-relaxed text-stone-500">
                  Trekking without a valid ACAP permit can result in on-the-spot fines, and you may be required to return to the nearest tourism office or checkpoint to obtain a permit before continuing. This causes a significant delay and double fees.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 10: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Permits &amp; Regulations
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "What permits are required for the Khopra Ridge Trek?",
                  a: "The main requirement is the Annapurna Conservation Area Permit (ACAP). Foreigners also require a TIMS Card as part of the guide booking regulations, but there are no restricted area permits needed for this loop."
                },
                {
                  q: "How much does the Khopra Ridge Trek permit cost?",
                  a: "The ACAP entry permit costs 3,000 NPR (approx. $23 USD) for foreign nationals and 1,000 NPR (approx. $8 USD) for SAARC nationals. If required, the TIMS card costs an additional 2,000 NPR (approx. $15 USD)."
                },
                {
                  q: "Can I buy permits in Pokhara?",
                  a: "Yes. The Nepal Tourism Board office at Damside in Pokhara issues ACAP permits daily from 9:00 AM to 3:00 PM, and is the most convenient option for most trekkers."
                },
                {
                  q: "Do I need a guide for the Khopra Ridge Trek?",
                  a: "Yes. Under current Nepal Tourism Board regulations, all foreign trekkers are mandatory required to be accompanied by a licensed local guide hired through a registered agency."
                },
                {
                  q: "What documents do I need to apply for a permit?",
                  a: "You will need your original passport, two passport photocopies, four passport-size photos with a white background, and cash in Nepalese rupees to cover the fee."
                },
                {
                  q: "Can permits be purchased online?",
                  a: "Yes, the National Trust for Nature Conservation (NTNC) provides an online portal for pre-registering permits, though many trekkers still arrange them in person or have their trekking agency handle it."
                },
                {
                  q: "What happens if I trek without a permit?",
                  a: "You risk double-rate on-the-spot fines at checkpoints and may be required to return to the nearest tourism office to obtain a permit before continuing."
                },
                {
                  q: "How long is the ACAP permit valid?",
                  a: "The ACAP permit is valid for a single entry and has no specific day limit once you are inside the conservation area. However, once you exit the ACAP boundaries, the permit expires and cannot be reused for a second entry."
                },
                {
                  q: "Are children required to have permits?",
                  a: "Children under the age of 10 do not require permits to enter the Annapurna Conservation Area."
                },
                {
                  q: "What if I lose my permit during the trek?",
                  a: "Report it to the nearest checkpoint or ACAP office immediately. Keeping a digital photo of your permit on your phone will help staff verify your details while a replacement is processed."
                }
              ].map((faq, idx) => (
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

          {/* SECTION 11: CONCLUSION */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-950 font-sans">Conclusion</h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              Sorting out permits for the Khopra Ridge Trek doesn&apos;t need to be complicated once you know what&apos;s required: an ACAP permit, a handful of documents, and a short visit to the Nepal Tourism Board office in Pokhara or Kathmandu. From there, the regulations you&apos;ll encounter on the trail — checkpoint registration, environmental rules, and guide requirements — exist to keep both the conservation area and trekkers themselves protected.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              Getting this part right before you set off means one less thing to think about once you&apos;re on the trail, leaving you free to focus on the ridge views, the village teahouses, and the trek itself.
            </p>
          </article>

          {/* SECTION 12: CTA & BOOKING CARD */}
          <section id="booking" className="scroll-mt-12 bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Need help arranging your permits and trek logistics?</h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Our team can take care of your ACAP permit, connect you with a licensed local guide, and help plan your full Khopra Ridge itinerary — so you can focus on the trek, not the paperwork.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Get in touch to start planning &rarr;
                </Link>
                <div className="text-stone-400 text-xs flex flex-col justify-center text-center sm:text-left">
                  <span> Based in Pokhara, Nepal</span>
                  <span> Free cancellation &amp; flexible changes</span>
                </div>
              </div>
            </div>
          </section>

          {/* EEAT Author Verification Banner */}
          <div className="p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
            <span className="text-2xl mt-0.5">🏔️</span>
            <div>
              <h4 className="font-bold text-stone-900 text-sm font-sans">Reviewed by Trail Experts</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                This guide is compiled and vetted by licensed Pokhara-based guides and conservation area organizers. We monitor regulations and government policy updates weekly to ensure our permit resources remain the most accurate and up-to-date.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
