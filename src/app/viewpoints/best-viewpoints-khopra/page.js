import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/viewpoints/best-viewpoints-khopra",
  },
  title: "Best Viewpoints on the Khopra Ridge Trek | Nepal Trek Guide",
  description: "Discover the best viewpoints on the Khopra Ridge Trek — from Muldai's sunrise views to Khopra Ridge's Dhaulagiri panorama. Compare, plan, and photograph.",
};

export default function Page() {
  const comparisonData = [
    {
      name: "Khopra Ridge",
      elevation: "~3,660 m",
      bestFor: "Wide panorama, Dhaulagiri views",
      sunrise: "Very good",
      sunset: "Very good",
      photography: "Excellent",
      crowd: "Low",
      effort: "Moderate"
    },
    {
      name: "Muldai Viewpoint",
      elevation: "~3,637 m",
      bestFor: "Sunrise, intense alpenglow",
      sunrise: "Excellent",
      sunset: "Good",
      photography: "Excellent",
      crowd: "Low",
      effort: "Moderate to High"
    },
    {
      name: "Dobato",
      elevation: "~3,410 m",
      bestFor: "Forest-to-mountain transition",
      sunrise: "Good",
      sunset: "Good",
      photography: "Good",
      crowd: "Low",
      effort: "Moderate"
    },
    {
      name: "Poon Hill (Optional)",
      elevation: "~3,210 m",
      bestFor: "Accessibility, quick sunrise",
      sunrise: "Very good",
      sunset: "Fair",
      photography: "Good",
      crowd: "High",
      effort: "Easy"
    }
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
            <span className="text-emerald-400">Best Viewpoints Guide</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Sunrise, Sunset &amp; Viewpoint Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Best Viewpoints on the Khopra Ridge Trek
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Compare Khopra Ridge, Muldai, Dobato, and Poon Hill on elevation, sunrise quality, crowd levels, and visible 8,000m peaks on the <Link href="/guides/khopra-ridge-ultimate-guide" className="text-emerald-400 underline hover:text-emerald-300 font-semibold">Khopra Ridge Trek</Link>.
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
              <a href="#viewpoint-comparison" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Viewpoint Matrix
              </a>
              <a href="#which-viewpoint" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Which Is Right for You?
              </a>
              <a href="#khopra-viewpoint" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Khopra Ridge (~3,660m)
              </a>
              <a href="#muldai-viewpoint" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Muldai Viewpoint (~3,637m)
              </a>
              <a href="#dobato-viewpoint" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Dobato Viewpoint (~3,410m)
              </a>
              <a href="#poon-hill-detour" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Optional Poon Hill Detour
              </a>
              <a href="#best-sunrise" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Best Sunrise Spots
              </a>
              <a href="#best-sunset" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Best Sunset Spots
              </a>
              <a href="#landscape-photography" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Photography &amp; Gear
              </a>
              <a href="#visible-peaks" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Visible Mountain Peaks
              </a>
              <a href="#seasons-visibility" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Best Seasons for Views
              </a>
              <a href="#travel-style" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                By Travel Style
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
                Inquire Viewpoint Trek
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Viewpoints on the Khopra Ridge Trek
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Most people who research the Khopra Ridge Trek already know it delivers big mountain views. What&apos;s harder to find is a clear answer to the more useful question: which viewpoint should you actually prioritize, and why.
              </p>
              <p>
                This guide breaks down every major viewpoint on the route — Khopra Ridge, Muldai, Dobato, and the optional Poon Hill detour — and compares them on the things that actually matter: sunrise quality, sunset quality, crowd levels, hiking effort, and which mountains you&apos;ll actually see. We&apos;ll also cover photography planning, seasonal visibility, and which viewpoint suits your specific trekking style.
              </p>
              <p>
                The Khopra Ridge Trek sits in a quieter corner of the Annapurna Conservation Area, away from the busier Poon Hill circuit, and its viewpoints reward trekkers with some of the closest, least-obstructed views of Dhaulagiri I and the Annapurna range anywhere in the region.
              </p>
            </div>
          </article>

          {/* SECTION 1: COMPARISON MATRIX */}
          <article id="viewpoint-comparison" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Quick Comparison of the Best Viewpoints on the Khopra Ridge Trek
            </h2>
            <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">Viewpoint</th>
                    <th className="px-6 py-4">Elevation</th>
                    <th className="px-6 py-4">Best For</th>
                    <th className="px-6 py-4">Sunrise</th>
                    <th className="px-6 py-4">Sunset</th>
                    <th className="px-6 py-4">Photography</th>
                    <th className="px-6 py-4">Crowd Level</th>
                    <th className="px-6 py-4">Hiking Effort</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-600">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/50">
                      <td className="px-6 py-4 font-bold text-stone-900">{row.name}</td>
                      <td className="px-6 py-4">{row.elevation}</td>
                      <td className="px-6 py-4">{row.bestFor}</td>
                      <td className="px-6 py-4 text-emerald-700 font-semibold">{row.sunrise}</td>
                      <td className="px-6 py-4">{row.sunset}</td>
                      <td className="px-6 py-4">{row.photography}</td>
                      <td className="px-6 py-4 font-semibold text-emerald-600">{row.crowd}</td>
                      <td className="px-6 py-4">{row.effort}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          {/* SECTION 2: WHICH IS RIGHT FOR YOU */}
          <article id="which-viewpoint" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Which Viewpoint Is Right for You?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>First-Time Trekkers:</strong> Prioritize <Link href="/viewpoints/khopra-ridge-viewpoint" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Khopra Ridge Viewpoint</Link> itself. It sits directly outside your lodge door with zero extra morning climb.</li>
                <li><strong>Photographers &amp; Sunrise Chasers:</strong> Build extra time for <Link href="/viewpoints/muldai-viewpoint-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Muldai Viewpoint</Link>, which produces the most dramatic morning alpenglow.</li>
                <li><strong>Solitude Seekers:</strong> Appreciate Dobato Viewpoint, which sees noticeably fewer visitors.</li>
                <li><strong>Short Itineraries:</strong> Add the Poon Hill detour if short on time, accepting higher tourist traffic.</li>
              </ul>
            </div>
          </article>

          {/* SECTION 3: KHOPRA RIDGE */}
          <article id="khopra-viewpoint" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Ridge Viewpoint (~3,660 m)
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>What You See:</strong> Uninterrupted 360-degree sweep across Dhaulagiri I (8,167m), Annapurna South (7,219m), Nilgiri Range, Machhapuchhre, and Hiunchuli. The deep Kali Gandaki Gorge cuts dramatically below.
              </p>
              <p>
                <strong>Best Time to Visit:</strong> 30 to 45 minutes before sunrise for golden alpenglow on Dhaulagiri, and late afternoon for soft evening light across Annapurna South.
              </p>
            </div>
          </article>

          {/* SECTION 4: MULDAI VIEWPOINT */}
          <article id="muldai-viewpoint" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Muldai Viewpoint (~3,637 m)
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Famous for Sunrise:</strong> Muldai offers a clean, elevated line of sight across the Annapurna range with pronounced pink-orange alpenglow before full sunrise.
              </p>
              <p>
                <strong>Muldai vs. Poon Hill:</strong> Muldai hosts 10–20 trekkers at sunrise compared to Poon Hill&apos;s 300+ crowd on a steel platform. Read our full <Link href="/viewpoints/khopra-vs-poon-hill-views" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Khopra vs Poon Hill Views Comparison</Link>.
              </p>
            </div>
          </article>

          {/* SECTION 5: DOBATO VIEWPOINT */}
          <article id="dobato-viewpoint" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Dobato Viewpoint (~3,410 m)
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Dobato sits at the transition point between dense rhododendron forest and open alpine pastures. Layered views of forest canopies and snow peaks make it a quiet favorite.
              </p>
            </div>
          </article>

          {/* SECTION 6: POON HILL DETOUR */}
          <article id="poon-hill-detour" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Optional Poon Hill Detour (~3,210 m)
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Short, well-paved stair climb from Ghorepani. Popular for short 3-day itineraries, though heavily commercialized.
              </p>
            </div>
          </article>

          {/* SECTION 7: BEST SUNRISE */}
          <article id="best-sunrise" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Sunrise Viewpoints on the Khopra Ridge Trek
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Muldai offers the strongest sunrise alpenglow. <Link href="/viewpoints/sunrise-at-khopra-ridge" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Sunrise at Khopra Ridge</Link> is a close second, with the convenience of being on the main eco-lodge doorstep.
              </p>
            </div>
          </article>

          {/* SECTION 8: BEST SUNSET */}
          <article id="best-sunset" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Sunset Viewpoints on Khopra Ridge
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Khopra Ridge terrace offers reliable sunset views as Annapurna South picks up golden-hour light.
              </p>
            </div>
          </article>

          {/* SECTION 9: LANDSCAPE PHOTOGRAPHY */}
          <article id="landscape-photography" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Photography Spots &amp; Gear
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Read our dedicated <Link href="/viewpoints/best-photography-spots" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Best Photography Spots on the Khopra Trek</Link> guide for lens advice (16–24mm wide angle, CPL filters, cold battery management).
              </p>
            </div>
          </article>

          {/* SECTION 10: VISIBLE PEAKS */}
          <article id="visible-peaks" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Which Himalayan Peaks Can You See?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Dhaulagiri I (8,167m), Annapurna South (7,219m), Machhapuchhre (Fishtail), Nilgiri, Hiunchuli, and Gurja Himal.
              </p>
            </div>
          </article>

          {/* SECTION 11: SEASONS FOR VIEWS */}
          <article id="seasons-visibility" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Seasons for Clear Mountain Views
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Autumn (Sept–Nov):</strong> Most reliable clear mountain visibility.
              </p>
              <p>
                <strong>Spring (March–May):</strong> Rhododendron blooms with good morning views.
              </p>
              <p>
                <strong>Winter (Dec–Feb):</strong> Sharpest air and snow coverage (cold mornings).
              </p>
            </div>
          </article>

          {/* SECTION 12: TRAVEL STYLE */}
          <article id="travel-style" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Choosing the Best Viewpoint for Your Travel Style
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Whether you prioritize sunrise alpenglow (Muldai), broad lodge-door panoramas (Khopra), quiet forest transitions (Dobato), or quick accessibility (Poon Hill), the circuit offers options for every style.
              </p>
            </div>
          </article>

          {/* SECTION 13: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Khopra Viewpoints
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Which is the best viewpoint on the Khopra Ridge Trek?",
                  a: "Khopra Ridge offers the widest 360-degree panorama, while Muldai offers the most dramatic sunrise alpenglow."
                },
                {
                  q: "Is Muldai better than Poon Hill?",
                  a: "Muldai is higher (3,637m), sees 90% fewer crowds, and offers superior uncrowded mountain views."
                },
                {
                  q: "What mountains can you see from Khopra Ridge?",
                  a: "Dhaulagiri I (8,167m), Annapurna South (7,219m), Nilgiri, Machhapuchhre, and Hiunchuli."
                },
                {
                  q: "Which viewpoint has the best sunrise?",
                  a: "Muldai Viewpoint is widely considered the best sunrise spot for intense pink-gold alpenglow."
                },
                {
                  q: "Which viewpoint has the best sunset?",
                  a: "Khopra Ridge terrace offers reliable golden-hour sunset views across Annapurna South."
                },
                {
                  q: "Is Khopra Ridge good for photography?",
                  a: "Yes! High elevation, cloud inversions over Kali Gandaki, and zero crowd interference make it ideal."
                },
                {
                  q: "When is the best season for clear mountain views?",
                  a: "Autumn (September–November) and Winter (December–February) deliver the clearest skies."
                },
                {
                  q: "Which viewpoint is the least crowded?",
                  a: "Dobato Viewpoint consistently sees the fewest visitors."
                },
                {
                  q: "How much extra hiking is required for each viewpoint?",
                  a: "Khopra Ridge is right outside the lodge door. Muldai requires a 1.5-hour round-trip hike from Dobato."
                },
                {
                  q: "Can beginners enjoy these viewpoints?",
                  a: "Yes! Fit beginners with good pacing can complete the trek and enjoy every viewpoint."
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
              Every viewpoint on the Khopra Ridge Trek delivers stunning Himalayan vistas. Match the viewpoint to your goals — photography, sunrise, or solitude — and enjoy Nepal&apos;s quietest mountain lookouts!
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Plan Your Viewpoint-Focused Itinerary
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Ready to see these views for yourself? We can help you plan a Khopra Ridge Trek itinerary that fits these viewpoints around your schedule, experience level, and photography goals. Contact us to start planning!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Start Planning Your Route &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Trek:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/viewpoints/khopra-ridge-viewpoint" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read Khopra Ridge Viewpoint Guide
                  </Link>
                  <Link href="/viewpoints/muldai-viewpoint-guide" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read Muldai Viewpoint Hub Guide
                  </Link>
                  <Link href="/viewpoints/best-photography-spots" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read Best Photography Spots Guide
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
                This viewpoint comparison guide is maintained by our licensed local trekking guides operating out of Kathmandu and Pokhara. Nepal Tourism Operator License #8928-091. Email: <a href="mailto:khopraridge51@gmail.com" className="text-emerald-700 font-semibold hover:underline">khopraridge51@gmail.com</a>.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
