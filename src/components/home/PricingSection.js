import React from "react";
import PricingInteractive from "./PricingInteractive";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-stone-100 border-y border-stone-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest">Trek Cost</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
            Interactive Pricing &amp; Group Discounts
          </h2>
          <p className="mt-4 text-stone-500 text-sm sm:text-base leading-relaxed">
            Select your itinerary and group size to calculate your exact package cost. Enjoy automatically applied group discounts.
          </p>
        </div>

        <PricingInteractive />
      </div>
    </section>
  );
}