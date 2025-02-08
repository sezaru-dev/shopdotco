import React from 'react'
import Tabs from './ui/Tabs'
import Image from 'next/image'
import SliderIcon from '@/public/slider-icon.svg'
import { HiOutlineChevronDown, HiOutlineChevronUp  } from "react-icons/hi";
import Button from './Button';
import Testimony from './cards/Testimony';
import Link from 'next/link';


type ReviewTypes = {
  id: number
  rating: number
  name: string
  review: string
  date: string
}

type ReviewsProps = {
  productReviews: {
    totalReviews: number
    reviews: ReviewTypes[]
  }
}

const ReviewsViewer = ({productReviews}:ReviewsProps) => {
  const { totalReviews, reviews } = productReviews
  return (
    <div>
      <Tabs/>
      <div className='mt-8'>

        <div className='flex items-center justify-between mb-6'>
          <div className='flex items-center gap-2'>
            <h4 className='font-satoshi font-bold text-xl lg:text-2xl'>All Reviews</h4>
            <p className='text-secondary'>({totalReviews})</p>
          </div>
          <div>
            <div className='flex items-center gap-[10px]'>
              <button className='w-12 h-12 flex items-center justify-center flex-none bg-[#F0F0F0] rounded-full'>
                <Image src={SliderIcon} alt=''/>
              </button>
              <button type='submit' className='hidden lg:inline-flex py-4 px-5 items-center justify-between w-[120px] bg-[#F0F0F0] rounded-full font-satoshi font-medium'>
                Latest
                <HiOutlineChevronDown/>
              </button>
              {/* <Button/> */}
              <Button text='Write a Review' primary style='py-4 px-[3.4rem] w-full lg:w-fit'/>
            </div>
          </div>
        </div>

        {/* grid */}
        <div className='lg:hidden grid grid-cols-1 w-full gap-4'>
          {
            /* for small screen */
            reviews.slice(0,2).map(testimony => (
              <Testimony key={testimony.id} testimony={testimony} showDate showHorizontalDot/>
            ))
          }
        </div>
        <div className='hidden lg:grid grid-cols-1 lg:grid-cols-2 w-full gap-4 lg:gap-5'>
          {
            /* for large screen */
            reviews.map(testimony => (
              <Testimony key={testimony.id} testimony={testimony} showDate showHorizontalDot/>
            ))
          }
        </div>
        <div className='grid w-full place-items-center mt-5 lg:mt-[36.42px]'>
          <Button text='Load More Reviews' style='py-4 px-16'/>
        </div>
      </div>
    </div>
  )
}

export default ReviewsViewer