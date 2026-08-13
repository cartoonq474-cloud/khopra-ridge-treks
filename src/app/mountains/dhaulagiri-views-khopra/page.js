import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/mountains/dhaulagiri-views-khopra",
  },
  title: "Dhaulagiri Views from Khopra Ridge | Nepal Trek Guide",
  description: "See Dhaulagiri up close from Khopra Ridge — one of Nepal's quietest, most dramatic mountain viewpoints. Geography, best seasons, photography tips, and trek.",
};

export default function DhaulagiriViewsPage() {
  const quickFacts = [
    { label: "Viewpoint elevation", detail: "~3,660 m (12,008 ft)" },
    { label: "Distance to Dhaulagiri I", detail: "Approximately 15–18 km (visual line)" },
    { label: "Dhaulagiri I elevation", detail: "8,167 m — world's 7th highest peak" },
    { label: "Best months", detail: "October–November, March–April, December–January" },
    { label: "Best sunrise time", detail: "5:45–6:30 AM (season-dependent)" },
    { label: "Trek duration", detail: "5–7 days round trip from Pokhara" },
    { label: "Difficulty", detail: "Moderate" },
    { label: "Peaks visible", detail: "Dhaulagiri I, Annapurna South, Nilgiri Himal, Tukuche Peak, Gurja Himal, Fang Peak, Dhampus Peak" }
  ];

  const viewpointComparisons = [
    { name: "Khopra Ridge", dhaulagiri: "Excellent, close-range", crowds: "Low", sunrise: "Excellent", diff: "Moderate" },
    { name: "Poon Hill", dhaulagiri: "Good, distant", crowds: "Very high", sunrise: "Good", diff: "Easy" },
    { name: "Muldai Viewpoint", dhaulagiri: "Good", crowds: "Low–moderate", sunrise: "Very good", diff: "Moderate" },
    { name: "Mohare Danda", dhaulagiri: "Moderate", crowds: "Low", sunrise: "Good", diff: "Moderate" },
    { name: "Annapurna Base Camp", dhaulagiri: "Limited (Annapurna-facing)", crowds: "High", sunrise: "Excellent (different range)", diff: "Challenging" }
  ];

  const faqs = [
    {
      q: "Can you see Dhaulagiri clearly from Khopra Ridge?",
      a: "Yes. On clear mornings, Khopra Ridge offers one of the closest and most unobstructed views of Dhaulagiri I anywhere in the Annapurna region, with the full massif visible across the western skyline."
    },
    {
      q: "Why does Dhaulagiri look so close from Khopra Ridge?",
      a: "The combination of an open, treeless ridgeline, the absence of intervening hills, and the short line-of-sight distance across the Kali Gandaki Gorge makes the mountain's full vertical scale visible in one continuous sweep."
    },
    {
      q: "Which mountains can you see from Khopra Ridge?",
      a: "Dhaulagiri I, Annapurna South, Nilgiri Himal, Tukuche Peak, Gurja Himal, Fang Peak, and Dhampus Peak are all visible on a clear day."
    },
    {
      q: "Is Khopra Ridge better than Poon Hill for mountain views?",
      a: "For Dhaulagiri specifically, yes — the view is closer and less obstructed. Poon Hill is easier to reach and faces more toward the Annapurna and Machhapuchhre side, but it draws far larger crowds."
    },
    {
      q: "What is the best season for Dhaulagiri views from Khopra Ridge?",
      a: "Autumn (October–November) is the most reliable for consistently clear skies, followed closely by winter (December–January), which can be even clearer but colder."
    },
    {
      q: "Is Khopra Ridge good for photography?",
      a: "Yes. The combination of alpenglow at sunrise, an open unobstructed panorama, and minimal crowds makes it one of the better photography viewpoints in the Annapurna region."
    },
    {
      q: "How difficult is the Khopra Ridge trek?",
      a: "Moderate. It requires reasonable fitness and several consecutive days of walking at altitude, but it doesn't demand technical climbing skills."
    },
    {
      q: "How many days does the Khopra Ridge trek take?",
      a: "Most itineraries run 5 to 7 days round trip from Pokhara, with an optional 1–2 day extension to Khayer Lake."
    },
    {
      q: "Is Khayer Lake worth adding to the Khopra Ridge trek?",
      a: "For most trekkers, yes. It extends the panorama further and adds a genuinely remote alpine lake at 4,660m to the itinerary, though it does add extra trekking days and elevation gain."
    },
    {
      q: "Can beginners complete this trek?",
      a: "Trekkers with a reasonable fitness base and some multi-day hiking experience typically manage it well, especially with an experienced guide who can pace the itinerary appropriately."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans antialiased flex flex-col justify-between">
      {/* HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white py-24 px-6 border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          {/* Breadcrumbs */}
          <div className="mb-6 flex items-center gap-2 text-xs text-stone-400 font-semibold">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/mountains/what-mountains-visible" className="hover:text-emerald-400 transition-colors">Mountains</Link>
            <span>/</span>
            <span className="text-emerald-400">Dhaulagiri Views from Khopra</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Himalayan Panorama Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Dhaulagiri Views from Khopra Ridge: Nepal&apos;s Most Underrated Himalayan Panorama
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Stand on <Link href="/guides/khopra-ridge-ultimate-guide" className="text-emerald-400 underline hover:text-emerald-300 font-semibold">Khopra Ridge</Link> at first light and Dhaulagiri doesn&apos;t look like a mountain 15 kilometers away. It looks close enough to touch. There&apos;s no haze, no line of trekkers crowding the view, and no ridge of lodges blocking the horizon — just a wall of ice rising straight out of the Kali Gandaki Valley.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Viewpoint Altitude</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">3,660m</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">12,008 ft above sea level</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Dhaulagiri Peak</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">8,167m</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">World&apos;s 7th highest peak</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Visual Distance</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">15–18 km</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Direct visual line of sight</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Crowd Level</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Very Low</span>
              <span className="text-[10px] text-emerald-400 font-semibold block mt-0.5">Quiet eco-lodge ridge</span>
            </div>
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
              <a href="#quick-facts" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Quick Facts
              </a>
              <a href="#why-best" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why Khopra is Best
              </a>
              <a href="#dhaulagiri-massif" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                The Dhaulagiri Massif
              </a>
              <a href="#mountain-panorama" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Complete Panorama
              </a>
              <a href="#sunrise-sunset" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Sunrise &amp; Sunset
              </a>
              <a href="#photography" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Photography Guide
              </a>
              <a href="#viewpoint-comparison" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Viewpoint Comparison
              </a>
              <a href="#best-seasons" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Best Seasons
              </a>
              <a href="#trek-route" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trek Route &amp; Lodges
              </a>
              <a href="#why-underrated" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why It&apos;s Underrated
              </a>
              <a href="#common-mistakes" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Common Mistakes
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
                Inquire Guided Trek
              </Link>
            </div>
          </div>
        </aside>

        {/* PRIMARY EDITORIAL CONTENT COLUMN */}
        <main className="lg:col-span-3 space-y-16">
          
          {/* INTRODUCTION */}
          <article className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Dhaulagiri Views from Khopra Ridge: Nepal&apos;s Most Underrated Himalayan Panorama
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Stand on Khopra Ridge at first light and Dhaulagiri doesn&apos;t look like a mountain 15 kilometers away. It looks close enough to touch. There&apos;s no haze, no line of trekkers crowding the view, and no ridge of lodges blocking the horizon — just a wall of ice rising straight out of the Kali Gandaki Valley, catching the first color of the morning.
              </p>
              <p>
                We&apos;ve guided trekkers to viewpoints across the Annapurna region for years, and Khopra Ridge consistently produces the same reaction: people expect Poon Hill-style scenery and get something far more intimate. This isn&apos;t the highest viewpoint in Nepal, and it isn&apos;t the most famous. But for a close, uncrowded, genuinely dramatic look at the Dhaulagiri Massif, it&apos;s hard to beat.
              </p>
              <p>
                In this guide, we&apos;ll explain exactly why the views from Khopra Ridge are so exceptional, which peaks you&apos;ll actually see, when to go for the clearest skies, how to photograph the panorama properly, and how this viewpoint compares to better-known alternatives like Poon Hill and Annapurna Base Camp.
              </p>
            </div>
          </article>

          {/* SECTION 1: QUICK FACTS */}
          <article id="quick-facts" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Quick Facts: Dhaulagiri Views from Khopra Ridge
            </h2>
            <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">Detail</th>
                    <th className="px-6 py-4">Information</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-600">
                  {quickFacts.map((fact, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/50">
                      <td className="px-6 py-4 font-bold text-stone-900">{fact.label}</td>
                      <td className="px-6 py-4">{fact.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          {/* SECTION 2: WHY BEST VIEWS */}
          <article id="why-best" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Khopra Ridge Offers Nepal&apos;s Best Dhaulagiri Views
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Most viewpoints in the Annapurna region look toward Annapurna South, Machhapuchhre, and the eastern Annapurna range. Khopra Ridge is one of the few accessible viewpoints that sits almost directly opposite Dhaulagiri, across the deepest river gorge on Earth.
              </p>
              <p>
                <strong>Geographic Position:</strong> Khopra Ridge sits on the western edge of the Annapurna Conservation Area, on a high, open ridgeline above Ghandruk and Tadapani. Unlike forested viewpoints where trees or neighboring hills partially block the skyline, Khopra Ridge is above the treeline and largely unobstructed in the direction of Dhaulagiri. That open exposure is the single biggest reason the view feels so complete.
              </p>
              <p>
                <strong>The Kali Gandaki Viewing Corridor:</strong> Between Khopra Ridge and the Dhaulagiri Massif lies the Kali Gandaki Gorge — widely cited as the world&apos;s deepest river gorge, cut between Dhaulagiri I and Annapurna I. This gorge acts almost like a wind tunnel and a visual corridor at once. Cold air draining down the valley overnight tends to clear haze and low cloud before sunrise, which is part of why mornings here are so reliably clear compared to lower, forested viewpoints.
              </p>
              <p>
                <strong>Why Dhaulagiri Looks So Close:</strong> Perceived distance in the mountains depends on more than raw kilometers. Because there&apos;s no intervening ridge, no forest canopy, and no atmospheric haze from lower valleys, your eye reads the full vertical rise of Dhaulagiri — from valley floor near 1,200 m to summit at 8,167 m — in one uninterrupted sweep. That scale, combined with the short horizontal distance, is what makes the mountain feel close enough to be almost overwhelming.
              </p>
            </div>
          </article>

          {/* SECTION 3: DHAULAGIRI MASSIF */}
          <article id="dhaulagiri-massif" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Understanding the Dhaulagiri Massif
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Dhaulagiri I:</strong> At 8,167 meters, Dhaulagiri I is the world&apos;s seventh-highest mountain and the highest point entirely within Nepal&apos;s borders that isn&apos;t shared with a neighboring country&apos;s border ridge. It was first climbed in 1960 and remains one of the more technically demanding 8,000-meter peaks, known for its exposed ridgelines and unpredictable weather. Read more about <Link href="/mountains/dhaulagiri-views-khopra" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Dhaulagiri Peak Details</Link>.
              </p>
              <p>
                <strong>Surrounding Peaks:</strong> Dhaulagiri isn&apos;t a single summit — it&apos;s a massif with several connected peaks, including Dhaulagiri II, III, IV, and V, forming a jagged, multi-summit wall that extends far wider across the horizon than most single-peak mountains.
              </p>
              <p>
                <strong>Why It Matters for This Viewpoint:</strong> Because Khopra Ridge faces the massif nearly head-on, you don&apos;t just see the main summit — you see the full ridge system extending across a significant portion of the western skyline, which is part of what makes this panorama feel so vast.
              </p>
            </div>
          </article>

          {/* SECTION 4: COMPLETE PANORAMA */}
          <article id="mountain-panorama" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              The Complete Mountain Panorama from Khopra Ridge
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Dhaulagiri is the headline, but it&apos;s far from the only peak on display. On a clear morning, the panorama includes:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Dhaulagiri I (8,167 m):</strong> Dominating the western skyline</li>
                <li><strong>Annapurna South (7,219 m):</strong> Anchoring the eastern view (<Link href="/mountains/annapurna-south-views" className="text-emerald-700 underline font-semibold hover:text-emerald-600">read Annapurna South guide</Link>)</li>
                <li><strong>Nilgiri Himal (7,061 m):</strong> A sharp, distinctive pyramid (<Link href="/mountains/nilgiri-views" className="text-emerald-700 underline font-semibold hover:text-emerald-600">read Nilgiri guide</Link>)</li>
                <li><strong>Tukuche Peak (6,920 m):</strong> Visible along the Dhaulagiri ridge system (<Link href="/mountains/tukuche-peak-views" className="text-emerald-700 underline font-semibold hover:text-emerald-600">read Tukuche Peak guide</Link>)</li>
                <li><strong>Gurja Himal (7,193 m):</strong> Often overlooked but clearly visible</li>
                <li><strong>Fang Peak &amp; Dhampus Peak:</strong> Supporting peaks along the Annapurna &amp; Dhaulagiri ridges</li>
              </ul>
              <p>
                Few viewpoints in Nepal let you see two separate 7,000+ meter massifs — Dhaulagiri and Annapurna — from a single ridge without turning around. That 180-degree spread is a large part of what sets this panorama apart.
              </p>
            </div>
          </article>

          {/* SECTION 5: SUNRISE & SUNSET */}
          <article id="sunrise-sunset" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Sunrise and Sunset at Khopra Ridge
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Alpenglow on Dhaulagiri:</strong> Just before the sun clears the eastern horizon, Dhaulagiri&apos;s upper slopes catch a soft pink-and-orange light known as alpenglow. It happens because sunlight is still traveling through the lower atmosphere, scattering shorter blue wavelengths and leaving warmer tones to hit the snow directly. On a clear morning, this lasts only 10–15 minutes, so timing matters.
              </p>
              <p>
                <strong>Best Viewing Time:</strong> Depending on the season, sunrise at Khopra Ridge falls between roughly 5:45 AM in autumn and closer to 6:15–6:30 AM in winter. We recommend being in position at least 20 minutes before official sunrise to catch the full alpenglow sequence.
              </p>
              <p>
                <strong>Morning Photography Notes:</strong> Temperatures at sunrise can drop below freezing even in October, so keep batteries warm in an inner jacket pocket — cold drains them fast. The light shifts quickly during this window.
              </p>
              <p>
                <strong>Sunset Experience:</strong> Sunset at Khopra Ridge is quieter and produces long shadows across the ridgeline and warm light on surrounding meadows, with the massif silhouetted against gold skies. Check our full guide to <Link href="/viewpoints/sunset-at-khopra-ridge" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Sunset at Khopra Ridge</Link>.
              </p>
            </div>
          </article>

          {/* SECTION 6: PHOTOGRAPHY */}
          <article id="photography" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Photography Guide: Capturing Khopra Ridge
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Camera Gear &amp; Lens Choices:</strong> A mid-range zoom (24–70mm equivalent) covers most of the panorama, while a longer telephoto (70–200mm) lets you isolate individual features like Dhaulagiri&apos;s summit ridge or seracs. Read our <Link href="/viewpoints/best-photography-spots" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Best Photography Spots on the Khopra Trek</Link> guide.
              </p>
              <p>
                <strong>Composition Tips:</strong> Foreground matters. Alpine grasses, prayer flags, or the ridge trail itself in the lower third of the frame give scale and depth.
              </p>
              <p>
                <strong>Smartphone Photography:</strong> Modern phone cameras handle this scene reasonably well if you avoid digital zoom. Use Night or HDR mode before official sunrise.
              </p>
              <p>
                <strong>Drone Regulations:</strong> Drone use is restricted within the Annapurna Conservation Area (ACAP). Flying without permits can result in heavy fines or equipment confiscation.
              </p>
            </div>
          </article>

          {/* SECTION 7: VIEWPOINT COMPARISON */}
          <article id="viewpoint-comparison" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Khopra Ridge vs. Other Himalayan Viewpoints
            </h2>
            <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">Viewpoint</th>
                    <th className="px-6 py-4">Dhaulagiri Visibility</th>
                    <th className="px-6 py-4">Crowd Levels</th>
                    <th className="px-6 py-4">Sunrise Quality</th>
                    <th className="px-6 py-4">Trek Difficulty</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-600">
                  {viewpointComparisons.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/50">
                      <td className="px-6 py-4 font-bold text-stone-900">{row.name}</td>
                      <td className="px-6 py-4 font-semibold text-emerald-700">{row.dhaulagiri}</td>
                      <td className="px-6 py-4">{row.crowds}</td>
                      <td className="px-6 py-4">{row.sunrise}</td>
                      <td className="px-6 py-4">{row.diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-4 text-sm text-stone-600 leading-relaxed mt-4">
              <p>
                <strong>Khopra Ridge vs. Poon Hill:</strong> Read our detailed <Link href="/viewpoints/khopra-vs-poon-hill-views" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Khopra Ridge vs Poon Hill Views Comparison</Link>. Poon Hill is easier to reach but draws hundreds of trekkers. Khopra Ridge takes 2 extra days but delivers a closer, uncrowded Dhaulagiri view.
              </p>
              <p>
                <strong>Khopra Ridge vs. Annapurna Base Camp:</strong> Annapurna Base Camp places you inside an amphitheater facing Annapurna I, but Dhaulagiri is not visible from ABC. If Dhaulagiri is your main goal, Khopra Ridge is the direct choice.
              </p>
            </div>
          </article>

          {/* SECTION 8: BEST SEASONS */}
          <article id="best-seasons" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Best Seasons for Dhaulagiri Views
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Autumn (October–November)</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">The most reliable season for clear mountain visibility. Post-monsoon skies are clean, temperatures are cold but manageable, and conditions are ideal for morning photography.</p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Spring (March–April)</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Rhododendron forests bloom lower on the route, adding vivid pink and red colors to the trail approach, though afternoon haze can build up more than in autumn.</p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Winter (December–January)</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Cold, but often exceptionally clear with minimal haze. Snow may close high sections depending on conditions, so check trail status before traveling.</p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-stone-950 text-base">Monsoon (June–September)</h4>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">Cloud cover and rain make mountain visibility unreliable during monsoon months. We generally do not recommend this season for view-focused trekkers.</p>
              </div>
            </div>
          </article>

          {/* SECTION 9: TREK ROUTE & LODGES */}
          <article id="trek-route" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Trek Route to Reach the Viewpoint
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Main Route:</strong> Pokhara &rarr; Ghandruk &rarr; Tadapani &rarr; Chhistibung &rarr; <Link href="/nodes/khopra-ridge-lodge-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Khopra Ridge Lodge</Link> (3,660m), typically taking 5–7 days round trip depending on pace and starting point.
              </p>
              <p>
                <strong>Khayer Lake Extension:</strong> Many trekkers add a side trip from Khopra Ridge to <Link href="/guides/khayer-lake-ultimate-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Sacred Khayer Lake (4,660m)</Link>, a high alpine lake offering an even broader panorama. This adds 1 to 2 days to the itinerary.
              </p>
              <p>
                <strong>Where You&apos;ll Stay:</strong> The route relies on community-run lodges in villages like Ghandruk, Swanta, Bayeli Kharka, and Chhistibung, directly funding local schools and clinics.
              </p>
            </div>
          </article>

          {/* SECTION 10: WHY UNDERRATED */}
          <article id="why-underrated" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Khopra Ridge Remains Underrated
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Given the quality of the panorama, it&apos;s fair to ask why Khopra Ridge isn&apos;t mentioned in the same breath as Poon Hill or Annapurna Base Camp. Part of it is simply visibility — it takes longer to reach and doesn&apos;t sit directly on the main commercial circuits, so it gets skipped by trekkers on tighter schedules.
              </p>
              <p>
                That obscurity is also its advantage. Fewer trekkers means quieter lodges, authentic interaction with local Gurung and Magar host families, and a sunrise view you aren&apos;t sharing with fifty other people.
              </p>
            </div>
          </article>

          {/* SECTION 11: COMMON MISTAKES */}
          <article id="common-mistakes" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Common Mistakes to Avoid
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-stone-600">
                <li><strong>Arriving after alpenglow has faded:</strong> Get to the viewpoint at least 20 minutes before sunrise, not at sunrise itself.</li>
                <li><strong>Underestimating the cold:</strong> Sunrise temperatures can drop below freezing even outside winter — dress in proper layers.</li>
                <li><strong>Assuming every morning is clear:</strong> Weather in the Himalaya changes fast; build a buffer day into your itinerary if the view is your priority.</li>
                <li><strong>Rushing the viewpoint:</strong> Many trekkers snap a few photos and leave within ten minutes. Give it at least 45–60 minutes to watch the light change across the massif.</li>
              </ul>
            </div>
          </article>

          {/* SECTION 12: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Dhaulagiri Views
            </h2>

            <div className="space-y-4 mt-6">
              {faqs.map((faq, idx) => (
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
              Khopra Ridge won&apos;t show up on many &quot;top viewpoints in Nepal&quot; lists, but for anyone specifically chasing a close, dramatic view of Dhaulagiri, it&apos;s one of the best-kept secrets in the Annapurna region. The open ridgeline, the direct sightline across the Kali Gandaki Gorge, and the near-total absence of crowds combine into a sunrise experience that&apos;s hard to replicate at busier viewpoints.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section id="booking" className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Ready to See Dhaulagiri from Khopra Ridge for Yourself?
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                As a licensed Nepal trekking operator based in Pokhara (NTB License #8928-091), we design guided Khopra Ridge itineraries built around clear-sky timing and proper acclimatization. Get in touch with our team to plan your trek dates or request a custom itinerary including Khayer Lake.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Contact Local Trek Specialists &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Trek:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/viewpoints/khopra-vs-poon-hill-views" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read Khopra vs Poon Hill Views Comparison
                  </Link>
                  <Link href="/mountains/annapurna-south-views" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read Annapurna South Views Guide
                  </Link>
                  <Link href="/viewpoints/best-photography-spots" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read Best Photography Spots Guide
                  </Link>
                  <Link href="/planning/teahouse-locator" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Use our interactive Teahouse Finder tool
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* EEAT Author Verification Banner */}
          <div className="p-6 rounded-3xl bg-stone-100 border border-stone-200 flex items-start gap-4">
            <span className="text-2xl mt-0.5">🏔️</span>
            <div>
              <h4 className="font-bold text-stone-900 text-sm font-sans font-medium">Reviewed by Local Guides</h4>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                This mountain panorama guide is maintained by our licensed local trekking guides operating out of Kathmandu and Pokhara. Nepal Tourism Operator License #8928-091. Email: <a href="mailto:khopraridge51@gmail.com" className="text-emerald-700 font-semibold hover:underline">khopraridge51@gmail.com</a>.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
