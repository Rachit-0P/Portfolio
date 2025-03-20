import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Youtube, Palette, Share2, MessageSquare, CheckCircle } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: <Youtube className="w-8 h-8 text-accent-cyan" />,
    title: "Thumbnail Design",
    description: "Eye-catching thumbnails that drive clicks and engagement for your YouTube content.",
    features: [
      "Custom illustrations",
      "Text optimization",
      "Color psychology",
      "A/B testing options"
    ]
  },
  {
    icon: <Palette className="w-8 h-8 text-accent-cyan" />,
    title: "YouTube Branding",
    description: "Cohesive branding elements that make your channel instantly recognizable.",
    features: [
      "Channel banner design",
      "Profile picture design",
      "End screen templates",
      "Video intro/outro"
    ]
  },
  {
    icon: <Share2 className="w-8 h-8 text-accent-cyan" />,
    title: "Social Media Graphics",
    description: "Engaging visuals that boost your social media presence and engagement.",
    features: [
      "Post templates",
      "Story highlights",
      "Profile optimization",
      "Content calendar design"
    ]
  }
];

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="section-title">Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Transform your online presence with professional design services tailored to your needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="service-card group"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-accent-cyan mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-secondary rounded-2xl p-8">
            <div className="flex items-center justify-center mb-8">
              <MessageSquare className="w-8 h-8 text-accent-cyan mr-3" />
              <h3 className="text-2xl font-bold">Get a Quote</h3>
            </div>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-primary border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent-cyan transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-primary border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent-cyan transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Service
                </label>
                <select
                  id="service"
                  className="w-full bg-primary border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent-cyan transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="thumbnail">Thumbnail Design</option>
                  <option value="branding">YouTube Branding</option>
                  <option value="social">Social Media Graphics</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-primary border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent-cyan transition-colors"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full btn-primary"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;