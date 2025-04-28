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
      "Custom Edits",
      "Boost CTR",
      "Unlimited Revisions",
      "Logo & Banner for YT Channel"
    ]
  },
  {
    icon: <Share2 className="w-8 h-8 text-accent-cyan" />,
    title: "Video Editing",
    description: "Professional video editing services to enhance your content.",
    features: [
      "YouTube Long Video",
      "Reels",
      "Ads",
      "Highlight Clips"
    ]
  },
  {
    icon: <Share2 className="w-8 h-8 text-accent-cyan" />,
    title: "Social Media Enhancement",
    description: "Engaging visuals and strategies that boost your social media presence and engagement.",
    features: [
      "Social Media Post",
      "Social Media Management",
      "Boost Post",
      "Page Enhancement"
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

      </div>
    </section>
  );
};

export default Services;