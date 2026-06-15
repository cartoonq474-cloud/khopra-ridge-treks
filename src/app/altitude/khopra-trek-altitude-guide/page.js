import React from "react";
import Link from "next/link";

export default function Page() {
  const altitudes = [
    { location: "Nayapul (Trailhead)", elev: "1,070m (3,510ft)", oxygen: "89% of Sea Level" },
    { location: "Ghandruk Village", elev: "1,940m (6,365ft)", oxygen: "80% of Sea Level" },
    { location: "Tadapani Junction", elev: "2,630m (8,628ft)", oxygen: "74% of Sea Level" },
    { location: "Dobato Viewpoint", elev: "3,420m (11,220ft)", oxygen: "67% of Sea Level" },
    { location: "Bayeli Kharka Lodge", elev: "3,432m (11,260ft)", oxygen: "67% of Sea Level" },
    { location: "Chhistibung Node", elev: "2,975m (9,760ft)", oxygen: "71% of Sea Level" },
    { location: "Khopra Ridge Lodge", elev: "3,660m (12,007ft)", oxygen: "65% of Sea Level" },
    { location: "Khayer Lake (High Point)", elev: "4,660m (15,288ft)", oxygen: "57% of Sea Level" }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Elevation Metrics</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Khopra Ridge Altitude & Elevation Guide
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Understand the height profile of the trail. Review elevation statistics, active oxygen level drop indicators, and safe high-altitude acclimatization protocols.
          </p>
        </div>

        {/* Altitude Profile Science */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">The Science of Altitude on the Khopra Trail</h2>
          <p className="text-stone-600 leading-relaxed">
            As you ascend the foothills of the Annapurna range, the atmospheric pressure drops, making molecules of oxygen more dispersed. At the highest point of the trek, **Khayer Lake (4,660 meters)**, the effective oxygen concentration is only about **57% of that at sea level**.
          </p>
          <p className="text-stone-600 leading-relaxed">
            Because the trail climbs rapidly (especially the 1,000-meter climb to the ridge, followed by another 1,000-meter day climb to the lake), understanding the sleeping altitudes and preparing your body is key to avoiding Acute Mountain Sickness (AMS).
          </p>
        </div>

        {/* Altitude Table */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Daily Elevation & Oxygen Profiles</h2>
          <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-stone-200 bg-stone-50 text-xs font-bold text-stone-400 uppercase tracking-wider">
                  <th className="px-6 py-4">Location</th>
                  <th className="px-6 py-4">Elevation</th>
                  <th className="px-6 py-4">Effective Oxygen %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-xs text-stone-600">
                {altitudes.map((item, i) => (
                  <tr key={i} className="hover:bg-stone-50/50">
                    <td className="px-6 py-4 font-bold text-stone-900">{item.location}</td>
                    <td className="px-6 py-4">{item.elev}</td>
                    <td className="px-6 py-4 font-semibold text-emerald-600">{item.oxygen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Acclimatization tips */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Altitude Sickness Prevention Checklist</h3>
          <ul className="space-y-2 text-xs leading-relaxed list-disc pl-5">
            <li><strong>The 500m Rule:</strong> Above 3,000m, try not to increase your sleeping elevation by more than 500m per night. The descent to Chhistibung (2,975m) before climbing to Khopra (3,660m) helps with this.</li>
            <li><strong>Hydration is Key:</strong> Drink 4 to 5 liters of water daily. Dehydration mimics and worsens AMS symptoms.</li>
            <li><strong>Avoid Alcohol and Sedatives:</strong> Alcohol impairs breathing and masks early symptoms of altitude headaches.</li>
            <li><strong>Listen to Your Body:</strong> Headaches and mild nausea are common warning signs. If they persist or worsen, do not ascend further.</li>
          </ul>
        </div>

        {/* E-E-A-T Badge */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              Our trekking itineraries include built-in acclimatization steps. Our guides carry pulse oximeters to monitor blood oxygen levels daily above 3,000 meters.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Secure a Safe Ascent</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Book our certified guided packages. Our team provides professional safety gear, pacing expertise, and oxygen level tracking along the route.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/#book"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-all"
              >
                Inquire Now
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
