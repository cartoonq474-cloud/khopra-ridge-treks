import React from "react";
import Link from "next/link";

export default function Page() {
  const highlights = [
    {
      title: "Janai Purnima Pilgrimage",
      desc: "During the full moon of August (Janai Purnima), thousands of Hindu and Buddhist pilgrims make the arduous journey up to the lake to bathe in the holy waters and seek blessings from the goddess Khayer Baraha."
    },
    {
      title: "The Sacrifice Rituals",
      desc: "Historically, pilgrims offer animal sacrifices (sheep or goats) to the goddess at the temple gates as a symbol of devotion and a plea for child fertility, wealth, or good health."
    },
    {
      title: "Cultural Synthesis",
      desc: "The temple is a beautiful representation of Nepalese syncretism, where Hindu Vedic worship of Vishnu (Baraha avatar) and local Buddhist animistic rituals merge harmoniously."
    }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center gap-2 text-xs text-stone-500 font-semibold">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/guides/khayer-lake-ultimate-guide" className="hover:text-emerald-600 transition-colors">Khayer Lake Hub</Link>
          <span>/</span>
          <span className="text-stone-800">Baraha Temple</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Pilgrimage Culture</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Khayer Baraha Temple Guide
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Discover the spiritual heart. A comprehensive guide to the historical background, religious festivals, and architecture of the lakeside shrine.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">A Sacred Alpine Shrine</h2>
          <p>
            The Khayer Baraha Temple is a small, slate-stone temple complex situated on the banks of Khayer Lake (4,660m). Dedicated to the goddess Baraha (the wild boar avatar of Lord Vishnu in Hindu mythology), this isolated shrine represents one of the most sacred high-altitude pilgrimage sites in the Gandaki province of Nepal.
          </p>
          <p>
            For local communities (primarily Gurungs and Magars living in the valleys below), the lake and the temple are holy ground. Hikers are requested to treat the site with utmost respect.
          </p>
        </div>

        {/* Highlights List */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Key Traditions and Pilgrimage Details</h3>
          <div className="space-y-6">
            {highlights.map((hl, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base">{hl.title}</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">{hl.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sacred Rules for Visitors */}
        <div className="mt-12 p-8 bg-stone-900 border border-stone-850 rounded-3xl text-stone-300 space-y-4">
          <h3 className="text-lg font-bold text-white">Sacred Etiquette & Code of Conduct</h3>
          <ul className="list-disc pl-6 text-xs leading-relaxed text-stone-400 space-y-3">
            <li>
              <strong>Remove Shoes:</strong> You must remove your shoes and leather items before stepping onto the immediate stone platform surrounding the shrine.
            </li>
            <li>
              <strong>No Pollution:</strong> Do not throw garbage, plastic, or food waste into the lake or around the temple grounds. The water is considered holy.
            </li>
            <li>
              <strong>Bathing Regulations:</strong> If you perform a ritual wash, do not use soaps or shampoos in the lake, as it pollutes the clean glacial feed.
            </li>
            <li>
              <strong>Respect Photography Rules:</strong> While photographing the temple exterior is allowed, always ask permission before taking photos of pilgrims performing rituals.
            </li>
          </ul>
        </div>

        {/* EEAT Footnote */}
        <div className="mt-12 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">First-Hand Expert Insight</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              This guide is maintained and reviewed by our licensed local trekking guides operating out of Pokhara. We regularly update routes, weather advisories, and community lodge statuses based on active trail checks.
            </p>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="mt-16 rounded-3xl bg-emerald-950 p-8 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl font-bold">Experience Himalayan Culture</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">
              Our guides are local residents who can explain the mythology, history, and spiritual practices of the temple during your visit.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >
              Inquire now
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
