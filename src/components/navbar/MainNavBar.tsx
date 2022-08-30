import MapMarker from 'components/resources/MapMarker'
import ThumbsLogo from 'components/resources/ThumbsLogo'
import Hamburger from 'hamburger-react'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

interface BurgerProps {
  burgered: boolean
  burger: Function
}

const MainNavBar = (props: BurgerProps) => {
  const isBurger = props.burgered
  const burgerCycle = props.burger
  const userType = sessionStorage.getItem('UserType')
  const [login, setLogin] = useState(userType)

  const navegate = useNavigate()

  const logoutBtn = () => {
    sessionStorage.clear()
    navegate('/')
  }

  return (
    <nav
      id="navBar"
      className="sticky top-0 z-50 flex flex-row bg-white px-4 py-3 shadow md:px-6 md:py-6 lg:px-10 lg:py-5"
    >
      <Link to="/">
        <ThumbsLogo />
      </Link>
      <div id="mobileNav" className="ml-auto md:hidden">
        <Hamburger
          color="#787878"
          size={20}
          onToggle={(isBurger) => {
            if (isBurger) {
              burgerCycle(true)
            } else {
              burgerCycle(false)
            }
          }}
        />
      </div>
      <div id="desktopNav" className="hidden w-full flex-row md:flex">
        <ul className="mx-10 list-none self-center font-bold">
          <li className="mr-7 inline-block">
            <Link to="/order/cafes">사이렌오더</Link>
          </li>
          <li className="mr-7 inline-block">
            <Link to="/cards">포인트</Link>
          </li>
          <li className="inline-block">
            <button>GIFT</button>
          </li>
        </ul>
        <div className="ml-auto flex flex-shrink-0 flex-row self-center">
          <Link to="/store" className="flex flex-row self-center">
            <MapMarker />
            <span className="ml-4 mr-10 font-semibold">지도로 찾기</span>
          </Link>
          {userType === null ? (
            <>
              <button className="rounded-full border border-black px-4 py-1 font-semibold">
                <Link to="login">로그인</Link>
              </button>
              <button className="ml-4 rounded-full border border-black bg-black px-4 py-1 font-semibold text-white">
                <Link to="/member">회원가입</Link>
              </button>
            </>
          ) : (
            <>
              <button
                className="rounded-full border border-black px-4 py-1.5 font-semibold"
                onClick={logoutBtn}
              >
                로그아웃
              </button>
              {userType === 'admin' ? (
                <button className="ml-4 rounded-full border border-black bg-black px-4 py-1.5 font-semibold text-white">
                  <Link to="/admin/CafeManageMaster">Admin Page</Link>
                </button>
              ) : (
                <button className="ml-4 rounded-full border border-black bg-black px-4 py-1.5 font-semibold text-white">
                  <Link to="/admin/LikeList">My Page</Link>
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default MainNavBar
