import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Sobre = () => {
  const { t } = useTranslation();

  return (
    <div className="section container">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
        <h1 className="title-xl text-gradient">{t('sobre.title')}</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginTop: '3rem' }}>
          <div className="glass-panel" style={{ padding: '3rem' }}>
            <h2 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>{t('sobre.mission')}</h2>
            <p className="text-muted text-lg">
              {t('sobre.mission_desc')}
            </p>
          </div>
          
          <div className="glass-panel" style={{ padding: '3rem', borderLeft: '2px solid var(--accent)' }}>
            <h2 style={{ marginBottom: '1rem', color: 'var(--accent)' }}>{t('sobre.diff')}</h2>
            <p className="text-muted">
              {t('sobre.diff_desc')}
            </p>
          </div>
        </div>

        <div style={{ marginTop: '5rem', textAlign: 'center' }}>
          <h3 className="title-lg" style={{ marginBottom: '2rem' }}>{t('sobre.tech')}</h3>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', opacity: 0.7 }}>
            <span className="glass-panel" style={{ padding: '0.5rem 1.5rem' }}>React</span>
            <span className="glass-panel" style={{ padding: '0.5rem 1.5rem' }}>Node.js</span>
            <span className="glass-panel" style={{ padding: '0.5rem 1.5rem' }}>Python</span>
            <span className="glass-panel" style={{ padding: '0.5rem 1.5rem' }}>React Native</span>
            <span className="glass-panel" style={{ padding: '0.5rem 1.5rem' }}>AWS</span>
            <span className="glass-panel" style={{ padding: '0.5rem 1.5rem' }}>PostgreSQL</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sobre;
