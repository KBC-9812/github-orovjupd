import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Zap, TrendingUp, Users, ShieldCheck, ArrowRight } from 'lucide-react';

const benefits = [
    {
        icon: Zap,
        title: 'Accelerated Efficiency',
        description: 'Automate manual tasks to achieve results faster and with greater accuracy.',
    },
    {
        icon: TrendingUp,
        title: 'Scalable Growth',
        description: 'Our solutions scale with your business, supporting your growth at every stage.',
    },
    {
        icon: Users,
        title: 'Enhanced Customer Experience',
        description: 'Deliver faster, more personalized service to increase customer satisfaction.',
    },
    {
        icon: ShieldCheck,
        title: 'Improved Compliance',
        description: 'Ensure adherence to regulatory standards with automated, error-free processes.',
    },
];

const AttentionSection = () => {
    return (
        <section id="attention" className="py-20 bg-secondary">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 gradient-text">
                        Unlock Tangible Business Benefits
                    </h2>
                    <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                        Beyond automation, we deliver strategic advantages that propel your business forward. Experience a new level of operational excellence and competitive edge.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-8 rounded-2xl bg-card border border-border glow-card flex flex-col items-center text-center"
                        >
                            <div className="p-4 bg-blue-900/50 rounded-full mb-6">
                                <benefit.icon className="w-8 h-8 text-blue-400" />
                            </div>
                            <h3 className="font-display text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                            <p className="text-gray-400 flex-grow">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <Link to="/get-started">
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-5 text-xl rounded-full tech-glow transform hover:scale-105 transition-all"
                        >
                            Start Your Transformation
                            <ArrowRight className="w-6 h-6 ml-3" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default AttentionSection;