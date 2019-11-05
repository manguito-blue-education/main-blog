<template>
  <section class="container">
    <section class="main-content">
      <section class="main-header">
        <h1>Fundamentos de</h1>
        <h1 class="js-title">JavaScript</h1>
      </section>
      <section class="first-copy">
        <p>Ya sabes HTML y CSS, pero tienes miedo de dar el siguiente paso y aprender JavaScript.</p>
        <p>O tal vez quieres iniciar una carrera en el mundo de la programación web, pero no sabes cuál es el camino correcto.</p>
        <p>Sé lo que sientes en estos momentos, porque alguna vez yo estuve en tu lugar.</p>
        <p>Durante mucho tiempo omití el aprender JavaScript a pesar de saber que era esencial para cumplir mi objetivo de volverme desarrollador web, algunas de las razones por las no me comprometía a aprender eran las siguientes:</p>
        <ul class="bullet-list">
          <li>Tenía miedo, pues no tenía conocimientos previos de programación, y la mayoría de los tutoriales que tomaba estaban dirigidos a personas con cierta noción de estos temas.</li>
          <li>Había demasiada información sobre qué aprender, cómo aprenderlo y este exceso de recursos me agobiaba lo que me orillaba a postergar mi aprendizaje porque quería que fuera perfecto.</li>
        </ul>
        <p>Después de mucho procrastinar y no tomarme en serio mi aprendizaje, me comprometí a aprender para cumplir mi sueño. Durante mi camino me di cuenta de algo:</p>
        <h3>La mejor manera de aprender JavaScript, es dominando las bases del lenguaje.</h3>
        <p>Quiero que por un momento pienses que un lenguaje de programación no es muy diferente a un lenguaje hablado, como el español</p>
        <p>Si quieres aprender este idioma, primero tendrías que saber las reglas gramáticales, pues son lo que de la estructura del mismo. Si no tuvieras noción de estas reglas, no podrías crear oraciones con sentido.</p>
        <p>Lo mismo sucede con un lenguaje de programación, el dominar las bases es lo que te permitirá en un futuro, entender y escribir código más complejo.</p>
        <p>Lo anterior, fue lo que me motivó a crear un curso dedicado a enseñar estas bases, con el fin de ayudar a todas las personas que están donde yo alguna vez estuve.</p>
        <h2 class="subtitle">Nuestro compromiso</h2>
        <p>La meta de este curso es una: brindarte una guía para empezar tu camino en el desarrollo web con JavaScript.</p>
        <p>En este curso aprenderás:</p>
      </section>
      <section class="learn">
        <ul class="learning-topics">
          <li>La historia de JavaScript</li>
          <li>Variables</li>
          <li>Condicionales</li>
          <li>Funciones</li>
          <li>Arreglos</li>
          <li>Objetos</li>
          <li>Integración de JavaScript con HTML y CSS</li>
        </ul>
      </section>
      <section class="target">
        <h2 class="subtitle">¿Quién puede tomar este curso?</h2>
        <p>Cualquier persona interesada en aprender las bases de JavaScript. Este curso está pensado para personas que nunca han programado y llevarlos a un nivel que les permita comprender temas más complejos del lenguaje.</p>
      </section>
      <section class="how-it-works">
        <h2 class="subtitle">¿Cuál es el precio del curso?</h2>
        <p>
          Esa es la mejor parte, el curso es totalmento
          <strong>gratuito.</strong>
        </p>
      </section>
      <section class="how-it-works">
        <h2 class="subtitle">Me interesa, ¿cómo accedo al curso?</h2>
        <p>
          El curso inicia el
          <strong>18 de noviembre de 2019</strong>, puedes registrarte desde este momento en el
          formulario que se encuentra al final de la página.
        </p>
        <p>El fin de semana anterior al inicio del curso te daremos acceso a nuestra plataforma. Cada día publicaremos el contenido del curso, que consistirá en uno o varios videos (dependiendo de la complejidad del tema) donde se explicará el tema de manera teórica, posteriormente veremos ejemplos en código y finalmente te pondremos pequeños retos que te ayudarán a reforzar el tema.</p>

        <a href="https://mailchi.mp/488f29961dfd/manguito-js-course">
          <button class="register">Registrarme al curso</button>
        </a>
      </section>
      <!-- <section>
        <h2 class="subtitle">¿Por qué tomar este curso?</h2>
        <p>Sabemos que se siente no entender muchas cosas, la verdad nosotros tampoco teníamos conocimientos previos de programación o ciencias computacionales</p>
        <p>Buscamos siempre la mejor manera de codear, por lo que tendrás la certeza que tú código</p>
      </section>-->
      <!-- <section class="bonus">
        <h2 class="subtitle">Bonus</h2>
        <p>Si deseas acelerar aun más tu aprendizaje, puedes optar por pagar 9 USD para acceder a la versión premium de este curso, donde recibirás videos con la solución y explicación detallada de los ejercicios. Así cómo tres secciones más que la versión gratuita. También tendrás acceso un foro donde podrás contactarnos en caso de cualquier duda</p>
      </section>-->
    </section>
  </section>
</template>

<style scoped>
css {
  all: unset
}

.container {
  border-top: 10px solid #ffc400;
}
@keyframes intro-animation {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.main-content {
  max-width: 780px;
  margin: 0 auto;
  font-size: 1.15rem;
  animation: intro-animation 3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
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

.first-copy h2 {
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
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
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
  box-shadow: 0 20px 25px -5px rgba(249, 236, 230, 0.5),
    0 10px 10px -5px rgba(249, 236, 230, 0.2);
}

@media (max-width: 768px) {
  .main-content {
    padding: 30px;
  }
  .main-header h1 {
    font-size: 2rem;
    margin: 0;
  }
}

.register {
  all: unset;
  width: 180px;
  height: 36px;
  background: #039fe3;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.5s;
  color: #f9f9f9;
  margin-bottom: 50px;
}

.register:hover {
  box-shadow: inset 0px 0px 0px 2px #039fe3;
  background: transparent;
  transform: translateY(-2px);
  color: #039fe3;
}
</style>