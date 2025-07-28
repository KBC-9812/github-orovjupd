
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import PartnersSection from '@/components/PartnersSection';
import WhyAutomationSection from '@/components/WhyAutomationSection';
import AboutSection from '@/components/AboutSection';
import SolutionsSection from '@/components/SolutionsSection';
import IndustriesSection from '@/components/IndustriesSection';
import AttentionSection from '@/components/AttentionSection';
import BlogSection from '@/components/BlogSection';
import PricingSection from '@/components/PricingSection';
import NewsletterSection from '@/components/NewsletterSection';

const HomePage = ({ scrollToSection }) => {
  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5,
  };

  return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
      <Helmet>
        <title>BobsonTech</title>
        <meta name="description" content="BobsonTech empowers businesses with intelligent automation, RPA, and AI solutions to streamline operations, cut costs, and enhance customer experiences." />
      </Helmet>
      
      <main className="space-y-4 md:space-y-8">
        <HeroSection scrollToSection={scrollToSection} />
        <AboutSection />
        <WhyAutomationSection />
        <SolutionsSection />
        <PartnersSection />
        <IndustriesSection />
        <AttentionSection />
        <BlogSection />
        <PricingSection />
        <NewsletterSection />
      </main>
    </motion.div>
  );
};

export default HomePage;
