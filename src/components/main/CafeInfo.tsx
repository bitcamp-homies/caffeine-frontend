// @ts-nocheck
import Carousel from 'components/stores/Carousel'
import TempIndexIcon from 'components/resources/TempIndexIcon'

const CafeInfo = ({ cafeInfo }) => {
  const {
    about,
    address1,
    address2,
    address3,
    address4,
    cafe_id,
    cafe_name,
    closetime,
    distance,
    file_path,
    img_file,
    insta_account,
    latitude,
    longitude,
    opentime,
    parking,
    pet,
    user_id,
    like_count,
  } = cafeInfo
  const profile = `https://storage.googleapis.com/bitcamp-caffeine.appspot.com${file_path}${img_file
    .split(',')
    .at(-1)}`
  let distanceReformed = distance
  if (distanceReformed > 1000) {
    distanceReformed = `${
      Math.round((distanceReformed + Number.EPSILON) / 10) / 100
    }km`
  } else {
    distanceReformed = `${Math.round(distanceReformed)}m`
  }

  let address = ''
  if (address4 == '') {
    address = `${address1} ${address2} ${address3}`
  } else {
    address = `${address1} ${address2} ${address3}
               ${address4}`
  }

  return (
    <div className='pt-10'>
      <Carousel data={cafeInfo} />
      <div
        id="cafe_profile"
        className="flex flex-col items-center px-5 md:pb-6"
      >
        <div id="head" className="flex flex-row border-b pt-6 pb-4">
          <div className="flex flex-col">
            <div id="profile_img" className="relative pr-6">
              <img
                src={profile}
                alt="user avatar"
                className="h-20 w-20 rounded-full bg-contain bg-center outline outline-1 outline-gray-300"
              ></img>
              <button className="absolute left-14 top-0.5 rounded-full bg-orange-600 px-1 py-1 text-[11px] text-white">
                {like_count}
              </button>
            </div>
            <div className="mt-2">
              <p className="text-[0.85rem]">당신과의 거리</p>
              <p className="mt-1 w-[4.8rem] bg-gradient-to-r from-pink-600 to-[#F0A202] text-center text-lg text-white">
                {distanceReformed}
              </p>
            </div>
          </div>
          <div className="flex flex-col" id="profile_info">
            <p className="text-lg font-semibold">{cafe_name}</p>
            <p className="pt-1 text-[0.85rem] text-gray-500">{address}</p>
            <p className=" text-[0.85rem] text-gray-500">@{insta_account}</p>
            <div className="h-[6.25rem] overflow-y-scroll text-sm">
              <p className="mt-2 w-[14rem] overflow-hidden text-ellipsis whitespace-pre-wrap">
                {about}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row pt-3 pb-6 lg:pb-0">
          <div className="temp_index -ml-5 px-7">
            <p className="font-medium tracking-widest">온도지수</p>
            <div className="flex flex-row">
              <TempIndexIcon />
              <p className="text-2xl font-bold text-[#F24E1E]">87°</p>
            </div>
          </div>
          <div className="text-left">
            <p className="font-medium tracking-widest">한줄리뷰</p>
            <p className="pt-1 font-medium text-[#F24E1E]">
              아기자기한 소품 구경하기 좋아요!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CafeInfo
