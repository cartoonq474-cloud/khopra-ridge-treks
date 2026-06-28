"use client";

import React, { useState, useRef, useEffect } from "react";

const FIND_US_OPTIONS = [
  "Google Search",
  "Google AI Overviews",
  "Google AI Mode",
  "Bing",
  "ChatGPT",
  "Gemini",
  "Claude",
  "Perplexity",
  "DeepSeek",
  "Meta AI",
  "Instagram",
  "Facebook",
  "TikTok",
  "YouTube",
  "Pinterest",
  "Reddit",
  "TripAdvisor",
  "Lonely Planet",
  "Blog / Travel Website",
  "Friend / Word of Mouth",
  "Return Customer",
  "Other"
];

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    packSize: "2",
    trekPackage: "khayer-lake",
    foundUs: "",
    message: ""
  });

  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [showFoundUsSuggestions, setShowFoundUsSuggestions] = useState(false);
  const foundUsRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (foundUsRef.current && !foundUsRef.current.contains(event.target)) {
        setShowFoundUsSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  const filteredFoundUsSuggestions = FIND_US_OPTIONS.filter((option) =>
    option.toLowerCase().includes(formData.foundUs.toLowerCase())
  );

  return (
    <>
      <section id="book" className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-6 relative z-10 bg-white text-stone-900 rounded-3xl p-8 sm:p-12 shadow-2xl border border-stone-200">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-100/60 px-3 py-1.5 rounded-full">
              Instant Inquiry &amp; Custom Booking
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
              Plan Your Khopra Adventure
            </h2>
            <p className="mt-3 text-stone-500 text-sm">
              Send us your tentative dates and group size. We will check lodge availability and craft a tailored itinerary within 24 hours.
            </p>
          </div>

          {inquirySubmitted ? (
            <div className="mt-8 text-center p-8 rounded-2xl bg-emerald-50 border border-emerald-200">
              <span className="text-3xl">🎉</span>
              <h3 className="mt-4 text-lg font-bold text-emerald-900">Thank you for your inquiry!</h3>
              <p className="mt-2 text-sm text-emerald-700">
                Our team is currently checking lodge availability for your dates and will contact you via email shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="booking-name" className="text-xs font-bold text-stone-500 uppercase tracking-wide">Full Name</label>
                  <input
                    id="booking-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="rounded-lg border border-stone-200 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="booking-email" className="text-xs font-bold text-stone-500 uppercase tracking-wide">Email Address</label>
                  <input
                    id="booking-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="rounded-lg border border-stone-200 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="booking-date" className="text-xs font-bold text-stone-500 uppercase tracking-wide">Proposed Start Date</label>
                  <input
                    id="booking-date"
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleInputChange}
                    className="rounded-lg border border-stone-200 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition text-stone-500"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="booking-packsize" className="text-xs font-bold text-stone-500 uppercase tracking-wide">Group Size</label>
                  <select
                    id="booking-packsize"
                    name="packSize"
                    value={formData.packSize}
                    onChange={handleInputChange}
                    className="rounded-lg border border-stone-200 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition text-stone-500"
                  >
                    <option value="1">1 Trekker (Solo)</option>
                    <option value="2">2 Trekkers</option>
                    <option value="3-5">3 - 5 Trekkers</option>
                    <option value="6-10">6 - 10 Trekkers</option>
                    <option value="11+">11+ Trekkers</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="booking-package" className="text-xs font-bold text-stone-500 uppercase tracking-wide">Trek Package</label>
                  <select
                    id="booking-package"
                    name="trekPackage"
                    value={formData.trekPackage}
                    onChange={handleInputChange}
                    className="rounded-lg border border-stone-200 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition text-stone-500 bg-white cursor-pointer"
                  >
                    <option value="khayer-lake">Sacred Khayer Lake Pilgrimage (9 Days)</option>
                    <option value="poon-hill-combo">Poon Hill &amp; Khopra Combo (8 Days)</option>
                    <option value="mohare-offbeat">Mohare Danda Offbeat (7 Days)</option>
                    <option value="custom">Custom Designed Itinerary</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5 relative" ref={foundUsRef}>
                  <label htmlFor="booking-foundus" className="text-xs font-bold text-stone-500 uppercase tracking-wide">Where did you find us?</label>
                  <div className="relative">
                    <input
                      id="booking-foundus"
                      type="text"
                      name="foundUs"
                      value={formData.foundUs}
                      onChange={(e) => {
                        handleInputChange(e);
                        setShowFoundUsSuggestions(true);
                      }}
                      onFocus={() => setShowFoundUsSuggestions(true)}
                      className="w-full rounded-lg border border-stone-200 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition"
                      placeholder="Start typing or click to select..."
                      autoComplete="off"
                    />
                    {formData.foundUs && (
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, foundUs: "" }))}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 font-bold text-sm px-1 cursor-pointer"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                  {showFoundUsSuggestions && (
                    <div className="absolute top-[calc(100%+4px)] left-0 right-0 z-50 max-h-56 overflow-y-auto rounded-xl border border-stone-200 bg-white shadow-xl py-1.5">
                      {filteredFoundUsSuggestions.length > 0 ? (
                        filteredFoundUsSuggestions.map((option, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => {
                              setFormData(prev => ({ ...prev, foundUs: option }));
                              setShowFoundUsSuggestions(false);
                            }}
                            className="w-full text-left px-4 py-2.5 text-sm hover:bg-stone-50 transition text-stone-700 font-semibold border-b border-stone-50 last:border-b-0 cursor-pointer"
                          >
                            {option}
                          </button>
                        ))
                      ) : (
                        <div className="px-4 py-3 text-xs text-stone-400 italic font-medium">
                          Custom value: "{formData.foundUs}"
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="booking-message" className="text-xs font-bold text-stone-500 uppercase tracking-wide">Custom Needs / Notes</label>
                <textarea
                  id="booking-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="rounded-lg border border-stone-200 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition resize-none"
                  placeholder="Share details like previous trekking experience, dietary needs, or if you wish to add Poon Hill..."
                />
              </div>

              <button
                type="submit"
                className="mt-4 rounded-lg bg-emerald-600 py-4 text-base font-bold text-white shadow-md hover:bg-emerald-500 transition-all cursor-pointer"
              >
                Send Free Booking Inquiry
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}