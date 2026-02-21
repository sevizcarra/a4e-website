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
    tagline: 'Soluciones técnicas de arquitectura para sus operaciones',
    heroTitle1: 'ESPECIALISTAS EN ARQUITECTURA',
    heroTitle2: 'PARA PROYECTOS DE INGENIERÍA',
    heroDesc: 'Somos una oficina técnica que opera como su disciplina de arquitectura externalizada. Nos integramos a su equipo de proyecto, adoptamos su codificación y estándares de entrega, y desarrollamos expedientes técnicos y soluciones constructivas coordinadas con las disciplinas mecánica, eléctrica, instrumentación y civil.',
    heroSubdesc: 'No solo diseñamos espacios; desarrollamos la arquitectura en función de los requerimientos con énfasis en la ingeniería de detalle para que sus activos industriales funcionen en el mas alto estándar.',
    viewProjects: 'Ver Proyectos',
    contactUs: 'Contáctenos',
    about: 'Nosotros',
    aboutTitle: 'Consultoría Técnica en Arquitectura para empresas de Ingeniería',
    aboutSubtitle: 'Más de 10 años de experiencia profesional integrando la arquitectura como disciplina crítica en proyectos mineros e industriales.',
    aboutText1: 'Somos una oficina especializada en el desarrollo de infraestructura para la gran minería e industria. Nos diferenciamos por abordar la arquitectura no solo como un fin estético, sino como un componente clave operacional que debe responder a la exigencias de la  producción, seguridad y mantenimiento de sus procesos.',
    aboutText2: 'Entendemos el lenguaje de la ingeniería. Nuestro trabajo se integra fluidamente con las especialidades estructurales, eléctricas, mecánicas y PMO, garantizando entregables libres de interferencias, compatibles con la codificación del mandante y optimizados para el ciclo de vida de los activos.',
    pillar1Title: 'Enfoque en Procesos',
    pillar1Desc: 'Diseñamos desde la lógica del proceso productivo. Cada metro cuadrado se planifica para facilitar la operación, el flujo de personal y la continuidad del servicio.',
    pillar2Title: 'Rigor Normativo',
    pillar2Desc: 'Dominio de normativas y estándares de seguridad para la gran minería e industria. Entregamos expedientes completos para obtener las aprobaciones necesarias para la ejecución.',
    pillar3Title: 'Coordinación Multidisciplinaria',
    pillar3Desc: 'Trabajamos en Revit/BIM y entregamos modelos coordinados en el formato y codificación que su proyecto requiera. Nos integramos con las disciplinas estructural, mecánica, eléctrica e instrumentación sin generar interferencias ni reprocesos.',
    pillar4Title: 'Modelo Flexible',
    pillar4Desc: 'Acceda a un equipo especializado de arquitectura solo cuando su proyecto lo requiera. Sin overhead permanentes y con capacidad disponible para responder a sus plazos y acoplarnos a sus procesos internos de manuales y codificaciones.',
    highlighted: 'Proyectos',
    highlightedTitle: 'Proyectos Destacados',
    highlightedDesc: 'Algunos de nuestros proyectos más representativos en la gran minería.',
    viewDetails: 'Ver Detalles',
    portfolio: 'Portafolio',
    featuredProjects: 'Trayectoria de Proyectos',
    projectsDesc: 'Más de 20 proyectos ejecutados para la gran minería e industria desde 2017.',
    engineeringDev: 'Desarrollo de Ingeniería Propio (via CHKING)',
    counterpartReview: 'Contraparte / Revisión (via CHKING)',
    colYear: 'Año',
    colProject: 'Proyecto',
    colClient: 'Cliente',
    colCompany: 'Empresa Líder',
    services: 'Servicios',
    servicesTitle: 'Soluciones Especializadas',
    servicesDesc: 'Ofrecemos servicios arquitectónicos integrales diseñados específicamente para proyectos de ingeniería, instalaciones industriales y operaciones mineras a gran escala.',
    servicesList: [
      'Master Plan de Arquitectura para estudio de Faenas e Instalaciones',
      'Edificación y remodelación de espacios claves como Oficinas y Casas de Cambio',
      'Salas de Control, de Servidores, Eléctricas y Técnicas.',
      'Edificación técnica para RESPEL, Almacenamiento y Truck Shops',
      'Revisión de contraparte de planos y documentos.',
      'Supervisión de Terreno de ejecución y avances'
    ],
    yearsExp: 'Años de Experiencia',
    contact: 'Contacto',
    contactTitle: 'Construyamos Juntos',
    contactDesc: '¿Listo para iniciar su próximo proyecto de infraestructura industrial o minera? Contáctenos para una consulta.',
    formName: 'Nombre',
    formEmail: 'Correo',
    formProject: 'Tipo de Proyecto',
    formMessage: 'Mensaje',
    formPlaceholderName: 'Su nombre completo',
    formPlaceholderEmail: 'correo@ejemplo.com',
    formPlaceholderMessage: 'Cuéntenos sobre su proyecto...',
    formProjectTypes: [
      'Instalación Industrial',
      'Infraestructura Minera',
      'Salas de Control',
      'Expansión de Planta',
      'Otro'
    ],
    submitMessage: 'Enviar Mensaje',
        intranet: 'Acceso Equipo',
    allRights: 'Todos los derechos reservados',
    description: 'Especialistas en soluciones de ingeniería'
  },
  en: {
    nav: ['Home', 'About', 'Services', 'Projects', 'Contact'],
    tagline: 'Technical architecture solutions for your operations',
    heroTitle1: 'ARCHITECTURE SPECIALISTS',
    heroTitle2: 'FOR ENGINEERING PROJECTS',
    heroDesc: 'We are a technical office that operates as your outsourced architecture discipline. We integrate into your project team, adopt your coding and delivery standards, and develop technical documents and construction solutions coordinated with mechanical, electrical, instrumentation, and civil disciplines.',
    heroSubdesc: 'We don\'t just design spaces; we develop architecture based on requirements with emphasis on detailed engineering so that your industrial assets function at the highest standard.',
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
    description: 'Engineering solutions specialists'
  },
  pt: {
    nav: ['Início', 'Sobre', 'Serviços', 'Projetos', 'Contato'],
    tagline: 'Soluções técnicas de arquitetura para suas operações',
    heroTitle1: 'ESPECIALISTAS EM ARQUITETURA',
    heroTitle2: 'PARA PROJETOS DE ENGENHARIA',
    heroDesc: 'Somos um escritório técnico que opera como sua disciplina de arquitetura terceirizada. Integramo-nos à sua equipe de projeto, adotamos sua codificação e padrões de entrega, e desenvolvemos expedientes técnicos e soluções construtivas coordenadas com as disciplinas mecânica, elétrica, instrumentação e civil.',
    heroSubdesc: 'Não apenas projetamos espaços; desenvolvemos a arquitetura em função dos requisitos com ênfase na engenharia de detalhe para que seus ativos industriais funcionem no mais alto padrão.',
    viewProjects: 'Ver Projetos',
    contactUs: 'Contate-nos',
    about: 'Sobre',
    aboutTitle: 'Consultoria Técnica em Arquitetura para empresas de Engenharia',
    aboutSubtitle: 'Mais de 10 anos de experiência profissional integrando a arquitetura como disciplina crítica em projetos de mineração e industriais.',
    aboutText1: 'Somos um escritório especializado no desenvolvimento de infraestrutura para a grande mineração e indústria. Nos diferenciamos ao abordar a arquitetura não apenas como um fim estético, mas como um componente chave operacional que deve responder às exigências da produção, segurança e manutenção de seus processos.',
    aboutText2: 'Entendemos a linguagem da engenharia. Nosso trabalho se integra fluidamente com as especialidades estruturais, elétricas, mecânicas e PMO, garantindo entregáveis livres de interferências, compatíveis com a codificação do cliente e otimizados para o ciclo de vida dos ativos.',
    pillar1Title: 'Foco em Processos',
    pillar1Desc: 'Projetamos a partir da lógica do processo produtivo. Cada metro quadrado é planejado para facilitar a operação, o fluxo de pessoal e a continuidade do serviço.',
    pillar2Title: 'Rigor Normativo',
    pillar2Desc: 'Domínio de normativas e padrões de segurança para a grande mineração e indústria. Entregamos expedientes completos para obter as aprovações necessárias para a execução.',
    pillar3Title: 'Coordenação Multidisciplinar',
    pillar3Desc: 'Trabalhamos em Revit/BIM e entregamos modelos coordenados no formato e codificação que seu projeto requeira. Integramo-nos com as disciplinas estrutural, mecânica, elétrica e instrumentação sem gerar interferências nem retrabalhos.',
    pillar4Title: 'Modelo Flexível',
    pillar4Desc: 'Acesse uma equipe especializada de arquitetura apenas quando seu projeto necessitar. Sem overhead permanente e com capacidade disponível para atender seus prazos e nos acoplarmos aos seus processos internos de manuais e codificações.',
    highlighted: 'Projetos',
    highlightedTitle: 'Projetos Destacados',
    highlightedDesc: 'Alguns dos nossos projetos mais representativos na grande mineração.',
    viewDetails: 'Ver Detalhes',
    portfolio: 'Portfólio',
    featuredProjects: 'Trajetória de Projetos',
    projectsDesc: 'Mais de 20 projetos executados para a grande mineração e indústria desde 2017.',
    engineeringDev: 'Desenvolvimento de Engenharia Próprio (via CHKING)',
    counterpartReview: 'Contraparte / Revisão (via CHKING)',
    colYear: 'Ano',
    colProject: 'Projeto',
    colClient: 'Cliente',
    colCompany: 'Empresa Líder',
    services: 'Serviços',
    servicesTitle: 'Soluções Especializadas',
    servicesDesc: 'Oferecemos serviços arquitetônicos integrais projetados especificamente para projetos de engenharia, instalações industriais e operações de mineração em grande escala.',
    servicesList: [
      'Master Plan de Arquitetura para estudo de Instalações e Canteiros',
      'Edificação e remodelação de espaços chave como Escritórios e Vestiários',
      'Salas de Controle, de Servidores, Elétricas e Técnicas',
      'Edificação técnica para RESPEL, Armazenamento e Truck Shops',
      'Revisão de contraparte de plantas e documentos',
      'Supervisão de Campo de execução e avanços'
    ],
    yearsExp: 'Anos de Experiência',
    contact: 'Contato',
    contactTitle: 'Vamos Construir Juntos',
    contactDesc: 'Pronto para iniciar seu próximo projeto de infraestrutura industrial ou de mineração? Entre em contato conosco para uma consulta.',
    formName: 'Nome',
    formEmail: 'E-mail',
    formProject: 'Tipo de Projeto',
    formMessage: 'Mensagem',
    formPlaceholderName: 'Seu nome completo',
    formPlaceholderEmail: 'email@exemplo.com',
    formPlaceholderMessage: 'Conte-nos sobre seu projeto...',
    formProjectTypes: [
      'Instalação Industrial',
      'Infraestrutura de Mineração',
      'Salas de Controle',
      'Expansão de Planta',
      'Outro'
    ],
    submitMessage: 'Enviar Mensagem',
        intranet: 'Acesso da Equipe',
    allRights: 'Todos os direitos reservados',
    description: 'Especialistas em soluções de engenharia'
  },
  zh: {
    nav: ['首页', '关于', '服务', '项目', '联系'],
    tagline: '为您的运营提供技术建筑解决方案',
    heroTitle1: '建筑专家',
    heroTitle2: '工程项目',
    heroDesc: '我们是一家作为您外包建筑学科运营的技术办公室。我们融入您的项目团队，采用您的编码和交付标准，开发与机械、电气、仪表和土建学科协调的技术文件和施工解决方案。',
    heroSubdesc: '我们不仅设计空间；我们根据要求开发建筑，强调详细工程，使您的工业资产以最高标准运行。',
    viewProjects: '查看项目',
    contactUs: '联系我们',
    about: '关于我们',
    aboutTitle: '工程公司技术建筑咨询',
    aboutSubtitle: '10多年的专业经验，将建筑作为采矿和工业项目中的关键学科进行整合。',
    aboutText1: '我们是一家专门从事大型采矿和工业基础设施开发的办公室。我们的不同之处在于，我们不仅将建筑视为审美目的，而且作为必须响应您流程的生产、安全和维护要求的关键运营组件。',
    aboutText2: '我们理解工程语言。我们的工作与结构、电气、机械和PMO专业流畅集成，确保交付成果无干扰、与客户编码标准兼容并针对资产生命周期进行优化。',
    pillar1Title: '流程重点',
    pillar1Desc: '我们从生产流程的逻辑出发进行设计。每平方米都经过规划，以促进运营、人员流动和服务连续性。',
    pillar2Title: '规范严谨',
    pillar2Desc: '精通大型采矿和工业的法规和安全标准。我们交付完整的文件以获得执行所需的批准。',
    pillar3Title: '多学科协调',
    pillar3Desc: '我们使用Revit/BIM工作，按照您项目要求的格式和编码交付协调模型。我们与结构、机械、电气和仪表学科集成，不产生干扰或返工。',
    pillar4Title: '灵活模式',
    pillar4Desc: '仅在您的项目需要时访问专业建筑团队。无永久开销，随时可用的能力来满足您的截止日期，并融入您的内部手册和编码流程。',
    highlighted: '项目',
    highlightedTitle: '精选项目',
    highlightedDesc: '我们在大型采矿领域最具代表性的部分项目。',
    viewDetails: '查看详情',
    portfolio: '项目组合',
    featuredProjects: '项目履历',
    projectsDesc: '自2017年以来为大型采矿和工业执行了20多个项目。',
    engineeringDev: '自有工程开发 (via CHKING)',
    counterpartReview: '对方/审查 (via CHKING)',
    colYear: '年份',
    colProject: '项目',
    colClient: '客户',
    colCompany: '领头公司',
    services: '服务',
    servicesTitle: '专业解决方案',
    servicesDesc: '我们提供专门为工程项目、工业设施和大型采矿作业设计的全面建筑服务。',
    servicesList: [
      '工地和设施研究建筑总体规划',
      '关键空间的建设和改造，如办公室和更衣室',
      '控制室、服务器室、电气室和技术室',
      'HAZMAT、仓储和卡车车间的技术建设',
      '图纸和文件的对方审查',
      '现场执行和进度监督'
    ],
    yearsExp: '年经验',
    contact: '联系方式',
    contactTitle: '让我们一起建设',
    contactDesc: '准备开始您的下一个工业或采矿基础设施项目了吗？请联系我们进行咨询。',
    formName: '姓名',
    formEmail: '电子邮件',
    formProject: '项目类型',
    formMessage: '信息',
    formPlaceholderName: '您的全名',
    formPlaceholderEmail: 'email@example.com',
    formPlaceholderMessage: '告诉我们您的项目...',
    formProjectTypes: [
      '工业设施',
      '采矿基础设施',
      '控制室',
      '工厂扩建',
      '其他'
    ],
    submitMessage: '发送消息',
        intranet: '团队访问',
    allRights: '版权所有',
    description: '工程解决方案专家'
  }
};

