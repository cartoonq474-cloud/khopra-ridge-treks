import React from "react";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/mountains/annapurna-south-views",
  },
  title: "Annapurna South from Khopra Ridge | Nepal Trek Guide",
  description: "See Annapurna South up close from Khopra Ridge — the closest front-facing viewpoint in the Annapurna region. Sunrise, sunset, photography tips, and seasonal.",
};

export default function AnnapurnaSouthViewsPage() {
  const quickFacts = [
    { label: "Annapurna South Altitude", detail: "7,219 m (23,684 ft)" },
    { label: "First Ascent", detail: "1964 by Kyoto University Expedition" },
    { label: "Viewing Orientation", detail: "Direct southwest face alignment" },
    { label: "Vertical Rise", detail: "~4,000 m drop from summit to valley floor" },
    { label: "Best Viewing Hours", detail: "Pre-dawn sunrise & evening alpenglow" },
    { label: "Best Seasons", detail: "October–December, February–April" },
    { label: "Lodging Style", detail: "Community eco-lodges right at viewpoint" },
    { label: "Crowd Level", detail: "Very Low (15–30 guests daily)" }
  ];

  const comparisons = [
    {
      viewpoint: "Khopra Ridge",
      perspective: "Front-facing southwest wall, close proximity, uncrowded lodge setting",
      bestFor: "Close detail, alpenglow photography, solitude"
    },
    {
      viewpoint: "Poon Hill",
      perspective: "Distant panoramic sweep shared with Dhaulagiri & eastern peaks",
      bestFor: "Short 3-4 day trips, families, classic sunrise"
    },
    {
      viewpoint: "Mardi Himal",
      perspective: "Faces Machhapuchhre & Sanctuary rim, Annapurna South is secondary",
      bestFor: "Fishtail mountain views, ridge walking"
    },
    {
      viewpoint: "Annapurna Base Camp",
      perspective: "Inside 360-degree Sanctuary amphitheater surrounded by walls",
      bestFor: "High altitude basin immersion, dramatic cliffs"
    }
  ];

  const faqs = [
    {
      q: "Is Annapurna South clearly visible from Khopra Ridge?",
      a: "Yes, on clear days Annapurna South is the dominant feature on the eastern horizon from Khopra Ridge, visible as a near-complete, unobstructed view of its southwest face. Visibility is weather-dependent and best outside the monsoon season."
    },
    {
      q: "Why does Annapurna South look so close from Khopra Ridge?",
      a: "Khopra Ridge sits on a direct sightline to the mountain with no intervening ridgelines, and the steep vertical rise from the valley floor to the summit creates a strong scale effect that makes the mountain appear closer than it actually is."
    },
    {
      q: "What is the best time to see Annapurna South from Khopra Ridge?",
      a: "Post-monsoon (October to early December) and winter (December to February) offer the clearest skies. Within each day, the 30 minutes around sunrise and sunset provide the most dramatic lighting."
    },
    {
      q: "Can you see Annapurna South at both sunrise and sunset?",
      a: "Yes, and both are worth seeing for different reasons — sunrise tends to be clearer and crisper, while sunset brings a warmer alpenglow across the southwest face. Staying an extra night on the ridge lets you experience both."
    },
    {
      q: "Which is better for mountain views: Poon Hill or Khopra Ridge?",
      a: "Poon Hill offers a wider panorama with more peaks visible at a greater distance and larger crowds. Khopra Ridge offers a closer, more detailed, front-facing view of Annapurna South specifically, with far fewer trekkers."
    },
    {
      q: "What other mountains can be seen alongside Annapurna South from here?",
      a: "Hiunchuli is visible nearby, Annapurna I connects along the same ridgeline further north, and on especially clear days, Machhapuchhre's fishtail summit is visible along the horizon."
    },
    {
      q: "Is Khopra Ridge good for photographing Annapurna South?",
      a: "Yes. The direct, front-facing alignment and southwest-facing exposure make it well suited to both sunrise and sunset photography, with strong opportunities for both wide-angle panoramas and telephoto detail shots."
    },
    {
      q: "What season has the clearest views of Annapurna South?",
      a: "Post-monsoon and winter months generally offer the clearest air and most reliable visibility. Monsoon season (June to September) brings frequent cloud cover that can obscure the peak for extended periods."
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
            <span className="text-emerald-400">Annapurna South Views</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 px-4 py-1 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">
            Mountain Profile Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Annapurna South from Khopra Ridge: Views, Sunrise, Sunset &amp; Photography Guide
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-stone-300 max-w-4xl leading-relaxed font-medium">
            Stand on <Link href="/guides/khopra-ridge-ultimate-guide" className="text-emerald-400 underline hover:text-emerald-300 font-semibold">Khopra Ridge</Link> at first light and Annapurna South doesn&apos;t look like a distant Himalayan giant. It looks like a wall. At 7,219 meters, the mountain rises directly to the east of the ridge, filling the horizon with glaciers and snowfields.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Peak Elevation</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">7,219m</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">23,684 ft above sea level</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Ridge Vantage Point</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">3,660m</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Community eco-lodge steps</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Vertical Relief</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">4,000m</span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Valley floor to summit face</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300">
              <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block">Crowd Level</span>
              <span className="text-xl md:text-2xl font-black text-emerald-400 mt-1 block">Very Low</span>
              <span className="text-[10px] text-emerald-400 font-semibold block mt-0.5">Uncrowded lodge terrace</span>
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
              <a href="#why-close" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Why It Feels So Close
              </a>
              <a href="#mountain-profile" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Mountain Profile &amp; Glaciers
              </a>
              <a href="#visual-breakdown" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Visual Breakdown
              </a>
              <a href="#sunrise" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Sunrise Experience
              </a>
              <a href="#sunset" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Sunset &amp; Alpenglow
              </a>
              <a href="#photography" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Photography Guide
              </a>
              <a href="#seasonal-visibility" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Seasonal Visibility
              </a>
              <a href="#comparison" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Viewpoint Comparison
              </a>
              <a href="#trekking-experience" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Trekking Experience
              </a>
              <a href="#responsible-viewing" className="px-3 py-2 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition duration-200 block">
                Conservation &amp; Community
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
              Annapurna South from Khopra Ridge
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
              <p>
                Stand on Khopra Ridge at first light and Annapurna South doesn&apos;t look like a distant Himalayan giant. It looks like a wall. At 7,219 meters, the mountain rises directly to the east of the ridge, close enough that its glaciers, snowfields, and jagged summit ridge fill the entire horizon.
              </p>
              <p>
                We&apos;ve guided trekkers to this ridge for years, and the reaction is almost always the same: people expect a nice mountain view, and instead they get one of the closest, most complete face-on encounters with a 7,000-meter peak anywhere in the Annapurna Conservation Area.
              </p>
              <p>
                This guide is built around one question: what will you actually see from here, and when will you see it at its best? We&apos;ll walk through why the view feels so close, what&apos;s visible on the mountain itself, how sunrise and sunset transform it, and how to photograph it properly.
              </p>
            </div>
          </article>

          {/* SECTION 1: QUICK FACTS */}
          <article id="quick-facts" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Quick Facts: Annapurna South from Khopra Ridge
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

          {/* SECTION 2: WHY IT FEELS SO CLOSE */}
          <article id="why-close" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Why Annapurna South Feels So Close from Khopra Ridge
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                Most Himalayan viewpoints in Nepal show you mountains from a distance, across a valley, often shared with a dozen other peaks competing for attention. Khopra Ridge works differently, and the reason comes down to geography.
              </p>
              <p>
                <strong>Direct Alignment of Khopra Ridge with Annapurna South:</strong> Khopra Ridge sits almost directly west of Annapurna South, on a line that puts the mountain squarely in front of you rather than off to one side. There&apos;s no ridge, forest, or foothill blocking the sightline. The lodges and viewpoint here were effectively built facing the mountain&apos;s southwest wall, which is why the alignment feels almost deliberate.
              </p>
              <p>
                <strong>Scale Effect and Vertical Rise from the Valleys Below:</strong> Below the ridge, the land drops away into the forested slopes around Swanta and Chhistibung before climbing back up toward the Annapurna massif. That vertical drop is part of what makes the mountain feel so large. You&apos;re not just looking across at a peak — you&apos;re looking at roughly 4,000 meters of vertical relief between the valley floor and the summit, compressed into a single, continuous view.
              </p>
              <p>
                <strong>Position Within the Annapurna Massif:</strong> Annapurna South doesn&apos;t stand alone. It&apos;s connected to Annapurna I along a high ridgeline, with Hiunchuli forming a smaller companion peak to the south. From Khopra Ridge, this connection is visible in a way that few other viewpoints capture, giving you a sense of the massif as a single, continuous mountain system rather than isolated summits.
              </p>
            </div>
          </article>

          {/* SECTION 3: MOUNTAIN PROFILE */}
          <article id="mountain-profile" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Annapurna South: Mountain Profile and Structure
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Height, Location, and Massif Classification:</strong> Annapurna South rises to 7,219 meters (23,684 feet) and forms the southern anchor of the Annapurna Himal inside the Annapurna Conservation Area. It was first climbed in 1964 by a Kyoto University expedition, decades after its more famous neighbor Annapurna I, and it remains less climbed and less photographed than peaks of similar height elsewhere in Nepal.
              </p>
              <p>
                <strong>South Face Characteristics:</strong> The face visible from Khopra Ridge is the mountain&apos;s southwest side — steep, heavily glaciated, and cut by exposed rock ridges that break through the snow in vertical bands. It&apos;s a working mountain face, not a smooth pyramid: you can pick out crevasse lines, hanging seracs, and the kind of jagged relief that makes for dramatic photography rather than a postcard-flat silhouette.
              </p>
              <p>
                <strong>Glacial and Snow Formations Visible from the Ridge:</strong> On a clear day, you can make out distinct snowfields near the summit, hanging glaciers clinging to the steeper sections of the face, and ice formations that shift in appearance depending on the time of day and season. Early morning light tends to flatten these details, while late afternoon side-lighting brings out their texture.
              </p>
            </div>
          </article>

          {/* SECTION 4: VISUAL BREAKDOWN */}
          <article id="visual-breakdown" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              What You See from Khopra Ridge: A Full Visual Breakdown
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>The Full South-Facing Wall of Annapurna South:</strong> The dominant feature from the ridge is the mountain&apos;s entire southwest wall, visible top to bottom in a single frame. This uninterrupted view is rare — at most Himalayan viewpoints, you see a summit pyramid rather than the full vertical structure of the mountain.
              </p>
              <p>
                <strong>Snowfields, Ice Ridges, and Glacier Textures:</strong> Closer viewing (or a telephoto lens) reveals layered snowfields separated by exposed rock ribs, sharp ice ridges catching the light, and glacier surfaces that shift from blue-white in the morning to warm gold at sunset.
              </p>
              <p>
                <strong>Layered Himalayan Backdrop:</strong> Annapurna South doesn&apos;t stand in isolation. To its north, the ridgeline connects toward Annapurna I. Hiunchuli sits closer to the foreground, and on especially clear days, <Link href="/mountains/machhapuchhre-views" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Machhapuchhre&apos;s fishtail peak</Link> is visible further along the horizon, adding depth to the panorama.
              </p>
              <p>
                <strong>Valley Contrast and Depth Perception:</strong> Between the ridge and the mountain, the valley system and the forested foothills around <Link href="/nodes/chhistibung-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Chhistibung</Link> and <Link href="/nodes/swanta-village-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Swanta</Link> add a sense of scale. That contrast between deep green forest, mid-elevation ridgelines, and the icy summit above is part of what makes the view feel three-dimensional rather than flat.
              </p>
            </div>
          </article>

          {/* SECTION 5: SUNRISE */}
          <article id="sunrise" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Sunrise on Annapurna South from Khopra Ridge
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>First Light Hitting the Summit Ridge:</strong> Before sunrise, Annapurna South often appears as a dark, almost silhouetted mass against a lightening sky. The first direct sunlight typically strikes the uppermost ridgeline and snowfields first, creating a thin band of pink or orange light along the summit while the lower face remains in shadow.
              </p>
              <p>
                <strong>Cloud Interaction and Morning Atmospheric Shifts:</strong> Mornings on Khopra Ridge are often clearer than afternoons, before valley heat pushes moisture upward. It&apos;s common to see thin cloud bands drifting across the lower slopes while the summit stays completely exposed — a combination that photographs well and adds a sense of scale to the shot.
              </p>
              <p>
                <strong>Best Sunrise Viewing Position Along the Ridge:</strong> The main viewpoint just above the lodges offers the clearest unobstructed line to the mountain. Arriving 20 to 30 minutes before official sunrise gives you time to watch the full light progression rather than just the final result.
              </p>
            </div>
          </article>

          {/* SECTION 6: SUNSET */}
          <article id="sunset" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Sunset and Himalayan Alpenglow Experience
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Golden Light on the Southwest Face:</strong> Because Annapurna South&apos;s visible face from Khopra Ridge faces roughly southwest, it catches direct evening light in a way that many Himalayan viewpoints don&apos;t. This is when the mountain&apos;s alpenglow — a deep, warm orange-to-pink glow across the snow and ice — is most pronounced.
              </p>
              <p>
                <strong>Shadow Expansion Across the Mountain Wall:</strong> As the sun drops, shadows creep upward from the base of the face, gradually isolating the summit in warm light while the lower slopes fall into cooler blue tones. This transition, which can take 20 to 30 minutes, is often the single most photographed moment on the ridge.
              </p>
              <p>
                <strong>Why Sunset Often Feels More Dramatic Than Sunrise Here:</strong> Sunrise tends to be clearer and crisper; sunset tends to be warmer and more atmospheric, partly because afternoon cloud buildup adds texture and color to the sky behind the mountain. Neither is objectively better — they&apos;re different experiences, and many trekkers choose to stay an extra night specifically to see both.
              </p>
            </div>
          </article>

          {/* SECTION 7: PHOTOGRAPHY GUIDE */}
          <article id="photography" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Photography Guide for Annapurna South from Khopra Ridge
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Best Lenses and Focal Lengths:</strong> A standard wide-angle (16–24mm equivalent) captures the full south face along with the ridge and foreground. A short telephoto (70–200mm) is better for isolating glacier textures, ridgelines, and the alpenglow transition on the upper face. Read our <Link href="/viewpoints/best-photography-spots" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Best Photography Spots on Khopra Trek</Link> guide.
              </p>
              <p>
                <strong>Composition from Ridge-Edge Viewpoints:</strong> The most effective compositions typically use the ridge itself, a lodge rooftop, or prayer flags as foreground elements, with Annapurna South filling the middle and upper frame.
              </p>
              <p>
                <strong>Golden Hour and Blue Hour Strategy:</strong> Shoot the 20 minutes before and after sunrise and sunset for the strongest color. Don&apos;t pack up immediately after the sun disappears — the blue hour that follows sunset produces a soft, evenly lit shot.
              </p>
              <p>
                <strong>Cloud Behavior &amp; Exposure Challenges:</strong> Bright snow against a darker foreground can trick your camera&apos;s metering into underexposing the mountain. Manual exposure or exposure compensation (+0.7 to +1.3 stops) usually corrects this.
              </p>
            </div>
          </article>

          {/* SECTION 8: SEASONAL VISIBILITY */}
          <article id="seasonal-visibility" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Seasonal Visibility and Weather Conditions
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Best Months for Clear Views:</strong> October through early December offers the most reliable visibility, with stable weather following the monsoon and before winter storms set in. Late winter (February–early March) can also be excellent, with sharp, cold-air clarity.
              </p>
              <p>
                <strong>Monsoon Season Limitations:</strong> Between June and September, cloud cover regularly obscures the peak for days at a time. Trekking during this period is possible, but the mountain view is unreliable.
              </p>
              <p>
                <strong>Winter Sharpness and Snow Contrast Advantage:</strong> Winter air tends to be drier and clearer, sharpening the visual contrast between rock, snow, and sky. The tradeoff is colder overnight temperatures on the ridge.
              </p>
            </div>
          </article>

          {/* SECTION 9: VIEWPOINT COMPARISON */}
          <article id="comparison" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              How Khopra Ridge Compares to Other Annapurna Viewpoints
            </h2>
            <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm my-6">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50 text-stone-400 font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">Viewpoint</th>
                    <th className="px-6 py-4">Annapurna South Perspective</th>
                    <th className="px-6 py-4">Best Suited For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-600">
                  {comparisons.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/50">
                      <td className="px-6 py-4 font-bold text-stone-900">{row.viewpoint}</td>
                      <td className="px-6 py-4 text-emerald-700 font-semibold">{row.perspective}</td>
                      <td className="px-6 py-4">{row.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Khopra Ridge vs. Poon Hill:</strong> Read our detailed <Link href="/viewpoints/khopra-vs-poon-hill-views" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Khopra Ridge vs Poon Hill Views Comparison</Link>. Poon Hill is closer to Pokhara and more crowded; Khopra Ridge trades that for close-range proximity and zero crowd interference.
              </p>
              <p>
                <strong>Khopra Ridge vs. Mardi Himal:</strong> Mardi Himal faces more toward Machhapuchhre, with Annapurna South as a secondary peak. Khopra Ridge is built around a direct, front-facing encounter with Annapurna South.
              </p>
              <p>
                <strong>Khopra Ridge vs. Annapurna Base Camp:</strong> Annapurna Base Camp sits inside a 360-degree Sanctuary amphitheater. Khopra Ridge offers a focused, one-mountain face-on view with a quieter, less crowded approach.
              </p>
            </div>
          </article>

          {/* SECTION 10: TREKKING EXPERIENCE */}
          <article id="trekking-experience" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Trekking Experience: When You Actually See Annapurna South
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>First Appearance on the Trek:</strong> Depending on your route, Annapurna South comes into view gradually as you climb out of the rhododendron forests toward Khopra Ridge, with partial glimpses through the trees before the full panorama opens up near the lodges.
              </p>
              <p>
                <strong>Lodge-Side Viewing Experience:</strong> The view isn&apos;t a separate side trip — it&apos;s visible directly from the community lodges where you&apos;re staying. You don&apos;t need to wake up hours early or hike further to reach a viewpoint.
              </p>
              <p>
                <strong>Overnight Advantage:</strong> Staying overnight on the ridge allows you to catch both sunset and sunrise from the same spot, watching the changing light transform the mountain wall.
              </p>
            </div>
          </article>

          {/* SECTION 11: RESPONSIBLE VIEWING */}
          <article id="responsible-viewing" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Responsible Viewing and Conservation Context
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                <strong>Annapurna Conservation Area Importance:</strong> Khopra Ridge sits within the ACAP, Nepal&apos;s largest protected area, established to balance community tourism with forest and wildlife preservation. Read our <Link href="/ecology/annapurna-conservation-area-guide" className="text-emerald-700 underline font-semibold hover:text-emerald-600">ACAP Guide</Link>.
              </p>
              <p>
                <strong>Community Lodge Model:</strong> Lodges operate on a community-owned model. Trekking income supports Magar villages directly, funding local schools, health clinics, and trail maintenance.
              </p>
              <p>
                <strong>Leave No Trace Principles:</strong> At 3,660 meters, alpine recovery is slow. Carry out all waste, stay on marked paths, and minimize single-use plastics.
              </p>
            </div>
          </article>

          {/* SECTION 12: FAQS */}
          <article id="faq" className="scroll-mt-12 space-y-6">
            <h2 className="text-2xl font-extrabold text-stone-955 tracking-tight border-b border-stone-200 pb-3">
              Frequently Asked Questions About Annapurna South
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
              Annapurna South from Khopra Ridge isn&apos;t just another mountain view — it&apos;s one of the closest, most complete face-on encounters with a 7,000-meter Himalayan peak that you can reach on a moderate trek in this region. The direct alignment, dramatic vertical rise, and southwest-facing exposure combine to make both sunrise and sunset genuinely worth building extra time into your itinerary for.
            </p>
          </article>

          {/* SECTION: CTA */}
          <section id="booking" className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white rounded-3xl p-8 shadow-md border border-stone-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
            <div className="relative z-10 space-y-6 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                See Annapurna South Up Close, In Person
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Join our guided community lodge trek to Khopra Ridge and experience sunrise and sunset over Annapurna South from one of the closest viewpoints in the Annapurna region — while your stay directly supports local Magar villages.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Plan Your Trek Now &rarr;
                </Link>
              </div>

              {/* Continue Planning Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Continue Planning Your Trek:</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  <Link href="/mountains/dhaulagiri-views-khopra" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read Dhaulagiri Views from Khopra Ridge Guide
                  </Link>
                  <Link href="/mountains/machhapuchhre-views" className="hover:text-emerald-400 flex items-center gap-1.5 transition">
                    Read Machhapuchhre Views Guide
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
                This mountain profile guide is maintained by our licensed local trekking guides operating out of Kathmandu and Pokhara. Nepal Tourism Operator License #8928-091. Email: <a href="mailto:khopraridge51@gmail.com" className="text-emerald-700 font-semibold hover:underline">khopraridge51@gmail.com</a>.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
