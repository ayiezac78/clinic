import { Container, Col } from 'reactstrap';
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Section2 = () => {
  useEffect(() => {
    ScrollReveal().reveal('.section2-animate', {
      duration: 1000,
      distance: '20px',
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      origin: 'bottom',
      viewFactor: 0.5
    });
  }, []);

  return (
    <section className='bg-[#ECFEF2] font-sora'>
      <Container>
        <Col className='flex justify-center flex-col items-center px-10 py-10 section2-animate'>
        <h1 className='text-5xl font-extrabold mb-3 text-[#164B2F]'>Why cLinic.?</h1>
        <p className='lg:px-80 md:px-[120px] sm:px-4 text-[#164B2F]'><span className='font-bold text-xl'>cLinic.</span> is here to provide your consultation
            services and for your medical requirements that allows you to have convenient
            access that will less hassle and time effort.
        </p>
        </Col>
      </Container>
    </section>
  )
}

export default Section2
