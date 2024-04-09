import './banner2.css'
import flotaPropia from '../../assets/img/flotaPropia.jpg'
 const Banner2 = () => {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) =>{
            console.log(entry)
            if (entry.isIntersecting){
                entry.target.classList.add('show');
            } else{
                entry.target.classList.remove('show')
            }
        })
    })

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
    

    
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

    const hiddenElements2 = document.querySelectorAll('.hidden2');
    hiddenElements2.forEach((el) => observer2.observe(el));
    

    return (
        <div id= 'nosotros' className='banner2'>

            <div  id='textoeimagen'  >

                    <div id='fotoInstitucionalRinkel' className='hidden2' >
                        <img src={flotaPropia} alt="" />
                    </div>
                
                    <div   id='textBox' className='hidden' >
                        <h1> Nosotros</h1>
                        <p>
                        EN 2001 CREAMOS RINKEL. NOS PROPUSIMOS CONVERTIRNOS EN ESPECIALISTAS EN ASISTENCIA VEHICULAR, BRINDANDO UN SERVICIO DE EXELENCIA.
                            HOY SOMOS UNA EMPRESA NACIONAL QUE SIGUE CRECIENDO. CON FLOTA PROPIA, RED DE PRESTADORES DE PRIMER NIVEL Y UNA AMPLIA COBERTURA EN ARGENTINA Y PAISES LIMITROFES.
                            </p>
                    </div>
           
            </div>

          
         
        </div>
    )
}

export default Banner2
