
import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

const ContactPage = () => {
  const form = useRef();
  const { toast } = useToast();
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm('service_bobsontech', 'template_bobsontech', form.current, 'YOUR_EMAILJS_PUBLIC_KEY')
      .then((result) => {
          toast({
            title: "🚀 Message Sent!",
            description: "Thank you for contacting us. We'll get back to you shortly.",
          });
          e.target.reset();
      }, (error) => {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem sending your message. Please try again.",
          });
      }).finally(() => {
        setIsSending(false);
      });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - BobsonTech</title>
        <meta name="description" content="Get in touch with BobsonTech for your automation needs. Reach out for a consultation, support, or any inquiries." />
      </Helmet>
      <main className="pt-24 bg-background">
        <section className="py-20 section-bg">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6 gradient-text">
                Contact Us
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Have a question or want to discuss a project? We'd love to hear from you.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="card-bg p-8 rounded-2xl"
              >
                <h2 className="font-display text-3xl font-bold mb-6 text-white">Get in Touch</h2>
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <Input type="text" name="user_name" placeholder="Your Name" required className="bg-secondary border-blue-800" />
                  <Input type="email" name="user_email" placeholder="Your Email" required className="bg-secondary border-blue-800" />
                  <Input type="text" name="subject" placeholder="Subject" required className="bg-secondary border-blue-800" />
                  <Textarea name="message" placeholder="Your Message" required rows={5} className="bg-secondary border-blue-800" />
                  <Button type="submit" disabled={isSending} className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white tech-glow">
                    {isSending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-8"
              >
                <div className="card-bg p-8 rounded-2xl">
                  <h3 className="font-display text-2xl font-bold mb-4 text-white">Our Office</h3>
                  <div className="space-y-4 text-gray-300">
                    <p className="flex items-center"><MapPin className="w-5 h-5 mr-3 text-blue-400" />Mumbai, India</p>
                    <p className="flex items-center"><Phone className="w-5 h-5 mr-3 text-blue-400" />+91 9049647830</p>
                    <p className="flex items-center"><Mail className="w-5 h-5 mr-3 text-blue-400" />official@bobsontech.com</p>
                  </div>
                </div>
                <div className="card-bg p-8 rounded-2xl">
                  <h3 className="font-display text-2xl font-bold mb-4 text-white">Business Hours</h3>
                  <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-300">Saturday - Sunday: Closed</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;
