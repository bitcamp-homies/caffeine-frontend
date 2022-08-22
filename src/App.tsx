
import React, { useState } from 'react'
import Logo from './components/Logo'
import MapMarker from './components/MapMarker'
import { Squash as Hamburger } from 'hamburger-react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import MainRoutes from 'Routes';

function App() {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
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
              <Link to="/order/cafes">ORDER</Link>
            </li>
            <li className="mr-7 inline-block">
            <Link to="/cards">CARDS</Link>
            </li>
            <li className="inline-block">
              <button>GIFT</button>
            </li>
          </ul>
          <div className='ml-auto flex flex-row flex-shrink-0 self-center'>
            <Link to="/store" className='flex flex-row self-center'>
              <MapMarker />
              <span className='ml-4 mr-10 font-semibold'>Find a store</span>
            </Link>
            <button className='px-4 py-1.5 border border-black rounded-full font-semibold'><Link to="login">Sign in</Link></button>
            <button className='ml-4 px-4 py-1.5 border border-black bg-black text-white rounded-full font-semibold'><Link to="/member">Join now</Link></button>
          </div>
        </div>
      </nav>
      <MainRoutes/>
    </>
  );
}

export default App
