import React from "react";

function Dashboard() {
  return (
    <section className="p-4 bg-gray-100 rounded-lg shadow-md my-4">
      <h2 className="text-xl font-bold mb-4">📊 Day 1 — CRM Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-gray-500">Leads</h3>
          <p className="text-2xl font-bold">120</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-gray-500">Revenue</h3>
          <p className="text-2xl font-bold">$45,000</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-gray-500">Customers</h3>
          <p className="text-2xl font-bold">350</p>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
