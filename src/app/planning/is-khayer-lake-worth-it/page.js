"use client";

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
          <Link href="/guides/khayer-lake-ultimate-guide" className="hover:text-emerald-600 transition-colors">Khayer Lake Hub</Link>
          <span>/</span>
          <span className="text-stone-800">Is It Worth It?</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Honest Review</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Is Khayer Lake Worth It? Effort vs. Reward
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            An honest, guide-backed evaluation. Learn why this demanding 10-hour day hike is the ultimate highlight for some, but a step too far for others.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">A Strenuous Mountain Challenge</h2>
          <p>
            Reaching Khayer Lake (4,660m / 15,288ft) requires hiking 16 kilometers round-trip, climbing 1,000 meters vertically over rough moraine trails, and walking for 8 to 10 hours at high altitude. There are no tea houses, toilets, or snack shops along the way.
          </p>
          <p>
            This brings up an important question for many trekkers: **Is the physical toll of climbing to Khayer Lake worth the visual reward?**
          </p>
        </div>

        {/* The Case for Worth It */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
            <h3 className="text-lg font-bold">Yes, It Is Worth It If:</h3>
            <ul className="list-disc pl-6 text-xs leading-relaxed font-medium space-y-3">
              <li>
                <strong>You Seek Wilderness Solitude:</strong> Unlike the crowded Poon Hill loops, the trail to Khayer Lake is pristine and quiet, offering uninterrupted views of Annapurna South.
              </li>
              <li>
                <strong>You Love High-Altitude Lakes:</strong> Sitting directly beneath the massive wall of Annapurna South, the turquoise waters are incredibly dramatic.
              </li>
              <li>
                <strong>You Value Cultural Significance:</strong> Exploring the sacred temple of Khayer Baraha, where pilgrims gather in August, adds rich cultural meaning to the physical hike.
              </li>
            </ul>
          </div>

          <div className="p-8 bg-stone-100 border border-stone-200 rounded-3xl text-stone-600 space-y-4">
            <h3 className="text-lg font-bold text-stone-950">No, You Should Skip It If:</h3>
            <ul className="list-disc pl-6 text-xs leading-relaxed font-medium space-y-3">
              <li>
                <strong>You Struggle with Altitude:</strong> If you show any signs of mild AMS (headache, dizziness) at Khopra Ridge (3,660m), pushing 1,000m higher is dangerous.
              </li>
              <li>
                <strong>You Have Knee or Joint Pain:</strong> The return descent drops 1,000 meters over steep, rocky trails, putting extreme strain on your knees.
              </li>
              <li>
                <strong>Weather Visibility Is Low:</strong> If thick clouds or rain blanket the mountains, you will hike 10 hours in fog only to reach a grey, cloud-covered lake.
              </li>
            </ul>
          </div>
        </div>

        {/* Alternative options */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h3 className="text-xl font-bold text-stone-950">Rewarding Alternatives to the Lake</h3>
          <p>
            If you decide to skip the lake hike, you can still have a highly rewarding rest day:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Rest on Khopra Ridge (3,660m):</strong> Sit in the cozy community dining hall, read a book, and stare out the windows at the massive wall of Dhaulagiri across the valley.
            </li>
            <li>
              <strong>Climb Muldai Viewpoint (3,637m):</strong> If you are looking for views without the 10-hour walk, the morning climb to Muldai from Dobato takes only 45 minutes and offers a similar, grand panorama.
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
            <h3 className="text-2xl font-bold">Consult an Expert Planner</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">
              Not sure if you have the conditioning for the lake? Our guides evaluate your fitness during the first days of the trek to help you make a safe, informed decision.
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
