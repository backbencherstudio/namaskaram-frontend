import React from 'react'
import ArrowIcons from '../Icons/ArrowIcons'

export default function Navbar() {
    return (
        <div className='bg-[#030303] md:py-8 py-6'>
            <div className="container">
                <div>
                    <img src="/logo.png" alt="" className='w-[151px] h-[40px]' />
                </div>
                <div>
                    <button>
                        Buy ASTER
                        <span><ArrowIcons/></span>
                    </button>
                </div>
            </div>
        </div>
    )
}
