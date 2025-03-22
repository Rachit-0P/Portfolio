import React, { useState } from 'react';
import { motion } from 'framer-motion';

const categories = ['Documentary', 'Vlogs', 'Earning', 'Gaming', 'Random'];

const projects = [
  { id: 1, title: 'Project 1', category: 'Documentary', image: 'https://via.placeholder.com/300' },
  { id: 2, title: 'Project 2', category: 'Vlogs', image: 'https://via.placeholder.com/300' },
  { id: 3, title: 'Project 3', category: 'Earning', image: 'https://via.placeholder.com/300' },
  { id: 4, title: 'Project 4', category: 'Gaming', image: 'https://via.placeholder.com/300' },
  { id: 5, title: 'Project 5', category: 'Random', image: 'https://via.placeholder.com/300' },
  { id: 6, title: 'Project 6', category: 'Documentary', image: 'https://via.placeholder.com/300' },
];

const FeaturedProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="featured-projects" className="py-20 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="section-title">Featured Works</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Explore my collection of eye-catching thumbnails and designs that have helped creators stand out in the digital space.
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          {['All', ...categories].map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg ${selectedCategory === category ? 'bg-accent-cyan text-primary' : 'bg-primary text-gray-300'} transition-colors`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              className="relative overflow-hidden rounded-lg shadow-lg group"
              whileHover={{ scale: 1.05 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-lg font-bold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