const engineeringProjects = [
  { year: '2025', project: 'Servicio Ingeniería IPS/SPS Proyecto Minero Las Yacas', client: 'LAS YACAS' },
  { year: '2025', project: 'Ingeniería Remediación Edificio CHO - Puerto Coloso (Delivery)', client: 'BHP-COLOSO' },
  { year: '2024', project: 'Ingeniería SPS/DPS Facilities E-AT Stripping', client: 'BHP-MEL' },
  { year: '2024', project: 'AS Built EN-AT - Facilities Autonomía MEL', client: 'BHP-MEL' },
  { year: '2023', project: 'Edificio Puerta Sur', client: 'MECASFY' },
  { year: '2022', project: 'Ingeniería Interim Facilities Autonomía MEL', client: 'BHP-MEL' },
  { year: '2022', project: 'Ingeniería DPS EN-AT', client: 'BHP-MEL' },
  { year: '2021', project: 'Logistic Solutions', client: 'BHP-MEL' },
  { year: '2019', project: 'Flowsheets 3D de Procesos', client: 'BHP-MEL' },
  { year: '2019', project: 'Idea Campamento Cerro Colorado', client: 'BHP - C. COLORADO' },
  { year: '2019', project: 'Ampliación Oficinas MECASFY', client: 'MECASFY' },
  { year: '2018', project: 'Garita de Accesos Cerro Colorado', client: 'BHP - C. COLORADO' },
  { year: '2018', project: 'Diagramas de Flujo Cal Alianza', client: 'CAL ALIANZA' },
];

