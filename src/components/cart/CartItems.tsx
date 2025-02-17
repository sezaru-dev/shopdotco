'use client'
import React from 'react'
import { PiTrashFill } from 'react-icons/pi'
import Counter from '../ui/Counter'
import Image from 'next/image'
import { SampleCartItems } from '@/constant'
import HorizontalLine from '../HorizontalLine'

const CartItems = () => {
  return (
    <div className='lg:col-span-7 p-[0.9rem] lg:py-5 lg:px-6 border border-black/10 rounded-xl h-min'>
      {/* card */}
      {
        SampleCartItems.map((item, index) => (
          <React.Fragment key={item.id}>
            <div className='font-satoshi flex gap-4'>
              <div className='w-[99px] lg:w-[124px] flex-none'>
                <Image src={item.image} alt={`${item.productName} image`} className='object-fill'/>
              </div>
              <div className='w-full flex flex-col justify-between'>
                <div className='flex items-start justify-between'>
                  <div className=''>
                    <h4 className='font-satoshi font-bold text-xl truncate'>{item.productName}</h4>
                    <p className='text-xs lg:text-sm'>Size: <span className='text-secondary'>{item.size}</span></p>
                    <p className='text-xs lg:text-sm'>Color: <span className='text-secondary'>{item.color}</span></p>
                  </div>

                  {/* pass the id to the button to have acces to delete function of this button */}
                  <button className='flex-none'>
                    <PiTrashFill color='#FF3333'  className='text-2xl' />
                  </button>
                </div>
                
                <div className='flex items-center justify-between'>
                  <h5 className='font-satoshi text-xl lg:text-2xl font-bold'>$145</h5>
                  <Counter quantity={item.quantity} style='w-[6.57rem] lg:w-[7.9rem] py-2 lg:h-[2.75rem]'/>
                </div>
              </div>
            </div>
            {index < SampleCartItems.length - 1 && <HorizontalLine styles='py-6' />}
          </React.Fragment>
        ))
      }

    </div>
  )
}

export default CartItems