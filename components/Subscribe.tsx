"use client";

import { useState } from "react";

export function Subscribe() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email) return;

    setSubmitted(true);
  }

  return (
    <section id="subscribe" className="bg-black text-white py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-green-500 font-semibold uppercase tracking-widest">
          Stay Connected
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          Ready To Forge Your Best Performance?
        </h2>

        <p className="mt-6 text-gray-400">
          Get exclusive offers, training tips, and product updates delivered directly to your inbox.
        </p>

        {submitted ? (
          <div className="mt-10 bg-zinc-900 border border-green-500 rounded-xl px-6 py-5 text-green-500 font-semibold">
            Thanks for subscribing! Check your inbox for VitalForge updates.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 flex justify-center gap-4">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-4 w-96 text-white"
            />

            <button
              type="submit"
              className="bg-green-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-green-400 transition"
            >
              Subscribe
            </button>
          </form>
        )}

        <button className="mt-8 text-green-500 font-semibold hover:text-green-400 transition">
          Shop Now →
        </button>
      </div>
    </section>
  );
}