import React from "react";
import Link from "next/link";

export default function Page() {
  const safetyMetrics = [
    {
      title: "Wilderness Security & Low Theft Rates",
      desc: "Local communities run the lodges collectively. Theft is extremely rare on this route. You can feel safe traveling with cameras and personal electronics."
    },
    {
      title: "Certified Mountain Guides",
      desc: "Nepal's NTB mandates hiring a licensed guide inside the ACAP. Guides are crucial for forest navigation, altitude pacing, and managing checkpost logistics."
    },
    {
      title: "Cellular Signal and Communication",
      desc: "Nepal Telecom (NTC) and Ncell have spotty signals in the forest valleys. However, mobile network reception is generally available on the Khopra Ridge itself."
    },
    {
      title: "Emergency Evacuation",
      desc: "For severe illness or injury, helicopter rescue is the standard response. Ensure your travel insurance covers rescue up to 5,000m."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Trail Safety</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Is the Khopra Ridge Trek Safe?
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Review the latest safety data for the community lodge circuit. Understand terrain conditions, solo safety rules, and medical rescue logistics.
          </p>
        </div>

        {/* Safety Overview */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Safety Standards on the Circuit</h2>
          <p className="text-stone-600 leading-relaxed">The short answer is **yes, the Khopra Ridge Trek is highly safe**, but it requires respect for the mountain environment. Because it is a less crowded route, it lacks the large trail networks and immediate clinic access of the classic Everest Base Camp or Annapurna Circuit routes.
          </p>
          <p className="text-stone-600 leading-relaxed">With a certified local guide, proper acclimatization pacing, and suitable travel insurance, you can trek with confidence through this pristine alpine environment.
          </p>
        </div>

        {/* Safety Metrics cards */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Key Safety Factors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {safetyMetrics.map((item, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base">{item.title}</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Wildlife info */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Wildlife Encounters on the Trail</h3>
          <p className="text-xs leading-relaxed">The forests around Swanta, Chhistibung, and Tadapani are rich in wildlife, including Langur monkeys, barking deer, Himalayan Monal pheasants, and yaks. While rare, black bears and leopards inhabit the deeper areas of the Annapurna Conservation Area. To ensure safety, **never hike off-trail alone at dusk or dawn**, make noise when walking through dense forest segments, and keep a respectful distance from grazing yaks or horses.
          </p>
        </div>

        {/* E-E-A-T Badge */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5"></span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">We update our safety protocols based on real-time checkpost reports. Our guides carry satellite communication tracking devices for emergency routing.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Trek Safely with Us</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">Book our guided departure package. Our certified guides carry medical kits, tracking devices, and coordinate with rescue pilots.
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
