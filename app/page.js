'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Building2, ChevronDown, Mail, Phone, MapPin, ArrowRight, Menu, X, Globe } from 'lucide-react';

const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
};

const AnimatedNumber = ({ value, duration = 2000, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = parseInt(value);
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration, isVisible]);

  return <span>{count}</span>;
};

const translations = {
  es: {
    nav: ['Inicio', 'Nosotros', 'Servicios', 'Proyectos', 'Contacto'],
    tagline: 'El outsourcing de arquitectura para su ingenierÃ­a',
    heroTitle1: 'SU EQUIPO DE ARQUITECTURA',
    heroTitle2: 'INTEGRADO A SU INGENIERÃA',
    heroDesc: 'Nos acoplamos a su equipo de proyecto como una extensiÃ³n de su ingenierÃ­a, adoptando su codificaciÃ³n, manuales y estÃ¡ndares de entrega. Desarrollamos proyectos, expedientes tÃ©cnicos y soluciones constructivas coordinadas con sus disciplinas.',
    heroSubdesc: 'Operamos bajo sus procesos internos, codificaciÃ³n y plazos. El resultado: entregables libres de interferencias, listos para construcciÃ³n y compatibles con el estÃ¡ndar de su mandante.',
    viewProjects: 'Ver Proyectos',
    contactUs: 'ContÃ¡ctenos',
    about: 'Nosotros',
    aboutTitle: 'ConsultorÃ­a TÃ©cnica en Arquitectura para empresas de IngenierÃ­a',
    aboutSubtitle: 'MÃ¡s de 10 aÃ±os de experiencia profesional integrando la arquitectura como disciplina crÃ­tica en proyectos mineros e industriales.',
    aboutText1: 'Somos una oficina especializada en el desarrollo de infraestructura para la gran minerÃ­a e industria. Nos diferenciamos por abordar la arquitectura no solo como un fin estÃ©tico, sino como un componente clave operacional que debe responder a la exigencias de la  producciÃ³n, seguridad y mantenimiento de sus procesos.',
    aboutText2: 'Entendemos el lenguaje de la ingenierÃ­a. Nuestro trabajo se integra fluidamente con las especialidades estructurales, elÃ©ctricas, mecÃ¡nicas y PMO, garantizando entregables libres de interferencias, compatibles con la codificaciÃ³n del mandante y optimizados para el ciclo de vida de los activos.',
    pillar1Title: 'Enfoque en Procesos',
    pillar1Desc: 'DiseÃ±amos desde la lÃ³gica del proceso productivo. Cada metro cuadrado se planifica para facilitar la operaciÃ³n, el flujo de personal y la continuidad del servicio.',
    pillar2Title: 'Rigor Normativo',
    pillar2Desc: 'Dominio de normativas y estÃ¡ndares de seguridad para la gran minerÃ­a e industria. Entregamos expedientes completos para obtener las aprobaciones necesarias para la ejecuciÃ³n.',
    pillar3Title: 'CoordinaciÃ³n Multidisciplinaria',
    pillar3Desc: 'Trabajamos en Revit/BIM y entregamos modelos coordinados en el formato y codificaciÃ³n que su proyecto requiera. Nos integramos con las disciplinas estructural, mecÃ¡nica, elÃ©ctrica e instrumentaciÃ³n sin generar interferencias ni reprocesos.',
    pillar4Title: 'Modelo Flexible',
    pillar4Desc: 'Acceda a un equipo especializado de arquitectura solo cuando su proyecto lo requiera. Sin overhead permanentes y con capacidad disponible para responder a sus plazos y acoplarnos a sus procesos internos de manuales y codificaciones.',
    highlighted: 'Proyectos',
    highlightedTitle: 'Proyectos Destacados',
    highlightedDesc: 'Algunos de nuestros proyectos mÃ¡s representativos en la gran minerÃ­a.',
    viewDetails: 'Ver Detalles',
    portfolio: 'Portafolio',
    featuredProjects: 'Trayectoria de Proyectos',
    projectsDesc: 'MÃ¡s de 20 proyectos ejecutados para la gran minerÃ­a e industria desde 2017.',
    engineeringDev: 'Desarrollo de IngenierÃ­a Propio (via CHKING)',
    counterpartReview: 'Contraparte / RevisiÃ³n (via CHKING)',
    colYear: 'AÃ±o',
    colProject: 'Proyecto',
    colClient: 'Cliente',
    colCompany: 'Empresa LÃ­der',
    services: 'Servicios',
    servicesTitle: 'Soluciones Especializadas',
    servicesDesc: 'Ofrecemos servicios arquitectÃ³nicos integrales diseÃ±ados especÃ­ficamente para proyectos de ingenierÃ­a, instalaciones industriales y operaciones mineras a gran escala.',
    servicesList: [
      'Master Plan de Arquitectura para estudio de Faenas e Instalaciones',
      'EdificaciÃ³n y remodelaciÃ³n de espacios claves como Oficinas y Casas de Cambio',
      'Salas de Control, de Servidores, ElÃ©ctricas y TÃ©cnicas.',
      'EdificaciÃ³n tÃ©cnica para RESPEL, Almacenamiento y Truck Shops',
      'RevisiÃ³n de contraparte de planos y documentos.',
      'SupervisiÃ³n de Terreno de ejecuciÃ³n y avances'
    ],
    yearsExp: 'AÃ±os de Experiencia',
    contact: 'Contacto',
    contactTitle: 'Construyamos Juntos',
    contactDesc: 'Â¿Listo para iniciar su prÃ³ximo proyecto de infraestructura industrial o minera? ContÃ¡ctenos para una consulta.',
    formName: 'Nombre',
    formEmail: 'Correo',
    formProject: 'Tipo de Proyecto',
    formMessage: 'Mensaje',
    formPlaceholderName: 'Su nombre completo',
    formPlaceholderEmail: 'correo@ejemplo.com',
    formPlaceholderMessage: 'CuÃ©ntenos sobre su proyecto...',
    formProjectTypes: [
      'InstalaciÃ³n Industrial',
      'Infraestructura Minera',
      'Salas de Control',
      'ExpansiÃ³n de Planta',
      'Otro'
    ],
    submitMessage: 'Enviar Mensaje',
        intranet: 'Acceso Equipo',
    allRights: 'Todos los derechos reservados',
    downloadPortfolio: 'Descargar Portafolio',
    description: 'Especialistas en soluciones de ingenierÃ­a'
  },
  en: {
    nav: ['Home', 'About', 'Services', 'Projects', 'Contact'],
    tagline: 'Architecture outsourcing for your engineering',
    heroTitle1: 'YOUR ARCHITECTURE TEAM',
    heroTitle2: 'INTEGRATED INTO YOUR ENGINEERING PROCESS',
    heroDesc: 'We integrate into your project team as an extension of your engineering, adopting your coding, manuals, and delivery standards. We develop projects, technical documents, and construction solutions coordinated with your disciplines.',
    heroSubdesc: 'We operate under your internal processes, coding, and deadlines. The result: interference-free deliverables, construction-ready and compatible with your client\'s standards.',
    viewProjects: 'View Projects',
    contactUs: 'Contact Us',
    about: 'About',
    aboutTitle: 'Technical Architectural Consulting for Engineering Companies',
    aboutSubtitle: 'Over 10 years of professional experience integrating architecture as a critical discipline in mining and industrial projects.',
    aboutText1: 'We are an office specialized in infrastructure development for large-scale mining and industry. We differentiate ourselves by approaching architecture not only as an aesthetic end, but as a key operational component that must respond to the demands of production, safety, and maintenance of your processes.',
    aboutText2: 'We understand the language of engineering. Our work integrates fluidly with structural, electrical, mechanical, and PMO specialties, ensuring interference-free deliverables, compatible with the client\'s coding standards and optimized for the lifecycle of assets.',
    pillar1Title: 'Process Focus',
    pillar1Desc: 'We design from the logic of the production process. Every square meter is planned to facilitate operation, personnel flow, and service continuity.',
    pillar2Title: 'Regulatory Rigor',
    pillar2Desc: 'Mastery of regulations and safety standards for large-scale mining and industry. We deliver complete documentation to obtain the necessary approvals for execution.',
    pillar3Title: 'Multidisciplinary Coordination',
    pillar3Desc: 'We work in Revit/BIM and deliver coordinated models in the format and coding your project requires. We integrate with structural, mechanical, electrical, and instrumentation disciplines without generating interferences or rework.',
    pillar4Title: 'Flexible Model',
    pillar4Desc: 'Access a specialized architecture team only when your project requires it. No permanent overhead, with available capacity to meet your deadlines and integrate into your internal manuals and coding processes.',
    highlighted: 'Projects',
    highlightedTitle: 'Featured Projects',
    highlightedDesc: 'Some of our most representative projects in large-scale mining.',
    viewDetails: 'View Details',
    portfolio: 'Portfolio',
    featuredProjects: 'Project Track Record',
    projectsDesc: 'Over 20 projects executed for large-scale mining and industry since 2017.',
    engineeringDev: 'In-House Engineering Development (via CHKING)',
    counterpartReview: 'Counterpart / Review (via CHKING)',
    colYear: 'Year',
    colProject: 'Project',
    colClient: 'Client',
    colCompany: 'Lead Company',
    services: 'Services',
    servicesTitle: 'Specialized Solutions',
    servicesDesc: 'We offer comprehensive architectural services specifically designed for engineering projects, industrial facilities, and large-scale mining operations.',
    servicesList: [
      'Master Plan Architecture for Site and Facility Study',
      'Construction and remodeling of key spaces such as Offices and Change Houses',
      'Control, Server, Electrical and Technical Rooms',
      'Technical construction for HAZMAT, Storage and Truck Shops',
      'Counterpart review of plans and documents',
      'On-site Execution and Progress Supervision'
    ],
    yearsExp: 'Years of Experience',
    contact: 'Contact',
    contactTitle: 'Let\'s Build Together',
    contactDesc: 'Ready to start your next industrial or mining infrastructure project? Contact us for a consultation.',
    formName: 'Name',
    formEmail: 'Email',
    formProject: 'Project Type',
    formMessage: 'Message',
    formPlaceholderName: 'Your full name',
    formPlaceholderEmail: 'email@example.com',
    formPlaceholderMessage: 'Tell us about your project...',
    formProjectTypes: [
      'Industrial Facility',
      'Mining Infrastructure',
      'Control Rooms',
      'Plant Expansion',
      'Other'
    ],
    submitMessage: 'Send Message',
        intranet: 'Team Access',
    allRights: 'All rights reserved',
    downloadPortfolio: 'Download Portfolio',
    description: 'Engineering solutions specialists'
  },
  pt: {
    nav: ['InÃ­cio', 'Sobre', 'ServiÃ§os', 'Projetos', 'Contato'],
    tagline: 'Outsourcing de arquitetura para sua engenharia',
    heroTitle1: 'SUA EQUIPE DE ARQUITETURA',
    heroTitle2: 'INTEGRADA Ã SUA ENGENHARIA',
    heroDesc: 'Nos acoplamos Ã  sua equipe de projeto como uma extensÃ£o da sua engenharia, adotando sua codificaÃ§Ã£o, manuais e padrÃµes de entrega. Desenvolvemos projetos, expedientes tÃ©cnicos e soluÃ§Ãµes construtivas coordenadas com suas disciplinas.',
    heroSubdesc: 'Operamos sob seus processos internos, codificaÃ§Ã£o e prazos. O resultado: entregÃ¡veis livres de interferÃªncias, prontos para construÃ§Ã£o e compatÃ­veis com o padrÃ£o do seu mandante.',
    viewProjects: 'Ver Projetos',
    contactUs: 'Contate-nos',
    about: 'Sobre',
    aboutTitle: 'Consultoria TÃ©cnica em Arquitetura para empresas de Engenharia',
    aboutSubtitle: 'Mais de 10 anos de experiÃªncia profissional integrando a arquitetura como disciplina crÃ­tica em projetos de mineraÃ§Ã£o e industriais.',
    aboutText1: 'Somos um escritÃ³rio especializado no desenvolvimento de infraestrutura para a grande mineraÃ§Ã£o e indÃºstria. Nos diferenciamos ao abordar a arquitetura nÃ£o apenas como um fim estÃ©tico, mas como um componente chave operacional que deve responder Ã s exigÃªncias da produÃ§Ã£o, seguranÃ§a e manutenÃ§Ã£o de seus processos.',
    aboutText2: 'Entendemos a linguagem da engenharia. Nosso trabalho se integra fluidamente com as especialidades estruturais, elÃ©tricas, mecÃ¢nicas e PMO, garantindo entregÃ¡veis livres de interferÃªncias, compatÃ­veis com a codificaÃ§Ã£o do cliente e otimizados para o ciclo de vida dos ativos.',
    pillar1Title: 'Foco em Processos',
    pillar1Desc: 'Projetamos a partir da lÃ³gica do processo produtivo. Cada metro quadrado Ã© planejado para facilitar a operaÃ§Ã£o, o fluxo de pessoal e a continuidade do serviÃ§o.',
    pillar2Title: 'Rigor Normativo',
    pillar2Desc: 'DomÃ­nio de normativas e padrÃµes de seguranÃ§a para a grande mineraÃ§Ã£o e indÃºstria. Entregamos expedientes completos para obter as aprovaÃ§Ãµes necessÃ¡rias para a execuÃ§Ã£o.',
    pillar3Title: 'CoordenaÃ§Ã£o Multidisciplinar',
    pillar3Desc: 'Trabalhamos em Revit/BIM e entregamos modelos coordenados no formato e codificaÃ§Ã£o que seu projeto requeira. Integramo-nos com as disciplinas estrutural, mecÃ¢nica, elÃ©trica e instrumentaÃ§Ã£o sem gerar interferÃªncias nem retrabalhos.',
    pillar4Title: 'Modelo FlexÃ­vel',
    pillar4Desc: 'Acesse uma equipe especializada de arquitetura apenas quando seu projeto necessitar. Sem overhead permanente e com capacidade disponÃ­vel para atender seus prazos e nos acoplarmos aos seus processos internos de manuais e codificaÃ§Ãµes.',
    highlighted: 'Projetos',
    highlightedTitle: 'Projetos Destacados',
    highlightedDesc: 'Alguns dos nossos projetos mais representativos na grande mineraÃ§Ã£o.',
    viewDetails: 'Ver Detalhes',
    portfolio: 'PortfÃ³lio',
    featuredProjects: 'TrajetÃ³ria de Projetos',
    projectsDesc: 'Mais de 20 projetos executados para a grande mineraÃ§Ã£o e indÃºstria desde 2017.',
    engineeringDev: 'Desenvolvimento de Engenharia PrÃ³prio (via CHKING)',
    counterpartReview: 'Contraparte / RevisÃ£o (via CHKING)',
    colYear: 'Ano',
    colProject: 'Projeto',
    colClient: 'Cliente',
    colCompany: 'Empresa LÃ­der',
    services: 'ServiÃ§os',
    servicesTitle: 'SoluÃ§Ãµes Especializadas',
    servicesDesc: 'Oferecemos serviÃ§os arquitetÃ´nicos integrais projetados especificamente para projetos de engenharia, instalaÃ§Ãµes industriais e operaÃ§Ãµes de mineraÃ§Ã£o em grande escala.',
    servicesList: [
      'Master Plan de Arquitetura para estudo de InstalaÃ§Ãµes e Canteiros',
      'EdificaÃ§Ã£o e remodelaÃ§Ã£o de espaÃ§os chave como EscritÃ³rios e VestiÃ¡rios',
      'Salas de Controle, de Servidores, ElÃ©tricas e TÃ©cnicas',
      'EdificaÃ§Ã£o tÃ©cnica para RESPEL, Armazenamento e Truck Shops',
      'RevisÃ£o de contraparte de plantas e documentos',
      'SupervisÃ£o de Campo de execuÃ§Ã£o e avanÃ§os'
    ],
    yearsExp: 'Anos de ExperiÃªncia',
    contact: 'Contato',
    contactTitle: 'Vamos Construir Juntos',
    contactDesc: 'Pronto para iniciar seu prÃ³ximo projeto de infraestrutura industrial ou de mineraÃ§Ã£o? Entre em contato conosco para uma consulta.',
    formName: 'Nome',
    formEmail: 'E-mail',
    formProject: 'Tipo de Projeto',
    formMessage: 'Mensagem',
    formPlaceholderName: 'Seu nome completo',
    formPlaceholderEmail: 'email@exemplo.com',
    formPlaceholderMessage: 'Conte-nos sobre seu projeto...',
    formProjectTypes: [
      'InstalaÃ§Ã£o Industrial',
      'Infraestrutura de MineraÃ§Ã£o',
      'Salas de Controle',
      'ExpansÃ£o de Planta',
      'Outro'
    ],
    submitMessage: 'Enviar Mensagem',
        intranet: 'Acesso da Equipe',
    allRights: 'Todos os direitos reservados',
    downloadPortfolio: 'Baixar PortfÃ³lio',
    description: 'Especialistas em soluÃ§Ãµes de engenharia'
  },
  zh: {
    nav: ['é¦é¡µ', 'å³äº', 'æå¡', 'é¡¹ç®', 'èç³»'],
    tagline: 'ä¸ºæ¨çå·¥ç¨æä¾å»ºç­å¤åæå¡',
    heroTitle1: 'æ¨çå»ºç­å¢é',
    heroTitle2: 'èå¥æ¨çå·¥ç¨',
    heroDesc: 'æä»¬ä½ä¸ºå·¥ç¨çå»¶ä¼¸èå¥æ¨çé¡¹ç®å¢éï¼éç¨æ¨çç¼ç ãæååäº¤ä»æ åãæä»¬å¼åé¡¹ç®ãææ¯æä»¶åä¸æ¨åå­¦ç§åè°çæ½å·¥è§£å³æ¹æ¡ã',
    heroSubdesc: 'æä»¬æç§æ¨çåé¨æµç¨ãç¼ç åæ¶é´è¡¨è¿ä½ãç»æï¼æ å¹²æ°çäº¤ä»ç©ï¼å¯ç«å³æ½å·¥ï¼ç¬¦åæ¨ä¸ä¸»çæ åã',
    viewProjects: 'æ¥çé¡¹ç®',
    contactUs: 'èç³»æä»¬',
    about: 'å³äºæä»¬',
    aboutTitle: 'å·¥ç¨å¬å¸ææ¯å»ºç­å¨è¯¢',
    aboutSubtitle: '10å¤å¹´çä¸ä¸ç»éªï¼å°å»ºç­ä½ä¸ºéç¿åå·¥ä¸é¡¹ç®ä¸­çå³é®å­¦ç§è¿è¡æ´åã',
    aboutText1: 'æä»¬æ¯ä¸å®¶ä¸é¨ä»äºå¤§åéç¿åå·¥ä¸åºç¡è®¾æ½å¼åçåå¬å®¤ãæä»¬çä¸åä¹å¤å¨äºï¼æä»¬ä¸ä»å°å»ºç­è§ä¸ºå®¡ç¾ç®çï¼èä¸ä½ä¸ºå¿é¡»ååºæ¨æµç¨ççäº§ãå®å¨åç»´æ¤è¦æ±çå³é®è¿è¥ç»ä»¶ã',
    aboutText2: 'æä»¬çè§£å·¥ç¨è¯­è¨ãæä»¬çå·¥ä½ä¸ç»æãçµæ°ãæºæ¢°åPMOä¸ä¸æµçéæï¼ç¡®ä¿äº¤ä»æææ å¹²æ°ãä¸å®¢æ·ç¼ç æ åå¼å®¹å¹¶éå¯¹èµäº§çå½å¨æè¿è¡ä¼åã',
    pillar1Title: 'æµç¨éç¹',
    pillar1Desc: 'æä»¬ä»çäº§æµç¨çé»è¾åºåè¿è¡è®¾è®¡ãæ¯å¹³æ¹ç±³é½ç»è¿è§åï¼ä»¥ä¿è¿è¿è¥ãäººåæµå¨åæå¡è¿ç»­æ§ã',
    pillar2Title: 'è§èä¸¥è°¨',
    pillar2Desc: 'ç²¾éå¤§åéç¿åå·¥ä¸çæ³è§åå®å¨æ åãæä»¬äº¤ä»å®æ´çæä»¶ä»¥è·å¾æ§è¡æéçæ¹åã',
    pillar3Title: 'å¤å­¦ç§åè°',
    pillar3Desc: 'æä»¬ä½¿ç¨Revit/BIMå·¥ä½ï¼æç§æ¨é¡¹ç®è¦æ±çæ ¼å¼åç¼ç äº¤ä»åè°æ¨¡åãæä»¬ä¸ç»æãæºæ¢°ãçµæ°åä»ªè¡¨å­¦ç§éæï¼ä¸äº§çå¹²æ°æè¿å·¥ã',
    pillar4Title: 'çµæ´»æ¨¡å¼',
    pillar4Desc: 'ä»å¨æ¨çé¡¹ç®éè¦æ¶è®¿é®ä¸ä¸å»ºç­å¢éãæ æ°¸ä¹å¼éï¼éæ¶å¯ç¨çè½åæ¥æ»¡è¶³æ¨çæªæ­¢æ¥æï¼å¹¶èå¥æ¨çåé¨æååç¼ç æµç¨ã',
    highlighted: 'é¡¹ç®',
    highlightedTitle: 'ç²¾éé¡¹ç®',
    highlightedDesc: 'æä»¬å¨å¤§åéç¿é¢åæå·ä»£è¡¨æ§çé¨åé¡¹ç®ã',
    viewDetails: 'æ¥çè¯¦æ',
    portfolio: 'é¡¹ç®ç»å',
    featuredProjects: 'é¡¹ç®å±¥å',
    projectsDesc: 'èª2017å¹´ä»¥æ¥ä¸ºå¤§åéç¿åå·¥ä¸æ§è¡äº20å¤ä¸ªé¡¹ç®ã',
    engineeringDev: 'èªæå·¥ç¨å¼å (via CHKING)',
    counterpartReview: 'å¯¹æ¹/å®¡æ¥ (via CHKING)',
    colYear: 'å¹´ä»½',
    colProject: 'é¡¹ç®',
    colClient: 'å®¢æ·',
    colCompany: 'é¢å¤´å¬å¸',
    services: 'æå¡',
    servicesTitle: 'ä¸ä¸è§£å³æ¹æ¡',
    servicesDesc: 'æä»¬æä¾ä¸é¨ä¸ºå·¥ç¨é¡¹ç®ãå·¥ä¸è®¾æ½åå¤§åéç¿ä½ä¸è®¾è®¡çå¨é¢å»ºç­æå¡ã',
    servicesList: [
      'å·¥å°åè®¾æ½ç ç©¶å»ºç­æ»ä½è§å',
      'å³é®ç©ºé´çå»ºè®¾åæ¹é ï¼å¦åå¬å®¤åæ´è¡£å®¤',
      'æ§å¶å®¤ãæå¡å¨å®¤ãçµæ°å®¤åææ¯å®¤',
      'HAZMATãä»å¨åå¡è½¦è½¦é´çææ¯å»ºè®¾',
      'å¾çº¸åæä»¶çå¯¹æ¹å®¡æ¥',
      'ç°åºæ§è¡åè¿åº¦çç£'
    ],
    yearsExp: 'å¹´ç»éª',
    contact: 'èç³»æ¹å¼',
    contactTitle: 'è®©æä»¬ä¸èµ·å»ºè®¾',
    contactDesc: 'åå¤å¼å§æ¨çä¸ä¸ä¸ªå·¥ä¸æéç¿åºç¡è®¾æ½é¡¹ç®äºåï¼è¯·èç³»æä»¬è¿è¡å¨è¯¢ã',
    formName: 'å§å',
    formEmail: 'çµå­é®ä»¶',
    formProject: 'é¡¹ç®ç±»å',
    formMessage: 'ä¿¡æ¯',
    formPlaceholderName: 'æ¨çå¨å',
    formPlaceholderEmail: 'email@example.com',
    formPlaceholderMessage: 'åè¯æä»¬æ¨çé¡¹ç®...',
    formProjectTypes: [
      'å·¥ä¸è®¾æ½',
      'éç¿åºç¡è®¾æ½',
      'æ§å¶å®¤',
      'å·¥åæ©å»º',
      'å¶ä»'
    ],
    submitMessage: 'åéæ¶æ¯',
        intranet: 'å¢éè®¿é®',
    allRights: 'çæææ',
    downloadPortfolio: 'ä¸è½½ä½åé',
    description: 'å·¥ç¨è§£å³æ¹æ¡ä¸å®¶'
  }
};

