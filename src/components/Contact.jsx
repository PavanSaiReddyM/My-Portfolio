import React from 'react';
import { Mail, MapPin, Phone, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'saireddymoola@gmail.com',
      href: 'mailto:saireddymoola@gmail.com',
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'National Institute of Technology, Delhi Plot No. FA7, Zone P1, GT Karnal Road, Delhi-110036.',
      href: 'https://www.google.com/maps/place/National+Institute+of+Technology+Delhi/@28.8165378,77.130391,863m/data=!3m2!1e3!4b1!4m6!3m5!1s0x390d1b1923ada2e3:0x1169930518add2fe!8m2!3d28.8165378!4d77.1329659!16s%2Fm%2F0l8gg7v?entry=ttu&g_ep=EgoyMDI1MDcwNi4wIKXMDSoASAFQAw%3D%3D',
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/pavan-sai-reddy-moola-605488329/',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Let's Connect</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                target="_blank"
  rel="noopener noreferrer"

                className="flex items-center p-4 bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl hover:border-purple-400/40 transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-colors duration-300 mr-4">
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-medium text-white">{info.label}</h4>
                  <p className="text-gray-400">{info.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-purple-400 mb-4">Why Work With Me?</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                Strong problem-solving skills
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                Passionate about learning new technologies
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-violet-400 rounded-full mr-3"></div>
                Dedicated to writing clean, efficient code
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-fuchsia-400 rounded-full mr-3"></div>
                Team player with excellent communication skills
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
