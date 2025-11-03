// Navegación móvil
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Cerrar menú al hacer click en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ==================== SELECTOR DE IDIOMAS ====================
let currentLanguage = localStorage.getItem('language') || 'es';

// Traducciones para proyectos
const translations = {
    es: {
        // Proyectos
        'asworking-title': 'AsWorking - Sistema de Inventario y Ventas',
        'asworking-desc': 'Aplicativo completo para gestión de inventario y control de ventas de prendas de vestir. Automatiza el registro de productos, control de stock, generación de ventas y reportes analíticos.',
        'asworking-problem': '<strong>Problema resuelto:</strong> Eliminó el control manual en Excel que generaba errores de inventario y pérdida de información de ventas.',
        'asworking-feat1': 'Control de inventario en tiempo real',
        'asworking-feat2': 'Gestión de ventas y facturación',
        'asworking-feat3': 'Reportes y análisis de datos',
        'asworking-feat4': 'Alertas de stock mínimo',
        
        'cotrasena-title': 'Cotrasena - Gestión de Préstamos Cooperativa',
        'cotrasena-desc': 'Sistema integral para cooperativa de préstamos que gestiona toda la información crediticia, controla plazos de pago, genera recordatorios automáticos y calcula intereses.',
        'cotrasena-problem': '<strong>Problema resuelto:</strong> Reemplazó hojas de cálculo descentralizadas que dificultaban el seguimiento de préstamos y sus estados de pago.',
        'cotrasena-feat1': 'Gestión completa de préstamos',
        'cotrasena-feat2': 'Control de plazos y cuotas',
        'cotrasena-feat3': 'Recordatorios automáticos',
        'cotrasena-feat4': 'Cálculo de intereses y mora',
        
        'gestion-title': 'Gestión Ancianatos - Control de Residencias',
        'gestion-desc': 'Plataforma integral para la gestión de centros geriátricos que permite el registro completo de residentes, control de actividades diarias, seguimiento médico y gestión administrativa.',
        'gestion-problem': '<strong>Problema resuelto:</strong> Digitalizó el registro físico en papel que dificultaba el acceso rápido a información crítica de los residentes.',
        'gestion-feat1': 'Registro de residentes y familiares',
        'gestion-feat2': 'Control de actividades diarias',
        'gestion-feat3': 'Seguimiento médico y medicamentos',
        'gestion-feat4': 'Gestión de ingresos y egresos',
        
        'juridica-title': 'Sistema Jurídico - Gestión de Procesos Legales',
        'juridica-desc': 'Aplicativo especializado para bufetes de abogados que gestiona procesos legales, demandas, tutelas, términos judiciales y genera recordatorios automáticos de vencimientos.',
        'juridica-problem': '<strong>Problema resuelto:</strong> Eliminó el riesgo de perder términos judiciales que antes se controlaban manualmente en agendas físicas y Excel.',
        'juridica-feat1': 'Gestión de casos y procesos',
        'juridica-feat2': 'Control de plazos judiciales',
        'juridica-feat3': 'Recordatorios automáticos',
        'juridica-feat4': 'Gestión documental',
        
        'pei-title': 'PEI - Seguimiento Instituciones Educativas',
        'pei-desc': 'Plataforma gubernamental para hacer seguimiento y gestión de requerimientos y peticiones de instituciones educativas, facilitando la comunicación entre el gobierno y los centros educativos.',
        'pei-problem': '<strong>Problema resuelto:</strong> Centralizó la comunicación que antes se manejaba por correos y documentos físicos dispersos.',
        'pei-feat1': 'Registro de instituciones educativas',
        'pei-feat2': 'Gestión de requerimientos',
        'pei-feat3': 'Seguimiento de peticiones',
        'pei-feat4': 'Reportes gubernamentales',
        
        'sumale-title': 'Súmale - Convenios Universitarios Estatales',
        'sumale-desc': 'Plataforma que permite a estudiantes postularse a convenios de universidades pagadas por el estado, gestionando todo el proceso de inscripción, validación, seguimiento y control de beneficiarios.',
        'sumale-problem': '<strong>Problema resuelto:</strong> Automatizó el proceso de inscripción que se hacía manualmente con formularios físicos y validación en Excel.',
        'sumale-feat1': 'Registro de estudiantes',
        'sumale-feat2': 'Validación de requisitos',
        'sumale-feat3': 'Seguimiento de convenios',
        'sumale-feat4': 'Control de beneficiarios',
        
        'sisben-title': 'SISBEN - Registro de Clasificación Socioeconómica',
        'sisben-desc': 'Sistema para la sisbenización de familias colombianas, permitiendo el registro completo de personas, sus hogares y núcleos familiares para determinar clasificación socioeconómica.',
        'sisben-problem': '<strong>Problema resuelto:</strong> Digitalizó el proceso de encuestas físicas que generaban errores de transcripción y demoras en la clasificación.',
        'sisben-feat1': 'Registro de personas y hogares',
        'sisben-feat2': 'Gestión de núcleos familiares',
        'sisben-feat3': 'Clasificación socioeconómica',
        'sisben-feat4': 'Reportes estadísticos',
        
        'taxis-title': 'Cooperativa de Taxis - Gestión Integral',
        'taxis-desc': 'Plataforma para cooperativa de taxis que gestiona conductores, vehículos, documentación, renovaciones de papeles y alertas de vencimientos para mantener la flota al día legalmente.',
        'taxis-problem': '<strong>Problema resuelto:</strong> Eliminó el control en carpetas físicas que ocasionaba multas por documentos vencidos y desorganización administrativa.',
        'taxis-feat1': 'Registro de conductores y vehículos',
        'taxis-feat2': 'Control de documentación',
        'taxis-feat3': 'Alertas de vencimientos',
        'taxis-feat4': 'Gestión de renovaciones',
        
        'ficha-title': 'Sistema de Fichas - Gestión Documental',
        'ficha-desc': 'Aplicativo para la gestión y control de fichas y documentación, permitiendo el registro organizado, búsqueda rápida y seguimiento de información importante.',
        'ficha-problem': '<strong>Problema resuelto:</strong> Digitalizó archivos físicos que dificultaban la búsqueda y acceso a información histórica.',
        'ficha-feat1': 'Registro de fichas',
        'ficha-feat2': 'Búsqueda avanzada',
        'ficha-feat3': 'Gestión documental',
        'ficha-feat4': 'Control de versiones',
    },
    en: {
        // Proyectos
        'asworking-title': 'AsWorking - Inventory and Sales System',
        'asworking-desc': 'Complete application for inventory management and clothing sales control. Automates product registration, stock control, sales generation, and analytical reports.',
        'asworking-problem': '<strong>Problem solved:</strong> Eliminated manual Excel control that generated inventory errors and loss of sales information.',
        'asworking-feat1': 'Real-time inventory control',
        'asworking-feat2': 'Sales and billing management',
        'asworking-feat3': 'Reports and data analysis',
        'asworking-feat4': 'Low stock alerts',
        
        'cotrasena-title': 'Cotrasena - Cooperative Loan Management',
        'cotrasena-desc': 'Comprehensive system for loan cooperative that manages all credit information, controls payment terms, generates automatic reminders, and calculates interest.',
        'cotrasena-problem': '<strong>Problem solved:</strong> Replaced decentralized spreadsheets that made it difficult to track loans and their payment statuses.',
        'cotrasena-feat1': 'Complete loan management',
        'cotrasena-feat2': 'Payment terms and installments control',
        'cotrasena-feat3': 'Automatic reminders',
        'cotrasena-feat4': 'Interest and late fee calculation',
        
        'gestion-title': 'Nursing Home Management - Residence Control',
        'gestion-desc': 'Comprehensive platform for managing geriatric centers that allows complete registration of residents, control of daily activities, medical monitoring, and administrative management.',
        'gestion-problem': '<strong>Problem solved:</strong> Digitized physical paper records that made it difficult to quickly access critical resident information.',
        'gestion-feat1': 'Registration of residents and relatives',
        'gestion-feat2': 'Daily activities control',
        'gestion-feat3': 'Medical and medication tracking',
        'gestion-feat4': 'Income and expenses management',
        
        'juridica-title': 'Legal System - Legal Process Management',
        'juridica-desc': 'Specialized application for law firms that manages legal processes, lawsuits, writs, judicial terms, and generates automatic reminders of deadlines.',
        'juridica-problem': '<strong>Problem solved:</strong> Eliminated the risk of missing judicial terms that were previously manually controlled in physical agendas and Excel.',
        'juridica-feat1': 'Case and process management',
        'juridica-feat2': 'Judicial deadlines control',
        'juridica-feat3': 'Automatic reminders',
        'juridica-feat4': 'Document management',
        
        'pei-title': 'PEI - Educational Institutions Monitoring',
        'pei-desc': 'Government platform for monitoring and managing requirements and requests from educational institutions, facilitating communication between the government and educational centers.',
        'pei-problem': '<strong>Problem solved:</strong> Centralized communication that was previously handled through scattered emails and physical documents.',
        'pei-feat1': 'Educational institutions registration',
        'pei-feat2': 'Requirements management',
        'pei-feat3': 'Requests tracking',
        'pei-feat4': 'Government reports',
        
        'sumale-title': 'Súmale - State University Agreements',
        'sumale-desc': 'Platform that allows students to apply for state-funded university agreements, managing the entire registration, validation, monitoring, and beneficiary control process.',
        'sumale-problem': '<strong>Problem solved:</strong> Automated the registration process that was manually done with physical forms and Excel validation.',
        'sumale-feat1': 'Student registration',
        'sumale-feat2': 'Requirements validation',
        'sumale-feat3': 'Agreement tracking',
        'sumale-feat4': 'Beneficiary control',
        
        'sisben-title': 'SISBEN - Socioeconomic Classification Registry',
        'sisben-desc': 'System for the classification of Colombian families, allowing complete registration of people, their homes, and family units to determine socioeconomic classification.',
        'sisben-problem': '<strong>Problem solved:</strong> Digitized the physical survey process that generated transcription errors and classification delays.',
        'sisben-feat1': 'Registration of people and households',
        'sisben-feat2': 'Family unit management',
        'sisben-feat3': 'Socioeconomic classification',
        'sisben-feat4': 'Statistical reports',
        
        'taxis-title': 'Taxi Cooperative - Comprehensive Management',
        'taxis-desc': 'Platform for taxi cooperative that manages drivers, vehicles, documentation, paper renewals, and expiration alerts to keep the fleet legally up to date.',
        'taxis-problem': '<strong>Problem solved:</strong> Eliminated control in physical folders that caused fines for expired documents and administrative disorganization.',
        'taxis-feat1': 'Driver and vehicle registration',
        'taxis-feat2': 'Documentation control',
        'taxis-feat3': 'Expiration alerts',
        'taxis-feat4': 'Renewal management',
        
        'ficha-title': 'Records System - Document Management',
        'ficha-desc': 'Application for managing and controlling records and documentation, allowing organized registration, quick search, and tracking of important information.',
        'ficha-problem': '<strong>Problem solved:</strong> Digitized physical archives that made it difficult to search and access historical information.',
        'ficha-feat1': 'Record registration',
        'ficha-feat2': 'Advanced search',
        'ficha-feat3': 'Document management',
        'ficha-feat4': 'Version control',
    }
};

