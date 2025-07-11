import React, { useState } from "react";

function EmailForm() {
  const [email, setEmail] = useState({ to: "", subject: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email Data:", email);
    alert("Email submitted! Check console.");
  };

  return (
    <section className="p-4 bg-purple-50 rounded-lg shadow-md my-4">
      <h2 className="text-xl font-bold mb-4">📧 Day 6 — Email Template</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          placeholder="To"
          className="w-full p-2 border rounded"
          value={email.to}
          onChange={(e) => setEmail({ ...email, to: e.target.value })}
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full p-2 border rounded"
          value={email.subject}
          onChange={(e) => setEmail({ ...email, subject: e.target.value })}
        />
        <textarea
          placeholder="Message"
          className="w-full p-2 border rounded"
          value={email.message}
          onChange={(e) => setEmail({ ...email, message: e.target.value })}
        />
        <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">
          Send Email
        </button>
      </form>
    </section>
  );
}

export default EmailForm;
