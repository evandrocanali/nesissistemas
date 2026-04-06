import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import FeatureCard from '../components/Card/FeatureCard';
import heroHuman from '../assets/hero-human.png';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Code2 size={28} />,
      title: t('home.srv1_title'),
      description: t('home.srv1_desc'),
      link: '/servicos'
    },
    {
      icon: <Smartphone size={28} />,
      title: t('home.srv2_title'),
      description: t('home.srv2_desc'),
      link: '/servicos'
    },
    {
      icon: <Globe size={28} />,
      title: t('home.srv3_title'),
      description: t('home.srv3_desc'),
      link: '/servicos'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="badge human-badge">
              <span className="dot"></span> {t('home.badge')}
            </div>
            <h1 className="title-xl">
              {t('home.title1')} <br/>
              <span className="text-blue">{t('home.title2')}</span>
            </h1>
            <p className="subtitle hero-subtitle">
              {t('home.subtitle')}
            </p>
            <div className="hero-actions">
              <Link to="/portfolio" className="btn btn-primary btn-lg hover-lift">
                {t('home.btn_portfolio')}
              </Link>
              <Link to="/contato" className="btn btn-outline btn-lg hover-lift">
                {t('home.btn_contact')}
              </Link>
            </div>
          </motion.div>
          
          {/* Hero Visual - Human Centric */}
          <motion.div 
            className="hero-visual-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hero-image-container">
               <img src={heroHuman} alt="Equipe NRE Solutions" className="hero-main-img" />
               <div className="experience-badge animate-float">
                  <span className="number">10+</span>
                  <span className="label">Anos de Experiência</span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-section section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="title-lg">{t('home.services_title')} <span className="text-blue-gradient">{t('home.services_title_hl')}</span></h2>
            <p className="subtitle">{t('home.services_sub')}</p>
          </motion.div>
          
          <div className="services-grid">
            {services.map((service, idx) => (
              <FeatureCard 
                key={idx}
                index={idx}
                icon={service.icon}
                title={service.title}
                description={service.description}
                linkTo={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust CTA Section */}
      <section className="cta-section section">
        <div className="container">
          <motion.div 
            className="cta-panel-humanized"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>{t('home.cta_title')}</h2>
            <p className="cta-subtitle">{t('home.cta_sub')}</p>
            <Link to="/contato" className="btn btn-primary btn-lg hover-lift" style={{ marginTop: '2rem' }}>
              {t('home.cta_btn')} <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