function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Actualizar botones de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Actualizar elementos con data-es y data-en
    document.querySelectorAll('[data-es][data-en]').forEach(element => {
        const esText = element.getAttribute('data-es');
        const enText = element.getAttribute('data-en');
        
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            // Para inputs y textareas, cambiar el placeholder
            const esPlaceholder = element.getAttribute('data-placeholder-es');
            const enPlaceholder = element.getAttribute('data-placeholder-en');
            if (esPlaceholder && enPlaceholder) {
                element.placeholder = lang === 'es' ? esPlaceholder : enPlaceholder;
            }
        } else if (element.tagName === 'BUTTON' || element.tagName === 'A') {
            // Para botones y enlaces, cambiar el texto
            element.textContent = lang === 'es' ? esText : enText;
        } else if (element.tagName === 'H1' && element.querySelector('.highlight')) {
            // Para el título hero con span
            const prefix = lang === 'es' ? 'Hola, soy ' : 'Hi, I\'m ';
            element.innerHTML = prefix + '<span class="highlight">David Andrés López Rivas</span>';
        } else {
            // Para otros elementos, cambiar innerHTML
            element.innerHTML = lang === 'es' ? esText : enText;
        }
    });
    
    // Actualizar traducciones de proyectos
    updateProjectTranslations(lang);
}

