import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Youtube } from 'lucide-react';

const youtubers = [
  {
    name: "WeRStupid",
    logo: "/images/Werstupid.jpg",
    subscribers: "1.2M",
    link: "https://www.youtube.com/@WeRStupid"
  },
  {
    name: "Meher Malhan",
    logo: "/images/meher.jpg",
    subscribers: "500K",
    link: "https://www.youtube.com/@MeherMalhan"
  },
  {
    name: "Vardaan Malhan",
    logo: "/images/vardaan.jpg",
    subscribers: "300K",
    link: "https://www.youtube.com/@vardaanmalhan"
  },
  {
    name: "Gaurav Shrivastav",
    logo: "/images/gaurav.jpg",
    subscribers: "200K",
    link: "https://www.youtube.com/@srgaurav"
  },
  {
    name: "Zframe Unplugged",
    logo: "/images/zframe.jpg",
    subscribers: "150K",
    link: "https://www.youtube.com/@zframesunplugged"
  }
];

const FeaturedProjects = () => {
  return (
    <section id="featured-projects" className="py-20 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <h2 className="section-title">Working with</h2>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                staggerChildren: 0.2
              }
            }
          }}
          className="grid md:grid-cols-3 gap-8 mt-8 justify-center"
        >
          {youtubers.map((youtuber, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="bg-primary p-6 rounded-xl"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img src={youtuber.logo} alt={youtuber.name} className="w-12 h-12 rounded-full" />
                <div>
                  <h4 className="text-xl font-bold">{youtuber.name}</h4>
                  <p className="text-gray-400">{youtuber.subscribers} Subscribers</p>
                </div>
              </div>
              <a href={youtuber.link} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center space-x-2">
                <span>Visit Channel</span>
                <Youtube size={16} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
