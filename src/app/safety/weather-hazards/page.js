import React from "react";
import Link from "next/link";

export default function Page() {
  const weatherHazards = [
    {
      title: "1. Afternoon White-Outs",
      desc: "In spring and autumn, clouds often roll in around 1:00 PM, dropping visibility to less than 20 meters. On exposed ridgelines like Khopra, this can lead to orientation loss. Always hike with your group."
    },
    {
      title: "2. Ridge Winds and Hypothermia",
      desc: "Khopra Ridge (3,660m) acts as a high weather wall. Strong, freezing winds sweep the ridge, especially after sunset. A windproof shell and fleece layers are essential to prevent rapid cooling."
    },
    {
      title: "3. Ice on Forest Trails",
      desc: "During late autumn and winter, the shady forest trail segments (especially Tadapani to Bayeli) freeze. Water runoff turns into sheet ice, making sections slippery and requiring microspikes."
    },
    {
      title: "4. Summer Monsoon Landslides",
      desc: "From June to August, heavy monsoon rains trigger landslides and wash away bridges, specifically along the lower trails near Swanta and Tatopani. Trekking is not recommended in this season."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Safety & Climate</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Weather Hazards on the Khopra Trek
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">High altitude weather can be unpredictable. Understand trail ice risks, ridge winds, sudden white-outs, and lightning safety in the Annapurnas.
          </p>
        </div>

        {/* Climate overview */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Navigating Mountain Weather</h2>
          <p className="text-stone-600 leading-relaxed">The climate in the Annapurna Conservation Area (ACAP) is highly dynamic. While morning skies are generally clear and blue during peak seasons (October-November and March-April), weather can shift within an hour.
          </p>
          <p className="text-stone-600 leading-relaxed">Because the Khopra trail climbs along exposed ridges, trekkers are more vulnerable to winds and sudden temperature drops than on valley treks like Annapurna Base Camp.
          </p>
        </div>

        {/* Hazard Cards */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Core Climate Risks</h2>
          <div className="space-y-6">
            {weatherHazards.map((hazard, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base">{hazard.title}</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">{hazard.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ridge Lightning safety */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Ridge Lightning Safety Protocol</h3>
          <p className="text-xs leading-relaxed">During pre-monsoon storm systems (late April to May), thunder and **lightning** can occur on high, exposed ridges (like Khopra Ridge or Muldai Viewpoint) in the afternoon. If you are caught in a storm on an exposed section: **descend immediately to lower ground**, stay away from isolated tall trees, drop trekking poles (which can conduct electrical currents), and seek shelter inside community lodges.
          </p>
        </div>

        {/* E-E-A-T Badge */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5"></span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">Our guides are equipped with professional weather monitoring tools and check-in daily with local lodge coordinators to verify trail conditions.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Stay Safe in the Mountains</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">Book our guided departure to ensure you hike with professional leaders who monitor weather, carry safety gear, and ensure your warm lodge spaces.
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
