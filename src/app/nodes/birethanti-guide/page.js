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
          <Link href="/nodes" className="hover:text-emerald-600 transition-colors">Nodes</Link>
          <span>/</span>
          <span className="text-stone-800">Birethanti Checkpoint</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Permit Checkpoint</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Birethanti Village & Checkpoint Guide
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Navigating the gateway. Learn about check-in procedures, suspension bridges, and river crossings at the entry point of the Annapurna sanctuary.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">Where Two Rivers Meet</h2>
          <p>
            Birethanti (1,025m / 3,362ft) is a bustling village situated at the confluence of the Modi Khola and Bhurungdi Khola. Located just a short drive from Nayapul, it serves as the official administrative gateway for all treks entering the western Annapurna Conservation Area.
          </p>
          <p>
            The village is split by the roaring rivers, connected by historic iron suspension bridges. Lined with small shops, cafes, and administrative offices, it is the place where your trekking permit will be officially inspected and stamped before you are allowed onto the trail.
          </p>
        </div>

        {/* Permit Check-in Procedures */}
        <div className="mt-12 p-8 bg-stone-900 border border-stone-850 rounded-3xl text-stone-300 space-y-4">
          <h3 className="text-lg font-bold text-white">Administrative Check-in Procedures</h3>
          <ul className="list-disc pl-6 text-xs leading-relaxed text-stone-400 space-y-3">
            <li>
              <strong>ACAP Inspection Checkpoint:</strong> Located immediately after crossing the main bridge. Your guide must register your ACAP permit number, entry date, and trekking route in the government logbook.
            </li>
            <li>
              <strong>TIMS Card Registration:</strong> The Tourist Information Management System (TIMS) office checks and scans your card database code. This helps the Nepal Tourism Board track group safety and coordinate search and rescue if necessary.
            </li>
            <li>
              <strong>Penalty Zone Warning:</strong> If you attempt to enter Birethanti without pre-purchasing permits in Pokhara or Kathmandu, you will be forced to buy them at the checkpoint for a double penalty fee (NPR 6,000 for ACAP).
            </li>
          </ul>
        </div>

        {/* Logistics and Access */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h3 className="text-xl font-bold text-stone-950">Transport & Transit Connections</h3>
          <p>
            Birethanti is accessible by rough dirt roads. From here, you can catch shared local jeeps heading up either to Tikhedhunga/Ulleri (on the Ghorepani side) or Syauli Bazaar/Kimche (on the Ghandruk side). Most private jeeps from Pokhara will drop off or pick up trekkers directly from their lodges here.
          </p>
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
            <h3 className="text-2xl font-bold">Hassle-Free Permit Coordination</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">
              We handle all ACAP and TIMS permits in advance. Our guides manage all check-in registrations at Birethanti checkpoints so you can focus on the hike.
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
