import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComponents from './components/NavbarComponents'
import Homepage from './pages/Homepage'
import Services from './pages/Services';
import Results from './pages/Results';
import Aboutus from './pages/Aboutus';
import Faq from './pages/Faq';
import Booking from './pages/Booking';

function App() {
  return (
    <BrowserRouter>
      <NavbarComponents/>
      <div className='w-full h-screen'>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/results' element={<Results/>}/>
          <Route path='/aboutus' element={<Aboutus/>}/>
          <Route path='/faq' element={<Faq/>}/>
          <Route path='/booking' element={<Booking/>}/>
          <Route path='*' element={<h1>404 not found</h1>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