const engineeringProjects = [
  { year: '2025', project: 'Servicio IngenierÃ­a IPS/SPS IngenierÃ­a IPS/SPS Proyecto Minero Las Yacas', client: 'CMM' },
  { year: '2025', project: 'IngenierÃ­a DELIVERY RemediaciÃ³n Edificio CHO - Puerto Coloso (Delivery)', client: 'BHP-COLOSO' },
  { year: '2024', project: 'IngenierÃ­a SPS/DPS Facilities E-AT Stripping', client: 'BHP-MEL' },
  { year: '2024', project: 'AS Built EN-AT - Facilities AutonomÃ­a MEL', client: 'BHP-MEL' },
  { year: '2023', project: 'Edificio Puerta Sur', client: 'MECASFY' },
  { year: '2022', project: 'Oficinas Corporativas GT Chile', client: 'GT CHILE' },
  { year: '2022', project: 'IngenierÃ­a Interim Facilities AutonomÃ­a MEL', client: 'BHP-MEL' },
  { year: '2022', project: 'IngenierÃ­a DPS EN-AT', client: 'BHP-MEL' },
  { year: '2022', project: 'IngenierÃ­a Sala de Control SMH', client: 'BHP - SPENCE' },
  { year: '2021', project: 'Logistic Solutions', client: 'BHP-MEL' },
  { year: '2019', project: 'Flowsheets 3D de Procesos', client: 'BHP-MEL' },
  { year: '2019', project: 'Idea Campamento Cerro Colorado', client: 'BHP - C. COLORADO' },
  { year: '2019', project: 'AmpliaciÃ³n Oficinas MECASFY', client: 'MECASFY' },
  { year: '2018', project: 'Garita de Accesos Cerro Colorado', client: 'BHP - C. COLORADO' },
  { year: '2018', project: 'Diagramas de Flujo Cal Alianza', client: 'CAL ALIANZA' },
];

