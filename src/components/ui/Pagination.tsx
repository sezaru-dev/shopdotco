import React from 'react'
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi'

const Pagination = () => {
  return (
    <div className='flex items-center justify-between text-xs md:text-base'>
      <button className='flex items-center gap-2 px-[14px] py-2 border border-black/20 rounded-md hover:bg-black hover:text-white transition-colors duration-200 ease-in-out'>
        <HiOutlineArrowSmLeft />
        Previous
      </button>
      <div className='flex'>
        <ul className='flex'>
          <li>
            <button className='h-9 w-9 lg:h-10 lg:w-10 bg-black/10 flex items-center justify-center rounded-md'>
              1
            </button>
          </li>
          <li>
            <button className='h-9 w-9 lg:h-10 lg:w-10 flex items-center justify-center rounded-md'>
              2
            </button>
          </li>
          <li>
            <button className='hidden h-9 w-9 lg:h-10 lg:w-10 lg:flex items-center justify-center rounded-md'>
              3
            </button>
          </li>
        </ul>
        <button className='h-9 w-9 lg:h-10 lg:w-10 flex items-center justify-center rounded-md'>...</button>
        <ul className='flex'>
          <li>
            <button className='hidden h-9 w-9 lg:h-10 lg:w-10 lg:flex items-center justify-center rounded-md'>
              8
            </button>
          </li>
          <li>
            <button className='h-9 w-9 lg:h-10 lg:w-10 flex items-center justify-center rounded-md'>
              9
            </button>
          </li>
          <li>
            <button className='h-9 w-9 lg:h-10 lg:w-10 flex items-center justify-center rounded-md'>
              10
            </button>
          </li>
        </ul>
      </div>
      <button className='flex items-center gap-2 px-[14px] py-2 border border-black/20 rounded-md hover:bg-black hover:text-white transition-colors duration-200 ease-in-out'>
        Next
        <HiOutlineArrowSmRight />
      </button>
    </div>
  )
}

export default Pagination