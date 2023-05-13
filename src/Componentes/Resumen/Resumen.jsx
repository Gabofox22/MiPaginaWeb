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
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Senior graphic design specialist</h4>
              <h5>2019 - Present</h5>
              <p><em>Experion, New York, NY </em></p>
              <ul>
                <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Graphic design specialist</h4>
              <h5>2017 - 2018</h5>
              <p><em>Stepping Stone Advertising, New York, NY</em></p>
              <ul>
                <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Resumen