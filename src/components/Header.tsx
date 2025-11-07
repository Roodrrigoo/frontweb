// Header.tsx
import { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });
            setMobileMenuOpen(false);
        }
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled
                ? 'bg-white/95 backdrop-blur-sm shadow-md'
                : 'bg-transparent'
        }`}>
            {/* Remove the "Launching Soon" banner */}

            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <img
                            src="/media/logo.jpeg"
                            alt="TechPup Logo"
                            className="w-10 h-10 rounded-full object-cover shadow-lg"
                        />
                        <span className={`text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text transition-colors duration-300 ${
                            isScrolled ? 'text-transparent' : 'text-white'
                        }`}>
              TechPup HugVest
            </span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => scrollToSection('home')}
                            className={`transition ${
                                isScrolled
                                    ? 'text-gray-700 hover:text-secondary'
                                    : 'text-white hover:text-gray-200'
                            }`}
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className={`transition ${
                                isScrolled
                                    ? 'text-gray-700 hover:text-secondary'
                                    : 'text-white hover:text-gray-200'
                            }`}
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection('features')}
                            className={`transition ${
                                isScrolled
                                    ? 'text-gray-700 hover:text-secondary'
                                    : 'text-white hover:text-gray-200'
                            }`}
                        >
                            Features
                        </button>
                        <button
                            onClick={() => scrollToSection('product')}
                            className={`transition ${
                                isScrolled
                                    ? 'text-gray-700 hover:text-secondary'
                                    : 'text-white hover:text-gray-200'
                            }`}
                        >
                            Product
                        </button>
                        <button className={`px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full hover:shadow-lg transition ${
                            !isScrolled && 'shadow-lg'
                        }`}>
                            Log In
                        </button>
                    </div>

                    <button
                        className="md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        style={{
                            color: isScrolled ? '#374151' : 'white'
                        }}
                    >
                        {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 space-y-3 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
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
                    </div>
                )}
            </nav>
        </header>
    );
}