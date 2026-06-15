import React from "react";
import Link from "next/link";

export default function Page() {
  const trainingRoutine = [
    { week: "Weeks 1-4 (Cardio Base)", focus: "Stair Climbing & Fast Walking", desc: "Build cardiovascular baseline. Hike local hills or use a stairmaster at the gym for 45 minutes, 3 times a week carrying a light 5kg backpack." },
    { week: "Weeks 5-8 (Strength & Stamina)", focus: "Leg Endurance & Weight Carry", desc: "Increase weight to 8kg. Incorporate squats, lunges, and calf raises. Take longer weekend hikes of 4-6 hours to condition your knees and joints." },
    { week: "Weeks 9-10 (Acclimatization Simulation)", focus: "Intervals & Breathing Control", desc: "Do high-intensity interval training (HIIT) to improve lung capacity. Focus on slow, rhythmic breathing and stretch core joints daily." }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Preparation &amp; Training</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Khopra Ridge Trek for Beginners
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            First time trekking in the Himalayas? Explore our comprehensive training guide, fitness routines, and safety tips to conquer the Khopra Ridge route comfortably.
          </p>
        </div>

        {/* Is it beginner friendly? */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Is Khopra Ridge Suitable for Beginners?</h2>
          <p className="text-stone-600 leading-relaxed">
            The short answer is **yes, but with preparation**. The core trail itself does not require any technical mountaineering skills, ropes, or ice axes. It is a walking route consisting of stone steps, forest trails, and grassy ridges. 
          </p>
          <p className="text-stone-600 leading-relaxed">
            However, the vertical gain is steep (climbing from 1,400m to 3,660m) and the optional day hike to Khayer Lake reaches 4,660m. For absolute novices, we recommend hiring a local porter to carry your main duffle bag, letting you focus entirely on your pace with a light daypack.
          </p>
        </div>

        {/* Training Routine Timeline */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">10-Week Training Routine</h2>
          <p className="text-stone-600 leading-relaxed">
            To hike comfortably for 5 to 7 hours a day on mountainous terrains, we recommend starting this preparation timeline 2.5 months before your departure date:
          </p>
          <div className="space-y-6">
            {trainingRoutine.map((tr, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">{tr.week}</span>
                <h4 className="font-extrabold text-stone-950 text-base mt-1">{tr.focus}</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">{tr.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Three Golden Tips */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Three Golden Rules for Novice Trekkers</h3>
          <ul className="space-y-3 text-xs leading-relaxed list-disc pl-5">
            <li>
              <strong>Walk "Bistari, Bistari" (Slowly, Slowly):</strong> Himalayan trekking is not a race. Walking at a slow, conversational pace is the single best way to prevent altitude sickness and save energy.
            </li>
            <li>
              <strong>Hydrate Frequently:</strong> Your body loses water rapidly in dry, cold mountain air. Drink 4 liters of purified water daily (even when you don't feel thirsty).
            </li>
            <li>
              <strong>Break In Your Boots:</strong> Never wear brand new hiking boots on the trail. Wear them on your training hikes for at least 30-40km to avoid painful blisters in remote valleys.
            </li>
          </ul>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              We have guided hundreds of beginner hikers to Khopra Ridge. Our itineraries are specifically structured to prevent fatigue and support safe acclimatization.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Trek Safely with Professional Guides</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Want to book your first Himalayan adventure with certified guides who prioritize safety, slow pacing, and porter support? Speak to us today.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/#book"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-all"
              >
                Inquire Now
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
