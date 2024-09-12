<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Calidad del servicio
      
    p.mb-4(data-aos="fade-left") Un servicio de calidad se define como aquel que no solo cumple con los requisitos del cliente, sino que también busca constantemente superar sus expectativas. En el sector financiero, ofrecer un servicio de calidad es fundamental para establecer relaciones de confianza y fidelidad con los clientes. Este enfoque no solo mejora la percepción de la entidad, sino que también es crucial para su sostenibilidad y éxito a largo plazo.

    .row.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema4/img_1.png', alt='')
      .col-lg-6.col-12(data-aos="fade-right")
        p.mb-2 La frase "El cliente es primero" es comúnmente utilizada en muchas entidades financieras, reflejando un compromiso con la satisfacción del cliente. Este principio enfatiza la importancia de priorizar las necesidades y expectativas de los clientes en todas las operaciones y decisiones de la entidad. No se trata únicamente de ofrecer un producto o servicio, sino de proporcionar una experiencia integral que demuestre al cliente que su bienestar y satisfacción son la máxima prioridad.
        p.mb-2 El concepto de servicio de calidad al cliente puede entenderse como el conjunto de prestaciones que el cliente espera, además del producto o servicio básico. Es una filosofía que permea toda la organización, donde cada empleado, independientemente de su rol, debe actuar y sentir que su objetivo principal es crear clientes satisfechos y leales. Estos clientes, a su vez, son los que eventualmente atraerán a otros nuevos, contribuyendo al crecimiento y expansión de la entidad.
      .col-lg-10.col-12.mt-4
        .cajon.color-primario.p-4.mb-4(data-aos="fade-right") 
          p Una entidad financiera que ha implementado un sistema de gestión de calidad demuestra un enfoque proactivo hacia la identificación y satisfacción de los requisitos y necesidades de sus clientes. Este sistema permite a la entidad alinearse con estándares internacionales reconocidos, como la Norma ISO 9001, que establece un marco para la mejora continua y la eficiencia en la gestión de la calidad.
        p.mb-2(data-aos="fade-left") Los objetivos de la calidad en una entidad financiera están directamente alineados con la política de calidad del servicio, y estos objetivos son:

    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-down")
      .col-12.p-5.tarjeta.color-primario
        SlyderB(:datos="datosSlyder")

    Separador
    #t_4_1.titulo-segundo.color-primario(data-aos="fade-right")
      h2 4.1 Características de la calidad del servicio

    p.mb-4(data-aos="fade-left") Este aspecto merece una especial atención y requiere que sea tenido en cuenta en todas y cada una de las intervenciones que se tengan con un cliente, si se quiere tener éxito en la prestación del servicio al cliente es necesaria su aplicación. A continuación, se enuncian las principales características de la calidad del servicio:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-4(data-aos="zoom-in-down")
        ImagenInfograficaB.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema4/info-2A.svg', alt='')
          div.p-3(x="14%" y="17.8%" numero="+" tooltip="Clic para ver información")
            .h5.mb-2 Rapidez
            p El cliente no debe esperar sin ser atendido y si no es posible atenderlo por estar con otro cliente u otra razón valedera, decírselo y hacerle saber que tenemos presente que nos está esperando. La indiferencia ante la presencia del cliente ha de ser el peor servicio y a lo sumo en tres minutos causa la irritabilidad del cliente o su retiro de la entidad.
          div.p-3(x="5.5%" y="50%" numero="+" tooltip="Clic para ver información")
            .h5.mb-2 Cortesía
            p Es la reina del servicio. La ausencia de la cortesía anula el valor de cualquier otro servicio. Es ahí donde se debe poner en práctica todos los conocimientos de relaciones humanas que se tengan y sacar a brillar la sinceridad y empatía.
          div.p-3(x="14%" y="80%" numero="+" tooltip="Clic para ver información")
            .h5.mb-2 Confiabilidad
            p Debe ser el sello de honestidad en el trato comercial. Es la seguridad que los demás depositan para no ser defraudados.
          div.p-3(x="86%" y="80%" numero="+" tooltip="Clic para ver información")
            .h5.mb-2 Amistad
            p Es más que un servicio al cliente, es algo que debe trascender al negocio, que debe mantenerse aún fuera del ámbito comercial.
          div.p-3(x="85.8%" y="17.8%" numero="+" tooltip="Clic para ver información")
            .h5.mb-2 Ser escuchado
            p Es también una parte del servicio que se le brinda al cliente. Escuchar con atención a las personas cuando hablan, no solo es muestra de respeto, sino que es muestra del interés en ellos. Escuchar lo que nos dicen sus ojos, sus ademanes, su tono de voz o sus movimientos.
          div.p-3(x="94.5%" y="50%" numero="+" tooltip="Clic para ver información")
            .h5.mb-2 Ser comprendido
            p Significa ponerse en la situación de la otra persona y tratar de sentir y pensar lo que ella siente y piensa. Significa la capacidad de poder ver las cosas desde el punto de vista de la otra persona y no solo del nuestro, ponerse en los zapatos del cliente. 
      .col-12.d-block.d-md-none.mb-4
        a.anexo(:href="obtenerLink('/downloads/Anexo2_Características_de_la_calidad_del_servicio.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo 2. Características de la calidad del servicio

    Separador
    #t_4_2.titulo-segundo.color-primario(data-aos="fade-right")
      h2 4.2 Satisfacción del cliente

    p.mb-2(data-aos="fade-left") La satisfacción del cliente es un objetivo primordial para cualquier entidad financiera, ya que es un indicador clave de su éxito y sostenibilidad a largo plazo. Lograr una satisfacción completa del cliente requiere un enfoque estratégico que va más allá de la simple entrega de productos o servicios. Es necesario considerar varios aspectos fundamentales que influyen en la percepción del cliente sobre la calidad del servicio recibido.
    p.mb-4(data-aos="fade-left") Para asegurar que un cliente alcance una satisfacción plena con respecto al servicio prestado, se deben tener en cuenta los siguientes aspectos:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-4(data-aos="zoom-in-down")
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Detectar las demandas de servicio de los clientes vinculados y potenciales") 
            .col-12.mb-4
              p La primera tarea es comprender las necesidades y expectativas tanto de los clientes actuales como de los potenciales. Esto implica un análisis continuo de sus preferencias, comportamientos y #[em feedback]. Solo al entender profundamente lo que valoran los clientes se puede ajustar el servicio para cumplir y, si es posible, superar sus expectativas.
            .col-12
              figure
                img(src='@/assets/curso/temas/tema4/img_12.png', alt='')
          .row(numero="2" titulo="El factor determinante es el servicio") 
            .col-12.mb-4
              p En un entorno donde la mayoría de las entidades financieras ofrecen productos similares, el servicio se convierte en el principal diferenciador. Los clientes valoran la experiencia que reciben tanto como el producto en sí. Un servicio que es rápido, eficiente, y personalizado puede ser la razón por la cual un cliente elige y permanece con una entidad financiera.
            .col-12
              figure
                img(src='@/assets/curso/temas/tema4/img_13.png', alt='')
          .row(numero="3" titulo="La calidad del producto no es considerada como un factor de peso") 
            .col-12.mb-4
              p Aunque la calidad del producto es importante, en muchos casos, se asume que todos los competidores ofrecen productos de calidad similar. Por lo tanto, la calidad del producto no es el principal factor diferenciador. De manera similar, el precio tampoco suele ser un factor decisivo, ya que la competencia puede igualar o incluso mejorar las ofertas de precios.
            .col-12
              figure
                img(src='@/assets/curso/temas/tema4/img_14.png', alt='')
          .row(numero="4" titulo="El valor del servicio como factor de competencia") 
            .col-12.mb-4
              p Cada vendedor y asesor debe comprender que el servicio es un poderoso elemento de competencia. Al enfocarse en ofrecer un servicio excepcional, no solo se satisfacen las demandas actuales de los clientes, sino que se fomenta la lealtad y se incrementa la base de clientes a través de recomendaciones y repeticiones de negocios.
            .col-12
              figure
                img(src='@/assets/curso/temas/tema4/img_15.png', alt='')
          .row(numero="5" titulo="El cliente opta por mejor servicio al igual que por precio y producto") 
            .col-12.mb-4
              p Cuando se enfrentan a opciones similares en términos de precio y producto, los clientes tienden a optar por la entidad que ofrece un mejor servicio. Un buen servicio puede compensar otros factores, y a menudo es lo que lleva a los clientes a elegir una opción sobre otra.
            .col-12
              figure
                img(src='@/assets/curso/temas/tema4/img_16.png', alt='')
          .row(numero="6" titulo="El servicio marca la diferencia") 
            .col-12.mb-4
              p Dado que el precio y el producto son elementos fácilmente imitables por la competencia, es el servicio el que realmente puede marcar la diferencia. Un servicio de calidad crea una ventaja competitiva difícil de replicar, ya que depende de la cultura organizacional, la capacitación del personal y el enfoque estratégico de la entidad.
            .col-12
              figure
                img(src='@/assets/curso/temas/tema4/img_17.png', alt='')
          .row(numero="7" titulo="No prestar un buen servicio es trabajar para la competencia") 
            .col-12.mb-4
              p Finalmente, es crucial entender que un mal servicio no solo afecta la reputación de la entidad, sino que también beneficia directamente a la competencia. Los clientes insatisfechos no solo se van, sino que pueden compartir sus malas experiencias con otros, lo que amplifica el impacto negativo. Por lo tanto, cada interacción con el cliente debe ser vista como una oportunidad para consolidar la relación y diferenciarse de la competencia. 
            .col-12
              figure
                img(src='@/assets/curso/temas/tema4/img_18.png', alt='')


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo:
          'Aumentar la satisfacción de las necesidades y expectativas de los clientes',
        texto:
          'La entidad se compromete a no solo cumplir con lo que los clientes esperan, sino a exceder esas expectativas, ofreciendo un valor agregado en cada interacción.',
        imagen: require('@/assets/curso/temas/tema4/img_2.png'),
      },
      {
        titulo:
          'Proveer los espacios de atención necesarios que faciliten el acceso oportuno a la información y al ejercicio de los derechos ciudadanos',
        texto:
          'Esto implica asegurar que todos los clientes tengan acceso a la información relevante y puedan ejercer sus derechos de manera eficiente y sin obstáculos.',
        imagen: require('@/assets/curso/temas/tema4/img_3.png'),
      },
      {
        titulo: 'Desarrollar un plan de capacitación efectivo',
        texto:
          'La formación continua de los empleados es esencial para garantizar que estén equipados con las habilidades y conocimientos necesarios para ofrecer un servicio de calidad. Un plan de capacitación bien diseñado contribuye al desarrollo profesional de los empleados y, en consecuencia, a la satisfacción del cliente.',
        imagen: require('@/assets/curso/temas/tema4/img_4.png'),
      },
      {
        titulo:
          'Evaluar el desempeño del funcionario en orden a fortalecer las competencias, contribuyendo al cumplimiento de los objetivos estratégicos',
        texto:
          'La evaluación periódica del desempeño es clave para identificar áreas de mejora y asegurar que cada empleado esté contribuyendo de manera efectiva al logro de los objetivos estratégicos de la entidad.',
        imagen: require('@/assets/curso/temas/tema4/img_5.png'),
      },
      {
        titulo:
          'Regular las condiciones laborales para el buen desempeño del funcionario',
        texto:
          'Crear un entorno de trabajo que promueva el bienestar y la motivación de los empleados es fundamental para que estos puedan desempeñar sus funciones de manera eficiente y con un enfoque en la calidad del servicio.',
        imagen: require('@/assets/curso/temas/tema4/img_6.png'),
      },
      {
        titulo:
          'Controlar los riesgos de los procesos del servicio, contribuyendo a fortalecer el sistema de control interno',
        texto:
          'La gestión de riesgos es una parte integral del sistema de calidad, asegurando que los procesos sean robustos y que se minimicen las posibilidades de errores o fallos que puedan afectar la satisfacción del cliente.',
        imagen: require('@/assets/curso/temas/tema4/img_7.png'),
      },
      {
        titulo:
          'Garantizar el compromiso con la mejora continua a través de procesos controlados',
        texto:
          'La mejora continua es un principio central del sistema de gestión de calidad. Mediante la implementación de procesos controlados, la entidad se asegura de que siempre esté buscando maneras de optimizar y mejorar la calidad del servicio que ofrece.',
        imagen: require('@/assets/curso/temas/tema4/img_8.png'),
      },
      {
        titulo:
          'Adherir a las orientaciones y políticas de modernización del Estado compartiendo sus principios',
        texto:
          'La alineación con las políticas de modernización del Estado garantiza que la entidad no solo cumpla con las normativas vigentes, sino que también esté a la vanguardia de las mejores prácticas en la gestión pública y privada.',
        imagen: require('@/assets/curso/temas/tema4/img_9.png'),
      },
      {
        titulo:
          'Incorporar y mantener el sistema de gestión de calidad basado en el modelo ISO 9001',
        texto:
          'La adopción del modelo ISO 9001 proporciona un marco estructurado para la gestión de la calidad, permitiendo a la entidad operar de manera eficiente y con un enfoque en la satisfacción del cliente.',
        imagen: require('@/assets/curso/temas/tema4/img_10.png'),
      },
      {
        titulo:
          'Mantener una gestión eficiente y transparente en los procesos de adquisición realizados por el servicio',
        texto:
          'La transparencia y la eficiencia en los procesos de adquisición son esenciales para asegurar que los recursos se utilicen de manera óptima y que todas las operaciones se realicen de manera justa y abierta.',
        imagen: require('@/assets/curso/temas/tema4/img_11.png'),
      },
    ],
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
