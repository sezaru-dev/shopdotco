'use client'
import React from 'react'
import HoriontalLine from '../HorizontalLine';
import PromoIcon from '@/public/promoIcon.svg'
import Image from 'next/image';
import Button from '../Button';
import { HiOutlineArrowRight } from 'react-icons/hi';

const OrderSummaryForm = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Your code here
  }

  return (
    <form onSubmit={handleSubmit} className='lg:col-span-5 py-5 px-6 border border-black/10 rounded-xl h-min'>
            <h6 className='font-satoshi font-bold text-2xl'>Order Summary</h6>
            <div className='text-xl mt-6'>
              <p className='text-secondary flex items-center justify-between mb-5'>Subtotal <span className='font-bold text-xl text-black'>$565</span></p>
              <p className='text-secondary flex items-center justify-between mb-5'>Discount (-20%) <span className='font-bold text-xl text-[#FF3333]'>-$113</span></p>
              <p className='text-secondary flex items-center justify-between'>Delivery Fee <span className='font-bold text-xl text-black'>$15</span></p>
              <HoriontalLine styles='py-5'/>
              <p className='font-satoshi flex items-center justify-between font-medium text-black'>Total <span className='font-bold text-xl'>$467</span></p>
            </div>

            <div className='flex w-full gap-3 mt-6'>
              <div className='relative w-full h-min'>
                <Image src={PromoIcon} alt='promo icon' className='absolute top-1/2 left-4 -translate-y-1/2'/>
                <input type="text" placeholder='Add promo code' className='w-full h-12 rounded-full bg-[#F0F0F0] outline-none pl-[52px]' />
              </div>
              <Button text='Apply' style='py-3 px-4 w-full max-w-[119px]' primary/>
            </div>
            <button type='submit' className='w-full h-[3.75rem] rounded-full bg-black flex items-center justify-center gap-3 text-white mt-6'>Go to Checkout <HiOutlineArrowRight size={20}/></button>
          </form>
  )
}

export default OrderSummaryForm