//@ts-nocheck
import React from 'react'
import { Link } from 'react-router-dom'
import data from '../featuredData'

const FeaturedMenu = () => {
  const dataList1 = data.filter((item) => item.seq < 2)

  const dataShow1 = dataList1.map((item) => (
    <div key={item.seq} className="basis-[60%]">
      <img className="h-[680px] w-[680px]" src={item.img} />
      <div className="mb-5 bg-[#9F2042] p-5 text-center text-white sm:h-[330px] lg:h-[261px]">
        <p className="text-2xl font-bold">{item.header}</p>
        <div className="flex justify-center">
          <svg className="overflow-[#ffffff] h-[24px] w-[24px] fill-current text-white ">
            <path d="M11.508 19.22c-.667-.918-1.335-1.888-1.956-2.863-.432-.676-.826-1.33-1.175-1.956-1.037-1.857-1.617-3.357-1.617-4.308 0-2.984 2.297-5.31 5.24-5.31s5.24 2.326 5.24 5.31c0 .95-.58 2.45-1.617 4.31-.35.624-.743 1.28-1.175 1.955-.62.975-1.29 1.945-1.956 2.864-.174.24-.34.465-.492.67-.153-.205-.318-.43-.492-.67zm6.732-9.128c0-3.533-2.743-6.31-6.24-6.31-3.497 0-6.24 2.777-6.24 6.31 0 1.173.628 2.796 1.744 4.796.36.644.763 1.315 1.204 2.007.634.993 1.312 1.98 1.99 2.913.238.327.458.625.656.887l.252.33c.2.256.588.256.788 0l.252-.33c.198-.262.418-.56.656-.887.678-.934 1.356-1.92 1.99-2.913.44-.692.845-1.363 1.204-2.007 1.116-2 1.744-3.623 1.744-4.796z"></path>
            <path d="M12 13.425c1.592 0 2.88-1.303 2.88-2.908s-1.288-2.91-2.88-2.91c-1.592 0-2.88 1.305-2.88 2.91 0 1.605 1.288 2.908 2.88 2.908zm0-1c-1.037 0-1.88-.853-1.88-1.908 0-1.056.843-1.91 1.88-1.91s1.88.854 1.88 1.91c0 1.055-.843 1.908-1.88 1.908z"></path>
          </svg>
          <span>{item.location}</span>
        </div>
        <p className="mt-5 min-w-[99px] text-base sm:text-xl">{item.footer}</p>
        <Link
          to={`/order/cafes/menu/${item.cafe_id}`}
          state={{ cafe_id: item.cafe_id, img: item.mainimg }}
        >
          <button className="mt-10 w-[130px] rounded-3xl border-2 border-white p-2 font-semibold">
            Order now
          </button>
        </Link>
      </div>
    </div>
  ))

  const dataList2 = data.filter((item) => 2 <= item.seq && item.seq < 4)
  const dataShow2 = dataList2.map((item) => (
    <div key={item.seq} className="basis-[60%]">
      <img className="h-[680px] w-[680px]" src={item.img} />
      <div className="mb-5 bg-[#9F2042] p-5 text-center text-white sm:h-[330px] lg:h-[261px]">
        <p className="text-2xl font-bold">{item.header}</p>
        <div className="flex justify-center">
          <svg className="overflow-[#ffffff] h-[24px] w-[24px] fill-current text-white ">
            <path d="M11.508 19.22c-.667-.918-1.335-1.888-1.956-2.863-.432-.676-.826-1.33-1.175-1.956-1.037-1.857-1.617-3.357-1.617-4.308 0-2.984 2.297-5.31 5.24-5.31s5.24 2.326 5.24 5.31c0 .95-.58 2.45-1.617 4.31-.35.624-.743 1.28-1.175 1.955-.62.975-1.29 1.945-1.956 2.864-.174.24-.34.465-.492.67-.153-.205-.318-.43-.492-.67zm6.732-9.128c0-3.533-2.743-6.31-6.24-6.31-3.497 0-6.24 2.777-6.24 6.31 0 1.173.628 2.796 1.744 4.796.36.644.763 1.315 1.204 2.007.634.993 1.312 1.98 1.99 2.913.238.327.458.625.656.887l.252.33c.2.256.588.256.788 0l.252-.33c.198-.262.418-.56.656-.887.678-.934 1.356-1.92 1.99-2.913.44-.692.845-1.363 1.204-2.007 1.116-2 1.744-3.623 1.744-4.796z"></path>
            <path d="M12 13.425c1.592 0 2.88-1.303 2.88-2.908s-1.288-2.91-2.88-2.91c-1.592 0-2.88 1.305-2.88 2.91 0 1.605 1.288 2.908 2.88 2.908zm0-1c-1.037 0-1.88-.853-1.88-1.908 0-1.056.843-1.91 1.88-1.91s1.88.854 1.88 1.91c0 1.055-.843 1.908-1.88 1.908z"></path>
          </svg>
          <span>{item.location}</span>
        </div>
        <p className="mt-5 min-w-[99px] text-base sm:text-xl">{item.footer}</p>
        <Link
          to={`/order/cafes/menu/${item.cafe_id}`}
          state={{ cafe_id: item.cafe_id, img: item.mainimg }}
        >
          <button className="mt-10 w-[130px] rounded-3xl border-2 border-white p-2 font-semibold">
            Order now
          </button>
        </Link>
      </div>
    </div>
  ))
  const dataList3 = data.filter((item) => 4 <= item.seq && item.seq < 6)
  const dataShow3 = dataList3.map((item) => (
    <div key={item.seq} className="basis-[60%]">
      <img className="h-[680px] w-[680px]" src={item.img} />
      <div className="mb-5 bg-[#9F2042] p-5 text-center text-white sm:h-[330px] lg:h-[261px]">
        <p className="text-2xl font-bold">{item.header}</p>
        <div className="flex justify-center">
          <svg className="overflow-[#ffffff] h-[24px] w-[24px] fill-current text-white ">
            <path d="M11.508 19.22c-.667-.918-1.335-1.888-1.956-2.863-.432-.676-.826-1.33-1.175-1.956-1.037-1.857-1.617-3.357-1.617-4.308 0-2.984 2.297-5.31 5.24-5.31s5.24 2.326 5.24 5.31c0 .95-.58 2.45-1.617 4.31-.35.624-.743 1.28-1.175 1.955-.62.975-1.29 1.945-1.956 2.864-.174.24-.34.465-.492.67-.153-.205-.318-.43-.492-.67zm6.732-9.128c0-3.533-2.743-6.31-6.24-6.31-3.497 0-6.24 2.777-6.24 6.31 0 1.173.628 2.796 1.744 4.796.36.644.763 1.315 1.204 2.007.634.993 1.312 1.98 1.99 2.913.238.327.458.625.656.887l.252.33c.2.256.588.256.788 0l.252-.33c.198-.262.418-.56.656-.887.678-.934 1.356-1.92 1.99-2.913.44-.692.845-1.363 1.204-2.007 1.116-2 1.744-3.623 1.744-4.796z"></path>
            <path d="M12 13.425c1.592 0 2.88-1.303 2.88-2.908s-1.288-2.91-2.88-2.91c-1.592 0-2.88 1.305-2.88 2.91 0 1.605 1.288 2.908 2.88 2.908zm0-1c-1.037 0-1.88-.853-1.88-1.908 0-1.056.843-1.91 1.88-1.91s1.88.854 1.88 1.91c0 1.055-.843 1.908-1.88 1.908z"></path>
          </svg>
          <span>{item.location}</span>
        </div>
        <p className="mt-5 min-w-[99px] text-base sm:text-xl">{item.footer}</p>
        <Link
          to={`/order/cafes/menu/${item.cafe_id}`}
          state={{ cafe_id: item.cafe_id, img: item.mainimg }}
        >
          <button className="mt-10 w-[130px] rounded-3xl border-2 border-white p-2 font-semibold">
            Order now
          </button>
        </Link>
      </div>
    </div>
  ))
  const dataList4 = data.filter((item) => 6 <= item.seq && item.seq < 8)
  const dataShow4 = dataList4.map((item) => (
    <div key={item.seq} className="basis-[60%]">
      <img className="h-[680px] w-[680px]" src={item.img} />
      <div className="mb-5 bg-[#9F2042] p-5 text-center text-white sm:h-[330px] lg:h-[261px]">
        <p className="text-2xl font-bold">{item.header}</p>
        <div className="flex justify-center">
          <svg className="overflow-[#ffffff] h-[24px] w-[24px] fill-current text-white ">
            <path d="M11.508 19.22c-.667-.918-1.335-1.888-1.956-2.863-.432-.676-.826-1.33-1.175-1.956-1.037-1.857-1.617-3.357-1.617-4.308 0-2.984 2.297-5.31 5.24-5.31s5.24 2.326 5.24 5.31c0 .95-.58 2.45-1.617 4.31-.35.624-.743 1.28-1.175 1.955-.62.975-1.29 1.945-1.956 2.864-.174.24-.34.465-.492.67-.153-.205-.318-.43-.492-.67zm6.732-9.128c0-3.533-2.743-6.31-6.24-6.31-3.497 0-6.24 2.777-6.24 6.31 0 1.173.628 2.796 1.744 4.796.36.644.763 1.315 1.204 2.007.634.993 1.312 1.98 1.99 2.913.238.327.458.625.656.887l.252.33c.2.256.588.256.788 0l.252-.33c.198-.262.418-.56.656-.887.678-.934 1.356-1.92 1.99-2.913.44-.692.845-1.363 1.204-2.007 1.116-2 1.744-3.623 1.744-4.796z"></path>
            <path d="M12 13.425c1.592 0 2.88-1.303 2.88-2.908s-1.288-2.91-2.88-2.91c-1.592 0-2.88 1.305-2.88 2.91 0 1.605 1.288 2.908 2.88 2.908zm0-1c-1.037 0-1.88-.853-1.88-1.908 0-1.056.843-1.91 1.88-1.91s1.88.854 1.88 1.91c0 1.055-.843 1.908-1.88 1.908z"></path>
          </svg>
          <span>{item.location}</span>
        </div>
        
        <p className="mt-5 min-w-[99px] text-base sm:text-xl">{item.footer}</p>
        <Link
          to={`/order/cafes/menu/${item.cafe_id}`}
          state={{ cafe_id: item.cafe_id, img: item.mainimg }}
        >
          <button className="mt-10 w-[130px] rounded-3xl border-2 border-white p-2 font-semibold">
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
