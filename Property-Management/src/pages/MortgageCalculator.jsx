import React, { useState } from "react";
import { FaCalculator, FaRupeeSign, FaInfoCircle } from "react-icons/fa";

export default function MortgageCalculator() {
  const [propertyPrice, setPropertyPrice] = useState(15000000); // 1.5 Cr
  const [downPayment, setDownPayment] = useState(3000000); // 30 L
  const [loanTermYears, setLoanTermYears] = useState(20);
  const [interestRate, setInterestRate] = useState(8.5); // 8.5%

  const principal = Math.max(0, propertyPrice - downPayment);
  const monthlyRate = interestRate / 100 / 12;
  const totalMonths = loanTermYears * 12;

  let emi = 0;
  if (monthlyRate > 0 && totalMonths > 0 && principal > 0) {
    emi =
      (principal *
        monthlyRate *
        Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);
  }

  const totalPayment = emi * totalMonths;
  const totalInterest = Math.max(0, totalPayment - principal);

  return (
    <div className="py-12 sm:py-16 px-4 max-w-5xl mx-auto animate-fade-in">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
          Financial Planning Tool
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-800 tracking-tight mt-3 mb-3">
          Home Loan & EMI Calculator
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          Estimate your monthly installments, total interest, and down payment budget before finalizing your property.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Input sliders */}
        <div className="md:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col gap-6">
          {/* Property Price */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-slate-700">Property Value</label>
              <span className="text-base font-extrabold text-blue-700">
                ₹ {propertyPrice.toLocaleString("en-IN")}
              </span>
            </div>
            <input
              type="range"
              min="1000000"
              max="100000000"
              step="500000"
              value={propertyPrice}
              onChange={(e) => setPropertyPrice(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>₹10 Lakhs</span>
              <span>₹10 Crores</span>
            </div>
          </div>

          {/* Down Payment */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-slate-700">Down Payment</label>
              <span className="text-base font-extrabold text-emerald-700">
                ₹ {downPayment.toLocaleString("en-IN")} ({Math.round((downPayment / propertyPrice) * 100)}%)
              </span>
            </div>
            <input
              type="range"
              min="0"
              max={propertyPrice}
              step="100000"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
          </div>

          {/* Interest Rate */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-slate-700">Interest Rate (p.a.)</label>
              <span className="text-base font-extrabold text-slate-800">{interestRate}%</span>
            </div>
            <input
              type="range"
              min="6.5"
              max="15"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-800"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>6.5%</span>
              <span>15.0%</span>
            </div>
          </div>

          {/* Loan Tenure */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-slate-700">Loan Tenure</label>
              <span className="text-base font-extrabold text-slate-800">{loanTermYears} Years</span>
            </div>
            <input
              type="range"
              min="1"
              max="30"
              step="1"
              value={loanTermYears}
              onChange={(e) => setLoanTermYears(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-800"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>1 Year</span>
              <span>30 Years</span>
            </div>
          </div>
        </div>

        {/* Results summary card */}
        <div className="md:col-span-5 bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <FaCalculator /> Monthly Commitment
            </div>
            <p className="text-slate-400 text-xs">Estimated Monthly EMI</p>
            <p className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              ₹ {Math.round(emi).toLocaleString("en-IN")}
              <span className="text-xs font-normal text-slate-300 ml-1">/ month</span>
            </p>
          </div>

          <div className="space-y-4 py-6 border-t border-b border-slate-700/80 my-4 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-400">Principal Loan Amount</span>
              <span className="font-semibold text-white">₹ {principal.toLocaleString("en-IN")}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Total Interest Payable</span>
              <span className="font-semibold text-amber-400">₹ {Math.round(totalInterest).toLocaleString("en-IN")}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Total Amount Payable</span>
              <span className="font-bold text-white">₹ {Math.round(totalPayment).toLocaleString("en-IN")}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <FaInfoCircle className="text-slate-400 shrink-0" />
            <span>Actual EMI and rate may vary slightly based on lender credit terms.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
