import CardPlanes from '../cardPlanes/cardPlanes'
import './planes.css'

const Planes = () => {
    return (
        <div id='planes' className='planes'>
            <div className='texto' >
                    <h1>Planes</h1>
                    <h5>Elija un plan que se ajuste a sus necesidades y presupuesto, con precios trasparentes y sin cargos ocultos.</h5>
            </div>
        <CardPlanes/>
        </div>
    )
}

export default Planes
