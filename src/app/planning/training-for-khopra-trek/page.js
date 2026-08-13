import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/planning/training-for-khopra-trek",
  },
  title: "Training Guide for the Khopra Ridge Trek | Nepal Trek Guide",
  description: "Prepare for the Khopra Ridge Trek with this structured 8-week training plan. Build uphill endurance, leg strength, and altitude readiness before your.",
};

export default function Page() {
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
            <span className="text-emerald-400">Training Guide</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            8-Week Physical Conditioning Plan
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Training Guide for the Khopra Ridge Trek
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Develop leg strength, aerobic Zone 2 capacity, loaded backpack adaptation, and high-altitude breathing techniques.
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
              <a href="#fit-levels" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Fitness Levels &amp; Myths
              </a>
              <a href="#physical-demands" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Physical Trek Demands
              </a>
              <a href="#four-pillars" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                4 Core Pillars
              </a>
              <a href="#eight-week-plan" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                8-Week Step-by-Step
              </a>
              <a href="#altitude-prep" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Altitude Preparation
              </a>
              <a href="#prevent-knee-pain" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Prevent Downhill Knee Pain
              </a>
              <a href="#training-mistakes" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Common Mistakes to Avoid
              </a>
              <a href="#checklist" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Readiness Checklist
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
              Training Guide: 8-Week Fitness Plan for Strength, Endurance &amp; Altitude
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Most trekkers who struggle on the Khopra Ridge Trek do not fail because the route is technically dangerous. They struggle because they underestimated how physically demanding seven consecutive days of Himalayan trekking actually feels on the body.
              </p>
              <p>
                The Khopra Ridge Trek involves long uphill climbs on stone stair trails, five to seven hours of walking each day, significant daily elevation gain, and sustained effort at altitudes above 3,000 metres. That combination demands a specific type of fitness — not gym fitness, not running fitness, but trekking endurance built gradually over weeks of targeted preparation.
              </p>
              <p>
                This training guide for the Khopra Ridge Trek gives you a structured 8-week system designed specifically for the terrain, altitude, and physical demands of this route in the Annapurna Conservation Area. Whether you are a first-time trekker or a moderate hiker preparing for your first Himalayan experience, this plan builds you up progressively from base fitness to full trekking readiness.
              </p>
            </div>
          </article>

          {/* SECTION: FIT LEVELS */}
          <article id="fit-levels" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How Fit Do You Need to Be for the Khopra Ridge Trek?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The Khopra Ridge Trek is rated moderate to challenging. It is not a technical climb, but it is not a casual walk either. The honest answer to &quot;how fit do I need to be?&quot; depends on what kind of fitness you already have — and how much of it is relevant to trekking.
              </p>
              <p>
                <strong>Fitness Levels Explained: Beginner, Moderate, and Fit</strong>
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Beginner (low base fitness):</strong> You can walk for 60–90 minutes at a comfortable pace but would find sustained uphill walking for three or more hours genuinely difficult. With eight weeks of dedicated preparation using this plan, most beginners can complete the Khopra Ridge Trek safely — but training is not optional at this level.</li>
                <li><strong>Moderate (some active fitness):</strong> You exercise regularly, can hike for three to four hours, and recover reasonably well from physical exertion. You are a good candidate for the trek, but you still need six to eight weeks of trek-specific training to handle the daily elevation gain and multi-day cumulative fatigue.</li>
                <li><strong>Fit (active trekker or outdoor enthusiast):</strong> You hike regularly with a loaded pack, walk uphill for extended periods without difficulty, and have experience with multi-day physical activity. Four to six weeks of targeted preparation is sufficient to adapt your fitness specifically to Himalayan trekking conditions.</li>
              </ul>
              <p>
                <strong>Common Misconceptions About Trekking Fitness</strong>
              </p>
              <p>
                <em>&quot;Running is enough.&quot;</em> Running builds aerobic capacity, but it does not train the muscles used during sustained uphill climbing or the eccentric load placed on your knees during long descents. Trekkers who only run often find their legs giving out on day three.
              </p>
              <p>
                <em>&quot;If I go to the gym, I&apos;ll be fine.&quot;</em> Gym fitness — weightlifting, cycling classes, treadmill workouts — develops general strength and cardiovascular health, but it rarely simulates the specific demands of five consecutive hours walking on uneven, inclined terrain with a loaded pack. Trek-specific training requires you to replicate trekking conditions as closely as possible.
              </p>
            </div>
          </article>

          {/* SECTION: PHYSICAL DEMANDS */}
          <article id="physical-demands" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Physical Demands of the Khopra Ridge Trek
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Before you can train effectively, you need to understand exactly what you are training for. The Khopra Ridge Trek challenges the body in four distinct ways:
              </p>
              <p>
                <strong>Long Uphill Climbs and Stone Stair Trails:</strong> The trails between Ghorepani, Tadapani, Chhistibung, Swanta, and Khopra Ridge involve continuous ascent on stone steps that have been cut into the hillside over generations. These sections can last one to three hours without a significant flat break.
              </p>
              <p>
                The continuous nature of these climbs is what separates Himalayan trekking from most day hikes. Your legs are not just working hard — they are working hard without rest, repeatedly, over several days. This is what makes cardiovascular endurance and leg muscular endurance the two most critical physical qualities to develop.
              </p>
              <p>
                <strong>Downhill Strain and Knee Pressure:</strong> Most trekkers focus on building strength for going up. Very few prepare adequately for coming down — and this is one of the leading causes of knee pain and early fatigue on the Khopra Ridge Trek.
              </p>
              <p>
                Descending steep trails places a high eccentric load on the quadriceps and knee joints. Your muscles must contract while simultaneously lengthening to control each step downward. This type of muscular effort is fundamentally different from uphill climbing, and it cannot be adequately trained through uphill work alone. Dedicated downhill preparation is non-negotiable.
              </p>
              <p>
                <strong>Daily Trekking Duration and Cumulative Endurance Load:</strong> The average trekking day on the Khopra Ridge route runs between five and seven hours of active walking. That is not five hours at your own comfortable pace — it includes stops at teahouses for lunch and rest, but the active walking time is sustained and repeated daily across the full itinerary.
              </p>
              <p>
                The cumulative effect of multi-day trekking is what surprises most unprepared trekkers. Day one feels manageable. Day three is where fitness reserves matter. By day five, only trekkers who have built genuine endurance — not just a single-day fitness level — continue with energy and enjoyment intact.
              </p>
              <p>
                <strong>Altitude and Oxygen Reduction Impact:</strong> The Khopra Ridge summit sits at approximately 3,660 metres above sea level. Khayar Lake, a commonly added extension, reaches over 4,500 metres. At these elevations, oxygen availability is meaningfully reduced, which means your cardiovascular system must work harder to deliver the same energy output as at lower elevations.
              </p>
              <p>
                Altitude is not fully solved by fitness. But a strong aerobic base means your body uses oxygen more efficiently, which reduces how much altitude impairs your performance. Trekkers with poor aerobic fitness suffer more from altitude fatigue because their oxygen demand is higher. Building your cardio endurance before you arrive is one of the most effective altitude preparation strategies available to you.
              </p>
            </div>
          </article>

          {/* SECTION: FOUR PILLARS */}
          <article id="four-pillars" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              The 4 Core Training Pillars for Khopra Ridge Trek Preparation
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The 8-week plan in this guide is built around four training pillars. Each pillar addresses a specific physical demand of the trek. Skipping any one of them creates a gap in your preparation:
              </p>

              <div className="grid gap-6 md:grid-cols-2 mt-6">
                <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-2">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">Pillar 1: Uphill &amp; Stair Climbing</span>
                  <h4 className="font-bold text-stone-900 text-sm">Simulate Trail Elevation</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Use a stair machine, stadium steps, or a hill with a consistent gradient. Hold a steady conversational pace. Start with 20–30 mins and progress to 60–90 mins to build climbing specific endurance.
                  </p>
                </div>
                <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-2">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">Pillar 2: Zone 2 Cardio</span>
                  <h4 className="font-bold text-stone-900 text-sm">Build Your Aerobic Base</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Sustained aerobic exercise at 60–70% max heart rate. Jogging, swimming, cycling, or brisk walking. Extends the duration your body can sustain work before fatigue accumulates.
                  </p>
                </div>
                <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-2">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">Pillar 3: Leg &amp; Eccentric Strength</span>
                  <h4 className="font-bold text-stone-900 text-sm">Condition for Steep Descents</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Focus on slow squats, lunges, wall sits, and step-downs. Stepping down slowly teaches the quadriceps to support and stabilize the knee joints under weight.
                  </p>
                </div>
                <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-2">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">Pillar 4: Backpack (Rucking)</span>
                  <h4 className="font-bold text-stone-900 text-sm">Load Adaptation Walks</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Walk with a weighted daypack (starting at 5kg, building to 8kg). Carry this during your hill sessions to condition shoulders, lower back, core, and hips.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* SECTION: EIGHT WEEK PLAN */}
          <article id="eight-week-plan" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              8-Week Khopra Ridge Trek Training Plan (Step-by-Step)
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                This training plan is structured in three phases: a base fitness phase, a strength and endurance build phase, and a taper and recovery phase.
              </p>

              <div className="space-y-6 mt-6">
                {/* Phase 1 */}
                <div className="border border-stone-200 rounded-3xl p-6 bg-white space-y-3">
                  <h3 className="text-base font-bold text-stone-900 border-b border-stone-150 pb-2">
                    Phase 1: Base Fitness (Weeks 8–5)
                  </h3>
                  <p className="text-xs text-stone-500">Goal: Build your aerobic foundation and introduce your body to regular physical demand at low-moderate intensities.</p>
                  <ul className="list-disc pl-5 text-xs text-stone-600 space-y-1.5">
                    <li><strong>Day 1:</strong> 30–40 minutes Zone 2 cardio (jogging, cycling, or brisk walking).</li>
                    <li><strong>Day 2:</strong> 20–30 minutes stair climbing or hill walking at conversational pace.</li>
                    <li><strong>Day 3:</strong> Rest or light stretching.</li>
                    <li><strong>Day 4:</strong> Lower body strength session — squats, lunges, step-downs (3 sets of 10–12 reps each).</li>
                    <li><strong>Day 5:</strong> 40–50 minute Zone 2 cardio session.</li>
                    <li><strong>Day 6:</strong> Weekend hike of 2–3 hours on any available trail or hill.</li>
                    <li><strong>Day 7:</strong> Full rest and recovery.</li>
                  </ul>
                </div>

                {/* Phase 2 */}
                <div className="border border-stone-200 rounded-3xl p-6 bg-white space-y-3">
                  <h3 className="text-base font-bold text-stone-900 border-b border-stone-150 pb-2">
                    Phase 2: Strength and Endurance Build (Weeks 4–2)
                  </h3>
                  <p className="text-xs text-stone-500">Goal: Increase intensity, duration, and backpack load. Move from foundation building to trek-specific conditioning.</p>
                  <ul className="list-disc pl-5 text-xs text-stone-600 space-y-1.5">
                    <li><strong>Day 1:</strong> 45–60 minutes Zone 2 cardio.</li>
                    <li><strong>Day 2:</strong> 45–60 minutes stair climbing or hill walking with a 5–6 kg loaded backpack.</li>
                    <li><strong>Day 3:</strong> Lower body strength session — increase to 4 sets, add step-down focus and wall sits.</li>
                    <li><strong>Day 4:</strong> Rest or 20-minute easy walk.</li>
                    <li><strong>Day 5:</strong> 60-minute uphill training session with a 6–8 kg loaded backpack.</li>
                    <li><strong>Day 6:</strong> Weekend long hike of 4–5 hours with loaded pack (this is your most critical session).</li>
                    <li><strong>Day 7:</strong> Rest and recovery — light stretching or yoga.</li>
                  </ul>
                </div>

                {/* Phase 3 */}
                <div className="border border-stone-200 rounded-3xl p-6 bg-white space-y-3">
                  <h3 className="text-base font-bold text-stone-900 border-b border-stone-150 pb-2">
                    Phase 3: Taper and Recovery (Week 1)
                  </h3>
                  <p className="text-xs text-stone-500">Goal: Consolidate fitness gains, recover joint tissues, and rest. Arrive fresh, not exhausted.</p>
                  <ul className="list-disc pl-5 text-xs text-stone-600 space-y-1.5">
                    <li><strong>Days 7–5 before trek:</strong> Two short, easy sessions only — a 30-minute walk and a 20-minute light stretching session.</li>
                    <li><strong>Days 4–3 before trek:</strong> Rest completely.</li>
                    <li><strong>Days 2–1 before trek:</strong> Light mobility work — hip flexors, calves, hamstrings, and lower back.</li>
                    <li><strong>Night before:</strong> Early rest, adequate hydration, and final gear check.</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          {/* SECTION: ALTITUDE PREP */}
          <article id="altitude-prep" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Altitude Preparation for the Khopra Ridge Trek
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Altitude is one of the most misunderstood factors in Himalayan trekking preparation. Many trekkers believe that if they are fit enough, altitude will not be a problem. This is only partially true.
              </p>
              <p>
                <strong>What Training Can Improve:</strong> Physical fitness genuinely helps at altitude in two important ways:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
                <li>A strong aerobic base means your body extracts oxygen from each breath more efficiently, which reduces the performance gap caused by lower oxygen availability.</li>
                <li>Trekkers with higher cardiovascular endurance experience less perceived exertion at any given pace — meaning they do not have to push as hard, which reduces the physiological stress that contributes to altitude fatigue.</li>
              </ul>
              <p>
                <strong>What Altitude Exposure Still Affects:</strong> No amount of training at sea level fully prepares your body for reduced oxygen availability above 3,000 metres. Altitude acclimatization is a physiological process that occurs in the body as it responds to the environment — it cannot be fully replicated in a gym. Following the recommended itinerary is your most important altitude strategy.
              </p>
              <p>
                <strong>Breathing Technique and Pacing Strategy:</strong> On steep uphill sections, adopt a slow, steady rhythm: inhale for two or three steps, exhale for two or three steps. This &quot;pressure breathing&quot; technique helps maximize oxygen uptake and reduces the tendency to hyperventilate. Keep your pace slow enough that you can maintain this breathing pattern. If you cannot speak a short sentence without pausing for breath, you are walking too fast.
              </p>
            </div>
          </article>

          {/* SECTION: PREVENT KNEE PAIN */}
          <article id="prevent-knee-pain" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How to Prevent Knee Pain on Downhill Sections
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Knee pain during downhill trekking is not inevitable — it is largely preventable with the right preparation and technique:
              </p>
              <p>
                <strong>Eccentric Strength Training for Knees:</strong> The key to downhill knee protection is strengthening the quadriceps in their eccentric function. Stand on a step or box with one foot. Slowly lower your other foot toward the floor over three to four seconds, using only the standing leg to control the descent. Stop just before your foot touches the ground. This exercise directly replicates the muscular demand of stepping down.
              </p>
              <p>
                <strong>Proper Use of Trekking Poles:</strong> Trekking poles are functional tools that reduce the load on your knees during descents. Studies show that pole use reduces knee joint force by 20–25% on steep terrain. plant them ahead of your body, and use them to absorb a portion of each step&apos;s impact.
              </p>
              <p>
                <strong>Downhill Pacing and Movement Technique:</strong> Take shorter steps than you would on flat ground — long strides on a steep downhill place more force on the knee joint at the point of impact. Keep your weight slightly forward over your feet rather than leaning back, which forces your quadriceps to work harder than necessary.
              </p>
            </div>
          </article>

          {/* SECTION: MISTAKES */}
          <article id="training-mistakes" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Common Training Mistakes to Avoid
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                These are the most common preparation mistakes seen among trekkers on the Khopra Ridge route:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Training Only With Running:</strong> Running improves capacity, but does not develop downhill eccentric leg strength or backpack loaded carry adaptation. Supplement with rucking and climbing.</li>
                <li><strong>Ignoring Downhill Prep:</strong> The descents are where joint pain develops. Include step-downs and eccentric squats in strength sessions.</li>
                <li><strong>No Backpack Training:</strong> Walking with load shifts your center of gravity and core load. Carry weighted packs on walks starting in week 5.</li>
                <li><strong>Overtraining Before the Trek:</strong> Respect the taper. Trying to cram conditioning in the final two weeks leads to tendonitis and arriving at the trail already fatigued.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: CHECKLIST */}
          <article id="checklist" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Trek Readiness Checklist Before Arriving in Kathmandu
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Use this checklist in the final week of your training to confirm your readiness:
              </p>

              <div className="grid gap-6 md:grid-cols-2 mt-4">
                <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-2">
                  <h4 className="font-bold text-stone-900 text-sm">Physical Readiness</h4>
                  <ul className="list-disc pl-5 text-xs text-stone-550 space-y-1">
                    <li>Can walk uphill for 60 minutes continuously</li>
                    <li>Can hike 4–5 hours on any terrain without exhaustion</li>
                    <li>Can climb stairs for 20–30 mins with a 6–8kg pack</li>
                    <li>Step-down exercises are controlled and pain-free</li>
                  </ul>
                </div>
                <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-2">
                  <h4 className="font-bold text-stone-900 text-sm">Gear &amp; Mental Readiness</h4>
                  <ul className="list-disc pl-5 text-xs text-stone-550 space-y-1">
                    <li>Trekking boots broken in (minimum 4 hikes)</li>
                    <li>Trekking poles tested on a steep downhill</li>
                    <li>Prepared to maintain a slow, steady pace</li>
                    <li>Hydration gear and layer systems tested</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions: Training &amp; Fitness
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "How fit do I need to be for the Khopra Ridge Trek?",
                  a: "You need to be able to walk uphill for four to five hours comfortably with a day pack. You do not need to be an athlete, but you do need to have built genuine cardiovascular endurance and leg strength through structured preparation. The 8-week plan in this guide builds exactly that fitness level."
                },
                {
                  q: "Can beginners complete the Khopra Ridge Trek?",
                  a: "Yes, with proper preparation. Beginners who commit to eight weeks of structured training — including uphill conditioning, strength work, and loaded pack training — can complete the trek safely. Attempting it without preparation significantly increases risks of knee injuries and altitude sickness."
                },
                {
                  q: "How many weeks should I train before trekking in Nepal?",
                  a: "Eight weeks is the recommended minimum for trekkers with moderate base fitness. Beginners with low starting fitness should consider ten weeks. Those with strong existing fitness and regular hiking experience can prepare effectively in six weeks."
                },
                {
                  q: "Is running enough to prepare for the Khopra Trek?",
                  a: "No. Running builds aerobic capacity but does not develop the trek-specific muscular endurance, eccentric knee strength, or loaded pack adaptation required for multi-day Himalayan trekking. Supplement running with stair climbing and strength sessions."
                },
                {
                  q: "Do I need backpack training for trekking in Nepal?",
                  a: "Yes. Walking with a loaded pack changes your posture, gait, balance, and muscular demand significantly compared to walking unloaded. Carry a weighted pack on training hikes starting in week 5."
                },
                {
                  q: "How do I avoid knee pain during downhill trekking?",
                  a: "Build eccentric quad strength through step-down exercises. Use trekking poles on all descents. Take short, controlled steps rather than long strides, and keep your pack weight as light as possible."
                },
                {
                  q: "What is the hardest physical part of the Khopra Ridge Trek?",
                  a: "Most trekkers report that the sustained uphill climbs — particularly the ascents from Swanta to Khopra Ridge — are the most physically demanding sections. The cumulative fatigue of multi-day trekking combined with altitude also catches trekkers off guard by mid-route."
                },
                {
                  q: "How difficult is altitude on the Khopra Ridge Trek?",
                  a: "The main trek reaches approximately 3,660 metres at Khopra Ridge, with the Khayer Lake extension reaching above 4,500 metres. Most trekkers with adequate fitness manage the altitude well. Following the acclimatization structure, staying hydrated, and walking slowly are key."
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
              The Khopra Ridge Trek rewards preparation. Trekkers who arrive having followed a structured training plan do not just complete the route — they enjoy it. They have the physical reserves to walk steadily rather than struggle, the strength to handle long descents without knee pain, and the aerobic capacity to manage altitude without exhausting themselves.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              The 8-week plan in this guide is not about transforming you into a competitive athlete. It is about building the specific fitness that the Khopra Ridge Trek demands: uphill endurance, eccentric leg strength, loaded pack conditioning, and a strong aerobic base. Start eight weeks out, progress consistently, respect the taper week, and you will arrive in Nepal ready.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Plan Your Khopra Ridge Trek With Expert Guidance
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                EMD Treks is a licensed trekking operator based in Pokhara, specialising in the Annapurna Conservation Area. Our team has guided trekkers on the Khopra Ridge route across every season and fitness level. We help you plan not just the trek, but the preparation that makes it possible.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Start Planning Your Trek &rarr;
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
                Our training plan is structured by licensed local guides operating out of Pokhara, Nepal. We advise dozens of first-time and moderate trekkers yearly on high-altitude preparation and conditioning safety. Nepal Tourism Operator License #8928-091.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
