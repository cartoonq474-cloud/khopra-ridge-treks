"use client";
import React, { useState, useRef, useEffect } from "react";
import { FIND_US_OPTIONS } from "@/data/trekData";

export default function BookingSection() {
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [showFoundUsSuggestions, setShowFoundUsSuggestions] = useState(false);
  const foundUsRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    packSize: "2 Trekkers",
    trekPackage: "9-Day Core Route",
    foundUs: "Google Search",
    message: ""
  });

  const filteredFoundUsSuggestions = FIND_US_OPTIONS.filter(option =>
    option.toLowerCase().includes((formData.foundUs || "").toLowerCase())
  );

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
    setTimeout(() => {
      setInquirySubmitted(false);
      setFormData({
        name: "",
        email: "",
        date: "",
        packSize: "2 Trekkers",
        trekPackage: "9-Day Core Route",
        foundUs: "Google Search",
        message: ""
      });
    }, 5000);
  };

  return (
    <>
      {/* BOOKING / INQUIRY FORM */}
      <section id="book" className="py-24 mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto rounded-3xl border border-stone-200 bg-white p-8 shadow-lg md:p-12">
          <div className="text-center max-w-md mx-auto">
            <h2 className="text-3xl font-extrabold text-stone-950">Inquire &amp; Book Today</h2>
            <p className="mt-3 text-sm text-stone-500">
              Submit your tentative dates and details, and our local trekking planner will get back to you with custom adjustments within 24 hours.
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
                  <label className="text-xs font-bold text-stone-500 uppercase tracking-wide">Full Name</label>
                  <input
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
                  <label className="text-xs font-bold text-stone-500 uppercase tracking-wide">Email Address</label>
                  <input
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
                  <label className="text-xs font-bold text-stone-500 uppercase tracking-wide">Proposed Start Date</label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleInputChange}
                    className="rounded-lg border border-stone-200 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition text-stone-500"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-stone-500 uppercase tracking-wide">Group Size</label>
                  <select
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
                  <label className="text-xs font-bold text-stone-500 uppercase tracking-wide">Trek Package</label>
                  <select
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
                  <label className="text-xs font-bold text-stone-500 uppercase tracking-wide">Where did you find us?</label>
                  <div className="relative">
                    <input
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
                <label className="text-xs font-bold text-stone-500 uppercase tracking-wide">Custom Needs / Notes</label>
                <textarea
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
                className="mt-4 rounded-lg bg-emerald-600 py-4 text-base font-bold text-white shadow-md hover:bg-emerald-500 transition-all"
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