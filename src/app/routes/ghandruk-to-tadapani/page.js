import React from "react";
import Link from "next/link";
import RouteFaqInteractive from "./RouteFaqInteractive";

export const metadata = {
  title: "Ghandruk to Tadapani Route Guide: Distance, Difficulty, Hiking Time & Trail Conditions",
  description: "Planning to hike from Ghandruk to Tadapani? Get distance, elevation gain, difficulty, trail conditions, teahouses, and mountain views on this Annapurna trekking route.",
};

export default function GhandrukToTadapaniRoutePage() {
  const stats = [
    { label: "Starting Point", value: "Ghandruk (1,940m)" },
    { label: "Ending Point", value: "Tadapani (2,630m)" },
    { label: "Distance", value: "~9.5 km / 5.9 miles" },
    { label: "Elevation Gain", value: "+630m" },
    { label: "Hiking Time", value: "4–5 hours" },
    { label: "Difficulty", value: "Moderate" },
    { label: "Terrain Profile", value: "Stone steps, forest trails" },
    { label: "Best Season", value: "Spring & Autumn" },
  ];

  const faqs = [
    {
      question: "How far is Ghandruk to Tadapani trek?",
      answer: "The Ghandruk to Tadapani trek covers approximately 9.5 km (5.9 miles), measured along the walking trail rather than as a straight-line distance."
    },
    {
      question: "How difficult is the Ghandruk to Tadapani hike?",
      answer: "It's a moderate-difficulty trek. The trail isn't technical, but the sustained 630m elevation gain over forested, stair-heavy terrain makes it more demanding than a casual walk."
    },
    {
      question: "How many hours does it take to reach Tadapani from Ghandruk?",
      answer: "Most trekkers take 4 to 5 hours, though beginners with longer rest stops may take 5 to 6 hours, and experienced trekkers moving quickly can finish in around 3 to 3.5 hours."
    },
    {
      question: "Is Ghandruk to Tadapani suitable for beginners?",
      answer: "Yes. It doesn't require prior high-altitude trekking experience, but a reasonable level of fitness for sustained uphill walking is important, and trekking poles are recommended."
    },
    {
      question: "Are there teahouses available in Tadapani?",
      answer: "Yes, Tadapani has a small cluster of teahouses offering basic rooms, dal bhat and noodle-based meals, and limited charging and WiFi access."
    },
    {
      question: "What mountains can I see from Tadapani?",
      answer: "On clear days, Tadapani offers views of Machhapuchhre (Fishtail) and Annapurna South, with Dhaulagiri occasionally visible depending on weather conditions."
    },
    {
      question: "What is the best season for this trek?",
      answer: "Spring (March–April) and autumn (September–November) are the best seasons, offering the clearest mountain views and the most stable trail conditions."
    },
    {
      question: "Is a guide necessary for this route?",
      answer: "A guide isn't strictly required, since the trail is well-trodden and clearly marked, but local guides add value through real-time trail knowledge, teahouse arrangements, and logistics support."
    },
    {
      question: "Can I continue toward Annapurna Base Camp from Tadapani?",
      answer: "Yes. Tadapani connects to the trail leading toward Chhomrong and onward to the Annapurna Base Camp route."
    },
    {
      question: "Is this route safe during monsoon season?",
      answer: "The trail is passable during monsoon, but expect muddy, slippery conditions on the steeper sections and reduced mountain visibility due to cloud cover."
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
            Ghandruk to Tadapani Route Guide: Distance, Difficulty, Hiking Time &amp; Trail Conditions
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Planning to hike from Ghandruk to Tadapani? Get distance, elevation gain, difficulty, trail conditions, teahouses, and mountain views on this Annapurna trekking route.
          </p>
        </header>

        {/* Quick Stats Grid */}
        <section aria-label="Route Summary" className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="p-5 bg-white border border-stone-200/80 rounded-3xl shadow-sm text-center">
              <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">{stat.label}</span>
              <span className="text-sm font-extrabold text-stone-950 mt-1 block">{stat.value}</span>
            </div>
          ))}
        </section>

        {/* Introduction */}
        <article className="mt-12 space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
          <p>
            The hike from Ghandruk to Tadapani covers roughly 9.5 km (5.9 miles) and takes most trekkers 4 to 5 hours to complete, with a total elevation gain of about 630 meters. The trail climbs out of Ghandruk village (1,940m) through stone-paved staircases and dense oak and rhododendron forest before reaching Tadapani (2,630m), a forested junction point with some of the closest mountain views in this part of the Annapurna Conservation Area.
          </p>
          <p>
            This segment is one of the more physically demanding sections in the Ghandruk–Ghorepani–Annapurna network, mostly because the climbing is steady rather than broken up by flat stretches. It's also one of the more rewarding ones. Trekkers who time it right walk through a corridor of blooming rhododendron trees and arrive at a viewpoint with a near head-on look at Annapurna South and Machhapuchhre.
          </p>
          <p>
            Below is a complete breakdown of what to expect on this trail, written from the perspective of guides who walk this route every trekking season.
          </p>

          <hr className="my-10 border-stone-200" />

          {/* Section 1 */}
          <section id="trek-overview" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Ghandruk to Tadapani Trek Overview
            </h2>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Where Ghandruk Is Located and Why Trekkers Start Here
            </h3>
            <p>
              Ghandruk is a large Gurung village sitting at about 1,940 meters, roughly a 2.5 to 3-hour drive from Pokhara depending on road conditions. It's one of the most visited villages in the Annapurna region, both as a standalone day-trip destination and as a starting point for longer treks toward Tadapani, Chhomrong, and the Annapurna Base Camp trail.
            </p>
            <p>
              Most trekkers reach Ghandruk by jeep or local bus from Pokhara, then start walking from the village center. Because Ghandruk already has guesthouses, ACAP checkpoints, and mobile network coverage, it works well as a staging point before heading into less developed terrain.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Where Tadapani Is Located on the Annapurna Trekking Route
            </h3>
            <p>
              Tadapani sits at approximately 2,630 meters, inside a forested ridge with no permanent village around it — just a small cluster of teahouses built specifically to serve trekkers passing through. The name roughly translates to &quot;far water,&quot; a nod to the fact that water sources here have historically been a short walk from the lodges themselves.
            </p>
            <p>
              Tadapani functions as a trail junction rather than a final destination. From here, routes split toward Ghorepani and Poon Hill in one direction, and toward Chhomrong and Annapurna Base Camp in the other, which is why it sees steady trekking traffic throughout the main seasons.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 2 */}
          <section id="distance-time" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Ghandruk to Tadapani Distance, Elevation Gain and Hiking Time
            </h2>

            <h3 className="text-xl font-bold text-stone-905 mt-6">
              Total Distance Between Ghandruk and Tadapani
            </h3>
            <p>
              The trail covers approximately 9.5 km (5.9 miles), measured along the walking path rather than in a straight line. Because the route winds through forest switchbacks rather than running directly uphill, the actual ground covered feels longer than the map distance suggests.
            </p>
            <p>
              Trekkers who've done flatter sections of the Annapurna Circuit often underestimate this segment for that reason — 9.5 km of steady climbing through forest takes noticeably longer than 9.5 km on level ground.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Elevation Gain and Altitude Profile
            </h3>
            <p>
              You'll gain about 630 meters in elevation over the course of the hike, climbing from Ghandruk's 1,940m up to Tadapani's 2,630m. This gain isn't evenly spread out. The steepest sections are concentrated near the start, just outside Ghandruk, and again on the final approach into Tadapani.
            </p>
            <p>
              This kind of front-and-back-loaded climb is common on Annapurna foothill trails, and it's worth pacing yourself accordingly rather than pushing hard early and running out of energy on the final stretch.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              How Long Does the Trek Usually Take
            </h3>
            <p>
              Most trekkers complete this segment in 4 to 5 hours, including short breaks. Here's a rough breakdown by experience level:
            </p>
            <ul className="space-y-2 pl-6 list-disc text-stone-700">
              <li><strong>Beginner or first-time trekkers:</strong> 5–6 hours, with longer rest stops</li>
              <li><strong>Average fitness, regular pace:</strong> 4–5 hours</li>
              <li><strong>Experienced trekkers, fast pace:</strong> 3–3.5 hours</li>
            </ul>
            <p>
              These times assume normal trail conditions and don't account for extended photography stops, which are common given the forest scenery and mountain views near Tadapani.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 3 */}
          <section id="step-by-step" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Step-by-Step Trail Breakdown from Ghandruk to Tadapani
            </h2>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Leaving Ghandruk Village and Starting the Stone Staircase Climb
            </h3>
            <p>
              The trail begins by climbing out through Ghandruk's upper terraces on traditional stone-paved steps. This is the most physically demanding part of the entire route, partly because it comes right at the start before your legs have warmed up.
            </p>
            <p>
              Expect roughly 30 to 45 minutes of near-continuous stair climbing before the gradient eases slightly. Many trekkers find this opening stretch tougher than anything that follows, simply because of the abrupt elevation change so early in the day.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Forest Trail Through Oak and Rhododendron Sections
            </h3>
            <p>
              Once you clear the village terraces, the trail enters a long stretch of oak and rhododendron forest that makes up the bulk of the hike. The path becomes shadier, the ground softer underfoot, and village views give way to dense tree cover and moss-lined trail edges.
            </p>
            <p>
              During spring (roughly March to April), this section is filled with rhododendron blooms in shades of red, pink, and white — it's one of the most photographed stretches on this entire trekking route. Outside bloom season, the forest is still scenic but considerably quieter and greener.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Passing Through Bhaisi Kharka Resting Point
            </h3>
            <p>
              Bhaisi Kharka marks a natural midpoint along the trail and is the spot most trekkers choose for their main rest stop. The name refers to a former buffalo grazing area, and the terrain here flattens out briefly compared to the climbs on either side.
            </p>
            <p>
              It's a sensible place to refill water, eat a snack, and check in with how your legs are holding up before tackling the final climb into Tadapani. Trail conditions tend to shift noticeably past this point, so it's worth using the break to reassess pace.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Final Climb Before Reaching Tadapani
            </h3>
            <p>
              The last stretch before Tadapani involves another sustained climb, slightly steeper than the middle section of the trail. The forest thickens again here, and you'll start catching glimpses of open sky through the canopy as you near the ridge.
            </p>
            <p>
              Arrival at Tadapani is fairly abrupt — the trail opens up into the small teahouse cluster with little warning, and on clear days, your first proper mountain view often comes within minutes of reaching the lodges themselves.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 4 */}
          <section id="difficulty-level" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              How Difficult Is the Ghandruk to Tadapani Trek
            </h2>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Physical Difficulty Level for Most Trekkers
            </h3>
            <p>
              This segment is best classified as moderate difficulty. It's not technical — there's no exposure, scrambling, or route-finding involved — but the sustained elevation gain over a forested, stair-heavy trail makes it more demanding than a casual day hike.
            </p>
            <p>
              The 630m gain over 9.5 km works out to a fairly consistent uphill gradient, with almost no flat or downhill relief to recover on. That's the main factor that pushes this route from &quot;easy&quot; to &quot;moderate.&quot;
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Is This Route Suitable for Beginners
            </h3>
            <p>
              Yes, with reasonable preparation. This trail doesn't require prior high-altitude trekking experience, but it does require a baseline level of fitness — comfortably walking uphill for several hours without needing extended rest every few minutes.
            </p>
            <p>
              First-time trekkers generally do fine here as long as they pace themselves, start early, and treat Bhaisi Kharka as a proper rest stop rather than rushing through. Trekking poles help considerably on the stone staircase sections.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Which Sections Feel Most Challenging
            </h3>
            <ul className="space-y-2 pl-6 list-disc text-stone-700">
              <li>
                <strong>The initial stone staircase climb leaving Ghandruk:</strong> Steep and sustained right from the start.
              </li>
              <li>
                <strong>The long uphill stretches through the mid-forest section:</strong> Less steep, but mentally tiring due to length.
              </li>
              <li>
                <strong>The final climb into Tadapani:</strong> Comes when fatigue has already built up over several hours.
              </li>
            </ul>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 5 */}
          <section id="trail-conditions" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Trail Conditions and Terrain You Should Expect
            </h2>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Stone Staircases and Uneven Trail Sections
            </h3>
            <p>
              A significant portion of this route, especially near Ghandruk, runs on traditional stone-paved steps. These steps vary in height and spacing, which means a steady, deliberate pace works better than rushing. Proper trekking boots with good ankle support and grip are strongly recommended over casual sneakers.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Forest Trails and Seasonal Mud Conditions
            </h3>
            <p>
              Once past the staircase sections, the trail surface becomes packed dirt and root-covered forest path. During the monsoon months (roughly June to August), this same trail turns muddy and slippery, particularly on the steeper inclines. Gaiters and trekking poles make a noticeable difference if you're hiking during or just after the monsoon.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Weather Conditions Throughout the Trekking Season
            </h3>
            <p>
              Weather on this segment shifts quickly because of the elevation change and forest cover. Mornings tend to be clear and cool, while afternoon cloud cover is common, especially heading into the wetter months. Starting early — ideally before 8 AM — gives you the best chance of clear mountain views from Tadapani before clouds roll in.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 6 */}
          <section id="scenic-highlights" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Scenic Highlights Along the Ghandruk to Tadapani Trail
            </h2>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Rhododendron Forests During Spring Trekking Season
            </h3>
            <p>
              If there's one reason to specifically time a trek for this route, it's the rhododendron forest in spring. From March into April, the forest sections between Ghandruk and Tadapani turn into a corridor of red, pink, and occasionally white blooms, and Nepal's national flower is on full display here in a way few other trekking routes match.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Mountain Views Visible from Tadapani
            </h3>
            <p>
              Tadapani's main draw is its proximity to the mountains rather than altitude alone. On clear days, you'll get strong views of Machhapuchhre (Fishtail) and Annapurna South, with Dhaulagiri occasionally visible depending on conditions and time of day. Early morning typically offers the clearest visibility before afternoon clouds build up.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Wildlife and Forest Environment Inside Annapurna Conservation Area
            </h3>
            <p>
              This trail sits entirely within the Annapurna Conservation Area, Nepal's largest protected area. The forest sections are home to a range of bird species, and trekkers occasionally spot Himalayan langurs or signs of smaller forest mammals, though sightings are never guaranteed. The conservation status of this area is part of why the forest cover here remains so dense and intact.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 7 */}
          <section id="best-time" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Best Time of Year for Ghandruk to Tadapani Trek
            </h2>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Spring Season (March to April)
            </h3>
            <p>
              Spring is widely considered the best time for this trek. Rhododendron forests are in full bloom, daytime temperatures are comfortable for hiking, and trail conditions are generally dry and stable after the winter season ends.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Autumn Season (September to November)
            </h3>
            <p>
              Autumn is the other peak window, known for the clearest skies and the best mountain visibility of the year. Trails are dry, temperatures are mild, and this is when the route sees its highest volume of both independent and guided trekkers.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Monsoon and Winter Trekking Conditions
            </h3>
            <p>
              Monsoon season (June to August) brings muddy, slippery trail conditions and reduced mountain visibility due to persistent cloud cover, though the forest itself turns vividly green. Winter (December to February) brings colder temperatures and occasional snow at Tadapani's elevation, which can make the final approach to the lodges noticeably colder than the climb itself.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 8 */}
          <section id="lodging-food" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Tadapani Teahouses, Accommodation and Food Options
            </h2>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              What Teahouses Are Available in Tadapani
            </h3>
            <p>
              Tadapani has a small cluster of teahouses built specifically to serve trekkers on this route. Rooms are typically basic — twin beds, shared bathrooms in most cases, and minimal furnishings — which is standard across most teahouse trekking routes in this part of Nepal. Booking ahead isn't usually necessary outside peak autumn weeks, but it's worth checking availability if you're trekking in October or November.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Food Options and Meal Availability
            </h3>
            <p>
              Menus at Tadapani's teahouses follow the usual trekking-route pattern: dal bhat (rice, lentils, and vegetables) is the most reliable and filling option, alongside noodle dishes, soups, and basic breakfast items like eggs and toast. Hot tea and coffee are available throughout the day, which is a welcome stop after the final climb.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Electricity, Charging and WiFi Availability
            </h3>
            <p>
              Most teahouses in Tadapani offer device charging, often for a small fee, and basic WiFi that can be slow or intermittent depending on the lodge and the weather. It's worth carrying a power bank as a backup, since electricity access at this altitude isn't always consistent.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 9 */}
          <section id="practical-tips" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Practical Trekking Tips Before Hiking from Ghandruk to Tadapani
            </h2>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              What to Pack for This Trek Segment
            </h3>
            <p>
              A few items make a noticeable difference on this specific trail:
            </p>
            <ul className="space-y-2 pl-6 list-disc text-stone-700">
              <li><strong>Trekking poles:</strong> Genuinely useful on both the stone staircases and the final climb</li>
              <li><strong>Light rain jacket:</strong> Afternoon weather can shift quickly, especially outside the dry season</li>
              <li><strong>Hydration:</strong> Carry at least 1.5–2 liters of water — there are limited refill points before Bhaisi Kharka</li>
              <li><strong>Layered clothing:</strong> Temperatures shift between the forest sections and the open ridge at Tadapani</li>
            </ul>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              How to Prepare Physically for the Uphill Climb
            </h3>
            <p>
              Since this trail is almost entirely uphill with little flat recovery ground, basic stair-climbing endurance matters more than raw speed. If you can comfortably walk uphill for 4 to 5 hours with regular short breaks, you're well prepared for this segment without needing specialized training.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Safety Tips for Solo and Guided Trekkers
            </h3>
            <p>
              Start early enough to reach Tadapani well before afternoon cloud cover sets in, and treat Bhaisi Kharka as a mandatory check-in point to assess your pace and hydration. If you're trekking solo, it's worth letting your guesthouse know your planned route and rough arrival time, since phone coverage thins out once you leave Ghandruk's immediate area.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 10 */}
          <section id="route-beyond" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Where the Route Goes After Tadapani
            </h2>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Continuing Toward Ghorepani Route
            </h3>
            <p>
              From Tadapani, one of the most common continuations is the trail toward Ghorepani, which connects to the well-known Poon Hill sunrise viewpoint. This route adds another forested, moderately challenging day to the itinerary.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Continuing Toward Chhomrong and Annapurna Base Camp
            </h3>
            <p>
              In the other direction, the trail from Tadapani leads toward Chhomrong and eventually the Annapurna Base Camp trekking route, making this segment a common early-stage connector for trekkers heading deeper into the Annapurna Sanctuary.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Continuing Toward Khopra Ridge Trek Route
            </h3>
            <p>
              Tadapani also connects toward the Khopra Ridge trekking route, an offbeat alternative that trades some of the crowds of ABC for quieter trails and equally strong mountain views. This is the route we operate most frequently as a local trekking team in this region.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 11 */}
          <section id="local-experts" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Why Trek With Local Experts in the Annapurna Region
            </h2>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Benefits of Trekking With Local Guides
            </h3>
            <p>
              A local guide adds practical value beyond just navigation — knowledge of which teahouses are reliably open, how trail conditions are shifting that particular week, and how to adjust pacing for your group's fitness level. On a route like this, where the climbing is front-loaded and conditions change with the seasons, that kind of real-time judgment is hard to replace with a map alone.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              How Our Team Helps Organize Your Trek
            </h3>
            <p>
              Our guides walk this exact route — Ghandruk to Tadapani and onward toward Khopra Ridge — on a regular basis throughout the trekking seasons, which means our route advice reflects current trail conditions rather than outdated descriptions. We handle teahouse bookings, ACAP permit arrangements, transport from Pokhara, and guide support, so the logistics around this segment are taken care of before you ever start walking.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* FAQ Section */}
          <section id="faq-section" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight mb-8">
              Frequently Asked Questions (FAQ)
            </h2>
            <RouteFaqInteractive faqs={faqs} />
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 12: Conclusion */}
          <section id="conclusion" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Conclusion
            </h2>
            <p>
              The Ghandruk to Tadapani trek packs a complete Annapurna foothill experience into a single day: stone staircases leaving the village, a long climb through oak and rhododendron forest, a natural rest point at Bhaisi Kharka, and a forested arrival point with some of the closest mountain views on this side of the conservation area. At roughly 9.5 km and 630 meters of elevation gain, it's a moderate but manageable day for most trekkers who pace themselves and prepare for sustained uphill walking.
            </p>
            <p>
              Whether this is your first day on an Annapurna itinerary or a connector toward Ghorepani, Chhomrong, or Khopra Ridge, knowing what to expect on this specific segment — the terrain, the timing, and the seasonal conditions — makes the climb considerably easier to plan around.
            </p>
          </section>
        </article>

        {/* Sub-Silo Navigation Bar */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Explore More Trek Routes</h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 text-xs font-semibold text-stone-600">
            <Link href="/routes/tadapani-to-bayeli-kharka" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
              <span>Tadapani to Bayeli Kharka</span>
              <span>→</span>
            </Link>
            <Link href="/routes/bayeli-kharka-to-chhistibung" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
              <span>Bayeli Kharka to Chhistibung</span>
              <span>→</span>
            </Link>
            <Link href="/routes/chhistibung-to-khopra-ridge" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
              <span>Chhistibung to Khopra Ridge</span>
              <span>→</span>
            </Link>
            <Link href="/routes/khopra-ridge-to-khayer-lake" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
              <span>Khopra Ridge to Khayer Lake</span>
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
              Our guides walk the Ghandruk-Tadapani forest trail monthly to monitor trail degradation, mudslide boundaries, and guest house sanitation standards.
            </p>
          </div>
        </div>

        {/* CTA Box */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 sm:p-10 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-2">Annapurna Adventure Planning</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">Planning to trek beyond Tadapani?</h3>
            <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Contact our local trekking team and let us help organize your Annapurna adventure — including teahouse bookings, ACAP permits, transport from Pokhara, and experienced guides who walk this exact route every season.
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
                View 9-Day Route
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
