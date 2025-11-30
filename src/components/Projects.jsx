export default function Projects() {
  const projects = [
    {
      title: "Tutorix",
      description:
        "An AI-powered learning assistant that helps students clarify doubts in real-time, offering personalized explanations and guidance through an interactive, prompt-based interface.",
      img: "./src/assets/pro1.png",
      tech: ["HTML", "CSS", "React", "Gemini API"],
      demo: "http://vijaysudhakar-s.github.io/Tutorix/",
      github: "http://github.com/Vigashini-Selvaraj"
    },
    {
      title: "HerWellness",
      description:
        "A personalized wellness platform providing AI-driven health insights, self-care guidance, and interactive support to help users achieve holistic well-being..",
      img: "./src/assets/pro2.png",
      tech: ["React", "MongoDB", "Gemini API", "Bootstrap"],
      demo: "https://herwellness.netlify.app/",
      github: "http://github.com/Vigashini-Selvaraj"
    }
  ];

  return (
    <section id="projects" className="bg-gradient-to-b from-[#0c1222] to-[#020617] py-12">
      <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-8 max-w-6xl mx-auto">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-slate-800/80 rounded-2xl p-8 shadow-lg border-t-4 border-cyan-400
            flex flex-col justify-between hover:scale-[1.02] transition"
          >
            {/* Title */}
            <h3 className="text-3xl font-bold text-cyan-300 mb-4">
              {proj.title}
            </h3>

            {/* Description */}
            <p className="text-slate-300 mb-5">{proj.description}</p>

            {/* Project Image */}
            <img
              src={proj.img}
              className="rounded-lg mb-5 border border-slate-700"
              alt="project-preview"
            />

            {/* Tech stack */}
            <p className="text-white font-semibold mb-2">Technologies Used:</p>
            <div className="flex flex-wrap gap-3 mb-6">
              {proj.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-slate-700 text-cyan-300 px-3 py-1 rounded-full text-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-6 text-cyan-300 font-semibold">
              <a href={proj.demo} target="_blank" className="hover:underline">
                Live Demo →
              </a>
              <a href={proj.github} target="_blank" className="hover:underline">
                GitHub
              </a>
            </div>
           



          </div>
        ))}
      </div>
       <div className="flex justify-center">
  <button  onClick={() => window.open("http://github.com/Vigashini-Selvaraj", "_blank")}
   className="text-cyan-300 border-2 border-cyan-300 px-8 py-3 rounded-3xl text-xl mt-10
  hover:bg-cyan-300 hover:text-[#0c1222] transition duration-300 shadow-lg hover:shadow-cyan-400/50">
    See All Projects on GitHub
  </button>
</div>


    </section>
  );
}
