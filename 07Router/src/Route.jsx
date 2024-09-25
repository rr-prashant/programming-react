import React from 'react'
import { Footer , Header }  from './components/index'
import { Outlet } from 'react-router-dom'

function Route() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Route
