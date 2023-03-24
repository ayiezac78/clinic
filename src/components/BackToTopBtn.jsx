import React, { useState } from 'react';
import { IoArrowUpOutline } from 'react-icons/io5';
import '../assets/styles/back-to-top.css'


const BackToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    if (currentPosition > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <div className={`back-to-top ${isVisible ? 'visible' : ''} transition-opacity`} onClick={handleClick}>
      <IoArrowUpOutline className='relative left-[15px]'/>
    </div>
  );
};

export default BackToTopBtn;
