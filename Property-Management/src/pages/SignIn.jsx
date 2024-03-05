import React, { useState } from "react";
import Loading from "../Components/Loading";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(formData).length >= 2) {
      try {
        setLoad(true);
        //console.log(Object.keys(formData).length);
        const res = await fetch("/api/auth/signIn", {
          method: "post",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        //console.log(data);
        if (data.success == false) {
          setLoad(false);
          setError(data.message);
          return;
        }
        setLoad(false);
        setError(null);
        navigate("/");
      } catch (error) {
        setLoad(false);
        setError(error.message);
      }
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
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
          {load ? <Loading /> : "Sign In"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont have an account?</p>
        <Link to={"/sign-up"}>
          <span className="text-blue-600">Sign Up</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-2">Error message:{error}</p>}
    </div>
  );
}
