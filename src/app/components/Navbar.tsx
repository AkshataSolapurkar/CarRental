'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Custombutton from './custombutton'

const Navbar = () => {
  const handleScroll=()=>{

  }
  return (
    
    <div>
      <header className='w-full absolute z-10'>
        <nav className='mx-auto max-w-[1440px] flex justify-between items-center sm:px-16 px-6 py-9'>
          <Link href="/" className='flex justify-center items-center'>
            <Image
            src="/logo.svg"
            alt='logo'
            width={118}
            height={18}/>
          </Link>
          <Custombutton
          title='Sign In'
          containerstyles="rounded-full bg-blue-600 text-white xl:text-blue-600 min-w-[130px] xl:bg-white"
          handlebtn={handleScroll}
          />
        </nav>
      </header>
    </div>
  )
}

export default Navbar
