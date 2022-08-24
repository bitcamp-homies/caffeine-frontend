// @ts-nocheck
import { type } from '@testing-library/user-event/dist/type'
import axios, { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import Cafes from './cafesRsc/Cafes'
import { CafeProps } from './Interfaces'

const CafesContainer = () => {

  return (
    <>
      <div>
        <div className="grid-col grid gap-5 bg-white px-6 pt-5 ">
          <div className="text-bold pb-4 pt-5 text-3xl font-bold">cafes</div>
          <div className="pb-2 text-xl font-bold">All cafes</div>
          <hr />
          <Cafes/>
        </div>
      </div>
    </>
  )
}

export default CafesContainer