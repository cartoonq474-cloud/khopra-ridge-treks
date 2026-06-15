import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Legal Documents</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Terms of Service
          </h1>
          <p className="mt-4 text-xs text-stone-500 font-bold uppercase tracking-wide">
            Last Updated: June 12, 2026
          </p>
        </div>

        {/* Content */}
        <div className="mt-12 space-y-8 text-stone-600 leading-relaxed text-sm">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-stone-950">1. Booking and Payments</h2>
            <p>
              To confirm a booking inquiry, a deposit is required to secure local flight reservations and community lodge bed slots. The remaining balance must be paid before the start of the trek in Pokhara or Kathmandu.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-stone-950">2. Cancellation &amp; Refund Policy</h2>
            <p>
              Cancellations made more than 30 days before the departure date are eligible for a refund, minus administrative flight cancellation charges. If cancellations occur within 30 days, deposits can be rescheduled to any future date within 24 months subject to lodge and flight availability.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-stone-950">3. Travel Insurance Requirements</h2>
            <p>
              All trekkers must possess valid travel insurance. Your insurance policy must explicitly cover high-altitude trekking (up to 5,000m) and emergency medical helicopter rescue/evacuation in Nepal.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-stone-950">4. Safety and Guide Authority</h2>
            <p>
              Your safety is our top priority. By trekking with us, you agree to follow the safety directions, pacing recommendations, and altitude advice of our licensed local guides. The guide reserves the right to modify the itinerary due to weather, landslide risk, or signs of altitude sickness.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-stone-950">5. Liability Limitation</h2>
            <p>
              Trekking in remote Himalayan zones involves inherent risks (unpredictable weather, natural delays, and flight disruptions). We are not liable for changes or cancellations caused by force majeure, airline delays, or personal physical limitations.
            </p>
          </div>

        </div>

        {/* Home Link */}
        <div className="mt-16 pt-8 border-t border-stone-200">
          <Link href="/" className="text-xs font-bold text-emerald-700 hover:text-emerald-600 transition flex items-center gap-1 w-fit">
            ← Return to Homepage
          </Link>
        </div>

      </main>
    </div>
  );
}
