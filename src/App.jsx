import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComponents from './components/NavbarComponents'
import Homepage from './pages/Homepage'
import Services from './pages/Services';
import Results from './pages/Results';
import Aboutus from './pages/Aboutus';
import Faq from './pages/Faq';
import Booking from './pages/Booking';
import Footer from './components/Footer';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import ViewPatientData from './components/ViewPatientData';

function App() {
  return (
    <BrowserRouter>
      <div className='w-full h-screen'>
      <NavbarComponents/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/results' element={<Results/>}/>
          <Route path='/aboutus' element={<Aboutus/>}/>
          <Route path='/faq' element={<Faq/>}/>
          <Route path='/booking' element={<Booking/>}/>
          <Route path='/admin' element={<AdminLogin/>}/>
          <Route path='/admindashboard' element={<AdminDashboard/>}/>
          <Route path='/viewpatient/:id' element={<ViewPatientData/>}/>
          <Route path='*' element={<h1>404 not found</h1>}/>
        </Routes>
      <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
