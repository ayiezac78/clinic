import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComponents from './components/NavbarComponents'
import Homepage from './pages/Homepage'
import Services from './pages/Services';
import Blogs from './pages/Blogs';
import Aboutus from './pages/Aboutus';
import Faq from './pages/Faq';
import Booking from './pages/Booking';
import Footer from './components/Footer';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import ViewPatientData from './components/ViewPatientData';
// import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <div className='w-full h-screen'>
        <header>
          <NavbarComponents/>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/blogs' element={<Blogs/>}/>
            <Route path='/aboutus' element={<Aboutus/>}/>
            <Route path='/faq' element={<Faq/>}/>
            <Route path='/booking' element={<Booking/>}/>
            <Route path='/admin' element={<AdminLogin/>}/>
            <Route path='/admindashboard' element={<AdminDashboard/>}/>
            <Route path='/viewpatient/:id' element={<ViewPatientData/>}/>
            <Route path='*' element={<h1>404 not found</h1>}/>
          </Routes>
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
