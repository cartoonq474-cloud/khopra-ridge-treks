import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Khayer Lake Day Hike Guide | Khopra Ridge Trek Guide",
  description: "Our complete Khayer Lake Day Hike Guide covers the route, hour-by-hour timeline, difficulty, altitude, safety, and packing tips for a safe hike from Khopra Ridge.",
  alternates: {
    canonical: "https://khopraridgetrek.com/planning/khayer-lake-day-hike",
  },
  openGraph: {
    title: "Khayer Lake Day Hike Guide: Route, Timeline, Difficulty & Essential Tips",
    description:
      "Our complete Khayer Lake Day Hike Guide covers the route, hour-by-hour timeline, difficulty, altitude, safety, and packing tips for a safe hike from Khopra Ridge.",
    url: "https://khopraridgetrek.com/planning/khayer-lake-day-hike",
    type: "article",
  },
};

export default function KhayerLakeDayHikePage() {
  const stats = [
    { label: "Round-Trip Distance", value: "16 km / 9.9 miles" },
    { label: "Elevation Gain", value: "+1,000 m / +3,280 ft" },
    { label: "Summit Altitude", value: "4,660 m (Khayer Lake)" },
    { label: "Hiking Duration", value: "8 – 10 Hours Round Trip" },
  ];

  const timeline = [
    {
      time: "5:00 AM – 7:00 AM",
      phase: "Early Dawn Departure & Warm-Up",
      desc: "Depart Khopra Ridge (3,660m) in pitch darkness using headlamps. Walk slowly through grassy lower pastures to warm up muscles and acclimatize gradually.",
    },
    {
      time: "7:00 AM – 9:30 AM",
      phase: "First Ridge Saddle & Alpenglow",
      desc: "Reach the first ridge saddle as sunrise hits Dhaulagiri across the Kali Gandaki Valley. Hydrate, eat high-energy snacks, and adjust clothing layers as the sun rises.",
    },
    {
      time: "9:30 AM – 11:00 AM",
      phase: "Glacial Moraine & Final Ascent",
      desc: "Cross loose shale scree and glacial moraine fields. Maintain a slow, deliberate rhythm on steep built stone steps climbing up to the 4,660m lake plateau.",
    },
    {
      time: "11:00 AM – 12:30 PM",
      phase: "Lake Exploration & Temple Visit",
      desc: "Explore sacred Khayer Lake, photograph Annapurna South's towering 3,000m wall, visit sacred Khayer Baraha Temple, and eat your packed lodge lunch.",
    },
    {
      time: "12:30 PM – 4:00 PM",
      phase: "Return Descent to Khopra Ridge",
      desc: "Begin descending by 12:30 PM to avoid afternoon cloud cover and rising ridge winds. Step carefully across scree slopes; arrive back at lodge around 4:00 PM.",
    },
  ];

  const seasonalConditions = [
    { season: "Autumn (Oct – Nov)", rating: "Best Season (5/5)", detail: "Crisp post-monsoon visibility, clear mountain panoramas, cold sub-zero dawn starts." },
    { season: "Spring (Mar – Apr)", rating: "Strong Second Option (4/5)", detail: "Rhododendron blooms on approach, stable weather, lingering snow patches in upper moraine." },
    { season: "Winter (Dec – Feb)", rating: "Challenging / Experienced (2/5)", detail: "Heavy snow covers moraine cairns and lake shore; severe cold, guide strongly recommended." },
    { season: "Monsoon (Jun – Aug)", rating: "Not Recommended (1/5)", detail: "Slippery moraine rocks, dense cloud cover, leeches on lower trails, frequent rain." },
  ];

  const faqs = [
    {
      q: "How difficult is the Khayer Lake day hike?",
      a: "It is rated strenuous due to the combination of 16 km distance, 1,000m elevation gain, loose moraine scree terrain, and high altitude (4,660m) — not technical climbing.",
    },
    {
      q: "Can beginners hike to Khayer Lake?",
      a: "Beginners with strong trekking fitness can complete it, provided they acclimatize properly on the Khopra Ridge Trek and consider hiring a local guide.",
    },
    {
      q: "How long does the Khayer Lake day hike take?",
      a: "Most trekkers complete the full round trip in 8 to 10 hours, depending on fitness, acclimatization, and weather on the day.",
    },
    {
      q: "What is the total round-trip distance?",
      a: "The round-trip distance is approximately 16 kilometers (9.9 miles) from Khopra Ridge Community Lodge.",
    },
    {
      q: "What time should I leave Khopra Ridge Lodge?",
      a: "A 5:00 AM departure is standard. An early start ensures you reach the lake before 11:00 AM cloud buildup and return safely before dusk.",
    },
    {
      q: "Do I need a guide for the Khayer Lake hike?",
      a: "A guide isn't strictly mandatory in clear autumn conditions for experienced hikers, but is strongly recommended for first-timers, shoulder season, or snowy conditions.",
    },
    {
      q: "Is altitude sickness common on this hike?",
      a: "Symptoms like headache and heavier breathing are common at 4,660m. Maintaining a slow pace and drinking 3 liters of water reduces AMS risks.",
    },
    {
      q: "What is the best season to hike to Khayer Lake?",
      a: "Autumn (October–November) offers the clearest skies and sharpest mountain views, followed by Spring (March–April).",
    },
    {
      q: "Is there drinking water available on the trail?",
      a: "There are no teahouses or shops on the trail. You must carry 2 to 3 liters of water from Khopra Ridge Lodge.",
    },
    {
      q: "Is the Khayer Lake day hike worth the effort?",
      a: "Yes! Reaching a sacred glacial lake directly under the 3,000m south wall of Annapurna South with panoramic views of Dhaulagiri and Nilgiri is an unforgettable Himalayan experience.",
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
            <span className="text-emerald-400">Day Hike Guide</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Complete Alpine Excursion Planner
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Khayer Lake Day Hike Guide
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Route, hour-by-hour timeline, difficulty breakdown, altitude safety, and essential tips for the 10-hour trek from Khopra Ridge (3,660m) to Khayer Lake (4,660m).
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
                  Maintained and verified by licensed Nepal trekking operator <strong>EMD Treks</strong> (License #8928-091). Our local guides lead this 16km excursion regularly, monitoring weather windows, moraine conditions, and altitude safety.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                If you&apos;re staying at the <Link href="/nodes/khopra-ridge-lodge-guide" className="text-emerald-700 hover:underline font-semibold">Khopra Ridge Community Lodge</Link>, the Khayer Lake day hike is almost certainly the reason you came this far. It&apos;s a long day — ten hours round trip in thin mountain air — and it rewards careful planning far more than enthusiasm alone.
              </p>
              <p>
                This guide provides the real route walkthrough, realistic pacing timelines, moraine terrain warnings, and altitude management advice needed for a safe, successful hike from Khopra Ridge (3,660m) to Khayer Lake (4,660m).
              </p>
            </div>

            {/* Section 1: Day Hike Statistics Table */}
            <div id="hike-statistics" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Khayer Lake Day Hike at a Glance
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Detail</th>
                      <th className="py-4 px-4 sm:px-6">Hike Statistic</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    <tr className="hover:bg-stone-50 transition">
                      <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">Round-Trip Distance</td>
                      <td className="py-4 px-4 sm:px-6 text-stone-600">16 km (9.9 miles)</td>
                    </tr>
                    <tr className="hover:bg-stone-50 transition">
                      <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">Net Elevation Gain</td>
                      <td className="py-4 px-4 sm:px-6 text-stone-600">+1,000 m (+3,280 ft)</td>
                    </tr>
                    <tr className="hover:bg-stone-50 transition">
                      <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">Highest Point</td>
                      <td className="py-4 px-4 sm:px-6 text-stone-600">4,660 m (Khayer Lake Plateau)</td>
                    </tr>
                    <tr className="hover:bg-stone-50 transition">
                      <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">Total Duration</td>
                      <td className="py-4 px-4 sm:px-6 text-stone-600">8 to 10 Hours Round Trip</td>
                    </tr>
                    <tr className="hover:bg-stone-50 transition">
                      <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">Difficulty Rating</td>
                      <td className="py-4 px-4 sm:px-6 text-stone-600 font-bold text-amber-700">Strenuous High-Altitude Day Hike</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 2: Hour-by-Hour Timeline */}
            <div id="hour-timeline" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Hour-by-Hour Hiking Itinerary
              </h2>

              <div className="space-y-6">
                {timeline.map((step, idx) => (
                  <div key={idx} className="rounded-2xl border border-stone-200 bg-white p-6 space-y-2 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-100 pb-3 gap-2">
                      <h3 className="font-extrabold text-stone-950 text-lg">{step.phase}</h3>
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-800 font-bold text-xs rounded-full shrink-0">
                        {step.time}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pt-1">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Seasonal Conditions */}
            <div id="seasonal-guide" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Trail Conditions by Season
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {seasonalConditions.map((item, idx) => (
                  <div key={idx} className="rounded-2xl border border-stone-200 bg-white p-6 space-y-2 shadow-sm">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-stone-950 text-base">{item.season}</h4>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                        {item.rating}
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed pt-1">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4: Safety & Altitude Management */}
            <div id="altitude-safety" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Altitude Safety &amp; Turnaround Rules
              </h2>
              <div className="space-y-4 text-stone-700 leading-relaxed">
                <ul className="list-disc pl-6 space-y-3 text-sm sm:text-base">
                  <li><strong>Recognize AMS Warning Signs:</strong> Headache, nausea, dizziness, and extreme breathlessness are warning signs of Acute Mountain Sickness. Do not push higher if symptoms worsen.</li>
                  <li><strong>Strict 12:30 PM Turnaround Rule:</strong> If you have not reached Khayer Lake by 12:30 PM, turn back immediately. Afternoon clouds and ridge winds make descending in darkness dangerous.</li>
                  <li><strong>Hydration Requirement:</strong> Drink at least 3 liters of water throughout the hike to maintain hydration in dry alpine air.</li>
                </ul>
              </div>
            </div>

            {/* Section 5: FAQ Accordion */}
            <div id="faq" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Frequently Asked Questions: Khayer Lake Day Hike
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
                  Book Guided Excursion
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Trek Khayer Lake with Licensed Local Guides
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Join licensed operator <strong>EMD Treks</strong> (Nepal Tourism License #8928-091). Our local guides handle pacing, weather monitoring, and altitude safety for a seamless Khayer Lake hike.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Inquire About Guided Treks
                  </Link>
                  <Link
                    href="/planning/khayer-lake-packing-list"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Packing Checklist
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
                <a href="#hike-statistics" className="block hover:text-emerald-600 transition">
                  • Hike Statistics &amp; Metrics
                </a>
                <a href="#hour-timeline" className="block hover:text-emerald-600 transition">
                  • Hour-by-Hour Timeline
                </a>
                <a href="#seasonal-guide" className="block hover:text-emerald-600 transition">
                  • Seasonal Conditions
                </a>
                <a href="#altitude-safety" className="block hover:text-emerald-600 transition">
                  • Altitude Safety Rules
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Excursion Guides</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/planning/khayer-lake-route-guide" className="hover:text-emerald-700 underline">
                      Khayer Lake Route Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khayer-lake-packing-list" className="hover:text-emerald-700 underline">
                      Day Hike Packing List
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khayer-lake-weather" className="hover:text-emerald-700 underline">
                      Khayer Lake Weather Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/khayer-lake-photography-guide" className="hover:text-emerald-700 underline">
                      Photography Guide
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
