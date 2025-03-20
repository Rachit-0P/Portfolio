import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Play } from 'lucide-react';

interface Thumbnail {
  id: number;
  title: string;
  category: string;
  image: string;
  afterImage: string;
  client: string;
  tools: string[];
  link: string;
}

const thumbnails: Thumbnail[] = [
  {
    id: 1,
    title: "Gaming Channel Rebrand",
    category: "YouTube Thumbnail",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=1200",
    afterImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200",
    client: "GameMaster Pro",
    tools: ["Photoshop", "After Effects"],
    link: "#"
  },
  {
    id: 2,
    title: "Tech Review Series",
    category: "YouTube Thumbnail",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200",
    afterImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200",
    client: "TechReviewer",
    tools: ["Figma", "Photoshop"],
    link: "#"
  },
  {
    id: 3,
    title: "Fitness Transformation",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200",
    afterImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200",
    client: "FitLife",
    tools: ["Illustrator", "Photoshop"],
    link: "#"
  }
];

const Portfolio = () => {
  const [selectedThumbnail, setSelectedThumbnail] = useState<Thumbnail | null>(null);
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
    <section id="portfolio" className="py-20 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-12"
        >
          <h2 className="section-title">Featured Works</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore my collection of eye-catching thumbnails and designs that have helped
            creators stand out in the digital space.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="thumbnail-grid"
        >
          {thumbnails.map((thumbnail) => (
            <motion.div
              key={thumbnail.id}
              variants={itemVariants}
              className="thumbnail-card group"
              onClick={() => setSelectedThumbnail(thumbnail)}
            >
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <img
                  src={thumbnail.image}
                  alt={thumbnail.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-bold text-white">{thumbnail.title}</h3>
                    <p className="text-sm text-gray-300">{thumbnail.category}</p>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-accent-cyan text-primary p-3 rounded-full transform hover:scale-110 transition-transform duration-300">
                    <Play size={24} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        {selectedThumbnail && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <div className="bg-secondary max-w-4xl w-full rounded-2xl overflow-hidden relative">
              <button
                onClick={() => setSelectedThumbnail(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <ExternalLink size={24} />
              </button>
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="space-y-4">
                  <img
                    src={selectedThumbnail.image}
                    alt={selectedThumbnail.title}
                    className="w-full rounded-lg"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary rounded-lg p-4">
                      <h4 className="text-sm text-gray-400">Before</h4>
                    </div>
                    <div className="bg-primary rounded-lg p-4">
                      <h4 className="text-sm text-gray-400">After</h4>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{selectedThumbnail.title}</h3>
                    <p className="text-gray-400">{selectedThumbnail.category}</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 mb-2">Client</h4>
                    <p>{selectedThumbnail.client}</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 mb-2">Tools Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedThumbnail.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 bg-accent-cyan/10 text-accent-cyan rounded-full text-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={selectedThumbnail.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center space-x-2"
                  >
                    <span>View Project</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;