function updateProjectTranslations(lang) {
    const projects = [
        'asworking', 'cotrasena', 'gestion', 'juridica', 
        'pei', 'sumale', 'sisben', 'taxis', 'ficha'
    ];
    
    projects.forEach(project => {
        // Título
        const titleEl = document.querySelector(`[data-project="${project}-title"]`);
        if (titleEl) titleEl.textContent = translations[lang][`${project}-title`];
        
        // Descripción
        const descEl = document.querySelector(`[data-project="${project}-desc"]`);
        if (descEl) descEl.textContent = translations[lang][`${project}-desc`];
        
        // Problema
        const problemEl = document.querySelector(`[data-project="${project}-problem"]`);
        if (problemEl) problemEl.innerHTML = translations[lang][`${project}-problem`];
        
        // Features
        for (let i = 1; i <= 4; i++) {
            const featEl = document.querySelector(`[data-project="${project}-feat${i}"]`);
            if (featEl) featEl.innerHTML = '<i class="fas fa-check"></i> ' + translations[lang][`${project}-feat${i}`];
        }
    });
}

// Event listeners para botones de idioma
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        changeLanguage(btn.dataset.lang);
    });
});

// Aplicar idioma guardado al cargar
window.addEventListener('load', () => {
    changeLanguage(currentLanguage);
});
// ==================== FIN SELECTOR DE IDIOMAS ====================

