import React from "react";
import Link from "next/link";
import AcaFaqInteractive from "./AcaFaqInteractive";

export const metadata = {
  title: "Annapurna Conservation Area (ACA) Guide: Permits, Routes & Rules Explained",
  description: "Planning to trek Annapurna? This complete Annapurna Conservation Area (ACA) guide covers ACAP permits, entry checkpoints, trekking routes, wildlife, and rules you need to know.",
};

export default function AnnapurnaConservationAreaGuidePage() {
  const stats = [
    { label: "Established Year", value: "1986" },
    { label: "Total Protected Area", value: "7,629 sq km" },
    { label: "Elevation Range", value: "790m – 8,091m" },
    { label: "Managing Body", value: "NTNC / ACAP" },
  ];

  const faqs = [
    {
      question: "What is Annapurna Conservation Area (ACA)?",
      answer: "The Annapurna Conservation Area is Nepal's largest protected area, covering about 7,629 square kilometers around the Annapurna massif. It's managed under a community-based conservation model through the Annapurna Conservation Area Project (ACAP), overseen by the National Trust for Nature Conservation (NTNC)."
    },
    {
      question: "Do I need a permit to trek in Annapurna region?",
      answer: "Yes. Every foreign trekker entering the Annapurna Conservation Area needs a valid ACAP permit, which is checked at entry checkpoints and again further along the trail. The fee directly funds conservation and community development work in the region."
    },
    {
      question: "What is the difference between ACAP and TIMS card?",
      answer: "ACAP is the entry permit for the Annapurna Conservation Area itself, while TIMS was originally introduced as a separate trekker registration system for safety tracking. ACAP enforcement on Annapurna trails is consistent, while TIMS requirements have changed several times since 2023 and current guidance is mixed — confirm directly with the Nepal Tourism Board or your trekking agency before you go."
    },
    {
      question: "Where can I get Annapurna trekking permits?",
      answer: "ACAP permits are issued at Nepal Tourism Board and NTNC counters in Kathmandu and Pokhara, and can usually be arranged in advance through a licensed trekking agency. You'll need your passport, a passport photo, and the fee in Nepali rupees."
    },
    {
      question: "How long is ACAP permit valid?",
      answer: "The ACAP permit is a single-entry permit valid for the full duration of your trek inside the conservation area, with no fixed day limit. If you exit the ACA boundary and want to re-enter later, you'll generally need a new permit."
    },
    {
      question: "Can I trek Annapurna without a guide?",
      answer: "Not on most regulated routes. Since 2023, Nepal has required foreign trekkers on major Annapurna trails to be accompanied by a licensed guide or book through a registered trekking agency, primarily for safety reasons."
    },
    {
      question: "What wildlife can be seen in ACA?",
      answer: "The conservation area is home to over 100 mammal species and more than 500 recorded bird species, including the snow leopard, musk deer, and the Himalayan monal, Nepal's national bird. Lower elevations also support a range of reptiles and amphibians."
    },
    {
      question: "Is Annapurna Conservation Area safe for beginners?",
      answer: "Several routes inside the ACA, particularly Ghorepani Poon Hill and Mohare Danda, are well suited to first-time trekkers with reasonable fitness. Higher routes like the Annapurna Circuit and Annapurna Base Camp involve altitude considerations that require more preparation and a guide's pacing advice."
    },
    {
      question: "What happens if I enter ACA without a permit?",
      answer: "Checkpoint staff can require you to purchase a permit on the spot, often with an added penalty fee, and may delay your onward trekking until it's resolved. It's far simpler to arrange the ACAP permit in Kathmandu or Pokhara before heading to the trailhead."
    },
    {
      question: "Which are the best trekking routes inside ACA?",
      answer: "Annapurna Base Camp and Ghorepani Poon Hill are the most popular routes for their views and accessibility, Mardi Himal offers a quieter alternative with similar scenery, and the Annapurna Circuit suits trekkers wanting a longer, more demanding loop. Khopra Ridge and Mohare Danda are strong choices for those seeking fewer crowds."
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
            <span>Ecology Silo</span>
          </div>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Annapurna Conservation Area (ACA) Guide
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Permits, Routes &amp; Rules Explained
          </p>
        </header>

        {/* Fact Grid */}
        <section aria-label="Quick Stats" className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="p-5 bg-white border border-stone-200/80 rounded-3xl shadow-sm text-center">
              <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">{stat.label}</span>
              <span className="text-base font-extrabold text-stone-950 mt-1 block">{stat.value}</span>
            </div>
          ))}
        </section>

        {/* Introduction */}
        <article className="mt-12 space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
          <p>
            If you're planning a trek anywhere near Annapurna Base Camp, Poon Hill, or Mardi Himal, you're going to spend your entire trip inside the <strong>Annapurna Conservation Area</strong>. It isn't a side detail of your trip — it's the legal and ecological framework your whole trek operates within. Before you book flights or pick a route, it helps to understand what this protected area actually is, why a permit is non-negotiable, and how the system works on the ground.
          </p>
          <p>
            This guide walks through the Annapurna Conservation Area from start to finish: what it is, who manages it, what permits you need, where checkpoints are, which routes lie inside it, and what rules trekkers are expected to follow. By the end, you'll know exactly what to prepare before you set foot on the trail.
          </p>

          <hr className="my-10 border-stone-200" />

          {/* Section 1 */}
          <section id="what-is-aca" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              What is the Annapurna Conservation Area?
            </h2>
            <p>
              The <strong>Annapurna Conservation Area (ACA)</strong> is Nepal's largest protected area and the country's first conservation area to be managed under a community-based model rather than a traditional, government-patrolled national park structure. It wraps around the Annapurna massif and several other major Himalayan peaks, and it's the ground that almost every Annapurna region trek — from a short Poon Hill hike to the full Annapurna Circuit — passes through.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Location, size, and altitude range of ACA
            </h3>
            <p>
              The ACA spans roughly 7,629 square kilometers across the Kaski, Manang, Mustang, Myagdi, and Lamjung districts of central Nepal. Elevation inside the area ranges from around 790 meters in the subtropical foothills near Pokhara up to 8,091 meters at the summit of Annapurna I, one of the world's eight-thousanders. That range, from warm lowland villages to glaciated high passes, is part of what makes the region so trek-friendly: there's a route here for nearly every fitness level and timeframe.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Why ACA is Nepal's largest protected area
            </h3>
            <p>
              Size alone makes the ACA significant, but its scale also reflects how many people actually live inside it. Roughly 100,000 residents from multiple ethnic and linguistic communities — including Gurung, Magar, Thakali, and Manangi groups — call the conservation area home. Unlike a national park where local settlement is restricted, the ACA was deliberately designed to let people remain on their land while still protecting forests, wildlife, and watersheds. That's a different conservation philosophy than most protected areas in Nepal, and it directly shapes how trekking here works.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Ecosystem zones across the Annapurna region
            </h3>
            <p>
              Because the altitude swings so dramatically, the ACA isn't one ecosystem — it's several stacked on top of each other. Lower elevations support subtropical and temperate forest with terraced farmland; mid-elevations transition into oak and rhododendron forest; higher up, the trail moves into alpine meadows and scrub; and above the tree line, it's bare rock, scree, and permanent snow and ice. Trekkers often notice this shift happening within a single day's walk, especially on steeper routes like Mardi Himal or the approach to Annapurna Base Camp.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 2 */}
          <section id="governance" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Governance of ACA – ACAP and NTNC System
            </h2>
            <p>
              Understanding who actually runs the Annapurna Conservation Area matters because it explains why the permit system, the trail infrastructure, and even the lodges you'll stay in are organized the way they are.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              What is the Annapurna Conservation Area Project (ACAP)?
            </h3>
            <p>
              The Annapurna Conservation Area Project, generally shortened to ACAP, is the management program that runs the conservation area on the ground. Launched in the mid-1980s, ACAP was Nepal's first attempt at a conservation model that treated local communities as partners rather than obstacles. It oversees forest protection, trail maintenance, waste management infrastructure, and environmental education programs throughout the region, largely funded through the entry permit fee trekkers pay.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Role of the National Trust for Nature Conservation (NTNC)
            </h3>
            <p>
              ACAP operates under the National Trust for Nature Conservation (NTNC), a non-governmental organization established by an act of Nepal's parliament to manage conservation initiatives that sit outside the traditional national park system. NTNC is the body with overall authority over the Annapurna Conservation Area, and permit revenue collected from trekkers is channeled back through NTNC into conservation and community development projects across the region.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Community-based tourism model in Annapurna
            </h3>
            <p>
              What sets the ACA apart from most protected areas is how directly local communities are involved in running it. Village-level conservation area management committees help decide how tourism revenue gets spent in their own area — whether that's a new drinking water system, a school, a health post, or trail repair. Many of the teahouses, guesthouses, and porter services you'll use on an Annapurna trek are locally owned, which means your permit fee and your daily spending both feed back into the same communities you're walking through.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 3 */}
          <section id="permits" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Annapurna Conservation Area Permits Explained (ACAP + TIMS)
            </h2>
            <p>
              This is the section to read carefully, because permit rules for the Annapurna region have changed more than once in recent years, and outdated blog posts online don't always reflect current practice.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              What is the ACAP permit?
            </h3>
            <p>
              The Annapurna Conservation Area Permit (ACAP) is the core entry document for the conservation area. Every foreign trekker entering ACA territory — whether you're heading to Annapurna Base Camp, Poon Hill, Mardi Himal, the Annapurna Circuit, or any offbeat route inside the boundary — needs a valid ACAP. The fee goes directly toward the conservation and community programs described above, so it isn't simply a bureaucratic toll; it's how the protected-area model is funded.
            </p>
            <div className="p-5 bg-emerald-50/80 border border-emerald-200 rounded-2xl text-emerald-950 text-sm font-medium leading-relaxed">
              <strong>2026 ACAP Permit Fees:</strong> The ACAP fee is NPR 3,000 for foreign nationals and NPR 1,000 for SAARC nationals, with children under 10 exempt regardless of nationality. Fees are typically payable in Nepali rupees only, in cash or through the official online portal, and a small surcharge usually applies to online payments.
            </div>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              What is the TIMS card and why it is required?
            </h3>
            <p>
              The Trekkers' Information Management System (TIMS) card was introduced in 2008 as a way for the Nepal Tourism Board and Trekking Agencies' Association of Nepal (TAAN) to track who was trekking where, primarily for safety and search-and-rescue purposes. Historically, it was required alongside ACAP for most Annapurna routes.
            </p>
            <p>
              This is where things get genuinely confusing for trekkers researching online: TIMS rules have shifted multiple times since 2023, and sources disagree about its current status on Annapurna trails. Some current guidance still lists TIMS as a mandatory companion to ACAP, while other up-to-date reports say it isn't being enforced at Annapurna checkpoints in practice, with ACAP functioning as the permit that's actually checked on the ground. Given that inconsistency, the safest move is to confirm the current requirement directly with the Nepal Tourism Board, TAAN, or a registered trekking agency shortly before your trip, rather than relying on any single blog post for a final answer.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Do you need both permits for Annapurna trekking?
            </h3>
            <p>
              ACAP is non-negotiable for any standard route inside the conservation area. Whether you also need a TIMS card depends on which guidance is current at the time you trek, so treat it as a "confirm before you go" item rather than something to assume either way. What is consistent across recent rule changes is the guide requirement: since 2023, Nepal has mandated that foreign trekkers on most routes, including Annapurna's major trails, be accompanied by a licensed guide or book through a registered trekking agency, which typically handles whichever permits are required as part of the booking.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Where and how to obtain permits
            </h3>
            <p>
              ACAP permits are issued at Nepal Tourism Board and NTNC counters in Kathmandu and Pokhara, and can also be arranged in advance through a licensed trekking agency or, in some cases, online. You'll generally need your passport, a passport-sized photo, and the permit fee in Nepali rupees. If you're trekking with an agency, they will usually process this for you as part of your booking, which is one less thing to manage once you land in Nepal.
            </p>

            {/* Step-by-Step Box */}
            <div className="mt-6 p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-emerald-700 block">Process Summary</span>
              <h4 className="text-lg font-bold text-stone-950">A Simple Way to Obtain Your Permit</h4>
              <ol className="space-y-3 text-sm sm:text-base text-stone-700 list-decimal list-inside font-medium">
                <li>Decide your route and confirm current permit requirements with NTB, TAAN, or your agency.</li>
                <li>Gather your passport, a passport photo, and cash in Nepali rupees.</li>
                <li>Visit the NTB/NTNC counter in Kathmandu or Pokhara, or have your agency handle it.</li>
                <li>Pay the fee and collect your permit before heading to the trailhead.</li>
                <li>Carry the permit (and your passport) with you at all times on the trail.</li>
              </ol>
            </div>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Permit validity, rules, and usage during trekking
            </h3>
            <p>
              The ACAP permit is a single-entry permit valid for the duration of your trek inside the conservation area — there's no fixed expiry date tied to a number of days, but if you exit the ACA boundary and want to re-enter, you'll typically need a new permit. You're expected to carry the physical permit with you throughout the trek, since it gets checked at the entry point and again at checkpoints further along the trail.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 4 */}
          <section id="checkpoints" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Entry Points and Checkpoints in Annapurna Conservation Area
            </h2>
            <p>
              Knowing where checkpoints are helps you understand what your first day on the trail will actually look like.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Main entry checkpoints (Nayapul, Birethanti, Ghorepani, etc.)
            </h3>
            <p>
              Most Annapurna treks that start from the Pokhara side pass through Nayapul and Birethanti, two of the most heavily used entry checkpoints for routes heading toward Ghorepani, Poon Hill, Annapurna Base Camp, and Ghandruk. Trekkers heading up to Mardi Himal typically pass through a checkpoint near Kande, and Annapurna Circuit trekkers check in near Besisahar on the eastern side of the loop. At each of these points, ACAP staff log your permit details before letting you continue toward the trail.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              How permit checks work on the trail
            </h3>
            <p>
              In practice, checkpoint staff will ask to see your permit and sometimes your passport, record your details in a logbook or digital system, and wave you through. This usually takes only a few minutes if your paperwork is in order. You'll often pass a second or third checkpoint deeper into the trail — for example near Ghorepani or Chhomrong — where staff verify that your permit matches what was recorded at the entry point.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Consequences of trekking without permits
            </h3>
            <p>
              Entering the conservation area without a valid ACAP is not a minor technicality — it's enforced. Trekkers found without a permit at a checkpoint are typically required to purchase one on the spot, often with an additional penalty fee, and in some cases can be turned back until the paperwork is sorted out. Beyond the financial cost, it's simply not worth the delay and stress when the permit itself takes only a short visit to arrange in Kathmandu or Pokhara before you start.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 5 */}
          <section id="routes" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Annapurna Trekking Routes Inside ACA
            </h2>
            <p>
              Once your permits are sorted, the next decision is which trail to actually walk. The ACA contains routes ranging from short, scenic hikes to multi-week circuits.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Major trekking routes overview
            </h3>
            <p>
              The Annapurna Base Camp (ABC) trek is the region's signature route, typically taking 7 to 12 days and climbing to roughly 4,130 meters with close-up views of the Annapurna massif. The Ghorepani Poon Hill trek is shorter, often completed in 4 to 6 days, and is popular with first-time trekkers thanks to its famous sunrise viewpoint over the Annapurna and Dhaulagiri ranges. The Mardi Himal trek is a quieter alternative that has grown rapidly in popularity, offering ridge-line views with noticeably fewer crowds than ABC. The Annapurna Circuit, one of Nepal's classic long-distance treks, loops around the entire massif and crosses the Thorong La pass at over 5,400 meters.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Offbeat and less crowded routes
            </h3>
            <p>
              For trekkers who want Annapurna's scenery without the busier trails, the <strong>Khopra Ridge trek</strong> and nearby Mohare Danda trek offer similar mountain views with a fraction of the foot traffic, often staying at community-run lodges that funnel income more directly into smaller villages. These routes are worth considering if you've already done a classic Annapurna trek before or simply prefer quieter trails.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Difficulty levels and accessibility of routes
            </h3>
            <p>
              Difficulty inside the ACA varies widely. Poon Hill and Mohare Danda are suitable for beginners with reasonable fitness, ABC and Mardi Himal sit in a moderate category that benefits from some trekking or hiking background, and the full Annapurna Circuit demands stronger endurance and altitude tolerance due to the Thorong La crossing. Matching your route to your fitness level and time budget matters more than chasing the "best" trek — a well-matched shorter route often makes for a better trip than an overly ambitious one.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 6 */}
          <section id="biodiversity" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Biodiversity and Ecosystem of Annapurna Conservation Area
            </h2>
            <p>
              The same altitude range that creates varied trekking difficulty also creates one of the most biodiverse protected areas in the Himalayas.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Flora – rhododendron forests and alpine vegetation
            </h3>
            <p>
              The ACA is home to over 1,200 species of flowering plants, and its rhododendron forests are one of the region's signature features, especially in spring when the hillsides around Ghorepani and Poon Hill turn shades of red and pink. Higher up, forest gives way to alpine meadows and hardy scrub vegetation adapted to thin air and harsh winters.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Fauna – wildlife of ACA
            </h3>
            <p>
              The conservation area shelters more than 100 species of mammals and over 500 recorded bird species. The most iconic resident is the snow leopard, an elusive high-altitude predator that's become something of a symbol for Himalayan conservation. Musk deer and the Himalayan monal — Nepal's vividly colored national bird — are also found within ACA boundaries, alongside numerous reptile and amphibian species at lower elevations.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Why this ecosystem is globally important
            </h3>
            <p>
              The Annapurna Conservation Area sits within a broader Himalayan biodiversity corridor that connects fragmented habitats across the region, which matters for species like the snow leopard that need large, connected ranges to survive. Protecting this corridor isn't just about Annapurna — it has knock-on effects for wildlife populations and watershed health across a much wider stretch of the Himalayas.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 7 */}
          <section id="conservation" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Conservation Efforts and Sustainable Tourism in ACA
            </h2>
            <p>
              Trekking through the ACA means trekking through an active conservation experiment, not just a scenic backdrop.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Community-based conservation model in practice
            </h3>
            <p>
              In practical terms, local conservation area management committees decide how to allocate funds for forest patrols, trail maintenance, and community infrastructure in their own villages. This decentralized structure is part of why the ACAP model is often cited internationally as an example of conservation that works with local communities instead of displacing them.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Sustainable tourism initiatives in Annapurna region
            </h3>
            <p>
              Across the trekking routes, you'll see kerosene depots and backup electricity systems introduced specifically to reduce reliance on firewood for cooking and heating, since unmanaged demand for firewood was putting real pressure on forests before ACAP intervened. Many teahouses now also separate and manage waste more carefully than they did a decade ago, partly as a result of ACAP-led education and infrastructure programs.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Environmental challenges and protection measures
            </h3>
            <p>
              None of this means the pressure is gone. Rising trekker numbers, plastic waste, and the effects of a warming climate on glaciers and water sources are ongoing challenges across the Annapurna region. ACAP's response has leaned on a mix of regulation, local enforcement, and trekker education — which is one reason the rules covered in the next section exist in the first place.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 8 */}
          <section id="rules" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Trekking Rules and Responsible Travel Guidelines
            </h2>
            <p>
              The ACA's permit system is only part of how the area is managed. The rest comes down to trekker behavior on the ground.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Trekking regulations inside ACA
            </h3>
            <p>
              Camping outside designated areas, cutting live wood for fires, and disturbing wildlife are all restricted inside the conservation area. Most independent campfires are discouraged or banned outright in favor of kerosene or gas stoves at teahouses, which helps limit deforestation along heavily trekked corridors.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Environmental responsibility (Leave No Trace principles)
            </h3>
            <p>
              Carrying out what you carry in, avoiding single-use plastic where possible, and sticking to marked trails all matter more here than they might elsewhere, simply because of how many trekkers move through a relatively narrow band of trail each season. Many teahouses now sell filtered or boiled water specifically to cut down on discarded plastic bottles — using these instead of buying new bottles is a small habit that adds up across thousands of trekkers.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Cultural respect in local villages
            </h3>
            <p>
              The villages you pass through, from Ghandruk to Manang, are home to distinct ethnic communities with their own customs, monasteries, and gompas. Dressing modestly, asking before photographing people, and respecting prayer wheels and chortens by passing them on the correct side are simple gestures that go a long way with local hosts.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Trail safety and trekking conduct
            </h3>
            <p>
              Altitude-related illness is the most common safety issue on Annapurna's higher routes, particularly above 3,000 meters. Acclimatization days, gradual ascent, and listening to a guide's advice about pace are far more effective than pushing through symptoms. Staying on marked trails also matters for safety, since shortcuts in this terrain can mean unstable scree or unmarked drop-offs.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 9 */}
          <section id="practical-guide" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Practical Guide for Trekking in Annapurna Conservation Area
            </h2>
            <p>
              With permits, routes, and rules covered, here's what to actually plan around.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Best seasons for trekking in ACA
            </h3>
            <p>
              Spring (March to May) and autumn (late September to November) are the two prime trekking windows, offering the clearest mountain views and, in spring's case, blooming rhododendron forests. Winter trekking is possible on lower routes like Poon Hill but gets significantly colder and snowier at higher elevations, while the summer monsoon (June to August) brings heavy rain, leeches at lower elevations, and reduced visibility on most trails.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Guided vs solo trekking rules and recommendations
            </h3>
            <p>
              Since 2023, Nepal has required foreign trekkers on most Annapurna routes to trek with a licensed guide rather than fully independently, a rule introduced largely for trekker safety and search-and-rescue reasons. A March 2026 update to restricted-area trekking rules also removed the old requirement for a minimum group size of two on certain restricted routes, meaning solo travelers can now arrange a restricted-area trek with just a licensed guide rather than needing a trekking partner. Independent trekking with no guide at all remains off the table on regulated routes, so plan to book through a registered agency or hire a licensed guide directly.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Fitness level and preparation tips
            </h3>
            <p>
              Most standard Annapurna routes don't require technical climbing skills, but daily walks of 5 to 7 hours with significant elevation gain are normal, so building up cardiovascular fitness and practicing on hilly terrain beforehand makes a real difference. Pack layered clothing for temperature swings between lower valleys and high passes, break in your trekking boots before you arrive, and budget extra days for acclimatization on any route that climbs above 3,000 meters.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 10: FAQ */}
          <section id="faq-section" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight mb-8">
              Frequently Asked Questions (FAQ)
            </h2>
            <AcaFaqInteractive faqs={faqs} />
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 11: Conclusion */}
          <section id="conclusion" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Conclusion
            </h2>
            <p>
              The Annapurna Conservation Area is both a protected ecosystem and a regulated trekking system, and understanding how the two fit together is what actually makes a trip here go smoothly. Get your ACAP permit sorted, confirm current guide and TIMS requirements before you travel, pick a route that matches your fitness and time, and follow the trail rules that keep this region intact for the communities and wildlife that depend on it. Trek prepared, trek respectfully, and the Annapurna region will give you one of the most rewarding stretches of trail in the Himalayas.
            </p>
          </section>
        </article>

        {/* Sub-Silo Navigation Bar */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Explore More Ecology Resources</h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 text-xs font-semibold text-stone-600">
            <Link href="/ecology/flora-of-khopra" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
              <span>Flora of Khopra</span>
              <span>→</span>
            </Link>
            <Link href="/ecology/birds-of-annapurna" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
              <span>Birds of Annapurna</span>
              <span>→</span>
            </Link>
            <Link href="/ecology/spring-rhododendron-bloom" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
              <span>Rhododendron Bloom</span>
              <span>→</span>
            </Link>
            <Link href="/ecology/wildlife-khopra-trek" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
              <span>Wildlife Guide</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏞️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              We coordinate directly with NTNC checkpost officers to monitor wildlife sightings, forest degradation patterns, and trail safety conditions across the Annapurna Conservation Area.
            </p>
          </div>
        </div>

        {/* CTA Box */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 sm:p-10 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-2">Plan Your Himalayan Journey</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">Check Your Annapurna Trek Permits &amp; Plan Your Route</h3>
            <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Get current ACAP and guide requirements sorted before you go, then explore Annapurna trekking routes to find the trail that fits your trip. Book our core 9-day itinerary where 100% of accommodation profits directly support local Magar community lodges inside the conservation area.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/#book"
                className="rounded-full bg-emerald-600 px-8 py-3.5 text-sm font-bold text-white hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-950/40"
              >
                Inquire Now &amp; Book Permits
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
