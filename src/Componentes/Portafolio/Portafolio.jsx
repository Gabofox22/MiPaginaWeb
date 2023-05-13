import React, { useState } from 'react'
import './Portafolio.css'

const Portafolio = () => {
  const [selectedOption, setSelectedOption] = useState('all')
  const [currentImagenId, setCurrentImagenId] = useState(null)
  
  const handleOptionClick = (option) => {
    setSelectedOption(option)
  }

  const handleMouseEnter = (id) => {
    setCurrentImagenId(id)
  }

  const handleMouseLeave = () => {
    setCurrentImagenId(null)    
  }


  const projects = [
    { id: 1, category: 'app', title: 'Mis aplicaciones', description: 'Aquí podras ver cada aplicación creada', image: "https://i.pinimg.com/564x/5a/29/9e/5a299e73b8f04c3441c777204a5f2871.jpg" },
    { id: 2, category: 'games', title: 'Mis juegos', description: 'Aquí podras ver cada juego creado', image: "https://i.pinimg.com/564x/58/96/13/5896133610589492df743852bc7042c2.jpg" },
    { id: 3, category: 'web', title: 'Mis páginas web', description: 'Aquí puedes ver cada página web creada', image: "https://i.pinimg.com/564x/6d/4d/01/6d4d0132f59d61e547e20e717d3a928f.jpg" },
  ];

  const filteredProjets = selectedOption === 'all' ? projects : projects.filter(project => project.category === selectedOption)

  return (
    <section id='Portafolio' className="portfolio section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2 className='titulo-principal'>Portfolio</h2>
          <p>Aquí se encuentran algunos de mis trabajos mas recientes</p>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
            <ul id="portfolio-flters">
              <li onClick={() => handleOptionClick('all')}>All</li>
              <li onClick={() => handleOptionClick('app')}>App</li>
              <li onClick={() => handleOptionClick('games')}>GAMES</li>
              <li onClick={() => handleOptionClick('web')}>Web</li>
            </ul>
          </div>
          <div className='projects'>
            {filteredProjets.map((projects) => (
              <div key={projects.id} className='tarjetas'>
                <img src={projects.image} alt={projects.title} 
                onMouseEnter={() => handleMouseEnter(projects.id)}
                onMouseLeave={() => handleMouseLeave()}
                className={`projects-image ${currentImagenId === projects.id ? 'opaque' : ""}`}
                />
                
                <div className='project-overlay'>
                  <h3>{projects.title}</h3>
                  <p>{projects.description}</p>
                <div className='icono-container'>
                  <i className='bi bi-link-45deg'></i>
                  <i className='bi bi-arrows-angle-expand'></i>
                </div>
                </div>                
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

export default Portafolio