import { QuoteIcon, StarIcon } from 'lucide-react';

export function Testimonials() {
    const testimonials = [{
        quote: 'I love seeing a product that takes care of the emotional health of my pup while knowing what his emotions are',
        author: 'Hugo',
        role: 'Pet Owner',
        rating: 5,
        image: '/src/components/media/1.jpg'
    }, {
        quote: 'Finally multi functioning innovative Tech for Dogs',
        author: 'Jim',
        role: 'Dog Trainer',
        rating: 5,
        image: '/src/components/media/2.jpg'
    }, {
        quote: 'Taking care of the Emotional wellbeing of pets is equally important as taking care of their physical health',
        author: 'Sarah',
        role: 'Veterinarian',
        rating: 5,
        image: '/src/components/media/3.png' // Using same image for now, you can add more images
    }];

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Enhanced Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-primary/5 to-secondary/5"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-6xl font-black mb-4">
                            What People Are{' '}
                            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Saying
              </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Discover how TechPup HugVest is transforming the lives of pets and their owners worldwide.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="group relative">
                                {/* Gradient border effect */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur"></div>

                                <div className="relative bg-white p-0 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">

                                    {/* Image Section */}
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={testimonial.image}
                                            alt={`${testimonial.author} - ${testimonial.role}`}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>

                                        {/* Quote icon positioned over image */}
                                        <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                                            <QuoteIcon className="text-primary" size={20} />
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-8">
                                        {/* Stars */}
                                        <div className="flex space-x-1 mb-4">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <StarIcon key={i} size={18} className="fill-yellow-400 text-yellow-400 transform group-hover:scale-110 transition-transform" />
                                            ))}
                                        </div>

                                        {/* Quote */}
                                        <p className="text-lg font-medium text-gray-800 mb-6 leading-relaxed">
                                            "{testimonial.quote}"
                                        </p>

                                        {/* Author Info */}
                                        <div className="flex items-center space-x-4">
                                            <div className="relative">
                                                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                                                <div className="relative w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold shadow-lg transform group-hover:scale-110 transition-transform">
                                                    {testimonial.author[0]}
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-bold text-gray-900 text-lg">
                                                    {testimonial.author}
                                                </div>
                                                <div className="text-gray-600 text-sm">
                                                    {testimonial.role}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover indicator */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                </div>

                                {/* Floating decoration */}
                                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200"></div>
                                <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-br from-secondary to-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300"></div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Call to Action */}
                    <div className="text-center mt-16">
                        <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white/80 backdrop-blur-md px-8 py-6 rounded-2xl shadow-lg border border-primary/20">
              <span className="text-xl font-semibold text-gray-700">
                Join thousands of happy pet owners
              </span>
                            <button className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                                Share Your Story
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}