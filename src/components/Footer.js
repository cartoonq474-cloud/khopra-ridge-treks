"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-950 py-16 text-stone-400 border-t border-white/5 mt-auto">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Main Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5 pb-12 border-b border-white/5">
          
          {/* Column 1: Company Profile */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="text-xl font-black text-white flex items-center gap-2">
              <img src="/logo.png" alt="Khopra Ridge Trek Logo" className="h-8 w-8 rounded-xl object-cover" />
              <span>KhopraRidgeTrek</span>
            </Link>
            <p className="text-xs text-stone-500 leading-relaxed max-w-sm">
              Pioneering community-owned eco-tourism circuits in the Annapurna foothills. 100% of lodge accommodation profits directly fund Magar village schools, clinics, and local infrastructure.
            </p>
            <div className="text-xs space-y-1.5 pt-2">
              <span className="block text-stone-500">
                Licensing: <strong className="text-stone-300 font-semibold">Nepal Tourism Operator License #8928-091</strong>
              </span>
              <span className="block text-stone-500">
                Contact: <a href="mailto:khopraridge51@gmail.com" className="text-stone-300 hover:text-emerald-400 font-semibold transition">khopraridge51@gmail.com</a>
              </span>
              <span className="block text-stone-500">
                Location: Ekata Basti Marg, Kathmandu 44600, Nepal
              </span>
            </div>
          </div>

          {/* Column 2: Our Tours */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">Our Tours</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/tours/khayer-lake-trek" className="hover:text-emerald-400 transition-colors">
                  Sacred Khayer Lake
                </Link>
              </li>
              <li>
                <Link href="/tours/khopra-poon-hill-trek" className="hover:text-emerald-400 transition-colors">
                  Poon Hill &amp; Khopra
                </Link>
              </li>
              <li>
                <Link href="/tours/khopra-mohare-danda-trek" className="hover:text-emerald-400 transition-colors">
                  Mohare Danda Offbeat
                </Link>
              </li>
              <li className="pt-1 border-t border-white/5">
                <Link href="/tours" className="hover:text-emerald-400 font-bold transition-colors">
                  All Tours &amp; Packages →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resource Hub */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">Resources</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/guides/khopra-ridge-ultimate-guide" className="hover:text-emerald-400 transition-colors">
                  Ultimate Trek Guide
                </Link>
              </li>
              <li>
                <Link href="/guides/khayer-lake-ultimate-guide" className="hover:text-emerald-400 transition-colors">
                  Sacred Lake Planner
                </Link>
              </li>
              <li>
                <Link href="/planning/khopra-trek-cost" className="hover:text-emerald-400 transition-colors">
                  Trek Cost Calculator
                </Link>
              </li>
              <li>
                <Link href="/planning/khopra-trek-permits" className="hover:text-emerald-400 transition-colors">
                  ACAP &amp; TIMS Permits
                </Link>
              </li>
              <li>
                <Link href="/planning/packing-checklist" className="hover:text-emerald-400 transition-colors">
                  Interactive Packing List
                </Link>
              </li>
              <li>
                <Link href="/planning/teahouse-locator" className="hover:text-emerald-400 transition-colors">
                  Teahouse Finder &amp; DB
                </Link>
              </li>
              <li>
                <Link href="/altitude/khopra-ridge-elevation" className="hover:text-emerald-400 transition-colors">
                  Elevation &amp; Altitude Chart
                </Link>
              </li>
              <li>
                <Link href="/routes/ghandruk-to-tadapani" className="hover:text-emerald-400 transition-colors">
                  Ghandruk to Tadapani Route
                </Link>
              </li>
              <li>
                <Link href="/weather/khopra-trek-october" className="hover:text-emerald-400 transition-colors">
                  October Weather Guide
                </Link>
              </li>
              <li>
                <Link href="/viewpoints/khopra-vs-poon-hill-views" className="hover:text-emerald-400 transition-colors">
                  Khopra vs Poon Hill
                </Link>
              </li>
              <li>
                <Link href="/viewpoints/muldai-viewpoint-guide" className="hover:text-emerald-400 transition-colors">
                  Muldai Viewpoint Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Village Nodes */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">Village Nodes</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/nodes/ghandruk-village-guide" className="hover:text-emerald-400 transition-colors">
                  Ghandruk Village
                </Link>
              </li>
              <li>
                <Link href="/nodes/swanta-village-guide" className="hover:text-emerald-400 transition-colors">
                  Swanta Village
                </Link>
              </li>
              <li>
                <Link href="/nodes/bayeli-kharka-guide" className="hover:text-emerald-400 transition-colors">
                  Bayeli Kharka
                </Link>
              </li>
              <li>
                <Link href="/nodes/chhistibung-guide" className="hover:text-emerald-400 transition-colors">
                  Chhistibung Node
                </Link>
              </li>
              <li>
                <Link href="/nodes/ghorepani-guide" className="hover:text-emerald-400 transition-colors">
                  Ghorepani Village
                </Link>
              </li>
              <li>
                <Link href="/nodes/tadapani-guide" className="hover:text-emerald-400 transition-colors">
                  Tadapani Node
                </Link>
              </li>
              <li className="pt-1 border-t border-white/5">
                <Link href="/nodes" className="hover:text-emerald-400 font-bold transition-colors">
                  All Villages &amp; Hubs →
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-600">
          <p>© {new Date().getFullYear()} Khopra Ridge Trek. All rights reserved. Nepal Tourism Operator License #8928-091.</p>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-stone-400 transition-colors">Return to Homepage</Link>
            <Link href="/about" className="hover:text-stone-400 transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-stone-400 transition-colors">Contact Us</Link>
            <Link href="/privacy-policy" className="hover:text-stone-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-stone-400 transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-stone-400 transition-colors font-semibold">Sitemap</Link>
            <Link href="/all-pages" className="hover:text-stone-400 transition-colors font-semibold text-emerald-400">All Pages</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
