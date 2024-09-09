<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") El siguiente gráfico presenta a manera general el contenido formativo que comparte el componente “El servicio y la asesoría comercial”. Es una síntesis con los conceptos más representativos para el buen servicio, sus políticas y la asesoría comercial.

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt=" La síntesis del componente formativo presenta dos grandes conceptos y sus subáreas, por un lado, está el servicio, pilar del desarrollo institucional y por el otro lado la asesoría comercial. Los subtemas del servicio son las técnicas de venta y comunicación, las estrategias comerciales y la calidad del servicio. Por el lado de la asesoría comercial se trabaja la figura del asesor comercial, las políticas comerciales y la normativa.")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
