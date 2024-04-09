import Star from '../../assets/img/star.svg'
import Switch from '../../assets/img/switch.svg'
import Check from '../../assets/img/check.svg'
import './cardPlanes.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)
const handleClick = () => {
    Swal.fire({
        imageUrl: "https://placeholder.pics/svg/500x300",
        imageHeight: 300,
        imageAlt: "A tall image"
      });
}

const CardPlanes = () => {
return (
    <div className="cardContainer">

                    <div class="card">
                                <div class="card-body">
                                    <img className='star' src={Star} alt="" />
                                    <h2 class="card-title">Base</h2>
                                    <div className='precio'>
                                        <h5 class="card-title">$10.000</h5>
                                        <div className='detallePrecio'>
                                            <h4>por mes</h4>
                                            <h4 className='OA'>opción anual</h4>
                                            <div className='imgg'><img src={Switch} alt="" /></div>    
                                        </div>
                                    </div>
                                    <h2 class="card-title">150 km</h2>
                                        <div className='detalleCard'>
                                            <img src={Check} alt="" />
                                            <p class="card-text">Remolque y asistencia mecanica </p>
                                        </div>
                                        <div className='detalleCard'>
                                            <img src={Check} alt="" />
                                            <p class="card-text">Regreso o continuacion de viaje</p>
                                            </div>
                                        <div className='detalleCard'>
                                            <img src={Check} alt="" />
                                            <p class="card-text">Viaticos hasta $35.000</p>
                                        </div>
                                        <div className='detalleCard'>
                                            <img src={Check} alt="" />
                                            <p class="card-text">Asistencia legal telefonica</p>
                                        </div>
                                        
                                        <div class="d-grid gap-2 mt-4">
                                            <button onClick={handleClick} class="btn btn-outline-light" type="button">Ver detalle</button>
                                        </div>
                                </div>
                     </div>

                     <div class="card">
                                <div class="card-body">
                                    <img className='star' src={Star} alt="" />
                                    <img className='star' src={Star} alt="" />
                                
                                    <h2 class="card-title">Intermedio</h2>
                                    <div className='precio'>
                                        <h5 class="card-title">$12.000</h5>
                                        <div className='detallePrecio'>
                                            <h4>por mes</h4>
                                            <h4 className='OA'>opción anual</h4>
                                            <div className='imgg'><img src={Switch} alt="" /></div>    
                                        </div>
                                    </div>
                                    <h2 class="card-title">300 km</h2>
                                        <div className='detalleCard'>
                                            <img src={Check} alt="" />
                                            <p class="card-text">Remolque y asistencia mecanica </p>
                                        </div>
                                        <div className='detalleCard'>
                                            <img src={Check} alt="" />
                                            <p class="card-text">Regreso o continuacion de viaje</p>
                                            </div>
                                        <div className='detalleCard'>
                                            <img src={Check} alt="" />
                                            <p class="card-text">Viaticos hasta $35.000</p>
                                        </div>
                                        <div className='detalleCard'>
                                            <img src={Check} alt="" />
                                            <p class="card-text">Asistencia legal telefonica</p>
                                        </div>
                                        
                                        <div class="d-grid gap-2 mt-4 ">
                                            <button onClick={handleClick} class="btn btn-outline-light " type="button">Ver detalle</button>
                                        </div>
                                </div>
                     </div>
                     <div class="card">
                                <div class="card-body">
                                    <img className='star' src={Star} alt="" />
                                    <img className='star' src={Star} alt="" />
                                    <img className='star' src={Star} alt="" />
                                    <h2 class="card-title">Premium</h2>
                                    <div className='precio'>
                                        <h5 class="card-title">$15.000</h5>
                                        <div className='detallePrecio'>
                                            <h4>por mes</h4>
                                            <h4 className='OA'>opción anual</h4>
                                            <div className='imgg'><img src={Switch} alt="" /></div>    
                                        </div>
                                    </div>
                                    <h2 class="card-title">500 km</h2>
                                        <div className='detalleCard'>
                                            <img src={Check} alt="" />
                                            <p class="card-text">Remolque y asistencia mecanica </p>
                                        </div>
                                        <div className='detalleCard'>
                                            <img src={Check} alt="" />
                                            <p class="card-text">Regreso o continuacion de viaje</p>
                                            </div>
                                        <div className='detalleCard'>
                                            <img src={Check} alt="" />
                                            <p class="card-text">Viaticos hasta $50.000</p>
                                        </div>
                                        <div className='detalleCard'>
                                            <img src={Check} alt="" />
                                            <p class="card-text">Asistencia legal telefonica</p>
                                        </div>
                                        
                                        <div class="d-grid gap-2 mt-4">
                                            <button onClick={handleClick} class="btn btn-outline-light" type="button">Ver detalle</button>
                                        </div>
                                </div>
                     </div>
                        
                            
                            
            
            </div>
)
}

export default CardPlanes