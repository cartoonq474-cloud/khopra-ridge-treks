import React from "react";
import Link from "next/link";

export default function Page() {
  const trainingPillars = [
    {
      title: "1. Uphill and Stair Training",
      desc: "Hiring a stair climber machine, walking up stadium steps, or carrying a pack up local hills is the single best prep. Aim for 2 sessions a week of 45-60 minutes."
    },
    {
      title: "2. Zone 2 Aerobic Conditioning",
      desc: "Develop your lungs by jogging, cycling, or swimming at a conversational pace. This builds mitochondrial density, helping your body utilize thin air more efficiently."
    },
    {
      title: "3. Eccentric Leg Strength",
      desc: "Downhill hiking is what causes muscle damage and sore knees. Prepare by doing eccentric squats (4 seconds down, 1 second up), lunges, and step-ups."
    },
    {
      title: "4. Weighted Pack Hiking (Rucking)",
      desc: "Once a week, load a pack with 5kg to 8kg and walk for 3 to 5 hours. This conditions your lower back, shoulders, and hips to carry a load day after day."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Preparation Protocol</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Training Guide for the Khopra Ridge Trek
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Get your body ready for the Himalayas. A structured 8-week physical training framework focusing on building strength, cardiovascular stamina, and endurance.
          </p>
        </div>

        {/* Why training is crucial */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Why Preparation Matters</h2>
          <p className="text-stone-600 leading-relaxed">The Khopra Ridge Trek involves climbs up steep slopes and high elevation hiking. You will be climbing up to 1,000 meters in a single day. Without training, you risk early exhaustion, knee soreness, or altitude-related issues due to cardiovascular fatigue.
          </p>
          <p className="text-stone-600 leading-relaxed">Starting your training program **6 to 8 weeks** before you land in Kathmandu will transform your trek from a painful test of survival into an enjoyable and rewarding journey.
          </p>
        </div>

        {/* Pillars of Training */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">The Four Pillars of Trekking Prep</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainingPillars.map((pillar, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base">{pillar.title}</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Recommended 8-Week Training Timeline</h3>
          <ul className="space-y-3 text-xs leading-relaxed list-disc pl-5">
            <li><strong>Weeks 8 to 5 (Base Building):</strong>Do 3 cardio sessions (30 mins) + 2 strength workouts weekly. Walk on weekends for 2 hours with a light pack.</li>
            <li><strong>Weeks 4 to 2 (Peak Conditioning):</strong>Increase pack weight to 8kg on weekend hikes (3-4 hours). Add weekly stair climbing and steep hill training.</li>
            <li><strong>Week 1 (Tapering):</strong>Reduce training volume by 70%. Rest your joints, focus on stretching, hydration, and light walking. Do not push yourself to fatigue.</li>
          </ul>
        </div>

        {/* E-E-A-T Badge */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5"></span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">We help trekkers from all fitness levels prepare for the Himalayas. Contact us if you need help customizing a training program for your age or experience.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Start Planning Today</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">Book a guided trek to get access to our preparation guides, packing lists, and pre-departure webinars with trail leaders.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/#book"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-all"
              >Inquire Now
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

export const metadata = {
  alternates: {
    canonical: '/planning/training-for-khopra-trek',
  },
};
