import React from "react";
import Link from "next/link";
import WildlifeFaqInteractive from "./WildlifeFaqInteractive";

export const metadata = {
  alternates: {
    canonical: "/ecology/wildlife-khopra-trek",
  },
  title: "Wildlife of the Khopra Ridge Trail: Complete Guide to Animals, Birds & Himalayan Biodiversity",
  description: "Discover the wildlife of the Khopra Ridge Trail — from Himalayan Tahr and Musk Deer to the Danphe and Lammergeier. A trekker's field guide to animals, birds, and ecosystems in the Annapurna Conservation Area.",
};

export default function WildlifeKhopraTrekPage() {
  const stats = [
    { label: "Conservation Status", value: "Annapurna Conservation Area" },
    { label: "National Bird", value: "Danphe (Himalayan Monal)" },
    { label: "Primate Species", value: "Nepal Grey Langur" },
    { label: "High Altitude Ungulates", value: "Himalayan Tahr & Musk Deer" },
  ];

  const mammalProbability = [
    { likelihood: "Common", species: "Nepal Grey Langur, Himalayan Tahr", where: "Forest canopy, open ridgelines", color: "bg-emerald-100 text-emerald-800" },
    { likelihood: "Occasional", species: "Musk Deer, Himalayan Black Bear", where: "Bamboo and rhododendron belt", color: "bg-amber-100 text-amber-800" },
    { likelihood: "Extremely Rare", species: "Snow Leopard", where: "Higher conservation area terrain", color: "bg-stone-200 text-stone-700" },
  ];

  const faqs = [
    {
      question: "What wildlife can you see on the Khopra Ridge Trek?",
      answer: "Expect frequent sightings of Nepal Grey Langur and Himalayan Tahr, occasional encounters with Musk Deer or Himalayan Black Bear, and consistent birdwatching opportunities including the Himalayan Monal, Blood Pheasant, and Lammergeier."
    },
    {
      question: "Is Khopra Ridge good for birdwatching?",
      answer: "Yes. The altitude range from oak forest to alpine ridge supports a strong variety of species, and the Himalayan Monal in particular is reliably visible in the forest sections below Dobato during early morning hours."
    },
    {
      question: "Can you see snow leopards on Khopra Ridge?",
      answer: "A direct sighting is extremely unlikely. Snow leopards inhabit the higher, more arid zones of the wider Annapurna Conservation Area rather than the forested and ridge terrain of the Khopra trail itself."
    },
    {
      question: "What is the best time to see wildlife in the Annapurna region?",
      answer: "Spring (March–May) offers the strongest birdwatching due to breeding activity, while autumn (September–November) provides the best overall visibility and a slight edge for mammal sightings."
    },
    {
      question: "Which mammals are most common on the Khopra Ridge Trek?",
      answer: "The Nepal Grey Langur and Himalayan Tahr are the two most consistently sighted mammals, found in forest canopy and open ridge terrain respectively."
    },
    {
      question: "Is Khopra Ridge better than Poon Hill for wildlife spotting?",
      answer: "Generally, yes. Lower foot traffic on Khopra Ridge means animals are less habituated to fleeing from trekkers, which tends to produce more frequent and relaxed sightings than busier routes like Poon Hill."
    },
    {
      question: "How many bird species can be seen on the trek?",
      answer: "While a precise trail-specific count isn't formally published, the route's forest-to-alpine range supports a notably diverse mix, anchored by the Himalayan Monal, Blood Pheasant, and high-altitude raptors like the Lammergeier."
    },
    {
      question: "Where are the best wildlife spotting areas on the route?",
      answer: "Dobato's forest belt is the most consistently active zone for both mammals and birds, while Chhistibung's open ridge is the best spot for Himalayan Tahr and raptor sightings overhead."
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
            Wildlife of the Khopra Ridge Trail: Complete Guide to Animals, Birds &amp; Himalayan Biodiversity
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Discover the wildlife of the Khopra Ridge Trail — from Himalayan Tahr and Musk Deer to the Danphe and Lammergeier. A trekker's field guide to animals, birds, and ecosystems in the Annapurna Conservation Area.
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
            Most trekkers come to Khopra Ridge for the panorama — Annapurna South, Nilgiri, and Dhaulagiri rising over a community lodge circuit far quieter than Poon Hill or the Annapurna Base Camp trail. What surprises many of them is what happens between the viewpoints. The oak and bamboo forests around Dobato, the open pasture at Bayeli Kharka, and the ridgelines above Chhistibung sit inside the Annapurna Conservation Area, and that protection has kept the wildlife here genuinely intact.
          </p>
          <p>
            This is not a safari. We won't promise you a snow leopard around every bend, because that would be dishonest, and our reputation is built on accurate trail information, not hype. What we can offer is a realistic field guide: what animals and birds actually live along the Khopra Ridge Trail, where they tend to show up, and how the trek's altitude and seasons shape your chances of seeing them.
          </p>

          <hr className="my-10 border-stone-200" />

          {/* Section 1 */}
          <section id="ecosystem" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Khopra Ridge Ecosystem and Why Wildlife Thrives Here
            </h2>
            <p>
              Wildlife doesn't appear randomly on this trek — it follows the terrain. Understanding the ecosystem layers below is the fastest way to understand why certain animals turn up at certain points on the trail.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Annapurna Conservation Area and Protected Biodiversity
            </h3>
            <p>
              Khopra Ridge sits entirely inside the Annapurna Conservation Area, Nepal's largest protected area and one of the few conservation models in the world run primarily through local community management rather than top-down state control. Villages along the route, including Swanta and Ghorepani, manage lodges and forest use under conservation agreements rather than open exploitation.
            </p>
            <p>
              That structure matters more than it sounds. Lower hunting pressure and managed firewood collection have let forest cover regenerate over several decades, and that regeneration is the actual reason animal populations along this corridor have held steady while pressure has increased on more heavily trekked routes nearby.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Altitude Zones From Forest to Alpine Meadow
            </h3>
            <p>
              The trek moves through three distinct habitat bands, and each one supports a different set of species:
            </p>
            <ul className="space-y-3 pl-6 list-disc text-stone-700">
              <li>
                <strong>Subtropical to temperate forest (1,700–2,800m):</strong> Oak and rhododendron dominate around Ghandruk, Tadapani, and the lower approach to Dobato, with dense undergrowth that shelters ground-dwelling birds and forest mammals.
              </li>
              <li>
                <strong>Upper temperate and bamboo belt (2,800–3,400m):</strong> Thick bamboo understorey near Dobato and Bayeli Kharka, a habitat type that several Himalayan species depend on directly for food and cover.
              </li>
              <li>
                <strong>Subalpine and alpine zone (3,400m and above):</strong> The open ridgelines toward Chhistibung and Khopra Danda, and the meadows surrounding Khayer Lake, where tree cover thins into grassland and exposed rock.
              </li>
            </ul>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Why a Low-Traffic Route Supports Better Wildlife Visibility
            </h3>
            <p>
              Khopra Ridge sees a fraction of the daily foot traffic that Poon Hill or the Annapurna Base Camp trail absorbs in peak season. Less noise and fewer people moving through the forest in large groups mean animals are less conditioned to flee at the first sound of trekkers, which is part of why guides report more frequent and more relaxed sightings here than on the busier circuits.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 2 */}
          <section id="mammals" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Mammals of Khopra Ridge: Sightings Explained by Likelihood
            </h2>
            <p>
              We'd rather tell you the truth about your odds than oversell the trek. Here's how mammal sightings actually break down by frequency.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Common Sightings in Forest and Ridge Zones
            </h3>
            <p>
              The <strong>Nepal grey langur</strong> is the mammal you're most likely to encounter, often in troops moving through the canopy near Tadapani and Dobato, recognizable by its silver-grey coat and dark face. On the open ridges above Chhistibung and around Khopra Danda, the <strong>Himalayan Tahr</strong> is a regular sight, grazing on steep grassy slopes in small herds that are surprisingly tolerant of distant observers.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Occasional Forest Mammals
            </h3>
            <p>
              The <strong>Himalayan musk deer</strong> is far harder to spot. It favors dense bamboo and rhododendron understorey, moves mostly at dawn and dusk, and tends to freeze rather than flee when it senses people nearby, which means most trekkers walk past without noticing it at all. The <strong>Himalayan black bear</strong> turns up occasionally in the same forest belt, more often in early autumn when it's foraging heavily before winter, and almost always at a distance.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Extremely Rare Apex Predator Sightings
            </h3>
            <p>
              The <strong>snow leopard</strong> does inhabit parts of the wider Annapurna Conservation Area, but its preferred range sits in the higher, more arid trans-Himalayan terrain well above and beyond Khopra Ridge itself. A direct sighting on this specific trek would be exceptional rather than expected, and any guide who tells you otherwise is managing your expectations poorly, not your trek well.
            </p>

            {/* Table */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
              <div className="p-4 bg-stone-100 border-b border-stone-200 font-bold text-stone-900 text-sm">
                Mammal Sighting Probability Guide
              </div>
              <table className="min-w-full divide-y divide-stone-200 text-left text-sm">
                <thead className="bg-stone-50 text-stone-500 font-bold uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="px-6 py-3">Likelihood</th>
                    <th className="px-6 py-3">Species</th>
                    <th className="px-6 py-3">Where to Look</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-700">
                  {mammalProbability.map((row, i) => (
                    <tr key={i} className="hover:bg-stone-50/50">
                      <td className="px-6 py-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${row.color}`}>
                          {row.likelihood}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-bold text-stone-950">{row.species}</td>
                      <td className="px-6 py-4">{row.where}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 3 */}
          <section id="birdwatching" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Birdwatching on the Khopra Ridge Trail
            </h2>
            <p>
              If mammal sightings come down to luck, birdwatching on Khopra Ridge is closer to a sure thing. The altitude range and forest diversity here put it among the better birding stretches in the wider Annapurna region.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Himalayan Monal: The Signature Bird of the Region
            </h3>
            <p>
              Nepal's national bird, locally called the <strong>Danphe</strong> (Himalayan Monal), is also the most photographed animal on this trek. Males display an almost metallic blue-green and copper plumage that catches light dramatically against dark forest, and they're most active and visible in early morning around the oak-rhododendron belt below Dobato.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Pheasants of the Annapurna Region
            </h3>
            <p>
              The <strong>Blood Pheasant</strong> occupies higher ground than the Monal, favoring rhododendron and bamboo thickets close to the treeline near Bayeli Kharka and Chhistibung. Its grey body and crimson-flecked throat make it distinctive once you know what to look for, even though it tends to stay low in cover.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              High-Altitude Raptors and Scavengers
            </h3>
            <p>
              Above the treeline, keep your eyes on the ridgelines rather than the ground. The <strong>Lammergeier</strong>, or bearded vulture, rides thermals along the cliffs near Khopra Danda and Khayer Lake, often visible as a distant silhouette gliding for long stretches without a single wingbeat.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Best Birdwatching Times and Trail Behavior
            </h3>
            <p>
              Bird activity peaks in the first two hours after sunrise and again in the late afternoon, which lines up conveniently with when most trekking groups are walking the quieter forest stretches anyway. Slowing your pace and keeping conversation low through the Dobato forest section will noticeably improve what you see and hear.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 4 */}
          <section id="hotspots" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Wildlife Hotspots Along the Khopra Ridge Route
            </h2>
            <p>
              Wildlife isn't evenly distributed across the trek — it clusters at specific points where habitat and trail intersect.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 mt-6">
              <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-2">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Forest Zone</span>
                <h3 className="text-lg font-bold text-stone-950">Dobato</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  The thick oak, rhododendron, and bamboo forest around Dobato is the most consistently active wildlife stretch on the route, with langur troops, forest birds, and occasional musk deer activity all concentrated here.
                </p>
              </div>

              <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-2">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Transition Ecosystem</span>
                <h3 className="text-lg font-bold text-stone-950">Bayeli Kharka</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  As forest opens into pasture at Bayeli Kharka, mammal movement becomes easier to spot across open ground, and this is a reliable stretch for Himalayan Tahr at a distance.
                </p>
              </div>

              <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-2">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Alpine Ridge Corridor</span>
                <h3 className="text-lg font-bold text-stone-950">Chhistibung</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  The exposed ridge near Chhistibung is prime raptor-watching territory, with Tahr sightings on the surrounding slopes and Lammergeier frequently visible overhead.
                </p>
              </div>

              <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-2">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">High-Altitude Sanctuary</span>
                <h3 className="text-lg font-bold text-stone-950">Khayer Lake Region</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  The alpine meadows around the sacred lake sit at the upper edge of regular wildlife activity, where sightings thin out but the species present are the most ecologically distinctive of the route.
                </p>
              </div>
            </div>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 5 */}
          <section id="seasons" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Seasonal Wildlife Guide: When to See What
            </h2>
            <p>
              Timing your trek changes what you'll see almost as much as where you walk.
            </p>

            <div className="space-y-4">
              <div className="p-5 bg-white border border-stone-200/80 rounded-2xl">
                <h3 className="text-base font-bold text-stone-950">Spring (March–May): Biodiversity Peak Season</h3>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                  Spring is the strongest season for birdwatching, coinciding with breeding activity and rhododendron bloom that draws insect life and, in turn, birds. Mammal movement also increases as forage becomes more available.
                </p>
              </div>

              <div className="p-5 bg-white border border-stone-200/80 rounded-2xl">
                <h3 className="text-base font-bold text-stone-950">Autumn (September–November): Best Overall Visibility</h3>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                  Clear post-monsoon skies and crisp visibility make autumn the most popular trekking season, and animals are actively foraging before winter, which slightly raises the odds of mammal sightings near Dobato.
                </p>
              </div>

              <div className="p-5 bg-white border border-stone-200/80 rounded-2xl">
                <h3 className="text-base font-bold text-stone-950">Winter (December–February): Reduced Sightings, Clearer Signs</h3>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                  Direct sightings drop in winter, but snow on the upper trail makes tracks easier to read, and guides often point out fresh prints from Tahr or musk deer that would otherwise go unnoticed.
                </p>
              </div>

              <div className="p-5 bg-white border border-stone-200/80 rounded-2xl">
                <h3 className="text-base font-bold text-stone-950">Monsoon (June–August): Limited Visibility</h3>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                  Dense vegetation and heavy cloud cover make this the weakest season for wildlife viewing, and we generally don't recommend it for trekkers prioritizing sightings over solitude.
                </p>
              </div>
            </div>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 6 */}
          <section id="photography" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Wildlife Photography on Khopra Ridge
            </h2>
            <p>
              A few practical habits make a real difference to the photos you bring home from this trek.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Best Light Conditions for Wildlife Photography
            </h3>
            <p>
              Early morning mist filtering through the Dobato forest produces the most atmospheric light for both birds and mammals, while late-afternoon golden hour on the open ridges near Chhistibung suits raptor and landscape-wildlife shots.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Ethical Wildlife Photography Practices
            </h3>
            <p>
              Keep distance, avoid baiting or approaching animals for a better angle, and never use flash on Monal or pheasants at close range — the goal is a photo that doesn't change the animal's behavior.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Recommended Gear for Himalayan Wildlife Tracking
            </h3>
            <p>
              A telephoto lens in the 200–400mm range covers most bird and distant mammal shots, and a compact pair of binoculars is genuinely more useful than a camera for actually spotting wildlife before you decide whether it's worth photographing.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 7 */}
          <section id="conservation" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Conservation and Wildlife Protection in the Annapurna Region
            </h2>
            <p>
              The Annapurna Conservation Area Project (ACAP) funds habitat protection directly through tourism revenue and conservation fees, which is part of why this corridor has maintained healthier wildlife populations than many comparable Himalayan regions without similar protection.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Human-Wildlife Coexistence Along the Trail
            </h3>
            <p>
              Villages here have shifted toward conservation-linked livelihoods — lodge ownership, guiding, and permit-funded community projects — which reduces the pressure that hunting and unmanaged grazing once placed on local wildlife.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Threats to Himalayan Biodiversity in the Area
            </h3>
            <p>
              Climate change is shifting vegetation zones upward, gradually compressing the alpine habitat that species like musk deer and high-altitude pheasants depend on, while increasing trekker numbers on nearby routes add indirect pressure even where Khopra itself remains relatively quiet.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 8 */}
          <section id="endangered" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Rare and Endangered Wildlife of the Region
            </h2>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Snow Leopard Conservation Status in Annapurna
            </h3>
            <p>
              The snow leopard remains a conservation priority species across the Annapurna Conservation Area, with population monitoring concentrated in the higher trans-Himalayan zones rather than the Khopra corridor itself.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Musk Deer Protection Concerns
            </h3>
            <p>
              Musk deer face ongoing poaching pressure elsewhere in the Himalayas due to demand for musk pods, which makes the relatively stable population within this protected corridor an important regional safeguard.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Why Preserving This Biodiversity Corridor Matters
            </h3>
            <p>
              Khopra Ridge functions as a habitat link between lower forest zones and higher alpine terrain, and keeping that corridor intact matters for species that move seasonally between elevations rather than staying fixed in one zone.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 9: FAQ */}
          <section id="faq-section" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight mb-8">
              Frequently Asked Questions (FAQ)
            </h2>
            <WildlifeFaqInteractive faqs={faqs} />
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 10: Conclusion */}
          <section id="conclusion" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Conclusion
            </h2>
            <p>
              Khopra Ridge isn't a wildlife park, and we won't pretend it is. What it offers instead is something more honest: a working Himalayan ecosystem where langur troops still move through old oak forest, a Danphe still displays in the early light, and a Lammergeier still rides the thermals over Chhistibung the way it has for generations. Trekking here with that understanding — patient, quiet, and realistic about the odds — is what turns a scenic walk into a genuine wildlife experience.
            </p>
            <p>
              If you'd like a guide who knows exactly where to slow down and where to look, that's the difference our locally licensed guides bring to this route every season.
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
            <Link href="/ecology/birds-of-annapurna" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
              <span>Birds of Annapurna</span>
              <span>→</span>
            </Link>
            <Link href="/ecology/flora-of-khopra" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
              <span>Flora of Khopra</span>
              <span>→</span>
            </Link>
            <Link href="/ecology/red-pandas-on-khopra" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
              <span>Red Pandas on Khopra</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🦅</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">First-Hand Expert Insight</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              This guide is maintained and reviewed by our licensed local trekking guides operating out of Pokhara and Kathmandu. We regularly update wildlife sighting patterns, seasonal advisories, and trail biodiversity reports based on active trail checks.
            </p>
          </div>
        </div>

        {/* CTA Box */}
        <div className="mt-12 rounded-3xl bg-emerald-950 p-8 sm:p-10 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-2">Himalayan Wildlife Trek</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">Ready to Experience the Wildlife of Khopra Ridge?</h3>
            <p className="mt-4 text-emerald-100/80 text-sm sm:text-base leading-relaxed max-w-2xl">
              Inquire about our 9-day all-inclusive Khopra Ridge trek and let our Pokhara-based guides show you where the forest comes alive. Skip the crowded paths and explore the community lodge circuit to sacred Khayer Lake.
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
          <div className="absolute right-0 bottom-0 opacity-10 text-9xl font-black select-none pointer-events-none translate-x-12 translate-y-12">
            ACAP
          </div>
        </div>

      </main>
    </div>
  );
}
