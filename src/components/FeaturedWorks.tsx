import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Define categories and their corresponding images
const categories = ["Earning", "Gaming", "Vlog", "Fitness", "Tech"];

// Extended image data with categories
const thumbnailImages = [
  // Earning thumbnails
  { id: 1, src: "/images/earning1.jpg", category: "Earning", alt: "Passive Income Methods" },
  { id: 2, src: "/images/earning2.jpg", category: "Earning", alt: "Stock Market Investing" },
  { id: 3, src: "/images/earning3.jpg", category: "Earning", alt: "Crypto Trading Tips" },
  { id: 4, src: "/images/earning4.jpg", category: "Earning", alt: "Freelancing Guide" },
  { id: 5, src: "/images/earning5.jpg", category: "Earning", alt: "Freelancing Guide" },
  { id: 6, src: "/images/earning6.jpg", category: "Earning", alt: "Freelancing Guide" },
  
  // Gaming thumbnails
  { id: 7, src: "/images/gaming1.jpg", category: "Gaming", alt: "Minecraft Build Challenge" },
  { id: 8, src: "/images/gaming2.jpg", category: "Gaming", alt: "Fortnite Victory Royale" },
  { id: 9, src: "/images/gaming3.jpg", category: "Gaming", alt: "Call of Duty Highlights" },
  { id: 10, src: "/images/gaming4.jpg", category: "Gaming", alt: "Among Us Strategy Guide" },
  { id: 11, src: "/images/gaming5.jpg", category: "Gaming", alt: "Among Us Strategy Guide" },
  { id: 12, src: "/images/gaming6.jpg", category: "Gaming", alt: "Among Us Strategy Guide" },
  
  
  // Vlog thumbnails
  { id: 13, src: "/images/vlog1.jpg", category: "Vlog", alt: "Day in My Life" },
  { id: 14, src: "/images/vlog2.jpg", category: "Vlog", alt: "Travel Vlog: Paris" },
  { id: 15, src: "/images/vlog3.jpg", category: "Vlog", alt: "Moving to a New City" },
  { id: 16, src: "/images/vlog4.jpg", category: "Vlog", alt: "Moving to a New City" },
  { id: 17, src: "/images/vlog5.jpg", category: "Vlog", alt: "Moving to a New City" },
  { id: 18, src: "/images/vlog6.jpg", category: "Vlog", alt: "Moving to a New City" },
  
  // Fitness thumbnails
  { id: 19, src: "/images/fitness1.jpg", category: "Fitness", alt: "Full Body Workout" },
  { id: 20, src: "/images/fitness2.jpg", category: "Fitness", alt: "Diet Tips for Muscle Gain" },
  { id: 21, src: "/images/fitness3.jpg", category: "Fitness", alt: "30-Day Transformation" },
  { id: 22, src: "/images/fitness4.jpg", category: "Fitness", alt: "Home Workout No Equipment" },
  { id: 23, src: "/images/fitness5.jpg", category: "Fitness", alt: "Home Workout No Equipment" },
  { id: 24, src: "/images/fitness6.jpg", category: "Fitness", alt: "Home Workout No Equipment" },
  
  // Tech thumbnails
  { id: 25, src: "/images/tech1.jpg", category: "Tech", alt: "iPhone 15 Review" },
  { id: 26, src: "/images/tech2.jpg", category: "Tech", alt: "Best Budget Laptops 2025" },
  { id: 27, src: "/images/tech3.jpg", category: "Tech", alt: "Future of AI" },
  { id: 28, src: "/images/tech4.jpg", category: "Tech", alt: "Building a Gaming PC" },
  { id: 29, src: "/images/tech5.jpg", category: "Tech", alt: "Building a Gaming PC" },
  { id: 30, src: "/images/tech6.jpg", category: "Tech", alt: "Building a Gaming PC" },
];

const FeaturedWorks = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // State to track the selected category - set default to first category
  const [activeCategory, setActiveCategory] = useState("Earning");
  const [filteredThumbnails, setFilteredThumbnails] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filter thumbnails based on the selected category
  useEffect(() => {
    setLoading(true);
    const filtered = thumbnailImages.filter(thumb => thumb.category === activeCategory);
    setFilteredThumbnails(filtered);
    
    // Simulate loading time for images
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Earning": "3b82f6,1f2937", // Blue
      "Gaming": "ef4444,1f2937", // Red
      "Vlog": "10b981,1f2937", // Green
      "Fitness": "f59e0b,1f2937", // Orange
      "Tech": "8b5cf6,1f2937" // Purple
    };
    return colors[category] || "6b7280,1f2937";
  };

  return (
    <section id="featured-works" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured Works</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-12">
            Some of my best thumbnail designs and creative projects.
          </p>
          
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center mb-12 gap-2" role="tablist">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-accent-cyan text-primary' 
                    : 'bg-secondary hover:bg-accent-cyan/20 text-gray-300'
                }`}
                role="tab"
                aria-selected={activeCategory === category}
                aria-controls={`${category.toLowerCase()}-panel`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>
        
        {/* Thumbnails grid with loading state */}
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div 
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="aspect-video bg-gray-800 animate-pulse rounded-lg"></div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key={activeCategory}
              id={`${activeCategory.toLowerCase()}-panel`}
              role="tabpanel"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredThumbnails.map((thumb) => (
                <motion.div 
                  key={thumb.id} 
                  className="group relative overflow-hidden rounded-lg shadow-lg bg-secondary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  layout
                >
                  {/* 16:9 aspect ratio container */}
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={thumb.src}
                      alt={thumb.alt}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        // Generate a placeholder with category-specific colors
                        const color = getCategoryColor(thumb.category);
                        e.currentTarget.src = `https://placehold.co/1920x1080/${color}/FFFFFF?text=${thumb.category}&font=montserrat`;
                      }}
                      aria-label={`${thumb.alt} - ${thumb.category} thumbnail`}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* No results message */}
        {!loading && filteredThumbnails.length === 0 && (
          <div className="text-center text-gray-400 py-12">
            No thumbnails found for this category.
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedWorks;
