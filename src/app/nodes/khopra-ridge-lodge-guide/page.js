import React from "react";
import Link from "next/link";

export default function Page() {
  const facilities = [
    { name: "Room Capacity", desc: "Approximately 25 twin-bed private rooms, plus a spacious dining hall dormitory option that can sleep an additional 20 hikers during peak season rushes." },
    { name: "Solar Charging Systems", desc: "Equipped with multi-panel solar installations. Device charging is centralized in the dining room. It costs roughly $2-$3 USD per device, depending on capacity and battery size." },
    { name: "Dining Hall Fire", desc: "A wood-burning iron stove is lit in the center of the dining hall every evening between 5:30 PM and 8:30 PM, providing a cozy space for all guests." },
    { name: "Wi-Fi & Cellular", desc: "Cellular signal (Ncell / NTC) is extremely weak and inconsistent. The lodge sells local Wi-Fi scratch cards, but speed is low and not suitable for large downloads." }
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
          <span className="text-stone-800">Khopra Lodge Guide</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Lodge Spotlight</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Khopra Ridge Lodge Facilities Guide
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">The summit sanctuary. Discover details on rooms, dining, solar-charging rules, and heating systems at the primary 3,660m ridge lodge.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">A Sanctuary Perched in the Clouds</h2>
          <p>The Khopra Ridge Community Lodge (3,660m / 12,007ft) is the crown jewel of the loop trek. Perched directly on the edge of a sheer grassy ridge drop-off, it offers 360-degree views of the massive Dhaulagiri range across the Kali Gandaki Gorge, and Annapurna South looming directly above.
          </p>
          <p>Because it is the only lodge on the ridge, managing bookings and understanding its basic operational parameters is vital for a successful trek.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Lodge Specifications & Infrastructure</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {facilities.map((fac, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <span className="text-xl"></span>
                <h4 className="font-extrabold text-stone-950 text-base mt-2">{fac.name}</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">{fac.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dining & Menu */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h3 className="text-xl font-bold text-stone-950">Dining Hall & Meal Options</h3>
          <p>Meals are prepared by trained local kitchen staff using fresh ingredients transported up from Swanta or Ghandruk. The menu features:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Dal Bhat:</strong>Unlimited rice, lentil soup, curried potatoes, and spinach. The ultimate energy source for hikers.</li>
            <li><strong>Continental Options:</strong>Garlic soup (highly recommended for altitude), pasta, pizzas, pancakes, and oatmeal.</li>
            <li><strong>Drinking Water:</strong>You cannot buy single-use plastic bottles. The lodge sells UV-filtered and boiled drinking water at its clean filling station.</li>
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
            <h3 className="text-2xl font-bold">Secure Your Ridge Booking</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">Rooms at Khopra Ridge sell out fast. Inquire today to guarantee your private double room and meals with our guided packages.
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
