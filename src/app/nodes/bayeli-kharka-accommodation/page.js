import React from "react";
import Link from "next/link";

export default function Page() {
  const specs = [
    { label: "Lodge Ownership", value: "100% community-owned and operated by local committees. Profits fund local valley schools." },
    { label: "Room Style", value: "Basic wood partition twin rooms. Thermal insulation is limited; heavy blankets are provided, but a 3-season sleeping bag is highly recommended." },
    { label: "Electricity & Charging", value: "Powered entirely by local solar panels. Device charging is limited to the dining area and is highly dependent on daily sunlight levels." },
    { label: "Water & Showers", value: "Cold running water. Gas-heated hot shower buckets can be requested for a fee of NPR 300 - 400." }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center gap-2 text-xs text-stone-500 font-semibold">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/nodes" className="hover:text-emerald-600 transition-colors">Nodes</Link>
          <span>/</span>
          <span className="text-stone-800">Bayeli Accommodation</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Community Lodges</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Bayeli Kharka Accommodation Guide
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">High pasture lodging. A complete resource covering twin room configurations, blanket availability, solar systems, and dining services at Bayeli.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">A Remote Wilderness Sleep Stop</h2>
          <p>Sitting at 3,425 meters (11,236 feet) in an isolated mountain pasture clearing, Bayeli Kharka represents one of the most high and remote overnight stops along the Khopra loop trek. Unlike Ghandruk or Ghorepani, there is no private commercial competition here; there is only a single community-owned lodge.
          </p>
          <p>Because of this isolation, services are basic but extremely cozy. The lodge serves as a crucial point for acclimatization before you tackle the 3,660-meter ridge.
          </p>
        </div>

        {/* Specs Table */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Lodge Specifications & Services</h3>
          <div className="overflow-x-auto rounded-3xl border border-stone-200 bg-white">
            <div className="divide-y divide-stone-100 text-xs">
              {specs.map((spec, i) => (
                <div key={i} className="p-6 flex flex-col sm:flex-row gap-2 sm:gap-6">
                  <div className="sm:w-1/3 font-bold text-stone-950 uppercase tracking-wider">{spec.label}</div>
                  <div className="sm:w-2/3 text-stone-500 leading-relaxed">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Packing / Booking Advice */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h3 className="text-xl font-bold text-stone-950">Practical Tips for Staying at Bayeli</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Bring a Power Bank:</strong>Because charging is dependent on solar panels and shared among all guests in the dining hall, carrying a pre-charged 20,000mAh power bank is essential.
            </li>
            <li>
              <strong>Winter Warmth:</strong>Temperatures regularly drop below freezing at night from November through February. Ensure you pack thermal undergarments and a good fleece layer.
            </li>
            <li>
              <strong>Advance Booking:</strong>Since there is only one community lodge, rooms are limited. Guided treks should ensure bookings are confirmed days in advance.
            </li>
          </ul>
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
            <h3 className="text-2xl font-bold">Secure Your Community Stays</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">We work directly with the local Swanta and Nangi village committees to guarantee comfortable rooms and pre-booked meals at Bayeli Community Lodge.
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
    canonical: '/nodes/bayeli-kharka-accommodation',
  },
};
