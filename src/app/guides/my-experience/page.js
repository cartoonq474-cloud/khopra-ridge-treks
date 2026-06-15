import React from "react";
import Link from "next/link";

export default function Page() {
  const diaryEntries = [
    {
      day: "Day 3: The Ascent to Dobato",
      log: "Climbing out of the main tourist trails after Tadapani felt like entering a different world. The path winds through ancient, moss-covered oak and rhododendron forests. We had the trail entirely to ourselves. In the evening, the mist cleared to reveal a towering, vertical silhouette of Machhapuchhre (Fishtail) directly outside our lodge window."
    },
    {
      day: "Day 5: Standing on Khopra Ridge",
      log: "The final climb from Chhistibung is steep and demanding, but walking onto the open ridge line was absolutely breathtaking. Dhaulagiri (8,167m) stands directly across the Kali Gandaki gorge, illuminated by a deep orange golden-hour sunset. The community lodge dining hall was warm, filled with hikers sharing hot garlic soup and stories."
    },
    {
      day: "Day 6: The Sacred Waters of Khayer Lake",
      log: "An early 5:00 AM start for the long hike up to Khayer Lake (4,660m). The air was cold and thin, but the trail was clear. Reaching the turquoise glacial waters directly under the south face of Annapurna South felt deeply spiritual. The small stone shrine of Khayer Baraha sat peacefully by the quiet water."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Trekkers Diaries</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            My Experience: A Personal Khopra Ridge Journal
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Read a first-hand trekking diary tracing path details, local community lodge stays, and the high-altitude day hike up to sacred Khayer Lake.
          </p>
        </div>

        {/* Intro */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">A Real Trail Perspective</h2>
          <p className="text-stone-600 leading-relaxed">
            While maps and stats provide the layout of the trek, nothing matches a first-hand personal account. Below are selected journal entries from our trail coordinator&apos;s recent autumn trek along the Khopra Ridge loop, highlighting the real trail experience.
          </p>
        </div>

        {/* Diary entries */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Trail Diary Log</h3>
          <div className="space-y-6">
            {diaryEntries.map((entry, idx) => (
              <div key={idx} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base mb-2">{entry.day}</h4>
                <p className="text-xs text-stone-500 leading-relaxed italic">
                  &quot;{entry.log}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              This log is maintained and updated by our licensed local trekking guides operating out of Pokhara. We share real trail logs to prepare future hikers.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Write Your Own Trail Story</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Ready to write your own Himalayan adventure? Secure your permit-inclusive booking packages with our local team.
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
