import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';


const AboutMissionVision = () => {
  
  useEffect(() => {
    ScrollReveal().reveal('.mission .vision', {
      duration: 1000,
      delay: 200,
      distance: '30px',
      easing: 'ease-out',
      origin: 'bottom',
      reset: false,
    });
  }, []);


  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-1 md:grid-cols-2 p-4 font-sora">
      <div className="p-8 mission">
        <h2 className="text-2xl text-green-700 font-bold mb-4">Mission</h2>
        <p className="text-base text-green-700">
          The clinic is dedicated to improving the health of the people we serve. Our team is committed to
          providing high quality care, convenient access and exceptional service with compassion.
        </p>
      </div>
      <div className="p-8 vision">
        <h2 className="text-2xl text-green-700 font-bold mb-4">Vision</h2>
        <p className="text-base text-green-700">
          We will achieve this vision by committing with integrity and safety, evidence based exceptional
          care, compassionate customer service and with technology innovation.
        </p>
      </div>
    </div>
  
  )
}

export default AboutMissionVision