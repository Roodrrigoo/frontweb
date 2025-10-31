import React from 'react';
import { InstagramIcon, YoutubeIcon } from 'lucide-react';
export function Footer() {
  return <footer className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>

      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12">
              <div className="flex items-center space-x-3 mb-8 md:mb-0">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold shadow-2xl">
                  TP
                </div>
                <span className="text-2xl font-bold text-white">
                  TechPup HugVest
                </span>
              </div>

              <div className="flex items-center space-x-6">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition transform hover:scale-110 shadow-lg" aria-label="Instagram">
                  <InstagramIcon size={22} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition transform hover:scale-110 shadow-lg" aria-label="YouTube">
                  <YoutubeIcon size={22} />
                </a>
              </div>
            </div>

            <div className="text-center mb-12">
              <button className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full blur opacity-50 group-hover:opacity-100 transition"></div>
                <div className="relative px-10 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-bold shadow-2xl group-hover:shadow-3xl transition transform group-hover:scale-105">
                  Get Started for Free
                </div>
              </button>
            </div>

            <div className="border-t border-white/10 pt-8 text-center">
              <p className="text-gray-400">
                © 2024 TechPupHugVest. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}