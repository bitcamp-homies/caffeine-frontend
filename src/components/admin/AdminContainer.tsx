// @ts-nocheck

import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import ContentContainer from './ContentContainer'
import NaviContainer from './NaviContainer'

const AdminContainer = () => {
  return (
    <div className="flex">
      <NaviContainer />
      <main className=" min-h-screen w-full">
        <nav className="flex justify-between bg-white px-10 py-6">
          {/* 우상단 profile */}
          <div className="flex flex-row items-center gap-4">
            <img
              className="w-8 rounded-full"
              src="https://imagez.tmz.com/image/f7/1by1/2021/12/14/f7703994b69d48ca802df55729a2325c_xl.jpg"
              alt="Elon Musk"
            />
            <p>profile name</p>
          </div>
          {/* 우상단 profile end*/}
        </nav>
        <ContentContainer />
        <Outlet />
      </main>
    </div>
  )
}

export default AdminContainer
