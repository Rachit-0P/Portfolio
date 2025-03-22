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
          <h2 className="section-title">About Me</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Passionate about creating visuals that capture attention and drive engagement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
                alt="Rachit working"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent-cyan/10 backdrop-blur-sm rounded-2xl p-6 border border-accent-cyan/20">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-accent-cyan rounded-full animate-pulse" />
                <span className="text-accent-cyan font-medium">Available for freelance</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold">Hi, I'm Rachit</h3>
              <p className="text-gray-300">
                A passionate graphic designer specializing in YouTube thumbnails and branding. 
                With over a year of experience, I've helped content creators stand out and 
                increase their engagement through compelling visual design.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              <div className="bg-primary p-4 rounded-lg">
                <div className="text-accent-cyan font-bold text-3xl mb-2">50+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div className="bg-primary p-4 rounded-lg">
                <div className="text-accent-cyan font-bold text-3xl mb-2">200+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-xl font-bold">What I Love</h4>
              <div className="grid grid-cols-2 gap-4">
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
            </motion.div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          <motion.div variants={itemVariants} className="bg-primary p-6 rounded-xl">
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

          <motion.div variants={itemVariants} className="bg-primary p-6 rounded-xl">
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