import { Container, Col, Row } from 'reactstrap';
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

const Section3 = () => {
  useEffect(() => {
    ScrollReveal().reveal('.services', {
      delay: 200,
      distance: '50px',
      origin: 'bottom',
      interval: 100,
      viewFactor: 0.5
    });
  }, []);

  return (
    <section className='bg-[#81B795] font-sora'>
      <Container>
        <Col className='flex justify-center flex-col items-center p-10 lg:py-20 md:py-[90px]'>
          <h1 className='services text-5xl font-extrabold mb-3 text-[#ECFEF2]'>SERVICES</h1>
          <Row className='lg:p-2 md:p-2 text-[#ECFEF2] lg:text-3xl md:text-2xl sm:text-[19px] font-bold'>
            <Col>
              <span className='services'>Hematology</span><br />
              <span className='services'>Serology</span><br />
              <span className='services'>Pre-Employment</span>
            </Col>
            <Col>
              <span className='services'>Blood Chemistry</span>{' '}
              <span className='services'>Clinical Microscopy</span><br />
              <span className='services'>Annual Physical Exam</span>
            </Col>
          </Row>
        </Col>
      </Container>
    </section>
  )
}

export default Section3