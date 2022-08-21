// @ts-nocheck
import { Link, useParams } from 'react-router-dom'
import Carousel from './Carousel'
import { useQuery } from 'react-query'
import { listAllMybatis } from '../../store/api'
import { ReactComponent as XIcon } from './svg/x-svgrepo-com.svg'

const CafeDetail = () => {
  const { cafename } = useParams()
  const { data, status, isFetching, isLoading, isSuccess } = useQuery(
    'listAllMybatis',
    listAllMybatis,
  )
  const cafedata = data?.data.filter((item) => item.cafe_name === cafename)

  return (
    <div className="h-128 basis-full lg:flex lg:basis-2/5 lg:flex-col">
      <div className="w-full lg:w-[28rem] px-4">
        <Link to="/store">
          <button className="mt-3">
            <XIcon />
          </button>
        </Link>
        <div className="pt-2 pb-5 text-center">
          {isSuccess && <Carousel data={cafedata} />}
        </div>

        <div className="pt-2 text-center">
          <h3 className="text-bold bg-gray-300 px-4 text-base">COMMENT</h3>
          <div className="pr-2.5 pt-4 pb-5">
            <div className="container m-auto px-8 text-gray-600 md:px-12 xl:px-6">
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-6 sm:flex sm:space-x-8 sm:p-2">
                {isSuccess &&
                  cafedata.map((item) => {
                    const profile =
                      'https://storage.cloud.google.com/bitcamp-caffeine.appspot.com' +
                      item.file_path +
                      item.img_file.split(',').splice(-1, 1)
                    return (
                      <img
                        key={item.cafe_id}
                        className="mx-auto h-20 w-20 rounded-full"
                        src={profile}
                        alt="user avatar"
                        height="220"
                        width="220"
                        loading="lazy"
                      />
                    )
                  })}
                <div className="mt-4 space-y-4 text-center sm:mt-0 sm:text-left">
                  <p className="text-gray-600">
                    <span className="font-serif">"</span>
                    {isSuccess &&
                      cafedata.map((item) => {
                        return <span key={item.cafe_id}>{item.about}</span>
                      })}
                    <span className="font-serif">"</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-bold bg-gray-300 px-4 text-base">REVIEW</h3>
          <div className="px-4 pt-4 pb-5">
            <p></p>
          </div>

          <div className="pb-5 text-center">
            <h1 className="text-bold pr-7 text-lg"></h1>
            <p>
              <span></span>
              <span></span>
              <span></span>
            </p>
            <button
              className="ml-4 h-8 w-40 rounded-full border-2 border-green-800 text-center text-green-800"
              type="submit"
            >
              Get Location
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CafeDetail
