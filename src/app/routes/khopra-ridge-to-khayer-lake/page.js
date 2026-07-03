import React from "react";
import Link from "next/link";
import KhopraKhayerFaqInteractive from "./KhopraKhayerFaqInteractive";

export const metadata = {
  alternates: {
    canonical: "/routes/khopra-ridge-to-khayer-lake",
  },
  title: "Khopra Ridge to Sacred Khayer Lake Route Guide (Distance, Difficulty & Safety Tips)",
  description: "Plan your hike from Khopra Ridge to Sacred Khayer Lake with our complete route guide. Covers distance, elevation gain, trail difficulty, altitude sickness prevention, terrain conditions, best season, and the sacred Khayer Baraha Temple.",
};

export default function KhopraToKhayerRoutePage() {
  const stats = [
    { label: "Starting Point", value: "Khopra Ridge (3,660m)" },
    { label: "Ending Point", value: "Khayer Lake (4,660m)" },
    { label: "Round Trip Distance", value: "~15 km / 9.3 miles" },
    { label: "Elevation Profile", value: "+1,000m / -1,000m" },
    { label: "Walking Time (RT)", value: "7–8 hours" },
    { label: "Difficulty Rating", value: "Difficult" },
    { label: "Terrain Profile", value: "Exposed Ridge & Scree" },
    { label: "Trek Configuration", value: "Out-and-Back Day Hike" }
  ];

  const faqs = [
    {
      question: "How far is Khayer Lake from Khopra Ridge?",
      answer: "The round-trip distance from Khopra Ridge (Khopra Danda) to Sacred Khayer Lake is approximately 15 kilometres (9.3 miles). This is an out-and-back hike on the same trail. The one-way distance is roughly 7.5 kilometres."
    },
    {
      question: "How difficult is the Khayer Lake trek from Khopra Ridge?",
      answer: "The trek is rated difficult. The route involves 1,000 metres of continuous elevation gain, exposed alpine ridge terrain, extended scree sections, and high-altitude conditions above 4,000 metres. It is the most demanding single day within the Khopra Ridge Trek itinerary."
    },
    {
      question: "What is the altitude of Khayer Lake?",
      answer: "Khayer Lake sits at 4,660 metres (15,289 feet) above sea level. The trek begins at Khopra Ridge at 3,660 metres, making the total elevation gain 1,000 metres."
    },
    {
      question: "Can beginners hike to Khayer Lake from Khopra Ridge?",
      answer: "Beginners with no prior high-altitude trekking experience are not recommended to attempt this route. It is best suited to intermediate or advanced trekkers who have previously hiked above 3,000 metres and are comfortable with long, demanding mountain days. An acclimatisation day at Khopra Ridge before the hike is strongly advised."
    },
    {
      question: "Is altitude sickness common at Khayer Lake?",
      answer: "Altitude sickness risk is significant above 4,000 metres, and Khayer Lake at 4,660 metres is within the serious AMS risk zone. Proper acclimatisation, slow pace, consistent hydration, and awareness of symptoms significantly reduces the risk. Trekkers who attempt this hike without a rest day at Khopra Ridge are at higher risk."
    },
    {
      question: "What is the best season to trek to Khayer Lake?",
      answer: "Autumn (September to November) offers the most stable weather and best visibility. Spring (March to May) is also suitable with clearer skies in the morning hours. Winter brings snow and ice above 4,000 metres. Monsoon (June–August) brings slippery trails and poor visibility, though the Janai Purnima pilgrimage festival in August offers a unique cultural experience for prepared trekkers."
    },
    {
      question: "Can I trek to Khayer Lake without a guide?",
      answer: "Technically, the route can be attempted without a guide. However, given the remote terrain, lack of emergency support between Khopra Ridge and the lake, real altitude sickness risk, and the absence of teahouses or rest points along the way, a local guide is strongly recommended. A guide also adds cultural context that significantly enriches the experience at the Khayer Baraha Temple."
    },
    {
      question: "Is Khayer Lake worth visiting?",
      answer: "Yes. Trekkers who complete the hike consistently describe it as the most memorable day of the entire Khopra Ridge Trek. The combination of dramatic mountain scenery, spiritual significance, and remote alpine wilderness at this elevation is rare on any accessible non-technical trekking route in Nepal."
    },
    {
      question: "Are permits required for the Khayer Lake trek?",
      answer: <>The Khayer Lake trail falls within the Annapurna Conservation Area, which requires an <Link href="/planning/acap-permit-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">ACAP (Annapurna Conservation Area Permit)</Link>. A TIMS card is also typically required for trekkers in the Annapurna region. Our team handles both permit arrangements as part of the full Khopra Ridge Trek package.</>
    },
    {
      question: "How cold does Khayer Lake get in the morning?",
      answer: "At 4,660 metres, early morning temperatures at Khayer Lake can drop to -5°C to -10°C in autumn and spring, and significantly colder in winter. Even on warm days lower down the trail, conditions at the lake require proper layering. Wind chill at the exposed basin makes it feel colder than the actual temperature reading."
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
          <h1 className="mt-4 text-4xl font-black tracking-tight text-stone-955 sm:text-5xl leading-tight">
            Khopra Ridge to Sacred Khayer Lake Route Guide
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Plan your hike from Khopra Ridge to Sacred Khayer Lake with our complete route guide. Covers distance, elevation gain, trail difficulty, altitude sickness prevention, terrain conditions, best season, and the sacred Khayer Baraha Temple.
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
            The hike from Khopra Ridge to Sacred Khayer Lake is the most demanding and most rewarding single day on the entire Khopra Ridge Trek. You leave behind the warmth of the community lodge before sunrise, climb over a thousand metres through exposed alpine terrain, and arrive at a high-altitude sacred lake sitting beneath the towering west face of Annapurna South. Very few trekkers in the Annapurna region ever reach this elevation. Even fewer experience the silence and spiritual intensity that surrounds Khayer Lake at 4,660 metres.
          </p>
          <p>
            This is not a gentle walk. The route crosses rocky scree slopes, exposed ridge flanks, and narrow mountain paths in thin mountain air. It demands proper preparation, an early start, and the right mindset. But for those who complete it, Khayer Lake becomes the defining memory of the entire trek.
          </p>
          <p>
            This guide covers every practical detail you need — route progression, terrain conditions, altitude sickness prevention, cultural significance, best season, packing recommendations, and safety advice. Whether you are planning this hike independently or exploring it as part of a full guided trek package, this is the most complete route reference available for this exact segment.
          </p>

          <hr className="my-10 border-stone-200" />

          {/* Section 1 */}
          <section id="trek-overview" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-955 tracking-tight">
              Quick Route Overview
            </h2>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Distance from Khopra Ridge to Khayer Lake
            </h3>
            <p>
              The round trip distance from Khopra Ridge (also called Khopra Danda) to Khayer Lake and back is approximately 15 kilometres (9.3 miles). This is a full day out-and-back hike. There is no loop option on this route. You ascend on the same trail you descend, which means route-finding is straightforward but physical fatigue on the return is real.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Total Hiking Time Required
            </h3>
            <p>
              Most trekkers complete the round trip in 7 to 8 hours, including time spent at the lake. Fit hikers with high-altitude experience can complete the ascent in 3 to 3.5 hours. Slower hikers or those feeling the altitude may take 4 to 4.5 hours going up. Allow at least 30–45 minutes at the lake before beginning your descent. The descent is faster but requires care on loose scree.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Elevation Gain and Altitude Profile
            </h3>
            <p>
              The ascent is continuous. There are no flat recovery sections once you leave Khopra Ridge. This relentless gain of 1,000m (+3,281ft) from 3,660m up to 4,660m is one of the main reasons <Link href="/planning/khayer-lake-altitude-difficulty" className="text-emerald-700 underline font-semibold hover:text-emerald-600">altitude sickness</Link> becomes a serious concern on this route.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Difficulty Rating at a Glance
            </h3>
            <p>
              This segment is rated Difficult. It is the hardest single day within the Khopra Ridge Trek itinerary. The combination of high elevation, exposed terrain, steep ascent, and long hiking duration makes it significantly harder than the lower trail sections between Ghandruk, Tadapani, and Swanta Village. First-time high-altitude trekkers should not underestimate it.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 2 */}
          <section id="detailed-route" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-955 tracking-tight">
              Route Description from Khopra Ridge to Sacred Khayer Lake
            </h2>
            <p>
              Understanding how the trail unfolds helps you manage energy, pace, and expectations. Here is what the route actually looks like, section by section.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Leaving Khopra Ridge Early in the Morning
            </h3>
            <p>
              The accepted rule on this hike is simple: leave early. Most experienced trekkers and local guides recommend departing Khopra Danda by 5:30 to 6:00 AM. There are two good reasons for this.
            </p>
            <p>
              First, afternoon weather in the Himalayas changes quickly. Cloud cover, wind, and occasional rain can develop above 4,000 metres after midday, especially in spring. Reaching the lake by mid-morning gives you the best visibility and safest conditions for the return descent.
            </p>
            <p>
              Second, starting in the cold early morning light means the trail is firm. Scree and loose rock sections can shift and become less stable when partially frozen ground softens later in the day.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Crossing Exposed Alpine Ridge Sections
            </h3>
            <p>
              Within the first hour of leaving Khopra Ridge, the trail opens onto wide, exposed mountain flanks. There is no tree cover. No shelter. The path climbs steadily along the side of the ridge with views dropping steeply on both sides in certain sections.
            </p>
            <p>
              Wind is a consistent factor here. Even on calm days lower down, the exposed ridge sections can feel significantly colder and windier than you expect. This is the moment most trekkers realise they should have packed an extra layer. A windproof jacket is not optional on this route — it is essential.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Trekking Across Rocky Scree Terrain
            </h3>
            <p>
              As you gain altitude, the trail enters extended sections of alpine scree — loose rock fields where the surface shifts underfoot with every step. This is where trekking poles become your most important piece of gear. They reduce strain on the knees, improve balance on unstable ground, and lower the risk of a slip.
            </p>
            <p>
              Pace yourself carefully through scree. Rushing leads to stumbles. The altitude is also making itself felt by this point — around 4,000 to 4,300 metres — and most trekkers notice reduced energy and slightly heavier breathing. Slow down. Take short rest breaks every 20 to 30 minutes. Drink water consistently.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Final Approach to Sacred Khayer Lake
            </h3>
            <p>
              The final approach to Khayer Lake steepens noticeably. The trail narrows and the loose terrain gives way to more solid rocky ground as you approach the lake basin. Many trekkers describe this last push as the most mentally demanding part of the hike — the lake feels close, but the altitude slows your pace dramatically.
            </p>
            <p>
              Then the basin opens, and Khayer Lake appears.
            </p>
            <p>
              The lake sits in a natural mountain hollow at 4,660 metres. On clear days, the reflection of surrounding peaks on the still water surface is extraordinary. The west face of Annapurna South fills the sky to the north. The silence at this altitude is unlike anything on the lower trail sections.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 3 */}
          <section id="difficulty-analysis" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-955 tracking-tight">
              How Difficult Is the Khayer Lake Trek from Khopra Ridge?
            </h2>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Physical Endurance Required
            </h3>
            <p>
              This is a long day by any standard. You are walking 15 kilometres round trip with 1,000 metres of constant elevation gain on your legs before you begin the return descent. At sea level, that would be a demanding hike. At high altitude, the reduced oxygen level means your body works significantly harder for every step.
            </p>
            <p>
              Expect sustained effort for 7 to 8 hours. There are no teahouses, lodges, or rest points between Khopra Ridge and Khayer Lake. You carry everything you need for the day.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Why High Altitude Makes This Trek Harder
            </h3>
            <p>
              Above 4,000 metres, the air contains roughly 60% of the oxygen available at sea level. Your body compensates by breathing faster and your heart works harder. Activities that feel comfortable at lower elevations feel noticeably more tiring at this altitude.
            </p>
            <p>
              This is not a fitness problem — even experienced trekkers feel it. The key is accepting a slower pace than you might naturally walk at lower elevation.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Who Should Attempt This Hike?
            </h3>
            <p>
              This hike is suitable for intermediate to advanced trekkers with prior mountain experience.
            </p>
            <ul className="space-y-2 pl-6 list-disc text-stone-705">
              <li><strong>Not recommended for:</strong> Trekkers with no previous hiking experience above 3,000 metres, individuals with known cardiac/respiratory conditions, or anyone experiencing altitude sickness symptoms at Khopra Ridge.</li>
              <li><strong>Well-suited for:</strong> Trekkers who have previously hiked Poon Hill or similar Annapurna routes, individuals in good cardiovascular fitness, and those who acclimatised properly during the lower trail sections.</li>
            </ul>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 4 */}
          <section id="altitude-acclimatisation" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Altitude and Acclimatisation Guide
            </h2>
            <p>
              Altitude sickness is the most serious risk on this entire route. Khayer Lake sits at 4,660 metres — higher than most trekkers in the Annapurna region ever reach.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Understanding Altitude Sickness Risk Above 4,500 Metres
            </h3>
            <p>
              Acute Mountain Sickness (AMS) occurs when the body fails to adapt quickly enough to reduced oxygen levels at high altitude. The risk increases as you move from Khopra Ridge (3,660 m) toward Khayer Lake (4,660 m). The critical zone begins around 3,500 metres and the risk becomes more significant above 4,000 metres.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Common Symptoms Trekkers Should Watch For
            </h3>
            <ul className="space-y-2 pl-6 list-disc text-stone-700">
              <li><strong>Mild AMS symptoms:</strong> Persistent headache that does not improve with rest or water, nausea or loss of appetite, dizziness, and unusual fatigue.</li>
              <li><strong>Serious warning signs requiring immediate descent:</strong> Vomiting, extreme confusion or disorientation, loss of coordination, severe shortness of breath at rest, or chest tightness.</li>
            </ul>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              How to Reduce Altitude Risk on This Route
            </h3>
            <ul className="space-y-2 pl-6 list-disc text-stone-700">
              <li><strong>Acclimatisation:</strong> Spend at least one full rest day at Khopra Ridge before attempting the Khayer Lake hike.</li>
              <li><strong>Hydration:</strong> Drink 3 to 4 litres of water during the day hike. Avoid alcohol the night before.</li>
              <li><strong>Pace:</strong> Slow down by at least 30% compared to your lower-trail walking speed.</li>
              <li><strong>Know your limits:</strong> If you feel unwell at Khopra Ridge the morning of the hike, do not push to the lake.</li>
            </ul>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 5 */}
          <section id="terrain-conditions" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-955 tracking-tight">
              Trail Terrain and Route Conditions
            </h2>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Exposed Ridge Traverse Sections
            </h3>
            <p>
              The initial trail climbs through open mountain terrain with no tree cover. Wind is the primary challenge here. The path itself is generally clear across ridge traverse sections, but it follows the natural contour of the mountain.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Loose Scree and Rocky Footing
            </h3>
            <p>
              Mid-route scree fields are the most technically demanding sections of the trail. Loose stones and unstable rock surfaces require deliberate foot placement. <Link href="/planning/packing-checklist" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Trekking poles</Link> are essential here. Place them firmly with each step.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Snow and Ice Conditions During Winter Months
            </h3>
            <p>
              Between December and February, the upper sections of the trail above 4,000 metres are likely to carry snow. Ice can form on exposed rock faces and scree overnight. Winter trekking to Khayer Lake is a specialist undertaking.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 6 */}
          <section id="best-time" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Best Time to Trek from Khopra Ridge to Khayer Lake
            </h2>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Spring Season (March to May)
            </h3>
            <p>
              Spring is one of the two recommended windows for this hike. The rhododendron forests at lower altitudes are in full bloom along the approach trail, and snow on the upper route is clearing through April and May.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Autumn Season (September to November)
            </h3>
            <p>
              Autumn is the peak trekking season in the Annapurna region. Skies are stable. Visibility from the Khayer Lake basin can extend to Annapurna South, Dhaulagiri, and further across the Himalayan chain. October is the most popular month.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Winter and Monsoon Season Risks
            </h3>
            <p>
              Winter brings cold temperatures and snow. Monsoon (June through August) is demanding due to slippery mud, poor visibility, and leeches. However, the Janai Purnima pilgrimage festival takes place during the August full moon, drawing Hindu pilgrims up to the lake.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 7 */}
          <section id="sacred-importance" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Sacred Importance of Khayer Lake
            </h2>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Why Khayer Lake Is a Sacred Lake in Nepal
            </h3>
            <p>
              The lake is considered a manifestation of the goddess Baraha — a form of the divine mother in Hindu tradition. Local Magar communities have long regarded Khayer Lake as a place of spiritual power.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              The Significance of Khayer Baraha Temple
            </h3>
            <p>
              The <Link href="/planning/khayer-baraha-temple-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Khayer Baraha Temple</Link> stands at the lake's edge. It is a small stone structure, modest in appearance but immense in spiritual meaning. Trekkers are welcome to visit the temple area, but should behave respectfully: remove footwear near the shrine, speak quietly, and do not disturb offerings.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Annual Pilgrimage Festival at the Lake
            </h3>
            <p>
              The most spiritually significant time at Khayer Lake is the Janai Purnima festival, held on the full moon day in the Hindu month of Shrawan (typically late July or August). During this period, thousands of Hindu pilgrims make the journey to bathe in the sacred water and complete prayers.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 8 */}
          <section id="scenic-highlights" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-955 tracking-tight">
              Scenic Highlights and Mountain Views Along the Route
            </h2>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Massive Views of Annapurna South
            </h3>
            <p>
              Annapurna South (7,219 m) dominates the northern skyline as you climb toward the lake. Its dramatic west face towers above the trail in a way that feels almost vertical — a wall of rock and ice filling your entire field of vision.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Dhaulagiri Panorama from the Ridge
            </h3>
            <p>
              To the west, the Dhaulagiri massif (8,167 m) appears on the horizon as you gain altitude. On clear autumn mornings, the panoramic sweep represents one of the finest continuous Himalayan views accessible on a non-technical trekking route.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Photography Opportunities
            </h3>
            <p>
              The lake surface, when calm, offers reflections of surrounding peaks. Early morning light is ideal. Bring extra batteries, as cold temperatures drain them quickly at this altitude.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 9 */}
          <section id="packing-guide" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              What to Pack for the Khayer Lake Day Hike
            </h2>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Essential Clothing Layers
            </h3>
            <p>
              Pack a proper layering system: thermal base layers, fleece or down insulating mid-layer, windproof outer shell, warm trousers, gloves, a warm beanie, and sunglasses with UV protection.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Food, Snacks and Water Requirements
            </h3>
            <p>
              There are no shops or teahouses along the way. Carry 3 to 4 litres of water per person, energy-dense snacks (nuts, dried fruit, chocolate), and a packed lunch prepared by your lodge.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Trekking Gear You Should Carry
            </h3>
            <p>
              Trekking poles, a 20–30L daypack, a basic first aid kit, a headlamp, a camera or phone with protective case, and an emergency whistle. Download an offline sitemap before leaving the lodge.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 10 */}
          <section id="safety-tips" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Safety Tips Before Attempting the Khayer Lake Trek
            </h2>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Start Early to Avoid Afternoon Weather Changes
            </h3>
            <p>
              Cloud typically builds from mid-morning onwards at high altitude. Starting by 5:30 to 6:00 AM gives you the best chance of clear views and safe conditions on the return.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Know When to Turn Back
            </h3>
            <p>
              Turn back immediately if you or your companion experiences worsening headache, vomiting, loss of coordination, or severe shortness of breath. Descending is the primary treatment for AMS.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Limited Emergency Support on the Route
            </h3>
            <p>
              There are no medical facilities or teahouses on the route. Helicopter evacuation is possible but requires clear weather and phone signal lower down the trail. Trekking with a <Link href="/planning/do-you-need-a-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">local guide</Link> is strongly recommended for safety and communication support.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 11 */}
          <section id="is-it-worth-it" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Is Khayer Lake Worth Visiting During the Khopra Ridge Trek?
            </h2>
            <p>
              Every trekker who completes the Khopra Ridge Trek and includes the Khayer Lake day hike tells us the same thing: it was the best day. The combination of physical challenge, spiritual depth, scenic reward, and the intimacy of a trail without crowds creates an experience that is not replicable on any mainstream Annapurna trek.
            </p>
            <p>
              The climb to 4,660m is on a completely different scale compared to Poon Hill — more remote, more dramatic, and experienced in near-total solitude. If you have the fitness and have acclimatised properly, this lake is the reason the Khopra Ridge Trek exists as a circuit.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* FAQ Section */}
          <section id="faq-section" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-955 tracking-tight mb-8">
              Frequently Asked Questions (FAQ)
            </h2>
            <KhopraKhayerFaqInteractive faqs={faqs} />
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Conclusion */}
          <section id="conclusion" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Conclusion
            </h2>
            <p>
              The hike from Khopra Ridge to Sacred Khayer Lake is one of the most honest tests available on a trekking route in the Annapurna region. It asks something real of you — an early start, sustained effort, altitude management, and respect for mountain conditions. In return, it delivers something very few Nepal trekking routes can match.
            </p>
            <p>
              For trekkers asking whether to add this hike to their Khopra Ridge itinerary, our answer has not changed across years of guiding this route: if you are physically ready and properly acclimatised, do not miss it.
            </p>
          </section>
        </article>

        {/* Sub-Silo Navigation Bar */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-955">Explore More Trek Routes</h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 text-xs font-semibold text-stone-600">
            <Link href="/routes/chhistibung-to-khopra-ridge" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
              <span>Chhistibung to Khopra</span>
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
            <Link href="/routes/tadapani-to-bayeli-kharka" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
              <span>Tadapani to Bayeli</span>
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
              Our guides walk the Khopra-Khayer Lake trail monthly to monitor trail degradation, mudslide boundaries, and guest house sanitation standards.
            </p>
          </div>
        </div>

        {/* CTA Box */}
        <div className="mt-12 rounded-3xl bg-stone-955 p-8 sm:p-10 text-white border border-white/5 shadow-2xl relative overflow-hidden bg-stone-950">
          <div className="relative z-10">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-2">Annapurna Adventure Planning</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">Ready to hike to Sacred Khayer Lake?</h3>
            <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Our team arranges private transport, ACAP permits, certified local guides, and community lodge bookings across the full 9-day route. We walk this trail monthly and know it better than anyone.
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

      {/* Footer Operator Info */}
      <footer className="border-t border-stone-200 bg-stone-100 py-8 px-6 text-center text-xs text-stone-500">
        <p className="max-w-2xl mx-auto leading-relaxed">
          Khopra Ridge Trek — Nepal Tourism Operator License #8928-091 | info@khopraridgetrek.com | Pokhara &amp; Swanta, Nepal. 100% of community lodge profits fund Magar village schools, clinics, and local infrastructure.
        </p>
      </footer>
    </div>
  );
}
