import React from "react";
import Link from "next/link";

const HeartPulseIcon = (props) => (
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
    <path d="M3.22 12H9.5l1.5-3 2 6 1.5-3h4.28" />
  </svg>
);

const CompassIcon = (props) => (
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
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

export default function AltitudeSeasonsSection() {
  const amsSymptoms = [
    "Headache",
    "Nausea or vomiting",
    "Dizziness",
    "Fatigue",
    "Shortness of breath at rest",
    "Trouble sleeping",
    "Loss of coordination",
    "Swelling in the face or hands",
    "Irritability or confusion"
  ];

  const safetyHabits = [
    "Acclimatize properly and recognize AMS symptoms early.",
    "Check the weather forecast before any high-elevation stage.",
    "Carry enough water, snacks, and a basic first-aid kit every day.",
    "Trek with a licensed guide, especially outside the main spring and autumn seasons.",
    "Avoid hiking after dark or in poor visibility."
  ];

  const seasons = [
    {
      title: "Spring Season (March to May)",
      desc: "Rhododendron forests bloom in red, pink, and white along the ridge in April, one of the densest concentrations of rhododendron in the Annapurna region. Daytime temperatures stay mild at lower elevations and cool steadily above 3,000 m. This is also a strong season for spotting the Himalayan Monal and other forest birdlife.",
      bgColor: "bg-emerald-50/50",
      borderColor: "border-emerald-100",
      badgeColor: "bg-emerald-100 text-emerald-800"
    },
    {
      title: "Autumn Season (September to November)",
      desc: "Skies are at their clearest from late September through November, giving the sharpest views of Dhaulagiri, Annapurna, and Nilgiri. Days stay mild and nights turn cold above 3,000 m. This is the busiest season on the route, though Khopra Ridge stays far quieter than the main Annapurna trails even at peak time.",
      bgColor: "bg-amber-50/50",
      borderColor: "border-amber-100",
      badgeColor: "bg-amber-100 text-amber-800"
    },
    {
      title: "Monsoon (June to September)",
      desc: "Rain falls most afternoons, leaving trails muddy and slippery, with leeches common in the lower forest sections. Landslide risk rises on steeper slopes, and the Khayer Lake side trip is not advisable in this season due to wet, exposed terrain. Trekkers who go anyway find quiet trails and vivid green landscapes.",
      bgColor: "bg-stone-50",
      borderColor: "border-stone-200",
      badgeColor: "bg-stone-200 text-stone-700"
    },
    {
      title: "Winter (December to February)",
      desc: "Temperatures above 3,000 m drop well below freezing at night, and snow can make the trail to Khopra Ridge and Khayer Lake icy. Some community lodges close for the season at this time. Winter suits experienced, well-equipped trekkers who want solitude over comfort.",
      bgColor: "bg-blue-50/30",
      borderColor: "border-blue-100",
      badgeColor: "bg-blue-100 text-blue-800"
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-stone-200">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Altitude Safety & AMS */}
        <div className="grid gap-12 lg:grid-cols-12 items-stretch mb-24">
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 text-emerald-700 flex items-center justify-center bg-emerald-50 rounded-xl">
                  <HeartPulseIcon className="h-6 w-6" />
                </div>
                <span className="text-sm font-bold text-emerald-700 uppercase tracking-widest">Medical Guide</span>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
                Altitude Safety & AMS
              </h2>
              <p className="mt-6 text-stone-600 leading-relaxed text-base">
                Acute Mountain Sickness (AMS) can affect anyone above 2,500 m, regardless of fitness level. The Khopra Ridge Trek itinerary builds in gradual altitude gain and multiple nights above 3,000 m before the push to Khayer Lake, which lowers AMS risk.
              </p>
              <p className="mt-4 text-stone-600 leading-relaxed text-sm">
                Watch for the key symptoms and tell your guide immediately if any of these appear. Mild symptoms usually improve with rest, fluids, and a pause in ascent; symptoms that worsen require descending to a lower altitude without delay.
              </p>
            </div>
            
            <div className="mt-8 bg-stone-50 border border-stone-200 rounded-3xl p-6">
              <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-4">9 Symptoms to Watch For:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {amsSymptoms.map((symptom, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                    <span className="text-xs text-stone-600 font-medium">{symptom}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#0e1e1a] text-white rounded-3xl p-8 border border-emerald-950 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-5">
                <CompassIcon className="h-6 w-6 text-emerald-400" />
                <h3 className="text-xl font-bold text-white">Safety on the Trek</h3>
              </div>
              
              <ul className="space-y-4 mb-6">
                {safetyHabits.map((habit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
                    <p className="text-xs text-stone-300 leading-relaxed">{habit}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-white/10 pt-5">
              <p className="text-xs text-stone-400 leading-relaxed">
                Buy travel insurance that explicitly covers trekking up to 5,000 m, including helicopter evacuation. Tell your guide whenever you plan to explore a village independently after arrival, so he knows your location at all times.
              </p>
            </div>
          </div>
        </div>

        {/* Best Seasons */}
        <div>
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-100/50 px-3 py-1.5 rounded-full">Timing Your Trip</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
              Best Seasons to Visit Khopra Ridge
            </h2>
            <p className="mt-4 text-stone-600 text-base max-w-2xl mx-auto">
              Spring and autumn give the clearest skies and the most stable trekking conditions on Khopra Ridge.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
            {seasons.map((season, i) => (
              <div key={i} className={`p-6 rounded-3xl border ${season.borderColor} ${season.bgColor} flex flex-col justify-between`}>
                <div>
                  <h3 className="text-lg font-bold text-stone-900 mb-4">{season.title}</h3>
                  <p className="text-stone-600 leading-relaxed text-xs">{season.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
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
