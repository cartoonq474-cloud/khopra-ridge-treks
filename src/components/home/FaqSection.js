"use client";
import React, { useState } from "react";
import { faqCategories, categorizedFaqs } from "@/data/trekData";

export default function FaqSection() {
  const [activeFaqCategory, setActiveFaqCategory] = useState("route");
  const [expandedFaq, setExpandedFaq] = useState(null);

  const currentFaqCategory = activeFaqCategory === "all"
    ? {
        title: "All Questions",
        faqs: Object.values(categorizedFaqs).flatMap(cat => cat.faqs)
      }
    : categorizedFaqs[activeFaqCategory];

  return (
    <>
      {/* FAQ SECTION */}
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

          {/* Pill Tabs Selector */}
          <div className="flex flex-wrap justify-center items-center gap-2.5 mb-12">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveFaqCategory(cat.id);
                  setExpandedFaq(null);
                }}
                className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                  activeFaqCategory === cat.id
                    ? "bg-[#0b1717] text-white border-transparent shadow-sm"
                    : "bg-transparent text-stone-700 border-stone-300 hover:bg-stone-200/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Accordion Cards */}
          <div className="space-y-4">
            {categorizedFaqs[activeFaqCategory].map((faq, index) => {
              const isOpen = expandedFaq === index;
              return (
                <div 
                  key={index}
                  className={`rounded-3xl border transition-all bg-white p-6 ${
                    isOpen 
                      ? "border-emerald-600 shadow-md ring-1 ring-emerald-500/20" 
                      : "border-stone-200/80 shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      {/* Question Accent Box */}
                      <div className="h-9 w-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                        ?
                      </div>
                      <span className="text-base sm:text-lg font-bold text-stone-950 pr-4">{faq.question}</span>
                    </div>
                    
                    {/* Arrow Button */}
                    <span className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                      isOpen 
                        ? "bg-emerald-600 text-white font-bold" 
                        : "border border-stone-200 bg-white text-stone-400"
                    }`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                      </svg>
                    </span>
                  </button>
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[500px] mt-4 pt-4 border-t border-stone-100" : "max-h-0"
                    }`}
                  >
                    <p className="text-stone-600 text-sm sm:text-base leading-relaxed pl-[52px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      
    </>
  );
}