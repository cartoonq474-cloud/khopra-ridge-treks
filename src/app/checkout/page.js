"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    pax: "2",
    duration: "9",
    specialRequest: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate booking submission
    setSubmitted(true);
  };

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-2xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Stage 6 Booking</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950">
            Secure Trek Inquiry
          </h1>
          <p className="mt-4 text-sm text-stone-500 leading-relaxed max-w-md mx-auto">
            Submit your preferred dates and group size. Our local booking coordinators in Pokhara will review availability and send a customized invoice within 12 hours.
          </p>
        </div>

        {/* Booking Form Card */}
        <div className="mt-12 bg-white p-8 border border-stone-200 rounded-3xl shadow-sm">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-wider block">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Sarah Jenkins" 
                    className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 text-stone-800"
                  />
                </div>
                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-wider block">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="sarah@example.com" 
                    className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 text-stone-800"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {/* Preferred Date */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-wider block">Start Date</label>
                  <input 
                    type="date" 
                    required 
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 text-stone-800"
                  />
                </div>
                {/* Trekkers */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-wider block">Group Size</label>
                  <select 
                    value={formData.pax}
                    onChange={(e) => setFormData({...formData, pax: e.target.value})}
                    className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 text-stone-600 cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, "7+ (Group)"].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? "Trekker" : "Trekkers"}</option>
                    ))}
                  </select>
                </div>
                {/* Duration */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-wider block">Trek Itinerary</label>
                  <select 
                    value={formData.duration}
                    onChange={(e) => setFormData({...formData, duration: e.target.value})}
                    className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 text-stone-600 cursor-pointer"
                  >
                    <option value="9">9-Day Core Route</option>
                    <option value="7">7-Day Express Route</option>
                    <option value="5">5-Day Rapid Route</option>
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-stone-400 uppercase tracking-wider block">Special requests / Diet / Accommodation</label>
                <textarea 
                  value={formData.specialRequest}
                  onChange={(e) => setFormData({...formData, specialRequest: e.target.value})}
                  rows="4" 
                  placeholder="E.g. Vegetarian diet, require down jacket rentals, single room request..." 
                  className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 text-stone-800"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full rounded-full bg-emerald-600 py-4 text-xs font-bold text-white hover:bg-emerald-500 shadow-md shadow-emerald-900/10 hover-lift glow-btn transition cursor-pointer"
              >
                Submit Secure Inquiry
              </button>

              <div className="text-center text-[10px] text-stone-400 font-semibold flex justify-center gap-6 pt-4 border-t border-stone-100">
                <span>🛡️ SSL Encrypted Connection</span>
                <span>📋 ACA Approved Operator</span>
              </div>
            </form>
          ) : (
            <div className="text-center py-10 space-y-6">
              <span className="text-5xl block">🎉</span>
              <h3 className="text-2xl font-bold text-stone-950">Inquiry Submitted Successfully!</h3>
              <p className="text-sm text-stone-500 leading-relaxed max-w-sm mx-auto">
                Thank you, <strong className="text-stone-800">{formData.name}</strong>. Our local coordinators in Pokhara are checking community lodge room registers. We will send your itinerary breakdown and payment link via email at <strong className="text-stone-800">{formData.email}</strong> shortly.
              </p>
              <Link
                href="/"
                className="inline-block rounded-full bg-stone-950 px-6 py-2.5 text-xs font-bold text-white hover:bg-emerald-600 transition"
              >
                Return to Homepage
              </Link>
            </div>
          )}
        </div>

      </main>
    </div>
  );
}
