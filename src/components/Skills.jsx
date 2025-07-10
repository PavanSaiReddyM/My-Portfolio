import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Full Stack',
      icon: '💻',
      skills: [
        { name: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React.js'] },
        { name: 'Backend & DB', items: ['Node.js', 'Express.js', 'MySQL', 'MongoDB'] }
      ]
    },
    {
      title: 'Languages',
      icon: '📝',
      skills: [
        { name: '', items: ['C', 'Python','C++','JavaScript'] }
      ]
    },
    {
      title: 'Databases',
      icon: '🗄️',
      skills: [
        { name: '', items: ['MySQL', 'MongoDB'] }
      ]
    },
    {
      title: 'Version Control & Tools',
      icon: '🛠️',
      skills: [
        { name: '', items: ['Git'] }
      ]
    },
    {
      title: 'Data Structures & Algorithms',
      icon: '🧠',
      skills: [
        { name: '', items: ['Problem Solving', 'Algorithms', 'Competitive Programming'] }
      ]
    },
    {
      title: 'Areas of Interest',
      icon: '🎯',
      skills: [
        { name: '', items: ['Natural Language Processing (NLP)', 'Artificial Intelligence'] }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/40 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-semibold text-purple-400">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skillGroup, skillIndex) => (
                  <div key={skillIndex}>
                    {skillGroup.name && (
                      <h4 className="text-sm font-medium text-pink-400 mb-2">
                        {skillGroup.name}
                      </h4>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="px-3 py-1 bg-black/30 text-gray-300 rounded-full text-sm border border-gray-600 hover:border-purple-400/50 hover:text-purple-300 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