const counterpartProjects = [
  { year: '2023', project: 'ILNSC - Innovación Lixiviación Nuevas Columnas de Simulación', company: 'HATCH' },
  { year: '2019', project: 'Bodega y Muestrera - Spence Growth Options', company: 'ARCADIS' },
  { year: '2018', project: 'Sala de Control Lixiviación - Spence Growth Options', company: 'ATCO' },
  { year: '2017', project: 'Instalaciones Auxiliares (Truckshop, RESPEL, etc.) - Spence Growth Options', company: 'ARCADIS' },
];

const featuredProjectsData = [
  {
    id: 1,
    title: 'Ingeniería SPS/DPS Facilities E-AT Stripping',
    client: 'BHP-MEL',
    year: '2022-2024',
    description: 'Desarrollo de arquitectura para las Facilities del programa de Camiones Autónomos (EN-AT) en Minera Escondida. El proyecto requirió diseñar con criterio estético las instalaciones de soporte para la operación autónoma, incluyendo la Sala de Control de Perforadoras con piso técnico elevado, revestimientos de madera en pilares y muros, estaciones de monitoreo multiscreen, climatización de precisión y señalética normativa. Se desarrolló ingeniería Interim con diseños aptos para construcción, definiendo distribución interior, accesos, iluminación técnica y requerimientos constructivos de cada facility.',
    credits: [
      { role: 'Arquitectura', company: 'A4E' },
      { role: 'Ingeniería', company: 'CHKING' },
    ],
    image: '/facilities-enat.jpg',
  },
  {
    id: 2,
    title: 'Ingeniería Remediación Edificio CHO',
    client: 'BHP-COLOSO',
    year: '2025',
    description: 'Definición arquitectónica y habilitación de espacios para la Remediación del Edificio CHO en Puerto Coloso. El proyecto contempló la reconversión de todo el edificio (420 m²) en una instalación técnica de alta disponibilidad, incluyendo distribución interna, accesos, sala técnica para equipos eléctricos, UPS, oficinas, espacios de CoWork y mejoras generales arquitectónicas en cielos, mobiliario y otras adecuaciones.',
    credits: [
      { role: 'Arquitectura', company: 'A4E' },
      { role: 'Ingeniería', company: 'CHKING' },
      { role: 'Mobiliario', company: '3D Concept' },
    ],
    image: '/edificio-cho.jpg',
  },
  {
    id: 3,
    title: 'Flowsheets 3D de Procesos',
    client: 'BHP-MEL',
    year: '2019',
    description: 'Desarrollo de diagramas de flujo tridimensionales para la visualización de sistemas y procesos completos. El proyecto respondió a la necesidad de reemplazar los esquemas 2D tradicionales por representaciones 3D interactivas que permiten identificar equipos, correas transportadoras, silos y stockpiles con mayor claridad operacional, facilitando la toma de decisiones en terreno y la comunicación entre disciplinas.',
    credits: [
      { role: 'Desarrollo', company: 'A4E' },
    ],
    image: '/flowsheet-3d.jpg',
  },
  {
    id: 4,
    title: 'Propuesta Garita Acceso Cerro Colorado',
    client: 'BHP - C. COLORADO',
    year: '2018',
    description: 'Propuesta arquitectónica para garita de acceso en faena minera Cerro Colorado. El diseño se resolvió mediante un sistema modular basado en contenedores marítimos reciclados con estructura metálica expuesta en color corporativo, cubierta inclinada de zinc-alum con cerchas reticuladas a la vista, celosías verticales de acero para ventilación y control solar, rampa de acceso universal con barandas normativas y piso técnico elevado. La solución priorizó rapidez de montaje, transportabilidad y resistencia a condiciones climáticas extremas del desierto de Atacama.',
    credits: [
      { role: 'Arquitectura', company: 'A4E' },
    ],
    image: '/garita-cerro-colorado.jpg',
  },
  {
    id: 5,
    title: 'Proyecto Minero Las Yacas',
    client: 'LAS YACAS',
    year: '2025',
    description: 'Servicio de ingeniería IPS/SPS para nuevo proyecto minero Las Yacas, desarrollo integral de infraestructura y espacios técnicos.',
    image: null,
  },
  {
    id: 6,
    title: 'ILNSC - Columnas de Simulación',
    client: 'HATCH',
    year: '2023',
    description: 'Revisión de contraparte de ingeniería para el proyecto de Innovación en Lixiviación con Nuevas Columnas de Simulación.',
    image: null,
  },
];

