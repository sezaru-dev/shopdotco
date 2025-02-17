
import React from 'react'
import { HiOutlineChevronRight } from 'react-icons/hi';
import OrderSummaryForm from '@/components/cart/OrderSummaryForm';
import { Metadata } from 'next';
import CartItems from '@/components/cart/CartItems';

export const metadata: Metadata = {
  title: "Cart",
  description: "The cart page showcases your selected items and provides a detailed summary of your order.",
};

const page = () => {

  return (
    <section className='px-4 mb-[12rem] lg:mb-0'>
      <div className="wrapper">
        {/* breadcrumbs */}
        <div className='mt-5'>
          <ul id='breadcrumbs' className='flex items-center gap-[6px] lg:gap-3 text-sm font-satoshi text-black/60 '>
            <li className='inline-flex items-center gap-1'>Home <HiOutlineChevronRight/></li>
            <li className='inline-flex items-center gap-1'>Cart</li>
          </ul>
        </div>

        <h3 className='uppercase font-bold text-[2rem] lg:text-[2.5rem] mt-6'>YOUR CART</h3>

        {/* cart cards and summary */}
        <div className='grid lg:grid-cols-12 gap-5 mt-6'>
          {/* cart/products */}
          <CartItems/>

          {/* Order Summary */}
          <OrderSummaryForm/>
        </div>
      </div>
    </section>
  )
}

export default page


/* 
continue to style small screen, refine cart item cart

*/