import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'My Portfolio',
      description:
        'A fully responsive personal portfolio built using modern web technologies for showcasing developer profiles and projects.',
      image: '/src/images/940f514f-3688-4c49-95de-aa6c6389aebf.png',
      technologies: ['React', 'JavaScript','CSS','HTML'],
      githubUrl: 'https://github.com/PavanSaiReddyM/My-Portfolio',
      liveUrl: '#',
      featured: false,
    },
   {
  title: 'News Scraping App',
  description:
    'A Python-based web scraping tool that automatically collects the latest news articles from multiple sources, extracting headlines, summaries, and publication dates for real-time data analysis or aggregation.',
  image: '/src/images/Screenshot 2025-06-29 095532.png',
  technologies: ['Python', 'BeautifulSoup', 'Requests', 'Pandas'],
  githubUrl: 'https://github.com/PavanSaiReddyM/webscrapping',
  liveUrl: '#',
  featured: false,
},
    {
      title: 'Random Password Generator',
      description:
        'A sleek and responsive web application built with React that allows users to generate strong, customizable passwords with various character options including symbols, numbers, and uppercase letters.',
      image: '/src/images/Screenshot 2025-07-10 151810.png',
      technologies: ['React', 'JavaScript', 'CSS', 'HTML'],
      githubUrl: '#',
      liveUrl: 'https://pavan-random-password-generator.netlify.app/',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-400/40 transition-all duration-300 hover:scale-105 flex flex-col h-full ${project.featured ? 'lg:col-span-2' : ''
                }`}
            >
              <div className="relative overflow-hidden aspect-[16/9]">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-3">
                    {project.title}
                  </h3>

                 <p className="text-gray-300 mb-4">

                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  {project.githubUrl !== '#' && project.githubUrl !== '' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-black/30 text-gray-300 rounded-lg hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300 border border-gray-600 hover:border-purple-400/50"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  )}
                  {project.liveUrl !=='#' && project.liveUrl!==''&& (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
