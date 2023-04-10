import React from 'react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='px-6 my-2 lg:my-5'>
        <Header></Header>
        <Outlet></Outlet>
    </div>
  )
}

export default MainLayout