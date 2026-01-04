import Footer from '@/components/Shared/Footer'
import Navbar from '@/components/Shared/Navbar'
import React from 'react'

export default function HomeLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className=''>
                {children}
            </div>
            <div className='flex justify-center bg-[#101010] md:py-8 py-6'>
                <Footer/>
            </div>
        </div>
    )
}
