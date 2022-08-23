// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Locations from './filterRsc/Locations'
import { CafeProps } from './Interfaces'

const LocaContainer = ({setAddress}) => {
  const {address2} = useParams()
  setAddress(address2)

  return (
    <div className="flex flex-col gap-4 px-3 pt-5 text-center font-semibold">
      <div className="bg-white pt-5 text-xl">
        Seoul
        <Locations/>
      </div>
    </div>
  )
}

export default LocaContainer
