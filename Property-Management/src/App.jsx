import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import PrivateRoute from "./Components/PrivateRoute";
import CreateListing from "./pages/CreateListing";
import UpdateListing from "./pages/updateListing";
import Listing from "./pages/Listing";
import Search from "./pages/Search";
import ContactUs from "./pages/ContactUs";
import MortgageCalculator from "./pages/MortgageCalculator";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen justify-between">
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/calculator" element={<MortgageCalculator />} />
            <Route path="/listing/:listingId" element={<Listing />} />
            <Route path="/search" element={<Search />} />
            <Route element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/create-listing" element={<CreateListing />} />
              <Route
                path="/update-listing/:listingId"
                element={<UpdateListing />}
              />
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
