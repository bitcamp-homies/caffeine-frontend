// @ts-nocheck
import React from 'react'
import { useLocation } from 'react-router-dom';
import Join from './Join'
import PointLeft from './PointLeft';

const Point = () => {
  const pathname = useLocation().pathname;
  console.log(pathname)
  return (
    <div className="grid-col-1 flex-row-2 grid h-screen md:flex">
      <div className="h-full w-full bg-white font-semibold">
        <PointLeft />
      </div>
      <div className="h-full w-full bg-green-700 font-semibold">
        <Join pathname={pathname}/>
      </div>
    </div>
  )
};

export default Point
