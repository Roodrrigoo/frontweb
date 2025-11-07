import { LinkedinIcon } from 'lucide-react';
import { useState } from 'react';

export function Team() {
    const [flippedCard, setFlippedCard] = useState<number | null>(null);

    const teamMembers = [
        {
            name: 'Shakira Monique',
            title: 'Founder & CEO',
            description: 'Business Development and Researcher at Hong Kong Polytechnic University',
            image: "/media/Shakira.avif",
            linkedin: '#',
            flipContent: {
                role: 'Researcher',
                subtitle: 'Hong Kong Polytechnic University',
                bio: 'An entrepreneur and animal lover with a rich background in business development, she has successfully led projects across Asia and Europe. Currently based in Hong Kong, she specializes in business with a good cause and technology. As an academic Researcher, she blends her professional expertise with her personal passions.'
            }
        },
        {
            name: 'Dr. Vaheh Nazari',
            title: 'CTO',
            description: 'PhD in Robotic Engineering',
            image: "/media/Vaheh.avif",
            linkedin: '#',
            flipContent: {
                role: 'PhD Robotic Engineering',
                subtitle: 'University of Queensland',
                bio: 'A big dog lover, researcher, and inventor, Vaheh has a multidisciplinary background in neuroscience, rehabilitation, robotics, and biomedical engineering. Passionate about combining technology and healthcare, he works in the fields of robotics and biomedical engineering to innovate and improve lives.'
            }
        },
        {
            name: 'Tayseer Almattar',
            title: 'COO',
            description: 'Product Design Engineer',
            image: "/media/Tayseer.avif",
            linkedin: '#',
            flipContent: {
                role: 'Product Design and Engineer',
                subtitle: 'Hong Kong Polytechnic University',
                bio: 'A passionate technologist and design-thinking practitioner with a love for animals! He passionately creates product strategies, and utilizes data for monetization/pricing strategies, particularly for digital products and platforms. Constantly looking to leverage technology and design for enhanced value.'
            }
        },
        {
            name: 'Gihyun Derek Kim',
            title: 'Software & AI Engineer',
            description: 'Machine Learning & App Development',
            image: "/media/Gihyun.avif",
            linkedin: '#',
            flipContent: {
                role: 'Neuroscience',
                subtitle: 'University College London',
                bio: 'A tech-savvy wizard with a knack for data, a heart of gold, and a laugh that could power a small city. With a background in Neuroscience, Derek ignited a passion for understanding complex systems - focusing on software engineering and AI advancements.'
            }
        },
        {
            name: 'David Phalaris',
            title: 'Head of Game Development',
            description: 'Interactive Experience Designer',
            image: "/media/David.jpeg",
            linkedin: '#',
            flipContent: {
                role: 'Game Producer',
                subtitle: 'Swords College, IBAT, Dublin',
                bio: 'A creative self-starter, with passion for applying modern technology to improve human experience. With over 15 years\' track record maximizing value of products and implementing new solutions, he worked in 3 different industries and covered: product development, product and digital marketing, strategy design and operations.'
            }
        }
    ];

    const handleCardClick = (index: number) => {
        setFlippedCard(flippedCard === index ? null : index);
    };

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary/5"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-black mb-4">
                            Meet Our{' '}
                            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                                Team
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A diverse group of innovators, engineers, and pet lovers working
                            together to revolutionize pet care.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="group relative h-96 cursor-pointer"
                                onClick={() => handleCardClick(index)}
                            >
                                {/* Gradient border on hover */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-100 transition blur"></div>

                                {/* Flip container */}
                                <div
                                    className={`relative w-full h-full transition-transform duration-700 ${flippedCard === index ? 'rotate-y-180' : ''}`}
                                    style={{ transformStyle: 'preserve-3d' }}
                                >
                                    {/* Front of card */}
                                    <div
                                        className="absolute inset-0 bg-white rounded-2xl shadow-lg group-hover:shadow-2xl transition overflow-hidden"
                                        style={{ backfaceVisibility: 'hidden' }}
                                    >
                                        {/* Image with gradient overlay */}
                                        <div className="relative overflow-hidden h-56">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 z-10 opacity-0 group-hover:opacity-100 transition"></div>
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                            />

                                            {/* LinkedIn button on hover */}
                                            <a
                                                href={member.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition z-20 hover:bg-white shadow-lg"
                                            >
                                                <LinkedinIcon size={20} className="text-secondary" />
                                            </a>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold mb-1 text-gray-900">
                                                {member.name}
                                            </h3>
                                            <div className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold mb-3">
                                                {member.title}
                                            </div>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {member.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Back of card */}
                                    <div
                                        className="absolute inset-0 bg-white rounded-2xl shadow-lg overflow-hidden p-6"
                                        style={{
                                            backfaceVisibility: 'hidden',
                                            transform: 'rotateY(180deg)'
                                        }}
                                    >
                                        <div className="h-full flex flex-col">
                                            <div className="text-center mb-4">
                                                <div className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold text-lg mb-1">
                                                    {member.flipContent.role}
                                                </div>
                                                <div className="text-gray-600 text-sm mb-2">
                                                    {member.flipContent.subtitle}
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                                    {member.name}
                                                </h3>
                                            </div>

                                            <p className="text-gray-600 text-sm leading-relaxed flex-grow overflow-y-auto">
                                                {member.flipContent.bio}
                                            </p>

                                            <div className="mt-4 pt-4 border-t border-gray-200">
                                                <a
                                                    href={member.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="flex items-center justify-center gap-2 w-full py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition"
                                                >
                                                    <LinkedinIcon size={18} />
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