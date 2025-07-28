
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

const aboutData = {
  mission: "To drive digital transformation by providing innovative and scalable automation solutions that optimize business processes, enhance efficiency, and reduce operational costs.",
  vision: "Empowering businesses to automate tasks and embrace the future of AI-driven productivity.",
  description: "BobsonTech is a technology consulting and services firm specializing in RPA, AI, machine learning (ML) integration, and workflow automation. Serving micro, small, medium, and large enterprises, we provide cost-effective, scalable automation solutions to optimize operations and drive efficiency."
};

const AnimatedDiv = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedDiv>
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              About BobsonTech
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {aboutData.description}
            </p>
          </div>
        </AnimatedDiv>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4 p-6 bg-secondary/50 border border-blue-900/30 rounded-xl">
                <Target className="w-12 h-12 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-display text-2xl font-bold mb-2">Our Mission</h3>
                  <p className="text-gray-400">{aboutData.mission}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-secondary/50 border border-blue-900/30 rounded-xl">
                <Eye className="w-12 h-12 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-display text-2xl font-bold mb-2">Our Vision</h3>
                  <p className="text-gray-400">{aboutData.vision}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
