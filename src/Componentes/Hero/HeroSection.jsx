import React from "react";
import "./HeroSection.css";
import { useState, useEffect,  } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css'


const HeroSection = () => {      
    const [typingText, setTypingText ] = useState('');    

    useEffect(() => {
        const strings = ['Diseñador', 'Desarrollador', 'Educador', 'Freelance', 'Musico'];
        let count = 0;
        let index = 0;
        let currentText = '';
        let isDeleting = false;

        const type = () => {
            if (count === strings.length){
                count = 0;
            }
        currentText = strings[count];

        if (isDeleting){
            setTypingText(currentText.substring(0, index -1));
            index--;

            if (index === 0){
                isDeleting = false;
                count++;
            }
        }else{
            setTypingText(currentText.substring(0, index +1));
            index++;

            if(index === currentText.length){
                isDeleting = true;
            }
        }
        setTimeout(type, 200);
        };
        setTimeout(type, 2000);
    }, []);
    

return(    
    <section id="Home" className="hero ">    
        <div className="hero-overlay"></div>        
        <div className="hero-content">
        <h1>Adrián Galíndez</h1>
        <h2>Yo soy: <span>{typingText}</span> </h2>
        </div>

        <div className="social-links">
        <a href="#twi" className="twitter"><i className="bi bi-twitter"></i></a>
        <a href="#fa" className="facebook"><i className="bi bi-facebook"></i></a>
        <a href="#inst" className="instagram"><i className="bi bi-instagram"></i></a>
        <a href="https://github.com/Gabofox22/MiPagina" className="github"><i className="bi bi-github"></i></a>
        <a href="#lin" className="linkedin"><i className="bi bi-linkedin"></i></a>
      </div>
    </section>
    
    
)


}

export default HeroSection;








