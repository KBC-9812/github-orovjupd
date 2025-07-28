
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, TrendingDown, AlertCircle, Layers } from 'lucide-react';

const painPoints = [
  {
    icon: <Clock className="w-8 h-8 text-blue-400" />,
    title: "Repetitive Tasks",
    description: "Manual processes that drain valuable time and employee morale."
  },
  {
    icon: <AlertCircle className="w-8 h-8 text-blue-400" />,
    title: "Data Inconsistencies",
    description: "Human errors leading to inaccurate data and poor decision-making."
  },
  {
    icon: <TrendingDown className="w-8 h-8 text-blue-400" />,
    title: "Reduced Productivity",
    description: "Inefficiencies that slow down operations and hinder growth potential."
  },
  {
    icon: <Layers className="w-8 h-8 text-blue-400" />,
    title: "Legacy Systems",
    description: "Limitations of outdated systems that impede modern workflows."
  }
];

const MotionCard = motion.div;

const WhyAutomationSection = () => {
  return (
    <section id="why-automation" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            Why Automation Matters
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Manual processes drain time, money, and resources. BobsonTech addresses these pain points by delivering tailored automation that enhances operational efficiency and scalability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => (
            <MotionCard
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-8 bg-secondary/50 border border-blue-900/30 rounded-2xl glow-card"
            >
              <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-700">
                {point.icon}
              </div>
              <h3 className="font-display text-2xl font-semibold text-white mb-4">
                {point.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {point.description}
              </p>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAutomationSection;