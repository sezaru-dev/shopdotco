'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import { HiOutlineChevronRight } from "react-icons/hi";
import ProductImg1 from '@/public/product-details/tshirt-img1.png'
import ProductImg2 from '@/public/product-details/tshirt-img2.png'
import ProductImg3 from '@/public/product-details/tshirt-img3.png'
import HoriontalLine from '@/components/HoriontalLine';
import { TshirtDetails } from '@/constant';
import ColorChoices from '@/components/ui/ColorChoices';
import SizeChoices from '@/components/ui/SizeChoices';
import Counter from '@/components/ui/Counter';
import StarRating from '@/components/ui/StarRating';

const page = () => {
  const [currentTab, setCurrentTab] = useState<number>(2)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  const handleTabClick = (index:number) => {
    setCurrentTab(index)
  }

  return (
    <>
      <HoriontalLine />
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
              <div className='relative lg:w-3/4  h-[290px] lg:h-auto bg-[#F0EEED] rounded-lg overflow-hidden'>
                {/* <Image src={ProductImg1} layout='fill' alt='ProductImg1' className='object-contain' /> */}
                <h3 className='text-2xl font-extrabold'>Image Viewer</h3>
              </div>

              <div className='grid lg:w-1/4 gap-4 '>
                <div className='relative rounded-lg overflow-hidden w-full bg-[#F0EEED]'>
                  {/* <Image src={ProductImg1} alt='ProductImg1' className='object-contain object-center'/> */}
                  <h3 className='text-2xl font-extrabold'>Image 1</h3>
                </div>
                <div className='relative rounded-lg overflow-hidden w-full bg-[#F0EEED]'>
                  {/* <Image src={ProductImg2} alt='ProductImg2' className='object-contain object-center'/> */}
                  <h3 className='text-2xl font-extrabold'>Image 2</h3>
                </div>
                <div className='relative rounded-lg overflow-hidden w-full bg-[#F0EEED]'>
                  {/* <Image src={ProductImg3} alt='ProductImg3' className='object-contain object-center'/> */}
                  <h3 className='text-2xl font-extrabold'>Image 3</h3>
                </div>
              </div>
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


                <form className='w-full mt-5' onSubmit={handleSubmit}>
                  <p className='text-secondary lg:text-base'>
                  {TshirtDetails.description}
                  </p>

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
                    <button type='submit' className='py-[12.5px] px-[54px] text-sm lg:text-base font-satoshi font-medium bg-black text-white w-[70%] rounded-full'>
                      Add to Cart
                    </button>
                  </div>
                </form>

              </div>
            </div>

          </div>

          <div className='relative h-max mt-[30px] lg:mt-14'>
            <HoriontalLine styles='absolute bottom-0'/>
            <ul className='flex items-center justify-between lg:grid grid-cols-3 font-satoshi'>
              <li className={`${currentTab == 1 && 'active-tab'} text-center py-[20.5px] lg:py-6 cursor-pointer`} onClick={() => handleTabClick(1)}>Product Details</li>
              <li className={`${currentTab == 2 && 'active-tab'} text-center py-[20.5px] lg:py-6 cursor-pointer`} onClick={() => handleTabClick(2)}>Ratings & Reviews</li>
              <li className={`${currentTab == 3 && 'active-tab'} text-center py-[20.5px] lg:py-6 cursor-pointer`} onClick={() => handleTabClick(3)}>FAQs</li>
            </ul>
          </div>
          <div className='mt-96'></div>
        </div>
      </section>
    </>
  )
}

export default page