import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/viewpoints/sunrise-at-khopra-ridge",
  },
  title: "Sunrise at Khopra Ridge: Best Time, Mountain Views & Photography Guide",
  description: "Discover what makes sunrise at Khopra Ridge one of Nepal's most peaceful Himalayan views — mountains visible, best time to go, photography tips, and how to prepare.",
};

export default function Page() {
  const morningChecklist = [
    "Set an alarm for at least 30 minutes before official sunrise",
    "Dress in full warm layers (thermal base, fleece/down jacket, windproof shell) before stepping outside",
    "Bring a hot tea or thermos from the lodge kitchen",
    "Check your camera or phone battery the night before (cold drains batteries quickly)",
    "Confirm weather forecast and estimated sunrise time with your guide the evening prior"
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          {/* Breadcrumbs */}
          <div className="mb-6 flex items-center gap-2 text-xs text-stone-400 font-semibold">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/viewpoints/khopra-ridge-viewpoint" className="hover:text-emerald-400 transition-colors">Viewpoints</Link>
            <span>/</span>
            <span className="text-emerald-400">Sunrise at Khopra Ridge</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Sunrise &amp; Alpenglow Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Sunrise at Khopra Ridge: Complete Guide to Nepal&apos;s Most Spectacular Himalayan Sunrise
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Mountain views, alpenglow sequence, best viewing seasons, photography tips, and pre-dawn cold preparation on the <Link href="/guides/khopra-ridge-ultimate-guide" className="text-emerald-400 underline hover:text-emerald-300 font-semibold">Khopra Ridge Trek</Link>.
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
              <a href="#why-sunrise-best" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why Sunrise Is Special
              </a>
              <a href="#visible-mountains" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Visible Mountains
              </a>
              <a href="#sunrise-sequence" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Sunrise Light Sequence
              </a>
              <a href="#best-time-timing" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Best Seasons &amp; Timing
              </a>
              <a href="#best-viewing-spots" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Best Viewing Spots
              </a>
              <a href="#photography-tips" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Photography Tips
              </a>
              <a href="#cold-weather-prep" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Cold Weather Preparation
              </a>
              <a href="#khopra-vs-poonhill" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Khopra vs. Poon Hill
              </a>
              <a href="#practical-etiquette" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Practical Tips &amp; Etiquette
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
                Inquire Guided Trek
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Sunrise at Khopra Ridge: Complete Guide to Nepal&apos;s Most Spectacular Himalayan Sunrise
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                There&apos;s a particular kind of quiet that settles over Khopra Ridge in the hour before dawn. No queues of headlamps jostling for a viewing spot, no crowded platform, just the ridge, the cold air, and a wall of Himalayan peaks waiting for the first light.
              </p>
              <p>
                Sunrise at Khopra Ridge is one of the most rewarding moments of the entire Annapurna region, and yet it remains far less crowded than better-known viewpoints. This guide covers everything you need to know before you go: which mountains you&apos;ll see, the best time of year to watch it, how to photograph it well, what to wear, and how it compares to Poon Hill. Whether you&apos;re still deciding on your trek route or counting down the days until you go, you&apos;ll leave this page knowing exactly what to expect.
              </p>
            </div>
          </article>

          {/* SECTION 1: WHY SUNRISE IS BEST */}
          <article id="why-sunrise-best" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Sunrise at Khopra Ridge Is One of the Best in Nepal
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>A Peaceful Alternative to Crowded Viewpoints:</strong> Popular locations like Poon Hill host hundreds of trekkers crowding a steel viewing platform at 5:00 AM. Khopra Ridge sees only 15–30 guests staying at the community eco-lodge. You can find a private grassy spot along the ridge, sip hot tea, and absorb the mountains in peaceful stillness.
              </p>
              <p>
                <strong>Direct Access from the Community Lodge:</strong> Sitting at 3,660 meters, the eco-lodge is built directly ON the ridgeline. You step right outside your room door to watch the entire 180-degree panorama without needing a separate 45-minute uphill stair climb in the dark.
              </p>
              <p>
                <strong>Scale &amp; Stillness:</strong> The light shifts across 8,000-meter peaks over 20 to 30 minutes, turning cold blue shadows into glowing golden peaks.
              </p>
            </div>
          </article>

          {/* SECTION 2: VISIBLE MOUNTAINS */}
          <article id="visible-mountains" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What Mountains Can You See at Sunrise?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Dhaulagiri I (8,167 m) &amp; First Alpenglow:</strong> Dhaulagiri I dominates the northwest across the Kali Gandaki Gorge. Because the sun rises behind the Annapurna range in the east, Dhaulagiri&apos;s massive East Face catches the very first rays of pink and gold sunlight while the valleys below remain in shadow.
              </p>
              <p>
                <strong>Annapurna South, Machhapuchhre &amp; Surrounding Peaks:</strong> To the east, <Link href="/mountains/annapurna-south-views" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Annapurna South (7,219m)</Link> and Hiunchuli light up next, followed by the iconic fishtail shape of Machhapuchhre (6,993m). The Nilgiri Range (North, Central, South), Tukuche Peak, and Gurja Himal fill out the horizon.
              </p>
              <p>
                <strong>Mountain Orientation (Left to Right):</strong> Facing northwest-to-east: Dhaulagiri I (far left) &rarr; Tukuche Peak &rarr; Nilgiri Range &rarr; Annapurna South (center) &rarr; Machhapuchhre (far right).
              </p>
            </div>
          </article>

          {/* SECTION 3: LIGHT SEQUENCE */}
          <article id="sunrise-sequence" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              The Sunrise Experience From Dawn to Full Daylight
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>1. Blue Hour (30 Mins Before Dawn):</strong> Deep indigo sky, sharp mountain silhouettes, and crisp freezing mountain air. Ideal time to set up tripods.
              </p>
              <p>
                <strong>2. The Alpenglow Phenomenon:</strong> Sunlight hits Dhaulagiri&apos;s upper snowfields before the sun reaches the valley floor, creating a brilliant pink-gold glow.
              </p>
              <p>
                <strong>3. Golden Hour Across the Himalayas:</strong> As the sun clears the horizon, warm golden light fills the Annapurna massif and illuminates the clouds settling inside Kali Gandaki Gorge.
              </p>
            </div>
          </article>

          {/* SECTION 4: BEST SEASONS & TIMING */}
          <article id="best-time-timing" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Time for Sunrise at Khopra Ridge
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Autumn (Late Sept–Nov):</strong> Clearest skies of the year with crystal-clear morning visibility.
              </p>
              <p>
                <strong>Spring (March–May):</strong> Warm daytime hiking with blooming rhododendron forests on lower trail sections.
              </p>
              <p>
                <strong>Winter (Dec–Feb):</strong> Sharpest air and pristine snow coverage, though early mornings drop below -5°C.
              </p>
              <p>
                <strong>Typical Sunrise Times:</strong> 5:45 AM in summer months; 6:45 AM in winter months. Plan to be outside 25 minutes before official sunrise.
              </p>
            </div>
          </article>

          {/* SECTION 5: BEST VIEWING SPOTS */}
          <article id="best-viewing-spots" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Places to Watch the Sunrise
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Community Lodge Terrace:</strong> The easiest and warmest spot — right outside your room with quick access to hot tea from the kitchen.
              </p>
              <p>
                <strong>Ridge Trail Knoll (10–15 Mins Walk):</strong> Walking slightly along the northern ridge trail provides elevated foreground angles featuring prayer flags and alpine pastures. Bring a headlamp and walk carefully on frost-covered rocks.
              </p>
            </div>
          </article>

          {/* SECTION 6: PHOTOGRAPHY TIPS */}
          <article id="photography-tips" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Sunrise Photography Tips at Khopra Ridge
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Camera Settings:</strong> Shoot in RAW to handle extreme dynamic range between glowing peaks and dark valleys. Use a tripod for blue-hour exposures.</li>
                <li><strong>Smartphone Tips:</strong> Use Panorama mode to capture the 180-degree sweep from Dhaulagiri to Machhapuchhre. Enable HDR for balanced exposure.</li>
                <li><strong>Creative Framing:</strong> Include foreground prayer flags, trekker silhouettes, or cold morning steam rising from your tea mug.</li>
              </ul>
            </div>
          </article>

          {/* SECTION 7: COLD WEATHER PREP */}
          <article id="cold-weather-prep" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How to Prepare for a Cold Himalayan Morning
            </h2>
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-4">
              <h3 className="font-bold text-stone-900 text-base">Simple Pre-Dawn Sunrise Checklist</h3>
              <ul className="space-y-2 text-xs text-stone-600">
                {morningChecklist.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* SECTION 8: KHOPRA VS POON HILL */}
          <article id="khopra-vs-poonhill" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Ridge vs Poon Hill for Sunrise
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                While Poon Hill is a classic short trek, <Link href="/viewpoints/khopra-ridge-viewpoint" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Khopra Ridge Viewpoint</Link> is 450 meters higher, offers superior closeness to Dhaulagiri across Kali Gandaki, and has zero crowd congestion. Read our detailed <Link href="/viewpoints/khopra-vs-poon-hill-views" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Khopra vs Poon Hill Views Guide</Link>.
              </p>
            </div>
          </article>

          {/* SECTION 9: PRACTICAL ETIQUETTE */}
          <article id="practical-etiquette" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Practical Tips for Enjoying Sunrise at Khopra Ridge
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Keep morning voices quiet to respect sleeping lodge guests. Stay 15 minutes after the sun clears the horizon — as the light softens, valley fog lifts to reveal dramatic gorge depths below.
              </p>
            </div>
          </article>

          {/* SECTION 10: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Sunrise at Khopra Ridge
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Is sunrise at Khopra Ridge worth it?",
                  a: "Yes! It combines a 180-degree mountain panorama with zero crowds, right outside your community lodge door."
                },
                {
                  q: "What time is sunrise at Khopra Ridge?",
                  a: "Sunrise falls between 5:45 AM (summer) and 6:45 AM (winter). Wake up 30 minutes early for blue-hour views."
                },
                {
                  q: "Which mountains are visible from Khopra Ridge at sunrise?",
                  a: "Dhaulagiri I, Annapurna South, Machhapuchhre (Fishtail), Nilgiri, Hiunchuli, Tukuche Peak, and Gurja Himal."
                },
                {
                  q: "Can you watch sunrise directly from the community lodge?",
                  a: "Yes! The lodge terrace sits directly on the ridge, eliminating the need for a pre-dawn climb."
                },
                {
                  q: "Is Khopra Ridge better than Poon Hill for sunrise?",
                  a: "Khopra is 450m higher, significantly quieter, and provides closer views of Dhaulagiri across Kali Gandaki."
                },
                {
                  q: "What is the best season for sunrise at Khopra Ridge?",
                  a: "Autumn (late Sept–Nov) offers crystal-clear skies, while Spring (March–May) brings blooming rhododendrons."
                },
                {
                  q: "How cold does it get before sunrise?",
                  a: "Early pre-dawn temperatures drop between 0°C and -5°C (23°F). Thermal layers and down jackets are required."
                },
                {
                  q: "What should I wear for sunrise?",
                  a: "Base thermal layer, fleece/down jacket, windproof shell, gloves, beanie, and warm socks."
                },
                {
                  q: "Is Khopra Ridge suitable for beginner trekkers?",
                  a: "Yes, provided beginners have good fitness for multi-day walking and proper altitude pacing."
                },
                {
                  q: "Can I take good sunrise photos with a smartphone?",
                  a: "Yes. Use Panorama mode for the peak sweep and enable HDR mode for balanced mountain/sky exposures."
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
              Sunrise at Khopra Ridge is one of the most serene and awe-inspiring sights in Nepal. Step outside your lodge, sip hot tea, and watch Dhaulagiri glow gold in the morning sun!
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Plan Your Khopra Sunrise Departure
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Ready to experience it for yourself? Explore our complete Khopra Ridge Trek itinerary and let our experienced local guides help you plan a trek built around this unforgettable sunrise.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Explore Guided Trek Itineraries &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Trek:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/viewpoints/sunset-at-khopra-ridge" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read the Sunset at Khopra Ridge guide
                  </Link>
                  <Link href="/viewpoints/khopra-ridge-viewpoint" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read main Khopra Ridge Viewpoint guide
                  </Link>
                  <Link href="/guides/khayer-lake-ultimate-guide" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Explore Sacred Khayer Lake Day Hike guide
                  </Link>
                  <Link href="/planning/teahouse-locator" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Use our interactive Teahouse Finder tool
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* EEAT Author Verification Banner */}
          <div className="p-6 rounded-3xl bg-stone-100 border border-stone-200 flex items-start gap-4">
            <span className="text-2xl mt-0.5">🏔️</span>
            <div>
              <h4 className="font-bold text-stone-900 text-sm font-sans font-medium">Reviewed by Local Guides</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                This sunrise &amp; photography guide is maintained by our licensed local trekking guides operating out of Kathmandu and Pokhara. Nepal Tourism Operator License #8928-091. Email: <a href="mailto:khopraridge51@gmail.com" className="text-emerald-700 font-semibold hover:underline">khopraridge51@gmail.com</a>.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
