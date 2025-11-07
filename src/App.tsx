// App.tsx
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { VirtualHug } from './components/VirtualHug';
import { Features } from './components/Features';
import { ProductDetails } from './components/ProductDetails';
import { SocialImpact } from './components/SocialImpact';
import { Testimonials } from './components/Testimonials';
import { OurStory } from './components/OurStory';
import { Team } from './components/Team';
import { Advisors } from './components/Advisors';
import { CommunitySignup } from './components/CommunitySignup';
import { Footer } from './components/Footer';
import { FullWidthImage } from './components/FullWidthImage';

export function App() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <Hero />

                {/* First full-width image section with custom PNG */}
                <FullWidthImage
                    imageUrl="/src/components/media/4.png"
                    alt="TechPup HugVest product showcase"
                    overlayText="Revolutionary AI-powered comfort that your pet will love"
                    height="h-[600px]"
                    type="image"
                />

                <VirtualHug />

                {/* Second full-width section with features GIF */}
                <FullWidthImage
                    imageUrl="/src/components/media/features.gif"
                    alt="TechPup HugVest features demonstration"
                    overlayText="Experience cutting-edge technology that adapts to your pet's needs"
                    height="h-[500px]"
                    type="gif"
                />

                <Features />
                <ProductDetails />
                <SocialImpact />
                <Testimonials />
                <OurStory />
                <Team />
                <Advisors />
                <CommunitySignup />

                {/* Final full-width call to action */}
                <FullWidthImage
                    imageUrl="https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=1920&h=1080&fit=crop"
                    alt="Dog looking at camera"
                    overlayText="Join thousands of pet lovers revolutionizing how they care for their furry friends"
                    height="h-[500px]"
                    type="image"
                />
            </main>
            <Footer />
        </div>
    );
}