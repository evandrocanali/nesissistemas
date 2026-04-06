import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, CheckCircle2 } from 'lucide-react';
import './TrustPopup.css';

const TrustPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after 2 seconds
    const timer = setTimeout(() => {
    setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="trust-popup"
          initial={{ opacity: 0, x: -50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -50, scale: 0.9 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="trust-content">
            <div className="trust-icon">
              <Users size={20} />
            </div>
            <div className="trust-text">
              <span className="trust-label">Conexão Real</span>
              <span className="trust-highlight">+100 Clientes Satisfeitos</span>
            </div>
            <CheckCircle2 size={16} className="trust-check" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TrustPopup;
