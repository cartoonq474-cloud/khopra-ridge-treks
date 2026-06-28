"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { googleReviews, tripAdvisorReviews } from "@/data/trekData";

export default function ReviewsSection() {
  const [activeReviewTab, setActiveReviewTab] = useState("google");
  const activeReviews = activeReviewTab === "google" ? googleReviews : tripAdvisorReviews;
  const scrollContainerRef = useRef(null);

  const scrollReviews = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {/* REVIEWS SECTION */}
      <section id="reviews" className="py-24 bg-stone-50 border-t border-stone-200 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest">Guest Experiences</span>
              <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
                Loved by Trekkers Worldwide
              </h2>
              <p className="mt-4 text-stone-600 text-base max-w-xl">
                Verified reviews from adventurers who walked the uncrowded trails of Khopra Danda.
              </p>
            </div>
            
            {/* Scroll Navigation Buttons (Visible on all viewports, aligned right on desktop) */}
            <div className="flex gap-3 mt-6 md:mt-0">
              <button
                onClick={() => scrollReviews("left")}
                aria-label="Scroll left"
                className="h-12 w-12 rounded-full border border-stone-200 bg-white hover:border-emerald-600 hover:text-emerald-700 text-stone-600 flex items-center justify-center transition-all cursor-pointer hover:shadow-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scrollReviews("right")}
                aria-label="Scroll right"
                className="h-12 w-12 rounded-full border border-stone-200 bg-white hover:border-emerald-600 hover:text-emerald-700 text-stone-600 flex items-center justify-center transition-all cursor-pointer hover:shadow-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Selector Tabs for Google & TripAdvisor */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 max-w-3xl mx-auto mb-16">
            
            {/* Google Reviews Tab */}
            <button
              onClick={() => setActiveReviewTab("google")}
              className={`w-full sm:w-1/2 p-6 rounded-3xl border text-left transition-all hover-lift cursor-pointer ${
                activeReviewTab === "google"
                  ? "border-emerald-600 bg-white shadow-lg ring-1 ring-emerald-500/10"
                  : "border-stone-200 bg-stone-100/60 hover:bg-stone-50"
              }`}
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                  </svg>
                  <span className="text-sm font-extrabold text-stone-900 uppercase tracking-wide">Google Reviews</span>
                </div>
                <span className="text-2xl text-emerald-600 font-bold">4.9</span>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex text-amber-500 text-xs gap-0.5">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <span className="text-xs text-stone-400 font-bold">142 reviews</span>
              </div>
            </button>

            {/* TripAdvisor Reviews Tab */}
            <button
              onClick={() => setActiveReviewTab("tripadvisor")}
              className={`w-full sm:w-1/2 p-6 rounded-3xl border text-left transition-all hover-lift cursor-pointer ${
                activeReviewTab === "tripadvisor"
                  ? "border-emerald-600 bg-white shadow-lg ring-1 ring-emerald-500/10"
                  : "border-stone-200 bg-stone-100/60 hover:bg-stone-50"
              }`}
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#00AF87] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 0 0 4.04 10.43 5.976 5.976 0 0 0 4.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 0 0 4.072 1.598 6 6 0 0 0 6-5.998 5.982 5.982 0 0 0-1.957-4.432L24 6.648h-4.35a13.573 13.573 0 0 0-7.644-2.353zM12 6.255c1.531 0 3.063.303 4.504.903C13.943 8.138 12 10.43 12 13.1c0-2.671-1.942-4.962-4.504-5.942A11.72 11.72 0 0 1 12 6.256zM6.002 9.157a4.059 4.059 0 1 1 0 8.118 4.059 4.059 0 0 1 0-8.118zm11.992.002a4.057 4.057 0 1 1 .003 8.115 4.057 4.057 0 0 1-.003-8.115zm-11.992 1.93a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256zm11.992 0a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256z"/>
                  </svg>
                  <span className="text-sm font-extrabold text-stone-900 uppercase tracking-wide">TripAdvisor</span>
                </div>
                <span className="text-2xl text-emerald-600 font-bold">5.0</span>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="h-2.5 w-2.5 rounded-full bg-[#00AF87] inline-block" />
                  ))}
                </div>
                <span className="text-xs text-stone-400 font-bold">84 reviews</span>
              </div>
            </button>

          </div>

          {/* Horizontally Scrollable Reviews Wrapper */}
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-none scroll-smooth -mx-6 px-6"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {(activeReviewTab === "google" ? googleReviews : tripAdvisorReviews).map((review) => (
                <div
                  key={review.id}
                  className="w-[290px] sm:w-[380px] flex-shrink-0 snap-start rounded-3xl border border-stone-200 bg-white p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex items-center gap-3">
                        {/* Avatar */}
                        <div className="h-10 w-10 rounded-full bg-emerald-600/10 text-emerald-800 flex items-center justify-center font-bold text-sm">
                          {review.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div>
                          <h4 className="font-extrabold text-stone-950 text-sm">{review.name}</h4>
                          <span className="text-[10px] font-semibold text-stone-400 uppercase tracking-wider">{review.country}</span>
                        </div>
                      </div>
                      
                      {/* Platform Logo */}
                      {activeReviewTab === "google" ? (
                        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-[#00AF87] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 0 0 4.04 10.43 5.976 5.976 0 0 0 4.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 0 0 4.072 1.598 6 6 0 0 0 6-5.998 5.982 5.982 0 0 0-1.957-4.432L24 6.648h-4.35a13.573 13.573 0 0 0-7.644-2.353zM12 6.255c1.531 0 3.063.303 4.504.903C13.943 8.138 12 10.43 12 13.1c0-2.671-1.942-4.962-4.504-5.942A11.72 11.72 0 0 1 12 6.256zM6.002 9.157a4.059 4.059 0 1 1 0 8.118 4.059 4.059 0 0 1 0-8.118zm11.992.002a4.057 4.057 0 1 1 .003 8.115 4.057 4.057 0 0 1-.003-8.115zm-11.992 1.93a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256zm11.992 0a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256z"/>
                        </svg>
                      )}
                    </div>

                    {/* Rating Stars/Bubbles & Date */}
                    <div className="mt-4 flex items-center justify-between">
                      {activeReviewTab === "google" ? (
                        <div className="flex text-amber-500 text-xs gap-0.5">
                          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-0.5">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <span key={i} className="h-2 w-2 rounded-full bg-[#00AF87] inline-block" />
                          ))}
                        </div>
                      )}
                      <span className="text-[10px] text-stone-400 font-semibold">{review.date}</span>
                    </div>

                    <p className="mt-4 text-stone-600 text-sm leading-relaxed italic">
                      "{review.text}"
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-100">
                    <span className="inline-block rounded-full bg-stone-100 border border-stone-200/50 px-3 py-1 text-[10px] font-bold text-stone-500 uppercase tracking-wider">
                      {review.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CALL TO ACTION BUTTON SECTION (CTA) */}
          <div className="mt-16 text-center bg-stone-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-white/5 shadow-xl">
            <div className="absolute inset-0 opacity-10 bg-[url('/khopra-hero-bg.png')] bg-cover bg-center" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Make Your Dream Trek a Reality</span>
              <h3 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Ready to Experience Khopra Ridge?
              </h3>
              <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed font-normal">
                Connect with our local experts in Pokhara. We will customize the itinerary, secure community lodges, and ensure you have the ultimate sustainable trek.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                  href="#book"
                  className="w-full sm:w-auto rounded-full bg-emerald-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-emerald-500 transition-all hover:scale-105 inline-block"
                >
                  Book This Trek
                </a>
                <a
                  href="#itinerary"
                  className="w-full sm:w-auto rounded-full bg-transparent border border-white/20 hover:bg-white/10 px-8 py-3.5 text-sm font-bold text-stone-200 transition-all hover:scale-105 inline-block"
                >
                  View Route Timeline
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      
    </>
  );
}