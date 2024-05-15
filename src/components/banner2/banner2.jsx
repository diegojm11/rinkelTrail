import './banner2.css'
import Capturepng from '../../assets/img/capture.png'
import { useEffect } from 'react';
import { useState } from 'react';
 const Banner2 = () => {

    const [hiddenElements, setHiddenElements] = useState([]);

    useEffect(()=>{
        
    const hiddenElements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) =>{
            if (entry.isIntersecting){
                entry.target.classList.add('show');
            } else{
                entry.target.classList.remove('show')
            }
        });
    });

    hiddenElements.forEach((el) => observer.observe(el));
  
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };

    }, []);


    useEffect(()=>{
        
        const hiddenElements = document.querySelectorAll('.hidden2');
    
        const observer2 = new IntersectionObserver((entries) => {
            entries.forEach((entry) =>{
                console.log(entry)
                if (entry.isIntersecting){
                    entry.target.classList.add('show2');
                } else{
                    entry.target.classList.remove('show2')
                }
            })
        })
    
        hiddenElements.forEach((el) => observer2.observe(el));
      
        return () => {
          hiddenElements.forEach((el) => observer2.unobserve(el));
        };
    
        }, []);



    

    return (
        <div id= 'nosotros' className='banner2'>

            <div  id='textoeimagen'  >

                    <div id='fotoInstitucionalRinkel' className='hidden2' >
                        <img src={Capturepng} alt="" />
                    </div>
                
                    <div   id='textBox' className='hidden' >
                    <p>En 2001 creamos rinkel.<br></br> Nos propusimos convertirnos en especialistas en asistencia vehicular, ser el socio de confianza de las compañías de seguros y de sus asegurados.<br></br>    
                         Hoy somos una empresa nacional que sigue creciendo.
                        </p>
                         </div>

                    
           
            </div>

          
         
        </div>
    )
}

export default Banner2
