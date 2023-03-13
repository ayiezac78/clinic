import './App.css'
import NavbarComponents from './components/NavbarComponents'
import Homepage from './pages/Homepage'

function App() {
  return (
    <>
      <NavbarComponents/>
      <div className='w-full h-screen'>
        <Homepage/>
      </div>
    </>
  )
}

export default App
