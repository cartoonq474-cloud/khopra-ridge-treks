import React from "react";
import Link from "next/link";
import ChhistibungKhopraFaqInteractive from "./ChhistibungKhopraFaqInteractive";

export const metadata = {
  alternates: {
    canonical: "/routes/chhistibung-to-khopra-ridge",
  },
  title: "Chhistibung to Khopra Ridge Route Guide: Distance, Difficulty, Elevation Gain & Trekking Tips",
  description: "Planning the climb from Chhistibung to Khopra Ridge? Get exact distance, elevation gain, altitude safety advice, accommodation details, and trail tips from local route experts.",
};

export default function ChhistibungToKhopraRoutePage() {
  const stats = [
    { label: "Starting Point", value: "Chhistibung (2,975m)" },
    { label: "Ending Point", value: "Khopra Ridge (3,660m)" },
    { label: "Distance", value: "~4.5 km / 2.8 miles" },
    { label: "Elevation Gain", value: "+685m" },
    { label: "Walking Time", value: "3–4 hours" },
    { label: "Difficulty", value: "Moderate-to-hard" },
    { label: "Terrain Profile", value: "Steep dirt switchbacks" },
    { label: "Trail Type", value: "Khopra Ridge segment" }
  ];

  const faqs = [
    {
      question: "How difficult is the Chhistibung to Khopra Ridge trek?",
      answer: "It's rated moderate-to-hard, mainly because of the sustained, steep gradient over a short distance rather than any technical difficulty. Reasonable fitness and a slow, steady pace are enough to manage it comfortably."
    },
    {
      question: "How long does it take to hike from Chhistibung to Khopra Ridge?",
      answer: "Most trekkers complete this segment in 3 to 4 hours, covering around 4.5 km with roughly 685m of elevation gain. Slower hikers or those acclimatizing carefully may take a little longer."
    },
    {
      question: "Is altitude sickness common on Khopra Ridge?",
      answer: "Mild AMS symptoms like headache or fatigue can occur given the rapid ascent from 2,975m to 3,660m. They're manageable with a slow pace, steady hydration, and rest, though worsening symptoms should never be ignored."
    },
    {
      question: "Can beginners hike to Khopra Ridge?",
      answer: "Yes, beginners can complete this climb, though they should expect it to take longer than average and should plan for frequent rest stops. Pacing matters more than raw fitness on this particular segment."
    },
    {
      question: "Are there teahouses at Khopra Ridge?",
      answer: <>Accommodation at Khopra Ridge is a <Link href="/planning/community-lodges-khopra-trek" className="text-emerald-700 underline font-semibold hover:text-emerald-600">community-owned lodge</Link> rather than a typical private teahouse, offering basic rooms, hot meals, and tea throughout the day. Lodge profits support local Magar village infrastructure.</>
    },
    {
      question: "What mountains can you see from Khopra Ridge?",
      answer: "Khopra Ridge offers direct views of Dhaulagiri and a wide panorama of Annapurna South, among the best mountain views on the entire route. Clear autumn mornings typically offer the best visibility."
    },
    {
      question: "Is Khopra Ridge better than Poon Hill?",
      answer: "Khopra Ridge offers a comparably spectacular Himalayan panorama with significantly fewer crowds than Poon Hill. It requires a harder climb to reach, which is part of why it stays quieter."
    },
    {
      question: "What is the hardest section of the Khopra Ridge Trek?",
      answer: "The climb from Chhistibung to Khopra Ridge is generally considered the hardest single segment of the entire trek, due to its steep, sustained elevation gain over a short distance."
    },
    {
      question: "Do I need a guide for the Khopra Ridge Trek?",
      answer: <>A guide isn't strictly mandatory, but <Link href="/planning/do-you-need-a-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">local guides</Link> bring current knowledge of seasonal trail conditions, mudslide boundaries, and lodge availability that's genuinely useful on this less-trafficked route.</>
    },
    {
      question: "When is the best season for trekking to Khopra Ridge?",
      answer: "Autumn (September to November) typically offers the clearest mountain visibility, while spring (March to May) adds blooming rhododendron forests on the lower stretches. Both are stronger choices than winter or monsoon."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-16 sm:py-20 flex-1">
        
        {/* Header Breadcrumb & Title */}
        <header className="border-b border-stone-200 pb-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-700">
            <Link href="/all-pages" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/planning/khopra-trek-route-overview" className="hover:underline">Routes Silo</Link>
          </div>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Chhistibung to Khopra Ridge Route Guide: Distance, Difficulty, Elevation Gain &amp; Trekking Tips
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Planning the climb from Chhistibung to Khopra Ridge? Get exact distance, elevation gain, altitude safety advice, accommodation details, and trail tips from local route experts.
          </p>
        </header>

        {/* Quick Stats Grid */}
        <section aria-label="Route Summary" className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="p-5 bg-white border border-stone-200/80 rounded-3xl shadow-sm text-center">
              <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">{stat.label}</span>
              <span className="text-sm font-extrabold text-stone-955 mt-1 block">{stat.value}</span>
            </div>
          ))}
        </section>

        {/* Introduction */}
        <article className="mt-12 space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
          <p>
            Chhistibung sits at 2,975m in a quiet pocket of alpine forest on the Khopra Ridge Trek, and from there the trail does something few other sections of the route attempt: it climbs almost 700 vertical metres in under five kilometres, straight up onto the open ridge at Khopra Danda. This is widely considered the hardest single segment of the entire Khopra Ridge Trek, and it's also the segment that delivers the trek's biggest reward — your first uninterrupted view of Dhaulagiri and Annapurna South.
          </p>
          <p>
            This guide walks you through exactly what to expect on the climb from Chhistibung to Khopra Ridge: the real distance and elevation numbers, what the trail surface actually feels like underfoot, how to manage the altitude gain safely, where you'll sleep at the top, and when to attempt this section for the best conditions. We update this guide based on what our guides observe on the trail each month, not generic trekking advice copied from elsewhere.
          </p>

          <hr className="my-10 border-stone-200" />

          {/* Section 1 */}
          <section id="trek-overview" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-955 tracking-tight">
              Chhistibung to Khopra Ridge Trek Overview
            </h2>
            <p>
              Before you start climbing, it helps to know exactly what this segment involves. Here are the core numbers trekkers searching for this route usually want first.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Distance, Duration, and Elevation Gain
            </h3>
            <p>
              The hike from Chhistibung to Khopra Ridge covers approximately 4.5 km (2.8 miles) and typically takes 3 to 4 hours to complete. In that short distance, you'll gain roughly 685m (2,247ft) of elevation, almost entirely on a sustained uphill grade with very few flat stretches to recover on.
            </p>
            <p>
              To put that in perspective, most trekking days on this route gain less than half that amount over a similar or longer distance. This segment compresses a full day's worth of climbing into a half-day push.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Starting and Ending Altitude
            </h3>
            <p>
              You'll begin at Chhistibung, sitting at 2,975m, and finish the climb at Khopra Ridge, at 3,660m. That's a jump of nearly 700m in a single sitting, which is significant by any high-altitude trekking standard.
            </p>
            <p>
              Gaining altitude this quickly matters because your body needs time to adjust to lower oxygen levels. We'll cover exactly how to manage that risk in the altitude section below.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Quick Difficulty Rating
            </h3>
            <p>
              We rate this segment as moderate-to-hard on the overall Khopra Ridge Trek difficulty scale. It isn't technical climbing — there's no exposure requiring ropes or specialist gear — but the sustained, unbroken gradient makes it feel harder than its short distance suggests.
            </p>
            <p>
              Trekkers who have completed earlier sections of the route comfortably sometimes still find this particular climb humbling. Pace, not fitness alone, is what gets you through it comfortably.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 2 */}
          <section id="detailed-trail" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-955 tracking-tight">
              Detailed Trail Description from Chhistibung to Khopra Ridge
            </h2>
            <p>
              Numbers only tell part of the story. Here's what the trail actually looks and feels like as you move through it.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Leaving the Forested Trails of Chhistibung
            </h3>
            <p>
              The climb begins inside alpine forest, with rhododendron and oak cover providing shade and a soft, root-laced dirt path underfoot. Mornings here are usually calm, and this is the best time to start since temperatures are cooler and the trail is quieter.
            </p>
            <p>
              This early stretch is deceptively gentle. Use it to settle into a steady breathing rhythm before the real climbing starts.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Climbing the Steep Dirt Switchbacks
            </h3>
            <p>
              Shortly after leaving Chhistibung, the trail tightens into a series of steep dirt switchbacks that climb the ridge flank almost continuously. There's little flat ground here, and the dirt surface can be loose or slightly slick after rain, so sturdy footwear with good grip matters more on this section than almost anywhere else on the trek.
            </p>
            <p>
              This is the physical core of the climb. Trekking poles genuinely help here, both for the ascent and later on the descent if you're retracing the route.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Reaching Above the Tree Line
            </h3>
            <p>
              As you climb higher, the forest thins out and eventually disappears altogether. Vegetation gives way to low alpine scrub, and you'll start to feel the wind more directly once tree cover is gone.
            </p>
            <p>
              Temperatures can drop noticeably once you're above the tree line, even if it felt warm lower down. This is a good point to add a layer before you get cold rather than after.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Final Approach to Khopra Ridge
            </h3>
            <p>
              The last stretch of the climb brings you directly onto the open ridge at Khopra Danda. The switchbacks culminate right at the edge of the high ridge, and the Dhaulagiri and Annapurna South ranges appear suddenly and dramatically in front of you.
            </p>
            <p>
              Most trekkers describe this final approach as the moment the climb's difficulty stops mattering. It's a genuinely emotional arrival point on this trek.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 3 */}
          <section id="difficulty-analysis" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-955 tracking-tight">
              How Difficult Is the Chhistibung to Khopra Ridge Trek?
            </h2>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Why This Is the Hardest Section of the Trek
            </h3>
            <p>
              The difficulty comes from the combination of steep, continuous gradient and the short distance over which it's compressed. There's no extended flat ground to recover your breathing, unlike many other sections of the broader Annapurna trek route where climbs are broken up by ridgelines or valley floors.
            </p>
            <p>
              Add in the altitude effect — thinner air starting from nearly 3,000m — and the same physical effort simply feels harder than it would at lower elevation.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Fitness Level Needed for This Climb
            </h3>
            <p>
              You don't need technical mountaineering experience to manage this segment, but a reasonable baseline of cardiovascular fitness makes a real difference. If you can comfortably hike 4-5 hours on moderate terrain at home, you have what you need.
            </p>
            <p>
              <Link href="/planning/khopra-trek-for-beginners" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Beginners</Link> can complete this climb, but they should expect it to take longer than the stated 3-4 hours and should plan for more frequent rest stops. Going slowly is not a failure here — it's the correct strategy.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Comparing Difficulty with Other Khopra Route Sections
            </h3>
            <p>
              Compared to the <Link href="/routes/bayeli-kharka-to-chhistibung" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Bayeli Kharka to Chhistibung</Link> stage before it, this segment is noticeably steeper and more sustained. It also stands apart from the gentler ascent to Poon Hill, which gains far less elevation over a comparable distance.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 4 */}
          <section id="altitude-safety" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Altitude Gain and AMS Risk on This Route
            </h2>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Why Rapid Altitude Gain Increases AMS Risk
            </h3>
            <p>
              Gaining around 685m in under 5 km, on top of an already-high starting point near 3,000m, increases your risk of Acute Mountain Sickness (AMS) compared to a more gradual ascent. Oxygen availability drops as you climb, and your body needs time, not just effort, to adapt.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Early Symptoms of Acute Mountain Sickness
            </h3>
            <ul className="space-y-1 pl-6 list-disc text-stone-705">
              <li>Headache that doesn't ease with rest</li>
              <li>Nausea or loss of appetite</li>
              <li>Unusual fatigue beyond normal exertion</li>
              <li>Dizziness or lightheadedness</li>
              <li>Difficulty sleeping once you reach altitude</li>
            </ul>
            <p className="text-sm text-stone-500 italic">
              Note: Mild symptoms are common at this altitude and usually settle with rest and hydration. Worsening symptoms, however, are a signal to stop ascending and seek guidance from your guide or lodge staff.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              How to Reduce AMS Risk While Climbing
            </h3>
            <ul className="space-y-2 pl-6 list-disc text-stone-700">
              <li>Keep a slow, rhythmic pace rather than pushing hard between rest points</li>
              <li>Drink water steadily throughout the climb, not just when you feel thirsty</li>
              <li>Take regular short breaks rather than one long stop</li>
              <li>Avoid alcohol the night before and the night you arrive at Khopra Ridge</li>
              <li>Tell your guide immediately if you notice any AMS symptoms developing</li>
            </ul>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 5 */}
          <section id="mountain-views" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-955 tracking-tight">
              Mountain Views and Scenic Highlights Along the Route
            </h2>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Stunning Views of Dhaulagiri
            </h3>
            <p>
              Once you reach the ridge, Dhaulagiri rises directly ahead, close enough that it dominates the entire skyline. On clear mornings, visibility here is exceptional, with the massif visible in full from base to summit.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Annapurna South Panorama from the Ridge
            </h3>
            <p>
              Turning along the ridge, Annapurna South comes into view alongside the wider Annapurna range, creating a near-360-degree mountain panorama that few other viewpoints on this circuit can match.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Why Khopra Ridge Is One of Nepal's Best Offbeat Viewpoints
            </h3>
            <p>
              Unlike Poon Hill, which draws large crowds for sunrise, Khopra Ridge offers a similarly spectacular Himalayan viewpoint with a fraction of the foot traffic. It's one of the better examples of an offbeat trek in Nepal that still delivers a world-class panorama without the queues.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 6 */}
          <section id="accommodation" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Accommodation at Khopra Ridge Community Lodge
            </h2>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Understanding the Community Lodge System
            </h3>
            <p>
              Accommodation at Khopra Ridge operates on a <Link href="/planning/community-lodges-khopra-trek" className="text-emerald-700 underline font-semibold hover:text-emerald-600">community lodge model</Link>, where lodge profits support local Magar village schools, clinics, and infrastructure rather than going to outside operators. This is a meaningful difference from privately run teahouses elsewhere in the Annapurna Conservation Area.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Food and Teahouse Facilities Available
            </h3>
            <p>
              Meals at the lodge are simple but sufficient for trekkers after a long climb — typically dal bhat, noodle dishes, soups, and hot drinks. Hot tea and basic snacks are usually available throughout the day, which is welcome after the exertion of the ascent.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              What to Expect When Staying Overnight
            </h3>
            <p>
              Rooms are basic, usually twin-share with extra blankets provided for the cold ridge nights. Charging facilities and hot showers may be limited or paid extras, so it's worth carrying a power bank and being prepared for cooler overnight temperatures than lower-altitude stops on the trek.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 7 */}
          <section id="best-season" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Best Time for Trekking from Chhistibung to Khopra Ridge
            </h2>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Spring Season (March to May)
            </h3>
            <p>
              Spring brings rhododendron forests into bloom along the lower stretches near Chhistibung and generally stable, clear conditions higher up. This is one of the most popular windows for this segment.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Autumn Season (September to November)
            </h3>
            <p>
              Autumn typically offers the clearest mountain visibility of the year, making it the strongest season for the Dhaulagiri and Annapurna South views this segment is known for. Trail conditions are usually dry and stable as well.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Winter and Monsoon Challenges
            </h3>
            <p>
              Winter can bring snow accumulation on the upper switchbacks, making the climb colder and occasionally slippery. Monsoon season introduces a different set of issues — mud, reduced visibility, and a higher risk of localized landslide damage on the dirt trail sections.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 8 */}
          <section id="packing-tips" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Essential Packing Tips for This Climb
            </h2>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Clothing for Rapid Temperature Changes
            </h3>
            <p>
              Pack a proper layering system, since you'll move from sheltered forest to exposed, windy ridge in a single climb. A windproof outer layer and gloves are worth having even outside winter, given how quickly conditions change once you're above the tree line.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Trekking Gear That Helps on Steep Climbs
            </h3>
            <p>
              Trekking poles are genuinely useful on the steep dirt switchbacks, both for stability on the way up and for protecting your knees if you descend the same way. Solid hiking boots with good grip matter more here than on gentler sections of the trek.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Water and Energy Planning
            </h3>
            <p>
              Carry enough water for the full 3-4 hour climb, along with a few energy-dense snacks for the steepest stretches. Electrolyte tablets are a small addition that can help with both hydration and altitude adjustment.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 9 */}
          <section id="safety-tips" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Safety Tips Before Hiking to Khopra Ridge
            </h2>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Avoid Overexertion on Steep Climbs
            </h3>
            <p>
              Resist the urge to push hard on the switchbacks just because the segment is short. A steady, even pace gets you to Khopra Ridge in better shape than a faster, exhausting push.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Weather Conditions and Local Knowledge
            </h3>
            <p>
              Cloud cover and wind can build quickly once you're above the tree line, sometimes within an hour of clear skies lower down. Check conditions with your guide or lodge staff before setting out. Trail conditions on this segment shift with the seasons — mud after rain, snow in winter, occasional minor trail damage after storms. Our guides walk this route monthly specifically to track these changes.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 10 */}
          <section id="route-progression" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Where This Route Fits in the Full Khopra Ridge Trek
            </h2>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Route Progression Before Chhistibung
            </h3>
            <p>
              Most trekkers reach Chhistibung after passing through Ghandruk, Tadapani, and Bayeli Kharka, each stage gaining altitude and remoteness as the trail moves away from the more heavily trafficked Annapurna trekking circuit.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Route Progression After Khopra Ridge
            </h3>
            <p>
              From Khopra Ridge, the trail typically continues toward Khayer Lake, a sacred high-altitude lake and a natural extension for trekkers who want to push further into the alpine terrain before looping back.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Why This Segment Defines the Entire Trek Experience
            </h3>
            <p>
              Many trekkers describe the Chhistibung to Khopra Ridge climb as the moment the trek shifts from a pleasant forest walk into a genuine high-altitude experience. It's the segment that earns the panoramic payoff the rest of the trek builds toward.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* FAQ Section */}
          <section id="faq-section" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-955 tracking-tight mb-8">
              Frequently Asked Questions (FAQ)
            </h2>
            <ChhistibungKhopraFaqInteractive faqs={faqs} />
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Conclusion */}
          <section id="conclusion" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Conclusion
            </h2>
            <p>
              The climb from Chhistibung to Khopra Ridge is short on distance but demanding in every other sense, gaining nearly 700m through steep dirt switchbacks before delivering one of the best mountain panoramas on the entire Annapurna trek route. Pace yourself, watch for early AMS symptoms, and time your trek for spring or autumn conditions, and this segment becomes the highlight rather than the obstacle of your Khopra Ridge Trek.
            </p>
          </section>
        </article>

        {/* Sub-Silo Navigation Bar */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-955">Explore More Trek Routes</h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 text-xs font-semibold text-stone-600">
            <Link href="/routes/bayeli-kharka-to-chhistibung" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
              <span>Bayeli to Chhistibung</span>
              <span>→</span>
            </Link>
            <Link href="/routes/khopra-ridge-to-khayer-lake" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
              <span>Khopra to Khayer Lake</span>
              <span>→</span>
            </Link>
            <Link href="/routes/khopra-ridge-to-swanta-village" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
              <span>Khopra to Swanta</span>
              <span>→</span>
            </Link>
            <Link href="/routes/swanta-village-to-ghorepani" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
              <span>Swanta to Ghorepani</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              Our guides walk the Chhistibung-Khopra Ridge trail monthly to monitor trail degradation, mudslide boundaries, and guest house sanitation standards.
            </p>
          </div>
        </div>

        {/* CTA Box */}
        <div className="mt-12 rounded-3xl bg-stone-955 p-8 sm:p-10 text-white border border-white/5 shadow-2xl relative overflow-hidden bg-stone-950">
          <div className="relative z-10">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-2">Annapurna Adventure Planning</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">Ready to climb to Khopra Ridge?</h3>
            <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Our guided trek packages include local guides who walk this exact route monthly, private jeep transfers to the trailhead, and accommodation arranged at community-owned lodges along the way.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/#book"
                className="rounded-full bg-emerald-600 px-8 py-3.5 text-sm font-bold text-white hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-950/40"
              >
                Inquire About Your Annapurna Trek →
              </Link>
              <Link
                href="/#itinerary"
                className="rounded-full bg-stone-800 px-8 py-3.5 text-sm font-bold text-stone-200 hover:bg-stone-700 transition-all border border-white/10"
              >
                View Full Itinerary
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