// Cambiar estilo del navbar al hacer scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '0.5rem 0';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.padding = '1rem 0';
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    }
});

// Animación de contadores en la sección "Sobre Mí"
const animateCounters = () => {
    const counters = document.querySelectorAll('.stat-card h3');
    
    counters.forEach(counter => {
        const target = counter.textContent;
        const isPlus = target.includes('+');
        const isPercent = target.includes('%');
        const number = parseInt(target);
        
        let current = 0;
        const increment = number / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= number) {
                counter.textContent = number + (isPlus ? '+' : '') + (isPercent ? '%' : '');
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current) + (isPlus ? '+' : '') + (isPercent ? '%' : '');
            }
        }, 30);
    });
};

// Observer para animaciones al hacer scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Animar contadores cuando la sección sea visible
            if (entry.target.classList.contains('about')) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        }
    });
}, {
    threshold: 0.1
});

// Observar elementos para animación
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});

// Carrusel de imágenes de proyectos
document.querySelectorAll('.project-card').forEach(card => {
    const images = card.querySelectorAll('.project-images img');
    let currentIndex = 0;

    if (images.length > 1) {
        setInterval(() => {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        }, 3000);
    }
});

// Smooth scroll para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Formulario de contacto
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Aquí puedes agregar la lógica para enviar el formulario
        alert('¡Gracias por tu mensaje! Te contactaré pronto.');
        contactForm.reset();
    });
}

// Efecto parallax suave en el hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < hero.offsetHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Efecto de typing en el título (opcional)
const typeWriter = (element, text, speed = 100) => {
    let i = 0;
    element.textContent = '';
    
    const type = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    };
    
    type();
};

// Activar el efecto typing cuando la página carga
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero h1 .highlight');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }
});

// Agregar clase active al link de navegación actual
const sections = document.querySelectorAll('section');
const navLinksItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinksItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Easter egg: Konami Code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        document.body.style.animation = 'rainbow 2s linear infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// Agregar animación rainbow para el easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

console.log('%c¡Hola! 👋', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cSi estás revisando el código, ¡genial! Me encanta trabajar con personas curiosas.', 'color: #764ba2; font-size: 14px;');
console.log('%cContáctame si quieres trabajar juntos 🚀', 'color: #667eea; font-size: 14px;');