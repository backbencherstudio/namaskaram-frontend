import React from 'react'
import ArrowIcons from '../Icons/ArrowIcons'

export default function Navbar() {
    return (
        <div className='bg-[#030303] md:py-8 py-6'>
            <div className="container flex justify-between items-center">
                <div>
                    <img src="/logo.png" alt="" className='w-[151px] h-[40px]' />
                </div>
                <div className=''>
                    <button className='bg-[#EFBE84] flex gap-2 md:p-3 p-2 text-[#101010] md:text-base text-sm leading-[150%] font-light'>
                        Buy ASTER
                        <span><ArrowIcons/></span>
                    </button>
                </div>
            </div>
        </div>
    )
}
