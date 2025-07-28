import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: 'UiPath', style: { fontFamily: 'monospace', fontWeight: 'bold' } },
  { name: 'Microsoft', style: { fontFamily: 'Segoe UI, sans-serif', fontWeight: '600' } },
  { name: 'AWS', style: { fontFamily: 'Amazon Ember, sans-serif', fontWeight: 'bold' } },
  { name: 'TensorFlow', style: { fontFamily: 'Roboto, sans-serif', letterSpacing: '1px' } },
  { name: 'Docker', style: { fontFamily: 'Verdana, sans-serif', fontStyle: 'italic' } },
  { name: 'Nairobi', style: { fontFamily: 'serif', fontWeight: 'bold' } },
  { name: 'Inspire', style: { fontFamily: 'cursive' } },
  { name: 'Recharge', style: { fontFamily: 'sans-serif', textTransform: 'uppercase' } },
  { name: 'Colorado', style: { fontFamily: 'Impact, sans-serif' } },
  { name: 'Napoli', style: { fontFamily: 'Garamond, serif', fontStyle: 'italic' } },
];

const PartnersSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section id="partners" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl font-bold text-gray-400">
            Trusted by Industry Leaders & Innovators
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              variants={itemVariants}
              className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl"
              style={partner.style}
            >
              {partner.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;