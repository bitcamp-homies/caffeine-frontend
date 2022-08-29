// @ts-nocheck
import Carousel from 'components/stores/Carousel'
import TempIndexIcon from 'components/resources/TempIndexIcon'
import { getDownloadURL, getStorage, ref } from 'firebase/storage'
import { async } from '@firebase/util'

const CafeInfo = ({ cafeInfo }) => {
  return (
    <>
      <div className="h-96 w-full bg-zinc-900 bg-contain bg-center bg-no-repeat">
        {cafeInfo !== '' && <Carousel data={cafeInfo} />}
      </div>
      <div
        id="cafe_profile"
        className="flex flex-col items-center px-5 md:pb-6"
      >
        <div id="head" className="flex flex-row border-b pt-10 pb-4">
          {cafeInfo.map((item) => {
            const profile = `https://storage.googleapis.com/bitcamp-caffeine.appspot.com${item.file_path}${item.img_file.split(',').at(-1)}`
            const text = item.about
            return (
              <>
                <div>
                  <div id="profile_img" className="relative pr-6">
                    <img
                      src={profile}
                      alt="user avatar"
                      className="h-20 w-20 rounded-full bg-contain bg-center outline outline-1 outline-gray-300"
                    ></img>
                    <button className="absolute left-14 top-0.5 rounded-full bg-orange-600 px-1 pt-2 pb-1 font-gMarketLight text-[11px] text-white">
                      385
                    </button>
                  </div>
                </div>
                <div className="flex flex-col" id="profile_info">
                  <p className="text-lg font-semibold">{item.cafe_name}</p>
                  <p className="pt-1 text-sm text-gray-500">
                    {item.address1} {item.address2} {item.address3}{' '}
                    {item.address4}
                  </p>
                  <p className="pt-1 text-sm text-gray-500">
                    @{item.insta_account}
                  </p>
                  <div className="h-[8rem] text-sm overflow-y-scroll">
                    <p className="mt-2 max-w-[17rem] whitespace-pre-wrap">
                      { text}
                    </p>
                  </div>
                </div>
              </>
            )
          })}
        </div>
        <div className="flex flex-row pt-3 mb-5">
          <div className="temp_index  px-6">
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
    </>
  )
}
export default CafeInfo
