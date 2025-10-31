import React from 'react';
import { HeartIcon } from 'lucide-react';
export function SocialImpact() {
  return <section className="py-24 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-secondary/50 via-transparent to-primary/50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center text-white">
          {/* Icon */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-white/30 rounded-full blur-2xl"></div>
            <div className="relative w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto shadow-2xl border border-white/30">
              <HeartIcon size={48} className="animate-pulse" />
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Every Dog Deserves Love
          </h2>

          <p className="text-xl md:text-2xl mb-12 opacity-95 leading-relaxed max-w-3xl mx-auto">
            We're committed to making a difference. For every HugVest sold, we
            donate a vest and app access to animal shelters, helping traumatized
            and anxious pets find comfort and healing.
          </p>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-6 mt-16">
            {[{
            number: '500+',
            label: 'Shelters Supported'
          }, {
            number: '2,000+',
            label: 'Dogs Helped'
          }, {
            number: '100%',
            label: 'Love Given'
          }].map((stat, i) => <div key={i} className="relative group">
                <div className="absolute -inset-0.5 bg-white/30 rounded-2xl blur group-hover:bg-white/40 transition"></div>
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20 group-hover:bg-white/20 transition">
                  <div className="text-5xl md:text-6xl font-black mb-3">
                    {stat.number}
                  </div>
                  <div className="text-lg opacity-90 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}