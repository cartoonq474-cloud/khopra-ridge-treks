import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Sacred Khayer Lake Mythology & Pilgrimage | Legends & Beliefs",
  description: "Discover the mythology, legends, and living pilgrimage traditions of Sacred Khayer Lake — Nepal's revered alpine sanctuary dedicated to Khayer Baraha.",
};

export default function Page() {
  const summarySpecs = [
    { label: "Altitude & Elevation", value: "4,660m / 15,289ft" },
    { label: "Presiding Deity", value: "Khayer Baraha" },
    { label: "Primary Festival", value: "Janai Purnima (August)" },
    { label: "Core Devotees", value: "Magar & Gurung Tribes" }
  ];

  const codeOfConduct = [
    { title: "No Leather Items", desc: "Leather belts, bags, wallets, or shoes must not be taken near the immediate lakeside altar, as leather is considered ritually impure." },
    { title: "Dress Modestly", desc: "Wear long sleeves and pants instead of casual short trekking wear to respect the religious integrity of the lake shrine." },
    { title: "Waste Removal", desc: "Every visitor must pack out all waste. The fragile sub-alpine waters and pasture environments are both sacred and ecologically sensitive." },
    { title: "Quiet Sanctuary", desc: "Disruptive noises, loud speaker systems, or loud talking are prohibited. Keep a quiet, reverent tone around the altars." }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            🏔️ Cultural &amp; Spiritual Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Sacred Khayer Lake Mythology &amp; Pilgrimage
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            High beneath the massive south wall of Annapurna South, at 4,660 meters, lies an alpine sanctuary. Discover the ancient legends of Khayer Baraha, local Magar-Gurung folklore, and the living pilgrimage traditions of Nepal&apos;s remote high-altitude lake.
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
                1. Why the Lake is Sacred
              </a>
              <a href="#legend" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                2. Legend of Khayer Baraha
              </a>
              <a href="#folklore" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                3. Mythology &amp; Folklore
              </a>
              <a href="#significance" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                4. Religious Significance
              </a>
              <a href="#history" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                5. History of Pilgrimage
              </a>
              <a href="#janai-purnima" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                6. Janai Purnima Festival
              </a>
              <a href="#culture" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                7. Cultural Importance
              </a>
              <a href="#spiritual-trek" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                8. Spiritual Trek Experience
              </a>
              <a href="#etiquette" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                9. Visiting Respectfully
              </a>
              <a href="#faq" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                10. Frequently Asked Qs
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
          {/* SECTION 1: SACRED LAKE */}
          <article id="overview" className="scroll-mt-12 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Why Khayer Lake Is Considered a Sacred Himalayan Lake
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>
                High above the terraced hills of the Annapurna region, at roughly 4,660 meters beneath the towering south face of Annapurna South, lies a small alpine lake that means far more to local communities than its modest size suggests. Khayer Lake, also known as Khayer Barah Pokhari, is one of the most sacred bodies of water in the Annapurna foothills, and its story is inseparable from the trekking route that now carries visitors past its shores: the Khopra Ridge Trek.
              </p>
              <p>
                For Magar and Gurung villagers across the Myagdi and Mustang districts, this lake is not a scenic stop on a longer trail. It is a place of pilgrimage, a home of the deity Khayer Baraha, and a destination that pilgrims have climbed toward for generations, often barefoot, often through difficult weather, to ask for blessings that matter deeply to their lives.
              </p>
              <h3 className="text-lg font-bold text-stone-900">The Sacred Setting Beneath Annapurna South</h3>
              <p>
                Khayer Lake sits in a dramatic basin directly under the south face of Annapurna South, one of the most visually commanding peaks in the Annapurna massif. In Nepalese tradition, proximity to a major peak is rarely treated as coincidence; mountains are widely understood as the dwelling places of deities, and the land immediately beneath them inherits some of that sanctity. Reaching it requires a multi-day trek through forest, ridge, and high pasture, and that physical separation from ordinary life is part of what makes the destination feel set apart for worship rather than everyday use.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Sacred Lakes in Nepalese Religious Traditions</h3>
              <p>
                Nepal&apos;s religious landscape includes a long tradition of lakes regarded as sacred, particularly at high altitude. The most widely known example is Gosaikunda in the Langtang region, associated with Lord Shiva. Khayer Lake belongs to this same broader tradition of alpine lake worship, even though its specific deity and local customs are distinct. Across these traditions, water at high altitude is treated as purer and closer to the divine. Bathing in or simply approaching such water is believed to carry spiritual weight that ordinary water does not.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Why Pilgrims Journey to High-Altitude Sacred Sites</h3>
              <p>
                The effort required to reach a high-altitude shrine is, in many South Asian pilgrimage traditions, considered part of the devotion itself rather than an obstacle to it. A blessing sought after days of walking, cold nights, and physical strain is understood to carry more weight than one obtained easily. The trek itself becomes an act of faith, a demonstration of sincerity to Khayer Baraha, and a personal test that many pilgrims see as inseparable from the blessing they hope to receive at the end of it.
              </p>
            </div>
          </article>

          {/* SECTION 2: LEGEND */}
          <article id="legend" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              The Legend of Khayer Baraha
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>
                At the heart of Khayer Lake&apos;s sanctity is the deity for whom it is named. Understanding Khayer Baraha is essential to understanding everything else this page covers, from the festival rituals to the visitor etiquette expected at the shrine.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Who Is Khayer Baraha?</h3>
              <p>
                Khayer Baraha is understood locally as both a manifestation of the Hindu god Vishnu in his boar form (Varaha avatar) and, simultaneously, a powerful mountain goddess who resides within the lake itself. This dual identity is not seen as contradictory by local devotees; rather, it reflects how Himalayan folk religion often blends formal Hindu theology with older, place-based goddess worship that predates it.
              </p>
              <h3 className="text-lg font-bold text-stone-900">The Connection to Lord Vishnu&apos;s Varaha Avatar</h3>
              <p>
                In classical Hindu mythology, Varaha is the third avatar of Vishnu, taking the form of a boar to rescue the earth goddess from the depths of a cosmic ocean. This story, found across Hindu scripture and temple art throughout South Asian regions, gives Khayer Baraha its name and its theological anchor. What makes the Khayer Lake version distinctive is how it has been localized. Rather than retelling the Varaha story as it appears in classical texts, mountain communities have folded the avatar into their own goddess tradition, creating a deity that is recognizably connected to Vishnu while functioning, in daily practice, much more like a regional protector spirit.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Fertility, Blessings, and Wish-Fulfillment Traditions</h3>
              <p>
                Among the beliefs associated with Khayer Baraha, one stands out as the most consistently mentioned by local communities: the goddess&apos;s power to grant children to couples who have struggled with infertility. This belief draws pilgrims who might never otherwise undertake such a demanding trek, motivated by a deeply personal hope. Pilgrims seeking this blessing typically make a vow at the shrine, sometimes promising a return visit or an offering if their wish is granted.
              </p>
            </div>
          </article>

          {/* SECTION 3: FOLKLORE */}
          <article id="folklore" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Khayer Lake Mythology and Local Folklore
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>
                Much of what is known about Khayer Lake&apos;s significance has never been written down in any formal religious text. It survives instead through oral transmission, told by elders to younger generations, often during festival gatherings or while herding livestock through the high pastures near the lake.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Khayer Lake in Magar Cultural Traditions</h3>
              <p>
                For Magar communities in the Myagdi district, Khayer Lake occupies a place in the local sacred geography alongside other mountain shrines and forest spirits that have long been part of indigenous belief systems. Magar oral history tends to emphasize the lake&apos;s role in protecting livestock and travelers moving through the high pastures. This practical, protective framing sits alongside the more formal Hindu mythology, illustrating how indigenous Magar belief and Hindu religious tradition have layered together over time.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Gurung Perspectives and Sacred Narratives</h3>
              <p>
                Gurung communities, who share the surrounding hills with Magar villages, bring their own narrative emphasis to Khayer Lake. Gurung storytelling tends to foreground the lake&apos;s connection to the wider sacred geography of the Annapurna massif, treating Khayer Baraha as part of a constellation of mountain deities rather than a standalone figure. Two ethnic communities with different languages and customs both treat the lake as central to their spiritual life.
              </p>
              <div className="p-6 bg-stone-100 border border-stone-200 rounded-2xl text-xs leading-relaxed text-stone-500">
                <strong>History and Oral Memory Warning:</strong> The connection between Khayer Baraha and Vishnu&apos;s Varaha avatar reflects long-standing religious belief and oral tradition; it is not a claim that can be confirmed through written archival records. Folk religion across the Himalayas has always operated this way, carried by community memory and lived practice.
              </div>
            </div>
          </article>

          {/* SECTION 4: SIGNIFICANCE */}
          <article id="significance" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              The Religious Significance of Khayer Lake
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>
                With the mythology established, it becomes easier to understand why the lake functions as it does in religious practice today, and why pilgrims treat the water itself as sacred.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Sacred Water and Ritual Purification</h3>
              <p>
                Central to Khayer Lake&apos;s religious role is the belief that its water can cleanse spiritual impurity. Pilgrims who undertake the journey, particularly during the Janai Purnima festival, enter the lake&apos;s cold waters specifically to wash away sin accumulated over the preceding year. The water is glacially cold even in summer, and entering it is understood as a deliberate act of devotion and discomfort offered to the goddess.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Why the Lake Is Considered Auspicious</h3>
              <p>
                An auspicious site, in Hindu and Himalayan folk tradition, is one where prayers and rituals are believed to carry greater spiritual effect than they would elsewhere. Khayer Lake&apos;s combination of altitude, isolation, and association with a powerful goddess gives it this status. Worship at the lake centers on the simple stone altar, where pilgrims leave offerings, light incense, and tie sacred threads. Ritual leadership comes from traditional shamanic figures who travel with pilgrim groups, placing the responsibility for maintaining correct ritual practice within the community itself.
              </p>
            </div>
          </article>

          {/* SECTION 5: HISTORY */}
          <article id="history" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              The History and Tradition of the Khayer Lake Pilgrimage
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>
                There is no single documented date marking the beginning of pilgrimage to Khayer Lake. Like most Himalayan folk pilgrimage traditions, it appears to have developed gradually, growing out of local goddess worship that long predates any formal record, and later absorbing the Vishnu and Varaha associations.
              </p>
              <p>
                Pilgrims typically approach Khayer Lake along trails that connect villages in the Myagdi district to the high pastures beneath Annapurna South, a route that closely overlaps with sections of today&apos;s Khopra Ridge Trek. For pilgrims, the route is walked with a specific religious purpose in mind. Many participants are couples seeking the fertility blessing associated with the goddess, while others come as part of broader family or community devotional practice.
              </p>
            </div>
          </article>

          {/* SECTION 6: JANAI PURNIMA */}
          <article id="janai-purnima" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Janai Purnima: The Most Important Festival at Khayer Lake
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>
                Janai Purnima is observed across much of Hindu Nepal as a sacred thread festival. At Khayer Lake, this nationally observed festival takes on a specifically local character, becoming the single most significant pilgrimage day of the year for the surrounding Magar and Gurung communities.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Pilgrimage Activities During the Festival</h3>
              <p>
                On the day of the festival (usually in August during the full moon), pilgrims converge on the trail leading up to the lake. Processions are typically led by traditional ritual specialists, with drumming and chanting accompanying the climb to the lakeside shrine. Once at the lake, the day&apos;s activities combine collective ritual with private devotion.
              </p>
              <h3 className="text-lg font-bold text-stone-900">Holy Bathing and the Shamanic Shrines</h3>
              <p>
                The ritual bath in Khayer Lake&apos;s frigid water is the most physically demanding part of the festival. Alongside the bath, pilgrims tie or renew sacred threads. Much of the ritual structure depends on traditional shamanic figures known locally as Dhami and Jhankri. These specialists are believed to channel spiritual power directly, entering trance-like states while leading prayers and drumming.
              </p>
            </div>
          </article>

          {/* SECTION 7: CULTURE */}
          <article id="culture" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Cultural Importance for the Gurung and Magar Communities
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>
                For Magar and Gurung villages in the surrounding hills, Khayer Lake represents an unbroken thread connecting current generations to their ancestors&apos; beliefs. The pilgrimage is not treated as a historical curiosity but as an active part of community religious life.
              </p>
              <p>
                Local identity in the villages near the lake is closely tied to stewardship of the pilgrimage tradition. This connection between sacred site and community identity also explains why local guides and villagers take the visitor conduct expectations at the lake so seriously. Respect for the shrine is, in a real sense, respect for the community&apos;s own self-understanding.
              </p>
            </div>
          </article>

          {/* SECTION 8: SPIRITUAL TREK */}
          <article id="spiritual-trek" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight border-b border-stone-200 pb-3">
              Khayer Lake as a Spiritual Trekking Experience
            </h2>
            <div className="text-stone-600 leading-relaxed text-sm space-y-4">
              <p>
                Much of the Annapurna region&apos;s trekking appeal rests on mountain views, varied terrain, and village life along the trail. Khayer Lake adds a different dimension entirely: the chance to witness, and respectfully observe, a religious tradition that has shaped this landscape for far longer than trekking tourism has existed.
              </p>
              <p>
                Trekkers who understand this context before arriving tend to experience the lake very differently from those who treat it purely as a side trip for photographs. Knowing the legend of Khayer Baraha and the meaning behind the tridents and prayer flags transforms a quiet alpine stop into a site with real historical and spiritual depth.
              </p>
            </div>
          </article>

          {/* SECTION 9: ETIQUETTE */}
          <article id="etiquette" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Visiting Khayer Lake Respectfully
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              Because Khayer Lake is a highly respected holy sanctuary, visitors are expected to follow strict local codes of conduct to ensure their presence does not disrupt the spiritual space.
            </p>
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
              <div className="grid gap-6 sm:grid-cols-2">
                {codeOfConduct.map((rule, i) => (
                  <div key={i} className="p-6 bg-stone-50 border border-stone-200 rounded-2xl">
                    <h4 className="font-extrabold text-stone-955 text-sm flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      {rule.title}
                    </h4>
                    <p className="mt-2 text-xs text-stone-500 leading-relaxed">{rule.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-stone-600 text-sm leading-relaxed space-y-4 mt-6">
              <p>
                <strong>Environmental Responsibility:</strong> Khayer Lake&apos;s pristine alpine setting is fragile. Waste left behind by visitors causes lasting damage to both the environment and the site&apos;s religious integrity. Every visitor is expected to carry out all of their own waste, leaving no trace.
              </p>
              <p>
                <strong>Supporting Sustainable Tourism:</strong> Choosing guides and operators who are connected to and respectful of local Magar and Gurung communities ensures that tourism around the site supports rather than disrupts the traditions. Protecting this heritage means treating Khayer Lake first and foremost as a sacred site, and only secondarily as a stop on a trekking itinerary.
              </p>
            </div>
          </article>

          {/* SECTION 10: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Khayer Lake Mythology
            </h2>
            <div className="space-y-4 mt-6">
              {[
                {
                  q: "Why is Khayer Lake considered sacred?",
                  a: "Khayer Lake is considered sacred because it is believed to be the dwelling place of Khayer Baraha, a deity understood locally as both a manifestation of Vishnu's Varaha avatar and a powerful mountain goddess. Its remote, high-altitude setting beneath Annapurna South reinforces this sanctity, in keeping with a wider Himalayan tradition of revering alpine lakes."
                },
                {
                  q: "Who is Khayer Baraha?",
                  a: "Khayer Baraha is the deity associated with Khayer Lake, understood by local Magar and Gurung communities as a goddess residing within the lake who is also linked to Vishnu's boar avatar, Varaha. The deity is most widely known for the belief that she can grant children to couples struggling with infertility."
                },
                {
                  q: "What is the mythology behind Khayer Lake?",
                  a: "The mythology blends classical Hindu belief in Vishnu's Varaha avatar with older, indigenous goddess worship specific to this lake and the surrounding mountains. Local oral tradition, rather than a single written text, carries most of the detail of this mythology between generations."
                },
                {
                  q: "What rituals are performed at Khayer Lake?",
                  a: "Pilgrims perform ritual bathing in the lake's cold water, leave offerings such as flowers, incense, and tridents at the stone altar, tie sacred threads as part of the Janai Purnima tradition, and pray for personal blessings, particularly related to fertility and family wellbeing."
                },
                {
                  q: "What happens during the Janai Purnima pilgrimage?",
                  a: "During Janai Purnima, held on the August full moon, pilgrims from the Myagdi and Mustang districts trek to the lake in processions often led by traditional shamans known as Dhami and Jhankri. The day combines ritual bathing, sacred thread ceremonies, drumming, and individual prayer at the lakeside shrine."
                },
                {
                  q: "Can non-Hindus or tourists visit Khayer Lake?",
                  a: "Yes, tourists and trekkers of any background are welcome to visit Khayer Lake, including during the festival, as long as they follow the site's etiquette expectations around dress, behavior, and respect for active worship. Visitors should approach the site as observers of a living religious tradition rather than as participants in rituals reserved for devotees."
                },
                {
                  q: "Why do pilgrims bathe in the lake despite the cold water?",
                  a: "The cold, high-altitude water is believed to have purifying power, and pilgrims bathe specifically to cleanse themselves of the past year's sins. The physical discomfort of the bath is understood as part of the sincerity of the devotion, not an incidental hardship to be avoided."
                },
                {
                  q: "What beliefs do the Gurung and Magar communities hold about Khayer Lake?",
                  a: "Both communities regard Khayer Lake as part of a broader sacred geography connecting mountain deities and protective spirits to the landscape they inhabit. While their specific oral traditions differ slightly, both treat the site as central to local religious identity and community heritage."
                },
                {
                  q: "Is Khayer Lake one of Nepal's important sacred lakes?",
                  a: "Within the Annapurna region specifically, Khayer Lake is one of the most significant sacred lakes, comparable in religious function, though smaller in scale, to better-known pilgrimage lakes such as Gosaikunda in the Langtang region. Its importance is concentrated mainly among Magar and Gurung communities in the Myagdi and Mustang districts rather than nationwide."
                },
                {
                  q: "How can visitors respectfully experience the pilgrimage site?",
                  a: "Visitors should avoid leather items near the shrine, dress modestly, keep noise to a minimum, ask permission before photographing pilgrims in prayer, and carry out all of their own waste. Traveling with guides connected to local Magar and Gurung communities also helps ensure visits are conducted in a way that respects the site's living religious traditions."
                }
              ].map((faq, idx) => (
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

          {/* SECTION 11: CONCLUSION */}
          <article className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-955 font-sans">Conclusion</h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              Khayer Lake&apos;s story is, at its core, a story of layered belief: a Hindu avatar myth wrapped around an older mountain goddess tradition, sustained for generations by Magar and Gurung communities through an annual pilgrimage that shows no sign of fading. The legend of Khayer Baraha, the rituals of Janai Purnima, the tridents and prayer flags surrounding the lakeside altar, and the continued reverence shown by local devotees all point to the same conclusion: this is not a historical curiosity, but a living sacred site.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              For trekkers and travelers, understanding this context changes what a visit to Khayer Lake can mean. A quiet alpine lake beneath Annapurna South becomes something far richer once its mythology, its festival traditions, and its meaning to the communities around it are properly understood.
            </p>
          </article>

          {/* SECTION 12: CTA & BOOKING */}
          <section className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Experience the Sacred Khayer Lake Journey With Local Guides</h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Join our guided Khopra Ridge Trek and experience the mythology, pilgrimage traditions, and living cultural heritage of Khayer Lake alongside knowledgeable guides from the local Magar community, who can help you understand and respectfully observe this remarkable Himalayan tradition.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Inquire Now &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Trek:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/planning/khopra-trek-permits" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    📝 Check trekking permit requirements (ACAP &amp; TIMS)
                  </Link>
                  <Link href="/planning/khopra-trek-cost" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    💰 Estimate your trip costs with our cost calculator
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
                Our cultural narratives and historical guides are verified in coordination with Magar and Gurung village councils in Myagdi. Indigenous customs and checkpost rules are reviewed periodically.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
