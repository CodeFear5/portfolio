import React from 'react';

function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto fade-in">
      <div className="group mb-12">
        <h3 className="text-3xl sm:text-4xl font-bold text-green-500 dark:text-green-400 mb-2 flex items-center">
          <span className="mr-2">education</span>
 
        </h3>
        <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full"></div>
      </div>

      <div className="space-y-8 relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500 dark:from-cyan-500 dark:to-purple-600"></div>
        
        {/* Education Item 1 */}
        <div className="relative pl-10 group">
          <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 dark:from-cyan-500 dark:to-blue-600 flex items-center justify-center shadow-lg">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/70 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 group-hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm">
            <h4 className="text-xl font-bold text-gray-800 dark:text-cyan-300 mb-1">
              B.E. in Information Science Engineering
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Bangalore Institute of Technology | 2022 – 2026
            </p>
            <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full mr-3">
                CGPA: 9.0/10
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Currently Pursuing
              </span>
            </div>
          </div>
        </div>

        {/* Education Item 2 */}
        <div className="relative pl-10 group">
          <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 dark:from-purple-500 dark:to-pink-600 flex items-center justify-center shadow-lg">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/70 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 group-hover:border-purple-400 transition-all duration-300 backdrop-blur-sm">
            <h4 className="text-xl font-bold text-gray-800 dark:text-purple-300 mb-1">
              2nd PUC (Class 12)
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Deeksha Center for Learning | 2020 – 2022
            </p>
            <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                Percentage: 94%
              </span>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="relative pl-10">
          <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 dark:from-yellow-500 dark:to-orange-600 flex items-center justify-center shadow-lg">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/70 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
            <h4 className="text-xl font-bold text-gray-800 dark:text-yellow-300 mb-2">
              Academic Achievements
            </h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <svg className="w-4 h-4 mt-0.5 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
<span>Consistently excellent academic performance in core Computer Science subjects</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mt-0.5 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Active participant in coding competitions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;