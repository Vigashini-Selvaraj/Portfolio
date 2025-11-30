import { Instagram, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="text-center py-20 bg-gray-900">
      <h2 className="text-4xl font-bold text-cyan-300">Get In Touch</h2>

      <p className="max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed px-4 mt-6">
        I'm currently seeking new challenges and collaborative projects. Whether
        you have an opportunity or just want to discuss tech, my inbox is always open!
      </p>

      {/* Buttons */}
      <div className="flex justify-center">
        {/* Email Button */}
        <a
  href="https://mail.google.com/mail/?view=cm&to=vigashini005@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-cyan-300 border-2 border-cyan-300 px-8 py-3 rounded-3xl text-xl mt-10 mr-6
             hover:bg-cyan-300 hover:text-[#0c1222] transition duration-300 shadow-lg hover:shadow-cyan-400/50"
>
  Say Hello Via Email
</a>


        {/* Resume Button */}
        <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="text-cyan-300 border-2 border-cyan-300 px-8 py-3 rounded-3xl text-xl mt-10
             hover:bg-cyan-300 hover:text-[#0c1222] transition duration-300 shadow-lg hover:shadow-cyan-400/50"
>
  Download My Resume
</a>

      </div>

      {/* Social Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-cyan-300 mb-6">Connect with me on Social Media</h2>

        <div className="flex justify-center gap-6">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/vigashini_selvaraj?igsh=emxvbGg5MWV2eHZk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:text-white transition hover:scale-125 duration-300"
          >
            <Instagram className="w-10 h-10" />
          </a>

          {/* LinkedIn */}
          <a
            href="http://linkedin.com/in/vigashini-selvaraj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:text-white transition hover:scale-125 duration-300"
          >
            <Linkedin className="w-10 h-10" />
          </a>

          {/* GitHub */}
          <a
            href="http://github.com/Vigashini-Selvaraj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:text-white transition hover:scale-125 duration-300"
          >
            <Github className="w-10 h-10" />
          </a>
        </div>
      </div>
    </section>
  );
}
