import WelcomeSection from '../components/WelcomeSection'
import Section2 from '../components/Section2'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import Section3 from '../components/Section3'

const Homepage = () => {
  return (
    <div>
      <WelcomeSection/>
      <Section2/>
      <Section3/>
    </div>
  )
}

export default Homepage