import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Modal.css';

const Modal = ({ projects }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button className='btn btn-primary' onClick={handleOpenModal}>
                <i className='bi bi-link-45deg'></i>
            </button>
            {isOpen && (

                <div className='modal'>
                    <div className='modal-dialog modal-dialog-centered modal-lg'>

                        <button type='button' className='close' onClick={handleCloseModal}><span aria-hidden='true'>&times;</span></button>

                        <div className='modal-body' style={{ margin: '40px' }}>
                            <div className='row'>
                                <div className='imagenModal col-lg-6'>

                                    <Carousel fade>
                                        <Carousel.Item>
                                            <img
                                                className="img-fluid rounded mb-3 mb-lg-0"
                                                src={projects.imagenModal1}
                                                alt={projects.title}
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <img
                                                className="img-fluid rounded mb-3 mb-lg-0"
                                                src={projects.imagenModal2}
                                                alt={projects.title}
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <img
                                                className="img-fluid rounded mb-3 mb-lg-0"
                                                src={projects.imagenModal3}
                                                alt={projects.title}
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </div>

                                <div className='content-box col-lg-5'>
                                    <h5>Informacion del proyecto</h5>
                                    <ul className='list-unstyled'>
                                        <li><strong>Categoria:</strong> {projects.category}</li>
                                        <li><strong>Cliente:</strong> {projects.cliente}</li>
                                        <li><strong>Fecha:</strong> {projects.fecha}</li>
                                        <li><strong>URL del proyecto: </strong><a href={projects.url} target='_blank' rel='noopener noreferrer'>{projects.url}</a></li>
                                    </ul>
                                </div>
                                <h5 className='ultimoTitulo'>Resumen del Proyecto: </h5>
                                <p>{projects.descriptionModal}</p>
                            </div>
                        </div>
                    </div>
                </div >
            )}
        </>
    );
};

export default Modal;
