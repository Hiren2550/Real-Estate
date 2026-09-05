import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";

import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import { FaLifeRing } from "react-icons/fa";
import ListingCard from "../Components/ListingCard";

export default function Home() {
  SwiperCore.use([Navigation]);
  const [offerListings, setOfferListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAllHomeData = async () => {
      try {
        setLoading(true);
        const [offerRes, rentRes, saleRes] = await Promise.all([
          fetch("/api/listing/get?offer=true&limit=4"),
          fetch("/api/listing/get?type=rent&limit=4"),
          fetch("/api/listing/get?type=sell&limit=4"),
        ]);

        const [offerData, rentData, saleData] = await Promise.all([
          offerRes.json(),
          rentRes.json(),
          saleRes.json(),
        ]);

        if (Array.isArray(offerData)) setOfferListings(offerData);
        if (Array.isArray(rentData)) setRentListings(rentData);
        if (Array.isArray(saleData)) setSaleListings(saleData);
      } catch (error) {
        console.error("Home data fetch error:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllHomeData();
  }, []);
  return (
    <div className="animate-fade-in pb-12">
      {/* top */}
      <div className="flex flex-col gap-6 p-8 px-4 md:p-24 md:px-6 max-w-6xl mx-auto">
        <div className="inline-block self-start px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs sm:text-sm font-semibold tracking-wide">
          ✨ The Smart Way to Find Real Estate
        </div>
        <h1 className="text-slate-800 font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
          Find your next <span className="text-blue-700">Perfect</span>
          <br />
          place with ease
        </h1>
        <div className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
          <p>
            Prime Estate is your premier platform to buy, rent, and discover modern living spaces across India with transparent pricing and verified listings.
          </p>
        </div>

        {/* Quick action buttons & stats */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link
            to={"/search"}
            className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-sm sm:text-base"
          >
            Explore All Properties →
          </Link>
          <Link
            to={"/search?type=rent"}
            className="px-5 py-3 bg-white hover:bg-slate-100 text-slate-700 font-semibold rounded-xl border border-slate-200 shadow-sm transition-all duration-200 text-sm"
          >
            Properties for Rent
          </Link>
          <Link
            to={"/search?type=sell"}
            className="px-5 py-3 bg-white hover:bg-slate-100 text-slate-700 font-semibold rounded-xl border border-slate-200 shadow-sm transition-all duration-200 text-sm"
          >
            Properties for Sale
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 pt-6 max-w-lg border-t border-slate-200/80">
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-800">20+</p>
            <p className="text-xs text-slate-500 font-medium">Curated Listings</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-800">10+</p>
            <p className="text-xs text-slate-500 font-medium">Top Cities</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-800">100%</p>
            <p className="text-xs text-slate-500 font-medium">Verified Photos</p>
          </div>
        </div>
      </div>
      {/* middle */}

      <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url("${listing.imageUrls[0]}")`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="h-[300px] sm:h-[450px] md:h-[500px]"
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>
      {/* lsiting result for offer sale rent */}
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-slate-700 font-semibold text-2xl">
                Recent offers
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?offer=true"}
              >
                Show more offers
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {offerListings.map((listing) => (
                <ListingCard key={listing._id} listing={listing}></ListingCard>
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-slate-700 font-semibold text-2xl">
                Recent places for rent
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?type=rent"}
              >
                Show more places for rent
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {rentListings.map((listing) => (
                <ListingCard key={listing._id} listing={listing}></ListingCard>
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-slate-700 font-semibold text-2xl">
                Recent places for sale
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?type=sell"}
              >
                Show more places for sale
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {saleListings.map((listing) => (
                <ListingCard key={listing._id} listing={listing}></ListingCard>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* bottom */}
    </div>
  );
}
