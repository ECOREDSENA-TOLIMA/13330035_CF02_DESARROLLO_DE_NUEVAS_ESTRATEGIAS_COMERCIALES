<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4(data-aos="fade-left") El componente formativo que se presenta a continuación tiene como objetivo fundamental desarrollar las competencias necesarias para que los participantes sean capaces de comercializar productos y servicios en el sector financiero, asegurando el cumplimiento de las políticas institucionales y la normatividad vigente. En un entorno tan dinámico y competitivo como el financiero, no basta con conocer los productos; es esencial entender cómo llegar al cliente, satisfacer sus necesidades, y, lo más importante, superar sus expectativas.

    .row.mb-4.fondo-1.p-4.justify-content-center.align-items-center
      .col-lg-5.col-lg-5.col-10.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/img_1.png', alt='')
      .col-lg-7.col-lg-7.col-12(data-aos="fade-right")
        p.mb-2 Este componente formativo abordará temas claves como la importancia del servicio al cliente, las técnicas de venta y comunicación efectivas, las estrategias comerciales que permiten a las entidades financieras diferenciarse en el mercado, y la correcta interpretación de la normatividad aplicable. Además, se analizará cómo la política comercial y de crédito influye en las decisiones de negocio y cómo los asesores comerciales pueden desempeñar un rol crucial en la implementación de estas políticas.
        p.mb-2 El servicio al cliente no es solo un área dentro de la entidad financiera; es el pilar sobre el cual se construye su reputación y se asegura la fidelización de los clientes. A través de este componente formativo, se busca no solo proporcionar conocimientos teóricos, sino también dotar a los participantes de herramientas prácticas que les permitan aplicar estos conocimientos en situaciones reales.

    p.mb-4(data-aos="fade-left") A lo largo del componente formativo, se enfatizará en la importancia de una asesoría comercial basada en el conocimiento profundo de las políticas institucionales y la normativa vigente, así como en la capacidad de los asesores para adaptarse a las necesidades cambiantes del mercado. De esta manera, se contribuirá al crecimiento sostenible de la entidad financiera y al fortalecimiento de su posición en el mercado.

    .row.mb-4.justify-content-center.align-items-center
      .col-lg-10.col-12(data-aos="fade-right")
        .cajon.color-primario.p-4 Al finalizar este componente, los participantes estarán preparados para no solo cumplir con los estándares esperados en la comercialización de productos y servicios financieros, sino para destacarse en su rol, creando relaciones de confianza con los clientes y contribuyendo de manera significativa al éxito de su organización.

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/wsxAs-KDHyA" title="El servicio y la asesoría comercial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
