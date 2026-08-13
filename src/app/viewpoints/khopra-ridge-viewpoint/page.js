import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/viewpoints/khopra-ridge-viewpoint",
  },
  title: "Amazing Khopra Ridge Viewpoint Guide | Nepal Trek Guide",
  description: "Discover the Amazing Khopra Ridge Viewpoint Guide: sunrise and sunset views, visible peaks, best seasons, photography tips, and how to reach this hidden.",
};

export default function Page() {
  const keyFacts = [
    { label: "Elevation", value: "3,660 m (12,007 ft)" },
    { label: "Geographic Position", value: "Above Kali Gandaki Gorge (world's deepest gorge)" },
    { label: "Best Viewing Hours", value: "5:30 AM–7:00 AM (Sunrise) & 5:00 PM–6:30 PM (Sunset)" },
    { label: "Trek Duration to Reach", value: "4–5 days from Ghandruk / Nayapul" },
    { label: "Trail Difficulty", value: "Moderate (suitable for fit trekkers & beginners with prep)" },
    { label: "Accommodation", value: "Community Eco-Lodge sitting directly ON the ridge" }
  ];

  const compareSunriseSunset = [
    {
      feature: "Visibility",
      sunrise: "Often crisp, though morning valley haze can linger",
      sunset: "Generally clearer once afternoon clouds disperse"
    },
    {
      feature: "Photography",
      sunrise: "Sharper color contrast & golden glow on Dhaulagiri wall",
      sunset: "Softer, longer golden hour light across Annapurna South"
    },
    {
      feature: "Crowd Levels",
      sunrise: "Slightly busier (main draw for overnight lodge guests)",
      sunset: "Quieter, deeply peaceful & unhurried experience"
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          {/* Breadcrumbs */}
          <div className="mb-6 flex items-center gap-2 text-xs text-stone-400 font-semibold">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/viewpoints/muldai-viewpoint-guide" className="hover:text-emerald-400 transition-colors">Viewpoints</Link>
            <span>/</span>
            <span className="text-emerald-400">Khopra Ridge Viewpoint</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Himalayan Viewpoint Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Amazing Khopra Ridge Viewpoint Guide: Everything You Need to Know
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Sunrise &amp; sunset mountain panoramas, visible 8,000m peaks, best seasons, photography tips, and how Khopra Ridge compares to Poon Hill on the <Link href="/guides/khopra-ridge-ultimate-guide" className="text-emerald-400 underline hover:text-emerald-300 font-semibold">Khopra Ridge Trek</Link>.
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
              <a href="#at-a-glance" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Viewpoint at a Glance
              </a>
              <a href="#location-geography" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Geographic Location
              </a>
              <a href="#why-one-of-best" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why It&apos;s One of Nepal&apos;s Best
              </a>
              <a href="#visible-mountains" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Mountains You Can See
              </a>
              <a href="#sunrise-guide" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Sunrise at Khopra Ridge
              </a>
              <a href="#sunset-guide" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Sunset at Khopra Ridge
              </a>
              <a href="#best-seasons" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Best Time to Visit
              </a>
              <a href="#weather-visibility" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Weather &amp; Visibility
              </a>
              <a href="#how-to-reach" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                How to Reach Viewpoint
              </a>
              <a href="#photography-guide" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Photography Tips &amp; Gear
              </a>
              <a href="#khopra-vs-poonhill" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Khopra Ridge vs. Poon Hill
              </a>
              <a href="#nearby-attractions" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Nearby Attractions
              </a>
              <a href="#travel-tips" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Travel &amp; Gear Tips
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
                Inquire Viewpoint Trek
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Amazing Khopra Ridge Viewpoint Guide: Everything You Need to Know
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Most visitors to the Annapurna region hear about Poon Hill long before they hear about Khopra Ridge. That&apos;s a shame, because Khopra Ridge Viewpoint quietly offers one of the most complete Himalayan panoramas in Nepal, without the crowds, the pre-dawn scramble, or the jostling for a spot on a viewing tower.
              </p>
              <p>
                Sitting at 3,660 meters above the Kali Gandaki Gorge, the deepest gorge on the planet, this ridge puts you face to face with two entire mountain systems at once: the Dhaulagiri massif to the west and the Annapurna range to the east. You don&apos;t climb to it in the dark. You walk out of your lodge and it&apos;s simply there.
              </p>
              <p>
                This guide is built for anyone weighing whether Khopra Ridge deserves a place in their Nepal itinerary — first-time trekkers, photographers chasing the right light, and independent travelers who want a straight answer instead of a sales pitch. We&apos;ll cover what you&apos;ll actually see, when to go, how to get there, and how it stacks up against better-known alternatives.
              </p>
            </div>
          </article>

          {/* SECTION 1: AT A GLANCE */}
          <article id="at-a-glance" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Ridge Viewpoint at a Glance
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 my-6">
              {keyFacts.map((fact, idx) => (
                <div key={idx} className="p-5 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">{fact.label}</span>
                  <p className="text-sm font-extrabold text-stone-900">{fact.value}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <h3 className="font-bold text-stone-900 text-base">Why Travelers Visit Khopra Ridge</h3>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li>A genuine 360-degree mountain panorama, not a partial view blocked by ridgelines</li>
                <li>A noticeably quieter trail compared to the Poon Hill circuit</li>
                <li>Direct, guide-supported access through a community-run lodge system</li>
                <li>The rare option to watch both sunrise and sunset from the same spot, without a separate hike for each</li>
              </ul>
            </div>
          </article>

          {/* SECTION 2: LOCATION & GEOGRAPHY */}
          <article id="location-geography" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Where Is Khopra Ridge Viewpoint?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Geographic Location:</strong> Khopra Ridge sits in the Annapurna Conservation Area, Nepal&apos;s largest protected area, in the foothills between the Annapurna and Dhaulagiri massifs. The ridge runs directly above the Kali Gandaki Gorge, which separates these two 8,000-meter mountain systems and gives the viewpoint its unusually wide sightline in both directions.
              </p>
              <p>
                Because the gorge drops away so steeply below the ridge, there&apos;s nothing blocking the view for miles. That&apos;s the geographic reason this spot works as well as it does — it isn&apos;t luck, it&apos;s topography.
              </p>
              <p>
                <strong>Khopra Ridge vs. Khopra Danda:</strong> If you&apos;ve seen the destination referred to as both &quot;Khopra Ridge&quot; and &quot;Khopra Danda,&quot; that&apos;s not a typo or a different place. &quot;Danda&quot; is the Nepali word for ridge or hill, so Khopra Danda and Khopra Ridge describe the exact same location. You&apos;ll see both terms used interchangeably across maps, guidebooks, and local signage.
              </p>
              <p>
                <strong>How the Viewpoint Fits into the Trek:</strong> The viewpoint isn&apos;t a side trip you detour to — it&apos;s built into the trekking route itself. The <Link href="/nodes/khopra-ridge-lodge-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">community lodge at Khopra</Link> sits directly on the ridge, meaning the overnight stop and the viewpoint are the same location. This is different from treks like Poon Hill, where you stay in one village and hike separately to the viewing point.
              </p>
            </div>
          </article>

          {/* SECTION 3: WHY IT'S ONE OF NEPAL'S BEST */}
          <article id="why-one-of-best" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Khopra Ridge Viewpoint Is One of Nepal&apos;s Best Himalayan Viewpoints
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>A 360-Degree Himalayan Panorama:</strong> Most viewpoints in Nepal give you a strong view in one direction. Khopra Ridge gives you a genuine circle: Dhaulagiri&apos;s wall to the west, Annapurna South rising almost directly behind the lodge to the east, and the Nilgiri range filling the middle distance. Standing on the ridge and turning slowly, you&apos;re looking at peaks that belong to two separate massifs without moving your feet.
              </p>
              <p>
                <strong>A Peaceful Alternative to Crowded Viewpoints:</strong> Poon Hill can see hundreds of trekkers at sunrise during peak season, many of them climbing stone steps in the dark to secure a spot on the viewing platform. Khopra Ridge draws a fraction of that traffic. You&apos;re more likely to have long stretches of the ridge to yourself, which matters if you&apos;re trying to photograph the scene or simply want the moment without a crowd around you.
              </p>
              <p>
                <strong>Sunrise and Sunset Without an Extra Climb:</strong> Because the community lodge sits directly on the ridge, you don&apos;t need to leave your accommodation before dawn or hike back after dark. You step outside, and the view is already there — for both ends of the day.
              </p>
            </div>
          </article>

          {/* SECTION 4: VISIBLE MOUNTAINS */}
          <article id="visible-mountains" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Mountains You Can See from Khopra Ridge Viewpoint
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-3 text-stone-600">
                <li>
                  <strong>Dhaulagiri Massif (8,167 m / 26,795 ft):</strong> Dhaulagiri I dominates the western skyline. It&apos;s the 7th highest mountain on Earth. From Khopra Ridge you see its full sheer wall-like face rising directly across the Kali Gandaki Gorge.
                </li>
                <li>
                  <strong>Annapurna Range (7,219 m / 23,684 ft):</strong> <Link href="/mountains/annapurna-south-views" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Annapurna South</Link> rises almost directly behind the lodge to the east, with Hiunchuli visible alongside it. Unlike Dhaulagiri across the gorge, Annapurna South looms directly over your shoulder.
                </li>
                <li>
                  <strong>Machhapuchhre / Fishtail Mountain (6,993 m):</strong> Machhapuchhre&apos;s iconic twin-peaked summit is visible toward the southeastern part of the panorama.
                </li>
                <li>
                  <strong>Nilgiri Range (North, Central, South):</strong> The Nilgiri peaks sit prominently between Dhaulagiri and Annapurna, forming the visual middle ground across the valley.
                </li>
                <li>
                  <strong>Other Peaks:</strong> On especially clear mornings, Gurja Himal and Lamjung Himal can also be picked out along the horizon.
                </li>
              </ul>
            </div>
          </article>

          {/* SECTION 5: SUNRISE GUIDE */}
          <article id="sunrise-guide" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Sunrise at Khopra Ridge
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Best Time to Watch Sunrise:</strong> Sunrise viewing runs from 5:30 AM to 7:00 AM (shifting seasonally). Guides at the community lodge check current weather and inform trekkers of the exact pre-dawn wake-up time.
              </p>
              <p>
                <strong>What Happens During Sunrise:</strong> Dhaulagiri catches the first alpenglow while the surrounding valleys remain in darkness, turning deep orange-pink before sunlight spreads across Annapurna South and Nilgiri. Within 30 minutes, the full panorama is illuminated as morning haze dissipates over Kali Gandaki.
              </p>
              <p>
                <strong>Pro Sunrise Tips:</strong> Dress in thermal layers + down jacket (pre-dawn temperatures at 3,660m drop near or below freezing even in autumn/spring). Step outside 15 minutes early to adjust your eyes and set up camera tripods.
              </p>
            </div>
          </article>

          {/* SECTION 6: SUNSET GUIDE */}
          <article id="sunset-guide" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Sunset at Khopra Ridge
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Sunset offers a slower, deeply tranquil atmosphere. Afternoon cloud buildup often clears by early evening, painting Annapurna South in soft golden light while Dhaulagiri catches the final violet rays.
              </p>
              <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                      <th className="px-6 py-4">Feature</th>
                      <th className="px-6 py-4">Sunrise (5:30 AM – 7:00 AM)</th>
                      <th className="px-6 py-4">Sunset (5:00 PM – 6:30 PM)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    {compareSunriseSunset.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50">
                        <td className="px-6 py-4 font-bold text-stone-900">{row.feature}</td>
                        <td className="px-6 py-4 text-stone-700">{row.sunrise}</td>
                        <td className="px-6 py-4 text-stone-700">{row.sunset}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          {/* SECTION 7: BEST SEASONS */}
          <article id="best-seasons" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Time to Visit Khopra Ridge Viewpoint
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Autumn (Sept–Nov):</strong> Peak trekking season. Crystal-clear skies, razor-sharp mountain visibility, and stable dry weather.
              </p>
              <p>
                <strong>Spring (March–May):</strong> Rhododendron forests in full bloom below Dobato/Chhistibung. Great visibility, warm daytime trekking, though light afternoon haze can occur.
              </p>
              <p>
                <strong>Winter (Dec–Feb):</strong> Snow-covered ridges and exceptional, crisp mountain clarity. Cold mornings (below freezing) require proper gear.
              </p>
              <p>
                <strong>Monsoon (June–Aug):</strong> Lush green hills, but heavy rain and cloud cover frequently obscure peak views.
              </p>
            </div>
          </article>

          {/* SECTION 8: WEATHER & VISIBILITY */}
          <article id="weather-visibility" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Weather, Visibility, and Viewing Conditions
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Mornings are consistently the clearest window on the ridge. Wind exposure on the open 3,660m ridgeline means temperatures feel several degrees colder than still valley air — always wear windproof outer shells during viewing.
              </p>
            </div>
          </article>

          {/* SECTION 9: HOW TO REACH */}
          <article id="how-to-reach" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How to Reach Khopra Ridge Viewpoint
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Drive from Pokhara to Nayapul or Ghandruk/Kimche. Trek via Ghandruk &rarr; Tadapani &rarr; Dobato &rarr; Chhistibung &rarr; Khopra Ridge (3,660m). The viewpoint is located right at the door of the community lodge.
              </p>
            </div>
          </article>

          {/* SECTION 10: PHOTOGRAPHY GUIDE */}
          <article id="photography-guide" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Photography Guide for Khopra Ridge
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Lens:</strong> Wide-angle (16–35mm equivalent) to capture Dhaulagiri and Annapurna South in a single panorama.</li>
                <li><strong>Tripod &amp; Batteries:</strong> Carry a sturdy tripod for low-light pre-dawn shots. Keep spare camera batteries warm inside your jacket pocket (freezing temperatures drain battery life fast).</li>
                <li><strong>Post-Sunset Glow:</strong> Keep shooting for 15 minutes after the sun drops behind Dhaulagiri — deep pink alpenglow often illuminates the upper snow fields.</li>
              </ul>
            </div>
          </article>

          {/* SECTION 11: KHOPRA VS POON HILL */}
          <article id="khopra-vs-poonhill" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Ridge vs. Poon Hill: Which Viewpoint Is Better?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Views:</strong> Both feature Dhaulagiri and Annapurna South. Khopra (3,660m) is 450 meters higher than Poon Hill (3,210m), putting you closer to Dhaulagiri across Kali Gandaki Gorge.
              </p>
              <p>
                <strong>Crowds:</strong> Poon Hill hosts 300+ trekkers at sunrise on peak mornings on a metal tower. Khopra Ridge sees 15–30 guests staying at a peaceful community lodge with open ridge access.
              </p>
              <p>
                <strong>Verdict:</strong> Choose Poon Hill if short on time (3–4 days). Choose Khopra Ridge if you want superior views, zero crowds, and authentic eco-community hospitality (6–9 days). Read our full <Link href="/viewpoints/khopra-vs-poon-hill-views" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Khopra vs Poon Hill Views Comparison</Link>.
              </p>
            </div>
          </article>

          {/* SECTION 12: NEARBY ATTRACTIONS */}
          <article id="nearby-attractions" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Nearby Attractions Worth Visiting
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                From Khopra Ridge, take the day hike extension to <Link href="/guides/khayer-lake-ultimate-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Sacred Khayer Lake (4,660m)</Link>, visit <Link href="/viewpoints/muldai-viewpoint-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Muldai Viewpoint</Link> above Dobato, and explore the organic cheese factory in <Link href="/nodes/swanta-village-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Swanta Village</Link>.
              </p>
            </div>
          </article>

          {/* SECTION 13: TRAVEL TIPS */}
          <article id="travel-tips" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Practical Travel Tips Before Visiting
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Pace your altitude gain smoothly. Bring thermal base layers, a 800-fill down jacket, windproof gloves, warm beanie, sunglasses, and headlamp.
              </p>
            </div>
          </article>

          {/* SECTION 14: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Khopra Ridge Viewpoint
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Where is Khopra Ridge Viewpoint located?",
                  a: "Khopra Ridge Viewpoint sits in the Annapurna Conservation Area, directly above the Kali Gandaki Gorge between Dhaulagiri and Annapurna South."
                },
                {
                  q: "How high is Khopra Ridge Viewpoint?",
                  a: "The viewpoint sits at 3,660 meters (12,007 feet) above sea level."
                },
                {
                  q: "What mountains can you see from Khopra Ridge?",
                  a: "You can see Dhaulagiri I (8,167m), Annapurna South (7,219m), Hiunchuli, Machhapuchhre (Fishtail), Nilgiri North/Central/South, Gurja Himal, and Lamjung Himal."
                },
                {
                  q: "Is Khopra Ridge better than Poon Hill?",
                  a: "Khopra Ridge is 450m higher, offers 360-degree views without viewing tower crowds, and lets you watch sunrise/sunset directly from your lodge door."
                },
                {
                  q: "Is Khopra Ridge suitable for beginners?",
                  a: "Yes! Fit beginners with good walking condition can complete the trek comfortably with proper pacing."
                },
                {
                  q: "What is the best time to visit Khopra Ridge?",
                  a: "Autumn (September–November) for crystal clarity and Spring (March–May) for blooming rhododendron forests."
                },
                {
                  q: "Is sunrise or sunset better at Khopra Ridge?",
                  a: "Both are incredible! Sunrise produces dramatic golden light on Dhaulagiri, while sunset offers soft violet alpenglow across Annapurna South."
                },
                {
                  q: "How cold does it get at Khopra Ridge?",
                  a: "Early pre-dawn temperatures often drop to 0°C to -10°C depending on the season and wind exposure."
                },
                {
                  q: "How long should you stay at Khopra Ridge?",
                  a: "Most trekkers stay 1 to 2 nights to enjoy sunrise/sunset and attempt the day hike to sacred Khayer Lake (4,660m)."
                },
                {
                  q: "Is Khopra Ridge worth visiting?",
                  a: "Absolutely! It is widely regarded as one of Nepal's finest uncrowded 360-degree Himalayan viewpoints."
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
              Khopra Ridge Viewpoint (3,660m) offers an unparalleled, uncrowded front-row seat to Dhaulagiri and Annapurna. Step out of your community eco-lodge and watch sunrise illuminate 8,000-meter Himalayan giants!
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Experience Khopra Ridge Viewpoint Live
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Skip the crowded paths and let our local guides take you through the community lodge circuit to Khopra Ridge — with the option to extend to sacred Khayer Lake. Contact us to customize your itinerary!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Customize Khopra Viewpoint Itinerary &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Trek:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/guides/khayer-lake-ultimate-guide" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Explore Sacred Khayer Lake Day Hike guide
                  </Link>
                  <Link href="/viewpoints/muldai-viewpoint-guide" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read Muldai Viewpoint Hub guide
                  </Link>
                  <Link href="/viewpoints/khopra-vs-poon-hill-views" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Compare Khopra vs Poon Hill Views
                  </Link>
                  <Link href="/planning/teahouse-locator" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Use our interactive Teahouse Finder tool
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* EEAT Author Verification Banner */}
          <div className="p-6 rounded-3xl bg-stone-100 border border-stone-200 flex items-start gap-4">
            <span className="text-2xl mt-0.5">🏔️</span>
            <div>
              <h4 className="font-bold text-stone-900 text-sm font-sans font-medium">Reviewed by Local Guides</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                This viewpoint guide is maintained by our licensed local trekking guides operating out of Kathmandu and Pokhara. Nepal Tourism Operator License #8928-091. Email: <a href="mailto:khopraridge51@gmail.com" className="text-emerald-700 font-semibold hover:underline">khopraridge51@gmail.com</a>.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
