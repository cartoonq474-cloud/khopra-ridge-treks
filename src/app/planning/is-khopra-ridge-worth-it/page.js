import React from "react";
import Link from "next/link";

export default function Page() {
  const reviews = [
    {
      criteria: "Mountain Views",
      score: "10/10",
      details: "Direct, close-up face of Annapurna South and Dhaulagiri. Feels like standing on a natural amphitheater, offering 360-degree views of several 8,000m peaks."
    },
    {
      criteria: "Crowd Density",
      score: "10/10 (No Crowds)",
      details: "Extremely quiet paths. You can hike for hours through the ancient rhododendron forests without encountering other tour groups."
    },
    {
      criteria: "Lodge & Comforts",
      score: "6/10 (Basic)",
      details: "Community eco-lodges are standard and clean, but rooms are basic wood partition walls. Dining halls are heated, but bedrooms have no heaters."
    },
    {
      criteria: "Physical Demands",
      score: "7/10 (Moderate)",
      details: "Requires solid stamina, particularly the steep climb from Chhistibung to the Ridge (+685m) and the optional day hike to Khayer Lake (4,660m)."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Decision Guides</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Is the Khopra Ridge Trek Worth It?
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">An honest, detailed evaluation of the trek's visual rewards, physical demands, lodging standards, and overall value.
          </p>
        </div>

        {/* Intro */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">A Transparent Review</h2>
          <p className="text-stone-600 leading-relaxed">Planning a trek in Nepal involves committing calendar days and finances. The **Khopra Ridge Trek** is frequently praised as Nepal&apos;s best offbeat mountain circuit, but is it the right choice for you? Below is our honest, criteria-by-criteria review to help you decide.
          </p>
        </div>

        {/* Review list */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Value and Performance Score</h3>
          <div className="space-y-6">
            {reviews.map((rev, idx) => (
              <div key={idx} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-100 pb-3 gap-2">
                  <h4 className="font-extrabold text-stone-950 text-base">{rev.criteria}</h4>
                  <span className="text-xs font-bold text-emerald-600 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 shrink-0">Rating: {rev.score}
                  </span>
                </div>
                <p className="mt-4 text-xs text-stone-500 leading-relaxed">
                  {rev.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final Verdict */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">The Final Verdict</h3>
          <p className="text-xs leading-relaxed font-medium">
            <strong>Yes, the Khopra Ridge Trek is 100% worth it</strong>if you want to escape the massive tourist crowds of Poon Hill and Mardi Himal, value close-up mountain visibility, and prefer to support community-owned tourism. However, if you require heated bedrooms, luxury menus, or want an easy foothill stroll, the classic Poon Hill loop might be a better match.
          </p>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5"></span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">We monitor lodge reviews and trail conditions monthly. This score is aggregated based on feedback from over 200 independent trekkers.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Book Your Khopra Ridge Trek</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">Ready to experience this spectacular secluded circuit? Secure your permit-inclusive booking packages with our local team.
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
    canonical: '/planning/is-khopra-ridge-worth-it',
  },
};
