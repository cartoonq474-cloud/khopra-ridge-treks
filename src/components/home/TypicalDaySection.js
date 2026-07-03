import React from "react";
import Link from "next/link";

const PlaneIcon = (props) => (
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
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.9-.2-1.9.3-2.2 1.2-.3.9.2 1.9 1.1 2.2l7.9 2.6-4.5 4.5-2.8-.7c-.5-.1-1.1.1-1.4.5-.4.4-.5 1-.2 1.4l1.8 1.8 1.8 1.8c.4.3 1 .2 1.4-.2.4-.3.6-.9.5-1.4l-.7-2.8 4.5-4.5 2.6 7.9c.3.9 1.3 1.4 2.2 1.1.9-.3 1.4-1.3 1.2-2.2z" />
  </svg>
);

const BuildingIcon = (props) => (
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
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <line x1="9" y1="22" x2="9" y2="16" />
    <line x1="15" y1="22" x2="15" y2="16" />
    <line x1="9" y1="16" x2="15" y2="16" />
    <path d="M8 6h2v2H8V6z" />
    <path d="M14 6h2v2h-2V6z" />
    <path d="M8 10h2v2H8v-2z" />
    <path d="M14 10h2v2h-2v-2z" />
  </svg>
);

const LandmarkIcon = (props) => (
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
    <line x1="3" y1="22" x2="21" y2="22" />
    <line x1="6" y1="18" x2="6" y2="11" />
    <line x1="10" y1="18" x2="10" y2="11" />
    <line x1="14" y1="18" x2="14" y2="11" />
    <line x1="18" y1="18" x2="18" y2="11" />
    <polygon points="12 2 2 7 22 7 12 2" />
    <path d="M2 18h20v2H2z" />
  </svg>
);

const PassportIcon = (props) => (
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
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <circle cx="12" cy="11" r="3" />
    <path d="M12 8v6" />
    <path d="M9 11h6" />
    <path d="M8 18h8" />
  </svg>
);

export default function TypicalDaySection() {
  const visaFees = [
    { duration: "15 days", fee: "USD 30" },
    { duration: "30 days", fee: "USD 50" },
    { duration: "90 days", fee: "USD 125" }
  ];

  const infoBlocks = [
    {
      title: "Arrival in Nepal",
      desc: "Our representative meets you at the arrivals exit of Tribhuvan International Airport in Kathmandu and transfers you to your hotel by private car. Let us know your flight details in advance so we can schedule this pickup.",
      icon: <PlaneIcon className="h-8 w-8 text-emerald-600" />
    },
    {
      title: "Hotel Recommendations",
      desc: "Your package includes 2 nights in Kathmandu and 1 night in Pokhara. In Kathmandu, we recommend staying in Thamel, the main tourist district, which has a wide range of hotels, restaurants, and trekking gear shops within walking distance.",
      icon: <BuildingIcon className="h-8 w-8 text-emerald-600" />
    },
    {
      title: "Explore Kathmandu",
      desc: "Spend your free time in Kathmandu visiting Boudhanath, a major Buddhist site, Pashupatinath, a Hindu temple complex on the Bagmati River, and Swayambhunath, a hilltop stupa with views over the city. Each site takes 1 to 2 hours to explore properly. Ask your guide about a half-day or full-day city tour if you want a guided introduction to these sites.",
      icon: <LandmarkIcon className="h-8 w-8 text-emerald-600" />
    }
  ];

  return (
    <section className="py-24 bg-stone-50 border-t border-stone-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-100/50 px-3 py-1.5 rounded-full">Daily Routine</span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
            What a Typical Day Looks Like on this Khopra ridge Trek
          </h2>
          <p className="mt-6 text-stone-600 text-lg leading-relaxed max-w-4xl mx-auto">
            A typical day starts with breakfast around 6:30 to 7:00 a.m., followed by 5 to 6 hours of walking with a lunch stop at a teahouse along the trail. You reach your overnight stop by mid-afternoon, leaving time to explore the village, wash up, or rest before dinner. Dinner is served in the communal dining room, the warmest and most social space in any teahouse, since sleeping rooms have no heating or power outlets. Charge your devices and dry your socks by the dining room stove before bed.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 items-stretch">
          
          {/* Main Info Blocks */}
          <div className="lg:col-span-8 space-y-6">
            {infoBlocks.map((block, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm flex gap-6 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 bg-emerald-50 rounded-2xl flex items-center justify-center">
                    {block.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">{block.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{block.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Visa Info Box */}
          <div className="lg:col-span-4 rounded-3xl border border-emerald-100 bg-[#0e1e1a] text-white p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="border-b border-white/10 pb-5 mb-6">
                <div className="flex items-center gap-3">
                  <PassportIcon className="h-8 w-8 text-emerald-400" />
                  <h3 className="text-xl font-bold text-emerald-400">Visa for Nepal</h3>
                </div>
              </div>
              <p className="text-sm text-stone-300 leading-relaxed mb-6">
                Most nationalities can get a visa on arrival at Kathmandu airport. Bring USD cash to pay the fee, since card payment is not always available at the counter.
              </p>
              
              <ul className="space-y-3 mb-6">
                {visaFees.map((visa, i) => (
                  <li key={i} className="flex items-center justify-between bg-stone-900/50 p-4 rounded-xl border border-white/5">
                    <span className="font-bold text-white">{visa.duration}</span>
                    <span className="text-emerald-400 font-bold tracking-wider">{visa.fee}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-xs text-stone-400 leading-relaxed">
                Complete the online arrival form before you fly and print a copy to bring with you, since this speeds up processing at the airport.
              </p>
            </div>
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
