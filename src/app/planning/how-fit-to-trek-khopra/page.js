import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/planning/how-fit-to-trek-khopra",
  },
  title: "How Fit Do You Need to Be for Khopra Ridge Trek? Complete",
  description: "Wondering if you are fit enough for the Khopra Ridge Trek? Learn the real fitness requirements, daily trekking demands, beginner suitability, and how to.",
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
            <span className="text-emerald-400">Fitness Guide</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Physical Preparation Standards
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            How Fit Do You Need to Be for Khopra?
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Cardiovascular, strength, and endurance demands for the Khopra Ridge Trek, plus a 6-to-8 week home training plan.
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
              <a href="#difficulty-rating" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trek Difficulty Rating
              </a>
              <a href="#fitness-requirements" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Core Fitness Standards
              </a>
              <a href="#daily-demands" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Daily Physical Demands
              </a>
              <a href="#beginners" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Beginners Suitability
              </a>
              <a href="#self-test" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                3-Part Fitness Self-Test
              </a>
              <a href="#training-plan" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                6-8 Week Training Plan
              </a>
              <a href="#common-mistakes" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Common Physical Mistakes
              </a>
              <a href="#age-health" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Special Considerations
              </a>
              <a href="#comparisons" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trek Comparisons
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
                Inquire with Operators
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How Fit Do You Need to Be for Khopra Ridge Trek?
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                The Khopra Ridge Trek is one of the most rewarding off-the-beaten-path treks in the Annapurna Conservation Area — and one of the most common questions we hear from first-time visitors is a simple one: Am I fit enough to do this?
              </p>
              <p>
                The honest answer is that most reasonably active people can complete this trek with proper preparation. It is not technical climbing. You do not need prior Himalayan experience. But it is a genuine mountain trek with steep terrain, high-altitude trails, and multi-day physical demands that should not be underestimated.
              </p>
              <p>
                What separates people who enjoy Khopra Ridge Trek from those who struggle is not athletic talent — it is preparation. Fitness matters more than experience on this trek. If your body is ready for the daily demands of uphill climbing, sustained walking, and altitude, you will have an extraordinary experience. If you arrive underprepared, even the most beautiful landscape can feel like a punishment.
              </p>
              <p>
                This guide will help you honestly assess whether your body is ready for Khopra, what to expect each day on the trail, and how to prepare if you are not quite there yet.
              </p>
            </div>
          </article>

          {/* SECTION: DIFFICULTY RATING */}
          <article id="difficulty-rating" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How Difficult Is the Khopra Ridge Trek?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Before discussing fitness requirements, it helps to understand exactly what makes this trek physically demanding. Khopra is not the hardest trek in Nepal — but it is not a walk in a city park either.
              </p>
              <p>
                <strong>Overall Difficulty Rating of Khopra Trek:</strong> We rate the Khopra Ridge Trek at approximately 6.5 to 7 out of 10 for difficulty. That places it in the moderate-to-challenging category for trekking in Nepal.
              </p>
              <p>
                To give you a useful reference point: it is noticeably more demanding than the Poon Hill Trek, which most beginners complete comfortably in two to three days. At the same time, it is considerably less technical and less exhausting than the Annapurna Base Camp Trek, which involves greater altitude and a longer itinerary. If you have walked the Poon Hill route and felt reasonably comfortable, Khopra is the natural next step upward in challenge.
              </p>
              <p>
                <strong>What Makes the Trek Physically Challenging:</strong> The difficulty of Khopra is not about one dramatic obstacle. It is about sustained daily effort over multiple consecutive days. Key physical challenges include:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
                <li>Long uphill sections with significant elevation gain</li>
                <li>Steep, uneven stone trails on both ascent and descent</li>
                <li>Repeated climbing and descending across different trail sections</li>
                <li>Five to seven hours of walking each day</li>
                <li>Fatigue that accumulates across consecutive trekking days, not just within a single day</li>
              </ul>
              <p>
                The accumulation is the part most people underestimate. You may feel strong on day one. By day three or four, the same trail feels harder — not because the terrain changed, but because your body is working with less recovery margin.
              </p>
              <p>
                <strong>Why Altitude Makes Trekking Feel Harder:</strong> The Khopra Ridge summit sits at approximately 3,660 metres above sea level. Khayar Lake, the optional extension above the main ridge, reaches around 4,500 metres.
              </p>
              <p>
                At these elevations, the air contains less available oxygen than at sea level. Your cardiovascular system has to work harder to deliver the same amount of oxygen to your muscles. This means activities that feel easy at lower altitude — like walking uphill at a steady pace — feel significantly more demanding above 3,000 metres.
              </p>
              <p>
                Altitude acclimatization is not optional on this trek. You must allow your body time to adjust. Trekkers who try to rush the ascent, or who arrive without cardiovascular fitness as a base, are far more likely to experience altitude fatigue, slower recovery, and in some cases altitude sickness.
              </p>
            </div>
          </article>

          {/* SECTION: FITNESS REQUIREMENTS */}
          <article id="fitness-requirements" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What Fitness Level Do You Actually Need for Khopra?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                You do not need to be an athlete. You do not need to run marathons or train in a gym five days a week. What you need is a specific type of functional fitness that matches the demands of mountain trekking.
              </p>
              <p>
                <strong>Cardiovascular Endurance Requirements:</strong> Cardiovascular endurance is the single most important fitness quality for Khopra Ridge Trek. You need the aerobic capacity to sustain continuous uphill walking for extended periods without stopping to rest every few minutes. A database baseline:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
                <li>You can walk or hike uphill continuously for at least 45 to 60 minutes without needing a long rest.</li>
                <li>You can run or jog for 5 kilometres at a comfortable pace.</li>
                <li>You can climb stairs for 30 to 45 minutes without feeling completely exhausted.</li>
              </ul>
              <p>
                <strong>Lower Body Strength Requirements:</strong> Your legs carry you up every ascent and absorb every descent. Lower body strength — specifically in the quadriceps, calves, and hamstrings — matters enormously on this trek.
              </p>
              <p>
                Uphill sections demand sustained effort from your quads and calves. Downhill sections, which are often steeper and longer than they look on a map, create significant muscle fatigue and joint stress in the knees and ankles. Many trekkers who consider themselves reasonably fit are surprised by how much their legs ache after long descents.
              </p>
              <p>
                <strong>Core Strength and Backpack Carrying Ability:</strong> On a teahouse trekking route like Khopra, you typically carry a daypack weighing five to eight kilograms. That includes water, snacks, a rain layer, warm clothing, and a few personal items. Your duffel bag can be sent ahead on a porter.
              </p>
              <p>
                Five to eight kilograms sounds manageable. Over seven hours of uphill trekking, however, even a moderately loaded pack creates real strain on your lower back, shoulders, and posture. Core strength is what prevents that strain from becoming injury. Backpack training — walking with a loaded pack during your preparation — is one of the most effective and most overlooked parts of trek preparation.
              </p>
              <p>
                <strong>Mental Endurance Matters More Than Most People Think:</strong> Physical fitness and mental endurance are not the same thing — and Khopra will test both. On some sections of the trail, you will face long uphill stretches with no obvious landmark ahead. Cold mornings where motivation is low, rain that arrives without warning, and simple teahouse accommodations. Accepting that some hours will be hard — and trusting that you will get through them — is a genuine fitness skill worth developing before you arrive.
              </p>
            </div>
          </article>

          {/* SECTION: DAILY DEMANDS */}
          <article id="daily-demands" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What Are the Daily Physical Demands on the Trek?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Understanding what your body actually experiences each day helps you prepare far more specifically than any general fitness advice.
              </p>
              <p>
                <strong>Average Walking Hours Per Day:</strong> On a standard Khopra Ridge Trek itinerary, you should expect five to seven hours of active trekking per day. This does not include rest stops, meal breaks, or photography time — all of which are a natural and enjoyable part of the experience. Five to seven hours of mountain walking is a meaningful physical demand.
              </p>
              <p>
                <strong>Typical Daily Distance and Elevation Gain:</strong> Most stages of the trek cover between 8 and 15 kilometres in horizontal distance. However, distance alone is misleading on mountain terrain. What matters more is the elevation gain. Most daily stages involve 600 to 1,000 metres of ascent. Plan your training around elevation gain, not just kilometres.
              </p>
              <p>
                <strong>Why Descending Can Be Harder Than Climbing:</strong> Going uphill is aerobically demanding — your heart rate rises and your breathing gets harder. But going downhill is biomechanically demanding. Your quadriceps work as brakes on every step, absorbing the impact and deceleration. Over hours of descent, this creates significant muscle fatigue and joint stress in the knees and ankles. Using trekking poles on descents significantly reduces the load on your knees.
              </p>
            </div>
          </article>

          {/* SECTION: BEGINNERS */}
          <article id="beginners" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Can Beginners Do the Khopra Ridge Trek?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                This is one of the most searched questions about Khopra — and the answer is a genuine yes, with honest conditions attached.
              </p>
              <p>
                <strong>Yes, Beginners Can Complete the Trek:</strong> The Khopra Ridge Trek does not require technical mountain skills. There is no rock climbing, no glacial crossing, no rope work. The trail follows well-established paths through forests, rhododendron groves, and open ridgelines. It is a teahouse trekking route, which means you sleep and eat in lodges along the way. You do not need to carry camping equipment.
              </p>
              <p>
                <strong>Why Some Beginners Struggle:</strong> The beginners who struggle on Khopra typically share one or more of these patterns:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
                <li>They did not do consistent cardio training in the weeks before trekking.</li>
                <li>They overpacked and are carrying too much weight in their daypack.</li>
                <li>They underestimated how altitude would affect their energy levels.</li>
                <li>They walked too fast on the first day and depleted their reserves early.</li>
              </ul>
              <p>
                <strong>Who May Find Khopra Too Challenging:</strong> We believe in giving honest guidance. There are some situations where Khopra may not be the right choice without medical consultation or additional preparation:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
                <li>People with a completely sedentary lifestyle and no walking routine at all.</li>
                <li>Trekkers with severe or unstable knee injuries.</li>
                <li>People with unmanaged asthma or cardiovascular conditions.</li>
                <li>Anyone arriving at altitude without any fitness preparation.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: SELF-TEST */}
          <article id="self-test" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              A Simple Self-Test to Know If You Are Ready
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Before you book, here is a practical three-part test you can do in your own city. No gym membership required:
              </p>

              <div className="grid gap-6 md:grid-cols-3 mt-6">
                <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-2">
                  <h4 className="font-extrabold text-stone-950 text-sm">1. 3-Hour Hiking Simulation</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Find a hill, a staircase, or an incline treadmill. Walk uphill for 90 minutes with a 5-kilogram backpack, then turn around and walk back down for 90 minutes. You should feel tired but functional afterward.
                  </p>
                </div>
                <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-2">
                  <h4 className="font-extrabold text-stone-955 text-sm">2. Stair Climbing Test</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Find a multi-storey building or outdoor staircase. Climb continuously for 30 to 45 minutes without taking the lift down. Rest briefly if needed, but keep moving. Replicates the aerobic climb load.
                  </p>
                </div>
                <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-2">
                  <h4 className="font-extrabold text-stone-955 text-sm">3. 24-Hour Recovery Test</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Assess how your body feels 24 hours after tests 1 or 2. If you are extremely sore for two or more days, your recovery fitness needs work. Muscle stamina must accumulate and recover overnight.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* SECTION: TRAINING PLAN */}
          <article id="training-plan" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How to Train for Khopra Ridge Trek Before Your Trip
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                You do not need to transform yourself into a mountain athlete. You need six to eight weeks of consistent, specific preparation. Do not attempt to cram a training programme into two weeks before departure. That causes injury and fatigue.
              </p>

              {/* Training highlight block */}
              <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-4">
                <h3 className="text-base font-bold text-stone-900 border-b border-stone-100 pb-2">
                  Weekly Training Template (6–8 Weeks Out)
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-650">
                  <li><strong>Cardio Sessions:</strong> 4 to 5 sessions per week (sustained walks, 5k jogs, cycling, or swimming).</li>
                  <li><strong>Backpack Training:</strong> Once a week, walk with a daypack loaded to 5kg, building up to 8kg.</li>
                  <li><strong>Stair &amp; Incline Focus:</strong> Prioritize stairs and incline treadmills (8% to 12% gradient) to condition quads and calves.</li>
                  <li><strong>Weekend Long Walks:</strong> Hike for 2 to 3 hours on uneven surfaces once every weekend.</li>
                </ul>
              </div>

              {/* Primary CTA inline */}
              <div className="my-8 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
                <span className="text-2xl mt-0.5">🏔️</span>
                <div className="flex-1">
                  <h4 className="font-bold text-stone-900 text-sm">Personalized Prep &amp; Training support</h4>
                  <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                    Planning your Khopra Ridge Trek? Trek with our experienced local guides and receive a personalised preparation and training guide before your departure — so you arrive ready for every step.
                  </p>
                  <Link 
                    href="/contact"
                    className="mt-3 inline-flex items-center text-xs font-bold text-emerald-600 hover:text-emerald-700 transition"
                  >
                    Inquire About a Guided Khopra Trek &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* SECTION: COMMON MISTAKES */}
          <article id="common-mistakes" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Common Physical Mistakes That Make Khopra Feel Harder
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Even well-prepared trekkers sometimes make avoidable mistakes that turn a challenging trek into an unnecessarily difficult one:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Underestimating Altitude Fatigue:</strong> Altitude is the great equaliser. Breathing becomes more laboured and recovery takes longer. The solution is to ascend gradually and keep ego out of pacing.</li>
                <li><strong>Carrying Too Much Weight:</strong> Overpacking is common. Leave non-essential items in your duffel with your porter. Your daypack should only contain water, snacks, shells, and personal safety layers.</li>
                <li><strong>Walking Too Fast Early in the Trek:</strong> Pacing that feels slightly too slow on day one is the right pace for a multi-day trek. Remember: <i>pole pole</i> (slowly, slowly).</li>
                <li><strong>Not Drinking Enough Water:</strong> Drink at least 3 to 4 litres of water per trekking day to counteract altitude fatigue and headaches, even if the cold suppresses your thirst.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: AGE & HEALTH */}
          <article id="age-health" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Age, Health Conditions, and Special Considerations
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Physical age is far less important than physical conditioning on the Khopra Ridge Trek. We have guided trekkers in their sixties and seventies who completed the route comfortably.
              </p>
              <p>
                <strong>Can Trekkers Over 50 Complete Khopra?</strong> Yes — and many do so successfully every season. The key considerations are allowing more prep time (10 to 12 weeks), pacing conservatively, and listening carefully to body signals.
              </p>
              <p>
                <strong>What If You Have Knee Problems?</strong> Downhill gradients stress knees considerably. Trekking poles are strongly recommended to redistribute the load. Good quality hiking boots with ankle support also reduce lateral stress.
              </p>
              <p>
                <strong>Trekking With Asthma or Low Fitness Levels:</strong> Trekkers with mild, well-managed asthma complete the Khopra Ridge Trek successfully. Ensure your condition is stable, carry your prescribed rescue inhaler, and inform your guide. A conversation with your doctor before booking is always recommended.
              </p>
            </div>
          </article>

          {/* SECTION: COMPARISONS */}
          <article id="comparisons" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How Khopra Trek Compares to Other Popular Nepal Treks
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Understanding where Khopra sits in the broader landscape of Nepal trekking helps you calibrate expectations:
              </p>
              <p>
                <strong>Khopra Trek vs Poon Hill Trek:</strong> Poon Hill is shorter, lower, and has much denser teahouse spacing. Khopra is significantly harder, with longer walking hours, steeper trails, and more remote ridgelines.
              </p>
              <p>
                <strong>Khopra Trek vs Annapurna Base Camp Trek:</strong> ABC reaches a higher maximum altitude (4,130m) than Khopra Ridge (3,660m) and requires a longer itinerary. Khopra is slightly more accessible as a moderate trek, though it is still a serious undertaking.
              </p>
              <p>
                <strong>Optional Khayer Lake Extension Difficulty:</strong> The optional day hike to Khayer Lake (4,500m) is steeper, less maintained, and much more strenuous than the main Khopra route. Beginners should evaluate how they feel on the ridge before committing to this 9-hour high-altitude hike.
              </p>
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              FAQ: Frequently Asked Questions About Khopra Trek Fitness
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Can beginners do the Khopra Ridge Trek?",
                  a: "Yes. The Khopra Ridge Trek does not require technical climbing skills or prior Himalayan experience. It is a teahouse trekking route suitable for motivated beginners who prepare properly. Consistent cardio training over six to eight weeks before the trek makes a significant difference."
                },
                {
                  q: "How difficult is the Khopra Ridge Trek compared to Poon Hill?",
                  a: "Khopra Ridge Trek is noticeably more demanding than Poon Hill. Daily walking hours are longer, elevation gain is greater, and the route covers more remote terrain. If Poon Hill felt manageable, Khopra is the natural progression."
                },
                {
                  q: "How many hours do you walk daily on the Khopra Trek?",
                  a: "On most stages of the trek, you should expect five to seven hours of active trekking per day. This does not include meal breaks and rest stops. The longest days typically occur on the ascent toward Khopra Danda."
                },
                {
                  q: "How much training do I need before the Khopra Trek?",
                  a: "A minimum of six weeks of consistent training is recommended. Eight weeks is better if you are starting from a low fitness baseline. Your training should include regular cardio (four to five sessions per week), stair climbing, loaded backpack walking, and weekend long walks."
                },
                {
                  q: "Is altitude sickness common on the Khopra Trek?",
                  a: "Mild altitude symptoms — headache, fatigue, reduced appetite — are fairly common above 3,000 metres. Serious altitude sickness is less common but possible, particularly on the optional Khayer Lake extension at around 4,500 metres. Pacing slowly and hydrating reduces this risk."
                },
                {
                  q: "Can older trekkers do the Khopra Trek?",
                  a: "Yes. Age is far less important than physical conditioning. Trekkers in their fifties, sixties, and beyond complete this route regularly. Older trekkers benefit from allowing a slightly longer preparation period."
                },
                {
                  q: "Do I need previous trekking experience?",
                  a: "Previous trekking experience is helpful but not required. What matters more is physical preparation. Trekkers with no prior hiking background but solid cardio fitness and good preparation consistently complete Khopra comfortably."
                },
                {
                  q: "Is Khopra harder than Annapurna Base Camp Trek?",
                  a: "No. Annapurna Base Camp Trek involves a longer itinerary, greater maximum altitude (4,130 metres at the sanctuary versus 3,660 metres at Khopra Danda), and more demanding acclimatization requirements."
                },
                {
                  q: "How much weight should I carry during the trek?",
                  a: "Your daypack on the trail should weigh between five and eight kilograms. This covers water, food, a warm layer, rain gear, sun protection, and personal items. Use a porter for your main duffel bag."
                },
                {
                  q: "What is the hardest day on the Khopra Trek route?",
                  a: "The most demanding day on the standard Khopra itinerary is typically the ascent from Chhistibung to Khopra Ridge. This stage involves sustained uphill climbing with a 1,000m elevation gain."
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
              The Khopra Ridge Trek is physically demanding — that is part of what makes it so rewarding. But it is not out of reach. It is a moderate Himalayan trek that genuinely welcomes beginners, older trekkers, and first-time visitors to the Annapurna Conservation Area, provided they arrive with the preparation to match its demands.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              If you start training eight weeks before your departure, build your cardio base, practice walking with a loaded pack, and arrive with realistic expectations about altitude and daily effort, you give yourself every chance of having an experience you will talk about for the rest of your life. The ridge, the silence, the panoramic views of Dhaulagiri, Annapurna South, and Nilgiri — these are waiting for you. Your job is simply to prepare well enough to get there.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Ready to find out if Khopra is right for you?
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Contact our team in Pokhara. We&apos;ll answer your fitness questions honestly, help you plan the right itinerary for your level, and make sure you have everything you need before you set foot on the trail.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Get in Touch &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Trek:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/planning/khopra-trek-difficulty" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read the detailed section-by-section difficulty breakdown
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
                KhopraRidgeTrek.com is operated by EMD Trekking, a licensed trekking operator based in Pokhara, Nepal, specialising in guided treks through the Annapurna Conservation Area. Nepal Tourism Operator License #8928-091.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
