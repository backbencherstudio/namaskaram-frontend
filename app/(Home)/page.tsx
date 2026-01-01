import HeroSection from '@/components/Home/Hero/HeroSection'
import NoteSection from '@/components/Home/NoteSection/NoteSection'
import React from 'react'

export default function HomePage() {
  return (
    <div className='bg-[#101010]'>
      <div className='container'>
        <div className='lg:py-[80px] md:py-[60px] py-10'>
          <HeroSection />
        </div>
          <div className='pb-10'>
            <NoteSection/>
          </div>
      </div>
    </div>
  )
}
