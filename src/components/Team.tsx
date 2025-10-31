import React from 'react';
import { LinkedinIcon } from 'lucide-react';
export function Team() {
  const teamMembers = [{
    name: 'Shakira Monique',
    title: 'Founder & CEO',
    description: 'Business Development and Researcher at Hong Kong Polytechnic University',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    linkedin: '#'
  }, {
    name: 'Dr. Vaheh Nazari',
    title: 'CTO',
    description: 'PhD in Robotic Engineering',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
    linkedin: '#'
  }, {
    name: 'Tayseer Almattar',
    title: 'COO',
    description: 'Product Design Engineer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
    linkedin: '#'
  }, {
    name: 'Zahin Sajid',
    title: 'Electrical Engineer',
    description: 'Hardware & Circuit Design Specialist',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
    linkedin: '#'
  }, {
    name: 'Gihyun Derek Kim',
    title: 'Software & AI Engineer',
    description: 'Machine Learning & App Development',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    linkedin: '#'
  }, {
    name: 'David Phalaris',
    title: 'Head of Game Development',
    description: 'Interactive Experience Designer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    linkedin: '#'
  }];
  return <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary/5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              Meet Our{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse group of innovators, engineers, and pet lovers working
              together to revolutionize pet care.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => <div key={index} className="group relative">
                {/* Gradient border on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-100 transition blur"></div>

                <div className="relative bg-white rounded-2xl shadow-lg group-hover:shadow-2xl transition overflow-hidden">
                  {/* Image with gradient overlay */}
                  <div className="relative overflow-hidden h-72">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 z-10 opacity-0 group-hover:opacity-100 transition"></div>
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />

                    {/* LinkedIn button on hover */}
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition z-20 hover:bg-white shadow-lg">
                      <LinkedinIcon size={20} className="text-secondary" />
                    </a>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 text-gray-900">
                      {member.name}
                    </h3>
                    <div className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold mb-3">
                      {member.title}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}