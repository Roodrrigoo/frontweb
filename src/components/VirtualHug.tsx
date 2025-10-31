import React from 'react';
import { HeartIcon, SmartphoneIcon, WifiIcon } from 'lucide-react';
export function VirtualHug() {
  const steps = [{
    icon: SmartphoneIcon,
    title: 'Open the App',
    description: 'Launch the TechPup app on your smartphone from anywhere in the world.'
  }, {
    icon: HeartIcon,
    title: 'Send a Hug',
    description: "Tap the hug button to activate the vest's gentle vibration system."
  }, {
    icon: WifiIcon,
    title: 'Instant Comfort',
    description: 'Your dog feels the warmth and comfort of your presence, reducing anxiety instantly.'
  }];
  return <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              Send a{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Virtual Hug
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay connected with your pet no matter where you are. The TechPup
              App lets you send comforting hugs through AI-driven haptic
              feedback.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => <div key={index} className="relative group">
                {/* Gradient border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-100 transition blur"></div>

                <div className="relative bg-white p-8 rounded-2xl shadow-lg group-hover:shadow-2xl transition">
                  {/* Icon with gradient background */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-50"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition">
                      <step.icon className="text-white" size={36} />
                    </div>
                  </div>

                  {/* Step number */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {index + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}