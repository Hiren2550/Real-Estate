import React from "react";
import { FaShieldAlt, FaHandshake, FaAward, FaBuilding } from "react-icons/fa";

export default function About() {
  return (
    <div className="py-12 sm:py-16 px-4 max-w-6xl mx-auto animate-fade-in">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
          Who We Are
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-800 tracking-tight mt-3 mb-4">
          Redefining Real Estate Across India
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          PrimeEstate connects home seekers, tenants, and premium property owners through a seamless digital experience backed by verified data and transparent advisory.
        </p>
      </div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 text-xl mb-4">
            <FaShieldAlt />
          </div>
          <h3 className="font-bold text-slate-800 text-lg mb-2">Verified Listings</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Every property listed on PrimeEstate undergoes thorough title and visual quality checks.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 text-xl mb-4">
            <FaHandshake />
          </div>
          <h3 className="font-bold text-slate-800 text-lg mb-2">Zero Hidden Costs</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Direct owner contacts, clear rental agreements, and fair pricing without unexpected fees.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 text-xl mb-4">
            <FaAward />
          </div>
          <h3 className="font-bold text-slate-800 text-lg mb-2">Prime Locations</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Carefully curated penthouses, beachfront villas, and city apartments in prime neighborhoods.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 text-xl mb-4">
            <FaBuilding />
          </div>
          <h3 className="font-bold text-slate-800 text-lg mb-2">Full Lifecycle</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Comprehensive support from discovery and virtual tours to lease signing and handover.
          </p>
        </div>
      </div>

      {/* Narrative Section */}
      <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200/80 shadow-sm my-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Our Commitment</h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
          Finding a place to call home should be an empowering and rewarding journey. At PrimeEstate, we leverage modern technology, high-resolution photography, and rigorous standards to eliminate guesswork and deliver confidence to buyers, tenants, and investors alike.
        </p>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Whether you are looking to relocate to a bustling tech corridor or seeking a quiet coastal sanctuary, our team and platform are dedicated to matching you with the perfect space.
        </p>
      </div>
    </div>
  );
}
