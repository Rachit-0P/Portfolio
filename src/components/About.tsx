import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Palette, Coffee, Sparkles } from 'lucide-react';

const About = () => {
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
    <section id="about" className="py-20 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <div className="w-full flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-5xl font-bold text-accent-cyan mb-4">About Me</h2>
            <div className="max-w-4xl w-full">
              <h3 className="text-2xl font-bold mb-2">Hi, I'm Rachit</h3>
              <p className="mb-8 text-gray-300">
                A passionate graphic designer specializing in YouTube thumbnails and branding. With over a year of experience, I've helped content creators stand out and increase their engagement through compelling visual design.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-primary p-6 rounded-lg">
                  <div className="text-accent-cyan font-bold text-3xl mb-2">50+</div>
                  <div className="text-gray-400">Happy Clients</div>
                </div>
                <div className="bg-primary p-6 rounded-lg">
                  <div className="text-accent-cyan font-bold text-3xl mb-2">200+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4">What I Love</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
                  <div className="flex items-center space-x-3">
                    <Code2 className="w-5 h-5 text-accent-cyan" />
                    <span>Clean Design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Palette className="w-5 h-5 text-accent-cyan" />
                    <span>Creative Work</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Coffee className="w-5 h-5 text-accent-cyan" />
                    <span>Coffee & Design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Sparkles className="w-5 h-5 text-accent-cyan" />
                    <span>Making Magic</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Removed image section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6 md:col-span-2"
          >
            
          </motion.div>
        </div>

        {/* Skills Section - Updated to center align horizontally */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="bg-primary p-6 rounded-xl md:w-1/2">
            <h4 className="text-xl font-bold mb-4">Design Tools</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Photoshop</span>
                <span className="text-accent-cyan">60%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-accent-cyan h-2 rounded-full" style={{ width: '60%' }} />
              </div>
              
              <div className="flex justify-between items-center mt-4">
                <span>Ibis Paint X</span>
                <span className="text-accent-cyan">80%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-accent-cyan h-2 rounded-full" style={{ width: '80%' }} />
              </div>
              
              <div className="flex justify-between items-center mt-4">
                <span>CapCut</span>
                <span className="text-accent-cyan">80%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-accent-cyan h-2 rounded-full" style={{ width: '80%' }} />
              </div>

              <div className="flex justify-between items-center mt-4">
                <span>Premiere Pro</span>
                <span className="text-accent-cyan">60%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-accent-cyan h-2 rounded-full" style={{ width: '60%' }} />
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-primary p-6 rounded-xl md:w-1/2">
            <h4 className="text-xl font-bold mb-4">Experience</h4>
            <div className="space-y-4">
              <div>
                <div className="text-accent-cyan font-medium">2023 - Present</div>
                <div className="font-medium">Thumbnail Design</div>
                <div className="text-sm text-gray-400">Working with content creators</div>
              </div>
              <div>
                <div className="text-accent-cyan font-medium">2024 - Present</div>
                <div className="font-medium">Mobicrown</div>
                <div className="text-sm text-gray-400">Designing posts and posters for mobile battery and glass brand</div>
              </div>
              <div>
                <div className="text-accent-cyan font-medium">2024 - Present</div>
                <div className="font-medium">Petcast</div>
                <div className="text-sm text-gray-400">Designing posts and posters for pet shampoo and perfume brand</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;