import React from "react";
import CoverageInteractive from "./CoverageInteractive";

export default function CoverageSection() {
  return (
    <section className="py-24 border-t border-stone-200 bg-[#f7f5f0]">
      <div className="mx-auto max-w-7xl px-6">
        <CoverageInteractive />
      </div>
    </section>
  );
}