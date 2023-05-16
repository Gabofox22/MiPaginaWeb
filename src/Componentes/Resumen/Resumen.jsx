import React from 'react'
import './Resumen.css'

const Resumen = () => {
  return (
    <section id="Resumen" className="resume">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2 className='titulo-principal'>Resumen</h2>
          <p>Soy un desarrollador junior apasionado por la tecnología y la programación. Tengo experiencia en el desarrollo de aplicaciones web utilizando tecnologías como React, Node.js, y MongoDB. Me considero una persona proactiva, responsable y enfocada en la calidad del trabajo. Siempre estoy en busca de nuevos retos y oportunidades para aprender y crecer como profesional.</p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Adrián Galíndez</h4>
              <p><em>Soy un desarrollador junior apasionado por crear aplicaciones web de alta calidad y solucionar problemas desafiantes. Me especializo en HTML, CSS, JavaScript y React, y estoy siempre buscando oportunidades para aprender y mejorar mis habilidades.</em></p>
              <ul>
                <li>Bogotá, Colombia</li>
                <li>(+57) 302-663-2985</li>
                <li>galindezadrian4@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Licenciado en Educación</h4>
              <h5>2007 - 2012</h5>
              <p><em>Universidad Nacional Experimental “Simón Rodriguez” </em></p>
              <p>Estudié educación con mención en matemáticas en Venezuela, donde adquirí conocimientos en cálculo, álgebra y estadística, entre otras áreas.</p>
            </div>
            <div className="resume-item">
              <h4>Programador Junior Front-End</h4>
              <h5>2022 - 2023</h5>
              <p><em>ALURA + ONE ORACLE NEXT EDUCATION</em></p>
              <p>En Alura, adquirí conocimientos sólidos en programación front-end y también pude desarrollarme en el campo de back-end, lo que me permitió tener una visión integral del desarrollo web.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Proyectos</h3>
            <div className="resume-item">
              <h4>Desarrolador Front-end</h4>
              <h5>2023 - Presente</h5>
              <p><em>Bogotá, Colombia</em></p>
              <ul>
                <li>Lideré en el diseño, desarrollo e implementación de la interfaz gráfica y el contenido de mi primera página web.</li>
                <li>Realicé tareas de programación en el front-end utilizando tecnologías como React.</li>
                <li>Trabajé en equipo, colaborando con otros miembros del proyecto para lograr una experiencia de usuario fluida y atractiva.</li>
                <li>Me aseguré de que el diseño y la funcionalidad de la página web fueran de alta calidad y cumplieran con los estándares modernos.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Desarrollador Front-end</h4>
              <h5>2023-Presente</h5>
              <p><em>SBogotá, Colombia</em></p>
              <ul>
                <li>Desarrollé una aplicación personalizada para un conjunto residencial, brindando soluciones tecnológicas para mejorar la gestión y comunicación interna.</li>
                <li>Colaboré estrechamente con el equipo de administración del conjunto residencial para comprender sus necesidades y requisitos específicos.</li>
                <li>Diseñé e implementé funcionalidades clave, como la gestión de pagos, reservas de áreas comunes y comunicación entre los residentes y la administración.</li>
                <li>Realicé pruebas exhaustivas para garantizar el rendimiento, la seguridad y la usabilidad de la aplicación en diferentes dispositivos y plataformas.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Resumen