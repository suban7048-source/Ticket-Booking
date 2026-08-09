import React from 'react';
import { HeroSection } from './HeroSection';
import { CategoryGrid } from './CategoryGrid';
import { HowItWorks } from './HowItWorks';
import { FeaturedProviders } from './FeaturedProviders';
import { TrustSection } from './TrustSection';
import { TestimonialsSection } from './TestimonialsSection';

export const LandingPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <HeroSection />
      <CategoryGrid />
      <HowItWorks />
      <FeaturedProviders />
      <TrustSection />
      <TestimonialsSection />
    </div>
  );
};
