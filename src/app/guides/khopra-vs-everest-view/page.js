import React from "react";
import Link from "next/link";

export default function Page() {
  const comparisonRows = [
    {
      metric: "Primary Views",
      khopra: "Dhaulagiri I (8,167m), Annapurna South, Nilgiri, Machhapuchhre.",
      everest: "Mount Everest (8,848m), Lhotse, Ama Dablam, Thamserku."
    },
    {
      metric: "Crowd Levels",
      khopra: "Very low. Quiet, isolated ridge trails.",
      everest: "High. Everest region attracts heavy tourist traffic year-round."
    },
    {
      metric: "Access Point",
      khopra: "Drive from Pokhara to Kimche or Syauli Bazaar.",
      everest: "High-altitude flight from Kathmandu to Lukla (Tenzing-Hillary Airport)."
    },
    {
      metric: "Trek Altitude",
      khopra: "Sleeps at 3,660m (Khopra Ridge). Climbs to 4,660m (Khayer Lake).",
      everest: "Sleeps up to 3,880m (Everest View Hotel/Tengboche). Climbs to 5,545m (Kala Patthar)."
    },
    {
      metric: "Financial Reinvestment",
      khopra: "100% community-owned cooperative lodges supporting local schools.",
      everest: "Commercial private tea houses and luxury mountain hotels."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Route Comparisons</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Khopra Ridge vs. Everest View Trek
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Compare logistics, mountain views, crowd density, and accessibility between the offbeat Annapurna ridge and the classic Everest views.
          </p>
        </div>

        {/* Intro */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Choosing Between Nepal&apos;s Iconic Regions</h2>
          <p className="text-stone-600 leading-relaxed">Deciding between the **Annapurna** and **Khumbu (Everest)** regions is the first step for most trekkers in Nepal. The **Everest View Trek** (often reaching Namche Bazaar and Tengboche) is famous for its views of the world&apos;s highest peak but requires a flight to Lukla and is highly crowded. The **Khopra Ridge Trek** provides a secluded, road-accessible community alternative facing the massive walls of Dhaulagiri and Annapurna.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Comparison Matrix</h2>
          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
            <table className="min-w-full divide-y divide-stone-200 text-left text-xs">
              <thead className="bg-stone-50 text-stone-500 font-bold uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="px-6 py-4">Metric</th>
                  <th className="px-6 py-4">Khopra Ridge Trek</th>
                  <th className="px-6 py-4">Everest View Trek</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-600">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-stone-50/50 transition">
                    <td className="px-6 py-4 font-bold text-stone-900">{row.metric}</td>
                    <td className="px-6 py-4">{row.khopra}</td>
                    <td className="px-6 py-4">{row.everest}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed differences */}
        <div className="mt-16 space-y-8">
          <h2 className="text-2xl font-bold text-stone-950">Detailed Comparison</h2>
          
          <div className="space-y-6">
            <div className="p-6 bg-white border border-stone-200 rounded-3xl space-y-2 shadow-sm">
              <h4 className="font-extrabold text-stone-950 text-base">1. Access &amp; Logistics</h4>
              <p className="text-xs text-stone-500 leading-relaxed">Everest View requires flying into the Lukla airport, which is heavily subject to weather-induced cancellations and delays. Khopra Ridge is reached by road from Pokhara via private jeep, which is more reliable, flexible, and budget-friendly.
              </p>
            </div>
            
            <div className="p-6 bg-white border border-stone-200 rounded-3xl space-y-2 shadow-sm">
              <h4 className="font-extrabold text-stone-950 text-base">2. Crowd Dynamics</h4>
              <p className="text-xs text-stone-500 leading-relaxed">The Everest highway has constant groups of trekkers, loaded pack animals, and helicopter traffic overhead. Khopra Ridge is a remote, quiet route where you can walk for hours through forests without seeing other tour groups.
              </p>
            </div>

            <div className="p-6 bg-white border border-stone-200 rounded-3xl space-y-2 shadow-sm">
              <h4 className="font-extrabold text-stone-950 text-base">3. View Proximity</h4>
              <p className="text-xs text-stone-500 leading-relaxed">From Namche Bazaar or Everest View Hotel, Mount Everest is visible in the distance, partially framed by Nuptse and Lhotse. From Khopra Ridge, the massive 8,167m peak of Dhaulagiri is visible right across the Kali Gandaki gorge, offering an exceptionally clean sightline.
              </p>
            </div>
          </div>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5"></span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">We lead tours in both the Khumbu and Annapurna regions. This matrix provides an objective comparison of safety metrics, costs, and crowd densities.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Book Your Annapurna Adventure</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">Ready to plan your road-access ridge trek? Secure your permit-inclusive booking packages with our local team.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/#book"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-all"
              >Inquire Now
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

export const metadata = {
  alternates: {
    canonical: '/guides/khopra-vs-everest-view',
  },
};
