"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(5);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    duration: "9",
    reviewText: "",
    photoUrl: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-2xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Trekkers Feedback</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Submit Your Trek Review
          </h1>
          <p className="mt-4 text-sm text-stone-500 leading-relaxed max-w-md mx-auto">
            Share your experiences, lodge ratings, guide coordination, and photographic memories with future travelers.
          </p>
        </div>

        {/* Review Form Card */}
        <div className="mt-12 bg-white p-8 border border-stone-200 rounded-3xl shadow-sm">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid gap-4 sm:grid-cols-2">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-wider block">Your Name</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Dieter Weber" 
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
                    placeholder="dieter@example.com" 
                    className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 text-stone-800"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {/* Tour selection */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-wider block">Trek Itinerary Option</label>
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

                {/* Rating selection */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-wider block">Overall Rating (1-5 Stars)</label>
                  <div className="flex items-center gap-1.5 pt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className={`text-2xl cursor-pointer focus:outline-none transition-colors ${
                          rating >= star ? "text-emerald-500" : "text-stone-200 hover:text-emerald-400"
                        }`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-stone-400 uppercase tracking-wider block">Review Comments</label>
                <textarea 
                  value={formData.reviewText}
                  onChange={(e) => setFormData({...formData, reviewText: e.target.value})}
                  rows="5" 
                  required
                  placeholder="Share details of your experience: trail difficulty, community lodge meals, guide assistance, and scenic highlights..." 
                  className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 text-stone-800"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full rounded-full bg-emerald-600 py-4 text-xs font-bold text-white hover:bg-emerald-500 shadow-md shadow-emerald-900/10 hover-lift glow-btn transition cursor-pointer"
              >
                Submit Review
              </button>

            </form>
          ) : (
            <div className="text-center py-10 space-y-6">
              <span className="text-5xl block"></span>
              <h3 className="text-2xl font-bold text-stone-950">Review Received</h3>
              <p className="text-sm text-stone-500 leading-relaxed max-w-sm mx-auto">
                Thank you for sharing your journey, <strong className="text-stone-800">{formData.name}</strong>. Your feedback directly motivates our mountain lodge managers and guides to maintain high quality standards.
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
