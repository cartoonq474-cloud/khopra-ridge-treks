import React from "react";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      icon: "🤝",
      title: "100% Direct Local Impact",
      desc: "Unlike standard commercial teahouses, every dollar spent on our community lodges directly funds local school teacher salaries, community clinics, and infrastructure in the Magar villages."
    },
    {
      icon: "🌱",
      title: "Eco-Conscious Trekking",
      desc: "We practice sustainable waste management, minimize single-use plastics, and source our food ingredients from organic farms along the route."
    },
    {
      icon: "🏔️",
      title: "True Cultural Exchange",
      desc: "Our itineraries are designed to foster respectful interactions with indigenous Gurung and Magar communities, preserving heritage while creating sustainable local jobs."
    }
  ];

  const milestones = [
    { year: "2002", title: "Project Inception", desc: "Local communities and social entrepreneurs, led by Mahabir Pun, began establishing community lodges as an alternative to commercial teahouses." },
    { year: "2010", title: "Trail Expansion", desc: "The route was officially mapped and recognized by the Annapurna Conservation Area Project (ACAP), connecting Swanta, Chhistibung, and the high Khopra ridge." },
    { year: "2018", title: "Digital Connection", desc: "Mountain Wi-Fi towers were installed, funded entirely by lodge profits, connecting remote clinics to telemedicine networks in Kathmandu." },
    { year: "Today", title: "A Model for Eco-Tourism", desc: "Operating 6 community-owned lodges that support over 1,200 local households and fund three community schools." }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen antialiased">
      
      {/* Hero Section */}
      <section className="relative bg-emerald-950 py-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent)]" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Our Story</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl leading-tight">
            Pioneering Community-Owned <br />
            <span className="text-emerald-400">Eco-Tourism</span>
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-emerald-100/80 leading-relaxed font-medium">
            We believe that mountain tourism should enrich the communities who call the Himalayas home, not exploit them.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx-auto max-w-5xl px-6 py-20">
        
        {/* Core Mission */}
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight">
              A Trek with a Higher Purpose
            </h2>
            <p className="text-stone-600 leading-relaxed font-medium">
              The Khopra Ridge Trek is not just a path to high-altitude viewpoints; it is a live community cooperative project. Developed as an offbeat alternative to standard routes like Poon Hill or Mardi Himal, this trek was created specifically to bring sustainable income to remote mountain villages that do not lie on mainstream routes.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Every community lodge is collectively owned and operated by a village committee. This means that 100% of accommodation profits stay directly inside the local valley to pay for schoolteachers' salaries, maintain health clinics, and build mountain trails.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl border border-stone-200 bg-white p-8 space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-3xl">🎒</span>
              <div>
                <h4 className="font-extrabold text-stone-950 text-base">Direct School Funding</h4>
                <p className="text-stone-500 text-xs mt-1">Lodge income directly finances English-medium teachers in Swanta and Nangi.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-3xl">🩺</span>
              <div>
                <h4 className="font-extrabold text-stone-950 text-base">Rural Healthcare Support</h4>
                <p className="text-stone-500 text-xs mt-1">Lodge profits guarantee supplies and nurse salaries for remote community clinics.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-3xl">📶</span>
              <div>
                <h4 className="font-extrabold text-stone-950 text-base">Mountain Telemedicine</h4>
                <p className="text-stone-500 text-xs mt-1">Lodge profits fund solar-powered wireless networks for rescue and medical calls.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-24 space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight">Our Core Values</h2>
            <p className="mt-4 text-stone-600 font-medium">How we maintain the highest standards of eco-tourism and social support.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((v, idx) => (
              <div key={idx} className="bg-white border border-stone-200 rounded-3xl p-8 shadow-sm space-y-4 hover:shadow-md transition">
                <span className="text-4xl block">{v.icon}</span>
                <h3 className="text-lg font-bold text-stone-950">{v.title}</h3>
                <p className="text-stone-500 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Timeline */}
        <div className="mt-24 space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight">Our Journey</h2>
            <p className="mt-4 text-stone-600 font-medium">From a local community dream to a benchmark for global eco-tourism.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative bg-white border border-stone-200 rounded-2xl p-6 shadow-sm">
                <span className="absolute top-4 right-4 text-xs font-black text-emerald-600/20 text-3xl">{m.year}</span>
                <span className="inline-block rounded-lg bg-emerald-50 text-emerald-700 font-extrabold text-xs px-2.5 py-1 mb-4">{m.year}</span>
                <h3 className="text-sm font-bold text-stone-950">{m.title}</h3>
                <p className="text-[11px] text-stone-500 mt-2 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-24 rounded-3xl bg-stone-950 p-10 text-white border border-white/5 shadow-2xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.1),transparent)]" />
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold">Be Part of the Story</h2>
            <p className="text-stone-400 text-sm leading-relaxed">
              When you hike the quiet forests, sleep in community lodges, and stand before the Annapurna panorama, you become a direct supporter of our social venture. Join us in making mountain travel sustainable.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link href="/tours" className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-all">
                Browse Trek Packages
              </Link>
              <Link href="/contact" className="rounded-full bg-white/10 border border-white/10 px-6 py-3 text-sm font-bold text-white hover:bg-white/20 transition-all">
                Contact Booking Office
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
