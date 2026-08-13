import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/planning/do-you-need-a-guide",
  },
  title: "Do You Need a Guide for the Khopra Trek? Nepal Rules",
  description: "Planning the Khopra Trek? Find out whether a guide is legally required, what Nepal's trekking regulations say for foreign travelers, and why local expertise.",
};

export default function Page() {
  const guideReasons = [
    {
      title: "Official Government Regulation",
      desc: "The Nepal Tourism Board (NTB) mandates that all foreign trekkers must hire a licensed local guide when hiking in conservation zones (like the Annapurna Conservation Area)."
    },
    {
      title: "Forest Trail Navigation",
      desc: "The trails through mossy forests between Tadapani, Dobato, and Chhistibung are narrow and have few signs. Getting lost is easy, especially in cloudy afternoon weather."
    },
    {
      title: "Lodge Capacity Guarantees",
      desc: "Community lodges at Bayeli Kharka and Khopra Ridge are very small. Local guides coordinate bookings in advance, ensuring you have a room space during peak months."
    },
    {
      title: "Altitude Safety Monitoring",
      desc: "Guides monitor your pacing, check oxygen saturation levels twice daily, and coordinate emergency helicopter evacuations if severe AMS symptoms develop."
    }
  ];

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
            <Link href="/planning/khopra-trek-cost" className="hover:text-emerald-400 transition-colors">Planning</Link>
            <span>/</span>
            <span className="text-emerald-400">Do I Need A Guide?</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Nepal Regulations &amp; Safety Compliance
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Do You Need a Guide for the Khopra Trek?
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Understand Nepal&apos;s guide regulations, safety protocols, and expert advice for the Annapurna Conservation Area.
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
              <a href="#short-answer" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                The Short Answer
              </a>
              <a href="#regulations" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                NTB &amp; ACAP Rules
              </a>
              <a href="#why-challenging" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why Khopra is Demanding
              </a>
              <a href="#route-navigation" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Navigation Challenges
              </a>
              <a href="#safety-risks" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Altitude &amp; AMS Risks
              </a>
              <a href="#permit-requirements" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Required Permits
              </a>
              <a href="#guide-costs" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Guide Cost Breakdown
              </a>
              <a href="#independent-pitfalls" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Independent Problems
              </a>
              <a href="#experienced-trekkers" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Can I Trek Independently?
              </a>
              <a href="#experience-boost" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Experience &amp; Culture
              </a>
              <a href="#our-recommendation" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Our Recommendation
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
                Inquire Guide Services
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Do You Need a Guide for the Khopra Trek in Nepal?
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Yes — hiring a licensed local guide is strongly recommended for the Khopra Trek, and Nepal&apos;s trekking regulations make this a legal requirement for foreign travelers in protected trekking regions such as the Annapurna Conservation Area. This is not a suggestion buried in fine print. It reflects the remote nature of the Khopra route, the real safety risks at altitude, and the practical realities of a trail that sees far fewer trekkers than popular Nepal circuits.
              </p>
              <p>
                This guide covers what Nepal&apos;s current regulations say, why the Khopra Trek is more demanding than most trekkers expect, what safety risks exist on this route, how much hiring a guide costs, and how to make the right decision for your trek. Whether you are a first-time Nepal trekker or an experienced Himalayan hiker, the information here will help you plan with confidence.
              </p>
            </div>
          </article>

          {/* SECTION: SHORT ANSWER */}
          <article id="short-answer" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              The Short Answer — Do You Need a Guide for the Khopra Trek?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Is a Guide Legally Required for Foreign Trekkers?</strong> Under Nepal&apos;s trekking regulations, foreign travelers are required to trek with a licensed local guide in designated protected areas — which includes the Annapurna Conservation Area, the protected zone through which the entire Khopra Ridge circuit passes. This rule was strengthened in recent years following a series of trekking accidents, missing trekkers, and emergency rescue incidents across Nepal&apos;s mountain regions.
              </p>
              <p>
                Solo, unguided trekking by foreign nationals is not permitted in these zones. Trekking agencies and guides operating legally in Nepal must be registered with the Nepal Tourism Board, and guides must carry valid identification issued by the Trekking Agencies&apos; Association of Nepal (TAAN).
              </p>
              <p>
                <strong>Why This Question Matters Before Planning Your Trek:</strong> The guide requirement affects your planning budget, your permit process, and your safety preparations before you leave Pokhara. Trekkers who arrive without a pre-arranged guide sometimes face delays, confusion at permit checkpoints, or in some cases, are required to hire a guide on the spot at premium rates.
              </p>
            </div>
          </article>

          {/* Reasons Grid */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-stone-955">Why Trekking with a Guide is Vital</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {guideReasons.map((item, i) => (
                <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                  <h4 className="font-extrabold text-stone-950 text-sm sm:text-base">{item.title}</h4>
                  <p className="mt-2 text-xs text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION: REGULATIONS */}
          <article id="regulations" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Understanding Nepal&apos;s Trekking Regulations for Foreign Travelers
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>The Role of Nepal Tourism Board:</strong> The Nepal Tourism Board (NTB) oversees trekking regulations in partnership with the Department of Tourism. These regulations govern which areas require permits, which areas require licensed guides, and what documentation foreign trekkers must carry. For conservation areas like the Annapurna Conservation Area, the rules are enforced through checkpoint systems along the trail.
              </p>
              <p>
                The shift toward mandatory guide requirements in these zones was partly a safety response. Nepal receives thousands of international trekkers each year across routes of varying difficulty and remoteness. The checkpoint system, combined with the guide requirement, allows search and rescue teams to track trekker movements and respond more effectively when incidents occur.
              </p>
              <p>
                <strong>Rules for Trekking Inside the Annapurna Conservation Area:</strong> The Annapurna Conservation Area Project (ACAP) manages this protected zone and issues the conservation area permit required for the Khopra Trek. This permit, known as the ACAP permit, is mandatory for all trekkers — foreign and domestic — and must be presented at checkpoints along the route.
              </p>
              <p>
                Foreign trekkers are additionally required to hold a TIMS card (Trekkers&apos; Information Management System), which registers your identity, emergency contact, and intended route. Both documents are issued in Pokhara or Kathmandu before the trek begins. Trekking without a licensed guide in this area places you in direct violation of these regulations.
              </p>
            </div>
          </article>

          {/* SECTION: WHY CHALLENGING */}
          <article id="why-challenging" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why the Khopra Trek Is More Challenging Than Popular Nepal Treks
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Khopra Is an Off-the-Beaten-Path Trek:</strong> The Khopra Ridge Trek is one of the Annapurna region&apos;s best-kept secrets — and that is exactly what makes it different from the routes most trekkers compare it to. The trail from Ghandruk through Tadapani, Dobato, and up to Bayeli Kharka and Khopra Ridge sees a fraction of the daily foot traffic you encounter on the Ghorepani Poon Hill circuit or the Annapurna Base Camp route.
              </p>
              <p>
                Fewer trekkers on the trail means fewer people around if something goes wrong. It means fewer trail markers, less reliable directions from passersby, and a slower emergency response window if you need help. These are operational realities that shape how this route should be planned.
              </p>
              <p>
                <strong>Trail Infrastructure Is Less Developed:</strong> On the Ghorepani Poon Hill trail, you can expect well-worn paths, regular signage, teahouses at predictable intervals, and a steady flow of trekkers and staff who can help if you lose the path or feel unwell. The Khopra circuit does not offer the same infrastructure.
              </p>
              <p>
                Forest trails between Tadapani and Dobato are narrow, often unmarked, and easy to misread — especially in afternoon cloud or light rain. Community lodges at Bayeli Kharka and Khopra Ridge are small and have limited rooms. The trail between Dobato and Chistibung passes through terrain that changes character significantly by season.
              </p>
            </div>
          </article>

          {/* SECTION: ROUTE NAVIGATION */}
          <article id="route-navigation" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Understanding the Khopra Trek Route and Navigation Challenges
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Typical Route From Pokhara Through the Khopra Circuit:</strong> Most trekkers begin the Khopra Ridge Trek from Pokhara, taking a vehicle or local transport to Nayapul or Kimche before ascending to Ghandruk — one of the most beautifully situated Gurung villages in the Annapurna foothills. From Ghandruk, the standard route climbs through dense rhododendron forest to Tadapani, then continues on quieter trails through Dobato, Swanta, Bayeli Kharka, and Chistibung before reaching the community lodge cluster at Khopra Ridge, elevation approximately 3,660 metres.
              </p>
              <p>
                The optional extension to Khayer Lake — a sacred Himalayan lake sitting at roughly 4,900 metres — adds another day and requires careful altitude acclimatization. Most trekkers complete the circuit in six to eight days depending on pace and extensions.
              </p>
              <p>
                <strong>Why Navigation Can Be Difficult on Less-Traveled Forest Trails:</strong> The trail through the forest sections between Tadapani and Dobato, and again between Dobato and Bayeli Kharka, does not have consistent signage. Junctions appear without markers. Weather conditions — particularly afternoon mist, which is common even in October — can reduce visibility significantly on these stretches.
              </p>
              <p>
                Our local guides have trekked these sections hundreds of times across different seasons. They know which junction to take when the path forks, which alternative trail to use after monsoon landslides have shifted the usual route, and where to stop to check conditions before continuing toward the ridge. That knowledge is not something a map application reliably provides on an offbeat Nepal circuit.
              </p>
            </div>
          </article>

          {/* SECTION: SAFETY RISKS */}
          <article id="safety-risks" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Safety Risks Trekkers Should Consider Before Going Without a Guide
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Altitude Risks and Recognizing Early Signs of AMS:</strong> Acute Mountain Sickness (AMS) can affect any trekker regardless of fitness level. The Khopra Ridge sits at approximately 3,660 metres, and the Khayer Lake extension reaches nearly 4,900 metres — altitudes at which AMS becomes a genuine clinical risk, not just a possibility.
              </p>
              <p>
                Early symptoms of AMS include persistent headache, nausea, loss of appetite, dizziness, and disrupted sleep. If these are ignored or misread as ordinary tiredness, they can progress to High Altitude Pulmonary Edema (HAPE) or High Altitude Cerebral Edema (HACE), both of which are life-threatening. Guided trekking teams typically carry pulse oximeters to monitor oxygen saturation, track ascent pace, and make descent decisions early when symptoms appear.
              </p>
              <p>
                <strong>Weather Changes and Emergency Response Limitations:</strong> Mountain weather in the Annapurna region is changeable and sometimes severe. Afternoon cloud buildup is routine, but sudden wind increases, snowfall above 3,500 metres, and temperature drops of 10–15 degrees Celsius within hours are not uncommon in shoulder seasons. A trekker caught on an exposed ridge section without local knowledge of escape routes or nearby shelter is in a genuinely dangerous situation.
              </p>
              <p>
                Communication on the Khopra route is limited. Cellular coverage is unreliable above Tadapani and practically absent on sections of the upper ridge. A licensed guide carries emergency communication knowledge, maintains contacts with local rescue networks, and knows which lodges along the route have radio or satellite communication capacity.
              </p>
              <p>
                <strong>What Happens If You Need Emergency Evacuation:</strong> Emergency helicopter rescue in Nepal is coordinated through insurance companies, local trekking agencies, and government rescue organizations. If you require evacuation from the upper Khopra section, a guide on the ground can coordinate faster than an independent trekker trying to navigate the process alone — and in a medical emergency, response time matters.
              </p>
            </div>
          </article>

          {/* SECTION: PERMIT REQUIREMENTS */}
          <article id="permit-requirements" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Permit Requirements for the Khopra Trek
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Two permits are required before you enter the Khopra trek route:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>ACAP Permit (Annapurna Conservation Area Permit):</strong> Issued by the Nepal Tourism Board, this covers your entry into the protected conservation zone. It costs approximately USD 30 per person for foreign nationals.</li>
                <li><strong>TIMS Card (Trekkers&apos; Information Management System):</strong> Issued through authorized trekking agencies or the NTB offices in Pokhara or Kathmandu. The cost is approximately USD 20 per person when arranged through a registered agency.</li>
              </ul>
              <p>
                <strong>How Permit Rules Connect With Trekking Guide Requirements:</strong> A licensed guide simplifies the permit process significantly. Registered trekking operators — including our team, operating under Nepal Tourism Operator License #8928-091 — handle permit applications as part of the guided trek arrangement. Your ACAP and TIMS documentation is prepared before departure, checked before the trek begins, and carried in a format that checkpoint staff recognize immediately.
              </p>
            </div>
          </article>

          {/* SECTION: GUIDE COSTS */}
          <article id="guide-costs" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How Much Does a Guide Cost for the Khopra Trek?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Licensed trekking guide rates in Nepal are influenced by experience level, language skills, and the specific demands of the route.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Standalone Guide:</strong> USD 25–40 per day. Manages navigation, safety, and logistics, but you carry your own bag. This fee typically includes their meals, accommodation, and government-mandated insurance coverage.</li>
                <li><strong>Porter Guide:</strong> A porter guide combination costs USD 20–30 per day for the porter, in addition to the guide rate. A porter typically carries up to 20–25 kg of combined luggage.</li>
                <li><strong>Full Guided Trek Package:</strong> Packages that include guide, porter (where needed), all permits, accommodation, and transport from Pokhara typically range from USD 400–700 per person for the standard Khopra Ridge circuit, depending on group size and duration.</li>
              </ul>
            </div>
          </article>

          {/* SECTION: INDEPENDENT PITFALLS */}
          <article id="independent-pitfalls" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Practical Problems Independent Trekkers Often Underestimate
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Limited Community Lodges and Advance Booking Challenges:</strong> The community lodges at Bayeli Kharka, Chistibung, and Khopra Ridge are small. Some have as few as eight to twelve rooms. During peak trekking season — October, November, and March to April — these lodges fill quickly. Unlike popular routes where you can almost always find accommodation by walking in, the Khopra route requires advance coordination.
              </p>
              <p>
                Local guides maintain direct communication with lodge owners along the route and book rooms in advance as part of their standard service. Trekkers arriving independently during peak season sometimes find the best lodges full, forcing either a longer day&apos;s walk to an alternate stop or an unplanned overnight at a suboptimal location.
              </p>
              <p>
                <strong>Language Barriers and Local Logistics Issues:</strong> Most lodge owners and villagers along the circuit speak limited English. Meals, water sourcing, route directions, and medical situations all become more complex without someone who can communicate fluently in Nepali or the local Magar language.
              </p>
            </div>
          </article>

          {/* SECTION: EXPERIENCED TREKKERS */}
          <article id="experienced-trekkers" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Can Experienced Trekkers Do the Khopra Trek Without a Guide?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Experienced trekkers with prior Nepal trekking experience, strong navigation skills, prior AMS management knowledge, and a clear understanding of Nepal&apos;s permit system are better equipped to handle the Khopra route independently than first-time visitors. If you have completed multi-day routes in the Annapurna region before, have relevant wilderness first aid training, and can confidently navigate unmarked forest trails, you have a baseline that reduces some of the practical risks.
              </p>
              <p>
                That said, the legal requirement for a licensed guide in the Annapurna Conservation Area applies regardless of experience level. Independent trekking in this protected zone is not a grey area under current Nepal regulations.
              </p>
              <p>
                <strong>Why Local Knowledge Still Makes a Major Difference:</strong> Even trekkers with extensive Himalayan experience consistently report that a Khopra-specific guide adds value they did not expect. This route changes significantly by season — trail sections that are stable in October can be washed out or blocked in early November after unseasonal precipitation. Lodge conditions, opening dates, and capacity at specific stops change year to year.
              </p>
            </div>
          </article>

          {/* SECTION: EXPERIENCE BOOST */}
          <article id="experience-boost" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Hiring a Local Guide Improves the Overall Trekking Experience
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Better Safety, Navigation, and Logistics Support:</strong> Beyond safety and legal considerations, a good Khopra guide manages the logistical burden — permits, lodge bookings, meal arrangements, and transport coordination. They set a pace that accounts for altitude, weather, and your physical condition. If a washed-out trail section or altitude symptom appears, a local expert makes a decisive difference.
              </p>
              <p>
                <strong>Cultural Insights and Local Experience:</strong> The Khopra circuit passes through Magar and Gurung communities that have maintained distinct cultural traditions in these Annapurna foothills for generations. Ghandruk is one of Nepal&apos;s most significant Gurung villages, with stone-paved lanes, traditional architecture, and community life.
              </p>
              <p>
                A local guide opens those doors in ways that a solo trekker walking through cannot access. They know the village elders, explain what the festivals or cultural sites you pass actually mean, and provide a level of contextual richness that makes the Khopra Trek more than a hike through beautiful scenery — it becomes a genuine encounter with a living mountain culture.
              </p>
            </div>
          </article>

          {/* SECTION: OUR RECOMMENDATION */}
          <article id="our-recommendation" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Our Recommendation for Most International Trekkers Planning the Khopra Trek
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                For the following groups, we recommend a licensed guide without reservation:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li>First-time Nepal trekkers who are unfamiliar with Himalayan altitude, permit systems, or remote trail logistics.</li>
                <li>Solo travelers who would have no support system in the event of illness, injury, or route confusion.</li>
                <li>Trekkers visiting during shoulder seasons (late November or early spring) when trail and weather conditions are less predictable.</li>
                <li>Anyone planning the Khayer Lake extension, which reaches nearly 4,900 metres and involves genuine altitude acclimatization requirements.</li>
                <li>Trekkers without prior AMS experience who have not trekked above 3,000 metres before.</li>
              </ul>
              <p>
                <strong>Why We Recommend Trekking With Experienced Local Guides:</strong> We are a licensed Nepal trekking operator (Tourism Operator License #8928-091) based in Pokhara, specializing in the Khopra Ridge circuit and Annapurna Conservation Area routes. Our guides are from this region, carry first aid kits and oximeters, maintain current lodge contacts, are trained in AMS identification, and speak English as well as Nepali and local languages.
              </p>
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About the Khopra Trek Guide Requirement
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Is a guide mandatory for the Khopra Trek in Nepal?",
                  a: "Yes. Nepal's trekking regulations require foreign trekkers to trek with a licensed local guide in protected conservation areas, including the Annapurna Conservation Area through which the Khopra Trek passes. Trekking without a licensed guide in this zone violates current Nepal Tourism Board regulations."
                },
                {
                  q: "Can foreigners do the Khopra Trek without a guide?",
                  a: "Under current Nepal regulations, independent unguided trekking by foreign nationals is not permitted in the Annapurna Conservation Area. Beyond the legal requirement, the remote nature of the Khopra route, limited trail signage, and small community lodges with no advance booking system create practical challenges for independent trekkers."
                },
                {
                  q: "What permits do I need for the Khopra Trek?",
                  a: "Two permits are required: the ACAP (Annapurna Conservation Area Permit) and the TIMS card (Trekkers' Information Management System). Both are obtained before the trek begins, either through a registered trekking agency or from the NTB offices in Pokhara or Kathmandu."
                },
                {
                  q: "How difficult is the Khopra Ridge Trek?",
                  a: "The Khopra Ridge Trek is rated moderate to moderately challenging. Daily walking stages range from four to seven hours. The route includes forest trails with limited signage, cumulative altitude gain to approximately 3,660 metres at Khopra Ridge, and an optional extension to Khayer Lake at approximately 4,900 metres."
                },
                {
                  q: "How much does a trekking guide cost for the Khopra Trek?",
                  a: "Licensed trekking guides on the Khopra route typically cost USD 25–40 per day. Full guided trek packages that include guide, porter (where required), permits, accommodation, and transport from Pokhara typically range from USD 400–700 per person for the standard circuit, depending on group size and trip duration."
                },
                {
                  q: "Can I start the Khopra Trek from Pokhara?",
                  a: "Yes. Most trekkers begin by taking a vehicle from Pokhara to Nayapul or Kimche, then ascending on foot to Ghandruk. Total travel time from Pokhara to Ghandruk is typically three to four hours depending on transport and walking pace."
                },
                {
                  q: "Is the Khopra Trek safe for beginners?",
                  a: "The Khopra Trek is achievable for beginners who are in reasonable physical condition and have adequate preparation time. However, it is not suitable for complete beginners attempting it independently due to altitude, navigation, and lodge limits."
                },
                {
                  q: "What is the best time to do the Khopra Trek?",
                  a: "The best trekking windows are October to November (post-monsoon) and March to April (spring). October in particular offers clear skies, excellent mountain visibility, and comfortable daytime temperatures. December through February is colder at altitude."
                },
                {
                  q: "Do I need a porter for the Khopra Trek?",
                  a: "A porter is not mandatory, but recommended for trekkers who prefer to walk with a light day pack. Carrying a full trekking pack while ascending to altitude adds significant physical strain. Porter guide combinations are available, where one person handles both navigation and luggage carrying."
                },
                {
                  q: "How many days does the Khopra Trek usually take?",
                  a: "The standard Khopra Ridge circuit takes six to seven days from Ghandruk and back, including a rest/acclimatization day before the summit ridge section. Adding the Khayer Lake extension adds one to two days. Most trekkers complete the full circuit including Khayer Lake in eight days, plus travel time from Pokhara."
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
              The Khopra Ridge Trek is one of Nepal&apos;s most rewarding offbeat Himalayan experiences — a route that combines genuine wilderness, dramatic Annapurna views, and authentic Magar village culture in a circuit that still feels uncrowded even during peak season.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              It is also a trek where the case for local expertise is genuinely strong, not just on regulatory grounds. The trail navigation challenges between Tadapani and Dobato, the limited lodge capacity at Bayeli Kharka and Khopra Ridge, the altitude considerations on the Khayer Lake extension, and the emergency response limitations on a remote route without consistent mobile coverage — all of these are real factors that a licensed guide manages on your behalf.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Plan Your Khopra Trek With Our Licensed Local Team
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                We are a Nepal-registered trekking operator (Tourism Operator License #8928-091) based in Pokhara, specializing in the Khopra Ridge circuit and Annapurna Conservation Area routes. Our certified guides trek this route regularly, maintain current lodge contacts along the full circuit, and handle permits, transport, and logistics from the moment you arrive.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Contact Our Team &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Trek:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/planning/how-fit-to-trek-khopra" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read the baseline physical fitness requirements guide
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
                This trekking regulations and guide briefing is compiled seasonally in coordination with the Nepal Tourism Board (NTB). Licensed Nepal Tourism Operator EMD Treks #8928-091. Pokhara &amp; Swanta, Nepal. Email: <a href="mailto:info@khopraridgetrek.com" className="text-emerald-700 font-semibold hover:underline">info@khopraridgetrek.com</a>.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
