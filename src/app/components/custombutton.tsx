'use client';
import React from 'react'
import { CustomBtnProps } from '../../../types'
import Image from 'next/image';

const custombutton = ({title,handlebtn,containerstyles,textstyles,rightIcon}:CustomBtnProps) => {
  return (
    <div>
      <button
      type='button'
      onClick={handlebtn}
      disabled={false}
      className={`custom-btn ${containerstyles}`}
      ><span className={`flex-1 ${textstyles}`}>{title}</span>
      {rightIcon && (
      <div className='w-6 h-5 relative'>
       <Image
       src={rightIcon}
       alt='upwards'
       fill 
       className='object-contain'/>
      </div>)}
      </button>
    </div>
  )
}

export default custombutton
