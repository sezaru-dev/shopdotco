import React from 'react'
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub  } from "react-icons/fa";
import IconVisa from '@/public/badge/visa.png'
import IconMastercard from '@/public/badge/mastercard.png'
import IconPayPal from '@/public/badge/paypal.png'
import IconApplePay from '@/public/badge/apple-pay.png'
import IconGooglePay from '@/public/badge/google-pay.png'
import Image from 'next/image';
import SubscribeSection from './SubscribeSection';

const Footer = () => {
  return (
    <footer className='px-4 mt-[7rem] lg:mt-[9.5rem] pt-[190px] lg:pt-[140px] pb-[88px]  bg-[#F0F0F0]'>
      <div className="relative wrapper ">
        <SubscribeSection/>
      </div>
      <div className='wrapper mb-6 lg:flex lg:justify-between '>

        <div className='lg:max-w-[248px]'>
          <h2 className='font-bold text-[28.85px] mb-3'>SHOP.CO</h2>
          <p className='font-satoshi text-sm text-black/60'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
          <nav className='mt-5'>
            <ul className='flex items-center gap-3'>
              <li className='h-7 w-7 rounded-full overflow-hidden border border-black/20 flex items-center justify-center'><FaTwitter/></li>
              <li className='h-7 w-7 rounded-full overflow-hidden border border-black bg-black flex items-center justify-center'><FaFacebookF color='white'/></li>
              <li className='h-7 w-7 rounded-full overflow-hidden border border-black/20 flex items-center justify-center'><FaInstagram/></li>
              <li className='h-7 w-7 rounded-full overflow-hidden border border-black/20 flex items-center justify-center'><FaGithub/></li>
            </ul>
          </nav>
        </div>

        <div className='hidden lg:block'>
            <h6 className='font-satoshi font-medium text-sm lg:text-base'>COMPANY</h6>
            <nav className='mt-3'>
              <ul className='font-satoshi text-sm lg:text-base text-black/60 space-y-3'>
                <li>About</li>
                <li>Features</li>
                <li>Works</li>
                <li>Career</li>
              </ul>
            </nav>
        </div>

        <div className='hidden lg:block'>
          <h6 className='font-satoshi font-medium text-sm lg:text-base'>HELP</h6>
          <nav className='mt-3'>
            <ul className='font-satoshi text-sm lg:text-base text-black/60 space-y-3'>
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </nav>
        </div>

        <div className='hidden lg:block'>
          <h6 className='font-satoshi font-medium text-sm lg:text-base'>FAQ</h6>
          <nav className='mt-3'>
            <ul className='font-satoshi text-sm lg:text-base text-black/60 space-y-3'>
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </nav>
        </div>

        <div className='hidden lg:block'>
          <h6 className='font-satoshi font-medium text-sm lg:text-base'>RESOURCES</h6>
          <nav className='mt-3'>
            <ul className='font-satoshi text-sm lg:text-base text-black/60 space-y-3'>
              <li>Free eBook</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </nav>
        </div>

        <div className='lg:hidden grid grid-cols-2 gap-6 mt-6'>
          <div>
            <h6 className='font-satoshi font-medium text-sm'>COMPANY</h6>
            <nav className='mt-3'>
              <ul className='font-satoshi text-sm text-black/60 space-y-3'>
                <li>About</li>
                <li>Features</li>
                <li>Works</li>
                <li>Career</li>
              </ul>
            </nav>
          </div>

          <div>
            <h6 className='font-satoshi font-medium text-sm'>HELP</h6>
            <nav className='mt-3'>
              <ul className='font-satoshi text-sm text-black/60 space-y-3'>
                <li>Customer Support</li>
                <li>Delivery Details</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </nav>
          </div>

          <div>
            <h6 className='font-satoshi font-medium text-sm'>FAQ</h6>
            <nav className='mt-3'>
              <ul className='font-satoshi text-sm text-black/60 space-y-3'>
                <li>Account</li>
                <li>Manage Deliveries</li>
                <li>Orders</li>
                <li>Payments</li>
              </ul>
            </nav>
          </div>

          <div>
            <h6 className='font-satoshi font-medium text-sm'>RESOURCES</h6>
            <nav className='mt-3'>
              <ul className='font-satoshi text-sm text-black/60 space-y-3'>
                <li>Free eBook</li>
                <li>Development Tutorial</li>
                <li>How to - Blog</li>
                <li>Youtube Playlist</li>
              </ul>
            </nav>
          </div>
        </div>

      </div>

      {/* horizontal line */}
      <div className="wrapper">
        <div className="lg:mt-[50px] lg:mb-[25px] w-full h-[1px] bg-black/10"/>
      </div>

      <div className='wrapper mt-4 flex flex-col lg:flex-row items-center justify-center lg:justify-between'>
        <p className='font-satoshi text-sm text-black/60 mb-4 lg:mb-0'>© 2000-2021, All rights reserved</p>
        <nav>
          <ul className='flex items-center justify-center gap-[10px]'>
            <li className='w-[39.96px] h-[25.74px] bg-white border border-[#D6DCE5] flex items-center justify-center'><Image src={IconVisa} alt='visa icon'/></li>
            <li className='w-[39.96px] h-[25.74px] bg-white border border-[#D6DCE5] flex items-center justify-center'><Image src={IconMastercard} alt='mastercard icon'/></li>
            <li className='w-[39.96px] h-[25.74px] bg-white border border-[#D6DCE5] flex items-center justify-center'><Image src={IconPayPal} alt='paypal icon'/></li>
            <li className='w-[39.96px] h-[25.74px] bg-white border border-[#D6DCE5] flex items-center justify-center'><Image src={IconApplePay} alt='apply pay icon'/></li>
            <li className='w-[39.96px] h-[25.74px] bg-white border border-[#D6DCE5] flex items-center justify-center'><Image src={IconGooglePay} alt='google pay icon'/></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer