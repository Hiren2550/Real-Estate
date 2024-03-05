import React, { useState } from "react";
import Loading from "../Components/Loading";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoad(true);
      const res = await fetch("/api/auth/signup", {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      //console.log(data);
      setLoad(false);
      /* if (data.success == false) {
        setLoad(false);
        setError(data.message);
        return;
      }
      */
    } catch (error) {
      setError(error.message);
      setLoad(false);
    }
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className=" p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {error && (
          <p className="text-red-500 mt-2">
            Please enter valid non-empty input :{error}
          </p>
        )}
        <input
          className=" border p-3 focus:outline-none rounded-lg"
          type="text"
          placeholder="Enter username"
          id="username"
          onChange={handleChange}
        />
        <input
          className=" border p-3 focus:outline-none rounded-lg"
          type="email"
          placeholder="Enter email"
          id="email"
          onChange={handleChange}
        />
        <input
          className=" border p-3 focus:outline-none rounded-lg"
          type="password"
          placeholder="Enter password"
          id="password"
          onChange={handleChange}
        />
        <button className="bg-slate-700 rounded-lg text-white p-3 uppercase hover:opacity-95  disabled:opacity-80">
          {load ? <Loading /> : "Sign Up"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-600">Sign In</span>
        </Link>
      </div>
    </div>
  );
}
