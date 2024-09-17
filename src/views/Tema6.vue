<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Política comercial y de crédito
      
    .row.mb-4.justify-content-center.align-items-center(data-aos="fade-right")
      .col-12 
        figure
          img(src='@/assets/curso/temas/tema6/img_1.png', alt='') 

    p.mb-4(data-aos="fade-left") La política comercial y de crédito en una entidad financiera es un conjunto de directrices y principios que regulan cómo la organización ofrece sus productos y servicios al mercado, y cómo gestiona el riesgo asociado con la concesión de créditos. Estas políticas son fundamentales para asegurar la sostenibilidad financiera de la entidad, optimizar su rentabilidad y garantizar que las operaciones se realicen de manera ética y conforme a la normatividad vigente (Negrin, 2019).

    Separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.1 Política comercial

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-4.col-10.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema6/img_2.png', alt='')
      .col-lg-8.col-12(data-aos="fade-right") 
        .row.align-items-center
          .col-md-12
            .cajon.color-primario.p-4.mb-2
              p.mb-0 La política comercial se define como el instrumento que cumple con las características que se relacionan con las medidas e instrumentos que tienen efectos en las exportaciones y las importaciones.
          .col-12
            ul.lista-ul.mb-0
              li 
                i.fas.fa-angle-right
                | La política comercial, hace parte de la política económica que regula los pagos internacionales y el intercambio entre países.
              li 
                i.fas.fa-angle-right
                | Está estrechamente ligada a la política cambiaria por la importancia del tipo de cambio en el flujo internacional de capitales y de bienes y servicios.
              li.mb-0
                i.fas.fa-angle-right
                | Comprende también la política arancelaria, la cual actúa como mecanismo protector y de captación de recursos bajo la forma de impuesto indirecto que gravan las operaciones del comercio exterior.
              li.mb-0
                i.fas.fa-angle-right
                | Expresa de manera sistemática la manera en cómo a nivel nacional se deben mantener las relaciones financieras y monetarias, base fundamental para el funcionamiento de las entidades.

    Separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.2 Política de crédito

    p.mb-2(data-aos="fade-left") La definición de una política de créditos permitirá a una institución financiera el diseño de su política crediticia, que le proporcionará los elementos a fijar en una estrategia conservadora pero fuerte, para su crecimiento constante.
    p.mb-5(data-aos="fade-left") Algunos de los puntos a tener en cuenta para fijar la política de crédito son los siguientes:
    
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 7. </b> <i>Aspectos de la política de crédito</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema6/fig-7a.svg', alt='Los cuatro aspectos de la política de crédito son: estructura organizacional, estándar de calidad en créditos, naturaleza del riesgo a asumir y concentración de cartera.')  
          img.d-block.d-md-none(src='@/assets/curso/temas/tema6/fig-7b.svg', alt='Los cuatro aspectos de la política de crédito son: estructura organizacional, estándar de calidad en créditos, naturaleza del riesgo a asumir y concentración de cartera.') 

    p.mb-2(data-aos="fade-left") Independientemente de la política crediticia de la entidad financiera, se debe trabajar respetando en su totalidad lo expuesto por la Superintendencia Bancaria, pues permitirá tener un portafolio con riesgos no superior al normal, evitando en lo posible clasificaciones adversas de deudas, dada su implicación negativa tanto para la entidad crediticia como para el cliente.
    p.mb-2(data-aos="fade-left") El portafolio de créditos debe tener los riesgos controlados. Para trazar una hoja de ruta crediticia razonable es importante poder contar con asesores comerciales idóneos, con experiencia, que conozcan el mercado y el comportamiento de los diversos segmentos económicos.
    p.mb-4(data-aos="fade-left") Las instituciones no deben escatimar recursos en capacitación permanentemente; esto no es un gasto, sino una inversión necesaria, dado que el recurso más importante de la entidad, es el recurso humano.

    

</template>

<script>
export default {
  name: 'Tema6',
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
