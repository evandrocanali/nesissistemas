import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code, Globe, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language || 'PT');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.inicio'), path: '/' },
    { name: t('nav.servicos'), path: '/servicos' },
    { name: t('nav.portfolio'), path: '/portfolio' },
    { name: t('nav.sobre'), path: '/sobre' },
  ];

  const languages = [
    { code: 'PT', name: 'Português (BR)' },
    { code: 'EN', name: 'English (US)' },
    { code: 'ES', name: 'Español (ES)' },
    { code: 'FR', name: 'Français (FR)' },
    { code: 'DE', name: 'Deutsch (DE)' },
    { code: 'ZH', name: '中文 (CN)' },
    { code: 'HI', name: 'हिन्दी (IN)' },
  ];

  const changeLang = (code) => {
    setCurrentLang(code);
    i18n.changeLanguage(code);
    setLangOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="brand hover-glow">
          <Code className="brand-icon" />
          <span className="brand-text text-gradient">NEsis</span>
        </Link>
        
        <div className="desktop-menu">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="lang-menu" onMouseEnter={() => setLangOpen(true)} onMouseLeave={() => setLangOpen(false)}>
            <button className="lang-btn">
              <Globe size={16} /> {currentLang} <ChevronDown size={14} />
            </button>
            <div className={`lang-dropdown glass-panel ${langOpen ? 'show' : ''}`}>
              {languages.map((lang) => (
                <button 
                  key={lang.code} 
                  className={`lang-option ${currentLang === lang.code ? 'active-lang' : ''}`}
                  onClick={() => changeLang(lang.code)}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>

          <Link to="/contato" className="btn btn-primary nav-cta hover-lift">
            {t('nav.contato')}
          </Link>
        </div>

        <button 
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Menu Mobile */}
      <div className={`mobile-menu ${isOpen ? 'is-open' : ''} glass-panel`}>
        {navLinks.map((link) => (
          <Link 
            key={link.path} 
            to={link.path}
            className="mobile-link"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        
        {/* Selector mobile simpificado */}
        <div className="mobile-lang-selector" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', padding: '1rem 0' }}>
           {languages.map((lang) => (
             <button 
               key={lang.code} 
               onClick={() => { changeLang(lang.code); setIsOpen(false); }}
               className={`mobile-lang-btn ${currentLang === lang.code ? 'text-primary' : 'text-muted'}`}
               style={{ background: 'transparent', border: 'none', color: currentLang === lang.code ? 'var(--primary)' : 'var(--text-muted)', fontSize: '0.9rem', cursor: 'pointer', fontWeight: currentLang === lang.code ? 'bold' : 'normal' }}
             >
               {lang.code}
             </button>
           ))}
        </div>

        <Link 
          to="/contato" 
          className="btn btn-primary mobile-cta"
          onClick={() => setIsOpen(false)}
        >
          {t('nav.contato')}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
