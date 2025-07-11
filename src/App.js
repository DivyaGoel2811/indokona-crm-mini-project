import React from "react";
import Dashboard from "./components/Dashboard";
import LeadForm from "./components/LeadForm";
import Funnel from "./components/Funnel";
import WeatherCard from "./components/WeatherCard";
import EmailForm from "./components/EmailForm";

function App() {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8 font-sans">
      <h1 className="text-3xl font-bold text-center mb-8">
        Indokona One-Page Assignment 🚀
      </h1>
      <Dashboard />
      <LeadForm />
      <Funnel />
      <WeatherCard />
      <EmailForm />
    </div>
  );
}

export default App;
