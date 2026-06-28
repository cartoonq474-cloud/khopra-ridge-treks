"use client";

import React, { useState, useEffect, useRef } from "react";

const FIND_US_OPTIONS = [
  "Google Search",
  "Google AI Overviews",
  "Google AI Mode",
  "Bing",
  "ChatGPT",
  "Gemini",
  "Claude",
  "Perplexity",
  "Grok",
  "Microsoft Copilot",
  "Meta AI",
  "DeepSeek",
  "Reddit",
  "DuckDuckGo",
  "Yahoo",
  "Brave Search"
];

export default function BookingModal({ isOpen, onClose }) {
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    packSize: "1",
    trekPackage: "khayer-lake",
    foundUs: "",
    message: ""
  });
  
  const foundUsRef = useRef(null);
  const [showFoundUsSuggestions, setShowFoundUsSuggestions] = useState(false);

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

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setInquirySubmitted(false);
      setFormData({
        name: "",
        email: "",
        date: "",
        packSize: "1",
        trekPackage: "khayer-lake",
        foundUs: "",
        message: ""
      });
    }, 300);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formsubmit.co/ajax/khopraridge51@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "Form Source": "Header CTA Modal Form",
          Name: formData.name,
          Email: formData.email,
          "Proposed Start Date": formData.date,
          "Group Size": formData.packSize,
          "Trek Package": formData.trekPackage,
          "Where did you find us": formData.foundUs,
          "Custom Needs / Notes": formData.message
        })
      });
      if (response.ok) {
        setInquirySubmitted(true);
      } else {
        alert("There was an issue sending your booking inquiry. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("There was an error connecting to the server. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop overlay */}
      <div 
        onClick={handleClose}
        className="absolute inset-0 bg-stone-950/60 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Content container */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 md:p-10 shadow-2xl border border-stone-200 overflow-y-auto max-h-[90vh] z-10">
        {/* Close button */}
        <button
          onClick={handleClose}
          aria-label="Close booking modal"
          className="absolute right-6 top-6 h-8 w-8 rounded-lg bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-600 font-bold transition cursor-pointer"
        >
          ✕
        </button>

        <div className="text-center max-w-md mx-auto mb-8">
          <h2 className="text-3xl font-extrabold text-stone-950">Inquire &amp; Book Today</h2>
          <p className="mt-3 text-sm text-stone-650">
            Submit your tentative dates and details, and our local trekking planner will get back to you with custom adjustments within 24 hours.
          </p>
        </div>

        {inquirySubmitted ? (
          <div className="text-center p-8 rounded-2xl bg-emerald-50 border border-emerald-200">
            <span className="text-3xl">🎉</span>
            <h3 className="mt-4 text-lg font-bold text-emerald-900">Thank you for your inquiry!</h3>
            <p className="mt-2 text-sm text-emerald-700">
              Our team is currently checking lodge availability for your dates and will contact you via email shortly.
            </p>
            <button
              onClick={handleClose}
              className="mt-6 rounded-full bg-emerald-600 px-6 py-2.5 text-xs font-bold text-white hover:bg-emerald-500 transition-all cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="modal-name" className="text-xs font-bold text-stone-600 uppercase tracking-wide">Full Name</label>
                <input
                  type="text"
                  id="modal-name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="rounded-lg border border-stone-200 px-4 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition text-stone-900"
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="modal-email" className="text-xs font-bold text-stone-600 uppercase tracking-wide">Email Address</label>
                <input
                  type="email"
                  id="modal-email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="rounded-lg border border-stone-200 px-4 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition text-stone-900"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="modal-date" className="text-xs font-bold text-stone-600 uppercase tracking-wide">Proposed Start Date</label>
                <input
                  type="date"
                  id="modal-date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleInputChange}
                  className="rounded-lg border border-stone-200 px-4 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition text-stone-700 bg-white"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="modal-packSize" className="text-xs font-bold text-stone-600 uppercase tracking-wide">Group Size</label>
                <select
                  id="modal-packSize"
                  name="packSize"
                  value={formData.packSize}
                  onChange={handleInputChange}
                  className="rounded-lg border border-stone-200 px-4 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition text-stone-700 bg-white"
                >
                  <option value="1">1 Trekker (Solo)</option>
                  <option value="2">2 Trekkers</option>
                  <option value="3-5">3 - 5 Trekkers</option>
                  <option value="6-10">6 - 10 Trekkers</option>
                  <option value="11+">11+ Trekkers</option>
                </select>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="modal-trekPackage" className="text-xs font-bold text-stone-600 uppercase tracking-wide">Trek Package</label>
                <select
                  id="modal-trekPackage"
                  name="trekPackage"
                  value={formData.trekPackage}
                  onChange={handleInputChange}
                  className="rounded-lg border border-stone-200 px-4 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition text-stone-700 bg-white cursor-pointer"
                >
                  <option value="khayer-lake">Sacred Khayer Lake Pilgrimage (9 Days)</option>
                  <option value="poon-hill-combo">Poon Hill &amp; Khopra Combo (8 Days)</option>
                  <option value="mohare-offbeat">Mohare Danda Offbeat (7 Days)</option>
                  <option value="custom">Custom Designed Itinerary</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5 relative" ref={foundUsRef}>
                <label htmlFor="modal-foundUs" className="text-xs font-bold text-stone-600 uppercase tracking-wide">Where did you find us?</label>
                <div className="relative">
                  <input
                    type="text"
                    id="modal-foundUs"
                    name="foundUs"
                    value={formData.foundUs}
                    onChange={(e) => {
                      handleInputChange(e);
                      setShowFoundUsSuggestions(true);
                    }}
                    onFocus={() => setShowFoundUsSuggestions(true)}
                    className="w-full rounded-lg border border-stone-200 px-4 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition text-stone-900"
                    placeholder="Start typing or click to select..."
                    autoComplete="off"
                  />
                  {formData.foundUs && (
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, foundUs: "" }))}
                      aria-label="Clear source input"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-450 hover:text-stone-600 font-bold text-sm px-1 cursor-pointer"
                    >
                      ✕
                    </button>
                  )}
                </div>
                {showFoundUsSuggestions && (
                  <div className="absolute top-[calc(100%+4px)] left-0 right-0 z-50 max-h-40 overflow-y-auto rounded-xl border border-stone-200 bg-white shadow-xl py-1">
                    {filteredFoundUsSuggestions.length > 0 ? (
                      filteredFoundUsSuggestions.map((option, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => {
                            setFormData(prev => ({ ...prev, foundUs: option }));
                            setShowFoundUsSuggestions(false);
                          }}
                          className="w-full text-left px-4 py-2 text-sm hover:bg-stone-50 transition text-stone-700 font-semibold border-b border-stone-50 last:border-b-0 cursor-pointer"
                        >
                          {option}
                        </button>
                      ))
                    ) : (
                      <div className="px-4 py-2 text-xs text-stone-600 italic font-medium">
                        Custom value: &quot;{formData.foundUs}&quot;
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="modal-message" className="text-xs font-bold text-stone-600 uppercase tracking-wide">Custom Needs / Notes</label>
              <textarea
                id="modal-message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleInputChange}
                className="rounded-lg border border-stone-200 px-4 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition resize-none text-stone-900"
                placeholder="Share details like previous experience, dietary needs..."
              />
            </div>

            <button
              type="submit"
              className="mt-2 rounded-lg bg-emerald-600 py-3.5 text-sm font-bold text-white shadow-md hover:bg-emerald-500 transition-all cursor-pointer"
            >
              Send Free Booking Inquiry
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
