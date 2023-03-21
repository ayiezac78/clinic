import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import welcomeImg from '../assets/images/66259-removebg-preview.png';
import { Container, Row, Col } from 'reactstrap';
import Phonehero from '../assets/svg-icon/phonehero';
import Mobileicon from '../assets/svg-icon/mobileicon';
import Emailicon from '../assets/svg-icon/emailicon';

const WelcomeSection = () => {
  useEffect(() => {
    ScrollReveal().reveal('.welcome-img, .welcome-content', {
      duration: 1000,
      distance: '20px',
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      origin: 'bottom',
      viewFactor: 0.5
    });
  }, []);

  return (
    <section className="p-5 mt-[85px] bg-[#164B2F]">
      <Container>
        <Row className="sm:d-flex sm:flex-col md:flex md:flex-row">
          <Col>
            <img className="img-fluid welcome-img animate" src={welcomeImg} alt="welcome image" />
          </Col>
          <Col className="lg:p-[100px] md:p-[50px] text-[#ECFEF2] font-sora welcome-content animate">
            <h1 className="md:text-2xl sm:text-2xl lg:text-3xl font-bold pb-3 sm:pb-2">
              YOUR HEALTH IS WEALTH.
            </h1>
            <h2 className="md:text-xl lg:text-2xl sm:text-xl font-bold pb-3">
              Get Consult Now!
            </h2>
            <div>
              <p className="sm:text-[16px] md:text-[16px] mb-2">Inquire us via:</p>
              <div className='lg:flex'>
                <div className='mr-2'>
                  <Phonehero/>
                </div>
                <div className='mr-2'>
                  <Mobileicon/>
                </div>
                <div></div>
                <Emailicon/>
              </div>
              <div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WelcomeSection;
