import React from "react";
import Link from "next/link";

export default function Page() {
  const pandas = [
    {
      title: "Bamboo Habitat Understory",
      desc: "Red pandas are specialist herbivores. Over 98% of their diet consists of bamboo shoots and leaves. The damp bamboo understories beneath the oak canopies of Swanta and Dobato are prime red panda territories."
    },
    {
      title: "Solitary & Elusive Nature",
      desc: "Primarily active at dusk and dawn (crepuscular), red pandas spend the heat of the day sleeping curled up in high tree branches, making them extremely difficult to spot without a trained eye."
    },
    {
      title: "Severe Conservation Challenges",
      desc: "Listed as Endangered on the IUCN Red List. Primary threats include habitat fragmentation from cattle trails, deforestation for timber, and accidental entanglement in local shepherd traps."
    }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center gap-2 text-xs text-stone-500 font-semibold">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/ecology/annapurna-conservation-area-guide" className="hover:text-emerald-600 transition-colors">Ecology</Link>
          <span>/</span>
          <span className="text-stone-800">Red Pandas</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Endangered Species</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Red Pandas on the Khopra Ridge Trail
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Discover the elusive forest dweller. A detailed guide to red panda populations, their bamboo habitats, and conservation efforts along the loop.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">A Rare Forest Dweller</h2>
          <p>The red panda (*Ailurus fulgens*) is one of the most enigmatic and endangered mammals in the Himalayas. Tucked inside the dense, moist oak and rhododendron forests of the Annapurna foothills, particularly around Swanta and the valleys below Dobato, are some of the last remaining red panda habitats in Nepal.
          </p>
          <p>Because the Khopra Ridge circuit remains less developed and quieter than the main Annapurna tourist hubs, these shy creatures are occasionally spotted by patient, quiet hikers.
          </p>
        </div>

        {/* Pandas details */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Red Panda Ecology & Habitats</h3>
          <div className="space-y-6">
            {pandas.map((pd, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base">{pd.title}</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">{pd.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sighting Etiquette */}
        <div className="mt-12 p-8 bg-stone-900 border border-stone-850 rounded-3xl text-stone-300 space-y-4">
          <h3 className="text-lg font-bold text-white">Ethical Red Panda Sighting Protocol</h3>
          <ul className="list-disc pl-6 text-xs leading-relaxed text-stone-404 space-y-3">
            <li>
              <strong>Maintain Absolute Silence:</strong>Red pandas have highly sensitive hearing. Loud noises or shouting will cause them to flee up to the high tree branches immediately.
            </li>
            <li>
              <strong>Keep Your Distance:</strong>Never attempt to climb trees or approach within 20 meters of a red panda. Keep binoculars or zoom lenses handy for viewing.
            </li>
            <li>
              <strong>No Flash Photography:</strong>Flash photography blinds and terrifies wild animals, disrupting their crepuscular navigation. Use high ISO settings instead.
            </li>
            <li>
              <strong>Report Sightings:</strong>If you spot a red panda, record the location and report it to your guide or the local ACAP checkpost. This helps community database tracking.
            </li>
          </ul>
        </div>

        {/* EEAT Footnote */}
        <div className="mt-12 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5"></span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">First-Hand Expert Insight</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">This guide is maintained and reviewed by our licensed local trekking guides operating out of Pokhara. We regularly update routes, weather advisories, and community lodge statuses based on active trail checks.
            </p>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="mt-16 rounded-3xl bg-emerald-950 p-8 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl font-bold">Explore Himalayan Wilderness</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">Our guides are committed to ethical wildlife tourism, ensuring we observe animals safely without disrupting fragile sub-alpine habitats.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >Inquire now
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
