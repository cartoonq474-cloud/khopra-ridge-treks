import React from "react";
import ItineraryInteractive from "./ItineraryInteractive";

export default function ItinerarySection() {
  return (
    <section id="itinerary" className="py-24 mx-auto max-w-7xl px-6">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest">Day-by-Day Trail</span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
          The Complete 9-Day Route
        </h2>
        <p className="mt-4 text-stone-500">
          A carefully mapped itinerary designed for optimal altitude acclimatization and unforgettable viewpoints.
        </p>
      </div>

      <ItineraryInteractive />
    </section>
  );
}