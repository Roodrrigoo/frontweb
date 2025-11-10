import { LinkedinIcon } from 'lucide-react';
import { useState } from 'react';

export function Advisors() {
    const [flippedCard, setFlippedCard] = useState<number | null>(null);

    const advisors = [
        {
            name: 'Dr. Duncan Houston',
            title: 'Medical Veterinarian and CEO, Ask a Vet',
            description: 'Veterinary medicine expert and pet health advocate',
            image: '/media/Duncan.avif',
            linkedin: 'https://www.linkedin.com/in/duncan-houston-bvsc-96044382/',
            flipContent: {
                role: 'Medical Veterinarian',
                subtitle: 'CityU Clinical Doctor, Founder "Ask a Vet"',
                bio: 'Dr Duncan Houston is a visionary leader in the pet care industry, with a dual role as a CEO and an emergency veterinarian. He has multiple patents, publications, and certifications in his field, and has been featured in several media outlets and podcasts for his innovative and customer-centric approach. He also works part time at the Small Animal Specialist Hospital (SASH) and the Animal Referral Hospital in Australia, all of which are leading veterinary hospitals around the world. He is passionate about improving the well-being of pets and their families.'
            }
        },
        {
            name: 'Dr. Gino Yu',
            title: 'Digital Entertainment & Game Development Expert',
            description: 'Leading authority in interactive media and digital innovation',
            image: '/media/Gino.avif',
            linkedin: 'https://www.linkedin.com/in/ginoyu/',
            flipContent: {
                role: 'Business Development',
                subtitle: 'Associate Professor, Director of Digital Entertainment & Game Development',
                bio: 'Dr. Yu founded the Hong Kong Digital Entertainment Association and organizes events like the Consciousness, Science, Technology Conference and Society and the Asia Consciousness Festival, as well as hosting TEDxHongKong, Wikimania, and more. He is also a sought-after speaker on Blockchain and emerging technologies, serving as an advisor to innovative projects such as SingularityNET, Rio Defi, Maaind, and Hanson Robotics.'
            }
        },
        {
            name: 'Chandan Sethi',
            title: 'Product Development & Marketing Strategist',
            description: 'Expert in product-market fit and go-to-market strategies',
            image: '/media/Chandan.avif',
            linkedin: 'https://www.linkedin.com/in/chandansethi1/',
            flipContent: {
                role: 'Product Development & Marketing',
                subtitle: 'Venture Builder, Wellness & Healthcare, Business Strategist',
                bio: 'Managing projects for companies valued at over USD 20 billion, reducing employee turnover from 80% to less than 5%, taking a commodity from production to shipping 1 million units a month within six months, and lowering manufacturing costs by around 12% for a top sports technology brand, Chandan consistently channels his expertise into groundbreaking and digitally transformative projects. His work focuses on innovation and critical advancements, driving significant results in the industry.'
            }
        },
        {
            name: 'Andrew Chen',
            title: 'Strategic Advisor, Arion Ventures',
            description: 'Venture capital and strategic growth specialist',
            image: '/media/Andrew.avif',
            linkedin: 'https://www.linkedin.com/in/chenandrew/',
            flipContent: {
                role: 'Business & Product Development',
                subtitle: 'Arion Ventures, Strategic Advisory, Entrepreneurship Lecturer, Fortune 500',
                bio: 'Andrew H. Chen is Managing Partner of Arion Ventures. Arion Ventures is a strategic advisory firm that provides various management consulting services including strategic introductions and strategy consulting. He also currently lectures a graduate course on emerging technology and entrepreneurship part-time at the School of Design at the Hong Kong Polytechnic University. He is also a member of the board of advisors of Ampd Energy, a venture backed energy storage company based in Hong Kong.'
            }
        }
    ];

    const handleCardClick = (index: number) => {
        setFlippedCard(flippedCard === index ? null : index);
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-secondary/10 to-transparent rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-black mb-4">
                            Our{' '}
                            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                                Advisors
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Guided by industry leaders who share our vision for innovative pet
                            care technology.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {advisors.map((advisor, index) => (
                            <div
                                key={index}
                                className={`flip-card group relative h-96 cursor-pointer ${flippedCard === index ? 'flipped' : ''}`}
                                onClick={() => handleCardClick(index)}
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-100 transition blur"></div>

                                {/* Flip container */}
                                <div className="flip-card-inner w-full h-full">
                                    {/* Front of card */}
                                    <div className="flip-card-front bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition h-full">
                                        {/* Image */}
                                        <div className="relative h-56 overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                                            <img
                                                src={advisor.image}
                                                alt={advisor.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                            />

                                            {/* LinkedIn icon */}
                                            <a
                                                href={advisor.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition z-20 hover:bg-white shadow-lg"
                                            >
                                                <LinkedinIcon size={18} className="text-secondary" />
                                            </a>
                                        </div>

                                        {/* Content */}
                                        <div className="p-5">
                                            <h3 className="text-lg font-bold mb-1 text-gray-900">
                                                {advisor.name}
                                            </h3>
                                            <div className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold text-sm mb-2">
                                                {advisor.title}
                                            </div>
                                            <p className="text-gray-600 text-xs leading-relaxed">
                                                {advisor.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Back of card */}
                                    <div className="flip-card-back bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg overflow-hidden p-5">
                                        <div className="h-full flex flex-col">
                                            <div className="text-center mb-4">
                                                <div className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold text-sm mb-1">
                                                    {advisor.flipContent.role}
                                                </div>
                                                <div className="text-gray-600 text-xs mb-2">
                                                    {advisor.flipContent.subtitle}
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-3">
                                                    {advisor.name}
                                                </h3>
                                            </div>

                                            <p className="text-gray-600 text-xs leading-relaxed flex-grow overflow-y-auto">
                                                {advisor.flipContent.bio}
                                            </p>

                                            <div className="mt-3 pt-3 border-t border-gray-200">
                                                <a
                                                    href={advisor.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="flex items-center justify-center gap-2 w-full py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition text-sm"
                                                >
                                                    <LinkedinIcon size={16} />
                                                    <span>LinkedIn</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}