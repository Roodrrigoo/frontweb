import { InstagramIcon, YoutubeIcon, FacebookIcon, TwitterIcon } from 'lucide-react';

export function Footer() {
    return (
        <footer className="relative overflow-hidden">
            {/* Enhanced gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>

            {/* Animated floating elements */}
            <div className="absolute top-10 left-10 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-20 w-6 h-6 bg-secondary rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-primary rounded-full animate-ping"></div>

            <div className="relative z-10 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        {/* Main footer content */}
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
                            {/* Company Info */}
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold shadow-2xl animate-pulse">
                                        TP
                                    </div>
                                    <span className="text-2xl font-bold text-white">
                    TechPup HugVest
                  </span>
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Revolutionizing pet care with AI-powered technology.
                                    Comfort your pets from anywhere with our innovative HugVest.
                                </p>
                                <div className="flex items-center space-x-4">
                                    {[InstagramIcon, YoutubeIcon, FacebookIcon, TwitterIcon].map((Icon, index) => (
                                        <a
                                            key={index}
                                            href="#"
                                            className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg"
                                        >
                                            <Icon size={18} />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Product Links */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-white mb-4">Product</h3>
                                <div className="space-y-2">
                                    {['HugVest Features', 'Pricing Plans', 'Mobile App', 'Accessories', 'New Arrivals'].map((item) => (
                                        <a
                                            key={item}
                                            href="#"
                                            className="block text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-2 transform"
                                        >
                                            {item}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Company Links */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-white mb-4">Company</h3>
                                <div className="space-y-2">
                                    {['About Us', 'Our Story', 'Sustainability', 'Contact', 'Careers'].map((item) => (
                                        <a
                                            key={item}
                                            href="#"
                                            className="block text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-2 transform"
                                        >
                                            {item}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Support Links */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-white mb-4">Support</h3>
                                <div className="space-y-2">
                                    {['Help Center', 'FAQs', 'Shipping Info', 'Returns', 'Next Events'].map((item) => (
                                        <a
                                            key={item}
                                            href="#"
                                            className="block text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-2 transform"
                                        >
                                            {item}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="text-center mb-12">
                            <div className="relative inline-block group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
                                <button className="relative px-12 py-5 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-bold text-lg shadow-2xl group-hover:shadow-3xl transition-all duration-300 transform group-hover:scale-105 group-hover:rotate-1">
                                    Join the Future of Pet Care
                                </button>
                            </div>
                        </div>

                        {/* Bottom section */}
                        <div className="border-t border-white/10 pt-8">
                            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                                <p className="text-gray-400 text-sm">
                                    © 2024 TechPup HugVest. All rights reserved.
                                </p>
                                <div className="flex items-center space-x-6">
                                    {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                                        <a
                                            key={item}
                                            href="#"
                                            className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                                        >
                                            {item}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}