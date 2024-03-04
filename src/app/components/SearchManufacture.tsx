"use client"
import React from 'react'
import { Fragment } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { Manufactureprops } from '../../../types'
import Image from 'next/image'
import { manufacturers } from '@/constants'

const SearchManufacture = ({setmanufacture,manufacture}:Manufactureprops) => {
    // This prop takes a function that determines how the selected value should be displayed in the input field.
    // It receives the selected value as a string argument and should return the representation of that value that will be shown in the input field. In your case, 
    //it seems to be just returning the value itself ((manufacture: string) => manufacture). 
    //This means that the selected value will be displayed as is in the input field.
 const [Query,setQuery]=React.useState("")
 const  filterManufactures = 
    Query === "" ? manufacturers  
    : manufacturers.filter((item)=>(
      item.toLowerCase().replace(/\s+/g, " ").includes(Query.toLowerCase().replace(/\s+/g, " "))
    ))
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
            onChange={(e) => setQuery(e.target.value)} // onchange in the inpute filed the targeted value will be stored in the SetQuery 
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
