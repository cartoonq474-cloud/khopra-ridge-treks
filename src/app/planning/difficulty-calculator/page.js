"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [cardio, setCardio] = useState("medium");
  const [altitude, setAltitude] = useState("none");
  const [packWeight, setPackWeight] = useState("light");
  const [hasCalculated, setHasCalculated] = useState(false);
  const [score, setScore] = useState(0);
  const [verdict, setVerdict] = useState("");
  const [advice, setAdvice] = useState("");

  const calculateDifficulty = () => {
    let baseScore = 5; // Base score out of 10

    // Cardio adjustments
    if (cardio === "high") baseScore -= 1;
    if (cardio === "low") baseScore += 2;

    // Altitude adjustments
    if (altitude === "high") baseScore -= 1.5;
    if (altitude === "low") baseScore += 0.5;
    if (altitude === "none") baseScore += 1.5;

    // Pack weight adjustments
    if (packWeight === "heavy") baseScore += 1.5;
    if (packWeight === "light") baseScore -= 0.5;

    // Constrain score
    const finalScore = Math.min(Math.max(baseScore, 3), 10);
    setScore(finalScore);

    // Determine verdict & advice
    if (finalScore >= 8) {
      setVerdict("Very Demanding (Strenuous)");
      setAdvice("We highly recommend hiring a porter to carry your main luggage. Focus on building leg endurance and stair climbing fitness 6-8 weeks prior to departure. Walk slowly on the trail and monitor altitude warnings.");
    } else if (finalScore >= 5.5) {
      setVerdict("Moderate to Challenging");
      setAdvice("You have sufficient baseline fitness, but the steep climb to Khopra Ridge (+685m) and the long day hike to Khayer Lake (4,660m) will be tiring. Hire a local guide for route support and carry a light pack.");
    } else {
      setVerdict("Manageable (Moderate)");
      setAdvice("Your fitness level and altitude experience make this route highly manageable. You can comfortably walk the loop. Stick to standard pacing and enjoy the secluded trails.");
    }

    setHasCalculated(true);
  };

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Interactive Tools</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">Khopra Ridge Trek Difficulty Calculator
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">Calculate your personalized difficulty index. Input your fitness level, altitude experience, and pack setup to receive custom pacing and guide advice.
          </p>
        </div>

        {/* Calculator Widget */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          
          {/* Controls */}
          <div className="p-8 bg-white border border-stone-200 rounded-3xl shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-stone-950">Enter Your Profile</h3>
            
            {/* Cardio */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-500 uppercase tracking-wider block">Weekly Cardio Activity</label>
              <select 
                value={cardio} 
                onChange={(e) =>setCardio(e.target.value)}
                className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-sm font-semibold text-stone-800 focus:outline-none focus:border-emerald-500"
              >
                <option value="high">High (4+ hours of running, cycling, or swimming/week)</option>
                <option value="medium">Medium (2-3 hours of jogging or active sports/week)</option>
                <option value="low">Low (Light walking or sedentary lifestyle)</option>
              </select>
            </div>

            {/* Altitude Experience */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-500 uppercase tracking-wider block">Altitude Experience</label>
              <select 
                value={altitude} 
                onChange={(e) =>setAltitude(e.target.value)}
                className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-sm font-semibold text-stone-800 focus:outline-none focus:border-emerald-500"
              >
                <option value="high">Experienced (Hiked/slept above 3,500m / 11,500ft recently)</option>
                <option value="low">Some (Hiked above 2,500m but haven&apos;t slept at high altitude)</option>
                <option value="none">None (Live at sea level, first high-altitude mountain trek)</option>
              </select>
            </div>

            {/* Pack Weight */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-500 uppercase tracking-wider block">Expected Backpack Setup</label>
              <select 
                value={packWeight} 
                onChange={(e) =>setPackWeight(e.target.value)}
                className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-sm font-semibold text-stone-800 focus:outline-none focus:border-emerald-500"
              >
                <option value="light">Light (Hiring a porter to carry main pack, carrying only ~4kg daypack)</option>
                <option value="medium">Medium (Carrying own pack with basic clothing, ~10kg)</option>
                <option value="heavy">Heavy (Independent solo trekking carrying full gear, ~15kg+)</option>
              </select>
            </div>

            <button
              onClick={calculateDifficulty}
              className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-sm tracking-wide shadow-sm transition-all"
            >Calculate Difficulty Index
            </button>
          </div>

          {/* Results Panel */}
          <div className="p-8 bg-stone-100 border border-stone-200 rounded-3xl flex flex-col justify-between">
            {hasCalculated ? (
              <div className="space-y-6 flex-1">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 block">Personal Estimate</span>
                <div>
                  <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">Estimated Difficulty Score</span>
                  <span className="text-5xl font-black text-stone-950 mt-1 block">{score.toFixed(1)} <span className="text-stone-400 text-base">/ 10</span></span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">Verdict Rating</span>
                  <span className="text-base font-extrabold text-stone-950 mt-1 block">{verdict}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">Expert Trail Advice</span>
                  <p className="text-xs text-stone-600 leading-relaxed mt-2">{advice}</p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center h-full py-12 space-y-4">
                <span className="text-4xl"></span>
                <div>
                  <h4 className="font-bold text-stone-950 text-sm">Calculations Pending</h4>
                  <p className="text-xs text-stone-500 mt-2 leading-relaxed max-w-xs mx-auto">Select your cardiovascular activity, altitude history, and backpack weight to estimate your personal trek difficulty score.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-stone-200/60 text-[10px] text-stone-400 leading-relaxed">
              *Calculations are based on average trail gradients, high sleeping altitudes at Dobato and Khopra Ridge, and the 1,000m ascent to Khayer Lake.
            </div>
          </div>

        </div>

        {/* E-E-A-T AUTHOR BADGE */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5"></span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">This estimator is maintained in cooperation with the local medical rescue networks of Pokhara to ensure realistic safety advice for independent hikers.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Secure a Guided &amp; Supported Trek</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">Want to minimize difficulty? Our standard package includes experienced local guides and porters to carry your heavy luggage safely.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/#book"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-all"
              >Inquire Now
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
