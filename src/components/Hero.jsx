import React from "react";

export default function Hero() {
  return (
    <section  id="hero" className="bg-gradient-to-b from-[#020617] to-[#0c1222] py-26 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Inner Hero Card */}
        <div className="text-center py-20 lg:py-28 bg-gradient-to-b from-slate-900 to-slate-950 rounded-3xl shadow-2xl border border-slate-800">

          <p className="text-3xl text-cyan-400 font-semibold mb-4">
            Hello, I'm...
          </p>

          <h1 className="text-3xl sm:text-7xl lg:text-8xl font-black mb-6 leading-tight text-white">
            VIGASHINI SELVARAJ
          </h1>

          <p className="text-xl sm:text-3xl lg:text-4xl text-gray-300 mb-10">
            Crafting seamless and engaging web experiences.
          </p>

          <a
            href="#projects"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-10 rounded-full text-lg shadow-xl transition-transform duration-300 hover:scale-105"
          >
            View My Work ↓
          </a>

        </div>
      </div>
    </section>
  );
}
