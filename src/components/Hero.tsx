import React, { useState } from 'react';
import { SparklesIcon, ArrowRightIcon } from 'lucide-react';
export function Hero() {
  const [email, setEmail] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for signing up with: ${email}`);
    setEmail('');
  };
  return <section id="home" className="pt-32 pb-24 relative overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-white to-secondary/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/30 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-full mb-8 border border-primary/20 shadow-lg hover:shadow-xl transition">
            <SparklesIcon className="text-secondary" size={18} />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold text-sm">
              AI-Powered Pet Comfort Technology
            </span>
          </div>

          {/* Main heading with gradient */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="block text-gray-900">The First AI</span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
              Smart Vest
            </span>
            <span className="block text-gray-900">That Sends Hugs!</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Comfort your dog from anywhere with AI-powered haptic feedback that
            simulates the warmth of a human hug.
          </p>

          {/* Email signup form */}
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-10">
            <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-2xl border border-primary/20">
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" required className="flex-1 px-6 py-4 rounded-full bg-transparent focus:outline-none text-gray-900 placeholder-gray-500" />
              <button type="submit" className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-bold hover:shadow-2xl transition transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Get Started</span>
                <ArrowRightIcon size={18} className="group-hover:translate-x-1 transition" />
              </button>
            </div>
          </form>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 text-sm mb-12">
            {['Lowest pre-retail price', 'Free bonus features', 'First Kickstarter access'].map((benefit, i) => <div key={i} className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/10">
                <span className="w-5 h-5 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-xs">
                  ✓
                </span>
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>)}
          </div>

          {/* Product image with gradient border */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl blur-2xl opacity-50"></div>
            <div className="relative bg-white p-3 rounded-3xl shadow-2xl">
              <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=600&fit=crop" alt="Happy dog wearing TechPup HugVest" className="w-full h-auto rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>;
}