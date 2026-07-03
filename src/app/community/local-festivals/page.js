import React from "react";
import Link from "next/link";

export default function Page() {
  const festivals = [
    {
      name: "Janai Purnima (Sacred Pilgrimage)",
      date: "Full moon of August (Shrawan Purnima)",
      desc: "The most important festival for the Khopra region. Thousands of Hindu and Buddhist pilgrims climb to the sacred Khayer Lake (4,660m) to bathe in its holy waters and offer prayers at the shrine of Khayer Baraha. Shamans (Dhamis) lead chanting processions."
    },
    {
      name: "Tamu Lhosar (Gurung New Year)",
      date: "Late December (Poush 15)",
      desc: "Vibrant New Year celebrations in Gurung villages like Ghandruk. Locals dress in traditional wear, prepare traditional feasts like Sel Roti, and host community dances, archery tournaments, and cultural programs."
    },
    {
      name: "Dashain (The Grand Harvest Festival)",
      date: "September or October (Ashwin)",
      desc: "Nepal's longest and most significant Hindu festival, celebrating the victory of good over evil. High-altitude villagers gather with family, put up towering bamboo swings (Ping), receive blessings (Tika) from elders, and prepare feasts."
    },
    {
      name: "Tihar (Festival of Lights & Animals)",
      date: "October or November (Kartik)",
      desc: "The festival of lights. Villagers decorate teahouses and homes with clay oil lamps and marigold garlands. The festival honors crows, dogs, cows, and brothers, featuring colorful street dances (Deusi/Bhailo) in local communities."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Culture Silos</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Local Festivals on the Khopra Circuit
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Plan your trekking dates around the spectacular cultural celebrations of the Annapurna, from Janai Purnima at Khayer Lake to Tamu Lhosar in Ghandruk.
          </p>
        </div>

        {/* Introduction */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Cultural Dynamics of Mountain Festivals</h2>
          <p className="text-stone-600 leading-relaxed">The Gurung and Magar villages along the Khopra Ridge Trek maintain deep, ancestral spiritual traditions. Experiencing a festival on the trail offers an unforgettable window into the spiritual life, community cooperation, and hospitality of the Himalayas.
          </p>
        </div>

        {/* Festival List */}
        <div className="mt-12 space-y-6">
          {festivals.map((fest, idx) => (
            <div key={idx} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-100 pb-3 gap-2">
                <h3 className="font-extrabold text-stone-950 text-lg">{fest.name}</h3>
                <span className="text-xs font-bold text-emerald-600 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 shrink-0">
                  {fest.date}
                </span>
              </div>
              <p className="mt-4 text-xs text-stone-500 leading-relaxed">
                {fest.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Festival Trekking Tips */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Important Festival Travel Tips</h3>
          <ul className="space-y-2 text-xs leading-relaxed list-disc pl-5">
            <li><strong>Lodge Availability:</strong>During Janai Purnima (August), thousands of pilgrims travel to Khopra Ridge. Lodges are fully booked months in advance; carrying tents is often required for independent hikers.</li>
            <li><strong>Transport Schedules:</strong>During Dashain (late autumn), local public bus and jeep services operate on limited schedules as drivers spend holidays with families. Book private transport in advance.</li>
            <li><strong>Respect Customs:</strong>Always ask permission before photographing religious ceremonies, shrines, or people in traditional wear. Dress modestly when entering sacred spaces.</li>
          </ul>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5"></span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">We update our festival calendar annually based on local lunar schedules. All guides are trained in cultural preservation guidelines.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Book a Cultural Festival Departure</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">Want to align your trek dates with Janai Purnima or Tamu Lhosar? Get in touch with our Kathmandu planning team to customize your itinerary.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/#book"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-all"
              >Customize Itinerary
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
    canonical: '/community/local-festivals',
  },
};
