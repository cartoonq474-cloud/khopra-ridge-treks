import React from "react";
import Link from "next/link";

const StarIcon = (props) => (
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
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const TreeIcon = (props) => (
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
    <path d="M12 20v2" />
    <path d="m18 10-6-8-6 8h3L4 16h5l-4 5h14l-4-5h5l-5-6h3z" />
  </svg>
);

const CalendarIcon = (props) => (
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
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const HeartIcon = (props) => (
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
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

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

const ShieldIcon = (props) => (
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
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

export default function WhyBookWithUs() {
  const reasons = [
    {
      title: "Expert Local Guides",
      desc: "Our licensed guides have years of experience on Khopra Ridge's culture, wildlife, and viewpoints most trekking groups miss.",
      icon: <StarIcon className="h-8 w-8 text-emerald-600" />
    },
    {
      title: "Off-the-Beaten-Path Expertise",
      desc: "We focus on quieter Annapurna trails like Khopra Ridge instead of the standard tourist circuits.",
      icon: <TreeIcon className="h-8 w-8 text-emerald-600" />
    },
    {
      title: "Customized Itineraries",
      desc: "We adjust the pace, side trips, and acclimatization days to match your fitness level and interests.",
      icon: <CalendarIcon className="h-8 w-8 text-emerald-600" />
    },
    {
      title: "Ethical & Responsible Travel",
      desc: "We pay fair wages to guides and porters and route trekking income into community-based lodges.",
      icon: <HeartIcon className="h-8 w-8 text-emerald-600" />
    },
    {
      title: "Seamless Logistics",
      desc: "We handle ACAP permits, TIMS cards, teahouse bookings, and transport so you only need to show up and walk.",
      icon: <TicketIcon className="h-8 w-8 text-emerald-600" />
    },
    {
      title: "Emergency Support & Safety First",
      desc: "We track weather and trail conditions daily and carry first-aid kits, oximeters, and emergency contacts on every trek.",
      icon: <ShieldIcon className="h-8 w-8 text-emerald-600" />
    }
  ];

  return (
    <section className="py-24 bg-stone-50 border-t border-stone-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-100/50 px-3 py-1.5 rounded-full">Our Promise</span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
            Why Book with Us
          </h2>
          <p className="mt-4 text-stone-500 text-base max-w-2xl mx-auto font-medium">
            We offer 6 reasons to book the Khopra Ridge Trek with our team.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all group flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-100 transition-all">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">{reason.title}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{reason.desc}</p>
            </div>
          ))}
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
