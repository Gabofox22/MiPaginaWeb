import './App.css';
import { BrowserRouter} from 'react-router-dom';
import Menu from './Componentes/Navegacion/Menu';
import HeroSection from './Componentes/Hero/HeroSection'
import SobreMi from './Componentes/Sobre Mi/SobreMi';
import Resumen from './Componentes/Resumen/Resumen';
import Portafolio from './Componentes/Portafolio/Portafolio';
import Contacto from './Componentes/Contacto/Contacto';
import Footer from './Componentes/Footer/Footer';

function App() {
 
  return (
    <div className='App'>
      <BrowserRouter>        
        <Menu />   
          <HeroSection/>
          <SobreMi />          
          <Resumen />
          <Portafolio />          
          <Contacto />
      </BrowserRouter>
      <Footer/>
      
    </div>
  );
}

export default App;
