import React from "react";
import Link from "next/link";

export default function Page() {
  const options = [
    {
      type: "Private Jeep (Recommended)",
      time: "3 - 3.5 Hours",
      cost: "$90 - $120 USD (per jeep)",
      suitability: "Families, groups, or solo trekkers wanting comfort and speed.",
      pros: "Direct departure from your Pokhara hotel, flexible photo stops, handles dirt roads smoothly, fits up to 7 passengers."
    },
    {
      type: "Local Bus",
      time: "5 - 6 Hours",
      cost: "$4 - $6 USD (per person)",
      suitability: "Budget backpackers and solo travelers with time to spare.",
      pros: "Extremely affordable. Offers an authentic local experience, but is bumpy, crowded, and operates on fixed, slow schedules."
    },
    {
      type: "Shared Jeep",
      time: "4 - 5 Hours",
      cost: "$10 - $15 USD (per person)",
      suitability: "Solo travelers wanting a compromise between cost and speed.",
      pros: "Depart from Hari Chowk in Pokhara. Leaves when full, meaning potential waiting times."
    }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center gap-2 text-xs text-stone-500 font-semibold">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/planning/khopra-trek-itinerary" className="hover:text-emerald-600 transition-colors">Itineraries</Link>
          <span>/</span>
          <span className="text-stone-800">From Pokhara</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Travel Logistics</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Starting the Khopra Trek from Pokhara
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Your comprehensive transit guide. Learn how to navigate transport options, trailheads, and departure schedules from Pokhara Lakeside.
          </p>
        </div>

        {/* Introduction */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">Pokhara: The Gateway to Khopra Ridge</h2>
          <p>Pokhara is the perfect launchpad for the Khopra Ridge Trek. Sitting at an altitude of just 820 meters, Lakeside Pokhara allows you to purchase any last-minute gear, finalize permits, meet your guide, and get a solid night of rest before heading into the Annapurna foothills.
          </p>
          <p>Unlike treks in the Everest region which require flights to Lukla, the Khopra Trek is entirely accessible by road. This makes it highly flexible, less prone to flight delay cancellations, and significantly cheaper to coordinate.
          </p>
        </div>

        {/* Transit options */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Transport Modes: Pokhara to Trailhead</h3>
          <div className="space-y-6">
            {options.map((opt, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-100 pb-3 gap-2">
                  <h4 className="font-extrabold text-stone-950 text-base">{opt.type}</h4>
                  <span className="text-xs font-bold text-emerald-600 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 shrink-0">
                    {opt.time} | {opt.cost}
                  </span>
                </div>
                <div className="mt-4 space-y-2 text-xs text-stone-500 leading-relaxed">
                  <p><strong>Best For:</strong> {opt.suitability}</p>
                  <p><strong>Details:</strong> {opt.pros}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trailheads Guide */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h3 className="text-xl font-bold text-stone-950">Which Trailhead Should You Choose?</h3>
          <p>Depending on your itinerary pacing, you have a few options for where to put boots to the ground:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Kimche (via Ghandruk):</strong>The most popular starting point. You drive from Pokhara through Nayapul and Birethanti, climbing up the Modi Khola valley to Kimche. From Kimche, it is a pleasant 1-hour stone step hike to Ghandruk village.
            </li>
            <li>
              <strong>Nayapul / Syauli Bazaar:</strong>Starting lower down gives you a longer walk along the river. Great if you want to stretch your legs immediately, but adds extra vertical meters to your first day.
            </li>
            <li>
              <strong>Naya Pul (via Ghorepani / Ulleri):</strong>Ideal if you want to tackle the trek counter-clockwise. You start with the famous 3,200 stone stairs of Ulleri, hike to Ghorepani first, and then make a loop to Khopra Ridge.
            </li>
          </ul>
        </div>

        {/* Logistical Checklist */}
        <div className="mt-12 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Pokhara Departure Checklist</h3>
          <ul className="list-disc pl-6 text-xs leading-relaxed font-medium space-y-2">
            <li>Ensure you have your original passport, copies, and PP photos for the checkpoints.</li>
            <li>Collect your printed TIMS card and ACAP permits in Pokhara (or make sure your agency has them).</li>
            <li>Withdraw enough cash (Nepalese Rupees) from Lakeside ATMs, as there are no banks or functioning ATMs in Ghandruk, Swanta, or Khopra.</li>
            <li>Pack excess suitcases at your Lakeside hotel; they will store them for free until your return.</li>
          </ul>
        </div>

        {/* EEAT Footnote */}
        <div className="mt-12 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5"></span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">First-Hand Expert Insight</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">This guide is maintained and reviewed by our licensed local trekking guides operating out of Pokhara. We regularly update routes, weather advisories, and community lodge statuses based on active trail checks.
            </p>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="mt-16 rounded-3xl bg-emerald-950 p-8 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl font-bold">Simplify Your Pokhara Logistics</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">We coordinate private, air-conditioned jeeps, professional guides, and pre-booked permits. We will pick you up directly from your Pokhara Lakeside hotel.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >Request booking
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
