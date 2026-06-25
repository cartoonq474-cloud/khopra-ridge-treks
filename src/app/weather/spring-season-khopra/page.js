import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center gap-2 text-xs text-stone-500 font-semibold">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/weather/best-time-to-trek" className="hover:text-emerald-600 transition-colors">Weather Hub</Link>
          <span>/</span>
          <span className="text-stone-800">Spring Season</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Spring Trekking</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Spring Trekking on Khopra Ridge (March - May)
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Blooming forests and warm trails. A detailed guide to spring climbing, forest canopies, temperatures, and packing checklists.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">A Season of Color and Comfort</h2>
          <p>Spring (running from March through May) is one of the two peak trekking windows in Nepal. As winter retreats, temperatures warm up across the Annapurna foothills, bringing comfortable climbing conditions during the day and melting high-altitude snow blockades on the trails.
          </p>
          <p>The hallmark attraction of a spring trek is the flora. The massive oak and rhododendron forests surrounding Ghandruk, Tadapani, and Swanta burst into life with pink, red, and white blossoms, turning the hillsides into a massive garden.
          </p>
        </div>

        {/* Monthly breakdown */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Spring Month-by-Month Profile</h3>
          <div className="space-y-4 text-xs text-stone-600">
            <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
              <h4 className="font-extrabold text-stone-950 text-sm">March: Early Spring Bloom</h4>
              <p className="mt-2 leading-relaxed">Temperatures start warming up, but nights remain crisp. The rhododendron bloom begins in lower valley nodes. High pastures may still have lingering winter snow.
              </p>
            </div>
            <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
              <h4 className="font-extrabold text-stone-950 text-sm">April: Peak Flower Canopy</h4>
              <p className="mt-2 leading-relaxed">The absolute highlight month for forest colors. Rhododendrons are in full bloom across all elevations. Dry trails, clear morning views, and warm daytime temperatures.
              </p>
            </div>
            <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
              <h4 className="font-extrabold text-stone-950 text-sm">May: Warm Pre-Monsoon Transition</h4>
              <p className="mt-2 leading-relaxed">The warmest spring month. Daytime temperatures can reach 22°C in the valleys. Afternoon haze is common, but early morning views are crystal-clear.
              </p>
            </div>
          </div>
        </div>

        {/* EEAT Footnote */}
        <div className="mt-12 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5"></span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">First-Hand Expert Insight</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">This guide is maintained and reviewed by our licensed local trekking guides operating out of Kathmandu. We regularly update routes, weather advisories, and community lodge statuses based on active trail checks.
            </p>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="mt-16 rounded-3xl bg-emerald-950 p-8 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl font-bold">Book a Spring Canopy Tour</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">Experience the spectacular spring colors of Nepal. Inquire today to secure lodge bookings during the peak spring bloom season.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >Inquire now
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
