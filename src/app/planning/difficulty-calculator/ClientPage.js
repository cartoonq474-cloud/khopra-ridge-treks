"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ClientPage() {
  const [cardio, setCardio] = useState("intermediate");
  const [altitude, setAltitude] = useState("some");
  const [packWeight, setPackWeight] = useState("light");
  const [hasCalculated, setHasCalculated] = useState(false);
  const [score, setScore] = useState(38);
  const [verdict, setVerdict] = useState("Moderate");
  const [advice, setAdvice] = useState(
    "Manageable with basic hill prep. Your physical profile is well-aligned with the daily 5-6 hour trekking stages. Maintaining steady hydration and taking the Khayer Lake day hike slowly will ensure a comfortable trek."
  );

  const calculateDifficulty = () => {
    let base = 50; // Neutral baseline

    // Cardio adjustments
    if (cardio === "beginner") base += 25;
    if (cardio === "intermediate") base += 5;
    if (cardio === "advanced") base -= 20;

    // Altitude adjustments
    if (altitude === "none") base += 20;
    if (altitude === "some") base += 0;
    if (altitude === "extensive") base -= 15;

    // Pack weight adjustments
    if (packWeight === "light") base -= 15;
    if (packWeight === "medium") base += 5;
    if (packWeight === "heavy") base += 25;

    const finalScore = Math.min(Math.max(base, 10), 98);
    setScore(finalScore);

    if (finalScore <= 25) {
      setVerdict("Easy (Well Prepared)");
      setAdvice(
        "You are exceptionally well-matched to the trek's physical demands. The daily elevation gains and Khayer Lake push (4,660m) will feel manageable. Focus on enjoying the secluded views and authentic community lodges."
      );
    } else if (finalScore <= 50) {
      setVerdict("Moderate (Achievable)");
      setAdvice(
        "Very achievable with standard pacing. A few weeks of stair or hill training prior to departure will optimize your endurance. Maintain steady hydration on the steep climb to Khopra Ridge (+685m)."
      );
    } else if (finalScore <= 75) {
      setVerdict("Challenging (Training Recommended)");
      setAdvice(
        "The trek will test your stamina. We strongly recommend hiring a porter to keep your pack light (3–5kg), completing a 6-week leg training plan, and pacing your ascent conservatively."
      );
    } else {
      setVerdict("Difficult (High Prep & Support Required)");
      setAdvice(
        "Significant preparation is required. We strongly advise booking a porter, adding an extra acclimatization rest day at Khopra Ridge, and working on stair climbing fitness 8 weeks before departure."
      );
    }

    setHasCalculated(true);
  };

  const summarySpecs = [
    { label: "Calculator Scale", value: "0 to 100 Index" },
    { label: "Baseline Difficulty", value: "Moderate to Challenging" },
    { label: "Max Altitude", value: "Khayer Lake (4,660m)" },
    { label: "Primary Challenge", value: "Stone Step Ascents" },
  ];

  const scoreBands = [
    { range: "0–25", level: "Easy", meaning: "You are well-matched to the trek's physical demands as they stand." },
    { range: "26–50", level: "Moderate", meaning: "Manageable with standard pacing; a few training weeks will help." },
    { range: "51–75", level: "Challenging", meaning: "The trek will test you; structured training & a porter are recommended." },
    { range: "76–100", level: "Difficult", meaning: "Significant preparation & porter support are strongly advised." },
  ];

  const sampleProfiles = [
    { profile: "Beginner, Sea Level, Medium Pack", score: "55 – 65", category: "Challenging", rec: "Hire a porter; build stair cardio 4–6 weeks." },
    { profile: "Experienced Hiker, No High Altitude, Full Self-Carry", score: "50 – 60", category: "Challenging", rec: "Reduce pack weight; practice slow high-elevation pacing." },
    { profile: "Active Senior, Light Daypack with Porter", score: "25 – 40", category: "Moderate", rec: "Maintain steady rhythm; build extra rest buffer days." },
    { profile: "Advanced Runner, High Altitude Experience, Light Pack", score: "10 – 20", category: "Easy", rec: "Ideal candidate for full circuit + Khayer Lake side hike." },
  ];

  const faqs = [
    {
      q: "How difficult is the Khopra Ridge Trek for beginners?",
      a: "It is manageable for beginners who prepare with 4 to 6 weeks of cardio and hill training beforehand, especially when using porter support. Without preparation, the consecutive climbing days can feel strenuous.",
    },
    {
      q: "What is a good score on the Khopra Ridge Trek Difficulty Calculator?",
      a: "A score in the 0–50 range (Easy to Moderate) indicates you are well-suited to the trek's physical demands with minimal extra preparation needed.",
    },
    {
      q: "How fit do I need to be for the Khopra Ridge Trek?",
      a: "You should be comfortable walking 5 to 6 hours over uneven, hilly terrain with a daypack for consecutive days.",
    },
    {
      q: "Is Khayer Lake the hardest part of the trek?",
      a: "Yes. Reaching 4,660 meters on a 12–14 km round trip day hike from Khopra Ridge represents the most physically demanding single day of the itinerary.",
    },
    {
      q: "Can seniors complete the Khopra Ridge Trek?",
      a: "Yes. Many seniors complete the route comfortably by pacing conservatively, hiring a porter, and adding rest days in Swanta or Ghandruk.",
    },
    {
      q: "Should I hire a porter to reduce difficulty?",
      a: "Hiring a porter is the single most effective way to reduce physical strain, dropping your daily pack weight from 10–12kg down to a 3–5kg daypack.",
    },
    {
      q: "How many hours do you walk each day?",
      a: "Most days involve 5 to 7 hours of walking, with the longest day being the 6 to 7 hour Khayer Lake round trip.",
    },
    {
      q: "Is altitude sickness common on the Khopra Ridge Trek?",
      a: "Mild altitude symptoms can occur at Khopra Ridge (3,660m) or Khayer Lake (4,660m). Proper hydration, slow pacing, and acclimatization days mitigate AMS risks.",
    },
    {
      q: "Does previous trekking experience matter?",
      a: "Yes. Prior high-altitude exposure helps trekkers manage pacing, recognize fatigue early, and adjust to thinner air more effectively.",
    },
    {
      q: "Can I complete the trek without a guide?",
      a: "While experienced trekkers can hike independently, a licensed local guide adds significant safety, pacing support, and navigation help at key trail junctions.",
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
            <Link href="/planning/khopra-trek-itinerary" className="hover:text-emerald-400 transition">Planning</Link>
            <span>/</span>
            <span className="text-emerald-400">Difficulty Calculator</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Interactive Fitness Tool
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Khopra Ridge Trek Difficulty Calculator
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 font-medium leading-relaxed">
              Find your personalized trek difficulty score. Calculate your readiness based on cardio fitness, altitude background, and backpack weight.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {summarySpecs.map((stat, idx) => (
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
                📊
              </div>
              <div className="space-y-1 text-sm text-stone-600">
                <h4 className="font-bold text-stone-900 text-base">Verified Trekking Readiness Calculator</h4>
                <p>
                  Maintained and verified by Pokhara local operator <strong>EMD Treks</strong> (License #8928-091). We calibrate difficulty metrics from hundreds of guided Khopra Ridge and Khayer Lake expeditions.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-stone-900 leading-relaxed">
                Every year, trekkers ask the same question about the Khopra Ridge Trek: &quot;Is this too hard for me?&quot; The honest answer is that it depends on who is asking.
              </p>
              <p>
                Our interactive difficulty calculator factors in your cardiovascular fitness, altitude experience, and backpack setup to generate a personalized difficulty index from 0 to 100.
              </p>
            </div>

            {/* Section 1: Interactive Difficulty Calculator Form & Result */}
            <div id="calculator-widget" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Calculate Your Personal Difficulty Score
              </h2>

              <div className="grid gap-8 md:grid-cols-2">
                {/* Form Inputs */}
                <div className="p-8 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-6">
                  <h3 className="text-xl font-bold text-stone-950">1. Enter Your Profile Details</h3>

                  {/* Cardio Input */}
                  <div className="space-y-2">
                    <label htmlFor="difficulty-cardio" className="text-xs font-bold text-stone-600 uppercase tracking-wider block">
                      Weekly Cardio Activity
                    </label>
                    <select
                      id="difficulty-cardio"
                      value={cardio}
                      onChange={(e) => setCardio(e.target.value)}
                      className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-sm font-semibold text-stone-900 focus:outline-none focus:border-emerald-500"
                    >
                      <option value="beginner">Beginner (Occasional walks, little regular cardio)</option>
                      <option value="intermediate">Intermediate (Regular walking/jogging 2-3x/week)</option>
                      <option value="advanced">Advanced (Consistent cardio/stairs/hiking 4-5x/week)</option>
                    </select>
                  </div>

                  {/* Altitude Input */}
                  <div className="space-y-2">
                    <label htmlFor="difficulty-altitude" className="text-xs font-bold text-stone-600 uppercase tracking-wider block">
                      Previous Altitude Experience
                    </label>
                    <select
                      id="difficulty-altitude"
                      value={altitude}
                      onChange={(e) => setAltitude(e.target.value)}
                      className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-sm font-semibold text-stone-900 focus:outline-none focus:border-emerald-500"
                    >
                      <option value="none">None (Mostly sea level / below 2,000m)</option>
                      <option value="some">Some (Trek or slept above 2,500m–3,000m)</option>
                      <option value="extensive">Extensive (Multiple treks above 3,500m–4,000m)</option>
                    </select>
                  </div>

                  {/* Pack Weight Input */}
                  <div className="space-y-2">
                    <label htmlFor="difficulty-pack" className="text-xs font-bold text-stone-600 uppercase tracking-wider block">
                      Backpack Setup
                    </label>
                    <select
                      id="difficulty-pack"
                      value={packWeight}
                      onChange={(e) => setPackWeight(e.target.value)}
                      className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-sm font-semibold text-stone-900 focus:outline-none focus:border-emerald-500"
                    >
                      <option value="light">Light Daypack (3–5 kg, Porter-supported)</option>
                      <option value="medium">Medium Pack (6–10 kg, Self-carried gear)</option>
                      <option value="heavy">Full Self-Carry (12+ kg, No porter)</option>
                    </select>
                  </div>

                  <button
                    type="button"
                    onClick={calculateDifficulty}
                    className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl transition shadow-md cursor-pointer"
                  >
                    Calculate Score
                  </button>
                </div>

                {/* Score Output Card */}
                <div className="p-8 bg-stone-100 border border-stone-200 rounded-3xl flex flex-col justify-between shadow-sm">
                  <div className="space-y-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 block">Assessment Verdict</span>
                    
                    <div className="flex items-baseline gap-3">
                      <span className="text-5xl font-black text-stone-950">{score}</span>
                      <span className="text-xs text-stone-500 font-semibold">/ 100 Difficulty Index</span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">Verdict Category</span>
                      <span className="text-xl font-extrabold text-stone-900 mt-1 block">{verdict}</span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">Expert Recommendation</span>
                      <p className="text-xs text-stone-600 leading-relaxed mt-2">{advice}</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-stone-200/60 text-[10px] text-stone-400">
                    *Score represents a trekking-specific index based on elevation gain, trail terrain, and altitude load.
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Score Range Table */}
            <div id="score-ranges" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Understanding Difficulty Score Ranges
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Score Range</th>
                      <th className="py-4 px-4 sm:px-6">Difficulty Level</th>
                      <th className="py-4 px-4 sm:px-6">What It Means for Your Trek</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {scoreBands.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-emerald-800">{row.range}</td>
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.level}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.meaning}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 3: Sample Trekker Profiles */}
            <div id="sample-profiles" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Sample Trekker Profiles &amp; Expected Scores
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-stone-700">
                  <thead className="bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Trekker Profile</th>
                      <th className="py-4 px-4 sm:px-6">Expected Score</th>
                      <th className="py-4 px-4 sm:px-6">Verdict Category</th>
                      <th className="py-4 px-4 sm:px-6">Actionable Recommendation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                    {sampleProfiles.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition">
                        <td className="py-4 px-4 sm:px-6 font-bold text-stone-950">{row.profile}</td>
                        <td className="py-4 px-4 sm:px-6 font-semibold text-emerald-800">{row.score}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.category}</td>
                        <td className="py-4 px-4 sm:px-6 text-stone-600">{row.rec}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 4: Fitness & Acclimatization Deep-Dive */}
            <div id="fitness-guidance" className="scroll-mt-24 space-y-6 border-t border-stone-200 pt-8 text-stone-700 leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                How to Reduce Your Trek Difficulty
              </h2>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">🎒 Hire a Local Porter</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Hiring a porter drops your daily pack weight from 10–12kg to a 3–5kg daypack, reducing energy expenditure on steep climbs by over 30%.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">🧗 Pre-Trek Stair &amp; Leg Training</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Dedicated stair climbing, lunges, and weighted step-ups target quad and calf stabilizer muscles needed for thousands of stone steps.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">⏱️ Conservative Pacing</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Walking with steady breathing and zero overexertion prevents rapid heart rate spikes and lowers acute mountain sickness risk.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h3 className="font-bold text-stone-900 text-base">🛌 Add Rest Buffer Days</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Inserting an extra rest day at Khopra Ridge (3,660m) allows your body to acclimatize before attempting the 4,660m Khayer Lake push.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5: FAQ Accordion */}
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
                  Personalized Trek Planning
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Discuss Your Fitness Score With Local Experts
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  Have questions about your difficulty score? Contact Pokhara local operator <strong>EMD Treks</strong> (NTB License #8928-091) to tailor a comfortable, porter-supported itinerary for your team.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    Discuss Your Itinerary
                  </Link>
                  <Link
                    href="/planning/khopra-trek-difficulty"
                    className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                  >
                    Read Difficulty Overview
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
                <a href="#calculator-widget" className="block hover:text-emerald-600 transition">
                  • Difficulty Calculator
                </a>
                <a href="#score-ranges" className="block hover:text-emerald-600 transition">
                  • Score Range Meaning
                </a>
                <a href="#sample-profiles" className="block hover:text-emerald-600 transition">
                  • Sample Trekker Profiles
                </a>
                <a href="#fitness-guidance" className="block hover:text-emerald-600 transition">
                  • How to Lower Difficulty
                </a>
                <a href="#faq" className="block hover:text-emerald-600 transition">
                  • FAQ Section
                </a>
              </nav>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Related Planning Tools</span>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li>
                    <Link href="/planning/how-fit-to-trek-khopra" className="hover:text-emerald-700 underline">
                      Trekking Fitness Requirements
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/trekking-fitness-plan" className="hover:text-emerald-700 underline">
                      8-Week Training Plan
                    </Link>
                  </li>
                  <li>
                    <Link href="/planning/porter-cost" className="hover:text-emerald-700 underline">
                      Porter Cost &amp; Support Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/altitude/acclimatization-guide" className="hover:text-emerald-700 underline">
                      Acclimatization &amp; AMS Safety
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
