import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/nodes/ghandruk-things-to-do",
  },
  title: "Top Things to Do in Ghandruk: 12 Best Activities, Attractions & Experiences",
  description: "Discover the best things to do in Ghandruk, from Gurung culture and Himalayan viewpoints to museums, photography spots, food, and local village life.",
};

export default function Page() {
  const activities = [
    {
      title: "Explore Traditional Stone-Paved Streets",
      desc: "Wander through the old quarter of Ghandruk built from local slate and stone. The narrow, maze-like walkways lead past local crop drying yards and slate-roofed homes that have stood for generations."
    },
    {
      title: "Visit the Historic Gurung Museum",
      desc: "Step inside a traditional stone house to view antique agricultural implements, household cookware, ceremonial outfits, and weaponry. Labels detail historical custom and community legacy."
    },
    {
      title: "Traditional Dress & Photography",
      desc: "Rent authentic Gurung clothing (Ghalek for men, Gunyo Cholo for women) from local families. Pose for pictures with the massive backdrop of Annapurna South and Machhapuchhre directly behind you."
    },
    {
      title: "Spectacular Himalayan Balcony Views",
      desc: "Enjoy unobstructed views of Annapurna South (7,219m), Hiunchuli (6,441m), and Machhapuchhre (6,993m) directly from guesthouse terraces and village viewpoints without needing extra climbing."
    },
    {
      title: "Watch Peak Sunrise",
      desc: "Set an early alarm to see the sunrise. Watch the morning light hit the peak of Machhapuchhre first, turning it pink and gold, before the sun gradually reaches the lower slopes."
    },
    {
      title: "Witness Authentic Local Village Rhythms",
      desc: "Observe farmers tending terraced wheat or millet fields, children walking to local schools along stone pathways, and households going about daily chores that have remained unchanged for decades."
    },
    {
      title: "Shop for Handmade Crafts",
      desc: "Support Ghandruk's local economy by purchasing handwoven wool items, custom silver jewelry, or carved wooden crafts directly from village artisans and cooperative shops."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="mb-6 flex items-center gap-2 text-xs text-stone-400 font-semibold">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/nodes" className="hover:text-emerald-400 transition-colors">Nodes</Link>
            <span>/</span>
            <Link href="/nodes/ghandruk-village-guide" className="hover:text-emerald-400 transition-colors">Ghandruk Guide</Link>
            <span>/</span>
            <span className="text-emerald-400">Things to Do</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Local Attractions &amp; Experiences
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Top Things to Do in Ghandruk Village, Nepal
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Discover the best local experiences, cultural attractions, photography spots, and hidden sights in Annapurna&apos;s primary Gurung capital.
          </p>
        </div>
      </section>

      {/* DYNAMIC TWO COLUMN LAYOUT */}
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12 w-full flex-1">
        {/* STICKY TABLE OF CONTENTS SIDEBAR */}
        <aside className="lg:col-span-1">
          <div className="sticky top-8 bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-4 max-h-[85vh] overflow-y-auto hidden lg:block">
            <h3 className="text-xs font-black uppercase text-stone-400 tracking-wider pb-3 border-b border-stone-100">
              Table of Contents
            </h3>
            <nav className="flex flex-col gap-1 text-sm">
              <a href="#why-popular" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why Ghandruk?
              </a>
              <a href="#things-to-do" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Top Activities
              </a>
              <a href="#beyond-village" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Beyond the Village
              </a>
              <a href="#food-drinks" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Food Experiences
              </a>
              <a href="#day-trip" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Day Trip vs Overnight
              </a>
              <a href="#trekker-significance" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trekker Info
              </a>
              <a href="#seasons" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Best Seasons
              </a>
              <a href="#stay" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Where to Stay
              </a>
              <a href="#tips" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Local Travel Tips
              </a>
              <a href="#faq" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Frequently Asked Qs
              </a>
            </nav>
            <div className="pt-4 border-t border-stone-100">
              <Link 
                href="/contact"
                className="w-full text-center block bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider py-3 rounded-2xl shadow-sm transition duration-200"
              >
                Inquire with Planners
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Most trekkers walk through Ghandruk on their way to somewhere else. They drop their bags at a teahouse for the night, eat a plate of dal bhat, and head out again at sunrise toward Tadapani or Poon Hill without giving the village a second look.
              </p>
              <p>
                That&apos;s a mistake we see often, and it&apos;s one worth correcting before you arrive.
              </p>
              <p>
                Ghandruk is the largest and most culturally significant Gurung settlement in the Annapurna region, and it rewards travelers who slow down. Between its stone-paved lanes, a museum that preserves centuries of Gurung history, and balcony views of Annapurna South and Machhapuchhre that rival anything higher up the trail, there&apos;s enough here to fill a full day on its own. This guide covers the best things to do in Ghandruk, the places worth your time, and the practical details — food, accommodation, timing, and access — you&apos;ll need to plan the visit properly.
              </p>
            </div>
          </article>

          {/* SECTION: WHERE IS GHANDRUK & WHY POPULAR */}
          <article id="why-popular" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Where Is Ghandruk and Why Is It So Popular Among Travelers?
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                <strong>Where Ghandruk Is Located:</strong> Ghandruk sits at roughly 1,940 meters in the Kaski district, inside the Annapurna Conservation Area. It&apos;s about 42 kilometers from Pokhara, reachable by a winding mountain road that climbs steadily through forested hills and terraced farmland.
              </p>
              <p>
                The village occupies a natural balcony on the hillside, facing directly into the Annapurna massif. That positioning is no accident — Gurung settlements in this region were traditionally built on south-facing slopes for sun exposure, water access, and unobstructed mountain views, and Ghandruk is one of the best surviving examples of that pattern.
              </p>
              <p>
                <strong>Why Ghandruk Is Famous:</strong> Ghandruk&apos;s reputation rests on three things: its scenery, its culture, and its role as a trekking hub. It&apos;s one of the few villages in the Annapurna region where you get full, uninterrupted views of Annapurna South, Hiunchuli, and Machhapuchhre without needing to gain significant altitude.
              </p>
              <p>
                It&apos;s also become a standard first or second night stop for trekkers heading toward Poon Hill, Tadapani, Khopra Ridge, and the Annapurna Base Camp route. That steady flow of trekkers over the decades has helped fund infrastructure, schools, and the well-maintained trail network the village is known for today — without diluting its character.
              </p>
              <p>
                <strong>Cultural Importance of the Gurung Community:</strong> Ghandruk is the cultural capital of the Gurung people in the Annapurna region. The Gurung community has lived in this part of Nepal for centuries, with a distinct language, dress, farming traditions, and a long, well-documented history of service in the British and Indian Gurkha regiments.
              </p>
            </div>
          </article>

          {/* SECTION: BEST THINGS TO DO IN GHANDRUK */}
          <article id="things-to-do" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Things to Do in Ghandruk Village
            </h2>
            <p className="text-stone-600 text-xs font-semibold leading-relaxed">
              These experiences are accessible directly from the village center, with no extra trekking required:
            </p>
            <div className="grid gap-6 md:grid-cols-2 mt-6">
              {activities.map((act, i) => (
                <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-2">
                  <h4 className="font-extrabold text-stone-950 text-base">{act.title}</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">{act.desc}</p>
                </div>
              ))}
            </div>

            {/* MID ARTICLE CTA */}
            <section className="bg-emerald-950 border border-emerald-800 p-6 rounded-3xl text-white my-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1">
                  <h4 className="font-bold text-base">Want to experience Ghandruk with the people who know it best?</h4>
                  <p className="text-xs text-emerald-200/80">Our guided Annapurna treks include a dedicated village walking tour led by a resident Gurung guide.</p>
                </div>
                <Link 
                  href="/contact"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-sm transition duration-200 shrink-0 text-center"
                >
                  Inquire About Guided Treks &rarr;
                </Link>
              </div>
            </section>
          </article>

          {/* SECTION: BEYOND THE MAIN VILLAGE */}
          <article id="beyond-village" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Places to Visit in Ghandruk Beyond the Main Village
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                A handful of spots just outside the village center round out a Ghandruk visit and reward travelers with a bit more time on their hands.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Scenic Village Viewpoints for Panoramic Photography:</strong> A short walk above the main village — generally 10 to 15 minutes uphill — leads to open viewpoints with wider panoramas of the Annapurna range and the valley below. These spots are quieter than the village center and give you cleaner sightlines.
                </li>
                <li>
                  <strong>Traditional Stone Houses and Old Village Area:</strong> The oldest section of Ghandruk preserves house styles that predate the newer guesthouse construction near the main trail. Thick stone walls, low doorways, and slate roofing weighted with stones are common features.
                </li>
                <li>
                  <strong>Nearby Cultural and Religious Landmarks:</strong> Small temples and community gathering spaces are scattered through the village, often unmarked on maps but easy to find by asking locally. These sites remain part of everyday community life.
                </li>
              </ul>
            </div>
          </article>

          {/* SECTION: FOOD EXPERIENCES */}
          <article id="food-drinks" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Food Experiences You Should Try in Ghandruk
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Food is an underrated part of the Ghandruk experience, and the village offers more variety than most stops along the Annapurna trekking routes.
              </p>
              <p>
                <strong>Try Traditional Nepali Dal Bhat:</strong> Dal bhat — lentil soup, rice, vegetable curry, and pickles — is the standard trekking meal across Nepal, and Ghandruk&apos;s teahouses generally do it well, often with ingredients grown locally. It&apos;s filling, reliably available, and the traditional &quot;unlimited refill&quot; custom makes it practical fuel for the trail.
              </p>
              <p>
                <strong>Enjoy Fresh Momos and Village Snacks:</strong> Momos (steamed or fried dumplings filled with vegetables, buffalo meat, or cheese) are widely available and a good lighter alternative. Several lodges also serve Tibetan bread, noodle soups, and simple egg dishes.
              </p>
              <p>
                <strong>Relax at Scenic Cafés With Himalayan Coffee Views:</strong> A number of teahouses and small cafés serve organic Himalayan coffee grown in the surrounding hills, with terrace seating positioned directly toward Annapurna South. Sitting with a coffee here is one of the simplest and most underrated things to do in the village.
              </p>
            </div>
          </article>

          {/* SECTION: DAY TRIP VS OVERNIGHT */}
          <article id="day-trip" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Can You Visit Ghandruk as a Day Trip From Pokhara?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Yes — though whether it&apos;s the right choice depends on what you want out of the visit.
              </p>
              <p>
                <strong>Distance and Travel Time:</strong> Ghandruk is roughly 42 kilometers from Pokhara by road. A private jeep takes about 2 to 2.5 hours each way, depending on road conditions, while shared jeeps and local buses can take 3 to 4 hours.
              </p>
              <p>
                <strong>Is One Day Enough?</strong> A day trip gives you enough time to walk the village, visit the museum, and catch the main viewpoints — roughly 3 to 4 hours of actual exploration once you account for travel. What you&apos;ll miss is sunrise, which many travelers consider the single best reason to stay overnight.
              </p>
              <p>
                If your schedule allows it, an overnight stay is the better option. If not, a well-planned day trip still covers the essentials.
              </p>
            </div>
          </article>

          {/* SECTION: TREKKER SIGNIFICANCE */}
          <article id="trekker-significance" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Ghandruk Is Important for Trekkers in the Annapurna Region
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                For most visitors, Ghandruk isn&apos;t an isolated stop — it&apos;s connected to a much larger network of trekking routes.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Gateway for Annapurna Trekking Routes:</strong> Ghandruk functions as a hub village, sitting at the intersection of several well-known trekking routes. Its position and steady flow of trekkers have made it a natural starting or stopping point.</li>
                <li><strong>Trekking Connections to Tadapani and Poon Hill:</strong> Well-marked trails lead north to Tadapani and onward toward Poon Hill. Ghandruk is a crucial junction point on longer itineraries rather than a dead end.</li>
                <li><strong>acclimatization Night Stop:</strong> The elevation gain from Pokhara to Ghandruk is moderate enough to ease acclimatization, while still delivering a rewarding cultural and scenic experience before the trail gets more demanding further north.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: SEASONS */}
          <article id="seasons" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Time to Visit Ghandruk for the Best Experience
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-stone-600 text-sm">
              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">Spring (March to May)</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Rhododendron blooms across the hillsides, with stable weather and good mountain visibility, particularly in the mornings.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">Autumn (September to Nov)</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Skies are clearest, temperatures are comfortable, and you get peak, cloud-free views of Annapurna South and Machhapuchhre.
                </p>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">Winter &amp; Monsoon</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Winter (Dec-Feb) brings cold nights but clear skies. Monsoon (June-Aug) brings frequent rain, mud, and obscured views.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION: WHERE TO STAY */}
          <article id="stay" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Where to Stay in Ghandruk Village
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Traditional Tea Houses:</strong> Simple twin rooms, shared bathrooms in most budget lodges, and meals served on-site. Many have terrace seating specifically angled toward the mountains.
              </p>
              <p>
                <strong>Village Homestays:</strong> For a deeper cultural experience, community-run homestays place you directly into a local household. This offers direct interaction with local family life, though with fewer amenities than a dedicated teahouse.
              </p>
              <p>
                <strong>Facilities:</strong> Most teahouses offer basic solar electricity, charging for a small fee, and intermittent WiFi. Hot showers are usually available for an extra charge, and bathrooms range from attached private facilities to shared toilets.
              </p>
            </div>
          </article>

          {/* SECTION: TIPS */}
          <article id="tips" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Local Travel Tips for First-Time Visitors
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Best Time for Photography:</strong> Early morning, generally between 6:00 and 8:00 AM, consistently offers the clearest views of Machhapuchhre and Annapurna South before clouds build up.
              </p>
              <p>
                <strong>What to Pack:</strong> Layered clothing is essential — mornings and evenings are cold while midday sun can be intense. Pack rain protection, comfortable walking shoes, and a basic camera/phone.
              </p>
              <p>
                <strong>Safety:</strong> Ghandruk&apos;s altitude is moderate enough that altitude sickness is rarely a concern, but stone pathways can be slippery after rain, especially on the steeper sections near the old village.
              </p>
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Ghandruk
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Is Ghandruk worth visiting in Nepal?",
                  a: "Yes. Ghandruk combines close-range Himalayan views, strong Gurung cultural heritage, a dedicated museum, and well-developed teahouse infrastructure — all without requiring difficult trekking to reach. It's worth dedicating a half-day or full day to, rather than treating it as a brief overnight stop."
                },
                {
                  q: "What are the best things to do in Ghandruk?",
                  a: "The top activities include visiting the Gurung Museum, walking the stone-paved old village streets, photographing Annapurna South and Machhapuchhre from village viewpoints, trying traditional Gurung dress for photos, watching sunrise over the peaks, and sampling local food like dal bhat, momos, and Himalayan coffee."
                },
                {
                  q: "Can I visit Ghandruk as a day trip from Pokhara?",
                  a: "Yes. Ghandruk is about 42 kilometers from Pokhara, roughly 2 to 2.5 hours by private jeep. A day trip allows 3 to 4 hours of exploration, though you'll miss sunrise, which is one of the village's highlights."
                },
                {
                  q: "What is Ghandruk famous for?",
                  a: "Ghandruk is best known as the cultural capital of the Gurung community in the Annapurna region, for its unobstructed views of Annapurna South and Machhapuchhre, and for its role as a major gateway village on Annapurna trekking routes."
                },
                {
                  q: "What mountains can you see from Ghandruk?",
                  a: "From the village, you can see Annapurna South (7,219m), Hiunchuli (6,441m), and Machhapuchhre (6,993m), all visible without additional elevation gain."
                },
                {
                  q: "How many days should I stay in Ghandruk?",
                  a: "One overnight is generally enough to see the village properly, including sunrise. Travelers with more time sometimes add a second night to explore nearby viewpoints or use Ghandruk as a base for a short loop toward Tadapani."
                },
                {
                  q: "What is the best season to visit Ghandruk?",
                  a: "Autumn (September to November) offers the clearest mountain views and most stable weather. Spring (March to May) is a strong second choice, with rhododendron blooms and generally good visibility."
                },
                {
                  q: "Is Ghandruk suitable for beginner travelers?",
                  a: "Yes. Unlike many Annapurna trekking destinations, Ghandruk can be reached by road, making it accessible to travelers who aren't doing a multi-day trek. The village itself involves only gentle walking."
                },
                {
                  q: "Are there hotels and tea houses in Ghandruk?",
                  a: "Yes. Ghandruk has a well-developed range of teahouses and several homestay options, offering meals, basic electricity, and varying levels of bathroom facilities."
                },
                {
                  q: "Do I need trekking permits to visit Ghandruk?",
                  a: "Yes. Ghandruk lies within the Annapurna Conservation Area, so visitors need an ACAP permit, and most travelers also carry a TIMS card if continuing on to other trekking routes in the region."
                }
              ].map((faq, idx) => (
                <details 
                  key={idx} 
                  className="group bg-white border border-stone-200 rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer select-none transition-all duration-200 hover:border-emerald-500/30"
                >
                  <summary className="flex items-center justify-between font-bold text-stone-900 text-sm sm:text-base list-none">
                    <span>{faq.q}</span>
                    <span className="text-stone-400 group-open:rotate-180 transition-transform duration-200 text-lg">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </article>

          {/* SECTION: CONCLUSION */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-955">Conclusion</h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              Ghandruk rewards travelers who treat it as a destination rather than a checkpoint. The combination of close-range Himalayan views, a living Gurung cultural tradition, and genuinely good food and hospitality is hard to find elsewhere in the Annapurna region without a multi-day trek to reach it.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              Whether you&apos;re passing through on a longer trekking itinerary or making the trip specifically to see the village, giving Ghandruk a proper half-day or overnight stay — rather than rushing through — is consistently one of the best decisions trekkers make on this route.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Ready to add Ghandruk to your Annapurna itinerary?
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Our local guides build it into every route through the region, with the village experience and trekking logistics handled together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Plan Your Trek With Us &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Trek:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/planning/khopra-trek-permits" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Check trekking permit requirements (ACAP &amp; TIMS)
                  </Link>
                  <Link href="/planning/khopra-trek-cost" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Estimate your trip costs with our cost calculator
                  </Link>
                  <Link href="/planning/packing-checklist" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Get the interactive packing checklist for your gear
                  </Link>
                  <Link href="/weather/best-time-to-trek" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Check seasonal weather conditions before you go
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* EEAT Author Verification Banner */}
          <div className="p-6 rounded-3xl bg-stone-100 border border-stone-200 flex items-start gap-4">
            <span className="text-2xl mt-0.5">🏔️</span>
            <div>
              <h4 className="font-bold text-stone-900 text-sm font-sans font-medium">Reviewed by Trail Experts</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                This Ghandruk Village activities guide is reviewed by certified local guides based in Kathmandu. We regularly inspect road conditions, trailhead access, and village homestay registries to keep our details current.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
