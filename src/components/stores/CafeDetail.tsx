// @ts-nocheck
import { Link, useParams } from "react-router-dom";
import Carousel from "./Carousel";
import { ReactComponent as XIcon } from './x-svgrepo-com.svg';
import { useQuery } from "react-query";
import {listAllMybatis} from '../../store/api'
const CafeDetail = () => {
  
  const { cafename } = useParams();
  const {data,status,isFetching,isLoading,isSuccess} = useQuery(
    'listAllMybatis',
    listAllMybatis
  )
  const cafedata = data?.data.filter((item) => item.cafe_name === cafename)
  return(
    <div className="lg:flex lg:flex-col lg:basis-2/5 basis-full h-128">
      
        <div>
          <Link to='/store'>
            <button className="mt-3">
              <XIcon/>
            </button>
          </Link>
        </div>

        <div className="w-full lg:w-[28rem]">
          <div className="pb-5 text-center">
            <h1 className='text-lg text-bold pr-7'></h1>
              <p>
                <span></span>
                <span></span>
                <span></span>
              </p>
            <button className='ml-4 border-green-800 border-2 rounded-full text-green-800 w-40 text-center h-8' type="submit">Get Location</button>
          </div>
          
          <div className="pt-2 -ml-5 text-center">
            <h3 className="text-base text-bold px-4 bg-gray-300">PICTURE</h3>
            <div className="px-4 pt-4 pb-5">
              {
                isSuccess && <Carousel data = {cafedata}/>}
            </div>
          </div>
          
          <div className="pt-2 -ml-5 text-center">
            <h3 className="text-base text-bold px-4 bg-gray-300">COMMENT</h3>
              <div className="px-4 pt-4 pb-5">
              <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
                  <img className="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/third_user.webp" alt="user avatar" height="220" width="220" loading="lazy" />
                  <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                    <p className="text-gray-600">
                      <span className="font-serif">"</span>
                        카페 소개글 작성란입니다. 아직 데이터 연동 안되어있습니당.
                        {
                        isSuccess &&  cafedata.map((item) => {
                            return <span key={item.cafe_id}>{item.about}</span>
                          })
                        }
                      <span className="font-serif">"</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-base text-bold px-4 bg-gray-300">REVIEW</h3>
            <div className="px-4 pt-4 pb-5">
              <p></p>
            </div>
          </div>
        </div>
    </div>
  );
};
export default CafeDetail;