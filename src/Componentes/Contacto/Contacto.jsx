import { useState } from 'react';
import './Contacto.css'
import "aos/dist/aos.css"

const Contacto = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías enviar los datos del formulario a través de una petición HTTP
  };


  return (
    <section id="Contacto" className="contact">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2 className='titulo-principal'>Contacto</h2>
        </div>          

        <div className="info">
          <div className='informacion'>
          <div className="address">
            <i className="bi bi-geo-alt"></i>
            <h4>Ubicación:</h4>
            <p>Bogotá, Colombia</p>
          </div>

          <div className="email">
            <i className="bi bi-envelope-at"></i>
            <h4>Email:</h4>
            <p>galindezadrian4@gmail.com</p>
          </div>

          <div className="phone">
            <i className="bi bi-phone"></i>
            <h4>Teléfono:</h4>
            <p>+57 302-663-2985</p>
          </div>
          </div>         

            <form action="https://formspree.io/f/xwkjzbaa" method="POST" onSubmit={handleSubmit}>

              <div className="fila">

                <div className='juntos'>
                <div className="form-group">
                  <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Agrega tu nombre completo" required />
                </div>

                <div className="form-group">
                  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Agrega tu correo" required />
                </div>
                </div>

                <div className="form-group">
                  <input className='asunto' type="subject" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Agrega el asunto" required />
                </div>

                <div className="form-group">
                  <textarea className="form-control" id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Agrega el mensaje"></textarea>
                </div>

                <div className="text-center"><button type="submit">Enviar</button></div>
              </div>
            </form>
            </div>
          </div>       
      
    </section>
  )
}

export default Contacto
