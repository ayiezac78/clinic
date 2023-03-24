import aboutimg from '../assets/images/aboutus-img.svg'
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    ScrollReveal().reveal('.about-site', {
      duration: 1000,
      delay: 200,
      distance: '50px',
      easing: 'ease-out',
      origin: 'bottom',
      reset: false,
    });
  }, []);

  return (
    <section className="py-5 mt-[93px] font-sora text-green-700">
      <h1 className="ml-10 text-5xl lg:text-5xl md:text-4xl sm:text-3xl font-bold">About Us</h1>
      <div className='flex justify-center mt-10'>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center my-0 mx-auto max-w-7xl gap-4">
          <img
            className="w-full h-full mb-4 md:mb-0 object-contain object-center about-site"
            src={aboutimg}
            alt="about team image"
          />
          <div className="pl-8 about-site">
            <p className="text-lg md:text-xl mb-4">
              We provide and inspire hope and contribute to health and well-being by
              providing the best care to every patient through integrated and online
              clinical practice, education and research.
            </p>
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default About