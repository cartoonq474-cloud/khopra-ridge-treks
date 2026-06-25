"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    package: "khayer-lake",
    date: "",
    groupSize: "1",
    foundUs: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const foundUsRef = useRef(null);
  const [showFoundUsSuggestions, setShowFoundUsSuggestions] = useState(false);

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

  const filteredFoundUsSuggestions = FIND_US_OPTIONS.filter(option =>
    option.toLowerCase().includes((formState.foundUs || "").toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (foundUsRef.current && !foundUsRef.current.contains(event.target)) {
        setShowFoundUsSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/olibishal871@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "Form Source": "Contact Page Booking & General Inquiry",
          Name: formState.name,
          Email: formState.email,
          "Trek Package": formState.package,
          "Group Size": formState.groupSize,
          "Intended Departure Date": formState.date,
          "Where did you find us": formState.foundUs,
          "Message / Special Requests": formState.message
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen antialiased">
      
      {/* Hero Header */}
      <section className="bg-emerald-950 py-16 text-white text-center">
        <div className="mx-auto max-w-4xl px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Trek Planning</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Start Your Journey
          </h1>
          <p className="mt-4 text-lg text-emerald-100/80 leading-relaxed font-medium">
            Have questions about community lodges, custom itineraries, permits, or group rates? Get in touch with our booking office.
          </p>
        </div>
      </section>

      {/* Main Grid Content */}
      <main className="mx-auto max-w-5xl px-6 py-20 grid gap-12 lg:grid-cols-5">
        
        {/* Left Column: Contact Details */}
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight">Direct Contacts</h2>
            <p className="mt-2 text-stone-500 text-xs font-medium">Reach out via our direct messaging lines for instant assistance.</p>
            <div className="mt-6 space-y-4 text-sm font-semibold text-stone-800">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-emerald-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@khopraridgetrek.com" className="hover:text-emerald-700 transition">info@khopraridgetrek.com</a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-emerald-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+977 61-469201 (Operations Desk)</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#25D366] fill-current flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.761.459 3.475 1.33 4.99L2 22l5.166-1.355c1.467.801 3.125 1.222 4.821 1.222 5.506 0 9.988-4.482 9.988-9.988 0-5.506-4.482-9.988-9.988-9.988zm6.54 14.364c-.255.719-1.282 1.319-1.782 1.373-.481.053-.984.092-2.964-.693-2.529-1.002-4.148-3.567-4.274-3.737-.123-.169-1.012-1.348-1.012-2.571 0-1.223.636-1.825.862-2.079.227-.254.498-.318.665-.318.166 0 .332.001.478.007.151.006.353-.057.553.424.204.493.699 1.705.761 1.831.062.127.104.274.019.442-.085.169-.127.275-.254.423-.127.148-.268.329-.382.446-.127.127-.26.265-.113.52.148.254.656 1.079 1.407 1.748.966.861 1.777 1.127 2.031 1.254.254.127.402.106.551-.064.15-.17.636-.74.805-1.017.169-.275.338-.233.571-.148.233.085 1.481.699 1.735.826.254.127.424.191.488.297.064.106.064.614-.191 1.333z"/>
                </svg>
                <span className="text-emerald-600 font-bold">WhatsApp: +977 98560-22108</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight">Our Offices</h2>
            <p className="mt-2 text-stone-500 text-xs font-medium">Drop by our branches in Nepal for a hot cup of tea and trek consultation.</p>
            <div className="mt-6 space-y-6 text-xs text-stone-600">
              <div className="p-4 bg-white border border-stone-200 rounded-2xl shadow-sm">
                <strong className="block text-stone-900 font-bold mb-1">Pokhara Operations Office</strong>
                <p>Lakeside Road, Ward 6 (Opposite Barahi Temple), Pokhara, Nepal</p>
                <span className="block text-stone-400 mt-2">Hours: 8:00 AM - 7:00 PM (Daily)</span>
              </div>
              <div className="p-4 bg-white border border-stone-200 rounded-2xl shadow-sm">
                <strong className="block text-stone-900 font-bold mb-1">Kathmandu Liaison Desk</strong>
                <p>Jyatha Road, Thamel, Kathmandu, Nepal</p>
                <span className="block text-stone-400 mt-2">Hours: 9:00 AM - 6:00 PM (Sun - Fri)</span>
              </div>
              <div className="p-4 bg-white border border-stone-200 rounded-2xl shadow-sm">
                <strong className="block text-stone-900 font-bold mb-1">Swanta Village Support Base</strong>
                <p>Swanta Lodge, Myagdi, Annapurna Region, Nepal</p>
                <span className="block text-stone-400 mt-2">Hours: 24/7 (Emergency Dispatch Desk)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact/Booking Form */}
        <div className="lg:col-span-3">
          <div className="bg-white border border-stone-200 rounded-3xl p-8 shadow-sm">
            
            {submitted ? (
              <div className="text-center py-12 space-y-6">
                <span className="text-6xl block"></span>
                <h3 className="text-2xl font-black text-stone-950">Inquiry Received Successfully!</h3>
                <p className="text-stone-500 text-xs max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-stone-900">{formState.name}</strong>. Our Pokhara office manager will verify availability for the <strong className="text-stone-900">{formState.package === "khayer-lake" ? "Sacred Khayer Lake Pilgrimage" : formState.package === "poon-hill-combo" ? "Poon Hill & Khopra Combo" : formState.package === "mohare-offbeat" ? "Mohare Danda Offbeat" : "Custom Itinerary"}</strong> starting in <strong className="text-stone-900">{formState.date || "your preferred date"}</strong>. We will email you at <strong className="text-stone-900">{formState.email}</strong> within 12 hours.
                </p>
                <div className="pt-4">
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="rounded-full bg-emerald-600 px-6 py-2.5 text-xs font-bold text-white hover:bg-emerald-500 transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-extrabold text-stone-950 tracking-tight">Booking &amp; General Inquiry</h2>
                  <p className="mt-2 text-stone-500 text-xs leading-relaxed">Fill out the fields below, and our community trekking guides will help you customize your high-altitude itinerary.</p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-[11px] font-extrabold uppercase tracking-wider text-stone-600 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      value={formState.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className="w-full rounded-xl border border-stone-200 px-4 py-3 text-xs text-stone-900 placeholder-stone-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[11px] font-extrabold uppercase tracking-wider text-stone-600 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder="e.g. john@example.com"
                      className="w-full rounded-xl border border-stone-200 px-4 py-3 text-xs text-stone-900 placeholder-stone-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-3">
                  <div className="sm:col-span-2">
                    <label htmlFor="package" className="block text-[11px] font-extrabold uppercase tracking-wider text-stone-600 mb-2">Trek Package</label>
                    <select 
                      id="package" 
                      name="package"
                      value={formState.package}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-stone-200 px-4 py-3 text-xs text-stone-900 bg-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none cursor-pointer"
                    >
                      <option value="khayer-lake">Sacred Khayer Lake Pilgrimage (9 Days)</option>
                      <option value="poon-hill-combo">Poon Hill &amp; Khopra Combo (8 Days)</option>
                      <option value="mohare-offbeat">Mohare Danda Offbeat (7 Days)</option>
                      <option value="custom">Custom Designed Itinerary</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="groupSize" className="block text-[11px] font-extrabold uppercase tracking-wider text-stone-600 mb-2">Group Size</label>
                    <select 
                      id="groupSize" 
                      name="groupSize"
                      value={formState.groupSize}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-stone-200 px-4 py-3 text-xs text-stone-900 bg-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none cursor-pointer"
                    >
                      <option value="1">Solo Trekker (1)</option>
                      <option value="2">Couples / Friends (2)</option>
                      <option value="3-5">Small Group (3-5)</option>
                      <option value="6-10">Medium Group (6-10)</option>
                      <option value="11+">Large Exped (11+)</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="date" className="block text-[11px] font-extrabold uppercase tracking-wider text-stone-600 mb-2">Intended Departure Date</label>
                    <input 
                      type="date" 
                      id="date" 
                      name="date"
                      required
                      value={formState.date}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-stone-200 px-4 py-3 text-xs text-stone-900 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none cursor-pointer"
                    />
                  </div>
                  <div className="relative" ref={foundUsRef}>
                    <label htmlFor="foundUs" className="block text-[11px] font-extrabold uppercase tracking-wider text-stone-600 mb-2">Where did you find us?</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        id="foundUs" 
                        name="foundUs" 
                        value={formState.foundUs}
                        onChange={(e) => {
                          handleInputChange(e);
                          setShowFoundUsSuggestions(true);
                        }}
                        onFocus={() => setShowFoundUsSuggestions(true)}
                        placeholder="Start typing or click to select..."
                        className="w-full rounded-xl border border-stone-200 px-4 py-3 text-xs text-stone-900 placeholder-stone-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
                        autoComplete="off"
                      />
                      {formState.foundUs && (
                        <button
                          type="button"
                          onClick={() => setFormState(prev => ({ ...prev, foundUs: "" }))}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 font-bold text-sm px-1 cursor-pointer"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                    {showFoundUsSuggestions && (
                      <div className="absolute top-[calc(100%+4px)] left-0 right-0 z-50 max-h-40 overflow-y-auto rounded-xl border border-stone-200 bg-white shadow-xl py-1 text-left">
                        {filteredFoundUsSuggestions.length > 0 ? (
                          filteredFoundUsSuggestions.map((option, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => {
                                setFormState(prev => ({ ...prev, foundUs: option }));
                                setShowFoundUsSuggestions(false);
                              }}
                              className="w-full text-left px-4 py-2.5 text-xs hover:bg-stone-50 transition text-stone-700 font-semibold border-b border-stone-50 last:border-b-0 cursor-pointer"
                            >
                              {option}
                            </button>
                          ))
                        ) : (
                          <div className="px-4 py-2.5 text-xs text-stone-400 italic font-medium">
                            Custom value: "{formState.foundUs}"
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[11px] font-extrabold uppercase tracking-wider text-stone-600 mb-2">Your Message / Special Requests</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4}
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Describe your health status, high-altitude experience, or custom modifications needed..."
                    className="w-full rounded-xl border border-stone-200 px-4 py-3 text-xs text-stone-900 placeholder-stone-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none resize-none"
                  />
                </div>

                <div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center rounded-full bg-emerald-600 py-3.5 text-xs font-bold text-white hover:bg-emerald-500 shadow-md hover-lift transition cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting Inquiry..." : "Submit Inquiry to Pokhara Operations"}
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>

      </main>
    </div>
  );
}
