<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Estrategias comerciales

    p.mb-4(data-aos="fade-left") Las estrategias comerciales son planes de acción diseñados para alcanzar objetivos específicos en la comercialización de productos y servicios. En el sector financiero, estas estrategias son cruciales para atraer nuevos clientes, fidelizar a los existentes y fortalecer la posición competitiva de la entidad en el mercado. Dado el entorno dinámico y altamente competitivo en el que operan las instituciones financieras, el diseño y la implementación de estrategias comerciales efectivas se convierten en una tarea esencial para asegurar el crecimiento sostenible y la rentabilidad. Algunos tipos de estrategias comerciales se denotan a continuación:

    .row.mb-4.justify-content-center.align-items-center
      .col-12(data-aos="fade-right")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Segmentación de mercado y personalización de ofertas")
            .col-12.mb-4.mb-md-0
              p.mb-3 La segmentación de mercado es una estrategia que implica dividir el mercado en grupos de clientes con características, necesidades y comportamientos similares. Esta segmentación permite a las entidades financieras desarrollar ofertas personalizadas que se adapten a las necesidades específicas de cada segmento, lo que aumenta la probabilidad de éxito en la comercialización de productos y servicios.
              p.ps-3 #[b Ejemplo:] una entidad financiera puede segmentar a sus clientes en función de criterios como la edad, el nivel de ingresos, la ubicación geográfica y el comportamiento de consumo. A partir de esta segmentación, puede ofrecer productos personalizados, como tarjetas de crédito con beneficios específicos para jóvenes profesionales o planes de ahorro adaptados a personas cercanas a la jubilación.
            .col-12
              figure
                img(src='@/assets/curso/temas/tema3/img_1.png', alt='')
          .row(titulo="Fidelización de cliente")
            .col-12.mb-4.mb-md-0
              p.mb-3 La fidelización de clientes es una estrategia enfocada en mantener y fortalecer la relación con los clientes actuales, incrementando su lealtad hacia la entidad financiera. Esto se logra ofreciendo un servicio de alta calidad, programas de recompensas, descuentos exclusivos, y productos adicionales que cubran de manera integral sus necesidades financieras.
              p.ps-3 #[b Ejemplo:] bancos y cooperativas de crédito a menudo implementan programas de fidelización que recompensan a los clientes por el uso frecuente de sus servicios, como puntos canjeables por premios o tasas de interés preferenciales en préstamos y cuentas de ahorro.
            .col-12
              figure
                img(src='@/assets/curso/temas/tema3/img_2.png', alt='')
          .row(titulo="<b><em>Cross-selling y upselling</em></b>")
            .col-12.mb-4.mb-md-0
              p.mb-3 Estas son estrategias comerciales que buscan maximizar el valor del cliente existente al ofrecer productos o servicios adicionales (#[em cross-selling]) o versiones más avanzadas o costosas de un producto (#[em upselling]).
              p.ps-3 #[b #[em Cross-selling]:] implica ofrecer productos complementarios a aquellos que el cliente ya ha adquirido o está considerando adquirir. Por ejemplo, si un cliente abre una cuenta de ahorro, el banco podría ofrecerle una tarjeta de crédito con beneficios asociados a esa cuenta.
              p.ps-3 #[b #[em Upselling]:] consiste en persuadir al cliente para que adquiera una versión superior de un producto o servicio. Por ejemplo, un cliente que busca un préstamo personal podría ser convencido de optar por un préstamo con mayores beneficios, como un periodo de gracia más largo o una tasa de interés más baja.
            .col-12
              figure
                img(src='@/assets/curso/temas/tema3/img_3.png', alt='')
          .row(titulo="Estrategias de retención y recuperación de clientes")
            .col-12.mb-4.mb-md-0
              p.mb-3 Retener a los clientes existentes es tan importante como atraer a nuevos. Las estrategias de retención buscan minimizar la tasa de abandono de clientes, mientras que las estrategias de recuperación se centran en reactivar clientes que han dejado de utilizar los servicios de la entidad.
              p.ps-3 #[b Ejemplo:] una entidad financiera podría ofrecer descuentos o incentivos especiales a clientes que han reducido su nivel de actividad o que han mostrado interés en transferir sus cuentas a otra institución. Adicionalmente, podrían implementar encuestas de satisfacción para identificar y abordar problemas antes de que el cliente decida abandonar la entidad.
            .col-12
              figure
                img(src='@/assets/curso/temas/tema3/img_4.png', alt='')
          .row(titulo="Marketing digital y uso de tecnologías emergentes")
            .col-12.mb-4.mb-md-0
              p.mb-3 En la era digital, el marketing digital se ha convertido en una de las estrategias más poderosas para las entidades financieras. Esto incluye el uso de plataformas de redes sociales, marketing por correo electrónico, publicidad en línea y optimización de motores de búsqueda (SEO). Además, el uso de tecnologías emergentes, como la inteligencia artificial (IA) y el #[em big data], permite a las entidades financieras personalizar aún más sus ofertas y mejorar la experiencia del cliente.
              p.ps-3 #[b Ejemplo:] un banco puede utilizar la IA para analizar patrones de comportamiento de sus clientes y, a partir de estos datos, enviar ofertas personalizadas de productos financieros a través de campañas de marketing digital. Además, el uso de #[em chatbots] impulsados por IA puede mejorar la atención al cliente, proporcionando respuestas rápidas y precisas a consultas comunes.
            .col-12
              figure
                img(src='@/assets/curso/temas/tema3/img_5.png', alt='')
          .row(titulo="Desarrollo de nuevos productos y servicios")
            .col-12.mb-4.mb-md-0
              p.mb-3 La innovación en productos y servicios es una estrategia clave para mantenerse competitivo en el mercado. Esto puede implicar la creación de nuevos productos financieros, como nuevas modalidades de crédito, seguros adaptados a necesidades específicas, o servicios digitales que faciliten la gestión de las finanzas personales.
              p.ps-3 #[b Ejemplo:] un banco podría desarrollar una nueva aplicación móvil que ofrezca a los clientes una vista consolidada de todas sus cuentas y transacciones, facilitando la gestión de sus finanzas. Además, la introducción de productos como créditos verdes, destinados a financiar proyectos sostenibles, puede atraer a clientes interesados en la responsabilidad social y ambiental.
            .col-12
              figure
                img(src='@/assets/curso/temas/tema3/img_6.png', alt='')

    .row.mb-4.justify-content-center.align-items-center
      .col-md-10.col-12(data-aos="fade-right")
        p La implementación efectiva de estrategias comerciales requiere una planificación cuidadosa, recursos adecuados y la capacidad de adaptarse a cambios en el entorno del mercado. Las entidades financieras deben:

    .row.mb-4.p-4.justify-content-center.align-items-center
      .col-md-7.col-lg-6.col-12(data-aos="fade-right")
        figure.d-none.d-sm-none.d-md-block
          img(src='@/assets/curso/temas/tema3/img_7.png', alt='')
      .col-md-5.col-lg-4.col-12(data-aos="fade-right")
        LineaTiempoD.color-acento-botones
          p(numero="1" titulo="Evaluar el entorno competitivo") Entender quiénes son los competidores y cómo se están posicionando en el mercado.
          p(numero="2" titulo="Definir objetivos claros") Establecer metas específicas, medibles y alcanzables para cada estrategia comercial.
          p(numero="3" titulo="Asignar recursos adecuadamente") Asegurar que los recursos financieros, humanos y tecnológicos estén disponibles y alineados con los objetivos estratégicos.
          p(numero="4" titulo="Monitorear y ajustar") Evaluar continuamente el rendimiento de las estrategias implementadas y estar dispuesto a realizar ajustes según sea necesario. 

    p.mb-2(data-aos="fade-left") Las instituciones del sector financiero permanentemente se dedican a establecer e implementar estrategias comerciales innovadoras, que les permitan la fidelización de los clientes actuales y la vinculación de nuevos clientes potenciales, perfeccionando su funcionamiento interno y así posicionándose dentro del sistema financiero colombiano al ofrecer las mejores oportunidades de desarrollo para sus clientes y en general a la población colombiana.
    p.mb-4(data-aos="fade-left") Estas estrategias se ven complementadas con un plan de incentivos tanto para los clientes como para los funcionarios, estrategias que sin lugar a dudas genera una actitud positiva y contribuye a su desarrollo, logrando los objetivos propuestos y cumpliendo con la política comercial.

    .row.mb-4.fondo-1.p-4.justify-content-center.align-items-center
      .col-lg-4.col-md-4.col-12(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/img_8.png', alt='')
      .col-lg-6.col-md-8.col-12(data-aos="fade-right")
        p.mb-2 Para la formulación de una estrategia de vinculación o de fidelización de un cliente es necesario indagar previamente sus expectativas y necesidades para así ofrecerle realmente los productos que le proporcionen un incremento en sus actividades comerciales. Una vez establecidas las expectativas y necesidades de los clientes, aplicando el conocimiento que se tiene del portafolio de productos y servicios, no se debe dudar en estructurar la oferta individual. Esta debe estar soportada por los elementos de oportunidad, confiabilidad y claridad, para que el cliente la acepte de forma inmediata. Una vez presentada la estrategia es importante realizarles un estricto seguimiento y control a todos y cada uno de los acuerdos celebrados entre las partes.
        p.mb-2 Los bancos obtienen dinero con base en el total de depósitos mantenidos y préstamos emitidos. Los consumidores tienen muchos bancos y cooperativas de crédito para elegir, todos compitiendo por su cuenta de cheques, de ahorros y de las necesidades de préstamo. En los mercados altamente competitivos, los bancos deben utilizar estrategias para adquirir y conservar los activos de los clientes nuevos y de los ya existentes.

    p.mb-4(data-aos="fade-left") Las estrategias comerciales que más se aplican en las entidades financieras son las siguientes:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-10.mb-4(data-aos="zoom-in-down")
        ImagenInfograficaB.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/info-1A.svg', alt='')
          div.p-3(x="20.2%" y="62%" numero="+" tooltip="Clic para ver información")
            .h5.mb-2 Comunidad de mercadeo
            p Los bancos varían en tamaño y capacidad. Se trata del número de sucursales con los que cuentan las entidades financieras en el país, adoptando estrategias de mercadeo locales según su ubicación y el mercado objetivo.
          div.p-3(x="50%" y="62%" numero="+" tooltip="Clic para ver información")
            .h5.mb-2 Empaquetar producto
            p Venta conjunta de productos, como por ejemplo, cuenta de cheques gratis para aquellos que abran una cuenta de ahorros. Debido a esto se ha convertido en una práctica común implementar soluciones de las estrategias de agrupaciones exitosas y creativas.
          div.p-3(x="79.6%" y="62%" numero="+" tooltip="Clic para ver información")
            .h5.mb-2 Productos preaprobados
            p Los consumidores son más propensos a decir que sí a algo cuando ya saben que son aprobados para ello. Las entidades estudian sus clientes y seleccionan a los identificados con tendencias positivas e historial de crédito, se les envía una "pre aprobación" en letras de tarjetas de crédito, líneas de crédito o préstamos hipotecarios.
          div.p-3(x="65%" y="52%" numero="+" tooltip="Clic para ver información")
            .h5.mb-2 Servicios de primera
            p Los servicios de primera están diseñados para atraer clientela de alto valor neto para el banco. Los clientes de alto patrimonio a menudo tienen necesidades diferentes, así como expectativas. Al ofrecer un conjunto selecto de banqueros privados para manejar personalmente todas las operaciones y revisiones de cuentas aumenta lo confianza de clientes.
          div.p-3(x="35.2%" y="52%" numero="+" tooltip="Clic para ver información")
            .h5.mb-2 Cajeros referidos
            p Los cajeros de banco interactúan con la mayoría de la clientela bancaria. Estos realizan las operaciones del día a día, tales como cambio de cheques, depósitos o transferencias de dinero. El éxito de los bancos es capacitar constantemente a los cajeros para buscar oportunidades de productos bancarios, de venta cruzada y remitir a los clientes a la persona adecuada. Los bancos recompensan los mejores cajeros inteligentes que se toman tiempo para referir o sugerir un nuevo producto o servicio.
      .col-12.d-block.d-md-none.mb-4
        a.anexo(:href="obtenerLink('/downloads/Anexo1_Estrategias_comerciales.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo 1. Estrategias comerciales

 


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
