import React from "react";
import Link from "next/link";

export default function Page() {
  const comparison = [
    {
      type: "Commercial Teahouses",
      locations: "Ghandruk, Ghorepani, Tadapani",
      facilities: "Attached bathrooms, hot solar/gas showers, stable electric charging, high-speed fiber Wi-Fi.",
      pricing: "$8 - $15 USD per night for twin-bed rooms.",
      prosCons: "Very comfortable and highly developed, but can become crowded and noisy during peak seasons."
    },
    {
      type: "Community Lodges",
      locations: "Bayeli Kharka, Chhistibung, Swanta, Khopra Ridge",
      facilities: "Shared bucket showers, solar-powered charging in dining halls, limited cellular signal and Wi-Fi.",
      pricing: "$5 - $8 USD per night (requires dining at the lodge).",
      prosCons: "Authentic wilderness experience, profits directly fund local schools, but very basic amenities."
    }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center gap-2 text-xs text-stone-500 font-semibold">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/planning/khopra-trek-itinerary" className="hover:text-emerald-600 transition-colors">Itineraries</Link>
          <span>/</span>
          <span className="text-stone-800">Teahouses</span>
        </div>

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Planning Resource</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Teahouses on the Khopra Ridge Trek
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Lodging standards mapped out. Compare the developed commercial teahouses in Ghandruk and Ghorepani with the remote, community-owned mountain lodges.
          </p>
        </div>

        {/* Overview */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-stone-950">Accommodations on the Trail</h2>
          <p>One of the greatest features of the Khopra Ridge circuit is the diverse accommodation network. You will start and end your trek in highly developed tourist villages with modern comforts, while spending the middle days in remote wilderness community lodges.
          </p>
          <p>Understanding the transition between these two types of lodging is essential for packing, budgeting, and setting expectations for your trek.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Commercial Teahouses vs. Community Lodges</h3>
          <div className="overflow-x-auto rounded-3xl border border-stone-200">
            <table className="w-full border-collapse bg-white text-left text-xs">
              <thead className="bg-stone-50 text-stone-700 font-bold uppercase tracking-wider border-b border-stone-200">
                <tr>
                  <th className="px-6 py-4">Lodge System</th>
                  <th className="px-6 py-4">Key Locations</th>
                  <th className="px-6 py-4">Facility Standards</th>
                  <th className="px-6 py-4">Avg. Cost</th>
                  <th className="px-6 py-4">Pacing Analysis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-500">
                {comparison.map((comp, i) => (
                  <tr key={i} className="hover:bg-stone-50">
                    <td className="px-6 py-4 font-bold text-stone-900">{comp.type}</td>
                    <td className="px-6 py-4">{comp.locations}</td>
                    <td className="px-6 py-4 leading-relaxed">{comp.facilities}</td>
                    <td className="px-6 py-4">{comp.pricing}</td>
                    <td className="px-6 py-4 leading-relaxed">{comp.prosCons}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* What to Expect */}
        <div className="mt-12 space-y-6 text-stone-600 leading-relaxed">
          <h3 className="text-xl font-bold text-stone-950">Room Standards & Bedding</h3>
          <p>Rooms are generally configured with twin beds (single mattresses on a wooden frame). Sheets, pillows, and a thick woolen blanket are provided.
          </p>
          <p>
            <strong>Trekking Tip:</strong>While blankets are thick, the unheated wooden walls of high-altitude rooms allow cold drafts to pass. We recommend placing your sleeping bag inside the teahouse bed, then layering the provided blanket on top for maximum warmth.
          </p>
          
          <h3 className="text-xl font-bold text-stone-950">Bathroom & Toilet Facilities</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Commercial Areas:</strong>You will find modern western-style sit-down flush toilets, attached to your room or on the corridor.
            </li>
            <li>
              <strong>High Community Ridges:</strong>Mostly shared squat toilets located in separate annexes. You will need to flush using a bucket of water. Bring your own toilet paper, as it is not supplied by lodges.
            </li>
          </ul>
        </div>

        {/* EEAT Footnote */}
        <div className="mt-12 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5"></span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">First-Hand Expert Insight</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">This guide is maintained and reviewed by our licensed local trekking guides operating out of Kathmandu. We regularly update routes, weather advisories, and community lodge statuses based on active trail checks.
            </p>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="mt-16 rounded-3xl bg-emerald-950 p-8 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl font-bold">Secure Your Entire Lodge Route</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">We manage all bookings across both commercial and community networks, securing comfortable rooms and warm dining settings for your group.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >Inquire now
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
