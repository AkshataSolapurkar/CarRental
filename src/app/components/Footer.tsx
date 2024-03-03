import Image from 'next/image'
import React from 'react'
import { footerLinks } from '@/constants'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
      <footer className='flex flex-col mt-5 text-black border-t border-gray-300'>
        <div className='flex max-md:flex-col justify-between flex-wrap gap-5 sm:px-16 px-6 py-10'>
          <div className='flex flex-col justify-start items-start gap-6'>
            <Image src="/logo.svg"
            alt='logo'
            width={118}
            height={18}
            className='object-contain'/>
            <p className='text-base text-gray-700'>
              Since 2003 <br />
              All Rights Reserved &copy;
            </p>
          </div>
          <div className='footer__links'>
            {footerLinks.map((Links)=>(
              <div key={Links.title} className='footer__link'><h3 className='font-bold'>{Links.title}</h3>
              {Links.links.map((items)=>(
                <Link
                key={items.title}
                href={items.url}
                className='text-gray-500'>
                  {items.title}
                </Link>
              ))}
              </div>
            ))}
          </div>
          <div className='md:hidden flex justify-between flex-wrap item-center mt-1o border-t border-gray-300 sm:px-16 px-6 py-10'>
            <p className=''>
              @2024 CarHub , All Rights Reserved
            </p>
            <div className='footer__copyrights-link'>
              <Link href="/"
              className='text-gray-500'>
               Privacy Policy
              </Link>
              <Link href="/"
              className='text-gray-500'>
               Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
