import React from "react";
import Link from "next/link";

export default function Page() {
  const codeOfConduct = [
    { title: "No Leather Items", desc: "Leather belts, bags, or shoes should not be carried to the immediate lakeside shrine out of respect for the Hindu goddess." },
    { title: "Dress Modestly", desc: "Avoid open clothing. Dress respectfully to protect the religious integrity of the pilgrimage site." },
    { title: "Waste Removal", desc: "No garbage of any kind should be left behind. This alpine lake is pristine and sacred." },
    { title: "Quiet Sanctuary", desc: "Loud music or disruptive behaviors are strictly prohibited around the holy shrine areas." }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Cultural Silos</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Sacred Khayer Lake Mythology &amp; Pilgrimage
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Discover the deep cultural roots of Khayer Baraha Temple. For centuries, mountain villagers have pilgrimaged to this 4,660m alpine sanctuary to receive blessings.
          </p>
        </div>

        {/* Legend Section */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">The Legend of Khayer Baraha</h2>
          <p className="text-stone-600 leading-relaxed">
            Khayer Lake is named after **Khayer Baraha**, a manifestation of the Hindu deity Lord Vishnu (as a wild boar) and a highly revered local mountain goddess. The local Magar and Gurung communities believe that the goddess residing in the lake holds the power to grant wishes, especially to childless couples seeking offspring. 
          </p>
          <p className="text-stone-600 leading-relaxed">
            Unlike many temples situated in towns, the shrine at Khayer Lake consists of a simple stone altar surrounded by tridents (Trishuls) and prayer flags. The simplicity of the temple directly beneath the massive south wall of Annapurna South reinforces its ancient, raw spiritual power.
          </p>
        </div>

        {/* Festival Section */}
        <div className="mt-12 p-8 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-4">
          <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-widest block">Annual Festival</span>
          <h3 className="text-xl font-bold text-stone-950">Janai Purnima Pilgrimage (August)</h3>
          <p className="text-stone-600 text-sm leading-relaxed">
            Every year during the full moon of August (**Janai Purnima**), thousands of pilgrims from the surrounding Myagdi and Mustang districts make the grueling trek up to the lake. Traditional shamans (Dhami/Jhankri) lead processions beating drums, performing rituals, and changing sacred threads. Pilgrims take holy baths in the freezing waters of the lake to cleanse their sins and make animal sacrifices or release goats at the shrine.
          </p>
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs font-medium leading-relaxed">
            Note: During the festival in August, the weather is monsoon-heavy, making trail conditions slippery and visibility low. We recommend visiting during the clear autumn (October-November) or spring (March-April) seasons.
          </div>
        </div>

        {/* Code of Conduct */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Visitor Rules of Conduct</h2>
          <p className="text-stone-600 leading-relaxed">
            Because Khayer Lake is a highly respected holy sanctuary, visitors are expected to follow strict local codes of conduct:
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {codeOfConduct.map((rule, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-2xl">
                <h4 className="font-extrabold text-stone-950 text-sm flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  {rule.title}
                </h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">{rule.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              Our guides are trained to respect and preserve indigenous Magar cultural traditions. We ensure our clients adhere to all religious customs during the side-trip.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Experience the Spiritual Himalayas</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Book the complete 9-day itinerary to experience the sacred Khayer Lake side-hike led by experienced guides from the local Magar community.
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