const counterpartProjects = [
  { year: '2023', project: 'ILNSC - InnovaciÃ³n LixiviaciÃ³n Nuevas Columnas de SimulaciÃ³n', company: 'HATCH' },
  { year: '2019', project: 'Bodega y Muestrera - Spence Growth Options', company: 'ARCADIS' },
  { year: '2018', project: 'Sala de Control LixiviaciÃ³n - Spence Growth Options', company: 'ATCO' },
  { year: '2017', project: 'Instalaciones Auxiliares (Truckshop, RESPEL, etc.) - Spence Growth Options', company: 'ARCADIS' },
];

const featuredProjectsData = [
  {
    id: 1,
    title: 'RemediaciÃ³n Edificio CHO',
    subtitle: 'IngenierÃ­a DELIVERY (ejecutado)',
    client: 'BHP-COLOSO',
    year: '2025',
    description: 'DefiniciÃ³n arquitectÃ³nica y habilitaciÃ³n de espacios para la RemediaciÃ³n del Edificio CHO en Puerto Coloso. El proyecto contemplÃ³ la reconversiÃ³n de todo el edificio (420 mÂ²) en una instalaciÃ³n tÃ©cnica de alta disponibilidad, incluyendo distribuciÃ³n interna, accesos, sala tÃ©cnica para equipos elÃ©ctricos, UPS, oficinas, espacios de CoWork y mejoras generales arquitectÃ³nicas en cielos, mobiliario y otras adecuaciones.',
    credits: [
      { role: 'Arquitectura', company: 'AFOR' },
      { role: 'IngenierÃ­a', company: 'CHKING' },
      { role: 'Mobiliario', company: '3D Concept' },
    ],
    image: '/edificio-cho.jpg',
  },
  {
    id: 2,
    title: 'Oficinas Corporativas GT Chile',
    subtitle: 'IngenierÃ­a DPS (ejecutado)',
    client: 'GT CHILE',
    year: '2022',
    description: 'HabilitaciÃ³n de nuevas oficinas corporativas para Grant Thornton Chile. El proyecto contemplÃ³ un diseÃ±o elegante y moderno con mobiliario de madera natural, cielo expuesto con iluminaciÃ³n lineal LED, estanterÃ­as metÃ¡licas con vegetaciÃ³n integrada como separadores de ambientes, y estaciones de trabajo colaborativas. Se priorizÃ³ la luz natural, la calidez de los materiales y una distribuciÃ³n abierta que fomenta el trabajo en equipo.',
    credits: [
      { role: 'Arquitectura', company: 'AFOR' },
      { role: 'Mobiliario', company: 'QUEBRADA' },
    ],
    image: '/gt-chile.jpg',
  },
  {
    id: 3,
    title: 'Proyecto Minero Las Yacas',
    subtitle: 'IngenierÃ­a IPS/SPS (estudio)',
    client: 'CMM',
    year: '2025',
    description: 'DiseÃ±o arquitectÃ³nico del barrio cÃ­vico e infraestructura de apoyo para el proyecto minero Las Yacas en la comuna de VicuÃ±a. El alcance contemplÃ³ la definiciÃ³n de oficinas administrativas, control de ingreso, baÃ±os y salas de cambio para personal operativo, con una distribuciÃ³n modular orientada a optimizar flujos de circulaciÃ³n y cumplimiento normativo. Se desarrollaron layouts de emplazamiento, estacionamientos y accesos vehiculares, integrando la arquitectura al plan general de la faena que incluye chancado, lixiviaciÃ³n, SX-EW y servicios auxiliares.',
    credits: [
      { role: 'Arquitectura', company: 'AFOR' },
      { role: 'IngenierÃ­a', company: 'CHKING' },
    ],
    image: '/las-yacas.jpg',
  },
  {
    id: 4,
    title: 'Facilities E-AT Stripping',
    subtitle: 'IngenierÃ­a SPS/DPS (ejecutado)',
    client: 'BHP-MEL',
    year: '2024',
    description: 'Desarrollo de arquitectura para las Facilities del programa de Camiones AutÃ³nomos (EN-AT) en Minera Escondida. El proyecto requiriÃ³ diseÃ±ar con criterio estÃ©tico las instalaciones de soporte para la operaciÃ³n autÃ³noma, incluyendo la Sala de Control de Perforadoras con piso tÃ©cnico elevado, revestimientos de madera en pilares y muros, estaciones de monitoreo multiscreen, climatizaciÃ³n de precisiÃ³n y seÃ±alÃ©tica normativa. Se desarrollÃ³ ingenierÃ­a Interim con diseÃ±os aptos para construcciÃ³n, definiendo distribuciÃ³n interior, accesos, iluminaciÃ³n tÃ©cnica y requerimientos constructivos de cada facility.',
    credits: [
      { role: 'Arquitectura', company: 'AFOR' },
      { role: 'IngenierÃ­a', company: 'CHKING' },
    ],
    image: '/facilities-enat.jpg',
  },
  {
    id: 6,
    title: 'Edificio Puerta Sur',
    subtitle: 'IngenierÃ­a DPS (permisologÃ­a)',
    client: 'MECASFY',
    year: '2023',
    description: 'DiseÃ±o arquitectÃ³nico de edificio industrial y corporativo para Mecasfy en el sector Santa Alejandra. El proyecto contemplÃ³ el desarrollo de una nave industrial con oficinas administrativas integradas, fachada de policarbonato translÃºcido con estructura metÃ¡lica vista, accesos vehiculares y peatonales diferenciados, paisajismo perimetral y estacionamientos.',
    credits: [
      { role: 'Arquitectura', company: 'AFOR' },
    ],
    image: '/santa-alejandra.jpg',
  },
  {
    id: 8,
    title: 'Sala de Control GOM EN-AT',
    subtitle: 'IngenierÃ­a DPS (ejecutado)',
    client: 'BHP - MEL',
    year: '2022',
    description: 'IngenierÃ­a de Detalles para la Sala de Control GOM del proyecto EN-AT. IntervenciÃ³n integral del recinto con cielo metÃ¡lico lineal, revestimiento mural en listonerÃ­a de madera, iluminaciÃ³n LED lineal empotrada y distribuciÃ³n ergonÃ³mica de puestos de operaciÃ³n con brazos articulados y monitores multipantalla. El diseÃ±o prioriza la concentraciÃ³n operacional, confort acÃºstico, control lumÃ­nico y continuidad visual para jornadas extendidas de monitoreo de procesos mineros.',
    credits: [
      { role: 'Arquitectura', company: 'AFOR' },
      { role: 'IngenierÃ­a', company: 'CHKING' },
    ],
    image: '/gom-enat.jpg',
    imagePosition: 'center 70%',
  },
];