const FeaturedProjectCard = ({ project, index, t }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`group relative bg-white overflow-hidden transition-all duration-700 hover:shadow-2xl ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
    >
      {/* Image */}
      <div className={`relative bg-gradient-to-br from-neutral-100 to-neutral-200 overflow-hidden cursor-pointer transition-all duration-500 ${
        isExpanded ? 'h-72 md:h-96' : 'h-52'
      }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {project.image ? (
          <img src={project.image} alt={project.title} className={`w-full h-full transition-all duration-500 ${
            isExpanded ? 'object-contain bg-white' : 'object-cover'
          }`} />
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
        <h3 className="text-lg font-medium text-neutral-900 mb-2 leading-tight">{project.title}</h3>
        <div className={`transition-all duration-500 overflow-hidden ${
          isExpanded ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
        }`}>
          <p className="text-sm text-neutral-500 leading-relaxed">
            {project.description}
          </p>
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
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 inline-flex items-center gap-1 text-xs text-orange-600 hover:text-orange-700 font-medium tracking-wider uppercase transition-colors"
        >
          {t.viewDetails}
          <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Bottom accent */}
      <div className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </div>
  );
};

// Logo A4E - PNG Real embebido
const A4ELogo = ({ className = "" }) => (
  <img
    src="data:image/png;base64,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"
    alt="A4E - Architecture for Engineering"
    className={className}
  />
);

