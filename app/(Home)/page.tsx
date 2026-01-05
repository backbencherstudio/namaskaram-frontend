import HeroSection from '@/components/Home/Hero/HeroSection'
import NoteSection from '@/components/Home/NoteSection/NoteSection'
import RecentSupplyEvents from '@/components/Home/RecentSupplyEvents/RecentSupplyEvents'
import SupplyOverView from '@/components/Home/SupplyOverView/SupplyOverView'
import React from 'react'

export default function HomePage() {
  return (
    <div className='bg-[#101010]'>
      <div className='container'>
        <div className='lg:py-[80px] md:py-[60px] py-10'>
          <HeroSection />
        </div>
        <div className='lg:pb-10 pb-8'>
          <NoteSection />
        </div>
        <div className='lg:py-10 py-8'>
          <SupplyOverView/>
        </div>
        <div className='lg:py-10 py-8'>
          <RecentSupplyEvents/>
        </div>
      </div>
    </div>
  )
}
