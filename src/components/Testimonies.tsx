'use client'
import React, { useEffect, useRef, useState } from 'react'
import { HiArrowSmLeft, HiArrowSmRight  } from "react-icons/hi";
import useXPadding from '@/hooks/useXPadding';
import { customersTestimonies } from '@/constant';
import Testimony from './cards/Testimony';

const Testimonies = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null)
  const testimonyRef = useRef<HTMLElement>(null);
  
  const [sliderleftPosition, setSliderLeftPosition] = useState(0);

  const [leftBtnClickCount, setLeftBtnClickCount] = useState(0);
  const [rightBtnClickCount, setRightBtnClickCount] = useState(2);
  const [blurredCardIndex, setBlurredCardIndex] = useState<number[]>([4,5]);

  const [transitionEnabled, setTransitionEnabled] = useState(false);
  

  const updateXPosition = () => {
    if (wrapperRef.current) {
      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      if (sliderRef.current) {
        if (rightBtnClickCount == 2) {          
          setSliderLeftPosition(wrapperRect.left);
        }else if (rightBtnClickCount == 1) {
          setSliderLeftPosition(wrapperRect.left - 420);
        }else if (rightBtnClickCount == 0) {
          setSliderLeftPosition(wrapperRect.left - 840);
        }
      }
    }

    
  };

  useEffect(() => {
    // Update left position on mount
    updateXPosition();

    const handleResize = () => {
      setTransitionEnabled(false); // Disable transition during resize
      updateXPosition();
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [rightBtnClickCount]);


useEffect(() => {
  if (rightBtnClickCount == 2) {
    setBlurredCardIndex([4,5])
  }else if (rightBtnClickCount == 1) {
    setBlurredCardIndex([1,5])
  }else if (rightBtnClickCount == 0) {
    setBlurredCardIndex([1,2])
  }
}, [rightBtnClickCount]);

const slideLeft = () => {
  if (rightBtnClickCount != 0) {
    setTransitionEnabled(true);
    setLeftBtnClickCount(prevState => prevState + 1)
    setRightBtnClickCount(prevState => prevState - 1)
    setSliderLeftPosition(prevPosition => prevPosition - 420);
  }
};
const slideRight = () => {
  if (leftBtnClickCount != 0) {
    setTransitionEnabled(true);
    setLeftBtnClickCount(prevState => prevState - 1)
    setRightBtnClickCount(prevState => prevState + 1)
    setSliderLeftPosition(prevPosition => prevPosition + 420);
  }
  
};

  
  return (
    <section className='px-4 lg:px-0 relative pb-[184.81px] lg:pb-[170px]'>
      <div ref={wrapperRef} className="wrapper px-4 lg:px-0">
        <div className='flex items-end lg:items-center justify-between lg:mb-[40px]'>
          <h2 className=' font-bold text-[2.01rem] lg:text-5xl mt-4 lg:mb-[28px]'>OUR HAPPY CUSTOMERS</h2>
          <div className='text-2xl flex items-center justify-self-center gap-4'>
            <button onClick={slideRight}>
              <HiArrowSmLeft/>
            </button>
            <button onClick={slideLeft}>
              <HiArrowSmRight/>
            </button>
          </div>
        </div> 
      </div>
      <div className="relative overflow-hidden min-h-[240px]">
        <div className="flex items-center group">
          <div id='sliderContainer' ref={sliderRef} 
          style={{left: `${sliderleftPosition}px`}}
          
          className={`top-0 absolute flex gap-5 ${transitionEnabled ? 'transition-all duration-700 ease-in-out' : ''}`}>
            {
              customersTestimonies.map(item => (
                <Testimony key={item.id} blurredCardIndex={blurredCardIndex} ref={testimonyRef} testimony={item} twWidth='lg:w-[400px]'/>
              ))
            }
          </div>
        </div>
      </div>
    </section>
      
  )
}

export default Testimonies
