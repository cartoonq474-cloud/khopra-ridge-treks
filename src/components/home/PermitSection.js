import React from "react";
import Link from "next/link";

const TicketIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
    <line x1="9" y1="5" x2="9" y2="19" strokeDasharray="4 4" />
    <line x1="15" y1="5" x2="15" y2="19" strokeDasharray="4 4" />
  </svg>
);

const IdCardIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <circle cx="9" cy="11" r="2" />
    <path d="M14 9h4" />
    <path d="M14 13h4" />
    <path d="M5 17c0-1.5 2-2.5 4-2.5s4 1 4 2.5" />
  </svg>
);

const AlertIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

export default function PermitSection() {
  const permitFees = [
    { 
      title: "ACAP Permit", 
      desc: "around NPR 3,000 (about USD 25) for foreign nationals; NPR 1,000 for SAARC nationals.", 
      icon: <TicketIcon className="h-8 w-8 text-emerald-600" /> 
    },
    { 
      title: "TIMS Card", 
      desc: "NPR 2,000 for individual trekkers; NPR 1,000 per person for group trekkers.", 
      icon: <IdCardIcon className="h-8 w-8 text-emerald-600" /> 
    }
  ];

  const objectives = [
    "Develop tourism with minimal damage to the natural and cultural environment.",
    "Conserve natural resources for current and future generations.",
    "Bring sustainable economic development to local communities inside the conservation area."
  ];

  return (
    <section className="py-24 bg-white border-t border-stone-200">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-100/50 px-3 py-1.5 rounded-full">Regulations</span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
            Trekking Permit for Khopra Ridge Trek
          </h2>
          <p className="mt-6 text-stone-600 text-lg leading-relaxed max-w-3xl mx-auto">
            The Khopra Ridge Trek requires 2 permits: an Annapurna Conservation Area Project (ACAP) permit and a Trekkers' Information Management System (TIMS) card. No restricted area permit is needed for this route. We arrange both permits on your behalf once you book, using a copy of your passport and a passport-sized photo.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-16">
          {permitFees.map((fee, i) => (
            <div key={i} className="flex items-start gap-5 p-8 rounded-3xl bg-stone-50 border border-stone-200 shadow-sm hover:border-emerald-200 hover:shadow-md transition-all">
              <div className="shrink-0 p-3 bg-emerald-50 rounded-2xl">
                {fee.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">{fee.title}</h3>
                <p className="text-stone-600 leading-relaxed text-sm">{fee.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200 mb-20 text-center max-w-4xl mx-auto">
          <p className="text-sm font-semibold text-amber-900 flex items-center justify-center gap-3">
            <AlertIcon className="h-5 w-5 text-amber-700 shrink-0" />
            Permits are non-refundable, non-transferable, and valid only for a single entry into the conservation area, so carry printed copies for checkpoint inspections along the trail.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-center bg-[#0e1e1a] rounded-3xl p-8 lg:p-12 shadow-xl border border-emerald-950 text-white">
          <div>
            <span className="text-sm font-bold text-emerald-400 uppercase tracking-widest block mb-3">Conservation</span>
            <h3 className="text-3xl font-extrabold mb-6">Why an ACAP Permit?</h3>
            <p className="text-stone-300 leading-relaxed mb-6">
              The ACAP permit funds the Annapurna Conservation Area Project (ACAP), the largest protected area in Nepal, established in 1986 and managed by the National Trust for Nature Conservation (NTNC). Permit fees pay for trail maintenance, waste management, and community development across the conservation area.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
              Objectives of Conservation Area in Nepal
            </h4>
            <p className="text-sm text-stone-400 mb-6">ACAP works toward 3 main objectives:</p>
            <ul className="space-y-4">
              {objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex items-center justify-center h-6 w-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-sm text-stone-200 leading-relaxed">{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="#book"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition-all hover:bg-emerald-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/40"
          >
            Start Planning Your Trek
            <span aria-hidden="true">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
