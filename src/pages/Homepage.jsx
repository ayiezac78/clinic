import 'bootstrap/dist/css/bootstrap-grid.min.css'
import WelcomeSection from '../components/WelcomeSection'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div>
      <WelcomeSection/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Footer/>
    </div>
  )
}

export default Homepage