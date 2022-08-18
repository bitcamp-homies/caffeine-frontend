import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Cardheader = () => {
  let navigate = useNavigate()

  return (
    <>
      <div
        id="orderNavBar"
        className="sticky top-0
          hidden flex-row border-[1px] border-gray-300 bg-gray-100
          md:block md:px-6 md:py-2 lg:px-10 lg:py-3
    "
      >
        <ul className="ml-[5.5rem] list-none self-center">
          <li className="mr-7 inline-block text-sm">
            <button
              onClick={() => {
                navigate('/card/gift')
              }}
            >
              Gift Card
            </button>
          </li>
          <li className="mr-7 inline-block text-sm">
            <button
              onClick={() => {
                navigate('/card/point')
              }}
            >
              Thumbs Point
            </button>
          </li>
        </ul>
      </div>

      <Outlet />
    </>
  )
}

export default Cardheader
