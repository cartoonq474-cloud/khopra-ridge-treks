import React from "react";
import FaqInteractive from "./FaqInteractive";

export default function FaqSection() {
  return (
    <section id="faq" className="py-24 bg-[#f5f3ef] border-t border-stone-200">
      <div className="mx-auto max-w-4xl px-6">
        {/* Eyebrow got questions badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center rounded-full border border-stone-800 px-5 py-1.5 text-xs font-black text-stone-800 uppercase tracking-widest bg-transparent">
            Got Questions?
          </span>
        </div>

        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl leading-tight">
            Frequently Asked <span className="text-emerald-600">Questions</span>
          </h2>
          <p className="mt-4 text-stone-500 text-sm sm:text-base leading-relaxed">
            Everything you need to know before booking your trek.
          </p>
        </div>

        <FaqInteractive />
      </div>
    </section>
  );
}