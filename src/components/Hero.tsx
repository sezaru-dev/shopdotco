import React from 'react'
import Button from './Button'
import Facts from './Facts'
import Image from 'next/image'
import HeroSmall from '@/public/hero-small.png'
import Sparkle from '@/public/hero-sparkle.png'

const Hero = () => {
  return (
    <section className=' bg-[#F2F0F1] h-[853px] lg:h-[663px]'>

      <div className="wrapper px-4 flex flex-col lg:flex-row lg:h-[663px]">
        {/* heading,subheading, cta etc */}
        <div className="lg:w-1/2 pt-6 lg:pt-[6.5rem] h-[405px] lg:h-auto">
          <h1 className='lg:leading-[4rem] font-extrabold text-4xl leading-none lg:text-[4rem]'>
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className='text-black/60 my-4 lg:w-[90%] text-sm lg:text-base'>
          Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <Button text='Shop Now' primary style='w-full lg:w-max px-[54px] py-4'/>

          <div className='md:hidden flex items-center justify-around flex-wrap w-full px-8 mt-4'>
            <div className='w-full flex items-center justify-between relative'>

              <div className='absolute top-0 left-[48.5%] -translate-x-1/2 h-full w-[1px] bg-black/10'/>

              <Facts stats='200' description='International Brands' styles="w-fit"/>

              <Facts stats='2,000' description=' High-Quality Products' styles="w-fit"/>
            </div>

            <Facts stats='30,000' description='Happy Customers' styles=""/>
          </div>

          <div className='hidden md:flex items-center justify-between w-full mt-4'>
            <Facts stats='200' description='International Brands' styles="w-fit"/>
            <Facts stats='2,000' description=' High-Quality Products' styles="w-fit"/>
            <Facts stats='30,000' description='Happy Customers' styles="w-fit"/>
          </div>

        </div>

        {/* Fashion Image */}
        <div className="lg:w-1/2 relative h-[448px] lg:h-auto w-full">
        <Image 
          src={HeroSmall} 
          alt='hero image'
          layout="fill"
          objectFit="cover"/>
          <Image src={Sparkle} alt='sparkle image' className='absolute top-[8%] -translate-y-[8%] right-[5%] -translate-x-[5%] z-10'/>
          <Image src={Sparkle} alt='sparkle image' height={50} width={50} className='absolute top-[32%] -translate-y-[32%] left-[8%] -translate-x-[8%] z-10'/>
        </div>
      </div>

    </section>
  )
}

export default Hero

