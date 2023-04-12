import React from 'react'

const DetailsHeader = ({children}) => {
  return (
    <div className='min-h-[150px] xl:min-h-[200px] flex justify-center items-center bg-[#f9f8ff] mb-14 xl:mb-24'>
        <h2 className='text-3xl font-extrabold text-[#1a1919]'>{children}</h2>
    </div>
  )
}

export default DetailsHeader