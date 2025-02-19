import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  title:string
  image: StaticImageData
}
const CatergoryCard = ({title, image}:Props) => {
  return (
    <Link href='/product-detail' className={`
    ${title == 'Casual' && 'col-span-1'}
    ${title == 'Formal' && 'md:col-span-2'}
    ${title == 'Party' && 'md:col-span-2'}
    ${title == 'Gym' && 'col-span-1'}
    bg-white h-[190px] md:h-[220px] lg:h-[289px] w-full rounded-xl relative overflow-hidden`}>
      <Image
        src={image}
        alt={`${title} background image`}
        layout="fill"
        objectFit="cover"
        className='w-[120%]'/>
      <h5 className='relative z-10 font-satoshi font-bold text-2xl pt-4 pl-6'>{title}</h5>
    </Link>
  )
}

export default CatergoryCard