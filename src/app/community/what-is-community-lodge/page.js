import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Community Lodge vs Teahouse: Which Nepal Trekking Accommodation Is Better?",
  description: "Community lodge vs teahouse: compare ownership, cost, food, and sustainability to choose the right Nepal trekking accommodation — and see how Khopra Ridge does it differently.",
};

export default function Page() {
  const summarySpecs = [
    { label: "Ownership", value: "Collective vs Private" },
    { label: "Profit Destination", value: "Village Reinvested" },
    { label: "Food Focus", value: "Local Organic Sourcing" },
    { label: "Best For", value: "Sustainable Travelers" }
  ];

  const comparisonData = [
    {
      feature: "Ownership Structure",
      community: "Collective village ownership, run by a community committee",
      teahouse: "Private family or individual guesthouse business owner"
    },
    {
      feature: "Profit Destination",
      community: "Reinvested into schools, clinics, and village infrastructure",
      teahouse: "Kept as private income for the owner"
    },
    {
      feature: "Staffing",
      community: "Locally hired, often rotated across households",
      teahouse: "Hired by the owning family, sometimes outside staff"
    },
    {
      feature: "Food Sourcing",
      community: "Local organic farms, village-grown produce and yak cheese",
      teahouse: "Mix of local produce and packaged goods trucked or flown in"
    },
    {
      feature: "Pricing",
      community: "Generally fixed, set by the committee",
      teahouse: "Varies by owner and route demand"
    },
    {
      feature: "Decision-making",
      community: "Committee-based, transparent to the village",
      teahouse: "Owner-controlled"
    }
  ];

  const faqItems = [
    {
      q: "What is a community lodge in Nepal trekking?",
      a: "A community lodge is a trekking guesthouse collectively owned by a village rather than a single family or business owner. A local committee manages staffing, pricing, and maintenance, and profits are reinvested into village needs like schools, health posts, and infrastructure."
    },
    {
      q: "How is a community lodge different from a teahouse?",
      a: "The core difference is ownership and where profit goes. A teahouse is privately owned, with profit kept by the owning family. A community lodge is collectively owned, with profit reinvested into the wider village rather than one household."
    },
    {
      q: "Are community lodges cheaper than teahouses?",
      a: "Not necessarily. Pricing for both models is generally similar on the same trail, since they compete for the same trekkers. The real difference isn't usually the price you pay — it's how that money is used afterward."
    },
    {
      q: "What facilities do community lodges provide?",
      a: "Most community lodges offer twin-sharing rooms, shared bathrooms, a communal dining and heating area, and basic charging or WiFi access — broadly similar to standard teahouse facilities, though quality varies by specific lodge."
    },
    {
      q: "What is teahouse trekking in Nepal?",
      a: "Teahouse trekking refers to the traditional system of staying in privately owned guesthouses along Nepal's trekking routes, where trekkers move from village to village finding lodging and meals without needing to camp or carry their own food."
    },
    {
      q: "How do community lodges support local communities?",
      a: "Community lodge income is typically reinvested directly into the village through teacher salary support, funding for health posts and visiting clinics, trail and infrastructure maintenance, and sometimes shared internet access for the whole community."
    },
    {
      q: "Which trekking routes in Nepal use community lodges?",
      a: "The Khopra Ridge Trek is one of the clearest examples, with community lodges operating in villages including Swanta and Nangi. Mohare Danda, in the same general region, follows a similar model."
    },
    {
      q: "Are community lodges comfortable for beginners?",
      a: "Generally, yes. Comfort levels are broadly comparable to standard teahouses — twin rooms, shared facilities, and a communal evening space — so first-time trekkers shouldn't expect a noticeably rougher experience."
    },
    {
      q: "Is community-based trekking better for sustainable tourism?",
      a: "For travelers focused on sustainability, community-based trekking tends to perform better on environmental sourcing and economic impact, since it reduces transport-heavy supply chains and keeps tourism income circulating within the village rather than leaving it."
    },
    {
      q: "Which accommodation option is better for first-time trekkers?",
      a: "Either works well for a first trek. Teahouses offer slightly more route flexibility simply due to their wider availability, while community lodges offer a chance to see, firsthand, how trekking tourism can directly fund local schools and clinics."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            🏡 Community Lodge &amp; Eco-Lodging
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl font-sans">
            Community Lodge vs Teahouse
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Understanding Nepal's two trekking accommodation models: ownership, costs, facilities, sustainability, and how your spending impacts local mountain villages.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl">
            {summarySpecs.map((spec, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
                <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">{spec.label}</span>
                <span className="text-lg sm:text-xl md:text-2xl font-black text-emerald-400 mt-1 block">{spec.value}</span>
              </div>
            ))}
          </div>
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
              <a href="#overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                1. Overview &amp; Comparison
              </a>
              <a href="#what-is-community" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                2. What is a Community Lodge?
              </a>
              <a href="#where-found" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                3. Where Are They Found?
              </a>
              <a href="#what-is-teahouse" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                4. What is a Teahouse?
              </a>
              <a href="#core-differences" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                5. Core Differences
              </a>
              <a href="#sustainability" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                6. Sustainability Index
              </a>
              <a href="#economic-impact" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                7. Village Economic Impact
              </a>
              <a href="#trekker-experience" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                8. Trekker Experience
              </a>
              <a href="#trekker-match" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                9. Traveler Matching
              </a>
              <a href="#khopra-model" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                10. Khopra Community Model
              </a>
              <a href="#faq" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                11. Frequently Asked Qs
              </a>
            </nav>
            <div className="pt-4 border-t border-stone-100">
              <Link 
                href="/contact"
                className="w-full text-center block bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider py-3 rounded-2xl shadow-sm transition duration-200"
              >
                Inquire &amp; Book Tour
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* SECTION 1: OVERVIEW */}
          <article id="overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Community Lodge vs Teahouse: Understanding Nepal's Two Trekking Accommodation Models
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>
                Every trekker heading into the Annapurna foothills eventually asks the same practical question: where will I actually sleep each night? For decades, the answer was simple. Nepal trekking accommodation meant the teahouse — a private guesthouse run by a local family, spaced a few hours apart along the trail.
              </p>
              <p>
                That's still true on most routes. But on a handful of trails, including the <Link href="/planning/khopra-trek-route-overview" className="text-emerald-700 font-bold hover:underline">Khopra Ridge Trek</Link>, a different model has taken root: the community lodge. It looks similar from the outside, but it's owned, run, and funded in a completely different way.
              </p>
              <p>
                This guide breaks down community lodge vs teahouse trekking in plain terms — what each model actually is, how the money moves, what the experience feels like on the ground, and which one makes more sense for your trek. We'll also look at why villages along the Khopra trail chose to build their own lodges instead of relying on the standard teahouse system.
              </p>
            </div>
          </article>

          {/* SECTION 2: WHAT IS A COMMUNITY LODGE */}
          <article id="what-is-community" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What Is a Community Lodge in Nepal Trekking?
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <h3 className="text-lg font-bold text-stone-900">Definition of a Community Lodge</h3>
              <p>
                A community lodge is a trekking guesthouse that belongs to the village, not to a single family or investor. Instead of one owner pocketing the nightly rate, the lodge is collectively owned by the community it sits in, and a village committee oversees how it's run and where the money goes.
              </p>
              <p>
                This model exists because remote mountain villages noticed a pattern: tourists were walking through their valleys, spending money on accommodation and food, and most of that income was leaving the area almost immediately — either to outside investors who'd built lodges in the village, or to suppliers in distant towns. A community lodge keeps that same tourist spending circulating inside the valley instead.
              </p>
              <h3 className="text-lg font-bold text-stone-900">How Community Lodges Operate</h3>
              <p>
                In practice, a community lodge functions like a small cooperative business. A locally elected committee — often made up of village representatives, women's groups, and youth leaders — handles staffing, maintenance, pricing, and bookkeeping.
              </p>
              <p>
                Staff are usually hired from the village itself, on a rotating basis in some cases, so that income and training opportunities spread across multiple households rather than concentrating in one family. Maintenance costs, supply purchases, and major repairs go through the same committee structure, which keeps the books transparent to everyone in the village.
              </p>
            </div>
          </article>

          {/* SECTION 3: WHERE ARE THEY FOUND */}
          <article id="where-found" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Where Community Lodges Are Found in Nepal
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>
                Community-owned lodging isn't yet the norm across Nepal, but it has taken hold on a few specific routes where local social entrepreneurs and village committees pushed to build it. The Khopra Ridge Trek is one of the clearest examples, with community lodges operating in villages including <Link href="/nodes/swanta-village-guide" className="text-emerald-700 font-bold hover:underline">Swanta</Link> and Nangi, both home to Magar communities with a long history of cooperative land and resource management.
              </p>
              <p>
                <Link href="/planning/khopra-trek-via-mohare-danda" className="text-emerald-700 font-bold hover:underline">Mohare Danda</Link> is another route in the same region that has adopted a similar model, which is part of why the two treks are often mentioned together when people research sustainable trekking accommodation in Nepal.
              </p>
            </div>
          </article>

          {/* SECTION 4: WHAT IS A TEAHOUSE */}
          <article id="what-is-teahouse" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What Is a Teahouse in Nepal Trekking?
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <h3 className="text-lg font-bold text-stone-900">Understanding the Traditional Teahouse Trekking Model</h3>
              <p>
                The teahouse is Nepal's original trekking accommodation system, and it's still the backbone of routes like the <Link href="/guides/which-annapurna-trek-to-choose" className="text-emerald-700 font-bold hover:underline">Annapurna Circuit</Link>, <Link href="/guides/khopra-vs-everest-view" className="text-emerald-700 font-bold hover:underline">Everest Base Camp</Link>, and most of the Annapurna Sanctuary. A teahouse is essentially a family-run guesthouse built specifically to serve trekkers — simple rooms upstairs, a communal dining hall downstairs, and a kitchen that runs on a set trekking-route menu.
              </p>
              <p>
                This system grew up organically starting in the 1960s and 70s as trekking tourism expanded, with local families converting spare rooms — and eventually purpose-built buildings — into lodging along the main trails. It's flexible, widely available, and familiar to almost every guide and porter in the country.
              </p>
              <h3 className="text-lg font-bold text-stone-900">How Traditional Teahouses Are Owned and Managed</h3>
              <p>
                A teahouse is a private business. One family, or occasionally an outside investor, owns the building, sets the prices, hires the staff, and keeps the profit. Many teahouse owners do live in the village and hire local staff, so some of the income does stay nearby — but there's no committee, no formal reinvestment structure, and no guarantee that profits go beyond the owning family.
              </p>
              <p>
                This isn't a flaw exactly — it's just a different incentive structure. The owner has full control, which can mean faster decisions and more personalized service, but it also means the broader village doesn't automatically benefit from a busy trekking season the way it does with a community lodge.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Standard Facilities Found in Teahouse Accommodation</h3>
              <p>
                Teahouse facilities are fairly consistent across Nepal, which is part of their appeal. Typical teahouse accommodation includes:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-stone-500">
                <li>Twin-sharing rooms with thin foam mattresses and a shared wall</li>
                <li>Shared bathrooms, sometimes squat-style, occasionally with a hot shower for an extra fee</li>
                <li>A central dining hall heated by a wood or yak-dung stove in the evening</li>
                <li>Basic charging points and patchy WiFi, usually billed separately</li>
              </ul>
              <p>
                Rooms are rarely heated outside the dining hall, so most of the social and warm time happens communally in the evening — which is part of what gives teahouse trekking its particular atmosphere.
              </p>
            </div>
          </article>

          {/* SECTION 5: CORE DIFFERENCES */}
          <article id="core-differences" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Community Lodge vs Teahouse — The Core Differences Explained
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              The two systems can look almost identical from a trekker's first glance — a building with rooms, a dining hall, and a menu. Compare the details:
            </p>

            {/* Comparison Table */}
            <div className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-stone-100 text-stone-700 uppercase font-black tracking-wider border-b border-stone-200">
                      <th className="p-4">Factor</th>
                      <th className="p-4">Community Lodge</th>
                      <th className="p-4">Standard Teahouse</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 font-medium text-stone-600">
                    {comparisonData.map((d, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50 transition">
                        <td className="p-4 font-bold text-stone-900">{d.feature}</td>
                        <td className="p-4 text-xs text-stone-500 leading-relaxed">{d.community}</td>
                        <td className="p-4 text-xs text-stone-500 leading-relaxed">{d.teahouse}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="text-stone-600 leading-relaxed text-sm space-y-4 mt-6">
              <h3 className="text-lg font-bold text-stone-900">Ownership Structure Comparison</h3>
              <p>
                The clearest distinction is who actually holds the lodge. A community lodge belongs to the village as a collective asset, similar to how a cooperative or community trust works elsewhere. A teahouse belongs to one person or family, who treats it like any other guesthouse.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Where Tourism Revenue Goes</h3>
              <p>
                This is the financial heart of the comparison. In a teahouse, a strong trekking season means a good year for one household. In a community lodge, the same busy season can mean a fully staffed clinic, a paid schoolteacher, or a repaired suspension bridge.
              </p>
              <p>
                Economists sometimes call the private-ownership pattern &ldquo;economic leakage&rdquo; — money that enters a remote area through tourism but quickly exits to outside suppliers, absentee owners, or urban hubs rather than circulating locally. Community lodges were built specifically to interrupt that leakage.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Accommodation Facilities Comparison</h3>
              <p>
                Physically, the two are often quite similar — both typically offer simple twin rooms, a shared bathroom, and a communal dining and heating area. Community lodges on routes like Khopra tend to be slightly newer or better-maintained in places where lodge construction was a coordinated village project, but this varies trek to trek and shouldn't be assumed automatically.
              </p>
              <p>
                Teahouses on long-established routes can range from very basic to surprisingly comfortable, depending on how much the owning family has reinvested in the building over the years.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Food Sourcing and Dining Experience</h3>
              <p>
                Food sourcing is one of the more noticeable differences on the ground. Community lodges along the Khopra trail lean heavily on local organic farms, with vegetables, grains, and yak cheese sourced from within the valley itself. It's not unusual to eat a meal where most of the ingredients were grown within walking distance of the dining table.
              </p>
              <p>
                Standard teahouses, particularly on busier circuits, often supplement local produce with packaged and canned goods carried or flown in from Pokhara or Kathmandu — partly to offer variety, and partly because demand on those routes outpaces what nearby farms alone can supply.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Cost Comparison Between Community Lodges and Teahouses</h3>
              <p>
                Teahouse accommodation cost in Nepal is generally low and fairly standardized — many teahouses charge a small or even nominal room rate, expecting trekkers to order meals from the menu, where the actual margin is made. Prices climb gradually with altitude and remoteness, since supplies become harder to transport.
              </p>
              <p>
                Community lodge pricing tends to follow a similar overall range, since both systems are competing for the same trekkers on the same trails. The practical difference isn't usually a dramatically different price tag — it's where that price ends up going once you've paid it.
              </p>
            </div>
          </article>

          {/* SECTION 6: SUSTAINABILITY */}
          <article id="sustainability" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Which Option Creates More Sustainable Tourism?
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <h3 className="text-lg font-bold text-stone-900">Environmental Sustainability Comparison</h3>
              <p>
                Because community lodges source more food locally, they generally cut down on the fuel and transport involved in getting supplies up the trail — fewer trucked-in goods means a smaller footprint per meal served. Waste handling can also be more consistent when a single committee sets the standard for the whole village rather than leaving it to each individual owner.
              </p>
              <p>
                Teahouses aren't inherently worse on this front, but environmental practices vary far more from one owner to the next, since there's no shared village policy guiding decisions like waste disposal or sourcing.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Community-Based Tourism Benefits</h3>
              <p>
                Community-based tourism is built around a simple idea: the people living in a destination should have a meaningful stake in the income that destination generates. On the Khopra trail, that shows up as direct village ownership rather than tourism happening to a community from the outside.
              </p>
              <p>
                This matters beyond a single trekking season, too. When a village collectively owns its tourism infrastructure, it has more say in how that infrastructure grows — what gets built next, how many lodges the valley can sustainably support, and how trekking fits alongside farming and other local livelihoods.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Why Sustainable Trekking Accommodation Matters in Nepal</h3>
              <p>
                Nepal's trekking economy supports hundreds of thousands of livelihoods, but the benefits haven't always reached the villages closest to the trails. Sustainable trekking accommodation models exist to close that gap — making sure that a valley with heavy foot traffic actually sees long-term development, not just short-term transactions.
              </p>
              <p>
                For mountain communities specifically, this isn't an abstract concern. Tourism income is one of the few realistic alternatives to subsistence farming or migration to cities for work, so how that income is structured has a direct effect on whether young people stay in the valley or leave it.
              </p>
            </div>
          </article>

          {/* SECTION 7: ECONOMIC IMPACT */}
          <article id="economic-impact" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Economic and Social Impact on Local Mountain Communities
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <h3 className="text-lg font-bold text-stone-900">Supporting Local Schools Through Tourism</h3>
              <p>
                In villages with a community lodge model, school funding is often one of the first and most visible uses of lodge income. Teacher salaries in remote areas are notoriously hard to sustain on government funding alone, and a steady stream of lodge income can mean the difference between a fully staffed school and one running with gaps.
              </p>
              <p>
                This is a concrete, measurable outcome that a trekker can point to: the room they booked last night may be directly connected to a teacher's paycheck this month.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Healthcare and Village Development Benefits</h3>
              <p>
                The same logic applies to health posts. Many remote villages along trekking routes have only basic medical facilities, sometimes staffed inconsistently. Community lodge revenue has been used in places like the Khopra valley to help fund visiting nurse clinics and keep local health posts operating more reliably.
              </p>
              <p>
                Beyond healthcare, that same pool of funds often goes toward smaller but meaningful village development projects — trail repairs, bridge maintenance, and even shared internet access that benefits the whole community, not just the lodge guests.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Creating Local Employment Opportunities</h3>
              <p>
                A community lodge distributes employment more broadly than a single-family teahouse. Because staffing and management responsibilities rotate through a committee structure, more households end up with some connection to the lodge's income, rather than one family capturing most of the benefit.
              </p>
              <p>
                Over time, this kind of broad-based local employment can reduce the pressure on younger villagers to migrate toward Pokhara or Kathmandu for work, helping keep the village's population — and its traditions — intact.
              </p>
            </div>
          </article>

          {/* SECTION 8: TREKKER EXPERIENCE */}
          <article id="trekker-experience" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Trekker Experience — Which Accommodation Feels Better?
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <h3 className="text-lg font-bold text-stone-900">Cultural Immersion and Authentic Village Experience</h3>
              <p>
                Because a community lodge is run by the whole village rather than one household, trekkers often end up interacting with a wider cross-section of local life — different staff members, different families involved in the cooking or maintenance, and a stronger sense of being a guest of the valley rather than a guest of one business.
              </p>
              <p>
                Teahouses offer their own version of authenticity, often built around getting to know one family well over a meal or an evening by the stove. Neither experience is more &ldquo;real&rdquo; than the other; they're just different shapes of the same hospitality tradition.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Comfort and Convenience Comparison</h3>
              <p>
                In terms of day-to-day comfort, the two systems are closer than people often expect. Room size, mattress quality, and bathroom setups depend more on a specific lodge's age and maintenance than on its ownership model. A well-run teahouse on a popular circuit can easily out-comfort a newer community lodge, and vice versa.
              </p>
              <p>
                Convenience tends to favor teahouses slightly, simply because there are more of them, spaced more densely, on more routes — so trekkers have more flexibility about exactly where to stop each day.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Food Experience and Local Hospitality</h3>
              <p>
                This is where community lodges often stand out. Meals built around what the valley itself produces — fresh vegetables, local dairy, seasonal produce — tend to taste noticeably different from a menu padded with packaged staples carried in from outside.
              </p>
              <p>
                Hospitality in both systems is generally warm; Nepali mountain culture places a high value on guest care regardless of who owns the building. The community lodge experience just tends to feel a bit more like eating dinner with an entire village rather than with one host family.
              </p>
            </div>
          </article>

          {/* SECTION 9: TRAVELER MATCHING */}
          <article id="trekker-match" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Which Is Better for Different Types of Trekkers?
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <ul className="space-y-4 text-xs text-stone-500 pl-4 border-l-2 border-emerald-500">
                <li>
                  💰 <strong>Best Option for Budget Trekkers:</strong> If pure cost is the deciding factor, there's rarely a dramatic gap — both systems price competitively against each other on the same trail.
                </li>
                <li>
                  🌿 <strong>Best Option for Eco-Conscious Travelers:</strong> Trekkers who care about environmental footprint and supply-chain transparency will generally find the community lodge model a stronger fit.
                </li>
                <li>
                  🤝 <strong>Best Option for Cultural and Responsible Travelers:</strong> For travelers prioritizing community tourism — meaning they want their spending to directly support the village they're walking through — the community lodge is the clearer choice.
                </li>
                <li>
                  🛏️ <strong>Best Option for Comfort-Focused Trekkers:</strong> If consistent comfort and maximum route flexibility matter most, teahouses still have the edge simply due to sheer numbers and decades of refinement.
                </li>
              </ul>
            </div>
          </article>

          {/* SECTION 10: KHOPRA MODEL */}
          <article id="khopra-model" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why the Khopra Region Is One of Nepal's Best Examples of Community Tourism
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <h3 className="text-lg font-bold text-stone-900">The Community Lodge Model on the Khopra Trail</h3>
              <p>
                The Khopra Ridge Trek sits a little off the standard Annapurna circuit, which is part of why it became fertile ground for a different accommodation model. Local social entrepreneurs worked with village committees in Swanta and Nangi to build and operate lodges collectively from the start, rather than retrofitting an existing private guesthouse system.
              </p>
              <p>
                That head start matters. Because the community lodge model was built into the trail's tourism infrastructure early on, it didn't have to compete against an entrenched network of private teahouses — it simply became the standard way to stay overnight on this particular route. Learn more in our <Link href="/planning/community-lodges-khopra-trek" className="text-emerald-700 font-bold hover:underline">Community Lodges Cooperative Directory</Link>.
              </p>
              <h3 className="text-lg font-bold text-stone-900">How Trekking Supports Villages Directly</h3>
              <p>
                Trekkers on the Khopra trail aren't just passing through — their accommodation spending becomes part of the valley's operating budget. That's used, in practice, for things like schoolteacher salaries, health post support, and trail maintenance, the same categories outlined earlier in this guide.
              </p>
              <p>
                It's a tangible answer to a question many responsible travelers ask themselves: does my trip actually help the place I'm visiting, or does the money just disappear into the wider economy? On the Khopra trail, the answer is built directly into the lodging system.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Why Responsible Travelers Choose Community-Based Trekking Routes</h3>
              <p>
                For travelers who already weigh sustainability into their trip planning, choosing a route built around community lodges is one of the more straightforward ways to align a trek with those values — no extra research or special booking required, since the accommodation system itself does the work.
              </p>
              <p>
                It's also a way to experience Magar mountain culture and Annapurna-area scenery without contributing to the same economic leakage that affects busier, more commercially developed circuits nearby.
              </p>
            </div>
          </article>

          {/* SECTION 11: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Community Lodges
            </h2>
            <div className="space-y-4 mt-6">
              {faqItems.map((faq, idx) => (
                <details 
                  key={idx} 
                  className="group bg-white border border-stone-200 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden cursor-pointer select-none transition-all duration-200 hover:border-emerald-500/30"
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

          {/* CONCLUSION */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-955 font-sans">Conclusion</h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              Community lodge vs teahouse isn't really a question of which one is &ldquo;better&rdquo; in every sense — it's a question of what kind of impact you want your trekking spending to have. Teahouses remain the backbone of Nepal trekking accommodation, offering convenience, flexibility, and decades of route familiarity across nearly every major trail in the country.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              Community lodges, by contrast, were built to solve a specific problem: making sure that tourism income actually stays in the valleys it passes through, rather than draining out to absentee owners or distant supply chains. On routes like the Khopra Ridge Trek, that model has turned overnight stays into something more — a working source of school funding, healthcare access, and village infrastructure for the Magar communities of Swanta and Nangi.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              Neither system requires you to sacrifice comfort or convenience to choose it. The real decision comes down to whether you want your accommodation to function as a simple transaction, or as a direct investment in the mountain community you're walking through.
            </p>
          </article>

          {/* CTA SECTION */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Support Community Tourism</h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                If you want your trekking accommodation to do more than just put a roof over your head for the night, the Khopra Ridge Trek is one of the clearest ways to put that into practice. Book our community-supported itinerary and your lodging directly funds local schools, clinics, and infrastructure in Swanta and Nangi — no extra effort required on your part.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Book Your Khopra Ridge Community Trek &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Tour:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/planning/khopra-trek-permits" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    📝 Check trekking permit requirements (ACAP &amp; TIMS)
                  </Link>
                  <Link href="/planning/pokhara-to-ghandruk" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    🚙 View Pokhara to Ghandruk Transportation Guide
                  </Link>
                  <Link href="/planning/packing-checklist" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    🎒 Get the interactive packing checklist for your gear
                  </Link>
                  <Link href="/weather/best-time-to-trek" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    ☀️ Check seasonal weather conditions before you go
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* EEAT Author Verification Banner */}
          <div className="p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
            <span className="text-2xl mt-0.5">🏔️</span>
            <div>
              <h4 className="font-bold text-stone-900 text-sm font-sans">Reviewed by Trail Experts</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                Our guides collaborate directly with Swanta and Nangi village committees to ensure lodge maintenance standards and transparent pricing metrics.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
