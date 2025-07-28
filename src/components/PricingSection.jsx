
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const pricingPlans = [
  {
    title: "Starter",
    price: "₹5,000",
    period: "/month",
    description: "Ideal for small teams and basic process automation.",
    features: ["Up to 5 automations", "Basic reporting", "Email support"],
    popular: false,
    range: "₹500 - ₹10,000 project cost"
  },
  {
    title: "Business",
    price: "₹20,000",
    period: "/month",
    description: "Perfect for growing businesses and complex workflows.",
    features: ["Up to 20 automations", "Advanced analytics", "Priority support", "API access"],
    popular: true,
    range: "₹10,000 - ₹30,000 project cost"
  },
  {
    title: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored for large organizations with advanced AI needs.",
    features: ["Unlimited automations", "AI & ML integration", "Dedicated support", "Custom SLAs"],
    popular: false,
    range: "₹30,000 - ₹1,00,000+ project cost"
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            Flexible Pricing & Plans
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Solutions that suit every stage of your digital maturity, from entry-level automation to advanced AI integrations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-2xl text-center flex flex-col ${plan.popular ? 'bg-gradient-to-b from-blue-900 to-indigo-900 tech-glow' : 'bg-secondary/50 border border-blue-900/30'}`}
            >
              {plan.popular && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">POPULAR</div>}
              <h3 className="font-display text-2xl font-semibold mb-4">{plan.title}</h3>
              <p className="text-gray-400 mb-6 min-h-[40px]">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-400">{plan.period}</span>
              </div>
              <ul className="text-gray-300 space-y-3 mb-8 text-left">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-center">
                    <Check className="w-5 h-5 mr-3 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Link to="/contact" className="w-full">
                  <Button
                    className={`w-full ${plan.popular ? 'bg-white text-blue-700 hover:bg-gray-200' : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white'}`}
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
