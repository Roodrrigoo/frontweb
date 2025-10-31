import React from 'react';
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
export function App() {
  return <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <VirtualHug />
        <Features />
        <ProductDetails />
        <SocialImpact />
        <Testimonials />
        <OurStory />
        <Team />
        <Advisors />
        <CommunitySignup />
      </main>
      <Footer />
    </div>;
}