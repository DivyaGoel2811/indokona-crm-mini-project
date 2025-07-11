import React, { useEffect, useState } from "react";

function Funnel() {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="p-4 bg-blue-50 rounded-lg shadow-md my-4 text-center">
      <h2 className="text-xl font-bold mb-2">⏱️ Day 3 — Funnel Landing Page</h2>
      <h3 className="text-lg font-semibold mb-4">Special Offer Ends In:</h3>
      <p className="text-3xl font-bold mb-4 text-red-600">{seconds}s</p>
      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
        Claim Offer
      </button>
    </section>
  );
}

export default Funnel;
