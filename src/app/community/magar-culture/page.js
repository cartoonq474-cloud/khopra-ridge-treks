import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Culture Silos</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Magar Culture in the Khopra Valleys
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Discover the rich heritage of the Magar ethnic community in Swanta, Chhistibung, and Ulleri, covering language, folklore, farming, and honey harvesting.
          </p>
        </div>

        {/* Magar History & Heritage */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">The Magar Communities of the Myagdi District</h2>
          <p className="text-stone-600 leading-relaxed">The Magar people are one of the largest indigenous ethnic groups in Nepal, with a major concentration in the western mid-hills. Along the Khopra Ridge Trek circuit (especially in the Myagdi district villages of Swanta and Nangi), Magar families form the backbone of the community-based lodging cooperative.
          </p>
          <p className="text-stone-600 leading-relaxed">Historically, Magar communities have practiced a mixture of agriculture, animal husbandry, and craftsmanship. Their traditional houses are often distinctively painted with red mud plaster and white chalk accents, built along terraced fields where they cultivate millet, barley, potatoes, and corn.
          </p>
        </div>

        {/* Magar Cultural Pillars */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
            <h3 className="text-lg font-bold text-stone-950">Language & Shamanic Bon</h3>
            <p className="mt-2 text-xs text-stone-500 leading-relaxed">The Magar language belongs to the Tibeto-Burman language family. While many Magars practice Tibetan Buddhism or Hinduism, their ancestral religious practices are deeply rooted in shamanism and nature worship, performed by spiritual healers called Dhamis.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
            <h3 className="text-lg font-bold text-stone-950">Organic Mountain Farming</h3>
            <p className="mt-2 text-xs text-stone-500 leading-relaxed">In Swanta village, Magar families practice advanced terraced farming. They cultivate organic vegetables, maintain honeybee hives, and herd sheep and buffalo. These organic farm products directly supply the community lodges along the trek.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
            <h3 className="text-lg font-bold text-stone-950">Wild Honey Harvesting</h3>
            <p className="mt-2 text-xs text-stone-500 leading-relaxed">Magar hunters participate in traditional high-cliff honey hunting. During the spring and autumn months, harvesters scale cliffs using handmade hemp rope ladders to collect honey from the giant Himalayan honeybee (Apis laboriosa).
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
            <h3 className="text-lg font-bold text-stone-950">Traditional Music & Dance</h3>
            <p className="mt-2 text-xs text-stone-500 leading-relaxed">Magar folklore is rich in song and dance styles like the Kauda, Salaijo, and Sorathi. These dances are performed during agricultural festivals, weddings, and community gatherings, accompanied by the traditional Nepalese drum (Madal).
            </p>
          </div>
        </div>

        {/* Experiencing Magar Culture */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Magar Cultural Stays on the Loop</h3>
          <ul className="space-y-2 text-xs leading-relaxed list-disc pl-5">
            <li><strong>Swanta Homestay Hospitality:</strong>Stay at Magar lodges in Swanta to enjoy organic, home-cooked food and learn about mountain farming.</li>
            <li><strong>Taste Local Honey:</strong>Taste wild, organic honey harvested locally from hives in the Swanta valley.</li>
            <li><strong>Community Lodge Chats:</strong>Talk with lodge operators at Bayeli or Chhistibung to learn about the community lodge model initiated by Magar social leader Mahabir Pun.</li>
          </ul>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5"></span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">Our guides are native to the western hills and are fluent in Magar language dialects. All information is sourced directly from village elders in Swanta.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Support Magar Village Communities</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">Book our 9-day core itinerary. 100% of lodge fees in Swanta and Chhistibung directly fund the local community schools and cooperative clinics.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/#book"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-all"
              >Book Your Trek
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
