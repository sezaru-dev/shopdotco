import React from 'react'
import { HiOutlineEnvelope } from "react-icons/hi2";

const SubscribeSection = () => {
  return (
    <div className='absolute top-1/2 -translate-y-1/2 left-0 w-full'>
      <div className='bg-black rounded-lg px-6 lg:px-16 py-[28px] lg:py-[36px] flex flex-col lg:flex-row items-center justify-between'>
        <h2 className='lg:w-[551px] font-bold text-[32px] lg:text-[2.5rem] text-white leading-none lg:leading-[45px]'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
        <form className='mt-8 lg:mt-0 w-full lg:w-[349px]'>
          <div className='mb-3 relative'>
            <HiOutlineEnvelope size="1.5rem" className='absolute top-1/2 -translate-y-1/2 left-5 text-black/40'/>
            <input type="text" placeholder='Enter your email address' className='py-4 lg:py-3 w-full bg-white rounded-full pl-14 pr-4' />
          </div>
          <button className='py-4 lg:py-3 px-3 lg:px-[88.5px] w-full bg-white rounded-full font-satoshi font-medium text-sm lg:text-base'>Subscribe to Newsletter</button>
        </form>

      </div>
    </div>
  )
}

export default SubscribeSection