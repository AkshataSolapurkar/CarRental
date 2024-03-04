"use client"
import React from 'react'
import { Fragment } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { Manufactureprops } from '../../../types'
import Image from 'next/image'

const SearchManufacture = ({setmanufacture,manufacture}:Manufactureprops) => {
 const [Query,setQuery]=React.useState("")
  return (
    <div className='search-manufacturer'>
      <Combobox>
        <div className='relative w-full'>
            <Combobox.Button className="absolute top-[14px]">
              <Image
              src='/car-logo.svg'
              width={20}
              height={20}
              alt='logo'
              className='ml-4'/>
            </Combobox.Button>
            <Combobox.Input
            placeholder='Volkswagen'
            className="search-manufacturer__input"
            displayValue= {(manufacture:string)=> manufacture}
            onChange={(e) => setQuery(e.target.value)}
            />

            <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opactiy-100'
            leaveTo='opacity-0'
            afterLeave={()=> setQuery('')}>

            </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacture
