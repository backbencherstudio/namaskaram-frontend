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
            <div>
                <Footer/>
            </div>
        </div>
    )
}
