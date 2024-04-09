import './ayuda.css'
import carIcon from '../../assets/img/carIcon.png'
import remolqueIcon from '../../assets/img/remolqueIcon.png'
import gpsIcon from '../../assets/img/gpsIcon.png'
const Ayuda = () => {
    return (
        <div className='ayuda'>
            <h2 className='ayudaTexto'>Guia sobre como Rinkel brinda asistencia inmediata</h2>
            <div className="ayudaCards">
                    <div className='pasos'>
                        <img src={carIcon} alt="" />
                        <h3>Paso 1</h3>
                        <h1>Informar Problema</h1>
                        <p>Contáctenos con el problema y la ubicación de su vehículo utilizando nuestra aplicacion o linea directa.</p>
                    </div>    
                    <div className='pasos'>
                        <img src={gpsIcon} alt="" />
                        <h3>Paso 2</h3>
                        <h1>Envio Rapido</h1>
                        <p>Enviamos inmediatamente la unidad de servicio más cercana a su ubicación para obtener ayuda</p>
                    </div>
                    <div className='pasos'>
                        <img src={remolqueIcon} alt="" />
                        <h3>Paso 3</h3>
                        <h1>Continuación Segura</h1>
                        <p>Nuestro equipo llega al lugar y remolca su vehículo hasta el destino acordado</p>
                    </div>
            </div>  
        </div>      
    )
}

export default Ayuda