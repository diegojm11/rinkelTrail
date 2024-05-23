import './navbar.css'
import RinkelLogocl from '../../assets/img/rinkellogoclaro.png'
import {HashLink as Link} from 'react-router-hash-link'
import { useState } from 'react';
import { useEffect } from 'react';
const NavBar =() => {

  const [navbarScrolled, setNavbarScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setNavbarScrolled(true);
      } else {
        setNavbarScrolled(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);





  

    return (
        <div className='barra'> 
        
            <nav className={`navbar ${navbarScrolled ? 'navbar-scrolled' : ''}`} >
              <div>
                
              

                <div  id="navbarNav">
                 
                  <ul  >
                    <li >
                      <Link to='#nosotros' class="nav-link " aria-current="page">
                      Nosotros
                      </Link>
                      
                    </li>
                    <li>
                      <Link to="#nosEligen"  class="nav-link " aria-current="page" >Nos eligieron </Link>
                    </li>
                  </ul>
                
                  <div className= {`rinkelBrand ${navbarScrolled ? '' : 'logo-scrolled'}`} >
                    <img src={RinkelLogocl} alt="" />
                  </div>


                  <ul className='ulDerecha'> 
                    <li >
                      <Link to="#contacto"  class="nav-link " aria-current="page">Contacto </Link>
                    </li>
                    
                    <li >
                      <Link to="#trabajaConNosotros"  class="nav-link " aria-current="page" >Trabaja Con Nosotros </Link>
                    </li>
                    
                  </ul>

                </div>
                
                
              </div>
            </nav>
            
        </div>
        
    )
}
export default NavBar