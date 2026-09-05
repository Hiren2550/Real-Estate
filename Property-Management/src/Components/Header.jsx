import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    //console.log(searchTermFromUrl);
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
      //console.log(searchTerm);
    }
  }, [location.search]);

  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200/80 shadow-sm transition-all duration-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3.5">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-800 leading-none">
              Prime<span className="text-blue-600">Estate</span>
            </span>
            <span className="text-[9px] uppercase tracking-widest text-slate-600 font-semibold mt-0.5">
              Properties
            </span>
          </div>
        </Link>
        <form
          onSubmit={handleSearch}
          className="px-3.5 py-2 bg-slate-50 border border-slate-200/90 rounded-full flex items-center shadow-inner hover:border-slate-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all"
        >
          <input
            className="bg-transparent focus:outline-none w-28 sm:w-60 text-xs sm:text-sm text-slate-700 placeholder:text-slate-400"
            type="text"
            placeholder="Search city, area, property..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="p-1 hover:scale-110 transition-transform">
            <FaSearch className="text-slate-500 hover:text-blue-600 text-xs sm:text-sm" />
          </button>
        </form>
        <ul className="flex items-center gap-1 sm:gap-2.5 text-xs sm:text-sm font-medium">
          <Link to="/">
            <li className="text-slate-700 hover:text-blue-700 hover:bg-slate-100/80 px-2 py-1.5 rounded-lg transition-colors">
              Home
            </li>
          </Link>
          <Link to="/calculator">
            <li className="hidden md:inline text-slate-700 hover:text-blue-700 hover:bg-slate-100/80 px-2 py-1.5 rounded-lg transition-colors">
              Calculator
            </li>
          </Link>
          <Link to="/about">
            <li className="text-slate-700 hover:text-blue-700 hover:bg-slate-100/80 px-2 py-1.5 rounded-lg transition-colors">
              About
            </li>
          </Link>
          <Link to="/contact">
            <li className="text-slate-700 hover:text-blue-700 hover:bg-slate-100/80 px-2 py-1.5 rounded-lg transition-colors">
              Contact
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.avatar}
                alt="Profile"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
                }}
                className="rounded-full w-7 h-7 sm:w-8 sm:h-8 object-cover flex items-center border border-slate-300"
              />
            ) : (
              <li className="text-slate-800 hover:underline px-1 py-1 font-medium">
                Sign In
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
