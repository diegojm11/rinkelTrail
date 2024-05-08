import './App.css'
import {BrowserRouter} from 'react-router-dom'
import Banner from './components/banner/banner'
import Banner2 from './components/banner2/banner2'
import Consulta from './components/consulta/consulta'
import Footer from './components/footer/footer'
import SlideBar from './components/slideBar/slideBar'
import NavBar from './components/navBar/navbar'
import Titulo from './components/titulo/titulo'
import Banner3 from './components/banner3/banner3'
import CardNosotros from './components/cardNosotros/cardNosotros'


function App() {
  
  return (
    <div className='app'>
      <BrowserRouter>
             <NavBar/>    
              <Banner/>
              <Titulo/>
              <Banner2/>
              <CardNosotros/>
  
              <SlideBar/>
              <Consulta/>
              <Footer/>

       </BrowserRouter>

    </div>
  )
}

export default App
