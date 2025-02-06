import Image from 'next/image'
import React, { forwardRef, MutableRefObject } from 'react'
import CheckIcon from '@/public/check-icon.png'
import StarIcon from '@/public/star-ratings/star.png'

type TestimonyProps ={
  testimony: {
    id: number
    name:string
    review: string
  }
  isBlur?: boolean
}

const Testimony = forwardRef<HTMLElement, TestimonyProps>(({ isBlur, testimony }, ref) => {
    const { id, name, review} = testimony
  return (
    <article ref={ref as React.Ref<HTMLElement>} className='relative inline-block h-full border border-black/10 py-7 px-8 rounded-xl w-[400px] flex-none overflow-hidden snap-center'>
      {
        isBlur &&  <div className='absolute top-0 left-0 h-full w-full backdrop-blur-[2px]'/> 
      }
      <div id='test' className='inline-flex gap-[6.49px]'>
        <Image src={StarIcon} height={22.5} width={22.5} alt='star.png'/>
        <Image src={StarIcon} height={22.5} width={22.5} alt='star.png'/>
        <Image src={StarIcon} height={22.5} width={22.5} alt='star.png'/>
        <Image src={StarIcon} height={22.5} width={22.5} alt='star.png'/>
        <Image src={StarIcon} height={22.5} width={22.5} alt='star.png'/>

      </div>
      <div className='mt-[15px]'>
        <div className='flex items-center pb-3 gap-1'>
          <h5 className='font-satoshi font-bold text-xl'>{name}</h5>
          <Image src={CheckIcon} height={20} width={20} alt='check-icon.png'/>
        </div>
        <p className='text-black/60 whitespace-normal'>{review}</p>
      </div>
    </article>
  )
})

export default Testimony