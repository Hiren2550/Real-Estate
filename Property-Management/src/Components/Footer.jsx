import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <span className="font-extrabold text-lg text-white tracking-tight">
              Prime<span className="text-blue-500">Estate</span>
            </span>
          </Link>
          <p className="text-xs text-slate-400 leading-relaxed">
            India's most trusted luxury property discovery portal. Verified listings, transparent pricing, and direct owner connections.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-bold text-white mb-3 tracking-wide uppercase text-[11px]">Explore</h4>
          <ul className="space-y-2 text-xs">
            <li><Link to="/search?type=sell" className="hover:text-white transition-colors">Properties for Sale</Link></li>
            <li><Link to="/search?type=rent" className="hover:text-white transition-colors">Properties for Rent</Link></li>
            <li><Link to="/search?offer=true" className="hover:text-white transition-colors">Exclusive Offers & Discounts</Link></li>
            <li><Link to="/calculator" className="hover:text-white transition-colors">Home Loan EMI Calculator</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-sm font-bold text-white mb-3 tracking-wide uppercase text-[11px]">Company</h4>
          <ul className="space-y-2 text-xs">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
            <li><Link to="/create-listing" className="hover:text-white transition-colors">List Your Property</Link></li>
            <li><Link to="/profile" className="hover:text-white transition-colors">Manage Account</Link></li>
          </ul>
        </div>

        {/* Direct Contact */}
        <div>
          <h4 className="text-sm font-bold text-white mb-3 tracking-wide uppercase text-[11px]">Get In Touch</h4>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-500 shrink-0" />
              <span>+91 (022) 4890-7800</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-emerald-500 shrink-0" />
              <span>support@primeestate.in</span>
            </li>
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-purple-500 shrink-0 mt-0.5" />
              <span>One BKC, Bandra Kurla Complex, Mumbai</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800/80 pt-6 max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} PrimeEstate Technologies Pvt. Ltd. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Designed with <FaHeart className="text-rose-500 text-[10px]" /> for seamless property search.
        </p>
      </div>
    </footer>
  );
}
