import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/community/community-lodge-vs-teahouse",
  },
  title: "Community Lodge vs Teahouse Model in Nepal: What Every Trekker Should Know",
  description: "Compare the community lodge and teahouse models in Nepal trekking — ownership, comfort, pricing, and how each affects Himalayan villages. Full guide with FAQs.",
};

export default function Page() {
  const summarySpecs = [
    { label: "Community Lodges", value: "Village-Owned Trusts" },
    { label: "Traditional Teahouses", value: "Private Family Businesses" },
    { label: "Primary Beneficiary", value: "Schools & Local Clinics" },
    { label: "Best-Fit Trail", value: "Khopra Ridge & Swanta" }
  ];

  const structuralComparison = [
    {
      factor: "Owner",
      community: "Village committee, collectively held",
      teahouse: "Individual or single family"
    },
    {
      factor: "Management",
      community: "Elected or appointed local committee",
      teahouse: "Owner or family members"
    },
    {
      factor: "Decision-making",
      community: "Group-based, often tied to village development goals",
      teahouse: "Individual owner's discretion"
    },
    {
      factor: "Accountability",
      community: "Reports to the community (headmasters, board)",
      teahouse: "Reports to no one but itself"
    }
  ];

  const experienceComparison = [
    {
      aspect: "Room Comfort",
      community: "Basic twin beds, simple insulation (often newer construction)",
      teahouse: "Basic twin beds, simple insulation (varies by building age)"
    },
    {
      aspect: "Food Sourcing",
      community: "Locally grown organic vegetables, local yaks & barley",
      teahouse: "Mix of local ingredients and transport-heavy city imports"
    },
    {
      aspect: "Hot Showers",
      community: "Usually gas or solar-heated, small additional fee",
      teahouse: "Usually gas or solar-heated, small additional fee"
    },
    {
      aspect: "WiFi & Power",
      community: "Paid solar charging, intermittent signal above 3,000m",
      teahouse: "Paid hydro/solar charging, patchy above 3,500m"
    }
  ];

  const faqItems = [
    {
      q: "What is a community lodge in Nepal trekking?",
      a: "A community lodge is a trekking accommodation collectively owned and managed by a village committee rather than a private individual. Profits are pooled into a shared fund that typically supports local schools, health clinics, and infrastructure projects instead of going to a single owner."
    },
    {
      q: "How is a community lodge different from a teahouse?",
      a: "The main difference is ownership and profit distribution. Teahouses are privately owned, with the owner keeping all profits. Community lodges are village-owned, with profits reinvested into shared community needs through a managing committee."
    },
    {
      q: "Are community lodges more expensive than teahouses?",
      a: "Not significantly. Community lodges typically charge a standardized rate close to regional norms, while individual teahouse pricing can vary more depending on the owner, location, and season. Either way, room rates are usually a small part of total trekking costs compared to meals and services."
    },
    {
      q: "Do community lodges offer hot showers and WiFi?",
      a: "Yes, generally to the same standard as nearby teahouses. Hot showers are usually available for a small fee, and WiFi quality depends more on altitude and remoteness than on which accommodation model the lodge follows."
    },
    {
      q: "Which trekking routes in Nepal use community lodges?",
      a: "The Khopra Ridge trek and Mohare Danda trek in the Annapurna foothills, along with routes through Nangi and Swanta villages, are among the clearest examples of trails built around the community lodge model."
    },
    {
      q: "Are teahouses privately owned in Nepal?",
      a: "Yes. Most teahouses across Nepal's trekking regions are individually or family-owned businesses, with the owner setting prices and managing operations independently."
    },
    {
      q: "Which option is better for responsible tourism in Nepal?",
      a: "Community lodges generally offer a stronger structural link between your spending and direct village benefit, since revenue is pooled and allocated toward community needs rather than individual profit. That said, choosing a well-run, locally employing teahouse is still far better than supporting an externally owned hotel chain."
    },
    {
      q: "Do community lodges provide the same comfort as teahouses?",
      a: "Largely, yes. Comfort depends more on a specific lodge's age, altitude, and maintenance than on whether it's community-owned or privately run. Neither model guarantees luxury, but both typically meet standard trekking comfort expectations."
    },
    {
      q: "How does staying in a community lodge help local villages?",
      a: "Your lodging and meal payments are pooled into a community fund, which is commonly used to support teacher salaries, health clinic operations, and local infrastructure or agricultural projects — turning a normal night's stay into a direct contribution to village development."
    },
    {
      q: "Is Khopra Ridge Trek a community-based trekking route?",
      a: "Yes. The lodges along the Khopra Ridge route, including those in Swanta village, operate under the community lodge model, with revenue allocated by local committees toward shared village priorities."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">Community Lodge &amp; Eco-Lodging
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl font-sans">Community Lodge vs Teahouse Model in Nepal Trekking
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">Where you sleep on a trek in Nepal does more than decide your comfort for the night. It decides who gets paid.
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
            <h3 className="text-xs font-black uppercase text-stone-400 tracking-wider pb-3 border-b border-stone-100">Table of Contents
            </h3>
            <nav className="flex flex-col gap-1 text-sm">
              <a href="#overview" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                1. Overview
              </a>
              <a href="#traditional-teahouse" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                2. Traditional Teahouses
              </a>
              <a href="#community-lodge" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                3. Community Lodges
              </a>
              <a href="#structural-differences" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                4. Key Differences
              </a>
              <a href="#accommodation-experience" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                5. Room &amp; Food Experience
              </a>
              <a href="#community-support" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                6. Village Social Support
              </a>
              <a href="#sustainability" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                7. Sustainability Index
              </a>
              <a href="#khopra-example" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                8. Khopra Ridge Network
              </a>
              <a href="#trekker-choice" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                9. Making Your Choice
              </a>
              <a href="#faqs" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                10. Frequently Asked Questions
              </a>
            </nav>
            <div className="pt-4 border-t border-stone-100">
              <Link 
                href="/contact"
                className="w-full text-center block bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider py-3 rounded-2xl shadow-sm transition duration-200"
              >Inquire &amp; Book Tour
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          
          {/* SECTION 1: OVERVIEW */}
          <article id="overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              1. Overview: The Economics of Himalayan Lodges
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>Most trekkers spend weeks researching gear, <Link href="/planning/khopra-trek-permits" className="text-emerald-700 font-bold hover:underline">trekking permits</Link>, and altitude profiles, but almost no time thinking about who actually owns the lodge they are staying in. That is a mistake, because in the Himalayas, accommodation is not just a service — it is a small but steady stream of income flowing through some of the poorest districts in Nepal. Where that income lands depends entirely on the system behind the building.
              </p>
              <p>Two accommodation systems dominate Nepal's trekking trails today:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li>
                  <strong>The Traditional Teahouse Model:</strong>A decades-old, privately run system that built Nepal's reputation as an independent trekker's paradise.
                </li>
                <li>
                  <strong>The Community Lodge Model:</strong>A newer, village-owned cooperative approach built specifically to keep tourism money inside the communities that host it.
                </li>
              </ul>
              <p>This guide breaks down exactly how each system works, what you will actually experience as a guest in both, and why the difference matters if you care about where your trekking budget ends up. We will also look at how the <Link href="/guides/khopra-ridge-ultimate-guide" className="text-emerald-700 font-bold hover:underline">Khopra Ridge route</Link>in the Annapurna foothills uses the community lodge model as a real, working example — not a marketing concept.
              </p>
            </div>
          </article>

          {/* SECTION 2: TRADITIONAL TEAHOUSE */}
          <article id="traditional-teahouse" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              2. Understanding the Traditional Teahouse Trekking Model in Nepal
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <h3 className="text-lg font-bold text-stone-900">What Is a Teahouse in Nepal Trekking?</h3>
              <p>A teahouse is a small, privately operated guesthouse built along a trekking trail, typically run by a single family. The teahouse trekking model emerged in the 1960s and 70s as Nepal opened its mountains to independent foreign trekkers, particularly along routes like the <Link href="/guides/khopra-vs-annapurna-circuit" className="text-emerald-700 font-bold hover:underline">Annapurna Circuit</Link>, Everest Base Camp, and Langtang Valley.
              </p>
              <p>Rather than carrying tents and supplies, trekkers could walk from village to village and find a bed, a hot meal, and basic shelter at each stop. This system is what made independent trekking in Nepal possible without a full expedition setup, and it is still the backbone of trekking infrastructure across the country. Check our <Link href="/planning/teahouse-locator" className="text-emerald-700 font-bold hover:underline">Teahouse Locator Database</Link>to see regional rates.
              </p>
              
              <h3 className="text-lg font-bold text-stone-900">How Traditional Teahouses Operate</h3>
              <p>Teahouses are privately owned businesses, almost always managed by one family or individual owner. That owner sets their own room rates, decides the menu, hires their own staff, and keeps whatever profit the business generates.
              </p>
              <p>A few operational realities define this model:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li>
                  <strong>Independent Pricing:</strong>Each teahouse sets its own rates with no shared pricing structure across the village.
                </li>
                <li>
                  <strong>Seasonal Dependence:</strong>Most teahouses earn almost their entire annual income during the spring and autumn trekking seasons, then sit largely empty for months.
                </li>
                <li>
                  <strong>Individual Profit Retention:</strong>Income stays with the owning family. Some reinvest in their own property; others use it for needs unrelated to the village.
                </li>
                <li>
                  <strong>Variable Reinvestment:</strong>There is no systematic mechanism that funnels teahouse profits into shared village infrastructure like schools or clinics — it depends entirely on the individual owner's choices.
                </li>
              </ul>
              <p>This isn't a flaw unique to Nepal; it is simply how most small, family-run hospitality businesses work anywhere in the world. The trade-off is that benefits to the wider village are incidental rather than built into the system.
              </p>

              <h3 className="text-lg font-bold text-stone-900">Typical Facilities and Services Found in Teahouses</h3>
              <p>Teahouse facilities are fairly standardized across most trekking regions, though quality varies by altitude and route popularity. Most offer:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
                <li>A private or twin-share room with basic beds, usually without heating.</li>
                <li>A shared bathroom, often with a squat toilet at higher elevations.</li>
                <li>A hot shower, frequently available as a paid add-on (gas or solar-heated).</li>
                <li>A communal dining hall, usually the only heated room in the building.</li>
                <li>A set menu featuring dal bhat, noodle dishes, soups, and basic Western options.</li>
                <li>Paid mobile charging and WiFi, where available, with patchy reliability above 3,500 meters.</li>
              </ul>
              <p>For most trekkers, this level of service is more than adequate. The shared dining area in particular tends to be the social heart of any trekking night, regardless of which accommodation model the lodge follows.
              </p>
            </div>
          </article>

          {/* SECTION 3: COMMUNITY LODGE */}
          <article id="community-lodge" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              3. What Is the Community Lodge Model in Nepal Trekking?
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <h3 className="text-lg font-bold text-stone-900">How Community Lodges Work</h3>
              <p>The community lodge model takes the same basic idea — a bed, a meal, a roof — and restructures who owns it and where the money goes afterward.
              </p>
              <p>A community lodge is collectively owned and managed by the village itself, typically through a local development committee rather than a single family. The lodge is often built using shared community labor and funding, and it is operated as a village asset rather than a private business.
              </p>
              <p>Staffing, pricing, and day-to-day management are overseen by the committee, with profits pooled into a shared community fund rather than going to one owner. In practice, this means the income from your room and meals is split according to an agreed formula that funds village priorities — education, healthcare, and local infrastructure — instead of sitting in one family's account.
              </p>

              <h3 className="text-lg font-bold text-stone-900">Why Community Lodges Were Introduced in Nepal</h3>
              <p>Community lodges weren't created as a marketing angle. They were a direct response to a real problem: <strong>tourism revenue leakage</strong>.
              </p>
              <p>In many trekking areas, a large share of what trekkers spend never reaches the villages they pass through. Money goes to trekking agencies based in Kathmandu or Pokhara, to absentee lodge owners who live elsewhere, or to imported supplies bought outside the region. The village provides the trail, the scenery, and the labor, but captures only a fraction of the value.
              </p>
              <p>In response, communities in areas like Myagdi and Parbat districts — including Nangi, <Link href="/nodes/swanta-village-guide" className="text-emerald-700 font-bold hover:underline">Swanta village</Link>, and the villages along the <Link href="/planning/khopra-trek-via-mohare-danda" className="text-emerald-700 font-bold hover:underline">Mohare Danda</Link>route — began organizing village-owned lodges so that lodging and food revenue stayed inside the local economy instead of leaking out.
              </p>

              <h3 className="text-lg font-bold text-stone-900">The Role of Mahabir Pun in Community Tourism Development</h3>
              <p>Mahabir Pun, a Nepali social entrepreneur best known for bringing wireless internet to remote mountain villages through the Nepal Wireless Networking Project, played a key role in encouraging this kind of cooperative thinking in the Myagdi region.
              </p>
              <p>His broader work focused on giving isolated villages the infrastructure and organizational tools to manage their own resources rather than depending entirely on outside operators. That same cooperative model — village committees managing a shared asset for community benefit — was applied to trekking accommodation in Nangi and Swanta, laying the groundwork for what later became the community lodge system used along routes like Khopra Ridge.
              </p>
            </div>
          </article>

          {/* SECTION 4: STRUCTURAL DIFFERENCES */}
          <article id="structural-differences" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              4. Community Lodge vs Teahouse Model — Key Structural Differences
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>With both systems explained, here is how they actually compare on the factors that matter most: ownership, money, and price.
              </p>

              <h3 className="text-lg font-bold text-stone-900">Ownership Structure Comparison</h3>
              <div className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm my-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-stone-100 text-stone-700 uppercase font-black tracking-wider border-b border-stone-200">
                        <th className="p-4">Factor</th>
                        <th className="p-4">Community Lodge</th>
                        <th className="p-4">Traditional Teahouse</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 font-medium text-stone-600">
                      {structuralComparison.map((row, idx) => (
                        <tr key={idx} className="hover:bg-stone-50/50 transition">
                          <td className="p-4 font-bold text-stone-900">{row.factor}</td>
                          <td className="p-4 text-xs text-stone-500 leading-relaxed">{row.community}</td>
                          <td className="p-4 text-xs text-stone-500 leading-relaxed">{row.teahouse}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <h3 className="text-lg font-bold text-stone-900">Where Does the Money Go?</h3>
              <p>This is the single biggest difference between the two systems, and it is worth spelling out clearly.
              </p>
              <p>In a <strong>teahouse</strong>, the money you pay for your room and meals goes to the owner. What happens after that is entirely up to them — it might be reinvested in the property, spent on family needs, or moved out of the village altogether if the owner lives in Pokhara or Kathmandu.
              </p>
              <p>In a <strong>community lodge</strong>, that same payment is pooled into a shared fund managed by the village committee. From there, it is allocated according to an agreed structure — commonly split across categories like school funding, health clinic support, and local infrastructure or agricultural projects. The exact split varies by village, but the principle is consistent: the lodge functions as a revenue source for the whole community, not a single household.
              </p>

              <h3 className="text-lg font-bold text-stone-900">Pricing Structure and Cost Differences</h3>
              <p>For trekkers, the cost difference between the two models is usually smaller than people expect. Standard teahouse rooms along popular routes typically range from a token nightly room charge (sometimes just a few hundred Nepali rupees, since teahouses earn most of their margin on food) up to higher rates in peak season or at high-altitude stops with limited competition.
              </p>
              <p>Community lodges tend to set pricing closer to a fair, standardized rate for the region rather than competing to undercut neighboring teahouses. You are not necessarily paying more — you are often paying a more consistent, transparent rate where the markup is clearly tied to a stated community purpose rather than individual profit maximization. You can estimate your overall budget using our <Link href="/planning/khopra-trek-cost" className="text-emerald-700 font-bold hover:underline">Khopra Trek Cost Calculator</Link>.
              </p>
            </div>
          </article>

          {/* SECTION 5: ACCOMMODATION EXPERIENCE */}
          <article id="accommodation-experience" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              5. Accommodation Experience Comparison for Trekkers
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>Beyond ownership and money, most trekkers simply want to know: which one is more comfortable? The honest answer is that comfort depends more on the specific lodge and route than on which model it follows.
              </p>

              <div className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm my-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-stone-100 text-stone-700 uppercase font-black tracking-wider border-b border-stone-200">
                        <th className="p-4">Aspect</th>
                        <th className="p-4">Community Lodge</th>
                        <th className="p-4">Traditional Teahouse</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 font-medium text-stone-600">
                      {experienceComparison.map((row, idx) => (
                        <tr key={idx} className="hover:bg-stone-50/50 transition">
                          <td className="p-4 font-bold text-stone-900">{row.aspect}</td>
                          <td className="p-4 text-xs text-stone-500 leading-relaxed">{row.community}</td>
                          <td className="p-4 text-xs text-stone-500 leading-relaxed">{row.teahouse}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <h3 className="text-lg font-bold text-stone-900">Room Quality and Sleeping Comfort</h3>
              <p>Both systems generally offer similar basics — a bed, a thin mattress, and a couple of blankets, with insulation that thins out as you climb higher. Community lodges along newer routes like Khopra Ridge are sometimes more recently built, which can mean slightly better insulation and fewer maintenance issues than older, well-worn teahouses on heavily trafficked trails. That said, well-maintained teahouses on popular circuits can be just as comfortable, since high foot traffic gives owners more reason to keep rooms in good condition. Be sure to check our <Link href="/planning/packing-checklist" className="text-emerald-700 font-bold hover:underline">Interactive Packing Checklist</Link>to ensure you bring an adequate sleeping bag.
              </p>

              <h3 className="text-lg font-bold text-stone-900">Food Quality and Dining Experience</h3>
              <p>Both models typically serve a similar menu built around dal bhat, noodles, soups, and basic comfort food. The meaningful difference is in sourcing. Community lodges are more likely to prioritize ingredients grown locally — vegetables, barley, and dairy from nearby farms — both as a cost-saving measure and as a deliberate way to support local agriculture. Some teahouses, particularly on busier routes, rely more heavily on packaged or imported goods carried up by porter or mule train, which can mean less variety but more familiar, standardized options.
              </p>

              <h3 className="text-lg font-bold text-stone-900">Facilities Comparison — Bathrooms, Hot Showers, Charging and WiFi</h3>
              <p>In practical terms, the facilities you will find are largely comparable across both models, with quality driven more by altitude and remoteness than ownership structure:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li>
                  <strong>Bathrooms:</strong>Shared at higher elevations in both systems, with private attached bathrooms more common at lower, busier stops.
                </li>
                <li>
                  <strong>Hot Showers:</strong>Usually available for a small additional fee in either model, often solar or gas-heated.
                </li>
                <li>
                  <strong>Charging:</strong>Typically a paid service in both, since most remote lodges rely on solar power or micro-hydro.
                </li>
                <li>
                  <strong>WiFi:</strong>Patchy in both systems, with reliability dropping sharply above 3,000–3,500 meters regardless of who owns the lodge.
                </li>
              </ul>
            </div>
          </article>

          {/* SECTION 6: COMMUNITY SUPPORT */}
          <article id="community-support" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              6. How Community Lodges Support Local Himalayan Communities
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>This is where the community lodge model creates a genuine structural advantage over the traditional teahouse system — not in comfort, but in long-term community impact.
              </p>

              <h3 className="text-lg font-bold text-stone-900">Education Funding and Local School Support</h3>
              <p>A significant share of community lodge revenue is typically directed toward local schools. In villages like Swanta, this kind of funding has gone toward teacher salaries, classroom materials, and basic equipment — costs that would otherwise depend entirely on inconsistent government allocations or outside donations. For families in these villages, a functioning, adequately staffed school is a direct, tangible result of trekkers choosing to stay in a community lodge.
              </p>

              <h3 className="text-lg font-bold text-stone-900">Health Clinics and Medical Services</h3>
              <p>Mountain villages are often hours or days from the nearest hospital, which makes local health posts essential. Community lodge revenue frequently helps fund village health workers, restock basic medicine supplies, and in some cases support emergency transport like ambulance jeeps for serious cases. This is healthcare infrastructure that simply would not exist at the same level without a dedicated, recurring funding source tied to tourism. In case of critical altitude-related emergencies, you can review our <Link href="/safety/helicopter-rescue-evacuation" className="text-emerald-700 font-bold hover:underline">Helicopter Rescue &amp; Evacuation Protocols</Link>.
              </p>

              <h3 className="text-lg font-bold text-stone-900">Infrastructure Development and Employment Generation</h3>
              <p>Beyond schools and clinics, community lodge income often supports broader village needs — trail maintenance, small agricultural projects, and local employment. Because the lodge itself needs staff, and the fund it generates supports other community roles, the model tends to create more stable, year-round local employment than a single privately owned teahouse that only operates seasonally.
              </p>
            </div>
          </article>

          {/* SECTION 7: SUSTAINABILITY */}
          <article id="sustainability" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              7. Sustainability Comparison — Which Model Supports Responsible Tourism Better?
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>Sustainability in trekking accommodation is not just about solar panels. It is about whether the system keeps benefiting the local environment and economy after the trekking season ends.
              </p>

              <h3 className="text-lg font-bold text-stone-900">Environmental Sustainability and Resource Management</h3>
              <p>Community lodges tend to manage shared resources — water, firewood, waste — more systematically, since they are accountable to the whole village rather than a single owner's preferences. This often translates into more consistent waste management practices and a stronger incentive to protect the trail and surrounding land, since the community itself depends on that environment long-term, not just during one tourist season.
              </p>

              <h3 className="text-lg font-bold text-stone-900">Supporting Local Farmers and Village Economies</h3>
              <p>Because community lodges prioritize local sourcing, they tend to circulate more money within the immediate village economy rather than sending it to suppliers in Pokhara or Kathmandu. A kilogram of vegetables bought from a neighboring farmer keeps that money inside the local economy in a way that imported, packaged food simply does not.
              </p>

              <h3 className="text-lg font-bold text-stone-900">Preserving Local Culture Through Community Tourism</h3>
              <p>Because community lodges are run by the village itself rather than treated purely as a private business, they tend to double as a point of cultural continuity — locally run, locally staffed, and embedded in the rhythm of village life rather than operating as a separate commercial enterprise. For trekkers, this often means more genuine interaction with the people who actually live there, rather than staff hired purely to serve tourists.
              </p>
            </div>
          </article>

          {/* SECTION 8: KHOPRA EXAMPLE */}
          <article id="khopra-example" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              8. Real Example — Why Khopra Ridge Trek Uses the Community Lodge Model
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>Most of this comparison is conceptual until you see it applied to an actual route. The Khopra Ridge trek in the Annapurna foothills is one of the clearest working examples of the community lodge system in practice.
              </p>

              <h3 className="text-lg font-bold text-stone-900">The Community Lodge Network in Swanta Village and Nangi Village</h3>
              <p>The lodges along the Khopra Ridge route, including those in Swanta village, are owned and managed by local committees rather than individual operators. This network grew out of the same cooperative thinking that shaped Nangi's broader rural development efforts, extending village-level collective management from connectivity and education projects into trekking accommodation. Learn more in our guide to <Link href="/nodes/swanta-village-guide" className="text-emerald-700 font-bold hover:underline">Swanta Village</Link>.
              </p>

              <h3 className="text-lg font-bold text-stone-900">How Trekking Revenue Supports Community Development Projects</h3>
              <p>Lodging and meal fees paid by trekkers on this route are pooled and allocated toward specific community needs — commonly split across school funding, health clinic support, and local development projects like agricultural initiatives and trail upkeep. The exact allocation is reviewed periodically by the village committee rather than set unilaterally by any single business owner.
              </p>

              <h3 className="text-lg font-bold text-stone-900">How Financial Transparency Builds Responsible Tourism Trust</h3>
              <p>Because the lodges are community-owned, the village committee has a direct incentive to track and report how funds are used — it is their own shared resource, not an external operator's private revenue. This kind of oversight, where local headmasters and committee members are involved in reviewing allocations, is what separates a genuine community tourism model from a label used purely for marketing purposes.
              </p>
            </div>
          </article>

          {/* SECTION 9: TREKKER CHOICE */}
          <article id="trekker-choice" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              9. Which Accommodation Option Should Trekkers Choose?
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>There is no universally &quot;better&quot; choice here — it depends on what you are optimizing for on a given trek.
              </p>

              <h3 className="text-lg font-bold text-stone-900">Choose a Community Lodge If You Value Responsible Travel</h3>
              <p>If supporting local schools, clinics, and village infrastructure matters to you as much as the trek itself, routes built around community lodges — like Khopra Ridge, Mohare Danda, and other trails through Nangi and Swanta — give you a direct, structural way to do that without needing to research individual lodge owners yourself.
              </p>

              <h3 className="text-lg font-bold text-stone-900">Choose a Traditional Teahouse If You Prefer Independent Trekking Routes</h3>
              <p>If your priority is maximum route flexibility — popular circuits with frequent lodge options, well-established trails, and the ability to change your itinerary on the fly — the traditional teahouse system still offers the widest network and the most route choices across Nepal.
              </p>

              <h3 className="text-lg font-bold text-emerald-700">Our Recommendation for Conscious Trekkers Visiting Nepal</h3>
              <p>For trekkers who want both — a genuine Himalayan trekking experience and confidence that their spending supports the villages they pass through — routes built on the community lodge model offer a meaningful middle ground. You are not sacrificing comfort or trail quality; you are simply choosing infrastructure that is designed to keep your trekking budget working for the mountains long after you have gone home.
              </p>
            </div>
          </article>

          {/* SECTION 10: FAQS */}
          <article id="faqs" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              10. Frequently Asked Questions
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
            <h2 className="text-2xl font-bold text-stone-955 font-sans">11. Conclusion</h2>
            <p className="text-stone-600 leading-relaxed text-sm">The teahouse and community lodge systems both get you a bed and a hot meal at the end of a long trekking day — but they send your money in very different directions afterward. A teahouse supports one family's business. A community lodge supports the village's schools, clinics, and shared infrastructure.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">Neither model is inherently right or wrong, and comfort levels between the two are closer than most trekkers expect. What actually changes is where your trekking budget ends up once you have checked out. For travelers who want their trek to leave something behind beyond a few photos, that distinction is worth knowing before you book.
            </p>
          </article>

          {/* CTA SECTION */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Support Local Himalayan Communities</h3>
              <p className="text-stone-300 text-sm leading-relaxed">Want your trek to directly support Himalayan schools, clinics, and village development? Book our Khopra Ridge trek and experience a trail built entirely on the community lodge model — where every night's stay funds real local development in Swanta and Nangi villages.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >Book Your Community Lodge Trek &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Tour:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/planning/khopra-trek-permits" className="hover:text-emerald-400 flex items-center gap-1.5 transition">Check trekking permit requirements (ACAP &amp; TIMS)
                  </Link>
                  <Link href="/planning/pokhara-to-ghandruk" className="hover:text-emerald-400 flex items-center gap-1.5 transition">View Pokhara to Ghandruk Transportation Guide
                  </Link>
                  <Link href="/planning/packing-checklist" className="hover:text-emerald-400 flex items-center gap-1.5 transition">Get the interactive packing checklist for your gear
                  </Link>
                  <Link href="/weather/best-time-to-trek" className="hover:text-emerald-400 flex items-center gap-1.5 transition">Check seasonal weather conditions before you go
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* EEAT Author Verification Banner */}
          <div className="p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
            <span className="text-2xl mt-0.5"></span>
            <div>
              <h4 className="font-bold text-stone-900 text-sm font-sans">Reviewed by Trail Experts</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">We audit financial allocations yearly alongside Swanta village headmasters to ensure transparency. Our guides participate directly in community school boards.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
