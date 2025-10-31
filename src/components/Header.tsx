import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };
  return <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="bg-gradient-to-r from-primary to-secondary text-white text-center py-2 text-sm font-medium">
        🚀 Launching Soon - Sign Up for Early Access!
      </div>

      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold shadow-lg">
              TP
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              TechPup HugVest
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-secondary transition">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-secondary transition">
              About
            </button>
            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-secondary transition">
              Features
            </button>
            <button onClick={() => scrollToSection('product')} className="text-gray-700 hover:text-secondary transition">
              Product
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full hover:shadow-lg transition">
              Log In
            </button>
          </div>

          <button className="md:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {mobileMenuOpen && <div className="md:hidden mt-4 pb-4 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-700 hover:text-secondary transition py-2">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 hover:text-secondary transition py-2">
              About
            </button>
            <button onClick={() => scrollToSection('features')} className="block w-full text-left text-gray-700 hover:text-secondary transition py-2">
              Features
            </button>
            <button onClick={() => scrollToSection('product')} className="block w-full text-left text-gray-700 hover:text-secondary transition py-2">
              Product
            </button>
            <button className="w-full px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full hover:shadow-lg transition">
              Log In
            </button>
          </div>}
      </nav>
    </header>;
}