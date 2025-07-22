import { FaReact, FaJava, FaGitAlt, FaGithub, FaAws } from 'react-icons/fa';
import { 
  SiSpringboot, 
  SiMongodb, 
  SiTailwindcss, 
  SiMysql, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiPostman, 
  SiDocker, 
  SiLeetcode, 
 
  } from 'react-icons/si';
 import { DiEclipse } from "react-icons/di";

import { SiIntellijidea } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
 const Skills = () => {
  const skillCategories = [
    {
      name: 'Frontend',
      icon: '💻',
      skills: [
        { name: 'React.js', icon: <FaReact className="text-sky-500 text-4xl" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400 text-4xl" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400 text-4xl" /> },
        { name: 'HTML5', icon: <SiHtml5 className="text-orange-500 text-4xl" /> },
        { name: 'CSS3', icon: <SiCss3 className="text-blue-500 text-4xl" /> }
      ]
    },
    {
      name: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Java', icon: <FaJava className="text-orange-600 text-4xl" /> },
        { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500 text-4xl" /> },
        { name: 'REST APIs', icon: '🔌' },
        { name: 'JPA/Hibernate', icon: '🗄️' },
        { name: 'MySQL', icon: <SiMysql className="text-blue-600 text-4xl" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-600 text-4xl" /> }
      ]
    },
    {
      name: 'Dev Tools',
      icon: '🛠️',
      skills: [
        { name: 'Git', icon: <FaGitAlt className="text-red-500 text-4xl" /> },
        { name: 'GitHub', icon: <FaGithub className="text-gray-800 dark:text-white text-4xl" /> },
        { name: 'Postman', icon: <SiPostman className="text-orange-500 text-4xl" /> },
        { name: 'VS Code', icon: <VscVscodeInsiders className="text-blue-500 text-4xl" /> },  // Corrected icon
           { name: 'IntelliJ IDEA', icon: <SiIntellijidea className="text-[#000000] dark:text-[#ffffff] text-4xl" /> }, // JetBrains black/white
    { name: 'Eclipse', icon: <DiEclipse className="text-[#2c2255] text-4xl" /> } 


        
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: '☁️',
      skills: [
        { name: 'AWS (EC2, S3)', icon: <FaAws className="text-amber-500 text-4xl" /> },
        { name: 'Docker Basics', icon: <SiDocker className="text-blue-400 text-4xl" /> },
        { name: 'CI/CD Concepts', icon: '🔄' }
      ]
    },
{
  name: 'Problem Solving',
  icon: '🧩',
  skills: [
    { name: '400+ DSA Problems', icon: '💯' },
    { name: 'LeetCode', icon: <SiLeetcode className="text-orange-500 text-4xl" /> },
    { name: 'GeeksforGeeks', icon: <span className="text-green-600 text-1xl">GFG</span> },
    { name: 'InterviewBit', icon: <span className="text-red-500 text-1xl">IB</span> }
  ]
},
    {
  name: 'Other Skills',
  icon: '🌟',
  skills: [
    { name: 'JWT Authentication' },
    { name: 'Agile Methodology' },
    { name: 'System Design Basics' }
  ]
}
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="group mb-12 text-center">
        <h3 className="text-3xl sm:text-4xl font-bold text-green-500 dark:text-green-400 mb-2">
          <span className="font-mono">skills</span>
 
        </h3>
        <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-cyan-500 mx-auto mt-2 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className="bg-white/80 dark:bg-gray-800/70 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-400 transition-all duration-300 backdrop-blur-sm"
          >
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">{category.icon}</span>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-cyan-300">{category.name}</h4>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex} 
                  className="flex items-center space-x-2 p-2 rounded-lg bg-gray-50 dark:bg-gray-700/50"
                >
                  {typeof skill.icon === 'string' ? (
                    <span className="text-2xl">{skill.icon}</span>
                  ) : (
                    skill.icon
                  )}
                  <span className="text-sm text-gray-700 dark:text-gray-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center italic text-gray-600 dark:text-gray-400">
        "Continuously expanding my toolkit with new technologies and problem-solving approaches"
      </div>
    </section>
  );
};

export default Skills;