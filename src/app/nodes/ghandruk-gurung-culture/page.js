import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/nodes/ghandruk-gurung-culture",
  },
  title: "Gurung Culture & Heritage in Ghandruk | Khopra Ridge Trek",
  description: "Discover authentic Gurung culture in Ghandruk village, traditions, festivals, architecture, food, and the living heritage of Nepal's Annapurna region.",
};

export default function Page() {
  const customCards = [
    {
      title: "Historical Migrations",
      desc: "Oral records trace the Gurung heritage back to migrations from the Tibetan plateau into Gandaki Province centuries ago, adapting custom to alpine farming."
    },
    {
      title: "Communal Cooperation",
      desc: "Neighbors share house-building, agricultural harvesting, and family life events on a rotating cooperative basis rather than working individually."
    },
    {
      title: "Gurkha Soldier Connection",
      desc: "Retired servicemen from British and Indian regiments settle back in Ghandruk, funding community schools and operating local teahouses."
    },
    {
      title: "Cohesive Stone Architecture",
      desc: "Tightly stacked stone buildings with grey-blue slate sheets line cobbled paths, custom-contoured to step down the steep valley walls."
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
            <Link href="/nodes" className="hover:text-emerald-400 transition-colors">Nodes</Link>
            <span>/</span>
            <Link href="/nodes/ghandruk-village-guide" className="hover:text-emerald-400 transition-colors">Ghandruk Guide</Link>
            <span>/</span>
            <span className="text-emerald-400">Gurung Culture</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Cultural Preservation &amp; Heritage
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Gurung Culture &amp; Heritage in Ghandruk
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Understand the traditions, lifestyle, festivals, and military history of Nepal&apos;s primary indigenous Gurung settlement.
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
              <a href="#cultural-village" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Cultural Village
              </a>
              <a href="#who-are-gurung" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Who Are They?
              </a>
              <a href="#lifestyle" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Traditional Lifestyle
              </a>
              <a href="#architecture" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Architecture
              </a>
              <a href="#social-customs" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Social Customs
              </a>
              <a href="#rodhi-ghar" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Rodhi Ghar
              </a>
              <a href="#festivals" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Festivals &amp; Dance
              </a>
              <a href="#dress-jewelry" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Dress &amp; Jewelry
              </a>
              <a href="#food-hospitality" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Food &amp; Hospitality
              </a>
              <a href="#gurkha-heritage" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Gurkha Soldiers
              </a>
              <a href="#experiences" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Traveler Activities
              </a>
              <a href="#preservation" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Cultural Preservation
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
                Inquire with Planners
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Ghandruk is not just a stop on the trail to Annapurna Base Camp or Poon Hill. It is a living village, built stone by stone over generations by the Gurung people, and it remains one of the clearest windows into indigenous Himalayan culture that Nepal has to offer.
              </p>
              <p>
                Most visitors arrive thinking of Ghandruk as scenery — terraced fields, slate roofs, the Annapurna massif rising behind it all. They leave understanding it as something more: a community that has held onto its language, its festivals, its clan structures, and its way of welcoming strangers, even as the rest of the country has changed quickly around it.
              </p>
              <p>
                This guide explains the Gurung culture and heritage in Ghandruk in depth — who the Gurung people are, how they live, what they celebrate, and how travelers can experience this culture respectfully and meaningfully. Whether you&apos;re planning a trek through the Annapurna Conservation Area or simply researching Nepal&apos;s indigenous communities, this is the cultural context that makes Ghandruk worth understanding before you visit.
              </p>
            </div>
          </article>

          {/* SECTION: IMPORTANCE */}
          <article id="cultural-village" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Ghandruk Is One of Nepal&apos;s Most Important Cultural Villages
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                <strong>Where Ghandruk Is Located:</strong> Ghandruk sits in the Kaski district, roughly a half-day&apos;s drive and a short trek from Pokhara, perched on a hillside at around 2,000 meters with the Annapurna and Machhapuchhre peaks framing the skyline. It lies inside the Annapurna Conservation Area, which means the village has grown up alongside one of Nepal&apos;s most visited — and most protected — trekking regions.
              </p>
              <p>
                That location matters culturally as much as it does geographically. Ghandruk&apos;s position along major trekking routes has exposed it to the outside world for decades, yet the village has managed to keep its core identity intact. Stone houses still outnumber concrete ones. Gurung is still the first language spoken at home for many families.
              </p>
              <p>
                <strong>Why Ghandruk Became a Cultural Center:</strong> Ghandruk&apos;s cultural weight comes from its size and its history. It&apos;s one of the largest and oldest Gurung settlements in the Annapurna region, which means it has long served as a hub — for trade, for marriage alliances between clans, and for the kind of community gatherings that smaller, scattered villages couldn&apos;t easily host.
              </p>
              <p>
                The village also became a center of military recruitment during the era of British and Indian Gurkha regiments, which brought money, status, and outside influence back into a community that otherwise had limited contact beyond its own hillside. That history is still visible today in the number of retired soldiers running guesthouses and the respect still given to military service within the village.
              </p>
            </div>
          </article>

          {/* SECTION: WHO ARE GURUNG */}
          <article id="who-are-gurung" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Who Are the Gurung People?
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                The Gurung people, who call themselves <strong>Tamu</strong>, are an indigenous ethnic group native to the mid-hills and mountains of western and central Nepal. They speak a Tibeto-Burman language, follow a blend of Buddhist and animist spiritual practices, and have a documented history that stretches back centuries in the Annapurna foothills.
              </p>
              <p>
                <strong>Historical Origins:</strong> Most ethnographic accounts trace Gurung origins to Tibetan plateau migrations that moved south into the Himalayan foothills over many centuries. Over time, these groups settled into the mid-altitude valleys and ridgelines of what is now Gandaki Province, adapting their lifestyle to terraced agriculture and herding as they went.
              </p>
              <p>
                Ghandruk&apos;s own settlement history reflects this pattern. Families grouped by clan moved into the area, built homes from the abundant local stone, and gradually shaped the terraced hillside into the village structure that exists today. Oral history within Gurung families still carries fragments of this migration story, passed down through generations rather than written record.
              </p>
              <p>
                <strong>Role in Nepalese Society:</strong> The Gurung are recognized as one of Nepal&apos;s major indigenous nationalities, with a distinct language, dress, and belief system separate from Nepal&apos;s Hindu caste-based mainstream culture. Their identity is built on a mix of subsistence agriculture, strong clan loyalty, and military service abroad.
              </p>
            </div>
          </article>

          {/* SECTION: LIFESTYLE */}
          <article id="lifestyle" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Traditional Gurung Lifestyle in Ghandruk Village
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Agriculture and Daily Village Life:</strong> Daily life in Ghandruk has traditionally revolved around the terraces. Families grow millet, maize, potatoes, and barley on steep hillside plots that have been carved and maintained by hand for generations, often using stone retaining walls to keep soil from washing away during the monsoon.
              </p>
              <p>
                Livestock — cattle, goats, and water buffalo — round out the traditional household economy, providing milk, manure for fertilizer, and meat for festivals. Mornings start early, with farming and herding done before the day heats up, and much of the social life of the village still happens around these same rhythms.
              </p>
              <p>
                <strong>Family Structure and Community-Based Living:</strong> Gurung households are traditionally multi-generational, with grandparents, parents, and children sharing a home and dividing labor by age and ability. Older family members often manage the household and pass down skills and stories, while younger adults handle the heavier farm work.
              </p>
              <p>
                What stands out in Ghandruk specifically is how much of the work is still communal rather than individual. Neighbors help with house repairs, harvest labor is often shared between families on a rotating basis, and major life events are treated as village-wide responsibilities.
              </p>
            </div>
          </article>

          {/* SECTION: ARCHITECTURE */}
          <article id="architecture" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Traditional Architecture That Defines Ghandruk Village
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Traditional Stone Houses:</strong> The stone houses of Ghandruk are arguably its most recognizable cultural feature. Built from locally quarried stone and finished with a layer of mud plaster, these homes are designed to withstand the region&apos;s heavy monsoon rains and the seismic activity common throughout the Himalayas.
              </p>
              <p>
                Roofs are traditionally covered in thin sheets of slate, stacked in overlapping rows — a building technique that requires no nails or modern fasteners, just careful stacking and gravity. Many of these older slate-roofed homes are now protected or actively maintained specifically because of their cultural value.
              </p>
              <p>
                <strong>Village Design Adapted to Mountain Life:</strong> Ghandruk&apos;s layout follows the contour of the hillside rather than fighting it. Narrow stone pathways wind between houses, connecting them in tight clusters that made sense for both warmth and defense in earlier centuries, creating the dense, walkable village core travelers experience.
              </p>
            </div>
          </article>

          {/* SECTION: SOCIAL STRUCTURE */}
          <article id="social-customs" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Gurung Social Structure, Customs, and Community Traditions
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Gurung Clan Structure:</strong> Gurung society in Ghandruk is traditionally organized around a clan system, broadly divided into the Char Jat (four clans) and Sora Jat (sixteen clans). This isn&apos;t just a naming convention — clan membership has historically influenced marriage eligibility, social standing, and ceremonial roles.
              </p>
              <p>
                Each clan carries its own lineage and, in some cases, its own oral history of where the family originated and how it came to settle in the Ghandruk area. While younger generations are less rigid about clan boundaries, the system still shapes how many families introduce themselves.
              </p>
              <p>
                <strong>Marriage Customs:</strong> Traditional Gurung marriages often involved negotiation between families, and historically required attention to clan compatibility. Ceremonies typically combine Buddhist and animist rituals, with feasting, music, and the exchange of gifts between families. Marriage has always doubled as a community event.
              </p>
            </div>
          </article>

          {/* SECTION: RODHI GHAR */}
          <article id="rodhi-ghar" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              The Rodhi Ghar Tradition and Social Life of Young Gurungs
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>What Is Rodhi Ghar?</strong> Rodhi Ghar refers to a traditional communal house where unmarried young Gurung men and women would gather in the evenings after farm work was done. It functioned as a social institution — courtship venue, skills-training space, and community classroom.
              </p>
              <p>
                In Ghandruk, the Rodhi Ghar tradition gave young people a structured, supervised way to meet potential partners while also learning practical skills like weaving and traditional music from older members of the community.
              </p>
              <p>
                <strong>Music, Dance, and Social Interactions:</strong> Evenings at the Rodhi Ghar centered on singing, storytelling, and dance, accompanied by traditional instruments like the madal drum. These gatherings were where much of Gurung oral history, folk song, and dance tradition was taught and preserved. While the formal institution has faded, its influence is still visible in Ghandruk&apos;s festival performances.
              </p>
            </div>
          </article>

          {/* SECTION: FESTIVALS */}
          <article id="festivals" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Festivals and Celebrations That Preserve Gurung Heritage
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Tamu Lhosar Celebration:</strong> Tamu Lhosar is the Gurung New Year, typically celebrated in late December, and it&apos;s the single most important date on the Gurung cultural calendar. The festival marks the start of the new year according to the traditional twelve-animal Gurung calendar.
              </p>
              <p>
                In Ghandruk, Tamu Lhosar brings out the village&apos;s strongest sense of shared identity. Families return from Pokhara, Kathmandu, or abroad specifically for the occasion, and the celebrations include traditional dress, communal meals, and traditional performances.
              </p>
              <p>
                <strong>Traditional Gurung Dance and Folk Performances:</strong> <em>Ghatu</em> and <em>Sorathi</em> are two of the most recognized traditional Gurung dance forms performed in the village. Ghatu is performed by young women in elaborate costume and is tied to seasonal and spiritual themes. Sorathi, by contrast, is more overtly social and celebratory, performed during community events.
              </p>
            </div>
          </article>

          {/* SECTION: DRESS & JEWELRY */}
          <article id="dress-jewelry" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Traditional Gurung Dress, Jewelry, and Cultural Identity
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Traditional Clothing:</strong> Traditional Gurung women&apos;s dress typically includes a wraparound skirt or <em>ghalek</em>, paired with a fitted blouse and a patterned wrap shawl, often in deep reds and blacks. Traditional men&apos;s clothing includes a <em>bhoto</em> (vest) worn over a simple shirt, paired with a daura-style wrap and traditional cap.
              </p>
              <p>
                <strong>Jewelry and Ornaments:</strong> Gurung women traditionally wear gold nose rings, heavy necklaces, and earrings that signal family wealth and marital status, with specific pieces passed down as heirlooms through the maternal line. Carrying symbolic value, these ornaments represent connection to family lineage.
              </p>
            </div>
          </article>

          {/* SECTION: FOOD & HOSPITALITY */}
          <article id="food-hospitality" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Food, Hospitality, and Everyday Cultural Experiences
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Traditional Food Culture:</strong> Gurung cuisine in Ghandruk draws heavily on what the terraces produce: millet and maize used for flatbreads and a thick porridge called <em>dhindo</em>, lentils, seasonal vegetables, and meat from village-raised livestock during special occasions. Traditional alcoholic drinks like <em>raksi</em> (distilled spirit) and <em>tongba</em> (fermented millet beer) are common.
              </p>
              <p>
                <strong>Gurung Hospitality:</strong> Hospitality is taken seriously in Ghandruk. Guests are traditionally offered food and a place to sit almost immediately, a custom rooted in the reality of mountain travel where shelter and a hot meal made a real difference to safety.
              </p>
              <p>
                This hospitality tradition is now the backbone of Ghandruk&apos;s economy. Many guesthouses are still run by Gurung families practicing the same welcoming customs, making stays at homestays or teahouses feel warm and personal.
              </p>
            </div>
          </article>

          {/* SECTION: GURKHA HERITAGE */}
          <article id="gurkha-heritage" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              The Gurkha Military Heritage Connected to Ghandruk
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Historical Connection:</strong> Ghandruk has long been recognized as a key recruiting ground for the British Gurkha regiments, a relationship dating back to the early 19th century. Gurung men from the village have served in conflicts worldwide, building a reputation for discipline and bravery.
              </p>
              <p>
                <strong>Influence of Retired Gurkha Families:</strong> Pensions earned through Gurkha service have historically funded some of Ghandruk&apos;s better-built homes, its schools, and much of its tourism infrastructure. Many retired servicemen and their families run village lodges, bringing a distinct, well-traveled perspective to their hosting role.
              </p>
            </div>
          </article>

          {/* SECTION: EXPERIENCES TRAVELERS CAN ENJOY */}
          <article id="experiences" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Cultural Experiences Travelers Can Enjoy in Ghandruk Today
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Staying in Local Homestays:</strong> Staying with a local family in a homestay or family-run teahouse includes home-cooked meals, conversations about village life, and opportunities to see daily routines like farming or weaving up close.
              </p>
              <p>
                <strong>Visiting Local Museums:</strong> Ghandruk&apos;s Gurung heritage museum displays traditional clothing, tools, weapons, and household items, providing valuable context for travelers.
              </p>
            </div>
            
            {/* Custom Grid */}
            <div className="grid gap-6 sm:grid-cols-2 mt-6">
              {customCards.map((card, idx) => (
                <div key={idx} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-2">
                  <h4 className="font-extrabold text-stone-950 text-base">{card.title}</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </article>

          {/* SECTION: CULTURAL PRESERVATION */}
          <article id="preservation" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Preserving Gurung Culture in Ghandruk Matters Today
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Modern Challenges:</strong> Ghandruk faces real pressure from outmigration. Younger Gurungs increasingly move to Pokhara, Kathmandu, or abroad for work, meaning fewer people are available to maintain terraced farms or carry forward fluency in the Gurung language.
              </p>
              <p>
                <strong>Role of Responsible Tourism:</strong> Culturally aware tourism helps preserve this heritage. When travelers choose locally owned homestays, hire Gurung guides, and take a genuine interest in local customs, that demand creates an economic incentive to maintain traditional stone houses and support festival celebrations.
              </p>
            </div>
          </article>

          {/* SECTION: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Gurung Culture in Ghandruk
            </h2>

            <div className="space-y-4 mt-6">
              {[
                {
                  q: "What is Gurung culture in Ghandruk?",
                  a: "Gurung culture in Ghandruk refers to the traditions, language, social structure, and daily lifestyle of the Tamu (Gurung) people who have lived in the village for generations, including their clan system, Lhosar festival, traditional stone architecture, and customs such as the Rodhi Ghar gathering tradition."
                },
                {
                  q: "Why is Ghandruk famous for Gurung heritage?",
                  a: "Ghandruk is one of the largest and oldest Gurung settlements in the Annapurna region, known for its well-preserved stone houses, strong community traditions, and deep historical ties to the British and Indian Gurkha military regiments."
                },
                {
                  q: "Who are the Gurung people of Nepal?",
                  a: "The Gurung, who call themselves Tamu, are an indigenous ethnic group native to the hills and mountains of western and central Nepal, recognized for their Tibeto-Burman language, Buddhist and animist spiritual traditions, and historical reputation as Gurkha soldiers."
                },
                {
                  q: "What language do Gurung people speak?",
                  a: "Gurung people speak Tamu Kyi, a Tibeto-Burman language distinct from Nepali, though many residents of Ghandruk today are bilingual or trilingual due to schooling and tourism."
                },
                {
                  q: "What is Rodhi Ghar in Gurung culture?",
                  a: "Rodhi Ghar is a traditional communal house where unmarried young Gurung men and women historically gathered in the evenings to sing, dance, socialize, and learn skills like weaving, functioning as both a social and educational institution within the village."
                },
                {
                  q: "What festivals do Gurung people celebrate?",
                  a: "The most significant festival is Tamu Lhosar, the Gurung New Year celebrated in late December, marked by family gatherings, traditional dress, feasting, and performances of folk dances like Ghatu and Sorathi."
                },
                {
                  q: "Can tourists experience authentic Gurung culture in Ghandruk?",
                  a: "Yes — staying in a local homestay or family-run teahouse, visiting the village's Gurung heritage museum, and timing a visit around Tamu Lhosar or another local festival are among the most authentic ways for travelers to experience Gurung culture firsthand."
                },
                {
                  q: "What traditional food do Gurung people eat?",
                  a: "Traditional Gurung food centers on millet and maize, often prepared as flatbreads or a thick porridge called dhindo, alongside lentils, seasonal vegetables, and, during festivals, meat and traditional drinks like raksi and tongba."
                },
                {
                  q: "Why are Gurung people connected to Gurkha soldiers?",
                  a: "Gurung men from villages like Ghandruk have served in British and Indian Gurkha regiments since the early 19th century, a military tradition that has shaped the village's economy, architecture, and social status for generations."
                },
                {
                  q: "Is Ghandruk worth visiting for cultural tourism?",
                  a: "Yes — beyond its trekking trails, Ghandruk offers a rare opportunity to see traditional Gurung stone architecture, learn about indigenous customs and clan structures, and engage directly with a community that has actively preserved its heritage despite modern pressures."
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
              Ghandruk&apos;s real draw isn&apos;t just the view of Annapurna South from the village square — it&apos;s the fact that the village beneath that view has stayed culturally intact in ways few places along Nepal&apos;s trekking routes have managed. The stone houses, the clan system, the Tamu Lhosar celebrations, the quiet persistence of the Gurung language — all of it represents a living heritage, not a museum piece.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              Understanding this culture before you arrive changes how you experience Ghandruk. A teahouse stops being just a place to sleep and becomes a window into generations of Gurung hospitality. A slate roof stops being a photo and becomes a craft passed down by hand. And a trek through the village becomes a small, genuine act of support for a community working to keep its identity alive.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Experience authentic Gurung culture by trekking with local guides
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Explore our locally guided trekking experiences through Ghandruk and the wider Annapurna region, where every stay directly supports the families preserving this heritage.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Book a Guided Trek &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Trek:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/planning/khopra-trek-permits" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Check trekking permit requirements (ACAP &amp; TIMS)
                  </Link>
                  <Link href="/planning/khopra-trek-cost" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Estimate your trip costs with our cost calculator
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
                This Ghandruk Village cultural guide is maintained and reviewed by certified local guides operating out of Kathmandu and Swanta. We regularly inspect village operations and cultural preservation activities.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
