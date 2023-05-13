import React from 'react'
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Menu.css';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);   

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;   
            const homeSection = document.getElementById('Home');       
            const aboutSection = document.getElementById('SobreMi');           
            const summarySection = document.getElementById('Resumen');
            const portafolioSection = document.getElementById('Portafolio');
            const contactSection = document.getElementById('Contacto');


            if (scrollPosition === homeSection.offsetTop) {
                setSelectedItemIndex(0);
              } else if (scrollPosition >= homeSection.offsetTop && scrollPosition < aboutSection.offsetTop) {
                setSelectedItemIndex(1);
              } else if (scrollPosition >= aboutSection.offsetTop && scrollPosition < summarySection.offsetTop) {
                setSelectedItemIndex(2);
              } else if (scrollPosition >= summarySection.offsetTop && scrollPosition < portafolioSection.offsetTop) {
                setSelectedItemIndex(3);
              } else if (scrollPosition >= portafolioSection.offsetTop && scrollPosition < contactSection.offsetTop) {
                setSelectedItemIndex(4);
              } else if (scrollPosition >= contactSection.offsetTop) {
                setSelectedItemIndex(5);
              }
        };
        window.addEventListener('scroll', handleScroll);

        return() => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, [])
     
 
    const handleItemClick = (index) =>{
        if (selectedItemIndex === index){
            setSelectedItemIndex(index) 
        }                            
    };

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };   

    /* Menu de navegacion*/ 
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-light '>

                <div className='container'>
                    
                    <button
                        className={`navbar-toggler ${isOpen ? '' : 'collapsed'}`}
                        type='button'
                        onClick={toggleNav}
                        data-toggle='collapse'
                        data-target='#navbarNav'
                        aria-controls='navbarNav'
                        aria-expanded={isOpen}
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                
                    <div className={`collapse navbar-collapse ${isOpen ? "show" : ''}`} id='navbarNav'>
                        <div className='menu-container'>
                            <nav id="navbar" className="navbar nav-menu">
                                <ul className='navbar-nav ml-auto mb-lg-O flex-column'>

                                    <li className={selectedItemIndex === 0 ? "nav-item active" : "nav-item"}>
                                        <a className='nav-link' href='#Home' onClick={() => handleItemClick(0)} >
                                        <i className="bi bi-house" style={{display: selectedItemIndex !== 0 ? 'inline-block' : 'none'}}></i>
                                        <span className='item-text' style={{display: selectedItemIndex === 0 ? 'inline-block' : 'none'}}>Home</span></a></li>

                                    <li className={selectedItemIndex === 1 ? "nav-item active" : "nav-item"}>
                                        <a className='nav-link' href='#SobreMi' onClick={() => handleItemClick (1)}>
                                        <i className="bi bi-person" style={{display: selectedItemIndex !== 1 ? 'inline-block' : 'none'}}></i>
                                        <span className='item-text' style={{display: selectedItemIndex === 1 ? 'inline-block' : 'none'}}>Sobre Mi</span></a></li>

                                    <li className={selectedItemIndex === 2 ? "nav-item active" : "nav-item"}>
                                        <a className='nav-link' href='#Resumen' onClick={() => handleItemClick(2)}>
                                            <i className="bi bi-file-earmark-check" style={{display: selectedItemIndex !== 2 ? 'inline-block' : 'none'}}></i>
                                            <span className='item-text' style={{display: selectedItemIndex === 2 ? 'inline-block' : 'none'}}>Resumen</span></a></li>

                                    <li className={selectedItemIndex === 3 ? "nav-item active" : "nav-item"}>
                                        <a className='nav-link' href='#Portafolio' onClick={() => handleItemClick(3)}>
                                            <i className="bi bi-briefcase" style={{display: selectedItemIndex !== 3 ? 'inline-block' : 'none'}}></i>
                                            <span className='item-text' style={{display: selectedItemIndex === 3 ? 'inline-block' : 'none'}}>Portafolio</span></a></li>                                   

                                    <li className={selectedItemIndex === 4 ? "nav-item active" : "nav-item"}>
                                        <a className='nav-link' href='#Contacto' onClick={() => handleItemClick(4)}>
                                            <i className="bi bi-envelope" style={{display: selectedItemIndex !== 4 ? 'inline-block' : 'none'}}></i>
                                            <span className='item-text' style={{display: selectedItemIndex === 4 ? 'inline-block' : 'none'}}>Contacto</span></a></li>
                                </ul>
                            </nav>

                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Menu