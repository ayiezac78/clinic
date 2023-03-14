import { Container, Col, Row } from 'reactstrap';
import howitworks from '../assets/images/2203_w037_n003_239b_p1_239-removebg-preview.png'

const Section4 = () => {
  return (
    <section className='bg-[#00A661] font-sora'>
      <Container>
        <Row className='sm:d-flex sm:flex-col md:flex md:flex-row'>
          <Col className='lg:p-[100px] md:p-[50px] flex justify-center items-center flex-col sm:pt-8 text-[#ECFEF2]'>
            <h1 className='text-2xl font-bold text-left'>HOW IT WORKS</h1>
              <div className='sm:p-5 font-bold'>
                <p>1. TAP BOOK NOW, FILL UP YOUR DETAILS & CHOOSE YOUR  PREFERRED SCHEDULE.</p>
                <p>2. CHOOSE YOUR HEALTH PACKAGE.</p>
                <p>3. YOU'RE FINALLY SET FOR CONSULTATION!</p>
              </div>
          </Col>
          <Col className='lg:p-0 md:p-0 flex items-center'>
            <img className='sm:hidden md:inline-block' src={howitworks} alt="how it works image" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Section4