"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
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
    option.toLowerCase().includes((formData.foundUs || "").toLowerCase())
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formsubmit.co/ajax/olibishal871@gmail.com", {
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

  // Close menus on page change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMenu(null);
    setExpandedMobileCategory(null);
  }, [pathname]);

  const tours = [
    { href: "/tours/khayer-lake-trek", label: "Sacred Khayer Lake Pilgrimage", desc: "A spiritual trek to a holy alpine lake at 4,660m." },
    { href: "/tours/khopra-poon-hill-trek", label: "Poon Hill & Khopra Combo", desc: "Combine classic viewpoints with quiet forest paths." },
    { href: "/tours/khopra-mohare-danda-trek", label: "Mohare Danda Offbeat", desc: "The ultimate community-lodge circuit adventure." },
    { href: "/tours", label: "All Trekking Packages", desc: "Browse all curated routes and custom packages." }
  ];

  const guides = [
    { href: "/guides/khopra-ridge-ultimate-guide", label: "Ultimate Khopra Ridge Guide", desc: "Acclimatization, trails, and panoramas." },
    { href: "/guides/khayer-lake-ultimate-guide", label: "Sacred Khayer Lake Guide", desc: "Route maps, mythology, and trail tips." },
    { href: "/viewpoints/muldai-viewpoint-guide", label: "Muldai Viewpoint Hub", desc: "Sunrise vistas and Annapurna panoramas." },
    { href: "/viewpoints/khopra-vs-poon-hill-views", label: "Khopra vs Poon Hill Views", desc: "Deep comparative crowd & visual analysis." }
  ];

  const villages = [
    { href: "/nodes/ghandruk-village-guide", label: "Ghandruk Village", desc: "Gurung cultural capital." },
    { href: "/nodes/swanta-village-guide", label: "Swanta Village", desc: "Magar valley agricultural fields." },
    { href: "/nodes/bayeli-kharka-guide", label: "Bayeli Kharka", desc: "High alpine grazing pastures." },
    { href: "/nodes/chhistibung-guide", label: "Chhistibung Node", desc: "Fauna, monals, and forest lodge." },
    { href: "/nodes/ghorepani-guide", label: "Ghorepani Village", desc: "Major tourist teahouse cluster." },
    { href: "/nodes/tadapani-guide", label: "Tadapani Node", desc: "Junction to Ghandruk & Bayeli." },
    { href: "/nodes", label: "All Villages & Hubs", desc: "Explore the complete interactive map & route indices." }
  ];

  const planning = [
    { href: "/planning/khopra-trek-cost", label: "Trek Costs & Calculator", desc: "Daily details, discounts, and estimates." },
    { href: "/planning/khopra-trek-permits", label: "ACAP & TIMS Permits", desc: "Latest rules, entry fees, and registration." },
    { href: "/planning/packing-checklist", label: "Interactive Packing List", desc: "Custom checklists by season and support style." },
    { href: "/planning/teahouse-locator", label: "Teahouse Finder & Database", desc: "Twin shared rates, amenities, and contact numbers." }
  ];

  // Resources Mega-Dropdown columns
  const resourcesPrep = [
    { href: "/planning/khopra-trek-itinerary", label: "Itinerary Comparison Hub" },
    { href: "/planning/5-day-khopra-trek", label: "5-Day Rapid Route" },
    { href: "/planning/7-day-khopra-trek", label: "7-Day Express Route" },
    { href: "/planning/khayer-lake-altitude-difficulty", label: "Altitude & Safety Guide" },
    { href: "/altitude/khopra-ridge-elevation", label: "Acclimatization & Elevation Chart" },
    { href: "/weather/khopra-trek-october", label: "October Weather & Season Info" },
    { href: "/planning/khayer-lake-mythology-pilgrimage", label: "Mythology & Pilgrimage" },
    { href: "/planning/khopra-trek-for-beginners", label: "Trek for Beginners" },
    { href: "/planning/pokhara-to-ghandruk", label: "Pokhara to Ghandruk Transport" }
  ];

  const resourcesCommunity = [
    { href: "/community/what-is-community-lodge", label: "What is Community Lodge" },
    { href: "/community/community-lodge-vs-teahouse", label: "Lodge vs Teahouse Model" },
    { href: "/community/sustainable-tourism-khopra", label: "Sustainable Tourism Rules" },
    { href: "/ecology/annapurna-conservation-area-guide", label: "ACAP Conservation Guide" },
    { href: "/ecology/wildlife-khopra-trek", label: "Fauna & Wildlife Guide" },
    { href: "/ecology/rhododendron-forests", label: "Forests & Spring Bloom" },
    { href: "/mountains/dhaulagiri-views-khopra", label: "Peaks Visible from Ridge" }
  ];

  const resourcesGuides = [
    { href: "/guides/why-khopra-is-less-crowded", label: "Why Khopra is Less Crowded" },
    { href: "/guides/khopra-vs-mardi-himal", label: "Khopra vs Mardi Himal" },
    { href: "/routes/ghandruk-to-tadapani", label: "Ghandruk to Tadapani Trail Guide" },
    { href: "/viewpoints/best-offbeat-trek-nepal", label: "Best Offbeat Treks in Nepal" },
    { href: "/community/photographer-showcase", label: "Photographer Showcase" },
    { href: "/review-submission", label: "Submit Trek Review" },
    { href: "/booking-policies", label: "Booking & Cancellation Policies" },
    { href: "/checkout", label: "Secure Booking Inquiry" }
  ];

  const handleMobileCategoryToggle = (cat) => {
    setExpandedMobileCategory(expandedMobileCategory === cat ? null : cat);
  };

  return (
    <>
      <header className="border-b border-stone-200/80 bg-white/95 backdrop-blur-md sticky top-0 z-50 transition-all">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          
          {/* Logo */}
          <Link href="/" className="text-2xl font-black tracking-tight text-stone-950 hover:text-emerald-700 transition flex items-center gap-2">
            <img src="/logo.png" alt="Khopra Ridge Trek Logo" className="h-8 w-8 rounded-xl object-cover" />
            <span>KhopraRidge<span className="text-emerald-600 font-bold">Trek</span></span>
          </Link>

          {/* Desktop Nav links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-stone-600">
            {/* Home Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu("home")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link 
                href="/" 
                className={`flex items-center gap-1 hover:text-emerald-700 transition-colors py-2 cursor-pointer ${pathname === "/" || pathname === "/about" ? "text-emerald-600 font-bold" : "text-stone-600 font-semibold"}`}
              >
                Home
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "home" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {activeMenu === "home" && (
                <div className="absolute left-0 mt-0 w-48 rounded-2xl border border-stone-200 bg-white p-2 shadow-xl ring-1 ring-black/5 animate-fade-in z-50">
                  <Link 
                    href="/about" 
                    className={`block px-4 py-2.5 rounded-xl text-sm transition ${pathname === "/about" ? "bg-emerald-50 text-emerald-700 font-bold" : "text-stone-800 hover:text-emerald-600 hover:bg-stone-50 font-semibold"}`}
                  >
                    About Us
                  </Link>
                </div>
              )}
            </div>

            {/* Tours Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu("tours")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className={`flex items-center gap-1 hover:text-emerald-700 transition-colors py-2 focus:outline-none cursor-pointer ${pathname.startsWith("/tours") ? "text-emerald-600" : ""}`}>
                Tours
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "tours" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeMenu === "tours" && (
                <div className="absolute left-0 mt-0 w-80 rounded-2xl border border-stone-200 bg-white p-4 shadow-xl ring-1 ring-black/5 animate-fade-in z-50">
                  <div className="flex flex-col gap-1">
                    {tours.map((t) => (
                      <Link 
                        key={t.href} 
                        href={t.href} 
                        className={`group p-2.5 rounded-xl transition ${t.href === "/tours" ? "bg-emerald-50/50 hover:bg-emerald-50 border border-emerald-100/50" : "hover:bg-stone-50"}`}
                      >
                        <span className={`block font-bold text-stone-900 transition-colors text-sm ${t.href === "/tours" ? "text-emerald-700 group-hover:text-emerald-800" : "group-hover:text-emerald-600"}`}>{t.label}</span>
                        <span className="block text-xs text-stone-400 mt-0.5 leading-snug">{t.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Guides Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu("guides")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className={`flex items-center gap-1 hover:text-emerald-700 transition-colors py-2 focus:outline-none cursor-pointer ${pathname.startsWith("/guides") || pathname.startsWith("/viewpoints") ? "text-emerald-600" : ""}`}>
                Guides
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "guides" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeMenu === "guides" && (
                <div className="absolute left-0 mt-0 w-80 rounded-2xl border border-stone-200 bg-white p-4 shadow-xl ring-1 ring-black/5 z-50">
                  <div className="flex flex-col gap-1">
                    {guides.map((g) => (
                      <Link key={g.href} href={g.href} className="group p-2.5 rounded-xl hover:bg-stone-50 transition">
                        <span className="block font-bold text-stone-900 group-hover:text-emerald-600 transition-colors text-sm">{g.label}</span>
                        <span className="block text-xs text-stone-400 mt-0.5 leading-snug">{g.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Villages Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu("villages")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className={`flex items-center gap-1 hover:text-emerald-700 transition-colors py-2 focus:outline-none cursor-pointer ${pathname.startsWith("/nodes") ? "text-emerald-600" : ""}`}>
                Villages
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "villages" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeMenu === "villages" && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-0 w-[480px] rounded-3xl border border-stone-200 bg-white p-5 shadow-2xl ring-1 ring-black/5 grid grid-cols-2 gap-2 z-50">
                  {villages.map((v) => (
                    <Link 
                      key={v.href} 
                      href={v.href} 
                      className={`group p-2.5 rounded-xl transition ${v.href === "/nodes" ? "col-span-2 bg-emerald-50/50 hover:bg-emerald-50 border border-emerald-100/50 flex flex-col items-center text-center py-2" : "hover:bg-stone-50"}`}
                    >
                      <span className={`block font-bold text-stone-900 transition-colors text-xs ${v.href === "/nodes" ? "text-emerald-700 group-hover:text-emerald-800" : "group-hover:text-emerald-600"}`}>{v.label}</span>
                      <span className="block text-[11px] text-stone-400 mt-0.5 leading-snug">{v.desc}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Planning Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu("planning")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className={`flex items-center gap-1 hover:text-emerald-700 transition-colors py-2 focus:outline-none cursor-pointer ${pathname.startsWith("/planning") ? "text-emerald-600" : ""}`}>
                Planning
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "planning" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeMenu === "planning" && (
                <div className="absolute right-0 mt-0 w-80 rounded-2xl border border-stone-200 bg-white p-4 shadow-xl ring-1 ring-black/5 z-50">
                  <div className="flex flex-col gap-1">
                    {planning.map((p) => (
                      <Link key={p.href} href={p.href} className="group p-2.5 rounded-xl hover:bg-stone-50 transition">
                        <span className="block font-bold text-stone-900 group-hover:text-emerald-600 transition-colors text-sm">{p.label}</span>
                        <span className="block text-xs text-stone-400 mt-0.5 leading-snug">{p.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Resources Mega-Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu("resources")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className={`flex items-center gap-1 hover:text-emerald-700 transition-colors py-2 focus:outline-none cursor-pointer ${pathname.startsWith("/community") || pathname.startsWith("/ecology") || pathname.includes("why-khopra") || pathname.includes("vs-mardi") || pathname.includes("offbeat-trek") || pathname.includes("dhaulagiri-views") || pathname.includes("checkout") || pathname.includes("booking-policies") || pathname.includes("review-submission") || pathname.includes("photographer-showcase") ? "text-emerald-600" : ""}`}>
                Resources
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "resources" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeMenu === "resources" && (
                <div className="absolute right-0 mt-0 w-[780px] rounded-3xl border border-stone-200 bg-white p-6 shadow-2xl ring-1 ring-black/5 grid grid-cols-3 gap-6 z-50">
                  
                  {/* Col 1: Prep & Altitudes */}
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-600 border-b border-stone-100 pb-1.5">Prep &amp; Altitudes</h4>
                    <div className="flex flex-col gap-2">
                      {resourcesPrep.map((item) => (
                        <Link key={item.href} href={item.href} className="text-xs text-stone-600 hover:text-emerald-600 font-bold transition">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Col 2: Community & Ecology */}
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-600 border-b border-stone-100 pb-1.5">Community &amp; Ecology</h4>
                    <div className="flex flex-col gap-2">
                      {resourcesCommunity.map((item) => (
                        <Link key={item.href} href={item.href} className="text-xs text-stone-600 hover:text-emerald-600 font-bold transition">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Col 3: Guides & Bookings */}
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-600 border-b border-stone-100 pb-1.5">Guides &amp; Bookings</h4>
                    <div className="flex flex-col gap-2">
                      {resourcesGuides.map((item) => (
                        <Link key={item.href} href={item.href} className="text-xs text-stone-600 hover:text-emerald-600 font-bold transition">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>
              )}
            </div>

            <Link href="/contact" className={`hover:text-emerald-700 transition-colors ${pathname === "/contact" ? "text-emerald-600" : ""}`}>
              Contact Us
            </Link>

          </nav>

          {/* CTA & Mobile Trigger */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="hidden sm:inline-flex rounded-full bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-emerald-500 shadow-md shadow-emerald-900/10 hover-lift glow-btn transition-all cursor-pointer"
            >
              Book Trek
            </button>
            
            {/* Hamburger Button */}
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden flex items-center justify-center h-10 w-10 rounded-xl bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-800 transition cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER SCREEN */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop overlay */}
          <div 
            onClick={() => setMobileMenuOpen(false)}
            className="absolute inset-0 bg-stone-950/60 backdrop-blur-sm transition-opacity"
          />

          {/* Drawer side-over */}
          <div className="relative w-80 max-w-full bg-white h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto transition-transform duration-300">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-stone-100">
                <Link href="/" className="text-lg font-black text-stone-950 flex items-center gap-2">
                  <img src="/logo.png" alt="Khopra Ridge Trek Logo" className="h-7 w-7 rounded-lg object-cover" />
                  <span>KhopraRidgeTrek</span>
                </Link>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="h-8 w-8 rounded-lg bg-stone-100 flex items-center justify-center text-stone-600 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Accordion Categories */}
              <div className="mt-8 space-y-4">
                
                {/* Home */}
                <Link href="/" className="block py-2 font-bold text-stone-900 text-sm hover:text-emerald-600 transition">
                  Home
                </Link>

                {/* About Us */}
                <Link href="/about" className="block py-2 font-bold text-stone-900 text-sm hover:text-emerald-600 transition border-b border-stone-100 pb-2">
                  About Us
                </Link>

                {/* Tours Accordion */}
                <div className="border-b border-stone-100 pb-2">
                  <button 
                    onClick={() => handleMobileCategoryToggle("tours")}
                    className="w-full flex items-center justify-between py-2 text-sm font-bold text-stone-900 focus:outline-none cursor-pointer"
                  >
                    <span>Tours</span>
                    <svg className={`w-3.5 h-3.5 transition-transform ${expandedMobileCategory === "tours" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedMobileCategory === "tours" && (
                    <div className="pl-3 mt-2 flex flex-col gap-2">
                      {tours.map((t) => (
                        <Link 
                          key={t.href} 
                          href={t.href} 
                          className={`py-1 text-xs transition ${t.href === "/tours" ? "text-emerald-700 font-bold" : "text-stone-600 hover:text-emerald-600"}`}
                        >
                          {t.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Guides Accordion */}
                <div className="border-b border-stone-100 pb-2">
                  <button 
                    onClick={() => handleMobileCategoryToggle("guides")}
                    className="w-full flex items-center justify-between py-2 text-sm font-bold text-stone-900 focus:outline-none cursor-pointer"
                  >
                    <span>Guides</span>
                    <svg className={`w-3.5 h-3.5 transition-transform ${expandedMobileCategory === "guides" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedMobileCategory === "guides" && (
                    <div className="pl-3 mt-2 flex flex-col gap-2">
                      {guides.map((g) => (
                        <Link key={g.href} href={g.href} className="py-1 text-xs text-stone-600 hover:text-emerald-600">
                          {g.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Villages Accordion */}
                <div className="border-b border-stone-100 pb-2">
                  <button 
                    onClick={() => handleMobileCategoryToggle("villages")}
                    className="w-full flex items-center justify-between py-2 text-sm font-bold text-stone-900 focus:outline-none cursor-pointer"
                  >
                    <span>Villages</span>
                    <svg className={`w-3.5 h-3.5 transition-transform ${expandedMobileCategory === "villages" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedMobileCategory === "villages" && (
                    <div className="pl-3 mt-2 flex flex-col gap-2">
                      {villages.map((v) => (
                        <Link 
                          key={v.href} 
                          href={v.href} 
                          className={`py-1 text-xs transition ${v.href === "/nodes" ? "text-emerald-700 font-bold" : "text-stone-600 hover:text-emerald-600"}`}
                        >
                          {v.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Planning Accordion */}
                <div className="border-b border-stone-100 pb-2">
                  <button 
                    onClick={() => handleMobileCategoryToggle("planning")}
                    className="w-full flex items-center justify-between py-2 text-sm font-bold text-stone-900 focus:outline-none cursor-pointer"
                  >
                    <span>Planning</span>
                    <svg className={`w-3.5 h-3.5 transition-transform ${expandedMobileCategory === "planning" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedMobileCategory === "planning" && (
                    <div className="pl-3 mt-2 flex flex-col gap-2">
                      {planning.map((p) => (
                        <Link key={p.href} href={p.href} className="py-1 text-xs text-stone-600 hover:text-emerald-600">
                          {p.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Resources Accordion */}
                <div className="border-b border-stone-100 pb-2">
                  <button 
                    onClick={() => handleMobileCategoryToggle("resources")}
                    className="w-full flex items-center justify-between py-2 text-sm font-bold text-stone-900 focus:outline-none cursor-pointer"
                  >
                    <span>Resources</span>
                    <svg className={`w-3.5 h-3.5 transition-transform ${expandedMobileCategory === "resources" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedMobileCategory === "resources" && (
                    <div className="pl-3 mt-2 flex flex-col gap-3">
                      {/* Sub-groups */}
                      <div className="space-y-1">
                        <span className="text-[9px] font-extrabold uppercase text-emerald-600 tracking-widest block">Prep &amp; Altitudes</span>
                        {resourcesPrep.map((item) => (
                          <Link key={item.href} href={item.href} className="block py-0.5 text-xs text-stone-500 hover:text-emerald-600">
                            {item.label}
                          </Link>
                        ))}
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] font-extrabold uppercase text-emerald-600 tracking-widest block">Community &amp; Ecology</span>
                        {resourcesCommunity.map((item) => (
                          <Link key={item.href} href={item.href} className="block py-0.5 text-xs text-stone-500 hover:text-emerald-600">
                            {item.label}
                          </Link>
                        ))}
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] font-extrabold uppercase text-emerald-600 tracking-widest block">Guides &amp; Bookings</span>
                        {resourcesGuides.map((item) => (
                          <Link key={item.href} href={item.href} className="block py-0.5 text-xs text-stone-500 hover:text-emerald-600">
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Contact Us */}
                <Link href="/contact" className="block py-2 font-bold text-stone-900 text-sm hover:text-emerald-600 transition border-t border-stone-100 pt-2">
                  Contact Us
                </Link>

              </div>
            </div>

            {/* Bottom Actions inside Drawer */}
            <div className="pt-8 border-t border-stone-100">
              <button 
                onClick={() => {
                  setIsModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full inline-flex items-center justify-center rounded-full bg-emerald-600 py-3.5 text-xs font-bold text-white hover:bg-emerald-500 shadow-md shadow-emerald-900/10 transition cursor-pointer"
              >
                Book Trek
              </button>
            </div>
          </div>
        </div>
      )}

      {/* BOOKING MODAL POPUP */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop overlay */}
          <div 
            onClick={closeModal}
            className="absolute inset-0 bg-stone-950/60 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Content container */}
          <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 md:p-10 shadow-2xl border border-stone-200 overflow-y-auto max-h-[90vh] z-10">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute right-6 top-6 h-8 w-8 rounded-lg bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-600 font-bold transition cursor-pointer"
            >
              ✕
            </button>

            <div className="text-center max-w-md mx-auto mb-8">
              <h2 className="text-3xl font-extrabold text-stone-950">Inquire &amp; Book Today</h2>
              <p className="mt-3 text-sm text-stone-500">
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
                  onClick={closeModal}
                  className="mt-6 rounded-full bg-emerald-600 px-6 py-2.5 text-xs font-bold text-white hover:bg-emerald-500 transition-all cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-stone-500 uppercase tracking-wide">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="rounded-lg border border-stone-200 px-4 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition"
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
                      className="rounded-lg border border-stone-200 px-4 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-stone-500 uppercase tracking-wide">Proposed Start Date</label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleInputChange}
                      className="rounded-lg border border-stone-200 px-4 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition text-stone-500"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-stone-500 uppercase tracking-wide">Group Size</label>
                    <select
                      name="packSize"
                      value={formData.packSize}
                      onChange={handleInputChange}
                      className="rounded-lg border border-stone-200 px-4 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition text-stone-500 bg-white"
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
                    <label className="text-xs font-bold text-stone-500 uppercase tracking-wide">Trek Package</label>
                    <select
                      name="trekPackage"
                      value={formData.trekPackage}
                      onChange={handleInputChange}
                      className="rounded-lg border border-stone-200 px-4 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition text-stone-500 bg-white cursor-pointer"
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
                        className="w-full rounded-lg border border-stone-200 px-4 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition"
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
                          <div className="px-4 py-2 text-xs text-stone-400 italic font-medium">
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
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="rounded-lg border border-stone-200 px-4 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition resize-none"
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
      )}
    </>
  );
}
