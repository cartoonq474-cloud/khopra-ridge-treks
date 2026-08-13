import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/planning/community-lodges-khopra-trek",
  },
  title: "The Community Lodge Network Model on the Khopra Ridge Trek",
  description: "Discover how the community lodge network model on the Khopra Ridge Trek works — where trekker spending directly funds local schools, internet infrastructure.",
};

export default function Page() {
  const modelComparison = [
    {
      factor: "Ownership",
      privateModel: "Individual family or investor",
      communityModel: "Collective community ownership"
    },
    {
      factor: "Revenue destination",
      privateModel: "Private household or investor",
      communityModel: "Community development fund"
    },
    {
      factor: "Decision-making",
      privateModel: "Single owner",
      communityModel: "Elected community committee"
    },
    {
      factor: "Employment",
      privateModel: "Family members primarily",
      communityModel: "Broader village community"
    },
    {
      factor: "Education funding",
      privateModel: "None directly",
      communityModel: "Local teacher salaries funded"
    },
    {
      factor: "Environmental enforcement",
      privateModel: "Individual choice",
      communityModel: "Community-wide strict policies"
    },
    {
      factor: "Economic resilience",
      privateModel: "Household dependent",
      communityModel: "Village-wide distributed"
    },
    {
      factor: "Long-term development",
      privateModel: "Individual family wealth",
      communityModel: "Shared village infrastructure"
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
            <Link href="/planning/teahouse-locator" className="hover:text-emerald-400 transition-colors">Planning</Link>
            <span>/</span>
            <span className="text-emerald-400">Community Lodges</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Sustainable Tourism Nepal
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            The Community Lodge Network Model on the Khopra Ridge Trek
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Discover how trekker spending directly funds local schools, wireless internet infrastructure, wildlife conservation, and long-term village development in Nepal&apos;s Annapurna region.
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
              <a href="#what-is-model" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                What Is the Model?
              </a>
              <a href="#history-origins" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                How System Started
              </a>
              <a href="#mahabir-pun" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Role of Mahabir Pun
              </a>
              <a href="#how-it-operates" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Cooperative Operations
              </a>
              <a href="#revenue-flow" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                How Revenue Flows
              </a>
              <a href="#participating-villages" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Participating Villages
              </a>
              <a href="#education-funding" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Funding School Salaries
              </a>
              <a href="#community-projects" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Community Projects
              </a>
              <a href="#environmental-stewardship" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Environmental Care
              </a>
              <a href="#model-comparison" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Private vs Community Lodges
              </a>
              <a href="#responsible-travel" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why Choose CBT?
              </a>
              <a href="#global-example" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Global Ecotourism Success
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
                Inquire Sustainable Trek
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              The Community Lodge Network Model on the Khopra Ridge Trek
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Most trekking routes in Nepal share a common economic pattern. Travelers pay for food and accommodation, money moves through private lodge owners, and very little of it reaches the broader community. The villages along the route remain largely unchanged while tourism grows around them.
              </p>
              <p>
                The Khopra Ridge Trek works differently.
              </p>
              <p>
                Here, the lodges along the trail are not privately owned businesses. They are collectively managed by the communities that depend on them. The revenue they generate does not flow to individual family owners or outside investors. It cycles directly back into the villages — funding teacher salaries, building rural internet infrastructure, supporting agricultural cooperatives, and protecting the natural environment that makes this region worth visiting in the first place.
              </p>
              <p>
                This is the community lodge network model. And understanding how it works changes how you think about what trekking can actually mean.
              </p>
            </div>
          </article>

          {/* SECTION 1: WHAT IS THE MODEL */}
          <article id="what-is-model" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What Is the Community Lodge Network Model?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Defining a Community Lodge Network:</strong> A system of accommodation facilities collectively owned, managed, and operated by local villages rather than private entrepreneurs. Every participating family contributes labor, resources, or governance responsibility. Profits enter a shared community fund deployed for public priorities.
              </p>
              <p>
                <strong>Why This Tourism Model Is Different:</strong> On standard commercial trails (like Everest Base Camp or Annapurna Circuit), individual lodge owners capture financial gains, leaving neighboring households and public schools with minimal direct benefit. On Khopra Ridge, the entire village is a stakeholder, rewiring tourism to benefit the entire community.
              </p>
            </div>
          </article>

          {/* SECTION 2: HISTORY & ORIGINS */}
          <article id="history-origins" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How the Khopra Ridge Community Lodge System Started
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Addressing Tourism Leakage:</strong> In the early 2000s, Myagdi District villages saw tourism expanding in Nepal while their own schools and health posts remained underfunded. Outside operators captured most profits. To stop this leakage, local Magar and Gurung leaders organized cooperative lodge construction in Swanta, Bayeli, Chhistibung, and Khopra Danda.
              </p>
            </div>
          </article>

          {/* SECTION 3: MAHABIR PUN */}
          <article id="mahabir-pun" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              The Role of Mahabir Pun in Building the Model
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Vision of Mahabir Pun:</strong> Recipient of the prestigious Ramon Magsaysay Award (Asia&apos;s Nobel Prize), Mahabir Pun spearheaded the integration of social enterprise lodges with community development. He envisioned lodges as self-sustaining engines to fund teacher salaries, long-range wireless internet, and agricultural diversification.
              </p>
            </div>
          </article>

          {/* SECTION 4: COOPERATIVE OPERATIONS */}
          <article id="how-it-operates" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How the Community-Owned Lodge Network Operates
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Governance &amp; Staffing:</strong> Lodges are governed by elected village committees. Kitchen staff, managers, and porters are hired locally. Meals incorporate locally grown crops. For trekkers, comfort feels like a warm traditional teahouse — but every dollar spent goes into a shared community bank account.
              </p>
            </div>
          </article>

          {/* SECTION 5: REVENUE FLOW */}
          <article id="revenue-flow" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How Revenue Flows Through the Community Lodge Network
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p className="font-semibold text-emerald-700 bg-emerald-50 p-4 rounded-2xl border border-emerald-200">
                Tourist Payment &rarr; Lodge Operating Revenue &rarr; Community Fund &rarr; Collective Assembly &rarr; Schools, Health Posts &amp; Wireless Internet
              </p>
              <p>
                Net profits after staff wages and food supplies are allocated during public community meetings to address urgent village priorities.
              </p>
            </div>
          </article>

          {/* SECTION 6: PARTICIPATING VILLAGES */}
          <article id="participating-villages" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Villages That Participate in the Lodge Network
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Swanta Village:</strong> <Link href="/nodes/swanta-village-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Swanta Village</Link> lodge supports teacher salaries and an organic yak cheese cooperative.
              </p>
              <p>
                <strong>Bayeli Kharka &amp; Chhistibung:</strong> <Link href="/nodes/bayeli-kharka-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Bayeli Kharka Lodge</Link> funds Nangi health post &amp; midwives; <Link href="/nodes/chhistibung-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Chhistibung Lodge</Link> funds forest wildlife patrols.
              </p>
              <p>
                <strong>Khopra Danda:</strong> <Link href="/nodes/khopra-ridge-lodge" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Khopra Ridge Lodge</Link> (3,660m) reinvests 100% of profits into Nangi High School and rural Wi-Fi.
              </p>
            </div>
          </article>

          {/* SECTION 7: EDUCATION FUNDING */}
          <article id="education-funding" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How Tourism Revenue Supports Education in Local Communities
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Government funding in remote mountain schools is insufficient. Net lodge revenue directly pays qualified teacher salaries in Swanta and Nangi high schools. Children receive quality education locally, stopping forced urban migration.
              </p>
            </div>
          </article>

          {/* SECTION 8: COMMUNITY PROJECTS */}
          <article id="community-projects" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Community Projects Funded by Tourism Income
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Rural Wireless Internet:</strong> Built long-range mountain Wi-Fi enabling tele-medicine and online school classes.
              </p>
              <p>
                <strong>Agricultural Cooperatives:</strong> Swanta organic cheese factory &amp; traditional paper-making workshops diversify the local economy beyond tourism.
              </p>
            </div>
          </article>

          {/* SECTION 9: ENVIRONMENTAL STEWARDSHIP */}
          <article id="environmental-stewardship" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Environmental Stewardship and Sustainable Tourism Practices
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Collective ownership aligns economic benefits with conservation. Single-use plastic water bottles are banned across community lodges. Local committees organize regular trail cleanups and enforce forest protection for endangered <strong>red pandas</strong> and <strong>Himalayan Monal</strong>.
              </p>
            </div>
          </article>

          {/* SECTION 10: MODEL COMPARISON */}
          <article id="model-comparison" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Community Lodge Network vs Traditional Private Teahouse Trekking
            </h2>
            <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">Factor</th>
                    <th className="px-6 py-4">Private Teahouse Model</th>
                    <th className="px-6 py-4">Community Lodge Model</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-600">
                  {modelComparison.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/50">
                      <td className="px-6 py-4 font-bold text-stone-900">{row.factor}</td>
                      <td className="px-6 py-4 text-stone-700">{row.privateModel}</td>
                      <td className="px-6 py-4 font-semibold text-emerald-700">{row.communityModel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          {/* SECTION 11: RESPONSIBLE TRAVEL */}
          <article id="responsible-travel" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Responsible Travelers Choose Community-Based Tourism
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Responsible travelers want clear, verifiable impact. On Khopra Ridge, simply eating meals and sleeping in lodges directly funds high school teachers, health posts, and forest conservation without requiring external charity donations.
              </p>
            </div>
          </article>

          {/* SECTION 12: GLOBAL EXAMPLE */}
          <article id="global-example" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why the Khopra Ridge Trek Is a Global Example of Community Tourism Success
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Khopra Ridge is widely studied by global ecotourism researchers. It proves that remote mountain communities can successfully build, own, and operate sustainable tourism infrastructure that enhances local quality of life while preserving wilderness integrity.
              </p>
            </div>
          </article>

          {/* SECTION 13: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About the Community Lodge Network Model
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "What is the community lodge network model on the Khopra Ridge Trek?",
                  a: "A system of collectively owned and managed accommodation facilities where net profits directly fund teacher salaries, health posts, wireless internet, and forest conservation."
                },
                {
                  q: "Who owns the lodges on the Khopra Ridge Trek?",
                  a: "The lodges in Swanta, Bayeli Kharka, Chhistibung, and Khopra Danda are collectively owned by participating village communities with no private individual owners."
                },
                {
                  q: "How does tourism revenue support schools in local villages?",
                  a: "Net profits from accommodation and dining are pooled into community funds that directly pay teacher salaries at local high schools in Swanta and Nangi."
                },
                {
                  q: "What makes community lodges different from traditional teahouses?",
                  a: "Traditional teahouses are privately owned by individual families. Community lodges are collectively owned, with profits reinvested into public infrastructure and strict environmental bans on single-use plastics."
                },
                {
                  q: "Is the Khopra Ridge Trek an example of sustainable tourism in Nepal?",
                  a: "Yes. It is considered one of Nepal's finest examples of community-based sustainable ecotourism."
                },
                {
                  q: "How does trekking support local communities in Nepal?",
                  a: "By staying in community lodges, 100% of your stay and meal spending stays in the village to fund public education, healthcare, and cooperatives."
                },
                {
                  q: "Who is Mahabir Pun and what was his role in this project?",
                  a: "Mahabir Pun is a Ramon Magsaysay Award-winning educator who pioneered the community lodge model and rural wireless internet across Myagdi District villages."
                },
                {
                  q: "Why do responsible travelers choose community-based tourism?",
                  a: "Because it offers transparent, verifiable local economic impact where traveler spending directly empowers local communities."
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
              Trekking Khopra Ridge connects your journey directly to village empowerment. Every meal and overnight stay directly supports schools, healthcare, and nature conservation in the Annapurna foothills.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Trek With Purpose — Support Local Communities
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                We organize all Khopra Ridge Trek experiences exclusively through the community lodge network. Contact our team in Kathmandu to plan a sustainable, high-impact trek.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Inquire Now — Plan Your Sustainable Trek &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Trek:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/planning/teahouse-locator" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Use our interactive Teahouse Finder tool
                  </Link>
                  <Link href="/planning/teahouses-on-khopra-trek" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read full teahouses accommodation guide
                  </Link>
                  <Link href="/community/gurung-culture" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Explore Gurung culture in Ghandruk
                  </Link>
                  <Link href="/community/magar-culture" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Explore Magar culture in Swanta
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* EEAT Author Verification Banner */}
          <div className="p-6 rounded-3xl bg-stone-100 border border-stone-200 flex items-start gap-4">
            <span className="text-2xl mt-0.5">🏔️</span>
            <div>
              <h4 className="font-bold text-stone-900 text-sm font-sans font-medium">Reviewed by Local Ecotourism Experts</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                This guide is maintained by our licensed local trekking guides operating out of Kathmandu and Pokhara. Nepal Tourism Operator License #8928-091. Email: <a href="mailto:khopraridge51@gmail.com" className="text-emerald-700 font-semibold hover:underline">khopraridge51@gmail.com</a>.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
