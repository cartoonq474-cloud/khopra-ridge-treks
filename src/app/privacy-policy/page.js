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
            Privacy Policy
          </h1>
          <p className="mt-4 text-xs text-stone-500 font-bold uppercase tracking-wide">
            Last Updated: June 12, 2026
          </p>
        </div>

        {/* Content */}
        <div className="mt-12 space-y-8 text-stone-600 leading-relaxed text-sm">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-stone-950">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us when inquiring about or booking a trek. This includes your name, email address, proposed trekking dates, group size, and any custom notes or dietary/medical requirements you share with us.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-stone-950">2. How We Use Your Information</h2>
            <p>
              We use the collected information solely to coordinate lodge bookings, secure local flights, register permits (ACAP and TIMS), and plan safe trekking operations. We do not sell or share your personal information with third-party marketers.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-stone-950">3. Data Security and Storage</h2>
            <p>
              We implement industry-standard security measures to safeguard your details. Forms are submitted securely, and access to personal data is restricted to licensed coordinators and guides who require the information for operations.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-stone-950">4. Third-Party Services</h2>
            <p>
              To complete trek arrangements, certain information must be shared with authorized third parties, including the Annapurna Conservation Area Project (ACAP) office, the Trekking Agencies' Association of Nepal (TAAN) for TIMS cards, and local domestic airline operators.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-stone-950">5. Your Rights</h2>
            <p>
              You have the right to request access to the personal data we hold about you or request that we update or delete your information. You can reach out to us at <a href="mailto:info@khopraridgetrek.com" className="text-emerald-700 hover:underline font-semibold">info@khopraridgetrek.com</a> to make these requests.
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
