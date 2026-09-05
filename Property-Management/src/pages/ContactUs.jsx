import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle } from "react-icons/fa";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "53298b97-4aae-4a1e-818b-a823e8a4e447",
          from_name: `PrimeEstate Inquiry: ${formData.name}`,
          subject: `New Lead: ${formData.subject} from ${formData.name}`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          inquiry_type: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "General Inquiry",
          message: "",
        });
      } else {
        setErrorMsg(result.message || "Failed to submit form. Please try again.");
      }
    } catch (err) {
      setErrorMsg("Network error occurred. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12 sm:py-16 px-4 max-w-6xl mx-auto animate-fade-in">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
          Get In Touch
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-800 tracking-tight mt-3 mb-4">
          Contact Our Advisory Team
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Have questions about buying, leasing, or listing a luxury property? Our real estate specialists are here to assist you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Info Cards */}
        <div className="flex flex-col gap-4">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 text-lg shrink-0">
              <FaPhoneAlt />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-base">Phone Inquiries</h3>
              <p className="text-sm text-slate-600 mt-1">+91 (022) 4890-7800</p>
              <p className="text-xs text-slate-400 mt-0.5">Toll-free across India</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 text-lg shrink-0">
              <FaEnvelope />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-base">Email Support</h3>
              <p className="text-sm text-slate-600 mt-1">support@primeestate.in</p>
              <p className="text-xs text-slate-400 mt-0.5">Average response: &lt; 2 hours</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 text-lg shrink-0">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-base">Headquarters</h3>
              <p className="text-sm text-slate-600 mt-1">
                Level 14, Tower B, One BKC, Bandra Kurla Complex, Mumbai, Maharashtra 400051
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 text-lg shrink-0">
              <FaClock />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-base">Operating Hours</h3>
              <p className="text-sm text-slate-600 mt-1">Monday – Saturday: 9:00 AM – 8:00 PM</p>
              <p className="text-xs text-slate-400 mt-0.5">Sunday: 10:00 AM – 4:00 PM</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-2 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/80 shadow-sm">
          {submitted ? (
            <div className="text-center py-12 flex flex-col items-center gap-4">
              <FaCheckCircle className="text-emerald-600 text-5xl animate-bounce" />
              <h2 className="text-2xl font-bold text-slate-800">Message Received!</h2>
              <p className="text-slate-600 max-w-md text-sm">
                Thank you for contacting PrimeEstate. One of our dedicated property advisors will reach out to you within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-semibold text-sm transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <h2 className="text-xl font-bold text-slate-800 mb-2">Send Us a Direct Message</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-xs font-semibold text-slate-700 block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full p-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs font-semibold text-slate-700 block mb-1">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full p-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="text-xs font-semibold text-slate-700 block mb-1">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full p-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="text-xs font-semibold text-slate-700 block mb-1">
                    Interested In
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Buying Property">Buying a Property</option>
                    <option value="Renting Property">Renting a Property</option>
                    <option value="Listing Property">Listing My Property</option>
                    <option value="Partnership">Commercial / Partnership</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="text-xs font-semibold text-slate-700 block mb-1">
                  Your Message / Requirement *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your budget, preferred location, timeline..."
                  className="w-full p-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {errorMsg && (
                <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm rounded-xl">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-2 bg-blue-700 hover:bg-blue-800 disabled:opacity-75 disabled:cursor-not-allowed text-white font-semibold py-3.5 px-6 rounded-xl transition-all text-sm shadow-md flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending via Web3Forms...</span>
                  </>
                ) : (
                  <span>Submit Inquiry</span>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
