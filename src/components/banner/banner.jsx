import { useState } from 'react';
import logoRinkel from '../../assets/img/logoRinkel.png';
import './banner.css'
import { useEffect } from 'react';

const Banner = () => {

  const [bannerScrolled, setBannerScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setBannerScrolled(true);
      } else {
        setBannerScrolled(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    
  
  
  
    return (
        <div id='home' className={`leadImg ${bannerScrolled ? 'achicarImg' : ''}`}>
              
                <div className='textoBannerContainer '>    
                    <div className='textoBanner'>
                        <img src={logoRinkel} alt="" />
                        <h1>Servicios de Asistencia Vehicular</h1>
                    </div>

                  
                </div>
                
                    

             
        </div>  
    )
}

export default Banner