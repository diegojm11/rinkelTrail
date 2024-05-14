import './mapa.css'
import mapaArg from '../../assets/img/mapaArg.jpg'


const Mapa = () => {
    return(
        <div className='mapa'>
            
            <div className='mapaImg'>
                <img src={mapaArg} alt="" />
            </div>

            <div className='tituloMapa'>
                <h3>
                    Rinkel trail cuenta con una extensa flota de unidades propias que combinada con nuestra exclusiva red de prestadores asegura la cobertura en toda la argentina y paises limitrofes.
                </h3>
            </div>

        </div>
    )
}

export default Mapa