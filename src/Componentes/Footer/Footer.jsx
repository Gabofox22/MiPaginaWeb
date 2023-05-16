import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="bg-light py-5">
            <div className="container">
                <h3 className='Footer-final'>Adrían Galíndez</h3>
                <p className='Despedida'>Gracias por visitar mi sitio web. Si tienes alguna pregunta o comentario, no dude en ponerse en contacto conmigo.</p>
                <div className="Redes">
                    <a href="#t"><i className="bi bi-twitter"></i></a>
                    <a href="#f"><i className="bi bi-facebook"></i></a>
                    <a href="#i"><i className="bi bi-instagram"></i></a>
                    <a href="https://github.com/Gabofox22/MiPagina"><i className="bi bi-github"></i></a>
                    <a href="#l"><i className="bi bi-linkedin"></i></a>
                </div>
                <div className="copyright">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Adrián Galíndez</span></strong>. All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;