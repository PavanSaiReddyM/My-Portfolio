import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-purple-500/20 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-gray-400 mb-2">
            © 2025 Moola Pavan Sai Reddy. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;