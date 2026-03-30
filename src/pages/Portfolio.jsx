import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const { t } = useTranslation();

  const cases = [
    { title: 'ERP S/A', type: t('footer.s1'), desc: t('home.srv1_desc') },
    { title: 'Fintech App', type: t('home.srv2_title'), desc: t('home.srv2_desc') },
    { title: 'Portal Web', type: t('footer.s3'), desc: t('home.srv3_desc') },
  ];

  return (
    <div className="section container">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="title-xl text-gradient-alt">{t('portfolio.title')}</h1>
        <p className="subtitle" style={{ marginBottom: '3rem' }}>
          {t('portfolio.sub')}
        </p>

        <div style={{ display: 'grid', gap: '2rem' }}>
          {cases.map((c, idx) => (
            <motion.div 
              key={idx} 
              className="glass-panel" 
              style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.15 }}
            >
              <div>
                <span className="text-muted" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{c.type}</span>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
              <button className="btn btn-outline hover-lift" style={{ borderRadius: '50%', width: '60px', height: '60px', padding: 0 }}>
                <ExternalLink />
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