// Componente Splash Screen con efecto de entrada
const SplashScreen = ({ onComplete }) => {
  const [logoVisible, setLogoVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const logoTimer = setTimeout(() => setLogoVisible(true), 400);
    const fadeTimer = setTimeout(() => setFadeOut(true), 2800);
    const completeTimer = setTimeout(() => onComplete(), 3800);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] bg-white flex items-center justify-center transition-all duration-1500 ${
      fadeOut ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
    }`}>
      {/* Logo simple y elegante */}
      <div className={`flex flex-col items-center gap-4 transition-all duration-1200 ease-out ${
        logoVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      }`}>
        <A4ELogo className="h-20 md:h-24 w-auto" style={{
          filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.08))'
        }} />

        {/* Loading dots */}
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-orange-500"
              style={{
                animation: `splash-bounce 1.4s ease-in-out infinite`,
                animationDelay: `${i * 0.16}s`
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes splash-bounce {
          0%, 80%, 100% {
            transform: scale(0);
            opacity: 0.3;
          }
          40% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
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
          <h3 className="text-sm font-normal text-neutral-800 leading-snug">
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
    { code: 'es', label: 'ES', full: 'Español', flag: '🇪🇸' },
    { code: 'en', label: 'EN', full: 'English', flag: '🇺🇸' },
    { code: 'pt', label: 'PT', full: 'Português', flag: '🇧🇷' },
    { code: 'zh', label: 'ZH', full: '中文', flag: '🇨🇳' }
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
        <div className="absolute top-full right-0 mt-2 bg-neutral-900 border border-white/20 shadow-xl min-w-[160px] z-50">
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
              <span className="text-lg">{lang.flag}</span>
              <span className="text-sm font-medium">{lang.full}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};


// Componente de partículas flotantes para el hero
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

const SectionHeader = ({ label, title, description, labelColor = "text-orange-600", titleColor = "text-neutral-900", dark = false }) => {
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
        <h2 className="text-3xl md:text-4xl text-neutral-900 font-light tracking-tight mb-8">{t.contactTitle}</h2>
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
                  hoveredItem === i ? 'text-orange-600' : 'text-neutral-800'
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
              className="w-full bg-neutral-50 border-0 border-b-2 border-neutral-200 px-4 py-3 text-neutral-800 font-light focus:outline-none focus:border-orange-500 focus:bg-orange-50/30 transition-all duration-300"
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
              className="w-full bg-neutral-50 border-0 border-b-2 border-neutral-200 px-4 py-3 text-neutral-800 font-light focus:outline-none focus:border-orange-500 focus:bg-orange-50/30 transition-all duration-300"
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
              className="w-full bg-neutral-50 border-0 border-b-2 border-neutral-200 px-4 py-3 text-neutral-800 font-light focus:outline-none focus:border-orange-500 focus:bg-orange-50/30 transition-all duration-300 resize-none"
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-neutral-900 font-light tracking-tight mb-6">{t.aboutTitle}</h2>
          <p className="text-orange-600 font-medium text-lg mb-8">{t.aboutSubtitle}</p>
          <p className="text-neutral-600 font-light leading-relaxed text-base mb-4">{t.aboutText1}</p>
          <p className="text-neutral-600 font-light leading-relaxed text-base">{t.aboutText2}</p>
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

                  <p className={`text-sm leading-relaxed transition-colors duration-300 ${
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
            <A4ELogo className="h-10 w-auto" />
          </div>

          <div className={`hidden md:block flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-8 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} />

          <div className="flex items-center gap-6">
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
              © 2025 A4E. {t.allRights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function A4ELanding() {
  const [showSplash, setShowSplash] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [lang, setLang] = useState('es');
  const [scrollY, setScrollY] = useState(0);

  const t = translations[lang];

  useEffect(() => {
    // Hero starts fading in right after splash completes
    const timer = setTimeout(() => setHeroVisible(true), showSplash ? 3900 : 300);
    return () => clearTimeout(timer);
  }, [showSplash]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mostrar splash screen al cargar
  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen bg-neutral-900 antialiased scroll-smooth" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrollY > 100
          ? 'translate-y-0 bg-neutral-900/80 backdrop-blur-lg shadow-lg shadow-black/20 py-3'
          : '-translate-y-full bg-neutral-900/70 backdrop-blur-md py-4'
      } border-b border-white/10`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <A4ELogo className={`w-auto transition-all duration-300 ${scrollY > 50 ? 'h-8' : 'h-10'}`} />

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

      {/* Sección de Inicio con Logo - Elegante */}
      <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
        {/* Elementos decorativos modernos */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Líneas diagonales elegantes */}
          <div className={`absolute top-0 right-0 w-px h-64 bg-gradient-to-b from-transparent via-orange-500/10 to-transparent transform rotate-45 origin-top transition-all duration-1000 delay-200 ${
            heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`} style={{ right: '20%' }} />
          <div className={`absolute bottom-0 left-0 w-px h-64 bg-gradient-to-b from-transparent via-orange-500/10 to-transparent transform -rotate-45 origin-bottom transition-all duration-1000 delay-300 ${
            heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`} style={{ left: '25%' }} />

          {/* Puntos decorativos */}
          <div className={`absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-orange-500/20 transition-all duration-1000 delay-400 ${
            heroVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`} />
          <div className={`absolute bottom-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-orange-500/15 transition-all duration-1000 delay-500 ${
            heroVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`} />
          <div className={`absolute top-1/2 right-1/4 w-1 h-1 rounded-full bg-orange-500/10 transition-all duration-1000 delay-600 ${
            heroVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`} />
        </div>

        <div className="relative z-10 flex flex-col items-center px-6">
          {/* Logo con efecto de resplandor y floating */}
          <div
            className={`relative transition-all duration-1500 ease-out ${
              heroVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-12'
            }`}
            style={{
              animation: heroVisible ? 'float 6s ease-in-out infinite' : 'none'
            }}
          >
            {/* Resplandor detrás del logo */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-orange-600/20 to-orange-500/20 blur-3xl opacity-50 scale-110" />

            <A4ELogo className="h-64 md:h-80 lg:h-96 w-auto relative z-10 drop-shadow-2xl" />
          </div>

          {/* Línea decorativa con animación */}
          <div className="relative mt-16 w-full max-w-2xl flex items-center justify-center">
            <div
              className={`h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent transition-all duration-1500 delay-500 ${
                heroVisible ? 'w-full opacity-100 scale-x-100' : 'w-0 opacity-0 scale-x-0'
              }`}
            />
            <div
              className={`absolute w-3 h-3 bg-orange-500 rounded-full transition-all duration-1000 delay-700 ${
                heroVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}
              style={{
                boxShadow: '0 0 20px rgba(234, 88, 12, 0.5)'
              }}
            />
          </div>

          {/* Tagline con efecto elegante */}
          <p
            className={`mt-12 text-neutral-800 text-base md:text-lg tracking-[0.4em] uppercase font-medium transition-all duration-1500 delay-900 ${
              heroVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-12 blur-sm'
            }`}
          >
            Architecture for Engineering
          </p>
        </div>

        {/* Botón de scroll con efecto */}
        <button
          onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer group transition-all duration-700 delay-1200 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl group-hover:bg-orange-500/30 transition-all" />
            <ChevronDown className="w-8 h-8 text-orange-500/70 group-hover:text-orange-500 transition-all relative z-10 animate-bounce" />
          </div>
        </button>

        {/* Estilos de animación */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}</style>
      </section>

      <section id="home" className={`relative min-h-screen flex items-center overflow-hidden transition-all duration-[2000ms] ease-out ${heroVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-600 to-orange-700" />

        {/* Efecto de onda animado */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 70px)',
            animation: 'wave 20s linear infinite',
          }} />
        </div>
        <style jsx>{`
          @keyframes wave {
            0% { transform: translateX(0) translateY(0); }
            100% { transform: translateX(-70px) translateY(70px); }
          }
          @keyframes loading-bounce {
            0%, 80%, 100% {
              transform: scale(0);
              opacity: 0.3;
            }
            40% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}</style>

        {/* Resplandor dinámico */}
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-orange-400 rounded-full blur-[120px] opacity-30 animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-orange-500 rounded-full blur-[120px] opacity-20 animate-pulse delay-1000" style={{animationDelay: '2s'}} />

        {/* Partículas flotantes */}
        <FloatingParticles />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-1/4 -right-1/4 w-1/2 h-full bg-neutral-900/10 transform rotate-12"
            style={{ transform: `rotate(12deg) translateY(${scrollY * 0.1}px)` }}
          />

          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div
          className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full"
        >
          <div className="max-w-3xl">
            <div className={`transition-all duration-[2500ms] ease-out ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <span className="inline-block text-white/90 text-xs tracking-[0.25em] uppercase mb-6 font-medium">
                {t.tagline}
              </span>
            </div>

            <h1 className={`text-5xl md:text-6xl lg:text-7xl text-white font-light tracking-tight leading-none mb-8 transition-all duration-[2500ms] delay-[600ms] ease-out ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              {t.heroTitle1}
              <br />
              <span className="font-normal">{t.heroTitle2}</span>
            </h1>

            <p className={`text-white/90 text-lg font-light max-w-xl mb-4 leading-relaxed transition-all duration-[2500ms] delay-[1200ms] ease-out ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              {t.heroDesc}
            </p>

            <p className={`text-white/70 text-sm font-light max-w-lg mb-10 transition-all duration-[2500ms] delay-[1800ms] ease-out ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              {t.heroSubdesc}
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-[2500ms] delay-[2400ms] ease-out ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center justify-center gap-3 bg-neutral-900 text-white px-8 py-4 text-xs tracking-widest uppercase font-medium hover:bg-neutral-800 transition-all duration-300"
              >
                {t.viewProjects}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 text-xs tracking-widest uppercase font-medium hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                {t.contactUs}
              </a>
            </div>
          </div>
        </div>

        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        >
          <ChevronDown className="w-5 h-5 text-white/40 hover:text-white transition-colors" />
        </button>
      </section>

      {/* Video BIM entre Hero y Nosotros */}
      <div className="relative w-full h-64 md:h-96 overflow-hidden">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/30 via-transparent to-neutral-900/30" />
      </div>

      <AboutSection t={t} />

      <section id="services" className="relative py-20 md:py-28 bg-neutral-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ServicesContent t={t} />
            <ServicesVisual t={t} />
          </div>
        </div>
      </section>

      <section id="projects" className="relative py-20 md:py-28 bg-neutral-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <SectionHeader
            label={t.highlighted}
            title={t.highlightedTitle}
            description={t.highlightedDesc}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjectsData.map((project, index) => (
              <FeaturedProjectCard key={project.id} project={project} index={index} t={t} />
            ))}
          </div>
        </div>
      </section>

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

          {/* Tabla 1: Desarrollo de Ingeniería Propio */}
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

          {/* Tabla 2: Contraparte / Revisión */}
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
