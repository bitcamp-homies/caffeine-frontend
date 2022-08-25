//@ts-nocheck
import { ReactComponent as OpenIcon } from './svg/open-svgrepo-com.svg'
import { ReactComponent as CheckIcon } from './svg/check-svg-maincolor.svg'
import { ReactComponent as DogIcon } from './svg/dog-svgrepo-com.svg'
import { ReactComponent as ParkingIcon } from './svg/parking-car-svgrepo-com.svg'
import Slider from '@mui/material/Slider';

const ListFilter = ({ showFilter, setShowFilter }) => {
  
  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <div className="h-128 basis-full lg:flex lg:basis-2/5 lg:flex-col">
      <div className="w-full lg:w-[28rem] xl:w-[35rem]">
        <div className="my-4 px-4">
          <span className="text-2xl font-bold tracking-widest">Filters</span>
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
        <div className="h-16 py-4 pl-4 text-base text-gray-400 hover:bg-gray-200">
          <OpenIcon className="mx-6 inline h-8 w-8 " fill="#9ca3af" />
          지금 영업중
          <CheckIcon className="float-right mx-6 inline h-6 w-6" />
        </div>

        <div className="h-12 bg-[#F8E5EE] pl-4 text-lg ">
          <div className="py-2 font-semibold tracking-widest text-[#3D1308] opacity-70">
            편의사항
          </div>
        </div>
        <div className="h-16 py-4 pl-4 text-base text-gray-400 hover:bg-gray-200">
          <DogIcon className="mx-6 inline h-8 w-8 " fill="#9ca3af" />
          애견동반
          <CheckIcon className="float-right mx-6 inline h-6 w-6" />
        </div>
        <div className="h-16 py-4 pl-4 text-base text-gray-400 hover:bg-gray-200">
          <ParkingIcon className="mx-6 inline h-8 w-8 " fill="#9ca3af" />
          주차가능
          <CheckIcon className="float-right mx-6 inline h-6 w-6" />
        </div>

        <div className="h-12 bg-[#F8E5EE] pl-4 text-lg ">
          <div className="py-2 font-semibold tracking-widest text-[#3D1308] opacity-70">
            반경조절
          </div>
        </div>
        <div className='w-96 '>
          <Slider
            aria-label="Temperature"
            defaultValue={1}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={10}
            color="secondary"
          />
        </div>
      </div>
    </div>
  )
}

export default ListFilter
