"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const scheduleDays = [
    {
      day: "Monday",
      focus: "Leg Strength & Core",
      exercises: "Squats (3x12), lunges (3x10 per leg), step-ups (3x15), calf raises (3x20), plank holds (3x60s)."
    },
    {
      day: "Tuesday",
      focus: "Zone 2 Cardio",
      exercises: "45-60 minutes of conversational running, brisk walking on an incline treadmill, or stationary cycling."
    },
    {
      day: "Wednesday",
      focus: "Rest & Active Recovery",
      exercises: "Stretching, foam rolling, yoga, or a light 20-minute walk. Focus on joint health and mobility."
    },
    {
      day: "Thursday",
      focus: "Stair Climbing / HIIT",
      exercises: "40 minutes of stair climber machine at a moderate pace, or stadium stair repeats. Focus on quads and breathing."
    },
    {
      day: "Friday",
      focus: "Rest Day",
      exercises: "Full rest. Ensure proper hydration and nutrition to prepare for the weekend weighted ruck hike."
    },
    {
      day: "Saturday",
      focus: "Weighted Trail Hike",
      exercises: "3 to 5 hours of trail walking with a backpack loaded with 5kg to 8kg of weight. Focus on steep sections."
    },
    {
      day: "Sunday",
      focus: "Mobility & Stretching",
      exercises: "Focus on stretching hamstrings, quadriceps, hip flexors, and calves. Light foam rolling."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-20 flex-1">
        
        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Workout Calendar</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Weekly Trekking Fitness Plan
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Use this structured weekly training template to build leg strength, cardiovascular stamina, and backpack endurance for the trail.
          </p>
        </div>

        {/* Schedule */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Weekly Workout Schedule</h2>
          <p className="text-stone-600 leading-relaxed">
            Follow this weekly cycle starting **8 weeks** before your departure. This schedule alternates between strength, aerobic threshold training, trail endurance, and mobility to prevent overtraining and build peak condition.
          </p>
        </div>

        {/* Calendar Grid */}
        <div className="mt-12 space-y-4">
          {scheduleDays.map((item, i) => (
            <div key={i} className="p-6 bg-white border border-stone-200 rounded-3xl shadow-sm flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="md:w-1/4">
                <span className="text-sm font-extrabold text-stone-950 block">{item.day}</span>
                <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider block mt-1">{item.focus}</span>
              </div>
              <div className="md:w-3/4 text-xs text-stone-600 leading-relaxed">
                {item.exercises}
              </div>
            </div>
          ))}
        </div>

        {/* Nutrition Tips */}
        <div className="mt-16 p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4">
          <h3 className="text-lg font-bold">Important Workout and Recovery Advice</h3>
          <ul className="space-y-2 text-xs leading-relaxed list-disc pl-5">
            <li><strong>Hydration:</strong> Drink 3 liters of water daily, especially on training days. This prepares your kidneys for high-altitude hydration demands.</li>
            <li><strong>Joint Care:</strong> Downhills put high pressure on knees. Do not skip stretching your calves and quads, which absorb shock.</li>
            <li><strong>Proper Footwear:</strong> Perform your Saturday loaded hikes wearing the exact boots and socks you plan to wear on the Khopra trail to break them in.</li>
          </ul>
        </div>

        {/* E-E-A-T Badge */}
        <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <span className="text-2xl mt-0.5">🏔️</span>
          <div>
            <h4 className="font-bold text-stone-900 text-sm">Reviewed by Trail Experts</h4>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed">
              Our guides are certified fitness coordinators. We recommend reviewing this program with your healthcare provider if you have any pre-existing joint or cardiovascular conditions.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Ready to Start Preparing?</h3>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-lg">
              Book our guided departure today to secure your local guide, permits, and get detailed checklists for a successful trek.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/#book"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-all"
              >
                Inquire Now
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
