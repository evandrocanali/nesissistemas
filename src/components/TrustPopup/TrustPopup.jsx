import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, CheckCircle2, Award, Heart } from 'lucide-react';
import './TrustPopup.css';

const TrustPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const items = [
    {
      icon: <Users size={20} />,
      label: "Conexão Real",
      highlight: "+100 Clientes Satisfeitos",
      delay: 0.1
    },
    {
      icon: <Award size={20} />,
      label: "Nossa Jornada",
      highlight: "+10 Anos de Experiência",
      delay: 0.3
    }
  ];

  return (
    <div className="trust-container">
      <AnimatePresence>
        {isVisible && items.map((item, idx) => (
          <motion.div 
            key={idx}
            className="trust-popup"
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.9 }}
            transition={{ duration: 0.6, delay: item.delay, ease: "easeOut" }}
          >
            <div className="trust-content">
              <div className="trust-icon">
                {item.icon}
              </div>
              <div className="trust-text">
                <span className="trust-label">{item.label}</span>
                <span className="trust-highlight">{item.highlight}</span>
              </div>
              <CheckCircle2 size={16} className="trust-check" />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TrustPopup;
