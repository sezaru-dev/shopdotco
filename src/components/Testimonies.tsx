'use client'
import React, { useRef } from 'react'
import { HiArrowSmLeft, HiArrowSmRight  } from "react-icons/hi";
import Testimony from './cards/Testimony';
import useXPadding from '@/hooks/useXPadding';
import { customersTestimonies } from '@/constant';

const Testimonies = () => {
let padding = useXPadding(1240).padding
let isMounted = useXPadding(1240).isMounted

  const sliderRef = useRef<HTMLDivElement>(null)
  const testimonyRef = useRef<HTMLElement>(null);

  const slideLeft = () => {
    if (sliderRef.current && testimonyRef.current) {
      sliderRef.current.scrollLeft -= testimonyRef.current.offsetWidth;
    }
  };

  const slideRight = () => {
    if (sliderRef.current && testimonyRef.current) {
      sliderRef.current.scrollLeft += testimonyRef.current.offsetWidth;
    }
  };

  if (isMounted && sliderRef.current) {
    console.log('scroll-width', sliderRef.current.scrollWidth);
    let cardWidth = sliderRef.current.scrollWidth / 5
    let defaultCenterAlign = cardWidth / 2
    sliderRef.current.scrollLeft = defaultCenterAlign
  }
  
  return (
    <section className='px-4 lg:px-0 relative pb-[184.81px] lg:pb-[170px]'>
      <div className="wrapper px-4 lg:px-0">
        <div className='flex items-end lg:items-center justify-between lg:mb-[40px]'>
          <h2 className=' font-bold text-[2.01rem] lg:text-5xl mt-4 lg:mb-[28px]'>OUR HAPPY CUSTOMERS</h2>
          <div className='text-2xl flex items-center justify-self-center gap-4'>
            <button onClick={slideLeft}>
              <HiArrowSmLeft/>
            </button>
            <button onClick={slideRight}>
              <HiArrowSmRight/>
            </button>
          </div>
        </div> 
      </div>
      <div className="relative overflow-hidden">
        <div className="relative flex items-center group">
          <div id='sliderContainer' ref={sliderRef} style={{padding: `0 ${padding}px`}} className="w-full max-w-min h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative space-x-5 snap-x snap-mandatory">
            {
              customersTestimonies.map(item => (
                <Testimony key={item.id} isBlur={false} ref={testimonyRef} testimony={item}/>
              ))
            }
          </div>
        </div>
      </div>
    </section>
      
  )
}

export default Testimonies
