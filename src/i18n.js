import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Dicionário gigante de traduções
const resources = {
  PT: {
    translation: {
      "nav": {
        "inicio": "Início", "servicos": "Serviços", "portfolio": "Portfólio", "sobre": "Sobre", "contato": "Fale Conosco"
      },
      "home": {
        "badge": "Inovação Contínua",
        "title1": "Desenvolvemos",
        "title2": "Sistemas do Futuro",
        "subtitle": "Transformamos ideias de alto valor em soluções digitais excepcionais. Sua visão desenhada, codificada e escalada com maestria.",
        "btn_portfolio": "Ver Nosso Portfólio",
        "btn_contact": "Agendar Reunião",
        "services_title": "Nossas",
        "services_title_hl": "Especialidades",
        "services_sub": "Dominamos o ciclo completo de engenharia de software.",
        "srv1_title": "Sistemas Complexos", "srv1_desc": "Arquiteturas robustas, painéis administrativos e automação de processos.",
        "srv2_title": "Aplicativos Mobile", "srv2_desc": "Experiências nativas superiores para iOS e Android focadas em performance.",
        "srv3_title": "Websites de Alto Impacto", "srv3_desc": "Landing pages e interfaces imersivas que convertem visitantes em clientes.",
        "cta_title": "Pronto para escalar seu negócio?",
        "cta_sub": "Pare de perder tempo com soluções genéricas. Desenvolvemos o sistema perfeito para você dominar seu mercado.",
        "cta_btn": "Iniciar Projeto",
        "know_more": "Saiba mais"
      },
      "footer": {
        "desc": "Transformando ideias em software de alto impacto. Sistemas, aplicativos móveis e frentes digitais desenhados para o amanhã.",
        "s_title": "Soluções", "s1": "Sistemas Web", "s2": "Aplicativos Mobile", "s3": "Sites Corporativos", "s4": "E-commerce",
        "c_title": "Empresa", "c1": "Sobre Nós", "c2": "Cases de Sucesso", "c3": "Carreiras", "c4": "Blog",
        "contact": "Contato",
        "rights": "NEsis. Todos os direitos reservados. Feito com tecnologia de ponta."
      },
      "contact": {
        "title": "Vamos Iniciar?", "sub": "Conte-nos sobre o seu projeto e como podemos ajudar.",
        "info_title": "Informações Diretas",
        "office": "Escritório", "phones": "Telefones", "email": "E-mail",
        "form_name": "Nome Completo", "form_name_ph": "Seu nome",
        "form_mail": "E-mail Corporativo", "form_mail_ph": "seu@email.com.br",
        "form_type": "Tipo de Projeto", "form_option1": "Selecione...", "form_option2": "Sistema Web/ERP", "form_option3": "Aplicativo Mobile", "form_option4": "Website Profissional", "form_option5": "Outro",
        "form_detail": "Detalhes do Projeto", "form_detail_ph": "Conte mais sobre o objetivo e escopo...",
        "form_btn": "Enviar Mensagem", "success": "Mensagem enviada com sucesso! Entraremos em contato brevemente."
      },
      "sobre": {
        "title": "Nossa Essência", "mission": "Missão", "mission_desc": "Democratizar o acesso à tecnologia de ponta, permitindo que empresas de qualquer tamanho possam competir na nova economia digital através de software de excelência.",
        "diff": "A Diferença NEsis", "diff_desc": "Não somos apenas programadores. Somos engenheiros e arquitetos de soluções. Nosso time respira inovação e garantimos que todo código entregue siga rigorosos padrões globais de qualidade e segurança.",
        "tech": "Tecnologias que Dominamos"
      },
      "portfolio": {
        "title": "Casos de Sucesso", "sub": "Veja como nossa tecnologia está transformando o mercado."
      },
      "servicos": {
        "title": "Nossos Serviços", "sub": "Tecnologia aplicada para resolver problemas reais de negócios.",
        "db_title": "Arquitetura de Dados", "db_desc": "Modelagem de bancos de dados robustos e escaláveis.",
        "cloud_title": "Hospedagem e Cloud", "cloud_desc": "Infraestrutura flexível na nuvem para manter seus sistemas sempre no ar.",
        "sec_title": "Segurança da Informação", "sec_desc": "Auditoria e proteção de sistemas e proteção de dados LGPD."
      }
    }
  },
  EN: {
    translation: {
      "nav": { "inicio": "Home", "servicos": "Services", "portfolio": "Portfolio", "sobre": "About", "contato": "Contact Us" },
      "home": {
        "badge": "Continuous Innovation", "title1": "We Develop", "title2": "Systems of the Future",
        "subtitle": "We transform high-value ideas into exceptional digital solutions. Your vision designed, coded, and scaled with mastery.",
        "btn_portfolio": "View Portfolio", "btn_contact": "Schedule a Meeting", "services_title": "Our", "services_title_hl": "Specialties", "services_sub": "We master the complete lifecycle of software engineering.",
        "srv1_title": "Complex Systems", "srv1_desc": "Robust architectures, admin panels, and process automation.",
        "srv2_title": "Mobile Apps", "srv2_desc": "Superior native experiences for iOS and Android focused on performance.",
        "srv3_title": "High-Impact Websites", "srv3_desc": "Landing pages and immersive interfaces that convert visitors to clients.",
        "cta_title": "Ready to scale your business?", "cta_sub": "Stop wasting time with generic solutions. We build the perfect system to dominate your market.", "cta_btn": "Start Project", "know_more": "Learn more"
      },
      "footer": { "desc": "Transforming ideas into high-impact software. Systems, mobile apps, and digital fronts built for tomorrow.", "s_title": "Solutions", "s1": "Web Systems", "s2": "Mobile Apps", "s3": "Corporate Sites", "s4": "E-commerce", "c_title": "Company", "c1": "About Us", "c2": "Success Cases", "c3": "Careers", "c4": "Blog", "contact": "Contact", "rights": "NEsis. All rights reserved. Made with cutting-edge tech." },
      "contact": { "title": "Let's Start?", "sub": "Tell us about your project and how we can help.", "info_title": "Direct Info", "office": "Office", "phones": "Phones", "email": "Email", "form_name": "Full Name", "form_name_ph": "Your Name", "form_mail": "Corporate Email", "form_mail_ph": "you@email.com", "form_type": "Project Type", "form_option1": "Select...", "form_option2": "Web System / ERP", "form_option3": "Mobile App", "form_option4": "Professional Website", "form_option5": "Other", "form_detail": "Project Details", "form_detail_ph": "Tell us more about the scope...", "form_btn": "Send Message", "success": "Message sent successfully! We will contact you shortly." },
      "sobre": { "title": "Our Essence", "mission": "Mission", "mission_desc": "Democratizing access to cutting-edge technology, enabling companies to compete through excellent software.", "diff": "The NEsis Difference", "diff_desc": "We are architects. We guarantee rigorous global quality and security standards.", "tech": "Technologies We Master" },
      "portfolio": { "title": "Success Cases", "sub": "See how our tech is changing the market." },
      "servicos": { "title": "Our Services", "sub": "Applied technology to solve real business problems.", "db_title": "Data Architecture", "db_desc": "Robust and scalable databases.", "cloud_title": "Cloud Hosting", "cloud_desc": "Flexible cloud infrastructure.", "sec_title": "Information Security", "sec_desc": "Audits and data protection." }
    }
  },
  ES: {
    translation: {
      "nav": { "inicio": "Inicio", "servicos": "Servicios", "portfolio": "Portafolio", "sobre": "Nosotros", "contato": "Contáctanos" },
      "home": { "badge": "Innovación Continua", "title1": "Desarrollamos", "title2": "Sistemas del Futuro", "subtitle": "Transformamos ideas de alto valor en soluciones digitales.", "btn_portfolio": "Ver Portafolio", "btn_contact": "Agendar Reunión", "services_title": "Nuestras", "services_title_hl": "Especialidades", "services_sub": "Dominamos la ingeniería de software.", "srv1_title": "Sistemas Complejos", "srv1_desc": "Arquitecturas robustas y automatización.", "srv2_title": "Apps Móviles", "srv2_desc": "Experiencias nativas superiores.", "srv3_title": "Sitios de Alto Impacto", "srv3_desc": "Interfaces inmersivas que convierten.", "cta_title": "¿Listo para escalar?", "cta_sub": "Desarrollamos el sistema perfecto.", "cta_btn": "Iniciar Proyecto", "know_more": "Saber más" },
      "footer": { "desc": "Sistemas, apps y frentes digitales para el mañana.", "s_title": "Soluciones", "s1": "Sistemas", "s2": "Apps", "s3": "Sitios", "s4": "E-commerce", "c_title": "Empresa", "c1": "Nosotros", "c2": "Casos de Éxito", "c3": "Carreras", "c4": "Blog", "contact": "Contacto", "rights": "NEsis. Todos los derechos reservados." },
      "contact": { "title": "¿Comenzamos?", "sub": "Cuéntanos sobre tu proyecto.", "info_title": "Info Directa", "office": "Oficina", "phones": "Teléfonos", "email": "Correo", "form_name": "Nombre", "form_name_ph": "Tu nombre", "form_mail": "Correo", "form_mail_ph": "tu@correo.com", "form_type": "Tipo", "form_option1": "Seleccione...", "form_option2": "Sistema", "form_option3": "App", "form_option4": "Web", "form_option5": "Otro", "form_detail": "Detalles", "form_detail_ph": "Cuéntanos sobre el proyecto...", "form_btn": "Enviar", "success": "¡Mensaje enviado con éxito!" },
      "sobre": { "title": "Nuestra Esencia", "mission": "Misión", "mission_desc": "Democratizar tecnología de punta.", "diff": "La Diferencia", "diff_desc": "Somos arquitectos que garantizan excelencia global.", "tech": "Tecnologías que Dominamos" },
      "portfolio": { "title": "Casos de Éxito", "sub": "Mira lo que hemos logrado." },
      "servicos": { "title": "Nuestros Servicios", "sub": "Tecnología para negocios.", "db_title": "Datos", "db_desc": "Bases de datos escalables.", "cloud_title": "Cloud", "cloud_desc": "Servidores flexibles.", "sec_title": "Seguridad", "sec_desc": "Protección y auditoría." }
    }
  },
  FR: {
    translation: {
      "nav": { "inicio": "Accueil", "servicos": "Services", "portfolio": "Portefeuille", "sobre": "À propos", "contato": "Contact" },
      "home": { "badge": "Innovation Continue", "title1": "Nous Développons", "title2": "L'avenir des Systèmes", "subtitle": "Nous transformons de grandes idées en solutions digitales exceptionnelles.", "btn_portfolio": "Voir le Profil", "btn_contact": "Prendre Rendez-vous", "services_title": "Nos", "services_title_hl": "Spécialités", "services_sub": "Maîtrise totale du logiciel.", "srv1_title": "Systèmes Complexes", "srv1_desc": "Automatisation et ERP.", "srv2_title": "Applications", "srv2_desc": "Expériences mobiles performantes.", "srv3_title": "Sites d'Impact", "srv3_desc": "Interfaces immersives.", "cta_title": "Prêt à évoluer?", "cta_sub": "Développons le système parfait.", "cta_btn": "Démarrer le Projet", "know_more": "En savoir plus" },
      "footer": { "desc": "Des systèmes conçus pour demain.", "s_title": "Solutions", "s1": "Web", "s2": "Mobile", "s3": "Sites", "s4": "E-commerce", "c_title": "Entreprise", "c1": "À propos", "c2": "Succès", "c3": "Carrières", "c4": "Blog", "contact": "Contact", "rights": "NEsis. Tous droits réservés." },
      "contact": { "title": "C'est parti?", "sub": "Parlez-nous de votre projet.", "info_title": "Informations", "office": "Bureau", "phones": "Tél", "email": "E-mail", "form_name": "Nom", "form_name_ph": "Votre nom", "form_mail": "E-mail", "form_mail_ph": "email@email.com", "form_type": "Type", "form_option1": "Choisir", "form_option2": "Web", "form_option3": "Mobile", "form_option4": "Site", "form_option5": "Autre", "form_detail": "Détails", "form_detail_ph": "Plus d'infos...", "form_btn": "Envoyer", "success": "Message envoyé avec succès!" },
      "sobre": { "title": "Notre Essence", "mission": "Mission", "mission_desc": "Moderniser les entreprises.", "diff": "La Différence", "diff_desc": "L'ingénierie au plus haut niveau.", "tech": "Nos Technologies" },
      "portfolio": { "title": "Cas de Succès", "sub": "La technologie transformatrice." },
      "servicos": { "title": "Nos Services", "sub": "Solutions réelles.", "db_title": "Bases de Données", "db_desc": "Architectures données.", "cloud_title": "Cloud", "cloud_desc": "Hébergement souple.", "sec_title": "Sécurité", "sec_desc": "Protection optimale." }
    }
  },
  DE: {
    translation: {
      "nav": { "inicio": "Startseite", "servicos": "Dienstleistungen", "portfolio": "Portfolio", "sobre": "Über uns", "contato": "Kontakt" },
      "home": { "badge": "Kontinuierliche Innovation", "title1": "Wir entwickeln", "title2": "Systeme der Zukunft", "subtitle": "Wir verwandeln große Ideen in digitale Lösungen.", "btn_portfolio": "Portfolio ansehen", "btn_contact": "Termin vereinbaren", "services_title": "Unsere", "services_title_hl": "Spezialgebiete", "services_sub": "Software-Engineering in Perfektion.", "srv1_title": "Komplexe Systeme", "srv1_desc": "Erp und CRM.", "srv2_title": "Mobile Apps", "srv2_desc": "iOS & Android Erfahrungen.", "srv3_title": "High-End Websites", "srv3_desc": "Design, das konvertiert.", "cta_title": "Bereit zum Wachsen?", "cta_sub": "Das perfekte System für Ihren Markt.", "cta_btn": "Projekt starten", "know_more": "Mehr erfahren" },
      "footer": { "desc": "Zukunftsweisende Systeme und Apps.", "s_title": "Lösungen", "s1": "Web", "s2": "Apps", "s3": "Websites", "s4": "Shop", "c_title": "Firma", "c1": "Über uns", "c2": "Erfolge", "c3": "Karriere", "c4": "Blog", "contact": "Kontakt", "rights": "NEsis. Alle Rechte vorbehalten." },
      "contact": { "title": "Lass uns beginnen", "sub": "Erzählen Sie uns von Ihrem Projekt.", "info_title": "Informationen", "office": "Büro", "phones": "Telefone", "email": "E-Mail", "form_name": "Name", "form_name_ph": "Ihr Name", "form_mail": "E-Mail", "form_mail_ph": "email@domain.com", "form_type": "Art", "form_option1": "Wählen...", "form_option2": "System", "form_option3": "App", "form_option4": "Webseite", "form_option5": "Anderes", "form_detail": "Details", "form_detail_ph": "Beschreiben Sie das Projekt...", "form_btn": "Senden", "success": "Erfolgreich gesendet!" },
      "sobre": { "title": "Wer wir sind", "mission": "Mission", "mission_desc": "Demokratisierung von Top-Technologie.", "diff": "Unser Unterschied", "diff_desc": "Exzellenz und Sicherheit.", "tech": "Unsere Technologien" },
      "portfolio": { "title": "Erfolgsgeschichten", "sub": "Transformation der Märkte." },
      "servicos": { "title": "Dienstleistungen", "sub": "Wir lösen echte Probleme.", "db_title": "Daten", "db_desc": "Skalierbare Datenbanken.", "cloud_title": "Cloud", "cloud_desc": "Zuverlässiges Hosting.", "sec_title": "Sicherheit", "sec_desc": "Audit und Schutz." }
    }
  },
  ZH: {
    translation: {
      "nav": { "inicio": "主页", "servicos": "服务", "portfolio": "作品集", "sobre": "关于我们", "contato": "联系我们" },
      "home": { "badge": "持续创新", "title1": "我们开发", "title2": "未来的系统", "subtitle": "将高价值的创意转化为卓越的数字解决方案。", "btn_portfolio": "查看作品集", "btn_contact": "预约会议", "services_title": "我们的", "services_title_hl": "专长", "services_sub": "精通软件工程的全生命周期。", "srv1_title": "复杂的系统", "srv1_desc": "强大的架构与自动化。", "srv2_title": "移动应用", "srv2_desc": "极致的原生体验。", "srv3_title": "高影响力网站", "srv3_desc": "高转化率的界面设计。", "cta_title": "准备好扩张您的业务了吗？", "cta_sub": "停止使用通用解决方案，我们为您打造专属系统。", "cta_btn": "启动项目", "know_more": "了解更多" },
      "footer": { "desc": "为明天设计的高影响力软件、系统和移动平台。", "s_title": "解决方案", "s1": "Web系统", "s2": "移动应用", "s3": "企业网站", "s4": "电子商务", "c_title": "公司", "c1": "关于我们", "c2": "成功案例", "c3": "职业", "c4": "博客", "contact": "联系", "rights": "NEsis。版权所有。" },
      "contact": { "title": "准备开始？", "sub": "告诉我们您的项目需求。", "info_title": "联系信息", "office": "办公室", "phones": "电话", "email": "电子邮件", "form_name": "全名", "form_name_ph": "您的名字", "form_mail": "企业邮箱", "form_mail_ph": "email@domain.com", "form_type": "项目类型", "form_option1": "请选择...", "form_option2": "Web/ERP", "form_option3": "移动应用", "form_option4": "企业网站", "form_option5": "其他", "form_detail": "项目详情", "form_detail_ph": "目标与范围...", "form_btn": "发送信息", "success": "消息已成功发送！我们将尽快回复。" },
      "sobre": { "title": "我们的精髓", "mission": "使命", "mission_desc": "让每个人都能使用尖端技术。", "diff": "与众不同", "diff_desc": "全球标准的卓越代码与安全保障。", "tech": "精通技术" },
      "portfolio": { "title": "成功案例", "sub": "看我们的技术如何改变市场。" },
      "servicos": { "title": "服务", "sub": "解决真实业务问题的技术。", "db_title": "数据架构", "db_desc": "现代化的数据库模型。", "cloud_title": "云服务", "cloud_desc": "稳定的云托管。", "sec_title": "信息安全", "sec_desc": "全套数据保护与审计。" }
    }
  },
  HI: {
    translation: {
      "nav": { "inicio": "होम", "servicos": "सेवाएं", "portfolio": "पोर्टफोलियो", "sobre": "हमारे बारे में", "contato": "संपर्क करें" },
      "home": { "badge": "निरंतर नवाचार", "title1": "हम विकसित करते हैं", "title2": "भविष्य की प्रणालियां", "subtitle": "हम आपकी दृष्टि को असाधारण डिजिटल समाधानों में बदलते हैं।", "btn_portfolio": "पोर्टफोलियो देखें", "btn_contact": "मीटिंग तय करें", "services_title": "हमारी", "services_title_hl": "विशेषज्ञता", "services_sub": "हम सॉफ्टवेयर इंजीनियरिंग के मास्टर हैं।", "srv1_title": "जटिल सिस्टम", "srv1_desc": "मजबूत वास्तुकला और स्वचालन।", "srv2_title": "मोबाइल ऐप्स", "srv2_desc": "बेहतर प्रदर्शन के लिए नेटिव अनुभव।", "srv3_title": "उच्च-प्रभावित वेबसाइटें", "srv3_desc": "कनवर्ज़न-केंद्रित शानदार डिज़ाइन।", "cta_title": "क्या आप अपने व्यापार को बढ़ाने के लिए तैयार हैं?", "cta_sub": "हम बाजार में आपका दबदबा बनाने के लिए प्रणाली बनाएंगे।", "cta_btn": "प्रोजेक्ट शुरू करें", "know_more": "और जानें" },
      "footer": { "desc": "कल के लिए डिज़ाइन किए गए सॉफ्टवेयर और ऐप्स।", "s_title": "समाधान", "s1": "वेब सिस्टम", "s2": "मोबाइल ऐप्स", "s3": "कॉर्पोरेट साइट्स", "s4": "ई-कॉमर्स", "c_title": "कंपनी", "c1": "हमारे बारे में", "c2": "सफलता की कहानियां", "c3": "करियर", "c4": "ब्लॉग", "contact": "संपर्क", "rights": "नेसीस। सर्वाधिकार सुरक्षित।" },
      "contact": { "title": "शुरुआत करें?", "sub": "हमें अपने प्रोजेक्ट के बारे में बताएं।", "info_title": "सीधी जानकारी", "office": "कार्यालय", "phones": "फोन", "email": "ईमेल", "form_name": "पूरा नाम", "form_name_ph": "आपका नाम", "form_mail": "ईमेल", "form_mail_ph": "email@domain.com", "form_type": "प्रोजेक्ट प्रकार", "form_option1": "चुनें...", "form_option2": "वेब/ERP", "form_option3": "मोबाइल ऐप", "form_option4": "वेबसाइट", "form_option5": "अन्य", "form_detail": "विवरण", "form_detail_ph": "प्रोजेक्ट के बारे में बताएं...", "form_btn": "संदेश भेजें", "success": "संदेश सफलतापूर्वक भेजा गया!" },
      "sobre": { "title": "हमारा सार", "mission": "मिशन", "mission_desc": "अत्याधुनिक तकनीक के उपयोग को सभी के लिए संभव बनाना।", "diff": "नेसीस का अंतर", "diff_desc": "हम तकनीकी गुणवत्ता और सुरक्षा सुनिश्चित करते हैं।", "tech": "हमारी तकनीकें" },
      "portfolio": { "title": "सफलता की कहानियां", "sub": "तकनीक बाजार को कैसे बदल रही है।" },
      "servicos": { "title": "हमारी सेवाएं", "sub": "व्यापार समस्याओं के लिए तकनीक।", "db_title": "डेटा वास्तुकला", "db_desc": "स्केलेबल डेटाबेस।", "cloud_title": "क्लाउड सेवा", "cloud_desc": "मजबूत होस्टिंग।", "sec_title": "सूचना सुरक्षा", "sec_desc": "डेटा की सुरक्षा और ऑडिट।" }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "PT", // Idioma padrão
    fallbackLng: "EN",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
