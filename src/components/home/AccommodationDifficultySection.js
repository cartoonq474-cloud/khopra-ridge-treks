import React from "react";
import Link from "next/link";

const TerrainIcon = (props) => (
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
    <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
  </svg>
);

const WeatherIcon = (props) => (
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
    <path d="M12.8 19a3 3 0 1 1-3-3H18" />
    <path d="M17.5 15a2.5 2.5 0 1 1-2-4H20" />
    <path d="M9.8 11a4 4 0 1 1-1-7.8h9" />
  </svg>
);

const AltitudeIcon = (props) => (
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
    <path d="m21 16-5-5-5 5" />
    <path d="m21 12-5-5-5 5" />
    <path d="M12 22H3" />
    <path d="M9 18H3" />
    <path d="M6 14H3" />
  </svg>
);

const ExitIcon = (props) => (
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
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

export default function AccommodationDifficultySection() {
  const porterTips = [
    "A single porter carries up to 20 kg (44 lb); pack lighter than that limit where possible.",
    "Share a porter with another trekker to cut the cost, keeping each pack under 10 kg (22 lb).",
    "Porters walk ahead and meet you at the overnight stop, so carry your day's water, snacks, and layers yourself.",
    "Hiring a porter supports his income and, through that, his family and village."
  ];

  return (
    <section className="py-24 bg-stone-50 border-t border-stone-200">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Accommodation & Porters */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-100/50 px-3 py-1.5 rounded-full">Logistics</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
              Accommodation on the Trek
            </h2>
            <p className="mt-6 text-stone-600 text-lg leading-relaxed max-w-3xl mx-auto">
              This trek uses a mix of teahouses and community lodges, with 7 nights on the trail in total. Rooms are simple, usually twin-bedded, with shared bathrooms and no heating. Expect to pay USD 2 to 5 for a hot shower or to charge a device.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm">
              <h3 className="text-xl font-bold text-stone-900 mb-4">What is a Community Lodge?</h3>
              <p className="text-stone-600 leading-relaxed text-sm mb-6">
                A community lodge is owned and run by the village rather than a private family, with income reinvested into local schools, health posts, or farming projects. Facilities are basic, often with shared dormitory-style rooms, but staying there puts your trekking spend directly into village development. Bring your own sleeping bag when staying at a community lodge, since bedding can be limited.
              </p>
              
              <h3 className="text-xl font-bold text-stone-900 mb-4">Tipping Culture for Guide and Porter</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                Tip your guide around 10% of your total trip cost. Tip your porter 10% of his daily rate for each day he carries your pack. Tips go directly to the guide and porter, on top of their wages.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm">
              <h3 className="text-xl font-bold text-stone-900 mb-4">You May Want to Consider a Porter for this Trek</h3>
              <p className="text-stone-600 leading-relaxed text-sm mb-6">
                A porter carries your main pack so you can walk with just a light daypack. We recommend hiring one unless you are already experienced carrying a full pack at altitude.
              </p>
              <h4 className="text-sm font-bold text-stone-900 mb-4 uppercase tracking-wide">Tips on Hiring a Porter:</h4>
              <ul className="space-y-3">
                {porterTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-emerald-600 shrink-0 mt-0.5 font-bold">✓</span>
                    <span className="text-sm text-stone-600 leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Difficulty, Terrain & Safety */}
        <div>
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-100/50 px-3 py-1.5 rounded-full">Trail Info</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
              How Difficult is the Khopra Ridge Trek?
            </h2>
            <p className="mt-6 text-stone-600 text-lg leading-relaxed max-w-3xl mx-auto">
              The Khopra Ridge Trek is rated moderate. Daily hikes run 4 to 9 hours over varied terrain, with no technical climbing skills required, but a good baseline fitness level is necessary to enjoy it.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm">
              <div className="h-10 w-10 text-amber-700 mb-4 flex items-center justify-center bg-amber-50 rounded-xl">
                <TerrainIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">Terrain</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                The trail mixes stone steps, forest paths, alpine pasture, and ridge walks, with loose gravel on the climb to Khayer Lake and a long stone staircase through Ulleri.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm">
              <div className="h-10 w-10 text-amber-700 mb-4 flex items-center justify-center bg-amber-50 rounded-xl">
                <WeatherIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">Weather</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                Conditions shift fast above 3,000 m. The route between Dobato and Khopra Danda is exposed to wind and sudden fog, so check forecasts before setting out on the higher stages.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm">
              <div className="h-10 w-10 text-amber-700 mb-4 flex items-center justify-center bg-amber-50 rounded-xl">
                <AltitudeIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">Altitude</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                You spend 3 nights above 3,000 m, including the side trip to Khayer Lake at 4,500 m, where altitude-related symptoms become a real risk without proper pacing.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm">
              <div className="h-10 w-10 text-amber-700 mb-4 flex items-center justify-center bg-amber-50 rounded-xl">
                <ExitIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">Emergency Exits</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                The route allows a guide to walk you back down to Tadapani, Ghandruk, or Ghorepani at almost any point, all of which connect by road or trail to Pokhara within a day.
              </p>
            </div>
          </div>

          <div className="bg-red-50 rounded-2xl p-6 border border-red-100 text-center max-w-4xl mx-auto mb-16">
            <p className="text-sm text-red-900 flex flex-col sm:flex-row items-center justify-center gap-2">
              <span className="font-bold uppercase tracking-wide">Closest Hospital:</span>
              <span>The nearest major hospital is in Pokhara. For serious cases above Tadapani, a helicopter evacuation funded by travel insurance is the fastest route to treatment.</span>
            </p>
          </div>
        </div>

        <div className="text-center">
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
