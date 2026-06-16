"use client";

import React, { useState } from "react";

export default function TeahouseFinder() {
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
      socialSupport: "Directly supports wildlife conservation patrols in the area.",
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

  const availableFacilities = ["Wi-Fi", "Hot Shower", "Solar Charging", "Local Cheese", "Attached Bathroom", "Internal Heating", "Hot Water Bottles"];

  return (
    <div className="space-y-6">
      {/* Filters and Search Bar */}
      <div className="bg-white p-6 border border-stone-200 rounded-3xl shadow-sm space-y-4">
        <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">
          🔍 Search &amp; Filter Database
        </span>
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
            className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 text-stone-600 cursor-pointer font-semibold"
          >
            <option value="all">Filter by Facility (All)</option>
            {availableFacilities.map((fac) => (
              <option key={fac} value={fac}>{fac}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Database List */}
      <div className="grid gap-6 sm:grid-cols-2">
        {filteredTeahouses.length ? (
          filteredTeahouses.map((lodge, i) => (
            <div 
              key={i} 
              className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm hover:shadow-md transition duration-300 relative flex flex-col justify-between"
            >
              {/* Floating Ownership Badge */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">
                    📍 {lodge.village}
                  </span>
                  <span className="text-[10px] font-semibold text-stone-400 block mt-0.5">
                    Altitude: {lodge.altitude}
                  </span>
                </div>
                <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-extrabold tracking-widest uppercase shrink-0 ${
                  lodge.ownership === "Community Owned" 
                    ? "bg-emerald-100 text-emerald-800 border border-emerald-500/10" 
                    : "bg-stone-100 text-stone-600 border border-stone-200"
                }`}>
                  {lodge.ownership}
                </span>
              </div>

              {/* Title and Details */}
              <div className="space-y-3 flex-1">
                <h3 className="text-lg font-extrabold text-stone-950 leading-snug">{lodge.name}</h3>
                
                <div className="text-xs space-y-1.5 text-stone-650">
                  <div className="flex justify-between">
                    <span className="text-stone-400">Twin Room Rate:</span>
                    <strong className="text-stone-850 font-bold">{lodge.rate}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Contact Number:</span>
                    <strong className="text-stone-850 font-bold">{lodge.phone}</strong>
                  </div>
                  <div className="p-3 bg-stone-50 border border-stone-100 rounded-xl mt-2 text-xs text-stone-500 leading-relaxed font-medium">
                    🤝 <strong className="text-stone-700">Reinvested Profits:</strong> {lodge.socialSupport}
                  </div>
                </div>
              </div>

              {/* Facilities List */}
              <div className="pt-4 mt-4 border-t border-stone-100 flex flex-wrap gap-1.5">
                {lodge.facilities.map((fac) => (
                  <span 
                    key={fac} 
                    className="text-[9px] font-extrabold text-stone-450 uppercase tracking-wider border border-stone-200 px-2 py-0.5 rounded-md bg-stone-50/50"
                  >
                    {fac}
                  </span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-2 text-center p-12 bg-white border border-stone-200 rounded-3xl text-stone-400 font-bold text-sm">
            No lodges found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}
