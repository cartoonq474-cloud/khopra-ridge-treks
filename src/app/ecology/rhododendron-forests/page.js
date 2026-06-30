import React from "react";
import Link from "next/link";
import RhododendronFaqInteractive from "./RhododendronFaqInteractive";

export const metadata = {
  title: "Rhododendron Forests of Annapurna: Spring Blooms and Trekking Routes Guide",
  description: "Discover the Rhododendron Forests of Annapurna in full spring bloom. Compare the Ghorepani, Tadapani, and Khopra Ridge trails to find the best route and timing.",
};

export default function RhododendronForestsPage() {
  const stats = [
    { label: "Peak Blooming Season", value: "March to April" },
    { label: "National Flower", value: "Lali Gurans (R. arboreum)" },
    { label: "Habitat Elevation", value: "2,000m to 3,200m" },
    { label: "Protected Area", value: "Annapurna Conservation Area" },
  ];

  const routeComparison = [
    {
      route: "Ghorepani / Poon Hill",
      bloom: "Very high, most continuous",
      crowds: "High, especially March–April",
      views: "Excellent — Dhaulagiri, Annapurna South",
      color: "bg-emerald-50 border-emerald-200 text-emerald-900"
    },
    {
      route: "Tadapani",
      bloom: "Very high, most immersive canopy",
      crowds: "Moderate",
      views: "Good, more limited by forest cover",
      color: "bg-amber-50 border-amber-200 text-amber-900"
    },
    {
      route: "Khopra Ridge",
      bloom: "High, includes upper-altitude species",
      crowds: "Low",
      views: "Excellent — wider panoramic range",
      color: "bg-stone-50 border-stone-200 text-stone-900"
    }
  ];

  const faqs = [
    {
      question: "When is the best time to see rhododendron forests in Annapurna?",
      answer: "Late March through mid-April is the most reliable window, with lower-elevation forests peaking earlier in March and higher sections near Khopra Ridge following two to three weeks later."
    },
    {
      question: "Which Annapurna trek has the most rhododendron forests?",
      answer: "Ghorepani and Tadapani both offer the densest, most continuous rhododendron cover at lower-to-mid elevations, while Khopra Ridge adds higher-altitude species the other two routes don't reach."
    },
    {
      question: "Is Ghorepani better than Khopra Ridge for rhododendron viewing?",
      answer: "Ghorepani offers denser lower-elevation bloom and easier access in a shorter trek, while Khopra Ridge offers comparable density with far fewer trekkers and a wider elevation range of bloom."
    },
    {
      question: "Do rhododendrons bloom above 3,000 meters in Nepal?",
      answer: "Yes. Above roughly 3,000m, lower-elevation species like Rhododendron arboreum give way to smaller-flowered, cold-tolerant species such as Rhododendron campanulatum, which bloom slightly later in the season."
    },
    {
      question: "Can beginners trek rhododendron trails in Annapurna?",
      answer: "Ghorepani and Tadapani are both manageable for beginners with reasonable fitness. Khopra Ridge involves more elevation gain and longer days, and is better suited to trekkers with prior multi-day hiking experience."
    },
    {
      question: "How long does the rhododendron blooming season last?",
      answer: "The overall season runs roughly eight weeks, from early March to late April, though any single elevation band typically stays in peak bloom for only two to three weeks within that window."
    },
    {
      question: "What colors of rhododendrons are found in Annapurna?",
      answer: "Lower and mid-elevation forests are dominated by the deep red Rhododendron arboreum, while higher-altitude sections shift toward pink, purple, and white-flowered species."
    },
    {
      question: "Are rhododendron forests in Annapurna part of a protected area?",
      answer: "Yes. Most of the rhododendron forest trekkers encounter on these routes lies within the Annapurna Conservation Area, Nepal's largest protected area."
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
            <Link href="/ecology/annapurna-conservation-area-guide" className="hover:underline">Ecology Silo</Link>
          </div>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Rhododendron Forests of Annapurna: Spring Blooms and Trekking Routes Guide
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Discover the Rhododendron Forests of Annapurna in full spring bloom. Compare the Ghorepani, Tadapani, and Khopra Ridge trails to find the best route and timing.
          </p>
        </header>

        {/* Quick Stats Grid */}
        <section aria-label="Quick Stats" className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
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
            Every March, something changes in the hills below the Annapurna massif. The dull, dry-season brown of the mid-hill forests gives way almost overnight to a wall of red, pink, and white blossoms that stretches for kilometers along the trail. These are the rhododendron forests of Annapurna, and for a few short weeks each spring, they turn ordinary trekking routes into one of the most photographed landscapes in the Himalayas.
          </p>
          <p>
            This guide is built around the questions trekkers actually ask us at the trailhead: where exactly these forests grow, when the bloom peaks, and which route — Ghorepani, Tadapani, or Khopra Ridge — gives the best experience for the time they have. We've walked these trails every season for years, and what follows is a route-by-route breakdown rather than a generic description of pretty flowers.
          </p>

          <hr className="my-10 border-stone-200" />

          {/* Section 1 */}
          <section id="location" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Where Are the Rhododendron Forests of Annapurna Located?
            </h2>
            
            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Annapurna Conservation Area and rhododendron distribution
            </h3>
            <p>
              Almost all of the rhododendron forest cover trekkers see in this region sits inside the Annapurna Conservation Area (ACA), Nepal's largest protected area and one of the most biodiverse stretches of the Himalayas. The ACA was established specifically to balance trekking tourism with forest and wildlife protection, and the rhododendron belt is one of its defining habitats.
            </p>
            <p>
              Within the ACA, the densest rhododendron cover runs through the foothill corridor connecting Ghandruk, Tadapani, Ghorepani, and the Khopra ridge line. This is the same general trail network used for the Poon Hill and Khopra Ridge treks, which is part of why rhododendron viewing and trekking planning are so closely linked.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Altitude range of rhododendron forests (2,000m–3,200m)
            </h3>
            <p>
              Rhododendron forest in Annapurna grows in a fairly specific elevation band, roughly between 2,000 and 3,200 meters. Below that range, the forest is dominated by chestnut, alder, and lower broadleaf species; above it, rhododendron gives way to birch, juniper, and eventually open alpine scrub.
            </p>
            <p>
              This band matters for trip planning. Most teahouse villages on the popular routes — Banthanti, Deurali, Ghorepani, Tadapani — sit right inside this elevation range, which is why trekkers walk through hours of continuous bloom rather than a single isolated patch of trees.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Forest composition beyond rhododendrons
            </h3>
            <p>
              Rhododendron rarely grows in isolation. Across this belt it shares the canopy with oak species, particularly <em>Quercus semecarpifolia</em>, along with magnolia, maple, and dense fern undergrowth that stays green well into the dry months.
            </p>
            <p>
              This mixed composition is part of what makes the spring transformation so dramatic. The surrounding oak and fern layer stays a deep, constant green, which makes the red and pink rhododendron blossoms stand out even more sharply against the forest backdrop.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 2 */}
          <section id="timing" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              When Do Rhododendrons Bloom in Annapurna?
            </h2>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Peak blooming season (March to April)
            </h3>
            <p>
              The rhododendron bloom in Annapurna runs from early March through late April, with the most intense and reliable flowering typically falling in the back half of March into early April. This is the single most useful piece of timing information for anyone planning a trip specifically for the flowers.
            </p>
            <p>
              If your dates are flexible, aim for the last week of March. By that point, lower and mid-elevation forests are usually in full bloom, while higher sections are just beginning to open, giving you bloom coverage across a wider elevation range during a single trek.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              How altitude affects blooming time
            </h3>
            <p>
              Bloom timing isn't uniform across the elevation band — it moves upward as spring progresses. Forests around 2,000–2,400m (closer to Ghandruk and Tadapani) typically bloom first, often in early to mid-March, while the higher sections near Khopra Ridge and Muldai, closer to 3,000m, peak two to three weeks later.
            </p>
            <p>
              This staggered pattern is useful to know if you're trekking later in April. Even if lower forests have started dropping petals, higher trails often still have fresh blooms, so a route with more elevation gain can extend your bloom-viewing window.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Weather conditions during rhododendron season
            </h3>
            <p>
              Spring in this part of Annapurna brings clearer mornings and increasingly hazy or cloud-prone afternoons as the season progresses toward the pre-monsoon buildup in April. Mornings are almost always your best window for both visibility of the Annapurna and Dhaulagiri ranges and for photographing the forest itself.
            </p>
            <p>
              Afternoon cloud cover is common but rarely disruptive to walking; it mainly affects long-distance mountain views from viewpoints like Poon Hill. Light rain showers become slightly more frequent toward late April, so trekkers prioritizing dry trail conditions generally do better sticking to March.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 3 */}
          <section id="routes" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Best Trekking Routes to See Rhododendron Forests in Annapurna
            </h2>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Ghorepani Poon Hill Trek (densest rhododendron forest)
            </h3>
            <p>
              The Ghorepani route is the single most reliable place to see continuous rhododendron forest in Annapurna, and it's the reason most people associate this trek with the flower season at all. The trail between Ghandruk and Ghorepani — and the short climb up to Poon Hill itself — passes through some of the thickest rhododendron canopy in the region.
            </p>
            <p>
              This is also the most accessible option for trekkers with limited time, since the full circuit can be completed in four to five days. The trade-off is that it's the most popular trekking route in Annapurna during March and April, so expect shared trail sections and busier teahouses, especially around the Poon Hill sunrise viewpoint.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Tadapani Forest Trail (immersive canopy walk)
            </h3>
            <p>
              The stretch of trail leading into and out of Tadapani is widely considered the most immersive single forest section in the region. Rather than walking past occasional rhododendron stands, you walk directly underneath a near-continuous canopy where the trail itself is often carpeted with fallen blossoms during peak bloom.
            </p>
            <p>
              Tadapani connects naturally with both the Ghorepani and Khopra Ridge routes, making it a useful link for trekkers who want a longer itinerary that samples more than one trail rather than choosing a single short loop.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Khopra Ridge Trek (quiet rhododendron wilderness)
            </h3>
            <p>
              Khopra Ridge offers a different version of the same experience: forest sections that are just as dense as Ghorepani's, but with a fraction of the foot traffic. Because this route runs through community-managed lodges in villages like Swanta and Chistibung rather than the larger commercial teahouse circuit, it tends to attract trekkers looking for a quieter, slower-paced version of the rhododendron season.
            </p>
            <p>
              The higher elevation of this trek — reaching toward Khopra Danda above 3,600m — also means it captures more of the upper rhododendron band, including the smaller-flowered, high-altitude species that bloom slightly later than the lower forests near Ghorepani.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Lesser-known Annapurna forest trails
            </h3>
            <p>
              Beyond the three main routes, several connecting trails around Bayeli Kharka and the approach toward Mohare Danda see significant rhododendron cover with very little trekking traffic. These sections are typically walked as part of a longer Khopra Ridge itinerary rather than as standalone treks.
            </p>
            <p>
              For trekkers who have already done Ghorepani or Poon Hill and want a different angle on the same bloom season, these offbeat sections are worth building into a custom itinerary.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 4 */}
          <section id="comparison" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Route Comparison — Which Trek Has the Best Rhododendron Experience?
            </h2>
            <p>
              Choosing between routes usually comes down to three factors: how dense and reliable the bloom is, how many other trekkers you'll share the trail with, and how much mountain scenery you get alongside the forest.
            </p>

            {/* Route Comparison Grid */}
            <div className="mt-8 space-y-4">
              {routeComparison.map((r, i) => (
                <div key={i} className={`p-6 rounded-3xl border shadow-sm ${r.color}`}>
                  <h3 className="text-lg font-bold text-stone-950 mb-4">{r.route}</h3>
                  <div className="grid gap-4 sm:grid-cols-3 text-sm">
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-400">Bloom Density</span>
                      <span className="font-semibold text-stone-850 mt-1 block">{r.bloom}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-400">Crowd Level</span>
                      <span className="font-semibold text-stone-850 mt-1 block">{r.crowds}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-400">Himalayan Views</span>
                      <span className="font-semibold text-stone-850 mt-1 block">{r.views}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-stone-900 mt-8">
              Bloom density comparison across routes
            </h3>
            <p>
              Ghorepani and Tadapani both offer the densest, most continuous lower-to-mid elevation rhododendron cover, with Tadapani's trail sections feeling slightly more enclosed by canopy. Khopra Ridge matches this density at lower elevations and adds higher-altitude rhododendron species that the other two routes don't reach.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Crowd levels and trekking atmosphere
            </h3>
            <p>
              This is where the routes diverge most. Ghorepani sees the heaviest trekking traffic of any route in this comparison, particularly around the Poon Hill sunrise climb. Khopra Ridge sits at the opposite end, with a noticeably quieter trail and a community-lodge system that keeps group sizes smaller by design.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Scenic experience and Himalayan views
            </h3>
            <p>
              Ghorepani and Khopra Ridge both deliver strong, wide-angle mountain views — Dhaulagiri and Annapurna South from Poon Hill, and a broader panoramic sweep from Khopra Danda. Tadapani's views are real but more occasional, since the trail spends more time directly inside forest cover.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 5 */}
          <section id="ecology" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Himalayan Rhododendron Forest Ecology
            </h2>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Rhododendron arboreum (Lali Gurans) — Nepal's national flower
            </h3>
            <p>
              The species responsible for most of the deep red color across these forests is <em>Rhododendron arboreum</em>, known locally as Lali Gurans and recognized as Nepal's national flower. It typically dominates the lower and middle sections of the bloom belt, between roughly 2,000 and 2,800 meters.
            </p>
            <p>
              Higher up the slope, particularly above 3,000m near Khopra Ridge, the forest shifts toward smaller-flowered species such as <em>Rhododendron campanulatum</em>, which blooms in softer purples and whites rather than the saturated red of Lali Gurans lower down. This altitude-based color shift is one of the more interesting details trekkers often miss.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Role in Himalayan biodiversity system
            </h3>
            <p>
              These forests aren't just scenic — they're a working part of the Annapurna region's biodiversity. Rhododendron canopy provides nesting habitat for several Himalayan bird species, and the understory supports a range of small mammals and pollinating insects that depend on the spring bloom for an early-season food source.
            </p>
            <p>
              The ACA's protected status has helped keep this habitat largely intact compared to similar elevation bands outside conservation areas in Nepal, where forest clearing for agriculture has reduced rhododendron cover significantly.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Forest zone classification in Annapurna
            </h3>
            <p>
              Ecologically, this belt falls within what's classified as Himalayan subalpine and temperate broadleaf forest, sitting between the lower subtropical forests near the valley floors and the alpine zone above the treeline. Rhododendron-oak association is the dominant forest type through most of this range, which is why oak and rhododendron consistently appear together on these trails.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 6 */}
          <section id="experience" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              What It Feels Like to Trek Through Rhododendron Forests
            </h2>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Spring forest atmosphere and colors
            </h3>
            <p>
              Walking through peak bloom is a genuinely different experience from trekking the same trail in autumn or winter. The trail itself is often littered with fallen petals, the canopy filters light into shifting patches of red and green, and entire hillsides visible from ridge sections appear streaked with color rather than uniform forest green.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Wildlife and natural soundscape
            </h3>
            <p>
              Spring bloom season also tends to be noticeably louder in a good way — bird activity increases as species feed on nectar and insects drawn to the flowers. It's common to hear (and occasionally spot) Himalayan monal, Nepal's national bird, moving through rhododendron stands during this season.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Village-to-forest trekking transition
            </h3>
            <p>
              Part of what makes these routes memorable is the contrast between forest sections and the Gurung and Magar villages along the way. Trails regularly shift from dense rhododendron canopy directly into open village terraces, then back into forest again, giving the trek a rhythm that's as much about the villages as the trees.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 7 */}
          <section id="photography" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Photography Guide for Rhododendron Blooms in Annapurna
            </h2>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Best lighting conditions (morning vs afternoon)
            </h3>
            <p>
              Early morning light, generally between sunrise and about 9 a.m., gives the cleanest results for rhododendron photography. The soft, low-angle light brings out color contrast in the blossoms without the harsh shadows that build up by midday, and it's also your best window for clear mountain backdrops before afternoon haze sets in.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Composition tips with Himalayan peaks
            </h3>
            <p>
              The strongest images from this season usually combine a foreground of rhododendron blossoms with a snow-capped backdrop — Dhaulagiri from the Poon Hill side, or the wider Annapurna range from Khopra Danda. Shooting from slightly below a flowering branch, with the peaks framed behind it, tends to work better than wide shots of the forest alone.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Avoiding crowd interference in popular routes
            </h3>
            <p>
              On Ghorepani and Poon Hill specifically, the sunrise viewpoint gets crowded quickly during peak season. Arriving 20–30 minutes earlier than the main group, or photographing forest sections lower on the trail rather than only at the viewpoint itself, usually gives clean compositions without other trekkers in frame.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 8 */}
          <section id="planning" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Planning Your Rhododendron Trek in Annapurna
            </h2>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Best months to plan your trek
            </h3>
            <p>
              For the most reliable bloom across the widest elevation range, late March through mid-April is the sweet spot. Early March can still be early for higher-elevation sections, while late April risks lower forests having already dropped most of their blossoms.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Difficulty levels across rhododendron routes
            </h3>
            <p>
              Ghorepani and Tadapani are both considered moderate treks, suitable for trekkers with reasonable fitness and some hill-walking experience, with daily walking times generally in the four-to-six-hour range. Khopra Ridge is a step up in difficulty, given the higher elevation and longer daily stages, and is better suited to trekkers with some prior multi-day trekking experience.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Crowd expectations and seasonal flow
            </h3>
            <p>
              Late March into early April is peak season on Ghorepani specifically, with teahouses booking up days in advance. Khopra Ridge stays comparatively quiet even during this window, which is worth factoring in if trail crowding would affect your experience more than route popularity does.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 9: FAQ */}
          <section id="faq-section" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight mb-8">
              Frequently Asked Questions (FAQ)
            </h2>
            <RhododendronFaqInteractive faqs={faqs} />
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 10: Conclusion */}
          <section id="conclusion" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Conclusion
            </h2>
            <p>
              Annapurna's rhododendron forests aren't a single destination — they're a moving, elevation-dependent bloom that shifts from village to village as spring progresses. Whether that means the dense, accessible canopy of Ghorepani, the immersive forest walk into Tadapani, or the quieter, higher-altitude bloom along Khopra Ridge, the right route really depends on how much company and how much elevation you're after. Timing your trek for late March to mid-April gives you the best odds of catching multiple elevation bands in bloom on a single trip.
            </p>
          </section>
        </article>

        {/* Sub-Silo Navigation Bar */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Explore More Ecology Resources</h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 text-xs font-semibold text-stone-600">
            <Link href="/ecology/annapurna-conservation-area-guide" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
              <span>ACA Conservation Guide</span>
              <span>→</span>
            </Link>
            <Link href="/ecology/wildlife-khopra-trek" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
              <span>Wildlife Guide</span>
              <span>→</span>
            </Link>
            <Link href="/ecology/birds-of-annapurna" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
              <span>Birds of Annapurna</span>
              <span>→</span>
            </Link>
            <Link href="/ecology/flora-of-khopra" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
              <span>Flora of Khopra</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🌸</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">First-Hand Expert Insight</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              This guide is maintained and reviewed by our licensed local trekking guides operating out of Pokhara and Kathmandu. We monitor spring precipitation, local trail vegetation adjustments, and community lodge capacities directly from active checks in the Annapurna Conservation Area.
            </p>
          </div>
        </div>

        {/* CTA Box */}
        <div className="mt-12 rounded-3xl bg-emerald-950 p-8 sm:p-10 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-2">Spring Bloom Trek</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">Plan Your Spring Rhododendron Journey</h3>
            <p className="mt-4 text-emerald-100/80 text-sm sm:text-base leading-relaxed max-w-2xl">
              If you'd like help matching your dates and fitness level to the right rhododendron route, our local guides in Pokhara can put together a custom Khopra Ridge or Ghorepani itinerary built around this season's bloom timing — inquire with us to start planning your spring trek.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/#book"
                className="rounded-full bg-emerald-600 px-8 py-3.5 text-sm font-bold text-white hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-950/40"
              >
                Inquire &amp; Customize Itinerary →
              </Link>
              <Link
                href="/#itinerary"
                className="rounded-full bg-emerald-900/60 px-8 py-3.5 text-sm font-bold text-emerald-200 hover:bg-emerald-900 transition-all border border-emerald-700/50"
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
