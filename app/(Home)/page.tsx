import HeroSection from '@/components/Home/Hero/HeroSection'
import React from 'react'

export default function HomePage() {
  return (
    <div className='bg-[#101010]'>
      <div className='container'>
        <div className='lg:py-[80px] md:py-[60px] py-10'>
          <HeroSection />
        </div>
        
      </div>
    </div>
  )
}
