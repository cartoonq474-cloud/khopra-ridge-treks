import React from "react";
import Link from "next/link";

export default function Page() {
  const photoSpots = [
    {
      spot: "1. Khopra Ridge (Dhaulagiri Wall)",
      desc: "Shoot directly from the ridge facing west. In the morning, you get Dhaulagiri I emerging above a sea of clouds. Use a medium zoom (50mm-70mm) to isolate the peak."
    },
    {
      spot: "2. Khayer Lake (Sacred Cirque)",
      desc: "The deep turquoise lake at 4,660m is surrounded by massive rock walls. Shoot from the eastern ridge looking back at the small pilgrimage shrines with the water in the foreground."
    },
    {
      spot: "3. Muldai Viewpoint (Annapurna Panorama)",
      desc: "Excellent sunrise panorama. You get a wider angle of the Annapurna range than Poon Hill. Wide-angle lens (16mm-24mm) is perfect here."
    },
    {
      spot: "4. Forest Trails around Dobato & Bayeli",
      desc: "Beautiful ancient rhododendron and oak forests. Best shot during late morning when sun shafts break through the mossy branches."
    },
    {
      spot: "5. Ghandruk Slate-Roofed Houses",
      desc: "Traditional Gurung architecture. Focus on the slate roofs in the foreground with Machhapuchhre (Fishtail) framing the background."
    }
  ];

  return (
    <div className="w-full flex-1">
      <div className="mx-auto max-w-4xl px-6 py-20 w-full flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Photography Guide</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Best Photography Spots on the Khopra Trek
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Capture the visual essence of the Annapurnas. A list of key photography spots, composition advice, and camera gear tips.
          </p>
        </div>

        {/* Spots grid */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Top Scenic Photography Locations</h2>
          <div className="space-y-6">
            {photoSpots.map((spot, i) => (
              <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm">
                <h4 className="font-extrabold text-stone-950 text-base">{spot.spot}</h4>
                <p className="mt-2 text-xs text-stone-500 leading-relaxed">{spot.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Camera Gear Tips */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Recommended Camera Gear</h3>
          <ul className="space-y-2 text-xs leading-relaxed list-disc pl-5">
            <li><strong>Lenses:</strong> Bring a wide-angle lens (16-35mm equivalent) for large mountain sweeps, and a telephoto (70-200mm) to capture peak textures and grazing yaks.</li>
            <li><strong>Circular Polarizer (CPL):</strong> Essential for reducing glare on snow and making the turquoise water of Khayer Lake pop against the rocky cirque.</li>
            <li><strong>Extra Batteries:</strong> Cold temperatures drain batteries quickly. Keep batteries in an inside pocket close to your body heat when hiking.</li>
          </ul>
        </div>

        {/* E-E-A-T Footnote */}
        <div className="mt-12 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">First-Hand Expert Insight</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              This guide is maintained and reviewed by our licensed local trekking guides operating out of Pokhara. We regularly update routes, weather advisories, and community lodge statuses based on active trail checks.
            </p>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="mt-16 rounded-3xl bg-emerald-950 p-8 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl font-bold">Capture the Himalayas</h3>
            <p className="mt-4 text-emerald-100/80 text-sm leading-relaxed">
              Book our guided departure today to get access to pre-departure safety briefings, experienced guides, and guaranteed lodge space.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-500 transition-all text-white"
            >
              Inquire Now
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
