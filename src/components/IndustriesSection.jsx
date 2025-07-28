
import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, HeartPulse, ShoppingCart, Factory, Building, Banknote, Stethoscope, Package, Gavel, Users, Clock, CheckCircle, GraduationCap } from 'lucide-react';

const industries = [
  {
    icon: <Landmark className="w-8 h-8 text-blue-400" />,
    name: "Finance",
    description: "Automate compliance, loan processing, and reporting. BobsonTech helps financial institutions enhance accuracy, reduce costs, and accelerate service delivery.",
    details: [
      { icon: <Banknote className="w-5 h-5 mr-2 text-blue-300" />, text: "Automate loan processing & approvals" },
      { icon: <Gavel className="w-5 h-5 mr-2 text-blue-300" />, text: "Streamline compliance & reporting" },
      { icon: <Users className="w-5 h-5 mr-2 text-blue-300" />, text: "Enhance customer onboarding" },
    ]
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-blue-400" />,
    name: "Healthcare",
    description: "Manage patient records, scheduling, and billing. Our solutions reduce administrative burden, improve data accuracy, and let providers focus on patient care.",
    details: [
      { icon: <Stethoscope className="w-5 h-5 mr-2 text-blue-300" />, text: "Automate patient admissions" },
      { icon: <Package className="w-5 h-5 mr-2 text-blue-300" />, text: "Optimize medical billing & claims" },
      { icon: <Clock className="w-5 h-5 mr-2 text-blue-300" />, text: "Improve appointment scheduling" },
    ]
  },
  {
    icon: <ShoppingCart className="w-8 h-8 text-blue-400" />,
    name: "Retail & E-commerce",
    description: "Improve inventory, order processing, and support. We enable retailers to deliver seamless customer experiences and optimize operational efficiency.",
    details: [
      { icon: <ShoppingCart className="w-5 h-5 mr-2 text-blue-300" />, text: "Streamline order fulfillment" },
      { icon: <Package className="w-5 h-5 mr-2 text-blue-300" />, text: "Automate inventory tracking" },
      { icon: <Users className="w-5 h-5 mr-2 text-blue-300" />, text: "Enhance customer service with AI" },
    ]
  },
  {
    icon: <Factory className="w-8 h-8 text-blue-400" />,
    name: "Manufacturing",
    description: "Optimize supply chain, production scheduling, and quality control. Our solutions enhance efficiency, reduce downtime, and improve production output.",
    details: [
      { icon: <Factory className="w-5 h-5 mr-2 text-blue-300" />, text: "Automate production scheduling" },
      { icon: <Package className="w-5 h-5 mr-2 text-blue-300" />, text: "Optimize supply chain logistics" },
      { icon: <CheckCircle className="w-5 h-5 mr-2 text-blue-300" />, text: "Improve quality control" },
    ]
  },
  {
    icon: <Building className="w-8 h-8 text-blue-400" />,
    name: "Government",
    description: "Enhance citizen services, document management, and administrative processes. We help government agencies improve efficiency and reduce backlogs.",
    details: [
      { icon: <Building className="w-5 h-5 mr-2 text-blue-300" />, text: "Digitize public service applications" },
      { icon: <Gavel className="w-5 h-5 mr-2 text-blue-300" />, text: "Automate document processing" },
      { icon: <Users className="w-5 h-5 mr-2 text-blue-300" />, text: "Streamline citizen requests" },
    ]
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-blue-400" />,
    name: "Education",
    description: "Automate student enrollment, grade management, and administrative tasks. Free up educators to focus on teaching and student development.",
    details: [
        { icon: <Users className="w-5 h-5 mr-2 text-blue-300" />, text: "Streamline student admissions" },
        { icon: <CheckCircle className="w-5 h-5 mr-2 text-blue-300" />, text: "Automate grade reporting" },
        { icon: <Clock className="w-5 h-5 mr-2 text-blue-300" />, text: "Optimize course scheduling" },
    ]
  }
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-20 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            Serving Diverse Industries
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our intelligent automation solutions are tailored to meet the unique challenges of various sectors, driving efficiency and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="p-8 bg-secondary/50 border border-blue-900/30 rounded-2xl flex flex-col items-center text-center hover:shadow-blue-500/20 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out"
            >
              <div className="w-20 h-20 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-700">
                {industry.icon}
              </div>
              <h3 className="font-semibold text-2xl text-white mb-3">{industry.name}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed flex-grow">{industry.description}</p>
              
              <div className="w-full space-y-2 mt-auto">
                {industry.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center justify-center text-sm text-gray-300">
                    {detail.icon}
                    <span>{detail.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;