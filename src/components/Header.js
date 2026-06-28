"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import dynamic from "next/dynamic";

const BookingModal = dynamic(() => import("./BookingModal"), { ssr: false });

export default function Header() {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close menus on page change (adjust state during render)
  const [prevPathname, setPrevPathname] = React.useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setActiveMenu(null);
    setExpandedMobileCategory(null);
  }

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
    { href: "/nodes/khopra-ridge-lodge", label: "Khopra Ridge Lodge", desc: "The destination high community eco-lodge." },
    { href: "/nodes/ghorepani-guide", label: "Ghorepani Village", desc: "Major tourist teahouse cluster." },
    { href: "/nodes/tadapani-guide", label: "Tadapani Node", desc: "Junction to Ghandruk & Bayeli." },
    { href: "/nodes/ulleri-village-guide", label: "Ulleri Village", desc: "Alternate ridge descent node." },
    { href: "/nodes/nayapul-transit-hub", label: "Nayapul Gateway", desc: "Main highway transfer checkpost." },
    { href: "/nodes/kimche-trailhead", label: "Kimche Trailhead", desc: "Walking starting point climb." },
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
    { href: "/weather/khopra-trek-march", label: "March Weather & Early Spring" },
    { href: "/weather/khopra-trek-april", label: "April Weather & Peak Bloom" },
    { href: "/weather/khopra-trek-may", label: "May Weather & Late Spring" },
    { href: "/weather/khopra-trek-october", label: "October Weather & Autumn Peak" },
    { href: "/weather/khopra-trek-november", label: "November Weather & High Clarity" },
    { href: "/planning/khayer-lake-mythology-pilgrimage", label: "Mythology & Pilgrimage" },
    { href: "/planning/khopra-trek-for-beginners", label: "Trek for Beginners" },
    { href: "/planning/pokhara-to-ghandruk", label: "Pokhara to Ghandruk Transport" },
    { href: "/travel-info/pokhara-lakeside", label: "Pokhara Lakeside Guide" },
    { href: "/planning/khopra-trek-solo", label: "Solo Traveler Guide" },
    { href: "/planning/khopra-trek-for-seniors", label: "Seniors Traveler Guide" },
    { href: "/safety/helicopter-rescue-evacuation", label: "Helicopter Rescue & Evacuation" }
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
    { href: "/guides/khopra-vs-annapurna-circuit", label: "Khopra vs Annapurna Circuit" },
    { href: "/routes/ghandruk-to-tadapani", label: "Ghandruk to Tadapani Trail Guide" },
    { href: "/viewpoints/best-offbeat-trek-nepal", label: "Best Offbeat Treks in Nepal" },
    { href: "/community/photographer-showcase", label: "Photographer Showcase" },
    { href: "/review-submission", label: "Submit Trek Review" },
    { href: "/booking-policies", label: "Booking & Cancellation Policies" },
    { href: "/checkout", label: "Secure Booking Inquiry" }
  ];

  const resourcesRoutes = [
    { href: "/routes/ghandruk-to-tadapani", label: "Day 2: Ghandruk to Tadapani" },
    { href: "/routes/tadapani-to-bayeli-kharka", label: "Day 3: Tadapani to Bayeli" },
    { href: "/routes/bayeli-kharka-to-chhistibung", label: "Day 4: Bayeli to Chhistibung" },
    { href: "/routes/chhistibung-to-khopra-ridge", label: "Day 5: Chhistibung to Khopra" },
    { href: "/routes/khopra-ridge-to-khayer-lake", label: "Day 6: Khopra to Khayer Lake" },
    { href: "/routes/khopra-ridge-to-swanta-village", label: "Day 7: Khopra to Swanta" },
    { href: "/routes/swanta-village-to-ghorepani", label: "Day 8: Swanta to Ghorepani" }
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
            <Image src="/logo.png" alt="Khopra Ridge Trek Logo" width={32} height={32} className="rounded-xl object-cover" />
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
                aria-haspopup="true"
                aria-expanded={activeMenu === "home"}
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
              <button 
                aria-haspopup="true"
                aria-expanded={activeMenu === "tours"}
                className={`flex items-center gap-1 hover:text-emerald-700 transition-colors py-2 focus:outline-none cursor-pointer ${pathname.startsWith("/tours") ? "text-emerald-600" : ""}`}
              >
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
                        <span className="block text-xs text-stone-600 mt-0.5 leading-snug">{t.desc}</span>
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
              <button 
                aria-haspopup="true"
                aria-expanded={activeMenu === "guides"}
                className={`flex items-center gap-1 hover:text-emerald-700 transition-colors py-2 focus:outline-none cursor-pointer ${pathname.startsWith("/guides") || pathname.startsWith("/viewpoints") ? "text-emerald-600" : ""}`}
              >
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
                        <span className="block text-xs text-stone-600 mt-0.5 leading-snug">{g.desc}</span>
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
              <button 
                aria-haspopup="true"
                aria-expanded={activeMenu === "villages"}
                className={`flex items-center gap-1 hover:text-emerald-700 transition-colors py-2 focus:outline-none cursor-pointer ${pathname.startsWith("/nodes") ? "text-emerald-600" : ""}`}
              >
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
                      <span className="block text-[11px] text-stone-600 mt-0.5 leading-snug">{v.desc}</span>
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
              <button 
                aria-haspopup="true"
                aria-expanded={activeMenu === "planning"}
                className={`flex items-center gap-1 hover:text-emerald-700 transition-colors py-2 focus:outline-none cursor-pointer ${pathname.startsWith("/planning") ? "text-emerald-600" : ""}`}
              >
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
                        <span className="block text-xs text-stone-600 mt-0.5 leading-snug">{p.desc}</span>
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
              <button 
                aria-haspopup="true"
                aria-expanded={activeMenu === "resources"}
                className={`flex items-center gap-1 hover:text-emerald-700 transition-colors py-2 focus:outline-none cursor-pointer ${pathname.startsWith("/community") || pathname.startsWith("/ecology") || pathname.includes("why-khopra") || pathname.includes("vs-mardi") || pathname.includes("offbeat-trek") || pathname.includes("dhaulagiri-views") || pathname.includes("checkout") || pathname.includes("booking-policies") || pathname.includes("review-submission") || pathname.includes("photographer-showcase") ? "text-emerald-600" : ""}`}
              >
                Resources
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "resources" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeMenu === "resources" && (
                <div className="absolute right-0 mt-0 w-[960px] rounded-3xl border border-stone-200 bg-white p-6 shadow-2xl ring-1 ring-black/5 grid grid-cols-4 gap-6 z-50">
                  
                  {/* Col 1: Prep & Altitudes */}
                  <div className="space-y-3">
                    <span className="block text-[10px] font-extrabold uppercase tracking-widest text-emerald-600 border-b border-stone-100 pb-1.5">Prep &amp; Altitudes</span>
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
                    <span className="block text-[10px] font-extrabold uppercase tracking-widest text-emerald-600 border-b border-stone-100 pb-1.5">Community &amp; Ecology</span>
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
                    <span className="block text-[10px] font-extrabold uppercase tracking-widest text-emerald-600 border-b border-stone-100 pb-1.5">Guides &amp; Bookings</span>
                    <div className="flex flex-col gap-2">
                      {resourcesGuides.map((item) => (
                        <Link key={item.href} href={item.href} className="text-xs text-stone-600 hover:text-emerald-600 font-bold transition">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Col 4: Day-by-Day Routes */}
                  <div className="space-y-3">
                    <span className="block text-[10px] font-extrabold uppercase tracking-widest text-emerald-600 border-b border-stone-100 pb-1.5">Route Segments</span>
                    <div className="flex flex-col gap-2">
                      {resourcesRoutes.map((item) => (
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
              aria-label="Open navigation menu"
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
                  <Image src="/logo.png" alt="Khopra Ridge Trek Logo" width={28} height={28} className="rounded-lg object-cover" />
                  <span>KhopraRidgeTrek</span>
                </Link>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close navigation menu"
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
                    aria-expanded={expandedMobileCategory === "tours"}
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
                    aria-expanded={expandedMobileCategory === "guides"}
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
                    aria-expanded={expandedMobileCategory === "villages"}
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
                    aria-expanded={expandedMobileCategory === "planning"}
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
                    aria-expanded={expandedMobileCategory === "resources"}
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
                          <Link key={item.href} href={item.href} className="block py-0.5 text-xs text-stone-600 hover:text-emerald-600">
                            {item.label}
                          </Link>
                        ))}
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] font-extrabold uppercase text-emerald-600 tracking-widest block">Community &amp; Ecology</span>
                        {resourcesCommunity.map((item) => (
                          <Link key={item.href} href={item.href} className="block py-0.5 text-xs text-stone-600 hover:text-emerald-600">
                            {item.label}
                          </Link>
                        ))}
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] font-extrabold uppercase text-emerald-600 tracking-widest block">Guides &amp; Bookings</span>
                        {resourcesGuides.map((item) => (
                          <Link key={item.href} href={item.href} className="block py-0.5 text-xs text-stone-600 hover:text-emerald-600">
                            {item.label}
                          </Link>
                        ))}
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] font-extrabold uppercase text-emerald-600 tracking-widest block">Route Segments</span>
                        {resourcesRoutes.map((item) => (
                          <Link key={item.href} href={item.href} className="block py-0.5 text-xs text-stone-600 hover:text-emerald-600">
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
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
