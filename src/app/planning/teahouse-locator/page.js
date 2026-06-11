"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFacility, setSelectedFacility] = useState("all");

  const teahouses = [
    {
      name: "Swanta Community Lodge",
      village: "Swanta Village",
      altitude: "2,200m",
      ownership: "Community Owned",
      rate: "1,200 NPR (~$9 USD) per night",
      phone: "+977-984-762891",
      socialSupport: "Directly funds Swanta Secondary School teacher salaries.",
      facilities: ["Wi-Fi", "Hot Shower", "Solar Charging", "Attached Bathroom", "Local Cheese"]
    },
    {
      name: "Bayeli Kharka Community Lodge",
      village: "Bayeli Kharka",
      altitude: "3,425m",
      ownership: "Community Owned",
      rate: "1,500 NPR (~$11 USD) per night",
      phone: "+977-980-871234",
      socialSupport: "Funds Nangi community health post and local midwife program.",
      facilities: ["Solar Charging", "Hot Shower", "Common Bathroom", "Warm Dining Room"]
    },
    {
      name: "Chhistibung Community Lodge",
      village: "Chhistibung Node",
      altitude: "2,975m",
      ownership: "Community Owned",
      rate: "1,500 NPR (~$11 USD) per night",
      phone: "+977-981-992384",
      socialSupport: "Directly supports the wildlife conservation patrols in the area.",
      facilities: ["Solar Charging", "Hot Shower", "Common Bathroom"]
    },
    {
      name: "Khopra Ridge Community Lodge",
      village: "Khopra Ridge (Khopra Danda)",
      altitude: "3,660m",
      ownership: "Community Owned",
      rate: "1,800 NPR (~$14 USD) per night",
      phone: "+977-984-722101",
      socialSupport: "100% of profit margins reinvested in Nangi high school and valley Wi-Fi.",
      facilities: ["Wi-Fi", "Solar Charging", "Hot Water Bottles", "Panoramic Dining", "Local Cheese"]
    },
    {
      name: "Hotel Snowland Ghorepani",
      village: "Ghorepani Village",
      altitude: "2,860m",
      ownership: "Private Owner",
      rate: "2,500 NPR (~$19 USD) per night",
      phone: "+977-61-460122",
      socialSupport: "Local employment of Gurung and Magar porters.",
      facilities: ["Wi-Fi", "Attached Bathroom", "Electric Hot Shower", "Internal Heating"]
    },
    {
      name: "Tadapani Guest House",
      village: "Tadapani Node",
      altitude: "2,630m",
      ownership: "Private Owner",
      rate: "2,000 NPR (~$15 USD) per night",
      phone: "+977-984-602981",
      socialSupport: "Supports local transport loaders in Tadapani junction.",
      facilities: ["Wi-Fi", "Solar Shower", "Common Bathroom"]
    }
  ];

  const filteredTeahouses = teahouses.filter((lodge) => {
    const matchesSearch = lodge.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          lodge.village.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFacility = selectedFacility === "all" || 
                            lodge.facilities.includes(selectedFacility);

    return matchesSearch && matchesFacility;
  });

  const availableFacilities = ["Wi-Fi", "Hot Shower", "Solar Charging", "Local Cheese", "Attached Bathroom"];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Lodge Directory</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Khopra Ridge Teahouse Locator
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Search twin bed rates, check phone numbers, evaluate amenities, and find out which community school or health post each lodge directly funds.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="mt-12 bg-white p-6 border border-stone-200 rounded-3xl shadow-sm space-y-4">
          <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">Search &amp; Filter Database</span>
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Search Input */}
            <input 
              type="text" 
              placeholder="Search by lodge name or village..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 text-stone-800"
            />
            {/* Facility Select */}
            <select
              value={selectedFacility}
              onChange={(e) => setSelectedFacility(e.target.value)}
              className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 text-stone-600 cursor-pointer"
            >
              <option value="all">Filter by Facility (All)</option>
              {availableFacilities.map((fac) => (
                <option key={fac} value={fac}>{fac}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Database List */}
        <div className="mt-12 space-y-6">
          {filteredTeahouses.length ? (
            filteredTeahouses.map((lodge, i) => (
              <div 
                key={i} 
                className="p-8 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-4 hover:shadow-md transition duration-300 relative flex flex-col justify-between"
              >
                {/* Floating Ownership Badge */}
                <span className={`absolute top-6 right-6 px-3 py-1 rounded-full text-[9px] font-extrabold tracking-widest uppercase ${
                  lodge.ownership === "Community Owned" 
                    ? "bg-emerald-100 text-emerald-800 border border-emerald-500/10" 
                    : "bg-stone-100 text-stone-600 border border-stone-200"
                }`}>
                  {lodge.ownership}
                </span>

                {/* Title and Altitude */}
                <div>
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">{lodge.village} ({lodge.altitude})</span>
                  <h3 className="text-xl font-black text-stone-950 mt-1">{lodge.name}</h3>
                  <div className="mt-3 text-xs space-y-1.5 text-stone-600">
                    <div>Twin Shared Rate: <strong className="text-stone-800">{lodge.rate}</strong></div>
                    <div>Contact Line: <strong className="text-stone-800">{lodge.phone}</strong></div>
                    <div className="p-3 bg-stone-50 border border-stone-100 rounded-xl mt-2 text-xs text-stone-500 leading-relaxed">
                      🤝 <strong className="text-stone-700">Social Support:</strong> {lodge.socialSupport}
                    </div>
                  </div>
                </div>

                {/* Facilities List */}
                <div className="pt-4 border-t border-stone-100 flex flex-wrap gap-1.5">
                  {lodge.facilities.map((fac) => (
                    <span 
                      key={fac} 
                      className="text-[9px] font-extrabold text-stone-400 uppercase tracking-wider border border-stone-200 px-2 py-0.5 rounded-md bg-stone-50/50"
                    >
                      {fac}
                    </span>
                  ))}
                </div>

              </div>
            ))
          ) : (
            <div className="text-center p-12 bg-white border border-stone-200 rounded-3xl text-stone-400 font-bold text-sm">
              No lodges found matching your search.
            </div>
          )}
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              Lodge contacts and rates are verified by our field coordinators. During peak seasons, advance reservation is mandatory due to limited lodge capacity on the ridge.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Booking Logistics Support</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Want to skip the call logistics and secure room reservations in advance? We organize guide packages that include pre-booked lodge accommodations.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/#book"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-all"
              >
                Book Your Package
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
