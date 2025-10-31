import React from 'react';
import { QuoteIcon, StarIcon } from 'lucide-react';
export function Testimonials() {
  const testimonials = [{
    quote: 'Tech for Dogs',
    author: 'Hugo',
    role: 'Pet Owner',
    rating: 5
  }, {
    quote: 'Stylish and Functional',
    author: 'Jim',
    role: 'Dog Trainer',
    rating: 5
  }, {
    quote: 'A Game Changer for Anxious Pets',
    author: 'Sarah',
    role: 'Veterinarian',
    rating: 5
  }];
  return <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-primary/5 to-secondary/5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              What People Are{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Saying
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-100 transition blur"></div>

                <div className="relative bg-white p-8 rounded-2xl shadow-lg group-hover:shadow-2xl transition h-full">
                  {/* Quote icon with gradient */}
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition">
                    <QuoteIcon className="text-white" size={28} />
                  </div>

                  {/* Stars */}
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => <StarIcon key={i} size={18} className="fill-yellow-400 text-yellow-400" />)}
                  </div>

                  <p className="text-xl font-semibold mb-6 text-gray-800 leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {testimonial.author[0]}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        {testimonial.author}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}