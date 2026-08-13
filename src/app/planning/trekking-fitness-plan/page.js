import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/planning/trekking-fitness-plan",
  },
  title: "Weekly Trekking Fitness Plan | Nepal Trek Guide",
  description: "Build real stamina for Nepal's mountain trails with our structured 8-week weekly trekking fitness plan. Designed for uphill climbs, long descents, and.",
};

export default function Page() {
  const scheduleDays = [
    {
      day: "Monday",
      focus: "Leg Strength & Core Stability",
      exercises: "Squats (3 sets of 12 reps), Lunges (3 sets of 10 reps per leg), Step-ups on bench/box (3 sets of 15 reps), Calf raises (3 sets of 20 reps), Plank holds (3 sets of 60 seconds). Directly replicates stone step climbing."
    },
    {
      day: "Tuesday",
      focus: "Zone 2 Cardio & Lung Capacity",
      exercises: "45–60 minutes of incline treadmill walking (6–10% grade), stationary cycling, or jogging at a conversational pace. Focuses on cardiovascular base building for altitude oxygen efficiency."
    },
    {
      day: "Wednesday",
      focus: "Recovery & Mobility Stretches",
      exercises: "Full-body stretching (hips, hamstrings, calves, quads, hip flexors) and foam rolling. Light yoga or a 20-minute flat walk. Prevents calf tightness and Achilles issues."
    },
    {
      day: "Thursday",
      focus: "Stair Climbing & Uphill repeats",
      exercises: "40–50 minutes of stair climber machine, stadium step repeats, or outdoor hill walking. Focuses on breathing rhythms: slow, controlled exhales on the climbs."
    },
    {
      day: "Friday",
      focus: "Full Rest Day",
      exercises: "No physical training. Focus entirely on hydration, nutrition, and sleep. Rest is a performance tool to prepare for Saturday's long trail simulation."
    },
    {
      day: "Saturday",
      focus: "Weighted Hiking (Rucking)",
      exercises: "3 to 5 hours of trail/hill hiking carrying a loaded backpack (5kg in weeks 1–4, building to 7–8kg in weeks 5–8). Always wear actual trekking boots and socks to break them in."
    },
    {
      day: "Sunday",
      focus: "Joint Stability & Flexibility",
      exercises: "30–40 minutes of mobility work. Focus on hamstring stretches, hip flexor lunges, calf/Achilles stretching, ankle mobility, and light foam rolling."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="mb-6 flex items-center gap-2 text-xs text-stone-400 font-semibold">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/planning" className="hover:text-emerald-400 transition-colors">Planning</Link>
            <span>/</span>
            <span className="text-emerald-400">Weekly Fitness Plan</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Weekly Workout Calendar
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Weekly Trekking Fitness Plan
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            A structured 8-week physical training framework focusing on uphill climbing, knee stabilization, and backpack load carrying.
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
              <a href="#how-it-works" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                How It Works
              </a>
              <a href="#weekly-schedule" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Weekly Schedule
              </a>
              <a href="#progression-plan" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                8-Week Progression
              </a>
              <a href="#fitness-principles" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Fitness Principles
              </a>
              <a href="#common-mistakes" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Common Mistakes
              </a>
              <a href="#modifications" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Beginner Modifications
              </a>
              <a href="#why-himalayan" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Himalayan Preparation
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
                Trek Preparation Consultation
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Weekly Trekking Fitness Plan
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Most trekkers arrive in Nepal excited, energetic, and completely underprepared.
              </p>
              <p>
                Within the first two days on trail — navigating stone steps at 2,700 metres, climbing steep switchbacks above Ghorepani, or pushing uphill toward Khopra Ridge — many guests hit their physical limit. Burning quads, breathless lungs, and swelling knees become the defining memories instead of the mountain views.
              </p>
              <p>
                It is not a fitness failure. It is a preparation gap.
              </p>
              <p>
                Generic gym workouts and casual walks around the neighbourhood do not replicate the demands of multi-day Himalayan trekking. The body needs specific preparation: trail-adapted strength, aerobic endurance for altitude, load-carrying capacity, and knees that can handle long descents without breaking down.
              </p>
              <p>
                This weekly trekking fitness plan gives you exactly that. It is an 8-week training program built around real Himalayan trail conditions — and designed to get any trekker, beginner or intermediate, physically and mentally ready for the mountains.
              </p>
              <p className="font-semibold text-emerald-700">
                Follow it consistently. Finish your trek comfortably.
              </p>
            </div>
          </article>

          {/* SECTION: HOW IT WORKS */}
          <article id="how-it-works" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How This Weekly Trekking Fitness Plan Works
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Before diving into the daily schedule, it helps to understand the logic behind the program. This is not a general gym fitness plan with a trekking label on it. Every session is designed to replicate something you will face on trail.
              </p>
              <p>
                <strong>Why Trekking Fitness Is Different from Gym Fitness:</strong> Standard gym training builds isolated muscle groups and general cardiovascular capacity. That has value — but it does not prepare your body for what happens when you trek 5 to 7 hours a day through mountain terrain.
              </p>
              <p>
                Trekking fitness requires a different kind of endurance. You need legs that can push uphill for three straight hours. Knees that absorb shock on a steep descent without aching. A cardiovascular system that stays efficient when air gets thin above 3,000 metres. And a back and core strong enough to carry a loaded pack all day without fatigue distorting your posture.
              </p>
              
              <h3 className="text-base font-bold text-stone-900 mt-6">3-Phase Training Structure</h3>
              <div className="grid gap-4 md:grid-cols-3 mt-4">
                <div className="p-5 bg-white border border-stone-200 rounded-2xl shadow-sm">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">Phase 1: Foundation (W1–2)</span>
                  <p className="text-xs text-stone-600 leading-relaxed">Build movement patterns, activate muscle groups, and establish routine. Low volume, high focus on consistency.</p>
                </div>
                <div className="p-5 bg-white border border-stone-200 rounded-2xl shadow-sm">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">Phase 2: Building (W3–5)</span>
                  <p className="text-xs text-stone-600 leading-relaxed">Increase cardio duration, introduce heavier pack loads, and raise stair climber intensity. Key physiological adaptation phase.</p>
                </div>
                <div className="p-5 bg-white border border-stone-200 rounded-2xl shadow-sm">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">Phase 3: Simulation (W6–8)</span>
                  <p className="text-xs text-stone-600 leading-relaxed">Long weighted rucking hikes, back-to-back walks, and descent leg muscle eccentric control rehearsal.</p>
                </div>
              </div>
            </div>
          </article>

          {/* SECTION: WEEKLY SCHEDULE */}
          <article id="weekly-schedule" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Weekly Hiking Training Schedule (Core Program)
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              This is the core weekly cycle. Begin it 8 weeks before your trek departure date. Each session has a specific purpose tied to real trekking demands:
            </p>

            <div className="space-y-4 mt-6">
              {scheduleDays.map((item, idx) => (
                <div key={idx} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
                  <div className="md:col-span-1">
                    <span className="text-base font-extrabold text-stone-950 block">{item.day}</span>
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mt-1">{item.focus}</span>
                  </div>
                  <div className="md:col-span-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {item.exercises}
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* SECTION: PROGRESSION PLAN */}
          <article id="progression-plan" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              8-Week Trekking Fitness Progression Plan
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The weekly schedule above stays consistent throughout the 8 weeks. What changes is the intensity, duration, and load across progressive phases:
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                  <h4 className="font-extrabold text-stone-950 text-sm">Weeks 1–2: Foundation Phase</h4>
                  <p className="text-xs text-stone-500 mt-2 leading-relaxed">
                    Monday strength sessions: use bodyweight only or light dumbbells. Tuesday cardio: 45 minutes, easy pace. Thursday stair training: 30 minutes at a comfortable pace. Saturday hike: 2–3 hours, backpack loaded with 5 kg, flat to moderate terrain. Do not push hard; let your body adapt to the pattern.
                  </p>
                </div>
                <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                  <h4 className="font-extrabold text-stone-950 text-sm">Weeks 3–4: Endurance Development Phase</h4>
                  <p className="text-xs text-stone-500 mt-2 leading-relaxed">
                    Tuesday cardio: extend to 60 minutes. Thursday stair training: increase to 45 minutes, slightly faster pace. Saturday hike: extend to 3–4 hours, include more elevation change. Add 6 kg to your backpack on Saturdays. Aerobic adaptation begins building.
                  </p>
                </div>
                <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                  <h4 className="font-extrabold text-stone-950 text-sm">Weeks 5–6: Strength and Load Building Phase</h4>
                  <p className="text-xs text-stone-500 mt-2 leading-relaxed">
                    Monday strength: add weight to step-ups and consider wearing a light vest. Tuesday cardio: 60–75 minutes, Zone 2 pace. Thursday stair training: 50 minutes, introduce interval efforts. Saturday hike: 4–5 hours, backpack at 7–8 kg, prioritize steep sections. Focus heavily on eccentric quad downhill control.
                  </p>
                </div>
                <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                  <h4 className="font-extrabold text-stone-950 text-sm">Weeks 7–8: Trek Simulation Phase</h4>
                  <p className="text-xs text-stone-500 mt-2 leading-relaxed">
                    Saturday hike: 5+ hours, full pack weight (8kg), challenging terrain. Consider back-to-back long walks (Sat/Sun) to simulate multi-day fatigue accumulation. Reduce Monday strength intensity slightly to preserve leg freshness. Maintain cardio and stair sessions at peak.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* SECTION: FITNESS PRINCIPLES */}
          <article id="fitness-principles" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Essential Trekking Fitness Principles
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Beyond the schedule itself, these principles determine whether your training translates into real trail performance:
              </p>
              <p>
                <strong>Uphill Endurance Training:</strong> The biggest physical challenge on Himalayan treks is not distance — it is sustained elevation gain. Climbs of 600 to 1,000 metres in a single morning are routine. Stair climbing and incline walking are your primary tools. Find and maintain a sustainable climbing pace: slow and steady wins.
              </p>
              <p>
                <strong>Downhill Knee Protection:</strong> Descents destroy knees that are not prepared. Going downhill places up to three times your body weight of force through the knee joint. Slow, controlled step-downs from your training box (lowering one foot at a time) develop eccentric muscle capacity. Trekking poles also provide meaningful knee relief.
              </p>
              <p>
                <strong>Backpack Load Adaptation:</strong> Your body needs time to adapt to carrying a loaded pack. The muscular adjustments in shoulders, back, and core take weeks. Rucking sessions begin at 5 kg and build toward 8 kg to build core/postural durability.
              </p>
              <p>
                <strong>Hydration and Altitude Readiness:</strong> Dehydration accelerates altitude fatigue and increases headache risk. Drink 3 litres of water daily during training, especially on workout days, to establish consistent habits.
              </p>
              <p>
                <strong>Footwear and Trail Conditioning:</strong> Wear your trekking boots — the actual boots you plan to use on the Khopra Ridge trail — for every Saturday training hike. Wear the same socks you plan to trek in. Never wear new, unbroken-in boots.
              </p>
            </div>
          </article>

          {/* SECTION: COMMON MISTAKES */}
          <article id="common-mistakes" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Common Mistakes in Trek Training
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Avoid these common pitfalls during your preparation block:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Ignoring Downhill Training:</strong> Trekkers train for climbs but neglect descent conditioning. Steep Saturday downhills from week three onward prevent sore, shaking knees.</li>
                <li><strong>Overtraining in the First Two Weeks:</strong> Excessive intensity initially leads to tendonitis or calf strains in week three, wiping out valuable preparation time.</li>
                <li><strong>Skipping Recovery Days:</strong> Rest days are when muscles repair and strengthen. Respect Wednesday's mobility work and Friday's complete rest.</li>
                <li><strong>Not Training with a Backpack:</strong> Walking under load requires center of gravity and balance adjustments. Carry weighted packs early to condition stabiliser muscle groups.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: MODIFICATIONS */}
          <article id="modifications" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Beginner-Friendly Modifications
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                If you are starting from a low fitness base — limited walking routine, no gym training, or returning from inactivity — adapt the plan as follows:
              </p>
              <p>
                <strong>Walking-Based Alternative Plan:</strong> Replace running and high-intensity climbs with incline walks. A treadmill set to 8–10% grade at a brisk pace delivers a highly effective cardiovascular stimulus with lower impact.
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
                <li>Tuesday: 45 minutes of incline walking instead of jogging</li>
                <li>Thursday: Brisk hill walking or sustained stair walking instead of repeats</li>
              </ul>
              <p>
                <strong>Reduced Intensity Schedule:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
                <li>Monday: 2 sets instead of 3, bodyweight only.</li>
                <li>Thursday: 25–30 minutes of stair work instead of 40–50.</li>
                <li>Saturday: Start with a 2-hour hike carrying only 3–4 kg.</li>
                <li>Sunday: 20–25 minutes of gentle stretching.</li>
              </ul>
              <p>
                The critical principle is not to rush the progression. If week four still feels challenging, stay in the endurance phase for an extra week. It is far better to arrive on trail slightly undertrained than to arrive injured.
              </p>
            </div>
          </article>

          {/* SECTION: HIMALAYAN PREP */}
          <article id="why-himalayan" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How This Training Prepares You for Himalayan Treks
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Every section of this plan maps directly to a real challenge on Nepal&apos;s mountain trails:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Multi-day endurance readiness:</strong> Himalayan treks require 5 to 7 hours of daily walking for multiple consecutive days. This plan builds exactly this sustained output capacity.</li>
                <li><strong>Reduced fatigue:</strong> A trained cardiovascular system uses oxygen more efficiently. That means a lower heart rate, better energy management, and genuine energy reserves left for afternoon climbs.</li>
                <li><strong>Improved confidence:</strong> Neuromuscular strength and stair work build confidence on uneven ground, helping you navigate rocky stone steps without panic.</li>
                <li><strong>Better altitude adaptation:</strong> A strong aerobic base does not eliminate altitude effects, but it helps your body cope with reduced oxygen above 3,000 metres.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Trekking Fitness
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "How many weeks do I need to prepare for a trek?",
                  a: "For a moderate Himalayan trek like Khopra Ridge or Poon Hill, 6 to 8 weeks of structured training is ideal. If you are already active, 4 to 6 weeks may be sufficient. If starting from a low fitness base, begin 10 to 12 weeks out."
                },
                {
                  q: "Can beginners follow this trekking fitness plan?",
                  a: "Yes. The plan includes a beginner modification section that reduces intensity, shortens sessions, and lowers starting loads. Pacing and consistency are key."
                },
                {
                  q: "How do I train for steep uphill hiking stamina?",
                  a: "Stair climbing is the most effective tool. A stair climber machine or stadium stairs, performed at a sustained moderate pace for 40 to 50 minutes, directly develops the muscular endurance and cardiorespiratory capacity needed."
                },
                {
                  q: "Is walking enough to prepare for trekking?",
                  a: "Walking alone is not sufficient. You also need leg strength training to protect your joints, load-carrying practice to adapt your back and shoulders, and specific downhill conditioning to protect your knees."
                },
                {
                  q: "How heavy should my backpack be for training?",
                  a: "Begin with 5 kg in weeks 1 to 4, then increase to 7 to 8 kg in weeks 5 to 8. On the actual trek, your daypack will typically weigh 6 to 10 kg depending on gear choices."
                },
                {
                  q: "How do I prevent knee pain during downhill trekking?",
                  a: "Three strategies: eccentric strengthening exercises (slow, controlled step-downs), consistent calf and quad stretching, and proper downhill technique (slightly bent knees, shorter steps). Trekking poles also provide significant mechanical relief."
                },
                {
                  q: "What if I only have 4 weeks to prepare?",
                  a: "Compress the plan by focusing on the highest-impact sessions: Monday strength training, Tuesday Zone 2 cardio, Thursday stair climbing, and Saturday weighted hikes. Prioritise the Saturday hike above all else."
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
              Eight weeks of structured, deliberate preparation transforms the Himalayan trekking experience from something to survive into something to enjoy.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              Trekkers who arrive physically prepared are not just more comfortable on trail. They move with more confidence on steep sections. They recover properly overnight. They arrive at viewpoints with enough energy left to absorb the moment — rather than collapsing on a teahouse bench.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              This weekly trekking fitness plan gives you a realistic, Himalayan-specific preparation system built on the same principles our guides and team use when advising guests before departure. Follow the phases, respect the recovery days, and do not skip your Saturday hikes.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Ready to put your fitness to the test on the trail?
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                We run fully guided treks through the Khopra Ridge and Annapurna region, with experienced local guides, all permits arranged, and teahouse accommodation secured throughout the route. If you have been following this plan and want to confirm your trek dates, reach out to us directly.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Inquire About Our Guided Trek Packages &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Trek:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/planning/how-fit-to-trek-khopra" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read the baseline physical fitness requirements guide
                  </Link>
                  <Link href="/planning/can-beginners-do-khopra-trek" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Find out if beginners can do the Khopra Ridge Trek safely
                  </Link>
                  <Link href="/planning/packing-checklist" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Get the interactive packing checklist for your gear
                  </Link>
                  <Link href="/weather/best-time-to-trek" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Check seasonal weather conditions before you go
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* EEAT Author Verification Banner */}
          <div className="p-6 rounded-3xl bg-stone-100 border border-stone-200 flex items-start gap-4">
            <span className="text-2xl mt-0.5">🏔️</span>
            <div>
              <h4 className="font-bold text-stone-900 text-sm font-sans font-medium">Reviewed by Trail Experts</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                This physical preparation guide is managed and reviewed by licensed local trekking guides from Pokhara, Nepal. We help coordinate fitness programs and pre-departure briefs for Annapurna Conservation Area routes. Nepal Tourism Operator License #8928-091.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
