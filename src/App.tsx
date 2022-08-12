import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Logo from './components/Logo'
import MapMarker from './components/MapMarker'
import { Squash as Hamburger } from 'hamburger-react'

import Main from 'components/main/Main'
import Order from 'components/order/Order'
import AllProducts from 'components/order/allproduct/AllProducts'
import Featured from 'components/order/featured/Featured'

function App() {
  const [isOpen, setOpen] = useState(false)

  return (
    <Router>
      <nav
        id="navBar"
        className="sticky top-0 z-10 flex flex-row bg-white px-4 py-4 shadow md:px-6 md:py-6 lg:px-10 lg:py-7"
      >
        <Link to="/">
          <Logo />
        </Link>
        <div id="mobileNav" className="ml-auto md:hidden">
          <Hamburger
            color="#787878"
            size={20}
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
        <div id="desktopNav" className="hidden w-full flex-row md:flex">
          <ul className="mx-10 list-none self-center font-bold">
            <li className="mr-7 inline-block">
              <Link to="/order/menu">ORDER</Link>
            </li>
            <li className="mr-7 inline-block">
              <button>CARDS</button>
            </li>
            <li className="inline-block">
              <button>GIFT</button>
            </li>
          </ul>
          <div className="ml-auto flex flex-shrink-0 flex-row self-center">
            <MapMarker />
            <button className="ml-4 mr-10 font-semibold">Find a store</button>
            <button className="rounded-full border border-black px-4 py-1.5 font-semibold">
              Sign in
            </button>
            <button className="ml-4 rounded-full border border-black bg-black px-4 py-1.5 font-semibold text-white">
              Join now
            </button>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="order" element={<Order />}>
          <Route path="menu" element={<AllProducts />} />
          <Route path="featured" element={<Featured />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
