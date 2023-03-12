import './App.css'
import NavbarComponents from './components/NavbarComponents'
import WelcomeSection from './components/WelcomeSection'

function App() {
  return (
    <>
      <NavbarComponents/>
      <div className='w-full h-screen'>
        <WelcomeSection/>
      </div>
    </>
  )
}

export default App
