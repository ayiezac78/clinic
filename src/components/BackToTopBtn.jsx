import React, { useState, useEffect, useCallback } from 'react';
import { IoArrowUpOutline } from 'react-icons/io5';
import '../assets/styles/back-to-top.css';

const BackToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [shouldAnimateDisappear, setShouldAnimateDisappear] = useState(false);

  const handleScroll = useCallback(() => {
    const currentPosition = window.pageYOffset;
    setIsVisible(currentPosition > 300);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (isVisible) {
      setShouldAnimate(true);
      setTimeout(() => {
        setShouldAnimate(false);
      }, 1000);
    } else if (!isVisible) {
      setShouldAnimateDisappear(true);
      setTimeout(() => {
        setShouldAnimateDisappear(false);
      }, 1000);
    }
  }, [isVisible]);

  const className = `back-to-top ${isVisible && 'visible'} ${
    shouldAnimate && 'animate'
  } ${!isVisible && shouldAnimateDisappear && 'disappear'}`;

  return (
    <div className={className} onClick={handleClick}>
      <IoArrowUpOutline className='relative left-[15px]' />
    </div>
  );
};

export default BackToTopBtn;
