import './footer.css'
import LogoBlanco from '../../assets/img/logoRinkelBlanco.png'

const Footer = () => {
    return (
        <div className='footer'>
         
            
        
            <div>
                <img src={LogoBlanco} alt="" />
                <h3>Direccion: Puan 5403, Caseros, Provincia de Buenos Aires</h3>
                <div>
                    <h4>Politicas de Privacidad</h4>
                    <h4>Terminos de servicio</h4>
                </div>
            </div>
        </div>
    )
}

export default Footer