import './cardNosotros.css'
import nosotros1 from '../../assets/img/nosotros1.jpg'
import nosotros2 from '../../assets/img/nosotros2.jpg'
import nosotros3 from '../../assets/img/nosotros3.jpg'
import nosotros4 from '../../assets/img/nosotros4.jpg'
import nosotros5 from '../../assets/img/nosotros5.jpg'
import nosotros6 from '../../assets/img/nosotros6.jpg'
import callCenter from '../../assets/img/callcenter.svg'
import car from '../../assets/img/car.svg'
import hs from '../../assets/img/hs.svg'
import camion from '../../assets/img/camion.svg'
import argentina from '../../assets/img/argentina.svg'
import calificado from '../../assets/img/calificado.svg'
import wallet from '../../assets/img/wallet.svg'
const CardNosotros = () => {
    return(
        <div className='cardNosotrosContainer'>
                <div className='cardNosotrosCards'>
                    <div className='cardNosotrosTexto'>
                        
                    <img src={camion} alt="" />
                        <h1>Flota Propia</h1>
                        <p>Mas de 80 unidades a disposicion y bases distribuidas estrategicamente por todo el país.</p>
                    </div>
                </div>
                <div className='cardNosotrosCards'>

                    <div className='cardNosotrosTexto'>
                        
                    <img src={hs} alt="" />
                        <h1>Atención 24 hs.</h1>
                        <p>Call center con un equipo de operadores altamente calificados que transforman llamados en asistencias.</p>
                    </div>
                </div>
                <div className='cardNosotrosCards'>

                    <div className='cardNosotrosTexto'>
                        
                    <img src={calificado} alt="" />
                        <h1>Personal Calificado</h1>
                        <p>Nuestro personal de expertos esta equipado para asistir cualquier vehiculo rapida y eficientemente.</p>
                    </div>
                </div>
                <div className='cardNosotrosCards'>

                    <div className='cardNosotrosTexto'>
                    <img src={argentina} alt="" />
                        <h1>Red Nacional</h1>
                        <p>Acceso a una amplia red de asistencia en todo el país, para que la ayuda siempre este cerca.</p>
                    </div>
                </div>
               
                <div className='cardNosotrosCards'>

                    <div className='cardNosotrosTexto'>
                        
                    <img src={wallet} alt="" />
                        <h1>Precios Transparentes</h1>
                        <p>Sin costos ocultos, solo precios sencillos para todos nuestros servicios.</p>
                    </div>
                </div>
                <div className='cardNosotrosCards'>

                    <div className='cardNosotrosTexto'>
                    <img src={car} alt="" />
                        <h1>Servicio Eficiente</h1>
                        <p>Buscamos que nuestros clientes tengan una experiencia positiva en todo momento.</p>
                    </div>
                </div>


              
        </div>
    )
}

export default CardNosotros
