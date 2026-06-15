import React from "react";
import Link from "next/link";

export default function Page() {
  const beginnerTips = [
    {
      title: "Choose a Longer Itinerary",
      desc: "Do not attempt the rapid 5-day or 6-day routes. Opt for a 9-day or 10-day itinerary that includes gradual altitude gains and dedicated rest blocks at Swanta or Dobato."
    },
    {
      title: "Hire a Porter",
      desc: "Carrying a 12kg to 15kg pack will drain your energy quickly. Hiring a local porter allows you to hike with just a light daypack containing water, layers, and camera gear."
    },
    {
      title: "Walk Slow (Bistari, Bistari)",
      desc: "The golden rule of trekking in Nepal is to maintain a slow, conversational pace. Do not race to the lodge. Pacing helps your body adjust to the dropping oxygen levels."
    },
    {
      title: "Use Trekking Poles",
      desc: "Trekking poles reduce the impact on your knees by up to 25% and are essential for maintaining balance on the steep downhill switchbacks from Khopra to Swanta."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Beginner Trekking Advice</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Can Beginners Do the Khopra Ridge Trek?
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Are you planning your first trek in Nepal? Read our expert assessment on whether Khopra Ridge is suitable for beginners and how to prepare.
          </p>
        </div>

        {/* The Verdict */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">The Short Answer: Yes, with preparation</h2>
          <p className="text-stone-600 leading-relaxed">
            Yes, beginners can successfully complete the Khopra Ridge Trek, but you should not treat it as a casual stroll. Unlike Ghorepani Poon Hill, which can be done with zero prior training, Khopra Ridge reaches higher altitudes (3,660m at the ridge and 4,660m at Khayer Lake) and features steeper, more remote sections.
          </p>
          <p className="text-stone-600 leading-relaxed">
            If you are active, healthy, and willing to train for 4 to 6 weeks before your departure, this trek will offer an incredible, crowd-free alternative to the busier classic routes.
          </p>
        </div>

        {/* Key Success Factors */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">4 Essential Rules for Beginner Trekkers</h2>
          <div className="space-y-6">
            {beginnerTips.map((tip, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base">{tip.title}</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* The Khayer Lake Caveat */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Important: The Khayer Lake Hike is Optional</h3>
          <p className="text-xs leading-relaxed">
            The toughest day is the hike from Khopra Ridge to Khayer Lake (4,660m) and back. For beginners, this 9-hour high-altitude trek can be overwhelming. The good news is that this hike is completely optional. You can choose to rest on the ridge, enjoy the panoramic views of Dhaulagiri, and skip the lake hike if you feel tired or suffer from mild headache.
          </p>
        </div>

        {/* E-E-A-T Badge */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              We guide dozens of first-time trekkers every year. Our itineraries are custom designed to maximize acclimatization safety and success rates for beginners.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Begin Your Trekking Journey</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Our guides are trained in wilderness first aid and high-altitude pacing. Join a secure group or plan a private beginner-friendly departure.
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
