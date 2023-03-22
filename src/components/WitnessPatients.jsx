import juandelacruz from '../assets/images/juan_dela_cruz.jpg'
import saragdutch from '../assets/images/sarah-dutch.jpg'
import johndoe from '../assets/images/johndoe.jpg'
import ScrollReveal from 'scrollreveal';
import { useRef, useEffect } from 'react';


const WitnessPatients = () => {
  const containerRef = useRef(null);

  const witnesses = [
    {
      name: "Juan Dela Cruz",
      image: <img src={juandelacruz} className="w-[200px] h-[200px] rounded-full object-cover text-center m-auto mb-4"/>,
      description: '"They have an effective treatment with right diagnosis to me. The doctor and the staff listened to my story and evaluate my condition from every angle and develop a treatment plan for me."',
      colSpan: "",
    },
    {
      name: "Sarah Dutch",
      image: <img src={saragdutch} className="w-[200px] h-[200px] rounded-full object-cover text-center m-auto mb-4"/>,
      description: '"I have confidence in the cLinic because they have extensive experience in treating patients with your specific condition like me. I am grateful of the cLinic services offered by them."',
      colSpan: "",
    },
    {
      name: "John Doe",
      image: <img src={johndoe} className="w-[200px] h-[200px] rounded-full object-cover text-center m-auto mb-4"/>,
      description: '"They showed compassion to me with a combined comprehensive evaluations which I believe that makes me heal faster and getting me back on my life."',
      colSpan: "md:col-span-2 lg:col-span-1",
    }
  ]

  useEffect(() => {
    const sr = ScrollReveal({
      delay: 200,
      distance: '50px',
      duration: 1000,
      origin: 'bottom',
    });
    
    sr.reveal(containerRef.current.querySelectorAll('.sr'), {
      interval: 200
    });
  }, []);
  

  return (
    <section className='p-10 bg-[#609966] text-[#ECFEF2] font-sora'>
      <p className="text-center text-5xl font-bold">WHAT OUR CLIENT SAYS?</p>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 place-items-center mt-10" ref={containerRef}>
        {witnesses.map(({ name, image, description, colSpan }) => (
          <div className={`w-full md:w-auto ${colSpan} sr`} key={name} data-sal="slide-up" data-sal-delay="200" data-sal-duration="1000">
            <div className="flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-110">
              {image}
              <p className='text-center text-xl font-semibold mb-3'>{name}</p>
              <p className='m-auto lg:px-5 md:px-0'>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

  )
}

export default WitnessPatients
