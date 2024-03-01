'use client';
import React from 'react'
import { CustomBtnProps } from '../../../types';

const custombutton = ({title,handlebtn,containerstyles}:CustomBtnProps) => {
  return (
    <div>
      <button
      type='button'
      onClick={handlebtn}
      disabled={false}
      className={`custom-btn ${containerstyles}`}
      ><span className={`flex-1`}>{title}</span></button>
    </div>
  )
}

export default custombutton
