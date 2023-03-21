import ScrollReveal from "scrollreveal"
import { useEffect } from "react"

const Services = () => {
  useEffect(() => {
    ScrollReveal().reveal('.animate', {
      duration: 1000,
      distance: '20px',
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      origin: 'bottom',
      viewFactor: 0.5,
      reset: true,
    });
  }, []);

  return (
    <div className="p-30 mt-20">
      <h1 className="animate">Scroll on reveal</h1>
      <p className="animate">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <img className="animate" src="https://via.placeholder.com/300x300" alt="placeholder" />
      <div className="box animate"></div>
    </div>
  )
}

export default Services