import React from 'react';
import { CheckIcon, SparklesIcon } from 'lucide-react';
export function ProductDetails() {
  return <section id="product" className="py-24 bg-white relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-secondary/10 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Product image */}
            <div className="relative group order-2 lg:order-1">
              {/* Animated gradient border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl opacity-30 group-hover:opacity-50 transition blur-2xl animate-pulse"></div>

              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-3xl opacity-20"></div>
                <img src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&h=600&fit=crop" alt="TechPup HugVest Product" className="rounded-2xl shadow-2xl w-full relative z-10 transform group-hover:scale-105 transition duration-500" />
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full shadow-2xl z-20 flex items-center space-x-2">
                <SparklesIcon size={20} />
                <span className="font-bold">AI-Powered</span>
              </div>
            </div>

            {/* Product details */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                TechPup Biometric Anti-Anxiety{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  HugVest
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                The world's first AI-powered smart vest that provides real-time
                comfort and health monitoring for your beloved pet.
              </p>

              {/* Pricing card */}
              <div className="relative mb-8 group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-50 group-hover:opacity-75 transition blur"></div>

                <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                  <div className="flex items-baseline mb-6">
                    <span className="text-6xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      $199
                    </span>
                    <span className="text-gray-600 ml-3 text-lg">USD</span>
                  </div>
                  <p className="text-gray-600 mb-6 font-medium">
                    One-time purchase • Lifetime access
                  </p>

                  <div className="space-y-3 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg">
                      <span className="text-gray-700 font-medium">
                        Monthly Plan
                      </span>
                      <span className="font-bold text-gray-900">$12/mo</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border-2 border-primary/20">
                      <span className="text-gray-700 font-medium">
                        Annual Plan
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs bg-gradient-to-r from-primary to-secondary text-white px-2 py-1 rounded-full">
                          Save 20%
                        </span>
                        <span className="font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          $144/yr
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features list */}
              <div className="space-y-4 mb-8">
                {['AI-powered emotional analysis and comfort delivery', 'Real-time health and activity monitoring', 'GPS tracking and geofencing alerts', 'Premium app features and community access'].map((item, i) => <div key={i} className="flex items-start space-x-3 group">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition">
                      <CheckIcon className="text-white" size={16} />
                    </div>
                    <span className="text-gray-700 leading-relaxed">
                      {item}
                    </span>
                  </div>)}
              </div>

              {/* CTA button */}
              <button className="group relative w-full md:w-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full blur opacity-50 group-hover:opacity-100 transition"></div>
                <div className="relative px-10 py-5 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-bold text-lg shadow-xl group-hover:shadow-2xl transition transform group-hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Get Started for Free</span>
                  <SparklesIcon size={20} className="group-hover:rotate-12 transition" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>;
}