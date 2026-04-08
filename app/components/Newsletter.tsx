"use client";

import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <section className="bg-[#fffaf9] px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        
        <h2 className="font-serif text-2xl md:text-3xl text-gray-800 italic mb-4">
          Stay in the Atelier Loop
        </h2>

        <p className="text-gray-500 mb-10">
          Be the first to hear about new collections, workshop dates, and
          exclusive market day previews.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center"
        >
          <input
            type="email"
            required
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-[420px] px-5 py-4 rounded-lg bg-[#E5E2E1] placeholder-gray-500 text-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-300"
          />

          <button
            type="submit"
            className="bg-[#8C4B55] text-white px-8 py-4 rounded-full transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;