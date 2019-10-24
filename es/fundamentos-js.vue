<template>
  <section class="container">
    <section class="main-content">
      <section class="main-header">
        <h1>Fundamentos de</h1>
        <h1 class="js-title">JavaScript</h1>
      </section>
      <section class="first-copy">
        <p>Ya sabes HTML y CSS, pero tienes miedo de dar el siguiente paso y aprender JavaScript.</p>
        <p>O tal vez quieres iniciar una carrera en el mundo de la programación web, pero no sabes cuál es el camino correcto</p>
        <p>Sé lo que sientes en estos momentos, porque alguna vez yo estuve en tu lugar.</p>
        <p>Durante mucho tiempo omití el aprender JavaScript a pesar de saber que era esencial para lograr mi sueño de volverme desarrollador web, estas eran algunas de las razones por las no me comprometía a aprender este lenguaje de programación:</p>
        <ul class="bullet-list">
          <li>Tenía miedo de sentirme inútil, pues no tenía conocimientos previos de programación, y la mayoría de los tutoriales que tomaba estaban dirigidos a personas con cierta noción de estos temas.</li>
          <li>Había demasiada información sobre qué aprender, cómo aprenderlo, este exceso de recursos me agobiaba y al final postergaba mi aprendizaje porque quería que fuera perfecto</li>
        </ul>
        <p>Después de mucho procrastinar y no tomarme en serio mi aprendizaje, me comprometí conmigo mismo aprender de todas las maneras posibles, al final me di cuenta de algo:</p>
        <h3>La mejor manera de aprender JavaScript, es dominando las bases del lenguaje.</h3>
      </section>
      <section class="learn">
        <h3 class="subtitle">Nuestro compromiso</h3>
        <p>La meta de este curso es sencilla: brindarte una guía para empezar tu camino en el desarrollo web con JavaScript</p>
        <p>El curso está divido en 7 secciones (versión gratuita)</p>
        <ul class="learning-topics">
          <li>Variables</li>
          <li>Condicionales</li>
          <li>Funciones</li>
          <li>Arreglos</li>
          <li>Objetos</li>
          <li>Integración de JavaScript con HTML</li>
          <li>Proyecto final</li>
        </ul>
      </section>
      <img src="../assets/calculator.jpg" alt="Imagen de calculadora" class="final-project" />
      <section class="target">
        <h3 class="subtitle">¿A quién está dirigido este curso?</h3>
        <p>A prácticamente cualquier persona interesada en aprender las bases de JavaScript. Este curso está pensado para personas que nunca han programado y llevarlos a un nivel que les permita comprender temas más complejos del lenguaje</p>
      </section>
      <section class="how-it-works">
        <h3 class="subtitle">¿Cómo funciona el curso?</h3>
        <p>El curso empezará el lunes 4 de noviembre, pero puedes registrarte desde momento, probablemente estarás pensando “Todo suena muy bien, pero ¿cuál es el precio del curso?”; esa es la mejor noticia, ¡este curso es totalmente gratuito! con la posibilidad de acelerar tu aprendizaje con la versión premium (ver sección Bonus)</p>
        <p>La logística del curso es la siguiente:</p>
        <p>Unos días antes del inicio del curso, te daremos acceso a nuestra plataforma, y cada día tendrás acceso al contenido del curso que consistirá en uno o varios videos (dependiendo de la complejidad del tema) donde se explicará el tema de manera teórica, posteriormente veremos ejemplos en código y finalmente tendrás acceso a pequeños retos que te ayudarán a reforzar lo visto ese día.</p>
      </section>
      <section>
        <h3 class="subtitle">¿Por qué tomar este curso?</h3>
        <p>Sabemos que se siente no entender muchas cosas, la verdad nosotros tampoco teníamos conocimientos previos de programación o ciencias computacionales</p>
        <p>Buscamos siempre la mejor manera de codear, por lo que tendrás la certeza que tú código</p>
      </section>
      <section class="bonus">
        <h3 class="subtitle">Bonus</h3>
        <p>Si deseas acelerar aun más tu aprendizaje, puedes optar por pagar 9 USD para acceder a la versión premium de este curso, donde recibirás videos con la solución y explicación detallada de los ejercicios. Así cómo tres secciones más que la versión gratuita. También tendrás acceso un foro donde podrás contactarnos en caso de cualquier duda</p>
      </section>
    </section>
  </section>
</template>

<style scoped>
.container {
  border-top: 10px solid #ffc400;
}
.main-content {
  max-width: 780px;
  margin: 0 auto;
  font-size: 1.15rem;
}

.main-content * + * {
  margin: 2rem 0;
}

.main-header {
  text-align: center;
  margin: 5rem 0;
}

.first-copy {
  text-align: justify;
}

.first-copy h3 {
  text-align: center;
}

.bullet-list,
.learning-topics {
  list-style: none;
}

li::before {
  content: "\2022"; /* Add content: \2022 is the CSS Code/unicode for a bullet */
  color: #ffc400; /* Change the color */
  font-weight: bold; /* If you want it to be bold */
  display: inline-block; /* Needed to add space between the bullet and the text */
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: -1em; /* Also needed for space (tweak if needed) */
}

.learn {
  background: #f8f8f8;
  padding: 50px;
  border-radius: 5px;
  box-shadow: 0px 10px 20px 5px #d0d0d0;
}

.main-header h1 {
  font-size: 3.5rem;
  margin: 0;
}

.subtitle {
  display: inline-block;
  background: linear-gradient(to bottom, #ffc400 0%, #ffc400 100%);
  background-position: 0 100%;
  background-repeat: repeat-x;
  padding: 0 10px;
  background-size: 4px 4px;
  text-decoration: none;
  transition: all 0.4s;
}

.subtitle:hover {
  background-size: 4px 70px;
  color: #fff;
}

.js-title {
  display: inline-block;
  background: linear-gradient(to bottom, #ffc400 0%, #ffc400 100%);
  background-position: 0 100%;
  background-repeat: repeat-x;
  padding: 0 10px;
  background-size: 4px 10px;
  text-decoration: none;
  transition: all 0.2s;
}

.js-title:hover {
  background-size: 4px 70px;
  color: #fff;
}

.final-project {
  display: block;
  border-radius: 5px;
  margin: 0 auto;
  box-shadow: 0px 10px 20px 5px #d0d0d0;
}
</style>