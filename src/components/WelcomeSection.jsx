import welcomeImg from '../assets/images/66259-removebg-preview.png'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import { Container, Row, Col } from 'reactstrap';

const WelcomeSection = () => {
  return (
    <section className="p-5 mt-[85px] bg-[#164B2F]">
      <Container>
        <Row>
          <Col className="">
            <img className='img-fluid' src={welcomeImg} alt="welcome image" />
          </Col>
          <Col className="lg:p-[100px] md:p-[10px] text-[#ECFEF2] font-sora">
            <h1 className='md:text-xl sm:text-xl lg:text-3xl font-bold pb-3 sm:pb-2'>YOUR HEALTH IS WEALTH.</h1>
            <h2 className='md:text-xl lg:text-2xl sm:font-[10px] font-bold pb-3'>Get Consult Now!</h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WelcomeSection