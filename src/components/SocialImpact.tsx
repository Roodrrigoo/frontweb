import { HeartIcon } from 'lucide-react';

export function SocialImpact() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background with GIF */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src="/media/shelter.gif"
                    alt="Animal shelter dogs receiving comfort and love"
                    className="w-full h-full object-cover"
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-secondary/80 to-primary/80"></div>
                {/* Additional gradient overlays for visual interest */}
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/50 via-transparent to-primary/50"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* Text Content */}
                        <div className="lg:w-1/2 text-center lg:text-left text-white">
                            {/* Icon */}
                            <div className="relative inline-block mb-8">
                                <div className="absolute inset-0 bg-white/30 rounded-full blur-2xl"></div>
                                <div className="relative w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto lg:mx-0 shadow-2xl border border-white/30">
                                    <HeartIcon size={48} className="animate-pulse" />
                                </div>
                            </div>

                            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                                Every Dog Deserves Love
                            </h2>

                            <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">

                                We're committed to making a difference. For every HugVest sold, we donate an amount of our sales to support animal shelters.

                            </p>




                            {/* Call to Action */}
                            <div className="mt-12">
                                <button className="px-8 py-4 bg-white text-primary rounded-full font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                                    Support Our Mission
                                </button>
                            </div>
                        </div>

                        {/* GIF Visualization */}
                        <div className="lg:w-1/2 relative">
                            {/* Main container with elegant frame */}
                            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-white/20 transform hover:scale-[1.02] transition-transform duration-500">
                                {/* Additional GIF preview for emphasis */}
                                <div className="relative h-64 lg:h-80 overflow-hidden">
                                    <img
                                        src="/media/shelter.gif"
                                        alt="Shelter dogs finding comfort with TechPup technology"
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Gradient overlay for better visual integration */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                                </div>

                                {/* Impact highlights */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-white mb-6 text-center">
                                        Making a Real Difference
                                    </h3>

                                    <div className="grid gap-4">
                                        {[
                                            "Reduced anxiety in shelter environments",
                                            "Faster adoption rates for calm pets",
                                            "Better sleep and improved behavior"
                                        ].map((benefit, index) => (
                                            <div key={index} className="flex items-center space-x-3">
                                                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-white text-sm">✓</span>
                                                </div>
                                                <span className="text-white/90 text-lg">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Shelter testimonial */}
                                    <div className="mt-6 p-4 bg-white/10 rounded-2xl border border-white/20">
                                        <p className="text-white/80 italic text-sm">
                                            "We are grateful for the support TechPup has offered us. Thanks to TechPup we were able to promote our adoption dogs and find more loving homes for our pups."
                                        </p>
                                        <p className="text-white/60 text-xs mt-2">
                                            - Sarah, Shelter Manager
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating elements */}
                            <div className="absolute -top-4 -left-4 bg-white/20 backdrop-blur-sm rounded-2xl p-3 shadow-2xl animate-float">
                                <div className="text-sm font-bold text-white">Hope</div>
                            </div>
                            <div className="absolute -bottom-4 -right-4 bg-white/20 backdrop-blur-sm rounded-2xl p-3 shadow-2xl animate-float delay-1000">
                                <div className="text-sm font-bold text-white">Comfort</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}