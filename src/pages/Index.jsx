import React from 'react';
import Navbar from '../components/navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import LeetCode from '../components/Leetcode';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <LeetCode />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
