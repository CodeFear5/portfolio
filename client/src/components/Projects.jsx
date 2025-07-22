import React from 'react';

const projects = [
  {
    title: 'FormFlow',
    link: 'https://github.com/CodeFear5/FormFlow',
    stack: ['React', 'Node.js', 'MongoDB', 'Twilio API'],
    desc: 'Automated form builder with multilingual support, lead dashboard, and WhatsApp/email follow-ups.',
    features: ['Multi-language forms', 'Real-time analytics', 'Automated follow-ups', 'Role-based access']
  },
  {
    title: 'Complaint Tracker',
    link: 'https://github.com/CodeFear5/Complaint-Tracker',
    stack: ['Spring Boot', 'React', 'MySQL', 'JWT Auth'],
    desc: 'Role-based complaint logging and analytics dashboard with resolution tracking.',
    features: ['User/admin dashboards', 'Analytics charts', 'Status tracking', 'Email notifications']
  },
  {
    title: 'Interview Scheduler',
    link: 'https://github.com/CodeFear5/Interview-Scheduler',
    stack: ['Spring MVC', 'JSP', 'MySQL', 'Bootstrap'],
    desc: 'Schedule and manage interview slots with candidate tracking and role-based dashboards.',
    features: ['Calendar integration', 'Candidate profiles', 'Reminder system', 'Reporting']
  }
];

function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto fade-in">
      <div className="group mb-12">
        <h3 className="text-3xl sm:text-4xl font-bold text-green-500 dark:text-green-400 mb-2 flex items-center">
          <span className="mr-2">projects</span>
 
        </h3>
        <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full"></div>
      </div>

      <div className="grid gap-8">
        {projects.map((project) => (
          <div 
            key={project.title} 
            className="bg-white/80 dark:bg-gray-800/70 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-400 transition-all duration-300 backdrop-blur-sm group"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <h4 className="text-2xl font-bold text-gray-800 dark:text-cyan-300">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="hover:underline hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                      {project.title}
                    </a>
                  </h4>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 text-xs sm:text-sm bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="md:w-1/3">
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    Key Features
                  </h5>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                        <svg className="w-4 h-4 mt-0.5 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a 
          href="https://github.com/CodeFear5" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:border-green-500 dark:hover:border-green-400 transition-all"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View All Projects on GitHub
        </a>
      </div>
    </section>
  );
}

export default Projects;