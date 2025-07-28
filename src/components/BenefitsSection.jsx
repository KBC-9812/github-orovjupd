
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, DollarSign, CheckCircle, TrendingUp, ShieldCheck } from 'lucide-react';

const benefits = [
  { icon: <Zap className="w-6 h-6 mr-3 text-blue-400" />, text: "Productivity Boost: Free up employees for high-value work." },
  { icon: <DollarSign className="w-6 h-6 mr-3 text-blue-400" />, text: "Cost Savings: Reduce labor and operational expenses." },
  { icon: <CheckCircle className="w-6 h-6 mr-3 text-blue-400" />, text: "Data Accuracy: Eliminate human error and improve reliability." },
  { icon: <TrendingUp className="w-6 h-6 mr-3 text-blue-400" />, text: "Scalability: Grow your automation footprint seamlessly." },
  { icon: <ShieldCheck className="w-6 h-6 mr-3 text-blue-400" />, text: "Compliance & Security: Adhere to standards while protecting data." },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              Unlock Tangible Benefits
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Our intelligent automation solutions deliver measurable results, enhancing every facet of your business operations.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center text-lg text-gray-200"
                >
                  {benefit.icon}
                  <span>{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img  class="rounded-lg shadow-2xl w-full max-w-md object-cover" alt="Stylized robotic artwork representing automation and AI" src="https://images.unsplash.com/photo-1642678730222-9a041a983c33" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;