export default {
  global: {
    componenteFormativo: 'El servicio y la asesoría comercial',
    descripcionCurso:
      'Este componente formativo desarrolla las competencias necesarias para la comercialización efectiva de productos y servicios financieros, asegurando el cumplimiento de políticas institucionales y normatividad vigente. A través de estrategias comerciales, técnicas de venta, y asesoría basada en un profundo conocimiento normativo, los participantes podrán fortalecer su rol y contribuir al éxito de su organización.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'El servicio, pilar del desarrollo institucional',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Técnicas de venta y comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Técnicas de ventas ',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas de comunicación',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Estrategias comerciales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Calidad del servicio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Características de la calidad del servicio',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Satisfacción del cliente',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'La asesoría comercial en el contexto de la política y normatividad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'El asesor comercial, ideal de una entidad financiera',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: '<em>Tips</em> para una asesoría comercial exitosa',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Política comercial y de crédito',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Política comercial',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Política de crédito',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Normatividad',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '2.1 Técnicas de ventas',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2021). Prospección de clientes: Mercado de consumo. ',
      tipo: 'Video en línea',
      link: 'https://www.youtube.com/watch?v=7lccP3U-vbU',
    },
    {
      tema: '7. Normatividad',
      referencia:
        'Saber Más Ser Más (2012). ¿Cómo está conformado el Sistema Financiero Colombiano?. ',
      tipo: 'Video en línea',
      link: 'https://www.youtube.com/watch?v=LnjeHHhBlR8 ',
    },
  ],
  glosario: [
    {
      termino: 'Asesoría comercial',
      significado:
        'servicio proporcionado por profesionales capacitados que guía a los clientes en la selección de productos financieros adecuados a sus necesidades, dentro del marco de las políticas institucionales y normativas vigentes.',
    },
    {
      termino: 'Comercialización financiera',
      significado:
        'proceso de promoción, venta y distribución de productos y servicios financieros a clientes, asegurando que se cumplan sus necesidades y expectativas.',
    },
    {
      termino: 'Estrategias comerciales',
      significado:
        'planes y acciones diseñados para alcanzar objetivos de ventas y <em>marketing</em> en el sector financiero, enfocándose en atraer y retener clientes a través de ofertas competitivas y servicios de calidad.',
    },
    {
      termino: 'Fidelización de clientes',
      significado:
        'estrategia que busca mantener y fortalecer la relación con los clientes existentes, a través de un servicio de calidad, programas de lealtad y ofertas personalizadas, asegurando su lealtad a largo plazo.',
    },
    {
      termino: 'Normatividad financiera',
      significado:
        'conjunto de leyes, regulaciones y directrices que rigen las operaciones de las entidades financieras, asegurando la transparencia, legalidad y protección de los consumidores.',
    },
    {
      termino: 'Política comercial',
      significado:
        'conjunto de directrices que rigen la forma en que una entidad financiera ofrece sus productos y servicios, estableciendo estándares para la interacción con los clientes y la competencia en el mercado.',
    },
    {
      termino: 'Política de crédito',
      significado:
        'normas y procedimientos que regulan la concesión de créditos en una entidad financiera, enfocándose en la gestión del riesgo y el cumplimiento de criterios para asegurar la viabilidad y rentabilidad de las operaciones crediticias.',
    },
  ],
  referencias: [
    {
      referencia: 'Gadea, J. (2018). Vendedor Ninja. Independently Published. ',
      link:
        'https://www.vendedor.ninja/las-6-cualidades-de-un-asesor-comercial-de-exito/',
    },
    {
      referencia: 'García P, E. (2021). Técnicas de venta. Paraninfo. ',
      link:
        'https://www.paraninfo.es/catalogo/9788413673172/uf0031---tecnicas-de-venta',
    },
    {
      referencia:
        'Negrín, J. A. (2019). Política de crédito y gestión de riesgos. Editorial Financiera.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre_responsable',
          cargo: 'Nombre_rol',
          centro: 'Nombre_centro_formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre_responsable',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Nombre_responsable',
          cargo: 'Animación y producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre_responsable',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Nombre_responsable',
          cargo: 'Validación de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Nombre_responsable',
          cargo: 'Validación de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
