import '../banner3/banner3.css'
import Capture from '../../assets/img/capture.jpg'

const Banner3 = () => {
    return(
        <div className='banner3'> 
        
           <div className='parte1'>
                <div className='capture'>
                    <img src={Capture} alt="" />
                </div>

                <div className='cajaTexto'>
                    <p>En 2001 creamos rinkel. Nos propusimos convertirnos en especialistas en asistencia vehicular, brindando un servicio de excelencia. 
                        Hoy somos una empresa nacional que sigue creciendo.
                        </p>
                </div> 
            </div>

        </div>


    )
}

export default Banner3