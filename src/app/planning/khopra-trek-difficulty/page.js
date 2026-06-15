import React from "react";
import Link from "next/link";

export default function Page() {
  const difficultySegments = [
    {
      title: "Nayapul to Ghandruk (Easy)",
      desc: "Primarily dirt roads and wide stone staircases. Gradual ascent with plenty of resting points and tea shops. Great warm-up day."
    },
    {
      title: "Tadapani to Bayeli Kharka (Moderate to Demanding)",
      desc: "Steep forest trails climbing through rhododendrons. The path is narrow and can be muddy or icy. Requires careful footwork and steady pacing."
    },
    {
      title: "Chhistibung to Khopra Ridge (Demanding)",
      desc: "A relentless 1,000-meter vertical ascent over just 4.5 kilometers. Steep switchbacks on grassy alpine ridges with exposure to cold wind. High physical effort required."
    },
    {
      title: "Khopra Ridge to Khayer Lake (Strenuous)",
      desc: "A long 8-to-10 hour round-trip day hike. You climb from 3,660m to 4,660m on rugged, rocky high-altitude trails with minimal shelter. Risk of altitude sickness is high."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Trail Assessment</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Khopra Trek Difficulty: What to Expect
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Is the Khopra Ridge Trek suitable for your experience level? Understand the physical demands, terrain types, and day-by-day difficulty breakdown.
          </p>
        </div>

        {/* Difficulty Overview */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Overall Difficulty Rating: Demanding</h2>
          <p className="text-stone-600 leading-relaxed">
            The Khopra Ridge Trek is classified as a **moderate to demanding (semi-strenuous)** trek. While it does not require technical mountaineering skills, it is physically more challenging than standard routes like the Ghorepani Poon Hill trek or the Mardi Himal trek.
          </p>
          <p className="text-stone-600 leading-relaxed">
            The primary difficulty factors are the steep, relentless uphill climbs (specifically the segment from Chhistibung to the Ridge) and the high altitude reached during the optional but highly recommended day hike to Khayer Lake (4,660m).
          </p>
        </div>

        {/* Segment Breakdown */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Section-by-Section Difficulty Analysis</h2>
          <div className="space-y-6">
            {difficultySegments.map((segment, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base">{segment.title}</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">{segment.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison with other treks */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">How It Compares to Mardi Himal and Annapurna Base Camp</h2>
          <p className="text-stone-600 leading-relaxed">
            Unlike **Annapurna Base Camp (ABC)**, which features thousands of stone steps that can be hard on the knees, the Khopra trail has more natural, dirt, and grassy paths. However, the elevation profiles are steeper and less gradual.
          </p>
          <p className="text-stone-600 leading-relaxed">
            Compared to **Mardi Himal**, Khopra has fewer steep drop-offs on narrow ridgelines, making it feel slightly safer for those prone to vertigo. But the Khayer Lake day climb is significantly higher and longer than the Mardi Himal Base Camp hike.
          </p>
        </div>

        {/* E-E-A-T Badge */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              Our guides have completed the Khopra route dozens of times across all seasons. We update difficulty warnings dynamically based on seasonal landslides and snowfall.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Ready to Challenge Yourself?</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Book our complete permit-inclusive guided tour package. Having a local guide ensures you navigate safely and set the right pace.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/#book"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-all"
              >
                Book Guided Trek
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
