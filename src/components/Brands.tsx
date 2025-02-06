import React from 'react'
import Versace from '@/public/brands/versace.png'
import Zara from '@/public/brands/zara.png'
import Gucci from '@/public/brands/gucci.png'
import Prada from '@/public/brands/prada.png'
import Calvin from '@/public/brands/calvin.png'
import VersaceSmall from '@/public/brands/versace-small.png'
import ZaraSmall from '@/public/brands/zara-small.png'
import GucciSmall from '@/public/brands/gucci-small.png'
import PradaSmall from '@/public/brands/prada-small.png'
import CalvinSmall from '@/public/brands/calvin-small.png'
import Image from 'next/image'

const Brands = () => {
  return (
    <section className='w-full bg-black py-[2.2rem] relative z-30'>
      <div className="wrapper px-4 lg:px-0">
        {/* for small screens row1 */}
        <ul className='lg:hidden w-full flex items-center justify-between flex-wrap'>
            <li>
              <Image src={VersaceSmall} alt='brand' />
            </li>
            <li>
              <Image src={ZaraSmall} alt='brand'/>
            </li>
            <li>
              <Image src={GucciSmall} alt='brand' />
            </li>
        </ul>
        {/* for small screens row2 */}
        <ul className='lg:hidden w-full flex items-center justify-evenly flex-wrap mt-4'>
          <li>
            <Image src={PradaSmall} alt='brand' />
          </li>
          <li>
            <Image src={CalvinSmall} alt='brand' />
          </li>
        </ul>

        {/* for large screens */}
        <ul className='hidden lg:flex w-full items-center justify-between flex-wrap'>
          <li>
            <Image src={Versace} alt='brand'/>
          </li>

          <li>
            <Image src={Zara} alt='brand'/>
          </li>

          <li>
            <Image src={Gucci} alt='brand'/>
          </li>

          <li>
            <Image src={Prada} alt='brand'/>
          </li>
          <li>
            <Image src={Calvin} alt='brand'/>
          </li>
        </ul>
      </div>
    </section>

  )
}

export default Brands