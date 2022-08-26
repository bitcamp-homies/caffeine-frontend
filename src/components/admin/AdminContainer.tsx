// @ts-nocheck

import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import ContentContainer from './ContentContainer'
import NaviContainer from './NaviContainer'
import { useNavigate } from 'react-router-dom'
import DropDown from './DropDown'

const AdminContainer = () => {
  let navigate = useNavigate()
  return (
    /* header */
    <div>
      <div
        id="orderNavBar"
        className="sticky top-0 border-[1px] border-gray-300 bg-gray-100 text-right md:block md:px-6 md:py-2 lg:px-10 lg:py-3"
      >
        <div className="flex flex-row gap-5 justify-center text-xs md:text-sm grid-col">
          <div className="hidden md:flex flex-row items-center gap-4 rounded-full bg-blue-200">Thumbs ID : {'Im the best'}</div>
          <div className="hidden sm:flex flex-row items-center gap-4 rounded-full bg-blue-200">Thumbs Point : {'20000000'}</div>
          <div className="hidden md:flex flex-row items-center gap-4 rounded-full bg-blue-200">사용자 : {'private'} / {'Business'}</div>
          <div className="flex flex-row items-center gap-4 rounded-full bg-blue-200">
            <p>profile 님 안녕하세요!</p>
            <img
              className="w-8 rounded-full"
              src="https://imagez.tmz.com/image/f7/1by1/2021/12/14/f7703994b69d48ca802df55729a2325c_xl.jpg"
              alt="Elon Musk"
            />
          </div>
          <DropDown />
          
        </div>

        {/* 우상단 profile */}
      </div>
      {/* end of Header */}

      <div className="flex">
        <NaviContainer />
        <main className=" min-h-screen w-full">
          <nav className="flex justify-between bg-white px-10 py-6" />
          <ContentContainer />
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminContainer
