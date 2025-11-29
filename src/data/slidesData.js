// Datos de todas las diapositivas de la presentación
export const slidesData = [
  {
    id: 1,
    type: 'cover',
    title: 'Puntos Gold',
    subtitle: 'Sistema de Fidelización para PyMEs',
    content: {
      materia: 'Técnicas de Calidad de Software',
      catedratico: 'Ing. José Guillermo Rivera',
      integrantes: [
        { nombre: 'Basil García, Abraham Natanael', carnet: '25-1409-2016' },
        { nombre: 'Borja Cano, Jennifer Alejandra', carnet: '25-3151-2021' },
        { nombre: 'Cañenguez Escobar, Marlon José', carnet: '25-1741-2020' },
        { nombre: 'Corena Hernández, David Abimael', carnet: '25-5046-2018' },
        { nombre: 'Martínez Vivas, Juan Alberto', carnet: '25-0729-2021' },
        { nombre: 'Rogel Pleites, Cesar Eduardo', carnet: '25-2768-2021' }
      ]
    }
  },
  {
    id: 2,
    type: 'intro',
    title: 'INTRODUCCIÓN',
    content: [
      'Puntos Gold es una aplicación móvil diseñada para fortalecer la fidelización de clientes en pequeñas y medianas empresas mediante un sistema moderno de recompensas.',
      'En un entorno marcado por la transformación digital, las grandes cadenas han destacado gracias a programas de puntos y beneficios; sin embargo, muchas PyMEs carecen de herramientas accesibles para competir en este ámbito.',
      'La aplicación ofrece una solución innovadora y práctica que permite a los comercios otorgar puntos por cada compra, los cuales los usuarios pueden acumular y canjear por promociones exclusivas.',
      'Puntos Gold impulsa la modernización de los comercios locales, promueve la competitividad y mejora la experiencia del cliente mediante tecnología móvil.'
    ]
  },
  {
    id: 3,
    type: 'chapter',
    title: 'Capítulo 1',
    subtitle: 'Especificación de Proyecto',
    icon: '📋'
  },
  {
    id: 4,
    type: 'content',
    title: 'Especificación de Proyecto',
    sections: [
      {
        heading: '1. Situación Actual',
        content: 'Las PyMEs enfrentan dificultades para competir con grandes cadenas que utilizan sistemas de fidelización digitales. Los métodos tradicionales como tarjetas físicas son poco prácticos y no generan una experiencia moderna. Surge así la oportunidad de implementar una solución tecnológica accesible que fortalezca la relación con los clientes y estimule la lealtad.'
      },
      {
        heading: '2. Problema e Hipótesis',
        content: 'Los negocios locales tienen baja retención de clientes debido a la ausencia de programas digitales de recompensas. Se plantea que la implementación de la app Puntos Gold permitirá aumentar la fidelización al ofrecer un sistema de puntos, canjes y promociones en tiempo real, contribuyendo a la competitividad de las PyMEs.'
      }
    ]
  },
  {
    id: 5,
    type: 'content',
    title: 'Especificación de Proyecto',
    sections: [
      {
        heading: '3. Tema del Proyecto',
        content: 'Desarrollo e implementación de una aplicación móvil multiplataforma en Flutter para gestionar programas de lealtad y promociones entre comercios y usuarios bajo la marca Puntos Gold.'
      },
      {
        heading: '4. Objetivos',
        subsections: [
          {
            title: 'General:',
            content: 'Crear una plataforma móvil sólida y escalable que centralice la administración de promociones, canjes y puntos para usuarios y negocios.'
          },
          {
            title: 'Específicos:',
            items: [
              'Implementar arquitectura modular en Flutter con backend seguro (Firebase)',
              'Desarrollar módulos para usuarios: registro, exploración de negocios, suscripciones y canje de puntos',
              'Desarrollar módulos para comercios: panel de control, creación de promociones, asignación de puntos y autorización de canjes'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 6,
    type: 'content',
    title: 'Especificación de Proyecto',
    sections: [
      {
        heading: '5. Alcances del Proyecto',
        items: [
          'Alcance 1: App móvil para usuarios con registro, visualización de puntos, promociones activas, canjes y notificaciones',
          'Alcance 2: Funciones operativas para negocios: registrar compras, asignar puntos, gestionar promociones y validar canjes',
          'Alcance 3: Integración total con Firebase para autenticación, base de datos, almacenamiento y notificaciones en tiempo real'
        ]
      },
      {
        heading: 'Limitantes:',
        content: 'Solo versión móvil (sin panel web), sin reportes avanzados, automatizaciones limitadas y Cloud Functions básicas.'
      }
    ]
  },
  {
    id: 7,
    type: 'content',
    title: 'Especificación de Proyecto',
    sections: [
      {
        heading: '6. Justificación',
        content: 'Puntos Gold ofrece una solución moderna para las PyMEs, facilitando programas de fidelización accesibles, eficientes y escalables. Flutter y Firebase permiten desarrollo rápido, menor costo, mantenimiento simple y sincronización en tiempo real. El proyecto contribuye a la transformación digital, mejora la experiencia del cliente y fortalece la competitividad de los comercios locales.'
      },
      {
        heading: '7. Cronograma y Presupuesto',
        content: 'Se presenta un plan de trabajo de julio a noviembre de 2025 y un presupuesto que asegura la viabilidad técnica, humana y económica del proyecto.'
      }
    ]
  },
  {
    id: 8,
    type: 'chapter',
    title: 'Capítulo 2',
    subtitle: 'Análisis y Diseño de la Propuesta',
    icon: '🎯'
  },
  {
    id: 9,
    type: 'content',
    title: 'Análisis y Diseño de la Propuesta',
    sections: [
      {
        heading: '1. Metodología de trabajo',
        items: [
          'Se realizó un taller de requerimientos con dueños de negocios, personal de ventas y clientes',
          'Se identificaron tres tipos de usuarios: administrador del negocio, cliente y administrador del sistema',
          'La plataforma mostrará datos mediante dashboards con gráficos y generará informes en PDF y Excel',
          'El prototipo se desarrollará con la metodología ágil Scrum, usando sprints de dos semanas'
        ]
      }
    ]
  },
  {
    id: 10,
    type: 'content',
    title: 'Análisis y Diseño de la Propuesta',
    sections: [
      {
        heading: '2. Propuesta de solución',
        content: 'Puntos Gold es una plataforma para que las PyMEs gestionen programas de fidelización mediante puntos acumulables y canjeables.',
        subsections: [
          {
            title: 'Incluye:',
            items: [
              'App móvil para clientes (iOS – SwiftUI)',
              'Panel web para negocios (.NET 8 + SQL Server)',
              'La solución busca ser simple, segura, escalable y accesible'
            ]
          }
        ]
      },
      {
        heading: '3. Tecnología disponible',
        items: [
          'SwiftUI: interfaz móvil moderna',
          '.NET 8: backend robusto y escalable',
          'SQL Server: base de datos segura',
          'JWT + Identity: autenticación y roles',
          'Azure (opcional): despliegue en la nube'
        ]
      }
    ]
  },
  {
    id: 11,
    type: 'content-grid',
    title: 'Análisis y Diseño de la Propuesta',
    columns: [
      {
        heading: '4. Evaluación tecnológica',
        items: [
          'Ventajas: rendimiento, seguridad, escalabilidad, soporte empresarial',
          'Desventajas: licencias y costos (SQL Server/Azure), limitación de SwiftUI a iOS'
        ]
      },
      {
        heading: '5. Arquitectura del sistema',
        content: 'Modelo cliente-servidor con: App móvil, API REST, Base de datos, Panel web. Permite modularidad, mantenibilidad y crecimiento futuro.'
      },
      {
        heading: '6. Componentes principales',
        items: [
          'App móvil: puntos, promociones, canjes, notificaciones',
          'Panel web: gestión de promociones, clientes, reglas y reportes',
          'Backend: lógica central, autenticación, transacciones',
          'Base de datos: usuarios, compras, puntos, promociones',
          'Sistema de seguridad: roles y tokens seguros',
          'Infraestructura en Azure: escalabilidad y disponibilidad'
        ]
      }
    ]
  },
  {
    id: 12,
    type: 'chapter',
    title: 'Capítulo 3',
    subtitle: 'Estrategia de Implementación',
    icon: '⚙️'
  },
  {
    id: 13,
    type: 'content',
    title: 'Estrategia de Implementación',
    sections: [
      {
        heading: '1. Estrategia de Implementación',
        content: 'La implementación se desarrolla en fases estratégicas con metodología ágil Scrum:',
        subsections: [
          {
            title: 'Fase 1 – Planificación',
            content: 'Definición de requerimientos, roles, cronograma y configuración de entornos (GitHub/Azure DevOps)'
          },
          {
            title: 'Fase 2 – Desarrollo del prototipo',
            content: 'Construcción de la app en Flutter, integración con Firebase, creación del backend en .NET 8 y conexión a SQL Server'
          },
          {
            title: 'Fase 3 – Pruebas y validación',
            content: 'Pruebas unitarias, integración y piloto con comercios reales'
          },
          {
            title: 'Fase 4 – Despliegue y mantenimiento',
            content: 'Publicación en Google Play Store, hosting en Azure, soporte y actualizaciones periódicas'
          }
        ]
      }
    ]
  },
{
  id: 14,
  type: 'content-grid',  // ← IMPORTANTE: content-grid, NO content
  title: 'Análisis de Resultados',
  columns: [             // ← columns, NO sections
    {
      heading: 'Indicadores:',
      items: [
        'Retención de clientes',
        'Frecuencia de uso',
        'Canje de promociones',
        'Satisfacción del comercio',
        'Incremento de ventas'
      ]
    },
    {
      heading: 'Resultados esperados:',
      items: [
        '+20% frecuencia de compra',
        '+15% participación en promociones',
        '-40% costo de gestión vs. métodos tradicionales',
        '+85% satisfacción del usuario'
      ]
    }
  ]
},
  {
    id: 15,
    type: 'conclusion',
    title: 'Conclusión',
    content: 'Puntos Gold representa una solución innovadora que:',
    items: [
      'Digitaliza la fidelización de clientes',
      'Fortalece la relación comercio-cliente',
      'Mejora la toma de decisiones',
      'Aumenta la competitividad de las PyMEs',
      'Impulsa la transformación digital local'
    ]
  }
];
