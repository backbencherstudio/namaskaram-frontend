import NoteIcon from '@/components/Icons/NoteIcon'
import React from 'react'

export default function NoteSection() {
  return (
    <div className='bg-[rgba(201,159,111,0.20)] lg:p-8 md:p-6 p-4 border border-[#C99F6F] flex gap-3'>
        <div className='md:mt-1.5 mt-[2px]'>
            <NoteIcon/>
        </div>
        <div>
            <h2 className='text-[#C99F6F] lg:text-2xl md:text-xl text-lg font-medium leading-[150%]'>Burns are not active yet</h2>
            <p className='text-[#EFBE84] lg:text-xl md:text-lg text-base font-extralight leading-[150%] pt-3'>ASTER burns are not currently active. This dashboard shows buybacks, emissions, and net supply change only.</p>
        </div>
    </div>
  )
}
