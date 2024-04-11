import Amca from '../../assets/img/logos/amca1.png'
import Ausa from '../../assets/img/logos/Ausa1.png'
import Caledonia from '../../assets/img/logos/caledonia1.png'
import Escudo from '../../assets/img/logos/escudo1.png'
import FederalSeguros from '../../assets/img/logos/federalseguros1.jpg'
import Metropol from '../../assets/img/logos/metropol1.png'
import NacionSeguros from '../../assets/img/logos/Nacion-seguros1.png'
import Orbis from '../../assets/img/logos/orbis1.png'
import OrganizacionPalermo from '../../assets/img/logos/organizacionpalermo1.png'
import Patronal from '../../assets/img/logos/patronal1.png'
import Providencia from '../../assets/img/logos/providencia1.png'
import './slideBar.css'

const SlideBar = () => {
 
    return (
        <div className='sliderContainer' id='nosEligen'>

            <div id='lema' className='hidden'>
                <h4>Nuestro objetivo es la satisfacción total de quienes nos eligen.</h4>
            </div>
  
        
                <div className="slider">
                    
                        <ul className="marcas">
                            <li className="marcas-logo" > <img src={Amca}  alt="" /> </li>
                            <li className="marcas-logo" > <img src={Ausa}  alt="" /> </li>
                            <li className="marcas-logo" > <img src={Caledonia}  alt="" /> </li>
                            <li className="marcas-logo" > <img src={Escudo}  alt="" /> </li>
                            <li className="marcas-logo" > <img src={FederalSeguros}  alt="" /> </li>
                            <li className="marcas-logo" > <img src={Metropol}  alt="" /> </li>
                            <li className="marcas-logo" > <img src={NacionSeguros}  alt="" /> </li>
                            <li className="marcas-logo" > <img src={Orbis}  alt="" /> </li>
                            <li className="marcas-logo" > <img src={OrganizacionPalermo}  alt="" /> </li>
                            <li className="marcas-logo" > <img src={Patronal}  alt="" /> </li>
                            <li className="marcas-logo" > <img src={Providencia}  alt="" /> </li>

                            <li className="marcas-logo" > <img src={Amca}  alt="" /> </li>
                            <li className="marcas-logo" > <img src={Ausa}  alt="" /> </li>
                            <li className="marcas-logo" > <img src={Caledonia}  alt="" /> </li>
                            <li className="marcas-logo" > <img src={Escudo}  alt="" /> </li>
                            <li className="marcas-logo" > <img src={FederalSeguros}  alt="" /> </li>
                            <li className="marcas-logo" > <img src={Metropol}  alt="" /> </li>
                            <li className="marcas-logo" > <img src={NacionSeguros}  alt="" /> </li>
                            <li className="marcas-logo" > <img src={Orbis}  alt="" /> </li>
                            <li className="marcas-logo" > <img src={OrganizacionPalermo}  alt="" /> </li>
                            <li className="marcas-logo" > <img src={Patronal}  alt="" /> </li>
                            <li className="marcas-logo" > <img src={Providencia}  alt="" /> </li>
                        </ul>
                </div>
        </div>
    )
} 

export default SlideBar