const ProjectModal = ({ project, t, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8" onClick={onClose}>
      <div className="absolute inset-0 bg-neutral-900/80 backdrop-blur-sm" />
      <div className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-neutral-900/60 hover:bg-neutral-900/80 text-white rounded-full transition-colors">
          â
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative h-64 md:h-full min-h-[300px] bg-gradient-to-br from-neutral-100 to-neutral-200">
            {project.image ? (
              <img src={project.image} alt={project.title} style={{objectPosition: project.imagePosition || 'center'}} className="w-full h-full object-cover" />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Building2 className="w-16 h-16 text-neutral-300 mx-auto mb-2" strokeWidth={1} />
                  <span className="text-neutral-400 text-xs tracking-widest uppercase">Imagen referencial</span>
                </div>
              </div>
            )}
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-orange-500 text-white text-xs font-medium px-3 py-1.5">{project.client}</span>
              <span className="bg-neutral-900/70 text-white text-xs font-mono px-3 py-1.5">{project.year}</span>
            </div>
          </div>
          {/* Content */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <h3 className="text-2xl font-medium text-[#444c59] mb-4 leading-tight">{project.title}</h3>
            <p className="text-sm text-neutral-500 leading-relaxed text-justify">{project.description}</p>
            {project.credits && (
              <div className="mt-6 pt-4 border-t border-neutral-100 flex flex-wrap gap-x-5 gap-y-2">
                {project.credits.map((c, i) => (
                  <span key={i} className="text-xs text-neutral-400">
                    <span className="text-neutral-600 font-medium">{c.role}:</span> {c.company}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedProjectCard = ({ project, index, t, onSelect }) => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`group relative bg-white overflow-hidden transition-all duration-700 hover:shadow-2xl cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
      onClick={() => onSelect(project)}
    >
      {/* Image */}
      <div className="relative h-52 bg-gradient-to-br from-neutral-100 to-neutral-200 overflow-hidden">
        {project.image ? (
          <img src={project.image} alt={project.title} style={{objectPosition: project.imagePosition || 'center'}} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Building2 className="w-12 h-12 text-neutral-300 mx-auto mb-2" strokeWidth={1} />
              <span className="text-neutral-400 text-xs tracking-widest uppercase">Imagen referencial</span>
            </div>
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }} />
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span className="bg-orange-500 text-white text-xs font-medium px-2.5 py-1">{project.client}</span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="bg-neutral-900/70 text-white text-xs font-mono px-2 py-1">{project.year}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-medium text-[#444c59] leading-tight">{project.title}</h3>
        {project.subtitle && <p className="text-xs text-neutral-400 font-medium tracking-wide uppercase mt-1 mb-2">{project.subtitle}</p>}
        <span className="inline-flex items-center gap-1 text-xs text-orange-600 font-medium tracking-wider uppercase">
          {t.viewDetails}
          <ChevronDown className="w-3 h-3 -rotate-90" />
        </span>
        {project.credits && (
          <div className="mt-3 pt-3 border-t border-neutral-100 flex flex-wrap gap-x-4 gap-y-1">
            {project.credits.map((c, i) => (
              <span key={i} className="text-xs text-neutral-400">
                <span className="text-neutral-500 font-medium">{c.role}:</span> {c.company}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Bottom accent */}
      <div className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </div>
  );
};

// Logo AFOR - Audiowide font
const A4ELogo = ({ className = "" }) => {
  return <span style={{fontFamily: "var(--font-audiowide), sans-serif"}} className={`tracking-wider leading-none inline-block ${className}`}>AFOR</span>;
};

// Rotating tagline under logo
const RotatingTagline = () => {
  const words = ['Engineering', 'Processes'];
  const [index, setIndex] = React.useState(0);
  const [phase, setPhase] = React.useState('in');
  React.useEffect(() => {
    const interval = setInterval(() => {
      setPhase('out');
      setTimeout(() => {
        setIndex(prev => (prev + 1) % words.length);
        setPhase('in');
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="mt-2 text-left whitespace-nowrap" style={{minWidth: "300px"}}>
      <span className="text-white/80 text-sm md:text-base lg:text-lg font-light tracking-widest uppercase" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>
        Architecture for{' '}
      </span>
      <span className="text-orange-500 font-normal text-sm md:text-base lg:text-lg tracking-widest uppercase" style={{
        fontFamily: 'system-ui, -apple-system, sans-serif',
        display: 'inline-block',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: phase === 'in' ? 'translateY(0)' : 'translateY(15px)',
        opacity: phase === 'in' ? 1 : 0,
      }}>
        {words[index]}
      </span>
    </div>
  );
};


const ProjectCard = ({ title, index, t, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`group relative bg-white overflow-hidden cursor-pointer transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`bg-gradient-to-r from-orange-600 to-orange-500 transition-all duration-500 ${
        isHovered ? 'h-2' : 'h-1'
      }`} />

      <div className="relative h-44 bg-gradient-to-br from-neutral-50 to-neutral-100 overflow-hidden">
        <div className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'opacity-50' : 'opacity-30'}`}>
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }} />
        </div>

        <div className="absolute top-4 left-4">
          <span className={`text-4xl font-light tracking-tighter transition-all duration-500 inline-block ${
            isHovered ? 'text-orange-500 scale-110' : 'text-neutral-200 scale-100'
          }`} style={{ transformOrigin: 'left' }}>
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <div className={`absolute bottom-4 right-4 transition-all duration-500 ${
          isHovered ? 'opacity-100 scale-110 rotate-6' : 'opacity-20 scale-100 rotate-0'
        }`}>
          <Building2 className="w-10 h-10 text-orange-600" strokeWidth={1} />
        </div>

        <div className={`absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent transition-all duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />

        <div className={`absolute bottom-0 left-0 right-0 p-4 transform transition-all duration-500 ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <span className="inline-flex items-center gap-2 text-white text-xs font-medium tracking-wider uppercase">
            {t.viewProject} <ArrowRight className={`w-3 h-3 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
          </span>
        </div>
      </div>

      <div className="p-5 bg-white relative overflow-hidden">
        <div className={`absolute inset-0 bg-orange-50 transition-transform duration-500 ease-out ${
          isHovered ? 'translate-x-0' : '-translate-x-full'
        }`} />

        <div className="relative">
          <span className="text-xs font-medium tracking-widest text-orange-600 uppercase mb-2 block">
            BHP
          </span>
          <h3 className="text-sm font-normal text-[#444c59] leading-snug">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

const LanguageSelector = ({ currentLang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const langs = [
    { code: 'es', label: 'ES', full: 'EspaÃ±ol', flag: 'ðªð¸' },
    { code: 'en', label: 'EN', full: 'English', flag: 'ðºð¸' },
    { code: 'pt', label: 'PT', full: 'PortuguÃªs', flag: 'ð§ð·' },
    { code: 'zh', label: 'ZH', full: 'ä¸­æ', flag: 'ð¨ð³' }
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-white/80 hover:text-white text-xs tracking-wider uppercase transition-colors px-3 py-2 border border-white/20 hover:border-white/40"
      >
        <Globe className="w-3.5 h-3.5" />
        {langs.find(l => l.code === currentLang)?.label}
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-neutral-900 border border-white/20 shadow-xl min-w-[80px] z-50">
          {langs.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLang(lang.code);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-orange-600/20 transition-colors ${
                currentLang === lang.code ? 'bg-orange-600/10 text-orange-400' : 'text-white/70 hover:text-white'
              }`}
            >
              <span className="text-sm font-medium tracking-wider">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};


// Componente de partÃ­culas flotantes para el hero
const FloatingParticles = () => {
  return (
    <>
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/10"
          style={{
            width: Math.random() * 6 + 2 + 'px',
            height: Math.random() * 6 + 2 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animation: `float ${Math.random() * 10 + 15}s ease-in-out infinite`,
            animationDelay: Math.random() * 5 + 's'
          }}
        />
      ))}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          25% { transform: translate(20px, -30px) scale(1.2); opacity: 0.6; }
          50% { transform: translate(-15px, -60px) scale(0.8); opacity: 0.4; }
          75% { transform: translate(30px, -40px) scale(1.1); opacity: 0.5; }
        }
      `}</style>
    </>
  );
};

const ServicesVisual = ({ t }) => {
  const [ref, isVisible] = useScrollAnimation(0.3);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`aspect-square bg-gradient-to-br from-orange-600 to-orange-700 overflow-hidden relative transition-all duration-700 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      } ${isHovered ? 'shadow-2xl shadow-orange-500/20' : ''}`}>
        <div className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'opacity-30' : 'opacity-20'}`} style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.2) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />

        <div className={`absolute top-10 right-10 w-20 h-20 border border-white/10 rounded-full transition-all duration-1000 ${
          isHovered ? 'scale-150 opacity-20' : 'scale-100 opacity-10'
        }`} />
        <div className={`absolute bottom-10 left-10 w-14 h-14 border border-white/10 rounded-full transition-all duration-1000 delay-200 ${
          isHovered ? 'scale-150 opacity-20' : 'scale-100 opacity-10'
        }`} />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className={`text-7xl md:text-8xl font-extralight transition-all duration-700 ${
              isHovered ? 'text-white/50 scale-110' : 'text-white/30 scale-100'
            }`} style={{ display: 'inline-block' }}>
              <AnimatedNumber value={10} isVisible={isVisible} />+
            </span>
            <span className={`block text-xs uppercase tracking-[0.2em] mt-4 font-medium transition-all duration-500 ${
              isHovered ? 'text-white' : 'text-white/70'
            }`}>{t.yearsExp}</span>
          </div>
        </div>

        <div className={`absolute top-0 left-0 border-l-2 border-t-2 border-white/20 transition-all duration-500 ${
          isHovered ? 'w-20 h-20' : 'w-16 h-16'
        }`} />
        <div className={`absolute bottom-0 right-0 border-r-2 border-b-2 border-white/20 transition-all duration-500 ${
          isHovered ? 'w-20 h-20' : 'w-16 h-16'
        }`} />
      </div>
    </div>
  );
};

const SectionHeader = ({ label, title, description, labelColor = "text-orange-600", titleColor = "text-[#444c59]", dark = false }) => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div>
        <span className={`${labelColor} text-xs tracking-[0.25em] uppercase mb-3 block font-medium`}>{label}</span>
        <h2 className={`text-3xl md:text-4xl ${dark ? 'text-white' : titleColor} font-light tracking-tight`}>{title}</h2>
      </div>
      {description && (
        <p className={`${dark ? 'text-white/50' : 'text-neutral-500'} font-light max-w-md text-sm leading-relaxed`}>
          {description}
        </p>
      )}
    </div>
  );
};

const ContactInfo = ({ t }) => {
  const [ref, isVisible] = useScrollAnimation(0.2);
  const [hoveredItem, setHoveredItem] = useState(null);

  const contactItems = [
    { icon: Mail, label: t.formEmail, value: 'contact@a4e.cl' },
    { icon: Phone, label: t.phone, value: '+56 2 2345 6789' },
    { icon: MapPin, label: t.location, value: 'Santiago, Chile' }
  ];

  return (
    <div ref={ref}>
      <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <span className="text-orange-600 text-xs tracking-[0.25em] uppercase mb-3 block font-medium">{t.contact}</span>
        <h2 className="text-3xl md:text-4xl text-[#444c59] font-light tracking-tight mb-8">{t.contactTitle}</h2>
        <p className="text-neutral-500 font-light leading-relaxed mb-12 max-w-md text-base">
          {t.contactDesc}
        </p>
      </div>

      <div className="space-y-4">
        {contactItems.map((item, i) => (
          <div
            key={i}
            className={`group cursor-pointer transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ transitionDelay: isVisible ? `${300 + i * 150}ms` : '0ms' }}
            onMouseEnter={() => setHoveredItem(i)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className={`flex items-center gap-5 p-4 rounded-xl transition-all duration-500 ${
              hoveredItem === i ? 'bg-orange-50 shadow-lg shadow-orange-500/10' : 'bg-transparent'
            }`}>
              <div className={`relative w-14 h-14 flex items-center justify-center transition-all duration-500 ${
                hoveredItem === i ? 'scale-110' : 'scale-100'
              }`}>
                <div className={`absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-500 transition-all duration-500 ${
                  hoveredItem === i ? 'rotate-6 rounded-xl' : 'rotate-0 rounded-lg'
                }`} />
                <item.icon className="w-5 h-5 text-white relative z-10" />
              </div>

              <div className={`transition-all duration-300 ${hoveredItem === i ? 'translate-x-2' : ''}`}>
                <span className={`text-xs uppercase tracking-wider block font-medium transition-colors duration-300 ${
                  hoveredItem === i ? 'text-orange-600' : 'text-neutral-400'
                }`}>{item.label}</span>
                <span className={`font-light transition-colors duration-300 ${
                  hoveredItem === i ? 'text-orange-600' : 'text-[#444c59]'
                }`}>{item.value}</span>
              </div>

              <ArrowRight className={`w-4 h-4 ml-auto transition-all duration-300 ${
                hoveredItem === i ? 'opacity-100 translate-x-0 text-orange-500' : 'opacity-0 -translate-x-4'
              }`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactForm = ({ t }) => {
  const [ref, isVisible] = useScrollAnimation(0.2);
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitHovered, setIsSubmitHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={`relative bg-white p-8 md:p-10 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0 shadow-2xl shadow-neutral-200/50' : 'opacity-0 translate-y-12 shadow-none'
      }`}
      style={{ transitionDelay: '200ms' }}
    >
      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
        <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-500 to-orange-600 transform rotate-45 translate-x-20 -translate-y-20 transition-all duration-500 ${
          isVisible ? 'translate-x-20 -translate-y-20' : 'translate-x-40 -translate-y-40'
        }`} />
      </div>

      <div className="space-y-6 relative">
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '300ms' }}>
          <label className={`text-xs uppercase tracking-wider block mb-2 font-medium transition-all duration-300 ${
            focusedField === 'name' ? 'text-orange-600 translate-x-1' : 'text-neutral-500'
          }`}>{t.formName}</label>
          <div className="relative">
            <input
              type="text"
              className="w-full bg-neutral-50 border-0 border-b-2 border-neutral-200 px-4 py-3 text-[#444c59] font-light focus:outline-none focus:border-orange-500 focus:bg-orange-50/30 transition-all duration-300"
              placeholder={t.formPlaceholderName}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
            />
            <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-500 ${
              focusedField === 'name' ? 'w-full' : 'w-0'
            }`} />
          </div>
        </div>

        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '400ms' }}>
          <label className={`text-xs uppercase tracking-wider block mb-2 font-medium transition-all duration-300 ${
            focusedField === 'email' ? 'text-orange-600 translate-x-1' : 'text-neutral-500'
          }`}>{t.formEmail}</label>
          <div className="relative">
            <input
              type="email"
              className="w-full bg-neutral-50 border-0 border-b-2 border-neutral-200 px-4 py-3 text-[#444c59] font-light focus:outline-none focus:border-orange-500 focus:bg-orange-50/30 transition-all duration-300"
              placeholder={t.formPlaceholderEmail}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
            />
            <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-500 ${
              focusedField === 'email' ? 'w-full' : 'w-0'
            }`} />
          </div>
        </div>

        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '500ms' }}>
          <label className={`text-xs uppercase tracking-wider block mb-2 font-medium transition-all duration-300 ${
            focusedField === 'project' ? 'text-orange-600 translate-x-1' : 'text-neutral-500'
          }`}>{t.formProject}</label>
          <div className="relative">
            <select
              className="w-full bg-neutral-50 border-0 border-b-2 border-neutral-200 px-4 py-3 text-neutral-600 font-light focus:outline-none focus:border-orange-500 focus:bg-orange-50/30 transition-all duration-300"
              onFocus={() => setFocusedField('project')}
              onBlur={() => setFocusedField(null)}
            >
              {t.formProjectTypes.map((type, i) => (
                <option key={i}>{type}</option>
              ))}
            </select>
            <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-500 ${
              focusedField === 'project' ? 'w-full' : 'w-0'
            }`} />
          </div>
        </div>

        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '600ms' }}>
          <label className={`text-xs uppercase tracking-wider block mb-2 font-medium transition-all duration-300 ${
            focusedField === 'message' ? 'text-orange-600 translate-x-1' : 'text-neutral-500'
          }`}>{t.formMessage}</label>
          <div className="relative">
            <textarea
              rows={4}
              className="w-full bg-neutral-50 border-0 border-b-2 border-neutral-200 px-4 py-3 text-[#444c59] font-light focus:outline-none focus:border-orange-500 focus:bg-orange-50/30 transition-all duration-300 resize-none"
              placeholder={t.formPlaceholderMsg}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
            />
            <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-500 ${
              focusedField === 'message' ? 'w-full' : 'w-0'
            }`} />
          </div>
        </div>

        <button
          type="button"
          className={`group relative w-full overflow-hidden bg-gradient-to-r from-orange-600 to-orange-500 text-white py-4 text-xs tracking-widest uppercase font-medium transition-all duration-500 mt-4 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          } ${isSubmitHovered ? 'shadow-xl shadow-orange-500/30 scale-[1.02]' : 'shadow-lg shadow-orange-500/20'}`}
          style={{ transitionDelay: '700ms' }}
          onMouseEnter={() => setIsSubmitHovered(true)}
          onMouseLeave={() => setIsSubmitHovered(false)}
        >
          <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ${
            isSubmitHovered ? 'translate-x-full' : '-translate-x-full'
          }`} />
          <span className="relative flex items-center justify-center gap-2">
            {t.formSubmit}
            <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isSubmitHovered ? 'translate-x-1' : ''}`} />
          </span>
        </button>
      </div>
    </div>
  );
};

const ServicesContent = ({ t }) => {
  const [ref, isVisible] = useScrollAnimation(0.2);
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <div ref={ref}>
      <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <span className="text-orange-500 text-xs tracking-[0.25em] uppercase mb-3 block font-medium">{t.services}</span>
        <h2 className="text-3xl md:text-4xl text-white font-light tracking-tight mb-8">{t.servicesTitle}</h2>
        <p className="text-white/60 font-light leading-relaxed mb-10 text-base">
          {t.servicesDesc}
        </p>
      </div>

      <div className="space-y-4">
        {t.servicesList.map((service, i) => (
          <div
            key={i}
            className={`group cursor-pointer transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ transitionDelay: isVisible ? `${300 + i * 100}ms` : '0ms' }}
            onMouseEnter={() => setHoveredService(i)}
            onMouseLeave={() => setHoveredService(null)}
          >
            <div className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-500 ${
              hoveredService === i ? 'bg-white/10 backdrop-blur-sm' : 'bg-transparent'
            }`}>
              <span className={`text-xs font-mono transition-all duration-300 ${
                hoveredService === i ? 'text-orange-500 scale-125' : 'text-white/30'
              }`}>
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className={`h-px bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-500 ${
                hoveredService === i ? 'w-8' : 'w-4'
              }`} />

              <span className={`font-light text-base transition-all duration-300 ${
                hoveredService === i ? 'text-white translate-x-2' : 'text-white/70'
              }`}>
                {service}
              </span>

              <ArrowRight className={`w-4 h-4 transition-all duration-300 ${
                hoveredService === i ? 'opacity-100 translate-x-0 text-orange-500' : 'opacity-0 -translate-x-4'
              }`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AboutSection = ({ t }) => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [hoveredPillar, setHoveredPillar] = useState(null);

  const pillars = [
    { title: t.pillar1Title, desc: t.pillar1Desc, num: '01' },
    { title: t.pillar2Title, desc: t.pillar2Desc, num: '02' },
    { title: t.pillar3Title, desc: t.pillar3Desc, num: '03' },
    { title: t.pillar4Title, desc: t.pillar4Desc, num: '04' }
  ];

  return (
    <section id="about" className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-neutral-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div
          ref={ref}
          className={`max-w-3xl mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-orange-600 text-xs tracking-[0.25em] uppercase mb-3 block font-medium">{t.about}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#444c59] font-light tracking-tight mb-6">{t.aboutTitle}</h2>
          <p className="text-orange-600 font-medium text-lg mb-8 text-justify">{t.aboutSubtitle}</p>
          <p className="text-neutral-600 font-light leading-relaxed text-base mb-4 text-justify">{t.aboutText1}</p>
          <p className="text-neutral-600 font-light leading-relaxed text-base text-justify">{t.aboutText2}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-3">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: isVisible ? `${300 + i * 150}ms` : '0ms' }}
              onMouseEnter={() => setHoveredPillar(i)}
              onMouseLeave={() => setHoveredPillar(null)}
            >
              <div className={`relative h-full p-6 md:p-6 overflow-hidden transition-all duration-500 ${
                hoveredPillar === i
                  ? 'bg-gradient-to-br from-orange-600 to-orange-700 shadow-2xl shadow-orange-500/30 -translate-y-2'
                  : 'bg-neutral-900'
              }`}>
                <div className={`absolute inset-0 opacity-10 transition-opacity duration-500 ${hoveredPillar === i ? 'opacity-20' : ''}`}>
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                  }} />
                </div>

                <div className={`absolute -top-10 -right-10 w-32 h-32 border border-white/10 rounded-full transition-all duration-700 ${
                  hoveredPillar === i ? 'scale-150 opacity-30' : 'scale-100 opacity-10'
                }`} />

                <div className={`absolute top-3 right-3 text-5xl md:text-6xl font-bold transition-all duration-500 ${
                  hoveredPillar === i ? 'text-white/20' : 'text-white/5'
                }`}>
                  {pillar.num}
                </div>

                <div className="relative z-10">
                  <div className={`inline-flex items-center gap-2 mb-6 transition-colors duration-300`}>
                    <span className={`text-xs font-mono tracking-wider ${
                      hoveredPillar === i ? 'text-white/70' : 'text-orange-500'
                    }`}>{pillar.num}</span>
                    <div className={`w-8 h-px transition-all duration-500 ${
                      hoveredPillar === i ? 'bg-white/50 w-12' : 'bg-orange-500'
                    }`} />
                  </div>

                  <h3 className={`text-lg md:text-xl font-medium mb-3 transition-colors duration-300 text-white`}>
                    {pillar.title}
                  </h3>

                  <p className={`text-sm leading-relaxed text-justify transition-colors duration-300 ${
                    hoveredPillar === i ? 'text-white/90' : 'text-white/60'
                  }`}>
                    {pillar.desc}
                  </p>
                </div>

                <div className={`absolute bottom-0 left-0 h-1 bg-orange-500 transition-all duration-500 ${
                  hoveredPillar === i ? 'w-full' : 'w-0'
                }`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = ({ t }) => {
  const [ref, isVisible] = useScrollAnimation(0.2);
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  return (
    <footer ref={ref} className="relative bg-neutral-800 py-12 border-t border-neutral-700 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-neutral-800" />

      <div className={`absolute top-0 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`} />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className={`flex flex-col md:flex-row justify-between items-center gap-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div
            className={`transition-all duration-500 ${isLogoHovered ? 'scale-105' : 'scale-100'}`}
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
          >
            <A4ELogo className="text-2xl text-orange-500" />
          </div>

          <div className={`hidden md:block flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-8 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} />

          <div className="flex items-center gap-6">
            <a
              href="/A4E_Dossier_2025.pdf"
              download
              className={`text-white/60 hover:text-orange-500 text-xs font-light tracking-wide transition-all duration-300 hover:scale-105 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {t.downloadPortfolio}
            </a>

            <div className="h-3 w-px bg-white/20" />

            <a
              href="https://intranet.a4e.cl"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-white/60 hover:text-orange-500 text-xs font-light tracking-wide transition-all duration-300 hover:scale-105 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {t.intranet}
            </a>

            <div className="h-3 w-px bg-white/20" />

            <p className={`text-white/50 text-xs font-light text-center md:text-right transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              Â© 2025 A4E. {t.allRights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function A4ELanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState('en');
  const [selectedProject, setSelectedProject] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-900 antialiased scroll-smooth" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrollY > 100
          ? 'translate-y-0 bg-neutral-900/80 backdrop-blur-lg shadow-lg shadow-black/20 py-3'
          : '-translate-y-full bg-neutral-900/70 backdrop-blur-md py-4'
      } border-b border-white/10`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <A4ELogo className={`transition-all duration-300 ${scrollY > 50 ? "text-xl" : "text-2xl"} text-orange-500`} />

          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {t.nav.map((item, i) => (
                <a
                  key={i}
                  href={`#${['home', 'about', 'services', 'projects', 'contact'][i]}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.getElementById(['home', 'about', 'services', 'projects', 'contact'][i]);
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-white/60 hover:text-white text-xs tracking-widest uppercase transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </nav>
          
            <LanguageSelector currentLang={lang} setLang={setLang} />
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-neutral-900/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden">
          <nav className="flex flex-col items-center gap-6">
            {t.nav.map(function(item, i) {
              return (
                <a
                  key={i}
                  href={'#' + ['home', 'about', 'services', 'projects', 'contact'][i]}
                  onClick={function(e) {
                    e.preventDefault();
                    var target = document.getElementById(['home', 'about', 'services', 'projects', 'contact'][i]);
                    if (target) { target.scrollIntoView({ behavior: 'smooth' }); }
                    setMenuOpen(false);
                  }}
                  className="text-white/80 hover:text-orange-500 text-lg tracking-widest uppercase transition-colors"
                >
                  {item}
                </a>
              );
            })}
          </nav>
          <LanguageSelector currentLang={lang} setLang={setLang} />
        </div>
      )}

      {/* Hero Principal con Imagen de Fondo */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src="/hero-cover.jpg" alt="A4E Industrial" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/85 via-neutral-900/60 to-neutral-900/40" />
        </div>

        {/* Content - Logo Left, Text Right */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Logo Left */}
            <div className="flex-shrink-0 flex flex-col items-start">
              <A4ELogo className="text-7xl md:text-8xl lg:text-9xl text-white drop-shadow-2xl" />
              <RotatingTagline />
            </div>

            {/* Text Right */}
            <div className="flex-1 text-center md:text-right max-w-2xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight mb-6">
                <span className="block">{t.heroTitle1}</span>
                <span className="block text-orange-500 font-medium">{t.heroTitle2}</span>
              </h1>
              <div className="w-24 h-px bg-orange-500 mb-6 ml-auto hidden md:block" />
              <p className="text-white/90 text-base md:text-lg font-normal leading-relaxed mb-4 text-justify">
                {t.heroDesc}
              </p>
              <p className="text-white/70 text-sm font-normal leading-relaxed text-justify">
                {t.heroSubdesc}
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-10"
        >
          <ChevronDown className="w-6 h-6 text-white/50 hover:text-white transition-colors" />
        </button>
      </section>
      <AboutSection t={t} />

      <section id="services" className="relative py-20 md:py-28 bg-neutral-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ServicesContent t={t} />
            <ServicesVisual t={t} />
          </div>
        </div>
      </section>


      {/* Video BIM entre Servicios y Proyectos */}
      <div className="relative w-full h-64 md:h-96 overflow-hidden">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/30 via-transparent to-neutral-900/30" />
      </div>

      <section id="projects" className="relative py-20 md:py-28 bg-neutral-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <SectionHeader
            label={t.highlighted}
            title={t.highlightedTitle}
            description={t.highlightedDesc}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjectsData.map((project, index) => (
              <FeaturedProjectCard key={project.id} project={project} index={index} t={t} onSelect={setSelectedProject} />
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal project={selectedProject} t={t} onClose={() => setSelectedProject(null)} />
      )}

      <section id="track-record" className="relative py-20 md:py-28 bg-gradient-to-br from-orange-600 to-orange-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <SectionHeader
            label={t.portfolio}
            title={t.featuredProjects}
            description={t.projectsDesc}
            dark={true}
          />

          {/* Tabla 1: Desarrollo de IngenierÃ­a Propio */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-white" />
              <h3 className="text-lg font-medium text-white">{t.engineeringDev}</h3>
              <span className="text-xs text-white/50 font-mono">{engineeringProjects.length}</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 px-4 text-xs font-mono tracking-wider text-white/80 uppercase w-20">{t.colYear}</th>
                    <th className="text-left py-3 px-4 text-xs font-mono tracking-wider text-white/80 uppercase">{t.colProject}</th>
                    <th className="text-right py-3 px-4 text-xs font-mono tracking-wider text-white/80 uppercase w-32">{t.colClient}</th>
                  </tr>
                </thead>
                <tbody>
                  {engineeringProjects.map((p, i) => (
                    <tr key={i} className="border-b border-white/10 hover:bg-white/10 transition-colors duration-300 group">
                      <td className="py-3 px-4 text-sm font-mono text-white/50 group-hover:text-white transition-colors">{p.year}</td>
                      <td className="py-3 px-4 text-sm text-white/80 group-hover:text-white transition-colors">{p.project}</td>
                      <td className="py-3 px-4 text-sm text-right font-medium text-white/60 group-hover:text-white transition-colors">{p.client}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Tabla 2: Contraparte / RevisiÃ³n */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-white" />
              <h3 className="text-lg font-medium text-white">{t.counterpartReview}</h3>
              <span className="text-xs text-white/50 font-mono">{counterpartProjects.length}</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 px-4 text-xs font-mono tracking-wider text-white/80 uppercase w-20">{t.colYear}</th>
                    <th className="text-left py-3 px-4 text-xs font-mono tracking-wider text-white/80 uppercase">{t.colProject}</th>
                    <th className="text-right py-3 px-4 text-xs font-mono tracking-wider text-white/80 uppercase w-32">{t.colCompany}</th>
                  </tr>
                </thead>
                <tbody>
                  {counterpartProjects.map((p, i) => (
                    <tr key={i} className="border-b border-white/10 hover:bg-white/10 transition-colors duration-300 group">
                      <td className="py-3 px-4 text-sm font-mono text-white/50 group-hover:text-white transition-colors">{p.year}</td>
                      <td className="py-3 px-4 text-sm text-white/80 group-hover:text-white transition-colors">{p.project}</td>
                      <td className="py-3 px-4 text-sm text-right font-medium text-white/60 group-hover:text-white transition-colors">{p.company}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-20 md:py-28 bg-neutral-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ContactInfo t={t} />
            <ContactForm t={t} />
          </div>
        </div>
      </section>

      <Footer t={t} />
    </div>
  );
}


