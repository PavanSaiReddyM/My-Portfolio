import React from 'react';
import { Download, Eye } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              My Resume
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto"></div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 sm:p-12 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Interested in my background and experience?
            </h3>
            <p className="text-gray-400 text-lg">
              View or download my resume below.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* View Resume */}
            <a
              href="https://drive.google.com/file/d/1WiBzf2iQMbIq9tbqQZ1PG_mFhK5VeVCK/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 bg-white/10 text-white border border-purple-500/30 rounded-lg hover:bg-purple-500/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
            >
              <Eye size={20} className="mr-2" />
              View Resume
            </a>

            {/* Download Resume */}
            <a
              href="https://drive.google.com/uc?export=download&id=1WiBzf2iQMbIq9tbqQZ1PG_mFhK5VeVCK"
              className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105"
            >
              <Download size={20} className="mr-2" />
              Download Resume
            </a>
          </div>

          {/* Highlights */}
          <div className="mt-8 p-6 bg-black/20 rounded-xl border border-purple-500/10">
            <h4 className="text-lg font-semibold text-purple-400 mb-3">Quick Highlights</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div>
                <h5 className="font-medium text-white mb-2">Education</h5>
                <p className="text-gray-400 text-sm">Computer Science Student</p>
              </div>
              <div>
                <h5 className="font-medium text-white mb-2">Focus Areas</h5>
                <p className="text-gray-400 text-sm">Full-Stack Development, DSA, AI/ML</p>
              </div>
              <div>
                <h5 className="font-medium text-white mb-2">Experience</h5>
                <p className="text-gray-400 text-sm">Multiple Projects & Competitive Programming</p>
              </div>
              <div>
                <h5 className="font-medium text-white mb-2">Status</h5>
                <p className="text-gray-400 text-sm">Open to SDE Internships</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
