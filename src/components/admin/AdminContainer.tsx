// @ts-nocheck

import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import ContentContainer from './ContentContainer'
import NaviContainer from './NaviContainer'
import { useNavigate } from 'react-router-dom'
import DropDown from './DropDown'
import { getMember } from 'store/api'
import NaviContainerMster from './NaviContainerMster'
const AdminContainer = () => {
  const usertype = sessionStorage.getItem('UserType')
  const Id = sessionStorage.getItem('Id')
  const [memberdata,SetMemberData] = useState([])
  const data = {
    'user_id' : Id
  }
  const qs = require('qs');
  useEffect(()=>{
    getMember(qs.stringify(data))
    .then(res => SetMemberData(res.data))
  },[])

  let navigate = useNavigate()
  return (
    /* header */
    <div>
      <div
        id="orderNavBar"
        className="sticky top-0 border-[1px] border-gray-300 bg-gray-100 text-right md:block md:px-6 md:py-2 lg:px-10 lg:py-3"
      >
        {
          usertype === 'admin' ?
          (
            <div className="w-full text-center text-lg font-semibold ">
              서비스 관리페이지
            </div>
          )
          :
          (
            <div className="flex flex-row gap-5 justify-center text-xs md:text-sm grid-col">
              <div className="hidden md:flex flex-row items-center gap-4 rounded-full bg-gray-200">Thumbs ID : {memberdata.nickname}</div>
              <div className="hidden sm:flex flex-row items-center gap-4 rounded-full bg-gray-200">Thumbs Point : {20000000}</div>
              <div className="hidden md:flex flex-row items-center gap-4 rounded-full bg-gray-200">사용자 : {'private'} / {memberdata.user_type}</div>
              <div className="flex flex-row items-center gap-4 rounded-full bg-gray-200">
                <p>{memberdata.name}님 안녕하세요!</p>
                <img
                  className="w-8 rounded-full"
                  src="https://imagez.tmz.com/image/f7/1by1/2021/12/14/f7703994b69d48ca802df55729a2325c_xl.jpg"
                  alt="Elon Musk"
                />
              </div>
              <DropDown />
              
            </div>
          )
        }
        

        {/* 우상단 profile */}
      </div>
      {/* end of Header */}

      <div className="flex">
        {
          usertype === 'admin' ?
          <NaviContainerMster />
          :
          <NaviContainer />
        }
        <main className=" min-h-screen w-full">
          <nav className="flex justify-between bg-white px-10 py-5" />
          <ContentContainer />
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminContainer
