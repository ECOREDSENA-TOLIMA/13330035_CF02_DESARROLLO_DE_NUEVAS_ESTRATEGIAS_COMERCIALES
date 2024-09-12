<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 El servicio, pilar del desarrollo institucional
    
    p.mb-4(data-aos="fade-left") La satisfacción del cliente es uno de los indicadores más relevantes de la calidad en los productos y servicios que ofrece una entidad financiera. Este concepto no solo se limita a que los productos cumplan con los estándares básicos, sino que implica ir más allá, superando las expectativas de los clientes. En un mercado cada vez más competitivo, la satisfacción del cliente se convierte en un diferenciador clave que puede determinar el éxito o fracaso de una entidad financiera.

    .row.mb-4.fondo-1.p-4.justify-content-center.align-items-center
      .col-lg-4.col-10.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img_1.png', alt='')
      .col-lg-6.col-12(data-aos="fade-right")
        p.mb-2 En el contexto actual, donde los clientes tienen acceso a una amplia variedad de opciones y son cada vez más exigentes, la fidelización se ha vuelto un objetivo estratégico primordial para las organizaciones. Los clientes no solo buscan productos y servicios que satisfagan sus necesidades básicas, sino que también valoran la experiencia integral que reciben. Esta experiencia incluye aspectos como la atención personalizada, la rapidez en la resolución de problemas, la transparencia en las operaciones y la empatía por parte de los asesores y empleados de la entidad.
        p.mb-2 Para alcanzar estos altos niveles de satisfacción, es esencial que las personas que están en contacto directo con los clientes, como asesores comerciales, cajeros, y agentes de servicio al cliente, posean un profundo conocimiento de las técnicas de atención y venta. No se trata únicamente de seguir un guion o aplicar técnicas de venta estándar; es crucial que los empleados desarrollen una comprensión genuina de las necesidades y expectativas de cada cliente y utilicen ese entendimiento para adaptar su enfoque de servicio.

    p.mb-4(data-aos="fade-left") Las estrategias fundamentales para la fidelización de clientes incluyen el uso de herramientas tecnológicas que permitan una mayor personalización del servicio. Por ejemplo, el análisis de datos puede ayudar a las entidades a anticiparse a las necesidades de sus clientes, ofreciendo productos y servicios que se alineen perfectamente con sus preferencias y comportamientos. Además, la implementación de sistemas de gestión de relaciones con clientes (CRM) puede facilitar una interacción más fluida y eficiente, lo que a su vez contribuye a una mayor satisfacción y lealtad. 
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
