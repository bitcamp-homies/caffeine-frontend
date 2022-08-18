import React from 'react'
import GiftLeft from './GiftLeft'
import Join from './Join'

const Point = () => {
  return (
    <div className="grid-col-1 flex-row-2 grid h-screen md:flex">
      <div className="h-full w-full bg-white font-semibold">
        <GiftLeft />
      </div>
      <div className="h-full w-full bg-green-700 font-semibold">
        <Join />
      </div>
    </div>
  )
};

export default Point
