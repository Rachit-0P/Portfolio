import React from 'react';
import { motion } from 'framer-motion';
import { Youtube } from 'lucide-react';

const youtubers = [
  {
    name: "WeRStupid",
    logo: "/images/Werstupid.jpg",
    subscribers: "700K+",
    link: "https://www.youtube.com/@WeRStupid"
  },
  {
    name: "Meher Malhan",
    logo: "/images/meher.jpg",
    subscribers: "31K+",
    link: "https://www.youtube.com/@MeherMalhan"
  },
  {
    name: "Vardaan Malhan",
    logo: "/images/vardaan.jpg",
    subscribers: "45K+",
    link: "https://www.youtube.com/@vardaanmalhan"
  },
  {
    name: "Gaurav Shrivastav",
    logo: "/images/gaurav.jpg",
    subscribers: "43K+",
    link: "https://www.youtube.com/@srgaurav"
  },
  {
    name: "Zframe Unplugged",
    logo: "/images/zframe.jpg",
    subscribers: "800+",
    link: "https://www.youtube.com/@zframesunplugged"
  }
];

const FeaturedProjects = () => {
  // Duplicate the youtubers array to create a seamless scrolling effect
  const scrollingYoutubers = [...youtubers, ...youtubers];
  
  return (
    <section id="featured-projects" className="py-20 px-4 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Working with</h2>
        </motion.div>
        
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex"
            initial={{ x: "0%" }}
            animate={{ x: "-50%" }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear"
              }
            }}
          >
            {scrollingYoutubers.map((youtuber, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-[280px] mx-4"
              >
                <div className="bg-primary p-6 rounded-xl">
                  <div className="flex items-center space-x-4 mb-4">
                    <img src={youtuber.logo} alt={youtuber.name} className="w-12 h-12 rounded-full" />
                    <div className="text-left">
                      <h4 className="text-xl font-bold">{youtuber.name}</h4>
                      <p className="text-gray-400">{youtuber.subscribers} Subscribers</p>
                    </div>
                  </div>
                  <a href={youtuber.link} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center space-x-2">
                    <span>Visit Channel</span>
                    <Youtube size={16} />
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
