import React from 'react';
import { HeartHandshakeIcon, BrainCircuitIcon, ActivityIcon, BatteryChargingIcon, ShieldCheckIcon, UsersIcon, MapPinIcon, HeadphonesIcon } from 'lucide-react';
export function Features() {
  const features = [{
    icon: HeartHandshakeIcon,
    title: '1-Click to Send a Hug',
    description: 'Instantly comfort your pet with a single tap from anywhere.',
    gradient: 'from-pink-400 to-red-500'
  }, {
    icon: BrainCircuitIcon,
    title: 'AI-Powered Emotional Translator',
    description: "Advanced AI interprets your dog's emotional state in real-time.",
    gradient: 'from-purple-400 to-indigo-500'
  }, {
    icon: ActivityIcon,
    title: 'Real-Time Health Monitoring',
    description: 'Track vital signs and activity levels throughout the day.',
    gradient: 'from-primary to-secondary'
  }, {
    icon: BatteryChargingIcon,
    title: 'Long-Lasting Battery',
    description: 'Up to 7 days of continuous use on a single charge.',
    gradient: 'from-green-400 to-emerald-500'
  }, {
    icon: ShieldCheckIcon,
    title: 'High-Tech Anxiety Relief',
    description: 'Clinically-tested haptic patterns reduce stress and anxiety.',
    gradient: 'from-blue-400 to-cyan-500'
  }, {
    icon: UsersIcon,
    title: 'Community & Connectivity',
    description: 'Connect with other pet owners and share experiences.',
    gradient: 'from-orange-400 to-pink-500'
  }, {
    icon: MapPinIcon,
    title: 'GPS Tracker',
    description: 'Always know where your pet is with built-in GPS tracking.',
    gradient: 'from-red-400 to-rose-500'
  }, {
    icon: HeadphonesIcon,
    title: '24/7 Customer Support',
    description: 'Our team is always here to help you and your pet.',
    gradient: 'from-violet-400 to-purple-500'
  }];
  return <section id="features" className="py-24 relative overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-primary/5 to-secondary/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/20 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              Innovative{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technology designed to enhance your pet's well-being
              and strengthen your bond.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => <div key={index} className="group relative">
                {/* Animated gradient border */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition blur`}></div>

                <div className="relative h-full bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg group-hover:shadow-2xl transition">
                  {/* Icon */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition`}>
                    <feature.icon className="text-white" size={28} />
                  </div>

                  <h3 className="text-lg font-bold mb-2 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover indicator */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition`}></div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}