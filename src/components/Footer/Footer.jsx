import React from 'react';
import { Code, Briefcase, Camera, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h2 className="text-gradient">NEsis Tecnologia</h2>
          <p className="footer-desc text-muted">
            {t('footer.desc')}
          </p>
          <div className="social-links">
            <a href="#" className="social-icon hover-glow"><MessageCircle size={20} /></a>
            <a href="#" className="social-icon hover-glow"><Camera size={20} /></a>
            <a href="#" className="social-icon hover-glow"><Briefcase size={20} /></a>
            <a href="#" className="social-icon hover-glow"><Code size={20} /></a>
          </div>
        </div>

        <div className="footer-links-group">
          <h3>{t('footer.s_title')}</h3>
          <Link to="/servicos">{t('footer.s1')}</Link>
          <Link to="/servicos">{t('footer.s2')}</Link>
          <Link to="/servicos">{t('footer.s3')}</Link>
          <Link to="/servicos">{t('footer.s4')}</Link>
        </div>

        <div className="footer-links-group">
          <h3>{t('footer.c_title')}</h3>
          <Link to="/sobre">{t('footer.c1')}</Link>
          <Link to="/portfolio">{t('footer.c2')}</Link>
          <Link to="#">{t('footer.c3')}</Link>
          <Link to="#">{t('footer.c4')}</Link>
        </div>

        <div className="footer-contact">
          <h3>{t('footer.contact')}</h3>
          <p><MapPin size={16} className="contact-icon" /> Bauru, SP - Brasil</p>
          <p><Phone size={16} className="contact-icon" /> (14) 98827-0103</p>
          <p><Phone size={16} className="contact-icon" /> (14) 98112-0394</p>
          <p><Mail size={16} className="contact-icon" /> contato@nesis.com.br</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;
