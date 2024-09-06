<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Técnicas de venta y comunicación

    .row.mb-4.justify-content-center.align-items-center(data-aos="fade-right")
      .col-12 
        figure
          img(src='@/assets/curso/temas/tema2/img_1.png', alt='')

    p.mb-4(data-aos="fade-left") En el entorno competitivo actual, las técnicas de venta y la comunicación efectiva son herramientas fundamentales para el éxito de las entidades financieras. Estas no solo permiten que los asesores comerciales logren sus objetivos de ventas, sino que también son cruciales para construir relaciones duraderas y de confianza con los clientes. A continuación, se exploran en detalle las técnicas de venta más relevantes y las estrategias de comunicación que deben acompañarlas para maximizar su efectividad (García, 2021).

    Separador
    #t_2_1.titulo-segundo.color-primario(data-aos="fade-right")
      h2 2.1 Técnicas de ventas 

    p.mb-4(data-aos="fade-left") Las técnicas de venta son el conjunto de estrategias y habilidades que los asesores comerciales emplean para persuadir a los clientes de adquirir productos o servicios financieros. Estas técnicas deben adaptarse a las características del producto, al perfil del cliente y al contexto de la interacción, ya sea en persona, por teléfono o en línea. Algunas de las técnicas más utilizadas en el sector financiero incluyen:



</template>

<script>
export default {
  name: 'Tema2',
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
