import React from 'react';
import { Instagram, Linkedin, Youtube } from 'lucide-react';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className = '', iconSize = 20 }) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <a 
        href="https://instagram.com/beyondrachit" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-accent-cyan transition-colors"
        aria-label="Instagram"
      >
        <Instagram size={iconSize} />
      </a>
      <a 
        href="https://www.linkedin.com/in/rachit-kushwaha-6a78a3331" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-accent-cyan transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin size={iconSize} />
      </a>
      <a 
        href="https://youtube.com/@beyondrachit" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-accent-cyan transition-colors"
        aria-label="YouTube"
      >
        <Youtube size={iconSize} />
      </a>
    </div>
  );
};

export default SocialLinks;