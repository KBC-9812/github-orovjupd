
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { ArrowRight, CheckCircle, MessageSquare, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const GetStartedPage = () => {
  const { toast } = useToast();

  const handleRequestDemo = () => {
    toast({
      title: "🚀 Demo Request Sent!",
      description: "Thanks! We'll be in touch to schedule your personalized demo. (This is a demo).",
    });
  };

  const steps = [
    {
      icon: <MessageSquare className="w-10 h-10 text-blue-400" />,
      title: "1. Initial Consultation",
      description: "We start with a free consultation to understand your business challenges, goals, and existing processes."
    },
    {
      icon: <Zap className="w-10 h-10 text-blue-400" />,
      title: "2. Custom Solution Design",
      description: "Our experts design a tailored automation strategy and roadmap that aligns with your specific needs."
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-blue-400" />,
      title: "3. Implementation & Go-Live",
      description: "We implement the solution, provide training, and ensure a seamless transition to your new automated workflows."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Get Started - BobsonTech</title>
        <meta name="description" content="Start your automation journey with BobsonTech. Learn about our process and contact us for a free consultation." />
      </Helmet>
      <Header />
      <main className="pt-24 bg-background">
        <section className="py-20 section-bg">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 max-w-4xl mx-auto"
            >
              <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6 gradient-text">
                Ready to Automate Your Success?
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Let's transform your business together. Our process is simple, transparent, and designed to deliver maximum impact with minimal disruption.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="card-bg p-8 rounded-2xl text-center"
                >
                  <div className="w-20 h-20 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-700">
                    {step.icon}
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-white mb-4">{step.title}</h2>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <h2 className="font-display text-4xl font-bold mb-6">Take the First Step Today</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Schedule a free, no-obligation demo to see how BobsonTech can revolutionize your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleRequestDemo}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg rounded-full tech-glow"
                >
                  Request a Free Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-blue-500 text-blue-300 hover:bg-blue-900/50 hover:text-white px-8 py-4 text-lg rounded-full"
                  >
                    Ask a Question
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default GetStartedPage;
