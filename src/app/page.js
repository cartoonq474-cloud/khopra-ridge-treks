import React from "react";
import Image from "next/image";
import Link from "next/link";

import HeroSection from "@/components/home/HeroSection";
import TrekSpecsSection from "@/components/home/TrekSpecsSection";
import AccommodationDifficultySection from "@/components/home/AccommodationDifficultySection";
import ItinerarySection from "@/components/home/ItinerarySection";
import CoverageSection from "@/components/home/CoverageSection";
import CultureFoodSection from "@/components/home/CultureFoodSection";
import PackingListSection from "@/components/home/PackingListSection";
import PermitSection from "@/components/home/PermitSection";
import TypicalDaySection from "@/components/home/TypicalDaySection";
import WhyBookWithUs from "@/components/home/WhyBookWithUs";
import PricingSection from "@/components/home/PricingSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import FaqSection from "@/components/home/FaqSection";
import BookingSection from "@/components/home/BookingSection";

export const metadata = {
  alternates: {
    canonical: "/",
  },
  title: "Khopra Ridge Trek | Nirvana Trails",
  description: "Discover the uncrowded wonders of the Annapurna region on the Khopra Ridge Trek. Sacred alpine lakes, community lodges, and dramatic 360-degree views of Dhaulagiri.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      {/* QUICK INFO GRID */}
      <section className="mx-auto -mt-8 max-w-7xl px-6 relative z-20">
        <div className="grid grid-cols-2 gap-4 rounded-3xl border border-stone-200 bg-white p-6 shadow-xl shadow-stone-100 sm:grid-cols-4 md:p-8">
          {[
            { label: "Duration", val: "9 Days" },
            { label: "Max Altitude", val: "4,660 m" },
            { label: "Difficulty", val: "Moderate - Strenuous" },
            { label: "Lodges", val: "Community-Owned" }
          ].map((stat, i) => (
            <div key={i} className="text-center sm:text-left sm:border-r border-stone-100 last:border-none last:pr-0 sm:pr-8">
              <span className="text-xs font-semibold text-stone-400 uppercase tracking-widest">{stat.label}</span>
              <p className="mt-1 text-lg font-bold text-stone-900 sm:text-2xl">{stat.val}</p>
            </div>
          ))}
        </div>
      </section>

      

      <TrekSpecsSection />

      {/* PHYSICAL PREPARATION & AMS SAFETY GUIDE */}
      <section className="py-24 bg-white border-t border-stone-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-100/50 px-3 py-1.5 rounded-full">Safety First</span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
              Physical Preparation &amp; Altitude Guide
            </h2>
            <p className="mt-4 text-stone-500 text-base max-w-2xl mx-auto font-medium">
              Reaching Khayer Lake (4,660m) is a serious high-altitude endeavor. Read our recommended training timeline and guide to Acute Mountain Sickness (AMS).
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            
            {/* CARD 1: Physical Training Regimen */}
            <div className="rounded-3xl border border-stone-200 bg-stone-50 p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="border-b border-stone-200 pb-5 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">4-8 Week Training Plan</h3>
                    <span className="text-xs text-stone-400 font-bold">Suggested regimen for a comfortable trek</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="block text-stone-900 text-sm">Aerobic Conditioning (Weeks 1-4)</strong>
                      <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                        Aim for 3-4 sessions per week of cardiovascular exercises. Focus on running, cycling, or swimming for 30-45 minutes at a moderate heart rate to build baseline lung capacity.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="block text-stone-900 text-sm">Incline Strength &amp; Stair Climbing (Weeks 5-8)</strong>
                      <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                        Himalayan trails are filled with stone steps. Train on stairclimbers or hike steep local hills with a loaded 5kg daypack to condition your quads, calves, and lower back.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="block text-stone-900 text-sm">Leg &amp; Core Endurance</strong>
                      <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                        Incorporate bodyweight squats, lunges, step-ups, and planks into your weekly schedule to build core stability and joint resilience for descending steep trails.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-200 text-stone-500 text-xs font-medium">
                <span>Pro Tip: Break in your trekking boots at least a month before departure to avoid blisters!</span>
              </div>
            </div>

            {/* CARD 2: AMS Altitude Safety Guide */}
            <div className="rounded-3xl border border-emerald-100 bg-[#0e1e1a] text-white p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="border-b border-white/10 pb-5 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-emerald-400">Altitude Safety &amp; AMS</h3>
                    <span className="text-xs text-emerald-300/60 font-bold">Understanding high altitude challenges</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="h-6 w-6 rounded-full bg-emerald-900/80 text-emerald-300 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</span>
                    <div>
                      <strong className="block text-white text-sm">Gradual Acclimatization Profile</strong>
                      <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                        Our itinerary stays multiple nights at 3,000m+ before attempting the climb to Khayer Lake (4,660m) on Day 6. This gradual ascent schedule naturally helps your body produce oxygen-carrying red blood cells.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="h-6 w-6 rounded-full bg-emerald-900/80 text-emerald-300 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</span>
                    <div>
                      <strong className="block text-white text-sm">Prevention Rules: Hydration &amp; Pace</strong>
                      <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                        Drink 4-5 liters of water daily to combat high-altitude dehydration. Hike at a slow, comfortable pace ('bistarey, bistarey' in Nepali) without exhausting your muscles.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="h-6 w-6 rounded-full bg-emerald-900/80 text-emerald-300 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</span>
                    <div>
                      <strong className="block text-white text-sm">Recognizing Early Symptoms</strong>
                      <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                        Notify your guide immediately if you experience a persistent headache, dizziness, loss of appetite, or difficulty sleeping. Early communication prevents mild symptoms from turning into severe altitude sickness.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 text-emerald-400 text-xs font-semibold">
                <span>Our guides carry oximeters and first-aid kits, and monitor oxygen levels daily.</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      

      <ItinerarySection />

      <CoverageSection />

      <PackingListSection />

      <TypicalDaySection />

      <PermitSection />

      {/* VIEWPOINTS & MOUNTAINS SHOWCASE */}
      <section id="mountains" className="py-24 bg-stone-900 text-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <span className="text-sm font-bold text-emerald-400 uppercase tracking-widest">Himalayan Panoramas</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Mountains Visible from the Ridge
            </h2>
            <p className="mt-4 text-stone-400">
              Standing at <Link href="/" className="text-emerald-700 underline font-semibold hover:text-emerald-600">Khopra Ridge</Link> (3,660m) places you directly opposite Dhaulagiri, creating a visual corridor of snow-capped peaks.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { 
                name: "Dhaulagiri I", 
                alt: "8,167 m", 
                image: "/dhaulagiri.png",
                desc: "The seventh-highest mountain in the world, dominating the western horizon." 
              },
              { 
                name: "Annapurna South", 
                alt: "7,219 m", 
                image: "/annapurna-south.png",
                desc: "Hovering directly above the ridge, towering over Khayer Lake." 
              },
              { 
                name: "Nilgiri", 
                alt: "7,061 m", 
                image: "/nilgiri.png",
                desc: "A beautiful group of three peaks glowing gold during sunset." 
              },
              { 
                name: "Machhapuchhre", 
                alt: "6,993 m", 
                image: "/machhapuchhre.png",
                desc: "The iconic sacred fish-tail mountain visible from the lower sections." 
              }
            ].map((peak, idx) => (
              <div 
                key={idx} 
                className="group rounded-3xl bg-stone-950 border border-white/10 overflow-hidden hover:border-emerald-500 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-950/20 flex flex-col"
              >
                {/* Image Section with Zoom Effect */}
                <div className="relative h-48 overflow-hidden bg-stone-900">
                  <Image 
                    src={peak.image} 
                    alt={peak.name} 
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-60" />
                  
                  {/* Floating altitude tag */}
                  <span className="absolute top-4 right-4 bg-emerald-600/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold text-white tracking-widest uppercase">
                    {peak.alt}
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-emerald-400 transition-colors duration-300">
                      {peak.name}
                    </h3>
                    <p className="mt-3 text-sm text-stone-400 leading-relaxed">
                      {peak.desc}
                    </p>
                  </div>
                  
                  {/* Action Link to subpages if applicable */}
                  <div className="mt-6 flex items-center justify-between text-xs font-bold text-emerald-400/80 group-hover:text-emerald-400 transition-colors duration-300">
                    <span>Peak Profile</span>
                    <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CultureFoodSection />

      {/* VISIONS OF KHOPRA GALLERY */}
      <section className="py-24 bg-[#faf9f5]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-100/50 px-3 py-1.5 rounded-full">A Visual Journey</span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
              Visions of Khopra
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            
            {/* Left Image: Khopra Ridge View */}
            <div className="md:col-span-6 group relative rounded-3xl overflow-hidden shadow-md h-[450px] bg-stone-100 border border-stone-200">
              <Image 
                src="/khopra-ridge-view.png" 
                alt="Sunset panoramic view of Dhaulagiri from Khopra Ridge" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-90 transition-all duration-300 flex flex-col justify-end p-6 z-10" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 text-white transform translate-y-4 group-hover:translate-y-0 z-20">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400">The Panorama Summit</span>
                <h4 className="text-xl font-bold mt-1">Khopra Ridge Vantage (3,660m)</h4>
                <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                  A spectacular 360-degree overlook offering close-up sunset vistas of the massive Dhaulagiri range.
                </p>
              </div>
            </div>

            {/* Middle Column: Two Stacked Images */}
            <div className="md:col-span-3 flex flex-col gap-4">
              
              {/* Top: Swanta Village */}
              <div className="group relative rounded-3xl overflow-hidden shadow-md h-[217px] bg-stone-100 border border-stone-200">
                <Image 
                  src="/swanta-village.png" 
                  alt="Magar farming village of Swanta" 
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-90 transition-all duration-300 flex flex-col justify-end p-4 z-10" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 text-white transform translate-y-4 group-hover:translate-y-0 z-20">
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-emerald-400">Community Valley Hub</span>
                  <h4 className="text-sm font-bold mt-0.5">Swanta Village (2,200m)</h4>
                  <p className="text-[10px] text-stone-300 mt-1 leading-relaxed">
                    A traditional Magar farming settlement where lodge proceeds fund local high school teachers.
                  </p>
                </div>
              </div>

              {/* Bottom: Forest Trail */}
              <div className="group relative rounded-3xl overflow-hidden shadow-md h-[217px] bg-stone-100 border border-stone-200">
                <Image 
                  src="/forest-trail.png" 
                  alt="Lush mossy rhododendron trail" 
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-90 transition-all duration-300 flex flex-col justify-end p-4 z-10" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 text-white transform translate-y-4 group-hover:translate-y-0 z-20">
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-emerald-400">Silent Wilderness</span>
                  <h4 className="text-sm font-bold mt-0.5">Primal Rhododendron Forests</h4>
                  <p className="text-[10px] text-stone-300 mt-1 leading-relaxed">
                    Hike through isolated forests under towering trees, completely removed from crowded trekking routes.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Image: Khayer Lake */}
            <div className="md:col-span-3 group relative rounded-3xl overflow-hidden shadow-md h-[450px] bg-stone-100 border border-stone-200">
              <Image 
                src="/khayer-lake.png" 
                alt="Sacred alpine Khayer Lake" 
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-90 transition-all duration-300 flex flex-col justify-end p-6 z-10" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 text-white transform translate-y-4 group-hover:translate-y-0 z-20">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400">Pilgrimage Shrine</span>
                <h4 className="text-base font-bold mt-1">Sacred Khayer Lake (4,660m)</h4>
                <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                  Deep alpine waters sitting directly beneath Annapurna South's giant vertical glaciated walls.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <AccommodationDifficultySection />

      {/* THE COMMUNITY LODGE DIFFERENCE */}
      <section id="community" className="py-24 mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest">Sustainable Travel</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
              What is the Community Lodge Difference?
            </h2>
            <p className="mt-6 text-stone-600 leading-relaxed">
              Unlike traditional teahouse treks in Nepal where lodges are privately owned, the lodges along the Khopra Ridge route are community-owned. 
            </p>
            <p className="mt-4 text-stone-600 leading-relaxed">
              All profits generated from your accommodation and meals go directly to local schools, village health posts, and sustainable agriculture initiatives in Swanta and neighboring Magar villages. By booking this trek, you directly support local education and valley development.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm">✓</span>
                <span className="text-sm font-bold text-stone-800">100% Local Reinvestment</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm">✓</span>
                <span className="text-sm font-bold text-stone-800">Preserved Cultural Exchange</span>
              </div>
            </div>
          </div>

          <div className="bg-stone-100 rounded-3xl p-8 border border-stone-200">
            <h3 className="text-lg font-bold text-stone-950">A Typical Day on the Trail</h3>
            <ul className="mt-6 flex flex-col gap-4 text-sm text-stone-600">
              <li className="flex gap-3">
                <strong className="text-emerald-700">07:00 AM:</strong>
                <span>Warm breakfast of local porridge and farm eggs.</span>
              </li>
              <li className="flex gap-3">
                <strong className="text-emerald-700">08:00 AM:</strong>
                <span>Start hiking along quiet, uncrowded forest trails.</span>
              </li>
              <li className="flex gap-3">
                <strong className="text-emerald-700">01:00 PM:</strong>
                <span>Lunch stop at a high-elevation alpine pasture lodge.</span>
              </li>
              <li className="flex gap-3">
                <strong className="text-emerald-700">04:00 PM:</strong>
                <span>Arrive at the ridge lodge, watch the sunset over Dhaulagiri.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CULTURAL ETIQUETTE & CODE OF CONDUCT */}
      <section className="py-24 bg-white border-t border-stone-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-100/50 px-3 py-1.5 rounded-full">Responsible Tourism</span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
              Code of Conduct &amp; Etiquette
            </h2>
            <p className="mt-4 text-stone-500 text-base max-w-2xl mx-auto font-medium">
              Sustainability is a two-way street. Respect the local culture and protect the high-altitude Annapurna ecosystem during your trek.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            
            {/* Cultural Etiquette Card */}
            <div className="bg-stone-50 border border-stone-200 rounded-3xl p-8 shadow-sm">
              <div className="border-b border-stone-200 pb-5 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900">Magar &amp; Gurung Etiquette</h3>
                  <span className="text-xs text-stone-400 font-bold">Respecting mountain host communities</span>
                </div>
              </div>
              <ul className="space-y-4 text-xs text-stone-600 leading-relaxed font-medium">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-700 text-sm mt-0.5">•</span>
                  <span><strong>Ask Before Photographing:</strong> Always request permission politely before taking photos of local villagers, children, or their personal property.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-700 text-sm mt-0.5">•</span>
                  <span><strong>Dress Modestly:</strong> Cover shoulders and knees when visiting villages, shrines, or schools. Avoid revealing clothing as a sign of respect.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-700 text-sm mt-0.5">•</span>
                  <span><strong>Temple Protocols:</strong> Walk clockwise around chortens, mani walls, and shrines. Remove shoes and leather items before entering sacred temples.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-700 text-sm mt-0.5">•</span>
                  <span><strong>Two-Hand Respect:</strong> Use both hands when giving or receiving money, food, or gifts. It is a traditional sign of gratitude and respect.</span>
                </li>
              </ul>
            </div>

            {/* Leave No Trace Card */}
            <div className="bg-[#0e1e1a] text-white border border-emerald-950 rounded-3xl p-8 shadow-sm">
              <div className="border-b border-white/10 pb-5 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-emerald-400">Leave No Trace Rules</h3>
                  <span className="text-xs text-emerald-300/60 font-bold">Protecting the Annapurna ecosystem</span>
                </div>
              </div>
              <ul className="space-y-4 text-xs text-stone-300 leading-relaxed font-medium">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 text-sm mt-0.5">•</span>
                  <span><strong>No Single-Use Plastics:</strong> Commercial plastic water bottles are banned in the conservation zone. Use water purification tablets and refilled bottles.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 text-sm mt-0.5">•</span>
                  <span><strong>Battery &amp; Tech Waste:</strong> High-altitude villages do not have chemical waste disposal. Pack out used batteries, power banks, and electronics to cities.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 text-sm mt-0.5">•</span>
                  <span><strong>Stay on the Trail:</strong> Stick strictly to mapped pathways. Shortcuts on steep mountain slopes cause severe soil erosion during the monsoon season.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 text-sm mt-0.5">•</span>
                  <span><strong>Pack Out Personal Trash:</strong> Never throw wrappers, tissues, or trash on the trail. Keep all waste in a bag inside your pack and dispose of it at the next lodge.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      

      <WhyBookWithUs />

      <PricingSection />

      <ReviewsSection />

      <FaqSection />

      <BookingSection />
    </main>
  );
}
