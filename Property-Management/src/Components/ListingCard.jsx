import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

export default function ListingCard({ listing }) {
  return (
    <div className="bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden rounded-xl w-full sm:w-[270px] max-w-md mx-auto sm:mx-0 border border-slate-100 flex flex-col justify-between animate-fade-in group">
      <Link to={`/listing/${listing._id}`} className="flex flex-col h-full">
        <div className="relative overflow-hidden">
          <img
            src={
              listing.imageUrls[0] ||
              "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
            }
            alt="listing image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80";
            }}
            className="h-[210px] sm:h-[180px] w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <span
            className={`absolute top-2.5 left-2.5 text-xs font-semibold px-2.5 py-1 rounded-full shadow text-white ${
              listing.type === "rent" ? "bg-amber-600" : "bg-emerald-600"
            }`}
          >
            {listing.type === "rent" ? "Rent" : "Buy"}
          </span>
          {listing.offer && (
            <span className="absolute top-2.5 right-2.5 text-xs font-bold px-2 py-0.5 rounded-md bg-rose-600 text-white shadow">
              OFFER
            </span>
          )}
        </div>
        <div className="p-4 flex flex-col gap-2 flex-1 justify-between">
          <div>
            <p className="truncate text-base sm:text-lg font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
              {listing.name}
            </p>
            <div className="flex items-center gap-1 mt-1">
              <MdLocationOn className="h-4 w-4 text-emerald-600 shrink-0" />
              <p className="truncate text-xs sm:text-sm text-slate-500 w-full">
                {listing.address}
              </p>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mt-2 leading-relaxed">
              {listing.description}
            </p>
          </div>

          <p className="text-slate-700 mt-2 font-semibold flex items-center">
            ₹
            {listing.offer === true
              ? listing.discountPrice.toLocaleString("en-us")
              : listing.regularPrice.toLocaleString("en-us")}
            {listing.type === "rent" && " / month"}
          </p>
          <div className="text-slate-700 flex gap-4">
            <div className="font-bold text-xs">
              {listing.bedrooms > 1
                ? `${listing.bedrooms} beds`
                : `${listing.bedrooms} bed`}
            </div>
            <div className="font-bold text-xs">
              {listing.bathrooms > 1
                ? `${listing.bathrooms} baths`
                : `${listing.bathrooms} bath`}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
