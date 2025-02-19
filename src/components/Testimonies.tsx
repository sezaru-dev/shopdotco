'use client'
import React, { useRef } from 'react'
import { HiArrowSmLeft, HiArrowSmRight  } from "react-icons/hi";
import { customersTestimonies } from '@/constant';
import Testimony from './cards/Testimony';
import usePaddingInline from '@/hooks/usePaddingInline';

const Testimonies = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null)
  const testimonyRef = useRef<HTMLElement>(null);
  const widthDifference = usePaddingInline(wrapperRef);

const slideLeft = () => {
  if (sliderRef.current && testimonyRef.current) {
    sliderRef.current.scrollLeft += testimonyRef.current.offsetWidth;
  }
};

const slideRight = () => {
  if (sliderRef.current && testimonyRef.current) {
    sliderRef.current.scrollLeft -= testimonyRef.current.offsetWidth;
  }
};

  return (
    <section className='px-4 lg:px-0 relative mb-[12rem] lg:mb-0'>
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
      <div className="relative overflow-hidden min-h-[240px] mt-6">
        {/* blur left */}
        <div style={{width: `${widthDifference}px`}} className='hidden lg:block absolute top-0 left-0 z-20 h-[400px] backdrop-blur-[0.08rem]'/>
        {/* blur right */}
        <div style={{width: `${widthDifference}px`}} className='hidden lg:block absolute top-0 right-0 z-20 h-[400px] backdrop-blur-[0.08rem]'/>
        
        {/* testimony/top rating slider */}
        <div className="flex items-center group">
            <div id='sliderContainer' ref={sliderRef} 
            style={{paddingInline: `${widthDifference}px`, scrollPaddingInline: `${widthDifference}px` }}
            className={` w-full max-w-min h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative snap-x snap-mandatory flex gap-5`}>
              {
                customersTestimonies.map(item => (
                  <Testimony key={item.id} ref={testimonyRef} testimony={item} twWidth='w-full max-w-[1240px] md:w-[400px]'/>
                ))
              }
            </div>

        </div>
      </div>
    </section>
      
  )
}

export default Testimonies
