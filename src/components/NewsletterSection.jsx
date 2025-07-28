import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const NewsletterSection = () => {
  const { toast } = useToast();

  const handleSubscribe = (e) => {
    e.preventDefault();
    toast({
      title: "📧 Subscribed!",
      description: "Thanks for joining! We'll keep you updated. (This is a demo, no email was sent).",
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display text-4xl font-bold mb-6">
            Shape the Future of Automation
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Stay ahead of the curve. Join our newsletter for the latest insights on AI, RPA, and emerging technologies.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-full border border-blue-800 bg-secondary text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full"
            >
              <Mail className="w-4 h-4 mr-2" />
              Subscribe
            </Button>
          </form>

          <p className="text-sm text-gray-500 mt-4">
            No spam, unsubscribe anytime. Your privacy is our priority.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;