import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-gradient-to-b from-[#020617] to-[#0c1222] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
          About Me
        </h2>

        <div className="bg-slate-800 p-8 rounded-3xl shadow-2xl border border-slate-800 space-y-8">
         {/* Text Content */}
<div className="text-center text-white text-xl space-y-6">
  <p>
    I am an enthusiastic Web Developer with a strong foundation in HTML, CSS, JavaScript, and React. I am passionate about building responsive, user-friendly, and visually appealing web applications.
  </p>
  <p>
    During my learning journey, I have worked on several projects that enhanced my skills in front-end development, API integration, and basic back-end functionality. I enjoy solving challenges and continuously improving my coding practices.
  </p>
  <p>
    When I'm not coding, I love exploring new web technologies, contributing to small open-source projects, and experimenting with UI/UX design ideas. I am eager to grow as a professional and deliver meaningful web solutions.
  </p>
</div>


          {/* Image in Circle and Center */}
          <div className="flex justify-center">
            <img
  src="./src/assets/pic-removebg-preview.png"
  alt="Profile"
  className="w-48 h-48 lg:w-64 lg:h-64 rounded-full border-4 border-white shadow-xl object-cover"
/>

          </div>
        </div>
      </div>
    </section>
  );
}





