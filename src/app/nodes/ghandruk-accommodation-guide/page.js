"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const accommodations = [
    {
      name: "Luxury Heritage Hotels",
      cost: "$35 - $60 USD per night",
      bathroom: "Attached with 24/7 solar hot water",
      features: "Stunning valley views, heated rooms, Wi-Fi, and extensive continental menus."
    },
    {
      name: "Standard Tourist Teahouses",
      cost: "$8 - $15 USD per night",
      bathroom: "Attached or shared common bathrooms",
      features: "Clean plywood-lined twin rooms, dining halls with wood fires, local Dal Bhat menus, and charging points."
    },
    {
      name: "Local Village Homestays",
      cost: "$5 - $8 USD per night",
      bathroom: "Shared outdoor bathrooms",
      features: "Stay with local families in traditional slate stone homes, eat freshly harvested organic garden food."
    }
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
          <span className="text-stone-800">Ghandruk Accommodation</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Lodging Directory</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Ghandruk Accommodation & Teahouse Guide
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Find the perfect stay. Understand teahouse categories, average costs, and facility standards in the most developed village along the loop.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">Ghandruk Accommodation Landscape</h2>
          <p>
            Unlike the higher, more rustic community stops along the Khopra Ridge circuit (like Chhistibung and Bayeli), Ghandruk offers a wide variety of lodging options. From heritage hotels with premium mattresses and attached tiled bathrooms to simple family homestays, you can tailor your stay to match your preferred level of comfort.
          </p>
        </div>

        {/* Accommodations Categories */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Accommodations Categories & Facility Standards</h3>
          <div className="space-y-6">
            {accommodations.map((acc, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-100 pb-3 gap-2">
                  <h4 className="font-extrabold text-stone-950 text-base">{acc.name}</h4>
                  <span className="text-xs font-bold text-emerald-600 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 shrink-0">
                    {acc.cost}
                  </span>
                </div>
                <div className="mt-4 space-y-2 text-xs text-stone-500 leading-relaxed">
                  <p><strong>Bathroom Setup:</strong> {acc.bathroom}</p>
                  <p><strong>Highlights:</strong> {acc.features}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Utility notes */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h3 className="text-xl font-bold text-stone-950">Utility Services & Amenities</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Hot Water:</strong> Most standard lodges offer hot showers for free (powered by solar). However, during rainy or cloudy days, you might have to pay $2-$3 USD for gas-geyser showers.
            </li>
            <li>
              <strong>Electricity & Charging:</strong> Electricity is stable in Ghandruk. Charging phones and cameras is generally free in standard teahouses, though some budget homestays may charge a nominal fee.
            </li>
            <li>
              <strong>Internet / Wi-Fi:</strong> High-speed fiber Wi-Fi is available in most lodges. It is usually free, though performance can drop during high-occupancy evening hours.
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
            <h3 className="text-2xl font-bold">Secure the Best Ghandruk Stays</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">
              Our guided packages include overnight stays at top-rated, comfortable Ghandruk lodges featuring private bathrooms and beautiful sunrise balconies.
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
