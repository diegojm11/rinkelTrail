import './App.css'
import {BrowserRouter} from 'react-router-dom'
import Banner from './components/banner/banner'
import Banner2 from './components/banner2/banner2'
import Consulta from './components/consulta/consulta'
import Footer from './components/footer/footer'
import Nosotros from './components/nosotros/nosotros'
import SlideBar from './components/slideBar/slideBar'
import NavBar from './components/navBar/navbar'


function App() {
  
  return (
    <div className='app'>
      <BrowserRouter>
             <NavBar/>    
              <Banner/>
              <Banner2/>
              
              <Nosotros/>
              <SlideBar/>
              <Consulta/>
              <Footer/>

       </BrowserRouter>

    </div>
  )
}

export default App
