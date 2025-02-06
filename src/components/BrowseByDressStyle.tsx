import React from 'react'
import CatergoryCard from './cards/CatergoryCard'
import ImgCasual from '@/public/casual.png'
import ImgFormal from '@/public/formal.png'
import ImgParty from '@/public/party.png'
import ImgGym from '@/public/gym.png'

const BrowseByDressStyle = () => {
  return (
    <section className='px-4 pb-16'>
      <div className='wrapper bg-[#F0F0F0] rounded-lg px-6 pt-6 pb-[27px]'>
        <h2 className='text-center font-bold text-[2.01rem] lg:text-5xl mt-4 mb-[28px]'>BROWSE BY DRESS STYLE</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <CatergoryCard title='Casual' image={ImgCasual}/>
          <CatergoryCard title='Formal' image={ImgFormal}/>
          <CatergoryCard title='Party' image={ImgParty}/>
          <CatergoryCard title='Gym' image={ImgGym}/>
        </div>
      </div>
    </section>
  )
}

export default BrowseByDressStyle