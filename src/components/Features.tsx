import { HeartHandshakeIcon, BrainCircuitIcon, ActivityIcon, BatteryChargingIcon, ShieldCheckIcon, UsersIcon, MapPinIcon } from 'lucide-react';

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
    }];

    return (
        <section id="features" className="py-24 relative overflow-hidden">
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

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                        {features.map((feature, index) => (
                            <div key={index} className="group relative">
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
                            </div>
                        ))}
                    </div>

                    {/* Video Section */}
                    <div className="relative">
                        {/* Section Title */}
                        <div className="text-center mb-12">
                            <h3 className="text-4xl md:text-5xl font-black mb-4">
                                See It In{' '}
                                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  Action
                </span>
                            </h3>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Watch how our AI-powered smart vest transforms pet comfort and connectivity
                            </p>
                        </div>

                        {/* Video Container */}
                        <div className="relative max-w-6xl mx-auto">
                            {/* Gradient glow effect */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl opacity-20 blur-3xl animate-pulse"></div>

                            {/* Video wrapper with elegant frame */}
                            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl overflow-hidden group">
                                {/* Shine overlay effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000 z-10"></div>

                                {/* Video element */}
                                <video
                                    className="w-full h-auto rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    poster="/media/tech-poster.jpg" // Optional: add a poster frame
                                >
                                    <source src="/media/tech.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>

                                {/* Play button overlay for mobile */}
                                <div className="absolute inset-0 flex items-center justify-center md:hidden">
                                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                                            <div className="w-0 h-0 border-l-[12px] border-l-gray-900 border-y-[8px] border-y-transparent ml-1"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating info badges */}
                                <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm rounded-2xl p-3 shadow-2xl animate-float">
                                    <div className="text-sm font-bold text-white">AI Technology</div>
                                </div>
                                <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-2xl p-3 shadow-2xl animate-float delay-1000">
                                    <div className="text-sm font-bold text-white">Smart Comfort</div>
                                </div>
                                <div className="absolute bottom-6 left-6 bg-white/20 backdrop-blur-sm rounded-2xl p-3 shadow-2xl animate-float delay-2000">
                                    <div className="text-sm font-bold text-white">Real-time</div>
                                </div>
                            </div>

                            {/* Call to action below video */}
                            <div className="text-center mt-8">
                                <p className="text-gray-600 text-lg mb-4">
                                    Ready to experience the future of pet comfort?
                                </p>
                                <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                                    Join the Waitlist
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}