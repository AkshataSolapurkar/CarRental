"use client"
import React from 'react'
import SearchManufacture from './SearchManufacture'

const SearchBar = () => {
    const [manufacture, setmanufacture]=React.useState("")
    const handleSearch= () =>{
        
    }
  return (
    
      <form action="" className='searchbar' onSubmit={handleSearch} >
        <div className='searchbar__item'>
            <SearchManufacture
           manufacture={manufacture} 
           setmanufacture={setmanufacture}
           />
        </div>
      </form>
   
  )
}

export default SearchBar
