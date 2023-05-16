import React, { useState } from 'react'
import './Portafolio.css'
import Modal from './Modal'

const Portafolio = () => {
  const [selectedOption, setSelectedOption] = useState('all')
  const [currentImagenId, setCurrentImagenId] = useState(null)
  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseClick = () => {
    setModalOpen(false);
  };

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
    {
      id: 1,
      category: 'app',
      fecha: '15 Mayo, 2023', cliente: 'Adrian Galindez',
      title: 'Mis aplicaciones',
      description: 'Aquí podras ver cada aplicación creada',
      descriptionModal: 'Para este proyecto se utilizaron las siguientes programas: JavaScript, Html, CSS y React. Y la herramientas de trabajos fueron: Visual Studio Code',
      imagenModal1: "https://i.pinimg.com/originals/64/9e/cd/649ecd3e1431653709b03df02be499cd.jpg",
      imagenModal2: "https://i.pinimg.com/originals/76/3c/ec/763cec4bfb23c0617732f2c141f9fecc.jpg",
      imagenModal3: "https://i.pinimg.com/originals/82/ea/e3/82eae3b9181479ac60a7f2528df9a27f.jpg",
      image: "https://i.pinimg.com/564x/5a/29/9e/5a299e73b8f04c3441c777204a5f2871.jpg",
      url: 'https://mi-pagina-orcin.vercel.app/'
    },
    {
      id: 2,
      category: 'games',
      fecha: '15 Mayo, 2023',
      cliente: 'Adrian Galindez',
      title: 'Mis juegos',
      description: 'Aquí podras ver cada juego creado',
      descriptionModal: 'Para este proyecto se utilizaron las siguientes programas: JavaScript, Html, CSS y React. Y la herramientas de trabajos fueron: Visual Studio Code',
      imagenModal1: "https://i.pinimg.com/originals/de/93/b3/de93b3276b8752ad44d8ab50e6f1b688.jpg",
      imagenModal2: "https://i.pinimg.com/originals/7b/4f/b2/7b4fb22c5c842b78963d81ef138b7d67.jpg",
      imagenModal3: "https://i.pinimg.com/originals/cf/a7/01/cfa701bc665fbad2b82d6fbbf7ddc7cc.png",
      image: "https://i.pinimg.com/564x/58/96/13/5896133610589492df743852bc7042c2.jpg",
      url: 'https://mi-pagina-orcin.vercel.app/'
    },
    {
      id: 3,
      category: 'web',
      fecha: '15 Mayo, 2023',
      cliente: 'Adrian Galindez',
      title: 'Mis páginas web',
      description: 'Aquí puedes ver cada página web creada',
      descriptionModal: 'Para este proyecto se utilizaron las siguientes programas: JavaScript, Html, CSS y React. Y la herramientas de trabajos fueron: Visual Studio Code',
      imagenModal1: "https://i.pinimg.com/750x/0e/b8/17/0eb817e9af547fd017c1657135617a57.jpg",
      imagenModal2: "https://i.pinimg.com/originals/93/e5/ed/93e5edb5a9a3e057960477f9cb221ff8.webp",
      imagenModal3: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/d476c794536561.5e8199ae22332.png",
      image: "https://i.pinimg.com/564x/6d/4d/01/6d4d0132f59d61e547e20e717d3a928f.jpg",
      url: 'https://mi-pagina-orcin.vercel.app/'
    },
  ];

  const filteredProjets = selectedOption === 'all' ? projects : projects.filter(project => project.category === selectedOption)

  return (
    <section id='Portafolio' className="portfolio ">
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
                    <Modal modalOpen={modalOpen} handleCloseClick={handleCloseClick} projects={projects} />
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