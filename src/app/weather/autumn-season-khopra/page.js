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
          <span className="text-stone-800">Autumn Season</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Peak Season</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Autumn Trekking on Khopra Ridge (Sept - Nov)
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Brilliant blue skies and sharp mountain faces. Learn why autumn represents the gold standard for mountain viewing and photography.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">The Absolute Best Trekking Window</h2>
          <p>Autumn (running from September through November) is the premier trekking season in Nepal. After the monsoon rains wash the dust and pollution from the atmosphere, the sky clearing leaves the sharpest, most crystal-clear mountain views of the entire year.
          </p>
          <p>For photographers wishing to capture the mirror reflections of Annapurna South on Khayer Lake or golden sunrises over Dhaulagiri from the ridge, autumn is the undisputed gold standard window.
          </p>
        </div>

        {/* Monthly breakdown */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Autumn Month-by-Month Profile</h3>
          <div className="space-y-4 text-xs text-stone-600">
            <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
              <h4 className="font-extrabold text-stone-950 text-sm">September: Monsoon Clearing</h4>
              <p className="mt-2 leading-relaxed">Early September may still see occasional monsoon cloudiness and rain. By mid-month, the sky clears completely, offering lush green landscapes combined with crisp, cloudless mornings.
              </p>
            </div>
            <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
              <h4 className="font-extrabold text-stone-950 text-sm">October: The Golden Window</h4>
              <p className="mt-2 leading-relaxed">The most popular month. Perfect, stable climate, mild climbing temperatures, and dry trails. Golden hour sunrises hit the peaks with absolute clarity. Secure your bookings early.
              </p>
            </div>
            <div className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
              <h4 className="font-extrabold text-stone-950 text-sm">November: Dry & Crisp Viewings</h4>
              <p className="mt-2 leading-relaxed">Stunning visibility and clear daytime air. Temperatures drop significantly, bringing freezing night winds to Khopra Ridge (up to -8°C). A heavy down jacket is mandatory.
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
            <h3 className="text-2xl font-bold">Secure Your Autumn Space</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">Autumn is the busiest season in the Himalayas. Book your guided loop early to secure private vehicle transfers and cozy rooms at the community lodges.
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

export const metadata = {
  alternates: {
    canonical: '/weather/autumn-season-khopra',
  },
};
