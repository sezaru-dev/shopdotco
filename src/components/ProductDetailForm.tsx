'use client'
import { TshirtDetails } from '@/constant';
import React from 'react'
import HoriontalLine from './HoriontalLine';
import ColorChoices from './ui/ColorChoices';
import SizeChoices from './ui/SizeChoices';
import Counter from './ui/Counter';
import Button from './Button';

const ProductDetailForm = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <form className='w-full' onSubmit={handleSubmit}>

      <HoriontalLine styles='my-6' />

      {/* colors */}
      <div>
        <p className='text-secondary lg:text-base'>Select Colors</p>
        <ColorChoices colors={TshirtDetails.colors}/>
      </div>

      <HoriontalLine styles='mb-6 mt-[23.86px]' />

      {/* sizes */}
      <div className='w-full'>
        <p className='text-secondary lg:text-base'>Choose Sizes</p>
        <SizeChoices sizes={TshirtDetails.sizes}/>
      </div>

      <HoriontalLine styles='my-6'/>

      {/* quantity */}
      <div className='w-full inline-flex items-center gap-3'>
        <Counter width='30%'/>
        <Button text='Add To Cart' primary style='py-[12.5px] px-[54px] w-[70%] text-sm lg:text-base'/>
      </div>
    </form>
  )
}

export default ProductDetailForm