import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0e1423] text-gray-300 py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">

        {/* Left Section */}
        <div className="text-left max-w-lg">
          <h2 className="text-3xl font-bold text-yellow-400 mb-2">Nagesh B C</h2>
          <p className="text-xl font-mono text-white mb-2">
            Final Year ISE Student | Full Stack Developer
          </p>
          <p className="text-base text-gray-400 leading-relaxed">
            Consistent in academic performance and passionate about solving real-world problems using code.
          </p>
          <p className="text-sm text-gray-500 mt-6">© 2025 Nagesh. All rights reserved.</p>
        </div>

        {/* Right Section */}
        <div className="text-left">
          <h3 className="text-2xl font-semibold text-white mb-4">Connect with me:</h3>

          <div className="flex flex-wrap gap-5 text-base">

            {/* Email */}
            <a href="mailto:nageshbc55@gmail.com" className="flex items-center gap-2 hover:text-yellow-400 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>

            {/* GitHub */}
            <a href="https://github.com/CodeFear5" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.599.111.793-.261.793-.578v-2.234c-3.337.726-4.033-1.416-4.033-1.416-.546-1.387-1.332-1.756-1.332-1.756-1.09-.744.083-.728.083-.728 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.806 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.468-2.381 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.323 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.243 2.874.118 3.176.77.839 1.235 1.91 1.235 3.22 0 4.609-2.807 5.625-5.479 5.922.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.799 24 17.302 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com/in/nagesh-b-c-b5614b254" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>

            {/* LeetCode */}
            <a href="https://leetcode.com/u/codeinovator/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-yellow-400 transition">
              <img src="https://leetcode.com/favicon.ico" alt="LeetCode" className="h-5 w-5" />
              LeetCode
            </a>

            {/* InterviewBit */}
            <a href="https://www.interviewbit.com/profile/nagesh_996/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-indigo-400 transition">
              <img src="https://www.interviewbit.com/favicon.ico" alt="InterviewBit" className="h-5 w-5" />
              InterviewBit
            </a>

            {/* GeeksforGeeks */}
            <a href="https://www.geeksforgeeks.org/user/codeinobgzt/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-400 transition">
              <img src="https://www.geeksforgeeks.org/favicon.ico" alt="GeeksforGeeks" className="h-5 w-5" />
              GFG
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
