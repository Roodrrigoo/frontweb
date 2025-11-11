// Hero.tsx
import React, { useState } from 'react';
import { SparklesIcon, ArrowRightIcon } from 'lucide-react';

export function Hero() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Thank you for signing up with: ${email}`);
        setEmail('');
    };

    return (
        <section id="home" className="pt-32 pb-0 relative overflow-hidden">
            {/* GIF Background */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src="/media/maingif.gif"
                    alt="TechPup HugVest background"
                    className="w-full h-full object-cover"
                />
                {/* Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Remove the existing gradient backgrounds and floating elements */}

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Badge with enhanced animation */}
                    <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-full mb-8 border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-pulse">
                        <SparklesIcon className="text-secondary animate-spin" size={18} />
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold text-sm">
              AI-Powered Pet Comfort Technology
            </span>
                    </div>

                    {/* Main heading with enhanced gradient animation */}
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
                        <span className="block text-white animate-fade-in">The First AI</span>
                        <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient bg-300%">
              Smart Vest
            </span>
                        <span className="block text-white animate-fade-in delay-200">That Sends Hugs!</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
                        Comfort your dog from anywhere with AI-powered haptic feedback that simulates the warmth of a human hug and relieves anxiety.
                    </p>

                    {/* Email signup form */}
                    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-16 animate-fade-in delay-500">
                        <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-2xl border border-primary/20 hover:shadow-3xl transition-all duration-300">
                            <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="flex-1 px-6 py-4 rounded-full bg-transparent focus:outline-none text-gray-900 placeholder-gray-500 focus:scale-105 transition-transform"
                            />
                            <button
                                type="submit"
                                className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                            >
                                <span>Get Started</span>
                                <ArrowRightIcon size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </form>

                    {/* Benefits with enhanced animations */}
                    <div className="flex flex-wrap justify-center gap-6 text-sm mb-16 animate-fade-in delay-700">
                        {['Lowest pre-retail price', 'Free bonus features', 'First product access'].map((benefit, i) => (
                            <div
                                key={i}
                                className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/10 hover:scale-110 transition-transform duration-300 animate-bounce"
                                style={{ animationDelay: `${i * 200}ms` }}
                            >
                <span className="w-5 h-5 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-xs animate-pulse">
                  ✓
                </span>
                                <span className="text-gray-700 font-medium">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Remove the product image section since we have the GIF background */}
        </section>
    );
}