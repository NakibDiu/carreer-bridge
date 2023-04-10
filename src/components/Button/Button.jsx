import React from 'react'

const Button = ({children}) => {
  return (
    <button className='px-6 py-3 lg:px-7 lg:py-5 rounded-lg bg-[#9873FF] text-white font-bold text-base lg:text-xl'>
        {children}
    </button>
  )
}

export default Button