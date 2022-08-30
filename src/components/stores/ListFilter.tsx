//@ts-nocheck
import { ReactComponent as OpenIcon } from './svg/open-svgrepo-com.svg'
import { ReactComponent as CheckIcon } from './svg/check-svg-maincolor.svg'
import { ReactComponent as DogIcon } from './svg/dog-svgrepo-com.svg'
import { ReactComponent as ParkingIcon } from './svg/parking-car-svgrepo-com.svg'
import Slider from '@mui/material/Slider'
import { useState } from 'react'

const ListFilter = ({
  setShowFilter,
  boundary,
  setBoundary,
  filterOptions,
  setFilterOptions,
}) => {
  function valuetext(value) {
    setBoundary(value)
  }

  const marks = [
    {
      value: 1,
      label: '1km',
    },
    {
      value: 2,
      label: '2km',
    },
    {
      value: 3,
      label: '3km',
    },
    {
      value: 4,
      label: '4km',
    },
    {
      value: 5,
      label: '5km',
    },
    {
      value: 6,
      label: '6km',
    },
    {
      value: 7,
      label: '7km',
    },
  ]

  return (
    <div className="h-128 basis-full lg:flex lg:basis-2/5 lg:flex-col">
      <div className="w-full lg:w-[28rem] xl:w-[35rem]">
        <div className="my-4 px-4">
          <span className="text-xl font-bold tracking-widest">Filters</span>
          <button
            className="float-right w-10 rounded-full text-center text-xl font-bold hover:bg-gray-200"
            onClick={() => setShowFilter(false)}
          >
            X
          </button>
        </div>
        <div className="h-12 bg-[#F8E5EE] pl-4 text-lg ">
          <div className="py-2 font-semibold tracking-widest text-[#3D1308] opacity-70">
            영업시간
          </div>
        </div>
        <div
          className={
            'h-16 py-4 pl-4 text-base hover:bg-gray-200 ' +
            `${filterOptions.openFilter ? 'text-black ' : 'text-gray-400'}`
          }
          onClick={() =>
            setFilterOptions({
              openFilter: !filterOptions.openFilter,
              petFilter: filterOptions.petFilter,
              parkingFilter: filterOptions.parkingFilter,
            })
          }
        >
          <OpenIcon
            className="mx-6 inline h-8 w-8 "
            fill={filterOptions.openFilter ? '#000000 ' : '#9ca3af'}
          />
          지금 영업중
          {filterOptions.openFilter && (
            <CheckIcon className="float-right mx-6 inline h-6 w-6" />
          )}
        </div>

        <div className="h-12 bg-[#F8E5EE] pl-4 text-lg ">
          <div className="py-2 font-semibold tracking-widest text-[#3D1308] opacity-70">
            편의사항
          </div>
        </div>
        <div
          className={
            'h-16 py-4 pl-4 text-base hover:bg-gray-200 ' +
            `${filterOptions.petFilter ? 'text-black ' : 'text-gray-400'}`
          }
          onClick={() =>
            setFilterOptions({
              openFilter: filterOptions.openFilter,
              petFilter: !filterOptions.petFilter,
              parkingFilter: filterOptions.parkingFilter,
            })
          }
        >
          <DogIcon
            className="mx-6 inline h-8 w-8 "
            fill={filterOptions.petFilter ? '#000000 ' : '#9ca3af'}
          />
          애견동반
          {filterOptions.petFilter && (
            <CheckIcon className="float-right mx-6 inline h-6 w-6" />
          )}
        </div>
        <div
          className={
            'h-16 py-4 pl-4 text-base hover:bg-gray-200 ' +
            `${filterOptions.parkingFilter ? 'text-black ' : 'text-gray-400'}`
          }
          onClick={() =>
            setFilterOptions({
              openFilter: filterOptions.openFilter,
              petFilter: filterOptions.petFilter,
              parkingFilter: !filterOptions.parkingFilter,
            })
          }
        >
          <ParkingIcon
            className="mx-6 inline h-8 w-8 "
            fill={filterOptions.parkingFilter ? '#000000 ' : '#9ca3af'}
          />
          주차가능
          {filterOptions.parkingFilter && (
            <CheckIcon className="float-right mx-6 inline h-6 w-6" />
          )}
        </div>

        <div className="h-12 bg-[#F8E5EE] pl-4 text-lg ">
          <div className="py-2 font-semibold tracking-widest text-[#3D1308] opacity-70">
            반경조절 {boundary} km
          </div>
        </div>
        <div className="my-4 w-auto px-10 text-center">
          <Slider
            aria-label="Distance"
            defaultValue={boundary}
            getAriaValueText={valuetext}
            valueLabelDisplay="off"
            step={1}
            marks={marks}
            min={1}
            max={7}
            color="secondary"
          />
        </div>
      </div>
    </div>
  )
}

export default ListFilter