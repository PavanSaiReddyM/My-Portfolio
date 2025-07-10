import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto"></div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 sm:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Hello! I'm Moola Pavan Sai Reddy
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a passionate computer science student with a deep love for problem-solving and technology. 
                My journey in programming began with curiosity about how things work, and it has evolved into 
                a dedicated pursuit of excellence in software development.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I thrive on challenges, whether it's solving complex algorithms on LeetCode, building 
                full-stack applications, or exploring the fascinating world of artificial intelligence. 
                My goal is to create meaningful software solutions that make a positive impact.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-black/20 rounded-xl p-6 border border-purple-500/10">
                <h4 className="text-xl font-semibold text-purple-400 mb-4">Areas of Interest</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Competitive Programming
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                    Full-Stack Web Development
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mr-3"></div>
                    Artificial Intelligence & Machine Learning
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-fuchsia-400 rounded-full mr-3"></div>
                    Data Structures & Algorithms
                  </li>
                </ul>
              </div>

              <div className="bg-black/20 rounded-xl p-6 border border-purple-500/10">
                <h4 className="text-xl font-semibold text-purple-400 mb-4">Current Focus</h4>
                <p className="text-gray-300">
                  Actively seeking SDE roles and internships while continuously improving my 
                  problem-solving skills and building innovative projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
