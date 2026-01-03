// ============================================
// TRANSLATIONS.JS
// Sistema de traducciones ES/EN del portfolio
// ============================================

const translations = {
  es: {
    // ==================== NAVBAR ====================
    'nav-inicio': 'Inicio',
    'nav-sobre': 'Sobre mí',
    'nav-habilidades': 'Habilidades',
    'nav-experiencia': 'Experiencia',
    'nav-educacion': 'Educación',
    'nav-idiomas': 'Idiomas',
    'nav-contacto': 'Contacto',
    
    // ==================== HERO/INICIO ====================
    'hero-greeting': 'Hola, soy Adrián Romero',
    'hero-title': 'Full Stack',
    'hero-subtitle': 'Developer',
    'hero-description': 'Desarrollo aplicaciones web completas, desde interfaces intuitivas hasta arquitecturas backend robustas.',
    'hero-btn': 'Descargar CV',
    
    // ==================== SOBRE MÍ ====================
    'sobre-titulo': 'Sobre mí',
    'sobre-p1': 'Soy <strong>Desarrollador Full Stack</strong> con experiencia en la creación de aplicaciones web escalables, seguras y optimizadas para diferentes plataformas (Windows, iOS, Android, Chromebook).',
    'sobre-p2': 'Domino tanto el frontend (<strong>HTML, CSS, Bootstrap, JavaScript, jQuery, AJAX, React, Angular</strong>) como el backend (<strong>PHP, Node.js, SQL, MongoDB</strong>), lo que me permite desarrollar aplicaciones web completas.',
    'sobre-p3': 'En mi trabajo combino tecnología y usabilidad, creando interfaces intuitivas y funcionales que mejoran la experiencia del usuario sin dejar de ser atractivas a través del diseño.',
    'sobre-p4': 'También tengo experiencia en el desarrollo de aplicaciones a medida para clientes que utilizan una metodología ágil, asegurando escalabilidad, seguridad y disponibilidad.',
    'sobre-p5': 'Actualmente formo parte de <strong>IMTLazarus</strong>, un ecosistema educativo en la nube que integra decenas de tecnologías para garantizar un entorno digital seguro, inclusivo y productivo. En mi rol, desarrollo una aplicación multiplataforma de gestión de dispositivos móviles utilizada globalmente en centros educativos, enfocada en la trazabilidad, la privacidad y el bienestar digital.',
    'sobre-cta': 'Abierto a proyectos freelance y colaboraciones que representen un reto técnico y me permitan seguir aportando valor con mi experiencia.',    'stat-dev': 'Año como Dev',
    'stat-usuarios': 'Usuarios',
    'stat-plataformas': 'Plataformas',
    'stat-tecnologias': 'Tecnologías',
    
    // ==================== HABILIDADES ====================
    'habilidades-titulo': 'Habilidades',
    'hab-frontend': 'Frontend',
    'hab-backend': 'Backend',
    'hab-herramientas': 'Herramientas',
    'hab-herramientas-desc': 'Selecciona una categoría para ver las herramientas que utilizo',
    'hab-desarrollo': 'Desarrollo',
    'hab-diseno': 'Diseño y UI',
    'hab-colaboracion': 'Colaboración & DevOps',
    'hab-entornos': 'Entornos específicos',
    'hab-entornos-desc': 'Desarrollo de extensiones con MV3 (Manifest V3 de Google Chrome)', 
    'hab-volver': 'Volver',
    
    // ==================== EXPERIENCIA ====================
    'exp-titulo': 'Experiencia Laboral',
    'exp-actual': 'Actual',
    'exp-imt-puesto': 'Desarrollador Web (Full Stack)',
    'exp-imt-1': 'Desarrollo de aplicación multiplataforma (Windows, iOS, Android, Chromebook) con PHP, Bootstrap, jQuery y JavaScript',
    'exp-imt-2': 'Diseño e implementación de interfaces intuitivas para miles de usuarios globalmente',
    'exp-imt-3': 'Optimización de rendimiento en servidores distribuidos',
    'exp-imt-4': 'Colaboración con equipos técnicos internacionales',
    'exp-freelance-puesto': 'Full Stack Developer',
    'exp-freelance': 'Freelance',
    'exp-freelance-1': 'Proyectos freelance de desarrollo web end-to-end',
    'exp-freelance-2': 'Desarrollo tanto frontend como backend',
    'exp-freelance-3': 'Integración de tecnologías modernas con enfoque en usabilidad y escalabilidad',
    'exp-coca-puesto': 'Supervisor de Línea de Producción',
    'exp-coca-gestion': 'Gestión y Supervisión',
    'exp-coca-1': 'Supervisión de línea y personal',
    'exp-coca-2': 'Planificación de producción',
    'exp-coca-3': 'Cumplimiento de objetivos',
    'exp-coca-4': 'Mejora continua de procesos',
    'exp-coca-tecnico': 'Conocimientos Técnicos',
    'exp-coca-5': 'Maquinaria: KHS, Robopac, Krones',
    'exp-coca-6': 'Robots: Fanuc, LabelMarket',
    'exp-coca-7': 'Sistemas de automatización y transporte',
    
    // ==================== EDUCACIÓN ====================
    'edu-titulo': 'Educación y Certificaciones',
    'edu-formacion': 'Formación Académica',
    'edu-certificaciones': 'Certificaciones',
    'edu-fullstack': 'Full Stack Developer',
    'edu-tecnico-superior': 'Técnico Superior en Programación de la Producción en Fabricación Mecánica',
    'edu-tecnico': 'Técnico en Aparatos Electrónicos de Consumo',
    'edu-efset': 'EF SET English Certificate',
    'edu-efset-nivel': 'Upper Intermediate (B2 CEFR)',
    'edu-efset-puntuacion': 'Puntuación: 52/100',
    'edu-trinity': 'Trinity College London Grade 5',
    'edu-trinity-tipo': 'Graded Examination in Spoken English',
    'edu-trinity-cert': 'Certificate in ESOL International (Speaking and Listening)',
    
    // ==================== IDIOMAS ====================
    'idiomas-titulo': 'Idiomas y Ubicación',
    'idiomas-subtitulo': 'Idiomas',
    'idioma-espanol': 'Español:',
    'idioma-espanol-nivel': 'Nativo',
    'idioma-ingles': 'Inglés:',
    'idioma-ingles-nivel': 'B2 Upper Intermediate',
    'ubicacion-subtitulo': 'Ubicación',
    'ubicacion-ciudad': 'Sevilla / Jerez de la Frontera, España',
    'ubicacion-modalidad-label': 'Modalidad:',
    'ubicacion-remoto': '100% Remoto',
    
    // ==================== CONTACTO ====================
    'contacto-titulo': 'Contacto',
    'contacto-nombre': 'Nombre',
    'contacto-correo': 'Correo',
    'contacto-mensaje': 'Mensaje',
    'contacto-enviar': 'Enviar',
    'contacto-redes': 'También puedes encontrarme en:',

    // =================== SweetAlert ====================
    'contacto-exito-titulo': '¡Mensaje enviado!',
    'contacto-exito-texto': 'Gracias por contactar, te responderé pronto.',
    'contacto-error-titulo': 'Error',
    'contacto-error-texto': 'No se pudo enviar el mensaje. Intenta de nuevo más tarde.',
  },
  
  en: {
    // ==================== NAVBAR ====================
    'nav-inicio': 'Home',
    'nav-sobre': 'About me',
    'nav-habilidades': 'Skills',
    'nav-experiencia': 'Experience',
    'nav-educacion': 'Education',
    'nav-idiomas': 'Languages',
    'nav-contacto': 'Contact',
    
    // ==================== HERO/INICIO ====================
    'hero-greeting': 'Hi, I\'m Adrián Romero',
    'hero-title': 'Full Stack',
    'hero-subtitle': 'Developer',
    'hero-description': 'I develop complete web applications, from intuitive interfaces to robust backend architectures.',
    'hero-btn': 'Download CV',
    
    // ==================== SOBRE MÍ ====================
    'sobre-titulo': 'About me',
    'sobre-p1': 'I am a <strong>Full Stack Developer</strong> with experience creating scalable, secure web applications optimized for different platforms (Windows, iOS, Android, Chromebook).',
    'sobre-p2': 'I master both frontend (<strong>HTML, CSS, Bootstrap, JavaScript, jQuery, AJAX, React, Angular</strong>) and backend (<strong>PHP, Node.js, SQL, MongoDB</strong>), allowing me to develop complete web applications.',
    'sobre-p3': 'In my work, I combine technology and usability, creating intuitive and functional interfaces that improve user experience while being visually appealing through design.',
    'sobre-p4': 'I also have experience developing custom applications for clients using agile methodology, ensuring scalability, security, and availability.',
    'sobre-p5': 'I am currently part of <strong>IMTLazarus</strong>, a cloud-based educational ecosystem that integrates dozens of technologies to guarantee a secure, inclusive, and productive digital environment. In my role, I develop a cross-platform mobile device management application used globally in educational centers, focused on traceability, privacy, and digital well-being.',
    'sobre-cta': 'Open to freelance projects and collaborations that represent a technical challenge and allow me to continue contributing value with my experience.',    'stat-dev': 'Year as Dev',
    'stat-usuarios': 'Users',
    'stat-plataformas': 'Platforms',
    'stat-tecnologias': 'Technologies',
    
    // ==================== HABILIDADES ====================
    'habilidades-titulo': 'Skills',
    'hab-frontend': 'Frontend',
    'hab-backend': 'Backend',
    'hab-herramientas': 'Tools',
    'hab-herramientas-desc': 'Select a category to see the tools I use',
    'hab-desarrollo': 'Development',
    'hab-diseno': 'Design & UI',
    'hab-colaboracion': 'Collaboration & DevOps',
    'hab-entornos': 'Specific Environments',
    'hab-entornos-desc': 'Extension development with MV3 (Google Chrome Manifest V3)',
    'hab-volver': 'Back',
    
    // ==================== EXPERIENCIA ====================
    'exp-titulo': 'Work Experience',
    'exp-actual': 'Current',
    'exp-imt-puesto': 'Web Developer (Full Stack)',
    'exp-imt-1': 'Development of cross-platform application (Windows, iOS, Android, Chromebook) with PHP, Bootstrap, jQuery and JavaScript',
    'exp-imt-2': 'Design and implementation of intuitive interfaces for thousands of users globally',
    'exp-imt-3': 'Performance optimization on distributed servers',
    'exp-imt-4': 'Collaboration with international technical teams',
    'exp-freelance-puesto': 'Full Stack Developer',
    'exp-freelance': 'Freelance',
    'exp-freelance-1': 'End-to-end web development freelance projects',
    'exp-freelance-2': 'Both frontend and backend development',
    'exp-freelance-3': 'Integration of modern technologies with focus on usability and scalability',
    'exp-coca-puesto': 'Production Line Supervisor',
    'exp-coca-gestion': 'Management & Supervision',
    'exp-coca-1': 'Line and personnel supervision',
    'exp-coca-2': 'Production planning',
    'exp-coca-3': 'Goal achievement',
    'exp-coca-4': 'Continuous process improvement',
    'exp-coca-tecnico': 'Technical Knowledge',
    'exp-coca-5': 'Machinery: KHS, Robopac, Krones',
    'exp-coca-6': 'Robots: Fanuc, LabelMarket',
    'exp-coca-7': 'Automation and transport systems',
    
    // ==================== EDUCACIÓN ====================
    'edu-titulo': 'Education and Certifications',
    'edu-formacion': 'Academic Training',
    'edu-certificaciones': 'Certifications',
    'edu-fullstack': 'Full Stack Developer',
    'edu-tecnico-superior': 'Higher Technician in Production Programming in Mechanical Manufacturing',
    'edu-tecnico': 'Technician in Consumer Electronic Devices',
    'edu-efset': 'EF SET English Certificate',
    'edu-efset-nivel': 'Upper Intermediate (B2 CEFR)',
    'edu-efset-puntuacion': 'Score: 52/100',
    'edu-trinity': 'Trinity College London Grade 5',
    'edu-trinity-tipo': 'Graded Examination in Spoken English',
    'edu-trinity-cert': 'Certificate in ESOL International (Speaking and Listening)',
    
    // ==================== IDIOMAS ====================
    'idiomas-titulo': 'Languages and Location',
    'idiomas-subtitulo': 'Languages',
    'idioma-espanol': 'Spanish:',
    'idioma-espanol-nivel': 'Native',
    'idioma-ingles': 'English:',
    'idioma-ingles-nivel': 'B2 Upper Intermediate',
    'ubicacion-subtitulo': 'Location',
    'ubicacion-ciudad': 'Seville / Jerez de la Frontera, Spain',
    'ubicacion-modalidad-label': 'Work Mode:',
    'ubicacion-remoto': '100% Remote',
    
    // ==================== CONTACTO ====================
    'contacto-titulo': 'Contact',
    'contacto-nombre': 'Name',
    'contacto-correo': 'Email',
    'contacto-mensaje': 'Message',
    'contacto-enviar': 'Send',
    'contacto-redes': 'You can also find me on:',

    // =================== SweetAlert ====================
    'contacto-exito-titulo': 'Message sent!',
    'contacto-exito-texto': 'Thanks for contacting me, I will reply soon.',
    'contacto-error-titulo': 'Error',
    'contacto-error-texto': 'Could not send the message. Please try again later.',
  }
};