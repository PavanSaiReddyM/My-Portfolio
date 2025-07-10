import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SiLeetcode } from "react-icons/si";

const Hero = () => {
  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/PavanSaiReddyM', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/pavan-sai-reddy-moola-605488329/', label: 'LinkedIn' },
    { icon: <SiLeetcode size={20}/>, href: 'https://leetcode.com/u/moolapavansaireddy/', label: 'LeetCode' },
    { icon: <Mail size={20} /> , href: 'mailto:saireddymoola@gmail.com', label: 'Email' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-violet-500/10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-500 p-1 animate-scale-in">
            <img
              src="/src/images/IMG20240324111100~2.jpg"
           
              alt=" Moola Pavan Sai Reddy"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Moola Pavan Sai Reddy
          </span>
        </h1>
        
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 animate-fade-in delay-200">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Aspiring SDE | Passionate About DSA, Web, and AI
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in delay-300">
          Open to SDE roles | Always learning something new
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8 animate-fade-in delay-500">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
      rel="noopener noreferrer"
              className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-full flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-400/50 hover:bg-purple-400/10 transition-all duration-300 hover:scale-110"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 animate-fade-in delay-700"
        >
          View My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;
