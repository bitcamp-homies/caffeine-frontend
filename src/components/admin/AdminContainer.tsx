import React from 'react'
import { Link } from 'react-router-dom'

const AdminContainer = () => {
  return (
    <div className="flex">
      <div className="flex h-screen w-2/5 bg-white md:w-1/4">
        <div className="mx-auto py-10">
          <h1 className="hidden sm:block mb-10 cursor-pointer text-2xl font-bold text-[#EC5252] duration-150">
            Asason
          </h1>

          {/* left Navi */}
          <ul className="hidden sm:block ">
            <li className="mt-5 flex cursor-pointer space-x-2 duration-150 hover:text-[#EC5252]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <Link to="" className="font-semibold">Like List</Link>
            </li>
            <li className="mt-10 flex cursor-pointer space-x-2 duration-150 hover:text-[#EC5252]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <Link to="" className="font-semibold">포인트 사용 내역</Link>
            </li>
            <li className="mt-10 flex cursor-pointer space-x-2 duration-150 hover:text-[#EC5252]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
              <Link to="" className="font-semibold">내 카페 관리</Link>
            </li>
            <li className="mt-10 flex cursor-pointer space-x-2 duration-150 hover:text-[#EC5252]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <Link to="" className="font-semibold">프로필 수정</Link>
            </li>
            <li className="mt-10 flex cursor-pointer space-x-2 duration-150 hover:text-[#EC5252]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
              <Link to ="" className="font-semibold">주문 받은 내역</Link>
            </li>
            <li className="mt-10 flex cursor-pointer space-x-2 duration-150 hover:text-[#EC5252]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
              <Link to ="" className="font-semibold">주문 내역</Link>
            </li>
            <li className="mt-10 flex cursor-pointer space-x-2 duration-150 hover:text-[#EC5252]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
              <Link to ="" className="font-semibold">템플릿 존나좋아..</Link>
            </li>
            <button className="mt-10 w-full rounded-full bg-[#EC5252] py-1.5 text-white">
              Learn
            </button>
          </ul>
          {/* left navi bottom */}
        </div>
      </div>

      <main className=" min-h-screen w-full">
        <nav className="flex justify-between bg-white px-10 py-6">
          <div className="flex w-96 items-center space-x-3 rounded-md bg-gray-100 px-4 py-2">
            <input
              type="text"
              placeholder="search"
              className="w-full bg-gray-100 outline-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 cursor-pointer text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* 우상단 profile */}
          <div className="flex flex-row gap-4 items-center">
            <img
              className="w-8 rounded-full"
              src="https://imagez.tmz.com/image/f7/1by1/2021/12/14/f7703994b69d48ca802df55729a2325c_xl.jpg"
              alt="Elon Musk"
            />
            <p>Dodge</p>
          </div>
          {/* 우상단 profile end*/}

        </nav>
        <div className="w-full ">
          <h1 className="text-2xl font-semibold">All Courses</h1>
          <div className="mt-4 w-full">
            <div className="flex px-6 h-96 items-end rounded-md bg-indigo-600">
             
            </div>
            
          </div>
        </div>
      </main>
    </div>
  )
}

export default AdminContainer
