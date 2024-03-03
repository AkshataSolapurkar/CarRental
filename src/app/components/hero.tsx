"use client"
import React from 'react'
import Custombutton from './custombutton'
import Image from 'next/image'

const hero = () => {
  const handleScroll=()=>{

  }

  return (
    <div className='flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto'>
        <div className=' flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                Find, Book, or Rent a car - Quickly and easily! 
            </h1>
            <p className='hero__subtitle'>
                Stremline your Car rental Experience with our effortless Booking process!!!!
            </p>
            <Custombutton
            containerstyles='bg-blue-600 text-white rounded-full mt-10'
            title='Explore Cars'
            handlebtn={handleScroll}/>
        </div>
        <div className="hero__image-container">
          <div className='hero__image'>
            <Image
            src="/hero.png"
            alt='hero'
            fill className=' object-contain'
            />
          </div>
          <div className='hero__image-overlay'></div>
        </div>
       
    </div>
  )
}

export default hero
