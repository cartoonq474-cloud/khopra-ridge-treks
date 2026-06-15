import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Culture Silos</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Gurung Culture in the Annapurna Foothills
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Explore the heritage of the Gurung (Tamu) people, their deep mountain history, local architecture, Rodhi traditions, and roles in Ghandruk.
          </p>
        </div>

        {/* Gurung History & Origin */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Origins of the Tamu People</h2>
          <p className="text-stone-600 leading-relaxed">
            The Gurung people, who call themselves Tamu, are an indigenous ethnic group of Nepal primarily inhabiting the southern slopes of the Annapurna mountain range. Historically, they migrated from Tibet and developed a distinct culture, practicing a blend of Buddhism, Bon (an ancient pre-Buddhist shamanic religion), and Hindu customs.
          </p>
          <p className="text-stone-600 leading-relaxed">
            In the Khopra Ridge Trek loop, the village of Ghandruk serves as the cultural capital of the Gurung community. Walking through its slate-roofed houses, you will witness a lifestyle that has adapted to high-altitude agriculture, sheep farming, and famously, service in the British Gurkha regiments.
          </p>
        </div>

        {/* Key Cultural Pillars */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
            <h3 className="text-lg font-bold text-stone-950">Traditional Architecture</h3>
            <p className="mt-2 text-xs text-stone-500 leading-relaxed">
              Gurung villages are known for their tightly clustered layout. Houses are constructed from local stone, mud mortar, and topped with heavy slate roofs. The open-paved courtyards serve as communal work spaces for drying grain and socializing.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
            <h3 className="text-lg font-bold text-stone-950">The Rodhi Tradition</h3>
            <p className="mt-2 text-xs text-stone-500 leading-relaxed">
              Rodhi is a traditional social institution where Gurung youth gather in the evenings to sing, dance, and discuss community matters. Historically, it served as a collaborative work group for farming and weaving, as well as a matchmaking institution.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
            <h3 className="text-lg font-bold text-stone-950">Shamanic Bon Heritage</h3>
            <p className="mt-2 text-xs text-stone-500 leading-relaxed">
              Alongside Tibetan Buddhism, the Gurungs maintain strong Bon practices. Shamans (known as Ghyabre and Poju) perform traditional rituals to ward off evil spirits, bless harvests, and perform funeral ceremonies.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
            <h3 className="text-lg font-bold text-stone-950">Gurkha Soldiers</h3>
            <p className="mt-2 text-xs text-stone-500 leading-relaxed">
              Gurung men have a long and honorable history of serving as Gurkha soldiers in the British and Indian Armies. The remittances and pensions from Gurkha service have significantly contributed to the economic development of Annapurna villages.
            </p>
          </div>
        </div>

        {/* Cultural Badges */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Experiencing Gurung Culture on the Trail</h3>
          <ul className="space-y-2 text-xs leading-relaxed list-disc pl-5">
            <li><strong>Gurung Museum in Ghandruk:</strong> Visit the local museum to view traditional agricultural tools, brass cookware, and historical clothing.</li>
            <li><strong>Traditional Dress:</strong> Try on the standard Gurung dress (featuring the cotton gunyo-cholo for women and bhangra for men) for a photo keepsake.</li>
            <li><strong>Local Festivals:</strong> Plan your trek during Tamu Lhosar (Gurung New Year) in late December to witness vibrant community dances and feasts.</li>
          </ul>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              Our guides are native to the Annapurna region and have spent years working closely with Gurung village development committees. All cultural facts are verified directly by local historians.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Immerse Yourself in Gurung Heritage</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Book our 9-day core itinerary. We include cultural stays and expert-guided heritage tours through Ghandruk village.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/#book"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-all"
              >
                Book Your Trek
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
