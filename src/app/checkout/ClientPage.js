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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/khopraridge51@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "Form Source": "Checkout Booking Inquiry",
          Name: formData.name,
          Email: formData.email,
          "Proposed Start Date": formData.date,
          "Group Size": formData.pax,
          "Trek Itinerary / Duration": formData.duration,
          "Special Requests / Diet": formData.specialRequest
        })
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("There was an issue submitting your inquiry. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("There was an error connecting to the server. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-2xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Stage 6 Booking</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950">Secure Trek Inquiry
          </h1>
          <p className="mt-4 text-sm text-stone-650 leading-relaxed max-w-md mx-auto">Submit your preferred dates and group size. Our local booking coordinators in Pokhara will review availability and send a customized invoice within 12 hours.
          </p>
        </div>

        {/* Booking Form Card */}
        <div className="mt-12 bg-white p-8 border border-stone-200 rounded-3xl shadow-sm">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="checkout-name" className="text-xs font-bold text-stone-600 uppercase tracking-wider block">Full Name</label>
                  <input 
                    id="checkout-name"
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) =>setFormData({...formData, name: e.target.value})}
                    placeholder="Sarah Jenkins" 
                    className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 text-stone-850"
                  />
                </div>
                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="checkout-email" className="text-xs font-bold text-stone-600 uppercase tracking-wider block">Email Address</label>
                  <input 
                    id="checkout-email"
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={(e) =>setFormData({...formData, email: e.target.value})}
                    placeholder="sarah@example.com" 
                    className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 text-stone-850"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {/* Preferred Date */}
                <div className="space-y-2">
                  <label htmlFor="checkout-date" className="text-xs font-bold text-stone-600 uppercase tracking-wider block">Start Date</label>
                  <input 
                    id="checkout-date"
                    type="date" 
                    required 
                    value={formData.date}
                    onChange={(e) =>setFormData({...formData, date: e.target.value})}
                    className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 text-stone-850"
                  />
                </div>
                {/* Trekkers */}
                <div className="space-y-2">
                  <label htmlFor="checkout-pax" className="text-xs font-bold text-stone-600 uppercase tracking-wider block">Group Size</label>
                  <select 
                    id="checkout-pax"
                    value={formData.pax}
                    onChange={(e) =>setFormData({...formData, pax: e.target.value})}
                    className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 text-stone-650 cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, "7+ (Group)"].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? "Trekker" : "Trekkers"}</option>
                    ))}
                  </select>
                </div>
                {/* Duration */}
                <div className="space-y-2">
                  <label htmlFor="checkout-duration" className="text-xs font-bold text-stone-600 uppercase tracking-wider block">Trek Itinerary</label>
                  <select 
                    id="checkout-duration"
                    value={formData.duration}
                    onChange={(e) =>setFormData({...formData, duration: e.target.value})}
                    className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 text-stone-655 cursor-pointer"
                  >
                    <option value="9">9-Day Core Route</option>
                    <option value="7">7-Day Express Route</option>
                    <option value="5">5-Day Rapid Route</option>
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div className="space-y-2">
                <label htmlFor="checkout-requests" className="text-xs font-bold text-stone-600 uppercase tracking-wider block">Special requests / Diet / Accommodation</label>
                <textarea 
                  id="checkout-requests"
                  value={formData.specialRequest}
                  onChange={(e) =>setFormData({...formData, specialRequest: e.target.value})}
                  rows="4" 
                  placeholder="E.g. Vegetarian diet, require down jacket rentals, single room request..." 
                  className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 text-stone-850"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full rounded-full bg-emerald-600 py-4 text-xs font-bold text-white hover:bg-emerald-500 shadow-md shadow-emerald-900/10 hover-lift glow-btn transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting Inquiry..." : "Submit Secure Inquiry"}
              </button>

              <div className="text-center text-[10px] text-stone-600 font-semibold flex justify-center gap-6 pt-4 border-t border-stone-100">
                <span>SSL Encrypted Connection</span>
                <span>ACA Approved Operator</span>
              </div>
            </form>
          ) : (
            <div className="text-center py-10 space-y-6">
              <span className="text-5xl block"></span>
              <h3 className="text-2xl font-bold text-stone-955">Inquiry Submitted Successfully!</h3>
              <p className="text-sm text-stone-650 leading-relaxed max-w-sm mx-auto">Thank you, <strong className="text-stone-850">{formData.name}</strong>. Our local coordinators in Pokhara are checking community lodge room registers. We will send your itinerary breakdown and payment link via email at <strong className="text-stone-850">{formData.email}</strong> shortly.
              </p>
              <Link
                href="/"
                className="inline-block rounded-full bg-stone-950 px-6 py-2.5 text-xs font-bold text-white hover:bg-emerald-600 transition"
              >Return to Homepage
              </Link>
            </div>
          )}
        </div>

      </main>
    </div>
  );
}
