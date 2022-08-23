import React from 'react'
import Locations from './filterRsc/Locations'
import { CafeProps } from './Interfaces'

const LocaContainer = () => {
  return (
    <div className="flex flex-col gap-4 px-3 pt-5 text-center font-semibold">
      <div className="bg-white pt-5 text-xl">
        Seoul
        <Locations />
      </div>
    </div>
  )
}

export default LocaContainer
