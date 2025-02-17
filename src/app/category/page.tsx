import ProductCard from '@/components/cards/ProductCard';
import Pagination from '@/components/ui/Pagination';
import { CategorySampleProducts } from '@/constant';
import { Metadata } from 'next';
import React from 'react'
import { HiOutlineChevronRight } from 'react-icons/hi';
import CategoryProductCard from '@/components/cards/CategoryProductCard';
import Filter from '@/components/category/Filter';
import ModalOverlay from '@/components/ui/ModalOverlay';
import { ModalProvider } from '@/context/ModalContext';
import FilterIconButton from '@/components/category/FilterIconButton';
import HorizontalLine from '@/components/HorizontalLine';

export const metadata: Metadata = {
  title: "Category",
  description: "Product category page",
};

const page = () => {
  return (
    <>
      <section className='h-max'>
        <ModalProvider>        
          <ModalOverlay/>

        <div className='relative'>          
          <div className='wrapper px-4 mb-56'>
            <HorizontalLine />

            {/* breadcrumbs */}
            <div className='mt-5'>
              <ul id='breadcrumbs' className='flex items-center gap-[6px] lg:gap-3 text-sm font-satoshi text-black/60 '>
                <li className='inline-flex items-center gap-1'>Home <HiOutlineChevronRight/></li>
                <li className='inline-flex items-center gap-1'>Casual</li>
              </ul>
            </div>

            {/* main container */}
            <div className='w-full grid lg:grid-cols-12 gap-5 mt-3 lg:mt-6'>
                {/* filter */}

                  <Filter/>
                

                {/* filtered products */}
                <div className='lg:col-span-9'>
                  <div className='flex items-baseline gap-2 lg:gap-0'>
                    <h3 className='text-2xl lg:text-[32px] font-bold'>Casual</h3>

                    <div className='flex items-center justify-between lg:justify-end  gap-3 w-full'>
                      <p className='text-secondary text-xs md:text-base'>Showing 1-10 of 100 Products</p>
                      <div className='hidden lg:flex items-center'>
                        <label htmlFor="" className='text-secondary'>Sort by:</label>
                        <select name="sort" id="sort" className='font-medium font-satoshi'>
                          <option value="most-popular">Most Popular</option>
                          <option value="most-popular">Highly Rated</option>
                          <option value="most-popular">Cheapest</option>
                          <option value="most-popular">Expensive</option>
                        </select>
                      </div>

                      <FilterIconButton/>
                    </div>
                  </div>

                  {/* products */}
                  <div className='grid grid-cols-2 md:grid-cols-3 gap-[14px] lg:gap-5 my-4'>
                    {
                      CategorySampleProducts.map(product => (
                        <CategoryProductCard key={product.id} {...product}/>
                      ))
                    }
                  </div>
                  <HorizontalLine styles='py-5' />
                  <Pagination/>
                </div>
            </div>
          </div>
        </div>
        </ModalProvider>
      </section>
    </>
  )
}

export default page