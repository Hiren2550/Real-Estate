import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Contact({ listing }) {
  const [landload, setLandload] = useState(null);
  const [message, setMessage] = useState("");
  useEffect(() => {
    const fetchLandload = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandload(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchLandload();
  }, [listing.userRef]);

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  return (
    <>
      {landload && (
        <div className="flex flex-col gap-2">
          <p>
            Contact <span className="font-semibold">{landload.username}</span>{" "}
            for{" "}
            <span className="font-semibold">{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            name="message"
            id="message"
            rows={2}
            value={message}
            onChange={handleMessage}
            placeholder="Enter your message here..."
            className="w-full focus:outline-none border border-gray-700 rounded-lg p-3"
          ></textarea>

          <Link
            to={`mailto:${landload.email}?subject=Regarding ${listing.name}&body=${message}`}
            className="text-white bg-slate-700 text-center p-3 rounded-lg uppercase hover:opacity-95"
          >
            Send Message
          </Link>
        </div>
      )}
    </>
  );
}
