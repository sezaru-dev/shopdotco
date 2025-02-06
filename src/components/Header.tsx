import Link from 'next/link'
import React from 'react'
import { HiMenu, HiOutlineSearch,HiOutlineUserCircle, } from "react-icons/hi";
import { LuShoppingCart } from "react-icons/lu";
import { HiOutlineChevronDown, HiOutlineChevronUp  } from "react-icons/hi";

const Header = () => {
  return (
    <header>
      <div className='wrapper px-4 py-5 flex items-center justify-between gap-10'>
        <div className='flex items-center gap-4'>
          <HiMenu className='text-[1.5rem] text-black md:hidden'/>
          <Link href='/' className='text-[1.575rem] lg:text-[2.01rem] font-extrabold font-intergral -mt-[.4rem]'>SHOP.CO</Link>
        </div>

        <nav className=' hidden md:block'>
          <ul className='md:flex gap-6'>
            <li className='whitespace-nowrap flex items-center gap-1'>
              Shop
              <HiOutlineChevronDown/>
            </li>
            <li className='whitespace-nowrap'>On Sale</li>
            <li className='whitespace-nowrap'>Arrivals</li>
            <li className='whitespace-nowrap'>Brands</li>
          </ul>
        </nav>

        <form className='hidden md:block w-full'>
          <div className='relative'>
            <label htmlFor="search" className='absolute top-1/2 -translate-y-1/2 left-4 text-black/40'>
              <HiOutlineSearch/>
            </label>
            <input
              type="search"
              id='search'
              placeholder='Search for products...'
              className='bg-[#F0F0F0] w-full rounded-full pl-10 pr-4 py-4 placeholder:text-black/40'
            />
          </div>
        </form>

        <nav>
          <ul className='flex items-center gap-3 lg:gap-[0.9rem] text-[1.5rem] text-black'>
            <li className='md:hidden'><HiOutlineSearch style={{strokeWidth: '2px'}}/></li>
            <li>
              <Link href='/'>
                <LuShoppingCart style={{strokeWidth: '2px'}}/>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <HiOutlineUserCircle style={{strokeWidth: '2px'}}/>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header