import React from "react";
import SpecsInteractive from "./SpecsInteractive";

export default function TrekSpecsSection() {
  return (
    <section className="py-24 border-t border-stone-200 bg-[#faf9f5]">
      <div className="mx-auto max-w-7xl px-6">
        <SpecsInteractive />
      </div>
    </section>
  );
}