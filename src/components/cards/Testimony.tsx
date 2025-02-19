import Image from 'next/image'
import React, { forwardRef, MutableRefObject } from 'react'
import CheckIcon from '@/public/check-icon.png'
import StarRating from '../ui/StarRating'
import { HiOutlineDotsHorizontal } from "react-icons/hi";

type TestimonyProps ={
  testimony: {
    id: number
    rating: number
    name:string
    review: string
    date?: string
  }
  showDate?: boolean
  twWidth?: string
  showHorizontalDot?: boolean
  leftBtnClickCount?: number
}

const Testimony = forwardRef<HTMLElement, TestimonyProps>(({testimony, showDate, twWidth, showHorizontalDot, leftBtnClickCount }, ref) => {
    const { id, name, rating, review} = testimony
    
  return (
    <article ref={ref as React.Ref<HTMLElement>} className={`${twWidth ? `${twWidth}`: 'w-full'} relative h-full border border-black/10 shadow-sm py-7 px-8 rounded-xl flex-none overflow-hidden snap-start flex flex-col`}>

      <div className='inline-flex items-center justify-between'>
        <StarRating rating={rating} showNumbers={false} gapStyle='gap-[6.49px]'/> 
        {
          showHorizontalDot &&
          <button className='text-black/40 text-2xl'>
            <HiOutlineDotsHorizontal/>
          </button>
        }
      </div>

      <div className='mt-[15px] h-full'>
        <div className='flex items-center pb-3 gap-1'>
          <h5 className='font-satoshi font-bold text-xl flex-none'>{name}</h5>
          <Image src={CheckIcon} height={20} width={20} alt='check-icon.png'/>
        </div>
        <blockquote className='text-secondary whitespace-normal'>"{review}"</blockquote>
        {
          showDate &&
          <p className='text-secondary text-sm md:text-base font-medium whitespace-normal mt-4'>Posted on August 15, 2024</p>
        }
      </div>
    </article>
  )
})

export default Testimony