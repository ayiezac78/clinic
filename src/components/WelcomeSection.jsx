import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import welcomeImg from '../assets/images/66259-removebg-preview.png';
import Phonehero from '../assets/svg-icon/phonehero';
import Mobileicon from '../assets/svg-icon/mobileicon';
import Emailicon from '../assets/svg-icon/emailicon';

const WelcomeSection = () => {
  useEffect(() => {
    ScrollReveal().reveal('.welcome-content', {
      duration: 1000,
      distance: '20px',
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      origin: 'bottom',
      viewFactor: 0.5
    });
  }, []);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 items-center py-8 lg:py-12 px-4 md:mt-8 sm:mt-8 lg:gap-12 lg:mb-0 font-sora bg-[#164B2F] text-[#ECFEF2] box-border">
      <div className="mb-8 lg:mb-0 welcome-img">
        <img src={welcomeImg} alt="Clinic" className="w-full max-w-[100%] h-auto" />
      </div>
      <div className="lg:pl-8 welcome-content">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4">
          Health is Wealth
        </h2>
        <p className="text-sm md:text-base lg:text-lg mb-8">
          Get a consultation now and take the first step towards a healthier
          life. We offer consultations via telephone, text messages, and email.
        </p>
        <div className="grid sm:grid-cols-1 gap-4">
          <a
            href="tel:123456789"
            className="flex items-center text-base md:text-lg lg:text-xl"
          >
            <Phonehero className="mr-2" />
          </a>
          <a
            href="mailto:info@clinic.com"
            className="flex items-center text-base md:text-lg lg:text-xl"
          >
            <Emailicon className="mr-2" />
          </a>
          <a
            href="https://clinic.com/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-base md:text-lg lg:text-xl"
          >
            <Mobileicon className="mr-2" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;
