'use client'
import React, { useState } from 'react'
import GraphicTshirt from '@/public/product-details/graphic-tshirt.png'
import Thumbnail1 from '@/public/product-details/tshirt-thumbnail1.png'
import Thumbnail2 from '@/public/product-details/tshirt-thumbnail2.png'
import Thumbnail3 from '@/public/product-details/tshirt-thumbnail3.png'
import Image, { StaticImageData } from 'next/image'

const ProductImageViewer = () => {
    const [activeButton, setActiveButton] = useState(0)
    const [currentImage, setCurrentImage] = useState(GraphicTshirt)

    const handleOnClick = (image: StaticImageData, index: number) => {
      setCurrentImage(image)
      setActiveButton(index)
    }
  return (
    <>
      <div className='relative lg:w-3/4  h-[290px] lg:h-auto bg-[#F0EEED] rounded-lg overflow-hidden'>
        <Image src={currentImage} layout='fill' alt='GraphicTshirt' className='object-contain object-center' />
      </div>

      <div className='grid grid-cols-3 lg:grid-cols-1 lg:w-1/4 gap-4 '>
        <button className={`${activeButton === 0 && 'border border-black'} relative rounded-lg overflow-hidden w-full bg-[#F0EEED] lg:grid lg:place-items-center`} onClick={() => handleOnClick(GraphicTshirt,0)}>
          <Image src={Thumbnail1} alt='ProductImg1' className='mx-auto'/>
        </button>
        <button className={`${activeButton === 1 && 'border border-black'} relative rounded-lg overflow-hidden w-full bg-[#F0EEED] lg:grid lg:place-items-center`} onClick={() => handleOnClick(Thumbnail2,1)}>
          <Image src={Thumbnail2} alt='Thumbnail2' className='mx-auto'/>
        </button>
        <button className={`${activeButton === 2 && 'border border-black'} relative rounded-lg overflow-hidden w-full bg-[#F0EEED] lg:grid lg:place-items-center`} onClick={() => handleOnClick(Thumbnail3,2)}>
          <Image src={Thumbnail3} alt='Thumbnail3' className='mx-auto'/>
        </button>
      </div>
    </>
  )
}

export default ProductImageViewer