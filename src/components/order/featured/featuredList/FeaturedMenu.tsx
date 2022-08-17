import React from 'react'
import { Link, Route, Router, Routes } from 'react-router-dom'
import data from '../featuredData'

const FeaturedMenu = () => {
  const dataList1 = data.filter((item) => item.seq < 2)
  console.log(dataList1)

  const dataShow1 = dataList1.map((item) => (
    <div key={item.seq} className="basis-[60%]">
      <img className="" src={item.img} />
      <div className="mb-5 bg-pink-300 p-5 text-center text-white sm:h-[330px] lg:h-[261px]">
        <p className="text-2xl font-bold">{item.header}</p>
        <p className="mt-5 min-w-[99px] text-base sm:text-xl">{item.footer}</p>
        <Link to="./order-now">
        <button className="mt-5 w-[130px] rounded-3xl border-2 border-white p-2 font-semibold">
          Order now
        </button>
        </Link>
      </div>
    </div>
  ))

  const dataList2 = data.filter((item) => 2 <= item.seq && item.seq < 4)
  const dataShow2 = dataList2.map((item) => (
    <div key={item.seq} className="basis-[60%]">
      <img className="" src={item.img} />
      <div className="mb-5 bg-red-400 p-5 text-center text-white sm:h-[330px] lg:h-[261px]">
        <p className="text-2xl font-bold">{item.header}</p>
        <p className="mt-5 text-base sm:text-xl">{item.footer}</p>
        <Link to="./order-now">
        <button className="mt-5 w-[130px] rounded-3xl border-2 border-white p-2 font-semibold">
          Order now
        </button>
        </Link>
      </div>
    </div>
  ))
  const dataList3 = data.filter((item) => 4 <= item.seq && item.seq < 6)
  const dataShow3 = dataList3.map((item) => (
    <div key={item.seq} className="basis-[60%]">
      <img className="" src={item.img} />
      <div className="mb-5 bg-sky-200 p-5 text-center sm:h-[330px] lg:h-[261px]">
        <p className="text-2xl font-bold">{item.header}</p>
        <p className="mt-5 text-base sm:text-xl">{item.footer}​</p>
        <Link to="./order-now">
        <button className="mt-5 w-[130px] rounded-3xl border-2 border-black p-2 font-semibold">
          Order now
        </button>
        </Link>
      </div>
    </div>
  ))
  const dataList4 = data.filter((item) => 6 <= item.seq && item.seq < 8)
  const dataShow4 = dataList4.map((item) => (
    <div key={item.seq} className="basis-[60%]">
      <img className="" src={item.img} />
      <div className="mb-5 bg-green-800 p-5 text-center text-white sm:h-[330px] lg:h-[261px]">
        <p className="text-2xl font-bold">{item.header}</p>
        <p className="mt-5 text-base sm:text-xl">{item.footer}​</p>
        <Link to="./order-now">
        <button className="mt-5 w-[130px] rounded-3xl border-2 border-white p-2 font-semibold">
          Order now
        </button>
        </Link>
      </div>
    </div>
  ))

  return (
    <>
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 sm:flex-row sm:items-center sm:justify-center">
        {dataShow1}
      </div>
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 sm:flex-row sm:items-center sm:justify-center">
        {dataShow2}
      </div>
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 sm:flex-row sm:items-center sm:justify-center">
        {dataShow3}
      </div>
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 sm:flex-row sm:items-center sm:justify-center">
        {dataShow4}
      </div>
    </>
  )
}

export default FeaturedMenu
