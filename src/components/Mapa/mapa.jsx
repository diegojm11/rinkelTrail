import './mapa.css'
import mapaArg from '../../assets/img/mapaArg.jpg'


const Mapa = () => {
    return(
        <div className='mapa'>
            
            <div className='mapaImg'>
                <img src={mapaArg} alt="" />
            </div>
            
           <span className='punto1'></span>
           <span className='punto1-'></span>
           <span className='punto2'></span>
           <span className='punto2-'></span>
           <span className='punto3'></span>
           <span className='punto3-'></span>
           <span className='punto4'></span>
           <span className='punto4-'></span>
           <span className='punto5'></span>
           <span className='punto5-'></span>
            <div className='tituloMapa'>

                <h2>C  O  B  E  R  T  U  R  A </h2>
                <h3>
                    Rinkel trail cuenta con una extensa flota de unidades propias que combinada con nuestra exclusiva red de prestadores asegura la cobertura en toda la argentina y paises limitrofes.
                </h3>
            </div>

        </div>
    )
}

export default Mapa