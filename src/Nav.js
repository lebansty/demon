import React from 'react'
import { Outlet } from 'react-router-dom'

function Nav() {
  return (
    <>
    <div className='navi'>Nav</div>
    <Outlet/>
    </>
  )
}

export default Nav