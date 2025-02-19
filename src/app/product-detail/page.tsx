
import Image from 'next/image';
import React from 'react'
import { HiOutlineChevronRight } from "react-icons/hi";
import GraphicTshirt from '@/public/product-details/graphic-tshirt.png'
import Thumbnail1 from '@/public/product-details/tshirt-thumbnail1.png'
import Thumbnail2 from '@/public/product-details/tshirt-thumbnail2.png'
import Thumbnail3 from '@/public/product-details/tshirt-thumbnail3.png'
import { TshirtDetails } from '@/constant';
import StarRating from '@/components/ui/StarRating';
import ProductDetailForm from '@/components/ProductDetailForm';
import { Metadata } from 'next';
import ReviewsViewer from '@/components/ReviewsViewer';
import YouMayAlsoLike from '@/components/YouMayAlsoLike';
import HorizontalLine from '@/components/HorizontalLine';
import ProductImageViewer from '@/components/ProductImageViewer';

export const metadata: Metadata = {
  title: "One Life Graphic T-Shirt",
  description: "Product details for One Life Graphic T-Shirt ",
};

const page = () => {

  return (
    <>
      <HorizontalLine />
      <section className='px-4'>
        <div className='wrapper mt-5'>
          <ul id='breadcrumbs' className='flex items-center gap-[6px] lg:gap-3 text-sm font-satoshi text-black/60 '>
            <li className='inline-flex items-center gap-1'>Home <HiOutlineChevronRight/></li>
            <li className='inline-flex items-center gap-1'>Shop <HiOutlineChevronRight/></li>
            <li className='inline-flex items-center gap-1'>Men <HiOutlineChevronRight/></li>
            <li className='inline-flex items-center gap-1'>T-Shirt</li>
          </ul>

          {/* product image, details, form */}
          <div className='mt-5 grid lg:grid-cols-2 gap-4'>

            <div className='flex flex-col lg:flex-row-reverse gap-4'>
              <ProductImageViewer/>
            </div>

            {/* form */}
            <div>
              <div className='h-max'>
                <h3 className='text-2xl lg:text-[40px] font-bold uppercase'>{TshirtDetails.productName}</h3>

                <StarRating rating={TshirtDetails.overAllRating} showNumbers styles='my-3 lg:mt-[14px] lg:mb-[14.29px]'/>

                <div className='flex gap-[10px] items-center'>
                  <h5 className='font-satoshi font-bold text-2xl'>{`$${TshirtDetails.currentPrice}`}</h5>
                  <h5 className='font-satoshi font-bold text-2xl text-black/40 line-through'>{`$${TshirtDetails.previousPrice}`}</h5>
                  <div className='bg-[#FF3333]/10 h-6 w-12 flex items-center justify-center rounded-full'>
                    <p className='text-[#FF3333] text-center text-xs font-medium'>{`-${TshirtDetails.discount}%`}</p>
                  </div>
                </div>

                <p className='text-secondary lg:text-base mt-5'>
                  {TshirtDetails.description}
                </p>

                <ProductDetailForm/>

              </div>
            </div>
          </div>

          <ReviewsViewer productReviews={TshirtDetails.productReviews}/>
          
        </div>
      </section>
      <YouMayAlsoLike/>
      
    </>
  )
}

export default page