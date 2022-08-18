import React from 'react'
import { Route } from 'react-router-dom'
import FeaturedMenu from './featuredList/FeaturedMenu'
import OrderNow from './OrederNow'

const Featured = () => {
  return (
    <div>
      <div className="mt-5 mb-10">
        <p className="text-center text-3xl font-bold sm:text-5xl">
          Summer essentials
        </p>
      </div>
      <div>
        <FeaturedMenu />
      </div>
    </div>
  )
}

export default Featured
