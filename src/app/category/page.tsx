import FilterModal from '@/components/category/FilterModal';
import HoriontalLine from '@/components/HoriontalLine';
import { Metadata } from 'next';
import React from 'react'
import { HiOutlineChevronRight } from 'react-icons/hi';

export const metadata: Metadata = {
  title: "Category",
  description: "Product category page",
};

const page = () => {
  return (
    <div className=''>
      <FilterModal show={true}/>
      <HoriontalLine />
      <section className='wrapper'>
        <div className='mt-5'>
          <ul id='breadcrumbs' className='flex items-center gap-[6px] lg:gap-3 text-sm font-satoshi text-black/60 '>
            <li className='inline-flex items-center gap-1'>Home <HiOutlineChevronRight/></li>
            <li className='inline-flex items-center gap-1'>Casual</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default page