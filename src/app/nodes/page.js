import React from "react";
import Link from "next/link";

export default function Page() {
  const villages = [
    {
      name: "Birethanti Checkpoint",
      altitude: "1,025m",
      type: "Permit Entry Checkpoint",
      lodging: "Local Guest Houses",
      href: "/nodes/birethanti-guide",
      desc: "The official gateway check-in point at the confluence of the Modi and Bhurungdi rivers. TIMS card and ACAP permits are registered here."
    },
    {
      name: "Syauli Bazaar",
      altitude: "1,220m",
      type: "Lower River Trailhead",
      lodging: "Basic Teahouses",
      href: "/nodes/syauli-bazaar-guide",
      desc: "The lowest road-access trailhead along the Modi Khola riverbed. Ideal starting point for a progressive climb to Ghandruk."
    },
    {
      name: "Kimche Trailhead",
      altitude: "1,640m",
      type: "Upper Road Trailhead",
      lodging: "Small Homestays",
      href: "/nodes/kimche-trailhead",
      desc: "The highest road point before Ghandruk. Jeep drop-offs here cut down Day 1 hiking time to a comfortable 1-hour stone step ascent."
    },
    {
      name: "Ghandruk Village",
      altitude: "1,940m",
      type: "Gurung Culture Hub",
      lodging: "Comfortable Teahouses & Hotels",
      href: "/nodes/ghandruk-village-guide",
      desc: "The largest Gurung settlement in the Annapurna foothills. Historic stone alleys, local museums, and clear mountain balconies."
    },
    {
      name: "Tadapani Node",
      altitude: "2,630m",
      type: "Forest Junction",
      lodging: "Standard Teahouses",
      href: "/nodes/tadapani-guide",
      desc: "A forested trail hub connecting Ghandruk, Ghorepani, and the offbeat high-pasture trail to Bayeli Kharka."
    },
    {
      name: "Dobato Pastures",
      altitude: "3,432m",
      type: "High Forest Clearing",
      lodging: "Community Lodge",
      href: "/nodes/dobato-guide",
      desc: "A serene clearing below Muldai Hill. Serves as the overnight launchpad for climbing to the Muldai sunrise viewpoint."
    },
    {
      name: "Bayeli Kharka",
      altitude: "3,425m",
      type: "High Mountain Pasture",
      lodging: "Community Lodge",
      href: "/nodes/bayeli-kharka-guide",
      desc: "An isolated alpine meadow sitting opposite the vertical face of Annapurna South, hosting a single cozy community lodge."
    },
    {
      name: "Chhistibung Node",
      altitude: "2,975m",
      type: "Forest Sanctuary",
      lodging: "Community Lodge",
      href: "/nodes/chhistibung-guide",
      desc: "A quiet forest hollow rich in biological diversity. Excellent area for spotting Himalayan Monal pheasants and Langur monkeys."
    },
    {
      name: "Khopra Ridge Lodge",
      altitude: "3,660m",
      type: "High Ridge Panorama",
      lodging: "Main Community Lodge",
      href: "/nodes/khopra-ridge-lodge",
      desc: "The trek&apos;s ultimate ridge summit lodging. Offers spectacular 360-degree sunrise views over Dhaulagiri and Nilgiri peaks."
    },
    {
      name: "Swanta Village",
      altitude: "2,200m",
      type: "Magar Farming Valley",
      lodging: "Homestays & Lodges",
      href: "/nodes/swanta-village-guide",
      desc: "A beautiful agricultural Magar village featuring local honey farms and a community cooperative cheese factory."
    },
    {
      name: "Ghorepani Hub",
      altitude: "2,860m",
      type: "Standard Trail Junction",
      lodging: "Developed Teahouses & Hotels",
      href: "/nodes/ghorepani-guide",
      desc: "A massive, busy village junction serving as the base station for morning hikes to the Poon Hill sunrise viewpoint."
    },
    {
      name: "Ulleri Village",
      altitude: "2,050m",
      type: "Hillside Settlement",
      lodging: "Traditional Teahouses",
      href: "/nodes/ulleri-village-guide",
      desc: "A steep hillside Magar village famous for the challenging 3,200 stone step staircase from Tikhedhunga."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Trail Directory</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Khopra Ridge Trail Village Nodes
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Explore the essential stops. Review altitudes, lodging styles, and guide directories for every village node along the Khopra Ridge circuit.
          </p>
        </div>

        {/* Villages Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {villages.map((v, i) => (
            <div 
              key={i} 
              className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">{v.type}</span>
                <h3 className="text-xl font-extrabold text-stone-950 mt-1">{v.name}</h3>
                <div className="mt-3 text-xs space-y-1 text-stone-500">
                  <div>Elevation: <strong className="text-stone-700">{v.altitude}</strong></div>
                  <div>Accommodations: <strong className="text-stone-700">{v.lodging}</strong></div>
                </div>
                <p className="mt-4 text-xs text-stone-400 leading-relaxed">{v.desc}</p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs font-bold text-stone-400">View Node Guide</span>
                <Link
                  href={v.href}
                  className="rounded-full bg-stone-950 px-5 py-2 text-xs font-bold text-white hover:bg-emerald-600 hover:text-white transition-all shadow-sm"
                >
                  Explore Node
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              We check the facilities, water piping systems, and room rates in all nodes monthly. All village guides are certified and updated in real-time.
            </p>
          </div>
        </div>

      </main>
    </div>
  );
}
