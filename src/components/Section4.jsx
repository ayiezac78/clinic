import { Container, Col, Row } from 'reactstrap';
import howitworks from '../assets/images/2203_w037_n003_239b_p1_239-removebg-preview.png'
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';
import {IoMailOpenOutline, IoNotificationsOutline} from "react-icons/io5"
import {BsCalendarEvent} from "react-icons/bs"

const Section4 = () => {
  useEffect(() => {
    ScrollReveal().reveal('.text-left-animate', {
      delay: 200,
      distance: '50px',
      origin: 'bottom'
    });
  
    ScrollReveal().reveal('.img-left', {
      delay: 200,
      distance: '50px',
      origin: 'right'
    });
  }, []);
  
  return (
    <section className="bg-[#00A661] font-sora">
      <Container>
        <Row className="sm:d-flex sm:flex-col md:flex md:flex-row">
          <Col className="mx-auto flex justify-center items-center flex-col sm:pt-8 text-[#ECFEF2]">
            <div className='p-8'>
                  <h1 className="text-2xl font-bold text-left text-left-animate">HOW IT WORKS</h1>
                <div className="sm:p-5 font-bold">
                  <p className="mb-2 sm:text-sm lg:text-sm text-left-animate">
                    <span>
                      <BsCalendarEvent className='w-6 h-6 inline-block mr-2'/>
                    </span>
                    <span>CHOOSE APPOINTMENT SCHEDULE.</span>
                  </p>
                  <p className="mb-2 sm:text-sm lg:text-sm text-left-animate">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 inline-block mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                        />
                      </svg>
                    </span>
                    <span>FILL UP YOUR DETAILS</span>
                  </p>
                  <p className="mb-2 sm:text-sm lg:text-sm text-left-animate">
                    <span>
                      <IoNotificationsOutline className='w-6 h-6 inline-block mr-2'/>
                    </span>
                    <span>WAIT & GET YOUR APPOINTMENT ID TO POP UP ON THE BROWSER.</span>
                  </p>
                </div>
            </div>
          </Col>
          <Col className="lg:p-0 md:p-0 flex items-center">
            <img
              className="sm:hidden md:inline-block img-left object-cover object-right-bottom"
              src={howitworks}
              alt="how it works image"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section4