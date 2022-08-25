//@ts-nocheck
import { ReactComponent as OpenIcon} from './svg/open-svgrepo-com.svg';
import { ReactComponent as CheckIcon} from './svg/check-svg-maincolor.svg';
import { ReactComponent as DogIcon} from './svg/dog-svgrepo-com.svg';
import { ReactComponent as ParkingIcon} from './svg/parking-car-svgrepo-com.svg';

const ListFilter = ({showFilter, setShowFilter}) => {

  return (
    <div className="h-128 basis-full lg:flex lg:basis-2/5 lg:flex-col">
      <div className="w-full lg:w-[28rem] xl:w-[35rem]">
        <div className="my-4 px-4"> 
          <span className="text-2xl font-bold tracking-widest">Filters</span>
          <button className="text-xl font-bold float-right w-10 hover:bg-gray-200 rounded-full text-center" onClick={() => setShowFilter(false)}>X</button>
        </div>
        <div className="text-lg bg-[#F8E5EE] h-12 pl-4 ">
          <div className="py-2 text-[#3D1308] opacity-70 font-semibold tracking-widest">영업시간</div>
        </div>
        <div className="text-base h-16 hover:bg-gray-200 pl-4 py-4 text-gray-400">
          <OpenIcon className='h-8 w-8 inline mx-6 ' fill='#9ca3af'/>
          지금 영업중
          <CheckIcon className='h-6 w-6 inline float-right mx-6' />
        </div>

        <div className="text-lg bg-[#F8E5EE] h-12 pl-4 ">
          <div className="py-2 text-[#3D1308] opacity-70 font-semibold tracking-widest">편의사항</div>
        </div>
        <div className="text-base h-16 hover:bg-gray-200 pl-4 py-4 text-gray-400">
          <DogIcon className='h-8 w-8 inline mx-6 ' fill='#9ca3af'/>
          애견동반
          <CheckIcon className='h-6 w-6 inline float-right mx-6' />
        </div>
        <div className="text-base h-16 hover:bg-gray-200 pl-4 py-4 text-gray-400">
          <ParkingIcon className='h-8 w-8 inline mx-6 ' fill='#9ca3af'/>
          주차가능
          <CheckIcon className='h-6 w-6 inline float-right mx-6' />
        </div>
      </div>
    </div>
  );
};

export default ListFilter;