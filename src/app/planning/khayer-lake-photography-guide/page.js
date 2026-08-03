import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Khayer Lake Photography Guide: Best Photo Spots, Timing & Expert Tips",
  description:
    "Plan your shoot with our Khayer Lake photography guide — best photo spots, sunrise and reflection timing, camera settings, gear, and drone rules from local trekking guides.",
  alternates: {
    canonical: "https://khopraridgetrek.com/planning/khayer-lake-photography-guide",
  },
  openGraph: {
    title: "Khayer Lake Photography Guide: Best Photo Spots, Timing & Expert Tips",
    description:
      "Plan your shoot with our Khayer Lake photography guide — best photo spots, sunrise and reflection timing, camera settings, gear, and drone rules from local trekking guides.",
    url: "https://khopraridgetrek.com/planning/khayer-lake-photography-guide",
    type: "article",
  },
};

export default function KhayerLakePhotographyGuidePage() {
  const stats = [
    { label: "Prime Shooting Month", value: "October (Autumn)" },
    { label: "Reflection Window", value: "Before 9:30 AM (Calm Water)" },
    { label: "Must-Have Gear", value: "CPL Filter & Telephoto Lens" },
    { label: "Drone Policy", value: "Strict ACAP Permits Required" },
  ];

  const photoLocations = [
    {
      spot: "1. The Main Shoreline (Water's Edge)",
      angle: "Direct Eye-Level View",
      desc: "Captures the turquoise water directly in front of the colossal 3,000m Annapurna South rock wall. Ideal for wide-angle compositions (16–24mm) with a trekking partner standing near the water to establish human scale.",
    },
    {
      spot: "2. Eastern Ridge Elevation Spot",
      angle: "Elevated Reflection Angle",
      desc: "A short 5-minute walk along the eastern basin rim. Provides an elevated vantage point capturing Annapurna South's mirror reflection without shoreline rocks intruding into the lower frame.",
    },
    {
      spot: "3. Upper Basin Plateau Trailhead",
      angle: "Full Basin Panorama",
      desc: "Located just above the lake approach. Shows the entire glacial basin—lake, moraine, prayer flags, and Annapurna South face—in a single wide panoramic sweep.",
    },
    {
      spot: "4. Khopra Ridge Sunrise Point",
      angle: "Golden Hour Alpenglow",
      desc: "Since walking 4 hours to the lake before dawn is severe, shoot golden hour sunrise on Dhaulagiri and Annapurna South from Khopra Ridge (3,660m), then proceed to the lake for morning reflections.",
    },
  ];

  const cameraSettings = [
    { lighting: "Midday Bright Sun", aperture: "f/8 – f/11", iso: "ISO 100", notes: "Keep ISO low; check histogram so snow Highlights do not blow out." },
    { lighting: "Reflection Shots", aperture: "f/8 – f/11", iso: "ISO 100 – 200", notes: "Engage CPL filter; rotate carefully to cut surface glare without killing the reflection." },
    { lighting: "Sunrise / Blue Hour", aperture: "f/5.6 – f/8", iso: "ISO 100 – 400", notes: "Tripod mandatory. Use 2-second shutter delay to prevent camera shake." },
    { lighting: "Bright Snow Scenes", aperture: "f/8 – f/11", iso: "ISO 100", notes: "Add +0.7 to +1.3 EV exposure compensation so white snow stays brilliant white." },
  ];

  const faqs = [
    {
      q: "Is Khayer Lake worth visiting for photography?",
      a: "Yes. Few places in Nepal put you this close to a 7,000m peak (Annapurna South) with a turquoise glacial lake in the foreground, and zero crowd competition.",
    },
    {
      q: "What is the best time to photograph Khayer Lake?",
      a: "Autumn (September to November), especially October, provides the clearest post-monsoon skies, sharpest mountain contrast, and most stable weather.",
    },
    {
      q: "Is sunrise or sunset better for photography at Khayer Lake?",
      a: "Sunrise is best for light hitting Annapurna South and calm water reflections. However, because the lake is a 4-hour hike from Khopra Ridge, most photographers shoot sunrise at Khopra Ridge and reach the lake by mid-morning.",
    },
    {
      q: "Can you capture mirror reflections at Khayer Lake?",
      a: "Yes! But only before 9:30 AM. Mid-morning alpine winds create surface ripples that dissolve mirror reflections until conditions calm again.",
    },
    {
      q: "Which mountains are visible in photos from Khayer Lake?",
      a: "Annapurna South (7,219m) dominates the frame directly at the lake. From the approach trail, Dhaulagiri I (8,167m), Nilgiri Himal (7,061m), Hiunchuli, and Machhapuchhre are visible.",
    },
    {
      q: "What camera lenses should I bring to Khayer Lake?",
      a: "A wide-angle lens (16–35mm equivalent) for full landscape reflections, and a telephoto (70–200mm) for isolating hanging glaciers and mountain texture details.",
    },
    {
      q: "Is a tripod necessary for Khayer Lake photography?",
      a: "A lightweight tripod is recommended for pre-dawn shooting, multi-frame panoramas, and high-wind stability at the ridge.",
    },
    {
      q: "Can I fly a drone at Khayer Lake?",
      a: "Drone flight inside the Annapurna Conservation Area requires official ACAP and local authority permits. Flying without permits near sacred Khayer Barahi Temple is strictly prohibited.",
    },
    {
      q: "Is Khayer Lake suitable for smartphone photography?",
      a: "Yes. Modern smartphones excel at wide, bright scenes. Use HDR mode and tap the mountain face to avoid overexposing the snow summit.",
    },
    {
      q: "How does high altitude affect camera gear?",
      a: "Near-freezing temperatures drain lithium batteries quickly. Keep spare batteries in an inside jacket pocket near body heat, and allow cold cameras to acclimate before entering warm lodges.",
    },
  ];

  return (
    <div className="w-full flex-1 bg-stone-50">
      {/* Hero Header */}
      <section className="bg-stone-900 py-16 sm:py-20 text-white border-b border-stone-800">
        <div className="mx-auto max-w-7xl px-6">
          <nav className="flex items-center gap-2 text-xs font-semibold text-stone-400 mb-6 uppercase tracking-wider">
            <Link href="/" className="hover:text-emerald-400 transition">Home</Link>
            <span>/</span>
            <Link href="/guides/khayer-lake-ultimate-guide" className="hover:text-emerald-400 transition">Khayer Lake Hub</Link>
            <span>/</span>
            <span className="text-emerald-400">Photography Guide</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Alpine Photography &amp; Composition Guide
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Khayer Lake Photography Guide
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Best photo spots, reflection timing, camera settings, gear protection, and drone regulations for Khayer Lake (4,660m) &amp; Khopra Ridge.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="rounded-xl bg-stone-800/80 border border-stone-700/60 p-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">{stat.label}</span>
                <p className="mt-1 text-sm sm:text-base font-extrabold text-stone-100">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Body & Sidebar */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Article Main Body */}
          <div className="lg:col-span-3 space-y-12">

            {/* E-E-A-T Operator Verification Banner */}
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
              <div className="rounded-xl bg-emerald-100 p-3 text-emerald-800 font-bold text-xl flex items-center justify-center shrink-0">
                🇳🇵
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Direct Trail Insight from Local Guides</h4>
                <p>
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). We lead photography groups across Khopra Ridge and Khayer Lake, assisting with lighting windows, gear preservation, and permit compliance.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Khayer Lake sits at 4,660 meters in the Annapurna region, directly beneath the south face of Annapurna South (7,219m). It is one of the few places in Nepal where a glacial lake, a 7,000-meter wall of rock and ice, and near-total silence occupy the same frame. For landscape photographers, that combination is rare enough to justify the four-hour walk from Khopra Ridge on its own.
              </p>
              <p>
                However, getting a great photograph here isn&apos;t automatic. The light window is short, alpine wind gusts pick up fast, and freezing altitude affects both your body and your camera gear. This guide covers where to stand, when to shoot, what settings to use, and how to protect your equipment on the trail.
              </p>
            </div>

            {/* Section 1: Why Khayer Lake is Exceptional for Photographers */}
            <div id="why-khayer-photo" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Why Khayer Lake Is One of Nepal&apos;s Best Photo Locations
              </h2>
              
              <div className="space-y-4 text-stone-700 leading-relaxed">
                <h3 className="text-xl font-bold text-stone-900">Glacial Lake Below a 3,000m Vertical Wall</h3>
                <p>
                  Annapurna South rises nearly 3,000 meters straight out of the turquoise lake basin. The water is fed by glacial runoff, creating deep turquoise-to-blue hues that shift depending on light and season. Unlike crowded Poon Hill, Khayer Lake offers serene, uncrowded shooting conditions.
                </p>

                <h3 className="text-xl font-bold text-stone-900 mt-6">Cultural &amp; Spiritual Contrast</h3>
                <p>
                  Khayer Lake is also home to the sacred <Link href="/planning/khayer-baraha-temple-guide" className="text-emerald-700 hover:underline font-semibold">Khayer Barahi Temple</Link>. Buddhist prayer flags strung along the shoreline provide a vivid red, blue, and yellow foreground contrast against white snow and blue ice.
                </p>
              </div>
            </div>

            {/* Section 2: Best Photo Locations */}
            <div id="photo-locations" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Top 4 Photography Locations at Khayer Lake &amp; Khopra
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {photoLocations.map((loc, idx) => (
                  <div key={idx} className="rounded-2xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                    <h3 className="font-bold text-stone-950 text-lg">{loc.spot}</h3>
                    <span className="inline-block px-2.5 py-0.5 bg-emerald-100 text-emerald-800 font-extrabold text-xs rounded-full">
                      {loc.angle}
                    </span>
                    <p className="text-xs text-stone-600 leading-relaxed">{loc.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Recommended Camera Settings */}
            <div id="camera-settings" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Recommended Camera Settings for High-Altitude Scenes
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Lighting Situation</th>
                      <th className="py-4 px-4 sm:px-6">Aperture</th>
                      <th className="py-4 px-4 sm:px-6">ISO Target</th>
                      <th className="py-4 px-4 sm:px-6">Practical Technique</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {cameraSettings.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.lighting}</td>
                        <td className="py-4 px-4 sm:px-6 font-semibold text-emerald-700">{row.aperture}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-800 font-semibold">{row.iso}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 4: Gear, Filters & Battery Management */}
            <div id="gear-protection" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Essential Gear &amp; Cold Battery Protection
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h4 className="font-bold text-stone-900 text-base">Circular Polarizer (CPL Filter)</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Essential for high-altitude glacial lakes. Cuts harsh glare bouncing off the water, saturating the deep turquoise colors and making sky contrast pop.
                  </p>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
                  <h4 className="font-bold text-stone-900 text-base">Body Heat Battery Care</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Cold sub-zero nights drain camera batteries rapidly. Keep spare lithium batteries inside an inner jacket pocket against your body heat until ready to shoot.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5: Drone Photography Regulations */}
            <div id="drone-rules" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Drone Photography Regulations in ACA
              </h2>
              <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
                <p className="text-sm text-stone-600 leading-relaxed">
                  Drone flying inside the Annapurna Conservation Area (ACAP) requires permits from ACAP, the Civil Aviation Authority of Nepal (CAAN), and local district authorities. Flying unpermitted drones near sacred sites like Khayer Barahi Temple is illegal and subject to heavy fines and confiscation. Always verify current permit rules before bringing a drone.
                </p>
              </div>
            </div>

            {/* Section 6: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions: Khayer Lake Photography
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group rounded-2xl border border-stone-200 bg-white p-6 transition [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-4 font-bold text-stone-900 text-base sm:text-lg">
                      <span>{faq.q}</span>
                      <span className="shrink-0 text-stone-400 transition group-open:-rotate-180">
                        ▼
                      </span>
                    </summary>
                    <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed border-t border-stone-100 pt-4">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>

            {/* CTA Banner */}
            <div className="rounded-3xl bg-emerald-950 p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
              <div className="relative z-10 space-y-4 max-w-2xl">
                <span className="px-3 py-1 bg-emerald-800 text-emerald-200 rounded-full text-xs font-bold uppercase tracking-wider">
                  Book Photography Trek
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Ready to Photograph Khayer Lake &amp; Annapurna South?
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Plan your photography tour with <strong>EMD Treks</strong> (Nepal Tourism License #8928-091). We offer extended stays at Khopra Ridge timed for optimal golden hour lighting.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire About Photography Trips
                  </Link>
                  <Link
                    href="/planning/khopra-for-photographers"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Photographer Guide
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* Sticky Sidebar Table of Contents */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-4">
              <h4 className="font-extrabold text-stone-900 text-xs uppercase tracking-widest border-b border-stone-100 pb-3">
                On This Page
              </h4>
              <nav className="space-y-2 text-xs font-semibold text-stone-600">
                <a href="#why-khayer-photo" className="block hover:text-emerald-600 transition">
                  • Why Photo Destination
                </a>
                <a href="#photo-locations" className="block hover:text-emerald-600 transition">
                  • Top 4 Shooting Spots
                </a>
                <a href="#camera-settings" className="block hover:text-emerald-600 transition">
                  • Recommended Camera Settings
                </a>
                <a href="#gear-protection" className="block hover:text-emerald-600 transition">
                  • Essential Gear &amp; Batteries
                </a>
                <a href="#drone-rules" className="block hover:text-emerald-600 transition">
                  • Drone Regulations
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Photography Resources</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/viewpoints/best-photography-spots" className="hover:text-emerald-700 underline">
                      Best Photography Spots on Khopra
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khopra-for-photographers" className="hover:text-emerald-700 underline">
                      Khopra for Photographers Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/viewpoints/sunrise-at-khopra-ridge" className="hover:text-emerald-700 underline">
                      Sunrise at Khopra Ridge
                    </Link>
                  </li>
                  <li>
                    <Link href="/viewpoints/photo-gallery" className="hover:text-emerald-700 underline">
                      Photo Gallery &amp; Showcase
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
