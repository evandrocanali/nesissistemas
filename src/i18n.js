import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Dicionário de traduções humanizado
const resources = {
  PT: {
    translation: {
      "nav": {
        "inicio": "Início", "servicos": "Serviços", "portfolio": "Portfólio", "sobre": "Sobre", "contato": "Fale Conosco"
      },
      "home": {
        "badge": "Foco em Pessoas & Tecnologia",
        "title1": "Soluções Digitais",
        "title2": "Para o seu Negócio",
        "subtitle": "Unimos expertise técnica com um olhar humano para criar sistemas que facilitam o dia a dia e impulsionam o crescimento real da sua empresa.",
        "btn_portfolio": "Conheça Nosso Trabalho",
        "btn_contact": "Falar com Consultor",
        "services_title": "Como",
        "services_title_hl": "Ajudamos Você",
        "services_sub": "Tecnologia pensada para resolver desafios reais de pessoas e negócios.",
        "srv1_title": "Sistemas Personalizados", "srv1_desc": "Criamos ferramentas sob medida para organizar seus processos e ganhar tempo.",
        "srv2_title": "Experiência Mobile", "srv2_desc": "Aplicativos intuitivos e rápidos que seus clientes e equipe vão adorar usar.",
        "srv3_title": "Presença Digital", "srv3_desc": "Sites profissionais que comunicam sua essência e atraem as pessoas certas.",
        "cta_title": "Vamos construir algo incrível juntos?",
        "cta_sub": "Estamos prontos para ouvir seus desafios e transformar sua visão em uma realidade digital simples e eficiente.",
        "cta_btn": "Conversar Agora",
        "know_more": "Descobrir mais"
      },
      "footer": {
        "desc": "Parceiros na sua jornada de transformação digital. Criamos tecnologia com alma para conectar sua marca às pessoas.",
        "s_title": "Nossas Frentes", "s1": "Sistemas Web", "s2": "Aplicativos", "s3": "Sites Corporativos", "s4": "E-commerce",
        "c_title": "A NRE Solutions", "c1": "Sobre Nós", "c2": "Histórias de Sucesso", "c3": "Carreiras", "c4": "Blog",
        "contact": "Fale com a Gente",
        "rights": "NRE Solutions. Tecnologia com foco em pessoas."
      },
      "contact": {
        "title": "Oi! Vamos conversar?", "sub": "Adoramos ouvir novas ideias. Conte-nos como podemos somar ao seu negócio.",
        "info_title": "Canais Diretos",
        "office": "Nosso Espaço", "phones": "Conversar por Telefone", "email": "Enviar um E-mail",
        "form_name": "Como podemos te chamar?", "form_name_ph": "Seu nome",
        "form_mail": "Seu melhor E-mail", "form_mail_ph": "seu@email.com",
        "form_type": "Qual o seu interesse?", "form_option1": "Selecione...", "form_option2": "Sistema sob medida", "form_option3": "App para celular", "form_option4": "Site profissional", "form_option5": "Outro desafio",
        "form_detail": "Conte um pouco mais", "form_detail_ph": "Qual o seu objetivo principal? Como podemos colaborar?",
        "form_btn": "Enviar uma mensagem", "success": "Recebemos sua mensagem! Em breve um de nossos especialistas falará com você."
      },
      "sobre": {
        "title": "Quem Somos", "mission": "Nosso Propósito", "mission_desc": "Simplificar a tecnologia para que ela seja uma aliada do crescimento humano e empresarial, tornando a inovação acessível e relevante.",
        "diff": "O Jeito NRE de Ser", "diff_desc": "Damos valor às relações. Cada linha de código que escrevemos tem o objetivo de melhorar a vida de alguém. Somos parceiros estratégicos que vibram com o seu sucesso.",
        "tech": "Nossas Ferramentas"
      },
      "portfolio": {
        "title": "Projetos Reais", "sub": "Histórias de como transformamos desafios em soluções que geram valor."
      },
      "servicos": {
        "title": "Nossas Soluções", "sub": "Tecnologia aplicada com inteligência e empatia para o seu negócio.",
        "db_title": "Dados com Inteligência", "db_desc": "Organizamos sua informação para que você tome decisões melhores.",
        "cloud_title": "Segurança e Nuvem", "cloud_desc": "Sua tranquilidade é nossa prioridade. Sistemas sempre seguros e disponíveis.",
        "sec_title": "Cuidado com seus Dados", "sec_desc": "Proteção total e conformidade para a segurança da sua empresa e clientes."
      }
    }
  },
  EN: {
    translation: {
      "nav": { "inicio": "Home", "servicos": "Services", "portfolio": "Portfolio", "sobre": "About", "contato": "Get in Touch" },
      "home": {
        "badge": "People-First Technology", "title1": "Digital Solutions", "title2": "For Your Business",
        "subtitle": "We blend technical expertise with a human touch to build systems that simplify daily tasks and drive real growth.",
        "btn_portfolio": "See Our Work", "btn_contact": "Talk to an Expert", "services_title": "How We", "services_title_hl": "Help You", "services_sub": "Technology designed to solve real human and business challenges.",
        "srv1_title": "Custom Systems", "srv1_desc": "Bespoke tools to organize your processes and save you time.",
        "srv2_title": "Mobile Experience", "srv2_desc": "Intuitive, fast apps that your customers and team will love using.",
        "srv3_title": "Digital Presence", "srv3_desc": "Professional websites that communicate your essence and attract the right people.",
        "cta_title": "Let's build something amazing together?", "cta_sub": "We're ready to listen to your challenges and turn your vision into a simple, efficient digital reality.", "cta_btn": "Talk Now", "know_more": "Learn more"
      },
      "footer": { "desc": "Partners in your digital journey. We create technology with soul to connect your brand to people.", "s_title": "Our Focus", "s1": "Web Systems", "s2": "Mobile Apps", "s3": "Corporate Sites", "s4": "E-commerce", "c_title": "The Company", "c1": "About Us", "c2": "Success Stories", "c3": "Careers", "c4": "Blog", "contact": "Contact", "rights": "NRE Solutions. Technology focused on people." },
      "contact": { "title": "Hi! Let's talk?", "sub": "We love hearing new ideas. Tell us how we can add value to your business.", "info_title": "Direct Channels", "office": "Our Space", "phones": "Talk by Phone", "email": "Send an Email", "form_name": "What should we call you?", "form_name_ph": "Your Name", "form_mail": "Your best Email", "form_mail_ph": "you@email.com", "form_type": "What's your interest?", "form_option1": "Select...", "form_option2": "Custom System", "form_option3": "Mobile App", "form_option4": "Professional Website", "form_option5": "Another challenge", "form_detail": "Tell us a bit more", "form_detail_ph": "What's your main goal? How can we collaborate?", "form_btn": "Send Message", "success": "Message received! One of our experts will reach out to you soon." },
      "sobre": { "title": "Who We Are", "mission": "Our Purpose", "mission_desc": "Simplifying technology so it becomes an ally for human and business growth, making innovation accessible and relevant.", "diff": "The NRE Way", "diff_desc": "We value relationships. Every line of code we write aims to improve someone's life. We are strategic partners who cheer for your success.", "tech": "Our Tools" },
      "portfolio": { "title": "Real Projects", "sub": "Stories of how we turn challenges into value-generating solutions." },
      "servicos": { "title": "Our Solutions", "sub": "Technology applied with intelligence and empathy for your business.", "db_title": "Smart Data", "db_desc": "Organizing your info so you can make better decisions.", "cloud_title": "Cloud & Security", "cloud_desc": "Your peace of mind is our priority. Systems always safe and available.", "sec_title": "Data Care", "sec_desc": "Total protection and compliance for the safety of your business and clients." }
    }
  },
  ES: {
    translation: {
      "nav": { "inicio": "Inicio", "servicos": "Servicios", "portfolio": "Portafolio", "sobre": "Nosotros", "contato": "Contáctanos" },
      "home": { "badge": "Innovación Continua", "title1": "Desarrollamos", "title2": "Sistemas del Futuro", "subtitle": "Transformamos ideas de alto valor en soluciones digitales.", "btn_portfolio": "Ver Portafolio", "btn_contact": "Agendar Reunión", "services_title": "Nuestras", "services_title_hl": "Especialidades", "services_sub": "Dominamos la ingeniería de software.", "srv1_title": "Sistemas Complejos", "srv1_desc": "Arquitecturas robustas y automatización.", "srv2_title": "Apps Móviles", "srv2_desc": "Experiencias nativas superiores.", "srv3_title": "Sitios de Alto Impacto", "srv3_desc": "Interfaces inmersivas que convierten.", "cta_title": "¿Listo para escalar?", "cta_sub": "Desarrollamos el sistema perfecto.", "cta_btn": "Iniciar Proyecto", "know_more": "Saber más" },
      "footer": { "desc": "Sistemas, apps y frentes digitales para el mañana.", "s_title": "Soluciones", "s1": "Sistemas", "s2": "Apps", "s3": "Sitios", "s4": "E-commerce", "c_title": "Empresa", "c1": "Nosotros", "c2": "Casos de Éxito", "c3": "Carreras", "c4": "Blog", "contact": "Contacto", "rights": "NRE Solutions. Todos los derechos reservados." },
      "contact": { "title": "¿Comenzamos?", "sub": "Cuéntanos sobre tu proyecto.", "info_title": "Info Directa", "office": "Oficina", "phones": "Teléfonos", "email": "Correo", "form_name": "Nombre", "form_name_ph": "Tu nombre", "form_mail": "Correo", "form_mail_ph": "tu@correo.com", "form_type": "Tipo", "form_option1": "Seleccione...", "form_option2": "Sistema", "form_option3": "App", "form_option4": "Web", "form_option5": "Outro", "form_detail": "Detalles", "form_detail_ph": "Cuéntanos sobre el proyecto...", "form_btn": "Enviar", "success": "¡Mensaje enviado con éxito!" },
      "sobre": { "title": "Nuestra Esencia", "mission": "Misión", "mission_desc": "Democratizar tecnología de punta.", "diff": "La Diferencia", "diff_desc": "Somos arquitectos que garantizan excelencia global.", "tech": "Tecnologías que Dominamos" },
      "portfolio": { "title": "Casos de Éxito", "sub": "Mira lo que hemos logrado." },
      "servicos": { "title": "Nuestros Servicios", "sub": "Tecnología para negocios.", "db_title": "Datos", "db_desc": "Bases de datos escalables.", "cloud_title": "Cloud", "cloud_desc": "Servidores flexibles.", "sec_title": "Seguridad", "sec_desc": "Protección y auditoría." }
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
