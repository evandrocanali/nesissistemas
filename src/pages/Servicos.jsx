import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Globe, Database, Cloud, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import FeatureCard from '../components/Card/FeatureCard';

const Servicos = () => {
  const { t } = useTranslation();

  const allServices = [
    { icon: <Code2 size={24} />, title: t('home.srv1_title'), description: t('home.srv1_desc') },
    { icon: <Smartphone size={24} />, title: t('home.srv2_title'), description: t('home.srv2_desc') },
    { icon: <Globe size={24} />, title: t('home.srv3_title'), description: t('home.srv3_desc') },
    { icon: <Database size={24} />, title: t('servicos.db_title'), description: t('servicos.db_desc') },
    { icon: <Cloud size={24} />, title: t('servicos.cloud_title'), description: t('servicos.cloud_desc') },
    { icon: <Shield size={24} />, title: t('servicos.sec_title'), description: t('servicos.sec_desc') },
  ];

  return (
    <div className="section container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="title-xl text-gradient">{t('servicos.title')}</h1>
        <p className="subtitle" style={{ marginBottom: '3rem' }}>
          {t('servicos.sub')}
        </p>

        <div className="services-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'
        }}>
          {allServices.map((srv, idx) => (
            <FeatureCard key={idx} index={idx} icon={srv.icon} title={srv.title} description={srv.description} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Servicos;
