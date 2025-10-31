import React from 'react';
import { LinkedinIcon } from 'lucide-react';
export function Advisors() {
  const advisors = [{
    name: 'Dr. Gino Yu',
    title: 'Digital Entertainment & Game Development Expert',
    description: 'Leading authority in interactive media and digital innovation',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    linkedin: '#'
  }, {
    name: 'Andrew Chen',
    title: 'Strategic Advisor, Arion Ventures',
    description: 'Venture capital and strategic growth specialist',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop',
    linkedin: '#'
  }, {
    name: 'Chandan Sethi',
    title: 'Product Development & Marketing Strategist',
    description: 'Expert in product-market fit and go-to-market strategies',
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&h=400&fit=crop',
    linkedin: '#'
  }, {
    name: 'Dr. Duncan Houston',
    title: 'Medical Veterinarian and CEO, Ask a Vet',
    description: 'Veterinary medicine expert and pet health advocate',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop',
    linkedin: '#'
  }];
  return <section className="py-24 bg-white relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-secondary/10 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Advisors
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guided by industry leaders who share our vision for innovative pet
              care technology.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisors.map((advisor, index) => <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-100 transition blur"></div>

                <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition h-full">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                    <img src={advisor.image} alt={advisor.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />

                    {/* LinkedIn icon */}
                    <a href={advisor.linkedin} target="_blank" rel="noopener noreferrer" className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition z-20 hover:bg-white shadow-lg">
                      <LinkedinIcon size={18} className="text-secondary" />
                    </a>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold mb-1 text-gray-900">
                      {advisor.name}
                    </h3>
                    <div className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold text-sm mb-2">
                      {advisor.title}
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {advisor.description}
                    </p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}