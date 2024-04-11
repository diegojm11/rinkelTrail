import './navbar.css'
import Sun from '../../assets/img/sun.svg'
import {HashLink as Link} from 'react-router-hash-link'
const NavBar =() => {

  const navEl = document.querySelector('.navbar');
  document.body.addEventListener('scroll', ()=>{
    if (document.body.scrollY > 30){
      navEl.classList.add('navbar-scrolled')
    } else if (document.body.scrollY < 30){
      navEl.classList.remove('navbar-scrolled')
    }
  })


  
    return (
        <div className='barra'> 
        
            <nav class="navbar fixed-top navbar-expand-lg">
              <div class="container-fluid">
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse  " id="navbarNav">
                  <ul class="navbar-nav " >
                    <li class="nav-item">
                      <Link to='#nosotros' class="nav-link " aria-current="page">
                      Nosotros
                      </Link>
                      
                    </li>
                    <li class="nav-item">
                      <Link to="#nosEligen"  class="nav-link " aria-current="page" >Nos eligieron </Link>
                    </li>
                  

                  
                  </ul>
                  <div className='rinkelBrand' >
                    <img src={Sun} alt="" />
                    <a class="navbar-brand" >Rinkel Trail</a>
                  </div>
                  <ul class="navbar-nav"> 
                 
                    
                    <li class="nav-item">
                      <Link to="#contacto"  class="nav-link " aria-current="page">Contacto </Link>
                    </li>
                    <li class="nav-item">
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