import logoRinkel from '../../assets/img/logoRinkel.png';
import './banner.css'

const Banner = () => {

 

    const bannerEl = document.querySelector('.leadImg');
    window.addEventListener('scroll', ()=>{
      if (window.scrollY > 120){
        bannerEl.classList.add('achicarImg')
      } else if (window.scrollY < 120){
        bannerEl.classList.remove('achicarImg')
      }
    })
  
  
  
    return (
        <div id='home' className='leadImg'>
              
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