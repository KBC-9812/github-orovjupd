
import React from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
const Footer = ({
  scrollToSection
}) => {
  const {
    toast
  } = useToast();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const handleSocialClick = () => {
    toast({
      title: "🔗 Social Links Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };
  const navLinks = [{
    id: 'about',
    label: 'About'
  }, {
    id: 'why-automation',
    label: 'Why Automate'
  }, {
    id: 'solutions',
    label: 'Solutions'
  }, {
    id: 'industries',
    label: 'Industries'
  }, {
    id: 'pricing',
    label: 'Pricing'
  }];
  const QuickLinks = () => <div>
      <span className="font-semibold text-white mb-4 block">Quick Links</span>
      <div className="space-y-2">
        {isHomePage ? navLinks.map(link => <button key={link.id} onClick={() => scrollToSection(link.id)} className="block text-gray-400 hover:text-blue-300 transition-colors capitalize">
              {link.label}
            </button>) : <Link to="/" className="block text-gray-400 hover:text-blue-300 transition-colors">Home</Link>}
        <Link to="/blog" className="block text-gray-400 hover:text-blue-300 transition-colors">Blog</Link>
        <Link to="/contact" className="block text-gray-400 hover:text-blue-300 transition-colors">Contact</Link>
      </div>
    </div>;
  const ContactInfo = () => <div>
      <span className="font-semibold text-white mb-4 block">Contact</span>
      <div className="space-y-3 text-gray-400">
        <div className="flex items-center"><Mail className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" /><span>official@bobsontech.com</span></div>
        <div className="flex items-center"><Phone className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" /><span>+91 9049647830</span></div>
        <div className="flex items-center"><MapPin className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" /><span>Mumbai, India</span></div>
      </div>
    </div>;
  const SocialLinks = () => <div>
        <span className="font-semibold text-white mb-4 block">Follow Us</span>
        <div className="space-y-2">
            <button onClick={handleSocialClick} className="block text-gray-400 hover:text-blue-300 transition-colors">LinkedIn</button>
            <button onClick={handleSocialClick} className="block text-gray-400 hover:text-blue-300 transition-colors">Twitter</button>
            <button onClick={handleSocialClick} className="block text-gray-400 hover:text-blue-300 transition-colors">Facebook</button>
        </div>
    </div>;
  return <footer className="bg-secondary text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <img class="h-12 w-auto" alt="BobsonTech Logo" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/329dabb4-0580-40d2-b930-fe2ad61a7feb/f5f781a83618abc05ffc1f54c6ae98cd.png" />
              <span className="font-display text-2xl font-bold gradient-text">
                BobsonTech
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Let’s automate your success — intelligently.
            </p>
          </div>
          <QuickLinks />
          <ContactInfo />
          <SocialLinks />
        </div>
        <div className="border-t border-blue-900 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} BobsonTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;
