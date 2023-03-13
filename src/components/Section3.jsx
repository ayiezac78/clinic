import { Container, Col, Row } from 'reactstrap';
const Section3 = () => {
  return (
    <section className='bg-[#81B795] font-sora'>
      <Container>
        <Col className='flex justify-center flex-col items-center p-10 lg:py-20 md:py-[90px]'>
          <h1 className='text-5xl font-extrabold mb-3 text-[#ECFEF2]'>SERVICES</h1>
          <Row className='lg:p-5 md:p-5 text-[#ECFEF2] lg:text-3xl md:text-2xl sm:text-[19px] font-bold'>
            <Col>
              <span>Hematology</span>{' '}
              <span>Serology</span><br />
              <span>Pre-Employment</span>
            </Col>
            <Col>
              <span>Blood Chemistry</span>{' '}
              <span>Clinical Microscopy</span><br />
              <span>Annual Physical Exam</span>
            </Col>
          </Row>
        </Col>
      </Container>
    </section>
  )
}

export default Section3