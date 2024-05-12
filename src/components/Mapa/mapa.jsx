import './mapa.css'
import mapaMuestra from '../../assets/img/mapamuestra.jpg'


const Mapa = () => {
    return(
        <div className='mapa'>
            
            <div className='tituloMapa'>
                <h3>
                    Rinkel trail cuenta con una extensa flota de unidades propias que combinada con nuestra exclusiva red de prestadores asegura la cobertura en toda la argentina y paises limitrofes.
                </h3>
            </div>

             <img src={mapaMuestra} alt="" />
        </div>
    )
}

export default Mapa