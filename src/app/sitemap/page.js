import React from "react";
import Link from "next/link";
import { sitemapSections } from "@/data/sitemapLinks";

export default function Page() {
  const sections = sitemapSections;

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-7xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Site Directory</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Authority HTML Sitemap
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Explore the complete 182-page sitemap of the Khopra Ridge Trek authority website. Grouped into structured thematic clusters to ensure maximum link equity and easy crawlability.
          </p>
        </div>

        {/* Sitemap grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((sec, i) => (
            <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-4">
              <h3 className="font-extrabold text-stone-950 text-sm tracking-wider uppercase border-b border-stone-100 pb-2">{sec.title}</h3>
              <ul className="space-y-2">
                {sec.links.map((lnk, idx) => (
                  <li key={idx} className="text-xs">
                    <Link 
                      href={lnk.href}
                      className="text-stone-600 hover:text-emerald-600 hover:underline transition font-medium block"
                    >
                      {lnk.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5"></span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">We compile sitemaps to coordinate directory files correctly. All paths comply with Next.js pre-rendering static route standards.
            </p>
          </div>
        </div>

      </main>
    </div>
  );
}

export const metadata = {
  alternates: {
    canonical: '/sitemap',
  },
};
