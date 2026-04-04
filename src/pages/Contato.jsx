import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Contato.css';

const Contato = () => {
  const [status, setStatus] = useState('');
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(t('contact.success'));
    e.target.reset();
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <div className="section container">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="title-xl text-gradient">{t('contact.title')}</h1>
        <p className="subtitle">{t('contact.sub')}</p>

        <div className="contact-grid" style={{ marginTop: '3rem' }}>
          {/* Informações de Contato */}
          <div className="contact-info glass-panel">
            <h2 style={{ marginBottom: '2rem' }}>{t('contact.info_title')}</h2>
            
            <div className="info-item">
              <MapPin className="text-primary" />
              <div>
                <h4>{t('contact.office')}</h4>
                <p className="text-muted">Bauru, SP</p>
              </div>
            </div>

            <div className="info-item">
              <Phone className="text-primary" />
              <div>
                <h4>{t('contact.phones')}</h4>
                <p className="text-muted">(14) 98827-0103</p>
                <p className="text-muted">(14) 98112-0394</p>
              </div>
            </div>

            <div className="info-item">
              <Mail className="text-primary" />
              <div>
                <h4>{t('contact.email')}</h4>
                <p className="text-muted">contato@nresolutions.com.br</p>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="glass-panel" style={{ padding: '3rem' }}>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>{t('contact.form_name')}</label>
                <input type="text" className="form-input" required placeholder={t('contact.form_name_ph')} />
              </div>
              
              <div className="form-group">
                <label>{t('contact.form_mail')}</label>
                <input type="email" className="form-input" required placeholder={t('contact.form_mail_ph')} />
              </div>

              <div className="form-group">
                <label>{t('contact.form_type')}</label>
                <select className="form-input" required>
                  <option value="">{t('contact.form_option1')}</option>
                  <option value="sistema">{t('contact.form_option2')}</option>
                  <option value="app">{t('contact.form_option3')}</option>
                  <option value="site">{t('contact.form_option4')}</option>
                  <option value="outro">{t('contact.form_option5')}</option>
                </select>
              </div>

              <div className="form-group">
                <label>{t('contact.form_detail')}</label>
                <textarea className="form-input" rows="4" required placeholder={t('contact.form_detail_ph')}></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                <Send size={18} style={{ marginRight: '8px' }} /> {t('contact.form_btn')}
              </button>

              {status && <div className="status-msg text-accent" style={{ marginTop: '1rem', textAlign: 'center' }}>{status}</div>}
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contato;
