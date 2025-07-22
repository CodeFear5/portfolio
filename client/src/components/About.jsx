import React from 'react';

function About() {
  return (
    <section className="min-h-screen py-20 px-6 flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-16 relative overflow-hidden max-w-6xl mx-auto font-sans">
      {/* Background Blur Bubbles */}
      <div className="absolute inset-0 overflow-hidden dark:opacity-10 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-400 dark:bg-blue-600 filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-purple-500 dark:bg-purple-600 filter blur-3xl animate-float-delay"></div>
      </div>

      {/* Text Content */}
      <div className="text-center md:text-left z-10 md:w-2/3 space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 dark:text-white leading-tight tracking-tight">
          Hello, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-500">
            Nagesh B C
          </span>
        </h1>

        <div className="inline-block px-4 py-2 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm">
          <span className="text-sm text-gray-700 dark:text-gray-300 font-medium tracking-wide">
            Full Stack Developer · Final Year ISE · BIT Bangalore · Class of 2026
          </span>
        </div>

        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
          I specialize in backend development using{' '}
          <span className="font-semibold text-yellow-600 dark:text-yellow-400">Java</span> and{' '}
          <span className="font-semibold text-yellow-600 dark:text-yellow-400">Spring Boot</span>, and build modern interfaces with{' '}
          <span className="font-semibold text-cyan-600 dark:text-cyan-400">React</span> and{' '}
          <span className="font-semibold text-sky-500 dark:text-sky-400">Tailwind CSS</span>.
          Currently leading the development of{' '}
          <span className="font-semibold text-green-600 dark:text-green-400">FormFlow</span> and a Complaint Tracker system.
        </p>

        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
          I love designing <span className="text-blue-500 dark:text-blue-300">clean APIs</span>, writing{' '}
          <span className="text-green-600 dark:text-green-300">maintainable code</span>, and creating{' '}
          <span className="text-purple-600 dark:text-purple-400">developer-friendly experiences</span>.
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-3 mt-4">
          {['Java', 'Spring Boot', 'React', 'MongoDB', 'REST APIs', 'UI/UX', 'Tailwind CSS'].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-full border border-gray-300 dark:border-gray-600"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-6 flex gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium shadow-md transition-all"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="md:w-1/3 z-10 relative group mb-10 md:mb-0">
        <div className="relative">
          <img
            src="/nagesh.jpeg"
            alt="Nagesh B C"
            className="rounded-full w-64 h-64 sm:w-72 sm:h-72 object-contain border-4 border-green-500 dark:border-green-400 shadow-xl bg-white"
          />
          <div className="absolute inset-0 rounded-full border-4 border-transparent animate-spin-slow pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-500 dark:bg-cyan-400 rounded-full"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-purple-600 dark:bg-purple-500 rounded-full"></div>
          </div>
        </div>
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-50 dark:bg-gray-800 px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-600 text-xs text-cyan-600 dark:text-cyan-300 shadow-sm">
          nagesh.exe
        </div>
      </div>
    </section>
  );
}

export default About;
