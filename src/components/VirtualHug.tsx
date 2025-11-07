import  { useState, useEffect } from 'react';
import { HeartIcon, SmartphoneIcon, WifiIcon } from 'lucide-react';

export function VirtualHug() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        '/src/components/media/one.jpg',
        '/src/components/media/two.jpg',
        '/src/components/media/three.jpg',
        '/src/components/media/four.jpg',
        '/src/components/media/five.jpg',
        '/src/components/media/six.jpg',
        '/src/components/media/seven.jpg',
        '/src/components/media/eight.jpg',
        '/src/components/media/nine.jpg',
        '/src/components/media/ten.jpg'
    ];

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

    // Auto-rotate images every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-black mb-4">
                            Send a{' '}
                            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Virtual Hug
              </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Stay connected with your pet no matter where you are. The TechPup Hugvest translates your dog's emotions anytime while the TechPup App lets you send comforting hugs through our anxiety relief system when your pup most needs it!
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* Steps Section */}
                        <div className="lg:w-2/5">
                            <div className="space-y-8">
                                {steps.map((step, index) => (
                                    <div key={index} className="relative group">
                                        {/* Gradient border effect */}
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-100 transition blur"></div>

                                        <div className="relative bg-white p-8 rounded-2xl shadow-lg group-hover:shadow-2xl transition h-full">
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
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Image Carousel Section */}
                        <div className="lg:w-3/5 relative">
                            {/* Gradient glow effect */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl opacity-20 blur-3xl animate-pulse"></div>

                            {/* Main Image container */}
                            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl overflow-hidden group transform hover:scale-[1.02] transition-transform duration-500">
                                {/* Shine overlay effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000 z-10"></div>

                                {/* Image with smooth transitions */}
                                <div className="w-full h-full min-h-[500px] lg:min-h-[600px] relative overflow-hidden">
                                    {images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`TechPup App step ${index + 1}`}
                                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                                                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                            }`}
                                        />
                                    ))}
                                </div>

                                {/* Image counter */}
                                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 shadow-2xl">
                                    <div className="text-sm font-bold text-white">
                                        {currentImageIndex + 1} / {images.length}
                                    </div>
                                </div>

                                {/* Floating overlay elements */}
                                <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-2xl p-3 shadow-2xl animate-float">
                                    <div className="text-sm font-bold text-white">Easy to Use</div>
                                </div>
                                <div className="absolute bottom-6 left-6 bg-white/20 backdrop-blur-sm rounded-2xl p-3 shadow-2xl animate-float delay-1000">
                                    <div className="text-sm font-bold text-white">Instant</div>
                                </div>
                                <div className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-sm rounded-2xl p-3 shadow-2xl animate-float delay-2000">
                                    <div className="text-sm font-bold text-white">Anywhere</div>
                                </div>
                                <div className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-2xl p-3 shadow-2xl animate-float delay-1500">
                                    <div className="text-sm font-bold text-white">24/7</div>
                                </div>
                            </div>

                            {/* Navigation dots */}
                            <div className="flex justify-center mt-6 space-x-2">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                            index === currentImageIndex
                                                ? 'bg-gradient-to-r from-primary to-secondary'
                                                : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-16">
                        <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-md px-8 py-4 rounded-2xl shadow-lg border border-primary/20">
              <span className="text-lg font-semibold text-gray-700">
                Ready to comfort your pet remotely?
              </span>
                            <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                Download App
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}