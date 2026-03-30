import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './FeatureCard.css';
import { Link } from 'react-router-dom';

const FeatureCard = ({ icon, title, description, linkTo, index = 0 }) => {
  return (
    <motion.div 
      className="feature-card glass-panel hover-lift"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="feature-icon-wrapper">
        {icon}
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-desc text-muted">{description}</p>
      {linkTo && (
        <Link to={linkTo} className="feature-link">
          Saiba mais <ArrowRight size={16} />
        </Link>
      )}
    </motion.div>
  );
};

export default FeatureCard;
