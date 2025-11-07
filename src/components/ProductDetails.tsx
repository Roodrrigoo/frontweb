import { CheckIcon, SparklesIcon, HeartIcon, ShieldIcon, ZapIcon } from 'lucide-react';

export function ProductDetails() {
    return (
        <section id="product" className="py-24 bg-white relative overflow-hidden">
            {/* Enhanced background gradients */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-secondary/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-2xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        {/* Product images with enhanced layout */}
                        <div className="relative group order-2 lg:order-1">
                            {/* Main image container */}
                            <div className="relative">
                                {/* Animated gradient border */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl opacity-20 group-hover:opacity-40 transition-all duration-500 blur-xl animate-pulse"></div>

                                {/* Main vest image */}
                                <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-2xl">
                                    <img
                                        src="/src/components/media/vest.avif"
                                        alt="TechPup HugVest Product"
                                        className="rounded-2xl w-full transform group-hover:scale-105 transition duration-700 shadow-lg"
                                    />
                                </div>

                                {/* Floating app image */}
                                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-white rounded-2xl shadow-2xl border border-gray-100 transform rotate-6 group-hover:rotate-3 group-hover:scale-105 transition-all duration-500">
                                    <img
                                        src="/src/components/media/app.avif"
                                        alt="TechPup App Interface"
                                        className="rounded-2xl w-full h-full object-cover"
                                    />
                                    {/* App image badge */}
                                    <div className="absolute -top-3 -left-3 bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                        App
                                    </div>
                                </div>

                                {/* Feature badges around the image */}
                                <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-xl border border-gray-100">
                                    <div className="flex items-center space-x-2">
                                        <HeartIcon size={16} className="text-primary" />
                                        <span className="text-sm font-bold text-gray-700">Comfort</span>
                                    </div>
                                </div>
                                <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-xl border border-gray-100">
                                    <div className="flex items-center space-x-2">
                                        <ShieldIcon size={16} className="text-secondary" />
                                        <span className="text-sm font-bold text-gray-700">Safe</span>
                                    </div>
                                </div>
                                <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-xl border border-gray-100">
                                    <div className="flex items-center space-x-2">
                                        <ZapIcon size={16} className="text-yellow-500" />
                                        <span className="text-sm font-bold text-gray-700">Fast</span>
                                    </div>
                                </div>
                            </div>

                            {/* Main floating badge */}
                            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full shadow-2xl z-20 flex items-center space-x-2 transform group-hover:scale-110 transition">
                                <SparklesIcon size={20} />
                                <span className="font-bold">AI-Powered</span>
                            </div>
                        </div>

                        {/* Product details */}
                        <div className="order-1 lg:order-2">
                            <div className="relative">
                                {/* Section badge */}
                                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full mb-6 border border-primary/20">
                                    <SparklesIcon size={16} className="text-primary" />
                                    <span className="text-sm font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Premium Product
                  </span>
                                </div>

                                <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                                    TechPup{' '}
                                    <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                    HugVest
                  </span>
                                </h2>
                                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                    The world's first AI-powered smart vest that provides real-time
                                    comfort and health monitoring for your beloved pet. Experience
                                    the future of pet care today.
                                </p>

                                {/* Enhanced pricing card */}
                                <div className="relative mb-8 group">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-30 group-hover:opacity-50 transition-all duration-500 blur"></div>

                                    <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100">
                                        <div className="text-center mb-6">
                                            <div className="flex items-baseline justify-center mb-2">
                        <span className="text-6xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          $199
                        </span>
                                                <span className="text-gray-600 ml-3 text-lg">USD</span>
                                            </div>
                                            <p className="text-gray-600 font-medium">
                                                One-time purchase • Lifetime warranty
                                            </p>
                                        </div>

                                        <div className="space-y-3 pt-6 border-t border-gray-200">
                                            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl hover:from-primary/10 hover:to-secondary/10 transition">
                        <span className="text-gray-700 font-semibold">
                          Monthly Plan
                        </span>
                                                <span className="font-bold text-gray-900">$12/mo</span>
                                            </div>
                                            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border-2 border-primary/20 transform hover:scale-105 transition">
                        <span className="text-gray-700 font-semibold">
                          Annual Plan
                        </span>
                                                <div className="flex items-center space-x-2">
                          <span className="text-xs bg-gradient-to-r from-primary to-secondary text-white px-2 py-1 rounded-full font-bold">
                            Save 20%
                          </span>
                                                    <span className="font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-lg">
                            $144/yr
                          </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Enhanced features list */}
                                <div className="space-y-4 mb-8">
                                    {[
                                        'AI-powered emotional analysis and comfort delivery',
                                        'Real-time health and activity monitoring',
                                        'GPS tracking and geofencing alerts',
                                        'Premium app features and community access',
                                        'Water-resistant and durable design',
                                        '24/7 customer support included'
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start space-x-4 group hover:transform hover:translate-x-2 transition">
                                            <div className="w-7 h-7 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition shadow-lg">
                                                <CheckIcon className="text-white" size={16} />
                                            </div>
                                            <span className="text-gray-700 leading-relaxed text-lg font-medium">
                        {item}
                      </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Enhanced CTA button */}
                                <button className="group relative w-full md:w-auto">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
                                    <div className="relative px-12 py-5 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-bold text-lg shadow-2xl group-hover:shadow-3xl transition-all transform group-hover:scale-105 flex items-center justify-center space-x-3">
                                        <SparklesIcon size={20} className="group-hover:rotate-180 transition duration-500" />
                                        <span className="text-xl">Get Started for Free</span>
                                        <SparklesIcon size={20} className="group-hover:-rotate-180 transition duration-500" />
                                    </div>
                                </button>

                                {/* Trust indicators */}
                                <div className="flex items-center justify-center mt-6 space-x-6 text-sm text-gray-500">
                                    <div className="flex items-center space-x-2">
                                        <ShieldIcon size={16} />
                                        <span>Secure Payment</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <ZapIcon size={16} />
                                        <span>Free Shipping</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <HeartIcon size={16} />
                                        <span>30-Day Trial</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}