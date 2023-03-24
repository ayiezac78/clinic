import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

const CoreValues = () => {
  useEffect(() => {
    ScrollReveal().reveal('.values', {
      duration: 1000,
      delay: 200,
      distance: '50px',
      easing: 'ease-out',
      origin: 'bottom',
      reset: false,
    });
  }, []);

  return (
    <div className='grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-1 px-2 font-sora mb-0'>
      <div className='p-4 values'>
      <ul>
          <h2 className="text-2xl text-green-700 font-bold mb-4">Our Core Values</h2>
          <li className='text-base text-green-700 core-list'>We commit to excellence.</li>
          <li className='text-base text-green-700 core-list'>We exist for the patient.</li>
          <li className='text-base text-green-700 core-list'>Employees are our greatest asset.</li>
          <li className='text-base text-green-700 core-list'>We promote professional growth and community stewardship.</li>
        </ul>

      </div>
    </div>
  )
}

export default CoreValues