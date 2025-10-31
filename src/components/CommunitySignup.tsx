import React, { useState } from 'react';
import { SparklesIcon } from 'lucide-react';
export function CommunitySignup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Welcome to the TechPup community, ${formData.firstName}!`);
    setFormData({
      firstName: '',
      lastName: '',
      email: ''
    });
  };
  return <section className="py-24 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-white to-secondary/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary/20 shadow-lg">
              <SparklesIcon className="text-secondary" size={18} />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold text-sm">
                Join 10,000+ Pet Lovers
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Join the{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Community
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Be part of a growing community of pet lovers who are embracing the
              future of pet care technology.
            </p>
          </div>

          {/* Form card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl opacity-30 group-hover:opacity-50 transition blur-xl"></div>

            <form onSubmit={handleSubmit} className="relative bg-white/90 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-primary/10">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-bold text-gray-700 mb-2">
                    First Name
                  </label>
                  <input type="text" id="firstName" value={formData.firstName} onChange={e => setFormData({
                  ...formData,
                  firstName: e.target.value
                })} required className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition bg-white" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-bold text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input type="text" id="lastName" value={formData.lastName} onChange={e => setFormData({
                  ...formData,
                  lastName: e.target.value
                })} required className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition bg-white" placeholder="Doe" />
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                  Email Address
                </label>
                <input type="email" id="email" value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} required className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition bg-white" placeholder="john@example.com" />
              </div>

              <button type="submit" className="group/btn relative w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-xl blur opacity-50 group-hover/btn:opacity-100 transition"></div>
                <div className="relative w-full px-8 py-5 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold text-lg shadow-xl group-hover/btn:shadow-2xl transition transform group-hover/btn:scale-105 flex items-center justify-center space-x-2">
                  <span>Join the Community</span>
                  <SparklesIcon size={20} className="group-hover/btn:rotate-12 transition" />
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
}