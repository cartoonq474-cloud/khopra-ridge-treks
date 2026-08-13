import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Khopra Ridge Trek for Photographers | Nepal Trek Guide",
  description: "Planning the Khopra Ridge Trek for photography? Discover the best viewpoints, camera gear, seasons, and a photographer's itinerary for this uncrowded.",
  alternates: {
    canonical: "https://khopraridgetrek.com/planning/khopra-for-photographers",
  },
  openGraph: {
    title: "Khopra Ridge Trek for Photographers: Best Photo Spots, Gear & Photography Guide",
    description:
      "Planning the Khopra Ridge Trek for photography? Discover the best viewpoints, camera gear, seasons, and a photographer's itinerary for this uncrowded Himalayan route.",
    url: "https://khopraridgetrek.com/planning/khopra-for-photographers",
    type: "article",
  },
};

export default function KhopraForPhotographersPage() {
  const quickStats = [
    { label: "Top Golden Hour Spot", value: "Khopra Ridge (3,660m Sunset/Sunrise)" },
    { label: "Key Sunrise Panorama", value: "Muldai Viewpoint (3,637m 360° Arc)" },
    { label: "High Glacial Lake", value: "Sacred Khayer Lake (4,660m Reflections)" },
    { label: "Night Sky Rating", value: "Zero Light Pollution Astrophotography" },
  ];

  const photoLocations = [
    { location: "Ghandruk Village (1,940m)", bestTime: "Early Morning / Late Afternoon", subjects: "Slate-roof Gurung houses, terraced fields, street life & Annapurna South backdrop." },
    { location: "Tadapani Forests (2,630m)", bestTime: "Overcast / Soft Morning Light", subjects: "Dense rhododendron & oak canopy, spring blooms, misty forest trails." },
    { location: "Dobato & Muldai Viewpoint", bestTime: "20 Mins Before Sunrise", subjects: "360° view of Dhaulagiri, Annapurna South, Nilgiri & Fishtail without Poon Hill crowds." },
    { location: "Bayeli Kharka (3,432m)", bestTime: "Early Morning Golden Hour", subjects: "Alpine pasture meadows, dramatic morning cloud inversions settling over valleys." },
    { location: "Khopra Ridge (3,660m)", bestTime: "Sunset & Sunrise", subjects: "Eye-level Dhaulagiri I (8,167m) summit wall, golden-hour ridgelines, dark Milky Way skies." },
    { location: "Sacred Khayer Lake (4,660m)", bestTime: "Mid-Morning Calm Water", subjects: "Turquoise glacial lake reflections, sacred Hindu/Buddhist shrines under peak walls." },
  ];

  const gearChecklist = [
    { item: "Camera Body", recommendation: "Full-frame mirrorless (lighter weight for multi-day elevation gain)." },
    { item: "Lenses", recommendation: "16-35mm f/2.8 or f/4 (wide landscapes & Milky Way) + 70-200mm telephoto (mountain compression & wildlife)." },
    { item: "Support & Filters", recommendation: "Lightweight carbon-fiber tripod, circular polarizer filter (cuts haze), ND filter (daytime long exposure)." },
    { item: "Power & Protection", recommendation: "3-4 spare camera batteries (stored in warm inner pockets), 20,000mAh power bank, IP67 dry bag." },
  ];

  const faqs = [
    {
      q: "Is the Khopra Ridge Trek one of the best photography treks in Nepal?",
      a: "Yes. It combines uncrowded mountain viewpoints, eye-level sightlines of Dhaulagiri, blooming rhododendron forests, authentic village culture, and dark astrophotography skies into one 7-9 day route.",
    },
    {
      q: "Which mountains can you photograph from Khopra Ridge?",
      a: "Dhaulagiri I (8,167m), Annapurna South (7,219m), Nilgiri Himal, Machhapuchhre (Fishtail), Hiunchuli, and Tukuche Peak are all visible along the ridge.",
    },
    {
      q: "What camera gear should I bring on the Khopra Ridge Trek?",
      a: "We recommend a mirrorless camera with a 16-35mm wide lens, a 70-200mm telephoto, a lightweight tripod, circular polarizer filter, extra batteries, a power bank, and a waterproof dry bag.",
    },
    {
      q: "Which season is best for photography on Khopra Ridge?",
      a: "Autumn (September to November) offers the crispest mountain clarity. Spring (March to May) features blooming red rhododendron forests with stable weather.",
    },
    {
      q: "Can I photograph the Milky Way from Khopra Ridge?",
      a: "Yes. At 3,660m with zero light pollution, Khopra Ridge offers world-class astrophotography conditions. Spring and Autumn provide clean dark skies.",
    },
    {
      q: "Is Khayer Lake worth visiting for photographers?",
      a: "Yes. Located at 4,660m beneath Annapurna South, Khayer Lake offers mirror-still glacial water reflections on calm mornings.",
    },
    {
      q: "Are drones allowed on the Khopra Ridge Trek?",
      a: "Drone use inside the Annapurna Conservation Area (ACAP) is restricted and legally requires permits from CAAN, NTB, and local authorities.",
    },
    {
      q: "How do photographers charge camera batteries during the trek?",
      a: "Community lodges offer paid solar charging stations in dining rooms (approx. 200–500 NPR per device/battery). A high-capacity power bank is strongly recommended.",
    },
    {
      q: "How many extra days should photographers add to the itinerary?",
      a: "Adding 1 to 2 buffer days to a standard 7-day itinerary gives flexibility for repeat sunrise/sunset attempts or weather delays.",
    },
    {
      q: "Is Khopra Ridge better for photography than Poon Hill?",
      a: "Yes. Poon Hill gets hundreds of tourists at sunrise causing crowded compositions. Khopra Ridge offers cleaner frames, eye-level mountain scale, and total quiet.",
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
            <Link href="/planning/khopra-loop-trek" className="hover:text-emerald-400 transition">Planning Hub</Link>
            <span>/</span>
            <span className="text-emerald-400">Khopra for Photographers</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Visual &amp; Field Photography Guide
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Khopra Ridge Trek for Photographers
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Best photo spots, camera gear recommendations, golden hour timing, astrophotography, and a light-optimized Himalayan itinerary.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {quickStats.map((stat, idx) => (
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
                📸
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Photographer-Led Expeditions</h4>
                <p>
                  Maintained and verified by licensed Nepal operator <strong>EMD Treks</strong> (License #8928-091). We design custom photography departures with light-optimized schedules, porter gear support, and battery charging access.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                If you have searched for the Khopra Ridge Trek for photographers, you have probably seen the usual Everest and Annapurna Base Camp photos — identical ridgelines and crowded viewpoints. Khopra Ridge is different: eye-level sightlines of Dhaulagiri and Annapurna South without tourist bottlenecks ruining your frame.
              </p>
              <p>
                This field guide is built specifically for landscape photographers and content creators wanting to plan an itinerary around light rather than just daily mileage.
              </p>
            </div>

            {/* Section 1: Best Photography Spots */}
            <div id="photo-spots" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Top Photography Spots Along the Trail
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Location &amp; Alt.</th>
                      <th className="py-4 px-4 sm:px-6">Best Golden Hour / Light</th>
                      <th className="py-4 px-4 sm:px-6">Primary Visual Subjects</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {photoLocations.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.location}</td>
                        <td className="py-4 px-4 sm:px-6 font-medium text-emerald-800">{row.bestTime}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.subjects}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 2: Camera Gear & Power Management */}
            <div id="gear-power" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Camera Gear &amp; High-Altitude Power Checklist
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                {gearChecklist.map((item, idx) => (
                  <div key={idx} className="rounded-2xl border border-stone-200 bg-white p-6 space-y-2 shadow-sm">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">{item.item}</span>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">{item.recommendation}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Astrophotography & Night Sky */}
            <div id="astrophotography" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Astrophotography &amp; Milky Way Shooting
              </h2>
              <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-4 text-sm text-stone-600 leading-relaxed">
                <p>
                  Khopra Ridge (3,660m) offers zero light pollution and thin high-altitude air, producing exceptional contrast for Milky Way and star-trail photography.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="text-stone-900 block font-bold mb-1">Exposure:</strong> 15 – 20 seconds (avoid trailing with 500-rule).
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="text-stone-900 block font-bold mb-1">Aperture &amp; ISO:</strong> Wide open f/2.8 or f/4 at ISO 1600 – 3200.
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="text-stone-900 block font-bold mb-1">Battery Care:</strong> Keep spare batteries inside your sleeping bag at night.
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions
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
                  Licensed Photography Guides
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Plan a Light-Optimized Trek Departure
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Book your photography-focused Khopra trip with local specialists <strong>EMD Treks</strong> (NTB License #8928-091). We arrange custom itineraries timed around golden hour, porter gear transport, and lodge charging support.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Plan a Photography Trip
                  </Link>
                  <Link
                    href="/viewpoints/photo-gallery"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    View Photo Gallery
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
                <a href="#photo-spots" className="block hover:text-emerald-600 transition">
                  • Top Photography Spots
                </a>
                <a href="#gear-power" className="block hover:text-emerald-600 transition">
                  • Gear &amp; Power Checklist
                </a>
                <a href="#astrophotography" className="block hover:text-emerald-600 transition">
                  • Astrophotography Tips
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Persona Guides</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/planning/khopra-for-couples" className="hover:text-emerald-700 underline">
                      Khopra for Couples
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khopra-for-families" className="hover:text-emerald-700 underline">
                      Khopra for Families
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khopra-for-beginners" className="hover:text-emerald-700 underline">
                      Khopra for Beginners
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khopra-for-budget-travelers" className="hover:text-emerald-700 underline">
                      Khopra for Budget Travelers
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
