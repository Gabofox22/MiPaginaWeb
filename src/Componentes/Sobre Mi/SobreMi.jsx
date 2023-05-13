import './SobreMi.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import Skill from './Skill'


const SobreMi = () => {  
  useEffect(() =>{
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
      transition: 'all .3s ease-in-out',
      
    });
},[]);
 
  return (
    <section id='SobreMi' className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2 className='titulo-principal'>Sobre Mi</h2>
          <p>Apasionado por la tecnología y el desarrollo de software, soy un programador junior en busca de nuevas oportunidades para crecer y aprender en el mundo de la programación.
              Me considero una persona proactiva, organizada, y con habilidades para trabajar en equipo, lo que me permite enfrentar desafios de manera eficiente y colaborativa. Me gusta estar actualizado
              en las ultimas tendencias y tecnologias, lo que me permite estar preparado para adaptarme a cualquier proyecto que se me presente. Ademas, soy una persona comprometida con la calidad y la excelencia 
              en el trabajo, siempre buscando superar las expectativas ybrindar soluciones efectivasy eficiente a los clientes y usuarios. </p>
        </div>

        <div className="row">
          <div className="col-lg-4">            
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Desarrollador Web Front-End.</h3>
            <p className="fst-italic">
            Como desarrollador Junior front end, puedo constribuir al diseño y desarrollo de sitios web atractivos y funcionales. Me gusta trabajar con HTML, CSS, JavaScript y React para crear interfaces de usuarios 
            atractivas y faciles de usar. Tengo habilidades en la creación de diseños responsivos y en la integracion con API. Además, estoy interesado en seguir aprendiendo y mejorando mis habilidades para estar al dia 
            en las ultimas tecnologias y tendencias en el desarrollo web.         
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Cumpleaños:</strong> <span>22 Feb 1991</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Telefono:</strong> <span>+57-302-663-2985</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Ciudad:</strong> <span>Bogota, Colombia</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Edad:</strong> <span>32</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Grado:</strong> <span>Junior</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Correo:</strong> <span>galindezadrian4@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>  
            <p className='presentacion'>
              Apenas mi historia a comenzado pero aquí verán todos mis proyectos y si te gusta uno puedes contactarme:
            </p>       
            
          </div>
        </div>
      </div>    

      <Skill />    
      
    </section>
    
    
  )
}

export default SobreMi


