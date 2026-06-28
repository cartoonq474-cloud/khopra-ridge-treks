"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [openPolicy, setOpenPolicy] = useState(null);

  const policies = [
    {
      id: "cancel",
      title: "Cancellation & Refund Terms",
      content: "Reservations can be cancelled up to 30 days prior to departure for a full refund minus a 10% administrative fee. Cancellations made between 15 and 30 days prior to departure receive a 50% refund. No refunds are available for cancellations made less than 15 days before the trek starts, though dates can be deferred to a future season for a small re-registration fee."
    },
    {
      id: "weather",
      title: "Weather and Schedule Delays",
      content: "Flights between Kathmandu and Pokhara are subject to weather conditions. In the event of flight cancellations, we arrange private jeep road transport to Pokhara to keep the schedule on track. Any additional costs arising from weather delays or route deviations are details in our guides' packages."
    },
    {
      id: "insurance",
      title: "Mandatory Travel Insurance",
      content: "All trekkers must carry comprehensive travel insurance. Your policy must explicitly cover high-altitude trekking up to 5,000 meters and helicopter emergency evacuation. You must provide a copy of your insurance registry card to our head guide before departing Kathmandu."
    },
    {
      id: "medical",
      title: "Medical Evacuation Protocols",
      content: "In the event of severe Acute Mountain Sickness (AMS) or serious trail injuries, our guides are authorized to coordinate immediate helicopter evacuations to Pokhara or Kathmandu hospitals. The client's travel insurance company handles the cost guarantees directly with the helicopter service providers."
    }
  ];

  const handleToggle = (id) => {
    setOpenPolicy(openPolicy === id ? null : id);
  };

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Legal Disclosures</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Booking &amp; Cancellation Policies
          </h1>
          <p className="mt-6 text-lg text-stone-700 leading-relaxed font-medium">Trek with peace of mind. Read our terms regarding cancellations, weather delays, mandatory altitude insurance, and helicopter emergency evacuation protocols.
          </p>
        </div>

        {/* Accordion Policies */}
        <div className="mt-12 space-y-4">
          <h2 className="sr-only">Detailed Terms and Policies</h2>
          {policies.map((p) => (
            <div 
              key={p.id} 
              className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                id={`policy-header-${p.id}`}
                onClick={() => handleToggle(p.id)}
                aria-expanded={openPolicy === p.id}
                aria-controls={`policy-panel-${p.id}`}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
              >
                <h3 className="font-extrabold text-stone-950 text-base">{p.title}</h3>
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${openPolicy === p.id ? "rotate-180 text-emerald-600" : "text-stone-400"}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openPolicy === p.id && (
                <div 
                  id={`policy-panel-${p.id}`}
                  role="region"
                  aria-labelledby={`policy-header-${p.id}`}
                  className="px-6 pb-6 pt-2 border-t border-stone-50"
                >
                  <p className="text-sm text-stone-700 leading-relaxed font-medium">
                    {p.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5" aria-hidden="true">🛡️</span>
          <div>
            <div className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</div>
            <p className="mt-2 text-xs text-stone-700 leading-relaxed">These policies comply with the guidelines set by the Trekking Agencies' Association of Nepal (TAAN) and the Annapurna Conservation Area Project.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold">Have Questions About Payments?</h2>
            <p className="mt-4 text-stone-300 text-sm leading-relaxed max-w-lg">Contact our booking office in Pokhara to clarify wire transfers, currency payments, or group discount waivers.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/#book"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-all"
              >Contact Booking Office
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
