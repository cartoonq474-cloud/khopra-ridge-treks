"use client";

import React, { useState } from "react";

export default function RhododendronFaqInteractive({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`rounded-2xl border transition-all bg-white p-6 ${
              isOpen
                ? "border-emerald-600 shadow-md ring-1 ring-emerald-500/20"
                : "border-stone-200/80 shadow-sm hover:border-stone-300"
            }`}
          >
            <button
              type="button"
              onClick={() => toggleFaq(index)}
              className="w-full flex items-center justify-between text-left cursor-pointer gap-4"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3.5">
                <div className="h-8 w-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-extrabold text-sm flex-shrink-0">
                  ?
                </div>
                <h3 className="text-base sm:text-lg font-bold text-stone-950 pr-2">
                  {faq.question}
                </h3>
              </div>
              <span
                className={`h-7 w-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                  isOpen
                    ? "bg-emerald-600 text-white font-bold"
                    : "border border-stone-200 bg-stone-50 text-stone-400"
                }`}
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                  />
                </svg>
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-[500px] mt-4 pt-4 border-t border-stone-100" : "max-h-0"
              }`}
            >
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed pl-11">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
