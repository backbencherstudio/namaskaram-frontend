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
        </div>
    )
}
