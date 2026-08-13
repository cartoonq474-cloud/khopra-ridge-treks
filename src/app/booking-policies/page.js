import React from "react";
import Link from "next/link";
import PoliciesFaqInteractive from "./PoliciesFaqInteractive";

export const metadata = {
  alternates: {
    canonical: "/booking-policies",
  },
  title: "Booking & Cancellation Policies | Khopra Ridge Trek",
  description: "Our full booking and cancellation policies: deposits, payment deadlines, refund eligibility, rescheduling, mandatory travel insurance, and emergency.",
};

export default function BookingPoliciesPage() {
  const faqs = [
    {
      question: "How much deposit is required to reserve a trek?",
      answer: "A 20% deposit of the total trek cost secures your reservation and dates. The remaining 80% balance is due 30 days before departure."
    },
    {
      question: "Is my trekking deposit refundable?",
      answer: "No. The deposit is non-refundable in standard cancellation situations because it covers permit processing and teahouse reservations that begin almost immediately after booking. It can usually be applied to a rescheduled date instead."
    },
    {
      question: "Can I change my trek dates after booking?",
      answer: "Yes. Date changes requested 30 or more days before departure are free, with your deposit carrying over in full. Changes requested within 30 days are subject to availability and a $50 USD rescheduling fee."
    },
    {
      question: "What happens if I cancel my trek at the last minute?",
      answer: "Cancellations made within 14 days of departure, or no-shows, are non-refundable. This reflects the fact that teahouse rooms, permits, and guide staffing are already locked in by that point."
    },
    {
      question: "How long does it take to receive a refund?",
      answer: "Approved refunds are processed within 14 to 21 business days, depending on your bank and original payment method."
    },
    {
      question: "What costs are non-refundable no matter when I cancel?",
      answer: "ACAP and TIMS permit fees, domestic flight bookings, hotel nights booked outside core trek dates, and payment processing fees are non-refundable regardless of cancellation timing."
    },
    {
      question: "Is travel insurance mandatory for trekking in Nepal with your company?",
      answer: "Yes. Every trekker must carry insurance covering emergency medical treatment of at least $100,000 USD, altitude up to 6,000 meters, and helicopter evacuation. We verify proof of coverage before departure."
    },
    {
      question: "Does my insurance need to cover helicopter evacuation specifically?",
      answer: "Yes. Standard travel insurance for general travel often excludes mountain rescue. Confirm your policy explicitly names helicopter evacuation or mountain rescue as a covered benefit."
    },
    {
      question: "What happens if bad weather affects my trek?",
      answer: "Your guide can adjust pace, route, or itinerary order for safety without it counting as a cancellation. Weather-related rerouting is normal mountain practice, not a refund-triggering event."
    },
    {
      question: "What happens if the trekking company cancels the trip?",
      answer: "If we cancel for reasons within our control, you receive a full refund with no deductions, or you can choose a rescheduled date or travel credit instead."
    },
    {
      question: "Can group bookings receive special cancellation terms?",
      answer: "The same cancellation fee schedule applies per traveler. If cancellations reduce a group below its minimum size, the per-person rate for remaining travelers may be adjusted."
    },
    {
      question: "How do I request a refund or booking modification?",
      answer: "Email our booking team with your reservation number. We confirm your eligible refund tier or modification options in writing within 3 business days, then process your request once details are confirmed."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-16 sm:py-20 flex-1">
        
        {/* Header Breadcrumb & Title */}
        <header className="border-b border-stone-200 pb-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-700">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-stone-500">Booking Policies</span>
          </div>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Booking &amp; Cancellation Policies
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Our full booking and cancellation policies: deposits, payment deadlines, refund eligibility, rescheduling, mandatory travel insurance, and emergency evacuation procedures.
          </p>
        </header>

        {/* Article Content */}
        <article className="mt-12 space-y-8 text-stone-700 leading-relaxed text-base sm:text-lg">
          <p>
            Booking a trek in the Annapurna foothills is a commitment of money, time, and trust. Before you reserve your spot on the trail to Khopra Ridge, Khayer Lake, or Mohare Danda, you deserve a clear answer to one question: what happens if something changes?
          </p>
          <p>
            This page lays out exactly how our booking, payment, cancellation, and refund process works, along with the insurance requirements and emergency evacuation protocols that protect you at altitude. We've written it the way we'd explain it in person at our Pokhara office — in plain language, with real numbers, not vague legal phrasing.
          </p>
          <p>
            These policies are built around the guidelines set by the Trekking Agencies' Association of Nepal (TAAN) and the operating rules of the Annapurna Conservation Area Project (ACAP). If a situation isn't covered here, our booking team is always the fastest way to get a direct answer.
          </p>

          <hr className="border-stone-200" />

          {/* Quick Policy Overview */}
          <section id="quick-overview" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Quick Policy Overview
            </h2>
            <p>
              If you only have two minutes, this section covers the essentials. Every point below is explained in full detail further down the page.
            </p>

            <div className="grid gap-6 sm:grid-cols-3 mt-6">
              <div className="p-6 bg-white border border-stone-200/80 rounded-2xl shadow-sm">
                <h3 className="font-bold text-stone-950 text-sm uppercase tracking-wider text-emerald-700">Booking &amp; Deposit</h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  A 20% deposit confirms your reservation. The remaining balance is due 30 days before departure. Deposits are non-refundable but transfer to rescheduled dates.
                </p>
              </div>
              <div className="p-6 bg-white border border-stone-200/80 rounded-2xl shadow-sm">
                <h3 className="font-bold text-stone-950 text-sm uppercase tracking-wider text-emerald-700">Cancellation &amp; Refund</h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Refund amounts depend on notice period. Cancellations 60+ days before departure receive the highest refund tier; cancellations inside 14 days are non-refundable.
                </p>
              </div>
              <div className="p-6 bg-white border border-stone-200/80 rounded-2xl shadow-sm">
                <h3 className="font-bold text-stone-950 text-sm uppercase tracking-wider text-emerald-700">Insurance &amp; Rescue</h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Travel insurance is mandatory above 3,000 meters. Policies must explicitly cover high-altitude trekking, medical treatment, and helicopter evacuation.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Trek Booking Policy */}
          <section id="booking-policy" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Trek Booking Policy
            </h2>
            <p>
              Reserving a trek with us is a straightforward process, but a few steps matter more than they might seem at first glance.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              How to Reserve Your Trek
            </h3>
            <ol className="space-y-2 pl-6 list-decimal text-stone-700">
              <li><strong>Send an inquiry:</strong> Tell us your preferred trek, travel dates, and group size through our booking form or by email.</li>
              <li><strong>Review your itinerary:</strong> Our team confirms availability, trail conditions, and teahouse capacity for your dates, then sends a finalized itinerary and quote.</li>
              <li><strong>Pay your deposit:</strong> A 20% deposit secures your place on that departure.</li>
              <li><strong>Receive confirmation:</strong> Once your deposit clears, you'll receive a written booking confirmation with your reservation number, itinerary, and payment schedule.</li>
            </ol>
            <p className="text-sm text-stone-500 italic mt-2">
              Note: Your trek is not officially reserved until step three is complete. An itinerary quote on its own does not hold your dates.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Advance Booking Recommendations
            </h3>
            <p>
              Trekking season in the Annapurna region runs heaviest from March to May and September to November. During these windows, teahouse rooms and ACAP permits can fill up weeks ahead of departure.
            </p>
            <p>
              We recommend booking at least 60 days in advance for peak-season treks, and at least 90 days in advance for groups of six or more. Off-season bookings (December through February, and June through August) have more flexibility, but advance booking still guarantees your preferred teahouses along the route.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Deposit Requirements for Trekking
            </h3>
            <p>
              The 20% deposit does three things: it removes your dates from general availability, it allows us to begin booking your ACAP and TIMS permits, and it lets us reserve teahouse rooms along your specific route.
            </p>
            <p>
              Because permits and accommodations are booked on your behalf almost immediately, this deposit is non-refundable under standard cancellation circumstances. It is, however, transferable to a new date in most rescheduling situations — see the rescheduling section below.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Trek Booking Confirmation Process
            </h3>
            <p>
              After your deposit payment is received, you'll get a confirmation email containing your reservation number, a detailed day-by-day itinerary, your outstanding balance and due date, and a checklist of next steps (insurance, permits, packing).
            </p>
            <p>
              Keep this confirmation email. We'll ask for your reservation number any time you contact us about payments, changes, or cancellations.
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* Trek Payment Policy */}
          <section id="payment-policy" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Trek Payment Policy
            </h2>
            <p>
              Clear payment terms protect both sides of the booking. Here's exactly how the schedule works.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Initial Deposit and Reservation Payments
            </h3>
            <p>
              Your 20% deposit is due at the time of booking, before we begin permit processing or teahouse reservations. This payment can be made by international wire transfer or through our online payment portal.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Final Balance Payment Schedule
            </h3>
            <p>
              The remaining 80% balance is due 30 days before your trek departure date. For bookings made within 30 days of departure (last-minute reservations), full payment is required upfront at the time of booking.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Accepted Payment Methods
            </h3>
            <ul className="space-y-1 pl-6 list-disc text-stone-700">
              <li>International wire transfer (USD or NPR)</li>
              <li>Major credit and debit cards through our secure online portal</li>
              <li>Cash payment in USD or NPR at our Pokhara office, for travelers already in Nepal</li>
            </ul>
            <p className="text-sm text-stone-500 italic">
              Note: Wire transfer fees charged by your bank are the traveler's responsibility and are not included in the trek price.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Late Payment and Reservation Hold Policies
            </h3>
            <p>
              If your final balance isn't received by the 30-day deadline, we'll contact you directly before taking any action. If payment still isn't received within 7 days of that deadline, we reserve the right to release your teahouse and permit reservations to other travelers, and your deposit is forfeited under the standard cancellation terms.
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* Traveler Responsibilities Before Departure */}
          <section id="traveler-responsibilities" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Traveler Responsibilities Before Departure
            </h2>
            <p>
              A smooth trek depends on a few things only you can provide. These aren't formalities — they directly affect your safety and your ability to claim insurance if something goes wrong.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Providing Accurate Personal Information
            </h3>
            <p>
              We need your full legal name (matching your passport), passport number and expiry date, and an emergency contact who is not traveling with you. Incorrect details can delay permit processing or, worse, delay emergency coordination on the trail.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Health and Fitness Disclosure
            </h3>
            <p>
              Tell us about any pre-existing medical conditions, medications, or mobility limitations before you book. This isn't used to disqualify you — it's used to match you with the right itinerary, pacing, and guide-to-trekker ratio, and it matters enormously if you ever need emergency evacuation.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Understanding Trek Requirements
            </h3>
            <p>
              Khopra Ridge, Khayer Lake, and Mohare Danda all involve multiple consecutive days of walking at altitude, often 5–7 hours per day on uneven terrain. Booking confirms that you understand the physical demands of your chosen route. If you're unsure which trek matches your fitness level, our team is happy to talk it through before you book.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Required Travel Documentation
            </h3>
            <p>
              You'll need a passport valid for at least six months beyond your travel dates, a Nepal visa (available on arrival for most nationalities), and the trek permits we arrange on your behalf (ACAP permit and TIMS card). We handle the permit paperwork, but we need your passport details well in advance to process them.
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* Trek Cancellation Policy */}
          <section id="cancellation-policy" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Trek Cancellation Policy
            </h2>
            <p>
              We know plans change. Here's exactly what happens, and what it costs, when a traveler needs to cancel.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Cancellation by the Traveler
            </h3>
            <p>
              To cancel, notify us in writing — email is fine — using the reservation number from your confirmation. We process cancellations from the date we receive that written notice, not the date you first mention it verbally or over the phone.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Cancellation Charges and Fee Schedule
            </h3>
            <p>
              Refund percentages are based on calendar days before your scheduled departure date:
            </p>

            {/* Table */}
            <div className="overflow-x-auto my-6 border border-stone-200 rounded-2xl bg-white shadow-sm">
              <table className="min-w-full divide-y divide-stone-200 text-sm">
                <thead>
                  <tr className="bg-stone-50">
                    <th className="px-6 py-4 text-left font-bold text-stone-900">Notice Before Departure</th>
                    <th className="px-6 py-4 text-left font-bold text-stone-900">Refund of Trip Cost</th>
                    <th className="px-6 py-4 text-left font-bold text-stone-900">Deposit Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-700">
                  <tr>
                    <td className="px-6 py-4 font-medium">60+ days</td>
                    <td className="px-6 py-4">90% refunded</td>
                    <td className="px-6 py-4 text-stone-500">Non-refundable</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">30–59 days</td>
                    <td className="px-6 py-4">50% refunded</td>
                    <td className="px-6 py-4 text-stone-500">Non-refundable</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">15–29 days</td>
                    <td className="px-6 py-4">25% refunded</td>
                    <td className="px-6 py-4 text-stone-500">Non-refundable</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">0–14 days / no-show</td>
                    <td className="px-6 py-4 text-rose-600 font-semibold">No refund</td>
                    <td className="px-6 py-4 text-stone-500">Non-refundable</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              The deposit is excluded from every refund tier because it has already been spent on permits and reserved accommodations by the time most cancellations occur.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Last-Minute Cancellations
            </h3>
            <p>
              Cancellations made within 14 days of departure are treated as non-refundable in full, including any partial payments beyond the deposit. This reflects the reality that teahouse bookings and porter/guide staffing are locked in at that point and usually cannot be resold on short notice.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              No-Show Policy
            </h3>
            <p>
              If you don't arrive for your scheduled departure and haven't notified us in advance, it's treated identically to a last-minute cancellation: no refund. If a flight delay or genuine emergency prevents you from arriving on time, contact us as soon as possible — we'll always try to find a workable solution, but we can't guarantee one once a trek has already started.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Group Trek Booking Cancellation Rules
            </h3>
            <p>
              For group bookings of six or more, the same fee schedule applies individually to each traveler. If part of a group cancels and the remaining group size drops below the minimum required for your original group rate, the per-person price for remaining travelers may be adjusted to reflect the smaller group size.
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* Trek Refund Policy */}
          <section id="refund-policy" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Trek Refund Policy
            </h2>
            <p>
              Refunds follow directly from the cancellation tier above, but here's the detail on eligibility, exclusions, and the actual process.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Refund Eligibility Criteria
            </h3>
            <p>
              You're eligible for the percentage shown in the cancellation table once we've confirmed receipt of your written cancellation notice. Refunds are not automatic — they're processed only after you submit a request, which is intentionally a simple step (see request procedure below).
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Non-Refundable Expenses
            </h3>
            <p>
              Regardless of cancellation timing, the following are never refundable once paid, because they're paid to third parties on your behalf and are typically non-recoverable:
            </p>
            <ul className="space-y-1 pl-6 list-disc text-stone-700">
              <li>ACAP and TIMS permit fees</li>
              <li>Domestic flight bookings (where applicable to your itinerary)</li>
              <li>Any hotel nights booked outside the core trek dates at your request</li>
              <li>Wire transfer or payment processing fees</li>
            </ul>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Refund Request Procedure
            </h3>
            <ol className="space-y-2 pl-6 list-decimal text-stone-700">
              <li>Email our booking team with your reservation number and cancellation date.</li>
              <li>Confirm the bank account or card details for the refund (for security, we only refund to the original payment method).</li>
              <li>We confirm your refund tier and amount in writing within 3 business days.</li>
              <li>The refund is processed once you confirm those details are correct.</li>
            </ol>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Refund Processing Timeline
            </h3>
            <p>
              Approved refunds are processed within 14 to 21 business days, depending on your bank and payment method. International wire transfer refunds typically take longer than card refunds due to intermediary banking steps outside our control.
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* Trek Rescheduling and Booking Modifications */}
          <section id="rescheduling" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Trek Rescheduling and Booking Modifications
            </h2>
            <p>
              Rescheduling is often a better option than cancelling outright, and we structure our policy to make that the easier path.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Changing Trek Dates
            </h3>
            <p>
              If you request a date change 30 or more days before your original departure, we'll move your booking to a new available date at no extra charge, and your deposit carries over in full. Date changes requested within 30 days are subject to availability and a rescheduling fee (see below), since permits and teahouse bookings may already be locked in for the original dates.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Booking Amendments and Changes
            </h3>
            <p>
              Need to add a trekker to your group, change your route slightly, or upgrade your accommodation? Send the request in writing as early as possible. Amendments are confirmed based on availability and may adjust your total trip cost.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Travel Credits and Future Bookings
            </h3>
            <p>
              If your circumstances mean a specific new date doesn't work but you still want to trek with us, we can issue a travel credit for the amount already paid (minus non-refundable third-party costs). Travel credits are valid for 24 months from the date of issue and can be applied to any of our treks.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Flexible Trek Rescheduling Options
            </h3>
            <p>
              A $50 USD administrative fee applies to date changes made within 30 days of original departure, in addition to any unrecoverable permit or flight costs already incurred. This is meaningfully less expensive than a full cancellation, which is why we recommend rescheduling whenever a hard cancellation isn't strictly necessary.
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* Weather Delays and Force Majeure Policy */}
          <section id="weather-force-majeure" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Weather Delays and Force Majeure Policy
            </h2>
            <p>
              The Annapurna region is beautiful precisely because it's mountainous — and mountain weather doesn't follow a calendar. Here's how we handle disruptions that are genuinely outside anyone's control.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Weather-Related Delays and Disruptions
            </h3>
            <p>
              If weather makes a planned trail segment unsafe, our guides have full authority to adjust the day's route, pace, or itinerary order for safety. This is standard mountain practice and is not treated as a cancellation or a refund trigger — your guide's job is to get you through the trek safely, not on a rigid script.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Flight Delays and Transportation Interruptions
            </h3>
            <p>
              Domestic flights to and from mountain airstrips are notoriously weather-dependent. If a connecting flight on your itinerary is delayed or cancelled by the airline, we'll help rebook the next available flight, but airline delay costs and missed onward travel connections are not covered by our trek pricing.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Natural Disasters and Unexpected Events
            </h3>
            <p>
              Landslides, earthquakes, and similarly severe events can close specific trail sections without warning. If this happens before your departure, we'll offer an alternative route, a rescheduled date, or a travel credit — whichever fits your situation best. If it happens mid-trek, your guide will reroute or evacuate as needed for safety.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Government Restrictions and Travel Advisories
            </h3>
            <p>
              If the Government of Nepal or your home country issues a formal travel restriction that prevents your trek from proceeding (such as a regional closure or entry ban), we'll work with you on a credit or rescheduled date rather than applying standard cancellation fees, since this falls outside both parties' control.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Force Majeure Events
            </h3>
            <p>
              &quot;Force majeure&quot; simply means events neither of us could reasonably control or predict — natural disasters, government action, pandemics, or similar large-scale disruptions. In these cases, our standard cancellation fee schedule is waived in favor of rescheduling or credit options. It does not, however, extend to ordinary weather variability, personal scheduling conflicts, or routine flight delays, which are addressed in the sections above.
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* Mandatory Travel Insurance Requirements */}
          <section id="insurance-requirements" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Mandatory Travel Insurance Requirements
            </h2>
            <p className="font-semibold text-rose-600">
              This is the single most important section on this page, and we don't say that lightly. Every trekker on every Khopra Ridge Trek itinerary must carry valid travel insurance.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Why Travel Insurance Is Required
            </h3>
            <p>
              Trekking above 3,000 meters carries real risks that standard domestic health insurance almost never covers: altitude illness, trail injuries in remote terrain, and the cost of helicopter rescue, which can run into tens of thousands of dollars if you're uninsured. We require proof of insurance before departure, not as a formality, but because we've seen what happens to travelers who skip this step.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Minimum Insurance Coverage Requirements
            </h3>
            <p>
              Your policy must include, at minimum:
            </p>
            <ul className="space-y-1 pl-6 list-disc text-stone-700">
              <li>Emergency medical treatment coverage of at least $100,000 USD</li>
              <li>Coverage explicitly valid for trekking at altitudes up to 6,000 meters</li>
              <li>Emergency medical evacuation coverage, including helicopter rescue</li>
            </ul>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Helicopter Rescue and Emergency Evacuation Coverage
            </h3>
            <p>
              Standard travel insurance — the kind sold for beach holidays or city sightseeing — almost never covers helicopter evacuation from remote mountain trails. Look specifically for a policy that names &quot;helicopter evacuation&quot; or &quot;mountain rescue&quot; as a covered benefit, not just generic &quot;emergency transport.&quot;
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Coverage for Altitude-Related Illnesses
            </h3>
            <p>
              Many general travel policies exclude altitude sickness as a &quot;foreseeable&quot; condition above a certain elevation. Confirm your policy explicitly covers AMS (Acute Mountain Sickness) and related high-altitude conditions, since this is the most common reason for early descent or evacuation on our routes.
            </p>
            <p className="text-sm font-semibold text-rose-600 bg-rose-50 border border-rose-100 rounded-2xl p-4 mt-4">
              🛡️ Verification required: We'll ask to see your insurance policy details before your trek begins. Trekkers who cannot provide adequate proof of coverage will not be permitted to start the trek, and this is treated under the same terms as a traveler-initiated cancellation.
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* Medical Evacuation and Emergency Protocols */}
          <section id="evacuation-protocols" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Medical Evacuation and Emergency Protocols
            </h2>
            <p>
              If a medical situation arises on the trail, here's exactly how our team responds.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Emergency Assessment Procedures
            </h3>
            <p>
              Our guides are trained in Wilderness First Aid and altitude illness recognition. At the first sign of a serious issue, your guide assesses severity, begins immediate first aid if needed, and contacts our Pokhara office to coordinate next steps.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Helicopter Emergency Evacuation Process
            </h3>
            <p>
              For situations beyond what descent on foot can resolve, our office coordinates directly with helicopter rescue services and your insurance provider simultaneously, since most rescue operators require insurance confirmation or a guarantee of payment before dispatch. This is precisely why advance insurance verification matters — it removes a delay at the exact moment delay matters most.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Coordination With Insurance Providers
            </h3>
            <p>
              We maintain direct contact with major insurance providers' emergency assistance lines and can communicate medical details, GPS location, and evacuation logistics on your behalf if you're not in a position to do so yourself.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Traveler Responsibilities During Emergencies
            </h3>
            <p>
              Carry your insurance policy number and your provider's emergency contact number with you on the trail, not just in your luggage at the teahouse. Follow your guide's instructions during any emergency situation — their decisions are based on safety protocols, not convenience.
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* Cancellation by the Trek Operator */}
          <section id="operator-cancellation" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Cancellation by the Trek Operator
            </h2>
            <p>
              In rare cases, we may need to cancel or significantly alter a scheduled departure. Here's how we handle that, and what you're entitled to.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Safety-Related Cancellations
            </h3>
            <p>
              If trail conditions, weather forecasts, or regional safety assessments make a departure genuinely unsafe, we will cancel or postpone rather than proceed. Safety decisions are never driven by avoiding refunds — we'd rather lose a booking than risk a trekker.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Operational and Logistical Challenges
            </h3>
            <p>
              Occasionally a departure is cancelled due to circumstances like a teahouse closure on your specific route or insufficient minimum group size for a shared departure. We aim to notify you as early as possible, generally a minimum of 7 days before departure where the issue is foreseeable.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Minimum Participation Requirements
            </h3>
            <p>
              Some group departures require a minimum number of confirmed trekkers to run at the quoted group rate. If that minimum isn't met, we'll offer you the choice of joining at an adjusted private/small-group rate, switching to a different available date, or a full refund.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Refunds, Credits, and Alternative Trek Options
            </h3>
            <p>
              If we cancel your trek for any reason within our control, you're entitled to a full refund of all payments made, no exceptions and no fee deductions. You can also choose a rescheduled date or a travel credit instead, if that suits your plans better.
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* Policy Compliance and Industry Standards */}
          <section id="compliance" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Policy Compliance and Industry Standards
            </h2>
            <p>
              Our booking and operational practices follow the standards set by the Trekking Agencies' Association of Nepal (TAAN), the governing trade body for licensed trekking operators in the country.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Alignment With Tourism and Trekking Standards
            </h3>
            <p>
              All our routes through the Annapurna Conservation Area operate under permits and guidelines set by the Annapurna Conservation Area Project (ACAP), and we hold a current Nepal Tourism Board operator license (#8928-091).
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Commitment to Fair Reservation and Refund Practices
            </h3>
            <p>
              We've written this policy to be specific rather than vague on purpose. If anything here doesn't match what we tell you directly during booking, the written confirmation we send you always takes precedence.
            </p>
          </section>

          <hr className="border-stone-200" />

          {/* Need Help With Your Booking? */}
          <section id="need-help" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Need Help With Your Booking?
            </h2>
            <p>
              Our booking office in Pokhara handles wire transfer confirmations, currency questions, and payment troubleshooting directly — this is usually faster than email for time-sensitive payment issues.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Refund and Cancellation Assistance
            </h3>
            <p>
              If you're navigating a cancellation or refund request, contact us with your reservation number ready. We'll walk you through your specific refund tier and timeline rather than leaving you to interpret the policy alone.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Group Booking Support
            </h3>
            <p>
              Group leaders coordinating six or more trekkers can request a dedicated point of contact on our team for deposits, partial cancellations, and group rate adjustments.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* FAQ Section */}
          <section id="faq-section" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight mb-8">
              Frequently Asked Questions (FAQ)
            </h2>
            <PoliciesFaqInteractive faqs={faqs} />
          </section>

          <hr className="border-stone-200" />

          {/* Conclusion */}
          <section id="conclusion" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Conclusion
            </h2>
            <p>
              Booking a trek should feel like the easy part of your trip planning — not the part that keeps you up at night. We've laid out real numbers and real timelines here instead of vague reassurances, because that's the only version of a policy page that actually helps you decide with confidence.
            </p>
            <p>
              To summarize: a 20% deposit holds your dates, your balance is due 30 days out, refunds scale down the closer you get to departure, and insurance with helicopter evacuation coverage isn't optional — it's the one requirement that protects you most if anything goes wrong on the trail.
            </p>
            <p>
              If anything here raises a question specific to your situation, our booking team would rather answer it before you reserve than after.
            </p>
          </section>
        </article>

        {/* CTA Box */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 sm:p-10 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-2">Booking Inquiry Support</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">Ready to lock in your dates?</h3>
            <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Still have questions about payments, refunds, or insurance? Contact our booking office in Pokhara to clarify wire transfers, currency payments, or group discount waivers.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/#book"
                className="rounded-full bg-emerald-600 px-8 py-3.5 text-sm font-bold text-white hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-950/40"
              >
                Request a Personalized Trek Quote →
              </Link>
              <Link
                href="/contact"
                className="rounded-full bg-stone-800 px-8 py-3.5 text-sm font-bold text-stone-200 hover:bg-stone-700 transition-all border border-white/10"
              >
                Contact Our Booking Office in Pokhara →
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
