import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/viewpoints/best-photography-spots",
  },
  title: "Best Photography Spots on the Khopra Trek: Viewpoints, Sunrise Tips & Camera Guide",
  description: "Discover the best photography spots on the Khopra Trek — from Khopra Ridge to Khayer Lake. Get sunrise timing, camera gear tips, and seasonal advice from local guides.",
};

export default function Page() {
  const photoSpots = [
    {
      name: "Khopra Ridge Viewpoint (3,660m)",
      bestTime: "Sunrise & Sunset",
      peaks: "Dhaulagiri I (8,167m), Annapurna South, Tukuche Peak",
      composition: "Use a 50–70mm lens to isolate Dhaulagiri above cloud inversions, then switch to wide-angle (16–24mm) for full ridge sweeps."
    },
    {
      name: "Sacred Khayer Lake (4,660m)",
      bestTime: "Late Morning (10:30 AM–12:30 PM)",
      peaks: "Sacred pilgrimage shrines, glacial cirque walls, turquoise water",
      composition: "Shoot from eastern ridge looking back at shrines. A Circular Polarizer (CPL) is essential to cut water glare."
    },
    {
      name: "Muldai Viewpoint (3,637m)",
      bestTime: "Sunrise",
      peaks: "Annapurna I, Annapurna South, Hiunchuli, Machhapuchhre",
      composition: "Use a 16–24mm wide-angle lens. Arrive 25 minutes before sunrise to capture early blue-hour sky hues."
    },
    {
      name: "Dobato Ridge & Mist Trails",
      bestTime: "Early Morning (6:30 AM–8:00 AM)",
      peaks: "Forest canopy, rolling mist, Annapurna South peak tips",
      composition: "Shoot from slightly below the ridge line to use mossy treelines as leading lines toward distant peaks."
    },
    {
      name: "Bayeli Kharka Alpine Meadows",
      bestTime: "Late Afternoon Golden Hour",
      peaks: "Grazing yaks, stone shelters, Dhaulagiri backdrop",
      composition: "Use grazing yaks or stone walls as foreground subjects to add environmental scale against giant mountain walls."
    },
    {
      name: "Chhistibung Forest Transition",
      bestTime: "Mid-Morning",
      peaks: "Old-growth rhododendron forest opening into alpine scrub",
      composition: "Frame dense forest edges in the foreground with open ridge slopes leading the viewer's eye upward."
    },
    {
      name: "Ghandruk Gurung Village",
      bestTime: "Golden Hour (Late Afternoon / Dawn)",
      peaks: "Traditional slate-roofed houses, Machhapuchhre (Fishtail)",
      composition: "Shoot from upper village terraces so stone rooftops lead naturally toward the Machhapuchhre peak in the background."
    },
    {
      name: "Swanta Village Terraced Fields",
      bestTime: "Mid-Morning",
      peaks: "Terraced barley fields, stone houses, Dhaulagiri foothills",
      composition: "Use geometric terraced crop lines to create leading depth in wide landscape frames."
    },
    {
      name: "Rhododendron & Oak Forest Canopies",
      bestTime: "Late Morning (Sun shafts through canopy)",
      peaks: "Mossy ancient trees, filtered light shafts, forest wildlife",
      composition: "Underexpose slightly to preserve sun-ray contrast, shooting in RAW for shadow recovery."
    }
  ];

  const gearChecklist = [
    "Wide-angle lens (16–24mm) for full ridge and viewpoint panoramas",
    "Medium zoom or telephoto lens (50–200mm) for peak texture and yak close-ups",
    "Circular Polarizing Filter (CPL) for cutting snow glare and deepening Khayer Lake's turquoise water",
    "Spare camera batteries (kept warm inside internal jacket pockets)",
    "Lightweight travel tripod for pre-dawn blue-hour exposures",
    "Rain cover for camera bag + microfiber lens cloths"
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
            <span className="text-emerald-400">Best Photography Spots</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Photography Guide &amp; Camera Tips
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Best Photography Spots on the Khopra Trek
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Discover the best photography locations on the <Link href="/guides/khopra-ridge-ultimate-guide" className="text-emerald-400 underline hover:text-emerald-300 font-semibold">Khopra Ridge Trek</Link> — from Khopra Ridge to Khayer Lake. Sunrise timing, lens recommendations, and seasonal lighting tips.
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
              <a href="#why-best-photo-trek" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why Khopra for Photo Treks
              </a>
              <a href="#best-photo-locations" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Top 9 Photography Spots
              </a>
              <a href="#sunrise-sunset-timing" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Sunrise vs Sunset Light
              </a>
              <a href="#seasons-for-photography" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Best Seasons for Shooting
              </a>
              <a href="#camera-gear-guide" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Camera Gear &amp; Batteries
              </a>
              <a href="#mountain-photo-tips" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Mountain Framing Tips
              </a>
              <a href="#cultural-wildlife-photo" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Culture &amp; Wildlife
              </a>
              <a href="#safety-responsible-photo" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Safety &amp; Drone Rules
              </a>
              <a href="#quick-checklist" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Photography Checklist
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
                Inquire Photo Trek
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Photography Spots on the Khopra Trek
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                The Khopra Ridge Trek doesn&apos;t get the crowds that Poon Hill or the Annapurna Base Camp trail attract, and that&apos;s exactly what makes it one of the best photography treks in Nepal. You get wide, uninterrupted panoramas of Dhaulagiri, Annapurna South, and Machhapuchhre, without fighting for a tripod spot at sunrise.
              </p>
              <p>
                This guide covers the best photography spots on the Khopra Trek, the ideal time of day to shoot each one, the gear worth carrying, and the seasonal patterns that decide whether you come home with a hazy snapshot or a frame-worthy shot. It&apos;s built from years of guiding photographers and trekkers through this exact route, so the advice reflects what actually happens on the trail — not just what looks good on a map.
              </p>
            </div>
          </article>

          {/* SECTION 1: WHY KHOPRA FOR PHOTO TREKS */}
          <article id="why-best-photo-trek" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why the Khopra Trek Is One of Nepal&apos;s Best Photography Treks
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Uncrowded Viewpoints:</strong> Poon Hill hosts hundreds of tourists at sunrise. Khopra Ridge delivers an equal or superior 360-degree panorama with only a small handful of photographers present.
              </p>
              <p>
                <strong>Diverse Subjects:</strong> Snow-capped 8,000m peaks, ancient mossy oak forests, alpine yak pastures, sacred mountain lakes (<Link href="/guides/khayer-lake-ultimate-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Khayer Lake</Link>), and stone Magar/Gurung villages.
              </p>
              <p>
                <strong>Cloud Inversions:</strong> High ridgeline elevation produces dramatic morning sea-of-cloud inversions settling inside Kali Gandaki Gorge.
              </p>
            </div>
          </article>

          {/* SECTION 2: TOP 9 SPOTS */}
          <article id="best-photo-locations" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Top 9 Photography Spots on the Khopra Trek
            </h2>
            <div className="space-y-6">
              {photoSpots.map((spot, idx) => (
                <div key={idx} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-100 pb-3 gap-2">
                    <h3 className="font-extrabold text-stone-950 text-base">{spot.name}</h3>
                    <span className="text-xs font-bold text-emerald-600 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 shrink-0">
                      Best: {spot.bestTime}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600"><strong>Visible Features:</strong> {spot.peaks}</p>
                  <p className="text-xs text-stone-600 leading-relaxed"><strong>Composition Tip:</strong> {spot.composition}</p>
                </div>
              ))}
            </div>
          </article>

          {/* SECTION 3: SUNRISE VS SUNSET LIGHT */}
          <article id="sunrise-sunset-timing" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Sunrise and Sunset Photography Locations
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Best Sunrise Spots:</strong> <Link href="/viewpoints/sunrise-at-khopra-ridge" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Khopra Ridge Viewpoint</Link> (Dhaulagiri golden alpenglow), <Link href="/viewpoints/muldai-viewpoint-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Muldai Viewpoint</Link> (wide Annapurna panorama), and Dobato Ridge.
              </p>
              <p>
                <strong>Best Sunset Spots:</strong> Khopra Ridge terrace (soft violet light on Annapurna South) and Bayeli Kharka pastures.
              </p>
              <p>
                <strong>Blue Hour Tip:</strong> Shoot 20–30 minutes BEFORE sunrise and AFTER sunset when indigo skies contrast sharply against glowing snow ridges.
              </p>
            </div>
          </article>

          {/* SECTION 4: SEASONS FOR SHOOTING */}
          <article id="seasons-for-photography" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Seasons for Photography on the Khopra Trek
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Autumn (Oct–Nov):</strong> Sharpest mountain visibility, deep blue skies, stable weather.
              </p>
              <p>
                <strong>Spring (March–April):</strong> Bright red, pink, and white rhododendron flowers framing snow peaks.
              </p>
              <p>
                <strong>Winter (Dec–Feb):</strong> Crisp snow cover reaching lower forest zones (pack extra batteries for cold).
              </p>
            </div>
          </article>

          {/* SECTION 5: CAMERA GEAR GUIDE */}
          <article id="camera-gear-guide" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Camera Gear for the Khopra Trek
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Recommended Lenses:</strong> Wide-angle (16–24mm), medium zoom (50–70mm), telephoto (70–200mm).
              </p>
              <p>
                <strong>Cold Weather Battery Management:</strong> Sub-zero pre-dawn temperatures rapidly drain lithium camera batteries. Store spare batteries inside internal jacket pockets against body heat.
              </p>
            </div>
          </article>

          {/* SECTION 6: MOUNTAIN PHOTO TIPS */}
          <article id="mountain-photo-tips" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Photography Tips for Capturing the Himalayas
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Include foreground interest (prayer flags, stone fences, yaks, trekking paths) to provide scale for massive 8,000-meter peaks. Shoot in RAW format to recover shadow details in high-contrast snow conditions.
              </p>
            </div>
          </article>

          {/* SECTION 7: CULTURE & WILDLIFE */}
          <article id="cultural-wildlife-photo" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Wildlife, Nature, and Cultural Photography Opportunities
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Capture grazing yaks at Bayeli Kharka, ancient slate-roofed Gurung architecture in Ghandruk, and traditional organic farming in Swanta Village. Always ask politely before taking portrait photos of village locals.
              </p>
            </div>
          </article>

          {/* SECTION 8: SAFETY & DRONE RULES */}
          <article id="safety-responsible-photo" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Photography Safety and Responsible Trekking
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Cliff Edge Safety:</strong> Be aware of steep drop-offs while looking through camera viewfinders.
              </p>
              <p>
                <strong>Drone Regulations:</strong> Flying drones inside the Annapurna Conservation Area (ACAP) requires formal government permits. Unpermitted flights are illegal.
              </p>
            </div>
          </article>

          {/* SECTION 9: QUICK CHECKLIST */}
          <article id="quick-checklist" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Quick Photography Planning Checklist
            </h2>
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-3">
              <h3 className="font-bold text-stone-900 text-base">Essential Gear Checklist</h3>
              <ul className="space-y-2 text-xs text-stone-600">
                {gearChecklist.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* SECTION 10: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Khopra Trek Photography
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Is the Khopra Trek good for photography?",
                  a: "Yes! It offers uncrowded 360-degree panoramas of Dhaulagiri and Annapurna South, sacred Khayer Lake, and ancient forests."
                },
                {
                  q: "What is the best photography spot on the Khopra Trek?",
                  a: "Khopra Ridge Viewpoint (3,660m) is the standout location for Dhaulagiri sunrise alpenglow and cloud inversions."
                },
                {
                  q: "Which mountains can you see from Khopra Ridge?",
                  a: "Dhaulagiri I, Annapurna South, Hiunchuli, Machhapuchhre (Fishtail), Nilgiri Range, and Tukuche Peak."
                },
                {
                  q: "When is the best season for photography on the Khopra Trek?",
                  a: "Autumn (October–November) for crystal clarity, and Spring (March–April) for blooming rhododendrons."
                },
                {
                  q: "Is sunrise or sunset better for photography on this trek?",
                  a: "Sunrise produces dramatic cloud inversions and Dhaulagiri golden light; sunset offers soft pink alpenglow."
                },
                {
                  q: "What camera lens should I bring on the Khopra Trek?",
                  a: "A 16–24mm wide-angle for panoramas and a 50–200mm zoom for peak details and yaks."
                },
                {
                  q: "Can I take good photos with a smartphone on the Khopra Trek?",
                  a: "Yes! Modern smartphones in Panorama and HDR modes capture broad mountain vistas effectively."
                },
                {
                  q: "Is Khayer Lake worth visiting for photography?",
                  a: "Yes. Its turquoise water set against a high-altitude rock cirque and pilgrimage shrines makes for striking images."
                },
                {
                  q: "Can I use a drone on the Khopra Trek?",
                  a: "Drone use inside ACAP requires official government permits prior to flying."
                },
                {
                  q: "Do I need a tripod for mountain photography on this trek?",
                  a: "A lightweight travel tripod is highly recommended for pre-dawn blue-hour and sunrise exposures."
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
              The Khopra Ridge Trek offers one of Nepal&apos;s most rewarding uncrowded photography experiences. Pack a wide-angle lens, warm battery pockets, and capture stunning Himalayan landscapes!
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Capture the Himalayas at Their Best
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Join our guided Khopra Ridge Trek and benefit from experienced local guides who know exactly when and where to be for the best light — plus community-run lodge stays that support local Magar villages.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Inquire Photography-Focused Departure &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Trek:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/viewpoints/khopra-ridge-viewpoint" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read Khopra Ridge Viewpoint Guide
                  </Link>
                  <Link href="/viewpoints/sunrise-at-khopra-ridge" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read Sunrise at Khopra Ridge Guide
                  </Link>
                  <Link href="/guides/khayer-lake-ultimate-guide" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Explore Sacred Khayer Lake Planner
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
                This photography guide is maintained by our licensed local trekking guides operating out of Kathmandu and Pokhara. Nepal Tourism Operator License #8928-091. Email: <a href="mailto:khopraridge51@gmail.com" className="text-emerald-700 font-semibold hover:underline">khopraridge51@gmail.com</a>.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
